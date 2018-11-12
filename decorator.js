/**
 * Decorator design pattern is similar to that of proxy
 * Only it can add new methods along with the existing methods.
 * It is different from that of classical inheritance
 * Because the newly added methods will be accessible only via decorated methods
 */

 /**
  * Like proxy, the implementation can be done in two ways
  * Object composition
  */
 function createDecorator (component) {
    let proto = Object.getPrototypeOf(component)
    
    function Decorator(component) {
      this.component = component
    }

    Decorator.prototype = Object.create(proto)

    // New method
    Decorator.prototype.greetings = function () {
      // Welcome message
    }

    // Delegated method
    Decorator.prototype.hello = function () {
      // Implement the rest
    }

    return new Decorator(component)
 }


 
 /**
  * Object Augmentation
  */


  function createDecorator (component) {
    component.greetings = function () {
      // Welcome message
    }
  }