export { Gladiator };

class Gladiator {
  constructor(name, weapon) {
    this.name = name;
    //   this.weapon = weapon; //a weapon (one of Spear, Club, Trident)
    this.weapon = this.checkWeapon(weapon);
  }
  //Bonus
  checkWeapon(weapon) {
    let arr = ["Spear", "Club", "Trident"];
    let result = "";
    arr.forEach((arrWeapon) => {
      if (weapon !== arrWeapon) {
        result = "error";
      } else {
        this.weapon = weapon;
        result = weapon;
      }
    });
    return result;
  }
}

//Make it so that you cannot assign a Gladiator an
//invalid weap on(i.e., anything aside from Spear, Club or
//Trident.That means running code like new Gladiator("Jesse", "Taco") would throw an error
