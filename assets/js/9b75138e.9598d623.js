"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[521],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,k=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6546:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return h}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Docker build fail with VPN",description:"A possible solution to docker build failures that require resources over a VPN",authors:["martyn"],hide_table_of_contents:!1},s="Docker can\u2019t build over VPN",c={permalink:"/blog/2021/12/14/Docker-VPN-Network-Fix",source:"@site/blog/2021-12-14-Docker-VPN-Network-Fix/index.md",title:"Docker build fail with VPN",description:"A possible solution to docker build failures that require resources over a VPN",date:"2021-12-14T00:00:00.000Z",formattedDate:"December 14, 2021",tags:[],readingTime:3.055,truncated:!0,authors:[{name:"Martyn Butterworth",title:"Technical Architect at OnTheBeach.com",url:"https://github.com/MartynButty",imageURL:"https://github.com/MartynButty.png",key:"martyn"}],prevItem:{title:"AWS EC2 Instance Types",permalink:"/blog/2022/02/14/AWS-EC2-Instance-Types"},nextItem:{title:"Computer Memory Types",permalink:"/blog/2021/11/06/memory"}},p={authorsImageUrls:[void 0]},u=[{value:"The Problem",id:"the-problem",children:[{value:"Tl;dr",id:"tldr",children:[],level:3},{value:"Detailed example",id:"detailed-example",children:[],level:3}],level:2},{value:"Confirming this is the problem",id:"confirming-this-is-the-problem",children:[],level:2},{value:"Docker Network Fix",id:"docker-network-fix",children:[],level:2}],d={toc:u};function h(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Docker Desktop does a great job of taking care of all the networking for you and usually ",(0,i.kt)("em",{parentName:"p"},"\u201cjust works\u201d"),", even if you are connected to a corporate VPN."),(0,i.kt)("p",null,"Sometimes you may encounter difficulties which usually manifest as the ",(0,i.kt)("strong",{parentName:"p"},"build stage failing"),". This can happen when part of your build process requires resources that are only available when connected via your company VPN (e.g. internal package server)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Docker VPN",src:n(1417).Z})),(0,i.kt)("h2",{id:"the-problem"},"The Problem"),(0,i.kt)("h3",{id:"tldr"},"Tl;dr"),(0,i.kt)("p",null,"Docker may have allocated an internal network range which clashes with your VPN."),(0,i.kt)("h3",{id:"detailed-example"},"Detailed example"),(0,i.kt)("p",null,"Your project has dependancies on an internal server which might have an IP address of ",(0,i.kt)("inlineCode",{parentName:"p"},"172.17.2.79"),". This is a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Private_network"},"private network"),") which is only accessible while connected to the companies private VPN.\nDocker has created its own internal network which is using the  ",(0,i.kt)("inlineCode",{parentName:"p"},"172.17.0.0/16")," range of addresses.\nThe build process tries to access your companies private package server at ",(0,i.kt)("inlineCode",{parentName:"p"},"172.17.2.79"),".  The process is running within the private docker network. It therefore thinks the server should be available on the local docker network. It is also unable to send any traffic via the VPN due to the overlap or clash of the network range."),(0,i.kt)("h2",{id:"confirming-this-is-the-problem"},"Confirming this is the problem"),(0,i.kt)("p",null,"To confirm the above scenario is indeed the root cause of the docker build failure, we need to compare the subnet docker is using against that in use by the VPN.\n",(0,i.kt)("strong",{parentName:"p"},"### Get Docker Network"),"\nFirst, list all the available docker networks"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$docker network ls\n")),(0,i.kt)("p",null,"which should output something similar to"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"NETWORK ID     NAME      DRIVER    SCOPE\nceb424d5d73d   bridge    bridge    local\nad6318517651   host      host      local\na2cfb19e8122   none      null      local\n")),(0,i.kt)("p",null,"We\u2019re interested in the \u201cbridge\u201d network, so we\u2019ll inspect it by using it\u2019s ID:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$docker network inspect ceb424d5d73d\n")),(0,i.kt)("p",null,"which should contain something like the following in its output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"Config": [\n    {\n        "Subnet": "172.17.0.0/16"\n    }\n]\n')),(0,i.kt)("p",null,"So we know that in the above case, docker is using the network range ",(0,i.kt)("inlineCode",{parentName:"p"},"172.17.0.0/16"),"\n",(0,i.kt)("strong",{parentName:"p"},"### Get VPN Network"),"\nNext we need to find out what network the VPN is using. The below should work on a MacBook Pro or linux. If you\u2019re running on Windows, ",(0,i.kt)("inlineCode",{parentName:"p"},"ipconfig")," may work better.\nFrom a terminal enter the command ",(0,i.kt)("inlineCode",{parentName:"p"},"$ifconfig")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"$netstat -i")," and look for a ",(0,i.kt)("inlineCode",{parentName:"p"},"utun*")," entry with an IP address. For example, doing ",(0,i.kt)("inlineCode",{parentName:"p"},"$netstat -i")," might output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"utun3      1500  <Link#17>                      2298484     0   754726     0     0\nutun3      1500  172.17.144/22 172.17.146.96    2298484     -   754726     -     -\n")),(0,i.kt)("p",null,"This tells us the the VPN is using the network range ",(0,i.kt)("inlineCode",{parentName:"p"},"172.17.144/22"),".\nIf you can remember your ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#IPv4_CIDR_blocks"},"CIDR blocks"),", you\u2019ll see that the docker network collides with that of the VPN. This means that docker will be unable to use the VPN network to get to our internal server which has the address ",(0,i.kt)("inlineCode",{parentName:"p"},"172.17.2.79"),"."),(0,i.kt)("h2",{id:"docker-network-fix"},"Docker Network Fix"),(0,i.kt)("p",null,"To resolve the above problem, we can change the address pool used by the docker daemon.\nWith docker desktop, the easiest way to achieve this is to open the docker desktop dashboard (UI), click the \u201csettings\u201d gear cog in the top right of the screen to view the preferences screen. Select \u201cDocker Engine\u201d from the left hand menu, which should show some JSON config. Add the below section of config into the existing JSON config (keeping what\u2019s already there), and click the \u201cApply & Restart\u201d button"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"default-address-pools": [\n    {\n      "base": "172.240.0.0/16",\n      "size": 24\n    }\n  ],\n')),(0,i.kt)("p",null,"Now if you repeat the steps to ",(0,i.kt)("a",{parentName:"p",href:"#Get-Docker-Network"},"Get Docker Network")," (note, the network ID most likely changed!), you should see that docker now uses subnet ",(0,i.kt)("inlineCode",{parentName:"p"},"172.240.0.0/24"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"docker build")," should now be able to complete steps such as ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet build")," which would have previously failed to reach the internal server"))}h.isMDXComponent=!0},1417:function(e,t,n){t.Z=n.p+"assets/images/Docker_VPN-06329a790d69c963ad27b786021526bf.png"}}]);