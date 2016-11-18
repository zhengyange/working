import Game from './GameAttr.js';

export default class Laser {
	constructor(width = 2, height = 10, speed = 8) {
	  	this.width = width;
	  	this.height = height;
	  	this.speed = speed;
	}

	build(x, y, negative) {
		console.log(x, y, negative)
        var el = document.createElementNS(Game.ns,'rect');

        // Determine laser direction
        if (negative) {
            el.setAttribute('class', 'laser negative');
        } else {
            el.setAttribute('class', 'laser');
        }

        el.setAttribute('x', x);
        el.setAttribute('y', y);
        el.setAttribute('width', this.width);
        el.setAttribute('height', this.height);
        Game.svg.appendChild(el);
    }

    update(ship, ufo, shield, ufoBig){
    	const lasers = document.querySelectorAll('.laser');
    	if(lasers.length){
    		const active = document.getElementsByClassName('active');

            let laserX, laserY, cur, num, activeClass, activeX, activeY, activeW, activeH;

            for(cur = lasers.length; cur--;){
            	laserX = parseInt(lasers[cur].getAttribute('x'), 10);
                laserY = parseInt(lasers[cur].getAttribute('y'), 10);

                if(laserY < 0 || laserY > Game.height){
                	this.collide(lasers[cur]);
                	continue;
                }else{
                	laserY = this.direction(laserY, lasers[cur].getAttribute('class'));
                    lasers[cur].setAttribute('y', laserY);
                }

                for(num = active.length; num--;){
                    if (active[num] === undefined) return;
                    activeX = parseInt(active[num].getAttribute('x'), 10) || ship.x;
                    activeY = parseInt(active[num].getAttribute('y'), 10) || ship.y;
                    activeW = parseInt(active[num].getAttribute('width'), 10) || ship.width;
                    activeH = parseInt(active[num].getAttribute('height'), 10) || ship.height;
                    if (laserX + this.width >= activeX &&
                        laserX <= (activeX + activeW) &&
                        laserY + this.height >= activeY &&
                        laserY <= (activeY + activeH)) {

                        // Remove laser
                        this.collide(lasers[cur]);

                        // Use active's class to determine what was hit
                        activeClass = active[num].getAttribute('class');
                        if (activeClass === 'ufo active') { // regular minion
                            ufo.collide(active[num]);
                        } else if (activeClass === 'shield active') { // shield
                            shield.collide(active[num]);
                        } else if (activeClass === 'ufoShip active') { // big ufo ship
                            ufoBig.collide(active[num]);
                        } else if (ship.player[0]) { // Ship
                            ship.collide();
                        }
                    }
                }
            }
    	}
    }
    direction(y, laserClass) {
    	//区分向下发射还是向上发射
        let speed = laserClass === 'laser negative' ? -this.speed : this.speed;
        return y += speed;
    }

    collide(laser) {
        if (laser !== undefined) Game.svg.removeChild(laser);
    }
}