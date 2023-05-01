import { Link } from "react-router-dom";
import queryString from "query-string";
import React from "react";
const Blog = ({ location, match }) => {
  const parsed = queryString.parse(location.search);
  console.log(parsed);
  const id = match.params.id;
  return (
    <div>
      <h2>blog detail - {id}</h2>
      <Link to={`/blogs/${parseInt(id) + 1}`}> go to next blog page?</Link>
    </div>
  );
};

export default Blog;
