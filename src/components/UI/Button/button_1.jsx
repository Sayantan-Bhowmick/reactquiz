import React from "react";
import Questions from "../../../functions/quiz";

function Button_1() {
  return(
    <div>
      <button>{Questions[0].option[0]}</button>
      <button>{Questions[0].option[1]}</button>
      <button>{Questions[0].option[2]}</button>
      <button>{Questions[0].option[3]}</button>
    </div>
  );
}

export default Button_1;
