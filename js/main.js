$('document').ready(function() {
  console.log('ready');

  var question = {
    question: '',
    answerA: '',
    answerB: '',
    answerC: '',
    answerD: '',
    correct: '',
    explanation: ''
  };

  var q = [];

  q[0] = Object.create(question);
  q[0].question = 'What is your favorite color?';
  q[0].answerA = 'blue';
  q[0].answerB = 'red';
  q[0].answerC = 'yellow';
  q[0].answerD = 'merlot';
  q[0].correct = 'd';
  q[0].explanation = 'that\'s your favorite color.';

  q[1] = Object.create(question);
  q[1].question = 'What is your quest?';
  q[1].answerA = 'To find the Holy Grail.';
  q[1].answerB = 'To get a web dev job.';
  q[1].answerC = 'To see the Alabama Shakes.';
  q[1].answerD = 'To go on the Disney Cruise this year.';
  q[1].correct = 'd';
  q[1].explanation = 'Disney trumps everything.';

  q[2] = Object.create(question);
  q[2].question = 'What is your name?';
  q[2].answerA = 'Walter';
  q[2].answerB = 'Dave';
  q[2].answerC = 'Dear';
  q[2].answerD = 'Hey You';
  q[2].correct = 'c';
  q[2].explanation = 'As long as I answer to my wife, I\'m always correct.';

  q[3] = Object.create(question);
  q[3].question = 'What is the capital of assyria?';
  q[3].answerA = 'Assur';
  q[3].answerB = 'Nineveh';
  q[3].answerC = 'A and B';
  q[3].answerD = 'Neither A nor B';
  q[3].correct = 'c';
  q[3].explanation = 'Look it up on wikipedia';

  q[4] = Object.create(question);
  q[4].question = 'Who will win the Super Bowl?';
  q[4].answerA = 'Carolina';
  q[4].answerB = 'Denver';
  q[4].answerC = 'New England';
  q[4].answerD = 'Vegas';
  q[4].correct = 'd';
  q[4].explanation = 'Vegas alays wins';

  q[5] = Object.create(question);
  q[5].question = 'What is the syntax for creating a javascript array?';
  q[5].answerA = '( item1; item2; ... ; item n)';
  q[5].answerB = '[ item1, item2, ... , item n ]';
  q[5].answerC = '[ item1; item2; ... ; item n ]';
  q[5].answerD = 'it really doesn\'t matter';
  q[5].correct = 'b';
  q[5].explanation = 'The proper syntax invales braces with array items seperated by commas.';

  q[6] = Object.create(question);
  q[6].question = 'Which for loop is written correctly?';
  q[6].answerA = 'for (var i = 10; i > 0; i--) { }';
  q[6].answerB = 'for (var i = 10; i > 0; -i-) { }';
  q[6].answerC = 'for (var i = 10; i > 0; i--) ()';
  q[6].answerD = 'for loop (var i = 10; i > 0; i--) { }';
  q[6].correct = 'a';
  q[6].explanation = 'Answer B the var doesn\'t decrement. Answer C uses parenthesis twice, it should use curly braces for the function. And for loops do not use the word loop in the command.';

  q[7] = Object.create(question);
  q[7].question = 'Who is the best QB of all time?';
  q[7].answerA = 'Brady';
  q[7].answerB = 'Montana';
  q[7].answerC = 'Marino';
  q[7].answerD = 'Peyton';
  q[7].correct = 'a';
  q[7].explanation = 'Don\'t be a retahd!';

  q[8] = Object.create(question);
  q[8].question = 'Greatest football movie of all time?';
  q[8].answerA = 'The Longest Yard';
  q[8].answerB = 'Rudy';
  q[8].answerC = 'The Little Giants';
  q[8].answerD = 'All The Above';
  q[8].correct = 'b';
  q[8].explanation = 'Rudy Rudy Rudy';

  q[9] = Object.create(question);
  q[9].question = 'Question';
  q[9].answerA = 'a';
  q[9].answerB = 'b';
  q[9].answerC = 'c';
  q[9].answerD = 'd';
  q[9].correct = 'c';
  q[9].explanation = 'C is the correct answer 75% of the time. This falls under the 75%.';

  // for (var i = 0; i < 10; i++) {
  //   for (var prop in q[i]) {
  //     console.log(prop + ' ' + q[i][prop]);
  //   }
  // }

});
