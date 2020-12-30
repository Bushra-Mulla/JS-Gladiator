import { Gladiator } from "./gladiator.js";
import { Arena } from "./arena.js";

//................. Done
// const max = new Gladiator("Maximus", "Trident");
// console.log(max.name); // "Maximus"
// console.log(max.weapon); // "Trident"
//Bonus
//................. Done
// const jesse = new Gladiator("Jesse", "Taco");
// console.log(jesse.name);
// console.log(jesse.weapon);
//Arena
//................. Done
//const colosseum = new Arena("Colosseum");
//console.log(colosseum.name); // => Colosseum
//................. Done
// const colosseum_1 = new Arena("megalopolis");
// console.log(colosseum_1.name); // => Megalopolis
//................. Done
// const colosseum_2 = new Arena("Colosseum");
// console.log(colosseum_2.gladiators); // => []
//................. Done
// const max = new Gladiator("Maximus", "Trident");
// const colosseum = new Arena("Colosseum");
// colosseum.addGladiator(max);
// console.log(colosseum.gladiators); // => [Gladiator]
//................. Done
// const max = new Gladiator("Maximus", "Trident");
// const titus = new Gladiator("Titus", "Sword");
// const andronicus = new Gladiator("Andronicus", "Sword");
// const colosseum = new Arena("Colosseum");

// colosseum.addGladiator(max);
// colosseum.addGladiator(titus);
// colosseum.addGladiator(andronicus);

// console.log(colosseum.gladiators.length); // => 2
//.................
const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Spear");
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();
//console.log(colosseum.fight());
console.log(colosseum.gladiators); // => [max]
//.................
