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
  q[5].question = '';
  q[5].answerA = '';
  q[5].answerB = '';
  q[5].answerC = '';
  q[5].answerD = '';
  q[5].correct = '';
  q[5].explanation = '';

  q[6] = Object.create(question);
  q[6].question = '';
  q[6].answerA = '';
  q[6].answerB = '';
  q[6].answerC = '';
  q[6].answerD = '';
  q[6].correct = '';
  q[6].explanation = '';

  q[7] = Object.create(question);
  q[7].question = '';
  q[7].answerA = '';
  q[7].answerB = '';
  q[7].answerC = '';
  q[7].answerD = '';
  q[7].correct = '';
  q[7].explanation = '';

  q[8] = Object.create(question);
  q[8].question = '';
  q[8].answerA = '';
  q[8].answerB = '';
  q[8].answerC = '';
  q[8].answerD = '';
  q[8].correct = '';
  q[8].explanation = '';

  q[9] = Object.create(question);
  q[9].question = '';
  q[9].answerA = '';
  q[9].answerB = '';
  q[9].answerC = '';
  q[9].answerD = '';
  q[9].correct = '';
  q[9].explanation = '';

  for (var i = 0; i < 10; i++) {
    for (var prop in q[i]) {
      console.log(prop + ' ' + q[i][prop]);
    }
  }

});
