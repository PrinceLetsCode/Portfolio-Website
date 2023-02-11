import React from 'react'

const Education = () => {
	return (
		<section id='education-id'>
			<h1 className='headings'>Education</h1>
			<article className='education-grid'>
				<div>
					<h1>Class 10<sup>th</sup></h1>
					<div className='inner-edu'>
						<h3>Vivekanand Public School</h3>
						<h4>94%</h4>
					</div>
				</div>
				<div>
					<h1>Bsc. (Hons) Computer Science</h1>
					<div className='inner-edu'>
						<h3>College Of Vocational Studies, Delhi University</h3>
						<h4>7 CGPA ( till 4<sup>th</sup> sem)</h4>
					</div>
				</div>
				<div>
					<h1>Class 12<sup>th</sup></h1>
					<div className='inner-edu'>
						<h3>Vivekanand Public School</h3>
						<h4>90.2%</h4>
					</div>
				</div>
			</article>
		</section>
	);
};

export default Education;