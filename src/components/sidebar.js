import React from 'react';

const Sidebar = ({productData}) => {
    return (
      <div className="sidebar">
        <img className='product-image' src={`${productData.image}`} alt={`${productData.subtitle}`}></img>
        <h2 className='sidebar-title'>{productData.title}</h2>
        <h3 className='sidebar-subtitle'>{productData.subtitle}</h3>
        <div className="tags">
          {productData.tags.map((tag) => (
            <h5 className='sidebar-tag'>{tag}</h5>
          ))}
        </div>
      </div>
    );
}

export default Sidebar;