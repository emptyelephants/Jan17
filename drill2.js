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