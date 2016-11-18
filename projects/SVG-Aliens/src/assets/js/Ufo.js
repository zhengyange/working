import Game from './GameAttr.js';
import Laser from './Laser.js';

const laserIns = new Laser();

export default class Ufo {
	constructor(){
        
		this.width = 25;
        this.height = 19,
        this.x = 64;
        this.y = 90;
        this.gap = 10;
        this.row = 5;
        this.col = 11;
        this.pathA = 'M6.5,8.8c1.1,1.6,3.2,2.5,6.2,2.5c3.3,0,4.9-1.4,5.6-2.6c0.9-1.5,0.9-3.4,0.5-4.4c0,0,0,0,0,0 c0,0-1.9-3.4-6.5-3.4c-4.3,0-5.9,2.8-6.1,3.2l0,0C5.7,5.3,5.5,7.2,6.5,8.8z M19.2,4.4c0.4,1.2,0.4,2.9-0.4,4.6 c-0.6,1.3-2.5,3.6-6.1,3.6c-4.1,0-5.9-2.2-6.7-3.5C5.4,8,5.3,6.9,5.5,5.8C5.4,5.9,5.2,6,4.9,6C4.5,6,4.2,5.8,4.2,5.6 c0-0.2,0.3-0.3,0.7-0.3c0.3,0,0.6,0.1,0.6,0.3c0.1-0.5,0.2-0.9,0.4-1.3C2.4,5.6,0,7.4,0,10.1c0,4.2,5.5,7.6,12.4,7.6 c6.8,0,12.4-3.4,12.4-7.6C24.7,7.4,22.7,5.7,19.2,4.4z M6.9,13.9c-0.8,0-1.5-0.4-1.5-0.9c0-0.5,0.7-0.9,1.5-0.9 c0.8,0,1.5,0.4,1.5,0.9C8.4,13.5,7.7,13.9,6.9,13.9z M21.2,10.7c-0.7,0-1.3-0.3-1.3-0.7c0-0.4,0.6-0.7,1.3-0.7s1.3,0.3,1.3,0.7 C22.4,10.4,21.9,10.7,21.2,10.7z';
        this.pathB = 'M6.5,8.8c1.1,1.6,3.2,2.5,6.3,2.5c3.4,0,4.9-1.4,5.7-2.6c0.9-1.5,0.9-3.4,0.5-4.4c0,0,0,0,0,0 c0,0-1.9-3.4-6.5-3.4C8.1,1,6.5,3.7,6.3,4.1l0,0C5.8,5.3,5.5,7.2,6.5,8.8z M19.3,4.4c0.4,1.2,0.4,2.9-0.4,4.6 c-0.6,1.3-2.5,3.6-6.1,3.6c-4.1,0-5.9-2.2-6.8-3.5C5,7.5,5.4,5.6,5.9,4.3C2.4,5.6,0,7.4,0,10.1c0,4.2,5.6,7.6,12.4,7.6 c6.9,0,12.4-3.4,12.4-7.6C24.8,7.4,22.8,5.7,19.3,4.4z M3.5,9.2c-0.6,0-1.1-0.3-1.1-0.6C2.4,8.2,2.9,8,3.5,8 c0.6,0,1.1,0.3,1.1,0.6C4.6,8.9,4.2,9.2,3.5,9.2z M16.5,14.6c-0.9,0-1.7-0.4-1.7-0.9c0-0.5,0.8-0.9,1.7-0.9s1.7,0.4,1.7,0.9 C18.2,14.2,17.5,14.6,16.5,14.6z M20.2,5.6c-0.4,0-0.6-0.1-0.6-0.3c0-0.2,0.3-0.3,0.6-0.3c0.4,0,0.6,0.1,0.6,0.3 C20.8,5.5,20.5,5.6,20.2,5.6z';
	}

