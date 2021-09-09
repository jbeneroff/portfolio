import logo1 from "../assets/decryptor.png"
import logo2 from "../assets/codedoctor.png"
import logo3 from "../assets/neurolog.png"
import logo4 from "../assets/finview.png"
import './MainContainer.css'

export default function MainContainer() {
  return (
    <div>
      <div className='about'>
        <h1 id='about-header'>About Me</h1>
        <p id='about-info'>I am a software engineer with an extensive and diverse background in full stack development, data analysis with python, and five years of preclinical neuroscience research looking to work in and advance a field utilizing new technologies.</p>
      </div>
      <div className='projects'>
        <h1 id='projects-header'>Projects</h1>
        <div className='project-div'>
          <div id='proj1'>
            <h2>DeCryptor</h2>
            <a href="https://decryptor.netlify.app/">
              <img id='logo1' src={logo1} alt="" />
            </a>
            <p className='project-info'>DeCryptor is an online community where crypto traders and enthusiasts can engage in a discussion and share their thoughts on the the most popular cryptocurrencies. Users can create an account, view information on top cryptocurrencies, post about a specific cryptocurrency, and comment on other posts.</p>
            <p className='project-stack'>Ruby on Rails, React JS</p>
          </div>
          <div id='proj2'>
            <h2>Code Doctor</h2>
            <a href="https://codedoctor.netlify.app/">
              <img id='logo2' src={logo2} alt="" />
            </a>
            <p className='project-info'>Code Doctor is a forum for all things coding/programming/development. Users can create accounts, create posts with their coding questions, and reply to other users’ posts with comments/answers. The goal is to empower a community of developers of all levels to share knowledge and receive feedback.</p>
            <p className='project-stack'>MongoDB, Express, React JS</p>
          </div>
          <div id='proj3'>
            <h2>NeuroLog</h2>
            <a href="https://elegant-archimedes-c68a8e.netlify.app/">
              <img id='logo3' src={logo3} alt="" />
            </a>
            <p className='project-info'>NeuroLog is a react build which shows users a database of neuroscience-related research articles. Users can view current research, add new articles, and delete them. It has a second Airtable with a popular news section geared towards less science-inclined users.</p>
            <p className='project-stack'>React JS, AirTable</p>
          </div>
          <div id='proj4'>
            <h2>FinView</h2>
            <a href="https://jbeneroff.github.io/Stock-Data-Project/">
              <img id='logo4' src={logo4} alt="" />
            </a>
            <p className='project-info'>FinView offers a search by stock ticker. Real-time share price as well as a company profile with a financial overview for the searched stock will be provided.</p>
            <p className='project-stack'>JavaScript, HTML, CSS</p>
          </div>
        </div>
      </div>
      <div className='skills'>
        <h1 id='skills-header'>Skills</h1>
        <div className='skills-div'>
          <div id='management'>
            <h2>Management and Deployment</h2>
            <p>Git, GitHub, Command Line, RSpec, Heroku.</p>
          </div>
          <div id='languages'>
            <h2>Languages and Frameworks</h2>
            <p>JavaScript, React, Ruby, Rails, Python, jQuery, Node.js, Express, AJAX, HTML, CSS, APIs, Front-end and Back-end.</p>
          </div>
          <div id='methods'>
            <h2>Methodologies</h2>
            <p>Object Oriented Programming, MVC Pattern, Test-Driven Development, Responsive Design, Authentication, User Stories,  ERDs, Wireframing, Agile Development/Scrum, Troubleshooting/Debugging.</p>
          </div>
          <div id='databases'>
            <h2>Databases</h2>
            <p>SQL, MySQL, PostgreSQL, MongoDB.</p>
          </div>
        </div>
      </div>
      <div className='contact'>
        <h1 id='contact-header'>Contact Me</h1>
        <p id='number'>(201) 572-5227</p>
        <p id='email'>jared.beneroff@gmail.com</p>
        <a id='github' href="https://github.com/jbeneroff">GitHub</a>
        <a id='linkedin' href="https://www.linkedin.com/in/jared-beneroff/">LinkedIn</a>
      </div>
    </div>
  )
}
