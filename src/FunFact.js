import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const cpiData = require("./cpiData.json");
const funFacts = require("./funFacts.json");

function FunFact(props){
	console.log('FunFact invoked');
	console.log('props.year: '+props.year);
	console.log('funFacts: '+JSON.stringify(funFacts));

	const replaceVariables = (str, val) => {
		if(str){
			str = str.replace("$year",props.year);
			str = str.replace("$value",val.toFixed(2));
			let inflated_value =  (cpiData['CURRENT'] / cpiData[props.year]) * val;
			str = str.replace("$inflated_value",inflated_value.toFixed(2));
			return str;
		}
		return "";
	}

	if(props.year && funFacts[props.year]){
		console.log('display fun fact');

		let index = getRandomInt(funFacts[props.year].length);
		console.log('index: '+index);

		console.log('fun_facts[props.year][index]: '+JSON.stringify(funFacts[props.year][index]));

		let value = funFacts[props.year][index].value;
		let title = replaceVariables(funFacts[props.year][index].title, value);
		let additional = replaceVariables(funFacts[props.year][index].additional, value);
		let comparison = replaceVariables(funFacts[props.year][index].comparison, value);
		let image = funFacts[props.year][index].img;

		return (
			<>
				<div className='px-3'>
					<p className="funFacts">{title}</p>
					<p className="funFacts">{additional}</p>
					{comparison ? <p className="funFacts">{comparison}</p> : null }
				</div>

				<img src={"images/"+props.year+"/"+image} />
			</>
		);
	}
	return null;
}

function getRandomInt(max){
        return Math.floor(Math.random()*max);
}

export default FunFact;
