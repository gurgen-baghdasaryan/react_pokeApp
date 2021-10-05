import React from "react";
import { Link } from 'react-router-dom';


const Nav = () => {
  return (

    <ul className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>

    );
};

export default Nav;
