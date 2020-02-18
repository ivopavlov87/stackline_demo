import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import Sidebar from './components/sidebar'
import Table from './components/table'
import Overview from './components/overview'

class App extends Component {

  render() {
    console.log(this.props.productData[0]); // full array
    console.log(this.props.productData[0].sales); // full array

    return (
      <div className="stackline-demo">
        <Sidebar className="sidebar" productData={this.props.productData[0]} />
        <div>
          <Table className="table" productData={this.props.productData[0]} />
          <div className="overview-block">
            <Overview
              className="overview"
              productData={this.props.productData[0]}
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
