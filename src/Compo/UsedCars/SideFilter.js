import React, { Component } from "react";
// import Select from 'react-select';
// import {  MDBRow, MDBCardBody,MDBView, MDBMask, MDBCol,MDBContainer,MDBSelect } from "mdbreact";
// import RangeSlider from 'react-bootstrap-range-slider';
import {
	ReactiveBase,
	RangeSlider,
	SelectedFilters,
	ResultList,
	ReactiveList,CategorySearch,SingleRange,MultiList
} from '@appbaseio/reactivesearch';
// import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from 'muicss/lib/react/checkbox';

import { MDBInput, MDBFormInline, MDBSelect } from 'mdbreact';
import ListContainer from "./ExpansionMain/ListContainer"
import ReactCircleColorPicker from 'react-circle-color-picker';
import Grid from '@material-ui/core/Grid';

// import Checkbox from '@material-ui/core/Checkbox';





class Sidefilter extends Component {

	state = {
		checkedA: false,
		checkedB: false,
		checkedC: false,
		checkedB1: false,
		checkedB2: false,
		checkedB3: false,
		checkedT1: false,
		checkedT2: false,
		checkedO1: false,
		checkedO2: false,
		color: [],

	  };
	
	  handleChange = name => event => {
		this.setState({ [name]: event.target.checked });
	  };
	
