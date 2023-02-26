import React from "react";
import Questions from "../../../functions/quiz";

function Button_1() {
  return(
    <div>
      <button>{Questions[4].option[0]}</button>
      <button>{Questions[4].option[1]}</button>
      <button>{Questions[4].option[2]}</button>
      <button>{Questions[4].option[3]}</button>
    </div>
  );
}

export default Button_1;
