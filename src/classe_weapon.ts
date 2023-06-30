export class Weapon {

    damage:number
    name:string

    constructor(name:string){ 
        this.name = name
        this.damage = this.chooseDamage(name)
    }

    chooseDamage(name:string) : number{
        if (name === "Axe") {
            return 20
        } else if (name === "Spear") {
            return 30
        } else if (name === "Sword") {
            return 40
        } else {
            return 0
        }
    }
}