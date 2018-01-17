'use strict';

function makeStudentReport(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(`${data[i].name}: ${data[i].grade}`);
  }
}


// const testData = [
//   { name: 'Jane Doe', grade: 'A' },
//   { name: 'John Dough', grade: 'B' },
//   { name: 'Jill Do', grade: 'A' },
// ];

//makeStudentReport(testData);

function enrollInSummerSchool(students){
  for(let i = 0; i<students.length;i++){
    students[i].status = 'In Summer School';
  }
  return students;
}


let testData = [
  {
    name: 'Burt',
    status: 'Playing hooky',
    course: 'Biology',
  },
  {
    name: 'Melanie',
    status: 'Sick',
    course: 'Mathematics',
  },
  {
    name: 'Leonard',
    status: 'AWOL',
    course: 'Computer science',
  },
];

console.log(enrollInSummerSchool(testData));

function findById(items, idNum) {
  for ( let i = 0; i < items.length; i++) {
    if (idNum === items[i].id) {
      return items[i];
    }
  }
}

const data = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];

console.log(findById(data,2));


const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const objectC = {
  id: 9,
  name: 'Billy Bear',
  age: 62,
  city: 'Milwaukee',
  status: 'paused',
};

const objectD = {
  foo: 2,
  bar: 'Jane Doe',
  bizz: 34,
  bang: 'Chicago',
};

const expectedKeys = ['id', 'name', 'age', 'city'];
                    //['foo','bar','bizz','bang']
function validateKeys(obj,expectedKeys){
  let ourObjectKeys = Object.keys(obj);
  if(ourObjectKeys.length!=expectedKeys.length){
    return false;
  }
  for(let i =0;i<expectedKeys.length;i++){
  if(ourObjectKeys[i]!=expectedKeys[i]){
    return false; 
    }
  }
  
  return true; 

}

console.log(validateKeys(objectA,expectedKeys));
console.log(validateKeys(objectB,expectedKeys));
console.log(validateKeys(objectC,expectedKeys));
console.log(validateKeys(objectD,expectedKeys));

