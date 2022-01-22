import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const fun_facts = require("./funFacts.json");

function FunFact(props){
	console.log('FunFact invoked');
	console.log('props.year: '+props.year);
	console.log('fun_facts: '+JSON.stringify(fun_facts));

	const replaceVariables = (str) => {
		str = str.replace("$year",props.year);
		str = str.replace("$value","VALUE_HERE");
		str = str.replace("$inflated_value","INFLATED_VALUE_HERE");
		return str;
	}

	if(props.year && fun_facts[props.year]){
		console.log('display fun fact');

		let index = getRandomInt(fun_facts[props.year].length);
		console.log('index: '+index);

		console.log('fun_facts[props.year][index]: '+JSON.stringify(fun_facts[props.year][index]));

		let title = replaceVariables(fun_facts[props.year][index].title);
		let additional = replaceVariables(fun_facts[props.year][index].additional);

		return (
			<>
				<p>{title}</p>
				<p>{additional}</p>
			</>
		);
	}
	return null;
}

function getRandomInt(max){
        return Math.floor(Math.random()*max);
}

export default FunFact;
