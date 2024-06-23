#! /usr/bin/env node
import inquirer from "inquirer"

class Player {
    name: string;
    health: number;
    inventory: Item[];

    constructor(name: string) {
        this.name = name;
        this.health = 100; // Starting health
        this.inventory = [];
    }

    takeItem(item: Item) {
        this.inventory.push(item);
        console.log(`${this.name} picked up ${item.name}.`);
    }

    useItem(itemName: string) {
        const itemIndex = this.inventory.findIndex(item => item.name === itemName);
        if (itemIndex !== -1) {
            // Simulate item usage (for demonstration)
            console.log(`${this.name} used ${itemName}.`);
            this.inventory.splice(itemIndex, 1); // Remove used item from inventory
        } else {
            console.log(`${this.name} does not have ${itemName} in their inventory.`);
        }
    }

    takeDamage(damage: number) {
        this.health -= damage;
        console.log(`${this.name} took ${damage} damage. Remaining health: ${this.health}`);
        if (this.health <= 0) {
            console.log(`${this.name} has been defeated! Game over.`);
        }
    }
}

class Item {
    name: string;
    description: string;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
    }
}

class Enemy {
    name: string;
    health: number;
    damage: number;

    constructor(name: string, health: number, damage: number) {
        this.name = name;
        this.health = health;
        this.damage = damage;
    }

    attack(target: Player) {
        target.takeDamage(this.damage);
    }
}

class Game {
    player: Player;
    enemies: Enemy[];

    constructor(playerName: string) {
        this.player = new Player(playerName);
        this.enemies = [];
    }

    spawnEnemy(enemy: Enemy) {
        this.enemies.push(enemy);
        console.log(`${enemy.name} has appeared!`);
    }

    start() {
        console.log(`Welcome, ${this.player.name}, to the adventure game!`);

        // Example gameplay loop (for demonstration)
        this.spawnEnemy(new Enemy("Goblin", 50, 10));
        this.player.takeItem(new Item("Potion", "Restores health."));
        this.player.useItem("Potion");
        this.enemies[0].attack(this.player);
    }
}

// Example usage:
let game = new Game("Player1");
game.start();