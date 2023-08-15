"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[937],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,y=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4727:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l}});var r=n(3117),a=(n(7294),n(3905));const o={title:"The Facade Pattern"},i=void 0,s={unversionedId:"Design Patterns and Principles/facade",id:"Design Patterns and Principles/facade",title:"The Facade Pattern",description:"Facade pattern class diagram",source:"@site/docs/Design Patterns and Principles/facade.md",sourceDirName:"Design Patterns and Principles",slug:"/Design Patterns and Principles/facade",permalink:"/Design Patterns and Principles/facade",draft:!1,tags:[],version:"current",frontMatter:{title:"The Facade Pattern"},sidebar:"tutorialSidebar",previous:{title:"Design Principles",permalink:"/Design Patterns and Principles/design-principles"},next:{title:"The Factory Method Pattern",permalink:"/Design Patterns and Principles/factory"}},c={},l=[{value:"Key Features",id:"key-features",level:2},{value:"Intent",id:"intent",level:3},{value:"Problem",id:"problem",level:3},{value:"Solution",id:"solution",level:3},{value:"Consequences",id:"consequences",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Facade pattern class diagram",src:n(3246).Z,width:"600",height:"508"})),(0,a.kt)("p",null,"The Fa\xe7ade pattern enables us to use a complex system more easily, either to use just a subset of the system or to use the system in a particular way. You would use this pattern if you had a complicated system and wanted an easy to use interface to it, or to have a customised way of using it."),(0,a.kt)("h2",{id:"key-features"},"Key Features"),(0,a.kt)("h3",{id:"intent"},"Intent"),(0,a.kt)("p",null,"you want to simplify how to use an existing system. You need to define your own interface."),(0,a.kt)("h3",{id:"problem"},"Problem"),(0,a.kt)("p",null,"you need to use only a subset of a complex system, or you need to interact with a system in a particular way."),(0,a.kt)("h3",{id:"solution"},"Solution"),(0,a.kt)("p",null,"the Fa\xe7ade presents a new simpler interface for the client of the existing system and reduces the number of objects to deal with."),(0,a.kt)("h3",{id:"consequences"},"Consequences"),(0,a.kt)("p",null,"certain functionality may not be available to the client, but also new methods can be written for new functionality. It may also be used to hide or encapsulate the system."))}d.isMDXComponent=!0},3246:function(e,t,n){t.Z=n.p+"assets/images/facade_pattern-e21bf4b70c3399e3637b935a8b327453.png"}}]);