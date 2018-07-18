 import React, {Component} from 'react';

 export default class CompanyRegistration extends Component {
    constructor() {
        super();
        this.state = {
            CompanyName: '',
            CompanyAddress: '',
            CompanyEmail: '',
            CompanyPassword: '',
            CompanyPasswordCheck: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(name, e) {
        this.setState({[name]: e.target.value});
    }

    isValidEmail() {
        var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        return emailPattern.test(this.state.CompanyEmail);
    }

    isValidPassword() {
        var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
        
        return passwordPattern.test(this.state.CompanyPassword);
    }

    passwordRepeatedCorrectly() {
        return this.state.CompanyPassword === this.state.CompanyPasswordCheck;
    }

    containsValue(str) {
        return !(str === "");
    }

    formIsSubmitable(){

    }

    onSubmit() {
        console.log('Got into Submit ');
        console.log('The email is valid -- ' + this.isValidEmail(this.state.CompanyEmail));
        console.log('The password is valid -- ' +this.isValidPassword(this.state.CompanyPassword));
        console.log('The passwords are the same -- ' +this.passwordRepeatedCorrectly(this.state.CompanyPassword));
        console.log('The value isnt blank -- ' +this.containsValue(this.state.CompanyName));
    }

    render() {
        return (
            <div>
                 <div className="form-header"> Company Registration Form </div>
                 <div>
                    <div className="form-input__heading">
                        Company Details
                    </div>
                    <div className="form-input__section">
                        <input id="CompanyName" type="text" name="CompanyName" placeholder="Company Name" className="form-input__value" onChange={(e) => this.handleChange("CompanyName", e)}/>
                    </div>
                    <div className="form-input__section">
                        <input id="CompanyAddress" type="text" name="CompanyAddress" placeholder="Company Address" className="form-input__value" onChange={(e) => this.handleChange("CompanyAddress", e)}/>
                    </div>
                    <div className="form-input__section">
                        <input id="CompanyEmail" type="email" name="CompanyEmail" placeholder="Email Address" className="form-input__value" onChange={(e) => this.handleChange("CompanyEmail", e)}/>
                    </div>
                    <div className="form-input__section">
                        <input id="CompanyPassword" type="password" name="CompanyPassword" placeholder="Password" className="form-input__value" onChange={(e) => this.handleChange("CompanyPassword", e)}/>
                    </div>
                    <div className="form-input__section">
                        <input id="CompanyPasswordCheck" type="password" name="CompanyPasswordCheck" placeholder="Password Verification" className="form-input__value" onChange={(e) => this.handleChange("CompanyPasswordCheck", e)}/>
                    </div>
                </div>
                <button className="form__submit-button" onClick={this.onSubmit} disabled="true">Submit Company Details</button>
                 
            </div>
        );
    }
 }