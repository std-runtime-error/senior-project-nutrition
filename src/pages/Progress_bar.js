import React from 'react'

const Progress_bar = ({progress,height}) => { 

	const para = document.querySelector(":root");
	const compStyles = window.getComputedStyle(para);
	
	const Parentdiv = { 
		height: '7px', 
		width: 'flex', 
		borderRadius: 40,
		padding: 1,
        border: '1px solid #555555',
	} 
	
	const Childdiv = { 
		height: '7px', 
		width: `${progress}%`, 
		backgroundColor: compStyles.getPropertyValue("--accent"),
	    borderRadius:40, 
		textAlign: 'right',
	} 
	
	return ( 
	<div style={Parentdiv}> 
	<div style={Childdiv}> 
	</div> 
	</div> 
	) 
} 

export default Progress_bar; 
