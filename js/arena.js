export { Arena };

class Arena {
  constructor(name) {
    this.name = name;
  }
  capitalized() {
    this.name.split();
    //only the first char
    // capitalized on without using foreach
    //join
  }
  addGladiator() {}

  fight() {
    //shold call addGladiator twice //2 Gladiator
  }

  //Bonus
  removeGladiator() {}

  winerMax() {
    //if the gladiator named "Maximus" is in the fight, he wins.
  }
  entertained() {
    //The crowd is only entertained if Maximus is in the arena.
  }
  userVotes() {
    //If user votes down, the losing gladiator is removed
    //If the user votes up, the gladiator stays in the arena and his opponent is removed.
    //call remove method
  }
}
