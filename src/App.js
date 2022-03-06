import React, { useState } from 'react';
import {
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import { useLocalStorage } from './useLocalStorage';
import ThemeSelector from './ThemeSelector';
import Theme from './Theme';
import AppForm from './AppForm';
import Results from './Results';
import About from './About';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './theme.css';
import './style.css';

import logo from './logo.png';
import AvocadoToast from './AvocadoToast.svg';

function App (){
	const [year, setYear] = useState('');
	const [amount, setAmount] = useState('');
    const [theme, setTheme] = useLocalStorage("theme","blue");
    const [showThemeSelector, setShowThemeSelector] = useState(false);

	let navigate = useNavigate();

	const resetForm = () => {
		setYear('');
		setAmount('');
		navigate('/');
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

		// setYear(formState.enterYear);
		// setAmount(formState.enterAmount);
		navigate('/results/'+formState.enterYear+'/'+formState.enterAmount);
  	}

	return (
		<>
		<Theme theme={theme} />
		<div className="container d-flex justify-content-center">
          	<div className="content">
                <div className ="headerdiv">
                  	<button className='btn border-none' onClick={resetForm}><img className ="img-fluid mt-1 mt-md-5 logo" src={logo}  /></button>
                </div>

			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/results/:year/:amount" element={<Results resetForm={resetForm} />} />
				<Route path="/" element={<AppForm submit={submitForm} />} />
			</Routes>

				<div id='bottom_spacer' />
			</div>
      	</div>
		<div id='avocado'><button className='btn border-none' onClick={() => navigate('/about')}><img src={AvocadoToast} alt='' /></button></div>
		<div id='themebtn'><button className='btn border-none' onClick={() => setShowThemeSelector(true)}><i class="fa-solid fa-palette" /></button></div>
		<ThemeSelector show={showThemeSelector} setShow={setShowThemeSelector} setTheme={setTheme} />
		</>
    	);
}

export default App;
