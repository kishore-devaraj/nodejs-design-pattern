/**
 * Template is also similar to state and stragedy
 * It has a abstract class where it has methods which needs to be implemented by the class
 * inherts it
 */
const fs = require('fs')

function ConfigTemplate() { }

ConfigTemplate.prototype.read = function (file) {
  console.log('Deserializing from ' + file);
  this.data = this._deserialize(fs.readFileSync(file, 'utf-8'));
}
ConfigTemplate.prototype.save = function (file) {
  console.log('Serializing to ' + file);
  fs.writeFileSync(file, this._serialize(this.data));
}


// These methods should be implemented in the child class
ConfigTemplate.prototype._serialize = function () {
  throw new Error('_serialize() must be implemented');
}
ConfigTemplate.prototype._deserialize = function () {
  throw new Error('_deserialize() must be implemented');
}


// Child Class which is going implement the abstract of the parent
function JsonConfig() {
  ConfigTemplate.call(this)
}

JsonConfig.prototype = Object.create(ConfigTemplate.prototype)
JsonConfig.prototype.constructor = ConfigTemplate

JsonConfig.prototype._deserialize = function (data) {
  return JSON.parse(data);
};
JsonConfig.prototype._serialize = function (data) {
  return JSON.stringify(data, null, ' ');
}

