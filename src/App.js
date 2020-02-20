import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import Sidebar from './components/sidebar';
import Table from './components/table';
import Overview from './components/overview';
import Graph from './components/graph';

class App extends Component {

  render() {

    return (
      <div className="stackline-demo">
        <Sidebar className="sidebar" productData={this.props.productData} />
        <div>
          <Graph className="graph" productData={this.props.productData} />
          <Table className="table" productData={this.props.productData} />
          <div className="overview-block">
            <Overview
              className="overview"
              productData={this.props.productData}
            />
          </div>
        </div>
      </div>
    );
  }
}

// giving App.js access to state
export default connect(
  state => ({
    productData: state
  }),
  dispatch => ({})
)(App);
