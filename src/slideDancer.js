var SlideDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="images/psyduck.gif" height="200px">');
  // this.$node.css(this.colorPicker());
  this.$node.addClass('sliding');
};

SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function(timer) {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timer);
  var oldleft = this.position.left;
  var newleft = oldleft + 100;
  this.$node.show({left: oldleft});
  this.$node.animate({left: newleft});
  this.$node.animate({left: oldleft});
};