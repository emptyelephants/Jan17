'use strict';

function createMyObject()  {
  const myObject =  {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function() {return "Hello"}
  };
  return myObject;
}

  console.log(createMyObject());