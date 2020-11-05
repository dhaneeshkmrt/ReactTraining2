import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './movie-item.scss';
import { useHistory } from 'react-router';


export default function MovieItem(props) {
  const [isMenuVisible, updateMenuVisibility] = useState('');
  const history = useHistory()

  const showMenu = () => {
    updateMenuVisibility('block');
  }

  const hideMenu = () => {
    updateMenuVisibility('none');
  }

  const editMovie = () => {
    props.showEditPopup(props.movie.id);
  }

  const deletePopup = () => {
    props.showDeletePopup(props.movie.id);
  }

  const showMovieDetail = (id) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.push('/movie/' + id);
  }

  return (
    <div className="item movie-list-item" onClick={(e) => showMovieDetail(props.movie.id)}>
      <div className="item-action">
        <div className="action-icon" onClick={(e) => { e.stopPropagation(); showMenu() }}><span>&#8942;</span></div>
        <div className="action-list" onClick={(e) => { e.stopPropagation(); hideMenu() }} style={{ display: isMenuVisible }}>
          <div className="action-close-btn"><span>&times;</span></div>
          <div className="action-list-item" onClick={() => editMovie()}>Edit Movie</div>
          <div className="action-list-item" onClick={() => deletePopup()}>Delete Movie</div>
        </div>
      </div>
      <div className="thumbnail">
        <img src={props.movie.thumbnail} alt={props.movie.title + 'thumbnail'} />
      </div>
      <div className="desc">
        <div className="name">
          {props.movie.title}
          <div className="type">{props.movie.genre}</div>
        </div>
        <div className="year">
          <span>{new Date(props.movie.releasedDate).getFullYear()}</span></div>
      </div>
    </div>
  )
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    overview: PropTypes.string,
    rating: PropTypes.number,
    releasedDate: PropTypes.string,
    runTime: PropTypes.number,
    thumbnail: PropTypes.string,
  })
}