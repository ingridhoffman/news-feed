(this["webpackJsonpnews-feed"]=this["webpackJsonpnews-feed"]||[]).push([[0],{46:function(e,t,a){},47:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),s=a.n(r),i=(a(45),a(46),a(40)),l=a(20),o=(a(47),a(34)),u=a.n(o),h=function(e,t){console.log("search: ",e),console.log("page: ",t);var a="https://content.guardianapis.com/search?show-fields=thumbnail,trailText&page-size=12&"+(e?"q="+e+"&":"")+(1!==t?"page="+t.toString()+"&":"")+"api-key=ad0fa411-c9eb-4de2-befb-e050667a1e7d";return console.log("query: ",a),u.a.get(a)},j=a(35),d=a(11),b=a(5),g=function(e){var t=e.children;return Object(b.jsx)(j.a,{children:t})},f=function(e){return Object(b.jsxs)(d.a,{className:"mt-3",id:e.id,children:[Object(b.jsx)("a",{style:{position:"absolute",top:0,bottom:0,height:"100%",width:"100%"},href:e.link,target:"_blank",rel:"noreferrer"}),Object(b.jsx)(d.a.Img,{variant:"top",style:{height:"auto",maxWidth:"400px",minWidth:"300px"},src:e.thumbnail,alt:"Article Thumbnail"}),Object(b.jsxs)(d.a.Body,{children:[Object(b.jsx)(d.a.Subtitle,{className:"mb-2 text-muted",children:e.date}),Object(b.jsx)(d.a.Title,{children:e.title}),Object(b.jsx)(d.a.Text,{children:e.summary})]})]})},x=a(39),m=a(38),O=a(21),p=a(25),y=a(36),v=function(e){var t=e.page,a=e.lastPage,n=e.goBack,c=e.goNext,r=e.handleInput,s=e.handleSearch;return Object(b.jsxs)(m.a,{bg:"light",expand:"lg",children:[Object(b.jsx)(x.a,{className:"mr-auto",children:Object(b.jsxs)(O.a,{className:"my-0",children:[Object(b.jsx)(O.a.Prev,{disabled:t<=1,onClick:n}),Object(b.jsx)(O.a.Next,{disabled:a===t,onClick:c})]})}),Object(b.jsxs)(p.a,{inline:!0,onSubmit:s,children:[Object(b.jsx)(p.a.Control,{as:"input",type:"text",placeholder:"Search",className:"mr-sm-2",onChange:r}),Object(b.jsx)(y.a,{variant:"outline-success",type:"submit",children:"Search"})]})]})},w=a(37),N=function(){return Object(b.jsxs)(w.a,{className:"py-3",children:[Object(b.jsx)("h1",{className:"text-center",children:"Feed Me the News"}),Object(b.jsx)("h4",{className:"text-center",children:"Content from The Guardian"})]})};var S=function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(),s=Object(l.a)(r,2),o=s[0],u=s[1],j=Object(n.useState)(""),d=Object(l.a)(j,2),x=d[0],m=d[1],O=function(e){c(!0),h(x,e).then((function(e){var t=function(e){var t=e.results.map((function(e){return{id:e.id,date:new Date(e.webPublicationDate).toDateString(),title:e.webTitle,summary:e.fields.trailText,thumbnail:e.fields.thumbnail,link:e.webUrl}}));return{page:e.currentPage,totalPages:e.pages,results:t}}(e.data.response);u(t),c(!1)})).catch((function(e){console.log("error: ",e.code),c(!1)}))};Object(n.useEffect)((function(){O(1)}),[]);var p=function(e){var t=o.page+e;t>=1&&t<=o.totalPages&&O(t)};return Object(n.useEffect)((function(){console.log("news state: ",o)}),[o]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("header",{children:Object(b.jsx)(N,{})}),Object(b.jsxs)("main",{className:"container-lg",children:[Object(b.jsx)(v,{page:o?o.page:0,lastPage:o?o.totalPages:0,goBack:function(){return p(-1)},goNext:function(){return p(1)},handleInput:function(e){e.preventDefault(),m(e.target.value)},handleSearch:function(e){e.preventDefault(),O(1)}}),a?"Please wait while we load your results...":o?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(g,{children:o.results.length?o.results.map((function(e){return Object(b.jsx)(f,Object(i.a)({},e),e.id)})):"No results match your search criteria. Please try a different search."})}):"We are sorry. Something has gone wrong. Please try your search again later."]})]})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),P()}},[[70,1,2]]]);
//# sourceMappingURL=main.df6d581b.chunk.js.map