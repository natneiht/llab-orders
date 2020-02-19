import React, { PureComponent } from "react";
import "./HomePage.css";
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import CustomerFormInput from "../components/CustomerFormInput";
import FilmTypeSelect from "../components/FilmTypeSelect";
import FilmDetailSelect from "../components/FilmDetailSelect";
import { getFilmSizeList } from "../functions";
import { filmPrice } from "../filmSizeOption";
import { getLoginToken, loginWithEmailAndPassword } from "../loginFunction";
import OrderConfirm from "../components/OrderConfirm";
import axios from "axios";
import AuthContext, {
  AuthConsumer,
  withAuthContext
} from "../authContext/index";

class HomePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filmDetailList: [],
      newFilmSizeList: [],
      customerInfomation: {
        name: null,
        phoneNumber: null,
        email: null
      },
      orderNote: null,
      currentFilmSize: "135mm",
      showConfirm: false
    };
  }

  async componentDidMount() {
    // console.log(await getLoginToken());
    // const filmSizeList = getFilmSizeList();
    const contextType = AuthContext;
    console.log("contextType", this.context);
    const attribTemplate = {
      is_selected: false,
      // is_develop: false,
      // is_scan: false,
      // is_border: false,
      // is_highres: false,
      // is_push: false,
      push_level: 0,
      quantity: 0
    };
    // Get film size list
    loginWithEmailAndPassword("pham.d.nghia8@gmail.com", "Niadeptrai@11aa");
    const filmSizeList = await getFilmSizeList().then((response) => {
      const filmGroup = response.data.data.items;
      let filmList = [];
      filmGroup.map((group) =>
        group["film_types"].map((filmItem) => {
          let initAttrib = { ...attribTemplate };
          const optionsList = filmItem["options"].map(
            (option) => option["code"]
          );
          optionsList.map((opt) => Object.assign(initAttrib, { [opt]: false }));
          filmList.push({
            key: filmItem["id"],
            name: filmItem["name"],
            filmSize: group["name"],
            detail: initAttrib
          });
        })
      );
      this.setState({ newFilmSizeList: filmList });
      console.log(filmList);
    });
    console.log(filmSizeList);

    // Old film size list
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
    // console.log(JSON.stringify(filmDetailArray));
    console.log(filmDetailArray);
    this.setState({ filmDetailList: filmDetailArray, filmSizeList });
  }

  // For film size switch area
  handleChangeFilmSize = (size) => {
    this.setState({ currentFilmSize: size });
  };

  // For each film row action
  handleChangeItemDetail = (key, detail) => {
    const newFilmList = [...this.state.newFilmSizeList];
    const itemIndex = newFilmList.findIndex((item) => item.key === key);
    // console.log(itemIndex);
    if (itemIndex >= 0) {
      newFilmList[itemIndex] = { ...newFilmList[itemIndex], detail };
    }
    // console.log(newFilmList);
    this.setState({ newFilmSizeList: newFilmList });
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
      newFilmSizeList,
      showConfirm,
      orderNote
    } = this.state;
    const totalProducts = newFilmSizeList.filter(
      (item) => item.detail.isSelected === true
    );
    console.log("props", this.props);
    return (
      <div className="container hompage-wrapper">
        <CustomerFormInput
          changeCustomerInfomation={this.changeCustomerInfomation}
        />
        <FilmTypeSelect
          currentFilmSize={currentFilmSize}
          onChangeFilmSize={this.handleChangeFilmSize}
        />
        <FilmDetailSelect
          currentFilmSize={currentFilmSize}
          renderList={newFilmSizeList}
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
                Vui lòng điền đẩy đủ thông tin để chúng tôi được phục vụ bạn một
                cách tốt nhất.
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
    );
  }
}

HomePage.propTypes = {};

export default withAuthContext(HomePage);
