/*
const AddQuestion = require("./Question.js").AddQuestion;

for (let i = 0; i < 10; i++) {
  let aq = new AddQuestion();
  console.log(aq.question);
  console.log(aq.answerText.join("  "));
  console.log(aq.correctAnswer);
  console.log("");
}
*/
/*
const MulQuestion = require("./Question.js").MulQuestion;

for (let i = 0; i < 10; i++) {
  let mq = new MulQuestion();
  console.log(mq.question);
  console.log(mq.answerText.join("  "));
  console.log(mq.correctAnswer);
  console.log("");
}
*/

const Deci2frac = require("./Question.js").Deci2frac;

for (let i = 0; i < 10; i++) {
  let mq = new Deci2frac();
  console.log(mq.question);
  console.log(mq.answerText.join("  "));
  console.log(mq.correctAnswer);
  console.log("");
}
