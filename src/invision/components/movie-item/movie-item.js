import React from 'react';
import PropTypes from 'prop-types';
import './movie-item.scss';
import MoviePopup from '../add-movie/add-movie';

export default class MovieItem extends React.Component {
  constructor(){
    super();
    this.showMenu = () => {
      this.isMenuVisible = 'block';
    }
    
    this.hideMenu = () => {
      this.isMenuVisible = 'none';
    }
    this.isEditMovieVisible = false;
  }
  editMovie(){
    this.isEditMovieVisible= true;
  }

  render() {
    return (
      <div className="item movie-list-item">
        <MoviePopup visible={this.isEditMovieVisible} title="Edit Movie"/>
        <div className="item-action">
          <div className="action-icon" onClick={this.showMenu}><span>&#8942;</span></div>
          <div className="action-list" style={{ display: this.isMenuVisible}}>
            <div className="action-close-btn"><span>&times;</span></div>
            <div className="action-list-item" onClick={this.editMovie()}>Edit Movie</div>
            <div className="action-list-item">Delete Movie</div>
          </div>
        </div>
        <div className="thumbnail">
          <img src={this.props.thumbnail} alt="film-thumbnail" />
        </div>
        <div className="desc">
          <div className="name">
            {this.props.name}
            <div className="type">{this.props.type}</div>
          </div>
          <div className="year">
            <span>{this.props.year}</span></div>
        </div>
      </div>
    )
  }
}

MovieItem.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  thumbnail: PropTypes.string,
}