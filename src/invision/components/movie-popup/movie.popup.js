import React, { useState } from "react";
import Modal from 'react-awesome-modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function MoviePopup(props) {


  const isAdd = props.title === 'Add Movie';

  // const [movie, setState] = useState({ ...props.movie });
  const movie = {...props.movie};
  let releasedDate = movie.releasedDate;
  if (releasedDate) {
    const date = new Date(releasedDate)
    movie.releasedDate = `${date.getFullYear()}-${date.getMonth().toString().padStart(2,'0')}-${date.getDate().toString().padStart(2,'0')}`;
  }
  const initialState = movie;
  const validate = (values) => {
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
    } else if (!isFloat(parseFloat(values.runTime))) {
      errors.runTime = 'Runtime should be a number';
    }

    if (!values.rating) {
      errors.rating = 'required';
    } else if (!isFloat(parseFloat(values.rating))) {
      errors.rating = 'Rating should be a number';
    }
    return errors;
  }

  function isFloat(n) {
    return Number(n) === n || n % 1 !== 0;
  }

  const onSubmit = (values, options) => {
    props.onModalClose({ visible: false, updatedMovie: values, isAdd, isSubmit: true });
  }

  return (
    <Modal visible={props.visible} width="600" effect="fadeInDown" onClickAway={() => props.onModalClose({ visible: false })}>
      <div className="add-movie-ctnr">
        <div className="header-close-btn"><a onClick={() => props.onModalClose(false)}>&times;</a></div>
        <h1>{props.title}</h1>
        <Formik initialValues={initialState} validate={validate} onSubmit={onSubmit}>
          <Form className="form-ctnr">
            <div className="form-field">
              <label htmlFor="title">Title</label><br />
              <Field type="text" name="title" />
              <ErrorMessage name="title" component="div" />
            </div>
            <div className="form-field">
              <label htmlFor="title">Release Date</label><br />
              <Field type="date" name="releasedDate" min="1900-1-1" />
              <ErrorMessage name="releasedDate" component="div" />
            </div>
            <div className="form-field">
              <label htmlFor="title">Movie URL</label><br />
              <Field type="text" name="thumbnail" />
              <ErrorMessage name="thumbnail" component="div" />
            </div>
            <div className="form-field">
              <label htmlFor="title">GENRE</label><br />
              <Field type="text" name="genre" />
              <ErrorMessage name="genre" component="div" />
            </div>
            <div className="form-field">
              <label htmlFor="title">OVERVIEW</label><br />
              <Field type="text" name="overview" />
              <ErrorMessage name="overview" component="div" />
            </div>
            <div className="form-field">
              <label htmlFor="title">Rating</label><br />
              <Field type="text" name="rating" />
              <ErrorMessage name="rating" component="div" />
            </div>
            <div className="form-field">
              <label htmlFor="title">RUNTIME</label><br />
              <Field type="text" name="runTime" />
              <ErrorMessage name="runTime" component="div" />
            </div>

            <div className="form-footer">
              <button className="primary-btn reset-button" type="reset">Reset</button>
              <button type="submit" className="primary-btn" >Submit</button>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal >
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