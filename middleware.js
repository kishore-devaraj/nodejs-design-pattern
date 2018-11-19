/**
 * Middleware pattern is sometimes called as chain of responsibility
 * It has middleware manager which contains the list of inbound of outbound middleware to pre and 
 * post process the message before sending the actual process
 */

function MiddlewareManager(app) {
  this.app
  this.inboundMiddleware = []
  let self = this

  // Add a listener so whenever there is a incoming message
  this.app.on('message', function (data) {
    self.executeMiddleware(data, self.inboundMiddleware)
  })
}

MiddlewareManager.prototype.use = function (middleware) {
  if(middleware) {
    this.inboundMiddleware.push(middleware)
  }
}

MiddlewareManager.prototype.executeMiddleware = function (data, middleware) {
  function next (data) {return data}
  middleware.forEach(middleware => {
    if(!middleware(data, next)){ break }
  })
}

// Middleware
let json = {
  function (message, next) {
    message.data = JSON.parse(message)
    next()
  }
}

// App.js
let express = require('express')
let app = new MiddlewareManager(new Express())

// Using the json middleware to parse the incoming message
app.use(json)