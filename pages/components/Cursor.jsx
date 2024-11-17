import { useEffect, useRef } from "react";
import useMousePosition from "../../utils/useMousePosition";

const Cursor = () => {
  const mousePosition = useMousePosition();
  const cursorRef = useRef(null);
  const circlesRef = useRef([]);

  useEffect(() => {
    const circles = Array.from({ length: 20 }, () => {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circle.style.backgroundColor = "white";
      document.body.appendChild(circle);
      circle.x = 0;
      circle.y = 0;
      return circle;
    });

    circlesRef.current = circles;

    const animateCircles = () => {
      const x = mousePosition.x;
      const y = mousePosition.y;

      if (!x || !y) return;

      if (cursorRef.current) {
        cursorRef.current.style.left = x + "px";
        cursorRef.current.style.top = y + "px";
      }

      let currentX = x;
      let currentY = y;

      circles.forEach((circle, index) => {
        circle.style.left = currentX - 13 + "px";
        circle.style.top = currentY - 13 + "px";
        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = currentX;
        circle.y = currentY;

        const nextCircle = circles[index + 1] || circles[0];
        currentX += (nextCircle.x - currentX) * 0.3;
        currentY += (nextCircle.y - currentY) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    const animation = requestAnimationFrame(animateCircles);

    return () => {
      cancelAnimationFrame(animation);
      circles.forEach((circle) => document.body.removeChild(circle));
    };
  }, [mousePosition]);

  return (
    <div
      ref={cursorRef}
      className="cursor"
      style={{ backgroundColor: "white" }}
    />
  );
};

export default Cursor;
