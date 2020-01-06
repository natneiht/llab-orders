import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class OrderConfirmDetail extends PureComponent {
    render() {
        return (
            <div>
            <h5>Khách hàng/ Customer</h5>
            <h5>Dịch vụ/ Our services</h5>
            <h5>Ghi chú/ Note</h5>

            </div>
        );
    }
}

OrderConfirmDetail.propTypes = {

};

export default OrderConfirmDetail;