import React, { useState } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import ErrorBoundary from './ErrorBoundary';
import AppForm from './AppForm';
import AppResults from './AppResults';

import logo from './logo.png';

function App (){
	const [year, setYear] = useState('');
	const [amount, setAmount] = useState('');

	const resetForm = () => {
		setYear('');
		setAmount('');
	}

  	const submitForm = (formState) => {
		console.log('App.js: this.submitForm() invoked');
    		console.log('App.js: formState = ' + JSON.stringify(formState));
    		if(isNaN(formState.enterYear)){
      			alert('Year is not a number');
      			return false;
    		}

		if(formState.enterYear < 1913 || formState.year > 2021){
      			alert('Enter a year between 1913 and 2021');
      			return false;
    		}

		setYear(formState.enterYear);
		setAmount(formState.enterAmount);
  	}

	  const showResults = () => {
		  return (
			<ErrorBoundary>
				<AppResults year={year} amount={amount} resetForm={resetForm} />
			</ErrorBoundary>
		  )
	  }

	return (
		<div className="container">
                	<div className="row">
          			<div className="d-none d-md-block col-md-3"></div>
          			<div className="col-12 col-md-6">
                			<div className ="headerdiv">
                  				<img className ="img-fluid mt-1 mt-md-5 logo" src={logo} onClick={resetForm} />
                			</div>
{
  year && amount ? showResults() :  <AppForm submit={submitForm} />
}

				</div>
        			<div className="d-none d-md-block col-md-3"></div>
      			</div>

      		</div>
    	);
}

export default App;
