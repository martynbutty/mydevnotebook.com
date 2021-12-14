"use strict";(self.webpackChunkmydevnotebook_com=self.webpackChunkmydevnotebook_com||[]).push([[918],{6237:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var n=a(7294),l=a(6010),s=a(3783),i=a(9960),o=a(5999);var r=function(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(i.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},c=a(2263),d=a(907),m=a(3616);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:l},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function b(e){var t,a=e.className,s=e.versionMetadata,i=(0,c.Z)().siteConfig.title,o=(0,d.gA)({failfast:!0}).pluginId,r=(0,m.J)(o).savePreferredVersionName,u=(0,d.Jo)(o),b=u.latestDocSuggestion,g=u.latestVersionSuggestion,E=null!=b?b:(t=g).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:i,versionMetadata:s})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:g.label,to:E.path,onClick:function(){return r(g.name)}})))}function g(e){var t=e.className,a=(0,m.E6)();return a.banner?n.createElement(b,{className:t,versionMetadata:a}):null}function E(e){var t=e.className,a=(0,m.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}var h=a(1217);function f(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function N(e){var t=e.lastUpdatedBy;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(f,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(N,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var _=a(6753),L=a(8727),Z="lastUpdated_mt2f";function U(e){return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(L.Z,e)))}function C(e){var t=e.editUrl,a=e.lastUpdatedAt,s=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(_.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",Z)},(a||s)&&n.createElement(k,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:s})))}function T(e){var t=e.content.metadata,a=t.editUrl,s=t.lastUpdatedAt,i=t.formattedLastUpdatedAt,o=t.lastUpdatedBy,r=t.tags,c=r.length>0,d=!!(a||s||o);return c||d?n.createElement("footer",{className:(0,l.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(U,{tags:r}),d&&n.createElement(C,{editUrl:a,lastUpdatedAt:s,lastUpdatedBy:o,formattedLastUpdatedAt:i})):null}var y=a(1575),A="tocCollapsible_aw-L",w="tocCollapsibleButton_zr6a",M="tocCollapsibleContent_0dom",H="tocCollapsibleExpanded_FSiv",x=a(5002);function B(e){var t,a=e.toc,s=e.className,i=e.minHeadingLevel,r=e.maxHeadingLevel,c=(0,m.uR)({initialState:!0}),d=c.collapsed,u=c.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(A,(t={},t[H]=!d,t),s)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",w),onClick:u},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:M,collapsed:d},n.createElement(x.Z,{toc:a,minHeadingLevel:i,maxHeadingLevel:r})))}var V=a(9649),S="docItemContainer_oiyr",D="docItemCol_zHA2",F="tocMobile_Tx6Y";function I(e){var t,a=e.content,i=a.metadata,o=a.frontMatter,c=o.image,d=o.keywords,u=o.hide_title,v=o.hide_table_of_contents,p=o.toc_min_heading_level,b=o.toc_max_heading_level,f=i.description,N=i.title,k=!u&&void 0===a.contentTitle,_=(0,s.Z)(),L=!v&&a.toc&&a.toc.length>0,Z=L&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(h.Z,{title:N,description:f,keywords:d,image:c}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[D]=!v,t))},n.createElement(g,null),n.createElement("div",{className:S},n.createElement("article",null,n.createElement(E,null),L&&n.createElement(B,{toc:a.toc,minHeadingLevel:p,maxHeadingLevel:b,className:(0,l.Z)(m.kM.docs.docTocMobile,F)}),n.createElement("div",{className:(0,l.Z)(m.kM.docs.docMarkdown,"markdown")},k&&n.createElement(V.N,null,N),n.createElement(a,null)),n.createElement(T,e)),n.createElement(r,{previous:i.previous,next:i.next}))),Z&&n.createElement("div",{className:"col col--3"},n.createElement(y.Z,{toc:a.toc,minHeadingLevel:p,maxHeadingLevel:b,className:m.kM.docs.docTocDesktop}))))}},1575:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),l=a(3366),s=a(7294),i=a(6010),o=a(5002),r="tableOfContents_vrFS",c=["className"];var d=function(e){var t=e.className,a=(0,l.Z)(e,c);return s.createElement("div",{className:(0,i.Z)(r,"thin-scrollbar",t)},s.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),l=a(3366),s=a(7294),i=a(3616),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function r(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?s.createElement("ul",{className:l?void 0:a},t.map((function(e){return s.createElement("li",{key:e.id},s.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),s.createElement(r,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,p=e.minHeadingLevel,b=e.maxHeadingLevel,g=(0,l.Z)(e,o),E=(0,i.LU)(),h=null!=p?p:E.tableOfContents.minHeadingLevel,f=null!=b?b:E.tableOfContents.maxHeadingLevel,N=(0,i.DA)({toc:t,minHeadingLevel:h,maxHeadingLevel:f}),k=(0,s.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:h,maxHeadingLevel:f}}),[m,v,h,f]);return(0,i.Si)(k),s.createElement(r,(0,n.Z)({toc:N,className:c,linkClassName:m},g))}}}]);