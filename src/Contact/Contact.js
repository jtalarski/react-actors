import React, { Component } from 'react';

class Contact extends Component {
state ={
    firstName: null,
    lastName: null,
    bestImpression: null,
}
// attempt at clearing input fields
joinText = ()=>{
        alert(`Thank You ${this.state.firstName}`);
        window.location.reload(false);
    }

clearInput = ()=>
    console.log('Did this work?')


onFirstNameChange = (event) => {
    console.log('event.target', event.target);
    console.log('event.target.value', event.target.value);
    
    this.setState({
        firstName: event.target.value
    })
}

onLastNameChange = (event) => {
    console.log('event.target', event.target);
    console.log('event.target.value', event.target.value);
    
    this.setState({
        lastName: event.target.value
    })
}

onImpressionChange = (event) => {
    console.log('event.target', event.target);
    console.log('event.target.value', event.target.value);
    
    this.setState({
        bestImpression: event.target.value
    })
}

handleReset = () => {
    document.querySelectorAll('input');
    this.setState({
        itemvalues: [{}]
    })
}



  render() {

let submissionText;
if(this.state.firstName != null && this.state.lastName != null && this.state.bestImpression != null ){
    submissionText = `${this.state.firstName} ${this.state.lastName}'s best impression is ${this.state.bestImpression}`;
} else {
    submissionText = ""
}


    return (
      <div>
        <h2>Contact</h2>
        <input type="text" placeholder="First Name" onChange={this.onFirstNameChange} />
        <input type="text" placeholder="last Name" onChange={this.onLastNameChange} />
        <input type="text" placeholder="Best Impression" onChange={this.onImpressionChange} />
        <button onClick={this.joinText}>Join Us!</button>
        <p> {submissionText} </p>
        <p>Phone: 1-800-We-React</p>
        <p>Email: info@ReactActors.com</p>
      </div>
    );
  }

}

export default Contact;