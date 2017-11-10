
$(document).ready(function() {
        
    var counter;
    var number ;
    //start the game on the Start button (Btn from Lottery Generator)
    $("#startBtn").click(function() {
        stop ();
        number=45;
        timer();
    });
    // set the timer for 45seconds (SimpleTimer solution exercise)
   

    function timer () {
        
        counter = setInterval(countdown, 1000);
    }    
            
    function countdown () {
        number --;
        $("#timer").html(number);
        if (number ===0) {
            stop ();
        }
    }
    function stop () {
        clearInterval(counter);
    }
    
    var correct=0;
    var incorrect=0;
    
    $("#submit").on("click", function(){
            console.log("test");
    
    //input for questions and answers
    $.each($("input[name='Q1']:checked"), function() {
      if ($(this).val() === 1) {
        correct++;
      }
      else {
        incorrect++;
      }
    });
     $.each($("input[name='Q2']:checked"), function() {
      if ($(this).val() === 1) {
        correct++;
      }
      else {
        incorrect++;
      }
    });
     $.each($("input[name='Q3']:checked"), function() {
      if ($(this).val() === 1) {
        correct++;
      }
      else {
        incorrect++;
      }
    });
     $.each($("input[name='Q4']:checked"), function() {
      if ($(this).val() === 1) {
        correct++;
      }
      else {
        incorrect++;
      }
    });
     $.each($("input[name='Q5']:checked"), function() {
      if ($(this).val() === 1) {
        correct++;
      }
      else {
        incorrect++;
      }
    });
     $.each($("input[name='Q6']:checked"), function() {
      if ($(this).val() === 1) {
        correct++;
      }
      else {
        incorrect++;
      }
    });
     $.each($("input[name='Q7']:checked"), function() {
      if ($(this).val() === 1) {
        correct++;
      }
      else {
        incorrect++;
      }
    });
     $.each($("input[name='Q8']:checked"), function() {
      if ($(this).val() === 1) {
        correct++;
      }
      else {
        incorrect++;
      }
    });
     $.each($("input[name='Q9']:checked"), function() {
      if ($(this).val() === 1) {
        correct++;
      }
      else {
        incorrect++;
      }
    });
     $.each($("input[name='Q10']:checked"), function() {
      if ($(this).val() === 1) {
        correct++;
      }
      else {
        incorrect++;
      }
    });
        
    // I was trying to come with a function that would collect all the right and wrong and unanswered answers and add them up after hitting the submit button.
    // Ideally I would have liked to highlight the wrong answers in red and the correct answers in green but that would have been a few extra steps.
    // also what I missed was to connect the "start over" button to the timer
    var correctAnswer = 0;
    //Variable for losses//
    var loss = 0;
    //Variable for Unanswered//
    var unanswered = 0;
        
    
    $("#correct").html(correct);    
    
    
    });
    
       
    })