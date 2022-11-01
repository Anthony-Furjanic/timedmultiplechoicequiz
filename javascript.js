const questionAndAnswer = [
    {
      questions: "What does HTML stand for?",
      answers: ["How To Make Lingo", "Hyper Text Magic Language"],
      rightans: ["Hyper Text Markup Language"],
    },
    {
      questions:
        "Where in HTML is the main content of the page displayed?",
      answers: ["Aside", "Header"],
      rightans: ["Body"],
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
  
    document.getElementById(answerelement[0]+"input").setAttribute("data-correct","looks like you've had one too many, try again")
    document.getElementById(answerelement[1]+"input").setAttribute("data-correct","looks like you've had one too many, try again") 
    document.getElementById(answerelement[2]+"input").setAttribute("data-correct","Great Job, Celebrate with a beer!")
  
  }
  TriviaButton2.addEventListener("click",function(){
    
  var myanswer=document.querySelector("[name=groupOfAnswers]:checked").getAttribute("data-correct")
  console.log(myanswer)
  var myanswerelement=document.querySelector("#myanswer")
  myanswerelement.innerHTML= ""
  myanswerelement.textContent= myanswer
  document.querySelector("[name=groupOfAnswers]:checked").checked=false
  })