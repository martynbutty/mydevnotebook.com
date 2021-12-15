"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[945],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,d=p["".concat(l,".").concat(h)]||p[h]||m[h]||o;return n?i.createElement(d,r(r({ref:t},u),{},{components:n})):i.createElement(d,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6174:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],s={title:"Commonality Variability Analysis"},l=void 0,c={unversionedId:"Design Patterns and Principles/cva",id:"Design Patterns and Principles/cva",title:"Commonality Variability Analysis",description:"A principle of good software design is to separate things that change from those that do not. Commonality variability",source:"@site/docs/Design Patterns and Principles/cva.md",sourceDirName:"Design Patterns and Principles",slug:"/Design Patterns and Principles/cva",permalink:"/Design Patterns and Principles/cva",tags:[],version:"current",frontMatter:{title:"Commonality Variability Analysis"},sidebar:"tutorialSidebar",previous:{title:"Compound Patterns",permalink:"/Design Patterns and Principles/compound"},next:{title:"Decorator Pattern",permalink:"/Design Patterns and Principles/decorator"}},u=[{value:"Benefits",id:"benefits",children:[],level:3},{value:"Commonality Analysis",id:"commonality-analysis",children:[],level:3},{value:"Variability Analysis",id:"variability-analysis",children:[],level:3},{value:"Tips",id:"tips",children:[],level:3}],m={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A principle of good software design is to separate things that change from those that do not. Commonality variability\nanalysis is a way of achieving this."),(0,o.kt)("h3",{id:"benefits"},"Benefits"),(0,o.kt)("p",null,"Commonality variability analysis helps us to focus on interfaces and stop us from looking at implementation too soon.\nIt leads us to hide the implementation by focussing on the abstractions first. It encourages us to look at the high and\nlow level aspects of design, but separately. It helps us to design by contract, thus creating an architecture that is more testable."),(0,o.kt)("h3",{id:"commonality-analysis"},"Commonality Analysis"),(0,o.kt)("p",null,"This is the search for common elements that help us understand how members are the same. They are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Recognised from experience - e.g. lots of different species of tree have the commonality of being a tree."),(0,o.kt)("li",{parentName:"ul"},"Deduced through analysis (abstracted) - e.g. pens are writing instruments made from plastic, have caps, same shape etc.")),(0,o.kt)("p",null,"The commonalities define the basic concepts in a problem domain. Avoid thinking just in terms of data or function,\nfor example, a pen and a book may be classed as common because they are used for teaching/communication, or are both portable."),(0,o.kt)("h3",{id:"variability-analysis"},"Variability Analysis"),(0,o.kt)("p",null,"This is the next step after deciding on a commonality. It should be done within the context of the commonality by asking,\nhow do these things vary. Using an example of different kinds of pen, if the commonality is \"writing instrument\", then\nthe variability's might be what they can write on and line thickness etc. However, if the commonality is \"plastic things\",\nthen the previous variability's don't apply and instead we should have variability's like type of plastic and amount of plastic."),(0,o.kt)("p",null,'In the case of the "writing instrument" commonality, a (traditional) pencil would plug in to this model. However it would\nnot plug in to the "plastic things" commonality. Therefore if you know that you want to extend your commonality to include\npencils, then "plastic things" is probably not the correct commonality.'),(0,o.kt)("h3",{id:"tips"},"Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When looking at something within the problem domain, ask yourself is it a particular way of doing something (a variation),\nor is it a concept (a way of conceptually thinking about different ways of doing things) (commonality)."),(0,o.kt)("li",{parentName:"ul"},"If something is a variability, what is it a variation of? this becomes the base class or interface."),(0,o.kt)("li",{parentName:"ul"},"If something is a commonality, then it is a base class or interface - think about the different ways in which it can vary."),(0,o.kt)("li",{parentName:"ul"},"If something is neither a commonality or variability, it may be just a stand-alone function. Identify this as a\nprobable object and consider if this should have an interface to hide it, or if it should be dealt with concretely.")),(0,o.kt)("p",null,'You are looking for the "is-a" relationships. Other relationships such as "uses", "contains", "builds" or "knows-of",\nand grouping things just because they go together are not a part of commonality variability analysis. These are what\ndesign patterns are concerned with, so these relationships should be dealt with later to avoid prematurely coupling objects.'),(0,o.kt)("p",null,"Not all commonalities are useful, so don't be afraid to discard some."))}p.isMDXComponent=!0}}]);