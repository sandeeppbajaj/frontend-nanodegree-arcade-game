// Enemies our player must avoid
var Enemy = function(x, y, d) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.d = d;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if (this.x + (this.d * dt) < 404) {
        this.x += (this.d * dt);
    } else {
        this.x = -100;
        if (Math.random() < 0.5 && (this.y + 85) <= 230) {
            this.y += 85;
        } else if (this.y - 85 >= 60) {
            this.y -= 85;
        }
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.originalX = x;
    this.originalY = y;
    this.sprite = 'images/char-boy.png';
};

//Update the player's position, optional method
Player.prototype.update = function() {};

//Draw the player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    if ('left' === key && (this.x - 101) >= 0) {
        this.x -= 101;
    } else if ('up' == key && (this.y - 83) >= -50) {
        this.y -= 83;
    } else if ('right' === key && (this.x + 101) <= 404) {
        this.x += 101;
    } else if ('down' === key && (this.y + 83) <= 404) {
        this.y += 83;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(100, 60, 250), new Enemy(300, 145, 200), new Enemy(100, 230, 300)];
var player = new Player(202, 404);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
