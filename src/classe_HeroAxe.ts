import { HeroSword } from "./classe_HeroSword";
import { Hero } from "./classe_hero";
import { Weapon } from "./classe_weapon";



export class HeroAxe extends Hero {

    weapon: Weapon;

    constructor(name:string) {
        super(name);
        this.weapon = new Weapon("Axe");
    }

    attack(opponent: Hero): void{
        if (opponent instanceof HeroSword) {
            opponent.setLife(opponent.getLife() - this.getPower()*2 + this.weapon.damage)
            
        } else {
            super.attack(opponent)
        }
    }


}