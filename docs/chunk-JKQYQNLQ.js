import{B as w,x as S,y as M,z as k}from "./chunk-KKZRAODB.js";import{Ab as r,Cb as x,Eb as f,Na as c,Pb as b,U as u,Xa as h,Xb as y,_ as s,aa as p,ab as _,cb as C,kb as n,lb as i,mb as m,pb as d,zb as v}from "./chunk-BDKE34J3.js";var g=(()=>{let e=class e{constructor(){this._color=h(""),this._buttonClicked=h(!1)}getRandomColor(){return Math.floor(Math.random()*16777215).toString(16)}setColor(l){this._buttonClicked.update(()=>l),this._color.update(()=>this.getRandomColor())}getColor(){return this._buttonClicked()}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function O(t, e){t&1&&(n(0,"mat-icon",6),r(1,"check_box"),i())}function T(t, e){t&1&&(n(0,"mat-icon",7),r(1,"check_box_outline_blank"),i())}var P=(()=>{let e=class e{constructor(){this.randomColorService=s(g),this.isChangeColors=!1,this.isCopied=!1,this.effect=b(()=>{this.isChangeColors=this.randomColorService.getColor(),this.randomColorChange()},{allowSignalWrites:!0})}ngOnInit(){this.randomColorChange()}randomColorChange(){this.randomColor=Math.floor(Math.random()*16777215).toString(16).toString().toUpperCase(),this.randomColorService.setColor(!1)}onCopy(){navigator.clipboard.writeText(`#${this.randomColor}`),this.isCopied=!0,setTimeout(()=>{this.isCopied=!1},1e3)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-single-vertical-palette"]],standalone:!0,features:[f],decls:7,vars:6,consts:[[1,"li-palette-wrapper",3,"click"],[1,"color-palette"],[1,"color-code"],[1,"color-value"],["class","check_box",4,"ngIf"],["class","check_box_outline_blank",4,"ngIf"],[1,"check_box"],[1,"check_box_outline_blank"]],template:function(o, a){o&1&&(n(0,"li",0),d("click",function(){return a.onCopy()}),m(1,"div",1),n(2,"div",2)(3,"span",3),r(4),i(),_(5,O,2,0,"mat-icon",4)(6,T,2,0,"mat-icon",5),i()()),o&2&&(c(),v("background-color: #",a.randomColor,""),c(3),x("#",a.randomColor,""),c(),C("ngIf",a.isCopied),c(),C("ngIf",!a.isCopied))},dependencies:[M,S,y],styles:[".li-palette-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:1rem}.color-palette[_ngcontent-%COMP%]{height:600px;width:200px;margin-top:2rem;border-radius:100px}.color-code[_ngcontent-%COMP%]{width:200px;font-size:1.5rem;font-weight:700;text-align:center;padding:1rem;margin-bottom:1rem;display:flex;flex-direction:row;align-items:center;justify-content:center}"]});let t=e;return t})();var K=(()=>{let e=class e{constructor(){this.randomColorService=s(g)}onColorRndChange(){this.randomColorService.setColor(!0)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-home"]],standalone:!0,features:[f],decls:14,vars:0,consts:[[1,"home-container"],[1,"home-title"],[1,"palettes-wrapper"],[1,"btn-wrapper"],["mat-flat-button","",3,"click"],[1,"info"]],template:function(o, a){o&1&&(n(0,"div",0)(1,"h1",1),r(2,"Easy Color Palette Generator"),i(),n(3,"ul",2),m(4,"app-single-vertical-palette")(5,"app-single-vertical-palette")(6,"app-single-vertical-palette")(7,"app-single-vertical-palette"),i(),n(8,"div",3)(9,"button",4),d("click",function(){return a.onColorRndChange()}),r(10,"Generate"),i()(),n(11,"div",5)(12,"p"),r(13,"Click on the palette to copy the color code"),i()()())},dependencies:[P,w,k],styles:[".home-container[_ngcontent-%COMP%]{height:90svh;width:100svw;display:flex;flex-direction:column;align-items:center}.home-title[_ngcontent-%COMP%]{margin-top:1.5rem;font-size:2rem}.palettes-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;gap:1rem;list-style:none;padding:0}.btn-wrapper[_ngcontent-%COMP%]{margin-top:1rem}.info[_ngcontent-%COMP%]{margin-top:1rem;color:#b2b2b2}"]});let t=e;return t})();export{K as HomeComponent};
