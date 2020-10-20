import React from 'react';
import { MDBBtn,MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBIcon, MDBContainer } from 'mdbreact';

const CardExampl = () => {
  
  return (
     <MDBContainer>
     
    <MDBRow style={{ marginTop:"5px", }}>
    <MDBCol>
      <a href="/detail-car">
      <MDBCard>
        <MDBCardImage className="img-fluid-cards" src="/images/SampleData/Alto K10.jpg" waves />
        <MDBCardBody>
          <div className="heart-carName">
          <h2 className="carName"> 2013 Maruti Suzuki Alto</h2>
            <MDBIcon icon="heart" className="ml-2"/>
          </div>
          <div className="ratedate1">
              <p className="bnKmZw l">10000 miles</p>
              <p className="bnKmZw l" >2013 reg</p>
              <p className="bnKmZw l">Petrol</p>
              <p className="bnKmZw l">Manual</p>
            </div>
                        <div className="ljwTDc">
                          <p className="iFsKIn"> ₹1,25000</p>
                          {/* <a href="#" type="btn" className="view-car">View this car</a> */}
                          <MDBBtn color="deep-orange" size="md">View </MDBBtn>
                        </div>
                        
        </MDBCardBody>
      </MDBCard>
      </a>
      
    </MDBCol>
    <MDBCol>
    <a href="/detail-car">
      <MDBCard>
        <MDBCardImage className="img-fluid-cards" src="/images/SampleData/Grand i10.jpg" waves />
        <MDBCardBody>
          <div className="heart-carName">
          <h2 className="carName"> 2014 Hyundai Grand i10</h2>
            <MDBIcon icon="heart" className="ml-2"/>
          </div>
          <div className="ratedate1">
              <p className="bnKmZw l">15000 miles</p>
              <p className="bnKmZw l" >2014 reg</p>
              <p className="bnKmZw l">Petrol</p>
              <p className="bnKmZw l">Automatic</p>
            </div>
                        <div className="ljwTDc">
                          <p className="iFsKIn"> ₹3,30000</p>
                          {/* <a href="#" type="btn" className="view-car">View this car</a> */}
                          <MDBBtn color="deep-orange" size="md">View </MDBBtn>
                        </div>
                        
        </MDBCardBody>
      </MDBCard>
      </a>
  </MDBCol>
  </MDBRow>
  <MDBRow style={{ marginTop:"20px", }}>
    <MDBCol>
    <a href="/detail-car">
      <MDBCard>
        <MDBCardImage className="img-fluid-cards" src="/images/SampleData/Brio.jpg" waves />
        <MDBCardBody>
          <div className="heart-carName">
          <h2 className="carName"> 2015 Honda Brio</h2>
            <MDBIcon icon="heart" className="ml-2"/>
          </div>
          <div className="ratedate1">
              <p className="bnKmZw l">50000 miles</p>
              <p className="bnKmZw l" >2015 reg</p>
              <p className="bnKmZw l">Petrol</p>
              <p className="bnKmZw l">Manual</p>
            </div>
                        <div className="ljwTDc">
                          <p className="iFsKIn"> ₹2,50000</p>
                          {/* <a href="#" type="btn" className="view-car">View this car</a> */}
                          <MDBBtn color="deep-orange" size="md">View </MDBBtn>
                        </div>
                        
        </MDBCardBody>
      </MDBCard>
      </a>
    </MDBCol>
    <MDBCol>
    <a href="/detail-car">
      <MDBCard>
        <MDBCardImage className="img-fluid-cards" src="/images/SampleData/Wagon R.jpg" waves />
        <MDBCardBody>
          <div className="heart-carName">
          <h2 className="carName"> 2012 Maruti Suzuki Wagon R</h2>
            <MDBIcon icon="heart" className="ml-2"/>
          </div>
          <div className="ratedate1">
              <p className="bnKmZw l">48000 miles</p>
              <p className="bnKmZw l" >2012 reg</p>
              <p className="bnKmZw l">CNG</p>
              <p className="bnKmZw l">Manual</p>
            </div>
                        <div className="ljwTDc">
                          <p className="iFsKIn"> ₹2,39000</p>
                          {/* <a href="#" type="btn" className="view-car">View this car</a> */}
                          <MDBBtn color="deep-orange" size="md">View </MDBBtn>
                        </div>
                        
        </MDBCardBody>
      </MDBCard>
      </a>
  </MDBCol>
  </MDBRow>

  <MDBRow style={{ marginTop:"20px", }}>
    <MDBCol>
    <a href="/detail-car">
      <MDBCard>
        <MDBCardImage className="img-fluid-cards" src="/images/SampleData/City.jpg" waves />
        <MDBCardBody>
          <div className="heart-carName">
          <h2 className="carName"> 2015 Honda City</h2>
            <MDBIcon icon="heart" className="ml-2"/>
          </div>
          <div className="ratedate1">
              <p className="bnKmZw l">90000 miles</p>
              <p className="bnKmZw l" >2015 reg</p>
              <p className="bnKmZw l">Petrol</p>
              <p className="bnKmZw l">Manual</p>
            </div>
                        <div className="ljwTDc">
                          <p className="iFsKIn"> ₹6,48000</p>
                          {/* <a href="#" type="btn" className="view-car">View this car</a> */}
                          <MDBBtn color="deep-orange" size="md">View </MDBBtn>
                        </div>
                        
        </MDBCardBody>
      </MDBCard>
      </a>
    </MDBCol>
    <MDBCol>
    <a href="/detail-car">
      <MDBCard>
        <MDBCardImage className="img-fluid-cards" src="/images/SampleData/Innova.jpg" waves />
        <MDBCardBody>
          <div className="heart-carName">
          <h2 className="carName"> 2015 Toyota Innova</h2>
            <MDBIcon icon="heart" className="ml-2"/>
          </div>
          <div className="ratedate1">
              <p className="bnKmZw l">69000 miles</p>
              <p className="bnKmZw l" >2015 reg</p>
              <p className="bnKmZw l">Diesel</p>
              <p className="bnKmZw l">Manual</p>
            </div>
                        <div className="ljwTDc">
                          <p className="iFsKIn"> ₹12,00000</p>
                          {/* <a href="#" type="btn" className="view-car">View this car</a> */}
                          <MDBBtn color="deep-orange" size="md">View </MDBBtn>
                        </div>
                        
        </MDBCardBody>
      </MDBCard>
      </a>
  </MDBCol>
  </MDBRow>
  <MDBRow style={{ marginTop:"20px", }}>
    <MDBCol>
    <a href="/detail-car">
      <MDBCard>
        <MDBCardImage className="img-fluid-cards" src="/images/SampleData/Etios.jpg" waves />
        <MDBCardBody>
          <div className="heart-carName">
          <h2 className="carName"> 2011 Toyota Etios</h2>
            <MDBIcon icon="heart" className="ml-2"/>
          </div>
          <div className="ratedate1">
              <p className="bnKmZw l">70000 miles</p>
              <p className="bnKmZw l" >2011 reg</p>
              <p className="bnKmZw l">Diesel</p>
              <p className="bnKmZw l">Manual</p>
            </div>
                        <div className="ljwTDc">
                          <p className="iFsKIn"> ₹4,00000</p>
                          {/* <a href="#" type="btn" className="view-car">View this car</a> */}
                          <MDBBtn color="deep-orange" size="md">View </MDBBtn>
                        </div>
                        
        </MDBCardBody>
      </MDBCard>
      </a>
    </MDBCol>
    <MDBCol>
    <a href="/detail-car">
      <MDBCard>
        <MDBCardImage className="img-fluid-cards" src="/images/SampleData/Swift.jpg" waves />
        <MDBCardBody>
          <div className="heart-carName">
          <h2 className="carName"> 2012 Maruti Suzuki Swift</h2>
            <MDBIcon icon="heart" className="ml-2"/>
          </div>
          <div className="ratedate1">
              <p className="bnKmZw l">39000 miles</p>
              <p className="bnKmZw l" >2012 reg</p>
              <p className="bnKmZw l">Diesel</p>
              <p className="bnKmZw l">Automatic</p>
            </div>
                        <div className="ljwTDc">
                          <p className="iFsKIn"> ₹3,75000</p>
                          {/* <a href="#" type="btn" className="view-car">View this car</a> */}
                          <MDBBtn color="deep-orange" size="md">View </MDBBtn>
                        </div>
                        
        </MDBCardBody>
      </MDBCard>
      </a>
  </MDBCol>
  </MDBRow>

  <MDBRow style={{ marginTop:"20px", }}>
    <MDBCol>
    <a href="/detail-car">
      <MDBCard>
        <MDBCardImage className="img-fluid-cards" src="/images/SampleData/Ertiga.jpg" waves />
        <MDBCardBody>
          <div className="heart-carName">
          <h2 className="carName"> 2016 Maruti Suzuki Ertiga</h2>
            <MDBIcon icon="heart" className="ml-2"/>
          </div>
          <div className="ratedate1">
              <p className="bnKmZw l">34000 miles</p>
              <p className="bnKmZw l" >2016 reg</p>
              <p className="bnKmZw l">Diesel</p>
              <p className="bnKmZw l">Manual</p>
            </div>
                        <div className="ljwTDc">
                          <p className="iFsKIn"> ₹5,20000</p>
                          {/* <a href="#" type="btn" className="view-car">View this car</a> */}
                          <MDBBtn color="deep-orange" size="md">View </MDBBtn>
                        </div>
                        
        </MDBCardBody>
      </MDBCard>
      </a>
    </MDBCol>
    <MDBCol>
    <a href="/detail-car">
      <MDBCard>
        <MDBCardImage className="img-fluid-cards" src="/images/SampleData/XUV500.jpg" waves />
        <MDBCardBody>
          <div className="heart-carName">
          <h2 className="carName"> 2014 Mahindra XUV 500</h2>
            <MDBIcon icon="heart" className="ml-2"/>
          </div>
          <div className="ratedate1">
              <p className="bnKmZw l">67000 miles</p>
              <p className="bnKmZw l" >2014 reg</p>
              <p className="bnKmZw l">Diesel</p>
              <p className="bnKmZw l">Manual</p>
            </div>
                        <div className="ljwTDc">
                          <p className="iFsKIn"> ₹6,00000</p>
                          {/* <a href="#" type="btn" className="view-car">View this car</a> */}
                          <MDBBtn color="deep-orange" size="md">View </MDBBtn>
                        </div>
                        
        </MDBCardBody>
      </MDBCard>
      </a>
  </MDBCol>
  </MDBRow>
   
   
  </MDBContainer> 
  )
}

export default CardExampl;