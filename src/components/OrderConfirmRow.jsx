import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { formatCurrency } from "../functions.js";

class OrderConfirmRow extends PureComponent {
    render() {
        const { rowDetail, calcTotalPayment } = this.props;
        return (
            <div className="row">
            <div className="col-8">{rowDetail.name}
              {/* { isDevelop && <div className="row">+ Dev</div> }
              { isScan && <div className="row">+ Scan</div> }
              { isHighres && <div className="row">+ Highres</div> } */}
            </div>
            <div className="col-2">
              {/* {quantity === null
                ? 1
                : quantity} */}
            </div>
            <div className="col-2">
              {formatCurrency(this.calcTotalPayment(rowDetail))}
            </div>
          </div>
        );
    }
}

OrderConfirmRow.propTypes = {

};

export default OrderConfirmRow;