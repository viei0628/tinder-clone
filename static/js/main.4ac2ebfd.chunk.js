(this["webpackJsonptinder-clone"]=this["webpackJsonptinder-clone"]||[]).push([[0],{55:function(e,n,t){},56:function(e,n,t){},57:function(e,n,t){},65:function(e,n,t){},86:function(e,n,t){},88:function(e,n,t){"use strict";t.r(n);var c=t(0),a=t.n(c),s=t(15),r=t.n(s),i=(t(55),t(56),t(57),t(37)),o=t.n(i),j=t(102),l=t(38),d=t.n(l),u=t(2);var b=function(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)(j.a,{children:Object(u.jsx)(o.a,{fontSize:"large",className:"header__icon"})}),Object(u.jsx)("img",{className:"header__logo",src:"https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png",alt:"tinder logo"}),Object(u.jsx)(j.a,{children:Object(u.jsx)(d.a,{fontSize:"large",className:"header__icon"})})]})},h=t(25),p=t.n(h),O=t(39),f=t(47),m=(t(65),t(40)),x=t.n(m),g=t(41),v=t.n(g).a.create({baseURL:"https://tims-tinder-backend.herokuapp.com"});var _=function(){var e=Object(c.useState)([]),n=Object(f.a)(e,2),t=n[0],a=n[1];return Object(c.useEffect)((function(){(function(){var e=Object(O.a)(p.a.mark((function e(){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/tinder/cards");case 2:n=e.sent,a(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(u.jsx)("div",{className:"tinderCards",children:Object(u.jsx)("div",{className:"tinderCards__cardContainer",children:t.map((function(e){return Object(u.jsx)(x.a,{className:"swipe",preventSwipe:["up","down"],onSwipe:function(n){return t=e.name,void console.log("removing: "+t);var t},onCardLeftScreen:function(){return n=e.name,void console.log(n+"left the screen!");var n},children:Object(u.jsx)("div",{style:{backgroundImage:"url(".concat(e.imgUrl,")")},className:"card",children:Object(u.jsx)("h3",{children:e.name})})},Math.random())}))})})},w=(t(86),t(42)),N=t.n(w),S=t(43),z=t.n(S),B=t(44),k=t.n(B),C=t(45),y=t.n(C),E=t(46),I=t.n(E);var J=function(){return Object(u.jsxs)("div",{className:"swipeButtons",children:[Object(u.jsx)(j.a,{className:"swipeButtons__repeat",children:Object(u.jsx)(N.a,{fontSize:"large"})}),Object(u.jsx)(j.a,{className:"swipeButtons__left",children:Object(u.jsx)(z.a,{fontSize:"large"})}),Object(u.jsx)(j.a,{className:"swipeButtons__star",children:Object(u.jsx)(k.a,{fontSize:"large"})}),Object(u.jsx)(j.a,{className:"swipeButtons__right",children:Object(u.jsx)(y.a,{fontSize:"large"})}),Object(u.jsx)(j.a,{className:"swipeButtons__lightning",children:Object(u.jsx)(I.a,{fontSize:"large"})})]})};var L=function(){return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(b,{}),Object(u.jsx)(_,{}),Object(u.jsx)(J,{})]})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.4ac2ebfd.chunk.js.map