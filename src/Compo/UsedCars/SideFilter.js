import React, { Component } from "react";
import {
	ReactiveBase,
	RangeSlider,
	SelectedFilters,
	ResultList,
	ReactiveList,CategorySearch,SingleRange,MultiList
} from '@appbaseio/reactivesearch';
import Checkbox from 'muicss/lib/react/checkbox';

import { MDBInput, MDBFormInline, MDBSelect } from 'mdbreact';
import ListContainer from "./ExpansionMain/ListContainer"
import ReactCircleColorPicker from 'react-circle-color-picker';
import Grid from '@material-ui/core/Grid';
import BodyTypeCheckbox from "./BodyTypeCheckbox"
import YearRadio from "./yearRadio"
import MileageRadio from "./MileageRadio"

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
	  
	
	  handleChangeP = name => event => {
		const fuel = 'Petrol'
		let dataOfcars = this.props.dataOfcars
		dataOfcars = dataOfcars.filter(car =>car.Fuel == fuel)
		// console.log(dataOfcars)
		this.props.updateState('carsData',dataOfcars)
		this.setState({ [name]: event.target.checked  });
	  };
	  handleChangeC = name => event => {
		const fuel = 'CNG'
		let dataOfcars = this.props.dataOfcars
		dataOfcars = dataOfcars.filter(car =>car.Fuel == fuel)
		// console.log(dataOfcars)
		this.props.updateState('carsData',dataOfcars)
		this.setState({ [name]: event.target.checked });
	  };
	  handleChangeD = name => event => {
		const fuel = 'Diesel'
		let dataOfcars = this.props.dataOfcars
		dataOfcars = dataOfcars.filter(car =>car.Fuel == fuel)
		// console.log(dataOfcars)
		this.props.updateState('carsData',dataOfcars)
		this.setState({ [name]: event.target.checked });
	  };
	  handleChangeB1 = name => event => {
		const body = 'Hatchback'
		let dataOfcars = this.props.dataOfcars
		dataOfcars = dataOfcars.filter(car =>car.Body == body)
		// console.log(dataOfcars)
		this.props.updateState('carsData',dataOfcars)
		this.setState({ [name]: event.target.checked });
	  };
	  handleChangeB2 = name => event => {
		const body = 'Sedan'
		let dataOfcars = this.props.dataOfcars
		dataOfcars = dataOfcars.filter(car =>car.Body == body)
		// console.log(dataOfcars)
		this.props.updateState('carsData',dataOfcars)
		this.setState({ [name]: event.target.checked });
	  };
	  handleChangeB3 = name => event => {
		const body = 'SUV'
		let dataOfcars = this.props.dataOfcars
		dataOfcars = dataOfcars.filter(car =>car.Body == body)
		// console.log(dataOfcars)
		this.props.updateState('carsData',dataOfcars)
		this.setState({ [name]: event.target.checked });
	  };
	  handleChangeT1 = name => event => {
		const transmission = 'Manual'
		let dataOfcars = this.props.dataOfcars
		dataOfcars = dataOfcars.filter(car =>car.Transmission == transmission)
		// console.log(dataOfcars)
		this.props.updateState('carsData',dataOfcars)
		this.setState({ [name]: event.target.checked });
	  };
	  handleChangeT2 = name => event => {
		const transmission = 'Automatic'
		let dataOfcars = this.props.dataOfcars
		dataOfcars = dataOfcars.filter(car =>car.Transmission == transmission)
		// console.log(dataOfcars)
		this.props.updateState('carsData',dataOfcars)
		this.setState({ [name]: event.target.checked });
	  };
	  handleChangeO1 = name => event => {
		const owner = '1'
		let dataOfcars = this.props.dataOfcars
		dataOfcars = dataOfcars.filter(car =>car.Owner == owner)
		// console.log(dataOfcars)
		this.props.updateState('carsData',dataOfcars)
		this.setState({ [name]: event.target.checked });
	  };
	  handleChangeO2 = name => event => {
		const owner = '2'
		let dataOfcars = this.props.dataOfcars
		dataOfcars = dataOfcars.filter(car =>car.Owner == owner)
		// console.log(dataOfcars)
		this.props.updateState('carsData',dataOfcars)
		this.setState({ [name]: event.target.checked });
	  };

	
    render() {
		

			const handleFilters = (filters, category) =>{
				console.log(filters)

			}		
		//   const { selectedOption } = this.state;
        return (
            <ReactiveBase
		app="good-books-ds"
		url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@arc-cluster-appbase-demo-6pjy6z.searchbase.io"
		enableAppbase
	>
		<div className="row">
			<div className="col">
				<br></br>
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
						start: '₹5000',
						end: '₹50000',
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
			<YearRadio/>

            </div>
        </div>
		<hr></hr>
        <div className="row">
            <div className="col">
            <h5 style={{textAlign:"left", fontSize:16, fontWeight:600}}>Mileage</h5>
			<MileageRadio/>
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
		  onChange={this.handleChangeP('checkedA')}
          value="checkedA"
        	/>
				<Checkbox
		  	checked={this.state.checkedB}
		  	label="Diesel"
		  	onChange={this.handleChangeD('checkedB')}
          	value="checkedB"
        	/>
			<Checkbox
		  checked={this.state.checkedC}
		  label="CNG"
		  onChange={this.handleChangeC('checkedC')}
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
					{/* <BodyTypeCheckbox
						handleFilters = { filters => handleFilters(filters, "continents")}
					/> */}

					<Checkbox
		  			checked={this.state.checkedB1}
		  			label="Hatchback"
		  			onChange={this.handleChangeB1("checkedB1") }
          			value="checkedB1"
					/>
					<Checkbox
		  			checked={this.state.checkedB2}
		  			label="Sedan"
		  			onChange={this.handleChangeB2('checkedB2')}
          			value="checkedB2"
					/>
					<Checkbox
		  			checked={this.state.checkedB3}
		  			label="SUV"
		  			onChange={this.handleChangeB3('checkedB3')}
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
		  			onChange={this.handleChangeT2('checkedT1')}
          			value="checkedT1"
					/>
					<Checkbox
		  			checked={this.state.checkedT2}
		  			label="Manual"
		  			onChange={this.handleChangeT1('checkedT2')}
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
		  			onChange={this.handleChangeO1('checkedO1')}
          			value="checkedO1"
					/>
					<Checkbox
		  			checked={this.state.checkedO2}
		  			label="2nd Owner"
		  			onChange={this.handleChangeO2('checkedO2')}
          			value="checkedO2"
					/>
					
				
				</div>
        	</div>
		</div>
		<hr></hr>
		<div className="row">
    {/* <h5 style={{textAlign:"left", fontSize:16, fontWeight:600}}>Body Type</h5> */}
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
                           
                          </Grid>
                          <Grid item xs={4}>
                            <ReactCircleColorPicker
                              //checked={this.state.checkedBlackColor}
                              colors={[{ hex: '#000000' }]} />
                            
                          </Grid>
                          <Grid item xs={4}>
                            <ReactCircleColorPicker
                              //checked={this.state.checkedSilverColor}
                               colors={[{ hex: '#C0C0C0' }]} />
                           
                          </Grid>
                        </React.Fragment>
                      </Grid>
                      <Grid container item xs={12} spacing={3}>
                        <React.Fragment>
                          <Grid item xs={4}>
                            <ReactCircleColorPicker
                              // checked={this.state.checkedGreyColor}
                               colors={[{ hex: '#808080' }]} />
                            
                          </Grid>
                          <Grid item xs={4}>
                            <ReactCircleColorPicker
                               colors={[{ hex: '#0000FF' }]} />
                            
                          </Grid>
                          <Grid item xs={4}>
                            <ReactCircleColorPicker
                              // checked={this.state.checkedBeigeColor}
                               colors={[{ hex: '#f5f5dc' }]} />
                            
                          </Grid>
                        </React.Fragment>
                      </Grid>
                      <Grid container item xs={12} spacing={3}>
                        <React.Fragment>
                          <Grid item xs={4}>
                            <ReactCircleColorPicker
                              // checked={this.state.checkedBronzeColor}
                              colors={[{ hex: '#cd7f32' }]} />
                            
                          </Grid>
                          <Grid item xs={4}>
                            <ReactCircleColorPicker
                              colors={[{ hex: '#A52A2A' }]} />
                            
                          </Grid>
                          <Grid item xs={4} >
                            
                            <ReactCircleColorPicker
                              //
                               colors={[{ hex: '#800000' }]} />
                            
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