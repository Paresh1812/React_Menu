import React from "react";

function Navbar({ FilterItem, ul }) {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {/* <button className="btn-group__item" onClick={()=> setMenuData(Menu)}> All </button> */}

          {ul.map((val,index) => {
            return (
              <button
                className="btn-group__item"
                key={index}
                onClick={() => FilterItem(val)}
              >
              {val}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
