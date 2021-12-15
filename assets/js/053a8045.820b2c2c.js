"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[441],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8103:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"Decorator Pattern"},p=void 0,s={unversionedId:"Design Patterns and Principles/decorator",id:"Design Patterns and Principles/decorator",title:"Decorator Pattern",description:"Decorator pattern class diagram",source:"@site/docs/Design Patterns and Principles/decorator.md",sourceDirName:"Design Patterns and Principles",slug:"/Design Patterns and Principles/decorator",permalink:"/Design Patterns and Principles/decorator",tags:[],version:"current",frontMatter:{title:"Decorator Pattern"},sidebar:"tutorialSidebar",previous:{title:"Commonality Variability Analysis",permalink:"/Design Patterns and Principles/cva"},next:{title:"Design Principles",permalink:"/Design Patterns and Principles/design-principles"}},l=[],d={toc:l};function u(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Decorator pattern class diagram",src:n(820).Z})),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"decorator pattern")," is used to attach additional responsibilities to an object ",(0,a.kt)("em",{parentName:"p"},"dynamically"),". The object provides\nthe basic functionality, but you need a variety of additional functionality to be added at run-time.\nFor example, you want to add a header and / or footer to an invoice print, and the header or footer can also vary.\nThe power of the Decorator pattern is that the instantiation of the chain of objects is completely ",(0,a.kt)("strong",{parentName:"p"},"decoupled")," from the\nclient objects that use the decorated ",(0,a.kt)("inlineCode",{parentName:"p"},"ConcreteComponent"),". It allows for extending the functionality of an object without\nresorting to sub-classing."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ConcreteComponent")," is the class having the functionality added to it by wrapping it with successive ",(0,a.kt)("inlineCode",{parentName:"p"},"ConcreteDecorators"),"\nin a chain. The chain of instantiation ",(0,a.kt)("strong",{parentName:"p"},"always")," ends with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConcreteComponent"),". Create an abstract class that\nrepresents the original class and the new functions to be added. In the decorators, place the new function call before\nor after the trailing calls to get the correct order."),(0,a.kt)("p",null,"The Decorator's inheritance of ",(0,a.kt)("inlineCode",{parentName:"p"},"Component")," is for type matching, ",(0,a.kt)("strong",{parentName:"p"},"not")," to inherit behaviour.\nThe decorator wraps a ",(0,a.kt)("inlineCode",{parentName:"p"},"Component")," because it ",(0,a.kt)("em",{parentName:"p"},"aggregates")," it, i.e. it holds a pointer to it.\n",(0,a.kt)("inlineCode",{parentName:"p"},"Decorator")," is shown as abstract, the concrete decorator classes can add new methods and/or attributes; but typically by\ndoing computation before or after an existing method in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Component"),"."),(0,a.kt)("p",null,"Some example code for the creation of an object, and subsequent wrapping with decorators is found below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"Component myComponent;  \n\nmyComponent = new SalesTicket();  \nmyComponent = new Footer1(myComponent);  \nmyComponent = new Header1(myComponent);  \n\nreturn myComponent;\n")),(0,a.kt)("p",null,"The chain can be identified by reading the code backwards. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Header1")," decorator wraps ",(0,a.kt)("inlineCode",{parentName:"p"},"Footer1"),", and as per the rules\nof the decorator pattern, the chain ends with the ",(0,a.kt)("inlineCode",{parentName:"p"},"SalesTicket")," object. In an assumed ",(0,a.kt)("inlineCode",{parentName:"p"},"print()")," method, the decorators\ncould add something to be printed before calling the next object in the chains ",(0,a.kt)("inlineCode",{parentName:"p"},"print()")," method, or after."))}u.isMDXComponent=!0},820:function(e,t,n){t.Z=n.p+"assets/images/decorator_pattern-15cf8921747672c1f23a7bb146b9a1f9.png"}}]);