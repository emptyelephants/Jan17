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
let firstObj = createMyObject();

function objectUpdater(obj){
  
  obj.foo='foo';
  obj.bar='bar';
  obj.bizz='bizz';
  obj.bang='bang';

return obj;
}
console.log(objectUpdater(firstObj));
//console.log(createMyObject());

