(self.webpackChunklogflows_sync_pickupp=self.webpackChunklogflows_sync_pickupp||[]).push([[9789],{62031:(R,w,d)=>{"use strict";R.exports=d(59525)},59525:function(R,w,d){(function(u,C){R.exports=C(d(67294),d(78384))})(this,function(u,C){return function(n){var p={};function t(a){if(p[a])return p[a].exports;var o=p[a]={i:a,l:!1,exports:{}};return n[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=p,t.d=function(a,o,c){t.o(a,o)||Object.defineProperty(a,o,{enumerable:!0,get:c})},t.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},t.t=function(a,o){if(1&o&&(a=t(a)),8&o||4&o&&typeof a=="object"&&a&&a.__esModule)return a;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:a}),2&o&&typeof a!="string")for(var s in a)t.d(c,s,function(f){return a[f]}.bind(null,s));return c},t.n=function(a){var o=a&&a.__esModule?function(){return a.default}:function(){return a};return t.d(o,"a",o),o},t.o=function(a,o){return Object.prototype.hasOwnProperty.call(a,o)},t.p="",t(t.s=110)}({0:function(n,p,t){n.exports=t(19)()},1:function(n,p){n.exports=u},10:function(n,p,t){var a=t(25),o=t(26),c=t(22),s=t(27);n.exports=function(f,l){return a(f)||o(f,l)||c(f,l)||s()},n.exports.default=n.exports,n.exports.__esModule=!0},110:function(n,p,t){"use strict";t.r(p),t.d(p,"Main",function(){return e}),t.d(p,"SkipToContent",function(){return I});var a,o=t(5),c=t.n(o),s=t(4),f=t.n(s),l=t(3),g=t.n(l),h=t(1),M=t.n(h),i=t(0),E=t.n(i),P=t(2),O=t.n(P),b=["labelledBy"],x=O.a.main(a||(a=g()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),e=function(j){var $=j.labelledBy,Q=f()(j,b),z=$||"main-content-title";return M.a.createElement(x,c()({"aria-labelledby":z,id:"main-content",tabIndex:-1},Q))};e.defaultProps={labelledBy:void 0},e.propTypes={labelledBy:E.a.string};var r,m=t(6),B=O()(m.Box)(r||(r=g()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(j){return j.theme.spaces[3]},function(j){return j.theme.spaces[3]}),I=function(j){var $=j.children;return M.a.createElement(B,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},$)};I.propTypes={children:E.a.node.isRequired}},13:function(n,p){function t(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(n.exports=t=function(o){return typeof o},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},n.exports.default=n.exports,n.exports.__esModule=!0),t(a)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,p,t){"use strict";var a=t(20);function o(){}function c(){}c.resetWarningCache=o,n.exports=function(){function s(g,h,M,i,E,P){if(P!==a){var O=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw O.name="Invariant Violation",O}}function f(){return s}s.isRequired=s;var l={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:f,element:s,elementType:s,instanceOf:f,node:s,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:c,resetWarningCache:o};return l.PropTypes=l,l}},2:function(n,p){n.exports=C},20:function(n,p,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,p){n.exports=function(t,a){(a==null||a>t.length)&&(a=t.length);for(var o=0,c=new Array(a);o<a;o++)c[o]=t[o];return c},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,p,t){var a=t(21);n.exports=function(o,c){if(o){if(typeof o=="string")return a(o,c);var s=Object.prototype.toString.call(o).slice(8,-1);return s==="Object"&&o.constructor&&(s=o.constructor.name),s==="Map"||s==="Set"?Array.from(o):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?a(o,c):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,p){n.exports=function(t,a){if(t==null)return{};var o,c,s={},f=Object.keys(t);for(c=0;c<f.length;c++)o=f[c],a.indexOf(o)>=0||(s[o]=t[o]);return s},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,p){n.exports=function(t){if(Array.isArray(t))return t},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,p){n.exports=function(t,a){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var c,s,f=[],l=!0,g=!1;try{for(o=o.call(t);!(l=(c=o.next()).done)&&(f.push(c.value),!a||f.length!==a);l=!0);}catch(h){g=!0,s=h}finally{try{l||o.return==null||o.return()}finally{if(g)throw s}}return f}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,p){n.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,p){n.exports=function(t,a){return a||(a=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(a)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,p,t){var a=t(24);n.exports=function(o,c){if(o==null)return{};var s,f,l=a(o,c);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(o);for(f=0;f<g.length;f++)s=g[f],c.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(o,s)&&(l[s]=o[s])}return l},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,p){function t(){return n.exports=t=Object.assign||function(a){for(var o=1;o<arguments.length;o++){var c=arguments[o];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(a[s]=c[s])}return a},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,p,t){"use strict";t.r(p),t.d(p,"Box",function(){return x});var a,o=t(3),c=t.n(o),s=t(2),f=t.n(s),l=t(7),g=t(1),h=t.n(g),M=t(0),i=t.n(M),E=function(e){return h.a.createElement("div",e)},P={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},O={_hover:i.a.func,background:i.a.string,basis:i.a.oneOfType([i.a.string,i.a.string]),borderColor:i.a.string,children:i.a.oneOfType([i.a.node,i.a.string]),color:i.a.string,flex:i.a.oneOfType([i.a.string,i.a.string]),grow:i.a.oneOfType([i.a.string,i.a.string]),hasRadius:i.a.bool,hiddenS:i.a.bool,hiddenXS:i.a.bool,padding:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingBottom:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingLeft:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingRight:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingTop:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),shadow:i.a.string,shrink:i.a.oneOfType([i.a.string,i.a.string])};E.defaultProps=P,E.propTypes=O;var b={color:!0},x=f.a.div.withConfig({shouldForwardProp:function(e,r){return!b[e]&&r(e)}})(a||(a=c()([`
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
`])),function(e){var r=e.fontSize;return e.theme.fontSizes[r]||r},function(e){var r=e.theme,m=e.background;return r.colors[m]},function(e){var r=e.theme,m=e.color;return r.colors[m]},function(e){var r=e.theme,m=e.padding;return Object(l.a)("padding",m,r)},function(e){var r=e.theme,m=e.paddingTop;return Object(l.a)("padding-top",m,r)},function(e){var r=e.theme,m=e.paddingRight;return Object(l.a)("padding-right",m,r)},function(e){var r=e.theme,m=e.paddingBottom;return Object(l.a)("padding-bottom",m,r)},function(e){var r=e.theme,m=e.paddingLeft;return Object(l.a)("padding-left",m,r)},function(e){var r=e.theme,m=e.marginLeft;return Object(l.a)("margin-left",m,r)},function(e){var r=e.theme,m=e.marginRight;return Object(l.a)("margin-right",m,r)},function(e){var r=e.theme,m=e.marginTop;return Object(l.a)("margin-top",m,r)},function(e){var r=e.theme,m=e.marginBottom;return Object(l.a)("margin-bottom",m,r)},function(e){var r=e.theme;return e.hiddenS?"".concat(r.mediaQueries.tablet," { display: none; }"):void 0},function(e){var r=e.theme;return e.hiddenXS?"".concat(r.mediaQueries.mobile," { display: none; }"):void 0},function(e){var r=e.theme,m=e.hasRadius,B=e.borderRadius;return m?r.borderRadius:B},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var r=e.borderColor;return e.theme.colors[r]},function(e){var r=e.theme,m=e.borderColor,B=e.borderStyle,I=e.borderWidth;if(m&&!B&&!I)return"1px solid ".concat(r.colors[m])},function(e){var r=e.theme,m=e.shadow;return r.shadows[m]},function(e){return e.pointerEvents},function(e){var r=e._hover,m=e.theme;return r?r(m):void 0},function(e){return e.display},function(e){return e.position},function(e){var r=e.left;return e.theme.spaces[r]||r},function(e){var r=e.right;return e.theme.spaces[r]||r},function(e){var r=e.top;return e.theme.spaces[r]||r},function(e){var r=e.bottom;return e.theme.spaces[r]||r},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var r=e.width;return e.theme.spaces[r]||r},function(e){var r=e.maxWidth;return e.theme.spaces[r]||r},function(e){var r=e.minWidth;return e.theme.spaces[r]||r},function(e){var r=e.height;return e.theme.spaces[r]||r},function(e){var r=e.maxHeight;return e.theme.spaces[r]||r},function(e){var r=e.minHeight;return e.theme.spaces[r]||r},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});x.defaultProps=P,x.propTypes=O},7:function(n,p,t){"use strict";var a=t(10),o=t.n(a),c=t(13),s=t.n(c);p.a=function(f,l,g){var h=l;if(Array.isArray(l)||s()(l)!=="object"||(h=[l==null?void 0:l.desktop,l==null?void 0:l.tablet,l==null?void 0:l.mobile]),h!==void 0){if(Array.isArray(h)){var M=h,i=o()(M,3),E=i[0],P=i[1],O=i[2],b="".concat(f,": ").concat(g.spaces[E],";");return P!==void 0&&(b+="".concat(g.mediaQueries.tablet,`{
          `).concat(f,": ").concat(g.spaces[P],`;
        }`)),O!==void 0&&(b+="".concat(g.mediaQueries.mobile,`{
          `).concat(f,": ").concat(g.spaces[O],`;
        }`)),b}var x=g.spaces[h]||h;return"".concat(f,": ").concat(x,";")}}}})})},39172:(R,w,d)=>{"use strict";d.r(w),d.d(w,{default:()=>N});var u=d(67294),C=d(97132),n=d(68547),p=d(15482),t=d(19408),a=d(78862),o=d(62031),c=d(30741),s=d(49425),f=d(67826),l=d(41798),g=d(18568),h=d.n(g),M=d(28649),i=d.n(M),E=d(27590),P=d.n(E),O=d(77904),b=d(10104),x=d(96486);const r=T=>{const y=(()=>(0,x.startsWith)(T,"/")?`${strapi.backendURL}${T}`:(0,x.startsWith)(T,"https")||(0,x.startsWith)(T,"http")?T:`${strapi.backendURL}/${T}`)();return window.open(y,"_blank"),window.focus()};var m=d(17829),B=Object.defineProperty,I=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,Q=(T,y,v)=>y in T?B(T,y,{enumerable:!0,configurable:!0,writable:!0,value:v}):T[y]=v,z=(T,y)=>{for(var v in y||(y={}))j.call(y,v)&&Q(T,v,y[v]);if(I)for(var v of I(y))$.call(y,v)&&Q(T,v,y[v]);return T},H=(T,y,v)=>new Promise((V,Z)=>{var U=D=>{try{L(v.next(D))}catch(W){Z(W)}},A=D=>{try{L(v.throw(D))}catch(W){Z(W)}},L=D=>D.done?V(D.value):Promise.resolve(D.value).then(U,A);L((v=v.apply(T,y)).next())});const N=()=>{var T;(0,n.useFocusWhenNavigate)();const{formatMessage:y}=(0,C.useIntl)(),{data:v,isLoading:V,deleteMutation:Z,regenerateDocMutation:U}=(0,m.Z)(),[A,L]=(0,u.useState)(!1),[D,W]=(0,u.useState)(!1),[X,K]=(0,u.useState)(),G=4,Y=(((T=v==null?void 0:v.docVersions)==null?void 0:T.length)||0)+1,k=()=>{const S=v!=null&&v.prefix.startsWith("/")?"":"/";r(`${S}${v==null?void 0:v.prefix}/v${v==null?void 0:v.currentVersion}`)},J=S=>{U.mutate({version:S,prefix:v==null?void 0:v.prefix})},q=()=>{L(!A)},_=()=>H(void 0,null,function*(){W(!0),yield Z.mutateAsync({prefix:v==null?void 0:v.prefix,version:X}),L(!A),W(!1)}),ee=S=>{K(S),L(!A)},F=y({id:(0,b.O)("plugin.name"),defaultMessage:"Documentation"});return u.createElement(a.Layout,null,u.createElement(p.Helmet,{title:F}),u.createElement(o.Main,{"aria-busy":V},u.createElement(a.HeaderLayout,{title:F,subtitle:y({id:(0,b.O)("pages.PluginPage.header.description"),defaultMessage:"Configure the documentation plugin"}),primaryAction:u.createElement(n.CheckPermissions,{permissions:O.Z.open},u.createElement(t.Button,{onClick:k,startIcon:u.createElement(i(),null)},y({id:(0,b.O)("pages.PluginPage.Button.open"),defaultMessage:"Open Documentation"})))}),u.createElement(a.ContentLayout,null,V&&u.createElement(n.LoadingIndicatorPage,null,"Plugin is loading"),v!=null&&v.docVersions.length?u.createElement(l.Table,{colCount:G,rowCount:Y},u.createElement(l.Thead,null,u.createElement(l.Tr,null,u.createElement(l.Th,null,u.createElement(s.Typography,{variant:"sigma",textColor:"neutral600"},y({id:(0,b.O)("pages.PluginPage.table.version"),defaultMessage:"Version"}))),u.createElement(l.Th,null,u.createElement(s.Typography,{variant:"sigma",textColor:"neutral600"},y({id:(0,b.O)("pages.PluginPage.table.generated"),defaultMessage:"Last Generated"}))))),u.createElement(l.Tbody,null,v.docVersions.sort((S,te)=>S.generatedDate<te.generatedDate?1:-1).map(S=>u.createElement(l.Tr,{key:S.version},u.createElement(l.Td,{width:"50%"},u.createElement(s.Typography,null,S.version)),u.createElement(l.Td,{width:"50%"},u.createElement(s.Typography,null,S.generatedDate)),u.createElement(l.Td,null,u.createElement(f.Flex,z({justifyContent:"end"},n.stopPropagation),u.createElement(c.IconButton,{onClick:k,noBorder:!0,icon:u.createElement(i(),null),label:y({id:(0,b.O)("pages.PluginPage.table.icon.show"),defaultMessage:"Open {target}"},{target:`${S.version}`})}),u.createElement(n.CheckPermissions,{permissions:O.Z.regenerate},u.createElement(c.IconButton,{onClick:()=>J(S.version),noBorder:!0,icon:u.createElement(P(),null),label:y({id:(0,b.O)("pages.PluginPage.table.icon.regenerate"),defaultMessage:"Regenerate {target}"},{target:`${S.version}`})})),u.createElement(n.CheckPermissions,{permissions:O.Z.update},S.version!==v.currentVersion&&u.createElement(c.IconButton,{onClick:()=>ee(S.version),noBorder:!0,icon:u.createElement(h(),null),label:y({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${S.version}`})})))))))):u.createElement(n.EmptyStateLayout,null)),u.createElement(n.ConfirmDialog,{isConfirmButtonLoading:D,onConfirm:_,onToggleDialog:q,isOpen:A})))}},17829:(R,w,d)=>{"use strict";d.d(w,{Z:()=>l});var u=d(23724),C=d(68547),n=d(52809),p=(g,h,M)=>new Promise((i,E)=>{var P=x=>{try{b(M.next(x))}catch(e){E(e)}},O=x=>{try{b(M.throw(x))}catch(e){E(e)}},b=x=>x.done?i(x.value):Promise.resolve(x.value).then(P,O);b((M=M.apply(g,h)).next())});const t=({prefix:g,version:h})=>(0,C.request)(`${g}/deleteDoc/${h}`,{method:"DELETE"}),a=g=>p(void 0,null,function*(){try{return yield(0,C.request)(`/${n.Z}/getInfos`,{method:"GET"})}catch(h){return g({type:"warning",message:{id:"notification.error"}}),null}}),o=({prefix:g,version:h})=>(0,C.request)(`${g}/regenerateDoc`,{method:"POST",body:{version:h}}),c=({prefix:g,body:h})=>(0,C.request)(`${g}/updateSettings`,{method:"PUT",body:h});var s=d(35326);const l=()=>{const g=(0,u.useQueryClient)(),h=(0,C.useNotification)(),{isLoading:M,data:i}=(0,u.useQuery)("get-documentation",()=>a(h)),E=e=>{h({type:"warning",message:e.response.payload.message})},P=(e,r)=>{g.invalidateQueries("get-documentation"),h({type:e,message:{id:(0,s.Z)(r)}})},O=(0,u.useMutation)(t,{onSuccess:()=>P("info","notification.delete.success"),onError:e=>E(e)}),b=(0,u.useMutation)(c,{onSuccess:()=>P("success","notification.update.success"),onError:E}),x=(0,u.useMutation)(o,{onSuccess:()=>P("info","notification.generate.success"),onError:e=>E(e)});return{data:i,isLoading:M,deleteMutation:O,submitMutation:b,regenerateDocMutation:x}}},35326:(R,w,d)=>{"use strict";d.d(w,{Z:()=>n});var u=d(52809);const n=p=>`${u.Z}.${p}`},10104:(R,w,d)=>{"use strict";d.d(w,{O:()=>u.Z});var u=d(35326)}}]);
