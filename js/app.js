/*--

var question = {
  questionNumber: "1" + ".  ",
  questionText: "What color is the sky? <br><br>",
  answers: ["Blue", "Green", "Yellow"],
  buildQuestion: function() {
    $('.question').append(this.questionNumber + this.questionText + this.answers);
  }
}

question.buildQuestion();
--*/

$(document).ready(function() {

/*----VARIABLES----*/
    var questionCount = 1;
    var done = false;

/*----FUNCTION TO UPDATE QUESTION COUNT----*/
    function setCount() {
	    $('.questionNumber').text(questionCount);
    }

/*----MODAL FADE IN AND OUT-----*/
	$('.submitQuestion').click(function() {
		$('#modal').fadeIn(1000);
		// need to add logic here about correct / incorrect
	});

    $('.ok').click(function() {
    	$('#modal').fadeOut(1000);
    	questionCount++;
    	setCount(questionCount);
    	//need to call the call for the next question IF current question number is not 3, else call DONE modal
    });

});