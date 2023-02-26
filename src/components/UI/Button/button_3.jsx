import React from "react";
import Questions from "../../../functions/quiz";

function button_3() {
  return(
    <div>
      <button>{Questions[2].option[0]}</button>
      <button>{Questions[2].option[1]}</button>
      <button>{Questions[2].option[2]}</button>
      <button>{Questions[2].option[3]}</button>
    </div>
  );
}

export default button_3;
