(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,n){e.exports=n(34)},26:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),o=n.n(i),c=(n(26),n(6)),l=n(7),u=n(1),s=(n(27),n(28),n(9)),m=n(10),d=n(12),p=n(11);function h(e){var t=e.name,n=e.link;return r.a.createElement("div",null,r.a.createElement(l.b,{to:n},r.a.createElement("button",{className:"btn btn-primary btn-block"}," ",t)))}var b=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target;a.setState(Object(c.a)({},t.name,t.value))},a.update=function(){fetch("/update",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({id_equipe:a.state.data.id_equipe,nom_equipe:a.state.nom_equipe})}).then((function(e){return e.json()}))},a.delete=function(){fetch("/delete",{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify({id_equipe:a.state.data.id_equipe})}).then((function(e){return e.json()})).then((function(e){"1"===e.getResponseHeader("REQUIRES_AUTH")&&(window.location="/")}))},a.state={nom_equipe:null,id_equipe:a.props.match.params.id,data:null},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/read").then((function(e){return e.json()})).then((function(t){for(var n=0;n<t.length;n++){var a=t[n];a.id_equipe==e.props.match.params.id&&e.setState({data:a})}}))}},{key:"render",value:function(){var e=null!=this.state.data?this.state.data.nom_equipe:null;return r.a.createElement("div",null,r.a.createElement("h1",null,e),r.a.createElement("form",{onSubmit:this.update},r.a.createElement("input",{style:{padding:"20px",width:"200px"},name:"nom_equipe",placeholder:"update team",type:"text",value:this.state.nom_equipe,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Update",className:"btn btn-primary btn-block"})),r.a.createElement("form",{onSubmit:this.delete},r.a.createElement("input",{style:{backgroundColor:"red"},name:"id_equipe",type:"submit",value:"Delete",className:"btn btn-primary btn-block"})),r.a.createElement(h,{name:"Back to Teams",link:"/teams"}))}}]),n}(r.a.Component),f=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).change=function(e){var t=e.target;a.setState(Object(c.a)({},t.name,t.value))},a.submit=function(){fetch("/create/",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nom_equipe:a.state.nom_equipe})}).then((function(e){return e.json()}))},a.state={nom_equipe:null},a}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.submit},r.a.createElement("input",{name:"nom_equipe",placeholder:"add team",type:"text",value:this.state.nom_equipe,onChange:this.change}),r.a.createElement("input",{type:"submit",value:"Add Team",className:"btn btn-primary btn-block"}))}}]),n}(a.Component),v=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={error:null,isLoaded:!1},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/read/").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,teams:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,a=e.teams;return t?r.a.createElement("div",null,"Error in loading"):n?r.a.createElement("div",null,r.a.createElement("div",{className:"cards"},a.map((function(e){return r.a.createElement("div",{className:"card",key:e.id_equipe},r.a.createElement(l.b,{to:"/".concat(e.id_equipe)},r.a.createElement("p",{className:"card-title",onClick:b},e.nom_equipe)))}))),r.a.createElement(f,null),r.a.createElement(h,{name:"Back to Home",link:"/"})):r.a.createElement("div",null,"Loading ...")}}]),n}(a.Component);function E(){return r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}},r.a.createElement(l.b,{to:"/teams"},r.a.createElement("button",{className:"btn btn-primary btn-block",style:{boxShadow:"0px 14px 80px blue",height:"100px"}},"Manage Your Teams")))}var y=function(){var e,t;return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,(e={exact:!0,path:"/"},Object(c.a)(e,"exact",!0),Object(c.a)(e,"component",E),e)),r.a.createElement(u.a,(t={exact:!0,path:"/teams"},Object(c.a)(t,"exact",!0),Object(c.a)(t,"component",v),t)),r.a.createElement(u.a,{exact:!0,path:"/:id",component:b}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.bc49416e.chunk.js.map