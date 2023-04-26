async function getQuestion() {
  const APIUrl = 'https://opentdb.com/api.php?amount=1';
  const result = await fetch(`${APIUrl}`);
  const data = await result.json();
  //const dataString = JSON.parse(data);
  //dataString = JSON.stringify(data);
  //console.log(dataString);
  //console.log(data.results[0].correct_answer);
  //console.log(dataString);
  console.log(data);

  const question = {
    questionText: `${data.results[0].question}`,
    answerText: `${data.results[0].correct_answer}`,
  };

  console.log(question);
}
getQuestion();
