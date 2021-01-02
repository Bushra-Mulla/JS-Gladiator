import { Gladiator } from "./gladiator.js";
import { Arena } from "./arena.js";

const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Spear");

const andronicus = new Gladiator("Andronicus", "Spear");
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);
colosseum.fight();
console.log(colosseum.gladiators); // => [max]

//.................
//colosseum.removeGladiator("Maximus");
colosseum.winerMax();

console.log(colosseum.gladiators); // => []
