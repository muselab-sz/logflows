(self.webpackChunklogflows_sync_pickupp=self.webpackChunklogflows_sync_pickupp||[]).push([[3650],{62031:($,Z,c)=>{"use strict";$.exports=c(59525)},59525:function($,Z,c){(function(s,N){$.exports=N(c(67294),c(78384))})(this,function(s,N){return function(n){var u={};function t(a){if(u[a])return u[a].exports;var r=u[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=n,t.c=u,t.d=function(a,r,d){t.o(a,r)||Object.defineProperty(a,r,{enumerable:!0,get:d})},t.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},t.t=function(a,r){if(1&r&&(a=t(a)),8&r||4&r&&typeof a=="object"&&a&&a.__esModule)return a;var d=Object.create(null);if(t.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:a}),2&r&&typeof a!="string")for(var i in a)t.d(d,i,function(g){return a[g]}.bind(null,i));return d},t.n=function(a){var r=a&&a.__esModule?function(){return a.default}:function(){return a};return t.d(r,"a",r),r},t.o=function(a,r){return Object.prototype.hasOwnProperty.call(a,r)},t.p="",t(t.s=110)}({0:function(n,u,t){n.exports=t(19)()},1:function(n,u){n.exports=s},10:function(n,u,t){var a=t(25),r=t(26),d=t(22),i=t(27);n.exports=function(g,m){return a(g)||r(g,m)||d(g,m)||i()},n.exports.default=n.exports,n.exports.__esModule=!0},110:function(n,u,t){"use strict";t.r(u),t.d(u,"Main",function(){return e}),t.d(u,"SkipToContent",function(){return U});var a,r=t(5),d=t.n(r),i=t(4),g=t.n(i),m=t(3),b=t.n(m),T=t(1),w=t.n(T),l=t(0),L=t.n(l),B=t(2),P=t.n(B),I=["labelledBy"],Q=P.a.main(a||(a=b()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),e=function(j){var W=j.labelledBy,k=g()(j,I),F=W||"main-content-title";return w.a.createElement(Q,d()({"aria-labelledby":F,id:"main-content",tabIndex:-1},k))};e.defaultProps={labelledBy:void 0},e.propTypes={labelledBy:L.a.string};var o,h=t(6),D=P()(h.Box)(o||(o=b()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(j){return j.theme.spaces[3]},function(j){return j.theme.spaces[3]}),U=function(j){var W=j.children;return w.a.createElement(D,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},W)};U.propTypes={children:L.a.node.isRequired}},13:function(n,u){function t(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(n.exports=t=function(r){return typeof r},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},n.exports.default=n.exports,n.exports.__esModule=!0),t(a)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,u,t){"use strict";var a=t(20);function r(){}function d(){}d.resetWarningCache=r,n.exports=function(){function i(b,T,w,l,L,B){if(B!==a){var P=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw P.name="Invariant Violation",P}}function g(){return i}i.isRequired=i;var m={array:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:g,element:i,elementType:i,instanceOf:g,node:i,objectOf:g,oneOf:g,oneOfType:g,shape:g,exact:g,checkPropTypes:d,resetWarningCache:r};return m.PropTypes=m,m}},2:function(n,u){n.exports=N},20:function(n,u,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,u){n.exports=function(t,a){(a==null||a>t.length)&&(a=t.length);for(var r=0,d=new Array(a);r<a;r++)d[r]=t[r];return d},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,u,t){var a=t(21);n.exports=function(r,d){if(r){if(typeof r=="string")return a(r,d);var i=Object.prototype.toString.call(r).slice(8,-1);return i==="Object"&&r.constructor&&(i=r.constructor.name),i==="Map"||i==="Set"?Array.from(r):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(r,d):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,u){n.exports=function(t,a){if(t==null)return{};var r,d,i={},g=Object.keys(t);for(d=0;d<g.length;d++)r=g[d],a.indexOf(r)>=0||(i[r]=t[r]);return i},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,u){n.exports=function(t){if(Array.isArray(t))return t},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,u){n.exports=function(t,a){var r=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(r!=null){var d,i,g=[],m=!0,b=!1;try{for(r=r.call(t);!(m=(d=r.next()).done)&&(g.push(d.value),!a||g.length!==a);m=!0);}catch(T){b=!0,i=T}finally{try{m||r.return==null||r.return()}finally{if(b)throw i}}return g}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,u){n.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,u){n.exports=function(t,a){return a||(a=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(a)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,u,t){var a=t(24);n.exports=function(r,d){if(r==null)return{};var i,g,m=a(r,d);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(r);for(g=0;g<b.length;g++)i=b[g],d.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(r,i)&&(m[i]=r[i])}return m},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,u){function t(){return n.exports=t=Object.assign||function(a){for(var r=1;r<arguments.length;r++){var d=arguments[r];for(var i in d)Object.prototype.hasOwnProperty.call(d,i)&&(a[i]=d[i])}return a},n.exports.default=n.exports,n.exports.__esModule=!0,t.apply(this,arguments)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,u,t){"use strict";t.r(u),t.d(u,"Box",function(){return Q});var a,r=t(3),d=t.n(r),i=t(2),g=t.n(i),m=t(7),b=t(1),T=t.n(b),w=t(0),l=t.n(w),L=function(e){return T.a.createElement("div",e)},B={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},P={_hover:l.a.func,background:l.a.string,basis:l.a.oneOfType([l.a.string,l.a.string]),borderColor:l.a.string,children:l.a.oneOfType([l.a.node,l.a.string]),color:l.a.string,flex:l.a.oneOfType([l.a.string,l.a.string]),grow:l.a.oneOfType([l.a.string,l.a.string]),hasRadius:l.a.bool,hiddenS:l.a.bool,hiddenXS:l.a.bool,padding:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingBottom:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingLeft:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingRight:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),paddingTop:l.a.oneOfType([l.a.number,l.a.arrayOf(l.a.number)]),shadow:l.a.string,shrink:l.a.oneOfType([l.a.string,l.a.string])};L.defaultProps=B,L.propTypes=P;var I={color:!0},Q=g.a.div.withConfig({shouldForwardProp:function(e,o){return!I[e]&&o(e)}})(a||(a=d()([`
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
`])),function(e){var o=e.fontSize;return e.theme.fontSizes[o]||o},function(e){var o=e.theme,h=e.background;return o.colors[h]},function(e){var o=e.theme,h=e.color;return o.colors[h]},function(e){var o=e.theme,h=e.padding;return Object(m.a)("padding",h,o)},function(e){var o=e.theme,h=e.paddingTop;return Object(m.a)("padding-top",h,o)},function(e){var o=e.theme,h=e.paddingRight;return Object(m.a)("padding-right",h,o)},function(e){var o=e.theme,h=e.paddingBottom;return Object(m.a)("padding-bottom",h,o)},function(e){var o=e.theme,h=e.paddingLeft;return Object(m.a)("padding-left",h,o)},function(e){var o=e.theme,h=e.marginLeft;return Object(m.a)("margin-left",h,o)},function(e){var o=e.theme,h=e.marginRight;return Object(m.a)("margin-right",h,o)},function(e){var o=e.theme,h=e.marginTop;return Object(m.a)("margin-top",h,o)},function(e){var o=e.theme,h=e.marginBottom;return Object(m.a)("margin-bottom",h,o)},function(e){var o=e.theme;return e.hiddenS?"".concat(o.mediaQueries.tablet," { display: none; }"):void 0},function(e){var o=e.theme;return e.hiddenXS?"".concat(o.mediaQueries.mobile," { display: none; }"):void 0},function(e){var o=e.theme,h=e.hasRadius,D=e.borderRadius;return h?o.borderRadius:D},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var o=e.borderColor;return e.theme.colors[o]},function(e){var o=e.theme,h=e.borderColor,D=e.borderStyle,U=e.borderWidth;if(h&&!D&&!U)return"1px solid ".concat(o.colors[h])},function(e){var o=e.theme,h=e.shadow;return o.shadows[h]},function(e){return e.pointerEvents},function(e){var o=e._hover,h=e.theme;return o?o(h):void 0},function(e){return e.display},function(e){return e.position},function(e){var o=e.left;return e.theme.spaces[o]||o},function(e){var o=e.right;return e.theme.spaces[o]||o},function(e){var o=e.top;return e.theme.spaces[o]||o},function(e){var o=e.bottom;return e.theme.spaces[o]||o},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var o=e.width;return e.theme.spaces[o]||o},function(e){var o=e.maxWidth;return e.theme.spaces[o]||o},function(e){var o=e.minWidth;return e.theme.spaces[o]||o},function(e){var o=e.height;return e.theme.spaces[o]||o},function(e){var o=e.maxHeight;return e.theme.spaces[o]||o},function(e){var o=e.minHeight;return e.theme.spaces[o]||o},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});Q.defaultProps=B,Q.propTypes=P},7:function(n,u,t){"use strict";var a=t(10),r=t.n(a),d=t(13),i=t.n(d);u.a=function(g,m,b){var T=m;if(Array.isArray(m)||i()(m)!=="object"||(T=[m==null?void 0:m.desktop,m==null?void 0:m.tablet,m==null?void 0:m.mobile]),T!==void 0){if(Array.isArray(T)){var w=T,l=r()(w,3),L=l[0],B=l[1],P=l[2],I="".concat(g,": ").concat(b.spaces[L],";");return B!==void 0&&(I+="".concat(b.mediaQueries.tablet,`{
          `).concat(g,": ").concat(b.spaces[B],`;
        }`)),P!==void 0&&(I+="".concat(b.mediaQueries.mobile,`{
          `).concat(g,": ").concat(b.spaces[P],`;
        }`)),I}var Q=b.spaces[T]||T;return"".concat(g,": ").concat(Q,";")}}}})})},58774:($,Z,c)=>{"use strict";c.r(Z),c.d(Z,{default:()=>Pe});var s=c(67294),N=c(15482),n=c(97132),u=c(68547),t=c(50779),a=c(78384),r=c(78862),d=c(62031),i=c(19408),g=c(80768),m=c.n(g),b=c(5493),T=c(59522),w=c(19839),l=c(56219),L=c(71382),B=c(45687),P=c(23724),I=c(84686),Q=(v,f,p)=>new Promise((E,O)=>{var A=y=>{try{S(p.next(y))}catch(x){O(x)}},C=y=>{try{S(p.throw(y))}catch(x){O(x)}},S=y=>y.done?E(y.value):Promise.resolve(y.value).then(A,C);S((p=p.apply(v,f)).next())});const e=({skipWhen:v})=>{const{formatMessage:f}=(0,n.useIntl)(),p=(0,u.useNotification)(),{notifyStatus:E}=(0,I.useNotifyAT)(),[{rawQuery:O}]=(0,u.useQueryParams)(),A=(0,t.IF)("files"),C=()=>Q(void 0,null,function*(){const{data:R}=yield t.be.get(`${A}${O}`);return R}),{data:S,error:y,isLoading:x}=(0,P.useQuery)(["assets",O],C,{enabled:!v,staleTime:0,cacheTime:0});return(0,s.useEffect)(()=>{S&&E(f({id:"list.asset.at.finished",defaultMessage:"The assets have finished loading."}))},[S,E,f]),(0,s.useEffect)(()=>{y&&p({type:"warning",message:{id:"notification.error"}})},[y,p]),{data:S,error:y,isLoading:x}};var o=c(23980),h=c.n(o),D=c(99398),U=c(32269),j=c(62082);const W=()=>{var v;const f=(0,s.useRef)(null),[p,E]=(0,s.useState)(!1),{formatMessage:O}=(0,n.useIntl)(),[{query:A},C]=(0,u.useQueryParams)(),S=((v=A==null?void 0:A.filters)==null?void 0:v.$and)||[],y=()=>E(z=>!z),x=z=>{C({filters:{$and:z},page:1})},R=z=>{C({filters:{$and:z},page:1})};return s.createElement(s.Fragment,null,s.createElement(i.Button,{variant:"tertiary",ref:f,startIcon:s.createElement(h(),null),onClick:y,size:"S"},O({id:"app.utils.filters",defaultMessage:"Filters"})),p&&s.createElement(U.Z,{displayedFilters:j.Z,filters:S,onSubmit:R,onToggle:y,source:f}),s.createElement(D.Z,{appliedFilters:S,filtersSchema:j.Z,onRemoveFilter:x}))};var k=c(45697),F=c.n(k),oe=c(67826);const V=({pagination:v})=>s.createElement(b.Box,{paddingTop:6},s.createElement(oe.Flex,{alignItems:"flex-end",justifyContent:"space-between"},s.createElement(u.PageSizeURLQuery,null),s.createElement(u.PaginationURLQuery,{pagination:v})));V.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},V.propTypes={pagination:F().shape({page:F().number,pageCount:F().number,pageSize:F().number,total:F().number})};var ae=c(60269),se=c(49425),ie=c(9008),le=c(18568),ue=c.n(le),ce=c(45454),de=Object.defineProperty,fe=Object.defineProperties,pe=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,J=(v,f,p)=>f in v?de(v,f,{enumerable:!0,configurable:!0,writable:!0,value:p}):v[f]=p,ve=(v,f)=>{for(var p in f||(f={}))me.call(f,p)&&J(v,p,f[p]);if(G)for(var p of G(f))ge.call(f,p)&&J(v,p,f[p]);return v},he=(v,f)=>fe(v,pe(f));const ye=v=>{const f=v.map(p=>(0,ce.H)(p));return Promise.all(f)},be=()=>{const v=(0,u.useNotification)(),f=(0,P.useQueryClient)(),p=(0,P.useMutation)(ye,{onSuccess:()=>{f.refetchQueries(["assets"],{active:!0}),f.refetchQueries(["asset-count"],{active:!0}),v({type:"success",message:{id:"modal.remove.success-label",defaultMessage:"The asset has been successfully removed."}})},onError:O=>{v({type:"warning",message:O.message})}}),E=O=>p.mutateAsync(O);return he(ve({},p),{removeAssets:E})};var xe=c(93593),Oe=(v,f,p)=>new Promise((E,O)=>{var A=y=>{try{S(p.next(y))}catch(x){O(x)}},C=y=>{try{S(p.throw(y))}catch(x){O(x)}},S=y=>y.done?E(y.value):Promise.resolve(y.value).then(A,C);S((p=p.apply(v,f)).next())});const K=({selectedAssets:v,onSuccess:f})=>{const{formatMessage:p}=(0,n.useIntl)(),[E,O]=(0,s.useState)(!1),{isLoading:A,removeAssets:C}=be(),S=()=>Oe(void 0,null,function*(){yield C(v.map(({id:y})=>y)),f()});return s.createElement(s.Fragment,null,s.createElement(ie.Stack,{horizontal:!0,spacing:2,paddingBottom:5},s.createElement(se.Typography,{variant:"epsilon",textColor:"neutral600"},p({id:(0,xe.Z)("list.assets.selected"),defaultMessage:"{number, plural, =0 {No asset} one {1 asset} other {# assets}} selected"},{number:v.length})),s.createElement(i.Button,{variant:"danger-light",size:"S",startIcon:s.createElement(ue(),null),onClick:()=>O(!0)},p({id:"global.delete",defaultMessage:"Delete"}))),s.createElement(u.ConfirmDialog,{isConfirmButtonLoading:A,isOpen:E,onToggleDialog:()=>O(!1),onConfirm:S}))};K.propTypes={selectedAssets:F().arrayOf(F().shape({})).isRequired,onSuccess:F().func.isRequired};var Se=c(54053);const Ee=(0,a.default)(b.Box)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,Te=()=>{var v;const{canRead:f,canCreate:p,canUpdate:E,canCopyLink:O,canDownload:A,isLoading:C}=(0,ae.y)(),[{query:S},y]=(0,u.useQueryParams)(),{formatMessage:x}=(0,n.useIntl)(),{data:R,isLoading:z,error:Me}=e({skipWhen:!f}),Ae=Y=>{y({sort:Y})},[Ce,Be]=(0,s.useState)(!1),[q,_]=(0,s.useState)(void 0),[H,{selectOne:je,selectAll:ee}]=(0,u.useSelectionState)("id",[]),X=()=>Be(Y=>!Y);(0,u.useFocusWhenNavigate)();const te=C||z,M=R==null?void 0:R.results,ne=((v=R==null?void 0:R.pagination)==null?void 0:v.total)||0,re=Boolean(S._q||S.filters);return s.createElement(r.Layout,null,s.createElement(d.Main,{"aria-busy":te},s.createElement(r.HeaderLayout,{title:x({id:(0,t.OB)("plugin.name"),defaultMessage:"Media Library"}),subtitle:x({id:(0,t.OB)(ne>0?"header.content.assets-multiple":"header.content.assets.assets-single"),defaultMessage:"0 assets"},{number:ne}),primaryAction:p?s.createElement(i.Button,{startIcon:s.createElement(m(),null),onClick:X},x({id:(0,t.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})):void 0}),s.createElement(r.ActionLayout,{startActions:s.createElement(s.Fragment,null,E&&s.createElement(Ee,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200"},s.createElement(T.BaseCheckbox,{"aria-label":x({id:(0,t.OB)("bulk.select.label"),defaultMessage:"Select all assets"}),indeterminate:(M==null?void 0:M.length)>0&&H.length>0&&H.length!==(M==null?void 0:M.length),value:(M==null?void 0:M.length)>0&&H.length===(M==null?void 0:M.length),onChange:()=>ee(M)})),f&&s.createElement(B.Z,{onChangeSort:Ae}),f&&s.createElement(W,null)),endActions:s.createElement(u.SearchURLQuery,{label:x({id:(0,t.OB)("search.label"),defaultMessage:"Search for an asset"})})}),s.createElement(r.ContentLayout,null,H.length>0&&s.createElement(K,{selectedAssets:H,onSuccess:ee}),te&&s.createElement(u.LoadingIndicatorPage,null),Me&&s.createElement(u.AnErrorOccurred,null),!f&&s.createElement(u.NoPermissions,null),f&&M&&M.length===0&&s.createElement(Se.i,{action:p&&!re?s.createElement(i.Button,{variant:"secondary",startIcon:s.createElement(m(),null),onClick:X},x({id:(0,t.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})):void 0,content:x(re?{id:(0,t.OB)("list.assets-empty.title-withSearch"),defaultMessage:"There are no assets with the applied filters"}:p?{id:(0,t.OB)("list.assets.empty"),defaultMessage:"Upload your first assets..."}:{id:(0,t.OB)("list.assets.empty.no-permissions"),defaultMessage:"The asset list is empty"})}),f&&M&&M.length>0&&s.createElement(s.Fragment,null,s.createElement(L.l,{assets:M,onEditAsset:_,onSelectAsset:je,selectedAssets:H}),(R==null?void 0:R.pagination)&&s.createElement(V,{pagination:R.pagination})))),Ce&&s.createElement(w.x,{onClose:X,trackedLocation:"upload"}),q&&s.createElement(l.s,{onClose:()=>_(void 0),asset:q,canUpdate:E,canCopyLink:O,canDownload:A,trackedLocation:"upload"}))},Pe=()=>{const[{rawQuery:v},f]=(0,u.useQueryParams)(),{formatMessage:p}=(0,n.useIntl)(),E=p({id:(0,t.OB)("plugin.name"),defaultMessage:"Media Library"});return(0,s.useEffect)(()=>{v||f({sort:"updatedAt:DESC",page:1,pageSize:10})},[v,f]),v?s.createElement(s.Fragment,null,s.createElement(N.Helmet,{title:E}),s.createElement(Te,null)):null}}}]);
