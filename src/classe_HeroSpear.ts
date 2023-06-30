import { HeroAxe } from "./classe_HeroAxe";
import { Hero } from "./classe_hero";
import { Weapon } from "./classe_weapon";



export class HeroSpear extends Hero {
    weapon: Weapon;

    constructor(name:string) {
        super(name);
        this.weapon = new Weapon("Spear")
    }

    attack(opponent: Hero): void{
        if (opponent instanceof HeroAxe) {
            opponent.setLife(opponent.getLife() - this.getPower()*2 + this.weapon.damage)
            
        } else {
            super.attack(opponent)
        }
    }
}