import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { connect } from "react-redux";
import { connect } from "react-redux";
// import * as actions from "/actions";
import * as actions from "./actions";
import Header from "./components/Header";
import Landing from "./components/Landing";

const Dash = () => {
  <h2>dash</h2>;
};

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/surveys' element={<Dash />} />
            <Route path='/surveys/new' element={<Dash />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
