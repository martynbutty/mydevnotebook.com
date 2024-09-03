"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[5740],{9958:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var n=s(4848),o=s(8453);const r={title:"Performance Testing Basics",description:"Quick introduction to the different types of performance tests",authors:["martyn"],hide_table_of_contents:!1},a="Performance Testing Basics",i={permalink:"/blog/2022/09/06/Performance-Testing-Basics",source:"@site/blog/2022-09-06-Performance-Testing-Basics/index.md",title:"Performance Testing Basics",description:"Quick introduction to the different types of performance tests",date:"2022-09-06T00:00:00.000Z",tags:[],readingTime:4.225,hasTruncateMarker:!0,authors:[{name:"Martyn Butterworth",title:"Technical Architect",url:"https://github.com/MartynButty",imageURL:"https://github.com/MartynButty.png",key:"martyn"}],frontMatter:{title:"Performance Testing Basics",description:"Quick introduction to the different types of performance tests",authors:["martyn"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"AWS CDK dependent stacks",permalink:"/blog/2023/07/11/CDK-dependent-stacks"},nextItem:{title:"AWS EC2 Instance Types",permalink:"/blog/2022/02/14/AWS-EC2-Instance-Types"}},c={authorsImageUrls:[void 0]},l=[{value:"SLI\u2019s and SLO\u2019s",id:"slis-and-slos",level:2},{value:"What can performance tests help us understand",id:"what-can-performance-tests-help-us-understand",level:2},{value:"Where and When to test",id:"where-and-when-to-test",level:2},{value:"Types of Performance Tests",id:"types-of-performance-tests",level:2},{value:"Smoke Tests",id:"smoke-tests",level:2},{value:"Load Tests",id:"load-tests",level:2},{value:"Soak Tests",id:"soak-tests",level:2},{value:"Spike Tests",id:"spike-tests",level:2},{value:"Stress Tests",id:"stress-tests",level:2}];function d(e){const t={h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.RP)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Performance testing is more than just sending a large number of requests at a target system to see what happens."}),"\n",(0,n.jsx)(t.p,{children:"Performance testing can help you to understand how many requests your system can handle, how long it takes to respond,\nif a recent code change has improved or reduced performance and more. It can help you plan for when you need to scale\nyour application, define server resources like CPU, memory and disk space, and consider the introduction or improvement\nof caching."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Performance Test Types",src:s(7928).A+"",width:"1073",height:"674"})}),"\n",(0,n.jsx)(t.p,{children:"You may not need to have a full performance test suite straight away, so consider;"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"What are you trying to test and why"}),"\n",(0,n.jsx)(t.li,{children:"Do you know what good looks like"}),"\n",(0,n.jsx)(t.li,{children:"What environments are available, and how much are they like production environments"}),"\n",(0,n.jsx)(t.li,{children:"For an API, which endpoints/calls will you test, and can you (or do you need to) vary each request to avoid testing the cache layer"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"slis-and-slos",children:"SLI\u2019s and SLO\u2019s"}),"\n",(0,n.jsx)(t.p,{children:"Service level indicators (SLI) and service level objectives (SLO) are a set of things you can define to describe what\ngood looks like, and then use as a benchmark for your performance tests. It will also help you understand the different\ntypes of performance tests you should consider."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"SLI\u2019s"})," are things that are important to measure and report on, e.g. how long it takes to return a response to a\nrequest, or the error rate (maybe as a percentage of all requests)"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"SLO\u2019s"})," are objectives or target values for your service, of something that is measured by an SLI. e.g. a\nresponse should be returned within 100 milliseconds."]}),"\n",(0,n.jsx)(t.p,{children:"It\u2019s a good exercise to agree a set of SLI and or SLO with the team before you start performance testing."}),"\n",(0,n.jsx)(t.h2,{id:"what-can-performance-tests-help-us-understand",children:"What can performance tests help us understand"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Slow response times"}),"\n",(0,n.jsx)(t.li,{children:"Long load times"}),"\n",(0,n.jsx)(t.li,{children:"Bottlenecks"}),"\n",(0,n.jsx)(t.li,{children:"Scalability problems (disk, CPU, memory, memory leaks, network)"}),"\n",(0,n.jsx)(t.li,{children:"Software problems"}),"\n",(0,n.jsx)(t.li,{children:"Software / Framework / Cache configuration problems"}),"\n",(0,n.jsx)(t.li,{children:"Insufficient resources"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"where-and-when-to-test",children:"Where and When to test"}),"\n",(0,n.jsx)(t.p,{children:"Running against your production system is probably a bad idea. As well as effecting your own production system, you\ncould potentially cause third party systems problems too!, not that I've ever inadvertently tested this theory ;)"}),"\n",(0,n.jsx)(t.p,{children:"If you use cloud hosting, you can probably create a production like system fairly easily."}),"\n",(0,n.jsx)(t.p,{children:"If you cannot provision a production like environment to test against, you should resist \u201cinterpreting\u201d the results to\nscale them up or down accordingly to get an approximation of how your production service will behave; You cannot be\nsure the hardware will scale linearly (e.g. you can\u2019t rely on doubling CPU resulting in double the performance). You can\nhowever keep a record of previous tests and gain insight into if recent changes have improved or regressed performance\non the test system. This could give you confidence to proceed to release to production."}),"\n",(0,n.jsx)(t.p,{children:"You could run your performance tests against a single server or node in your production estate if you are confident you\nwon\u2019t harm your service or business that it serves. This could be by targeting a single node or server that is out of\ntraffic."}),"\n",(0,n.jsx)(t.p,{children:"You should capture and store the results of your performance tests so that you can track the performance results over time."}),"\n",(0,n.jsx)(t.h2,{id:"types-of-performance-tests",children:"Types of Performance Tests"}),"\n",(0,n.jsx)(t.h2,{id:"smoke-tests",children:"Smoke Tests"}),"\n",(0,n.jsx)(t.p,{children:"Smoke tests are used to verify your service is functioning while only putting minimal load through the service."}),"\n",(0,n.jsx)(t.h2,{id:"load-tests",children:"Load Tests"}),"\n",(0,n.jsxs)(t.p,{children:["Load testing will test your service by simulating actual users of your system. This allows you to observe how things\nlike your database, code and hardware behave under load.\n",(0,n.jsx)(t.img,{alt:"Load Test",src:s(928).A+"",width:"792",height:"674"})]}),"\n",(0,n.jsx)(t.p,{children:"This type of test should use expected load levels. It could be based on your SLO\u2019s or non-functional requirements (NFR)\u2019s.\nYou probably want to slowly ramp up requests from zero over a short time (half an hour)x\xa7x  to \u201cwarm\u201d the service under\ntest and its server. The expected load should then be sustained for at least a further one to two hours before another\ngradual ramp down to zero requests."}),"\n",(0,n.jsx)(t.h2,{id:"soak-tests",children:"Soak Tests"}),"\n",(0,n.jsxs)(t.p,{children:["These are the same as load tests, except that they will run for a much longer period (twelve to twenty-four hours or\nmore). Soak tests will help you identify things like memory leaks which could be hard to detect over shorter term load tests.\n",(0,n.jsx)(t.img,{alt:"Soak Test",src:s(6).A+"",width:"1072",height:"674"})]}),"\n",(0,n.jsx)(t.h2,{id:"spike-tests",children:"Spike Tests"}),"\n",(0,n.jsxs)(t.p,{children:["Spike tests again extend the basic load test. This time a short \u201cspike\u201d of traffic in excess of the expected load is\nused to verify that your service can cope or recover from sudden large increases in load\n",(0,n.jsx)(t.img,{alt:"Spike Test",src:s(3774).A+"",width:"792",height:"674"})]}),"\n",(0,n.jsx)(t.h2,{id:"stress-tests",children:"Stress Tests"}),"\n",(0,n.jsx)(t.p,{children:"A stress test will start with zero load, and gradually increase until well over the maximum expected capacity of the\nservice. This type of testing allows you to plan for the future so your service is ready. This could help define things\nlike:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"defining auto-scaling"}),"\n",(0,n.jsx)(t.li,{children:"increasing server capacity (horizontal or vertical scaling)"}),"\n",(0,n.jsx)(t.li,{children:"introducing or improving caching"}),"\n",(0,n.jsx)(t.li,{children:"code changes (to optimise performance, remove bottle-necks etc)"}),"\n",(0,n.jsxs)(t.li,{children:["and much more\n",(0,n.jsx)(t.img,{alt:"Stress Test",src:s(1e3).A+"",width:"841",height:"674"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.RP)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},928:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/load_test-3bb6ab78c897cd1e8a4ac30a0a5e4716.png"},7928:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/performance_test_types-69e07a986b0ccae6a2fca744ce57a324.png"},6:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/soak_test-3dfbb5d68d7bbcfe3c43ffc28756c25c.png"},3774:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/spike_test-23cd36c88cd97267d824aa6cb26195e8.png"},1e3:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/stress_test-19b0a3e17c27064175210d10fe4fc29e.png"},8453:(e,t,s)=>{s.d(t,{RP:()=>r});var n=s(6540);const o=n.createContext({});function r(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);