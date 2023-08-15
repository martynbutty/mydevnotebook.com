"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[769],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,b=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(b,i(i({ref:t},l),{},{components:r})):n.createElement(b,i({ref:t},l))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7567:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var n=r(3117),o=(r(7294),r(3905));const a={title:"Aurora Serverless Backup Configuration",description:"Considerations and costs of backups of an Aurora database cluster",authors:["martyn"],hide_table_of_contents:!1},i=void 0,s={permalink:"/blog/2023/08/15/Aurora-backups",source:"@site/blog/2023-08-15-Aurora-backups/index.md",title:"Aurora Serverless Backup Configuration",description:"Considerations and costs of backups of an Aurora database cluster",date:"2023-08-15T00:00:00.000Z",formattedDate:"August 15, 2023",tags:[],readingTime:4.4,hasTruncateMarker:!0,authors:[{name:"Martyn Butterworth",title:"Technical Architect",url:"https://github.com/MartynButty",imageURL:"https://github.com/MartynButty.png",key:"martyn"}],frontMatter:{title:"Aurora Serverless Backup Configuration",description:"Considerations and costs of backups of an Aurora database cluster",authors:["martyn"],hide_table_of_contents:!1},nextItem:{title:"Aurora Serverless Database Selection",permalink:"/blog/2023/08/01/Aurora-Serverless-database-selection"}},c={authorsImageUrls:[void 0]},u=[],l={toc:u},p="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In a previous article ",(0,o.kt)("a",{parentName:"p",href:"/blog/2023/08/01/Aurora-Serverless-database-selection"},"Aurora Serverless database selection"),", I discussed the high level considerations around selecting or upgrading to an Aurora server-less V2 database."),(0,o.kt)("p",null,"If you decided that Aurora V2 is the way to go for your needs, one important but sometimes overlooked aspect is disaster recovery (DR), and in particular the backup configuration of your database. The following discusses some of the main points for configuring backups of an Aurora server-less V2 database."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(7453).Z,width:"5000",height:"3760"})))}f.isMDXComponent=!0},7453:function(e,t,r){t.Z=r.p+"assets/images/error-something-went-wrong-construction-concept-1c173d06b0251b9bd3dc71b03a1bb01a.jpg"}}]);