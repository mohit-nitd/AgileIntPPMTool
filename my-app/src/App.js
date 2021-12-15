import { render } from "@testing-library/react";
import React, { Component } from "react";
import './App.css';
import Dashboard from './components/Dashboard';

class App extends Component{
render() {
  return (
    <div className="App">
      <Dashboard />
      <Dashboard />
    </div>
  );
}
}

export default App;
