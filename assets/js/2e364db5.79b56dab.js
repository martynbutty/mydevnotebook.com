"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[618],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,y=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(y,a(a({ref:t},m),{},{components:r})):n.createElement(y,a({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},59:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return m},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={title:"Computer Memory Types",description:"computer memory types and considerations from a tinyML perspective",authors:["martyn"]},l=void 0,c={permalink:"/blog/2021/11/06/memory",source:"@site/blog/2021-11-06-memory.md",title:"Computer Memory Types",description:"computer memory types and considerations from a tinyML perspective",date:"2021-11-06T00:00:00.000Z",formattedDate:"November 6, 2021",tags:[],readingTime:2.065,truncated:!0,authors:[{name:"Martyn Butterworth",title:"Technical Architect",url:"https://github.com/MartynButty",imageURL:"https://github.com/MartynButty.png",key:"martyn"}],prevItem:{title:"Docker build fail with VPN",permalink:"/blog/2021/12/14/Docker-VPN-Network-Fix"},nextItem:{title:"WSDL Glossary",permalink:"/blog/2021/10/02/wsdl"}},m={authorsImageUrls:[void 0]},u=[{value:"What is it",id:"what-is-it",children:[],level:2},{value:"Types of memory",id:"types-of-memory",children:[{value:"Flash",id:"flash",children:[],level:3},{value:"RAM",id:"ram",children:[],level:3},{value:"Types of RAM",id:"types-of-ram",children:[{value:"Dynamic RAM (DRAM)",id:"dynamic-ram-dram",children:[],level:4},{value:"Static RAM (SRAM)",id:"static-ram-sram",children:[],level:4},{value:"Registers",id:"registers",children:[],level:4}],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Here is an overview of some common types of computer memory. Although general in nature, this page is more about considerations\nyou may need to make when dealing with machine learning on a microcontroller running ML perspective (TinyML)."),(0,i.kt)("h2",{id:"what-is-it"},"What is it"),(0,i.kt)("p",null,"Computers operate on ",(0,i.kt)("strong",{parentName:"p"},"bits")," which can take the value zero or one."),(0,i.kt)("p",null,"To be more useful, these bits are grouped into ",(0,i.kt)("strong",{parentName:"p"},"bytes"),". One byte comprises 8 bits, which can then represent things like letters\nor weights in a neural network (NN). "),(0,i.kt)("p",null,"Microcontrollers and CPU's read and write bytes to memory.  A memory address is a hexadecimal value that tells the\ncpu/microcontroller etc where the memory it is looking for is located."),(0,i.kt)("h2",{id:"types-of-memory"},"Types of memory"),(0,i.kt)("h3",{id:"flash"},"Flash"),(0,i.kt)("p",null,"Flash memory is non volatile (it won't lose the stored information when powered down). It is used to store program code,\nmachine learning (ML) model weights etc. "),(0,i.kt)("p",null,"The process of saving to flash memory is slow and also gradually degrades the memory over time, therefore flash memory\nis better suited to read only use, and only overwritten when reprogramming (a microcontroller)"),(0,i.kt)("h3",{id:"ram"},"RAM"),(0,i.kt)("p",null,"RAM is volatile (the stored information is lost when powered off). It is used for temporary storage of variables like\ninput and output buffers and intermediate tensors. RAM is much faster than flash for read/write operations, so is ideal\nfor use as primary memory during code execution"),(0,i.kt)("h3",{id:"types-of-ram"},"Types of RAM"),(0,i.kt)("h4",{id:"dynamic-ram-dram"},"Dynamic RAM (DRAM)"),(0,i.kt)("p",null,"DRAM uses a single transistor and capacitor to store a bit. As the capacitor quickly loses charge, it must be periodically\nrefreshed to prevent the stored information being lost. This usually occurs between read and write operations. DRAM is\nmost suitable for main memory in modern computers."),(0,i.kt)("h4",{id:"static-ram-sram"},"Static RAM (SRAM)"),(0,i.kt)("p",null,"SRAM uses six transistors to store each bit. It is able to maintain the stored information without refreshing. SRAM is\nmore expensive than DRAM on account of the number of transistors required, but is faster and requires less power due to\nnot needing to refresh. SRAM is therefore more suitable to caches, and is commonly used as main memory on microcontrollers."),(0,i.kt)("h4",{id:"registers"},"Registers"),(0,i.kt)("p",null,"A third type of RAM is a register. A special purpose register is typically for low level computing functions like the program\ncounter and stack pointer. General purpose registers are used to store values and memory addresses. It is unlikely you\nwill need to play around with registers as a tinyML engineer unless you are working at the assembly code level."))}d.isMDXComponent=!0}}]);