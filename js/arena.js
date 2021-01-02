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
      if (gladiators.weapon === "error") {
        return;
      } else {
        return this.gladiators.push(gladiators);
      }
    }
  }
  fight() {
    let g_1 = this.gladiators[0].weapon;
    let g_2 = this.gladiators[1].weapon;

    if (this.gladiators.length === 2) {
      if (g_1 === g_2) {
        this.gladiators.length = 0;
      }
      if (g_1 === "Trident" && g_2 === "Spear") {
        this.gladiators.splice(1, 1);
      } else if (g_1 === "Spear" && g_2 === "Trident") {
        this.gladiators.splice(0, 1);
      }

      if (g_1 === "Trident" && g_2 === "Club") {
        this.gladiators.splice(0, 1);
      } else if (g_1 === "Club" && g_2 === "Trident") {
        this.gladiators.splice(1, 1);
      }

      if (g_1 === "Spear" && g_2 === "Club") {
        this.gladiators.splice(1, 1);
      } else if (g_1 === "Club" && g_2 === "Spear") {
        this.gladiators.splice(0, 1);
      }
    } else {
      console.log("There are no enough gladiators");
    }
  }

  //Bonus
  removeGladiator(names) {
    this.gladiators.filter((gladiator) => {
      const index = gladiator === names;
      this.gladiators.splice(index, 1);
    });
  }

  winerMax() {
    //if the gladiator named "Maximus" is in the fight, he wins.
    // if (this.gladiators.length === 2) {
    //   console.log("Maximus is win");
    //   this.gladiators.filter((gladiator) => {
    //     gladiator.name === "Maximus";
    //     console.log("Maximus is win");
    //   });
    // }
  }
  entertained() {
    //The crowd is only entertained if Maximus is in the arena.
  }
  userVotes(vote, loser) {
    // if (vote == true) {
    //   this.gladiators.splice(this.gladiators.name == names, +1);
    // }
    //If user votes down, the losing gladiator is removed
    //If the user votes up, the gladiator stays in the arena and his opponent is removed.
    //call remove method
  }

}
