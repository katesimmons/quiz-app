/*--$(document).ready(function() {

var question = {
  questionNumber: "1" + ".  ",
  questionText: "What color is the sky? <br><br>",
  answers: ["Blue", "Green", "Yellow"],
  buildQuestion: function() {
    $('.question').append(this.questionNumber + this.questionText + this.answers);
  }
}

question.buildQuestion();

});--*/
$(document).ready(function() {

	$('.submitQuestion').click(function() {
		$('#modal').fadeIn(1000);
	});

    $('.ok').click(function() {
    	$('#modal').fadeOut(1000);
    });

});