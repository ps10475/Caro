import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  CardBody,
} from "reactstrap";
import Clock from "../Clock/Clock";
import {connect} from 'react-redux';
import * as actions from '../../Action/action'
import MyForm from "./Form/myForm";

const Sidebar = React.memo((props) => {
  const [timeLimit, setTimeLimit] = useState(1200);
  const { start, setStart, setPlayerName, setTime,setInitBoard } = props;

  const myInterval = useRef(null);

  useEffect(() => {
    if (start) {
      myInterval.current = setInterval(() => {
        setTimeLimit((state) => state - 1);
        setTime(timeLimit-1)
      }, 1000);
      return () => {
        clearInterval(myInterval.current);
      };
    } else {
      clearInterval(myInterval.current);
      setTimeLimit(1200);
    }
  }, [start,timeLimit,setTime]);

  useEffect(() => {
    if (timeLimit < 0) {
      setInitBoard(10)
      setTimeLimit(1200);
      clearInterval(myInterval.current);
      alert("TimeOut: ====== DRAW =======");
    }
  }, [timeLimit, setInitBoard]);

  

  return (
    <React.Fragment>
      <Card className="my-5">
        <CardBody>
          <h4>Nguyễn Việt Bình</h4>
          <span className="text-secondary font-italic">
            neo.nguyen88@gmail.com <br /> 090.996.2108
          </span>
        </CardBody>
      </Card>
      <div className="text-center">
        <h1 className="text-primary">Caro 5 </h1>
        <Clock timeLimit={timeLimit} />
      </div>
      <MyForm start={start} setStart={setStart} setPlayerName={setPlayerName} setInitBoard={setInitBoard}/>
    </React.Fragment>
  );
});

const mapStateToProps = state => {
  return{
    start : state.start
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTime : (time)=>dispatch(actions.setTimeRedux(time)),
    setPlayerName: (name) => dispatch(actions.setPlayerName(name)),
    setInitBoard: (size) => dispatch(actions.setInitBoard(size)),
    setStart : ()=>dispatch(actions.setStart())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);
