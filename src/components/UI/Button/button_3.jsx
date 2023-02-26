import React, { useState } from "react";
import Questions from "../../../functions/quiz";

function button_3() {
  const [selected, setIsSelected] = useState(false);
  
  const handleOptionClick = () => {
    if(selected === false) {
      setIsSelected(true);
    }
  }
  return(
    <div>
      <button onClick={handleOptionClick} disabled={selected === true}>{Questions[2].option[0]}</button>
      <button onClick={handleOptionClick} disabled={selected === true}>{Questions[2].option[1]}</button>
      <button onClick={handleOptionClick} disabled={selected === true}>{Questions[2].option[2]}</button>
      <button onClick={handleOptionClick} disabled={selected === true}>{Questions[2].option[3]}</button>
    </div>
  );
}

export default button_3;
