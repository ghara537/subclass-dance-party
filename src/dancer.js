

var Dancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.strength = Math.random();
  this.position = {top: top, left: left};
  this.step(timeBetweenSteps);
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
    
  this.$node.rotate({bind: {
    mouseover: function() {
      $(this).rotate({
        angle: 0,
        animateTo: 360
      });
    }
  }});
  
  this.$node.on('click', this.attack.bind(this));
  
  dancers.push(this);
};

Dancer.prototype.colorPicker = function() {
  var colorArr = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  var randNum = Math.floor(Math.random() * 6);
  return {
    'border-color': colorArr[randNum]
  };
};

Dancer.prototype.step = function(timer) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this, timer), timer);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left,
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(top, left) {
  var newPosition = {top: top, left: left};
  this.top = top;
  this.left = left;
  this.$node.animate(newPosition);
};

Dancer.prototype.attack = function() {

  var oldLeft = this.left;
  var newLeft;
  if (oldLeft < $('body').width() / 2) {
    newLeft = oldLeft + 500;
  } else {
    newLeft = oldLeft - 500;
  }
  this.$node.animate({left: newLeft});
  this.$node.animate({left: oldLeft});
  //$(this).rotate(45);
  // $(this).rotate({ angle: 0, animate: 180});
};







