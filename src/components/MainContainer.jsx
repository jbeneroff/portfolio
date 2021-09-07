
export default function MainContainer() {
  return (
    <div>
      <div className='about'>
        <h1>About Me</h1>
        <p>I am a software engineer with extensive and diverse background in full-stack development, data analysis with python, preclinical neuroscience research, and medicine looking to work in and advance a field utilizing new technologies.</p>
      </div>
      <div className='projects'>
        <h1>Projects</h1>
        <div>
          <div>
            <h2>DeCryptor</h2>
            <p>DeCryptor is an online community where crypto traders and enthusiasts can engage in a discussion and share their thoughts on the the most popular cryptocurrencies. Users can create an account, view information on top cryptocurrencies, post about a specific cryptocurrency, and comment on other posts.</p>
          </div>
          <div>
            <h2>Code Doctor</h2>
            <p>Code Doctor is a forum for all things coding/programming/development. Users can create accounts, create posts with their coding questions, and reply to other users’ posts with comments/answers. The goal is to empower a community of developers of all levels to share knowledge and receive feedback.</p>
          </div>
          <div>
            <h2>NeuroLog</h2>
            <p>NeuroLog is a react build which shows users a database of neuroscience-related research articles. Users will be able to view current research, add new articles, and delete them. It will have a second Airtable with a popular news section geared towards less science-inclined users.</p>
          </div>
          <div>
            <h2>FinView</h2>
            <p>FinView offers a search by stock ticker. Real-time share price as well as a company profile with a financial overview for the searched stock will be provided.</p>
          </div>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <div>
          <div>
            <h2>Languages and Frameworks</h2>
            <p>JavaScript, React, Ruby,  Rails, Python, jQuery, Node, Express, AJAX, HTML, CSS, SQL, PostgreSQL, MongoDB.</p>
          </div>
          <div>
            <h2>Management and Deployment</h2>
            <p>Git, GitHub, Command Line, RSpec, Heroku.</p>
          </div>
          <div>
            <h2>Methodologies</h2>
            <p>Object Oriented Programming, MVC Pattern, Test-Driven Development, Responsive Design, Authentication, User Stories,  ERDs, Wireframing, Agile Development/Scrum.</p>
          </div>
        </div>
      </div>
      <div className='contact'>
        <h1>Contact Me</h1>
        <p>(201) 572-5227</p>
        <p>jared.beneroff@gmail.com</p>
        <p>https://github.com/jbeneroff</p>
        <p>https://www.linkedin.com/in/jared-beneroff/</p>
      </div>
    </div>
  )
}
