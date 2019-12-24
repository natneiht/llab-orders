import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class OrderRow extends PureComponent {
    constructor(props) {
        super(props);
        // const { itemDetail, itemSelected } = this.props;
        this.state = {
            isSelected: this.props.itemSelected,
            itemDetail: this.props.itemDetail
        }
    }
    
    render() {
        const { itemName, itemDetail, itemSelected } = this.props;
        return (
            <tr>
            <td className="film-detail-name">
              <input type="checkbox" /> {itemName}
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
        );
    }
}

OrderRow.propTypes = {

};

export default OrderRow;