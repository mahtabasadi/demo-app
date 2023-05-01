import React from "react";
import { Link } from "react-router-dom";
const NotFound = (props) => {
  return (
    <>
      <p className="p-text W-100 pt-5 mt-5">
        404
        <br />
        the page not NotFound
      </p>
      <Link to='/'>go to home page</Link>
    </>
  );
};

export default NotFound;
