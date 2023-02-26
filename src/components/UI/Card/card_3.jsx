import React from "react";
import Questions from '../../../functions/quiz'
import Button_3 from "../Button/button_3";
function Card_3() {
  return(
    <div>
      <p>{Questions[2].question}</p>
      <Button_3></Button_3>
    </div>
  );
}

export default Card_3;
