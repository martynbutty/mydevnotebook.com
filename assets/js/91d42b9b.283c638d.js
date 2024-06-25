"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[7136],{4092:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(4848),i=a(8453);const r={title:"Aurora Serverless Database Selection",description:"How to decide if an Aurora serverless database is right for you",authors:["martyn"],hide_table_of_contents:!1},s=void 0,o={permalink:"/blog/2023/08/01/Aurora-Serverless-database-selection",source:"@site/blog/2023-08-01-Aurora-Serverless-database-selection/index.md",title:"Aurora Serverless Database Selection",description:"How to decide if an Aurora serverless database is right for you",date:"2023-08-01T00:00:00.000Z",tags:[],readingTime:5.445,hasTruncateMarker:!1,authors:[{name:"Martyn Butterworth",title:"Technical Architect",url:"https://github.com/MartynButty",imageURL:"https://github.com/MartynButty.png",key:"martyn"}],frontMatter:{title:"Aurora Serverless Database Selection",description:"How to decide if an Aurora serverless database is right for you",authors:["martyn"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Aurora Serverless Backup Configuration",permalink:"/blog/2023/08/15/Aurora-backups"},nextItem:{title:"AWS CDK dependent stacks",permalink:"/blog/2023/07/11/CDK-dependent-stacks"}},l={authorsImageUrls:[void 0]},c=[{value:"To SQL of not to SQL",id:"to-sql-of-not-to-sql",level:2},{value:"To serverless, or not to serverless",id:"to-serverless-or-not-to-serverless",level:2},{value:"Aurora V2 main considerations",id:"aurora-v2-main-considerations",level:2},{value:"Availability",id:"availability",level:3},{value:"Downtime without a reader instance",id:"downtime-without-a-reader-instance",level:4},{value:"Resources",id:"resources",level:3},{value:"What about aurora V1",id:"what-about-aurora-v1",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.RP)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"With the end of life of MySQL 5.7, you may be considering upgrading to Aurora serverless V2. Here I'll briefly discuss database selection, focussing on Aurora serverless V2 considerations and cluster configuration for production use. Aurora serverless V2 is a way of running a MySQL database without having to worry about the compute required for the predicted load."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Data Store Image",src:a(496).A+"",width:"500",height:"347"})}),"\n",(0,n.jsxs)(t.p,{children:["Photo by ",(0,n.jsx)(t.a,{href:"https://unsplash.com/@jankolar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Jan Antonin Kolar"})," on unsplash.com"]}),"\n",(0,n.jsx)(t.h2,{id:"to-sql-of-not-to-sql",children:"To SQL of not to SQL"}),"\n",(0,n.jsxs)(t.p,{children:["If you are changing the DB for your application, you should first consider ",(0,n.jsx)(t.strong,{children:"if a relational database is still the best datastore for your application"}),". For example, you may get cost, scalability and performance benefits by using a DynamoDB instead."]}),"\n",(0,n.jsx)(t.p,{children:"Migrating to a non-relational DB is a larger piece of work, so you need to consider your future plans for your application and involve your product counterpart in your planning. You should try to identify tradeoffs, benefits and potential problems with the different approaches."}),"\n",(0,n.jsx)(t.h2,{id:"to-serverless-or-not-to-serverless",children:"To serverless, or not to serverless"}),"\n",(0,n.jsx)(t.p,{children:"If moving database technology has been discounted, then your next consideration is whether a serverless database is the right choice for your application."}),"\n",(0,n.jsx)(t.p,{children:"Spend some time to understand your database workloads, usage and access patterns. If you have a consistent access pattern with fairly predictable traffic volumes that do not alter much, then Aurora serverless may not be the best solution. In this case, a provisioned RDS instance running on a suitably sized DB instance class will likely prove to be more cost effective."}),"\n",(0,n.jsx)(t.p,{children:"If your workload is not predictable, especially if you have a low baseline of traffic with regular but unpredictable spikes of activity, then Aurora serverless may be a better fit. It will be more cost effective as it will tick over with just enough resource for your baseline traffic, then be able to quickly scale up to match spikes of traffic."}),"\n",(0,n.jsx)(t.h2,{id:"aurora-v2-main-considerations",children:"Aurora V2 main considerations"}),"\n",(0,n.jsx)(t.p,{children:"The two main considerations for setting up an Aurora instance is the availability, and the allowed resources."}),"\n",(0,n.jsx)(t.h3,{id:"availability",children:"Availability"}),"\n",(0,n.jsxs)(t.p,{children:["Do you need high availability? If your app is not business critical, then you may be ok with a single writer instance. For business critical applications, it makes more sense to have a multi AZ instance. This is achieved by having a ",(0,n.jsx)(t.strong,{children:"reader instance"})," in addition to the writer instance. The reader instance will be in a different AZ to the writer."]}),"\n",(0,n.jsx)(t.p,{children:"With a reader instance, Aurora can promote the reader instance within one minute. This provides the shortest possible downtime, and zero downtime in some cases. The following are examples of downtime that can be mitigated by running a reader instance:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"AZ containing the writer instance goes offline"}),"\n",(0,n.jsx)(t.li,{children:"Writer instance out of memory crash and restart"}),"\n",(0,n.jsx)(t.li,{children:"Writer instance maintenance window (e.g. for auto minor version upgrades)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"A reader instance also provides the ability to distribute your workload more effectively, allowing your writer instance to handle the transactions while the reader takes care of read only queries."}),"\n",(0,n.jsx)(t.p,{children:"It's beyond the scope of this document, but you may also consider RDS proxy, especially if your database gets traffic from lambda functions as it can help prevent swamping the connections to the DB."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Note: your data is stored in multiple availability zones (AZ's) in a single region by default so is considered highly available. However you won't be able to access your data if you run a single writer instance which is currently down for some reason."}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"downtime-without-a-reader-instance",children:"Downtime without a reader instance"}),"\n",(0,n.jsx)(t.p,{children:"If your writer instance restarts, you will get downtime. With a reader instance, this downtime can be minimised to seconds because the reader instance is promoted to take the place of the lost writer instance. Sometimes downtime with a reader instance is avoided all together, for example in scheduled maintenance."}),"\n",(0,n.jsx)(t.p,{children:"If there's no reader instance, then downtime increases with database size. For even a small databases (just a few MB in size), it can require 10 minutes to restart. This restart time will increase with the size of the cluster."}),"\n",(0,n.jsx)(t.h3,{id:"resources",children:"Resources"}),"\n",(0,n.jsxs)(t.p,{children:["Aurora Serverless uses a unit of measure called the ",(0,n.jsx)(t.code,{children:"ACU"}),' or Aurora Capacity Units. An ACU is a combined unit of CPU, network and memory. One ACU is defined by AWS as being "roughly 2 GB of memory, and equivalent CPU and network bandwidth".']}),"\n",(0,n.jsxs)(t.p,{children:["Beware of a really low minimum ACU, even if you have a low baseline workload. While your cluster may be able to service all it's normal traffic at just 0.5 of an ACU, this can cause problems when the cluster needs to scale. ",(0,n.jsx)(t.strong,{children:"Aurora scales faster if it's current capacity is higher."})," If you have an instance running at 0.5 ACU and it receives a large spike in traffic, then those clusters could fail to scale fast enough so they run out of memory (or connections) and restart."]}),"\n",(0,n.jsx)(t.p,{children:"For production use, you should probably not have a minimum ACU below 2. With a single writer instance (i.e. no reader instance), you probably want more than that. This is because the ACU's are applied to each instance in the cluster. So if you have a minimum ACU of 2, then the writer and reader will each have 2 ACU's, providing an overall cluster capacity of 4 ACU's."}),"\n",(0,n.jsx)(t.h2,{id:"what-about-aurora-v1",children:"What about aurora V1"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Aurora V1 should probably not be considered for production use"})," (unless you are already running it)."]}),"\n",(0,n.jsx)(t.p,{children:"The main benefit of using Aurora V2 is for auto scaling. Autoscaling in V1 is much slower and can potentially cause a DB crash and restart."}),"\n",(0,n.jsx)(t.p,{children:"When it decides it needs to scale out, Aurora V1 has to find a scaling point. A scaling point is a quiet point in the database where it can make the required changes without interrupting any running transactions etc. Sometimes it can take a few minutes to find this scaling point. If Aurora V1 cannot find a scaling point in sufficient time, the DB will restart."}),"\n",(0,n.jsx)(t.p,{children:"With Aurora V2, this scaling bottleneck does not exist, and Aurora can scale much more quickly."}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(t.p,{children:"Before you upgrade your MySQL 5.7 instance, consider if MySQL is still the most appropriate technology to use"}),"\n",(0,n.jsx)(t.p,{children:"If MySQL is still a good choice for you, is an Aurora serverless V2 version a good choice, or would you be better off with a provisioned RDS instance instead."}),"\n",(0,n.jsx)(t.p,{children:"If you do choose Aurora serverless V2, then do you need to have a reader instance in the cluster, or can you run with a single writer instance? What are the consequences of setting the minimum ACU's low?"})]})}function u(e={}){const{wrapper:t}={...(0,i.RP)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},496:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/jan-antonin-kolar-unsplash-1bd21dd64fefd2462850fb91ec2c371b.jpg"},8453:(e,t,a)=>{a.d(t,{RP:()=>r});var n=a(6540);const i=n.createContext({});function r(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);