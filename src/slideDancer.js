var SlideDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.css(this.colorPicker());
  this.$node.addClass('sliding');
};

SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function(timer) {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timer);
  this.$node.animate({left: '+50%'});
  this.$node.animate({left: '-50%'});
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};