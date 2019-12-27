import React, { PureComponent } from 'react';
import './HomePage.css';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import CustomerFormInput from '../components/CustomerFormInput';
import FilmTypeSelect from '../components/FilmTypeSelect';
import FilmDetailSelect from '../components/FilmDetailSelect';
import FilmOrderNote from '../components/FilmOrderNote';

class HomePage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            filmDetailList: [],
            currentFimSize: "135"
        }
    }
    
    handleChangeFilmSize = (size) => {
        this.setState({currentFimSize: size})
    }

    componentDidMount() {
        const defaultAttribute = {
            isDevelop: false,
            isScan: false,
            isBorder: false,
            isHighres: false,
            quantity: null
          };
      
          const filmDetail = {
            "135": [
              "Film màu",
              "Film trắng đen",
              "Film dương bản",
              "Tráng cross",
              "Kodak Vision"
            ],
            "120": ["Film màu", "Film trắng đen", "Film dương bản", "Tráng cross"]
          };
      
          let filmDetailArray = [];
          Object.keys(filmDetail).map(filmSize => filmDetail[filmSize].map((item) =>
            filmDetailArray.push({ detail: {...defaultAttribute}, name: item, filmSize , isSelected: false })
          ));
          console.log(filmDetailArray);
          this.setState({filmDetailList: filmDetailArray})
    }
    
    render() {
        const { currentFimSize, filmDetailList } = this.state;
        const renderFilmList = filmDetailList.filter(item => item.filmSize === currentFimSize);
        console.log(renderFilmList);
        return (
            <div>
                <NavBar title="TẠO ĐƠN HÀNG" />
                <div className="container">
                    <CustomerFormInput />
                    <FilmTypeSelect currentFimSize={currentFimSize} onChangeFilmSize={this.handleChangeFilmSize} />
                    <FilmDetailSelect renderList={renderFilmList} />
                    <FilmOrderNote />
                </div>
            </div>
        );
    }
}

HomePage.propTypes = {

};

export default HomePage;