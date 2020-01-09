import React, { PureComponent } from "react";
import "./HomePage.css";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import CustomerFormInput from "../components/CustomerFormInput";
import FilmTypeSelect from "../components/FilmTypeSelect";
import FilmDetailSelect from "../components/FilmDetailSelect";
import { getFilmSize } from "../functions";
import { filmPrice } from "../filmSizeOption";
import OrderConfirm from "../components/OrderConfirm";

class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filmDetailList: [],
      customerInfomation: {
        name: null,
        phoneNumber: null,
        email: null
      },
      orderNote: null,
      currentFilmSize: "film135",
      showConfirm: false
    };
  }

  componentDidMount() {
    const defaultAttribute = {
      isSelected: false,
      isDevelop: false,
      isScan: false,
      isBorder: false,
      isHighres: false,
      isPush: false,
      pushLevel: 0,
      quantity: null
    };

    let filmDetailArray = [];
    Object.keys(filmPrice).map((filmSize) =>
      filmPrice[filmSize].map((item) =>
        filmDetailArray.push({
          detail: { ...defaultAttribute },
          key: item["key"],
          name: item["name"],
          filmSize
        })
      )
    );
    // console.log(filmDetailArray);
    const filmSizeList = getFilmSize().data.items;
    this.setState({ filmDetailList: filmDetailArray, filmSizeList });
  }

  // For film size switch area
  handleChangeFilmSize = (size) => {
    this.setState({ currentFilmSize: size });
  };

  // For each film row action
  handleChangeItemDetail = (key, detail) => {
    const newFilmList = [...this.state.filmDetailList];
    const itemIndex = newFilmList.findIndex((item) => item.key === key);
    // console.log(itemIndex);
    if (itemIndex >= 0) {
      newFilmList[itemIndex] = { ...newFilmList[itemIndex], detail };
    }
    // console.log(newFilmList);
    this.setState({ filmDetailList: newFilmList });
  };

  changeCustomerInfomation = (field, value) => {
    this.setState({
      customerInfomation: {
        ...this.state.customerInfomation,
        [field]: value
      }
    });
  };

  changeOrderNote = (content) => {
    this.setState({ orderNote: content });
  };
  toogleConfirmBox = () => {
    this.setState({ showConfirm: !this.state.showConfirm });
  };

  render() {
    const {
      customerInfomation,
      currentFilmSize,
      filmDetailList,
      showConfirm,
      orderNote
    } = this.state;
    const totalProducts = filmDetailList.filter(
      (item) => item.detail.isSelected === true
    );
    // console.log(totalProducts);
    // console.log(customerInfomation);
    return (
      <div>
        {/* <NavBar title="TẠO ĐƠN HÀNG" /> */}
        <div className="container">
          <CustomerFormInput
            changeCustomerInfomation={this.changeCustomerInfomation}
          />
          <FilmTypeSelect
            currentFilmSize={currentFilmSize}
            onChangeFilmSize={this.handleChangeFilmSize}
          />
          <FilmDetailSelect
            currentFilmSize={currentFilmSize}
            renderList={filmDetailList}
            onChangeDetail={this.handleChangeItemDetail}
          />
          <div className="row">
            <div className="col-8">
              <div className="note-label">Ghi chú:</div>
              <textarea
                className="note-content"
                onChange={(e) => this.changeOrderNote(e.target.value)}
              >
                {orderNote}
              </textarea>
            </div>
            <div className="col-4">
              <ul className="note-notice">
                <li>
                  Vui lòng điền đẩy đủ thông tin để chúng tôi được phục vụ bạn
                  một cách tốt nhất.
                </li>
                <li>
                  To serve you in the best way possible, please fill in the form
                  above.
                </li>
              </ul>

              <button
                className="submit-button"
                onClick={() => this.toogleConfirmBox()}
              >
                Submit
              </button>
              <OrderConfirm
                customerInfomation={customerInfomation}
                totalProducts={totalProducts}
                orderNote={orderNote}
                show={showConfirm}
                hide={() => this.toogleConfirmBox()}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;
