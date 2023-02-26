import React from "react";
import Questions from '../../../functions/quiz'
import Button_5 from "../Button/button_5";
function Card_5() {
  return(
    <div>
      <p>{Questions[4].question}</p>
      <Button_5></Button_5>
    </div>
  );
}

export default Card_5;
