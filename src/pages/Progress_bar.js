import React from 'react'

const Progress_bar = ({bgcolor,progress,height}) => { 
	
	const Parentdiv = { 
		height: '7px', 
		width: 'flex', 
		borderRadius: 40,
		padding: 1,
        border: '1px solid #56695b',
	} 
	
	const Childdiv = { 
		height: '7px', 
		width: `${progress}%`, 
		backgroundColor: '#c1d3c2',
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
