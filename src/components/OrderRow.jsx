import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class OrderRow extends PureComponent {
  constructor(props) {
    super(props);
    // const { itemDetail, itemSelected } = this.props;
    this.state = {
      isSelected: this.props.itemSelected,
      itemDetail: this.props.itemDetail
    };
  }

  changeDetail = (name, value) => {
    const { onChangeDetail, itemDetail, itemKey } = this.props;
    const newDetail = { ...itemDetail, [name]: value };
    onChangeDetail(itemKey, this.validCheckbox(newDetail));
  };

  validCheckbox = (detail) => {
    // const { itemKey, onChangeDetail } = this.props;
    const {
      isSelected,
      isDevelop,
      isScan,
      isBorder,
      isHighres,
      isPush,
      pushLevel,
      quantity
    } = detail;
    // console.log(detail);
    if (isBorder) {
      // For quick selecting
      return { ...detail, isSelected: true, isDevelop: true, isScan: true };
    }
    if (isHighres) {
      // Only highres when scan option is selected
      return { ...detail, isSelected: true, isScan: true };
    }
    if (pushLevel>0) {
      // Only highres when scan option is selected
      return { ...detail, isPush: true };
    }
    if (!isScan) {
      // No scan, no highres
      return { ...detail, isHighres: false };
    }
    if (isSelected && !isDevelop) {
      return { ...detail, isDevelop: true, isScan: true };
    }

    if (!isDevelop && !isScan && !isBorder && !isHighres) {
      // Unselect item when no option is selected
      return { ...detail, isSelected: false };
    }
    if (isDevelop || isScan || isBorder || isHighres) {
      // Select item when any option is selected
      return { ...detail, isSelected: true };
    }
    return detail;
  };

  render() {
    const { itemName, itemDetail, itemSelected } = this.props;
    const {
      isSelected,
      isDevelop,
      isScan,
      isBorder,
      isHighres,
      isPush,
      pushLevel,
      quantity
    } = itemDetail;
    return (
      <tr>
        <td className="film-detail-name">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={(e) => this.changeDetail("isSelected", e.target.checked)}
          />{" "}
          {itemName}
        </td>
        <td>
          <input
            type="checkbox"
            checked={isDevelop}
            onChange={(e) => this.changeDetail("isDevelop", e.target.checked)}
          />
        </td>
        <td>
          <input
            type="checkbox"
            checked={isScan}
            onChange={(e) => this.changeDetail("isScan", e.target.checked)}
          />
        </td>
        <td>
          <input
            type="checkbox"
            checked={isBorder}
            onChange={(e) => this.changeDetail("isBorder", e.target.checked)}
          />
        </td>
        <td>
          <input
            type="checkbox"
            checked={isHighres}
            onChange={(e) => this.changeDetail("isHighres", e.target.checked)}
          />
        </td>
        <td>
          <select
            style={{ verticalAlign: "middle" }}
            value={pushLevel}
            onChange={(e) => {
              this.changeDetail("pushLevel", e.target.value)
              this.changeDetail("isPush", e.target.value>0?true:false)
            
            }}
          >
            <option value="0">0</option>
            <option value="1">+1</option>
            <option value="2">+2</option>
            <option value="3">+3</option>
            <option value="4">+4</option>
            <option value="5">+5</option>
          </select>
        </td>
        <td>
          <input
            type="text"
            style={{ width: "40px" }}
            value={quantity}
            onChange={(e) => {
              const quant = e.target.value;
              if (!isNaN(Number(quant)) && quant < 99)
                this.changeDetail("quantity", quant);
            }}
          />
        </td>
      </tr>
    );
  }
}

OrderRow.propTypes = {};

export default OrderRow;
