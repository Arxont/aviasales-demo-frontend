import React from "react";
import ReactDOM from "react-dom";
import AviaSales from "./App";
import AviaSales2 from "./TestingGround";
import registerServiceWorker from "./registerServiceWorker";
/* 
ReactDOM.render(<AviaSales />, document.getElementById("root"));
registerServiceWorker();

for testing purposes
*/
ReactDOM.render(<AviaSales2 />, document.getElementById("root"));
registerServiceWorker();
