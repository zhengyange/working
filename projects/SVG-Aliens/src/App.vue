<script>
import Hello from './components/Hello'
import ufoSvg from './assets/css/ufo.svg';
import mothership from './assets/css/mothership.svg';
import game from './assets/js/game.js';
export default {
  data: function(){
    return {
      ufoSvg: ufoSvg
    }
  }
}
</script>
<template>
  <div id="container">
    <svg
      id="svg"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      clip-path="url(#clip)"
      viewBox="0 0 500 500"
    >
      <defs>
        <radialGradient id="background" cx="0.5" cy="0.3" r="0.7">
          <stop offset="0%" stop-color="#333" />
          <stop offset="7%" stop-color="#000" />
        </radialGradient>
        <clipPath id="clip">
          <rect x="0" y="0" width="500" height="500" fill="(#background)"/>
        </clipPath>

      </defs> 
      <rect x="0" y="0" width="500" height="500" fill="url(#background)"></rect>
      <g id="screenWelcome">
        <text id="title1" x="110" y="137">SVG</text>
        <text id="title2" x="115" y="200">ALIENS</text>
        <text id="more" x="130" y="400">
          <animate attributeType="CSS" attributeName="opacity" from="0" to="1" dur="5s" />
          Click To Play
        </text>
        <image x="200" y="230" width="25" height="19" xlink:href="/static/img/ufo.svg" />
        <text x="233" y="247">=  1pt</text>
        <text x="145" y="328">+1</text>
        <path class="ship" d="M 175 312 m 0 15 l 9 5 h 17 l 9 -5 l -2 -5 l -10 3 l -6 -15 l -6 15 l -10 -3 l -2 5" />
        <text x="217" y="328" fill="">life = 100pts</text>
        <image x="185" y="270" width="40" height="20" xlink:href="/static/img/mothership.svg" />
        <text x="233" y="287" fill="">= 30pts</text>
      </g>
      <g id="screenGameover">
        <text x="110" y="199" fill="" id="goTitle">GAME OVER</text>
        <text x="165" y="224" fill="" id="retry">Click To Retry</text>
        <image x="145" y="289" width="60" height="40" xlink:href="/static/img/ufo.svg" />
        <rect x="230" y="249" width="134" height="50" fill="" stroke="" stroke-width=""/>
        <path d="M 231 274 l -20 20 L 231 289 L 231 284" stroke-width="" stroke="" fill=""/>
        <text class="quote" x="240" y="269" fill="">Ready to be powned</text>
        <text class="quote" x="240" y="286" fill="">again human?</text>
      </g> 
      
    </svg>
    <div id="instructions">
      <p>Arrow keys or mouse to move. Space or click to shoot.</p>
    </div>
  </div>
</template>


<style>
  @import './assets/css/style.css';
</style>
