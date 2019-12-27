import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import './AdminLogin.css';

class AdminLogin extends PureComponent {
    render() {
        return (
            <div>
                <NavBar title="ĐĂNG NHẬP"/>
                <div className="container">
                    <div className="col-4 login-form">
                        <div className="row">
                            <input type="text" className="login-form-item" placeholder="ID" />
                        </div>
                        <div className="row">
                            <input type="text" className="login-form-item" placeholder="Password" />
                        </div>
                        <div className="row">
                            <button className="login-form-item">ĐĂNG NHẬP</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AdminLogin.propTypes = {

};

export default AdminLogin;