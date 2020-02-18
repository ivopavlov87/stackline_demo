import React from "react";

const Overview = ({ productData }) => {
  return (
    <div>
      <h3>
        {productData.title} by {productData.brand}
      </h3>
      <h4>{productData.subtitle}</h4>
      <h5>Retailer: {productData.retailer}</h5>
      <h5>Product ID: {productData.id}</h5>
      <div className="details">
        <h4>Details:</h4>
        <ul>{productData.details.map((detail, index) => (
          <div key={index + 11000}>
            <li>{detail}</li>
          </div>
        ))}</ul>
      </div>
      <div className="reviews">
        <h4>Reviews:</h4>
        <ul>
          {productData.reviews.map((review, index) => (
            <div key={index + 9000}>
              <li>Customer: {review.customer}</li>
              <li>Score: {review.score}</li>
              <li>Review: {review.review}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
