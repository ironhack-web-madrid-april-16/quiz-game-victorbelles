var read = require("read");

var questions_and_answers = 
{
  questions:
  ["What's the most popular variable name in IH?",
  "Who's the fucker master of this Bootcamp?",
  "Who's is the most smashed in IH?"],
  answers:
  ["pobre_diabla",
  "Mikel",
  "Raúl"]
};


var Questions = function() {
  this.question = questions_and_answers["questions"];
  this.answer = questions_and_answers["answers"];
  this.id = 0;
};


var Quiz = function() {
  this.questions = new Questions();
  var self = this;

  this.start = function() {
    var showQuestion = {
      prompt: "[Q" + (self.questions.id+1) + "]: " + self.questions.question[self.questions.id] + "\n"
    }
    read(showQuestion, self.checkAnswer);
  }

  this.checkAnswer = function(error, user_answer) {
    if (user_answer == self.questions.answer[self.questions.id]) {
      console.log("I love you.");
      self.questions.id++;
      if (self.questions.id < self.questions.question.length) {
        showQuestion = {
          prompt: "[Q" + (self.questions.id+1) + "]: " + self.questions.question[self.questions.id] + "\n"
        }
        read(showQuestion,self.checkAnswer);
      } else {
        console.log("***\nCongrats! You're finished the fucking quizz!\n***");
      }
    } else {
      console.log(">> Oh! Answer incorrect!\n");
      showQuestion = {
          prompt: "[Q" + (self.questions.id+1) + "]: " + self.questions.question[self.questions.id] + "\n"
      }
      read(showQuestion, self.checkAnswer);
    }
  }
};


var quiz = new Quiz();
quiz.start();
