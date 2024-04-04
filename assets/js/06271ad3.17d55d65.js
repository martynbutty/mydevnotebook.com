"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[4017],{7785:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=s(4848),r=s(8453);const i={title:"AWS EC2 Instance Types",description:"How to understand AWS EC2 instance type codes",authors:["martyn"],hide_table_of_contents:!1},a=void 0,o={permalink:"/blog/2022/02/14/AWS-EC2-Instance-Types",source:"@site/blog/2022-02-14-AWS-EC2-Instance-Types/index.md",title:"AWS EC2 Instance Types",description:"How to understand AWS EC2 instance type codes",date:"2022-02-14T00:00:00.000Z",formattedDate:"February 14, 2022",tags:[],readingTime:3.6,hasTruncateMarker:!0,authors:[{name:"Martyn Butterworth",title:"Technical Architect",url:"https://github.com/MartynButty",imageURL:"https://github.com/MartynButty.png",key:"martyn"}],frontMatter:{title:"AWS EC2 Instance Types",description:"How to understand AWS EC2 instance type codes",authors:["martyn"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Performance Testing Basics",permalink:"/blog/2022/09/06/Performance-Testing-Basics"},nextItem:{title:"Docker build fail with VPN",permalink:"/blog/2021/12/14/Docker-VPN-Network-Fix"}},l={authorsImageUrls:[void 0]},d=[{value:"Instance code format",id:"instance-code-format",level:2},{value:"Family",id:"family",level:3},{value:"Generation",id:"generation",level:3},{value:"Additional Features",id:"additional-features",level:3},{value:"Instance Size",id:"instance-size",level:3},{value:"Popular Family Types",id:"popular-family-types",level:2},{value:"A - Arm Processors",id:"a---arm-processors",level:3},{value:"T - General Purpose, Burstable",id:"t---general-purpose-burstable",level:3},{value:"M - General Purpose, Medium",id:"m---general-purpose-medium",level:3},{value:"C - General Purpose, Compute",id:"c---general-purpose-compute",level:3},{value:"R - General Purpose, Memory",id:"r---general-purpose-memory",level:3},{value:"Others",id:"others",level:3},{value:"Accelerated computing",id:"accelerated-computing",level:4},{value:"Storage",id:"storage",level:4}];function c(e){const t={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.RP)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"To try and make it easier to select an instance type, AWS uses a set format for instance type naming.\nThis article will help you understand how AWS breaks down the instance type into families, generations,\ncapabilities and overall size."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"EC2 Instance Codes",src:s(1600).A+"",width:"356",height:"191"})}),"\n",(0,n.jsxs)(t.p,{children:["EC2 is Amazon Web Services\u2019 (AWS) ",(0,n.jsx)(t.strong,{children:"Elastic Compute Cloud"}),".\nAs AWS has to support an almost endless set of possible workloads, they provide hundreds of different instance types.",(0,n.jsx)(t.br,{}),"\n","Having different instance types means you only use and pay for resources that you need,\nrather than over provisioning and paying for unused resource."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"EC2 is an abbreviation for \u201celastic compute cloud\u201d.\nWhere the same letter appears more than once, a count of that letter is used (e.g. two consecutive C's become C2)\nAnother example being S3 : Simple Storage Service - 3 S's"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Pretty much the only constant thing when working with AWS is that things change.\nThis article therefore is only meant to help you understand the EC2 instance code format rather than explaining every\npossible instance type available.\nYou can see what instance types are available here: ",(0,n.jsx)(t.a,{href:"https://aws.amazon.com/ec2/instance-types/",children:"Amazon EC2 Instance Types - Amazon Web Services"})]}),"\n",(0,n.jsx)(t.h2,{id:"instance-code-format",children:"Instance code format"}),"\n",(0,n.jsx)(t.p,{children:"As you can see from the above image, the instance code is divided into three or four sections (one section is optional)."}),"\n",(0,n.jsx)(t.h3,{id:"family",children:"Family"}),"\n",(0,n.jsx)(t.p,{children:"The first section is typically a single letter (but not always) and denotes the main instance type family.\nThe family lets you choose a type broadly suited to your tasks, and the most popular ones are discussed below (e.g. CPU optimised, memory optimised etc.)"}),"\n",(0,n.jsx)(t.h3,{id:"generation",children:"Generation"}),"\n",(0,n.jsxs)(t.p,{children:["The higher the generation number the newer the instance type. You should usually choose the latest available\ngeneration as that provides the newest features and generally can cost less. i.e. a newer generation might offer faster\nCPU's, or more CPU, or more memory, or some other combination of features with better cost optimisation.\nThe exception to this rule might be if you only want to use the AWS free tier, as (at the time of writing)\nthe ",(0,n.jsx)(t.code,{children:"t2.micro"})," is free tier eligible, but the ",(0,n.jsx)(t.code,{children:"t3.micro"})," is not."]}),"\n",(0,n.jsx)(t.h3,{id:"additional-features",children:"Additional Features"}),"\n",(0,n.jsxs)(t.p,{children:["This is an ",(0,n.jsx)(t.strong,{children:"optional"})," code. For example, ",(0,n.jsx)(t.code,{children:"R6gd"})," instances offer\n",(0,n.jsx)(t.em,{children:"local NVMe-based SSDs are physically connected to the host server and provide block-level storage that is coupled to the lifetime of the instance"}),",\nwhere ",(0,n.jsx)(t.code,{children:"R6g"})," is ",(0,n.jsx)(t.em,{children:"EBS-Only storage"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"instance-size",children:"Instance Size"}),"\n",(0,n.jsxs)(t.p,{children:["The part after the period (dot) defines the instance size. This is usually a T-Shirt style size, but there are other options\ntoo like ",(0,n.jsx)(t.em,{children:".metal"})," for example."]}),"\n",(0,n.jsx)(t.h2,{id:"popular-family-types",children:"Popular Family Types"}),"\n",(0,n.jsx)(t.h3,{id:"a---arm-processors",children:"A - Arm Processors"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Characteristics"}),(0,n.jsx)(t.td,{children:"64-bit Arm cores using Graviton processors."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"mnemonic"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"a"})," for Arm processor"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"example"}),(0,n.jsx)(t.td,{children:"a1.large : 2 CPU and 4 GiB Mem"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"t---general-purpose-burstable",children:"T - General Purpose, Burstable"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Characteristics"}),(0,n.jsx)(t.td,{children:"T instances are general purpose that are \u201cburstable\u201d. If you use an \u201cm\u201d or \u201cc\u201d class type, you\u2019re paying for the full capacity of the instance whether it\u2019s in use or not. As a lot of workloads can have spikes of demand and longer periods of low demand, you can potentially save money by using a T type. T type machines have a baseline of capacity. When your system operates below the baseline, you earn CPU credits. When your system comes under high load, it can \u201cburst\u201d to use all the CPU by spending credits (or borrowing up to a days worth of credits depending on how you configure your instance)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"mnemonic"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"t"})," for bursTable"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"example"}),(0,n.jsx)(t.td,{children:"t3.large : 2 CPU 8 GiB mem (36 CPU credits/hr)"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"m---general-purpose-medium",children:"M - General Purpose, Medium"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Characteristics"}),(0,n.jsx)(t.td,{children:"General purpose machines optimised balance of CPU, memory and network performance"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"mnemonic"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"m"})," for medium"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"example"}),(0,n.jsx)(t.td,{children:"m5.large : 2 CPU 8 GiB mem"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"c---general-purpose-compute",children:"C - General Purpose, Compute"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Characteristics"}),(0,n.jsx)(t.td,{children:"Optimised for compute intensive workloads."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"mnemonic"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"c"})," for Compute"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"example"}),(0,n.jsx)(t.td,{children:"c5.large : 2 CPU 4 GiB mem"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"r---general-purpose-memory",children:"R - General Purpose, Memory"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Characteristics"}),(0,n.jsx)(t.td,{children:"optimised for memory."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"mnemonic"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"r"})," for RAM"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"example"}),(0,n.jsx)(t.td,{children:"r5.large : 2 CPU 16GiB mem"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"others",children:"Others"}),"\n",(0,n.jsx)(t.h4,{id:"accelerated-computing",children:"Accelerated computing"}),"\n",(0,n.jsx)(t.p,{children:"Optimised for machine learning, graphics, image processing etc. Some examples include the P[ictures], inf[erence] and g[raphics] types."}),"\n",(0,n.jsx)(t.h4,{id:"storage",children:"Storage"}),"\n",(0,n.jsx)(t.p,{children:"Instances optimised for storage, i.e. where high sequential read and writes operations on large data sets is desirable\nExamples include D[ense] (or D[ata]), I[ops], H[dd] based and others"})]})}function h(e={}){const{wrapper:t}={...(0,r.RP)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1600:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/AWS_EC2_codes-0fdf792367e80ea4d7cf8cbb39c9d2d6.png"},8453:(e,t,s)=>{s.d(t,{RP:()=>i});var n=s(6540);const r=n.createContext({});function i(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);