import { useState } from "react";

import "./index.css";
function App() {
  return (
    <>
      <div className="main-container">
        {/* sidebar */}
        <div className="sidebar">
          <div className="profile">
            <img src="abdul rehman.png" alt="" width={"100px"} />

            <h2>Abdul Rehman Gull</h2>
            <p>Frontend Developer</p>

            <div>
              <a href="Abdul-Rehman-Gull.pdf" target="_blank" className="cv">
                Download CV
              </a>
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
              {/* <a href="loc:gulistancolonyno1fsd">gulistancolonyno1fsd</a> */}
              <p className="value">Faisalabad</p>
            </div>
          </div>
          <div className="social">
            <h4 className="contactme">Contact me</h4>
            <a
              href="https://www.facebook.com/profile.php?id=100028939350475"
              target="_blank"
            >
              {/* <img src="/assets/facebook.svg"  alt=""> */}
              <img src="facebook.svg" alt="" width={"100px"} />
            </a>

            <a
              href="https://www.linkedin.com/in/abdul-rehman-gull-1802b0246"
              target="_blank"
            >
              <img
                src="https://www.svgrepo.com/show/204944/linkedin.svg"
                alt=""
                width={"100px"}
              />
            </a>
            <a href="https://wa.me/923141458867" target="_blank">
              <img src="what.png" alt="" />
            </a>
          </div>
        </div>
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
              Frontend Developer with 6 months of experience, specializing in
              React.js and modern UI development. Skilled in React.js,
              JavaScript, HTML5, CSS3, Tailwind CSS and Bootstrap 5 with hands
              on experience building responsive and user-friendly interfaces.
              Focused on creating fast, maintainable UI and solving common
              frontend problems like performance issues and messy code.
            </p>
          </div>
          {/* skills */}
          <div id="skills"></div>
          <h2 className="headingskills">Skills</h2>
          <div className="line"></div>
          <div className="grid-container">
            <div className="item">
              <img src="https://simpleicons.org/icons/html5.svg" alt="HTML5" />
              <h3>HTML5</h3>
            </div>
            <div className="item">
              <img src="https://simpleicons.org/icons/css.svg" alt="CSS3" />
              <h3>CSS3</h3>
            </div>
            <div className="item">
              <img
                src="https://simpleicons.org/icons/javascript.svg"
                alt="JavaScript"
              />
              <h3>JavaScript</h3>
            </div>
            <div className="item">
              <img
                src="https://simpleicons.org/icons/bootstrap.svg"
                alt="Bootstrap5"
              />
              <h3>Bootstrap5</h3>
            </div>
            <div className="item">
              <img
                src="https://simpleicons.org/icons/tailwindcss.svg"
                alt="Tailwindcss"
              />
              <h3>Tailwindcss</h3>
            </div>
            <div className="item">
              <img
                src="https://simpleicons.org/icons/react.svg"
                alt="Reactjs"
              />
              <h3>Reactjs</h3>
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
                  Government Postgraduate College Of Science Faisalabad
                </p>
                <p className="work">
                  Focused on Web Development during my studies, especially using
                  WordPress for building and managing websites.
                </p>
                <div className="goal"></div>
              </div>

              {/* <div className="edsecond">
                <div className="year">2017-2019</div>
                <h3 className="degree">Fsc Pre Engineering</h3>
                <p className="college">
                  Workers Welfare Higher Secondary School Faisalabad
                </p>
                <p className="work">
                  Focused on Mathematics and Physics, which built a strong
                  foundation for my later studies in Computer Science and Web
                  Development.
                </p>
                <div className="goal"></div>
              </div> */}
              <div className="liner"></div>
            </div>
          </div>
          {/* portfolio */}
          <div id="portfolio">
            <h2 className="headingportfolio">Portfolio</h2>
            <div className="line"></div>
            <div className="project-container">
              {/* <div className="project">
                <a href="https://dev-pak-cart.pantheonsite.io/" target="_blank">
               
                  <img src="vege.png" alt="" />
                </a>
                <div className="card">
                  <h3>Ecommerce Website</h3>
                  <p>
                    I create fully functional and user-friendly eCommerce
                    websites using WordPress and WooCommerce.
                  </p>
                  <span>WordPress</span>
                  <span>Elementor</span>
              
                  <span>Astra</span>
                </div>
              </div> */}
              {/* <div className="project">
                <a href="https://dev-arecom.pantheonsite.io/" target="_blank">
                  <img src="ecom.png" alt="" />
                </a>
                <div className="card">
                  <h3>Ecommerce Website</h3>

                  <p>
                    I create fully functional and user-friendly eCommerce
                    websites using WordPress and WooCommerce.
                  </p>
                  <span>WordPress</span>
                  <span>Elementor</span>
                  
                  <span>Astra</span>
                </div>
              </div> */}
              <div className="project">
                <a href="https://kitemens.surge.sh/" target="_blank">
                  <img src="Screenshot 2025-09-24 155923.png" alt="" />
                </a>

                <div className="card">
                  <h3>Kitemens Landing Page</h3>
                  <p>
                    I have created a fully responsive Kitemens landing page
                    using HTML5,CSS3 and Bootstrap5.
                  </p>
                  <span>Html5</span>
                  <span>Css3</span>
                  <span>Bootstrap5</span>
                </div>
              </div>
              <div className="project">
                <a
                  href="https://brarchitectslandingpage.surge.sh/"
                  target="_blank"
                >
                  <img src="brarch.png" alt="" />
                </a>
                <div className="card">
                  <h3>BR Architecture</h3>
                  <p>
                    I have created a fully responsive BR Architecture landing
                    page using HTML5,CSS3 and Bootstrap5.
                  </p>
                  <span>Html5</span>
                  <span>Css3</span>
                  <span>Bootstrap5</span>
                </div>
              </div>
              <div className="project">
                <a href="https://coffeenest.surge.sh/" target="_blank">
                  <img className="coffee" src="coffee.png" alt="" />
                </a>
                <div className="card">
                  <h3>Coffee Nest</h3>
                  <p>
                    I built a fully responsive 3 page website using HTML, CSS
                    and Bootstrap with a clean UI and smooth experience on all
                    screen sizes.
                  </p>
                  <span>Html5</span>
                  <span>Css3</span>
                  <span>Bootstrap5</span>
                </div>
              </div>

              {/* <div className="project">
                <img src="quotes.png" alt="" />
                <div className="card">
                  <h3>Random Quotes Generator</h3>
                  <p>Random Quotes Generator using Html5,CSS3 & javascript.</p>
                  <span>Html5</span>
                  <span>Css3</span>
                  <span>Javascript</span>
                </div>
              </div> */}
              <div className="project">
                <a href="https://adsliticsdash.vercel.app/" target="_blank">
                  <img className="ads" src="adsl.png" alt="" />
                </a>
                <div className="card">
                  <h3>Dashboard</h3>
                  <p>
                    Developed a fully responsive Adslitics dashboard using
                    React.js, CSS3 and Bootstrap 5, featuring a clean layout and
                    mobile-friendly design.
                  </p>
                  <span>React.js</span>
                  <span>Css3</span>
                  <span>Bootstrap5</span>
                </div>
              </div>
              <div className="project">
                <a href="https://inkomoko.surge.sh/" target="_blank">
                  <img className="ads" src="inkomoko.png" alt="" />
                </a>
                <div className="card">
                  <h3>Dashboard</h3>
                  <p>
                    Create a fully responsive inkomoko dashboard using
                    HTML5,CSS3 and Bootstrap.
                  </p>
                  <span>Html5</span>
                  <span>Css3</span>
                  <span>Bootstrap5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
