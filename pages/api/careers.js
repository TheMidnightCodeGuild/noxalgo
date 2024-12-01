import nodemailer from "nodemailer";
import connectToDatabase from "@/lib/mongoose";
import Career from "@/models/Career";
import formidable from "formidable";
import { promises as fs } from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    await connectToDatabase();

    // Ensure uploads directory exists
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    try {
      await fs.access(uploadDir);
    } catch {
      await fs.mkdir(uploadDir, { recursive: true });
    }

    const form = formidable({
      uploadDir,
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB limit
      filter: function({name, originalFilename, mimetype}) {
        // Only allow pdf, doc, docx files
        return mimetype && ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(mimetype);
      }
    });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    // Validate required fields
    const requiredFields = ['name', 'email', 'position', 'coverLetter'];
    for (const field of requiredFields) {
      if (!fields[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    // Extract first value from array fields
    const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
    const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
    const position = Array.isArray(fields.position) ? fields.position[0] : fields.position;
    const coverLetter = Array.isArray(fields.coverLetter) ? fields.coverLetter[0] : fields.coverLetter;

    if (!files.resume) {
      return res.status(400).json({ error: "Resume file is required" });
    }

    const resumeFile = Array.isArray(files.resume) ? files.resume[0] : files.resume;
    const resumePath = resumeFile.filepath;

    // Save to database
    const newCareer = new Career({
      name,
      email, 
      position,
      coverLetter,
      resume: path.basename(resumePath) // Only store filename
    });
    await newCareer.save();

    // Set up email notification
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: "business@noxalgo.com", 
      subject: `New Career Application from ${name}!`,
      text: `You have received a new career application.\n\nName: ${name}\nEmail: ${email}\nPosition: ${position}\nCover Letter: ${coverLetter}`,
      attachments: [{
        filename: path.basename(resumePath),
        path: resumePath
      }]
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Application submitted successfully!' });

  } catch (error) {
    console.error("Error:", error);
    // Clean up any uploaded files in case of error
    if (error.filepath) {
      try {
        await fs.unlink(error.filepath);
      } catch (unlinkError) {
        console.error("Error deleting file:", unlinkError);
      }
    }
    res.status(500).json({ error: "Server error", details: error.message });
  }
}