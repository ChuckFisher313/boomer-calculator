import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppForm from './AppForm';
import AppResults from './AppResults';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={};

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(formState){
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

    this.setState({
      year: formState.enterYear,
      amount: formState.enterAmount
    });
  }

  render() {
    return (
      <div className="container">
                    <div className="row">
          
          <div className="d-none d-md-block col-md-3"></div> 
          <div className="col-12 col-md-6">
                <div className ="headerdiv"> 
                  <img className ="img-fluid mt-1 mt-md-5 logo" src="images/logo.png"/>
                </div>
{
  this.state.year && this.state.amount ? <AppResults year={this.state.year} amount={this.state.amount}/> :  <AppForm submit={this.submitForm} />
}
      
      

</div>
        <div className="d-none d-md-block col-md-3"></div>
      </div>

      </div>
    );
  }
}

export default App;
