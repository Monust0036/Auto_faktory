import React, {Component} from 'react';
import { MDBBtn,MDBRow, MDBCard, MDBCardBody,MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBCardImage, 
  MDBModalFooter,MDBCardTitle, MDBCardText, MDBCol,MDBIcon, MDBContainer,MDBModal, MDBModalBody, MDBModalHeader,MDBInput} from 'mdbreact';
import { Pannellum } from "pannellum-react";
import myImage from "./carsample.jpeg"


class CardExampl extends Component {
  state = {
    isOpen: false,
    modal13: false,
    modal14: false,
    modal15: false,
    

  };
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  render(){
    return (
      <MDBContainer>
      
     <MDBRow style={{ marginTop:"20px", }}>
         <MDBCol size="8" >
             <MDBCard style={{ margin:"0 0.375rem"}} onClick={this.toggle(14)} >
                 <MDBCardImage style={{ borderRadius:"4px"}}  className="img-fluid"  src="https://res.cloudinary.com/cazoo/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/cazoo-imagery/car_gallery_images/AY67WCV/bSA80MZJpJUHI1tg2MM2.JPG" waves  />
         
             </MDBCard>
             <MDBBtn color="elegant" size="lg" onClick={this.toggle(14)}>Gallery</MDBBtn>
             <MDBBtn color="elegant" size="lg" onClick={this.toggle(13)}>View 360° Interior</MDBBtn>
             <MDBBtn color="elegant" size="lg" >View 360° Exterior</MDBBtn>
         </MDBCol>
          <MDBCol size="4">
            <MDBCard >
 
                 <MDBCardBody>
                 <MDBIcon icon="heart" style={{ texAlign:"right" }}className="ml-2" />
                     <div className="short-spec">
                         <h4 style={{textAlign:"left"}} > 2015 Hyundai i10 Sportz 1.1 iRDE2</h4>
                          <h5 style={{textAlign:"left"}} >30,000 Kms.Petrol.Manual </h5>
                      </div>
                       <div className="ljwTDc">
                       
                         <p className="iFsKIn"> ₹18,8500</p>
                       </div>
                     <MDBBtn color="deep-orange" size="lg" onClick={this.toggle(15)}>Buy Now </MDBBtn>
                     <MDBBtn color="deep-orange" size="lg" onClick={this.toggle(15)}>Test Drive</MDBBtn>
       </MDBCardBody>
     </MDBCard>
   </MDBCol>
   </MDBRow>
   {/* modal */}
              <MDBContainer className="360-view-color">
                      <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)} size="fluid" >
                        <div className="interior-view">
                        <MDBModalHeader toggle={this.toggle(13)} style={{color:"#fff"}}> 
                        <h4 style={{textAlign:"center", color:"#fff"}}>
                          Click and drag to rotate the car</h4> </MDBModalHeader>


                        <MDBModalBody>
                          

                            <div className="App">
      <Pannellum
        width="100%"
        height="500px"
        image={myImage}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        autoRotate={-5}
        showZoomCtrl={false}
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        <Pannellum.Hotspot
          type="custom"
          pitch={31}
          yaw={150}
          handleClick={(evt, name) => console.log(name)}
          name="hs1"
        />
      </Pannellum>
    </div>
                        </MDBModalBody>

                        </div>
                        
                      
                      
                      </MDBModal>
                    </MDBContainer>

                    {/* end modal */}


                     {/* modal */}
              <MDBContainer className="360-view-color">
                      <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} size="fluid" >
                        <div className="slides-view">
                        <MDBModalHeader toggle={this.toggle(14)} style={{color:"#fff"}}> 
                         </MDBModalHeader>


                        <MDBModalBody>
                          

                        <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/cazoo/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/cazoo-imagery/car_gallery_images/DE67DHM/jI1RDybVtJNRBUgxmuD4.JPG"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/cazoo/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/aos-cazoo-imagery/2808/cazoo/BL17OAZ/e06.jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/cazoo/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/aos-cazoo-imagery/2808/cazoo/BL17OAZ/e04.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
                        </MDBModalBody>

                        </div>
                        
                      
                      
                      </MDBModal>
                    </MDBContainer>

                    {/* end modal */}



{/* ******************************************beginning of Test Drive ********************************* */}
                    <MDBContainer>
                      <MDBModal isOpen={this.state.modal15} toggle={this.toggle(15)}>
                        <MDBModalHeader toggle={this.toggle(15)}>  </MDBModalHeader>


                        <MDBModalBody>
                          <h4 className="LoginModal__loginHeading">
                            Login to Book Test Drive</h4>

                            <MDBInput label=" Enter phone number" type="text" id="inputMDEx" class="form-control" />
                            <div className="LoginModal-whatsappCheckWrap">
                              <i className="fa fa-check LoginModal__checkIcon LoginModal__checked" aria-hidden="true"></i>
                              Send updates on Whatsapp</div>
                            <p className="LoginModal-terms">By logging in, I agree to <a href="#">terms</a>  and <a href="#">privacy policy</a> </p>
                            <hr/>
                            <button className="LoginModal-getOtpBtnWrap" >proceed</button>
                        </MDBModalBody>
                      
                      
                      </MDBModal>
                    </MDBContainer>




 {/* **************************************Ending Of test************************************** */}
 
 
 </MDBContainer> 
   )
}
  
  
}

export default CardExampl;