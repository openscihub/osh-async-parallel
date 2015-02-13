var tick = process.nextTick;

module.exports = function(fns, callback) {
  var count = 0;
  var len = fns.length;
  var error;
  var finished;

  if (!len) return tick(callback);

  try {
    for (var i = 0; i < len; i++) {
      fns[i](done);
    }
  }
  catch (e) {
    return tick(callback.bind(null, e));
  }

  function done(err) {
    error = error || err;
    if (!finished && (error || ++count === len)) {
      callback(error);
      finished = true;
    }
  }
};
