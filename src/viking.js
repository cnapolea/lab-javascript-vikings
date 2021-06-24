// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }

}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  
  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0 ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
  }

  battleCry(){
    return 'Odin Owns You All!';
  }

}

// Saxon
class Saxon extends Soldier{
  constructor(health, strength){
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    return this.health > 0 ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let result = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].attack());
    if (this.saxonArmy[0].health < 1) this.saxonArmy.pop(); 
    return result;
  }

  saxonAttack() {
    let result = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].attack());
    if (this.vikingArmy[0].health < 1) this.vikingArmy.pop();   
    return result;
  }

  showStatus() {
     if (this.saxonArmy.length < 1){
       return 'Vikings have won the war of the century!';
     } else if (this.vikingArmy.length < 1){
       return 'Saxons have fought for their lives and survived another day...';
      } else return "Vikings and Saxons are still in the thick of battle.";
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
