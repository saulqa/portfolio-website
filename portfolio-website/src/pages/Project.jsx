import { Link, useParams } from 'react-router-dom';

const Project = (props) => {
	const componentContainer = {
		fontSize: '1vw',
	marginLeft:'20vw',
	marginRight:'20vw'

	}
	const footer = {
		padding: ' 5vw 0 1vw 0',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}
	const id = useParams().id
	const project = props.projects.find(project => project.url === id)

	return (
		<div style={componentContainer}>
			<Link to={'/'}>
				Home
			</Link>
			<h1>{project.thumbnail}</h1>
			<p>I created this portfolio website to showcase my skills, projects, and professional story in a way that is visually engaging and easy to navigate. The goal was to build a platform that not only highlights my work but also reflects my personality</p>
			<h1>Key thoughts about project</h1>
			<ul>
				<li>My previous portfolio was outdated and did not effectively communicate my design process or personality.</li>
				<li>The site lacked clear navigation and was not optimized for mobile devices.</li>
				<li>I wanted to create a portfolio that would stand out to potential employers and clients by telling a compelling story about my work.</li>
			</ul>
			<h1>Role</h1>
			<p>As a solo project, I was responsible for all aspects: user research, UX/UI design, content writing, front-end development, and deployment.</p>
			<h1>Development Process</h1>
			<ul>
				<li>Reviewed portfolios of designers I admire to identify effective storytelling techniques and layouts.</li>
				<li>Sketched multiple layout concepts focusing on simplicity and clear project presentation.</li>
				<li>Built the site using MongoDB, Express, React and Node.js (MERN).</li>
				<li>Tested the site on various devices and gathered feedback to refine usability and performance.</li>
			</ul>
			<h1>Challenges Faced</h1>
			<ul>
				<li>UI/UX design challenges: I am not a UI/UX designer, so the initial website design had poor user experience, which impacted the overall quality of the site. My options were to either pay someone to create the page layout, use a template, or gather inspiration from other sites. I chose to learn some UI design concepts and gather inspiration from websites with good UI design</li>
				<li>Technical and cost restraints</li>
				<li>Deployment issues: The project was functional in the local environment; however, the frontend and backend failed to connect once deployed on the cloud platform. I debugged the application and found that the problem was due to the cloud platform configuration, specifically how it assigned the project framework and root folder. This caused the backend not to run as an Express server. I resolved the issue and documented my findings to prevent this problem from occurring again</li>
			</ul>
			<h1>Reflection</h1>
			<p>This project was an invaluable learning experience in self-branding, storytelling, and technical problem-solving. Overcoming challenges related to balancing personality with professionalism and ensuring mobile responsiveness strengthened my design and development skills. The final portfolio now effectively communicates who I am as a designer and invites meaningful connections.</p>
			<div style={footer}>
				<p>
					I've also worked in Other roles and they were more focused on developing my non technical skills.
					Feel free to have a read.
				</p>

				<p>©Copyright 2050 by nobody. All rights reversed.</p>
			</div>
		</div>
	)
}

export default Project