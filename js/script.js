_.templateSettings = {
    evaluate: /\{\[([\s\S]+?)\]\}/g,
    interpolate: /\{\{([\s\S]+?)\}\}/g
};

jQuery.fn.cardGame = function(data) {
    var $self = $(this),
        questionsData = gameData.questionsData,
        answersData = gameData.answersData,
        $card = $("#card", $self),
        $front = $("#card-front", $card),
        $back = $("#card-back", $card),
        questionTmpl = _.template($("#question__tmpl").html()),
        answerTmpl = _.template($("#answer__tmpl").html());

    $card.flip({
        trigger: 'manual',
        axis: 'y'
    });

    $card.on("click.cardGame", ".js-to-question", function(e) {
        var $this = $(e.currentTarget),
            questionId = $this.data("question");

        $front.html(questionTmpl(_.extend(questionsData[questionId], {id: questionId})));
        $card.flip(false);

    });

    $card.on("click.cardGame", ".js-to-answer", function(e) {
        var $this = $(e.currentTarget),
            questionId = $this.data("question");
            answerId = $this.data("answer");

        $back.html(answerTmpl(answersData[questionId][answerId]));
        $card.flip(true);
    });


    return {
        init: function () {
            setTimeout(function () {
                $card.flip(true);
            }, 1000);
        }
    }


};


$("#cardgame").cardGame(gameData).init();






