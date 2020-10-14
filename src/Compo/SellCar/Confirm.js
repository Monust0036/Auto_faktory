import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


export class Confirm extends Component {
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
    const {
      values: { name, email, mobile,maker,model,variant,kms, rto, ownership, year,city }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          {/* <Dialog
            open
            fullWidth
            maxWidth='sm'
          > */}
          <Container maxWidth="sm" style={{marginTop:"50px"}}>
          <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Name" secondary={name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Phone" secondary={mobile} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Car Maker" secondary={maker} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Car Model" secondary={model} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Car Year" secondary={year} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Car Variant" secondary={variant} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Kms Driven" secondary={kms} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={rto} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Ownership" secondary={ownership} />
              </ListItem>
            </List>
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
            >Confirm & Continue</Button>
          </Container>
            
          {/* </Dialog> */}
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
