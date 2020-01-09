import React, { PureComponent } from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import OrderConfirmDetail from "./OrderConfirmDetail";

class OrderConfirm extends PureComponent {
  render() {
    const { show, hide, totalProducts, customerInfomation, orderNote } = this.props;
    // console.log(totalProducts);
    return (
      <>
        <Modal show={this.props.show} onHide={() => hide()}>
          <Modal.Header closeButton>
            <Modal.Title>Xác nhận đơn hàng</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <OrderConfirmDetail customerInfomation={customerInfomation} totalProducts={totalProducts} orderNote={orderNote}/>
          </Modal.Body>
          <Modal.Footer>
            <button className="submit-button" onClick={() => hide()}>
              Đồng ý
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

OrderConfirm.propTypes = {};

export default OrderConfirm;
