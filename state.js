/**
 * State is similar to stragedy
 * But State Design pattern can change its stragedy depending upon the
 * current state
 */

 /**
  * We can implement fail-safe socket using state design pattern
  */

  function FailSafeSocket (socket) {
    this.socket = socket
    this.queue = []
    this.currentState = null
    this.states = {
      offline: new OfflineState(this),
      online: new OnlineState(this)
    }
    this.changeState('offline')
  }

  FailSafeSocket.prototype.changeState = function (state) {
    console.log(`Changing from ${this.currentState} to ${state}`)
    this.currentState = this.states[state]
  }

  FailSafeSocket.prototype.send = function (data) {
    this.currentState.send(data)
  }


  // Different States

  function OfflineState (failSafeSocket) {
    this.socket = failSafeSocket
  }

  OfflineState.prototype.send = function (data) {
    this.socket.queue.push(data)
  }

  OfflineState.prototype.activate = function () {
    let self = this
    setTimeout(function(){
      self.activate()
    }, 5000)

    // Try to connect to the server for every 5 milli seconds
    // If the connection is established make the current state to online
    // this.socket.changeState('online')
  }

  function OnlineState (failSafeSocket) {
    this.socket = socket
  }

  OnlineState.prototype.send = function (data) {
    // Send the data to the socket
  }

  OnlineState.prototype.activate = function () {
    this.socket.queue.map(data => this.socket.send(data))
    this.socket.queue = []
    // Add the event listener for error to change to socket to offline status
    // this.socket.on('error', this.changeState('offline'))
  }




  