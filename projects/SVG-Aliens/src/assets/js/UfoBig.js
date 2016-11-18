import Game from './GameAttr.js';

let UfoBig = {
	width: 45,
	height: 20,
	x: -46,
	y: 50,
	speed: 1,

	delay: 3000,
	init: function(){
		this.timer = window.setInterval(this.build, this.delay);
		console.log('biginit')
	},
	build: function(){
		let el = document.createElementNS(Game.ns, 'image');

		el.setAttribute('id', 'ufoShip');
		el.setAttribute('class', 'ufoShip active');
		el.setAttribute('x', UfoBig.x);
		el.setAttribute('y', UfoBig.y);
		el.setAttribute('width', UfoBig.width);
		el.setAttribute('height', UfoBig.height);
		el.setAttributeNS(Game.xlink, 'xlink:href', ' /static/img/mothership.svg');

		Game.svg.appendChild(el);
	},

	update: function(){
		let el = document.querySelector('#ufoShip');
		if(el){
			let x = parseInt(el.getAttribute('x'), 10);
			if(x > Game.width){
				Game.svg.removeChild(el);
			}else{
				el.setAttribute('x', x + this.speed);
			}
		}
	},
	collide: function(el){
		// Hud.updateScore(30);
		Game.svg.removeChild(el);
	}
}

export default UfoBig;