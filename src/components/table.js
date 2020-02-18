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
      <table id='sales-table'>
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
