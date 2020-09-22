import React, { Component } from 'react';
// import Banner from '../images/logo/AutoFactory.jpg'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { index:0,
            bgimages : ["/images/Imagesofteam/car11.jpg",
            "/images/Imagesofteam/car12.jpg",
            "/images/Imagesofteam/car13.jpg",
            "/images/Imagesofteam/car14.jpg",
            "/images/Imagesofteam/car15.jpg"] 
                    }
    }
    previousImage(){
        if (this.state.index > 0){
            this.setState({
                index: this.state.index - 1 
            })
        }else{
            this.setState({
                index: this.state.bgimages.length - 1
            })
        }
              
    }
    nextImage() {
        if (this.state.index < this.state.bgimages.length - 1) {
            this.setState({
                index: this.state.index + 1
            })
        }else{
            this.setState({
                index: 0
            })
        }
    }
    render() { 
        return (
            <header class="masthead" >
            <div class="container h-100">
              <div class="row h-100 align-items-center">
                <div class="col-12 text-center">
                  <h1 class="font-weight-light">Vertically Centered Masthead Content</h1>
                  <p class="lead">A great starter layout for a landing page</p>
                </div>
              </div>
            </div>
          </header>
      
         );
    }
}
 
export default Header;