module.exports = class Character {
    constructor(name, lifePoints, atkPoints, defensePoints) {
        this.name = name
        this.lifePoints = lifePoints
        this.atkPoints = atkPoints
        this.defensePoints = defensePoints
    }
    attack(targetCharacter){
        targetCharacter.lifePoints -= this.atkPoints - targetCharacter.defensePoints
    }
}