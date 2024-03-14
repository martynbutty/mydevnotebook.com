"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[906],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=o,f=m["".concat(s,".").concat(p)]||m[p]||h[p]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3999:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const i={title:"Why modernise legacy systems",description:"Why should you consider modernising from legacy systems that are all mainly working just fine?"},a="Why Modernise",l={unversionedId:"Architecture/whyModernise",id:"Architecture/whyModernise",title:"Why modernise legacy systems",description:"Why should you consider modernising from legacy systems that are all mainly working just fine?",source:"@site/docs/Architecture/whyModernise.md",sourceDirName:"Architecture",slug:"/Architecture/whyModernise",permalink:"/Architecture/whyModernise",draft:!1,tags:[],version:"current",frontMatter:{title:"Why modernise legacy systems",description:"Why should you consider modernising from legacy systems that are all mainly working just fine?"},sidebar:"tutorialSidebar",previous:{title:"Caching Strategies (with a focus on microservices)",permalink:"/Architecture/caching"},next:{title:"Artificial Intelligence (AI)",permalink:"/Artificial Intelligence/ai"}},s={},c=[{value:"Challenges of monoliths",id:"challenges-of-monoliths",level:2},{value:"Goals of modern applications",id:"goals-of-modern-applications",level:2},{value:"Strategies",id:"strategies",level:3}],u={toc:c},m="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"why-modernise"},"Why Modernise"),(0,o.kt)("p",null,"One of the main goals of modernising from legacy systems is to keep up with innovation. Software engineering continues to evolve at\nrapid pace. If your systems are legacy, they probably can't leverage modern tools and techniques, making it harder for you\nto keep pace with competitors."),(0,o.kt)("h2",{id:"challenges-of-monoliths"},"Challenges of monoliths"),(0,o.kt)("p",null,"If your legacy systems are large and monolithic, they probably suffer from some or all of the following problems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Releasing a small change means a full system release"),(0,o.kt)("li",{parentName:"ul"},"You have to run the entire test suite, which may not pass for unrelated reasons which you'll then have to track down"),(0,o.kt)("li",{parentName:"ul"},"Changes and releases can effect multiple teams"),(0,o.kt)("li",{parentName:"ul"},"The software is fragile"),(0,o.kt)("li",{parentName:"ul"},"Scaling is rigid, so you often need to over provision to handle increased load"),(0,o.kt)("li",{parentName:"ul"},"There's a large blast radius for each change")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," All the above makes it hard to adopt new technologies ")),(0,o.kt)("h2",{id:"goals-of-modern-applications"},"Goals of modern applications"),(0,o.kt)("p",null,"The high level goal of moving to modern applications is to be able to ",(0,o.kt)("strong",{parentName:"p"},"deliver business value faster")," which helps\nyou stay competitive in the market."),(0,o.kt)("h3",{id:"strategies"},"Strategies"),(0,o.kt)("p",null,"Evolve to separate, decoupled, smaller functional services that focus on one thing, and does that really well. "),(0,o.kt)("p",null,"While you might be tempted to jump straight into microservices to achieve this, that's not your only option (or even the best option as microservices come with downsides too). For example you could utilise the ",(0,o.kt)("a",{parentName:"p",href:"/Architecture/Overview#modular-monolith"},"modular monolith")," which might speed up the transition but still allow a move into microservices in the future."),(0,o.kt)("p",null,"The benefits of having decoupled services include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Teams become more autonomous, having ownership of architecture, development, deployment and maintenance of each service"),(0,o.kt)("li",{parentName:"ul"},"Which means they can make decisions quickly as these decisions only effect individual services (or modules / components ...)"),(0,o.kt)("li",{parentName:"ul"},"So they learn faster by making lots of small changes rather than one giant change")))}h.isMDXComponent=!0}}]);