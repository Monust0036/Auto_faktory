import React, { Component } from 'react';
import FormUserDetails from './FisrtForm';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
  state = {
    step: 1,
    formData:{email:'',
    name:'',
    phone:null,
    year:null,
    make:'',
    model:'',
    fuel:'',
    city:'',
    mileage:null,
    ownership:null
    }

  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  updateState=(key,value)=>{
    this.setState({[key]:value});
  }

  render() {
    // console.log(this.state.formData)
    const { step,formData } = this.state;
    const { name, email, mobile, city, bio } = this.state;
    const values = { name, email, mobile, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            formData={formData}
            updateState={this.updateState}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            formData={formData}
            updateState={this.updateState}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            formData={formData}
          />
        );
      case 4:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
