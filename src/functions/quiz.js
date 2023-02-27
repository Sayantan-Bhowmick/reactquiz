export const questions = [
  {
    question: "Who is the father of our nation ?",
    option: ["Mahatma Gandhi", "Jawaharlal Nehru", "Donald Trump", "Barrack Obama"],
    answer: "Mahatma Gandhi"
  },
  {
    question: "What colour are leaves ?",
    option: ["Blue", "Red", "Yellow", "Green"],
    answer: "Green"
  },
  {
    question: "What colour is the sky ?",
    option: ["Blue", "Red", "Yellow", "Green"],
    answer: "Blue"
  },
  {
    question: "What colour is the sky ?",
    option: ["Blue", "Red", "Yellow", "Green"],
    answer: "Blue"
  },
  {
    question: "What colour is fire ?",
    option: ["Blue", "Red", "Yellow", "Green"],
    answer: "Red"
  }
];

export const countCorrectAnswers = (questions, answers) => {
  let correctAnswers = 0;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].answer === answers[i]) {
      correctAnswers++;
    }
  }
  return correctAnswers;
}

export default { questions, countCorrectAnswers };
