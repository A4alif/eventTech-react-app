import React from "react";

const Breadcrumbs = ({title}) => {
  return (
    <div className="background-gradientall py-24">
      <div className="container mx-auto">
      <div className="text-md breadcrumbs text-white">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>{title}</a>
          </li>
          
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
