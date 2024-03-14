"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[427],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1660:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const s={title:"Performance Testing Basics",description:"Quick introduction to the different types of performance tests",authors:["martyn"],hide_table_of_contents:!1},a="Performance Testing Basics",i={permalink:"/blog/2022/09/06/Performance-Testing-Basics",source:"@site/blog/2022-09-06-Performance-Testing-Basics/index.md",title:"Performance Testing Basics",description:"Quick introduction to the different types of performance tests",date:"2022-09-06T00:00:00.000Z",formattedDate:"September 6, 2022",tags:[],readingTime:4.225,hasTruncateMarker:!0,authors:[{name:"Martyn Butterworth",title:"Technical Architect",url:"https://github.com/MartynButty",imageURL:"https://github.com/MartynButty.png",key:"martyn"}],frontMatter:{title:"Performance Testing Basics",description:"Quick introduction to the different types of performance tests",authors:["martyn"],hide_table_of_contents:!1},prevItem:{title:"AWS CDK dependent stacks",permalink:"/blog/2023/07/11/CDK-dependent-stacks"},nextItem:{title:"AWS EC2 Instance Types",permalink:"/blog/2022/02/14/AWS-EC2-Instance-Types"}},l={authorsImageUrls:[void 0]},c=[{value:"SLI\u2019s and SLO\u2019s",id:"slis-and-slos",level:2},{value:"What can performance tests help us understand",id:"what-can-performance-tests-help-us-understand",level:2},{value:"Where and When to test",id:"where-and-when-to-test",level:2},{value:"Types of Performance Tests",id:"types-of-performance-tests",level:2},{value:"Smoke Tests",id:"smoke-tests",level:2},{value:"Load Tests",id:"load-tests",level:2},{value:"Soak Tests",id:"soak-tests",level:2},{value:"Spike Tests",id:"spike-tests",level:2},{value:"Stress Tests",id:"stress-tests",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...s}=e;return(0,o.kt)(p,(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Performance testing is more than just sending a large number of requests at a target system to see what happens. "),(0,o.kt)("p",null,"Performance testing can help you to understand how many requests your system can handle, how long it takes to respond,\nif a recent code change has improved or reduced performance and more. It can help you plan for when you need to scale\nyour application, define server resources like CPU, memory and disk space, and consider the introduction or improvement\nof caching."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Performance Test Types",src:n(7369).Z,width:"1073",height:"674"})),(0,o.kt)("p",null,"You may not need to have a full performance test suite straight away, so consider;"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What are you trying to test and why"),(0,o.kt)("li",{parentName:"ul"},"Do you know what good looks like"),(0,o.kt)("li",{parentName:"ul"},"What environments are available, and how much are they like production environments"),(0,o.kt)("li",{parentName:"ul"},"For an API, which endpoints/calls will you test, and can you (or do you need to) vary each request to avoid testing the cache layer")),(0,o.kt)("h2",{id:"slis-and-slos"},"SLI\u2019s and SLO\u2019s"),(0,o.kt)("p",null,"Service level indicators (SLI) and service level objectives (SLO) are a set of things you can define to describe what\ngood looks like, and then use as a benchmark for your performance tests. It will also help you understand the different\ntypes of performance tests you should consider."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SLI\u2019s")," are things that are important to measure and report on, e.g. how long it takes to return a response to a\nrequest, or the error rate (maybe as a percentage of all requests)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SLO\u2019s")," are objectives or target values for your service, of something that is measured by an SLI. e.g. a\nresponse should be returned within 100 milliseconds."),(0,o.kt)("p",null,"It\u2019s a good exercise to agree a set of SLI and or SLO with the team before you start performance testing."),(0,o.kt)("h2",{id:"what-can-performance-tests-help-us-understand"},"What can performance tests help us understand"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Slow response times"),(0,o.kt)("li",{parentName:"ul"},"Long load times"),(0,o.kt)("li",{parentName:"ul"},"Bottlenecks"),(0,o.kt)("li",{parentName:"ul"},"Scalability problems (disk, CPU, memory, memory leaks, network)"),(0,o.kt)("li",{parentName:"ul"},"Software problems"),(0,o.kt)("li",{parentName:"ul"},"Software / Framework / Cache configuration problems"),(0,o.kt)("li",{parentName:"ul"},"Insufficient resources")),(0,o.kt)("h2",{id:"where-and-when-to-test"},"Where and When to test"),(0,o.kt)("p",null,"Running against your production system is probably a bad idea. As well as effecting your own production system, you\ncould potentially cause third party systems problems too!, not that I've ever inadvertently tested this theory ;) "),(0,o.kt)("p",null,"If you use cloud hosting, you can probably create a production like system fairly easily. "),(0,o.kt)("p",null,"If you cannot provision a production like environment to test against, you should resist \u201cinterpreting\u201d the results to\nscale them up or down accordingly to get an approximation of how your production service will behave; You cannot be\nsure the hardware will scale linearly (e.g. you can\u2019t rely on doubling CPU resulting in double the performance). You can\nhowever keep a record of previous tests and gain insight into if recent changes have improved or regressed performance\non the test system. This could give you confidence to proceed to release to production."),(0,o.kt)("p",null,"You could run your performance tests against a single server or node in your production estate if you are confident you\nwon\u2019t harm your service or business that it serves. This could be by targeting a single node or server that is out of\ntraffic."),(0,o.kt)("p",null,"You should capture and store the results of your performance tests so that you can track the performance results over time."),(0,o.kt)("h2",{id:"types-of-performance-tests"},"Types of Performance Tests"),(0,o.kt)("h2",{id:"smoke-tests"},"Smoke Tests"),(0,o.kt)("p",null,"Smoke tests are used to verify your service is functioning while only putting minimal load through the service."),(0,o.kt)("h2",{id:"load-tests"},"Load Tests"),(0,o.kt)("p",null,"Load testing will test your service by simulating actual users of your system. This allows you to observe how things\nlike your database, code and hardware behave under load.\n",(0,o.kt)("img",{alt:"Load Test",src:n(3681).Z,width:"792",height:"674"})),(0,o.kt)("p",null,"This type of test should use expected load levels. It could be based on your SLO\u2019s or non-functional requirements (NFR)\u2019s.\nYou probably want to slowly ramp up requests from zero over a short time (half an hour)x\xa7x  to \u201cwarm\u201d the service under\ntest and its server. The expected load should then be sustained for at least a further one to two hours before another\ngradual ramp down to zero requests."),(0,o.kt)("h2",{id:"soak-tests"},"Soak Tests"),(0,o.kt)("p",null,"These are the same as load tests, except that they will run for a much longer period (twelve to twenty-four hours or\nmore). Soak tests will help you identify things like memory leaks which could be hard to detect over shorter term load tests.\n",(0,o.kt)("img",{alt:"Soak Test",src:n(8890).Z,width:"1072",height:"674"})),(0,o.kt)("h2",{id:"spike-tests"},"Spike Tests"),(0,o.kt)("p",null,"Spike tests again extend the basic load test. This time a short \u201cspike\u201d of traffic in excess of the expected load is\nused to verify that your service can cope or recover from sudden large increases in load\n",(0,o.kt)("img",{alt:"Spike Test",src:n(2824).Z,width:"792",height:"674"})),(0,o.kt)("h2",{id:"stress-tests"},"Stress Tests"),(0,o.kt)("p",null,"A stress test will start with zero load, and gradually increase until well over the maximum expected capacity of the\nservice. This type of testing allows you to plan for the future so your service is ready. This could help define things\nlike:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"defining auto-scaling"),(0,o.kt)("li",{parentName:"ul"},"increasing server capacity (horizontal or vertical scaling)"),(0,o.kt)("li",{parentName:"ul"},"introducing or improving caching"),(0,o.kt)("li",{parentName:"ul"},"code changes (to optimise performance, remove bottle-necks etc)"),(0,o.kt)("li",{parentName:"ul"},"and much more\n",(0,o.kt)("img",{alt:"Stress Test",src:n(1865).Z,width:"841",height:"674"}))))}d.isMDXComponent=!0},3681:function(e,t,n){t.Z=n.p+"assets/images/load_test-3bb6ab78c897cd1e8a4ac30a0a5e4716.png"},7369:function(e,t,n){t.Z=n.p+"assets/images/performance_test_types-69e07a986b0ccae6a2fca744ce57a324.png"},8890:function(e,t,n){t.Z=n.p+"assets/images/soak_test-3dfbb5d68d7bbcfe3c43ffc28756c25c.png"},2824:function(e,t,n){t.Z=n.p+"assets/images/spike_test-23cd36c88cd97267d824aa6cb26195e8.png"},1865:function(e,t,n){t.Z=n.p+"assets/images/stress_test-19b0a3e17c27064175210d10fe4fc29e.png"}}]);