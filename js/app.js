$(document).ready(function() {

/*----VARIABLES----*/
    var questionCount = 1;
    var done = false;

/*----FUNCTION TO UPDATE QUESTION COUNT----*/
    function setCount() {
	    $('.questionNumber').text(questionCount);
    }
//may need to cap this at 3, might need additional logic.


/*----QUESTIONS AND ANSWERS-----*/
var question = {
	questionText: "What color is the sky?",
	questionAnswers: ["Blue", "Green", "Yellow"],
	buildQuestion: function() {
		$('.question').append(this.questionText);
		for(var i=0; i<this.questionAnswers.length; i++) {
			$('.answers').append("<li><input type='radio' name='" +	this.questionText + "' value='" + this.questionAnswers[i] + "'>" + this.questionAnswers[i] + "'</li>");
		}
	}
}

question.buildQuestion();

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