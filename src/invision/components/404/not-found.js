import React from "react";
import { Link } from "react-router-dom"

import './not-found.scss';

const NotFound = () => <>
  <div className="not-found">
    <h1>Page Not Found</h1>
    <Link to='/'>Go Home</Link>
  </div>
</>;

export default NotFound;