
var score=0
var scoreboard=document.getElementById("scoreboard")
scoreboard.innerHTML=score

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

starttime = function () {
    var twoMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
};

Triviabutton.addEventListener("click",starttime);


// set of questions that the user will answer
const questionAndAnswer = [
    {
      questions: "What does HTML stand for?",
      answers: ["How To Make Lingo", "Hyper Text Magic Language"],
      rightans: ["Hyper Text Markup Language"]
    },
    {
      questions:
        "Where in HTML is the main content of the page displayed?",
      answers: ["Aside", "Header"],
      rightans: ["Body"]
    },
    {
        questions:
          "If we want define style for an unique element, then which css selector will we use?",
        answers: ["class", "primary"],
        rightans: ["Id"]
    },
    {
     questions:
       "If we want to wrap a block of text around an image, which css property will we use?",
     answers: ["flex-wrap", "wrap"],
     rightans: ["float"]
     },
    {
     questions:
       "Which of the following is a JavaScript Data Type?",
     answers: ["Counter", "Header"],
     rightans: ["Boolean"]
     },
     {
        questions:
          "What is Javascript?",
        answers: ["A script that coffee machines use to brew coffee", "A computer language that determines the general format and styling of the page"],
        rightans: ["A language used to create interactive user interfaces"]
      },
      {
        questions:
          "Which of the following is a type of Pop up box available in JavaScript?",
        answers: ["Screenpop", "Multiple Choice"],
        rightans: ["Alert"]
      },

  ];
  
  function QuestionRetrieve() {
    var myanswerelement=document.querySelector("#myanswer")
  myanswerelement.innerHTML= ""
    console.log("inside question retrieve function")
    const randomQuestion =
      questionAndAnswer[Math.floor(Math.random() * questionAndAnswer.length)];
    console.log(randomQuestion.questions);
    console.log(randomQuestion.answers);
  
    document.getElementById("questionField").innerHTML = randomQuestion.questions;
    const answerelement= ["answer1","answer2","answer3"];
    for (var i=0; i< 4;i++)
    {
      var num1= Math.floor(Math.random() * answerelement.length);
      var num2= Math.floor(Math.random() * answerelement.length);
      if (num1 != num2){
        var temp= answerelement[num1];
        answerelement[num1]= answerelement[num2];
        answerelement[num2]= temp
      }
    }
    document.getElementById(answerelement[0]).innerHTML = randomQuestion.answers[0];
    document.getElementById(answerelement[1]).innerHTML = randomQuestion.answers[1];
    document.getElementById(answerelement[2]).innerHTML = randomQuestion.rightans[0];
  
    document.getElementById(answerelement[0]+"input").setAttribute("data-correct","not quite, try to another answer")
    document.getElementById(answerelement[1]+"input").setAttribute("data-correct","not quite, try to another answer") 
    document.getElementById(answerelement[2]+"input").setAttribute("data-correct","Great Job, You're on your way to becoming a developer!")
  

  }
  TriviaButton2.addEventListener("click",function(){
    var myanswerelement=document.querySelector("#myanswer")
    myanswerelement.innerHTML= ""
    myanswerelement.textContent= myanswer
    document.querySelector("[name=groupOfAnswers]:checked").checked=false
  
  if(myanswerelement.textContent=="data-correct"){
  score+=10
  scoreboard.innerHTML=score
  
  }
  var myanswerelement=document.querySelector("#myanswer")
  myanswerelement.innerHTML= ""
  myanswerelement.textContent= myanswer
  document.querySelector("[name=groupOfAnswers]:checked").checked=false

  })
  

// Add event listener to generate button
Triviabutton.addEventListener("click", QuestionRetrieve);