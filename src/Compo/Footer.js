import React, { Component } from 'react';
class Footer extends Component {
  
    render() { 
        return ( 

            <footer className="page-footer font-small mdb-color pt-4">
              <div className="container text-center text-md-left">
                <div className="row text-center text-md-left mt-3 pb-3">
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">AutoFactory</h6>
                    <p className="footertext">
Spinny is the most trusted way of buying & selling used cars. Choose from over 1000+ fully inspected second hand cars models. Select online and book a test drive at a Spinny Car Hub near you. Get 5 days assured money back guarantee and free 1 year extended warranty on all Spinny Assured pre owned cars.</p>
                  </div>
                  <hr className="w-100 clearfix d-md-none"/>
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                    <p className="footertext">
                      <i className="fas fa-home mr-3"></i> Get instant Quotes</p>
                    <p className="footertext">
                    {/* <p className="footertext">
                      <i className="fas fa-home mr-3"></i> Banglore Gorl's Campus</p>
                    <p className="footertext"></p> */}
                      <i className="fas fa-envelope mr-3"></i> test@gmail.com </p>
                    <p className="footertext">
                      <i className="fas fa-phone mr-3"></i> Call us on  - 72772 77275</p>
                    
                  </div>
                </div>
                <div className="text-center">
                <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                          <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.instagram.com/">
                            Instagram <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        {/* <li className="list-inline-item">
                          <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.instagram.com/navgurukul.dharamsala/">
                            Banglore <i className="fab fa-instagram"></i>
                          </a>
                        </li> */}
                        <li className="list-inline-item">
                          <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.facebook.com/">
                            facebook <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.youtube.com/">
                            Youtube <i className="fab fa-youtube"></i>
                          </a>
                        </li>
                      </ul>
                </div>
                <hr/>
                <div>
                  <div>
                    <p className="text-center mb-0  pb-2">© 2020 AutoFactory.com </p>
                  </div>
                </div>
              </div>
            </footer>
         );
    }
}
 
export default Footer;