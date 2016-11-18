import Game from './GameAttr.js';

export default class Shield {
	constructor(){
		this.x = 64;
        this.y = 390;
        this.hp = 3;
        this.size = 15; // Piece size
	}

	init() {
        // Create a shield array to store the pieces
        for (let block = 4; block--;) {
            for (let piece = 8; piece--;) {
                this.build(block, piece);
            }
        }
    }
    build(loc, piece) {
        var x = this.x + (loc * this.x) + (loc * (this.size * 3));

        var el = document.createElementNS(Game.ns, 'rect');
        el.setAttribute('x', this.locX(piece, x));
        el.setAttribute('y', this.locY(piece));
        el.setAttribute('class', 'shield active');
        el.setAttribute('hp', this.hp);
        el.setAttribute('width', this.size);
        el.setAttribute('height', this.size);
        Game.svg.appendChild(el);
    }
    // Determines a shields location based upon passed data
    locX(piece, x) {
        switch(piece) {
            case 0: return x;
            case 1: return x;
            case 2: return x;
            case 3: return x + this.size;
            case 4: return x + this.size;
            case 5: return x + (this.size * 2);
            case 6: return x + (this.size * 2);
            case 7: return x + (this.size * 2);
        }
    }
    // Only needs one param as y coordinate is the same across all piece sections
    locY(piece) {
        switch(piece) {
            case 0: return this.y;
            case 1: return this.y + this.size;
            case 2: return this.y + (this.size * 2);
            case 3: return this.y;
            case 4: return this.y + this.size;
            case 5: return this.y;
            case 6: return this.y + this.size;
            case 7: return this.y + (this.size * 2);
        }
    }
    collide(el) {
        // Get and modify the hp attribute
        var hp = parseInt(el.getAttribute('hp'), 10) - 1;

        // Determine what to do based upon the current HP
        switch(hp) {
            case 1: var opacity = 0.33; break;
            case 2: var opacity = 0.66; break;
            default: return Game.svg.removeChild(el); // Exits this function early
        }

        // Adjust attributes if the element wasn't deleted
        el.setAttribute('hp', hp);
        el.setAttribute('fill-opacity', opacity);
    }
}