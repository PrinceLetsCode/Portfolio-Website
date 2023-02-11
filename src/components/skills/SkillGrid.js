import React from 'react'
import { SiPython, SiJava, SiJavascript, SiHtml5, SiCss3, SiMongodb, SiReact, SiExpress, SiGithub, SiMysql, SiFigma } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'


const SkillGrid = () => {
	return (
		<div className='skill-grid'>
			<div id='data-structure'>Data Structures</div>
			<div id='algorithm'>Algorithms</div>
			<div>
				<SiPython />
				Python
			</div>

			<div>
				<SiJava />
				Java
			</div>

			<div>
				<SiJavascript />
				JavaScript
			</div>

			<div>
				<IoLogoNodejs />
				Node.js
			</div>

			<div>
				<SiHtml5 />
				HTML
			</div>
			<div>
				<SiCss3 />
				CSS
			</div>

			<div>
				<SiMongodb />
				MonogoDb
			</div>


			<div>
				<SiReact />
				React.js
			</div>
			<div>
				<SiExpress />
				Express.js
			</div>
			<div>
				<SiGithub />
				Git and GitHub
			</div>
			<div>
				<SiMysql />
				SQL
			</div>

			<div>
				<SiFigma />
				Figma
			</div>
		</div>
	);
};

export default SkillGrid;