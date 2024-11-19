import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Image from "next/image";
const Home = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 30000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const galaxyRadius = 25;
    const arms = 5;
    const spin = 1;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = Math.random() * galaxyRadius;
      const spinAngle = radius * spin;
      const branchAngle = ((i % arms) / arms) * Math.PI * 2;

      const randomX =
        Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3;
      const randomY =
        Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3;
      const randomZ =
        Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * 0.3;

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      // Color
      const mixedColor = new THREE.Color();
      const insideColor = new THREE.Color("#00076f");
      const outsideColor = new THREE.Color("#91d1ea");

      mixedColor.lerpColors(insideColor, outsideColor, radius / galaxyRadius);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      sizeAttenuation: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
      alphaTest: 0.01,
    });

    const galaxy = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(galaxy);

    // Camera position
    camera.position.z = 30;
    camera.position.y = window.innerWidth <= 760 ? 18 : 16; // Adjust camera position for mobile
    camera.position.x = 10;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.enableZoom = false; // Disable mouse wheel zoom

    // Disable controls for mobile
    if (window.innerWidth <= 768) {
      controls.enabled = false;
    } else {
      controls.mouseButtons = {
        LEFT: THREE.MOUSE.ROTATE,
        MIDDLE: null,
        RIGHT: null,
      };
    }

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      galaxy.rotation.y += 0.001;
      controls.update();
      renderer.render(scene, camera);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      // Update camera position on resize
      camera.position.y = window.innerWidth <= 768 ? 18 : 13;
      // Update controls based on screen size
      if (window.innerWidth <= 768) {
        controls.enabled = false;
      } else {
        controls.enabled = true;
      }
    };

    window.addEventListener("resize", handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      scene.remove(galaxy);
    };
  }, []);

  return (
    <>
      <div className="relative h-[104vh] sm:h-screen bg-black flex items-center justify-center overflow-hidden">
        <div ref={mountRef} className="absolute left-0 md:left-[25%]" />
        <div className="absolute w-full md:w-1/2 px-6 md:px-0 md:left-0 flex items-center justify-center z-10 md:pl-20 mt-40 md:mt-0">
          <div className="flex flex-col items-center md:items-start justify-center h-full my-20 md:my-52">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-white mb-6 md:mb-8 text-center md:text-left font-[Montserrat]">
              We are
              <Image
                src="/assets/logo/logo.png"
                alt="Noxalgo"
                width={400}
                height={400}
                className="mx-auto md:mx-0 md:ml-4 object-cover"
              />
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 max-w-2xl text-center md:text-left px-4 md:px-0">
              &quot;Empowering Brands, Igniting Innovation, Shaping
              Destiny&quot;
            </p>
          </div>
        </div>
        <Image
          src="/images/stamp.png"
          alt="Stamp"
          width={150}
          height={150}
          className="absolute z-50  right-[20%] top-50 animate-spin"
          style={{ animation: "spin 10s linear infinite" }}
        />
      </div>
    </>
  );
};

export default Home;
