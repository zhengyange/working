import UfoBig from './UfoBig.js';
import Ufo from './Ufo.js';
import Ship from './Ship.js';
import Ctrl from './Ctrl.js';
import Shield from './Shield.js';
import Laser from './Laser.js';

const ship = new Ship();
const ctrl = new Ctrl(ship);
const ufo = new Ufo();
const shield = new Shield();
const laser = new Laser();

let Game = {
	svg: document.querySelector('#svg'),
	welcome: document.querySelector('#screenWelcome'),
	restart: document.querySelector('#screenGameover'),

	support: document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Shape', '1.1'),
	width: 500,
	height: 500,

	ns: 'http://www.w3.org/2000/svg',
	xlink: 'http://www.w3.org/1999/xlink',

	run: function(){
		this.svg.addEventListener('click', this.runGame, false);
	},
	init: function(){
		// Hud.init();
		shield.init();
		ufo.init(shield);
		ship.init();
		UfoBig.init();
		ctrl.init(ship);
		if(!this.play){
			this.play = window.setInterval(Game.update, 20);
		}
	},
	update: function(){
		ctrl.update(ufo, shield, UfoBig);
		ship.update();
		UfoBig.update();
		// Laser.update();
	},
	runGame: function(){
		Game.svg.removeEventListener('click', Game.runGame, false);
		Game.svg.removeChild(Game.welcome);
		// Ctrl.init();
		Game.init();
	},
	restartGame: function(){
		Game.svg.removeEventListener('click', Game.restartGame, false);
		Game.restart.setAttribute('style','display: none');
		Game.init();
	},

	endGame: function(){
		window.clearInterval(UfoBig.timer);
		window.clearInterval(ufo.timer);
		this.elRemove('.shield .player .life .laser #flock #ufoShip #textScore #textLives');
		this.restart.setAttribute('style', 'display: inline');
		this.svg.addEventListener('click', this.restartGame, false);
	},
	elRemove: function(name){
		let items = name.split(' ');
		let type = '';
		let string = '';
		let el = '';
		for(let i = items.length; i--;){
			type = items[i].charAt(0);
			string = items[i].slice(1);

			el = (type === '.') ? document.querySelectorAll(items[i]) : document.querySelector(items[i]);
			if(type === '.'){
				while(el[0]){
					el[0].parentNode.removeChild(el[0]);
				}
			}else{
				if(typeof el === 'object' && el !== null){
					this.svg.removeChild(el);
				}
			}
		}
	}
}


window.onload = function(){
	Game.run();
}