    render() {
		
		//   const { selectedOption } = this.state;
        return (
            <ReactiveBase
		app="good-books-ds"
		url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@arc-cluster-appbase-demo-6pjy6z.searchbase.io"
		enableAppbase
	>
		<div className="row">
			<div className="col">
                <h5 style={{textAlign:"left", fontSize:16, fontWeight:600}}>Budget</h5>
                <br></br>
                
				<RangeSlider
					dataField="ratings_count"
					componentId="BookSensor"
					range={{    
						start: 5000,
						end: 50000,
					}}
					rangeLabels={{
						start: '£5000',
						end: '£50000',
					}}
				/>
			</div>
        </div>

                    <hr></hr>
        <div className="row">
            <div className="col">
                <h5 style={{float:"left", fontSize:16, fontWeight:600}}>Make + Models</h5>
                {/* <SelectedFilters /> */}
                <CategorySearch
	                componentId="searchbox"
	                dataField="model"
	                categoryField="brand.keyword"
	                placeholder="Search cars by Model"
                />
				<ListContainer/>
            </div>
        </div>
		<hr></hr>
        <div className="row">
            <div className="col">
            <h5 style={{textAlign:"left", fontSize:16, fontWeight:600}}>Year</h5>
            <SingleRange
	            componentId="ratingsfilter"
	            dataField="rating"
	            
	            data={[
		                {"start": 4, "end": 5, "label": "2019 & above"},
                        {"start": 3, "end": 5, "label": "2017 & above"},
                        {"start": 3, "end": 5, "label": "2015 & above"},
                        {"start": 3, "end": 5, "label": "2013 & above"},
                        {"start": 3, "end": 5, "label": "2011 & above"},
                        {"start": 3, "end": 5, "label": "2009 & above"}
	                ]}
	                defaultValue="2015 & above"
            />
            </div>
        </div>
		<hr></hr>
        <div className="row">
            <div className="col">
            <h5 style={{textAlign:"left", fontSize:16, fontWeight:600}}>Mileage</h5>
            <SingleRange
	            componentId="ratingsfilter"
	            dataField="rating"
	            
	            data={[
		                {"start": 4, "end": 5, "label": "10,000 kms & less"},
                        {"start": 3, "end": 5, "label": "30,000 kms & less"},
                        {"start": 3, "end": 5, "label": "50,000 kms & less"},
                        {"start": 3, "end": 5, "label": "75,000 kms & less"},
                        {"start": 3, "end": 5, "label": "1,00,000 kms & less"}
	                ]}
	                defaultValue="10,000 kms & less"
            />
            </div>
        </div>
		<hr></hr>
		 <div className="row">
            <div className="col">
            <h5 style={{textAlign:"left", fontSize:16, fontWeight:600}}>Fuel type</h5>
			
			<div style={{float:"left"}}>
				
				
			<Checkbox
		  checked={this.state.checkedA}
		  label="Petrol"
		  onChange={this.handleChange('checkedA')}
          value="checkedA"
        	/>
				<Checkbox
		  	checked={this.state.checkedB}
		  	label="Diesel"
		  	onChange={this.handleChange('checkedB')}
          	value="checkedB"
        	/>
			<Checkbox
		  checked={this.state.checkedC}
		  label="CNG"
		  onChange={this.handleChange('checkedC')}
          value="checkedC"
        	/>
				
     		</div>
        	</div>
		</div>
		<hr></hr>
		<div className="row">
            <div className="col">
            	<h5 style={{textAlign:"left", fontSize:16, fontWeight:600}}>Body Type</h5>
			
				<div style={{float:"left"}}>
					<Checkbox
		  			checked={this.state.checkedB1}
		  			label="Hatchback"
		  			onChange={this.handleChange('checkedB1')}
          			value="checkedB1"
					/>
					<Checkbox
		  			checked={this.state.checkedB2}
		  			label="Sedan"
		  			onChange={this.handleChange('checkedB2')}
          			value="checkedB2"
					/>
					<Checkbox
		  			checked={this.state.checkedB3}
		  			label="SUV"
		  			onChange={this.handleChange('checkedB3')}
          			value="checkedB3"
					/>
				
				</div>
        	</div>
		</div>
		<hr></hr>
		<div className="row">
            <div className="col">
            	<h5 style={{textAlign:"left", fontSize:16, fontWeight:600}}>Transmission</h5>
			
				<div style={{float:"left"}}>
					<Checkbox
		  			checked={this.state.checkedT1}
		  			label="Automatic"
		  			onChange={this.handleChange('checkedT1')}
          			value="checkedT1"
					/>
					<Checkbox
		  			checked={this.state.checkedT2}
		  			label="Manual"
		  			onChange={this.handleChange('checkedT2')}
          			value="checkedT2"
					/>
					
				
				</div>
        	</div>
		</div>
		<hr></hr>
		<div className="row">
            <div className="col">
            	<h5 style={{textAlign:"left", fontSize:16, fontWeight:600}}>Owner</h5>
			
				<div style={{float:"left"}}>
					<Checkbox
		  			checked={this.state.checkedO1}
		  			label="1st Owner"
		  			onChange={this.handleChange('checkedO1')}
          			value="checkedO1"
					/>
					<Checkbox
		  			checked={this.state.checkedO2}
		  			label="2nd Owner"
		  			onChange={this.handleChange('checkedO2')}
          			value="checkedO2"
					/>
					
				
				</div>
        	</div>
		</div>
		<hr></hr>
		<div className="row">
    <h5 style={{textAlign:"left", fontSize:16, fontWeight:600}}>Body Type</h5>
			{/* <div className="col">
				<h5 style={{textAlign:"left", fontSize:16, fontWeight:600}}>Color</h5>
				<div size="2" className="col">
					<ReactCircleColorPicker colors={[{ hex: '#84947F', selected: true }, { hex: '#E53B2C', selected: false }]} />
				</div>
				
				
			</div> */}
			<div >
                    <Grid container spacing={1} >
                      <Grid container item xs={12} spacing={3} style={{alignItems:'center'}}>
                        <React.Fragment >
                          <Grid item xs={4} style={{alignItems:'center'}}>
                            <ReactCircleColorPicker
                              //checked={this.state.checkedWhiteColor}
                              

                              colors={[{ hex: '#FFFFFF' }]}
                            />
                            White
                          </Grid>
                          <Grid item xs={4}>
                            <ReactCircleColorPicker
                              //checked={this.state.checkedBlackColor}
                              colors={[{ hex: '#000000' }]} />
                            Black
                          </Grid>
                          <Grid item xs={4}>
                            <ReactCircleColorPicker
                              //checked={this.state.checkedSilverColor}
                               colors={[{ hex: '#C0C0C0' }]} />
                            Silver
                          </Grid>
                        </React.Fragment>
                      </Grid>
                      <Grid container item xs={12} spacing={3}>
                        <React.Fragment>
                          <Grid item xs={4}>
                            <ReactCircleColorPicker
                              // checked={this.state.checkedGreyColor}
                               colors={[{ hex: '#808080' }]} />
                            Grey
                          </Grid>
                          <Grid item xs={4}>
                            <ReactCircleColorPicker
                               colors={[{ hex: '#0000FF' }]} />
                            Blue
                          </Grid>
                          <Grid item xs={4}>
                            <ReactCircleColorPicker
                              // checked={this.state.checkedBeigeColor}
                               colors={[{ hex: '#f5f5dc' }]} />
                            Beige
                          </Grid>
                        </React.Fragment>
                      </Grid>
                      <Grid container item xs={12} spacing={3}>
                        <React.Fragment>
                          <Grid item xs={4}>
                            <ReactCircleColorPicker
                              // checked={this.state.checkedBronzeColor}
                              colors={[{ hex: '#cd7f32' }]} />
                            Bronze
                          </Grid>
                          <Grid item xs={4}>
                            <ReactCircleColorPicker
                              colors={[{ hex: '#A52A2A' }]} />
                            Brown
                          </Grid>
                          <Grid item xs={4} >
                            
                            <ReactCircleColorPicker
                              //
                               colors={[{ hex: '#800000' }]} />
                            Maroon
                          </Grid>
                        </React.Fragment>
                      </Grid>
                    </Grid>
                  </div>

                    
        </div>

		


	</ReactiveBase>
          );
    }
}
 
export default Sidefilter;