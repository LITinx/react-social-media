import{r as R,b as i,p as re,T as se,_ as F,q as U,v as j,w as m,x as K,y as X,z as ie,B as _,C as w,D as le,E as B,H as Y,I as ce,J as A,j as L,K as S,L as Z,F as ue,n as q,M as de,S as pe,P as ge,h as fe,d as ve,O as be,Q as me,R as ye,U as he,V as xe,W as Ce,X as Pe}from"./index.5b290e68.js";import{w as $e}from"./withAuthRedirect.3fbeb736.js";import{l as Ne}from"./no-logo.a291e1ee.js";function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},W.apply(this,arguments)}const ze=R.exports.createContext(null);var ee=ze;function te(){return R.exports.useContext(ee)}const Oe=typeof Symbol=="function"&&Symbol.for;var Ie=Oe?Symbol.for("mui.nested"):"__THEME_NESTED__";function Me(e,t){return typeof t=="function"?t(e):W({},e,t)}function ke(e){const{children:t,theme:a}=e,n=te(),l=R.exports.useMemo(()=>{const r=n===null?a:Me(n,a);return r!=null&&(r[Ie]=n!==null),r},[a,n]);return i(ee.Provider,{value:l,children:t})}const D={};function H(e,t,a,n=!1){return R.exports.useMemo(()=>{const l=e&&t[e]||t;if(typeof a=="function"){const r=a(l),c=e?F({},t,{[e]:r}):r;return n?()=>c:c}return e?F({},t,{[e]:a}):F({},t,a)},[e,t,a,n])}function Re(e){const{children:t,theme:a,themeId:n}=e,l=re(D),r=te()||D,c=H(n,l,a),o=H(n,r,a,!0);return i(ke,{theme:o,children:i(se.Provider,{value:c,children:t})})}const Te=["theme"];function Be(e){let{theme:t}=e,a=U(e,Te);const n=t[j];return i(Re,m({},a,{themeId:n?j:void 0,theme:n||t}))}function Le(e){return K("MuiPagination",e)}X("MuiPagination",["root","ul","outlined","text"]);const Se=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function we(e={}){const{boundaryCount:t=1,componentName:a="usePagination",count:n=1,defaultPage:l=1,disabled:r=!1,hideNextButton:c=!1,hidePrevButton:o=!1,onChange:s,page:u,showFirstButton:v=!1,showLastButton:b=!1,siblingCount:g=1}=e,d=U(e,Se),[p,$]=ie({controlled:u,default:l,name:a,state:"page"}),I=(f,k)=>{u||$(k),s&&s(f,k)},y=(f,k)=>{const ne=k-f+1;return Array.from({length:ne},(Mt,oe)=>f+oe)},N=y(1,Math.min(t,n)),h=y(Math.max(n-t+1,t+1),n),C=Math.max(Math.min(p-g,n-t-g*2-1),t+2),P=Math.min(Math.max(p+g,t+g*2+2),h.length>0?h[0]-2:n-1),T=[...v?["first"]:[],...o?[]:["previous"],...N,...C>t+2?["start-ellipsis"]:t+1<n-t?[t+1]:[],...y(C,P),...P<n-t-1?["end-ellipsis"]:n-t>t?[n-t]:[],...h,...c?[]:["next"],...b?["last"]:[]],z=f=>{switch(f){case"first":return 1;case"previous":return p-1;case"next":return p+1;case"last":return n;default:return null}},M=T.map(f=>typeof f=="number"?{onClick:k=>{I(k,f)},type:"page",page:f,selected:f===p,disabled:r,"aria-current":f===p?"true":void 0}:{onClick:k=>{I(k,z(f))},type:f,page:z(f),selected:!1,disabled:r||f.indexOf("ellipsis")===-1&&(f==="next"||f==="last"?p>=n:p<=1)});return m({items:M},d)}function Ee(e){return K("MuiPaginationItem",e)}const Ue=X("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]);var x=Ue,V=_(i("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),G=_(i("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),J=_(i("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),Q=_(i("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");const _e=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],ae=(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t[`size${S(a.size)}`],a.variant==="text"&&t[`text${S(a.color)}`],a.variant==="outlined"&&t[`outlined${S(a.color)}`],a.shape==="rounded"&&t.rounded,a.type==="page"&&t.page,(a.type==="start-ellipsis"||a.type==="end-ellipsis")&&t.ellipsis,(a.type==="previous"||a.type==="next")&&t.previousNext,(a.type==="first"||a.type==="last")&&t.firstLast]},Fe=e=>{const{classes:t,color:a,disabled:n,selected:l,size:r,shape:c,type:o,variant:s}=e,u={root:["root",`size${S(r)}`,s,c,a!=="standard"&&`${s}${S(a)}`,n&&"disabled",l&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[o]],icon:["icon"]};return Z(u,Ee,t)},Ae=w("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:ae})(({theme:e,ownerState:t})=>m({},e.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,height:"auto",[`&.${x.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:e.typography.pxToRem(15)})),We=w(le,{name:"MuiPaginationItem",slot:"Root",overridesResolver:ae})(({theme:e,ownerState:t})=>m({},e.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,[`&.${x.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${x.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${x.selected}`]:{backgroundColor:(e.vars||e).palette.action.selected,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selected} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:B(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${x.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selected} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:B(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},[`&.${x.disabled}`]:{opacity:1,color:(e.vars||e).palette.action.disabled,backgroundColor:(e.vars||e).palette.action.selected}}},t.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:e.typography.pxToRem(15)},t.shape==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius}),({theme:e,ownerState:t})=>m({},t.variant==="text"&&{[`&.${x.selected}`]:m({},t.color!=="standard"&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}},[`&.${x.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}},{[`&.${x.disabled}`]:{color:(e.vars||e).palette.action.disabled}})},t.variant==="outlined"&&{border:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${x.selected}`]:m({},t.color!=="standard"&&{color:(e.vars||e).palette[t.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:B(e.palette[t.color].main,.5)}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.activatedOpacity})`:B(e.palette[t.color].main,e.palette.action.activatedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:B(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${x.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:B(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity)}},{[`&.${x.disabled}`]:{borderColor:(e.vars||e).palette.action.disabledBackground,color:(e.vars||e).palette.action.disabled}})})),je=w("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(e,t)=>t.icon})(({theme:e,ownerState:t})=>m({fontSize:e.typography.pxToRem(20),margin:"0 -8px"},t.size==="small"&&{fontSize:e.typography.pxToRem(18)},t.size==="large"&&{fontSize:e.typography.pxToRem(22)})),qe=R.exports.forwardRef(function(t,a){const n=Y({props:t,name:"MuiPaginationItem"}),{className:l,color:r="standard",component:c,components:o={},disabled:s=!1,page:u,selected:v=!1,shape:b="circular",size:g="medium",slots:d={},type:p="page",variant:$="text"}=n,I=U(n,_e),y=m({},n,{color:r,disabled:s,selected:v,shape:b,size:g,type:p,variant:$}),N=ce(),h=Fe(y),P=(N.direction==="rtl"?{previous:d.next||o.next||Q,next:d.previous||o.previous||J,last:d.first||o.first||V,first:d.last||o.last||G}:{previous:d.previous||o.previous||J,next:d.next||o.next||Q,first:d.first||o.first||V,last:d.last||o.last||G})[p];return p==="start-ellipsis"||p==="end-ellipsis"?i(Ae,{ref:a,ownerState:y,className:A(h.root,l),children:"\u2026"}):L(We,m({ref:a,ownerState:y,component:c,disabled:s,className:A(h.root,l)},I,{children:[p==="page"&&u,P?i(je,{as:P,ownerState:y,className:h.icon}):null]}))});var De=qe;const He=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],Ve=e=>{const{classes:t,variant:a}=e;return Z({root:["root",a],ul:["ul"]},Le,t)},Ge=w("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant]]}})({}),Je=w("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(e,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function Qe(e,t,a){return e==="page"?`${a?"":"Go to "}page ${t}`:`Go to ${e} page`}const Ke=R.exports.forwardRef(function(t,a){const n=Y({props:t,name:"MuiPagination"}),{boundaryCount:l=1,className:r,color:c="standard",count:o=1,defaultPage:s=1,disabled:u=!1,getItemAriaLabel:v=Qe,hideNextButton:b=!1,hidePrevButton:g=!1,renderItem:d=M=>i(De,m({},M)),shape:p="circular",showFirstButton:$=!1,showLastButton:I=!1,siblingCount:y=1,size:N="medium",variant:h="text"}=n,C=U(n,He),{items:P}=we(m({},n,{componentName:"Pagination"})),T=m({},n,{boundaryCount:l,color:c,count:o,defaultPage:s,disabled:u,getItemAriaLabel:v,hideNextButton:b,hidePrevButton:g,renderItem:d,shape:p,showFirstButton:$,showLastButton:I,siblingCount:y,size:N,variant:h}),z=Ve(T);return i(Ge,m({"aria-label":"pagination navigation",className:A(z.root,r),ownerState:T,ref:a},C,{children:i(Je,{className:z.ul,ownerState:T,children:P.map((M,f)=>i("li",{children:d(m({},M,{color:c,"aria-label":v(M.type,M.page,M.selected),shape:p,size:N,variant:h}))},f))})}))});var Xe=Ke,E="NOT_FOUND";function Ye(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:E},put:function(n,l){t={key:n,value:l}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function Ze(e,t){var a=[];function n(o){var s=a.findIndex(function(v){return t(o,v.key)});if(s>-1){var u=a[s];return s>0&&(a.splice(s,1),a.unshift(u)),u.value}return E}function l(o,s){n(o)===E&&(a.unshift({key:o,value:s}),a.length>e&&a.pop())}function r(){return a}function c(){a=[]}return{get:n,put:l,getEntries:r,clear:c}}var et=function(t,a){return t===a};function tt(e){return function(a,n){if(a===null||n===null||a.length!==n.length)return!1;for(var l=a.length,r=0;r<l;r++)if(!e(a[r],n[r]))return!1;return!0}}function at(e,t){var a=typeof t=="object"?t:{equalityCheck:t},n=a.equalityCheck,l=n===void 0?et:n,r=a.maxSize,c=r===void 0?1:r,o=a.resultEqualityCheck,s=tt(l),u=c===1?Ye(s):Ze(c,s);function v(){var b=u.get(arguments);if(b===E){if(b=e.apply(null,arguments),o){var g=u.getEntries(),d=g.find(function(p){return o(p.value,b)});d&&(b=d.value)}u.put(arguments,b)}return b}return v.clearCache=function(){return u.clear()},v}function nt(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(n){return typeof n=="function"})){var a=t.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+a+"]")}return t}function ot(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var l=function(){for(var c=arguments.length,o=new Array(c),s=0;s<c;s++)o[s]=arguments[s];var u=0,v,b={memoizeOptions:void 0},g=o.pop();if(typeof g=="object"&&(b=g,g=o.pop()),typeof g!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof g+"]");var d=b,p=d.memoizeOptions,$=p===void 0?a:p,I=Array.isArray($)?$:[$],y=nt(o),N=e.apply(void 0,[function(){return u++,g.apply(null,arguments)}].concat(I)),h=e(function(){for(var P=[],T=y.length,z=0;z<T;z++)P.push(y[z].apply(null,arguments));return v=N.apply(null,P),v});return Object.assign(h,{resultFunc:g,memoizedResultFunc:N,dependencies:y,lastResult:function(){return v},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),h};return l}var rt=ot(at);const st=e=>e.usersPage.users,it=rt(st,e=>e.filter(t=>!0)),lt=e=>e.usersPage.pageSize,ct=e=>e.usersPage.totalCount,ut=e=>e.usersPage.currentPage,dt=e=>e.usersPage.isFetching,pt=e=>e.usersPage.followingInProgress,gt="wrapper_AUX",ft="logo_BD0",vt="image_JIQ",bt="follow-btn_6Db",mt="info_UuS",yt="location_H0Q",ht="full-name_9bS",xt="status_4HJ",Ct="status-wrapper_b9U";var O={wrapper:gt,logo:ft,image:vt,followBtn:bt,info:mt,location:yt,fullName:ht,status:xt,statusWrapper:Ct};const Pt=({id:e,followed:t,name:a,status:n,follow:l,unfollow:r,photos:c,followingInProgress:o})=>{const s={backgroundColor:t?"var(--red-primary)":"var(--blue-secondary)",color:t?"#000":"var(--gray-primary)"};return i(ue,{children:L("div",{className:O.wrapper,children:[L("div",{className:O.logo,children:[i(q,{style:{textDecoration:"none",color:"#000"},to:`/profile/${e}`,children:i("img",{className:O.image,src:c.small?c.small:Ne,alt:"logo"})}),t?i("button",{disabled:o.some(u=>u===e),onClick:()=>{r(e)},className:O.followBtn,style:s,children:"Unfollow"}):i("button",{disabled:o.some(u=>u===e),onClick:()=>{l(e)},className:O.followBtn,style:s,children:"Follow"})]}),i("div",{className:O.info,children:i(q,{style:{textDecoration:"none",color:"#000"},to:`/profile/${e}`,children:L("div",{children:[i("h4",{className:O.fullName,children:a}),i("div",{className:O.statusWrapper,children:i("p",{className:O.status,children:n||"No status"})})]})})})]})})},$t=de({components:{MuiPagination:{styleOverrides:{ul:{"& .Mui-selected":{backgroundColor:"var(--blue-secondary)",color:"#fff"},"& .Mui-selected:hover":{backgroundColor:"var(--blue-primary)"}}}}}}),Nt=({totalCount:e,pageSize:t,currentPage:a,users:n,unfollow:l,follow:r,onPageChanged:c,setCurrentPage:o,isFetching:s,followingInProgress:u})=>{let v=Math.ceil(e/t);return L("div",{children:[i(pe,{direction:"row",justifyContent:"center",alignItems:"center",style:{marginTop:"20px"},children:i(Be,{theme:$t,children:i(Xe,{count:v,boundaryCount:2,siblingCount:4,page:a,onChange:(g,d)=>{o(d),c(d,t)}})})}),n==null?void 0:n.map((g,d)=>s?i(ge,{}):R.exports.createElement(Pt,{...g,follow:r,followingInProgress:u,unfollow:l,key:d}))]})};function zt(e){return R.exports.useEffect(()=>{e.users.length===0&&e.requestUsers(e.currentPage,e.pageSize)},[]),i(Nt,{...e,onPageChanged:(a,n)=>{e.requestUsers(a,n)}})}const Ot=e=>({users:it(e),pageSize:lt(e),totalCount:ct(e),currentPage:ut(e),isFetching:dt(e),followingInProgress:pt(e)}),It={unfollow:be,follow:me,setUsers:ye,setTotalCount:he,setCurrentPage:xe,toggleIsFetching:Ce,requestUsers:Pe};var Bt=fe(ve(Ot,It),$e)(zt);export{Bt as default};
