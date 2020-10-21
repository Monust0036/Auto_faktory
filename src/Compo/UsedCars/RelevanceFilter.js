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
                    <p style={{marginBottom:"0px"}}>AutoFaktory Assured used cars in Mumbai</p>
              </div>
            <div>
                <select class="browser-default custom-select">
                    <option selected>Relevance</option>
                    <option value="1">Newest First</option>
                    <option value="2">Price- Low to High</option>
                    <option value="3">Price- High to Low</option>
                    <option value="2">Km Driven- Low to High</option>
                    <option value="3">Km Driven- High to Low</option>
                    <option value="2">Year- Low to High</option>
                    <option value="3">Year- High to Low</option>
                </select>
            </div>
              
      </div>
      </>
    )
  }
}

export default Slider;