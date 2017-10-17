var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.css(this.colorPicker());
  this.$node.addClass('blinky');
  this.$node.on('click', this.onClick);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(timer) {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timer);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

BlinkyDancer.prototype.onClick = function() {
  $(this).rotate(45);
  // $(this).rotate({ angle: 0, animate: 180});
};













