import React, { useState } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


function AppForm(props){
	const [state, setState] = useState({});

  	const handleChange = (event) => {
    		console.log('handleChange: event.target.name = '+event.target.name);
    		console.log('handleChange: event.target.value = '+event.target.value);

                let tmp = {};
                tmp[event.target.name] = event.target.value;
                setState({...state,...tmp});
  	};

  	const submitForm = (event) => {
    		event.preventDefault();
    		props.submit(state);
  	};

    return (
<form  onSubmit={submitForm}>
	<div className="form-floating mb-3">
        	<input id="enterYear" name="enterYear" className="form-control" type='text' placeholder="Enter Year" required onChange={handleChange}/>
                <label htmlFor="enterYear"> Enter Year</label>
       	</div>

        <div className="form-floating mb-3">
                <input id="enterAmount" name="enterAmount" className="form-control" type='text' placeholder="Enter Amount" required onChange={handleChange}/>
                <label htmlFor="enterAmount"> Enter Dollar Amount</label>
        </div>

        <div className="d-flex justify-content-center">
		<button className="btn btn-light btn-lg px-5">Submit</button>
        </div>
</form>

    );
}

export default AppForm;
