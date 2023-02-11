import React, { useState } from 'react'
import { Link } from 'react-scroll';
const Navbar = () => {

	const [isMobile, setIsMobile] = useState(false);

	return (
		<header>
			<h1>PK</h1>
			<nav className={isMobile && "mobile"}>
				<Link activeClass='nav-active' to='home-id' spy={true} smooth={true} duration={500}>Home</Link>
				<Link activeClass='nav-active' to='about-id' spy={true} smooth={true} duration={500}>About</Link>
				<Link activeClass='nav-active' to='skill-id' spy={true} smooth={true} duration={500}>Skills</Link>
				<Link activeClass='nav-active' to='project-id' spy={true} smooth={true} duration={500}>Projects</Link>
				<Link activeClass='nav-active' to='education-id' spy={true} smooth={true} duration={500}>Education</Link>
				<Link activeClass='nav-active' to='contact-id' spy={true} smooth={true} duration={500}>Contact</Link>
			</nav>
			<button className='hamburger' onClick={() => { setIsMobile(!isMobile) }}>
				<div className='ham'></div>
				<div className='ham'></div>
				<div className='ham'></div>
			</button>
		</header>
	)
};

export default Navbar;