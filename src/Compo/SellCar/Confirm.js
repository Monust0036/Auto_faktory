import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { API } from "../../config.js";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    axios.post(`${API}/sellerdata/create/`, this.props.formData)
      .then((response) => {
        console.log(response);
        this.props.nextStep();
      }).catch((error) => {
        alert("Failed! Please check the input you have entered.")
        console.log(error);
      })
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { formData } = this.props;
    return (
      <MuiThemeProvider>
        <>
          {/* <Dialog
            open
            fullWidth
            maxWidth='sm'
          > */}
          <Container maxWidth="sm" style={{ marginTop: "50px" }}>
            <AppBar title="Confirm User Data" />
            <List>
              {Object.keys(formData).map((item, index) =>
                <ListItem>
                  <ListItemText primary={item} secondary={formData[item]} />
                </ListItem>
              )}

            </List>
            <br />

            <div className="row justify-content-between">
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
            </div>
          </Container>

          {/* </Dialog> */}
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
