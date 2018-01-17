'use strict';

function makeStudentReport(data) {
  for (let i = 0; i < data.length; i++) {
    console.log(`${data[i].name}: ${data[i].grade}`);
  }
}


const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

makeStudentReport(testData);