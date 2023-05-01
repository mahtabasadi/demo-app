import { NavLink, withRouter } from "react-router-dom";
import React from 'react';
const items = [
  {name: "Home",to: "/",exact: true,},
  {
    name: "about-us",
    to: "/about-us",
  },
  {
    name: "profile",
    to: "/profile",
  },
  {
    name: "blogs",
    to: "/blogs/",
  },
  {
    name: "post",
    to: "/post/",
  },
];
const Navigation = () => {
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                activeClassName="activeLink"
                exact={item.exact || false}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
