import React from 'react';
import { useParams } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';
import FunFact from './FunFact';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const cpiData = require('./cpiData.json');
const fun_facts = require("./funFacts.json");

function Results(props){
	let { year, amount } = useParams();

	const todayAmount = () => {
		console.log('cpiData: '+JSON.stringify(cpiData));
		console.log('cpi value: '+JSON.stringify(cpiData[year]));

		let todayAmnt = parseFloat(amount);
		todayAmnt = (cpiData['CURRENT'] / cpiData[year]) * amount;
		console.log('todayAmnt: ' + JSON.stringify(todayAmnt));
		return todayAmnt.toFixed(2);
	}

	return (
		<ErrorBoundary>
			<div id='results' className='p-3'>
				<p className='text-center'> ${amount} in {year} would be worth ${todayAmount()} today</p>

				<div className="d-flex justify-content-center">
					<button className="btn btn-light btn-lg px-5" onClick={props.resetForm}>Try again?</button>
				</div>
			</div>

			<div className="py-3"><FunFact year={year} /></div>
		</ErrorBoundary>
	);
}

export default Results;
