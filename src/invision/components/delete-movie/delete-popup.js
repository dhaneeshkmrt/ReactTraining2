import React from 'react';
import Modal from 'react-awesome-modal';

export default function DeletePopup(props) {

  return (
    <Modal visible={props.visible} width="600" effect="fadeInDown" onClickAway={() => props.onDeletePopupClose(false)}>
      <div className="delete-movie-ctnr">
        <div className="header-close-btn"><a onClick={() => props.onDeletePopupClose(false)}>&times;</a></div>
        <h1>{props.title}</h1>
        <div className="desc">
          <p>Are your sure you want to delete this movie?</p>
        </div>
        <div className="form-footer">
          <button className="primary-btn" type="submit" onClick={() => props.onDeletePopupClose({ isDelete: true, deletedMovie: props.movie})}>Confirm</button>
        </div>
      </div>
    </Modal>
  );
}