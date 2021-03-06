import  React  from  'react';
import  validator  from  'validator';
import { API } from "../config.js";
import { Link, withRouter,Redirect } from  'react-router-dom';
import Home from "./Home";

class  Auth  extends  React.Component {
    constructor() {
        super();
        this.state = {
            dispalyPhonePage:  true,
            handleIslogged:true,
            phoneNumber:  '',
            otp:  '',
            invalid:  '',
            msg:  ''
        };
    }

    handleChange = event  => {
        this.setState({ invalid:  '', msg:  '' });
        let { name, value } = event.target;
        this.setState({ [name]:  value });
       
    };

    editPhoneNo = () => {
        this.setState({ dispalyPhonePage:  true });
    };

    handleSendOtp = () => {
        this.setState({ dispalyPhonePage:  false });
        fetch(`${API}/sendotp`,
            {
                method:  'POST',
                headers: {
                    'Content-Type':  'application/json'
                },
                body:  JSON.stringify({
                    phoneNumber:  `+91${this.state.phoneNumber}`
                })
            }
        )
        .then(res  =>  {
            return res.json();
        })
        .then(data  => {
            
            if (data.success) {
                // console.log(">>>>>>>>>>>>>>>>",data)
                this.setState({ dispalyPhonePage:  false });
            } else {
                this.setState({ dispalyPhonePage:  true });
            }
        });
    };

    submitPhoneNo = e  => {
       
        e.preventDefault();
        if(this.state.phoneNumber) {
            // console.log(e,"i am coming here ")
            /^[\d]{10}$/.test(this.state.phoneNumber)
                ? this.handleSendOtp()
                : this.setState({ invalid:  'Enter a valid Phone Number' })
        }
        else {
            this.setState({ msg:  "Phone Number can't be empty" });
        }
    };

    
    handleVerifyOtp = e  => {
        e.preventDefault();
        // console.log(">>>>>>>>>>>>>>>>>>>>")
        if(this.state.otp){
            fetch(`${API}/verifyotp`,
                {
                    method:  'POST',
                    headers: {
                        'Content-Type':  'application/json'
                    },
                    body:  JSON.stringify({
                        phoneNumber:  `+91${this.state.phoneNumber}`,
                        otp:  this.state.otp
                    })
                }
            )
            .then(async res  =>  {
                let data = await res.json()
                console.log(data);
                if (data.logintoken) {
                    localStorage.setItem('token', data.logintoken);
                    localStorage.setItem('userid', data.userId);
                    // this.props.handleIslogged(true);
                    await alert("Sign in Success!!")
                    this.props.onClose()
                    // this.props.history.p ush('/');
                    return('success')
                 

                }
                else this.setState({ msg:  data.message });
                
            })
        }
        else {
            this.setState({ msg:  "OTP can't be empty" })
        }
    };

    // handleIslogged = () =>{
    //     return(<Home/>)
    // }

    displayPhonePage = () => {
        return (
            <form >
                <label>{this.state.invalid}</label>
                <label>{this.state.msg}</label>
                <label>Enter a phone number</label>
                <input
                    type="tel"
                    className="form-control"
                    name="phoneNumber"
                    placeholder="8888888888"
                    value={this.state.phoneNumber}
                    onChange={this.handleChange}
                    required
                />
                <br></br>
                <input type="submit" onClick={this.submitPhoneNo} className="LoginModal-getOtpBtnWrap" value="NEXT"/>
            </form>
        )
    }

    displayOtpPage = () => {
        return (
            <form >
                <label>{this.state.invalid}</label>
                <label>{this.state.msg}</label>
                <label>Enter OTP</label>
                <input
                    type="tel"
                    className="form-control"
                    name="otp"
                    placeholder="Enter OTP"
                    value={this.state.otp}
                    onChange={this.handleChange}
                    required
                />
                <div className="login-next">
                    {/* <button onClick={this.editPhoneNo}>Edit Phone Number </button> */}
                    <button onClick={this.handleSendOtp}> Resend OTP </button>
                    <a href="/used-car">
                        <input type="submit" onClick={this.handleVerifyOtp}  value="NEXT"/>
                    </a>
               
                </div>
                
                
            </form>
        )
    }

    render() {
        let { dispalyPhonePage,handleIslogged  } = this.state;
        return(
            <>
                {dispalyPhonePage ? this.displayPhonePage() : this.displayOtpPage()}
                
            </>
        )
    }
}
export  default  withRouter(Auth);