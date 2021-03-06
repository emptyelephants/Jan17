'use strict';

function createMyObject()  {
  const myObject =  {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function() {return 'Hello';}
  };
  return myObject;
}
let firstObj = createMyObject();

function objectUpdater(obj){
  
  obj.foo='foo';
  obj.bar='bar';
  obj.bizz='bizz';
  obj.bang='bang';

  return obj;
}
// console.log(objectUpdater(firstObj));
//console.log(createMyObject());


function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }};
  return person;
}

const myPerson = personMaker();
// console.log(personMaker().fullName());

var sampleObj = { foo: 'foo', bar: 'bar', bizz: 'bizz', bang: 'bang', };
function keyDeleter(obj){
  delete obj.foo;
  delete obj.bar;
  return obj;
}
console.log(keyDeleter(sampleObj));












