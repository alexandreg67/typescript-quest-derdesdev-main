import { HeroSpear } from "./classe_HeroSpear";
import { Hero } from "./classe_hero";
import { Weapon } from "./classe_weapon";

// - `HeroAxe` : si le type de `opponent` est `HeroSword`, multiplier `power` par deux
// - `HeroSword` : si le type de `opponent` est `HeroSpear`, multiplier `power` par deux
// - `HeroSpear` : si le type de `opponent` est `HeroAxe`, multiplier `power` par deux

export class HeroSword extends Hero {
    weapon: Weapon;

    constructor(name:string) {
        super(name);
        this.weapon = new Weapon("Sword")
    }

    attack(opponent: Hero): void{
        if (opponent instanceof HeroSpear) {
            opponent.setLife(opponent.getLife() - this.getPower()*2 + this.weapon.damage)
            
        } else {
            super.attack(opponent)
        }
    }
}