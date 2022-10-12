import React from "react";
import { GrReactjs } from "react-icons/gr";
const ResponsiveMenu = () => {
  return (
    <div className="responsive-menu">
      <div className="menu">
        <ul>
          <li>
            <GrReactjs />
          </li>
          <li>Features</li>
          <li>Testmonials</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
