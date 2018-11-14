/**
 * Strategy is kind of design pattern, where only one or components 
 * can be flexible depending upon the usecases.
 * 
 * The three players are
 * 1. Client
 * 2. Stratedy Container
 * 3. Different types of stragedy
 */


/**
 * Let's look at the example how the config objects 
 * we store, read and write of a given file.
 * And we're using two different stragedy for reading json and ini files
 */

function Config(stragedy) {
  this.stragedy = stragedy
}


// Common methods
Config.prototype.get = function (path) {
  // Get the file from the given path
}

Config.prototype.put = function (data, path) {
  // Put the file
}

// Interchange methods
Config.prototype.read = function (path) {
  const data = this.get(path)
  return this.stragedy.deserialize(data)
}

Config.prototype.write = function (data, path) {
  const data = this.stragedy.serialize(data)
  this.put(data, path)
}


// Different types of stragedy
stragedy = {
  json: {
    serialize: function (data) {
      JSON.stringify(data)
    },
    deserialize: function (data) {
      JSON.parse(data)
    }
  },
  ini: {
    serialize: function (data) {
      ini.stringify(data)
    },
    deserialize: function (data) {
      ini.parse(data)
    }
  }
}


// Client code
let jsonConfig = new Config(stragedy.json)
jsonConfig.read(path)
jsonConfig.write(data, path)

let iniConfig = new Config(stragedy.ini)
iniConfig.read(path)
iniConfig.write(data, path)