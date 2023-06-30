import { Hero } from "./classe_hero";
import { HeroAxe } from "./classe_HeroAxe";
import { HeroSpear } from "./classe_HeroSpear";
import { HeroSword } from "./classe_HeroSword";


let hero1 = new HeroSword("Louis");
let hero2 = new HeroSword("Jermey");

let gameOver = false;

while (!gameOver) {
    hero1.attack(hero2);
    hero2.attack(hero1);
    if (!hero1.isAlive() && !hero2.isAlive()) {
        console.log("It's a Draw");
        gameOver = true;

    }else if (!hero1.isAlive()){
        console.log(`${hero2.getName()} wins`);
        gameOver = true;
    }else if (!hero2.isAlive()) {
        console.log(`${hero1.getName()} wins`);
        gameOver = true;
    }    
    console.log(hero1);
    console.log(hero2);
}