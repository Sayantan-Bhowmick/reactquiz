import React from "react";
import Questions from "../../../functions/quiz";

function button_4() {
  return(
    <div>
      <button>{Questions[3].option[0]}</button>
      <button>{Questions[3].option[1]}</button>
      <button>{Questions[3].option[2]}</button>
      <button>{Questions[3].option[3]}</button>
    </div>
  );
}

export default button_4;
