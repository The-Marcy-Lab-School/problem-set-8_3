import React from 'react';

//functionality of each cell will have an onClick handler and a class name of button
function Cells(props) {
	return <button onClick={props.click} className='button'>{props.value}</button>
}

export default Cells;
