import React from "react";
import Questions from "../../../functions/quiz";

function Button_2() {
  return(
    <div>
      <button>{Questions[1].option[0]}</button>
      <button>{Questions[1].option[1]}</button>
      <button>{Questions[1].option[2]}</button>
      <button>{Questions[1].option[3]}</button>
    </div>
  );
}

export default Button_2;
