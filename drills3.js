const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return this.water / this.flour * 100;
  }
};

console.log(loaf.hydration());

const objA = {
  foo:'foo-',
  bar:'bar-',
  fum:'fum-',
  quux:'quux-',
  spam:'spam-',
}
for(index in objA){
  console.log(index+objA[index]);
}
// ask mentor how , for better understanding
// for(let i=0;i<objA.length;i++){
//   console.log('old for loop');
//   console.log(objA[i]);
// }

let food = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}
console.log(food.meals[3]);

let job1 = {
  name: 'John Doe',
  jobTitle: 'survivor man'
}

let job2 = {
  name: 'Jane Doe',
  jobTitle: 'survivor woman'
}

let job3 = {
  name: 'Bumper',
  jobTitle: 'cat'
}

function jobsToArray(...jobs) {
  let jobArray = [job1, job2, job3];
  return jobArray;
}
//(...items){ const [item1,item2,item3] = items; return items; }

console.log(jobsToArray(job1, job2, job3));