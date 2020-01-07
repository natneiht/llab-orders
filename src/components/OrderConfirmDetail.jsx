import React, { PureComponent } from "react";
import { filmPrice } from "../filmSizeOption";
import { formatCurrency } from "../functions.js";
import PropTypes from "prop-types";

class OrderConfirmDetail extends PureComponent {
  calcTotalPayment = (filmDetail) => {
    if (!filmDetail) return 0;
    let totalPrice;
    const { filmSize, key, detail } = filmDetail;
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
    if (!filmPrice.hasOwnProperty(filmSize)) return 0;
    const itemIndex = filmPrice[filmSize].findIndex((item) => item.key === key);
    if (itemIndex >= 0) {
      const { dev, scan, highres, push } = filmPrice[filmSize][itemIndex];
      const itemQuantity = quantity === null ? 1 : quantity;
      totalPrice =
        (isDevelop * dev +
          isScan * scan +
          isHighres * highres +
          isPush * push * pushLevel) *
        itemQuantity;
    } else {
      return 0;
    }
    return totalPrice;
  };

  render() {
    const { totalProducts, customerInfomation } = this.props;
    const { name, phoneNumber, email } = customerInfomation;
    const renderList = {
      film135: totalProducts.filter((item) => item.filmSize === "film135"),
      film120: totalProducts.filter((item) => item.filmSize === "film120"),
      other: totalProducts.filter((item) => item.filmSize === "other")
    };
    return (
      <div>
        <div className="order-confirm-heading">Khách hàng/ Customer</div>
        <div className="order-content-wrapper">
          <div className="order-confirm-field">{name}</div>
          <div className="order-confirm-field">{phoneNumber}</div>
          <div className="order-confirm-field">{email}</div>
        </div>
        <div className="order-confirm-heading">Dịch vụ/ Our services</div>
        <div className="container order-content-wrapper">
          {renderList &&
            Object.keys(renderList).map((filmSizeKey) => {
              const productGroup = renderList[filmSizeKey];
              return (
              <>
                {productGroup.length > 0 && (
                  <div className="row">{filmSizeKey}</div>
                )}
                {productGroup &&
                  productGroup.map((item) => {
                    const { key, filmSize, detail } = item;
                    const {
                      isDevelop,
                      isScan,
                      isBorder,
                      isHighres,
                      isPush,
                      pushLevel,
                      quantity
                    } = detail;
                    return (
                      <div className="row">
                        <div className="col-8">{item.name}
                        <ul>
                          { (isDevelop && isScan) && <li>+ Dev & scan</li> }
                          { (isDevelop && !isScan) && <li>+ Dev only</li> }
                          { (!isDevelop && isScan) && <li>+ Scan only</li> }
                          { isBorder && <li>Border</li> }
                          { isHighres && <li>Highres</li> }
                    { isPush && <li>Push: {pushLevel}</li> }
                          
                        </ul>
                        </div>
                        <div className="col-2">
                          {quantity === null
                            ? 1
                            : quantity}
                        </div>
                        <div className="col-2">
                          {formatCurrency(this.calcTotalPayment(item))}
                        </div>
                      </div>
                  )})}
              </>
            )})}
        </div>

        <div className="order-confirm-heading">Ghi chú/ Note</div>
      </div>
    );
  }
}

OrderConfirmDetail.propTypes = {};

export default OrderConfirmDetail;
