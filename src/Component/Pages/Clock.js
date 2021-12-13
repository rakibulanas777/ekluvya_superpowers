import React, { Fragment } from "react";

const Clock = ({ timerHours, timerMinutes, timerSeconds }) => {
  return (
    <div className="clock" style={{ fontSize: ".8rem" }}>
      <span className="expire-offer">{timerHours} : </span>
      <span className="expire-offer">{timerMinutes} : </span>
      <span className="expire-offer">{timerSeconds}</span>
    </div>
  );
};

Clock.defaultProps = {
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;
