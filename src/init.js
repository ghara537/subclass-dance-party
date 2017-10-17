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
    for (var i = 0; i < dancers.length; i++) {
      var widthRatio = ($('body').width() - 50) / dancers.length;
      var top = '60%';
      var left = widthRatio * (i + 0.25);
      // var newPosition = {top: '+30%', left: this.left};
      // console.log(newPosition);
      // divide size of screen by # of dancers, and multiply that by their num in array
      // dancers[i].setPosition(top, left);
      dancers[i].lineUp(top, left);
      
    }
  });
  
  $('.battleButton').on('click', function(event) {
    var windowHeight = $('body').height();
    var heightRatio = $('body').height() / (dancers.length / 2);
    var windowWidth = $('body').width();
    for (var i = 0; i < dancers.length; i++) {
      if (i < Math.floor(dancers.length / 2)) {

        // var top = this.top; // windowHeight * 0.75 * (i / (dancers.length / 2));
        // height / (# dancers / 2)
        // multiply by i for first half
        var top = 0.25 * heightRatio * i + (0.50 * windowHeight);
        var left = windowWidth * 0.75 - 200; //windowWidth * ((i * 1.1) - 0.25);
      } else {
        var widthRatio = ($('body').width() - 50) / dancers.length;
        // var top = this.top; // windowHeight * 0.75 * (dancers.length / 2) / i;
        // height / (# dancers / 2)
        // multiply by i - (# dancers / 2)
        var top = 0.25 * heightRatio * (i - dancers.length / 2) + (0.50 * windowHeight);
        var left = '25%'; //windowWidth * ((i * 0.9) + 0.75);
      }
    
      dancers[i].lineUp(top, left);
    }
  });
  
});

