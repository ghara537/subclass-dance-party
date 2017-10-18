describe('dancer', function() {

  var dancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new Dancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });
  
  it('should have lineUp and attack methods', function() {
    var keyLookup = function(object, methodName) {
      for (var key in object) {
        if (key === methodName) {
          return true;
        }
      }
      return false;
    };
    
    expect(keyLookup(dancer, 'lineUp')).to.be.true;
    expect(keyLookup(dancer, 'attack')).to.be.true;
  });

  // it('should have a step function that sets a time for the next step', function() {
  //   sinon.spy(dancer, 'step');
  //   dancer.step();
    // expect(setTimeout.called).to.be.true;
  // });

  describe('dance', function() {
    it('should have a step function that calls step at least once per second', function() {
      sinon.spy(dancer, 'step');
      expect(dancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(dancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(dancer.step.callCount).to.be.equal(2);
    });
  });
  
  // describe('line up', function() {
  //   it('should have a lineUp function that moves all dancers to the same horizontal axis', function() {
      
  //   });
    
  //   it('should have a lineUp function that evenly spaces all dancers', function() {
      
  //   });
  // });
  
  // describe('line up for battle', function() {
  //   it('should have a lineUp function that moves half the dancers to one vertical axis', function() {
      
  //   });
    
  //   it('should have a lineUp function that moves the other half of the dancers to another vertical axis', function() {
      
  //   });
    
  //   it('should have a lineUp function that evenly spaces all dancers', function() {
      
  //   });
  // });
  
  // describe('battle', function() {
  //   it('should have a attack function that moves the dancer toward its opponent', function() {
  //     sinon.spy(slideDancer.$node, 'animate');
  //     slideDancer.step();
  //     expect(slideDancer.$node.animate.called).to.be.true;
  //   });
    
  //   it('should have a lineUp function that moves the other half of the dancers to another vertical axis', function() {
      
  //   });
    
  //   it('should have a lineUp function that evenly spaces all dancers', function() {
      
  //   });
  // });
});
