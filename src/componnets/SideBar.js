import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <aside>
        <ul>
          <li>
            <NavLink to='/profile/dashboard' activeClassName='activeTab'>dashboard</NavLink>
            <NavLink to='/profile/downloads' activeClassName='activeTab'>downloads</NavLink>
          </li>
          <li></li>
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
