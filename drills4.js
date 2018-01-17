function lotrConstructor(name,nickname,race,origin,attack,defense){

  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe:function(){return `${name} is a ${race} from ${origin}`},
    evaluateFight:function(opponent){ 
      let offenseTotal= this.attack>opponent.defense ? `${this.attack-opponent.defense}`:`0`;
      let defenseTotal = this.defense<opponent.attack ? `${opponent.attack-this.defense}`:`0`;
      return `Your opponent takes ${offenseTotal} damage and you recieve ${defenseTotal} damage`

    }  
    };
}

// x =is this.attck if opp.def<this.attack
let lotrCharacters=[];
let gandalf = lotrConstructor('Gandalf the White','Gandalf','Wizard','Middle Earth',10,6);
let bilbo = lotrConstructor('Bilbo Baggins','Bilbo','Hobbit','The Shire',2,1);
let frodo= lotrConstructor('Frodo Baggins','Frodo','Hobbit','The Shire',3,2);
let aragorn = lotrConstructor('Aragorn son of Arathorn','Aragorn','Man','Dunnedain',6,8);
let legolas = lotrConstructor('Legolas','Legolas','Elf','Woodland Realm',8,5);
let arwen = lotrConstructor('Arwen undomiel','Arwen','Half-Elf','Rivendell',9,5);

lotrCharacters.push(frodo, gandalf, bilbo, aragorn, legolas, arwen);

//console.log(frodo.describe());
//console.log(frodo.evaluateFight(gandalf));
// console.log(lotrCharacters);

let findAragorn = (lotrCharacters.find(aragorn => {
  return (aragorn.nickname === 'Aragorn')
}))

//console.log(findAragorn.describe());

let hobbitSelector = lotrCharacters.filter(raceCheck => raceCheck.race === "Hobbit");
let attackAboveFive = lotrCharacters.filter(attackCheck => attackCheck.attack > 5);
//console.log(hobbitSelector);
console.log(attackAboveFive);
