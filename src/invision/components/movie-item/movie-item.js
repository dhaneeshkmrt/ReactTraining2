import React from 'react';
import PropTypes from 'prop-types';
import './movie-item.scss';

export default class MovieItem extends React.Component {
  constructor(){
    super();
    this.showMenu = () => {
      this.isMenuVisible = 'block';
    }
    
    this.hideMenu = () => {
      this.isMenuVisible = 'none';
    }
  }

  render() {
    return (
      <div className="item movie-list-item">
        <div className="item-action">
          <div className="action-icon" onClick={this.showMenu}><span>&#8942;</span></div>
          <div className="action-list" style={{ display: this.isMenuVisible}}>
            <div>Edit Movie</div>
            <div>Delete Movie</div>
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