import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
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
              onChange={handleChange('name')}
              defaultValue={values.name}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              type="email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="i.e: xxx-xxx-xxxx"
              label="Phone number*"
              onChange={handleChange('mobile')}
              defaultValue={values.mobile}
              margin="normal"
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
