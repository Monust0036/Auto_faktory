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
		savedMakeModelsObj:[]
	  };
	  
	
	  handleChange = ( value,key,event) => {
		let dataOfcars = this.props.dataOfcars
		dataOfcars = dataOfcars.filter(car =>car[key] == value)
		// console.log(dataOfcars)
		this.props.updateState('carsData',dataOfcars)
		this.setState({ [event.target.value]: event.target.checked  });
	  };

	  getRadioBtnFilterData=(value,key)=>{
		let dataOfcars = this.props.dataOfcars
		dataOfcars = dataOfcars.filter(car =>car[key] < value)
		this.props.updateState('carsData',dataOfcars)
	  }
	//   filter for make and modals
	  getCarNameFilter=(list,item,e)=>{
		// console.log(list,item,e.target.checked)
		let dataOfcars = this.props.dataOfcars
		let listOfObj = this.state.savedMakeModelsObj
		let emptyList = []
		if(e.target.checked){
			listOfObj.push({model:item.name,make:list.title})
			this.setState({savedMakeModelsObj:listOfObj})
		}else{
			let index = listOfObj.findIndex(e=>e.key == item.name)
			listOfObj.splice(index, 1)
		}
		listOfObj.map((obj)=>emptyList =[...dataOfcars.filter(e =>obj.model==e.varient.model && e.varient.make == obj.make)])

		if(listOfObj.length ==0){
			emptyList = dataOfcars
		}
		this.props.updateState('carsData',emptyList)

	  }
	//   budgetFilter=(e)=>{
	// 	console.log('hiii')
	//   }
	getColorFilter=(e)=>{
		console.log(e)
	}
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
				<br></br>
                <h5 style={{textAlign:"left", fontSize:16, fontWeight:600}}>Budget</h5>
                <br></br>
                
				<RangeSlider
					// onChange={(e)=>this.budgetFilter(e)}
					dataField="ratings_count"
					componentId="BookSensor"
					range={{    
						start: 5000,
						end: 50000,
					}}
					rangeLabels={{
						start: '₹100000',
						end: '₹2000000',
					}}
				/>
			</div>
        </div>

                    <hr></hr>
        <div className="row">
            <div className="col">
                <h5 style={{float:"left", fontSize:16, fontWeight:600}}>Make + Models</h5>
                {/* <SelectedFilters /> */}
                {/* <CategorySearch
	                componentId="searchbox"
	                dataField="model"
	                categoryField="brand.keyword"
					placeholder="Search cars by Model"
					
                /> */}
				<ListContainer getCarNameFilter={this.getCarNameFilter}/>
            </div>
        </div>
		<hr></hr>
        <div className="row">
            <div className="col">
            <h5 style={{textAlign:"left", fontSize:16, fontWeight:600}}>Year</h5>
			<YearRadio getRadioBtnFilterData={this.getRadioBtnFilterData}/>

            </div>
        </div>
		<hr></hr>
        <div className="row">
            <div className="col">
            <h5 style={{textAlign:"left", fontSize:16, fontWeight:600}}>Mileage</h5>
			<MileageRadio  getRadioBtnFilterData={this.getRadioBtnFilterData}/>
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
		  onChange={(e)=>this.handleChange('petrol','fuel',e)}
          value="checkedA"
        	/>
				<Checkbox
		  	checked={this.state.checkedB}
		  	label="Diesel"
		  	onChange={(e)=>this.handleChange('Diesel','fuel',e)}
          	value="checkedB"
        	/>
			<Checkbox
		  checked={this.state.checkedC}
		  label="CNG"
		  onChange={(e)=>this.handleChange('cng','fuel',e)}
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
		  			onChange={(e)=>this.handleChange('hatchback','body',e)}
          			value="checkedB1"
					/>
					<Checkbox
		  			checked={this.state.checkedB2}
		  			label="Sedan"
		  			onChange={(e)=>this.handleChange('sedan','body',e)}
          			value="checkedB2"
					/>
					<Checkbox
		  			checked={this.state.checkedB3}
		  			label="SUV"
		  			onChange={(e)=>this.handleChange('suv','body',e)}
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
		  			onChange={(e)=>this.handleChange('automatic','transmission',e)}
          			value="checkedT1"
					/>
					<Checkbox
		  			checked={this.state.checkedT2}
		  			label="Manual"
		  			onChange={(e)=>this.handleChange('manual','transmission',e)}
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
		  			onChange={(e)=>this.handleChange('1','owner',e)}
          			value="checkedO1"
					/>
					<Checkbox
		  			checked={this.state.checkedO2}
		  			label="2nd Owner"
		  			onChange={(e)=>this.handleChange('2','owner',e)}
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
                    {/* <Grid container spacing={1} >
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
                    </Grid> */}
                  </div>

                    
        </div>

		


	</ReactiveBase>
          );
    }
}
 
export default Sidefilter;