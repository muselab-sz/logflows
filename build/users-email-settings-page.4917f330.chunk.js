(self.webpackChunklogflows_sync_pickupp=self.webpackChunklogflows_sync_pickupp||[]).push([[8418],{68115:(W,U,v)=>{"use strict";W.exports=v(7446)},7446:function(W,U,v){(function(m,R){W.exports=R(v(67294),v(78384),v(66526))})(this,function(m,R,c){return function(a){var i={};function t(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return a[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}return t.m=a,t.c=i,t.d=function(n,s,l){t.o(n,s)||Object.defineProperty(n,s,{enumerable:!0,get:l})},t.r=function(n){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,s){if(1&s&&(n=t(n)),8&s||4&s&&typeof n=="object"&&n&&n.__esModule)return n;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&s&&typeof n!="string")for(var u in n)t.d(l,u,function(f){return n[f]}.bind(null,u));return l},t.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(s,"a",s),s},t.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},t.p="",t(t.s=112)}({0:function(a,i,t){a.exports=t(19)()},1:function(a,i){a.exports=m},10:function(a,i,t){var n=t(25),s=t(26),l=t(22),u=t(27);a.exports=function(f,g){return n(f)||s(f,g)||l(f,g)||u()},a.exports.default=a.exports,a.exports.__esModule=!0},112:function(a,i,t){"use strict";t.r(i),t.d(i,"Crumb",function(){return B}),t.d(i,"Breadcrumbs",function(){return D});var n,s=t(4),l=t.n(s),u=t(3),f=t.n(u),g=t(1),y=t.n(g),x=t(0),d=t.n(x),p=t(2),b=t.n(p),P=t(50),S=t.n(P),M=t(8),r=t(6),e=t(9),o=t(18),h=["children","label"],I=b()(e.Flex)(n||(n=f()([`
  svg {
    height: 10px;
    width: 10px;
  }
  svg path {
    fill: `,`;
  }
  :last-of-type `,` {
    display: none;
  }
`])),function(H){return H.theme.colors.neutral300},r.Box),B=function(H){var N=H.children;return y.a.createElement(I,{inline:!0,as:"li"},y.a.createElement(M.Typography,{fontWeight:"bold",color:"neutral800"},N),y.a.createElement(r.Box,{paddingLeft:3,paddingRight:3},y.a.createElement(S.a,null)))};B.displayName="Crumb",B.propTypes={children:d.a.string.isRequired};var k=d.a.shape({type:d.a.oneOf([B])}),D=function(H){var N=H.children,Q=H.label,$=l()(H,h);return y.a.createElement(e.Flex,$,y.a.createElement(o.VisuallyHidden,null,Q),y.a.createElement("ol",{"aria-hidden":!0},N))};D.displayName="Breadcrumbs",D.propTypes={children:d.a.oneOfType([d.a.arrayOf(k),k]).isRequired,label:d.a.string.isRequired}},13:function(a,i){function t(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(a.exports=t=function(s){return typeof s},a.exports.default=a.exports,a.exports.__esModule=!0):(a.exports=t=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},a.exports.default=a.exports,a.exports.__esModule=!0),t(n)}a.exports=t,a.exports.default=a.exports,a.exports.__esModule=!0},18:function(a,i,t){"use strict";t.r(i),t.d(i,"VisuallyHidden",function(){return f});var n,s=t(3),l=t.n(s),u=t(2),f=t.n(u).a.div(n||(n=l()([`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`])))},19:function(a,i,t){"use strict";var n=t(20);function s(){}function l(){}l.resetWarningCache=s,a.exports=function(){function u(y,x,d,p,b,P){if(P!==n){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}function f(){return u}u.isRequired=u;var g={array:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:f,element:u,elementType:u,instanceOf:f,node:u,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:l,resetWarningCache:s};return g.PropTypes=g,g}},2:function(a,i){a.exports=R},20:function(a,i,t){"use strict";a.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(a,i){a.exports=function(t,n){(n==null||n>t.length)&&(n=t.length);for(var s=0,l=new Array(n);s<n;s++)l[s]=t[s];return l},a.exports.default=a.exports,a.exports.__esModule=!0},22:function(a,i,t){var n=t(21);a.exports=function(s,l){if(s){if(typeof s=="string")return n(s,l);var u=Object.prototype.toString.call(s).slice(8,-1);return u==="Object"&&s.constructor&&(u=s.constructor.name),u==="Map"||u==="Set"?Array.from(s):u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?n(s,l):void 0}},a.exports.default=a.exports,a.exports.__esModule=!0},24:function(a,i){a.exports=function(t,n){if(t==null)return{};var s,l,u={},f=Object.keys(t);for(l=0;l<f.length;l++)s=f[l],n.indexOf(s)>=0||(u[s]=t[s]);return u},a.exports.default=a.exports,a.exports.__esModule=!0},25:function(a,i){a.exports=function(t){if(Array.isArray(t))return t},a.exports.default=a.exports,a.exports.__esModule=!0},26:function(a,i){a.exports=function(t,n){var s=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(s!=null){var l,u,f=[],g=!0,y=!1;try{for(s=s.call(t);!(g=(l=s.next()).done)&&(f.push(l.value),!n||f.length!==n);g=!0);}catch(x){y=!0,u=x}finally{try{g||s.return==null||s.return()}finally{if(y)throw u}}return f}},a.exports.default=a.exports,a.exports.__esModule=!0},27:function(a,i){a.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},a.exports.default=a.exports,a.exports.__esModule=!0},3:function(a,i){a.exports=function(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))},a.exports.default=a.exports,a.exports.__esModule=!0},4:function(a,i,t){var n=t(24);a.exports=function(s,l){if(s==null)return{};var u,f,g=n(s,l);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(s);for(f=0;f<y.length;f++)u=y[f],l.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(s,u)&&(g[u]=s[u])}return g},a.exports.default=a.exports,a.exports.__esModule=!0},50:function(a,i){a.exports=c},6:function(a,i,t){"use strict";t.r(i),t.d(i,"Box",function(){return r});var n,s=t(3),l=t.n(s),u=t(2),f=t.n(u),g=t(7),y=t(1),x=t.n(y),d=t(0),p=t.n(d),b=function(e){return x.a.createElement("div",e)},P={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},S={_hover:p.a.func,background:p.a.string,basis:p.a.oneOfType([p.a.string,p.a.string]),borderColor:p.a.string,children:p.a.oneOfType([p.a.node,p.a.string]),color:p.a.string,flex:p.a.oneOfType([p.a.string,p.a.string]),grow:p.a.oneOfType([p.a.string,p.a.string]),hasRadius:p.a.bool,hiddenS:p.a.bool,hiddenXS:p.a.bool,padding:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingBottom:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingLeft:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingRight:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingTop:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),shadow:p.a.string,shrink:p.a.oneOfType([p.a.string,p.a.string])};b.defaultProps=P,b.propTypes=S;var M={color:!0},r=f.a.div.withConfig({shouldForwardProp:function(e,o){return!M[e]&&o(e)}})(n||(n=l()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(e){var o=e.fontSize;return e.theme.fontSizes[o]||o},function(e){var o=e.theme,h=e.background;return o.colors[h]},function(e){var o=e.theme,h=e.color;return o.colors[h]},function(e){var o=e.theme,h=e.padding;return Object(g.a)("padding",h,o)},function(e){var o=e.theme,h=e.paddingTop;return Object(g.a)("padding-top",h,o)},function(e){var o=e.theme,h=e.paddingRight;return Object(g.a)("padding-right",h,o)},function(e){var o=e.theme,h=e.paddingBottom;return Object(g.a)("padding-bottom",h,o)},function(e){var o=e.theme,h=e.paddingLeft;return Object(g.a)("padding-left",h,o)},function(e){var o=e.theme,h=e.marginLeft;return Object(g.a)("margin-left",h,o)},function(e){var o=e.theme,h=e.marginRight;return Object(g.a)("margin-right",h,o)},function(e){var o=e.theme,h=e.marginTop;return Object(g.a)("margin-top",h,o)},function(e){var o=e.theme,h=e.marginBottom;return Object(g.a)("margin-bottom",h,o)},function(e){var o=e.theme;return e.hiddenS?"".concat(o.mediaQueries.tablet," { display: none; }"):void 0},function(e){var o=e.theme;return e.hiddenXS?"".concat(o.mediaQueries.mobile," { display: none; }"):void 0},function(e){var o=e.theme,h=e.hasRadius,I=e.borderRadius;return h?o.borderRadius:I},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var o=e.borderColor;return e.theme.colors[o]},function(e){var o=e.theme,h=e.borderColor,I=e.borderStyle,B=e.borderWidth;if(h&&!I&&!B)return"1px solid ".concat(o.colors[h])},function(e){var o=e.theme,h=e.shadow;return o.shadows[h]},function(e){return e.pointerEvents},function(e){var o=e._hover,h=e.theme;return o?o(h):void 0},function(e){return e.display},function(e){return e.position},function(e){var o=e.left;return e.theme.spaces[o]||o},function(e){var o=e.right;return e.theme.spaces[o]||o},function(e){var o=e.top;return e.theme.spaces[o]||o},function(e){var o=e.bottom;return e.theme.spaces[o]||o},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var o=e.width;return e.theme.spaces[o]||o},function(e){var o=e.maxWidth;return e.theme.spaces[o]||o},function(e){var o=e.minWidth;return e.theme.spaces[o]||o},function(e){var o=e.height;return e.theme.spaces[o]||o},function(e){var o=e.maxHeight;return e.theme.spaces[o]||o},function(e){var o=e.minHeight;return e.theme.spaces[o]||o},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});r.defaultProps=P,r.propTypes=S},7:function(a,i,t){"use strict";var n=t(10),s=t.n(n),l=t(13),u=t.n(l);i.a=function(f,g,y){var x=g;if(Array.isArray(g)||u()(g)!=="object"||(x=[g==null?void 0:g.desktop,g==null?void 0:g.tablet,g==null?void 0:g.mobile]),x!==void 0){if(Array.isArray(x)){var d=x,p=s()(d,3),b=p[0],P=p[1],S=p[2],M="".concat(f,": ").concat(y.spaces[b],";");return P!==void 0&&(M+="".concat(y.mediaQueries.tablet,`{
          `).concat(f,": ").concat(y.spaces[P],`;
        }`)),S!==void 0&&(M+="".concat(y.mediaQueries.mobile,`{
          `).concat(f,": ").concat(y.spaces[S],`;
        }`)),M}var r=y.spaces[x]||x;return"".concat(f,": ").concat(r,";")}}},8:function(a,i,t){"use strict";t.r(i),t.d(i,"Typography",function(){return r});var n,s=t(3),l=t.n(s),u=t(2),f=t.n(u),g=["alpha","beta","delta","epsilon","omega","pi","sigma"],y=t(1),x=t.n(y),d=t(0),p=t.n(d),b=function(e){return x.a.createElement("div",e)},P={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},S={ellipsis:p.a.bool,fontSize:p.a.oneOfType([p.a.number,p.a.string]),fontWeight:p.a.string,lineHeight:p.a.oneOfType([p.a.number,p.a.string]),textColor:p.a.string,textTransform:p.a.string,variant:p.a.oneOf(g)};b.defaultProps=P,b.propTypes=S;var M={fontSize:!0,fontWeight:!0},r=f.a.span.withConfig({shouldForwardProp:function(e,o){return!M[e]&&o(e)}})(n||(n=l()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(e){var o=e.theme,h=e.fontWeight;return o.fontWeights[h]},function(e){var o=e.theme,h=e.fontSize;return o.fontSizes[h]},function(e){var o=e.theme,h=e.lineHeight;return o.lineHeights[h]},function(e){var o=e.theme,h=e.textColor;return o.colors[h||"neutral800"]},function(e){return e.textTransform},function(e){return e.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(e){var o=e.variant,h=e.theme;switch(o){case"alpha":return`
        font-weight: `.concat(h.fontWeights.bold,`;
        font-size: `).concat(h.fontSizes[5],`;
        line-height: `).concat(h.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(h.fontWeights.bold,`;
        font-size: `).concat(h.fontSizes[4],`;
        line-height: `).concat(h.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(h.fontWeights.semiBold,`;
        font-size: `).concat(h.fontSizes[3],`;
        line-height: `).concat(h.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(h.fontSizes[3],`;
        line-height: `).concat(h.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(h.fontSizes[2],`;
        line-height: `).concat(h.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(h.fontSizes[1],`;
        line-height: `).concat(h.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(h.fontWeights.bold,`;
        font-size: `).concat(h.fontSizes[0],`;
        line-height: `).concat(h.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(h.fontSizes[2],`;
      `)}});r.defaultProps=P,r.propTypes=S},9:function(a,i,t){"use strict";t.r(i),t.d(i,"Flex",function(){return e});var n,s=t(3),l=t.n(s),u=t(2),f=t.n(u),g=t(6),y=t(7),x=t(1),d=t.n(x),p=t(0),b=t.n(p),P=function(o){return d.a.createElement("div",o)},S={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},M={alignItems:b.a.string,basis:b.a.oneOfType([b.a.string,b.a.number]),direction:b.a.string,gap:b.a.oneOfType([b.a.shape({desktop:b.a.number,mobile:b.a.number,tablet:b.a.number}),b.a.number,b.a.arrayOf(b.a.number),b.a.string]),inline:b.a.bool,justifyContent:b.a.string,reverse:b.a.bool,wrap:b.a.string};P.defaultProps=S,P.propTypes=M;var r={direction:!0},e=f()(g.Box).withConfig({shouldForwardProp:function(o,h){return!r[o]&&h(o)}})(n||(n=l()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(o){return o.alignItems},function(o){return o.inline?"inline-flex":"flex"},function(o){return o.direction},function(o){return o.wrap},function(o){var h=o.gap,I=o.theme;return Object(y.a)("gap",h,I)},function(o){return o.justifyContent});e.defaultProps=S,e.propTypes=M}})})},62031:(W,U,v)=>{"use strict";W.exports=v(59525)},59525:function(W,U,v){(function(m,R){W.exports=R(v(67294),v(78384))})(this,function(m,R){return function(c){var a={};function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return c[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=c,i.c=a,i.d=function(t,n,s){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:s})},i.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n||4&n&&typeof t=="object"&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&n&&typeof t!="string")for(var l in t)i.d(s,l,function(u){return t[u]}.bind(null,l));return s},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="",i(i.s=110)}({0:function(c,a,i){c.exports=i(19)()},1:function(c,a){c.exports=m},10:function(c,a,i){var t=i(25),n=i(26),s=i(22),l=i(27);c.exports=function(u,f){return t(u)||n(u,f)||s(u,f)||l()},c.exports.default=c.exports,c.exports.__esModule=!0},110:function(c,a,i){"use strict";i.r(a),i.d(a,"Main",function(){return r}),i.d(a,"SkipToContent",function(){return I});var t,n=i(5),s=i.n(n),l=i(4),u=i.n(l),f=i(3),g=i.n(f),y=i(1),x=i.n(y),d=i(0),p=i.n(d),b=i(2),P=i.n(b),S=["labelledBy"],M=P.a.main(t||(t=g()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),r=function(B){var k=B.labelledBy,D=u()(B,S),H=k||"main-content-title";return x.a.createElement(M,s()({"aria-labelledby":H,id:"main-content",tabIndex:-1},D))};r.defaultProps={labelledBy:void 0},r.propTypes={labelledBy:p.a.string};var e,o=i(6),h=P()(o.Box)(e||(e=g()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(B){return B.theme.spaces[3]},function(B){return B.theme.spaces[3]}),I=function(B){var k=B.children;return x.a.createElement(h,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},k)};I.propTypes={children:p.a.node.isRequired}},13:function(c,a){function i(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(c.exports=i=function(n){return typeof n},c.exports.default=c.exports,c.exports.__esModule=!0):(c.exports=i=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},c.exports.default=c.exports,c.exports.__esModule=!0),i(t)}c.exports=i,c.exports.default=c.exports,c.exports.__esModule=!0},19:function(c,a,i){"use strict";var t=i(20);function n(){}function s(){}s.resetWarningCache=n,c.exports=function(){function l(g,y,x,d,p,b){if(b!==t){var P=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw P.name="Invariant Violation",P}}function u(){return l}l.isRequired=l;var f={array:l,bool:l,func:l,number:l,object:l,string:l,symbol:l,any:l,arrayOf:u,element:l,elementType:l,instanceOf:u,node:l,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:s,resetWarningCache:n};return f.PropTypes=f,f}},2:function(c,a){c.exports=R},20:function(c,a,i){"use strict";c.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(c,a){c.exports=function(i,t){(t==null||t>i.length)&&(t=i.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=i[n];return s},c.exports.default=c.exports,c.exports.__esModule=!0},22:function(c,a,i){var t=i(21);c.exports=function(n,s){if(n){if(typeof n=="string")return t(n,s);var l=Object.prototype.toString.call(n).slice(8,-1);return l==="Object"&&n.constructor&&(l=n.constructor.name),l==="Map"||l==="Set"?Array.from(n):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?t(n,s):void 0}},c.exports.default=c.exports,c.exports.__esModule=!0},24:function(c,a){c.exports=function(i,t){if(i==null)return{};var n,s,l={},u=Object.keys(i);for(s=0;s<u.length;s++)n=u[s],t.indexOf(n)>=0||(l[n]=i[n]);return l},c.exports.default=c.exports,c.exports.__esModule=!0},25:function(c,a){c.exports=function(i){if(Array.isArray(i))return i},c.exports.default=c.exports,c.exports.__esModule=!0},26:function(c,a){c.exports=function(i,t){var n=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(n!=null){var s,l,u=[],f=!0,g=!1;try{for(n=n.call(i);!(f=(s=n.next()).done)&&(u.push(s.value),!t||u.length!==t);f=!0);}catch(y){g=!0,l=y}finally{try{f||n.return==null||n.return()}finally{if(g)throw l}}return u}},c.exports.default=c.exports,c.exports.__esModule=!0},27:function(c,a){c.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},c.exports.default=c.exports,c.exports.__esModule=!0},3:function(c,a){c.exports=function(i,t){return t||(t=i.slice(0)),Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(t)}}))},c.exports.default=c.exports,c.exports.__esModule=!0},4:function(c,a,i){var t=i(24);c.exports=function(n,s){if(n==null)return{};var l,u,f=t(n,s);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(n);for(u=0;u<g.length;u++)l=g[u],s.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(n,l)&&(f[l]=n[l])}return f},c.exports.default=c.exports,c.exports.__esModule=!0},5:function(c,a){function i(){return c.exports=i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(t[l]=s[l])}return t},c.exports.default=c.exports,c.exports.__esModule=!0,i.apply(this,arguments)}c.exports=i,c.exports.default=c.exports,c.exports.__esModule=!0},6:function(c,a,i){"use strict";i.r(a),i.d(a,"Box",function(){return M});var t,n=i(3),s=i.n(n),l=i(2),u=i.n(l),f=i(7),g=i(1),y=i.n(g),x=i(0),d=i.n(x),p=function(r){return y.a.createElement("div",r)},b={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},P={_hover:d.a.func,background:d.a.string,basis:d.a.oneOfType([d.a.string,d.a.string]),borderColor:d.a.string,children:d.a.oneOfType([d.a.node,d.a.string]),color:d.a.string,flex:d.a.oneOfType([d.a.string,d.a.string]),grow:d.a.oneOfType([d.a.string,d.a.string]),hasRadius:d.a.bool,hiddenS:d.a.bool,hiddenXS:d.a.bool,padding:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingBottom:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingLeft:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingRight:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),paddingTop:d.a.oneOfType([d.a.number,d.a.arrayOf(d.a.number)]),shadow:d.a.string,shrink:d.a.oneOfType([d.a.string,d.a.string])};p.defaultProps=b,p.propTypes=P;var S={color:!0},M=u.a.div.withConfig({shouldForwardProp:function(r,e){return!S[r]&&e(r)}})(t||(t=s()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(r){var e=r.fontSize;return r.theme.fontSizes[e]||e},function(r){var e=r.theme,o=r.background;return e.colors[o]},function(r){var e=r.theme,o=r.color;return e.colors[o]},function(r){var e=r.theme,o=r.padding;return Object(f.a)("padding",o,e)},function(r){var e=r.theme,o=r.paddingTop;return Object(f.a)("padding-top",o,e)},function(r){var e=r.theme,o=r.paddingRight;return Object(f.a)("padding-right",o,e)},function(r){var e=r.theme,o=r.paddingBottom;return Object(f.a)("padding-bottom",o,e)},function(r){var e=r.theme,o=r.paddingLeft;return Object(f.a)("padding-left",o,e)},function(r){var e=r.theme,o=r.marginLeft;return Object(f.a)("margin-left",o,e)},function(r){var e=r.theme,o=r.marginRight;return Object(f.a)("margin-right",o,e)},function(r){var e=r.theme,o=r.marginTop;return Object(f.a)("margin-top",o,e)},function(r){var e=r.theme,o=r.marginBottom;return Object(f.a)("margin-bottom",o,e)},function(r){var e=r.theme;return r.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0},function(r){var e=r.theme;return r.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0},function(r){var e=r.theme,o=r.hasRadius,h=r.borderRadius;return o?e.borderRadius:h},function(r){return r.borderStyle},function(r){return r.borderWidth},function(r){var e=r.borderColor;return r.theme.colors[e]},function(r){var e=r.theme,o=r.borderColor,h=r.borderStyle,I=r.borderWidth;if(o&&!h&&!I)return"1px solid ".concat(e.colors[o])},function(r){var e=r.theme,o=r.shadow;return e.shadows[o]},function(r){return r.pointerEvents},function(r){var e=r._hover,o=r.theme;return e?e(o):void 0},function(r){return r.display},function(r){return r.position},function(r){var e=r.left;return r.theme.spaces[e]||e},function(r){var e=r.right;return r.theme.spaces[e]||e},function(r){var e=r.top;return r.theme.spaces[e]||e},function(r){var e=r.bottom;return r.theme.spaces[e]||e},function(r){return r.zIndex},function(r){return r.overflow},function(r){return r.cursor},function(r){var e=r.width;return r.theme.spaces[e]||e},function(r){var e=r.maxWidth;return r.theme.spaces[e]||e},function(r){var e=r.minWidth;return r.theme.spaces[e]||e},function(r){var e=r.height;return r.theme.spaces[e]||e},function(r){var e=r.maxHeight;return r.theme.spaces[e]||e},function(r){var e=r.minHeight;return r.theme.spaces[e]||e},function(r){return r.transition},function(r){return r.transform},function(r){return r.animation},function(r){return r.shrink},function(r){return r.grow},function(r){return r.basis},function(r){return r.flex},function(r){return r.textAlign},function(r){return r.textTransform},function(r){return r.lineHeight},function(r){return r.cursor});M.defaultProps=b,M.propTypes=P},7:function(c,a,i){"use strict";var t=i(10),n=i.n(t),s=i(13),l=i.n(s);a.a=function(u,f,g){var y=f;if(Array.isArray(f)||l()(f)!=="object"||(y=[f==null?void 0:f.desktop,f==null?void 0:f.tablet,f==null?void 0:f.mobile]),y!==void 0){if(Array.isArray(y)){var x=y,d=n()(x,3),p=d[0],b=d[1],P=d[2],S="".concat(u,": ").concat(g.spaces[p],";");return b!==void 0&&(S+="".concat(g.mediaQueries.tablet,`{
          `).concat(u,": ").concat(g.spaces[b],`;
        }`)),P!==void 0&&(S+="".concat(g.mediaQueries.mobile,`{
          `).concat(u,": ").concat(g.spaces[P],`;
        }`)),S}var M=g.spaces[y]||y;return"".concat(u,": ").concat(M,";")}}}})})},84210:(W,U,v)=>{"use strict";v.r(U),v.d(U,{default:()=>Te});var m=v(67294),R=v(23724),c=v(97132),a=v(68547),i=v(84686),t=v(62031),n=v(78862),s=v(51725),l=v(42722),u=(E,T,O)=>new Promise((C,w)=>{var A=j=>{try{F(O.next(j))}catch(L){w(L)}},z=j=>{try{F(O.throw(j))}catch(L){w(L)}},F=j=>j.done?C(j.value):Promise.resolve(j.value).then(A,z);F((O=O.apply(E,T)).next())});const f=()=>u(void 0,null,function*(){const{data:E}=yield l.be.get((0,l.Gc)("email-templates"));return E}),g=E=>l.be.put((0,l.Gc)("email-templates"),E);var y=v(45697),x=v.n(y),d=v(41798),p=v(26851),b=v(49425),P=v(30741),S=v(15804),M=v(19352),r=v.n(M),e=v(27590),o=v.n(e),h=v(84734),I=v.n(h),B=Object.defineProperty,k=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,N=(E,T,O)=>T in E?B(E,T,{enumerable:!0,configurable:!0,writable:!0,value:O}):E[T]=O,Q=(E,T)=>{for(var O in T||(T={}))D.call(T,O)&&N(E,O,T[O]);if(k)for(var O of k(T))H.call(T,O)&&N(E,O,T[O]);return E};const $=({canUpdate:E,onEditClick:T})=>{const{formatMessage:O}=(0,c.useIntl)();return m.createElement(d.Table,{colCount:3,rowCount:3},m.createElement(d.Thead,null,m.createElement(d.Tr,null,m.createElement(d.Th,{width:"1%"},m.createElement(p.VisuallyHidden,null,O({id:(0,l.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),m.createElement(d.Th,null,m.createElement(b.Typography,{variant:"sigma",textColor:"neutral600"},O({id:(0,l.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),m.createElement(d.Th,{width:"1%"},m.createElement(p.VisuallyHidden,null,O({id:(0,l.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),m.createElement(d.Tbody,null,m.createElement(d.Tr,Q({},(0,a.onRowClick)({fn:()=>T("reset_password")})),m.createElement(d.Td,null,m.createElement(S.Icon,null,m.createElement(o(),{"aria-label":O({id:"global.reset-password",defaultMessage:"Reset password"})}))),m.createElement(d.Td,null,m.createElement(b.Typography,null,O({id:"global.reset-password",defaultMessage:"Reset password"}))),m.createElement(d.Td,Q({},a.stopPropagation),m.createElement(P.IconButton,{onClick:()=>T("reset_password"),label:O({id:(0,l.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:E&&m.createElement(r(),null)}))),m.createElement(d.Tr,Q({},(0,a.onRowClick)({fn:()=>T("email_confirmation")})),m.createElement(d.Td,null,m.createElement(S.Icon,null,m.createElement(I(),{"aria-label":O({id:(0,l.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),m.createElement(d.Td,null,m.createElement(b.Typography,null,O({id:(0,l.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),m.createElement(d.Td,Q({},a.stopPropagation),m.createElement(P.IconButton,{onClick:()=>T("email_confirmation"),label:O({id:(0,l.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:E&&m.createElement(r(),null)})))))};$.propTypes={canUpdate:x().bool.isRequired,onEditClick:x().func.isRequired};const le=$;var ue=v(80831),X=v(75146),Z=v(34626),ne=v(19408),ee=v(68115),ce=v(59626),_=v(53209);const de=_.Ry().shape({options:_.Ry().shape({from:_.Ry().shape({name:_.Z_().required(a.translatedErrors.required),email:_.Z_().email(a.translatedErrors.email).required(a.translatedErrors.required)}).required(),response_email:_.Z_().email(a.translatedErrors.email),object:_.Z_().required(a.translatedErrors.required),message:_.Z_().required(a.translatedErrors.required)}).required(a.translatedErrors.required)}),re=({template:E,onToggle:T,onSubmit:O})=>{const{formatMessage:C}=(0,c.useIntl)();return m.createElement(X.ModalLayout,{onClose:T,labelledBy:`${C({id:(0,l.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${C({id:(0,l.OB)(E.display),defaultMessage:E.display})}`},m.createElement(X.ModalHeader,null,m.createElement(ee.Breadcrumbs,{label:`${C({id:(0,l.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${C({id:(0,l.OB)(E.display),defaultMessage:E.display})}`},m.createElement(ee.Crumb,null,C({id:(0,l.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),m.createElement(ee.Crumb,null,C({id:(0,l.OB)(E.display),defaultMessage:E.display})))),m.createElement(ue.Formik,{onSubmit:O,initialValues:E,validateOnChange:!1,validationSchema:de,enableReinitialize:!0},({errors:w,values:A,handleChange:z,isSubmitting:F})=>{var j,L,V,K,Y,J,q;return m.createElement(a.Form,null,m.createElement(X.ModalBody,null,m.createElement(Z.Grid,{gap:5},m.createElement(Z.GridItem,{col:6,s:12},m.createElement(a.GenericInput,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:z,value:A.options.from.name,error:(L=(j=w==null?void 0:w.options)==null?void 0:j.from)==null?void 0:L.name,type:"text"})),m.createElement(Z.GridItem,{col:6,s:12},m.createElement(a.GenericInput,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:z,value:A.options.from.email,error:(K=(V=w==null?void 0:w.options)==null?void 0:V.from)==null?void 0:K.email,type:"text"})),m.createElement(Z.GridItem,{col:6,s:12},m.createElement(a.GenericInput,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:z,value:A.options.response_email,error:(Y=w==null?void 0:w.options)==null?void 0:Y.response_email,type:"text"})),m.createElement(Z.GridItem,{col:6,s:12},m.createElement(a.GenericInput,{intlLabel:{id:(0,l.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:z,value:A.options.object,error:(J=w==null?void 0:w.options)==null?void 0:J.object,type:"text"})),m.createElement(Z.GridItem,{col:12,s:12},m.createElement(ce.Textarea,{label:C({id:(0,l.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),name:"options.message",onChange:z,value:A.options.message,error:((q=w==null?void 0:w.options)==null?void 0:q.message)&&C({id:w.options.message,defaultMessage:w.options.message})})))),m.createElement(X.ModalFooter,{startActions:m.createElement(ne.Button,{onClick:T,variant:"tertiary"},"Cancel"),endActions:m.createElement(ne.Button,{loading:F,type:"submit"},"Finish")}))}))};re.propTypes={template:x().shape({display:x().string,icon:x().string,options:x().shape({from:x().shape({name:x().string,email:x().string}),message:x().string,object:x().string,response_email:x().string})}).isRequired,onSubmit:x().func.isRequired,onToggle:x().func.isRequired};const pe=re;var fe=Object.defineProperty,me=Object.defineProperties,he=Object.getOwnPropertyDescriptors,oe=Object.getOwnPropertySymbols,ge=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,ae=(E,T,O)=>T in E?fe(E,T,{enumerable:!0,configurable:!0,writable:!0,value:O}):E[T]=O,ye=(E,T)=>{for(var O in T||(T={}))ge.call(T,O)&&ae(E,O,T[O]);if(oe)for(var O of oe(T))ve.call(T,O)&&ae(E,O,T[O]);return E},be=(E,T)=>me(E,he(T)),xe=(E,T,O)=>new Promise((C,w)=>{var A=j=>{try{F(O.next(j))}catch(L){w(L)}},z=j=>{try{F(O.throw(j))}catch(L){w(L)}},F=j=>j.done?C(j.value):Promise.resolve(j.value).then(A,z);F((O=O.apply(E,T)).next())});const Oe=()=>m.createElement(a.CheckPagePermissions,{permissions:s.Z.readEmailTemplates},m.createElement(Ee,null)),Ee=()=>{const{formatMessage:E}=(0,c.useIntl)(),{trackUsage:T}=(0,a.useTracking)(),{notifyStatus:O}=(0,i.useNotifyAT)(),C=(0,a.useNotification)(),{lockApp:w,unlockApp:A}=(0,a.useOverlayBlocker)(),z=(0,m.useRef)(T),F=(0,R.useQueryClient)();(0,a.useFocusWhenNavigate)();const[j,L]=(0,m.useState)(!1),[V,K]=(0,m.useState)(null),Y=(0,m.useMemo)(()=>({update:s.Z.updateEmailTemplates}),[]),{isLoading:J,allowedActions:{canUpdate:q}}=(0,a.useRBAC)(Y),{status:Pe,data:ie}=(0,R.useQuery)("email-templates",()=>f(),{onSuccess:()=>{O(E({id:(0,l.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError:()=>{C({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Se=J||Pe!=="success",te=()=>{L(G=>!G)},Me=G=>{K(G),te()},se=(0,R.useMutation)(G=>g({"email-templates":G}),{onSuccess:()=>xe(void 0,null,function*(){yield F.invalidateQueries("email-templates"),C({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),z.current("didEditEmailTemplates"),A(),te()}),onError:()=>{C({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),A()},refetchActive:!0}),{isLoading:we}=se,je=G=>{w(),z.current("willEditEmailTemplates");const Be=be(ye({},ie),{[V]:G});se.mutate(Be)};return Se?m.createElement(t.Main,{"aria-busy":"true"},m.createElement(a.SettingsPageTitle,{name:E({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),m.createElement(n.HeaderLayout,{title:E({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),m.createElement(n.ContentLayout,null,m.createElement(a.LoadingIndicatorPage,null))):m.createElement(t.Main,{"aria-busy":we},m.createElement(a.SettingsPageTitle,{name:E({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),m.createElement(n.HeaderLayout,{title:E({id:(0,l.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),m.createElement(n.ContentLayout,null,m.createElement(le,{onEditClick:Me,canUpdate:q}),j&&m.createElement(pe,{template:ie[V],onToggle:te,onSubmit:je})))},Te=Oe},65772:(W,U,v)=>{"use strict";v.d(U,{Z:()=>n});var m=v(9669),R=v.n(m),c=v(68547),a=v.n(c),i=(s,l,u)=>new Promise((f,g)=>{var y=p=>{try{d(u.next(p))}catch(b){g(b)}},x=p=>{try{d(u.throw(p))}catch(b){g(b)}},d=p=>p.done?f(p.value):Promise.resolve(p.value).then(y,x);d((u=u.apply(s,l)).next())});const t=R().create({baseURL:""});t.interceptors.request.use(s=>i(void 0,null,function*(){return s.headers={Authorization:`Bearer ${c.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},s}),s=>{Promise.reject(s)}),t.interceptors.response.use(s=>s,s=>{var l;throw((l=s.response)==null?void 0:l.status)===401&&(c.auth.clearAppStorage(),window.location.reload()),s});const n=t},42722:(W,U,v)=>{"use strict";v.d(U,{be:()=>m.Z,YX:()=>a,Gc:()=>n,OB:()=>s.Z});var m=v(65772),R=v(96486);const a=l=>Object.keys(l).reduce((u,f)=>{const g=l[f].controllers,y=Object.keys(g).reduce((x,d)=>((0,R.isEmpty)(g[d])||(x[d]=g[d]),x),{});return(0,R.isEmpty)(y)||(u[f]={controllers:y}),u},{});var i=v(83086);const n=l=>`/${i.Z}/${l}`;var s=v(97961)}}]);
