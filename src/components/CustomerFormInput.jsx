import React, { PureComponent } from 'react';
import "./CustomerFormInput.css"
import PropTypes from 'prop-types';

class CustomerFormInput extends PureComponent {
    render() {
        return (
            <div className="customer-form-area">
                <div className="col-6 input-field-wrapper">
                    <div className="row customer-field align-middle">
                        <div className="col-6 customer-form-label">
                            Số điện thoại/ Phone number:
                        </div>
                        <div className="col-6">
                            <input type="text" className="customer-form-input" />
                        </div>
                    </div>
                    <div className="row customer-field align-middle">
                        <div className="col-6 customer-form-label">
                            Họ và tên/  Full name:
                        </div>
                        <div className="col-6">
                            <input type="text" className="customer-form-input" />
                        </div>
                    </div>
                    <div className="row customer-field align-middle">
                        <div className="col-6 customer-form-label">
                            Email:
                        </div>
                        <div className="col-6">
                            <input type="text" className="customer-form-input" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CustomerFormInput.propTypes = {

};

export default CustomerFormInput;