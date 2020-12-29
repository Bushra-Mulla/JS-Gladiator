export { Gladiator };

class Gladiator {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = this.checkWeapon(weapon);
  }
  checkWeapon(weapon) {
    let arr = ["Spear", "Club", "Trident"];
    let result = "";
    arr.find((element) => {
      if (element === weapon) return (result = weapon);
      else result = "error";
    });
    return result;
  }
}
