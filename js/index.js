import { Gladiator } from "./gladiator.js";
import { Arena } from "./arena.js";

//................. Done
const max = new Gladiator("Maximus", "Trident");
console.log(max.name); // "Maximus"
console.log(max.weapon); // "Trident"
//Bonus
//.................
const jesse = new Gladiator("Jesse", "Taco");
console.log(jesse.name);
console.log(jesse.weapon);
//Arena
//................. Done
const colosseum = new Arena("Colosseum");
console.log(colosseum.name); // => Colosseum
//.................
const colosseum = new Arena("megalopolis");
console.log(colosseum.name); // => Megalopolis
//.................
const colosseum = new Arena("Colosseum");
console.log(colosseum.gladiators); // => []
//.................
const max = new Gladiator("Maximus", "Trident");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
console.log(colosseum.gladiators); // => [Gladiator]
//.................
const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Sword");
const andronicus = new Gladiator("Andronicus", "Sword");
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);

console.log(colosseum.gladiators.length); // => 2
//.................
const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Spear");
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();

console.log(colosseum.gladiators); // => [max]
//.................
