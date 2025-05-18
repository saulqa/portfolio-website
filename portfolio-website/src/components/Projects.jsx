const Projects = (props) => {

	const containerForProjects = {
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

	return(
		<div style = {{marginLeft:'20vw',marginRight:'20vw'}}>
		<h1>Projects</h1>
		<div style ={containerForProjects}>
		{props.projects.map((project, index) => {
			return (
				<div key = {index} style = {projectItem}>
				<div style = {{	border: '1px solid black', display:'flex',flexDirection:'column',flexGrow:1, justifyContent:'center', alignItems:'center'}}>{project.thumbnail}</div>
				<div>{project.text}</div>
				</div>
				)
		})}
		</div>
		</div>

		)
}

export default Projects