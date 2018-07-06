!function a(i,o,u){function h(e,t){if(!o[e]){if(!i[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(c)return c(e,!0);var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}var r=o[e]={exports:{}};i[e][0].call(r.exports,function(t){return h(i[e][1][t]||t)},r,r.exports,a,i,o,u)}return o[e].exports}for(var c="function"==typeof require&&require,t=0;t<u.length;t++)h(u[t]);return h}({1:[function(t,e,n){},{}],2:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function s(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}}();var r=function(){function r(t,e,n,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.HEIGHT=t,this.WIDTH=e,this.speed=n,this.state=this.getEmpty2DArray(this.HEIGHT,this.WIDTH),this.state[2][2]=1,this.state[3][2]=1,this.state[4][2]=1,this.state[5][2]=1,this.state[6][2]=1,this.state[7][2]=1,this.state[2][3]=1,this.state[3][3]=1,this.state[4][3]=1,this.state[5][3]=1,this.state[6][3]=1,this.state[7][3]=1,this.state[9][2]=1,this.state[9][3]=1,this.state[9][4]=1,this.state[9][5]=1,this.state[9][6]=1,this.state[9][7]=1,this.state[10][2]=1,this.state[10][3]=1,this.state[10][4]=1,this.state[10][5]=1,this.state[10][6]=1,this.state[10][7]=1,this.state[5][9]=1,this.state[6][9]=1,this.state[7][9]=1,this.state[8][9]=1,this.state[9][9]=1,this.state[10][9]=1,this.state[5][10]=1,this.state[6][10]=1,this.state[7][10]=1,this.state[8][10]=1,this.state[9][10]=1,this.state[10][10]=1,this.state[2][5]=1,this.state[2][6]=1,this.state[2][7]=1,this.state[2][8]=1,this.state[2][9]=1,this.state[2][10]=1,this.state[3][5]=1,this.state[3][6]=1,this.state[3][7]=1,this.state[3][8]=1,this.state[3][9]=1,this.state[3][10]=1,this.drawCallback=s,this.drawCallback(this.state),this.play=!1}return s(r,[{key:"startGame",value:function(){var t=this;this.play?this.timer=setInterval(function(){t.step()},this.speed):clearInterval(this.timer),this.play=!this.play}},{key:"step",value:function(){for(var t=this.getEmpty2DArray(this.HEIGHT,this.WIDTH),e=0;e<this.HEIGHT;e++)for(var n=0;n<this.WIDTH;n++){var s=this.countAliveCells(this.state,e,n);this.state[e][n]?3!==s&&2!==s||(t[e][n]=1):3===s&&(t[e][n]=1)}this.state=t,this.drawCallback(this.state)}},{key:"countAliveCells",value:function(t,e,n){for(var s=0,r=e-1;r<=e+1;r++)s+=this.getCellState(t,r,n-1),s+=this.getCellState(t,r,n+1);return s+=this.getCellState(t,e-1,n),s+=this.getCellState(t,e+1,n)}},{key:"getCellState",value:function(t,e,n){return(t[e]||[])[n]?1:0}},{key:"getEmpty2DArray",value:function(t,e){return new Array(t).fill(0).map(function(){return new Array(e).fill(0)})}}]),r}();n.default=r},{}],3:[function(t,e,n){"use strict";var s=a(t("./utils/router")),r=a(t("./routes"));function a(t){return t&&t.__esModule?t:{default:t}}new s.default(r.default)},{"./routes":4,"./utils/router":6}],4:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=a(t("./gameOfLife")),r=a(t("./utils/drawer"));t("repl");function a(t){return t&&t.__esModule?t:{default:t}}var i=void 0,o=new r.default(document.querySelector("#content")),u=document.querySelector(".play-button"),h=[{match:"",onEnter:function(){window.location.hash="about"}},{match:"about",onEnter:function(){var t=document.querySelector("#content");c("about"),t.innerHTML='<h1 class="about"><i class="fab fa-buromobelexperte label"></i><span>Conway\'s Game of Life</span><h1>'}},{match:"text",onEnter:function(){c("text"),content.innerHTML="Text",i=new s.default(13,13,100,o.drawText),u.addEventListener("click",function(){i.startGame()})}},{match:"canvas",onEnter:function(){c("canvas"),content.innerHTML="Canvas"}},{match:"svg",onEnter:function(){c("svg"),content.innerHTML="SVG"}}];function c(t){document.querySelector(".active").className="",document.querySelector('[href="#'+t+'"]').parentElement.className="active"}n.default=h},{"./gameOfLife":2,"./utils/drawer":5,repl:1}],5:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.default=function t(e){var s=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.elementForDrawing=e,this.drawText=function(t){s.elementForDrawing.innerHTML="";var e=document.createElement("pre");e.classList.add("text-content");var n="";t.forEach(function(t,e){t.forEach(function(t,e){n+=t?"x":" "}),n+="\n"}),e.innerHTML=n,s.elementForDrawing.appendChild(e)}}},{}],6:[function(t,e,n){"use strict";function s(t){var e=this;this.routes=t||[],this.currentRoute,this.previousRoute,this.currentParams,this.previousParams,window.addEventListener("hashchange",function(t){e.handler(window.location.hash)}),this.handler(window.location.hash)}Object.defineProperty(n,"__esModule",{value:!0}),s.prototype={handler:function(t){this.previousRoute=this.currentRoute,this.previousParams=this.currentParams,this.currentRoute=this.findNewRoute(t),this.launchHandlers()},findNewRoute:function(t){t=t.slice(1);for(var e=0;e<this.routes.length;e++){var n=this.routes[e];if("string"==typeof n.match&&n.match===t)return this.currentParams="",n;if("function"==typeof n.match&&n.match(t))return this.currentParams="",n;if(n.match instanceof RegExp&&n.match.test(t))return this.currentParams=t.match(n.match)||[],this.currentParams.splice(0,1),n}},launchHandlers:function(){var t=this;Promise.resolve().then(function(){t.previousRoute&&t.previousRoute.onLeave&&t.previousRoute.onLeave(t.previousParams)}).then(function(){t.currentRoute&&t.currentRoute.onBeforeEnter&&t.currentRoute.onBeforeEnter(t.currentParams)}).then(function(){t.currentRoute&&t.currentRoute.onEnter&&t.currentRoute.onEnter(t.currentParams)})}},n.default=s},{}]},{},[3]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvZ2FtZU9mTGlmZS5qcyIsInNyYy9qcy9tYWluLmpzIiwic3JjL2pzL3JvdXRlcy5qcyIsInNyYy9qcy91dGlscy9kcmF3ZXIuanMiLCJzcmMvanMvdXRpbHMvcm91dGVyLmpzIl0sIm5hbWVzIjpbInIiLCJlIiwibiIsInQiLCJvIiwiaSIsImYiLCJjIiwicmVxdWlyZSIsInUiLCJhIiwiRXJyb3IiLCJjb2RlIiwicCIsImV4cG9ydHMiLCJjYWxsIiwibGVuZ3RoIiwiMSIsIm1vZHVsZSIsIkdhbWVPZkxpZmUiLCJoZWlnaHQiLCJ3aWR0aCIsInNwZWVkIiwiZHJhd0NhbGxiYWNrIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsIkhFSUdIVCIsIldJRFRIIiwic3RhdGUiLCJnZXRFbXB0eTJEQXJyYXkiLCJwbGF5IiwiX3RoaXMiLCJ0aW1lciIsInNldEludGVydmFsIiwic3RlcCIsImNsZWFySW50ZXJ2YWwiLCJuZXdBcnJheSIsImoiLCJhbGl2ZUNlbGxzIiwiY291bnRBbGl2ZUNlbGxzIiwiYXJyYXkiLCJ4IiwieSIsInJlc3VsdCIsImdldENlbGxTdGF0ZSIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl9yb3V0ZXIyIiwiZGVmYXVsdCIsIl9yb3V0ZXMyIiwiZ2FtZSIsImRyYXdlciIsIl9kcmF3ZXIyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3RhcnRCdXR0b24iLCJyb3V0ZXMiLCJtYXRjaCIsIm9uRW50ZXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJjb250ZW50IiwiY2hhbmdlQWN0aXZlUGFnZSIsImlubmVySFRNTCIsIl9nYW1lT2ZMaWZlMiIsImRyYXdUZXh0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0R2FtZSIsIm5ld1BhZ2UiLCJjbGFzc05hbWUiLCJwYXJlbnRFbGVtZW50IiwiRHJhd2VyIiwiYm9hcmRFbGVtZW50IiwiZWxlbWVudEZvckRyYXdpbmciLCJnYW1lU3RhdGUiLCJwcmUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9yRWFjaCIsIml0ZW0iLCJlbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJSb3V0ZXIiLCJyb3V0ZVBhcmFtcyIsImN1cnJlbnRSb3V0ZSIsInByZXZpb3VzUm91dGUiLCJjdXJyZW50UGFyYW1zIiwicHJldmlvdXNQYXJhbXMiLCJldmVudCIsImhhbmRsZXIiLCJwcm90b3R5cGUiLCJmaW5kTmV3Um91dGUiLCJsYXVuY2hIYW5kbGVycyIsInNsaWNlIiwiUmVnRXhwIiwidGVzdCIsInNwbGljZSIsIl90aGlzMiIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIm9uTGVhdmUiLCJvbkJlZm9yZUVudGVyIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUFBQSxFQUFBQyxFQUFBQyxFQUFBQyxHQUFBLFNBQUFDLEVBQUFDLEVBQUFDLEdBQUEsSUFBQUosRUFBQUcsR0FBQSxDQUFBLElBQUFKLEVBQUFJLEdBQUEsQ0FBQSxJQUFBRSxFQUFBLG1CQUFBQyxTQUFBQSxRQUFBLElBQUFGLEdBQUFDLEVBQUEsT0FBQUEsRUFBQUYsR0FBQSxHQUFBLEdBQUFJLEVBQUEsT0FBQUEsRUFBQUosR0FBQSxHQUFBLElBQUFLLEVBQUEsSUFBQUMsTUFBQSx1QkFBQU4sRUFBQSxLQUFBLE1BQUFLLEVBQUFFLEtBQUEsbUJBQUFGLEVBQUEsSUFBQUcsRUFBQVgsRUFBQUcsR0FBQSxDQUFBUyxRQUFBLElBQUFiLEVBQUFJLEdBQUEsR0FBQVUsS0FBQUYsRUFBQUMsUUFBQSxTQUFBZCxHQUFBLE9BQUFJLEVBQUFILEVBQUFJLEdBQUEsR0FBQUwsSUFBQUEsSUFBQWEsRUFBQUEsRUFBQUMsUUFBQWQsRUFBQUMsRUFBQUMsRUFBQUMsR0FBQSxPQUFBRCxFQUFBRyxHQUFBUyxRQUFBLElBQUEsSUFBQUwsRUFBQSxtQkFBQUQsU0FBQUEsUUFBQUgsRUFBQSxFQUFBQSxFQUFBRixFQUFBYSxPQUFBWCxJQUFBRCxFQUFBRCxF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RUFBQWIsY0FBcUJhLEVBQUFiLGFBQXJCa0IsZUFBd0RMLEVBQUFiLGFBQUFrQixjQUFnQ0wsRUFBeEZYLGlCQUZsQmMsS0FHVSxXQUFRSCxFQUFBYixjQUFxQmEsRUFBQWIsYUFBckI1QixTQUFrRHlDLEVBQUFiLGFBQUE1QixRQUEwQnlDLEVBQTVFWCw2QkFJWEoiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPZkxpZmUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhlaWdodCwgd2lkdGgsIHNwZWVkLCBkcmF3Q2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLkhFSUdIVCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLldJRFRIID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldEVtcHR5MkRBcnJheSh0aGlzLkhFSUdIVCwgdGhpcy5XSURUSCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlWzJdWzJdID0gMTtcclxuICAgICAgICB0aGlzLnN0YXRlWzNdWzJdID0gMTtcclxuICAgICAgICB0aGlzLnN0YXRlWzRdWzJdID0gMTtcclxuICAgICAgICB0aGlzLnN0YXRlWzVdWzJdID0gMTtcclxuICAgICAgICB0aGlzLnN0YXRlWzZdWzJdID0gMTtcclxuICAgICAgICB0aGlzLnN0YXRlWzddWzJdID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZVsyXVszXSA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVszXVszXSA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVs0XVszXSA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVs1XVszXSA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVs2XVszXSA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVs3XVszXSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGVbOV1bMl0gPSAxO1xyXG4gICAgICAgIHRoaXMuc3RhdGVbOV1bM10gPSAxO1xyXG4gICAgICAgIHRoaXMuc3RhdGVbOV1bNF0gPSAxO1xyXG4gICAgICAgIHRoaXMuc3RhdGVbOV1bNV0gPSAxO1xyXG4gICAgICAgIHRoaXMuc3RhdGVbOV1bNl0gPSAxO1xyXG4gICAgICAgIHRoaXMuc3RhdGVbOV1bN10gPSAxO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlWzEwXVsyXSA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVsxMF1bM10gPSAxO1xyXG4gICAgICAgIHRoaXMuc3RhdGVbMTBdWzRdID0gMTtcclxuICAgICAgICB0aGlzLnN0YXRlWzEwXVs1XSA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVsxMF1bNl0gPSAxO1xyXG4gICAgICAgIHRoaXMuc3RhdGVbMTBdWzddID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZVs1XVs5XSA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVs2XVs5XSA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVs3XVs5XSA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVs4XVs5XSA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVs5XVs5XSA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVsxMF1bOV0gPSAxO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlWzVdWzEwXSA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVs2XVsxMF0gPSAxO1xyXG4gICAgICAgIHRoaXMuc3RhdGVbN11bMTBdID0gMTtcclxuICAgICAgICB0aGlzLnN0YXRlWzhdWzEwXSA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVs5XVsxMF0gPSAxO1xyXG4gICAgICAgIHRoaXMuc3RhdGVbMTBdWzEwXSA9IDE7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGVbMl1bNV0gPSAxO1xyXG4gICAgICAgIHRoaXMuc3RhdGVbMl1bNl0gPSAxO1xyXG4gICAgICAgIHRoaXMuc3RhdGVbMl1bN10gPSAxO1xyXG4gICAgICAgIHRoaXMuc3RhdGVbMl1bOF0gPSAxO1xyXG4gICAgICAgIHRoaXMuc3RhdGVbMl1bOV0gPSAxO1xyXG4gICAgICAgIHRoaXMuc3RhdGVbMl1bMTBdID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZVszXVs1XSA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVszXVs2XSA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVszXVs3XSA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVszXVs4XSA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVszXVs5XSA9IDE7XHJcbiAgICAgICAgdGhpcy5zdGF0ZVszXVsxMF0gPSAxO1xyXG5cclxuICAgICAgICB0aGlzLmRyYXdDYWxsYmFjayA9IGRyYXdDYWxsYmFjaztcclxuICAgICAgICB0aGlzLmRyYXdDYWxsYmFjayh0aGlzLnN0YXRlKTtcclxuICAgICAgICB0aGlzLnBsYXkgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHsgdGhpcy5zdGVwKCkgfSwgdGhpcy5zcGVlZClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXkgPSAhdGhpcy5wbGF5O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc3RlcCgpIHtcclxuICAgICAgICB2YXIgbmV3QXJyYXkgPSB0aGlzLmdldEVtcHR5MkRBcnJheSh0aGlzLkhFSUdIVCwgdGhpcy5XSURUSCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5IRUlHSFQ7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuV0lEVEg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFsaXZlQ2VsbHMgPSB0aGlzLmNvdW50QWxpdmVDZWxscyh0aGlzLnN0YXRlLCBpLCBqKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW2ldW2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsaXZlQ2VsbHMgPT09IDMgfHwgYWxpdmVDZWxscyA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheVtpXVtqXSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWxpdmVDZWxscyA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnJheVtpXVtqXSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXdBcnJheTtcclxuICAgICAgICB0aGlzLmRyYXdDYWxsYmFjayh0aGlzLnN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3VudEFsaXZlQ2VsbHMoYXJyYXksIHgsIHkpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0geCAtIDE7IGkgPD0geCArIDE7IGkrKykge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gdGhpcy5nZXRDZWxsU3RhdGUoYXJyYXksIGksIHkgLSAxKTtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMuZ2V0Q2VsbFN0YXRlKGFycmF5LCBpLCB5ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdCArPSB0aGlzLmdldENlbGxTdGF0ZShhcnJheSwgeCAtIDEsIHkpO1xyXG4gICAgICAgIHJlc3VsdCArPSB0aGlzLmdldENlbGxTdGF0ZShhcnJheSwgeCArIDEsIHkpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VsbFN0YXRlKGFycmF5LCB4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIChhcnJheVt4XSB8fCBbXSlbeV0gPyAxIDogMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbXB0eTJEQXJyYXkoaGVpZ2h0LCB3aWR0aCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkoaGVpZ2h0KS5maWxsKDApLm1hcCgoKSA9PiBuZXcgQXJyYXkod2lkdGgpLmZpbGwoMCkpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBSb3V0ZXIgZnJvbSAnLi91dGlscy9yb3V0ZXInO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuXHJcbnZhciByb3V0ZXIgPSBuZXcgUm91dGVyKHJvdXRlcyk7IiwiaW1wb3J0IEdhbWVPZkxpZmUgZnJvbSAnLi9nYW1lT2ZMaWZlJztcclxuaW1wb3J0IERyYXdlciBmcm9tICcuL3V0aWxzL2RyYXdlcic7XHJcbmltcG9ydCB7IHN0YXJ0IH0gZnJvbSAncmVwbCc7XHJcblxyXG5sZXQgZ2FtZTtcclxubGV0IGRyYXdlciA9IG5ldyBEcmF3ZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKSk7XHJcbmxldCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWJ1dHRvbicpO1xyXG5cclxubGV0IHJvdXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBtYXRjaDogJycsXHJcbiAgICAgICAgb25FbnRlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICdhYm91dCc7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBtYXRjaDogJ2Fib3V0JyxcclxuICAgICAgICBvbkVudGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgICAgICAgICAgY2hhbmdlQWN0aXZlUGFnZSgnYWJvdXQnKTtcclxuICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnPGgxIGNsYXNzPVwiYWJvdXRcIj48aSBjbGFzcz1cImZhYiBmYS1idXJvbW9iZWxleHBlcnRlIGxhYmVsXCI+PC9pPjxzcGFuPkNvbndheVxcJ3MgR2FtZSBvZiBMaWZlPC9zcGFuPjxoMT4nO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1hdGNoOiAndGV4dCcsXHJcbiAgICAgICAgb25FbnRlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICBjaGFuZ2VBY3RpdmVQYWdlKCd0ZXh0Jyk7XHJcbiAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJ1RleHQnO1xyXG4gICAgICAgICAgICBnYW1lID0gbmV3IEdhbWVPZkxpZmUoMTMsIDEzLCAxMDAsIGRyYXdlci5kcmF3VGV4dCk7XHJcbiAgICAgICAgICAgIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBnYW1lLnN0YXJ0R2FtZSgpIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1hdGNoOiAnY2FudmFzJyxcclxuICAgICAgICBvbkVudGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoYW5nZUFjdGl2ZVBhZ2UoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICdDYW52YXMnO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG1hdGNoOiAnc3ZnJyxcclxuICAgICAgICBvbkVudGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNoYW5nZUFjdGl2ZVBhZ2UoJ3N2ZycpO1xyXG4gICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICdTVkcnO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUFjdGl2ZVBhZ2UobmV3UGFnZSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpLmNsYXNzTmFtZSA9ICcnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2hyZWY9XCIjJHtuZXdQYWdlfVwiXWApLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID0gJ2FjdGl2ZSc7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhd2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGJvYXJkRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudEZvckRyYXdpbmcgPSBib2FyZEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5kcmF3VGV4dCA9IChnYW1lU3RhdGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudEZvckRyYXdpbmcuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgICAgICB2YXIgcHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XHJcbiAgICAgICAgICAgIHByZS5jbGFzc0xpc3QuYWRkKCd0ZXh0LWNvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAnJztcclxuICAgICAgICAgICAgZ2FtZVN0YXRlLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uZm9yRWFjaCgoZWxlbWVudCwgaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBlbGVtZW50ID8gJ3gnIDogJyAnO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ1xcbic7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBwcmUuaW5uZXJIVE1MID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRGb3JEcmF3aW5nLmFwcGVuZENoaWxkKHByZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqINCk0YPQvdC60YbQuNGPINC00LvRjyDQtNC+0LHQsNCy0LvQtdC90LjRjyDQuCDQvtCx0YDQsNCx0L7RgtC60Lgg0YDQvtGD0YLQvtCyINC90LAg0YHRgtGA0LDQvdC40YbQtVxyXG4gKiBAcGFyYW0geyp9IHJvdXRlUGFyYW1zINC80LDRgdGB0LjQsiDQv9Cw0YDQsNC80LXRgtGA0L7QsiDQtNC70Y8g0L7QsdGA0LDQsdC+0YLQutC4INGA0L7Rg9GC0L7QslxyXG4gKi9cclxuZnVuY3Rpb24gUm91dGVyKHJvdXRlUGFyYW1zKSB7XHJcbiAgICB0aGlzLnJvdXRlcyA9IHJvdXRlUGFyYW1zIHx8IFtdO1xyXG4gICAgdGhpcy5jdXJyZW50Um91dGU7XHJcbiAgICB0aGlzLnByZXZpb3VzUm91dGU7XHJcbiAgICB0aGlzLmN1cnJlbnRQYXJhbXM7XHJcbiAgICB0aGlzLnByZXZpb3VzUGFyYW1zO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLmhhbmRsZXIod2luZG93LmxvY2F0aW9uLmhhc2gpO1xyXG4gICAgfSlcclxuICAgIHRoaXMuaGFuZGxlcih3aW5kb3cubG9jYXRpb24uaGFzaCk7XHJcbn1cclxuXHJcblJvdXRlci5wcm90b3R5cGUgPSB7XHJcbiAgICBoYW5kbGVyOiBmdW5jdGlvbihoYXNoKSB7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1JvdXRlID0gdGhpcy5jdXJyZW50Um91dGU7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1BhcmFtcyA9IHRoaXMuY3VycmVudFBhcmFtcztcclxuICAgICAgICB0aGlzLmN1cnJlbnRSb3V0ZSA9IHRoaXMuZmluZE5ld1JvdXRlKGhhc2gpO1xyXG4gICAgICAgIHRoaXMubGF1bmNoSGFuZGxlcnMoKTtcclxuICAgIH0sXHJcbiAgICBmaW5kTmV3Um91dGU6IGZ1bmN0aW9uKGhhc2gpIHtcclxuICAgICAgICBoYXNoID0gaGFzaC5zbGljZSgxKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvdXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMucm91dGVzW2ldO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mKGVsZW1lbnQubWF0Y2gpID09IFwic3RyaW5nXCIgJiYgZWxlbWVudC5tYXRjaCA9PT0gaGFzaCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFyYW1zID0gJyc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mKGVsZW1lbnQubWF0Y2gpID09IFwiZnVuY3Rpb25cIiAmJiBlbGVtZW50Lm1hdGNoKGhhc2gpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXJhbXMgPSAnJztcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgoZWxlbWVudC5tYXRjaCBpbnN0YW5jZW9mIFJlZ0V4cCkgJiYgZWxlbWVudC5tYXRjaC50ZXN0KGhhc2gpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYXJhbXMgPSBoYXNoLm1hdGNoKGVsZW1lbnQubWF0Y2gpIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFyYW1zLnNwbGljZSgwLCAxKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxhdW5jaEhhbmRsZXJzKCkge1xyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHsgdGhpcy5wcmV2aW91c1JvdXRlICYmIHRoaXMucHJldmlvdXNSb3V0ZS5vbkxlYXZlICYmIHRoaXMucHJldmlvdXNSb3V0ZS5vbkxlYXZlKHRoaXMucHJldmlvdXNQYXJhbXMpIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHsgdGhpcy5jdXJyZW50Um91dGUgJiYgdGhpcy5jdXJyZW50Um91dGUub25CZWZvcmVFbnRlciAmJiB0aGlzLmN1cnJlbnRSb3V0ZS5vbkJlZm9yZUVudGVyKHRoaXMuY3VycmVudFBhcmFtcykgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4geyB0aGlzLmN1cnJlbnRSb3V0ZSAmJiB0aGlzLmN1cnJlbnRSb3V0ZS5vbkVudGVyICYmIHRoaXMuY3VycmVudFJvdXRlLm9uRW50ZXIodGhpcy5jdXJyZW50UGFyYW1zKSB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm91dGVyOyJdfQ==
