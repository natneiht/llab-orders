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
    const { renderList, currentFilmSize, onChangeDetail } = this.props;
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
              <th scope="col">Highres</th>
              <th scope="col">Push</th>
              <th scope="col">SL/Roll(s)</th>
            </tr>
          </thead>
          <tbody>
            {renderList.map((item) => (
               item['filmSize'] == currentFilmSize? <OrderRow itemName={item.name} key={item.key} itemKey={item.key} itemDetail={item.detail} itemSelected={item.isSelected} onChangeDetail={onChangeDetail}/> : null
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

FilmDetailSelect.propTypes = {};

export default FilmDetailSelect;
