import React from "react";
import { Link } from "react-router-dom";
import "../title.css";

export default function Title() {
  return (
    <div className="title">
      <div className="overlap-wrapper">
        <div className="overlap-2">
          <div className="rectangle" />
          <button className="button">
            <Link to="/home" className="dare-to-enter-instance" />
            dare to enter
          </button>
          <div className="vectors-instance">

          </div>
          

          <div className="text-wrapper-2">Tasha’s Portfolio</div>
          </div>
      </div>
      </div>
  );
}
