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

  removeGladiator(names) {
    this.gladiators.filter((gladiator) => {
      const index = gladiator === names;
      this.gladiators.splice(index, 1);
    });
  }
}
