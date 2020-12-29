export { Arena };

class Arena {
  constructor(name) {
    this.name = this.capitalized(name);
    this.gladiators = [];
  }
  capitalized(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  addGladiator(gladiators) {
    if (this.gladiators.length < 2) {
      if (gladiators.weapon == "error") {
        return;
      } else {
        return this.gladiators.push(gladiators);
      }
    }
  }

  fight() {
    if (this.gladiators.length === 2) {
    } else {
      return "There are no enough gladiators";
    }
  }

  //Bonus
  removeGladiator(name) {}

  winerMax(name) {
    //if the gladiator named "Maximus" is in the fight, he wins.
  }
  entertained() {
    //The crowd is only entertained if Maximus is in the arena.
  }
  userVotes(vote) {
    //If user votes down, the losing gladiator is removed
    //If the user votes up, the gladiator stays in the arena and his opponent is removed.
    //call remove method
  }
}
