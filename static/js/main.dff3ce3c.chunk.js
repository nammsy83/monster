(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(3),r=n.n(o),l=(n(15),n(4)),i=n(5),s=n(8),u=n(6),h=n(1),m=n(7),d=(n(16),n(17),n(18),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:""}),a.a.createElement("h2",null,e.monster.name),a.a.createElement("p",null,e.monster.email))}),f=function(e){return a.a.createElement("div",{className:"card-list"},e.monsters.map(function(e){return a.a.createElement(d,{key:e.id,monster:e})}))},k=(n(19),function(e){var t=e.placeholder,n=e.handleChange;return a.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleclick3=function(){console.log("button 3 clicked")},e.state={monsters:[],searchfield:""},e.handleclick2=e.handleclick1.bind(Object(h.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({monsters:t})})}},{key:"handleclick1",value:function(){console.log("button1 clicked")}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,c=t.searchfield,o=n.filter(function(e){return e.name.toLowerCase().includes(c.toLowerCase())});return a.a.createElement("div",{className:"App"},a.a.createElement("button",{onClick:this.handleclick1()},"click1"),a.a.createElement("button",{onClick:this.handleclick1},"click2"),a.a.createElement("button",{onClick:this.handleclick2},"click3"),a.a.createElement("button",{onClick:this.handleclick3},"click4"),a.a.createElement(k,{placeholder:"Search monster",handleChange:function(t){return e.setState({searchfield:t.target.value})}}),a.a.createElement(f,{monsters:o}))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.dff3ce3c.chunk.js.map