import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./index.css";

const particles = Array.from({ length: 35 });

const Intro = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showIntro && (
        <motion.div
          className="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background glow */}
          <div className="glow glowOne"></div>
          <div className="glow glowTwo"></div>

          {/* Particles */}
          <div className="particles">
            {particles.map((_, index) => (
              <motion.span
                key={index}
                className="particle"
                initial={{
                  opacity: 0,
                  y: 30,
                  x: 0,
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  y: -120,
                  x: Math.sin(index) * 60,
                }}
                transition={{
                  duration: 3 + (index % 3),
                  delay: index * 0.08,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                style={{
                  left: `${(index * 29) % 100}%`,
                  top: `${(index * 17) % 100}%`,
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="introContent">

            {/* Small top text */}
            <motion.div
              className="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <span className="welcomeLine"></span>
              Welcome to my portfolio
              <span className="welcomeLine"></span>
            </motion.div>

            {/* Name */}
            <div className="nameWrapper">
              {"I'm Abdul Rehman Gull".split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="nameLetter"
                  initial={{
                    opacity: 0,
                    y: 60,
                    rotateX: 90,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.7 + index * 0.045,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            {/* Line */}
            <div className="animatedLine">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.5,
                  delay: 1.7,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Role */}
            <motion.div
              className="role"
              initial={{
                opacity: 0,
                y: 30,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1,
                delay: 2,
                ease: "easeOut",
              }}
            >
              <span>Frontend Developer</span>
            </motion.div>

            {/* Bottom status */}
            <motion.div
              className="status"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 2.8,
                duration: 0.8,
              }}
            >
              <span className="statusDot"></span>
              Creating digital experiences
            </motion.div>

            {/* Rotating circle */}
            <motion.div
              className="circle circleOne"
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="circle circleTwo"
              animate={{ rotate: -360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            />

          </div>

          {/* Bottom progress */}
          <div className="progressContainer">
            <motion.div
              className="progress"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 4,
                ease: "linear",
              }}
            />
          </div>

          {/* Corner text */}
          <div className="cornerText topLeft">AR / 01</div>
          <div className="cornerText topRight">PORTFOLIO</div>
          <div className="cornerText bottomLeft">FRONTEND</div>
          <div className="cornerText bottomRight">2026</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;