import Banner from '../components/Banner'
import Projects from '../components/Projects'

const Index = (props) => {
	const indexContainer = {
		fontSize:'1vw'

	}
	const footer = {
		padding:' 5vw 0 1vw 0',
		display: 'flex',
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'center'
	}
	return (
		<div className = 'index-container' style = {indexContainer}> 
		<Banner />
		<Projects projects = {props.projects}/>

<div style = {footer}>
			<p>
			I've also worked in Other roles and they were more focused on developing my non technical skills.
			Feel free to have a read.
			</p>

			<p>©Copyright 2050 by nobody. All rights reversed.</p>
		</div>

		</div>
		)
}

export default Index