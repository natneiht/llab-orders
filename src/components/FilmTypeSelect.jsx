import React, { PureComponent } from "react";
import "./FilmTypeSelect.css";
import PropTypes from "prop-types";

class FilmTypeSelect extends PureComponent {
  render() {
    const { onChangeFilmSize, currentFimSize } = this.props;
    const filmSizeList = {
      "135": "Film 135",
      "120": "Film 120",
      "other": "Film khác"
    };
    return (
      <div className="row">
        <div
          id="film-type-select"
          className="btn-group btn-group-toggle"
          data-toggle="buttons"
          style={{ margin: "30px" }}
        >
          {Object.keys(filmSizeList).map((size) => (
            <label
              className={`btn btn-secondary film-type-option ${
                size === currentFimSize ? "active" : ""
              }`}
            >
              <input
                type="radio"
                name="options"
                id="option1"
                autoComplete="off"
                onClick={() => onChangeFilmSize(size)}
                defaultChecked
              />{" "}
              {filmSizeList[size]}
            </label>
          ))}

          {/* <label className="btn btn-secondary film-type-option">
            <input
              type="radio"
              name="options"
              id="option2"
              autoComplete="off"
            />{" "}
            Film 120
          </label>
          <label className="btn btn-secondary film-type-option">
            <input
              type="radio"
              name="options"
              id="option3"
              autoComplete="off"
            />{" "}
            Khác
          </label> */}
        </div>
      </div>
    );
  }
}

FilmTypeSelect.propTypes = {};

export default FilmTypeSelect;
