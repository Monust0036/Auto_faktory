import  React  from  'react';
import  validator  from  'validator';
import { API } from "../config.js";
import { NavLink, withRouter } from  'react-router-dom';

class  Auth  extends  React.Component {
    constructor() {
        super();
        this.state = {
            dispalyPhonePage:  true,
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
                    phoneNumber:  this.state.phoneNumber
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
            console.log(e,"i am coming here ")
            validator.isMobilePhone(this.state.phoneNumber)
                ? this.handleSendOtp()
                : this.setState({ invalid:  'Enter a valid Phone Number' })
        }
        else {
            this.setState({ msg:  "Phone Number can't be empty" });
        }
    };

    // handleVerifyOtp = e  => {
    //     e.preventDefault();
    //     if(this.state.otp){
    //         fetch(`${API}/verifyotp`,
    //             {
    //                 method:  'POST',
    //                 headers: {
    //                     'Content-Type':  'application/json'
    //                 },
    //                 body:  JSON.stringify({
    //                     phoneNumber:  this.state.phoneNumber,
    //                     otp:  this.state.otp
    //                 })
    //             }
    //         )
    //         .then(res  =>  res.json())
    //         .then(data  => {
    //             if (data.success) {
    //                 localStorage.setItem('storiesloggeduser', data.signuptoken);
    //                 localStorage.setItem('storiesloggeduserid', data.userId);
    //                 this.props.handleIslogged(true);
    //                 this.props.history.push('/');
    //             }
    //             if (!data.success) this.setState({ msg:  data.message });
    //             if (data.logintoken) {
    //                 localStorage.setItem('storiesloggeduser', data.logintoken);
    //                 localStorage.setItem('storiesloggeduserid', data.userId);
    //                 this.props.handleIslogged(true);
    //                 this.props.history.push('/');
    //             }
    //         })
    //          }
    //     else {
    //         this.setState({ msg:  "OTP can't be empty" })
    //     }
    // };
    handleVerifyOtp = e  => {
        e.preventDefault();
        console.log(">>>>>>>>>>>>>>>>>>>>")
        if(this.state.otp){
            fetch(`${API}/verifyotp`,
                {
                    method:  'POST',
                    headers: {
                        'Content-Type':  'application/json'
                    },
                    body:  JSON.stringify({
                        phoneNumber:  this.state.phoneNumber,
                        otp:  this.state.otp
                    })
                }
            )
            .then(res  =>  res.json())
            .then(data  => {
                if (data.success) {
                    localStorage.setItem('storiesloggeduser', data.signuptoken);
                    localStorage.setItem('storiesloggeduserid', data.userId);
                    this.props.handleIslogged(true);
                    this.props.history.push('/');
                }
                if (!data.success) this.setState({ msg:  data.message });
                if (data.logintoken) {
                    localStorage.setItem('storiesloggeduser', data.logintoken);
                    localStorage.setItem('storiesloggeduserid', data.userId);
                    this.props.handleIslogged(true);
                    this.props.history.push('/');
                }
            })
        }
        else {
            this.setState({ msg:  "OTP can't be empty" })
        }
    };

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
                    placeholder="918888888888"
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
                    placeholder="8432"
                    value={this.state.otp}
                    onChange={this.handleChange}
                    required
                />
                <div>
                    <button onClick={this.editPhoneNo}>Edit Phone Number </button>
                    <button onClick={this.handleSendOtp}> Resend OTP </button>
                </div>
                <input type="submit" onClick={this.handleVerifyOtp}  value="NEXT"/>
            </form>
        )
    }

    render() {
        let { dispalyPhonePage } = this.state;
        return(
            <>
                {dispalyPhonePage ? this.displayPhonePage() : this.displayOtpPage()}
            </>
        )
    }
}
export  default  withRouter(Auth);