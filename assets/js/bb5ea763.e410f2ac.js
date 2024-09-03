"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[6688],{1595:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var r=t(4848),s=t(8453);const o={title:"Apache Kafka Overview",description:"A cheatsheet style overview and reminder of the main architecture of Apache Kafka"},n="Apache Kafka",i={id:"Architecture/kafka",title:"Apache Kafka Overview",description:"A cheatsheet style overview and reminder of the main architecture of Apache Kafka",source:"@site/docs/Architecture/kafka.md",sourceDirName:"Architecture",slug:"/Architecture/kafka",permalink:"/Architecture/kafka",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Apache Kafka Overview",description:"A cheatsheet style overview and reminder of the main architecture of Apache Kafka"},sidebar:"tutorialSidebar",previous:{title:"Caching Strategies (with a focus on microservices)",permalink:"/Architecture/caching"},next:{title:"Why modernise legacy systems",permalink:"/Architecture/whyModernise"}},c={},h=[{value:"Outbox pattern",id:"outbox-pattern",level:2},{value:"Apache Pulsar",id:"apache-pulsar",level:2}];function d(e){const a={h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,s.RP)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"apache-kafka",children:"Apache Kafka"}),"\n",(0,r.jsx)(a.p,{children:"Apache Kafka is a distributed event store and stream-processing platform. It is an open-source system developed by the Apache Software Foundation. The platform can be used for real-time data pipelines, integration, stream processing, and more. This is a cheat sheet style overview of the main architecture of Apache Kafka."}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.img,{alt:"Apache Kafka architecture diagram",src:t(6140).A+"",width:"1803",height:"805"}),'\nHINT: If you\'re viewing this on a desktop browser, right click the above image and "open in new tab" for an un-scaled view.']}),"\n",(0,r.jsx)(a.h1,{id:"architecture---main-points",children:"Architecture - Main points"}),"\n",(0,r.jsxs)(a.p,{children:["A Kafka cluster has many brokers and topics. The cluster is managed by ",(0,r.jsx)(a.strong,{children:"zookeeper"})," upto Kafka version 3.x, but is being replaced by Kraft (Kafka Raft), which will be the only option from version 4.x."]}),"\n",(0,r.jsx)(a.p,{children:"A topic is a stream of data, similar to a table in a database. Topics can be distributed and replicated across different brokers."}),"\n",(0,r.jsxs)(a.p,{children:["Kafka ",(0,r.jsx)(a.strong,{children:"producers"})," send data to a topic."]}),"\n",(0,r.jsxs)(a.p,{children:["Kafka ",(0,r.jsx)(a.strong,{children:"consumers"})," read data from a topic. Data is read in order from a partition. Consumers can be grouped into a consumer group for performance. In a consumer group, a partition can only be read by one consumer, a consumer can read from more than one partition, therefore you may end up with spare capacity of consumers in a consumer group. More than one consumer or consumer group can read from the same topic or partition."]}),"\n",(0,r.jsxs)(a.p,{children:["Topics are split into partitions. If your messages include a ",(0,r.jsx)(a.strong,{children:"key"}),", it's guaranteed that all message of the same key will be in the same partition. This means a Kafka partition could be used to implement the ",(0,r.jsx)(a.strong,{children:"thread delegate pattern"}),", ",(0,r.jsx)(a.strong,{children:"except"})," when you repartition!"]}),"\n",(0,r.jsx)(a.p,{children:"Data written to a partition is immutable (cannot be changed), but is only kept for a defined amount of time (default of 1 week)."}),"\n",(0,r.jsx)(a.p,{children:"The order of messages is only guaranteed within a partition (so you may need to choose your message keys carefully)."}),"\n",(0,r.jsx)(a.p,{children:"Without a key, messages are assigned to a random partition in a round-robin fashion."}),"\n",(0,r.jsx)(a.p,{children:"For production use, a replication factor or 3 is recommended"}),"\n",(0,r.jsx)(a.h2,{id:"outbox-pattern",children:"Outbox pattern"}),"\n",(0,r.jsx)(a.p,{children:"You can use the outbox pattern with Kafka to prevent double writes, and/or for speed. This batches messages in memory. If an instance goes down, messages in memory will be lost. Therefore for transactional messages (orders, trades etc), you can set the batch size to 1 to prevent loss. This mitigates the chance of loosing messages, but is single threaded so not really a true outbox pattern any more."}),"\n",(0,r.jsx)(a.h2,{id:"apache-pulsar",children:"Apache Pulsar"}),"\n",(0,r.jsx)(a.p,{children:"In Kafka, serving (consumption) and storage of messages are coupled. For example if you need to scale out the number of brokers to be able to serve messages at a higher rate, then you also scale out the storage too."}),"\n",(0,r.jsx)(a.p,{children:"Apache Pulsar separates message storage and message serving. It uses a broker to serve messages, and a bookie (bookkeeper) for the storage. This layered architectural approach addresses the coupling of storage and serving in Kafka."})]})}function p(e={}){const{wrapper:a}={...(0,s.RP)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},6140:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/kafka_architecture-7882f1f0bf93cf927881a10f4dcf8298.png"},8453:(e,a,t)=>{t.d(a,{RP:()=>o});var r=t(6540);const s=r.createContext({});function o(e){const a=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}}}]);