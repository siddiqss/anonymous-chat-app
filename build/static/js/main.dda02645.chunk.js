(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,a){},142:function(e,a,t){"use strict";t.r(a);var n,r=t(0),o=t.n(r),c=t(8),s=t.n(c),i=(t(90),t(28)),l=t(173),m=t(175),u=t(50),d=t(176),h=t(177),p=t(178),f=t(181),g=t(179),E=t(180),v=t(37),b=t(47),y=t(77),x=t(78),N=t.n(x),w=t(15),C=w.Name.firstName(),j=w.random.us_state(),M=w.Name.firstName(),O=w.Name.firstName(),I=["Hey, I'm from ".concat(j," !"),"Did you watch the Last Season of GOT?","Trump Memes are lit!","These 14 years old Nibbas are so cooool!!!","Ronaldo is sexy!","Sarfaraz should be fired!","What's up!"],S=["I Love FIFA!","Witcher 3 has tough missions!","I just played Watch Dogs 3. Man, it's hot!","Do you play strategic games?"],k=o.a.createContext(),W={General:[{from:M,msg:I[Math.floor(Math.random()*I.length)]}],GamersZone:[{from:O,msg:S[Math.floor(Math.random()*S.length)]}]},A=function(e,a){var t=a.payload,n=t.from,r=t.msg,o=t.topic;switch(a.type){case"RECEIVE_MSG":return Object(y.a)({},e,Object(v.a)({},o,[].concat(Object(b.a)(e[o]),[{from:n,msg:r}])));default:return e}};function G(e){n.emit("chat message",e)}function R(e){var a=o.a.useReducer(A,W),t=Object(i.a)(a,2),r=t[0],c=t[1];n||(n=N()("http://localhost")).on("chat message",function(e){c({type:"RECEIVE_MSG",payload:e})});var s=C;return o.a.createElement(k.Provider,{value:{allChats:r,sendChatAction:G,user:s}},e.children)}var B=Object(l.a)(function(e){return{root:{padding:e.spacing(3,2),margin:"50px"},flex:{display:"flex",alignItems:"center"},chip:{margin:e.spacing(1)},topicWindow:{width:"30%",height:"300px",borderRight:"1px solid grey"},chatWindow:{width:"70%",height:"300px",padding:"20px"},button:{width:"15%"},msgBox:{width:"80%"}}});var T=function(e){var a=B(),t=o.a.useContext(k),n=t.allChats,r=t.sendChatAction,c=t.user,s=Object.keys(n),l=o.a.useState(s[0]),v=Object(i.a)(l,2),b=v[0],y=v[1],x=o.a.useState(""),N=Object(i.a)(x,2),w=N[0],C=N[1];return o.a.createElement("div",null,o.a.createElement(m.a,{className:a.root},o.a.createElement(u.a,{variant:"h4",component:"h4"},"Anon Chat App"),o.a.createElement(u.a,{variant:"h5",component:"h5"},b),o.a.createElement("div",{className:a.flex},o.a.createElement("div",{className:a.topicWindow},o.a.createElement(d.a,null,s.map(function(e){return o.a.createElement(h.a,{onClick:function(e){return y(e.target.innerText)},key:e,button:!0},o.a.createElement(p.a,{primary:e}))}))),o.a.createElement("div",{className:a.chatWindow},n[b].map(function(e,t){return o.a.createElement("div",{className:a.flex,key:t},o.a.createElement(f.a,{label:e.from,className:a.chip}),o.a.createElement(u.a,{variant:"body1",gutterBottom:!0},e.msg))}))),o.a.createElement("div",{className:a.flex},o.a.createElement(E.a,{id:"standard-name",label:"Send a Message",className:a.msgBox,value:w,margin:"normal",onChange:function(e){return C(e.target.value)}}),o.a.createElement(g.a,{variant:"contained",color:"primary",className:a.button,onClick:function(){r({from:c,msg:w,topic:b}),C("")}},"Send"))))};var D=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(R,null,o.a.createElement(T,null)))};s.a.render(o.a.createElement(D,null),document.getElementById("root"))},85:function(e,a,t){e.exports=t(142)},90:function(e,a,t){}},[[85,1,2]]]);
//# sourceMappingURL=main.dda02645.chunk.js.map