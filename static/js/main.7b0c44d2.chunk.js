(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(15),a(4)),u=a(5),i=a(7),s=a(6),h=a(1),m=a(8),d=(a(16),function(e){var t=e.onSearchChange,a=e.onSearchClick;return l.a.createElement("div",null,l.a.createElement("input",{type:"search",placeholder:"Enter search terms",onChange:t}),l.a.createElement("button",{onClick:a},"search"))});a(17);var E=function(e){var t=e.searchfield,a=e.onSearchChange,n=e.onSearchClick;return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,"Meteorite Explorer")),l.a.createElement("div",{className:"search"},l.a.createElement(d,{searchfield:t,onSearchChange:a,onSearchClick:n})))},f=(a(18),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value,typed:!0})},e.onSearchClick=function(t){e.setState({searchresult:e.state.data.filter(function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())})})},e.state={data:[],searchfield:"",searchresult:[],typed:!1},e.onSearchChange=e.onSearchChange.bind(Object(h.a)(e)),e.onSearchClick=e.onSearchClick.bind(Object(h.a)(e)),e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://data.nasa.gov/resource/gh4g-9sfh.json").then(function(e){return e.json()}).then(function(t){e.setState({data:t})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,{searchfield:this.state.searchfield,onSearchChange:this.onSearchChange,onSearchClick:this.onSearchClick}),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Id"),l.a.createElement("th",null,"Name Type"),l.a.createElement("th",null,"Rec Class"),l.a.createElement("th",null,"Mass (g)"),l.a.createElement("th",null,"Fall"),l.a.createElement("th",null,"Year"),l.a.createElement("th",null,"Latitude"),l.a.createElement("th",null,"Longitude"))),l.a.createElement("tbody",null,this.state.typed?this.state.searchresult.map(function(e,t){return l.a.createElement("tr",null,l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.nametype),l.a.createElement("td",null,e.recclass),l.a.createElement("td",null,e.mass),l.a.createElement("td",null,e.fall),l.a.createElement("td",null,e.year),l.a.createElement("td",null,e.reclat),l.a.createElement("td",null,e.reclong))}):this.state.data.map(function(e,t){return l.a.createElement("tr",null,l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.nametype),l.a.createElement("td",null,e.recclass),l.a.createElement("td",null,e.mass),l.a.createElement("td",null,e.fall),l.a.createElement("td",null,e.year),l.a.createElement("td",null,e.reclat),l.a.createElement("td",null,e.reclong))}))))}}]),t}(n.Component));a(19);var p=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.7b0c44d2.chunk.js.map