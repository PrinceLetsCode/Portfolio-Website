import React from 'react'
import { projects } from '../../projects';
const IndividualProject = () => {
	return (
		<article className='projects'>			{
			projects.map((project) => {
				const { id, name, description, sourceCode, liveSite } = project;
				return (
					<div key={id}>
						<h1 className='project-name'>{name}</h1>
						<p>{description}</p>
						<a href={sourceCode}>Source Code</a>
						<a href={liveSite}>{liveSite ? "Live Site" : "Live site not available right now"}</a>
					</div>
				);
			})
		}
		</article>

	);
};



export default IndividualProject;