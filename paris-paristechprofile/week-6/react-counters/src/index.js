import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const data = { // we are hard coding data here in the index and passing the object via dot notation
    counters: 0,
    count: 0
};

ReactDOM.render(<App data={data} />, document.getElementById("root"));