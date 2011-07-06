/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("event/base",function(p,d,m,j){function o(a,e,l){if((l=p.trim(l))&&l.indexOf(t)>0){var q=p.makeArray(arguments);p.each(l.split(t),function(k){var g=p.clone(q);g.splice(0,3,e,k);b[a].apply(b,g)});return true}return j}function c(a){return a&&a.nodeType!==3&&a.nodeType!==8}function n(a,e,l,q,k){var g=b.special[e]||{};if(!q.length&&(!g.setup||g.setup.call(a)===false))i(a,e,l);g.add&&g.add.call(a,k)}var f=document,i=f.addEventListener?function(a,e,l,q){a.addEventListener&&a.addEventListener(e,
l,!!q)}:function(a,e,l){a.attachEvent&&a.attachEvent("on"+e,l)},u=f.removeEventListener?function(a,e,l,q){a.removeEventListener&&a.removeEventListener(e,l,!!q)}:function(a,e,l){a.detachEvent&&a.detachEvent("on"+e,l)},t=" ",s="",h="trigger-none-"+p.now(),z="ksEventTargetId"+p.now(),b={_data:function(){var a=p.makeArray(arguments);a.splice(1,0,z);return d.data.apply(d,a)},_removeData:function(){var a=p.makeArray(arguments);a.splice(1,0,z);return d.removeData.apply(d,a)},special:{},add:function(a,e,
l,q,k){if(o("add",a,e,l,q,k))return a;d.query(a).each(function(g){var w=!g.isCustomEventTarget,r;if(!(!g||!e||!p.isFunction(l)||w&&!c(g))){(r=b._data(g))||b._data(g,r={});var v=r.events=r.events||{};v=v[e]=v[e]||[];var A={fn:l,scope:q||g,data:k},x=r.handler;if(!x){x=r.handler=function(y,B){if(!(y&&y.type==s)){var D=x.target;if(!y||!y.fixed)y=new m(D,y);p.isPlainObject(B)&&p.mix(y,B);return b._handle(D,y)}};x.target=g}if(w){n(g,e,x,v,A);g=null}v.push(A)}});return a},__getListeners:function(a,e){return(b.__getEvents(a)||
{})[e]||[]},__getEvents:function(a){return(a=b._data(a))&&a.events},remove:function(a,e,l,q,k){if(o("remove",a,e,l,q))return a;d.query(a).each(function(g){var w=b._data(g),r=w&&w.events,v,A,x,y,B,D=!g.isCustomEventTarget,F=D&&b.special[e]||{};if(!(!g||!D&&!c(g)||!r))if(e===j)for(e in r)b.remove(g,e);else{q=q||g;if(v=r[e]){A=v.length;if(p.isFunction(l)&&A){y=x=0;for(B=[];x<A;++x){var G=false,C=v[x];if(l!==C.fn||q!==C.scope){B[y++]=C;G=true}else if(k!==E){var E=C.data;if(!k&&E||E&&!k){B[y++]=C;G=true}else if(k&&
E)if(!k.equals||!E.equals)p.error("no equals in data");else if(!E.equals(k)){B[y++]=C;G=true}}!G&&F.remove&&F.remove.call(g,C)}r[e]=B;A=B.length}if(l===j||A===0){if(D&&(!F.tearDown||F.tearDown.call(g)===false))u(g,e,w.handler);delete r[e]}}if(p.isEmptyObject(r)){w.handler.target=null;delete w.handler;delete w.events;b._removeData(g)}}});return a},_handle:function(a,e){for(var l=b.__getListeners(a,e.type).slice(0),q,k,g=0,w=l.length;g<w;++g){q=l[g];q=q.fn.call(q.scope,e,q.data);if(q!==j){if(k!==false)k=
q;q===false&&e.halt()}if(e.isImmediatePropagationStopped)break}return k},fire:function(a,e,l){if(!o("fire",a,e,l)){var q;d.query(a).each(function(k){var g=!k.isCustomEventTarget;l=l||{};l.type=e;if(g){g=l;var w;if(c(k)){g=new m(k,g);var r=g.target=k,v="on"+e;do{var A=(b._data(r)||{}).handler;g.currentTarget=r;A&&A.call(r,g);if(r[v]&&r[v].call(r)===false){w=false;g.preventDefault()}r=r.parentNode||r.ownerDocument||r===k.ownerDocument&&window}while(r&&!g.isPropagationStopped);if(!g.isDefaultPrevented)if(!(e===
"click"&&k.nodeName.toLowerCase()=="a")){var x;try{if(v&&k[e]){if(x=k[v])k[v]=null;s=e;k[e]()}}catch(y){}if(x)k[v]=x;s=h}}k=w;if(k!==j)q=k}else if((k=b._data(k))&&p.isFunction(k.handler))q=k.handler(j,l)});return q}},_batchForType:o,_simpleAdd:i,_simpleRemove:u};b.on=b.add;b.detach=b.remove;return b},{requires:["dom","event/object"]});
KISSY.add("event/delegate",function(p,d,m){function j(f){return f.fn===undefined&&f.selector===undefined?true:f.fn===undefined?this.selector==f.selector:this.fn==f.fn&&this.selector==f.selector&&this.scope==f.scope}function o(f,i){var u,t=d.closest(f.target,[i.selector],this);if(t)for(var s=0;s<t.length;s++){f.currentTarget=t[s];var h=i.fn.call(i.scope||this,f);if(h===false||f.isPropagationStopped||f.isImmediatePropagationStopped){if(h===false)u=h;if(f.isPropagationStopped||f.isImmediatePropagationStopped)break}}return u}
var c=m._batchForType,n={focus:"focusin",blur:"focusout"};p.mix(m,{delegate:function(f,i,u,t,s){if(c("delegate",f,i,u,t,s))return f;d.query(f).each(function(h){if(!h.isCustomEventTarget){i=n[i]||i;m.on(h,i,o,h,{fn:t,selector:u,scope:s,equals:j})}});return f},undelegate:function(f,i,u,t,s){if(c("undelegate",f,i,u,t,s))return f;d.query(f).each(function(h){if(!h.isCustomEventTarget){i=n[i]||i;m.remove(h,i,o,h,{fn:t,selector:u,scope:s,equals:j})}});return f}});return m},{requires:["dom","./base"]});
KISSY.add("event/focusin",function(p,d,m){d.ie||p.each([{name:"focusin",fix:"focus"},{name:"focusout",fix:"blur"}],function(j){function o(n){return m.fire(n.target,j.name)}var c=0;m.special[j.name]={setup:function(){c++===0&&document.addEventListener(j.fix,o,true)},tearDown:function(){--c===0&&document.removeEventListener(j.fix,o,true)}}});return m},{requires:["ua","./base"]});
KISSY.add("event/hashchange",function(p,d,m,j){j=document.documentMode||j.ie;if(!("onhashchange"in window)||j<8){var o,c=[],n=s();d.special.hashchange={setup:function(){-1===p.indexOf(this,c)&&c.push(this);o||f()},tearDown:function(){var h=p.indexOf(this,c);h>=0&&c.splice(h,1);if(c.length===0){o&&clearTimeout(o);o=null}}};var f=function(){i()},i=function(){var h=s();if(h!==n){u(h);n=h}o=setTimeout(i,50)},u=function(h){t(h)},t=function(){for(var h=0;h<c.length;h++)d._handle(c[h],{type:"hashchange"})},
s=function(){return"#"+location.href.replace(/^[^#]*#?(.*)$/,"$1")};j<8&&function(){var h;f=function(){if(!h){h=m.create('<iframe style="display: none" height="0" width="0" tabindex="-1" title="empty"/>');m.prepend(h,document.documentElement);d.add(h,"load",function(){d.remove(h,"load");u(s());d.add(h,"load",z);i()});var z=function(){var b=p.trim(h.contentWindow.document.body.innerHTML),a=s();if(b!=a)n=location.hash=b;t(b)}}};u=function(z){z="<html><body>"+z+"</body></html>";var b=h.contentWindow.document;
try{b.open();b.write(z);b.close();return true}catch(a){return false}}}()}},{requires:["./base","dom","ua"]});
KISSY.add("event/mouseenter",function(p,d,m,j){j.ie||p.each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(o){function c(n){var f=this,i=n.relatedTarget;n.type=o.name;try{if(!(i&&i!==document&&!i.parentNode)){i=m.closest(i,function(t){return t==f});i!==f&&d._handle(f,n)}}catch(u){}}d.special[o.name]={setup:function(){d.add(this,o.fix,c)},tearDown:function(){d.remove(this,o.fix,c)}}});return d},{requires:["./base","dom","ua"]});
KISSY.add("event/object",function(p,d){function m(c,n,f){this.currentTarget=c;this.originalEvent=n||{};if(n){this.type=n.type;this._fix()}else{this.type=f;this.target=c}this.currentTarget=c;this.fixed=true}var j=document,o="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");
p.augment(m,{_fix:function(){var c=this.originalEvent,n=o.length,f,i=this.currentTarget;for(i=i.nodeType===9?i:i.ownerDocument||j;n;){f=o[--n];this[f]=c[f]}if(!this.target)this.target=this.srcElement||j;if(this.target.nodeType===3)this.target=this.target.parentNode;if(!this.relatedTarget&&this.fromElement)this.relatedTarget=this.fromElement===this.target?this.toElement:this.fromElement;if(this.pageX===d&&this.clientX!==d){c=i.documentElement;n=i.body;this.pageX=this.clientX+(c&&c.scrollLeft||n&&n.scrollLeft||
0)-(c&&c.clientLeft||n&&n.clientLeft||0);this.pageY=this.clientY+(c&&c.scrollTop||n&&n.scrollTop||0)-(c&&c.clientTop||n&&n.clientTop||0)}if(this.which===d)this.which=this.charCode!==d?this.charCode:this.keyCode;if(this.metaKey===d)this.metaKey=this.ctrlKey;if(!this.which&&this.button!==d)this.which=this.button&1?1:this.button&2?3:this.button&4?2:0},preventDefault:function(){var c=this.originalEvent;if(c.preventDefault)c.preventDefault();else c.returnValue=false;this.isDefaultPrevented=true},stopPropagation:function(){var c=
this.originalEvent;if(c.stopPropagation)c.stopPropagation();else c.cancelBubble=true;this.isPropagationStopped=true},stopImmediatePropagation:function(){var c=this.originalEvent;c.stopImmediatePropagation?c.stopImmediatePropagation():this.stopPropagation();this.isImmediatePropagationStopped=true},halt:function(c){c?this.stopImmediatePropagation():this.stopPropagation();this.preventDefault()}});return m});
KISSY.add("event/target",function(p,d){return{isCustomEventTarget:true,fire:function(m,j){return d.fire(this,m,j)},on:function(m,j,o){d.add(this,m,j,o);return this},detach:function(m,j,o){d.remove(this,m,j,o);return this}}},{requires:["./base","dom"]});
KISSY.add("event/valuechange",function(p,d,m){function j(b){var a=m.data(b,t);if(!a){a=+new Date;m.data(b,t,a)}return a}function o(b){b=j(b);delete s[b];if(h[b]){clearTimeout(h[b]);delete h[b]}}function c(b){o(b.target)}function n(b){var a=j(b);h[a]||(h[a]=setTimeout(function(){var e=b.value;if(e!==s[a]){d._handle(b,{type:u,prevVal:s[a],newVal:e});s[a]=e}h[a]=setTimeout(arguments.callee,z)},z))}function f(b){var a=b.target;if(b.type=="focus"){b=j(a);s[b]=a.value}n(a)}function i(b){o(b);d.remove(b,
"blur",c);d.remove(b,"mousedown keyup keydown focus",f);m.removeData(b,t)}var u="valueChange",t="event/valuechange",s={},h={},z=50;d.special[u]={fix:false,setup:function(){var b=this.nodeName.toLowerCase();if("input"==b||"textarea"==b){i(this);d.on(this,"blur",c);d.on(this,"mousedown keyup keydown focus",f)}},tearDown:function(){i(this)}};return d},{requires:["./base","dom"]});
KISSY.add("event",function(p,d,m,j){d.Target=m;d.Object=j;return d},{requires:["event/base","event/target","event/object","event/focusin","event/hashchange","event/valuechange","event/delegate","event/mouseenter"]});
