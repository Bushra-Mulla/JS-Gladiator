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
      //remove the loser
      for (const kay in this.gladiators) {
        if (this.gladiators[0].weapon === this.gladiators[1].weapon) {
          this.gladiators.length = 0;
        }
        //for (let i = 0; i < 2; i++) {
        if (this.gladiators[kay].weapon === "Spear" && "Trident") {
          this.gladiators.splice(this.gladiators[kay].weapon === "Spear", +1);
        } else if (this.gladiators[kay].weapon === "Spear" && "Club") {
          this.gladiators.splice(this.gladiators[kay].weapon === "Club", +1);
        } else if (this.gladiators[kay].weapon === "Club" && "Trident") {
          this.gladiators.splice(this.gladiators[kay].weapon === "Trident", +1);
        }
      }
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
