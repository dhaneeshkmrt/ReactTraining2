import React, { Component } from 'react';
import './movie-detail.scss';
import thumbnail from '../../../assets/images/thumbnail.png';

export default class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        title: 'title',
        thumbnail: thumbnail,
        rating: 4.5,
        genre: 'genre',
        runTime: 'runTime',
        overView: 'overView',
        releasedDate: "02/02/2020"
      }
    };
  }

  render() {
    return (
      <div className="movie-detail-ctnr">
        <div className="item-action">
          <div className="action-name"> netflixroulette</div>
          <div className="action-icon" onClick={() => this.showMenu()}>
            <span>&#128269;</span>
          </div>
        </div>
        <div className="movie-detail">
          <div className="thumbnail">
            <img src={this.state.movie?.thumbnail} alt="film-thumbnail" />
          </div>
          <div className="desc">
            <div className="name">
              <span className="title">{this.state.movie?.title}</span>
              <span className="rating">{this.state.movie?.rating}</span>
            </div>
            <div className="type">{this.state.movie?.genre}</div>
            <div className="date-time">
              <span className="released-year">{new Date(this.state.movie?.releasedDate).getFullYear()}</span>
              <span className="duration">{this.state.movie?.runTime}</span>
            </div>
            <p className="description ">
              {this.state.movie?.overView}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
