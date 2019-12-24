import React, { PureComponent } from 'react';
import './FilmOrderNote.css';
import PropTypes from 'prop-types';

class FilmOrderNote extends PureComponent {
    render() {
        return (
            <div className="row">
            <div className="col-8">
                <div className="note-label">Ghi chú:</div>
                <textarea className="note-content" />
            </div>
            <div className="col-4">
            <ul className="note-notice">
            <li>Vui lòng điền đẩy đủ thông tin để chúng tôi được phục vụ bạn một cách tốt nhất.</li>
            <li>To serve you in the best way possible, please fill in the form above.</li>
            </ul>

            <button className="submit-button">Submit</button>
            </div>
            </div>
        );
    }
}

FilmOrderNote.propTypes = {

};

export default FilmOrderNote;