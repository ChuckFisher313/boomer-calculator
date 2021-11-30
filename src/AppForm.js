import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class AppForm extends React.Component{
  constructor(props) {
    super(props);
    this.state={};

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(event){
    console.log('handleChange: event.target.name = '+event.target.name);
    console.log('handleChange: event.target.value = '+event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitForm(event){
    event.preventDefault();
    this.props.submit(this.state);
  }

  render() {
    return (


<form  onSubmit={this.submitForm}>
              <div className="form-floating mb-3">
                <input id="enterYear" name="enterYear" className="form-control" type='text' placeholder="Enter Year" required onChange={this.handleChange}/>
                <label htmlFor="enterYear"> Enter Year</label>
              </div>

              <div className="form-floating mb-3">
                <input id="enterAmount" name="enterAmount" className="form-control" type='text' placeholder="Enter Amount" required onChange={this.handleChange}/>
                <label htmlFor="enterAmount"> Enter Dollar Amount</label>
              </div>
             
              <div className="d-flex justify-content-center"> 
              <button class="btn btn-light btn-lg px-5">Submit</button>
             </div>
</form>

    );
  }
}

export default AppForm;
