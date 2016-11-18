import game from './GameAttr.js';

export default class Ship {
	constructor(width = 35, height = 12, speed = 2) {
		this.width = width;
		this.height = height;
		this.speed = speed;
		this.left = false;
		this.right = false;
		this.path = 'm 0 15 l 9 5 h 17 l 9 -5 l -2 -5 l -10 3 l -6 -15 l -6 15 l -10 -3 l -2 5';

	}

	init(){
		this.x = 220;
		this.y = 460;
		this.build(this.x, this.y, 'player active');
	}

	build(x, y, shipClass){
		let el = document.createElementNS(game.ns, 'path');
		let pathNew = 'M' + x + ' ' + (y + 8) + this.path;
		el.setAttribute('class', shipClass);
		el.setAttribute('d', pathNew);
		game.svg.appendChild(el);

		this.player = document.querySelector('.player');
	}

	update(){
		// this.x -= this.speed;
		if(this.left && this.x >= 0){
			this.x -= this.speed;
		}else if(this.right && this.x <= (game.width - this.width)){
			this.x += this.speed;
		}

		let pathNew = 'M' + this.x + ' ' + (this.y + 8) + this.path;
		if(this.player){
			this.player.setAttribute('d', pathNew);
		}		
	}
}

