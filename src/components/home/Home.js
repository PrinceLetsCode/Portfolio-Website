import React from 'react'
import Navbar from './Navbar';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { BsDownload } from 'react-icons/bs'

const Home = () => {
	return (
		<>
			<Navbar />
			<section id='home-id' className='home-section'>

				<div className='hero'>
					<p>Hi, I am </p>
					<h1 className='owner'>Prince Kumar</h1>
					<h3>Software Engineer</h3>
					<a className='download' href="resume/Prince_Kumar_Cv.pdf" download="Prince_Kumar_Cv.pdf">Download CV <BsDownload /></a>
				</div>

				<div className="img-div">
					<img src="images/prince.png" alt="prince kumar" />
				</div>

				<aside>
					<a href="https://github.com/PrinceLetsCode" target='_blank'><FaGithubSquare /></a>
					<a href="https://www.linkedin.com/in/princeletscode" target='_blank'><FaLinkedin /></a>
					<a href="https://leetcode.com/brago87/" target='_blank'><SiLeetcode /></a>
				</aside>
			</section >
		</>
	);
};

export default Home;