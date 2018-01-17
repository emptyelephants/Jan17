const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return this.water / this.flour * 100;
  }
};

//console.log(loaf.hydration());

const objA = {
  foo:'foo-',
  bar:'bar-',
  fum:'fum-',
  quux:'quux-',
  spam:'spam-',
}
for(index in objA){
  //console.log(index+objA[index]);
}
// ask mentor how , for better understanding
// for(let i=0;i<objA.length;i++){
//   console.log('old for loop');
//   console.log(objA[i]);
// }

let food = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}
//console.log(food.meals[3]);

let job1 = {
  name: 'John Doe',
  jobTitle: 'survivor man',
  boss:'Bumper'
}

let job2 = {
  name: 'Jane Doe',
  jobTitle: 'survivor woman',
  boss:'Bumper'
}

let job3 = {
  name: 'Bumper',
  jobTitle: 'cat'
}
//part 4's
// function jobsToArray(...jobs) {
//   let jobArray = [job1, job2, job3];
//   return jobArray;
// }
//(...items){ const [item1,item2,item3] = items; return items; }

// console.log(jobsToArray(job1, job2, job3));


//part 5
//from warnings, tertiary string.
//The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${warningCounter >1 ? 'times today!' : 'time today!'}`);

function jobsToArray(...jobs) {
  let jobArray = [job1, job2, job3];
  let jobString =''
  for(let i=0;i<jobArray.length;i++){
   jobString+=`${jobArray[i].name} ${jobArray[i].jobTitle} ${jobArray[i].hasOwnProperty('boss') ? `reports to ${jobArray[i].boss}`:`reports to nobody`} \n`
  }

  return jobString.trim();
}


console.log(jobsToArray(job1, job2, job3));










