import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"



export class FirstForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: this.props.formData
    }
  }
  continue = e => {
    e.preventDefault();
    let formData = this.state.formData
    
    let {model,make} = formData
    
    console.log(formData.year && formData["​mileage"] );
    // let {city,​email,​fuel,​make,​mileage,​model,​name,​ownership,​phone,​year}=formData
    console.log(  formData["make"] , formData["mileage"] , formData["model"] , formData["fuel"] , formData["ownership"] , formData["city"] , formData["year"]) ;
    if( formData["make"] && formData["mileage"] && formData["model"] && formData["fuel"] && formData["ownership"] && formData["city"] && formData["year"]) return this.props.nextStep();
    alert("All Fields are Required!")

  };
  handleChange = (e) => {
    let formData = this.state.formData
    formData[e.target.name] = e.target.value
    this.setState({ formData: formData })
    this.props.updateState('formData', formData)
  }
  render() {
    console.log(this.state.formData)

    const { formData } = this.state;
    return (
      <MuiThemeProvider>
        <>
          {/* <Dialog
            open
            fullWidth
            maxWidth='sm'
          > */}
          <Container maxWidth="xl" style={{ marginTop: "30px" }}>
            <Grid container justify='center' spacing={3} noValidate>
              <Grid item>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="year">Year</InputLabel>
                  <Select
                    //   value={year} onChange={
                    //     handleChange("year")}
                    //     id="year"
                    //      clearOnEscape={true}
                    //     openOnFocus={true}
                    defaultValue={formData.year}
                    style={{ width: 250, backgroundColor: "white", }}
                    name='year'
                    onChange={(e) => this.handleChange(e)}
                    label="Year"
                  >
                    <MenuItem value={"2011"}>2011 </MenuItem>
                    <MenuItem value={"2012"}>2012 </MenuItem>
                    <MenuItem value={"2013"}>2013 </MenuItem>
                    <MenuItem value={"2014"}>2014 </MenuItem>
                    <MenuItem value={"2015"}>2015 </MenuItem>
                    <MenuItem value={"2016"}>2016 </MenuItem>
                    <MenuItem value={"2017"}>2017 </MenuItem>
                    <MenuItem value={"2018"}>2018 </MenuItem>
                    <MenuItem value={"2019"}>2019 </MenuItem>
                    <MenuItem value={"2020"}>2020 </MenuItem>
                  </Select>
                </FormControl>
              </Grid>


              <Grid item >
                <FormControl variant="outlined" >
                  <InputLabel htmlFor="maker">Select Maker</InputLabel>
                  <Select
                    // id="maker"
                    // openOnFocus={true}
                    // disabled={!disabledMaker }
                    // clearOnEscape={true}
                    // value={maker}
                    // onChange={(handleChange("maker"))  

                    // }
                    name='make'
                    onChange={(e) => this.handleChange(e)}
                    style={{ width: 250, backgroundColor: "white", }}

                    label="Select Maker"
                  >
                    <MenuItem value={"MARUTI"}>MARUTI </MenuItem>
                    <MenuItem value={"HONDA"}>HONDA </MenuItem>
                    <MenuItem value={"TOYOTA"}>TOYOTA </MenuItem>



                    {/* { 
                     year.length>0 &&  
                     
                     Object.keys(MAKER_MODEL).map((element,i) => {
                      // console.log("menu Item : "+JSON.stringify(MAKER_MODEL[maker.toUpperCase()]))

                      return (<MenuItem key={i} value={element}>
                        {element}</MenuItem>);
                    }
                    )
                    
                    } */}

                  </Select>
                </FormControl>

              </Grid>

              <Grid item >
                <FormControl variant="outlined" >
                  <InputLabel htmlFor="model">Select Model</InputLabel>
                  <Select
                    //     id="model"
                    //     openOnFocus={true}
                    //     disabled={!disabledModel }
                    //     clearOnEscape={true}
                    //     value={model}

                    //  onChange = { handleChange("model")}
                    name='model'
                    onChange={(e) => this.handleChange(e)}

                    style={{ width: 250, backgroundColor: "white", }}

                    label="Select Model"
                  >
                    <MenuItem value={"YARIS"}>YARIS </MenuItem>
                    <MenuItem value={"INNOVA"}>INNOVA</MenuItem>

                    {/* { 
                     maker.length>0 &&  
                     
                     Object.keys(MAKER_MODEL[maker.toUpperCase()]).map((element,i) => {
                      // console.log("menu Item : "+JSON.stringify(MAKER_MODEL[maker.toUpperCase()]))

                      return (<MenuItem key={i} value={element}>
                        {element}</MenuItem>);
                    }
                    )
                    
                    } */}
                  </Select>
                </FormControl>

              </Grid>



              <Grid item >
                <FormControl variant="outlined" >
                  <InputLabel htmlFor="variant">Select Variant</InputLabel>
                  <Select
                    // id="variant"
                    // openOnFocus={true}
                    // disabled={!disabledVariant }
                    // clearOnEscape={true}
                    // value={variant}
                    // onChange={  handleChange("variant")}   

                    style={{ width: 250, backgroundColor: "white", }}
                    name='fuel'
                    onChange={(e) => this.handleChange(e)}
                    label="Select Variant"
                  >
                    <MenuItem value="Petrol">Petrol</MenuItem>
                    <MenuItem value="Diesel">Diesel </MenuItem>
                    <MenuItem value="CNG">CNG </MenuItem>
                    <MenuItem value="Electric">Electric </MenuItem>


                  </Select>
                </FormControl>

              </Grid>
            </Grid>
            <Grid container justify='center' spacing={3} noValidate>

              <Grid item >
                <FormControl variant="outlined" >
                  <InputLabel htmlFor="rto">Select RTO</InputLabel>
                  <Select
                    // id="rto"
                    // openOnFocus={true}
                    // onChange={  handleChange("rto")}   
                    // value = {rto}
                    // clearOnEscape={true}
                    // disabled={!disabledRto }

                    style={{ width: 250, backgroundColor: "white", }}
                    name='city'
                    onChange={(e) => this.handleChange(e)}
                    label="Select rto"
                  >
                    <MenuItem value="MUMBAI">MUMBAI</MenuItem>
                    <MenuItem value="DELHI">DELHI</MenuItem>
                    <MenuItem value="BANGLORE">BANGLORE </MenuItem>
                    {/* { 
                  
                     
                     Object.keys(CITY).map((element,i) => {
                      // console.log("menu Item : "+JSON.stringify(MAKER_MODEL[maker.toUpperCase()]))

                      return (<MenuItem key={i} value={element}>
                        {element}</MenuItem>);
                    }
                    )
                    
                    } */}
                  </Select>
                </FormControl>

              </Grid>

              <Grid item >
                <FormControl variant="outlined" >
                  <InputLabel htmlFor="kms">Select Kms Driven</InputLabel>
                  <Select
                    // id="kms"
                    // openOnFocus={true}
                    // value = {kms}
                    // clearOnEscape={true}
                    // onChange={  handleChange("kms")}
                    // value={this.state.selectedMaker}
                    style={{ width: 250, backgroundColor: "white", }}
                    // disabled={!disabledkms }
                    name='mileage'
                    onChange={(e) => this.handleChange(e)}
                    label="Select Variant"
                  >
                    <MenuItem value="10000">10,000</MenuItem>
                    <MenuItem value="15000">15,000</MenuItem>
                    <MenuItem value="20000">20,000</MenuItem>
                    <MenuItem value="25000">25,000</MenuItem>
                    <MenuItem value="30000">30,000</MenuItem>
                    <MenuItem value="35000">35,000</MenuItem>
                    <MenuItem value="40000">40,000</MenuItem>
                  </Select>
                </FormControl>

              </Grid>


              <Grid item >
                <FormControl variant="outlined" >
                  <InputLabel htmlFor="ownership"> Ownership</InputLabel>
                  <Select
                    // id="selectMaker"
                    // openOnFocus={true}
                    // disabled={!disabledOwnership}
                    // clearOnEscape={true}
                    // onChange={  handleChange("ownership")}
                    // value={ownership}
                    style={{ width: 250, backgroundColor: "white", }}
                    name='ownership'
                    onChange={(e) => this.handleChange(e)}
                    label="Select Variant"
                  >
                    <MenuItem value="First">     First    </MenuItem>
                    <MenuItem value="Second">     Second    </MenuItem>
                    <MenuItem value="Third">     Third    </MenuItem>


                  </Select>
                </FormControl>

              </Grid>

            </Grid>
            <br /> <br />
            <Grid container alignContent='center' spacing={3} noValidate>

              <Grid alignContent='center'>


              </Grid>
            </Grid>


            <div
              style={{ display: "flex", marginTop: 50, justifyContent: "center" }}
            >
              <Button
                color="primary"
                variant="contained"
                onClick={this.continue.bind(this)}
              >
                Next
        </Button>
            </div>


          </Container>

        </>
      </MuiThemeProvider>
    );
  }
}

export default FirstForm;
