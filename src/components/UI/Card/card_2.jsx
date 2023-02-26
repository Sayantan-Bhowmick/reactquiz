import React from "react";
import Questions from '../../../functions/quiz'
import Button_2 from "../Button/button_2";

function Card_2() {
  return(
    <div>
      <p>{Questions[1].question}</p>
      <Button_2></Button_2>
    </div>
  );
}

export default Card_2;
