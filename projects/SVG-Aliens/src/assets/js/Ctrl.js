import Ship from './Ship.js';
import Laser from './Laser.js';

const laserIns = new Laser();
export default class Ctrl {
	constructor(){
	}

	init(ship){
		this.ship = ship;
		window.addEventListener('keydown', () => this.keyDown(), true);
        window.addEventListener('keyup', () => this.keyUp(), true);
        window.addEventListener('click', () => this.click(), true);
	}

	update(ufo, shield, ufoBig){
		laserIns.update(this.ship, ufo, shield, ufoBig);
	}

	click(){
		let laser = document.getElementsByClassName('negative');
        let player = document.getElementsByClassName('player');

        if (event.button === 0 &&
            player.length &&
            !laser.length)
            laserIns.build(ship.x + (ship.width / 2) - laserIns.width, ship.y - laserIns.height, true);
	}

	keyDown(){

		switch(event.keyCode) {
			case 32: // Spacebar
                let laser = document.getElementsByClassName('negative');
                let player = document.getElementsByClassName('player');
                if (!laser.length && player.length)
                    laserIns.build(this.ship.x + (this.ship.width / 2) - laserIns.width, this.ship.y - laserIns.height, true);
                break;
			case 39:
				this.ship.right = true;
				break;
			case 37:
				this.ship.left = true;
				break;
			default: 
				break;
		}
	}

	keyUp(){
		switch(event.keyCode){
			case 39:
				this.ship.right = false;
				break;
			case 37:
				this.ship.left = false;
				break;
			default:
				break; 
		}
	}

}

