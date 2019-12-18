import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';

class HomePage extends PureComponent {
    render() {
        return (
            <div>
                <NavBar />
            </div>
        );
    }
}

HomePage.propTypes = {

};

export default HomePage;