(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),i=(c(11),c(12),c(6)),o=c(4),d=c.n(o),r=c(0),j=function(e){var t=e.todos,c=e.checkedTodo,s=e.onCheckedTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed;return Object(r.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":(null===c||void 0===c?void 0:c.id)===t}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:t}),Object(r.jsx)("td",{className:"is-vcentered",children:n&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:d()({"has-text-success":n,"has-text-danger":!n}),children:a})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(Object(i.a)({},e))},children:Object(r.jsx)("span",{className:"icon",children:(null===c||void 0===c?void 0:c.id)===t?Object(r.jsx)("i",{className:"fa-eye-slash"}):Object(r.jsx)("i",{className:"far fa-eye"})})})})]},t)}))})]})},u=function(e){var t=e.option,c=e.setOption,s=e.query,a=e.setQuery;return Object(r.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){switch(e.target.value){case"active":return c("active");case"completed":return c("completed");default:return c("all")}},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return a(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:s&&Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")},children:"x"})})]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(14);var h,m=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},O=function(e){var t=e.todo,c=e.onClose,s=t.id,a=t.userId,i=t.completed,o=t.title,d=Object(l.useState)(!0),j=Object(n.a)(d,2),u=j[0],h=j[1],O=Object(l.useState)(null),x=Object(n.a)(O,2),f=x[0],p=x[1];return Object(l.useEffect)((function(){(function(e){return b("/users/".concat(e))})(a).then((function(e){return p(e)})).then((function(){return h(!1)}))}),[a]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),u?Object(r.jsx)(m,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(s)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:o}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[i?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",f&&Object(r.jsx)("a",{href:"mailto:".concat(null===f||void 0===f?void 0:f.email),children:f.name})]})]})]})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(h||(h={}));var x=function(){var e=Object(l.useState)(!0),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(""),i=Object(n.a)(a,2),o=i[0],d=i[1],x=Object(l.useState)("all"),f=Object(n.a)(x,2),p=f[0],v=f[1],N=Object(l.useState)([]),y=Object(n.a)(N,2),g=y[0],k=y[1],C=Object(l.useState)(null),S=Object(n.a)(C,2),w=S[0],T=S[1];Object(l.useEffect)((function(){b("/todos").then((function(e){return k(e)})).then((function(){return s(!1)}))}),[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(u,{option:p,setOption:v,query:o,setQuery:d})}),Object(r.jsxs)("div",{className:"block",children:[c&&Object(r.jsx)(m,{}),Object(r.jsx)(j,{todos:g.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())})).filter((function(e){switch(p){case h.Active:return!e.completed;case h.Completed:return e.completed;default:return e}})),checkedTodo:w,onCheckedTodo:T})]})]})})}),w&&Object(r.jsx)(O,{todo:w,onClose:function(){return T(null)}})]})};a.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.69c98ef8.chunk.js.map