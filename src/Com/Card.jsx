import React from "react";

function Card({ menudata }) {
  return (
    <>
    <section className="main-card--cointainer">

      {menudata.map((curEle) => {

        const {id,name,category,image,description} = curEle

        return (
          <>
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">
                    {id}
                  </span>
                  <span className="card-author subtle">{category}</span>
                  <h2 className="card-title">{name} </h2>
                  <span className="card-description">
                  {description}
                  </span>
                  <div className="card-read">Read</div>
                </div>
                <img src= {image} alt="Element Not Found" className="card-media" style={{height:300,width:400}}/>
                <div className="card-tag subtle">Order Now</div>
              </div>
            </div>
          </>
        );
      })}
      
    </section>
    </>
  );
}

export default Card;
