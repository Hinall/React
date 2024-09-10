import React, { useState } from "react";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import "../src/App.css";
function App() {
  let [display_value, display_value_fn] = useState("");

  let handle_Button = (ButtonText) => {
    if (ButtonText === "clr") {
      display_value_fn("");
    } else if (ButtonText === "=") {
      const result = eval(display_value);
      display_value_fn(result);
    } else {
      const newValue = display_value + ButtonText;
      display_value_fn(newValue);
    }
  };

  return (
    <center>
      <div className="calContainer">
        <Display displayValue={display_value} />
        <ButtonContainer handleButton={handle_Button} />
      </div>
    </center>
  );
}

export default App;
