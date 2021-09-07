import './Header.css'

export default function Header() {
  return (
    <div className='header'>
      <div>
        <h1 id='name'>Jared Beneroff</h1>
      </div>
      <div className='nav'>
        <a className='nav-item' id='about-nav' href='#about-header'>About</a>
        <a className='nav-item' id='projects-nav' href='#projects-header'>Portfolio</a>
        <a className='nav-item' id='skills-nav' href='#skills-header'>Skills</a>
        <a className='nav-item' id='contanct-nav' href='#contact-header'>Contact</a>
      </div>
    </div>
  )
}
