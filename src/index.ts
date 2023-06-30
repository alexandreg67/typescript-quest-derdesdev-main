console.log("Bonjour du js");

class Hero {
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

class HeroAxe extends Hero {

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

class HeroSpear extends Hero {
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

class HeroSword extends Hero {
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

class Weapon {

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


let hero1 = new HeroAxe("Louis");
let hero2 = new HeroSword("Jeremy");

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