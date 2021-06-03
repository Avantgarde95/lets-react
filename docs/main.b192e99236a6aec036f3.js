!function(){"use strict";var e,t={251:function(e,t,n){var r=n(294),o=n(935),c=(0,r.createContext)({}),l={title:"Let's react",sections:[{title:"React",subsections:[{title:"About",content:{}},{title:"Component",content:{}},{title:"JSX",content:{}},{title:"Context",content:{}}]},{title:"Webpack",subsections:[{title:"About",content:{}}]},{title:"MobX",subsections:[{title:"About",content:{}}]}]},a=function(e){var t=e.children;return r.createElement(c.Provider,{value:{article:l}},t)},i=function(e){var t=e.subsection;return r.createElement("div",{className:"SubsectionItem",onClick:function(){}},t.title)},u=function(e){var t=e.section,n=e.isSelected,o=e.onClick;return r.createElement("div",{className:"SectionItem"},r.createElement("div",{className:"Button ".concat(n?"selected":""),onClick:o},t.title),n&&r.createElement("div",{className:"Dropdown"},t.subsections.map((function(e){return r.createElement(i,{subsection:e})}))))};function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=function(){var e,t,n=(0,r.useContext)(c).article,o=(e=(0,r.useState)(0),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,c=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=o[0],a=o[1];return r.createElement("div",{className:"Explorer"},n.sections.map((function(e,t){return r.createElement(u,{section:e,isSelected:t===l,onClick:function(){a(t)}})})))},m=function(){return r.createElement("div",{className:"Viewer"})},v=function(){var e=(0,r.useContext)(c).article;return r.createElement("div",{className:"Header"},e.title)},d=function(){return r.createElement("div",{className:"Content"},r.createElement(f,null),r.createElement(m,null))},p=function(){return r.createElement(a,null,r.createElement("div",{className:"App"},r.createElement(v,null),r.createElement(d,null)))};(0,o.render)(r.createElement(p,null),document.getElementsByClassName("Root")[0])}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var c=n[e]={exports:{}};return t[e](c,c.exports,r),c.exports}r.m=t,e=[],r.O=function(t,n,o,c){if(!n){var l=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],c=e[u][2];for(var a=!0,i=0;i<n.length;i++)(!1&c||l>=c)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(a=!1,c<l&&(l=c));a&&(e.splice(u--,1),t=o())}return t}c=c||0;for(var u=e.length;u>0&&e[u-1][2]>c;u--)e[u]=e[u-1];e[u]=[n,o,c]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,c,l=n[0],a=n[1],i=n[2],u=0;for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(i)var s=i(r);for(t&&t(n);u<l.length;u++)c=l[u],r.o(e,c)&&e[c]&&e[c][0](),e[l[u]]=0;return r.O(s)},n=self.webpackChunklets_react=self.webpackChunklets_react||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[935],(function(){return r(251)}));o=r.O(o)}();