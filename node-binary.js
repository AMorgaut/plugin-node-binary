var isWindows = typeof process != 'undefined' && process.platform && process.platform.match(/^win/);

exports.build = false;

exports.instantiate = function(load) {
  if (load.name.substr(load.name.length - 5, 5) != '.node')
    throw new Error('Node binaries must end in ".node"');
  return this._nodeRequire(load.name.substr(isWindows ? 8 : 7));
};