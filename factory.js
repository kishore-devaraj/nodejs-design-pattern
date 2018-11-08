/**
 * Factory pattern in nodejs is used to create different objects based on different condition.
 * Instead of calling each file separtely, we have wrapper function over it and continue to add
 * new features
 */

function JpgImage(image) {
  console.log('jpg image')
}

function PngImage(image) {
  console.log('png image')
}

function GifImage(image) {
  console.log('gif image')
}

function createImage(image) {
  if (image.match(/\.jpg$/)) {
    return new JpgImage(image)
  } else if (image.match(/\.png/)) {
    return new PngImage(image)
  } else if (image.match(/\.gif/)) {
    return new GifImage(image)
  }
}
createImage('hello.jpg')

/**
 * We can also enforce encapsulation using factory pattern
 * Below we are creating two objects,
 * One is private objects used to store info in it privately
 * Second one is the public interface using that we can access
 */

function createPerson(name) {
  let _person = {}
  let person = {
    setName: function (name) {
      _person.name = name
    },
    getName: function () {
      return _person.name
    }
  }
  _person.name = name
  return person
}

let person = createPerson('Kishore')
console.log(person.getName())
person.setName('Devaraj')
console.log(person.getName())


/**
 * This design pattern can also be used to create different objects
 * depending upon on different environment.
 * The following will create Profiler object on development for metrics purpose.
 * But when it's running in production mode, we return obj with empty functions
 */

 function Profiler (label) {
  this.label = label
}

Profiler.prototype.start = function () {
  this.start = new Date().getMilliseconds()
}

Profiler.prototype.end = function () {
  this.end = new Date().getMilliseconds()
  console.log(`Total time taken is: ${this.last - this.start}`)
}

module.exports = function () {
  if (process.NODE_ENV === 'development') {
    return new Profiler
  } else if (process.NODE_ENV === 'production') {
    return {
      start: function () {},
      end: function() {}
    }
  } else {
    throw new Error('NODE_ENV must be set')
  }
}