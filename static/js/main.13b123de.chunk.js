(this["webpackJsonpt3-stocks"]=this["webpackJsonpt3-stocks"]||[]).push([[0],{119:function(e,t){},123:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),l=n.n(r),i=(n(85),n(39)),o=n(16),u=(n(86),n(71));var m=function(e){return c.a.createElement("div",null,c.a.createElement(u.a,{width:"700px",height:"400px",chartType:"LineChart",loader:c.a.createElement("div",null,"El gr\xe1fico se est\xe1 cargando"),data:e.dats,options:{hAxis:{title:"Tiempo(segundos)"},vAxis:{title:"Precio(USD)"}},rootProps:{"data-testid":"1"}}))},s=n(73),E=n.n(s),f=n(4),g=n(167),d=n(172),b=n(174),h=n(165),p=n(171),v=n(173),O=n(166),S=n(169),k=n(168),j=n(178),C=n(177),y=n(175),A=n(176),T=n(170),x=E()("wss://le-18262636.bitzonte.com",{path:"/stocks"});var N=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)([]),u=Object(o.a)(l,2),s=u[0],E=u[1],N=Object(a.useState)([]),_=Object(o.a)(N,2),F=_[0],w=_[1],I=Object(a.useState)([]),K=Object(o.a)(I,2),V=K[0],D=K[1],G=Object(a.useState)([]),z=Object(o.a)(G,2),H=z[0],P=z[1],X=Object(a.useState)("Selecciona una acci\xf3n"),M=Object(o.a)(X,2),q=M[0],L=M[1],U=Object(a.useState)(0),W=Object(o.a)(U,2),B=W[0],J=W[1],Y=Object(a.useState)("INFO"),Q=Object(o.a)(Y,2),R=Q[0],Z=Q[1],$=Object(a.useState)(!0),ee=Object(o.a)($,2),te=ee[0],ne=ee[1];Object(a.useEffect)((function(){J(Date.now()),x.on("connect",(function(){x.emit("EXCHANGES"),x.emit("STOCKS")})),x.on("EXCHANGES",(function(e){E(e)})),x.on("STOCKS",(function(e){w(e)})),x.on("UPDATE",(function(e){r((function(t){return[].concat(Object(i.a)(t),[e])}))})),x.on("BUY",(function(e){D((function(t){return[].concat(Object(i.a)(t),[e])}))})),x.on("SELL",(function(e){P((function(t){return[].concat(Object(i.a)(t),[e])}))}))}),[]);var ae=function(e){return V.filter((function(t){return t.ticker===e})).reduce((function(e,t){return e+t.volume}),0)},ce=function(e){return H.filter((function(t){return t.ticker===e})).reduce((function(e,t){return e+t.volume}),0)},re=function(e){return F.length>0?F.filter((function(t){return t.company_name===e}))[0].ticker:""},le=function(e){return e.length>0?e.reduce((function(e,t){return e+ae(re(t))}),0):0},ie=function(e){return e.length>0?e.reduce((function(e,t){return e+ce(re(t))}),0):0},oe=Object(f.a)((function(e){return{head:{backgroundColor:"#173F8A",color:e.palette.common.white},body:{fontSize:14}}}))(h.a),ue=Object(f.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(O.a),me=Object(g.a)((function(e){return{table:{minWidth:700},root:{flexGrow:1},formControl:{margin:e.spacing(1),minWidth:120}}}))();return c.a.createElement("div",null,c.a.createElement("header",{style:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#173F8A",color:"white"}},c.a.createElement("h1",null," Tarea 3 - Websockets")),c.a.createElement("nav",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement(k.a,{style:{margin:20},variant:"contained",color:"primary",onClick:function(){x.on("connect",(function(){return console.log(x.connected+"in func con")})),x.connect(),ne(!0)}}," conectar"),c.a.createElement("br",null),c.a.createElement(k.a,{variant:"contained",color:"secondary",onClick:function(){x.on("disconnect",(function(){return console.log(x.connected+"in func discon")})),ne(!1),x.disconnect()}}," desconectar ")),c.a.createElement("h2",{style:{color:"#173F8A",alignItems:"center",justifyContent:"center",display:"flex"}},"Est\xe1s: ",te?"Conectado/a":"Desconectado/a"),c.a.createElement("section",null,c.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement("div",null,c.a.createElement(C.a,{variant:"outlined",className:me.formControl},c.a.createElement(j.a,{htmlFor:"outlined-age-native-simple"},"Accion"),c.a.createElement(y.a,{native:!0,onChange:function(e){return L(e.target.value)}},c.a.createElement("option",{value:"Selecciona una acci\xf3n"},"Selecciona una acci\xf3n"),F.map((function(e){return c.a.createElement("option",{value:e.ticker},e.ticker)})))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),"Selecciona una acci\xf3n"==q?null:c.a.createElement("div",{style:{color:"#173F8A"}},c.a.createElement("h2",null," Est\xe1s viendo ",c.a.createElement("br",null),"el gr\xe1fico de: ",c.a.createElement("br",null)," "),c.a.createElement("h1",null,q))),"Selecciona una acci\xf3n"==q?c.a.createElement(m,{dats:[["x","Selecciona una acci\xf3n"],[0,0]]}):c.a.createElement(m,{dats:[["x",q]].concat(Object(i.a)(n.filter((function(e){return e.ticker===q})).map((function(e){var t=e.time,n=e.value;return[Math.abs(((t-B)/1e3).toFixed(1)),n]}))))}))),c.a.createElement("section",null,c.a.createElement(S.a,{className:me.root},c.a.createElement(A.a,{value:R,onChange:function(e,t){return Z(t)},indicatorColor:"primary",textColor:"primary",centered:!0},c.a.createElement(T.a,{value:"INFO",label:"STOCKS INFO"}),c.a.createElement(T.a,{value:"STOCKS",label:"STOCK STATS"}),c.a.createElement(T.a,{value:"EXCHANGE",label:"EXCHANGE STATS"}))),"INFO"==R?c.a.createElement(p.a,{component:S.a},c.a.createElement(d.a,{className:me.table,"aria-label":"customized table"},c.a.createElement(v.a,null,c.a.createElement(O.a,null,c.a.createElement(oe,null,"Nombre de ",c.a.createElement("br",null)," la empresa"),c.a.createElement(oe,{align:"right"},"Ticker"),c.a.createElement(oe,{align:"right"},"Pa\xeds de origen"))),c.a.createElement(b.a,null,Object.values(F).map((function(e){return c.a.createElement(ue,{key:e.company_name},c.a.createElement(oe,{component:"th",scope:"row"},e.company_name," "),c.a.createElement(oe,{align:"right"},e.ticker),c.a.createElement(oe,{align:"right"},e.country," "))}))))):"STOCKS"==R?c.a.createElement(p.a,{component:S.a},c.a.createElement(d.a,{className:me.table,"aria-label":"customized table"},c.a.createElement(v.a,null,c.a.createElement(O.a,null,c.a.createElement(oe,null,"STOCKS/",c.a.createElement("br",null),"DATA"),c.a.createElement(oe,{align:"right"},"Volumen Total"),c.a.createElement(oe,{align:"right"},"Max Valor"),c.a.createElement(oe,{align:"right"},"Min valor"),c.a.createElement(oe,{align:"right"},"\xdaltimo precio"),c.a.createElement(oe,{align:"right"},"Variaci\xf3n porcentual"))),c.a.createElement(b.a,null,F.map((function(e){return c.a.createElement(ue,{key:e.ticker},c.a.createElement(oe,{component:"th",scope:"row"},e.ticker," "),c.a.createElement(oe,{align:"right"},ae(e.ticker)+ce(e.ticker)),c.a.createElement(oe,{align:"right"},(t=e.ticker,n.filter((function(e){return e.ticker===t})).reduce((function(e,t){return t.value>e?t.value:e}),0))," ",e.quote_base," "),c.a.createElement(oe,{align:"right"},function(e){return n.filter((function(t){return t.ticker===e})).reduce((function(e,t){return t.value<e?t.value:e}),1/0)}(e.ticker)," ",e.quote_base),c.a.createElement(oe,{align:"right"},function(e){var t=n.filter((function(t){return t.ticker===e}));return t.length>0?t[t.length-1].value:0}(e.ticker)," ",e.quote_base),c.a.createElement(oe,{align:"right"},function(e){var t=n.filter((function(t){return t.ticker===e}));if(t.length>2){var a=t[t.length-1],c=t[t.length-2];return(100*(c.value-a.value)/c.value).toFixed(2)}return 0}(e.ticker)," %"));var t}))))):c.a.createElement(p.a,{component:S.a},c.a.createElement(d.a,{className:me.table,"aria-label":"customized table"},c.a.createElement(v.a,null,c.a.createElement(O.a,null,c.a.createElement(oe,null,"EXCHANGES/",c.a.createElement("br",null),"DATA"),c.a.createElement(oe,{align:"right"},"Volumen ",c.a.createElement("br",null),"Compra"),c.a.createElement(oe,{align:"right"},"Volumen",c.a.createElement("br",null)," Venta"),c.a.createElement(oe,{align:"right"},"Volumen",c.a.createElement("br",null)," Total"),c.a.createElement(oe,{align:"right"},"Cantidad ",c.a.createElement("br",null),"Acciones"),c.a.createElement(oe,{align:"right"},"Participaci\xf3n ",c.a.createElement("br",null),"de Mercado"))),c.a.createElement(b.a,null,Object.values(s).map((function(e){return c.a.createElement(ue,{key:e.exchange_ticker},c.a.createElement(oe,{component:"th",scope:"row"},e.exchange_ticker," "),c.a.createElement(oe,{align:"right"},le(e.listed_companies)),c.a.createElement(oe,{align:"right"},ie(e.listed_companies)),c.a.createElement(oe,{align:"right"},ie(e.listed_companies)+le(e.listed_companies)),c.a.createElement(oe,{align:"right"},e.listed_companies.length),c.a.createElement(oe,{align:"right"},(100*(ie(e.listed_companies)+le(e.listed_companies))/function(){var e=H.reduce((function(e,t){return e+t.volume}),0);return V.reduce((function(e,t){return e+t.volume}),0)+e}()).toFixed(2)," %"))})))))))};l.a.render(c.a.createElement(N,null),document.getElementById("root"))},80:function(e,t,n){e.exports=n(123)},85:function(e,t,n){},86:function(e,t,n){}},[[80,1,2]]]);
//# sourceMappingURL=main.13b123de.chunk.js.map