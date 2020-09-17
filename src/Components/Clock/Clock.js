import React from "react";

const Clock = React.memo((props) => {
  const {  timeLimit } = props; 
  
  let min = Math.floor(timeLimit / 60);
  let sec = timeLimit % 60;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  const showClock = `${min}:${sec}`;

  return (
    <div>
      <span className="h4">{showClock}</span>
    </div>
  );
});

export default Clock;
