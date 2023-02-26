import React, { useState } from 'react';
import Card_1 from '../Card/card_1';
import Card_2 from '../Card/card_2';
import Card_3 from '../Card/card_3';
import Card_4 from '../Card/card_4';
import Card_5 from '../Card/card_5';

function Banner() {
  const [start, setIsStart] = useState(false);

  const handleStartClick = () => {
    if(start === false) {
      setIsStart(true);
    }
  }
  const renderBanner = () => {
    return(
      <div>
        <h1>Quizz App</h1>
        <button onClick={handleStartClick}>Start Quiz</button>
      </div>
    );
  }
  const renderCards = () => {
    return(
      <>
        <h1>Quizz App</h1>
        <Card_1></Card_1>
        <Card_2></Card_2>
        <Card_3></Card_3>
        <Card_4></Card_4>
        <Card_5></Card_5>
      </>
    );
  }

  return (
    <div>
      {start ? renderCards() : renderBanner()}
    </div>
  );
}

export default Banner;
