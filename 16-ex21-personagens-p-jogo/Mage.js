const Character = require('./Character');

module.exports =  class Mage extends Character {
    constructor(name, lifePoints, atkPoints, defensePoints,magicPoints) {
        super(name, lifePoints, atkPoints, defensePoints)
        this.magicPoints = magicPoints
    }
    attack(targetCharacter) {
        targetCharacter.lifePoints -= (this.atkPoints + this.magicPoints) - targetCharacter.defensePoints
    }
    heal(targetCharacter) {
        targetCharacter.lifePoints += this.magicPoints * 2
    }
}