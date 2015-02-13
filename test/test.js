var expect = require('expect.js');
var parallel = require('..');

describe('parallel', function() {
  it('should work', function(done) {
    var results = [];
    parallel(
      [
        function(done) {
          setTimeout(function() {
            results.push(0);
            done();
          }, 330);
        },
        function(done) {
          setTimeout(function() {
            results.push(1);
            done();
          }, 33);
        }
      ],
      function(err) {
        expect(results).to.eql([1, 0]);
        done(err);
      }
    );
  });
});
