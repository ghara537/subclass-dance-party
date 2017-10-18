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
        var top = 0.25 * heightRatio * i + (0.50 * windowHeight);
        var left = windowWidth * 0.2;
      } else {
        //lines up on the right side
        var widthRatio = ($('body').width() - 50) / dancers.length;
        var top = 0.25 * heightRatio * (i - dancers.length / 2) + (0.50 * windowHeight);
        var left = windowWidth * 0.8 - 200;
      }
      console.log('later point');
      //dancers[i].step = function() {};
      //dancers[i].$node.show();
      dancers[i].lineUp(top, left);
    }
  });
  
  $('.battleButton').on('click', function(event) {
    // randomly pick a pokemon on the left
    var halfDancers = Math.floor(dancers.length / 2);
    var index = Math.floor(Math.random() * (halfDancers));
    // grab pokemon's position
    var attacker = dancers[index];
    var opponent = dancers[index + halfDancers];
    
    // select an opponent (somehow)
    // bring them to the middle
    // call attack method on both
    attacker.attack();
    opponent.attack();
    // pick one to "faint" (whichever one has higher strength)
    setTimeout(function() { 
      if (attacker.strength < opponent.strength) {
        attacker.$node.addClass('fainted');
        attacker.$node.rotate(270);
      } else {
        opponent.$node.addClass('fainted');
        opponent.$node.rotate(90);
      }
    }, 1000);
    // make weaker one faint (rotate)
    // send back to lineup
    
  });
  
});

