import{l as U,j as h,dZ as y,dY as F}from"./main-1.0.15.js";import{an as g}from"./main-1.0.15-e2ad00f6.js";import{T as L}from"./TextField-1.0.15-73384817.js";import{I as b}from"./InputAdornment-1.0.15-4ec316af.js";import"./iconBase-1.0.15-5866dbfd.js";import"./Close-1.0.15-8d33e66c.js";import"./Menu-1.0.15-3ae4ddd1.js";const Z=({columnName:s,columnValue:T,columnInitialValue:i,columnMetaData:p,storeColumn:e,columnValidation:r,onColumnChange:d,metaData:E,storeForm:f,formMode:x,locale:v})=>{var A,_,j,I;U.debug(s,T,i,p,e,r,E,f,x,v);const O={maxLength:p.character_maximum_length,className:e.classNames,readOnly:x===g.VIEW||x===g.UPDATE&&E.primary_key.includes(s)},P=r!=null&&r.error?r==null?void 0:r.text:v.enterText+" ("+p.character_maximum_length+")";return h.jsx(L,{error:r==null?void 0:r.error,label:p.formLabel,value:T??"",required:p.is_nullable==="NO",inputProps:O,InputProps:{startAdornment:(e==null?void 0:e.prefix)&&h.jsx(b,{position:"start",children:(_=(A=e==null?void 0:e.prefix)==null?void 0:A.trimStart())==null?void 0:_.trimEnd()}),endAdornment:(e==null?void 0:e.suffix)&&h.jsx(b,{position:"end",children:(I=(j=e==null?void 0:e.suffix)==null?void 0:j.trimStart())==null?void 0:I.trimEnd()})},helperText:y(e,P),variant:F(),onChange:t=>{let S=t.target.value;t.target.value===""&&(x===g.INSERT||x===g.UPDATE&&f.preserveSpacesOnUpdate===!1||f.preserveSpacesOnUpdate===!0&&i!=="")&&(S=null),d(s,S)},onInvalid:t=>{t.preventDefault()},sx:{"& input":{textAlign:e.alignment}}})};export{Z as default};
