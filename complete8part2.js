// var findOne = function(arr, query) {
//   for (const hero of arr) {
//     console.log(hero);
//       let isMatch = true;
      
//       for (const key in query) {
//       console.log(query[key], hero[key])
//           if (query[key] !== hero[key]) {
//               isMatch = false;
//               break;
//           }
//       }
      
//       if (!isMatch) continue;
      
//       return hero;
//   }
//   return null;
// };

// console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));



const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function(query) {
      for (const hero of this.store.heroes) {
          let isMatch = true;
          
          for (const key in query) {
              if (query[key] !== hero[key]) {
                  isMatch = false;
                  break;
              }
          }
          
          if (!isMatch) continue;
          
          return hero;
      }
      return null;
    },
  }



console.log(Database.findOne({ id: 2, name: 'Aquaman' }));