"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[956],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9185:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var r=n(3117),a=(n(7294),n(3905));const i={title:"The Strategy Pattern"},o=void 0,s={unversionedId:"Design Patterns and Principles/strategy",id:"Design Patterns and Principles/strategy",title:"The Strategy Pattern",description:"strategy pattern class diagram",source:"@site/docs/Design Patterns and Principles/strategy.md",sourceDirName:"Design Patterns and Principles",slug:"/Design Patterns and Principles/strategy",permalink:"/Design Patterns and Principles/strategy",draft:!1,tags:[],version:"current",frontMatter:{title:"The Strategy Pattern"},sidebar:"tutorialSidebar",previous:{title:"The Fragile Base Class Problem",permalink:"/Design Patterns and Principles/fragile"}},c={},l=[],p={toc:l},u="wrapper";function f(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"strategy pattern class diagram",src:n(4131).Z,width:"1024",height:"407"})),(0,a.kt)("p",null,"The GoF describe the strategy pattern as;"),(0,a.kt)("p",null,"Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from clients that use it."),(0,a.kt)("p",null,"The strategy pattern enables you to use different rules or algorithms depending on the context they occur. For example in a system calculating the tax due on different assetts, different tax rules (algorithms) are used depending on the type of asset being considered."),(0,a.kt)("p",null,"The strategy pattern defines a family of algorithms. It helps to eliminate complex switches and conditionals (if...elseif...else). The algorithms are invoked the same way (as they must all have the same ",(0,a.kt)("em",{parentName:"p"},"interface"),")."),(0,a.kt)("p",null,"The class that uses the algorithm (Context) contains an abstract class (Strategy) that has an abstract method which specifies how to call the algorithm. Each derived class (ConcreteStrategy) implements the algorithm as needed. Typically, the responsibility for selecting which concrete implementation to use is done by the client object, and is given to the context object of the strategy pattern."))}f.isMDXComponent=!0},4131:function(e,t,n){t.Z=n.p+"assets/images/strategy_pattern-4a7a35ea12a3f4ecfc8d51588e5ee8a6.png"}}]);