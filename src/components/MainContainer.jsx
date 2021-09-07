import logo1 from "../assets/decryptor.png"
import logo2 from "../assets/codedoctor.png"
import logo3 from "../assets/neurolog.png"
import logo4 from "../assets/finview.png"
import './MainContainer.css'

export default function MainContainer() {
  return (
    <div>
      <div className='about'>
        <h1>About Me</h1>
        <p id='about-info'>I am a software engineer with extensive and diverse background in full-stack development, data analysis with python, preclinical neuroscience research, and medicine looking to work in and advance a field utilizing new technologies.</p>
      </div>
      <div className='projects'>
        <h1>Projects</h1>
        <div className='project-div'>
          <div id='proj1'>
            <h2>DeCryptor</h2>
            <a href="https://decryptor.netlify.app/">
              <img id='logo1' src={logo1} alt="" />
            </a>
            <p>DeCryptor is an online community where crypto traders and enthusiasts can engage in a discussion and share their thoughts on the the most popular cryptocurrencies. Users can create an account, view information on top cryptocurrencies, post about a specific cryptocurrency, and comment on other posts.</p>
          </div>
          <div id='proj2'>
            <h2>Code Doctor</h2>
            <a href="https://codedoctor.netlify.app/">
              <img id='logo2' src={logo2} alt="" />
            </a>
            <p>Code Doctor is a forum for all things coding/programming/development. Users can create accounts, create posts with their coding questions, and reply to other users’ posts with comments/answers. The goal is to empower a community of developers of all levels to share knowledge and receive feedback.</p>
          </div>
          <div id='proj3'>
            <h2>NeuroLog</h2>
            <a href="https://elegant-archimedes-c68a8e.netlify.app/">
              <img id='logo3' src={logo3} alt="" />
            </a>
            <p>NeuroLog is a react build which shows users a database of neuroscience-related research articles. Users will be able to view current research, add new articles, and delete them. It will have a second Airtable with a popular news section geared towards less science-inclined users.</p>
          </div>
          <div id='proj4'>
            <h2>FinView</h2>
            <a href="https://jbeneroff.github.io/Stock-Data-Project/">
              <img id='logo4' src={logo4} alt="" />
            </a>
            <p>FinView offers a search by stock ticker. Real-time share price as well as a company profile with a financial overview for the searched stock will be provided.</p>
          </div>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <div className='skills-div'>
          <div id='management'>
            <h2>Management and Deployment</h2>
            <p>Git, GitHub, Command Line, RSpec, Heroku.</p>
          </div>
          <div id='languages'>
            <h2>Languages and Frameworks</h2>
            <p>JavaScript, React, Ruby,  Rails, Python, jQuery, Node, Express, AJAX, HTML, CSS.</p>
          </div>
          <div id='methods'>
            <h2>Methodologies</h2>
            <p>Object Oriented Programming, MVC Pattern, Test-Driven Development, Responsive Design, Authentication, User Stories,  ERDs, Wireframing, Agile Development/Scrum.</p>
          </div>
          <div id='databases'>
            <h2>Databases</h2>
            <p>SQL, PostgreSQL, MongoDB.</p>
          </div>
        </div>
      </div>
      <div className='contact'>
        <h1>Contact Me</h1>
        <p>(201) 572-5227</p>
        <p>jared.beneroff@gmail.com</p>
        <a href="https://github.com/jbeneroff">GitHub</a>
        <a href="https://www.linkedin.com/in/jared-beneroff/">LinkedIn</a>
      </div>
    </div>
  )
}
