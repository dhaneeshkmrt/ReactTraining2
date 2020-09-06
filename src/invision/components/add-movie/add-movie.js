import React from "react";
import Modal from 'react-awesome-modal';

export default class MoviePopup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.movie?.title,
      releaseDate: this.props.movie?.releaseDate,
      url: this.props.movie?.url,
      genre: this.props.movie?.genre,
      overview: this.props.movie?.overview,
      runtime: this.props.movie?.runtime
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleReleaseDateChange = this.handleReleaseDateChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleOverviewChange = this.handleOverviewChange.bind(this);
    this.handleRuntimeChange = this.handleRuntimeChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleReleaseDateChange(event) {
    this.setState({ releaseDate: event.target.value });
  }

  handleUrlChange(event) {
    this.setState({ url: event.target.value });
  }
  handleGenreChange(event) {
    this.setState({ genre: event.target.value });
  }

  handleRuntimeChange(event) {
    this.setState({ runtime: event.target.value });
  }

  handleOverviewChange(event) {
    this.setState({ overview: event.target.value });
  }

  closeModal(status) {
    this.visible = status;
  }

  render() {
    return (
      <Modal visible={this.props.visible} width="600" height="auto" effect="fadeInUp" onClickAway={() => this.closeModal()}>
        <div className="add-movie-ctnr">
          <div className="header-close-btn"><a onClick={() => this.closeModal(false)}>&times;</a></div>
          <h1>{this.props.title}</h1>
          <form className="form-ctnr">
            <div className="form-field">
              <label htmlFor="title">Title</label><br />
              <input type="text" placeholder="Title" id="title" value={this.state.title} onChange={this.handleTitleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="title">Release Date</label><br />
              <input type="date" placeholder="Title" id="release-date" value={this.state.releaseDate} onChange={this.handleReleaseDateChange} />
            </div>
            <div className="form-field">
              <label htmlFor="title">Movie URL</label><br />
              <input type="text" placeholder="Title" id="url" value={this.state.url} onChange={this.handleUrlChange} />
            </div>
            <div className="form-field">
              <label htmlFor="title">GENRE</label><br />
              <input type="text" placeholder="Title" id="genre" value={this.state.genre} onChange={this.handleGenreChange} />
            </div>
            <div className="form-field">
              <label htmlFor="title">OVERVIEW</label><br />
              <input type="text" placeholder="Title" id="overview" value={this.state.overview} onChange={this.handleOverviewChange} />
            </div>
            <div className="form-field">
              <label htmlFor="title">RUNTIME</label><br />
              <input type="text" placeholder="Title" id="runtime" value={this.state.runtime} onChange={this.handleRuntimeChange} />
            </div>

            <div className="form-footer">
              <button className="primary-btn reset-button" type="reset">Reset</button>
              <button className="primary-btn" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </Modal>
    )
  }
}