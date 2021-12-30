import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


function AppResults(props){
    	return (
		<p className='resultsText'> {props.amount} in {props.year} would be worth Y today</p>
    	);
}

export default AppResults;
