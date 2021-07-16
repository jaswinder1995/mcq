
// question ends here

let index = 0;
let attempt = 0;
let score = 0;
let wrong = 0;

let questions = quiz.sort(function(){
    return 0.5 - Math.random();
});

let totalquestions = questions.length;


$(function(){

// ---time code start frm here

let totaltime =200;
let min =0;
let sec =0;
let counter =0;

let timer = setInterval(function (){
counter++;
min = Math.floor((totaltime-counter)/60);
sec = totaltime - min * 60 - counter;

$(".timerbox span").text(min + ":" + sec);

if (counter == totaltime){
    alert("time up press ok to show result");
    result();
    clearInterval(timer);
}
// console.log(sec);

},1000);

// ---print question

printQuestion(index);
});

// ---print question to start



function printQuestion(i){


   $(".questionbox").text(questions[i].question);

   $(".optionbox span").eq(0).text(questions[i].option[0]);
   $(".optionbox span").eq(1).text(questions[i].option[1]);
   $(".optionbox span").eq(2).text(questions[i].option[2]);
   $(".optionbox span").eq(3).text(questions[i].option[3]);
   
}
// scheck answer start

function checkanswer(option){
 attempt++;

 let optionClicked = $(option).data("opt");
//  console.log(question[index]);

 if(optionClicked == questions[index].answer){
     $(option).addclass("right");
     score++;
 }
 else{
    $(option).addclass("wrong");
    wrong++;
 }
 $(".scorebox span").text(score);

 $(".optionbox span").attr("onclick","");

}

// function for the next question start
function showNext(){

if(index >= questions.length - 1){
    showResult(0);
    return;
}

    index++;

    $(".optionbox span").removeclass();

    $(".optionbox span").attr("onclick","checkAnswer(this)");

    printQuestion(index);
}

// function show reult

function showResult(j){

    if(
         j == 1 &&
         index <questions .length -1 &&
         !confirm(
             "quiz is not finished.press ok to skip quiz  & get your final result."
         )
    ){
        return;
    }

    $("#questionscreen").hide();

    $("#resultscreen").show();

$("totalquestion").text(totalquestion);
$("attemptquestion").text(attempt);
$("correctanswers").text(correct);
$("wronganswers").text(wrong);

}

// result start
function result(){

    $("#questionscreen").hide();

    $("#resultscreen").show();

$("totalquestion").text(totalquestion);
$("attemptquestion").text(attempt);
$("correctanswers").text(correct);
$("wronganswers").text(wrong);

}
