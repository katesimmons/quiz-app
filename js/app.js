$(document).ready(function() {

questionArray = [{
    q: "1/3: What color is the sky?",
    a: ["Blue", "Yellow", "Green"],
    correct: "Blue"
}, {
    q: "2/3: What color is the grass?",
    a: ["Orange", "Green", "Purple"],
    correct: "Green"
}, {
    q: "3/3: What color is the sun?",
    a: ["White", "Black", "Yellow"],
    correct: "Yellow"
}];

currentQuestion = 0;
correctCount = 0;
incorrectCount = 0;

function nextQuestion() {
    $(".question").text(questionArray[currentQuestion].q);
    $(".answers").empty();
    for (var i = 0; i < (questionArray[currentQuestion].a).length; i++) {
        $(".answers").append("<li><input type='radio' name='" + questionArray[currentQuestion].q + "' value='" + questionArray[currentQuestion].a[i] + "'>" + questionArray[currentQuestion].a[i] + "</li>");
    }
}

nextQuestion();

$("#next").click(function () {
    //answer checking logic
    //    console.log(questionArray[currentQuestion].correct);
    //    console.log($('input:checked').val());
 
    if (questionArray[currentQuestion].correct === $('input:checked').val()) {
        correctCount++;
        console.log("Right answers: " + (correctCount));
        $('.goodFeedback').text("Your last answer was correct!");
        $('.badFeedback').empty();
        $('.score').text("Correct: " + (correctCount) + ". Incorrect: " + (incorrectCount) + ".");
    } else {
        incorrectCount++;
        console.log("Wrong answers: " + (incorrectCount));
        console.log(incorrectCount);
        $('.badFeedback').text("Uh-oh, your last answer was incorrect.");
        $('.goodFeedback').empty();
        $('.score').text("Correct: " + (correctCount) + ". Incorrect: " + (incorrectCount) + ".");
    }
    currentQuestion++;
    nextQuestion();
});

//additional tweaks: 
//how to disallow moving forward if nothing has been selected; 
//how to hide questions div when the game is over and show DONE message instead

});