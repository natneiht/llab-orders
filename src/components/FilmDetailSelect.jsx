import React, { PureComponent } from "react";
import "./FilmDetailSelect.css";
import PropTypes from "prop-types";
import OrderRow from "./OrderRow";

class FilmDetailSelect extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     filmDetailList: []
  //   };
  // }

  render() {
    // const { filmDetailList } = this.state;
    const { renderList } = this.props;
    if (!renderList) return <div>Loading...</div>;
    return (
      <div className="row">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Loại film/ Film type</th>
              <th scope="col">Tráng/ Development</th>
              <th scope="col">Scan</th>
              <th scope="col">Có viền/ Border</th>
              <th scope="col">Highres +10k</th>
              <th scope="col">SL/Roll(s)</th>
            </tr>
          </thead>
          <tbody>
            {renderList.map((item) => (
              <OrderRow itemName={item.name} itemDetail={item.detail} itemSelected={item.isSelected} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

FilmDetailSelect.propTypes = {};

export default FilmDetailSelect;
