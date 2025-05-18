const Banner =  () => {
	const container = {
		display:'flex',
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'center',
		height: '50vw'
	}

		const item = {
			display:'flex',
			flexDirection:'column',
			flexGrow:1,
			justifyContent:'center',
			alignItems:'center',
		} 

			return (
			<div className = 'banner-container' style = {container}>
			<div className = 'banner-section' style ={item}>
			<h1>Sfi Codes</h1>
			<p>Cyber Security Graduate, interested in technology, developing projects and taking on
			challenges.</p>
			</div>
			<div className = 'banner-section'>

			<p className="scroll">Scroll down to see my projects</p>
			</div>
			</div>
			)
}

export default Banner