// a game with 4 crystal w/ random result
// Every crystal needs to have a random number
//New number to be generator every win/lose
// when click any crystal,it should add to previous num untill total score
// if not equal, then restart
//if equal then we add a win
$(function(){

    var winningNumbner = Math.floor(Math.random() * 100) + 30;
    $("#number-to-guess").html(winningNumbner);

    var img = $('img');
    for(var i = 0; i < img.length; i++){
        var crystalValue = ($(img[i]).attr("data-crystalvalue"));

        if(crystalValue == 0){
            var randomResult = Math.floor(Math.random() * 30) + 1;
            $(img[i]).attr('data-crystalvalue', randomResult);
        }
    }
    
    
    // select all img tags on the page and attach click function
    
    $('img').click(function(event){

        // Current crystal assigned value
        var crystalValue = ($(this).attr("data-crystalvalue"));

        // Current value of all crystals clicked
        var currentValue = $('#number-to-guess').attr("data-currentGuess");

        // Add previous value to new value
        var output = parseInt(crystalValue) + parseInt(currentValue);

        // Get field with winning number
        var winning = $('#number-to-guess').text();

        var continuePlaying = true;

        // Check if current output var if < winning. If yes, continue. If > game over and reset, if = user wins.
        if(output == winning){
            // Won game
            continuePlaying = false;
            alert('You won');

            var win = $('#number-of-wins').text();

            var currentValue = parseInt(win);
          
            currentValue++;
            $('#number-of-wins').html(currentValue);

        } else if (output > winning){
            // You lose
            continuePlaying = false;
            alert('You lost');

            var loses = $('#number-of-loses').text();

            var currentValue = parseInt(loses);
          
            currentValue++;
            $('#number-of-loses').html(currentValue);

        }

        if(continuePlaying === true){
            ($('#number-to-guess').attr("data-currentGuess", output));
            $("#number-to-guesses").html(output);
        }else{
            reset();
        }

        function reset(){

            // Works
            var winningNumbner = Math.floor(Math.random() * 100) + 30;
            // Works
            $("#number-to-guess").html(winningNumbner);

            // Works
            ($('#number-to-guess').attr("data-currentGuess", 0));
            // Works
            $("#number-to-guesses").html(0);

            var img = $('img');
            for(var i = 0; i < img.length; i++){
                var crystalValue = ($(img[i]).attr("data-crystalvalue"));
                var randomResult = Math.floor(Math.random() * 30) + 1;
                $(img[i]).attr('data-crystalvalue', randomResult);
            }
        }

    });
    
});