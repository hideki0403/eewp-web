"use strict";(self.webpackChunkeewplus_docs=self.webpackChunkeewplus_docs||[]).push([[514,387],{1262:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),l=n(2389);function r(e){var t=e.children,n=e.fallback;return(0,l.Z)()?a.createElement(a.Fragment,null,t()):null!=n?n:null}},1579:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(7294),l=n(8790),r=n(2600),i=n(5979),c=n(6010),o=n(5537),s=n(7462);function d(e){return a.createElement("svg",(0,s.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var u=n(5999),m="collapseSidebarButton_FykI",b="collapseSidebarButtonIcon_DTRl";function p(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",m),onClick:t},a.createElement(d,{className:b}))}var f=n(3366),v=n(9960),h=n(3919),E=n(541),_="menuHtmlItem_fVIQ",k="menuExternalLink_tcZa",g=n(2389),C=["item"],S=["item","onItemClick","activePath","level","index"],I=["item","onItemClick","activePath","level","index"];function Z(e){var t=e.item,n=(0,f.Z)(e,C);switch(t.type){case"category":return a.createElement(T,(0,s.Z)({item:t},n));case"html":return a.createElement(N,(0,s.Z)({item:t},n));default:return a.createElement(M,(0,s.Z)({item:t},n))}}function T(e){var t=e.item,n=e.onItemClick,l=e.activePath,r=e.level,o=e.index,d=(0,f.Z)(e,S),m=t.items,b=t.label,p=t.collapsible,h=t.className,E=t.href,_=function(e){var t=(0,g.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0}),[e,t])}(t),k=(0,i._F)(t,l),C=(0,i.Mg)(E,l),I=(0,i.uR)({initialState:function(){return!!p&&(!k&&t.collapsed)}}),Z=I.collapsed,T=I.setCollapsed;!function(e){var t=e.isActive,n=e.collapsed,l=e.setCollapsed,r=(0,i.D9)(t);(0,a.useEffect)((function(){t&&!r&&n&&l(!1)}),[t,r,n,l])}({isActive:k,collapsed:Z,setCollapsed:T});var N=(0,i.fP)(),M=N.expandedItem,y=N.setExpandedItem;function x(e){void 0===e&&(e=!Z),y(e?null:o),T(e)}var A=(0,i.LU)().autoCollapseSidebarCategories;return(0,a.useEffect)((function(){p&&M&&M!==o&&A&&T(!0)}),[p,M,o,T,A]),a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":Z},h)},a.createElement("div",{className:(0,c.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":C})},a.createElement(v.Z,(0,s.Z)({className:(0,c.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!E,"menu__link--active":k}),onClick:p?function(e){null==n||n(t),E?x(!1):(e.preventDefault(),x())}:function(){null==n||n(t)},"aria-current":C?"page":void 0,"aria-expanded":p?!Z:void 0,href:p?null!=_?_:"#":_},d),b),E&&p&&a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:b}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),x()}})),a.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:Z},a.createElement(L,{items:m,tabIndex:Z?-1:0,onItemClick:n,activePath:l,level:r+1})))}function N(e){var t=e.item,n=e.level,l=e.index,r=t.value,o=t.defaultStyle,s=t.className;return a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(n),o&&_+" menu__list-item",s),key:l,dangerouslySetInnerHTML:{__html:r}})}function M(e){var t=e.item,n=e.onItemClick,l=e.activePath,r=e.level,o=(e.index,(0,f.Z)(e,I)),d=t.href,u=t.label,m=t.className,b=(0,i._F)(t,l),p=(0,h.Z)(d);return a.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(r),"menu__list-item",m),key:u},a.createElement(v.Z,(0,s.Z)({className:(0,c.Z)("menu__link",!p&&k,{"menu__link--active":b}),"aria-current":b?"page":void 0,to:d},p&&{onClick:n?function(){return n(t)}:void 0},o),u,!p&&a.createElement(E.Z,null)))}var y=["items"];function x(e){var t=e.items,n=(0,f.Z)(e,y);return a.createElement(i.D_,null,t.map((function(e,t){return a.createElement(Z,(0,s.Z)({key:t,item:e,index:t},n))})))}var L=(0,a.memo)(x),A="menu_izAj",w="menuWithAnnouncementBar_l2a_";function B(e){var t=e.path,n=e.sidebar,l=e.className,r=function(){var e=(0,i.nT)().isActive,t=(0,a.useState)(e),n=t[0],l=t[1];return(0,i.RF)((function(t){var n=t.scrollY;e&&l(0===n)}),[e]),e&&n}();return a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",A,r&&w,l)},a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(L,{items:n,activePath:t,level:1})))}var D="sidebar_RiAD",P="sidebarWithHideableNavbar_d0QC",H="sidebarHidden_Lg_2",R="sidebarLogo_YUvz";function F(e){var t=e.path,n=e.sidebar,l=e.onCollapse,r=e.isHidden,s=(0,i.LU)(),d=s.navbar.hideOnScroll,u=s.hideableSidebar;return a.createElement("div",{className:(0,c.Z)(D,d&&P,r&&H)},d&&a.createElement(o.Z,{tabIndex:-1,className:R}),a.createElement(B,{path:t,sidebar:n}),u&&a.createElement(p,{onClick:l}))}var W=a.memo(F),z=function(e){var t=e.sidebar,n=e.path,l=(0,i.el)();return a.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},a.createElement(L,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function Y(e){return a.createElement(i.Zo,{component:z,props:e})}var q=a.memo(Y);function U(e){var t=(0,i.iP)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(W,e),l&&a.createElement(q,e))}var V=n(6387),j="backToTopButton_RiI4",G="backToTopButtonShow_ssHd";function K(){var e=(0,a.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var n=document.documentElement.scrollTop;n>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*n)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}function Q(){var e=(0,a.useState)(!1),t=e[0],n=e[1],l=(0,a.useRef)(!1),r=K(),o=r.smoothScrollTop,s=r.cancelScrollToTop;return(0,i.RF)((function(e,t){var a=e.scrollY,r=null==t?void 0:t.scrollY;if(r)if(l.current)l.current=!1;else{var i=a<r;if(i||s(),a<300)n(!1);else if(i){var c=document.documentElement.scrollHeight;a+window.innerHeight<c&&n(!0)}else n(!1)}})),(0,i.SL)((function(e){e.location.hash&&(l.current=!0,n(!1))})),a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,j,t&&G),type:"button",onClick:function(){return o()}})}var X=n(6775),O={docPage:"docPage_P2Lg",docMainContainer:"docMainContainer_TCnq",docSidebarContainer:"docSidebarContainer_rKC_",docMainContainerEnhanced:"docMainContainerEnhanced_WDCb",docSidebarContainerHidden:"docSidebarContainerHidden_nvlY",collapsedDocSidebar:"collapsedDocSidebar_Xgr6",expandSidebarButtonIcon:"expandSidebarButtonIcon_AV8S",docItemWrapperEnhanced:"docItemWrapperEnhanced_r_WG"},J=n(4739);function $(e){var t=e.currentDocRoute,n=e.versionMetadata,l=e.children,o=e.sidebarName,s=(0,i.Vq)(),m=n.pluginId,b=n.version,p=(0,a.useState)(!1),f=p[0],v=p[1],h=(0,a.useState)(!1),E=h[0],_=h[1],k=(0,a.useCallback)((function(){E&&_(!1),v((function(e){return!e}))}),[E]);return a.createElement(a.Fragment,null,a.createElement(J.Z,{version:b,tag:(0,i.os)(m,b)}),a.createElement(r.Z,null,a.createElement("div",{className:O.docPage},a.createElement(Q,null),s&&a.createElement("aside",{className:(0,c.Z)(i.kM.docs.docSidebarContainer,O.docSidebarContainer,f&&O.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(O.docSidebarContainer)&&f&&_(!0)}},a.createElement(U,{key:o,sidebar:s,path:t.path,onCollapse:k,isHidden:E}),E&&a.createElement("div",{className:O.collapsedDocSidebar,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:k,onClick:k},a.createElement(d,{className:O.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(O.docMainContainer,(f||!s)&&O.docMainContainerEnhanced)},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",O.docItemWrapper,f&&O.docItemWrapperEnhanced)},l)))))}function ee(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,X.LX)(r.pathname,e)}));if(!o)return a.createElement(V.default,null);var s=o.sidebar,d=s?n.docsSidebars[s]:null;return a.createElement(i.FG,{className:(0,c.Z)(i.kM.wrapper.docsPages,i.kM.page.docsDocPage,n.className)},a.createElement(i.qu,{version:n},a.createElement(i.bT,{sidebar:null!=d?d:null},a.createElement($,{currentDocRoute:o,versionMetadata:n,sidebarName:s},(0,l.H)(t,{versionMetadata:n})))))}},6387:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(7294),l=n(2600);n(5999),n(5979);var r=n(1262);function i(e){return a.createElement(a.Fragment,null,a.createElement(l.Z,{title:"\u30da\u30fc\u30b8\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f"},a.createElement(r.Z,null,(function(){setTimeout((function(){window.location.href="/"}),5e3)})),a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"10vh",fontSize:"20px"}},a.createElement("span",null,"\u30da\u30fc\u30b8\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u30c8\u30c3\u30d7\u30da\u30fc\u30b8\u306b\u30ea\u30c0\u30a4\u30ec\u30af\u30c8\u3057\u307e\u3059\u3002"))))}}}]);