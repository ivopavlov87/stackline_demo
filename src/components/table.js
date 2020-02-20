import React from "react";
import * as helpers from '../util/helpers.js';

const Table = ({ productData }) => {
  
  function renderTableData() {

    return (
      <table id="sales-table">
        <thead>
          <tr>
            <th>WEEK ENDING</th>
            <th>RETAIL SALES</th>
            <th>WHOLESALE SALES</th>
            <th>UNITS SOLD</th>
            <th>RETAILER MARGIN</th>
          </tr>
        </thead>
        {productData.sales.map((saleWeek, idx) => {
          const {
            weekEnding,
            retailSales,
            wholesaleSales,
            unitsSold,
            retailerMargin
          } = saleWeek; //destructuring
          return (
            <tbody key={idx + 7000}>
              <tr key={idx + 1000}>
                <td>{helpers.properDate(weekEnding, "number")}</td>
                <td>{"$" + retailSales.toLocaleString()}</td>
                <td>{"$" + wholesaleSales.toLocaleString()}</td>
                <td>{unitsSold.toLocaleString()}</td>
                <td>{"$" + retailerMargin.toLocaleString()}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    );
  };

  return (
    <div id="sales">
        {renderTableData()}
    </div>
  )
};

export default Table;
