import{e as $,g as K,_ as S,d as A,a as J,o as se,K as R,s as oe,u as le,b as ie}from"./iconBase-1.0.15-5866dbfd.js";import{r as b,j as C}from"./main-1.0.15.js";import{ah as ue,ag as ce,ak as ae,X as de}from"./main-1.0.15-e2ad00f6.js";import{c as z}from"./Close-1.0.15-8d33e66c.js";import{P as N}from"./DialogContent-1.0.15-e50a43f8.js";function fe(e){return $("MuiSimpleTreeView",e)}K("MuiSimpleTreeView",["root"]);const pe=(e,t)=>{const n=b.useRef({}),[r,i]=b.useState(()=>{const u={};return e.forEach(a=>{a.models&&Object.entries(a.models).forEach(([l,f])=>{n.current[l]={isControlled:t[l]!==void 0,getDefaultValue:f.getDefaultValue},u[l]=f.getDefaultValue(t)})}),u});return Object.fromEntries(Object.entries(n.current).map(([u,a])=>{const l=a.isControlled?t[u]:r[u];return[u,{value:l,setControlledValue:f=>{a.isControlled||i(h=>S({},h,{[u]:f}))}}]}))};class me{constructor(){this.maxListeners=20,this.warnOnce=!1,this.events={}}on(t,n,r={}){let i=this.events[t];i||(i={highPriority:new Map,regular:new Map},this.events[t]=i),r.isFirst?i.highPriority.set(n,!0):i.regular.set(n,!0)}removeListener(t,n){this.events[t]&&(this.events[t].regular.delete(n),this.events[t].highPriority.delete(n))}removeAllListeners(){this.events={}}emit(t,...n){const r=this.events[t];if(!r)return;const i=Array.from(r.highPriority.keys()),o=Array.from(r.regular.keys());for(let u=i.length-1;u>=0;u-=1){const a=i[u];r.highPriority.has(a)&&a.apply(this,n)}for(let u=0;u<o.length;u+=1){const a=o[u];r.regular.has(a)&&a.apply(this,n)}}once(t,n){const r=this;this.on(t,function i(...o){r.removeListener(t,i),n.apply(r,o)})}}const Ie=(e,t)=>{const n=e.getNode(t),r=e.getNavigableChildrenIds(n.parentId),i=r.indexOf(t);if(i===0)return n.parentId;let o=r[i-1];for(;e.isItemExpanded(o)&&e.getNavigableChildrenIds(o).length>0;)o=e.getNavigableChildrenIds(o).pop();return o},F=(e,t)=>{if(e.isItemExpanded(t)&&e.getNavigableChildrenIds(t).length>0)return e.getNavigableChildrenIds(t)[0];let n=e.getNode(t);for(;n!=null;){const r=e.getNavigableChildrenIds(n.parentId),i=r[r.indexOf(n.id)+1];if(i)return i;n=e.getNode(n.parentId)}return null},O=e=>{let t=e.getNavigableChildrenIds(null).pop();for(;e.isItemExpanded(t);)t=e.getNavigableChildrenIds(t).pop();return t},L=e=>e.getNavigableChildrenIds(null)[0],P=(e,t)=>{Object.assign(e,t)},B=(e,t)=>{Object.assign(e,t)},ge=e=>e.isPropagationStopped!==void 0,q=({instance:e})=>{const[t]=b.useState(()=>new me),n=b.useCallback((...i)=>{const[o,u,a={}]=i;a.defaultMuiPrevented=!1,!(ge(a)&&a.isPropagationStopped())&&t.emit(o,u,a)},[t]),r=b.useCallback((i,o)=>(t.on(i,o),()=>{t.removeListener(i,o)}),[t]);P(e,{$$publishEvent:n,$$subscribeEvent:r})};q.params={};const he=[q];function be(e){const t=b.useRef({});return e?(e.current==null&&(e.current={}),e.current):t.current}const xe=e=>{const t=[...he,...e.plugins],n=t.reduce((p,I)=>I.getDefaultizedParams?I.getDefaultizedParams(p):p,e),r=pe(t,n),o=b.useRef({}).current,u=be(e.apiRef),a=b.useRef(null),l=A(a,e.rootRef),[f,h]=b.useState(()=>{const p={};return t.forEach(I=>{I.getInitialState&&Object.assign(p,I.getInitialState(n))}),p}),s=[],d={publicAPI:u,instance:o},x=p=>{const I=p({instance:o,publicAPI:u,params:n,slots:n.slots,slotProps:n.slotProps,state:f,setState:h,rootRef:a,models:r})||{};I.getRootProps&&s.push(I.getRootProps),I.contextValue&&Object.assign(d,I.contextValue)};t.forEach(x),d.runItemPlugins=p=>{let I=null,w=null;return t.forEach(E=>{if(!E.itemPlugin)return;const g=E.itemPlugin({props:p,rootRef:I,contentRef:w});g!=null&&g.rootRef&&(I=g.rootRef),g!=null&&g.contentRef&&(w=g.contentRef)}),{contentRef:w,rootRef:I}};const m=t.map(p=>p.wrapItem).filter(p=>!!p);return d.wrapItem=({itemId:p,children:I})=>{let w=I;return m.forEach(E=>{w=E({itemId:p,children:w})}),w},{getRootProps:(p={})=>{const I=S({role:"tree"},p,{ref:l});return s.forEach(w=>{Object.assign(I,w(p))}),I},rootRef:l,contextValue:d,instance:o}},W=b.createContext(null),Ee=["element"];function Te(e,t){let n=0,r=e.length-1;for(;n<=r;){const i=Math.floor((n+r)/2);if(e[i].element===t)return i;e[i].element.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING?r=i-1:n=i+1}return n}const G=b.createContext({});function we(e){const t=b.useRef(null);return b.useEffect(()=>{t.current=e},[e]),t.current}const U=()=>{};function Se(e){const[,t]=b.useState(),{registerDescendant:n=U,unregisterDescendant:r=U,descendants:i=[],parentId:o=null}=b.useContext(G),u=i.findIndex(f=>f.element===e.element),a=we(i),l=i.some((f,h)=>a&&a[h]&&a[h].element!==f.element);return se(()=>{if(e.element)return n(S({},e,{index:u})),()=>{r(e.element)};t({})},[n,r,u,l,e]),{parentId:o,index:u}}function H(e){const{children:t,id:n}=e,[r,i]=b.useState([]),o=b.useCallback(l=>{let{element:f}=l,h=J(l,Ee);i(s=>{if(s.length===0)return[S({},h,{element:f,index:0})];const d=Te(s,f);let x;if(s[d]&&s[d].element===f)x=s;else{const m=S({},h,{element:f,index:d});x=s.slice(),x.splice(d,0,m)}return x.forEach((m,c)=>{m.index=c}),x})},[]),u=b.useCallback(l=>{i(f=>f.filter(h=>l!==h.element))},[]),a=b.useMemo(()=>({descendants:r,registerDescendant:o,unregisterDescendant:u,parentId:n}),[r,o,u,n]);return C.jsx(G.Provider,{value:a,children:t})}function ye(e){const{value:t,children:n}=e;return C.jsx(W.Provider,{value:t,children:C.jsx(H,{children:n})})}const Y=({instance:e,params:t})=>{const n=ue(t.id),r=b.useCallback((i,o)=>o??`${n}-${i}`,[n]);return P(e,{getTreeItemId:r}),{getRootProps:()=>({id:n})}};Y.params={id:!0};const Q=(e,t,n)=>{e.$$publishEvent(t,n)},Z=({items:e,isItemDisabled:t,getItemLabel:n,getItemId:r})=>{const i={},o={},u=(l,f,h)=>{var x,m;const s=r?r(l):l.id;if(s==null)throw new Error(["MUI X: The Tree View component requires all items to have a unique `id` property.","Alternatively, you can use the `getItemId` prop to specify a custom id for each item.","An item was provided without id in the `items` prop:",JSON.stringify(l)].join(`
`));if(i[s]!=null)throw new Error(["MUI X: The Tree View component requires all items to have a unique `id` property.","Alternatively, you can use the `getItemId` prop to specify a custom id for each item.",`Tow items were provided with the same id in the \`items\` prop: "${s}"`].join(`
`));const d=n?n(l):l.label;if(d==null)throw new Error(["MUI X: The Tree View component requires all items to have a `label` property.","Alternatively, you can use the `getItemLabel` prop to specify a custom label for each item.","An item was provided without label in the `items` prop:",JSON.stringify(l)].join(`
`));return i[s]={id:s,label:d,index:f,parentId:h,idAttribute:void 0,expandable:!!((x=l.children)!=null&&x.length),disabled:t?t(l):!1},o[s]=l,{id:s,children:(m=l.children)==null?void 0:m.map((c,p)=>u(c,p,s))}},a=e.map((l,f)=>u(l,f,null));return{nodeMap:i,nodeTree:a,itemMap:o}},v=({instance:e,publicAPI:t,params:n,state:r,setState:i})=>{const o=b.useCallback(m=>r.items.nodeMap[m],[r.items.nodeMap]),u=b.useCallback(m=>r.items.itemMap[m],[r.items.itemMap]),a=b.useCallback(m=>{if(m==null)return!1;let c=e.getNode(m);if(!c)return!1;if(c.disabled)return!0;for(;c.parentId!=null;)if(c=e.getNode(c.parentId),c.disabled)return!0;return!1},[e]),l=b.useCallback(m=>Object.values(r.items.nodeMap).filter(c=>c.parentId===m).sort((c,p)=>c.index-p.index).map(c=>c.id),[r.items.nodeMap]),f=m=>{let c=e.getChildrenIds(m);return n.disabledItemsFocusable||(c=c.filter(p=>!e.isItemDisabled(p))),c},h=b.useRef(!1),s=b.useCallback(()=>{h.current=!0},[]),d=b.useCallback(()=>h.current,[]);return b.useEffect(()=>{e.areItemUpdatesPrevented()||i(m=>{const c=Z({items:n.items,isItemDisabled:n.isItemDisabled,getItemId:n.getItemId,getItemLabel:n.getItemLabel});return Object.values(m.items.nodeMap).forEach(p=>{c.nodeMap[p.id]||Q(e,"removeItem",{id:p.id})}),S({},m,{items:c})})},[e,i,n.items,n.isItemDisabled,n.getItemId,n.getItemLabel]),P(e,{getNode:o,getItem:u,getItemsToRender:()=>{const m=({id:c,children:p})=>{const I=r.items.nodeMap[c];return{label:I.label,itemId:I.id,id:I.idAttribute,children:p==null?void 0:p.map(m)}};return r.items.nodeTree.map(m)},getChildrenIds:l,getNavigableChildrenIds:f,isItemDisabled:a,preventItemUpdates:s,areItemUpdatesPrevented:d}),B(t,{getItem:u}),{contextValue:{disabledItemsFocusable:n.disabledItemsFocusable}}};v.getInitialState=e=>({items:Z({items:e.items,isItemDisabled:e.isItemDisabled,getItemId:e.getItemId,getItemLabel:e.getItemLabel})});v.getDefaultizedParams=e=>S({},e,{disabledItemsFocusable:e.disabledItemsFocusable??!1});v.params={disabledItemsFocusable:!0,items:!0,isItemDisabled:!0,getItemLabel:!0,getItemId:!0};const D=({instance:e,params:t,models:n})=>{const r=(l,f)=>{var h;(h=t.onExpandedItemsChange)==null||h.call(t,l,f),n.expandedItems.setControlledValue(f)},i=b.useCallback(l=>Array.isArray(n.expandedItems.value)?n.expandedItems.value.indexOf(l)!==-1:!1,[n.expandedItems.value]),o=b.useCallback(l=>{var f;return!!((f=e.getNode(l))!=null&&f.expandable)},[e]),u=R((l,f)=>{if(f==null)return;const h=n.expandedItems.value.indexOf(f)!==-1;let s;h?s=n.expandedItems.value.filter(d=>d!==f):s=[f].concat(n.expandedItems.value),t.onItemExpansionToggle&&t.onItemExpansionToggle(l,f,!h),r(l,s)});P(e,{isItemExpanded:i,isItemExpandable:o,toggleItemExpansion:u,expandAllSiblings:(l,f)=>{const h=e.getNode(f),d=e.getChildrenIds(h.parentId).filter(m=>e.isItemExpandable(m)&&!e.isItemExpanded(m)),x=n.expandedItems.value.concat(d);d.length>0&&(t.onItemExpansionToggle&&d.forEach(m=>{t.onItemExpansionToggle(l,m,!0)}),r(l,x))}})};D.models={expandedItems:{getDefaultValue:e=>e.defaultExpandedItems}};const Re=[];D.getDefaultizedParams=e=>S({},e,{defaultExpandedItems:e.defaultExpandedItems??Re});D.params={expandedItems:!0,defaultExpandedItems:!0,onExpandedItemsChange:!0,onItemExpansionToggle:!0};const Ce=(e,t,n)=>{if(t===n)return[t,n];const r=e.getNode(t),i=e.getNode(n);if(r.parentId===i.id||i.parentId===r.id)return i.parentId===r.id?[r.id,i.id]:[i.id,r.id];const o=[r.id],u=[i.id];let a=r.parentId,l=i.parentId,f=u.indexOf(a)!==-1,h=o.indexOf(l)!==-1,s=!0,d=!0;for(;!h&&!f;)s&&(o.push(a),f=u.indexOf(a)!==-1,s=a!==null,!f&&s&&(a=e.getNode(a).parentId)),d&&!f&&(u.push(l),h=o.indexOf(l)!==-1,d=l!==null,!h&&d&&(l=e.getNode(l).parentId));const x=f?a:l,m=e.getChildrenIds(x),c=o[o.indexOf(x)-1],p=u[u.indexOf(x)-1];return m.indexOf(c)<m.indexOf(p)?[t,n]:[n,t]},V=({instance:e,params:t,models:n})=>{const r=b.useRef(null),i=b.useRef(!1),o=b.useRef([]),u=(c,p)=>{if(t.onItemSelectionToggle)if(t.multiSelect){const I=p.filter(E=>!e.isItemSelected(E)),w=n.selectedItems.value.filter(E=>!p.includes(E));I.forEach(E=>{t.onItemSelectionToggle(c,E,!0)}),w.forEach(E=>{t.onItemSelectionToggle(c,E,!1)})}else p!==n.selectedItems.value&&(n.selectedItems.value!=null&&t.onItemSelectionToggle(c,n.selectedItems.value,!1),p!=null&&t.onItemSelectionToggle(c,p,!0));t.onSelectedItemsChange&&t.onSelectedItemsChange(c,p),n.selectedItems.setControlledValue(p)},a=c=>Array.isArray(n.selectedItems.value)?n.selectedItems.value.indexOf(c)!==-1:n.selectedItems.value===c,l=(c,p,I=!1)=>{if(!t.disableSelection){if(I){if(Array.isArray(n.selectedItems.value)){let w;n.selectedItems.value.indexOf(p)!==-1?w=n.selectedItems.value.filter(E=>E!==p):w=[p].concat(n.selectedItems.value),u(c,w)}}else{const w=t.multiSelect?[p]:p;u(c,w)}r.current=p,i.current=!1,o.current=[]}},f=(c,p)=>{const[I,w]=Ce(e,c,p),E=[I];let g=I;for(;g!==w;)g=F(e,g),E.push(g);return E},h=(c,p)=>{let I=n.selectedItems.value.slice();const{start:w,next:E,current:g}=p;!E||!g||(o.current.indexOf(g)===-1&&(o.current=[]),i.current?o.current.indexOf(E)!==-1?(I=I.filter(T=>T===w||T!==g),o.current=o.current.filter(T=>T===w||T!==g)):(I.push(E),o.current.push(E)):(I.push(E),o.current.push(g,E)),u(c,I))},s=(c,p)=>{let I=n.selectedItems.value.slice();const{start:w,end:E}=p;i.current&&(I=I.filter(y=>o.current.indexOf(y)===-1));let g=f(w,E);g=g.filter(y=>!e.isItemDisabled(y)),o.current=g;let T=I.concat(g);T=T.filter((y,M)=>T.indexOf(y)===M),u(c,T)};return P(e,{isItemSelected:a,selectItem:l,selectRange:(c,p,I=!1)=>{if(t.disableSelection)return;const{start:w=r.current,end:E,current:g}=p;I?h(c,{start:w,next:E,current:g}):w!=null&&E!=null&&s(c,{start:w,end:E}),i.current=!0},rangeSelectToLast:(c,p)=>{r.current||(r.current=p);const I=i.current?r.current:p;e.selectRange(c,{start:I,end:O(e)})},rangeSelectToFirst:(c,p)=>{r.current||(r.current=p);const I=i.current?r.current:p;e.selectRange(c,{start:I,end:L(e)})}}),{getRootProps:()=>({"aria-multiselectable":t.multiSelect}),contextValue:{selection:{multiSelect:t.multiSelect}}}};V.models={selectedItems:{getDefaultValue:e=>e.defaultSelectedItems}};const Pe=[];V.getDefaultizedParams=e=>S({},e,{disableSelection:e.disableSelection??!1,multiSelect:e.multiSelect??!1,defaultSelectedItems:e.defaultSelectedItems??(e.multiSelect?Pe:null)});V.params={disableSelection:!0,multiSelect:!0,defaultSelectedItems:!0,selectedItems:!0,onSelectedItemsChange:!0,onItemSelectionToggle:!0};const _=1e3;class Me{constructor(t=_){this.timeouts=new Map,this.cleanupTimeout=_,this.cleanupTimeout=t}register(t,n,r){this.timeouts||(this.timeouts=new Map);const i=setTimeout(()=>{typeof n=="function"&&n(),this.timeouts.delete(r.cleanupToken)},this.cleanupTimeout);this.timeouts.set(r.cleanupToken,i)}unregister(t){const n=this.timeouts.get(t.cleanupToken);n&&(this.timeouts.delete(t.cleanupToken),clearTimeout(n))}reset(){this.timeouts&&(this.timeouts.forEach((t,n)=>{this.unregister({cleanupToken:n})}),this.timeouts=void 0)}}class ve{constructor(){this.registry=new FinalizationRegistry(t=>{typeof t=="function"&&t()})}register(t,n,r){this.registry.register(t,n,r)}unregister(t){this.registry.unregister(t)}reset(){}}class De{}function Ve(e){let t=0;return function(r,i,o){e.registry===null&&(e.registry=typeof FinalizationRegistry<"u"?new ve:new Me);const[u]=b.useState(new De),a=b.useRef(null),l=b.useRef();l.current=o;const f=b.useRef(null);if(!a.current&&l.current){const h=(s,d)=>{var x;d.defaultMuiPrevented||(x=l.current)==null||x.call(l,s,d)};a.current=r.$$subscribeEvent(i,h),t+=1,f.current={cleanupToken:t},e.registry.register(u,()=>{var s;(s=a.current)==null||s.call(a),a.current=null,f.current=null},f.current)}else!l.current&&a.current&&(a.current(),a.current=null,f.current&&(e.registry.unregister(f.current),f.current=null));b.useEffect(()=>{if(!a.current&&l.current){const h=(s,d)=>{var x;d.defaultMuiPrevented||(x=l.current)==null||x.call(l,s,d)};a.current=r.$$subscribeEvent(i,h)}return f.current&&e.registry&&(e.registry.unregister(f.current),f.current=null),()=>{var h;(h=a.current)==null||h.call(a),a.current=null}},[r,i])}}const ke={registry:null},Ae=Ve(ke),ee=(e=document)=>{const t=e.activeElement;return t?t.shadowRoot?ee(t.shadowRoot):t:null},Fe=(e,t)=>{const n=i=>{const o=e.getNode(i);return o&&(o.parentId==null||e.isItemExpanded(o.parentId))};let r;return Array.isArray(t)?r=t.find(n):t!=null&&n(t)&&(r=t),r==null&&(r=e.getNavigableChildrenIds(null)[0]),r},j=({instance:e,publicAPI:t,params:n,state:r,setState:i,models:o,rootRef:u})=>{const a=Fe(e,o.selectedItems.value),l=R(g=>{const T=typeof g=="function"?g(r.focusedItemId):g;r.focusedItemId!==T&&i(y=>S({},y,{focusedItemId:T}))}),f=b.useCallback(()=>!!u.current&&u.current.contains(ee(ce(u.current))),[u]),h=b.useCallback(g=>r.focusedItemId===g&&f(),[r.focusedItemId,f]),s=g=>{const T=e.getNode(g);return T&&(T.parentId==null||e.isItemExpanded(T.parentId))},d=(g,T)=>{const y=e.getNode(T),M=document.getElementById(e.getTreeItemId(T,y.idAttribute));M&&M.focus(),l(T),n.onItemFocus&&n.onItemFocus(g,T)},x=R((g,T)=>{s(T)&&d(g,T)}),m=R(g=>{let T;Array.isArray(o.selectedItems.value)?T=o.selectedItems.value.find(s):o.selectedItems.value!=null&&s(o.selectedItems.value)&&(T=o.selectedItems.value),T==null&&(T=e.getNavigableChildrenIds(null)[0]),d(g,T)}),c=R(()=>{if(r.focusedItemId==null)return;const g=e.getNode(r.focusedItemId);if(g){const T=document.getElementById(e.getTreeItemId(r.focusedItemId,g.idAttribute));T&&T.blur()}l(null)});P(e,{isItemFocused:h,canItemBeTabbed:g=>g===a,focusItem:x,focusDefaultItem:m,removeFocusedItem:c}),B(t,{focusItem:x}),Ae(e,"removeItem",({id:g})=>{r.focusedItemId===g&&e.focusDefaultItem(null)});const I=g=>T=>{var y;(y=g.onFocus)==null||y.call(g,T),T.target===T.currentTarget&&e.focusDefaultItem(T)},w=e.getNode(r.focusedItemId),E=w?e.getTreeItemId(w.id,w.idAttribute):null;return{getRootProps:g=>({onFocus:I(g),"aria-activedescendant":E??void 0})}};j.getInitialState=()=>({focusedItemId:null});j.params={onItemFocus:!0};function Oe(e){return!!e&&e.length===1&&!!e.match(/\S/)}function X(e,t,n){for(let r=t;r<e.length;r+=1)if(n===e[r])return r;return-1}const te=({instance:e,params:t,state:n})=>{const i=ae().direction==="rtl",o=b.useRef({}),u=R(s=>{o.current=s(o.current)});b.useEffect(()=>{if(e.areItemUpdatesPrevented())return;const s={},d=x=>{s[x.id]=x.label.substring(0,1).toLowerCase()};Object.values(n.items.nodeMap).forEach(d),o.current=s},[n.items.nodeMap,t.getItemId,e]);const a=(s,d)=>{let x,m;const c=d.toLowerCase(),p=[],I=[];return Object.keys(o.current).forEach(w=>{const E=e.getNode(w),g=E.parentId?e.isItemExpanded(E.parentId):!0,T=t.disabledItemsFocusable?!1:e.isItemDisabled(w);g&&!T&&(p.push(w),I.push(o.current[w]))}),x=p.indexOf(s)+1,x>=p.length&&(x=0),m=X(I,x,c),m===-1&&(m=X(I,0,c)),m>-1?p[m]:null},l=s=>!t.disableSelection&&!e.isItemDisabled(s),f=s=>!e.isItemDisabled(s)&&e.isItemExpandable(s);P(e,{updateFirstCharMap:u,handleItemKeyDown:(s,d)=>{if(s.defaultMuiPrevented||s.altKey||s.currentTarget!==s.target)return;const x=s.ctrlKey||s.metaKey,m=s.key;switch(!0){case(m===" "&&l(d)):{s.preventDefault(),t.multiSelect&&s.shiftKey?e.selectRange(s,{end:d}):t.multiSelect?e.selectItem(s,d,!0):e.selectItem(s,d);break}case m==="Enter":{f(d)?(e.toggleItemExpansion(s,d),s.preventDefault()):l(d)&&(t.multiSelect?(s.preventDefault(),e.selectItem(s,d,!0)):e.isItemSelected(d)||(e.selectItem(s,d),s.preventDefault()));break}case m==="ArrowDown":{const c=F(e,d);c&&(s.preventDefault(),e.focusItem(s,c),t.multiSelect&&s.shiftKey&&l(c)&&e.selectRange(s,{end:c,current:d},!0));break}case m==="ArrowUp":{const c=Ie(e,d);c&&(s.preventDefault(),e.focusItem(s,c),t.multiSelect&&s.shiftKey&&l(c)&&e.selectRange(s,{end:c,current:d},!0));break}case(m==="ArrowRight"&&!i||m==="ArrowLeft"&&i):{if(e.isItemExpanded(d)){const c=F(e,d);c&&(e.focusItem(s,c),s.preventDefault())}else f(d)&&(e.toggleItemExpansion(s,d),s.preventDefault());break}case(m==="ArrowLeft"&&!i||m==="ArrowRight"&&i):{if(f(d)&&e.isItemExpanded(d))e.toggleItemExpansion(s,d),s.preventDefault();else{const c=e.getNode(d).parentId;c&&(e.focusItem(s,c),s.preventDefault())}break}case m==="Home":{e.focusItem(s,L(e)),l(d)&&t.multiSelect&&x&&s.shiftKey&&e.rangeSelectToFirst(s,d),s.preventDefault();break}case m==="End":{e.focusItem(s,O(e)),l(d)&&t.multiSelect&&x&&s.shiftKey&&e.rangeSelectToLast(s,d),s.preventDefault();break}case m==="*":{e.expandAllSiblings(s,d),s.preventDefault();break}case(m==="a"&&x&&t.multiSelect&&!t.disableSelection):{e.selectRange(s,{start:L(e),end:O(e)}),s.preventDefault();break}case(!x&&!s.shiftKey&&Oe(m)):{const c=a(d,m);c!=null&&(e.focusItem(s,c),s.preventDefault());break}}}})};te.params={};const ne=({slots:e,slotProps:t})=>({contextValue:{icons:{slots:{collapseIcon:e.collapseIcon,expandIcon:e.expandIcon,endIcon:e.endIcon},slotProps:{collapseIcon:t.collapseIcon,expandIcon:t.expandIcon,endIcon:t.endIcon}}}});ne.params={};const Le=[Y,v,D,V,j,te,ne],re=()=>{const e=b.useContext(W);if(e==null)throw new Error(["MUI X: Could not find the Tree View context.","It looks like you rendered your component outside of a SimpleTreeView or RichTreeView parent component.","This can also happen if you are bundling multiple versions of the Tree View."].join(`
`));return e},k=({instance:e,setState:t})=>{e.preventItemUpdates();const n=R(o=>{t(u=>{if(u.items.nodeMap[o.id]!=null)throw new Error(["MUI X: The Tree View component requires all items to have a unique `id` property.","Alternatively, you can use the `getItemId` prop to specify a custom id for each item.",`Tow items were provided with the same id in the \`items\` prop: "${o.id}"`].join(`
`));return S({},u,{items:S({},u.items,{nodeMap:S({},u.items.nodeMap,{[o.id]:o}),itemMap:S({},u.items.itemMap,{[o.id]:{id:o.id,label:o.label}})})})})}),r=R(o=>{t(u=>{const a=S({},u.items.nodeMap),l=S({},u.items.itemMap);return delete a[o],delete l[o],S({},u,{items:S({},u.items,{nodeMap:a,itemMap:l})})}),Q(e,"removeItem",{id:o})}),i=R((o,u)=>(e.updateFirstCharMap(a=>(a[o]=u,a)),()=>{e.updateFirstCharMap(a=>{const l=S({},a);return delete l[o],l})}));P(e,{insertJSXItem:n,removeJSXItem:r,mapFirstCharFromJSX:i})},je=({props:e,rootRef:t,contentRef:n})=>{const{children:r,disabled:i=!1,label:o,itemId:u,id:a}=e,{instance:l}=re(),f=E=>Array.isArray(E)?E.length>0&&E.some(f):!!E,h=f(r),[s,d]=b.useState(null),x=b.useRef(null),m=A(d,t),c=A(x,n),p=b.useMemo(()=>({element:s,id:u}),[u,s]),{index:I,parentId:w}=Se(p);return b.useEffect(()=>{if(I!==-1)return l.insertJSXItem({id:u,idAttribute:a,index:I,parentId:w,expandable:h,disabled:i}),()=>l.removeJSXItem(u)},[l,w,I,u,h,i,a]),b.useEffect(()=>{var E;if(o)return l.mapFirstCharFromJSX(u,(((E=x.current)==null?void 0:E.textContent)??"").substring(0,1).toLowerCase())},[l,u,o]),{contentRef:c,rootRef:m}};k.itemPlugin=je;k.wrapItem=({children:e,itemId:t})=>C.jsx(H,{id:t,children:e});k.params={};const Ne=[...Le,k],Ue=(e,t="warning")=>{let n=!1;const r=Array.isArray(e)?e.join(`
`):e;return()=>{n||(n=!0,t==="error"?console.error(r):console.warn(r))}},_e=["slots","slotProps","apiRef"],Xe=e=>{let{props:{slots:t,slotProps:n,apiRef:r},plugins:i,rootRef:o}=e,u=J(e.props,_e);const a={};i.forEach(h=>{Object.assign(a,h.params)});const l={plugins:i,rootRef:o,slots:t??{},slotProps:n??{},apiRef:r},f={};return Object.keys(u).forEach(h=>{const s=u[h];a[h]?l[h]=s:f[h]=s}),{pluginParams:l,slots:t,slotProps:n,otherProps:f}},$e=e=>{const{classes:t}=e;return ie({root:["root"]},fe,t)},Ke=oe("ul",{name:"MuiSimpleTreeView",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:0,margin:0,listStyle:"none",outline:0}),Je=[];Ue(["MUI X: The `SimpleTreeView` component does not support the `items` prop.","If you want to add items, you need to pass them as JSX children.","Check the documentation for more details: https://mui.com/x/react-tree-view/simple-tree-view/items/"]);const Ye=b.forwardRef(function(t,n){const r=le({props:t,name:"MuiSimpleTreeView"}),i=r,{pluginParams:o,slots:u,slotProps:a,otherProps:l}=Xe({props:S({},r,{items:Je}),plugins:Ne,rootRef:n}),{getRootProps:f,contextValue:h}=xe(o),s=$e(r),d=(u==null?void 0:u.root)??Ke,x=de({elementType:d,externalSlotProps:a==null?void 0:a.root,externalForwardedProps:l,className:s.root,getSlotProps:f,ownerState:i});return C.jsx(ye,{value:h,children:C.jsx(d,S({},x))})});function Qe(e){return $("MuiTreeItem",e)}const Ze=K("MuiTreeItem",["root","groupTransition","content","expanded","selected","focused","disabled","iconContainer","label"]),et=z(C.jsx("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"TreeViewExpandIcon"),tt=z(C.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"TreeViewCollapseIcon");function ze(e){const{children:t,itemId:n}=e,{wrapItem:r}=re();return r({children:t,itemId:n})}ze.propTypes={children:N.node,itemId:N.string.isRequired};export{Ye as S,et as T,tt as a,ze as b,Qe as g,Ze as t,re as u};
