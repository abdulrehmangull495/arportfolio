import { useState } from "react";

import "./index.css";
function App() {
  return (
    <>
      <main className="main-container">
        {/* sidebar */}
        <aside className="sidebar">
          <div className="profile">

            <img src="abdul rehman.png" alt="Abdul Rehman" width="100" height="100" style={{ objectFit: 'cover' }} />


            <h2>Abdul Rehman Gull</h2>
            <p>Frontend Developer</p>

            <div className="downloadresume">
              <a href="/Abdul-Rehman Gull-FrontendDeveloper-Resume.pdf" target="_blank" className="cv">
                Download Resume</a>
            </div>
          </div>

          <div className="contact">
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
          </div>
          <div className="social">
            <h3 className="contactme">Contact me</h3>
            <a href="https://www.facebook.com/profile.php?id=100028939350475"
              target="_blank"  aria-label="Facebook profile" >
              
              <img src="facebook.svg" alt="facebook" width={"100px"} height={"100px"}  />
            </a>

            <a href="https://www.linkedin.com/in/abdul-rehman-gull-1802b0246"
              target="_blank"  aria-label="Whatsapp profile">
              <img
                src="https://www.svgrepo.com/show/204944/linkedin.svg"
                alt="linkedin"  aria-label="linkedin profile"
                width={"100px"} height={"100px"}/>
            </a>
            <a href="https://wa.me/923141458867" target="_blank">
              <img src="what.png" alt="whatsapp"   width={"100px"} height={"100px"} />
            </a>
          </div>
        </aside>
        {/*  main content */}
        <div className="main-content">
          {/* navigation */}
          <div id="navigation">
            <nav>
              <a href="#about" className="active">
                About
              </a>
              <a href="#skills">Skills</a>
              <a href="#education">Education</a>
              <a href="#portfolio">Portfolio</a>
            </nav>
          </div>
          {/* about me */}
          <div id="about">
            <h2 className="headingabout">About Me</h2>
            <div className="line"></div>
            <p className="content">
              Frontend Developer with 6 months of experience building responsive web interfaces using Reactjs, JavaScript, HTML5 and CSS3.
               Skilled in Tailwind CSS and Bootstrap 5. BSCS graduate who focuses 
              on building maintainable UI and solving common frontend challenges like performance and messy code.
            </p>
          </div>
          {/* skills */}
          <div id="skills"></div>
          <h2 className="headingskills">Skills</h2>
          <div className="line"></div>
          <div className="grid-container">
            <div className="item">
              <img src="https://simpleicons.org/icons/html5.svg" alt="HTML5"  width={"100px"} height={"100px"} />
              <h3>HTML5</h3>
            </div>
            <div className="item">
              <img src="https://simpleicons.org/icons/css.svg" alt="CSS3"  width={"100px"} height={"100px"} />
              <h3>CSS3</h3>
            </div>
            <div className="item">
              <img
                src="https://simpleicons.org/icons/javascript.svg"
                alt="JavaScript"  width={"100px"} height={"100px"}
              />
              <h3>JavaScript</h3>
            </div>
            <div className="item">
              <img
                src="https://simpleicons.org/icons/bootstrap.svg"
                alt="Bootstrap5"  width={"100px"} height={"100px"}
              />
              <h3>Bootstrap5</h3>
            </div>
            <div className="item">
              <img
                src="https://simpleicons.org/icons/tailwindcss.svg"
                alt="Tailwindcss"  width={"100px"} height={"100px"}
              />
              <h3>Tailwind CSS</h3>
            </div>
            <div className="item">
              <img
                src="https://simpleicons.org/icons/react.svg"
                alt="Reactjs"  width={"100px"} height={"100px"}
              />
              <h3>Reactjs</h3>
            </div>
          </div>
          
          {/* portfolio */}
          <div id="portfolio">
            <h1 className="headingportfolio">Portfolio</h1>
            <div className="line"></div>
            <div className="project-container">
              <div className="project">
                <a
                  href="https://brarchitectslandingpage.surge.sh/"
                  target="_blank">
                  <img src="brarch.png" alt="brarchitects" width={"100px"} height={"100px"} />
                </a>
                <div className="card">
                  <h3>BR Architecture</h3>
                  <p>
                    Designed and developed a responsive BR Architecture landing page using HTML5,
                    CSS3 and Bootstrap 5 with a clean UI across devices.
                  </p>
                  <span>Html5</span>
                  <span>Css3</span>
                  <span>Bootstrap5</span>
                </div>
              </div>
               <div className="project">
                <a href="https://adsliticsdash.vercel.app/" target="_blank">
                  <img className="ads" src="adsl.png" alt="adsliticsdashboard" width={"100px"} height={"100px"} />
                </a>
                <div className="card">
                  <h3>Adslitics Dashboard</h3>
                  <p>
                    Designed and developed a responsive React.js dashboard with a clean interface and optimized mobile usability.
                  </p>
                  <span>React.js</span>
                  <span>Css3</span>
                  <span>Bootstrap5</span>
                </div>
              </div>
              <div className="project">
                <a href="https://kitemens.surge.sh/" target="_blank" >
                  <img src="Screenshot 2025-09-24 155923.png" alt="kitmens" width={"100px"} height={"100px"} />
                </a>

                <div className="card">
                  <h3>Kitemens Landing Page</h3>
                  <p>
                Built a fully responsive Kitemens landing page 
                using HTML5, CSS3 and Bootstrap 5 focusing on modern layout and mobile-friendly design.
                  </p>
                  <span>Html5</span>
                  <span>Css3</span>
                  <span>Bootstrap5</span>
                </div>
              </div>
             
              
              <div className="project">
                <a href="https://coffeenest.surge.sh/" target="_blank">
                  <img className="coffee" src="coffee.png" alt="coffee" width={"100px"} height={"100px"} />
                </a>
                <div className="card">
                  <h3>Coffee Nest</h3>
                  <p>
                    I built a fully responsive 3 page website using HTML5, CSS3
                    and Bootstrap5 with a clean UI and smooth experience on all
                    screen sizes.
                  </p>
                  <span>Html5</span>
                  <span>Css3</span>
                  <span>Bootstrap5</span>
                </div>
              </div>

              
              
              <div className="project">
                <a href="https://inkomoko.surge.sh/" target="_blank">
                  <img className="ads" src="inkomoko.png" alt="inkomoko" width={"100px"} height={"100px"}/>
                </a>
                <div className="card">
                  <h3>Inkomoko Dashboard</h3>
                  <p>
                    Create a fully responsive inkomoko dashboard using
                    HTML5,CSS3 and Bootstrap5.
                  </p>
                  <span>Html5</span>
                  <span>Css3</span>
                  <span>Bootstrap5</span>
                </div>
              </div>
            </div>
          </div>
          {/* education */}
          <div id="education">
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
          </div>
        </div>
        
      </main>
    </>
  );
}

export default App;
