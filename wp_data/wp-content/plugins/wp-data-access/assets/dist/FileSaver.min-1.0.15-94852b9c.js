import{d3 as c,ba as j}from"./main-1.0.15.js";var E={exports:{}};(function(h,R){(function(p,i){i()})(c,function(){function p(e,t){return typeof t>"u"?t={autoBom:!1}:typeof t!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function i(e,t,r){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){u(o.response,t,r)},o.onerror=function(){console.error("could not download file")},o.send()}function v(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return 200<=t.status&&299>=t.status}function l(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof c=="object"&&c.global===c?c:void 0,m=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!m?function(e,t,r){var o=a.URL||a.webkitURL,n=document.createElement("a");t=t||e.name||"download",n.download=t,n.rel="noopener",typeof e=="string"?(n.href=e,n.origin===location.origin?l(n):v(n.href)?i(e,t,r):l(n,n.target="_blank")):(n.href=o.createObjectURL(e),setTimeout(function(){o.revokeObjectURL(n.href)},4e4),setTimeout(function(){l(n)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,r){if(t=t||e.name||"download",typeof e!="string")navigator.msSaveOrOpenBlob(p(e,r),t);else if(v(e))i(e,t,r);else{var o=document.createElement("a");o.href=e,o.target="_blank",setTimeout(function(){l(o)})}}:function(e,t,r,o){if(o=o||open("","_blank"),o&&(o.document.title=o.document.body.innerText="downloading..."),typeof e=="string")return i(e,t,r);var n=e.type==="application/octet-stream",b=/constructor/i.test(a.HTMLElement)||a.safari,w=/CriOS\/[\d]+/.test(navigator.userAgent);if((w||n&&b||m)&&typeof FileReader<"u"){var d=new FileReader;d.onloadend=function(){var s=d.result;s=w?s:s.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=s:location=s,o=null},d.readAsDataURL(e)}else{var y=a.URL||a.webkitURL,f=y.createObjectURL(e);o?o.location=f:location.href=f,o=null,setTimeout(function(){y.revokeObjectURL(f)},4e4)}});a.saveAs=u.saveAs=u,h.exports=u})})(E);var L=E.exports;const A=j(L);export{A as F};
