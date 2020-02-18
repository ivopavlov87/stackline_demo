import React from "react";

const Table = ({ productData }) => {

  // adds commas to properly space numbers at every third digit
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // formats date correctly to MM-DD-YY from YYYY-MM-DD
  function properDate(date){
    date = date.split('-');
    let year = date[0];
    let day = date[2];
    let month = date[1];
    return [month, day, year.slice(2)].join('-');
  }
    
  function renderTableData() {
    return (
      <table>
        <thead>
          <tr>
            <th>Week Ending</th>
            <th>Retail Sales</th>
            <th>Wholesale Sales</th>
            <th>Units Sold</th>
            <th>Retailer Margin</th>
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
                <td>{properDate(weekEnding)}</td>
                <td>{"$" + numberWithCommas(retailSales)}</td>
                <td>{"$" + numberWithCommas(wholesaleSales)}</td>
                <td>{numberWithCommas(unitsSold)}</td>
                <td>{"$" + numberWithCommas(retailerMargin)}</td>
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
