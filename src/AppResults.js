import React from 'react';
import FunFact from './FunFact';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const cpiData = require('./cpiData.json');
const fun_facts = require("./funFacts.json");

function AppResults(props){
	const todayAmount = () => {
		console.log('cpiData: '+JSON.stringify(cpiData));
		console.log('cpi value: '+JSON.stringify(cpiData[props.year]));

		let todayAmnt = parseFloat(props.amount);
		todayAmnt = (cpiData['2020'] / cpiData[props.year]) * props.amount;
		console.log('todayAmnt: ' + JSON.stringify(todayAmnt));
		return todayAmnt.toFixed(2);
	}

    	return (
		<>
			<p className='resultsText'> ${props.amount} in {props.year} would be worth ${todayAmount()} today</p>

			<div className="d-flex justify-content-center">
                		<button className="btn btn-light btn-lg px-5" onClick={props.resetForm}>Try again?</button>
        		</div>

			<FunFact year={props.year} />
		</>
    	);
}

export default AppResults;
