$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName]; 

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      ($('body').height() - 200) * Math.random(),
      ($('body').width() - 100) * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });
  
  $('.lineUpButton').on('click', function(event) {
    var widthRatio = ($('body').width() - 50) / dancers.length;
    for (var i = 0; i < dancers.length; i++) {
      var top = '60%';
      var left = widthRatio * (i + 0.25);
      dancers[i].lineUp(top, left);
      
    }
  });
  
  $('.battleLineUpButton').on('click', function(event) {
    var windowHeight = $('body').height();
    var heightRatio = $('body').height() / (dancers.length / 2);
    var windowWidth = $('body').width();
    console.log('earlier point');
    for (var i = 0; i < dancers.length; i++) {
      console.log('looping');
      
      //lines up on the left side
      if (i < Math.floor(dancers.length / 2)) {
        var widthRatio = ($('body').width() - 50) / dancers.length;
        var top = (0.25 * heightRatio * i) + (0.60 * windowHeight);
        var left = (0.4 * widthRatio) * ( 1 - i) + (0.15 * windowWidth);  //(windowWidth * 0.9 - 200) * (i-(dancers.length / 2));
      } else {
        //lines up on the right side
        var widthRatio = ($('body').width() - 50) / dancers.length;
        var top = (0.25 * heightRatio * (i - dancers.length / 2)) + (0.60 * windowHeight);
        var left = (0.4 * widthRatio * (i - dancers.length / 2)) + (0.85 * windowWidth - 300);  //(windowWidth * 0.9 - 200) * (i-(dancers.length / 2));
      }

      dancers[i].$node.show();

      dancers[i].dancing = false;

      dancers[i].lineUp(top, left);

    }
  });
  
  $('.battleButton').on('click', function(event) {
    // randomly pick a pokemon on the left
    var halfDancers = Math.floor(dancers.length / 2);
    var index = Math.floor(Math.random() * (halfDancers));
    // grab pokemon's position
    var attacker = dancers[index];
    var attackerCounter = 0;
    var opponentCounter = 0;
    
    while (attacker.$node.hasClass('fainted')) {
      
      index = index + 1 % halfDancers;

      attacker = dancers[index];

      attackerCounter++;

      if (attackerCounter > halfDancers) {

        return;
      }
    }
    var opponent = dancers[index + halfDancers];
    
    while (opponent.$node.hasClass('fainted')) {
      
      index = index + 1 % halfDancers;
      opponent = dancers[index + halfDancers];
      opponentCounter++;
      if (opponentCounter > halfDancers) {
        return;
      }
    }
    
    // select an opponent (somehow)
    // bring them to the middle
    // call attack method on both
    var battleSpotLeft = .35 * $('body').width();
    var battleSpotTop = .75 * $('body').height();
    var battleSpotRight = .65 * $('body').width() - 200;
    attacker.$node.animate({left: battleSpotLeft, top: battleSpotTop});
    opponent.$node.animate({left: battleSpotRight, top: battleSpotTop});
    
    
    // pick one to "faint" (whichever one has higher strength)
    setTimeout(function() { 
      attacker.attack();
      opponent.attack();
      setTimeout(function() { 
        if (attacker.strength < opponent.strength) {
          attacker.$node.addClass('fainted');
          attacker.$node.rotate(270);
        } else {
          opponent.$node.addClass('fainted');
          opponent.$node.rotate(90);
        }
      }, 500);
    }, 1000);
    
    
    // make weaker one faint (rotate)
    // send back to lineup
    
  });
  
});

