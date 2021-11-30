import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppForm from './AppForm';



class AppResults extends React.Component{
  render() {
    return (

<>
<p className='resultsText'> {this.props.amount} in {this.props.year} would be worth Y today</p>
</>


    );
  }
}

export default AppResults;
