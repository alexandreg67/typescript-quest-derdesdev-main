import { Weapon } from "./classe_weapon"

export class Hero {
    weapon!: Weapon;
    private name:string;
    private power:number;
    private life:number;

    constructor(name:string) {
        this.name = name;
        this.power = 20;
        this.life = 100;
        this.weapon = new Weapon("Sans arme")
    }

    getName():string {
        return this.name
    }

    setName(name:string):void {
        this.name = name
    }

    getPower():number {
        return this.power
    }

    setPower(power:number) {
        this.power = power
    }

    getLife():number {
        return this.life
    }

    setLife(life:number) {
        this.life = life
    }

    attack(opponent: Hero): void{
        opponent.setLife(opponent.getLife() - (this.power + this.weapon.damage))     
    }

    isAlive():boolean{
        return this.life > 0
    }


}


