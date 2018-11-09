/**
 * Using proxy design pattern we can create middleware between
 * the actual interface and the client.
 * 
 * Using this we can perform
 * 1. authorization
 * 2. logging
 * 3. session maintainance
 */

 /**
  * Proxy can be created using two different methods
  * 1. Object composition
  * 2. Object augumentation
  */

  /** Object composition */
  function createProxy (subject) {
    let proto = Object.getPrototypeOf(subject)

    function Proxy (subject) {
      this.subject = subject
    }

    // proxied method
    Proxy.prototype.hello = function () {
      return this.subject.hello() + 'world!'
    }

    // delegate method
    Proxy.prototype.goodbye = function () {
      return this.subject.goodbye.apply(this.subject, arguments)
    }

    return new Proxy(subject)
  }

  /** Object augmentation */
  function createProxy (subject) {
    let orgHello = subject.hello()
    subject.hello = function () {
      return orgHello.call(this) + 'world!'
    }
    return subject
  }

  /** 
   * One of the major difference between composition and 
   * augmentation is that,
   * 
   * In composition we are creating a brand new object and adding proxied
   * and delegated method
   * 
   * In augmentation we are overriding the existing method (mutation)
   * 
   * But in most cases we will be using augmentation, since it's easier to implement
   */

   