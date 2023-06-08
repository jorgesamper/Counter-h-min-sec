import React from "react";

export const Counter = (props) => {
  const hours = Math.floor(props.count / 3600);
  const minutes = Math.floor((props.count % 3600) / 60);
  const seconds = props.count % 60;

  const formatDigits = (value) => {
    let formattedValue = String(value);
    while (formattedValue.length < 2) {
      formattedValue = "0" + formattedValue;
    }
    return formattedValue;
  };

  const counterCards = [
    formatDigits(hours),
    formatDigits(minutes),
    formatDigits(seconds)
  ].join("").split("").map((digit, index) => (
    <CounterCard key={index} counterDigit={digit} color={props.color} />
  ));

  return (
    <div className="container-fluid bg-black d-flex justify-content-center py-5 text-white">
      {counterCards}
    </div>
  );
};

const CounterCard = (props) => {
  return (
    <div className="card bg-black m-1 custom-container">
      <div
        className="card-body border rounded-3 custom-content"
        style={{ background: props.color }}
      >
        <h5 className="card-title custom-title">{props.counterDigit}</h5>
      </div>
    </div>
  );
};
