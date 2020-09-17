import React from "react";
import { Row, Col } from "reactstrap";
import "./App.css";
import Board from "./Components/Board/Board";
import Sidebar from "./Components/Sidebar/Sidebar";
 
function App() {
  
  return (
    <div className="App">
      <Row>
        <Col lg="3">
          <Sidebar />
        </Col>
        <Col lg="9" className='BoardArea'>
          <Board />
        </Col>
      </Row>
    </div>
  );
}

export default (App);
