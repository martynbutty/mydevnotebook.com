"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[783],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9124:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return m},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"AWS EC2 Instance Types",description:"How to understand AWS EC2 instance type codes",authors:["martyn"],hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/2022/02/14/AWS-EC2-Instance-Types",source:"@site/blog/2022-02-14-AWS-EC2-Instance-Types/index.md",title:"AWS EC2 Instance Types",description:"How to understand AWS EC2 instance type codes",date:"2022-02-14T00:00:00.000Z",formattedDate:"February 14, 2022",tags:[],readingTime:3.52,truncated:!0,authors:[{name:"Martyn Butterworth",title:"Technical Architect at OnTheBeach.com",url:"https://github.com/MartynButty",imageURL:"https://github.com/MartynButty.png",key:"martyn"}],nextItem:{title:"Docker build fail with VPN",permalink:"/blog/2021/12/14/Docker-VPN-Network-Fix"}},c={authorsImageUrls:[void 0]},m=[{value:"Instance code format",id:"instance-code-format",children:[{value:"Family",id:"family",children:[],level:3},{value:"Generation",id:"generation",children:[],level:3},{value:"Additional Features",id:"additional-features",children:[],level:3},{value:"Instance Size",id:"instance-size",children:[],level:3}],level:2},{value:"Popular Family Types",id:"popular-family-types",children:[{value:"A",id:"a",children:[],level:3}],level:2},{value:"T",id:"t",children:[],level:2},{value:"M",id:"m",children:[],level:2},{value:"C",id:"c",children:[],level:2},{value:"R",id:"r",children:[],level:2},{value:"Others",id:"others",children:[{value:"Accelerated computing",id:"accelerated-computing",children:[],level:3},{value:"Storage",id:"storage",children:[],level:3}],level:2}],d={toc:m};function u(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To try and make it easier to select an instance type, AWS uses a set format for instance type naming.\nThis article will help you understand how AWS breaks down the instance type into families, generations,\ncapabilities and overall size."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"EC2 Instance Codes",src:n(9023).Z})),(0,i.kt)("p",null,"EC2 is Amazon Web Services\u2019 (AWS) ",(0,i.kt)("strong",{parentName:"p"},"Elastic Compute Cloud"),".\nAs AWS has to support an almost endless set of possible workloads, they provide hundreds of different instance types.",(0,i.kt)("br",{parentName:"p"}),"\n","Having different instance types means you only use and pay for resources that you need,\nrather than over provisioning and paying for unused resource."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"EC2 is an abbreviation for \u201celastic compute cloud\u201d.\nThe abbreviation is formed using the first letters of each word.\nWhere the same letter appears more than once, a count of that letter is used.\nAnother example being S3 : Simple Storage Service")),(0,i.kt)("p",null,"Pretty much the only constant thing when working with AWS is that things change.\nThis article therefore is only meant to help you understand the EC2 instance code format rather than explaining every\npossible instance type available.\nYou can see what instance types are available here: ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/instance-types/"},"Amazon EC2 Instance Types - Amazon Web Services")," "),(0,i.kt)("h2",{id:"instance-code-format"},"Instance code format"),(0,i.kt)("p",null,"As you can see from the above image, the instance code is divided into three or four sections (one section is optional).  "),(0,i.kt)("h3",{id:"family"},"Family"),(0,i.kt)("p",null,"The first section is typically a single letter (but not always) and denotes the main instance type family.\nThe family lets you choose a type broadly suited to your tasks, and the most popular ones are discussed below (e.g. CPU optimised, memory optimised etc.)"),(0,i.kt)("h3",{id:"generation"},"Generation"),(0,i.kt)("p",null,"The higher the generation number the newer the instance type. You should usually choose the latest available\ngeneration as that provides the newest features and generally can cost less. i.e. a newer generation might offer faster\nCPU's, or more CPU, or more memory, or some other combination of features with better cost optimisation.\nThe exception to this rule might be if you only want to use the AWS free tier, as (at the time of writing)\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"t2.micro")," is free tier eligible, but the ",(0,i.kt)("inlineCode",{parentName:"p"},"t3.micro")," is not."),(0,i.kt)("h3",{id:"additional-features"},"Additional Features"),(0,i.kt)("p",null,"This is an ",(0,i.kt)("strong",{parentName:"p"},"optional")," code. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"R6gd")," instances offer\n",(0,i.kt)("em",{parentName:"p"},"local NVMe-based SSDs are physically connected to the host server and provide block-level storage that is coupled to the lifetime of the instance"),",\nwhere ",(0,i.kt)("inlineCode",{parentName:"p"},"R6g")," is ",(0,i.kt)("em",{parentName:"p"},"EBS-Only storage"),"."),(0,i.kt)("h3",{id:"instance-size"},"Instance Size"),(0,i.kt)("p",null,"The part after the period (dot) defines the instance size. This is usually a T-Shirt style size, but there are other options\ntoo like ",(0,i.kt)("em",{parentName:"p"},".metal")," for example."),(0,i.kt)("h2",{id:"popular-family-types"},"Popular Family Types"),(0,i.kt)("h3",{id:"a"},"A"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Characteristics"),(0,i.kt)("td",{parentName:"tr",align:null},"64-bit Arm cores using Graviton processors.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mnemonic"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"a")," for Arm processor")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"example"),(0,i.kt)("td",{parentName:"tr",align:null},"a1.large : 2 CPU and 4 GiB Mem")))),(0,i.kt)("h2",{id:"t"},"T"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Characteristics"),(0,i.kt)("td",{parentName:"tr",align:null},"T instances are general purpose that are \u201cburstable\u201d. If you use an \u201cm\u201d or \u201cc\u201d class type, you\u2019re paying for the full capacity of the instance whether it\u2019s in use or not. As a lot of workloads can have spikes of demand and longer periods of low demand, you can potentially save money by using a T type. T type machines have a baseline of capacity. When your system operates below the baseline, you earn CPU credits. When your system comes under high load, it can \u201cburst\u201d to use all the CPU by spending credits (or borrowing up to a days worth of credits depending on how you configure your instance).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mnemonic"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"t")," for bursTable")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"example"),(0,i.kt)("td",{parentName:"tr",align:null},"t3.large : 2 CPU 8 GiB mem (36 CPU credits/hr)")))),(0,i.kt)("h2",{id:"m"},"M"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Characteristics"),(0,i.kt)("td",{parentName:"tr",align:null},"General purpose machines optimised balance of CPU, memory and network performance")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mnemonic"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"m")," for medium")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"example"),(0,i.kt)("td",{parentName:"tr",align:null},"m5.large : 2 CPU 8 GiB mem")))),(0,i.kt)("h2",{id:"c"},"C"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Characteristics"),(0,i.kt)("td",{parentName:"tr",align:null},"Optimised for compute intensive workloads.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mnemonic"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"c")," for Compute")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"example"),(0,i.kt)("td",{parentName:"tr",align:null},"c5.large : 2 CPU 4 GiB mem")))),(0,i.kt)("h2",{id:"r"},"R"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Characteristics"),(0,i.kt)("td",{parentName:"tr",align:null},"optimised for memory.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mnemonic"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"r")," for RAM")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"example"),(0,i.kt)("td",{parentName:"tr",align:null},"r5.large : 2 CPU 16GiB mem")))),(0,i.kt)("h2",{id:"others"},"Others"),(0,i.kt)("h3",{id:"accelerated-computing"},"Accelerated computing"),(0,i.kt)("p",null,"Optimised for machine learning, graphics, image processing etc. Some examples include the P","[ictures]",", inf","[erence]"," and g","[raphics]"," types."),(0,i.kt)("h3",{id:"storage"},"Storage"),(0,i.kt)("p",null,"Instances optimised for storage, i.e. where high sequential read and writes operations on large data sets is desirable\nExamples include D","[ense]"," (or D","[ata]","), I","[ops]",", H","[dd]"," based and others"))}u.isMDXComponent=!0},9023:function(e,t,n){t.Z=n.p+"assets/images/AWS_EC2_codes-0fdf792367e80ea4d7cf8cbb39c9d2d6.png"}}]);