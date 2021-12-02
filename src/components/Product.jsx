import React from "react";
import sample_data from "../sampledata";

const Product = () => {
  function Card(props) {
    return (
      <div className="card-item">
        <img src={props.img} alt="product-img" className="product-img" />
        <p className="card-title">{props.title}</p>
        <div className="card-bottom">
          <span className="product-price">{props.price}</span>
          <img
            src="/images/hearticon.png"
            className="heart-icon"
            alt="heart-icon"
          />
          <span>{props.like}</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="card">
        {sample_data.map((item) => {
          return (
            <Card
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              like={item.like}
            />
          );
        })}
      </div>
      <div className="btn-wrap">
        <a href="#">
          <button className="see-more-btn">SEE MORE</button>
        </a>
      </div>
    </div>
  );
};

export default Product;
