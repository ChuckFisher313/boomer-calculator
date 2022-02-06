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
		todayAmnt = (cpiData['CURRENT'] / cpiData[props.year]) * props.amount;
		console.log('todayAmnt: ' + JSON.stringify(todayAmnt));
		return todayAmnt.toFixed(2);
	}

    	return (
		<>
			<div id='results' className='p-3'>
				<p className='text-center'> ${props.amount} in {props.year} would be worth ${todayAmount()} today</p>

				<div className="d-flex justify-content-center">
					<button className="btn btn-light btn-lg px-5" onClick={props.resetForm}>Try again?</button>
				</div>
			</div>

			<div className="py-3"><FunFact year={props.year} /></div>
		</>
    	);
}

export default AppResults;
