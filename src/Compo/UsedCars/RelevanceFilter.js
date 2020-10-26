import React from "react";
import {
  MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBBtn,MDBIcon
} from "mdbreact";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



class Slider extends React.Component {

  
  
  render() {
    return (
      <>
        
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",padding:"0 15px"}}>
              <div >
    <p style={{marginBottom:"0px"}}>AutoFaktory Assured <b>{this.props.count}</b> used cars in Mumbai</p>
              </div>
            <div>
                <select  value={this.props.sort} onChange={this.props.sortCarsdata} class="browser-default custom-select">
                    <option selected>Relevance</option>
                    <option value="newest">Newest First</option>
                    <option value="pricelowtohigh">Price- Low to High</option>
                    <option value="pricehightolow">Price- High to Low</option>
                    <option value="drivenlowtohigh">Km Driven- Low to High</option>
                    <option value="drivenhighTolow">Km Driven- High to Low</option>
                    <option value="yearlowTohigh">Year- Low to High</option>
                    <option value="yearhighTolow">Year- High to Low</option>
                </select>
            </div>
              
      </div>
      </>
    )
  }
}

export default Slider;