	init(shield) {
        this.shield = shield;
        // Reset necessary values
        this.speed = 10;
        this.counter = 0;

        // Create ufos
        this.build();

        // ufos run on their own separate time gauge
        this.delay = 800 - (20 * 1);

        if (this.timer){
            window.clearInterval(this.timer);
        }
        this.timer = window.setInterval(this.update.bind(this), this.delay);
    }
    build() {
        var group = document.createElementNS(Game.ns, 'g');
        group.setAttribute('class', 'open');
        group.setAttribute('id', 'flock');

        // Loop through ufo array data you just created
        var col, el, imageA, imageB;
        for (var row = this.row; row--;) {
            for (col = this.col; col--;) {
                // Setup the ufo's output
                el = document.createElementNS(Game.ns, 'svg');
                el.setAttribute('x', this.locX(col));
                el.setAttribute('y', this.locY(row));
                el.setAttribute('class', 'ufo active');
                el.setAttribute('row', row);
                el.setAttribute('col', col);
                el.setAttribute('width', this.width);
                el.setAttribute('height', this.height);
                el.setAttribute('viewBox', '0 0 25 19'); // Controls viewport of individual ufo

                imageA = document.createElementNS(Game.ns, 'path');
                imageB = document.createElementNS(Game.ns, 'path');
                imageA.setAttribute('d', this.pathA);
                imageB.setAttribute('d', this.pathB);
                imageA.setAttribute('class','anim1 ' + this.type(row));
                imageB.setAttribute('class','anim2 ' + this.type(row));
                el.appendChild(imageA);
                el.appendChild(imageB);

                group.appendChild(el);
            }
        }

        // Add the created ufo flock to the DOM
        Game.svg.appendChild(group);

        // Store the ufo flock for manipulation later
        this.flock = document.getElementById('flock');
    }
    type(row) {
        switch(row) {
            case 0: return 'a';
            case 1: return 'b';
            case 2: return 'b';
            case 3: return 'c';
            case 4: return 'c';
        }
    }

    locX(col) {
        return this.x + (col * this.width) + (col * this.gap);
    }

    locY(row) {
        return this.y + (row * this.height) + (row * this.gap);
    }

    update() {
        var invs = document.getElementsByClassName('ufo');

        if (invs.length === 0) return;

        // Get the current flock data and set variables as necesasry
        var flockData = this.flock.getBBox(),
        flockWidth = Math.round(flockData.width),
        flockHeight = Math.round(flockData.height),
        flockX = Math.round(flockData.x),
        flockY = Math.round(flockData.y),
        moveX = 0,
        moveY = 0;

        // Decide direction based upon current Ufo flock position
        if (flockWidth + flockX + this.speed >= Game.width ||
            flockX + this.speed <= 0) {
            moveY = Math.abs(this.speed);
            this.speed = this.speed * -1; // reverse speed
        } else {
            moveX = this.speed;
        }

        // Update all UFOs
        var newX, newY;
        for (var i = invs.length; i--;) {
            newX = parseInt(invs[i].getAttribute('x'), 10) + moveX;
            newY = parseInt(invs[i].getAttribute('y'), 10) + moveY;

            invs[i].setAttribute('x', newX);
            invs[i].setAttribute('y', newY);
        }
        // Return immediately if UFOs have pushed too far
        if (flockY + flockHeight >= this.shield.y) {
            // return Game.endGame(); // Exit everything and shut down the game
        }

        this.animate();
        this.shoot(invs, flockY + flockHeight - this.height);
    }

    animate() {
        if (this.flock.getAttribute('class') === 'open') {
            this.flock.setAttribute('class','closed');
        } else {
            this.flock.setAttribute('class','open');
        }
    }
    shoot(invs, lastRowY) {
        // Test a random number to see if the ufos fire
        if (Math.floor(Math.random() * 5) !== 1) return;

        // Get invaders only from the last row
        var stack = [], currentY;
        for (var i = invs.length; i--;) {
            currentY = parseInt(invs[i].getAttribute('y'), 10);
            if (currentY >= lastRowY)
                stack.push(invs[i]);
        }

        // Choose a random invader from the stack and shoot from it
        var invRandom = Math.floor(Math.random() * stack.length);
        laserIns.build(parseInt(stack[invRandom].getAttribute('x'), 10) + (this.width / 2), lastRowY + this.height + 10, false);
    }
    collide(el) {
        // Hud.updateScore(1);
        // Hud.levelUp();
        el.parentNode.removeChild(el);
    }
}