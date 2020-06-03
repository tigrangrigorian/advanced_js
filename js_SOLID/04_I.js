// Interface Segregation Principe

//-------------------------------------------------------------------------------
// class Animal {
//   constructor(name) {
//     this.name = name
//   }
//
//   walk() {
//     console.log(`${this.name} cans walk`);
//   }
//
//   swim() {
//     console.log(`${this.name} cans swim`);
//   }
//
//   fly() {
//     console.log(`${this.name} cans fly`);
//   }
// }
//
// class Dog extends Animal{
//   fly() {
//     return null
//   }
// }
//
// class Eagle extends Animal{
//   swim() {
//     return null
//   }
// }
//
// class Whale extends Animal{
//   walk() {
//     return null
//   }
//   fly() {
//     return null
//   }
// }
//
// const dog = new Dog('Rex');
// dog.walk()
// dog.swim()
// dog.fly()
//
// const eagle = new Eagle('Eagle');
// eagle.fly()
// eagle.swim()
// eagle.walk()
//
// const whale = new Whale('Big Blue Friend')
// whale.swim()
// whale.fly()
// whale.walk()
//-------------------------------------------------------------------------------

class Animal {
  constructor(name) {
    this.name = name
  }
}

const swimmer = {
  swim() {
    console.log(`${this.name} cans swim`);
  }
}

const walker = {
  walk() {
    console.log(`${this.name} cans walk`);
  }
}

const flyer = {
  fly() {
    console.log(`${this.name} cans fly`);
  }
}

class Dog extends Animal{

}
class Eagle extends Animal{

}
class Whale extends Animal{

}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flyer, walker)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Rex');
dog.walk()
dog.swim()

const eagle = new Eagle('Eagle');
eagle.fly()
eagle.walk()

const whale = new Whale('Big Blue Friend')
whale.swim()
