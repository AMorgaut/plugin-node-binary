var isWindows = typeof process != 'undefined' && process.platform && process.platform.match(/^win/);

exports.build = false;

var fs;
exports.fetch = function(load) {
  // if in the browser, throw a compatibility error
  if (typeof process == 'undefined' || typeof process.versions == 'undefined' || !process.versions.node)
    throw new Error('Node binary files can only be loaded in Node.');

  if (load.name.substr(load.address.length - 5, 5) != '.node')
    throw new Error('Node binaries must end in ".node"');

  // we can do this because this code is 100% only ever in Node
  fs = fs || this._nodeRequire('fs');

  // fetch just needs to verify the file exists
  return new Promise(function(resolve, reject) {
    fs.exists(load.address.substr(isWindows ? 8 : 7), function(exists) {
      if (!exists)
        reject(new Error('Node binary file ' + load.address + ' does not exist.'));
      else
        resolve('');
    });
  });
};

exports.instantiate = function(load) {
  return this._nodeRequire(load.address.substr(isWindows ? 8 : 7));
};