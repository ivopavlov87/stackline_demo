import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';
import Sidebar from './components/sidebar'
import Table from './components/table'

class App extends Component {

  render() {
    console.log(this.props.productData[0]); // full array
    console.log(this.props.productData[0].sales); // full array

    return (
      <div>

        <Sidebar className='sidebar' productData={this.props.productData} />
        some random stuff
        <Table className='table' productData={this.props.productData} />

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
