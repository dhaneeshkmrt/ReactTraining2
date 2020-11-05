import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { GET_MOVIE } from '../../store/actions/action.types';
import './movie-detail.scss';

export default function MovieDetail() {
  let { id } = useParams();
  const history = useHistory()
  const movie = useSelector(state => state.movies.fullMovieList.find(movie => movie.id == id));
  return (
    <div className="movie-detail-ctnr">
      <div className="item-action">
        <div className="action-name"><Link to="/">netflix roulette</Link></div>
        <Link to='/'>
          <div className="action-icon">
            <span><svg width="50px" height="50px" className="svg-icon">
              <g xmlns="http://www.w3.org/2000/svg" id="Icons" style={{ opacity: 1, fill: "#ffffff" }}><path id="search-big" d="M18.853,17.438l-3.604-3.604c-0.075-0.075-0.166-0.127-0.267-0.156C15.621,12.781,16,11.686,16,10.5   C16,7.463,13.537,5,10.5,5S5,7.463,5,10.5S7.463,16,10.5,16c1.186,0,2.281-0.379,3.18-1.018c0.028,0.101,0.08,0.191,0.155,0.267   l3.604,3.604c0.301,0.301,0.858,0.227,1.249-0.165C19.079,18.297,19.153,17.739,18.853,17.438z M10.5,14C8.568,14,7,12.432,7,10.5   S8.568,7,10.5,7S14,8.568,14,10.5S12.432,14,10.5,14z" fill="#fff" /></g>
            </svg></span>
          </div>
        </Link>
      </div>
      <div className="movie-detail">
        <div className="thumbnail">
          <img src={movie?.thumbnail} alt="film-thumbnail" />
        </div>
        <div className="desc">
          <div className="name">
            <span className="title">{movie?.title}</span>
            <span className="rating">{movie?.rating}</span>
          </div>
          <div className="type">{movie?.genre}</div>
          <div className="date-time">
            <span className="released-year">{new Date(movie?.releasedDate).getFullYear()}</span>
            <span className="duration">{movie?.runTime} min</span>
          </div>
          <p className="description ">
            {movie?.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
