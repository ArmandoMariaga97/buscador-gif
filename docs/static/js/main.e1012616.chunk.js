(this["webpackJsonpintro-javascript"]=this["webpackJsonpintro-javascript"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>0&&(t((function(e){return[r].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(e){o(e.target.value)},placeholder:"Buscar GIFs "})})},j=n(6),l=n.n(j),d=n(8),m=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,a,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&api_key=xZxkp6bmYkbX25gtCmmuD58cyFfQhxvo&limit=8"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,c=a.data,r=c.map((function(e){return{id:e.id,title:e.title,url:e.images.fixed_height_small.url}})),console.log(c),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.category;Object(a.useEffect)((function(){return m(t).then(s)}),[]);var n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h2",{className:"animate__animated animate__fadeInDown",children:[" ",t," "]}),Object(u.jsx)("div",{className:"row",children:r.map((function(e){var t=e.url,n=e.title,a=e.id;return Object(u.jsx)("div",{className:"col-md-3 p-3 animate__animated animate__fadeInDown",children:Object(u.jsxs)("div",{className:" card-j bg-white rounded",children:[Object(u.jsx)("img",{loading:"lazy",height:"200px",src:t,className:"card-img-top",alt:"..."}),Object(u.jsx)("div",{className:"card-body",children:Object(u.jsxs)("h5",{className:"card-title text-gray",children:[" ",n," "]})})]})},a)}))})]})},h=function(e){var t=Object(a.useState)([]),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:" Gif Expert App "}),Object(u.jsx)(o,{setCategories:r}),Object(u.jsx)("hr",{}),c.map((function(e){return Object(u.jsx)(b,{category:e},e)}))]})},p=(n(16),document.getElementById("gifApp"));r.a.render(Object(u.jsx)(h,{}),p)}},[[17,1,2]]]);
//# sourceMappingURL=main.e1012616.chunk.js.map