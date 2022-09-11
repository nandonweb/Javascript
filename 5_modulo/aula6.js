// Manipulando prototypes
// new Object -> Object.prototype 
const objA = {
    chaveA: 'A'
    // _proto_: Object.prototype
};

// new Object -> Object.prototype 
const objB = {
    chaveA: 'A'
    // _proto_: Object.prototype
};

Object.setPrototypeOf(objA, objB);

console.log(objB.chaveA);

