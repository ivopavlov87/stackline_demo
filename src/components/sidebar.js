import React from 'react';

const Sidebar = ({productData}) => {

  return (
    <div className="sidebar">
      <div className="sidebar-stick">
        <img
          className="product-image"
          src={`${productData.image}`}
          alt={`${productData.subtitle}`}
        ></img>
        <h2 className="sidebar-title">{productData.title}</h2>
        <h3 className="sidebar-subtitle">{productData.subtitle}</h3>
        <div className="tags">
          {productData.tags.map((tag, index) => (
            <h5 key={index + 12000} className="sidebar-tag">{tag}</h5>
          ))}
        </div>
        <div className="display-buttons">
          <button className="btn">OVERVIEW</button>
          <button className="btn">SALES</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;