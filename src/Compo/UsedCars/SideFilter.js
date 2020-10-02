import React, { Component } from 'react';
import {  MDBRow, MDBCardBody,MDBView, MDBMask, MDBCol,MDBContainer } from "mdbreact";
// import RangeSlider from 'react-bootstrap-range-slider';
import {
	ReactiveBase,
	RangeSlider,
	SelectedFilters,
	ResultList,
	ReactiveList,CategorySearch,SingleRange
} from '@appbaseio/reactivesearch';


class Teams extends Component {
    render() { 
        return (
            <ReactiveBase
		app="good-books-ds"
		url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@arc-cluster-appbase-demo-6pjy6z.searchbase.io"
		enableAppbase
	>
		<div className="row">
			<div className="col">
                <h5 style={{float:"left", fontSize:16, fontWeight:600}}>Budget</h5>
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
            </div>
        </div>
        <div className="row">
            <div className="col">
            <h5 style={{float:"left", fontSize:16, fontWeight:600}}>Year</h5>
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
        <div className="row">
            <div className="col">
            <h5 style={{float:"left", fontSize:16, fontWeight:600}}>Mileage</h5>
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

	</ReactiveBase>
          );
    }
}
 
export default Teams;