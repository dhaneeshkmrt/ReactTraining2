import React, { useState } from "react";
import Modal from 'react-awesome-modal';
import { useFormik } from 'formik';

export default function MoviePopup(props) {


  const isAdd = props.title === 'Add Movie';

  const [isSubmitClicked, updateSubmitClick] = useState(false);



  const formik = useFormik({
    initialValues: { ...props.movie },
    validate: (values) => {
      const errors = {};

      if (!values.title.trim()) {
        errors.title = 'required';
      }

      if (!values.releasedDate) {
        errors.releasedDate = 'required';
      }

      const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+(?:png|jpg|jpeg|gif|svg)+$/g;
      if (!values.thumbnail) {
        errors.thumbnail = 'required';
      } else if (!urlRegex.test(values.thumbnail)) {
        errors.thumbnail = 'Url format expected';
      }

      if (!values.genre.trim()) {
        errors.genre = 'required';
      }

      if (!values.overview) {
        errors.overview = 'required';
      } else if (values.overview.length < 5) {
        errors.overview = 'Overview should be more than 5 chars';
      }

      if (!values.runTime) {
        errors.runTime = 'required';
      } else if (!isFloat(values.runTime)) {
        errors.runTime = 'Runtime should be a number';
      }

      if (!values.rating) {
        errors.rating = 'required';
      } else if (!isFloat(values.rating)) {
        errors.rating = 'Rating should be a number';
      } else {
        const numberValue = parseFloat(values.rating);
        if (numberValue >= 0 && numberValue <= 100) {
          errors.rating = 'Rating value should be in range 0 -100';
        } else {
          errors.rating = 'Rating should be a number';
        }
      }
      return errors;
    },
    onSubmit: values => {
      props.onModalClose({ visible: false, updatedMovie: values, isAdd, isSubmit: true })
    },

  });

  function isFloat(numberValue) {
    numberValue = parseFloat(numberValue)
    if (isNaN(numberValue)) {
      return false;
    }

    return Number(numberValue) === numberValue || numberValue % 1 !== 0;
  }

  return (
    <Modal visible="true" width="600" effect="fadeInDown" onClickAway={() => props.onModalClose({ visible: false })}>
      <div className="add-movie-ctnr">
        <div className="header-close-btn"><a onClick={() => props.onModalClose(false)}>&times;</a></div>
        <h1>{props.title}</h1>
        <form id="dktest" className="form-ctnr" onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
          <div className="form-field">
            <label htmlFor="title">Title</label><br />
            <input type="text" placeholder="Title" name="title" value={formik.values.title} onChange={formik.handleChange} />
            <div className="form-field">
              <label htmlFor="title">Release Date</label><br />
              <input type="date" name="releasedDate" placeholder="Release Date" value={formik.values.releasedDate} onChange={formik.handleChange} />
              <div className="error-message">{isSubmitClicked && formik.errors.releasedDate}</div>
            </div>
            <div className="form-field">
              <label htmlFor="title">Movie URL</label><br />
              <input type="text" placeholder="Movie URL" name="thumbnail" value={formik.values.thumbnail} onChange={formik.handleChange} />
              <div className="error-message">{isSubmitClicked && formik.errors.thumbnail}</div>
            </div>
            <div className="form-field">
              <label htmlFor="title">GENRE</label><br />
              <input type="text" placeholder="GENRE" name="genre" value={formik.values.genre} onChange={formik.handleChange} />
              <div className="error-message">{isSubmitClicked && formik.errors.genre}</div>
            </div>
            <div className="form-field">
              <label htmlFor="title">OVERVIEW</label><br />
              <input type="text" placeholder="OVERVIEW" name="overview" value={formik.values.overview} onChange={formik.handleChange} />
              <div className="error-message">{isSubmitClicked && formik.errors.overview}</div>
            </div>
            <div className="form-field">
              <label htmlFor="title">Rating</label><br />
              <input type="text" placeholder="OVERVIEW" name="rating" value={formik.values.rating} onChange={formik.handleChange} />
              <div className="error-message">{isSubmitClicked && formik.errors.rating}</div>
            </div>
            <div className="form-field">
              <label htmlFor="title">RUNTIME</label><br />
              <input type="text" placeholder="RUNTIME" name="runTime" value={formik.values.runTime} onChange={formik.handleChange} />
              <div className="error-message">{isSubmitClicked && formik.errors.runTime}</div>
            </div>

            <div className="form-footer">
              <button className="primary-btn reset-button" type='reset'>Reset</button>

              <button className="primary-btn" type="submit" onClick={() => updateSubmitClick(true)} >Submit</button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  )
}

MoviePopup.defaultProps = {
  movie: {
    genre: '',
    movieUrl: '',
    overview: '',
    rating: '',
    releasedDate: '',
    runTime: '',
    thumbnail: '',
    title: ''
  }
}