import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./index.css";

const particles = Array.from({ length: 25 });

const Intro = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="intro"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: "blur(6px)",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
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
                  y: 20,
                }}
                animate={{
                  opacity: [0, 0.7, 0],
                  y: -100,
                }}
                transition={{
                  duration: 2.5,
                  delay: index * 0.05,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                style={{
                  left: `${(index * 37) % 100}%`,
                  top: `${(index * 23) % 100}%`,
                }}
              />
            ))}
          </div>

          <div className="introContent">

            {/* Welcome */}
            <motion.div
              className="welcome"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
              }}
            >
              <span className="welcomeLine"></span>

              Welcome to my portfolio

              <span className="welcomeLine"></span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="introName"
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.65,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              I'm Abdul Rehman Gull
            </motion.h1>

            {/* Line */}
            <div className="animatedLine">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 0.9,
                  delay: 0.65,
                  ease: "easeOut",
                }}
              />
            </div>

            {/* Role */}
            <motion.h2
              className="role"
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(5px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.55,
                delay: 0.8,
              }}
            >
              Frontend Developer
            </motion.h2>

            {/* Status */}
            <motion.div
              className="status"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.15,
                duration: 0.5,
              }}
            >
              <span className="statusDot"></span>
              Building fast & responsive websites
            </motion.div>

            {/* Circles */}
            <motion.div
              className="circle circleOne"
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="circle circleTwo"
              animate={{ rotate: -360 }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
            />

          </div>

          {/* Progress */}
          <div className="progressContainer">
            <motion.div
              className="progress"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2.8,
                ease: "linear",
              }}
            />
          </div>

          <div className="cornerText topLeft">
            AR / 01
          </div>

          <div className="cornerText topRight">
            PORTFOLIO
          </div>

          <div className="cornerText bottomLeft">
            FRONTEND
          </div>

          <div className="cornerText bottomRight">
            2026
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;