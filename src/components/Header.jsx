import './Header.css'

export default function Header() {
  return (
    <div className='header'>
      <div>
        <h1 id='name'>Jared Beneroff</h1>
      </div>
      <div className='nav'>
        <p className='nav-item' id='about-nav'>About</p>
        <p className='nav-item' id='projects-nav'>Portfolio</p>
        <p className='nav-item' id='skills-nav'>Skills</p>
        <p className='nav-item' id='contanct-nav'>Contact</p>
      </div>
    </div>
  )
}
