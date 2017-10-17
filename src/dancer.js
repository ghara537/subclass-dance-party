

var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  
  var stepper = this;

  this.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(stepper.step, timeBetweenSteps);
  };
  this.step();

  this.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left,
    };
    this.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

Dancer.prototype.colorPicker = function() {
  var colorArr = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  var randNum = Math.floor(Math.random() * 6);
  return {
    'border-color': colorArr[randNum]
  };
};










