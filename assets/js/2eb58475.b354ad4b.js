"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[185],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(t),u=o,h=m["".concat(p,".").concat(u)]||m[u]||l[u]||a;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7616:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},assets:function(){return c},toc:function(){return l},default:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={title:"WSDL Glossary",authors:["martyn"]},p=void 0,d={permalink:"/blog/2021/10/02/wsdl",source:"@site/blog/2021-10-02-wsdl.md",title:"WSDL Glossary",description:"What is WSDL",date:"2021-10-02T00:00:00.000Z",formattedDate:"October 2, 2021",tags:[],readingTime:2.57,truncated:!1,authors:[{name:"Martyn Butterworth",title:"Technical Architect",url:"https://github.com/MartynButty",imageURL:"https://github.com/MartynButty.png",key:"martyn"}],prevItem:{title:"Computer Memory Types",permalink:"/blog/2021/11/06/memory"}},c={authorsImageUrls:[void 0]},l=[{value:"What is WSDL",id:"what-is-wsdl",children:[],level:2},{value:"Core WSDL Elements",id:"core-wsdl-elements",children:[{value:"Definition",id:"definition",children:[],level:3},{value:"Types",id:"types",children:[],level:3},{value:"Message",id:"message",children:[],level:3},{value:"PortType (Interfac",id:"porttype-interfac",children:[],level:3},{value:"Operation",id:"operation",children:[],level:3},{value:"Binding",id:"binding",children:[],level:3},{value:"Document &amp; RPC",id:"document--rpc",children:[],level:3},{value:"Service",id:"service",children:[],level:3},{value:"Example WSDL Document",id:"example-wsdl-document",children:[],level:3}],level:2}],m={toc:l};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-wsdl"},"What is WSDL"),(0,a.kt)("p",null,'Web services description language (WSDL) is an XML document that describes a web service. WSDL is often pronounced "wizdul".\nIt describes what operations a web service provides, the structure of the messages it sends and receives, and how to send\nthose messages. This article is a very brief overview of the common WSDL elements. If you are new to WSDL, you may prefer\nto read ',(0,a.kt)("a",{parentName:"p",href:"https://msdn.microsoft.com/en-us/library/ms996486.aspx",title:"Understanding WSDL"},"Understanding WSDL"),"."),(0,a.kt)("h2",{id:"core-wsdl-elements"},"Core WSDL Elements"),(0,a.kt)("h3",{id:"definition"},"Definition"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<definitions>")," element is the WSDL's root XML element. It typically contains several other elements including\n",(0,a.kt)("a",{parentName:"p",href:"#types"},"types")," , ",(0,a.kt)("a",{parentName:"p",href:"#message"},"message"),", ",(0,a.kt)("a",{parentName:"p",href:"#portType"},"portType"),", ",(0,a.kt)("a",{parentName:"p",href:"#binding"},"binding")," and ",(0,a.kt)("a",{parentName:"p",href:"#service"},"service"),"."),(0,a.kt)("h3",{id:"types"},"Types"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<types>")," element contains XML schema type definitions (xsd). The xsd's describe the structure of the XML sent and\nreceived by the web service."),(0,a.kt)("h3",{id:"message"},"Message"),(0,a.kt)("p",null,"A message is an XML document that can be sent or received by the web service. A message is usually associated with one\nor more ",(0,a.kt)("a",{parentName:"p",href:"#operation"},"operation"),". For example, an operation to ",(0,a.kt)("inlineCode",{parentName:"p"},"createNewOrder")," might have an input message ",(0,a.kt)("inlineCode",{parentName:"p"},"newOrder"),"\nand an output message ",(0,a.kt)("inlineCode",{parentName:"p"},"orderStatus"),"."),(0,a.kt)("h3",{id:"porttype-interfac"},"PortType (Interfac"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<portType>")," element is best thought of as an interface, and will be renamed as such in version 1.2 of the WSDL\nspecification. It contains one or more ",(0,a.kt)("inlineCode",{parentName:"p"},"<operation>")," elements."),(0,a.kt)("h3",{id:"operation"},"Operation"),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"<operation>")," element defines an operation with the web service. It groups together the ",(0,a.kt)("a",{parentName:"p",href:"#message"},"message")," elements\nthat can be passed to or from the web service. An operation can have an input and output message (request-response), or\nit can just define an input message (one-way), send an output message only (notification) or send an output message to\nask for an input message (solicit-response). The operation may also define a fault message too."),(0,a.kt)("h3",{id:"binding"},"Binding"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"<binding>")," element is a collection of one or more ",(0,a.kt)("inlineCode",{parentName:"p"},"operations"),". It describes how an operation is implemented. It\ndefines the communication protocol (e.g. http), style of service (document or rpc), and the ",(0,a.kt)("inlineCode",{parentName:"p"},"SOAPAction")," HTTP header for\nthe defined operations."),(0,a.kt)("h3",{id:"document--rpc"},"Document & RPC"),(0,a.kt)("p",null,"The document style indicates that the SOAP body will contain an XML document (and is able to be validated by the previously\ndefined xsd's). An RPC style indicates that the SOAP body will contain an XML representation of a method call. It includes\nthe method name and parameters of the method to generate the XML structure. Follow this link for a more in-depth discussion\non ",(0,a.kt)("a",{parentName:"p",href:"http://java.globinch.com/enterprise-java/web-services/soap-binding-document-rpc-style-web-services-difference/",title:"Document vs RPC"},"Document and RPC style web services")),(0,a.kt)("h3",{id:"service"},"Service"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<service>")," element defines the endpoint (port) that exposes a particular binding. I.e. the URL to use to call an\noperation within the binding"),(0,a.kt)("h3",{id:"example-wsdl-document"},"Example WSDL Document"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<definitions name="EndorsementSearch"  \n targetNamespace="http://namespaces.snowboard-info.com"  \n xmlns:es="http://www.snowboard-info.com/EndorsementSearch.wsdl"  \n xmlns:esxsd="http://schemas.snowboard-info.com/EndorsementSearch.xsd"  \n xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"  \n xmlns="http://schemas.xmlsoap.org/wsdl/"  \n>  \n  \n \x3c!-- omitted types section with content model schema info \\--\x3e  \n  \n <message name="GetEndorsingBoarderRequest">  \n  <part name="body" element="esxsd:GetEndorsingBoarder"/>  \n </message>  \n  \n <message name="GetEndorsingBoarderResponse">  \n  <part name="body" element="esxsd:GetEndorsingBoarderResponse"/>  \n </message>  \n  \n <portType name="GetEndorsingBoarderPortType">  \n  <operation name="GetEndorsingBoarder">  \n   <input message="es:GetEndorsingBoarderRequest"/>  \n   <output message="es:GetEndorsingBoarderResponse"/>  \n   <fault message="es:GetEndorsingBoarderFault"/>  \n  </operation>  \n </portType>  \n  \n <binding name="EndorsementSearchSoapBinding" type="es:GetEndorsingBoarderPortType">  \n  <soap:binding style="document" transport="http://schemas.xmlsoap.org/soap/http"/>  \n  <operation name="GetEndorsingBoarder">  \n   <soap:operation soapAction="http://www.snowboard-info.com/EndorsementSearch"/>  \n   <input>  \n    <soap:body use="literal" \n                   namespace="http://schemas.snowboard-info.com/EndorsementSearch.xsd"/>  \n   </input>  \n   <output>  \n    <soap:body use="literal" \n                   namespace="http://schemas.snowboard-info.com/EndorsementSearch.xsd"/>  \n   </output>  \n   <fault>  \n    <soap:body use="literal" \n                   namespace="http://schemas.snowboard-info.com/EndorsementSearch.xsd"/>  \n   </fault>  \n  </operation>  \n </binding>  \n  \n <service name="EndorsementSearchService">  \n  <documentation>snowboarding\\-info.com Endorsement Service</documentation>  \n  <port name="GetEndorsingBoarderPort" binding="es:EndorsementSearchSoapBinding">  \n   <soap:address location="http://www.snowboard-info.com/EndorsementSearch"/>  \n  </port>  \n </service>  \n</definitions>\n')))}u.isMDXComponent=!0}}]);