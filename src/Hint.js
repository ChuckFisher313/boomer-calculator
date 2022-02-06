import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const hints = require("./hints.json");

function Hint(props){
	console.log('Hint invoked');
	console.log('hints: '+JSON.stringify(hints));


	console.log('display hint');

	let index = getRandomInt(hints.length);
	console.log('index: '+index);

	let hint = "Ex: " + hints[index];

	return (
		<p className="hint" dangerouslySetInnerHTML={{ __html: hint }}></p>
	);
}

function getRandomInt(max){
        return Math.floor(Math.random()*max);
}

export default Hint;
