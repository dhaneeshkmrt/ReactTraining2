import React from 'react';
import Modal from 'react-awesome-modal';

export default class Header extends React.Component {

  render() {
    return (
      <Modal visible={this.props.visible} width="600" effect="fadeInDown" onClickAway={() => this.props.onDeletePopupClose(false)}>
        <div className="add-movie-ctnr">
          <div className="header-close-btn"><a onClick={() => this.props.onDeletePopupClose(false)}>&times;</a></div>
          <h1>{this.props.title}</h1>
          <div className="desc">
            <p>Are your sure you want to delete this movie?</p>
          </div>
          <div className="form-footer">
            <button className="primary-btn" type="submit" onClick={()=>this.props.onDeletePopupClose(true)}>Confirm</button>
          </div>
        </div>
      </Modal>
    );
  }
}