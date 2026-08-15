import { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <>
      <main className="main-container">
        {/* sidebar */}
        <motion.aside
          className="sidebar"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.div
            className="profile"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="abdul rehman.png"
              alt="Abdul Rehman"
              width="100"
              height="100"
              style={{ objectFit: "cover" }}
            />

            <h2>Abdul Rehman Gull</h2>
            <p>Frontend Developer</p>

            <div className="downloadresume">
              <a
                href="/Abdul Rehman Gull Frontend Developer Resume.pdf"
                target="_blank"
                className="cv"
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
          >
            <div className="mail">
              <h2 className="label">Email</h2>
              <a className="value" href="mailto:abdulrehmangull495@gmail.com">
                abdulrehmangull495@gmail.com
              </a>
            </div>
            <div className="phone">
              <h2 className="label">Phone</h2>
              <a className="value" href="tel:03141458867">
                03141458867
              </a>
            </div>
            <div className="location">
              <h2 className="label">Location</h2>

              <p className="value">Faisalabad.</p>
            </div>
          </motion.div>
          <motion.div
            className="social"
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.65, 0, 0.35, 1] }}>
            <h3 className="contactme">Contact me</h3>
            <a
              href="https://www.facebook.com/profile.php?id=100028939350475"
              target="_blank"
              aria-label="Facebook profile">
              <img src="facebook.svg" alt="facebook" />
            </a>

            <a
              href="https://www.linkedin.com/in/abdul-rehman-gull-1802b0246"
              target="_blank"
              aria-label="Whatsapp profile">
              <img
                src="https://www.svgrepo.com/show/204944/linkedin.svg"
                alt="linkedin"
                aria-label="linkedin profile"
              />
            </a>
            <a href="https://wa.me/923141458867" target="_blank">
              <img src="what.png" alt="whatsapp" />
            </a>
          </motion.div>
        </motion.aside>
        {/*  main content */}
        <div className="main-content">
          {/* navigation */}

          <motion.div
            id="navigation"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}>
            <nav>
              <a href="#about" className="active">
                About
              </a>
              <a href="#skills">Skills</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#education">Education</a>
            </nav>
          </motion.div>
          {/* about me */}
          <motion.div
            id="about"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}>
            <h2 className="headingabout">About Me</h2>
            <div className="line"></div>
            <p className="content">
              Frontend Developer with 6+ months of experience building
              responsive and modern user interfaces using React.js and
              JavaScript. Skilled in HTML5, CSS3, Tailwind CSS and Bootstrap5
              with hands-on experience developing reusable components and
              mobile-first designs. Passionate about building clean, scalable
              and user-friendly web applications.
            </p>
          </motion.div>
          {/* skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}>
            <div id="skills"></div>
            <h2 className="headingskills">Skills</h2>
            <div className="line"></div>
            <div className="grid-container">
              <motion.div className="item"
              initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img
                  src="https://simpleicons.org/icons/html5.svg"
                  alt="HTML5"
                  width={"100px"}
                  height={"100px"}
                />
                <h3>HTML5</h3>
              </motion.div>
              <motion.div className="item"
              initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.8 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img
                  src="https://simpleicons.org/icons/css.svg"
                  alt="CSS3"
                  width={"100px"}
                  height={"100px"}/>
                <h3>CSS3</h3>
              </motion.div>
              <motion.div className="item"
              initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.14 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img
                  src="https://simpleicons.org/icons/javascript.svg"
                  alt="JavaScript"
                  width={"100px"}
                  height={"100px"}
                />
                <h3>JavaScript</h3>
              </motion.div>
              <motion.div className="item"
              initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 0.6, ease: "easeOut" }} >
                <img
                  src="https://simpleicons.org/icons/tailwindcss.svg"
                  alt="Tailwindcss"
                  width={"100px"}
                  height={"100px"}/>
                <h3>Tailwind CSS</h3>
              </motion.div>
              <motion.div className="item"
              initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.18 }}
  transition={{ duration: 0.6, ease: "easeOut" }}>
                <img
                  src="https://simpleicons.org/icons/bootstrap.svg"
                  alt="Bootstrap5"
                  width={"100px"}
                  height={"100px"}
                />
                <h3>Bootstrap5</h3>
              </motion.div>

              <motion.div className="item"
              initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.23 }}
  transition={{ duration: 0.6, ease: "easeOut" }}>
                <img
                  src="https://simpleicons.org/icons/react.svg"
                  alt="Reactjs"
                  width={"100px"}
                  height={"100px"}/>
                <h3>Reactjs</h3>
              </motion.div>
            </div>
          </motion.div>
          {/* Certifications */}
          <motion.div
            id="portfolio">
            <motion.h1 className="headingportfolio"
            initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
            >Portfolio</motion.h1>
            <div className="line"></div>
            <div className="project-container">
              <motion.div className="project"
              initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }} >
                <a href="https://arecom.vercel.app" target="_blank">
                  <img
                    className="ads"
                    src="hero section.png"
                    alt="arecom"
                    width={"100px"}
                    height={"100px"}/>
                </a>
                <div className="card">
                  <h3>Arecom | React.js E Commerce Frontend</h3>
                  <p>
                    Built a responsive e commerce frontend using React.js,
                    HTML5, CSS3, and JavaScript. Implemented product listing,
                    search functionality, dark mode, reusable React components,
                    and React Router for seamless navigation.
                  </p>
                  <span>React.js</span>
                  <span>JavaScript</span>
                  <span>Bootstrap 5</span>
                  <span>CSS3</span>
                </div>
              </motion.div>
              <motion.div className="project"
                  initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <a href="https://apex-school-ten.vercel.app/" target="_blank">
                  <img
                    className="ads"
                    src="apexbuilding.png"
                    alt="schoolmanagemant"
                    width={"100px"}
                    height={"100px"}
                  />
                </a>
                <div className="card">
                  <h3>Apex School Management</h3>
                  <p>
                    A responsive school management website built with React.js
                    and CSS3, featuring admission page, about section and a
                    mobile friendly layout with smooth navigation.
                  </p>
                  <span>React.js</span>
                  <span>CSS3</span>
                </div>
              </motion.div>
              <motion.div className="project"
                  initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.13}}
      transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <a href="https://adsliticsdash.vercel.app/" target="_blank">
                  <img
                    className="ads"
                    src="adsl.png"
                    alt="adsliticsdashboard"
                    width={"100px"}
                    height={"100px"}
                  />
                </a>
                <div className="card">
                  <h3>Adslitics Dashboard</h3>
                  <p>
                    Developed a responsive React.js dashboard featuring reusable
                    components, a clean user interface and an optimized layout
                    for seamless mobile and desktop experiences.
                  </p>
                  <span>React.js</span>
                  <span>Css3</span>
                  <span>Bootstrap5</span>
                </div>
              </motion.div>

              <motion.div className="project"
                  initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <a href="https://brarchitct.surge.sh/" target="_blank">
                  <img
                    src="brarch.png"
                    alt="brarchitects"
                    width={"100px"}
                    height={"100px"}
                  />
                </a>
                <div className="card">
                  <h3>BR Architecture</h3>
                  <p>
                    Built a fully responsive architecture landing page using
                    HTML5, CSS3 & Bootstrap 5 with a modern layout and smooth
                    user experience across all devices.
                  </p>
                  <span>Html5</span>
                  <span>Css3</span>
                  <span>Bootstrap5</span>
                </div>
              </motion.div>
              <motion.div className="project"
                  initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <a href="https://kitemens.surge.sh/" target="_blank">
                  <img
                    src="Screenshot 2025-09-24 155923.png"
                    alt="kitmens"
                    width={"100px"}
                    height={"100px"}
                  />
                </a>

                <div className="card">
                  <h3>Kitemens Landing Page</h3>
                  <p>
                    Developed a fully responsive landing page using HTML5, CSS3
                    and Bootstrap 5 with a modern layout and mobile friendly
                    design.
                  </p>
                  <span>Html5</span>
                  <span>Css3</span>
                  <span>Bootstrap5</span>
                </div>
              </motion.div>

              <motion.div className="project"
                  initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <a href="https://coffeenest.surge.sh/" target="_blank">
                  <img
                    className="coffee"
                    src="coffee.png"
                    alt="coffee"
                    width={"100px"}
                    height={"100px"}
                  />
                </a>
                <div className="card">
                  <h3>Coffee Nest</h3>
                  <p>
                    Built a responsive multi page website using HTML5, CSS3 and
                    Bootstrap 5 with a clean UI and smooth navigation across all
                    screen sizes.
                  </p>
                  <span>Html5</span>
                  <span>Css3</span>
                  <span>Bootstrap5</span>
                </div>
              </motion.div>

              <motion.div className="project"
                  initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.26 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <a href="https://inkomoko.surge.sh/" target="_blank">
                  <img
                    className="ads"
                    src="inkomoko.png"
                    alt="inkomoko"
                    width={"100px"}
                    height={"100px"}
                  />
                </a>
                <div className="card">
                  <h3>Inkomoko Dashboard</h3>
                  <p>
                    Developed a responsive dashboard using HTML5, CSS3 and
                    Bootstrap 5 with well structured components and consistent
                    performance across all devices.
                  </p>
                  <span>Html5</span>
                  <span>Css3</span>
                  <span>Bootstrap5</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div id="portfolio"
          initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.30 }}
  transition={{ duration: 0.6, ease: "easeOut" }}

          >
            <h1 className="headingportfolio">Certification</h1>
            <div className="line"></div>
            <div className="project-container">
              <div className="project">
                {/* <a
                  href="https://apex-school-ten.vercel.app/"
                  target="_blank">
                 
                </a> */}
                <img
                  className="ads"
                  src="/Reactjs certification.png"
                  alt="schoolmanagemant"
                  width={"70px"}
                  height={"70px"}
                />
                <div className="card">
                  <h3>Reactjs Certification</h3>
                  <p>
                    React.js Certificate of Completion W3Schools· Issued June
                    2024 Passed W3Schools' React exams and earned the Certified
                    React Developer credential, demonstrating fundamental
                    knowledge of web development using the React Framework.
                  </p>
                  <span>React.js</span>
                </div>
              </div>
            </div>
          </motion.div>
          {/* education */}
          <motion.div id="education"
          initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, ease: "easeOut" }}

          >
            <h2 className="headingeducation">Education</h2>
            <div className="line"></div>

            <div className="edtech">
              <div className="edfirst">
                <div className="year">2019-2023</div>
                <h3 className="degree">Bachelors in Computer Science</h3>
                <p className="college">
                  Government Postgraduate College Of Science Faisalabad.
                </p>
                <p className="work">
                  Focused on Web Development during my studies, especially using
                  WordPress for building and managing websites.
                </p>
                <div className="goal"></div>
              </div>

              <div className="liner"></div>
            </div>
          </motion.div>
        </div>
        <ScrollToTop />
      </main>
    </>
  );
}

export default App;
