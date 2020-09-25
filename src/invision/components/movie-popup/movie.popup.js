import React, { useState } from "react";
import Modal from 'react-awesome-modal';

export default function MoviePopup(props) {

  const isAdd = props.title === 'Add Movie';

  const [movie, setState] = useState({ ...props.movie });

  const reset = () => {
    this.setState({});
  }

  const handleTitleChange = (event) => {
    setState({ ...movie, title: event.target.value });
  }

  const handleReleaseDateChange = (event) => {
    setState({ ...movie, releaseDate: event.target.value });
  }

  const handleUrlChange = (event) => {
    setState({ ...movie, url: event.target.value });
  }
  const handleGenreChange = (event) => {
    setState({ ...movie, genre: event.target.value });
  }

  const handleRuntimeChange = (event) => {
    setState({ ...movie, runtime: event.target.value });
  }

  const handleOverviewChange = (event) => {
    setState({ ...movie, overview: event.target.value });
  }

  return (
    <Modal visible={props.visible} width="600" effect="fadeInDown" onClickAway={() => props.onModalClose({ visible: false })}>
      <div className="add-movie-ctnr">
        <div className="header-close-btn"><a onClick={() => props.onModalClose(false)}>&times;</a></div>
        <h1>{props.title}</h1>
        <form className="form-ctnr">
          <div className="form-field">
            <label htmlFor="title">Title</label><br />
            <input type="text" placeholder="Title" value={movie.title} onChange={handleTitleChange} />
            <div className="form-field">
              <label htmlFor="title">Release Date</label><br />
              <input type="date" placeholder="Release Date" value={movie.releasedDate} onChange={handleReleaseDateChange} />
            </div>
            <div className="form-field">
              <label htmlFor="title">Movie URL</label><br />
              <input type="text" placeholder="Movie URL" value={movie.movieUrl} onChange={handleUrlChange} />
            </div>
            <div className="form-field">
              <label htmlFor="title">GENRE</label><br />
              <input type="text" placeholder="GENRE" value={movie.genre} onChange={handleGenreChange} />
            </div>
            <div className="form-field">
              <label htmlFor="title">OVERVIEW</label><br />
              <input type="text" placeholder="OVERVIEW" value={movie.overview} onChange={handleOverviewChange} />
            </div>
            <div className="form-field">
              <label htmlFor="title">RUNTIME</label><br />
              <input type="text" placeholder="RUNTIME" value={movie.runTime} onChange={handleRuntimeChange} />
            </div>

            <div className="form-footer">
              <button className="primary-btn reset-button" onClick={(e) => { e.preventDefault(); reset() }}>Reset</button>
              <button className="primary-btn" onClick={(e) => { e.preventDefault(); props.onModalClose({ visible: false, updatedMovie: movie, isAdd, isSubmit: true }) }} >Submit</button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  )

}