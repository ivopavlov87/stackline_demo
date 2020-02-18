import React from 'react';

const Sidebar = ({productData}) => {
    return (
      <div>
        <div className="sidebar">
          <ul>
            {productData.map((arrayItem, index) => (
              <div key={index + 6000}>
                <img
                  src={`${arrayItem.image}`}
                  alt={`${arrayItem.subtitle}`}
                ></img>
                <li key={index + 2000}>{arrayItem.title}</li>
                <li key={index + 3000}>{arrayItem.subtitle}</li>
                <li key={index + 4000}>
                  <ul>
                    {arrayItem.tags.map((tag, idx) => (
                      <li className="tags" key={idx + 5000}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default Sidebar;