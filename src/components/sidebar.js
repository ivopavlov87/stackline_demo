import React from 'react';

const Sidebar = ({productData}) => {
    return (
      <div className="sidebar">
        <img src={`${productData.image}`} alt={`${productData.subtitle}`}></img>
        <h2>{productData.title}</h2>
        <h3>{productData.subtitle}</h3>
        <div className="tags">
          {productData.tags.map((tag) => (
            <h5>{tag}</h5>
          ))}
        </div>
      </div>
    );
}

export default Sidebar;