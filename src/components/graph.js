import React, { Component } from "react";
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
import * as helpers from "../util/helpers.js";

export default class Graph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: this.props.productData.sales.map(salesWeek =>
          helpers.properDate(salesWeek.weekEnding, "name")
        ),
        datasets: [
          {
            label: "Retail Sales",
            data: this.props.productData.sales.map(
              salesWeek => salesWeek.retailSales
            ),
            fill: false,
            borderColor: "blue"
          },
          {
            label: "Wholesale Sales",
            data: this.props.productData.sales.map(
              salesWeek => salesWeek.wholesaleSales
            ),
            fill: false,
            borderColor: "red"
          }
        ]
      },
      options: {
        //Customize chart options
        scales: {
          responsive: true,
          maintainAspectRatio: false,
          xAxes: [
            {
              gridLines: {
                display: false,
                drawBorder: false
              }
            }
          ],
          yAxes: [
            {
              ticks: { display: false },
              gridLines: {
                display: false,
                drawBorder: false
              }
            }
          ]
        }
      }
    });
  }
  render() {

    return (
      <div className="graph-box">
        <div className={classes.graphContainer}>
          <div className="graph-title">Sales</div>
          <canvas id="myChart" ref={this.chartRef} height="50px" />
        </div>
      </div>
    );
  }
}