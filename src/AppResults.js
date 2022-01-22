import React from 'react';
import FunFact from './FunFact';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const inflation_rates = require('./inflationRates.json');
const fun_facts = require("./funFacts.json");

function AppResults(props){
	const todayAmount = () => {
		let todayAmnt = props.amount;
		for(let i = props.year; i <= 2021; i++){
			console.log('i = '+i);
			todayAmnt = todayAmnt * (1 + inflation_rates[i].inflation_rate);
			console.log('todayAmnt = '+todayAmnt);
		}
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
