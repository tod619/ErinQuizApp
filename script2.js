async function getQuestion() {
  const APIUrl = 'https://opentdb.com/api.php?amount=1';
  const result = await fetch(`${APIUrl}`);
  const data = await result.json();
  dataString = JSON.stringify(data);
  //console.log(dataString);
  //console.log(data.results[0].correct_answer);
}
getQuestion();
