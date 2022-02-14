"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[467],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1909:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Compound Patterns"},s=void 0,c={unversionedId:"Design Patterns and Principles/compound",id:"Design Patterns and Principles/compound",title:"Compound Patterns",description:"Compound patterns class diagram",source:"@site/docs/Design Patterns and Principles/compound.md",sourceDirName:"Design Patterns and Principles",slug:"/Design Patterns and Principles/compound",permalink:"/Design Patterns and Principles/compound",tags:[],version:"current",frontMatter:{title:"Compound Patterns"},sidebar:"tutorialSidebar",previous:{title:"Composition vs Inheritance",permalink:"/Design Patterns and Principles/composition"},next:{title:"Commonality Variability Analysis",permalink:"/Design Patterns and Principles/cva"}},p=[],m={toc:p};function u(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Compound patterns class diagram",src:n(2004).Z})),(0,o.kt)("p",null,"A lot of patterns work together very well to form compound patterns. Shown is a UML class diagram that implements various\ndesign patterns to form a compound pattern. Here are some notes describing how and why this design was arrived at."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Polymorphism")," was introduced by the use of the",(0,o.kt)("inlineCode",{parentName:"li"},"Quackable")," ",(0,o.kt)("strong",{parentName:"li"},"interface"),". This makes a number of design patterns\navailable to us."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("strong",{parentName:"li"},"decorator pattern")," is used to allow us to track the number of times the method quack() is called. Using the\ndecorator pattern means we don't have to modify ",(0,o.kt)("inlineCode",{parentName:"li"},"Duck")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"DuckCall"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"QuackDecorator")," ",(0,o.kt)("em",{parentName:"li"},"implements")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Quackable")," so it can be referenced as a ",(0,o.kt)("inlineCode",{parentName:"li"},"Quackable")," type"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"QuackDecorator")," ",(0,o.kt)("em",{parentName:"li"},"has a")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Quackable")," instance variable so it can be passed a ",(0,o.kt)("inlineCode",{parentName:"li"},"Quackable")," type"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"QuackDecorator")," is the first object in the chain, so it's ",(0,o.kt)("inlineCode",{parentName:"li"},"quack()")," method is called first. This allows it to\nupdate a counter variable, then call the ",(0,o.kt)("inlineCode",{parentName:"li"},"quack()")," of its ",(0,o.kt)("inlineCode",{parentName:"li"},"Quackable")," instance variable"))),(0,o.kt)("li",{parentName:"ol"},"To use the ",(0,o.kt)("inlineCode",{parentName:"li"},"Goose")," class, the ",(0,o.kt)("strong",{parentName:"li"},"adapter pattern")," is utilised so that we can convert the call to ",(0,o.kt)("inlineCode",{parentName:"li"},"Goose"),"'s ",(0,o.kt)("inlineCode",{parentName:"li"},"honk()"),"\nmethod to ",(0,o.kt)("inlineCode",{parentName:"li"},"Quackables")," ",(0,o.kt)("inlineCode",{parentName:"li"},"quack()")," method. Note that ",(0,o.kt)("inlineCode",{parentName:"li"},"GooseAdapter")," ",(0,o.kt)("em",{parentName:"li"},"implements")," ",(0,o.kt)("inlineCode",{parentName:"li"},"Quackable")," so we can refer to all\nour objects as the same ",(0,o.kt)("inlineCode",{parentName:"li"},"Quackable")," type."),(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("strong",{parentName:"li"},"factory pattern method")," is used to create our objects, so that we separate object creation from object use.")))}u.isMDXComponent=!0},2004:function(e,t,n){t.Z=n.p+"assets/images/compound_patterns-2bf175b07bdf36cc913edb802e6a3a80.png"}}]);