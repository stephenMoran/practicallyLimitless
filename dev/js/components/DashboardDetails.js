import React, {Component} from 'react';
import $ from 'jquery';

class DashboardDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyId: this.props.companyId,
            name: this.props.name,
            address: this.props.address,
            email: this.props.email
        };
    }

    handleChange(name, e) {
        this.setState({[name]: e.target.value});
    }
    
    render() {
        return (
            <div className="form-body">
                <div className="form-input__section labelled">
                    <div className="form-input__label">Company Name</div>
                    <input type="text" placeholder="Company Name" className="form-input__value" value={this.state.name} onChange={(e) => this.handleChange("name", e)}/>
                </div>
                <div className="form-input__section labelled">
                    <div className="form-input__label">Company Address</div>
                    <input type="text" placeholder="Company Address" className="form-input__value" value={this.state.address} readOnly/>
                </div>
                <div className="form-input__section labelled">
                    <div className="form-input__label">E-mail Address</div>
                    <input type="email" placeholder="E-mail Address" className="form-input__value" value={this.state.email} readOnly/>
                </div>     
            </div>
        );
    }
}

export default DashboardDetails;