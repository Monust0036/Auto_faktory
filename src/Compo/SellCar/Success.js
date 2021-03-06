import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
        <Container maxWidth="sm" style={{ marginTop:"50px"}}>
        <AppBar title="Success" />
            <h1 style={{fontWeight:"500"}} >Thank you for your Application!</h1>
            <p>Our Sales Agent will contact you shortly.</p>
        </Container>
          {/* <Dialog
            open
            fullWidth
            maxWidth='sm'
          > */}
            
          {/* </Dialog> */}
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
