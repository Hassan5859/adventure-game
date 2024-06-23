#! /usr/bin/env node
class Player {
    name;
    health;
    inventory;
    constructor(name) {
        this.name = name;
        this.health = 100; // Starting health
        this.inventory = [];
    }
    takeItem(item) {
        this.inventory.push(item);
        console.log(`${this.name} picked up ${item.name}.`);
    }
    useItem(itemName) {
        const itemIndex = this.inventory.findIndex(item => item.name === itemName);
        if (itemIndex !== -1) {
            // Simulate item usage (for demonstration)
            console.log(`${this.name} used ${itemName}.`);
            this.inventory.splice(itemIndex, 1); // Remove used item from inventory
        }
        else {
            console.log(`${this.name} does not have ${itemName} in their inventory.`);
        }
    }
    takeDamage(damage) {
        this.health -= damage;
        console.log(`${this.name} took ${damage} damage. Remaining health: ${this.health}`);
        if (this.health <= 0) {
            console.log(`${this.name} has been defeated! Game over.`);
        }
    }
}
class Item {
    name;
    description;
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}
class Enemy {
    name;
    health;
    damage;
    constructor(name, health, damage) {
        this.name = name;
        this.health = health;
        this.damage = damage;
    }
    attack(target) {
        target.takeDamage(this.damage);
    }
}
class Game {
    player;
    enemies;
    constructor(playerName) {
        this.player = new Player(playerName);
        this.enemies = [];
    }
    spawnEnemy(enemy) {
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
export {};
