const Character = require('./Character');

module.exports =  class Thief extends Character {
    attack(targetCharacter) {
        targetCharacter.lifePoints -= (this.atkPoints - targetCharacter.defensePoints) * 2
    }
}