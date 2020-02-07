import React from "react";

function Header() {
  return (
    <div className="row row-contact-and-search">
      <div className="col-md-9">
        <div className="text-contact">Tel:XXXXXXXXXXXX | Mail:XXXXXXXXXXX</div>
      </div>
      <div className="col-md-3">
        <div className=" search-bar-container">
          <input type="text" className="search-bar" />
          <div className="search-icon-container">
            <img src="./search-icon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
