import{r as u,j as e,l as y,bp as be,a6 as Ce,cA as oe,ds as ve,dt as ye,du as Te,dl as _e,dv as q,cM as z,dw as Be,b as Se,e as M,C as D,dx as we,dy as J}from"./main-1.0.15.js";import{W as G,a as E,v as Re,u as re,B as m,T as V,aM as Ae,q as $e,r as ke,s as le,h as ze,R as Me,G as Oe,J as Ne,aG as We,c as De,aB as Fe,e as te}from"./main-1.0.15-e2ad00f6.js";import{u as Pe,C as Ue,a as ne,b as se}from"./useApp-1.0.15-ae446897.js";import{g as qe,h as Le}from"./index.esm-1.0.15-3dc3cbe3.js";import{a as W,F as N,I as Q,S as K,T as ae}from"./TextField-1.0.15-73384817.js";import{L as P,A as Ee}from"./Link-1.0.15-0c287b6b.js";import{M as L}from"./MenuItem-1.0.15-cb0e11e9.js";import{g as de,e as ce,s as pe,S as Ge,z as I,_ as O,a as X,W as Ie,u as ue,c as he,b as xe,I as Z,T as Ye}from"./iconBase-1.0.15-5866dbfd.js";import{j as Je,k as He,l as Ve}from"./ActionsApp-1.0.15-ae4a30d5.js";import{S as Qe,a as Ke,b as Xe}from"./Stepper-1.0.15-7dbc23a7.js";import{S as Ze}from"./useFormStore-1.0.15-33a2aa16.js";import{B as U}from"./useScreenSize-1.0.15-a1dd46fa.js";import{C as et}from"./settings-1.0.15-3913c57c.js";import{P as tt}from"./PremiumFeature-1.0.15-58839b47.js";import"./index-1.0.15-c2b31918.js";import{A as nt,a as st}from"./AccordionSummary-1.0.15-ad1892ca.js";function it(t){return u.Children.toArray(t).filter(n=>u.isValidElement(n))}function ot(t){return ce("MuiToggleButton",t)}const rt=de("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge","fullWidth"]),F=rt,lt=u.createContext({}),ge=lt,at=u.createContext(void 0),me=at;function dt(t,n){return n===void 0||t===void 0?!1:Array.isArray(n)?n.indexOf(t)>=0:t===n}const ct=["value"],pt=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],ut=t=>{const{classes:n,fullWidth:i,selected:c,disabled:r,size:x,color:v}=t,f={root:["root",c&&"selected",r&&"disabled",i&&"fullWidth",`size${I(x)}`,v]};return xe(f,ot,n)},ht=pe(Ge,{name:"MuiToggleButton",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:i}=t;return[n.root,n[`size${I(i.size)}`]]}})(({theme:t,ownerState:n})=>{let i=n.color==="standard"?t.palette.text.primary:t.palette[n.color].main,c;return t.vars&&(i=n.color==="standard"?t.vars.palette.text.primary:t.vars.palette[n.color].main,c=n.color==="standard"?t.vars.palette.text.primaryChannel:t.vars.palette[n.color].mainChannel),O({},t.typography.button,{borderRadius:(t.vars||t).shape.borderRadius,padding:11,border:`1px solid ${(t.vars||t).palette.divider}`,color:(t.vars||t).palette.action.active},n.fullWidth&&{width:"100%"},{[`&.${F.disabled}`]:{color:(t.vars||t).palette.action.disabled,border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:G(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${F.selected}`]:{color:i,backgroundColor:t.vars?`rgba(${c} / ${t.vars.palette.action.selectedOpacity})`:G(i,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${c} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:G(i,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${c} / ${t.vars.palette.action.selectedOpacity})`:G(i,t.palette.action.selectedOpacity)}}}},n.size==="small"&&{padding:7,fontSize:t.typography.pxToRem(13)},n.size==="large"&&{padding:15,fontSize:t.typography.pxToRem(15)})}),xt=u.forwardRef(function(n,i){const c=u.useContext(ge),{value:r}=c,x=X(c,ct),v=u.useContext(me),f=Ie(O({},x,{selected:dt(n.value,r)}),n),S=ue({props:f,name:"MuiToggleButton"}),{children:j,className:s,color:b="standard",disabled:w=!1,disableFocusRipple:o=!1,fullWidth:$=!1,onChange:h,onClick:d,selected:g,size:B="medium",value:k}=S,R=X(S,pt),l=O({},S,{color:b,disabled:w,disableFocusRipple:o,fullWidth:$,size:B}),p=ut(l),a=A=>{d&&(d(A,k),A.defaultPrevented)||h&&h(A,k)},T=v||"";return e.jsx(ht,O({className:he(x.className,p.root,s,T),disabled:w,focusRipple:!o,ref:i,onClick:a,onChange:h,value:k,ownerState:l,"aria-pressed":g},R,{children:j}))}),H=xt;function gt(t){return ce("MuiToggleButtonGroup",t)}const mt=de("MuiToggleButtonGroup",["root","selected","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]),C=mt,ft=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],jt=t=>{const{classes:n,orientation:i,fullWidth:c,disabled:r}=t,x={root:["root",i==="vertical"&&"vertical",c&&"fullWidth"],grouped:["grouped",`grouped${I(i)}`,r&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return xe(x,gt,n)},bt=pe("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:i}=t;return[{[`& .${C.grouped}`]:n.grouped},{[`& .${C.grouped}`]:n[`grouped${I(i.orientation)}`]},{[`& .${C.firstButton}`]:n.firstButton},{[`& .${C.lastButton}`]:n.lastButton},{[`& .${C.middleButton}`]:n.middleButton},n.root,i.orientation==="vertical"&&n.vertical,i.fullWidth&&n.fullWidth]}})(({ownerState:t,theme:n})=>O({display:"inline-flex",borderRadius:(n.vars||n).shape.borderRadius},t.orientation==="vertical"&&{flexDirection:"column"},t.fullWidth&&{width:"100%"},{[`& .${C.grouped}`]:O({},t.orientation==="horizontal"?{[`&.${C.selected} + .${C.grouped}.${C.selected}`]:{borderLeft:0,marginLeft:0}}:{[`&.${C.selected} + .${C.grouped}.${C.selected}`]:{borderTop:0,marginTop:0}})},t.orientation==="horizontal"?{[`& .${C.firstButton},& .${C.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${C.lastButton},& .${C.middleButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0}}:{[`& .${C.firstButton},& .${C.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${C.lastButton},& .${C.middleButton}`]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0}},t.orientation==="horizontal"?{[`& .${C.lastButton}.${F.disabled},& .${C.middleButton}.${F.disabled}`]:{borderLeft:"1px solid transparent"}}:{[`& .${C.lastButton}.${F.disabled},& .${C.middleButton}.${F.disabled}`]:{borderTop:"1px solid transparent"}})),Ct=u.forwardRef(function(n,i){const c=ue({props:n,name:"MuiToggleButtonGroup"}),{children:r,className:x,color:v="standard",disabled:f=!1,exclusive:S=!1,fullWidth:j=!1,onChange:s,orientation:b="horizontal",size:w="medium",value:o}=c,$=X(c,ft),h=O({},c,{disabled:f,fullWidth:j,orientation:b,size:w}),d=jt(h),g=u.useCallback((a,T)=>{if(!s)return;const A=o&&o.indexOf(T);let _;o&&A>=0?(_=o.slice(),_.splice(A,1)):_=o?o.concat(T):[T],s(a,_)},[s,o]),B=u.useCallback((a,T)=>{s&&s(a,o===T?null:T)},[s,o]),k=u.useMemo(()=>({className:d.grouped,onChange:S?B:g,value:o,size:w,fullWidth:j,color:v,disabled:f}),[d.grouped,S,B,g,o,w,j,v,f]),R=it(r),l=R.length,p=a=>{const T=a===0,A=a===l-1;return T&&A?"":T?d.firstButton:A?d.lastButton:d.middleButton};return e.jsx(bt,O({role:"group",className:he(d.root,x),ref:i,ownerState:h},$,{children:e.jsx(ge.Provider,{value:k,children:R.map((a,T)=>e.jsx(me.Provider,{value:p(T),children:a},T))})}))}),vt=Ct,fe=t=>{const n=E();return u.useCallback((i,c)=>{Je({app_id:i.app.app[0].app_id,cnt_id:i.app.container[0].cnt_id},r=>{const x=r==null?void 0:r.data;if(y.debug("response data",x),Array.isArray(x)){const v=be(Ce.getState(),t)??[];y.debug(v);for(let f=0;f<x.length;f++){const S=oe(x[f]);if(S!==null&&S.cnt_id_master===i.app.container[0].cnt_id){const j=v.filter(s=>s.container.cnt_id===x[f].cnt_id);if(j.length===0){const s={appId:Re(),container:x[f]};n(ve({appId:t,detail:s}))}else{const b={appId:j[0].appId,container:x[f]};n(ye({appId:t,detail:b}))}}}}else y.error("error loading details",r),c!==void 0&&c()},r=>{y.error("error loading details",r),c!==void 0&&c()})},[t])},yt=t=>{const n=re(i=>Te(i,t));return y.debug("detailDisplayType",n),n},Tt=()=>{const[t,n]=u.useState(!1);return e.jsxs(W,{component:"div",children:["Only valid SQL. ",t?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:e.jsx(P,{sx:{cursor:"pointer"},underline:"none",onClick:()=>{n(!1)},children:"(hide examples)"})}),e.jsxs("ul",{style:{listStyle:"disc",padding:"0 40px"},children:[e.jsx("li",{children:"first_name like 'Sacha%'"}),e.jsx("li",{children:"product_id = httpPost['my_product_id'] and httpPost['my_product_id'] is not null"}),e.jsx("li",{children:"user_id = @wpda_wp_user_id"}),e.jsx("li",{children:"user_id in (select user_id from wp_usermeta where meta_key = 'wp_capabilities' and meta_value like '%coach%')"}),e.jsx("li",{children:"order_date between date_sub(now(), interval 1 week) and now()"}),e.jsx("li",{children:"status = 'send' and order_date > date_sub(now(), interval 1 week)"})]}),e.jsx("div",{children:e.jsx("strong",{children:"Advanced features:"})}),e.jsxs("ul",{style:{listStyle:"disc",padding:"0 40px",marginBottom:0},children:[e.jsxs("li",{children:["Session variable ",e.jsx("strong",{children:"@wpda_wp_user_id"})," is available to access the WordPress user ID.",e.jsx(P,{href:"https://wpdataaccess.com/docs/variable/wordpress-user-id-in-sql/",target:"_blank",style:{marginLeft:"5px",textDecoration:"none"},children:"(visit documentation page)"})]}),e.jsxs("li",{children:["The functions ",e.jsx("strong",{children:"httpGet"}),", ",e.jsx("strong",{children:"httpPost"})," and ",e.jsx("strong",{children:"httpRequest"})," can be used to access HTTP GET and POST parameters in a query. All functions return null when the requested parameter was not provided. The following condition returns no rows if no parameter was provided:",e.jsx("br",{}),e.jsx(m,{sx:{margin:"5px 20px"},children:e.jsxs("strong",{children:["where product_id = httpPost['my_product_id']",e.jsx("br",{}),"and httpPost['my_product_id'] is not null"]})}),"The condition below returns all rows if no parameter was provided:",e.jsx(m,{sx:{margin:"5px 20px"},children:e.jsxs("strong",{children:["where product_id = httpPost['my_product_id']",e.jsx("br",{}),"and httpPost['my_product_id'] is null"]})})]})]})]}):e.jsx("span",{children:e.jsx(P,{sx:{cursor:"pointer"},underline:"none",onClick:()=>{n(!0)},children:"(show examples)"})})]})},ee=t=>{const n=E();return c=>{n(_e({appId:t,isUpdated:c}))}},ie=({appId:t,app:n,relationship:i,metaData:c,isRelationTable:r})=>{y.debug(t,n,i,c);const x=E(),v=ee(t),[f,S]=u.useState(i.sql!==void 0&&i.sql!==""),[j,s]=u.useState(r?i.relationJoins.split(",").map(h=>{const d=h.split("=");return{masterColumn:d[0],detailColumn:d[1]??""}}):i.joins.split(",").map(h=>{const d=h.split("=");return{masterColumn:d[0],detailColumn:d[1]??""}}));y.debug("joins",j),u.useEffect(()=>{const h={...i};r?h.relationJoins=j.map(d=>d.masterColumn+"="+d.detailColumn).join(","):h.joins=j.map(d=>d.masterColumn+"="+d.detailColumn).join(","),x(q({appId:t,relationship:h})),v(!0)},[j]);const b=r?i.tbl:c.app.container[0].cnt_tbl,w=r?i.cls:c.app.container[0].cnt_cls===void 0||c.app.container[0].cnt_cls===null||c.app.container[0].cnt_cls===""?{}:JSON.parse(c.app.container[0].cnt_cls),o=r?n.appRelationTable:n.appTable,$=r?n.appRelationColumns:n.appColumns;return e.jsxs(m,{children:[...j.map((h,d)=>e.jsxs(m,{sx:{display:"grid",marginTop:"10px"},children:[e.jsxs(m,{sx:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) 20px minmax(0, 1fr) auto",alignItems:"center"},children:[e.jsxs(N,{children:[e.jsx(Q,{variant:"outlined",children:"master *"}),e.jsxs(K,{MenuProps:{id:"pp-select-menu"},label:"master *",value:h.masterColumn,onChange:g=>{const B=[...j];B[d].masterColumn=g.target.value,s(B),v(!0)},children:[...w.map(g=>g.isSelected?e.jsxs(L,{value:g.columnName,children:[b,".",g.columnName]}):null)]})]}),e.jsx(m,{sx:{textAlign:"center"},children:"="}),e.jsxs(N,{children:[e.jsx(Q,{variant:"outlined",children:"detail *"}),e.jsxs(K,{MenuProps:{id:"pp-select-menu"},label:"detail *",value:h.detailColumn,onChange:g=>{const B=[...j];B[d].detailColumn=g.target.value,s(B),v(!0)},children:[...$.map(g=>g.isSelected?e.jsxs(L,{value:g.columnName,children:[o,".",g.columnName]}):null)]})]}),e.jsx(m,{children:d===0?e.jsx(V,{title:"Add condition",children:e.jsx(Z,{color:"primary",onClick:()=>{const g=[...j];g.push({masterColumn:"",detailColumn:""}),s(g),v(!0)},children:e.jsx(qe,{})})}):e.jsx(V,{title:"Delete condition",children:e.jsx(Z,{color:"primary",onClick:()=>{const g=[...j];g.splice(d,1),s(g),v(!0)},children:e.jsx(Le,{})})})})]}),e.jsx(m,{children:e.jsx(N,{children:e.jsx(W,{children:"Updating requires a table reload."})})})]})),e.jsx(m,{sx:{marginTop:"20px"},children:f?e.jsxs(N,{fullWidth:!0,children:[e.jsx(ae,{fullWidth:!0,label:"Optional conditions",multiline:!0,minRows:1,maxRows:10,value:r?i.relationSql:i.sql,placeholder:"Use this field to add additional conditions to show specific details only or leave blank",onChange:h=>{const d={...i};r?d.relationSql=h.target.value:d.sql=h.target.value,x(q({appId:t,relationship:d})),v(!0)}}),e.jsx(Tt,{})]}):e.jsxs(P,{onClick:()=>S(!0),sx:{textDecoration:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:"5px"},children:[e.jsx(Ae,{}),e.jsx("span",{children:"Add SQL conditions"})]})}),i.cardinality===z.ONE_TO_ONE&&e.jsx(m,{sx:{marginTop:"20px"},children:e.jsx(N,{fullWidth:!0,children:e.jsx(W,{children:"A join for a 1:1 relationship must return exactly one record. An error is shown when a detail query returns more than 1 record."})})})]})},_t=({appId:t,metaData:n,isUpdating:i,initialRelationships:c,initialTitle:r,embedded:x,enableWizard:v})=>{const f=E(),S=fe(t),j=ee(t),s=Pe(),[b,w]=u.useState(x);y.debug("typeSelected",b);const o=re(l=>Be(l));y.debug("relationship",o),u.useEffect(()=>{const l={...o};l.title=s.appTitle??"",l.dbs=s.appDatabase??"",l.tbl=s.appTable??"",l.cls=s.appColumns,l.relationTbl=s.appRelationTable??"",l.relationCls=s.appRelationColumns,f(q({appId:t,relationship:l}))},[s.appDatabase,s.appTable,s.appRelationTable,s.appColumns,s.appRelationColumns,s.appTitle]);const[$,h]=u.useState(""),d=u.useMemo(()=>o.cardinality===z.MANY_TO_MANY?["Relationship title","Select join table","Define join table join condition","Select relation table","Define relation table join condition"]:["Relationship title","Select data source","Define join condition"],[o.cardinality]),[g,B]=u.useState(0),k=l=>{switch(y.debug(l),l){case 0:if(s.appTitle===""||s.appTitle===null||r!==s.appTitle&&c.filter(p=>p.title===s.appTitle).length>0)return h("title"),!1;h("");break;case 1:if(s.appDatabase===""||s.appDatabase===null||s.appTable===""||s.appTable===null||s.appColumns.filter(p=>p.isSelected===!0).length===0)return!1;h("");break;case 2:if(o.joins==="=")return!1;h("");break;case 3:if(s.appRelationColumns.filter(p=>p.isSelected===!0).length===0)return!1;h("");break;case 4:if(o.relationJoins==="=")return!1;h("");break}return!0},R=l=>(y.debug(l),e.jsxs(m,{sx:{display:"grid",gridTemplateColumns:"1fr 1fr",justifyContent:"space-between",alignItems:"center",gap:"5px"},children:[l===0?e.jsx(m,{}):e.jsx(U,{variant:"contained",startIcon:e.jsx($e,{}),onClick:()=>{B(l-1)},children:"Previous"}),l===2&&o.cardinality!==z.MANY_TO_MANY||l===4&&o.cardinality===z.MANY_TO_MANY?e.jsx(U,{variant:"contained",startIcon:e.jsx(ke,{}),onClick:()=>{k(l)&&B(l+1)},children:"Finish"}):e.jsx(U,{variant:"contained",endIcon:e.jsx(le,{}),onClick:()=>{k(l)&&B(l+1)},children:"Next"})]}));return b?e.jsxs(e.Fragment,{children:[e.jsx(Qe,{activeStep:g,orientation:"vertical",sx:{marginBottom:0},children:d.map((l,p)=>e.jsxs(Ke,{children:[e.jsx(Xe,{children:l}),e.jsx(Ze,{children:e.jsxs(m,{sx:{display:"grid",gap:"20px",marginTop:"20px"},children:[p===0&&e.jsxs(e.Fragment,{children:[e.jsx(ae,{type:"text",label:"Title",error:$==="title",value:s.appTitle,fullWidth:!0,required:!0,helperText:"Container title (must be unique witin this form)",autoComplete:"off",onChange:a=>{f(Se({appTitle:a.target.value}));const T={...o};T.title=a.target.value,f(q({appId:t,relationship:T})),j(!0)}}),R(p)]}),p===1&&e.jsxs(e.Fragment,{children:[e.jsx(Ue,{}),e.jsx(ne,{isDetail:!0}),e.jsx(se,{app:s}),R(p)]}),p===2&&e.jsxs(e.Fragment,{children:[e.jsx(ie,{appId:t,app:s,metaData:n,relationship:o}),R(p)]}),o.cardinality===z.MANY_TO_MANY&&p===3&&e.jsxs(e.Fragment,{children:[e.jsx(ne,{isDetail:!0,isRelationTable:!0}),e.jsx(se,{app:s,isRelationTable:!0}),R(p)]}),o.cardinality===z.MANY_TO_MANY&&p===4&&e.jsxs(e.Fragment,{children:[e.jsx(ie,{appId:t,app:s,metaData:n,relationship:o,isRelationTable:!0}),R(p)]})]})})]},l))}),g===d.length&&e.jsxs(m,{sx:{marginTop:"20px",display:"grid",gap:"20px"},children:[e.jsx(m,{children:"Relationship wizard successfully completed. Click button below to activate."}),e.jsx(U,{fullWidth:!0,variant:"contained",onClick:()=>{const l={app_id:n.app.container[0].app_id,app_title:o.title,app_dbs:o.dbs,app_tbl:o.tbl,app_cls:o.cls},p={cnt_id_master:n.app.container[0].cnt_id,cardinality:o.cardinality,join_condition:o.joins,sql:o.sql};o.cardinality===z.MANY_TO_MANY&&(p.relation_tbl=o.relationTbl,p.relation_cls=o.relationCls,p.relation_join_condition=o.relationJoins,p.relation_sql=o.relationSql),l.app_relation=JSON.stringify(p),i?(l.app_cnt=s.appCntId,Ve(l,a=>{y.debug(a),(a==null?void 0:a.code)==="ok"&&(a==null?void 0:a.message)===""?(v(!1),M("Relationship updated",{variant:"success"}),S(n,()=>{M(D.contactSupport,{variant:"error"})}),j(!1)):M(D.contactSupport,{variant:"error"})},a=>{y.error(a),M(D.contactSupport,{variant:"error"})},!1)):He(l,a=>{y.debug(a),(a==null?void 0:a.code)==="ok"&&(a==null?void 0:a.message)===""?(v(!1),M("Relationship created",{variant:"success"}),S(n,()=>{M(D.contactSupport,{variant:"error"})}),j(!1)):M(D.contactSupport,{variant:"error"})},a=>{y.error(a),M(D.contactSupport,{variant:"error"})},!1)},children:i?"Update relationship":"Create relationship"})]})]}):e.jsx(m,{children:e.jsxs(N,{fullWidth:!0,children:[e.jsxs(vt,{fullWidth:!0,color:"primary",exclusive:!0,value:o.cardinality,onChange:(l,p)=>{if(p!==null){const a={...o};a.cardinality=p,f(q({appId:t,relationship:a}))}j(!0),w(!0)},children:[e.jsx(H,{value:z.ONE_TO_ONE,children:"1:1"}),e.jsx(H,{value:z.ONE_TO_MANY,children:"1:m"}),e.jsx(H,{value:z.MANY_TO_MANY,children:"m:m"})]}),e.jsx(W,{children:"Select cardinality."})]})})},Bt=({children:t,appId:n,embedded:i,enableWizard:c})=>{const r=ee(n),x=()=>e.jsxs(m,{children:[e.jsx(m,{sx:{paddingTop:"30px"},children:t}),e.jsx(V,{title:"Close",sx:{position:"absolute",top:0,right:"8px"},children:e.jsx(Z,{onClick:()=>{c(!1),r(!1)},children:e.jsx(ze,{})})})]});return i?e.jsxs(m,{sx:{marginLeft:"-10px",marginRight:"-10px",position:"relative"},children:[e.jsx(Ye,{component:"div",sx:{height:"40px",display:"flex",alignItems:"center",marginBottom:"-10px"},children:"Relationship Wizard"}),x()]}):e.jsx(m,{children:e.jsxs("fieldset",{className:"pp-fieldset",style:{padding:"20px",position:"relative"},children:[e.jsx("legend",{children:"Relationship Wizard"}),x()]})})},Lt=({appId:t,updateSettings:n})=>{var R;y.debug(t);const i=E();Me();const c=yt(t),r=Oe(t);Ne(),fe(t);const[x,v]=u.useState(!1);y.debug("wizardOn",x);const[f,S]=u.useState(!1);y.debug("wizardIsUpdating",f);const[j,s]=u.useState("");y.debug("wizardTitle",j);const b=We(t);y.debug(b);const[w,o]=u.useState([]);y.debug(w),u.useEffect(()=>{var p,a;const l=[];if(r!==void 0&&r.length>0&&((p=b==null?void 0:b.app)==null?void 0:p.container)!==void 0&&Array.isArray((a=b==null?void 0:b.app)==null?void 0:a.container)){const T=b.app.container[0].cnt_id,A=b.app.container[0].cnt_tbl;for(let _=0;_<r.length;_++){const Y=oe(r[_].container);if(Y!==null&&Y.cnt_id_master===T){const je=r[_].appId;l.push({appId:je,dbAppId:r[_].container.app_id,cntId:r[_].container.cnt_id,title:r[_].container.cnt_title,dbs:r[_].container.cnt_dbs,tbl:r[_].container.cnt_tbl,cls:r[_].container.cnt_cls===void 0||r[_].container.cnt_cls===null||r[_].container.cnt_cls===""?{}:JSON.parse(r[_].container.cnt_cls),relation:Y,parentTbl:A})}}}o(l)},[t,(R=b==null?void 0:b.app)==null?void 0:R.container,r]),u.useState(""),u.useState(-1);const[$,h]=u.useState(!1);u.useState("");const[d,g]=u.useState(!1),[B,k]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(nt,{defaultExpanded:!1,disableGutters:!0,children:[e.jsx(st,{expandIcon:e.jsx(De,{}),children:"Relationships"}),e.jsxs(Ee,{children:[e.jsx(m,{sx:{marginBottom:"30px"},children:x?e.jsx(e.Fragment,{children:!f&&e.jsx(Bt,{appId:t,embedded:!1,enableWizard:v,children:e.jsx(_t,{appId:t,embedded:!1,metaData:b,isUpdating:f,enableWizard:v,initialRelationships:w,initialTitle:""})})}):e.jsx(U,{variant:"contained",fullWidth:!0,disabled:!0,startIcon:e.jsx(Fe,{}),endIcon:e.jsx(le,{}),onClick:()=>{},children:"Start relationship wizard"})}),!1,e.jsx(e.Fragment,{children:w.length>0&&e.jsx(m,{sx:{marginTop:"30px"},children:e.jsxs(N,{fullWidth:!0,children:[e.jsx(Q,{variant:"outlined",children:"Display type"}),e.jsxs(K,{MenuProps:{id:"pp-select-menu"},value:c,label:"Display type",onChange:l=>{i(we({appId:t,displayType:l.target.value})),n(!0)},children:[e.jsx(L,{value:J.ACOORDION,children:"Accordion"}),e.jsx(L,{value:J.TAB,children:"Tabs"}),e.jsx(L,{value:J.TITLE,children:"Titles"})]}),e.jsx(W,{children:"Select how relationships should be displayed."})]})})}),e.jsxs(W,{component:"div",sx:{marginTop:"30px"},children:[e.jsxs(P,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>g(!d),children:[e.jsx(te,{}),"How to use the relationship wizard?"]}),d&&e.jsxs(m,{sx:{marginTop:"20px",marginBottom:"30px",display:"grid",gap:"20px"},children:[e.jsx(m,{children:"The following relationship types are supported:"}),e.jsxs("ul",{style:{listStyle:"disc",padding:"0 40px"},children:[e.jsx("li",{children:"one to one relationship (1:1)"}),e.jsx("li",{children:"one to many relationship (1:m)"}),e.jsx("li",{children:"many to many relationship (m:m)"})]}),e.jsxs(m,{children:["To add a relationship, click the ",e.jsx("strong",{children:"start relationship wizard"})," button and follow the instructions. Relationships are added to the bottom of the form. Use the display type to define how relationships are displayed (possible values are: ",e.jsx("strong",{children:"Accordion"}),", ",e.jsx("strong",{children:"Tabs"})," or ",e.jsx("strong",{children:"Titles"}),")."]})]})]}),e.jsxs(W,{component:"div",children:[e.jsxs(P,{sx:{textDecoration:"none",cursor:"pointer",display:"inline-flex","& svg":{fontSize:"1rem",marginRight:"2px"}},onClick:()=>k(!B),children:[e.jsx(te,{}),"How to create a multi level master detail form?"]}),B&&e.jsx(m,{sx:{marginTop:"20px",display:"grid",gap:"20px"},children:e.jsxs(m,{children:["Add a ",e.jsx("strong",{children:"relationship"})," to the ",e.jsx("strong",{children:"master table"})," using the ",e.jsx("strong",{children:"relationship wizard"}),". Open the ",e.jsx("strong",{children:"detail table"}),". Open the ",e.jsx("strong",{children:"Table Builder"})," from the ",e.jsx("strong",{children:"detail table"})," or navigate to the ",e.jsx("strong",{children:"detail form"})," to open the ",e.jsx("strong",{children:"Form Builder"}),". The buttons to access the ",e.jsx("strong",{children:"Table Builders"})," and ",e.jsx("strong",{children:"Form Builders"})," are available in the footer. Open the ",e.jsx("strong",{children:"Relationships"})," section and start the ",e.jsx("strong",{children:"relationship wizard"}),"."]})})]}),e.jsx(tt,{})]})]}),$&&e.jsx(et,{title:"Delete Relationship?",message:"Are you sure you want to delete this relationship? This action cannot be undone!",open:$,setOpen:h,onConfirm:()=>{}})]})};export{Tt as D,Lt as S,vt as T,fe as U,H as a,ee as u};
