import { Link } from 'react-router-dom';

const Projects = (props) => {
const componentContainer = {
	marginLeft:'20vw',
	marginRight:'20vw'
}
	const projectsContainer = {
		display:'flex',
		flexDirection:'row',
		gap:'10px',
		flexWrap:'wrap'
	}

	const projectItem = {
		flex:'1 0 40%',

		display:'flex',
		justifyContent:'center',
		flexDirection:'column',
		height:'20vw',
	}

	const projectThumbnail = {
		border: '1px solid black',
		display:'flex',
		flexDirection:'column',
		flexGrow:1, 
		justifyContent:'center', 
		alignItems:'center'
	}

	return(
		<div style = {componentContainer}>
		<h1>Projects</h1>
		<div style ={projectsContainer}>
		{props.projects.map((project, index) => {
			return (
				<Link key = {index} style = {projectItem} to={`/${project.url}`}>
				<div style = {projectThumbnail}>{project.thumbnail}</div>
				<div>{project.text}</div>
				</Link>
				)
		})}
		</div>
		</div>

		)
}

export default Projects