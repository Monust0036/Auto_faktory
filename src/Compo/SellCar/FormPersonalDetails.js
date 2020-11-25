import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


export class FormPersonalDetails extends Component {
  constructor(props) {
    super(props)
    this.state={
      formData:this.props.formData
    }
  }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  handleChange=(e)=>{
    let formData = this.state.formData
    formData[e.target.name] = e.target.value
    this.setState({formData:formData})
    this.props.updateState('formData',formData)
  }
  render() {
    const { formData } = this.state;
    return (
      <MuiThemeProvider>
        <div >
            
          {/* <Dialog
            open
            fullWidth
            maxWidth='sm'
          > */}
            <Container maxWidth="sm" style={{marginTop:"50px"}}>
            <AppBar title="Enter Personal Details" />
            <TextField
              placeholder="Enter Your FullName"
              label="Name"
              onChange={(e)=>this.handleChange(e)}
              value={formData.name}
              margin="normal"
              name='name'
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              type="email"
              onChange={(e)=>this.handleChange(e)}
              value={formData.email}
              margin="normal"
              name='email'
              fullWidth
            />
            <br />
            <TextField
              placeholder="i.e: xxx-xxx-xxxx"
              label="Phone number*"
              onChange={(e)=>this.handleChange(e)}
              value={formData.mobile}
              margin="normal"
              name='phone'
              fullWidth
            />
            <br />
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          {/* </Dialog> */}
          </Container>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;
