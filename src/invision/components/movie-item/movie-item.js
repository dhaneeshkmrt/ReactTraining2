import React from 'react';
import PropTypes from 'prop-types';
import './movie-item.scss';
import MoviePopup from '../movie-popup/movie.popup';
import DeletePopup from '../delete-movie/delete-popup';


export default class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditMovieVisible: false,
      isMenuVisible: false,
      isDeletePopup: false,
    }
    this.showMenu = () => {
      this.setState({ isMenuVisible: 'block' });
    }

    this.hideMenu = () => {
      this.setState({ isMenuVisible: 'none' });
    }

    this.onModalClose = this.onModalClose.bind(this);
    this.onDeletePopupClose = this.onDeletePopupClose.bind(this);
  }

  editMovie() {
    this.setState({ isEditMovieVisible: true });
  }

  onModalClose(visible) {
    this.setState({ isEditMovieVisible: visible })
  }
  deletePopup(){
    this.setState({ isDeletePopup: true })
  }

  onDeletePopupClose(isDelete) {
    if (isDelete) {
      // delete move code
    } else {
      this.setState({ isDeletePopup: false });
    }
  }

  render() {
    return (
      <div className="item movie-list-item">
        <MoviePopup visible={this.state.isEditMovieVisible} title="Edit Movie" movie={this.props.movie} onModalClose={this.onModalClose} />
        <DeletePopup visible={this.state.isDeletePopup} title="Delete Movie" onDeletePopupClose={this.onDeletePopupClose} />
        <div className="item-action">
          <div className="action-icon" onClick={() => this.showMenu()}><span>&#8942;</span></div>
          <div className="action-list" onClick={() => this.hideMenu()} style={{ display: this.state.isMenuVisible }}>
            <div className="action-close-btn"><span>&times;</span></div>
            <div className="action-list-item" onClick={() => this.editMovie()}>Edit Movie</div>
            <div className="action-list-item" onClick={()=> this.deletePopup()}>Delete Movie</div>
          </div>
        </div>
        <div className="thumbnail">
          <img src={this.props.movie.thumbnail} alt="film-thumbnail" />
        </div>
        <div className="desc">
          <div className="name">
            {this.props.movie.title}
            <div className="type">{this.props.movie.genre}</div>
          </div>
          <div className="year">
            <span>{new Date(this.props.movie.releasedDate).getFullYear()}</span></div>
        </div>
      </div>
    )
  }
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired
}