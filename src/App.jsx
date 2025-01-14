import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, Element } from 'react-scroll';
import { scroller } from 'react-scroll';
import profile from './assets/profil.svg';
import { useInView } from 'react-intersection-observer';

export default function Main() {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'research', label: 'Research' },
    { id: 'blog', label: 'Blog' },
    { id: 'publications', label: 'Publications' },
    { id: 'cv', label: 'CV' },
    { id: 'contact', label: 'Contact' },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    content: '',
  });

  const onLinkClick = (id) => {
    setActiveTab(id);
    setMenuOpen(false);

    scroller.scrollTo(id, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: 0,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEmailSubmit = () => {
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.content}`;
    window.location.href = `mailto:cmagelssen@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <header className="grid-header">
        <div
          className={`menu-background ${menuOpen ? 'visible' : ''}`}
          onClick={() => setMenuOpen(false)}
        />
        <nav
          className={`navbar ${menuOpen ? 'open' : ''}`}
          style={{
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
          }}
        >
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="menu-items">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                to={tab.id}
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                onSetActive={() => setActiveTab(tab.id)}
                onClick={() => onLinkClick(tab.id)}
                className={`navbar-button ${
                  activeTab === tab.id ? '' : 'navbar-button-inactive'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="bubble"
                    className="navbar-bubble"
                    transition={{
                      type: 'spring',
                      bounce: 0.25,
                      duration: 0.6,
                    }}
                  />
                )}
                <span className="navbar-text">{tab.label}</span>
              </Link>
            ))}
          </div>
        </nav>
      </header>

      <div className="container">

        <Element name="home">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: 'spring',
              bounce: 0.0,
              duration: 0.6,
            }}
          >
            <div className="container-home">
              <div>
                <img src={profile} alt="Christian Magelssen's Profile Picture" className="fig-svg" />
              </div>
              <div>
                <h5>Hello, I'm</h5>
                <h1>Christian Magelssen</h1>
                <p>
                  I study how we learn to make good decisions and acquire skills
                  to achieve goals
                </p>
              </div>
            </div>
          </motion.div>
        </Element>

        <Element name="about">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 0 }}
            transition={{
              type: 'spring',
              bounce: 0.0,
              duration: 0.3,
            }}
          >
            <h2 className="h2-page">About</h2>
            <div className="container-about">
              <p>
                Hi, I’m Christian Magelssen. I study how people learn to make
                good decisions and develop (motor) skills. Recently, I completed
                a PhD on the most effective learning signals for improving
                decision-making and choices in sports. You can read my PhD
                thesis <a href='https://hdl.handle.net/11250/3170329'>here</a> or watch the doctoral defence here <a href='https://www.youtube.com/live/vfSZr_kw9lk?feature=shared'>here</a>.
              </p>
              <p>
                My interest in this research field began while studying sports
                psychology and coaching at the Norwegian School of Sport
                Sciences, where I was introduced to motor learning during my
                master’s degree. After lecturing in sports psychology for a few
                years, during which I also taught this topic, I realized that my
                knowledge was insufficient to fully understand the subject. This
                realization drove me to pursue a master’s degree in psychology
                with a specialization in cognitive neuroscience at the
                University of Glasgow, which turned out to be the most
                transformative year of my academic life. It provided me with a
                new perspective on skill learning, rooted in an
                interdisciplinary understanding that integrates computational
                modeling, neuroscience, and psychology. And it is this
                perspective that guides my efforts to understand how we learn
                skills and whether there are better training methods to improve
                skill learning across various domains.
              </p>
              <p>
                In addition to my theoretical education, I’ve always had a keen
                eye for the practical side—specifically, how coaches can design
                more effective training. This practical perspective has likely
                developed from my experience as a coach for the Norwegian Alpine
                Ski Team and close collaboration with the national teams for
                many years. Consequently, I see opportunities to apply learning
                principles that other researchers might overlook.
              </p>
              <p>
                In addition to my interest in skill acquisition, I am deeply
                passionate about methodology and statistics, and I have a strong
                enthusiasm for coding in JavaScript and R.
              </p>
            </div>
          </motion.div>
        </Element>

        <Element name="research">
          <h2 class="h2-page">Research</h2>
          <div className="container-research">
            <p>
              Cognitive science has made significant progress in understanding
              the mechanisms behind skill learning. Most of this research,
              however, has been conducted in laboratories using simple tasks
              that take only minutes or hours to learn. These tasks are very
              different from real-world learning situations, like becoming
              skilled in a sport, which often takes years of dedicated practice.
              Our research aims to bridge this gap by studying the same
              mechanisms in skilled athletes.
            </p>
            <p>
              One big challenge in studying skilled athletes is that they are
              already very good at what they do. Consequently, giving athletes
              more training on their automated solution will not necessarily
              lead to noticeable improvement, which can undermine the validity
              of the study. To address this challenge, we identify specific
              skills—through biomechanical analysis and/or observation—that
              athletes can improve. We then use these insights to design
              training that promotes meaningful learning for athletes.
            </p>
            <p>
              In my doctoral thesis, I focused on the skill of "pumping to
              increase velocity." This proved to have a huge impact on athletes’
              performance during training. Because they experienced noticeable
              improvements, the athletes were eager to participate in our
              experiments. In total, we worked with 186 skilled alpine skiers,
              ranging from ski academy students to World Cup-level athletes.
            </p>
            <p>Such studies require close collaboration with the sports. Our research group is among the world’s best at building and maintaining these partnerships.
            </p>
            <h3>Current and future research areas</h3>
            

          </div>
        </Element>
        <Element name="blog">
          <div className="container-blog">
            <p>I am thinking about writing a research methods book for sport scientist.</p>
          </div>
        </Element>
        <Element name="publications">
          <h2 className="h2-page">Publications</h2>
          <div className="container-publications">
            <p>
              Magelssen, C., Gilgien, M., Tajet, S. L., Losnegard, T., Haugen,
              P., Reid, R., & Frömer, R. (2024). Reinforcement learning enhances
              training and performance in skilled alpine skiers compared to
              traditional coaching instruction. bioRxiv.{' '}
              <a href="https://doi.org/10.1101/2024.04.22.590558">
                https://doi.org/10.1101/2024.04.22.590558
              </a>{' '}
              (preprint)
            </p>
            <p>
              Magelssen, C., Reid, R., Luteberget, L. S., Gilgien, M., Jølstad,
              P. A. H., & Haugen, P. (2024). The kinematic changes following a
              training intervention on pumping in slalom. SportRxiv.{' '}
              <a href="https://doi.org/10.51224/SRXIV.426">
                https://doi.org/10.51224/SRXIV.426
              </a>
              (preprint)
            </p>
          </div>
        </Element>
        <Element name="cv">
          <div className="container-cv">
            <div className="cv-cell">
              <h3>Education</h3>
              <table class="education-table">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Institution</th>
                    <th>Degree</th>
                    <th>Field of study</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2019-2024</td>
                    <td>Norwegian School of Sport Sciences</td>
                    <td>PhD</td>
                    <td>Sport Science</td>
                  </tr>
                  <tr>
                    <td>2016-2017</td>
                    <td>University of Glasgow</td>
                    <td>MSc</td>
                    <td>Psychology</td>
                  </tr>
                  <tr>
                    <td>2010-2012</td>
                    <td>Norwegian School of Sport Sciences</td>
                    <td>MSc</td>
                    <td>Sport Science</td>
                  </tr>
                  <tr>
                    <td>2007-2010</td>
                    <td>Norwegian School of Sport Sciences</td>
                    <td>BSc</td>
                    <td>Sport Science</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="cv-cell">
              <h3>Skills</h3>
              <div className="skill-container">
                <div className="skill-label">R</div>
                <progress id="r-skill" value="80" max="100"></progress>
              </div>
              <div className="skill-container">
                <div className="skill-label">JavaScript</div>
                <progress id="javascript-skill" value="65" max="100"></progress>
              </div>
              <div className="skill-container">
                <div className="skill-label">Python</div>
                <progress id="javascript-skill" value="55" max="100"></progress>
              </div>
              <div className="skill-container">
                <div className="skill-label">Statistics</div>
                <progress id="statistics-skill" value="80" max="100"></progress>
              </div>
              <div className="skill-container">
                <div className="skill-label">Experiments</div>
                <progress id="experiment-skill" value="75" max="100"></progress>
              </div>
            </div>
            <div className="cv-cell">
              <h3>Taught courses</h3>
              <table className="teaching-table">
                <tbody>
                  <tr>
                    <td>Experiments and statistics</td>
                  </tr>
                  <tr>
                    <td>Cognitive psychology</td>
                  </tr>
                  <tr>
                    <td>Motor skill learning</td>
                  </tr>
                  <tr>
                    <td>Sport psychology</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Element>
        <Element name="contact">
          <h2 className='h2-page'>Contact</h2>
          <div className="container-contact">
            <div className="contact-form-container">
              <h2>Contact me</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="content">Content:</label>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    className="form-textarea"
                    required
                  ></textarea>
                </div>
                <div className="form-actions">
                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="form-button"
                  >
                    Send Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Element>
      </div>
    </>
  );
}
