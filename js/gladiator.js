export { Gladiator };

class Gladiator {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon; //a weapon (one of Spear, Club, Trident)
    //  this.weapon = this.checkWeapon(weapon);
  }
  //Bonus
  checkWeapon(weapon) {}
}

//Make it so that you cannot assign a Gladiator an
//invalid weap on(i.e., anything aside from Spear, Club or
//Trident.That means running code like new Gladiator("Jesse", "Taco") would throw an error

//test bonus
//console.log(max.weapon); // "Trident"
