/*
Copyright 2010, KISSY UI Library v1.1.2
MIT Licensed
build time: Aug 19 19:35
*/
(function(b,i,p){if(b[i]===p)b[i]={};i=b[i];var q=b.document,h=location,l=function(g,k,o,r){if(!k||!g)return g;if(o===p)o=true;var d,a,e;if(r&&(e=r.length))for(d=0;d<e;d++){a=r[d];if(a in k)if(o||!(a in g))g[a]=k[a]}else for(a in k)if(o||!(a in g))g[a]=k[a];return g},j=false,f=[],u=false,z=/^#?([\w-]+)$/,t=0;l(i,{version:"1.1.2",_init:function(){this.Env={mods:{},_loadingQueue:{}};var g=q.getElementsByTagName("script");this.Config={debug:"",base:g[g.length-1].src.replace(/^(.*)(seed|kissy).*$/i,
"$1"),timeout:10}},ready:function(g){u||this._bindReady();j?g.call(b,this):f.push(g);return this},_bindReady:function(){var g=this,k=q.documentElement.doScroll,o=k?"onreadystatechange":"DOMContentLoaded",r=function(){g._fireReady()};u=true;if(q.readyState==="complete")return r();if(q.addEventListener){var d=function(){q.removeEventListener(o,d,false);r()};q.addEventListener(o,d,false);b.addEventListener("load",r,false)}else{var a=function(){if(q.readyState==="complete"){q.detachEvent(o,a);r()}};q.attachEvent(o,
a);b.attachEvent("onload",r);if(b==b.top){var e=function(){try{k("left");r()}catch(n){setTimeout(e,1)}};e()}}},_fireReady:function(){if(!j){j=true;if(f){for(var g,k=0;g=f[k++];)g.call(b,this);f=null}}},available:function(g,k){if((g=(g+"").match(z)[1])&&i.isFunction(k))var o=1,r=i.later(function(){if(q.getElementById(g)&&(k()||1)||++o>500)r.cancel()},40,true)},mix:l,merge:function(){var g={},k,o=arguments.length;for(k=0;k<o;++k)l(g,arguments[k]);return g},augment:function(){var g=arguments,k=g.length-
2,o=g[0],r=g[k],d=g[k+1],a=1;if(!i.isArray(d)){r=d;d=p;k++}if(!i.isBoolean(r)){r=p;k++}for(;a<k;a++)l(o.prototype,g[a].prototype||g[a],r,d);return o},extend:function(g,k,o,r){if(!k||!g)return g;var d=Object.prototype,a=k.prototype,e=function(n){function c(){}c.prototype=n;return new c}(a);g.prototype=e;e.constructor=g;g.superclass=a;if(k!==Object&&a.constructor===d.constructor)a.constructor=k;o&&l(e,o);r&&l(g,r);return g},namespace:function(){var g=arguments.length,k=null,o,r,d;for(o=0;o<g;++o){d=
(""+arguments[o]).split(".");k=this;for(r=b[d[0]]===k?1:0;r<d.length;++r)k=k[d[r]]=k[d[r]]||{}}return k},app:function(g,k){var o=i.isString(g),r=o?b[g]||{}:g;l(r,this,true,i._APP_MEMBERS);r._init();l(r,i.isFunction(k)?k():k);o&&(b[g]=r);return r},log:function(g,k,o){if(i.Config.debug){if(o)g=o+": "+g;if(b.console!==p&&console.log)console[k&&console[k]?k:"log"](g)}},error:function(g){if(i.Config.debug)throw g;},guid:function(g){var k=t++ +"";return g?g+k:k}});i._init();i._APP_MEMBERS=["_init","namespace"];
if(h&&(h.search||"").indexOf("ks-debug")!==-1)i.Config.debug=true})(window,"KISSY");
(function(b,i,p){function q(c){var m=typeof c;return c===null||m!=="object"&&m!=="function"}function h(c){return f.slice.call(c)}var l=document,j=l.documentElement,f=Array.prototype,u=f.indexOf,z=f.lastIndexOf,t=f.filter,g=String.prototype.trim,k=Object.prototype.toString,o=encodeURIComponent,r=decodeURIComponent,d=/^\s+|\s+$/g,a=/^(\w+)\[\]$/,e=/\S/;i.mix(i,{isUndefined:function(c){return c===p},isBoolean:function(c){return typeof c==="boolean"},isString:function(c){return typeof c==="string"},isNumber:function(c){return typeof c===
"number"&&isFinite(c)},isPlainObject:function(c){return c&&k.call(c)==="[object Object]"&&!c.nodeType&&!c.setInterval},isEmptyObject:function(c){for(var m in c)return false;return true},isFunction:function(c){return k.call(c)==="[object Function]"},isArray:function(c){return k.call(c)==="[object Array]"},trim:g?function(c){return c==p?"":g.call(c)}:function(c){return c==p?"":c.toString().replace(d,"")},substitute:function(c,m,x){if(!i.isString(c)||!i.isPlainObject(m))return c;return c.replace(x||
/\\?\{([^{}]+)\}/g,function(s,w){if(s.charAt(0)==="\\")return s.slice(1);return m[w]!==p?m[w]:""})},each:function(c,m,x){var s,w=0,A=c.length,v=A===p||i.isFunction(c);x=x||b;if(v)for(s in c){if(m.call(x,c[s],s,c)===false)break}else for(s=c[0];w<A&&m.call(x,s,w,c)!==false;s=c[++w]);return c},indexOf:u?function(c,m){return u.call(m,c)}:function(c,m){for(var x=0,s=m.length;x<s;++x)if(m[x]===c)return x;return-1},lastIndexOf:z?function(c,m){return z.call(m,c)}:function(c,m){for(var x=m.length-1;x>=0;x--)if(m[x]===
c)break;return x},unique:function(c,m){m&&c.reverse();c=c.slice();for(var x=0,s,w;x<c.length;){for(w=c[x];(s=i.lastIndexOf(w,c))!==x;)c.splice(s,1);x+=1}m&&c.reverse();return c},inArray:function(c,m){return i.indexOf(c,m)>-1},makeArray:function(c){if(c===null||c===p)return[];if(i.isArray(c))return c;if(typeof c.length!=="number"||i.isString(c)||i.isFunction(c))return[c];return h(c)},filter:t?function(c,m,x){return t.call(c,m,x)}:function(c,m,x){var s=[];i.each(c,function(w,A,v){m.call(x,w,A,v)&&s.push(w)});
return s},param:function(c,m){if(!i.isPlainObject(c))return"";m=m||"&";var x=[],s,w;for(s in c){w=c[s];s=o(s);if(q(w))x.push(s,"=",o(w+""),m);else if(i.isArray(w)&&w.length)for(var A=0,v=w.length;A<v;++A)q(w[A])&&x.push(s,"[]=",o(w[A]+""),m)}x.pop();return x.join("")},unparam:function(c,m){if(typeof c!=="string"||(c=i.trim(c)).length===0)return{};var x={};c=c.split(m||"&");for(var s,w,A,v=0,y=c.length;v<y;++v){m=c[v].split("=");s=r(m[0]);try{w=r(m[1]||"")}catch(B){w=m[1]||""}if((A=s.match(a))&&A[1]){x[A[1]]=
x[A[1]]||[];x[A[1]].push(w)}else x[s]=w}return x},later:function(c,m,x,s,w){m=m||0;s=s||{};var A=c,v=i.makeArray(w),y;if(i.isString(c))A=s[c];A||i.error("method undefined");c=function(){A.apply(s,v)};y=x?setInterval(c,m):setTimeout(c,m);return{id:y,interval:x,cancel:function(){this.interval?clearInterval(y):clearTimeout(y)}}},clone:function(c){var m=c,x,s;if(c&&((x=i.isArray(c))||i.isPlainObject(c))){m=x?[]:{};for(s in c)if(c.hasOwnProperty(s))m[s]=i.clone(c[s])}return m},now:function(){return(new Date).getTime()},
globalEval:function(c){if(c&&e.test(c)){var m=l.getElementsByTagName("head")[0]||j,x=l.createElement("script");x.text=c;m.insertBefore(x,m.firstChild);m.removeChild(x)}}});try{h(j.childNodes)}catch(n){h=function(c){for(var m=[],x=c.length-1;x>=0;x--)m[x]=c[x];return m}}})(window,KISSY);
(function(b,i,p){var q=b.document,h=q.getElementsByTagName("head")[0]||q.documentElement,l=2,j=3,f=4,u=i.mix,z=q.createElement("script").readyState?function(g,k){var o=g.onreadystatechange;g.onreadystatechange=function(){var r=g.readyState;if(r==="loaded"||r==="complete"){g.onreadystatechange=null;o&&o();k.call(this)}}}:function(g,k){g.addEventListener("load",k,false)},t=/\.css(?:\?|$)/i;b={add:function(g,k,o){var r=this.Env.mods,d;if(i.isString(g)&&!o&&i.isPlainObject(k)){d={};d[g]=k;g=d}if(i.isPlainObject(g)){i.each(g,
function(a,e){a.name=e});u(r,g)}else{if(o&&o.host)g=o.host;u(d=r[g]||{},{name:g,status:l});if(!d.fns)d.fns=[];k&&d.fns.push(k);u(r[g]=d,o);d.attach!==false&&this._isAttached(d.requires)&&this._attachMod(d)}return this},use:function(g,k,o){g=g.replace(/\s+/g,"").split(",");var r=this,d=r.Env.mods,a,e=g.length,n,c;o=o||{};if(r._isAttached(g,o.scope))k&&k(r);else{for(a=0;a<e&&(n=d[g[a]]);a++)if(n.status!==f){if(o.order&&a>0){if(!n.requires)n.requires=[];n._requires=n.requires.concat();i.inArray(g[a-
1],n.requires)||n.requires.push(g[a-1])}r._attach(n,function(){if(!c&&r._isAttached(g)){c=true;if(n._requires)n.requires=n._requires;k&&k(r)}},o)}return r}},_attach:function(g,k,o){function r(){if(d._isAttached(a)){g.status===l&&d._attachMod(g,o.scope);g.status===f&&k()}}for(var d=this,a=g.requires||[],e=0,n=a.length;e<n;e++)d._attach(d.Env.mods[a[e]],r,o);d._buildPath(g);d._load(g,r)},_attachMod:function(g,k){var o=this;if(k)g.fns=k.Env.mods[g.name].fns;if(g.fns){i.each(g.fns,function(r){r&&r(o)});
g.fns=p}g.status=f},_isAttached:function(g,k){k=(k||this).Env.mods;for(var o,r=(g=i.makeArray(g)).length-1;r>=0&&(o=k[g[r]]);r--)if(o.status!==f)return false;return true},_load:function(g,k){function o(){if(g.status!==j){g.status=l;k()}r()}function r(){a[d]=p;delete a.url}var d=g.fullpath,a=this.Env._loadingQueue,e=a[d];if(e)g.status=1;if((g.status||0)<1&&d){g.status=1;a[d]=this.getScript(d,{success:function(){KISSY.log(g.name+" onload fired.","info");o()},error:function(){g.status=j;r()},charset:g.charset})}else if(g.status===
1&&e)z(e,o);else{g.status=l;k()}},_buildPath:function(g){if(!g.fullpath&&g.path)g.fullpath=this.Config.base+g.path;if(g.fullpath&&this.Config.debug)g.fullpath=g.fullpath.replace(/-min/g,"")},getScript:function(g,k,o){var r=t.test(g),d=q.createElement(r?"link":"script"),a=k,e,n,c;if(i.isPlainObject(a)){k=a.success;e=a.error;n=a.timeout;o=a.charset}if(r){d.href=g;d.rel="stylesheet"}else{d.src=g;d.async=true}if(o)d.charset=o;if(i.isFunction(k))r?k.call(d):z(d,function(){if(c){c.cancel();c=p}k.call(d)});
if(i.isFunction(e))c=i.later(function(){c=p;e()},(n||this.Config.timeout)*1E3);h.insertBefore(d,h.firstChild);return d}};u(i,b);i.each(b,function(g,k){i._APP_MEMBERS.push(k)})})(window,KISSY);(function(b){var i={core:{path:"packages/core-min.js",charset:"utf-8"}};b.each(["sizzle","datalazyload","flash","switchable","suggest"],function(p){i[p]={path:p+"/"+p+"-pkg-min.js",requires:["core"],charset:"utf-8"}});b.add(i)})(KISSY);
KISSY.add("ua",function(b){var i=navigator.userAgent,p="",q="",h,l={webkit:0,trident:0,gecko:0,presto:0,chrome:0,safari:0,firefox:0,ie:0,opera:0},j=function(f){var u=0;return parseFloat(f.replace(/\./g,function(){return u++===0?".":""}))};if((h=i.match(/AppleWebKit\/([\d.]*)/))&&h[1]){l[p="webkit"]=j(h[1]);if((h=i.match(/Chrome\/([\d.]*)/))&&h[1])l[q="chrome"]=j(h[1]);else if((h=i.match(/\/([\d.]*) Safari/))&&h[1])l[q="safari"]=j(h[1]);if(/ Mobile\//.test(i))l.mobile="apple";else if(h=i.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))l.mobile=
h[0].toLowerCase()}else if((h=i.match(/Presto\/([\d.]*)/))&&h[1]){l[p="presto"]=j(h[1]);if((h=i.match(/Opera\/([\d.]*)/))&&h[1]){l[q="opera"]=j(h[1]);if((h=i.match(/Opera\/.* Version\/([\d.]*)/))&&h[1])l[q]=j(h[1]);if((h=i.match(/Opera Mini[^;]*/))&&h)l.mobile=h[0].toLowerCase();else if((h=i.match(/Opera Mobi[^;]*/))&&h)l.mobile=h[0]}}else if((h=i.match(/MSIE\s([^;]*)/))&&h[1]){l[p="trident"]=0.1;l[q="ie"]=j(h[1]);if((h=i.match(/Trident\/([\d.]*)/))&&h[1])l[p]=j(h[1])}else if(h=i.match(/Gecko/)){l[p=
"gecko"]=0.1;if((h=i.match(/rv:([\d.]*)/))&&h[1])l[p]=j(h[1]);if((h=i.match(/Firefox\/([\d.]*)/))&&h[1])l[q="firefox"]=j(h[1])}l.core=p;l.shell=q;l._numberify=j;b.UA=l});
KISSY.add("ua-extra",function(b){var i=b.UA,p=navigator.userAgent,q,h,l={},j=i._numberify;if(p.match(/360SE/))l[h="se360"]=3;else if(p.match(/Maxthon/)&&(q=window.external)){h="maxthon";try{l[h]=j(q.max_version)}catch(f){l[h]=0.1}}else if(q=p.match(/TencentTraveler\s([\d.]*)/))l[h="tt"]=q[1]?j(q[1]):0.1;else if(p.match(/TheWorld/))l[h="theworld"]=3;else if(q=p.match(/SE\s([\d.]*)/))l[h="sougou"]=q[1]?j(q[1]):0.1;h&&(l.shell=h);b.mix(i,l)});
KISSY.add("dom",function(b,i){function p(q,h){return q&&q.nodeType===h}b.DOM={_isElementNode:function(q){return p(q,1)},_isKSNode:function(q){return b.Node&&p(q,b.Node.TYPE)},_getWin:function(q){return q&&"scrollTo"in q&&q.document?q:p(q,9)?q.defaultView||q.parentWindow:q===i?window:false},_nodeTypeIs:p}});
KISSY.add("selector",function(b,i){function p(a,e){var n,c=[],m,x;e=q(e);if(b.isString(a)){a=b.trim(a);if(r.test(a)){if(a=h(a.slice(1),e))c=[a]}else if(n=d.exec(a)){m=n[1];x=n[2];n=n[3];if(e=m?h(m,e):e)if(n)if(!m||a.indexOf(t)!==-1)c=j(n,x,e);else{if((a=h(m,e))&&z.hasClass(a,n))c=[a]}else if(x)c=l(x,e)}else if(b.ExternalSelector)return b.ExternalSelector(a,e);else f(a)}else if(a&&(a[k]||a[o]))c=a[k]?[a[k]()]:a[o]();else if(a&&(b.isArray(a)||a.item&&!a.nodeType))c=a;else if(a)c=[a];if(c.item)c=b.makeArray(c);
c.each=function(s,w){return b.each(c,s,w)};return c}function q(a){if(a===i)a=u;else if(b.isString(a)&&r.test(a))a=h(a.slice(1),u);else if(a&&a.nodeType!==1&&a.nodeType!==9)a=null;return a}function h(a,e){if(e.nodeType!==9)e=e.ownerDocument;return e.getElementById(a)}function l(a,e){return e.getElementsByTagName(a)}function j(a,e,n){n=a=n.getElementsByClassName(a);var c=0,m=0,x=a.length,s;if(e&&e!==g){n=[];for(e=e.toUpperCase();c<x;++c){s=a[c];if(s.tagName===e)n[m++]=s}}return n}function f(a){b.error("Unsupported selector: "+
a)}var u=document,z=b.DOM,t=" ",g="*",k="getDOMNode",o=k+"s",r=/^#[\w-]+$/,d=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var a=u.createElement("div");a.appendChild(u.createComment(""));if(a.getElementsByTagName(g).length>0)l=function(e,n){n=n.getElementsByTagName(e);if(e===g){e=[];for(var c=0,m=0,x;x=n[c++];)if(x.nodeType===1)e[m++]=x;n=e}return n}})();u.getElementsByClassName||(j=u.querySelectorAll?function(a,e,n){return n.querySelectorAll((e?e:"")+"."+a)}:function(a,e,n){e=n.getElementsByTagName(e||
g);n=[];var c=0,m=0,x=e.length,s,w;for(a=t+a+t;c<x;++c){s=e[c];if((w=s.className)&&(t+w+t).indexOf(a)>-1)n[m++]=s}return n});b.query=p;b.get=function(a,e){return p(a,e)[0]||null};b.mix(z,{query:p,get:b.get,filter:function(a,e){var n=p(a),c,m,x,s=[];if(b.isString(e)&&(c=d.exec(e))&&!c[1]){m=c[2];x=c[3];e=function(w){return!(m&&w.tagName!==m.toUpperCase()||x&&!z.hasClass(w,x))}}if(b.isFunction(e))s=b.filter(n,e);else if(e&&b.ExternalSelector)s=b.ExternalSelector._filter(a,e);else f(e);return s},test:function(a,
e){a=p(a);return z.filter(a,e).length===a.length}})});
KISSY.add("dom-class",function(b,i){function p(j,f,u,z){if(!(f=b.trim(f)))return z?false:i;j=b.query(j);var t=0,g=j.length;f=f.split(h);for(var k;t<g;t++){k=j[t];if(q._isElementNode(k)){k=u(k,f,f.length);if(k!==i)return k}}if(z)return false}var q=b.DOM,h=/[\.\s]\s*\.?/,l=/[\n\t]/g;b.mix(q,{hasClass:function(j,f){return p(j,f,function(u,z,t){if(u=u.className){u=" "+u+" ";for(var g=0,k=true;g<t;g++)if(u.indexOf(" "+z[g]+" ")<0){k=false;break}if(k)return true}},true)},addClass:function(j,f){p(j,f,function(u,
z,t){var g=u.className;if(g){var k=" "+g+" ";g=g;for(var o=0;o<t;o++)if(k.indexOf(" "+z[o]+" ")<0)g+=" "+z[o];u.className=b.trim(g)}else u.className=f})},removeClass:function(j,f){p(j,f,function(u,z,t){var g=u.className;if(g)if(t){g=(" "+g+" ").replace(l," ");for(var k=0,o;k<t;k++)for(o=" "+z[k]+" ";g.indexOf(o)>=0;)g=g.replace(o," ");u.className=b.trim(g)}else u.className=""})},replaceClass:function(j,f,u){q.removeClass(j,f);q.addClass(j,u)},toggleClass:function(j,f,u){var z=b.isBoolean(u),t;p(j,
f,function(g,k,o){for(var r=0,d;r<o;r++){d=k[r];t=z?!u:q.hasClass(g,d);q[t?"removeClass":"addClass"](g,d)}})}})});
KISSY.add("dom-attr",function(b,i){function p(d,a){return a&&a.nodeName.toUpperCase()===d.toUpperCase()}var q=b.UA,h=q.ie,l=h&&h<8,j=document.documentElement.textContent!==i?"textContent":"innerText",f=b.DOM,u=f._isElementNode,z=function(d){return f._nodeTypeIs(d,3)},t=/href|src|style/,g=/href|src|colspan|rowspan/,k=/\r/g,o=/radio|checkbox/,r={readonly:"readOnly"};l&&b.mix(r,{"for":"htmlFor","class":"className"});b.mix(f,{attr:function(d,a,e){if(b.isPlainObject(a))for(var n in a)f.attr(d,n,a[n]);
else if(a=b.trim(a)){a=a.toLowerCase();a=r[a]||a;if(e===i){d=b.get(d);if(!u(d))return i;var c;t.test(a)||(c=d[a]);if(c===i)c=d.getAttribute(a);if(l)if(g.test(a))c=d.getAttribute(a,2);else if(a==="style")c=d.style.cssText;return c===null?i:c}b.each(b.query(d),function(m){if(u(m))if(a==="style")m.style.cssText=e;else{if(a==="checked")m[a]=!!e;m.setAttribute(a,""+e)}})}},removeAttr:function(d,a){b.each(b.query(d),function(e){if(u(e)){f.attr(e,a,"");e.removeAttribute(a)}})},val:function(d,a){if(a===i){var e=
b.get(d);if(!u(e))return i;if(p("option",e))return(e.attributes.value||{}).specified?e.value:e.text;if(p("select",e)){var n=e.selectedIndex;d=e.options;if(n<0)return null;else if(e.type==="select-one")return f.val(d[n]);e=[];for(var c=0,m=d.length;c<m;++c)d[c].selected&&e.push(f.val(d[c]));return e}if(q.webkit&&o.test(e.type))return e.getAttribute("value")===null?"on":e.value;return(e.value||"").replace(k,"")}b.each(b.query(d),function(x){if(p("select",x)){if(b.isNumber(a))a+="";var s=b.makeArray(a),
w=x.options,A;c=0;for(m=w.length;c<m;++c){A=w[c];A.selected=b.inArray(f.val(A),s)}if(!s.length)x.selectedIndex=-1}else if(u(x))x.value=a})},text:function(d,a){if(a===i){d=b.get(d);if(u(d))return d[j]||"";else if(z(d))return d.nodeValue}else b.each(b.query(d),function(e){if(u(e))e[j]=a;else if(z(e))e.nodeValue=a})}})});
KISSY.add("dom-style",function(b,i){function p(a,e){var n=b.get(a),c=e===u?n.offsetWidth:n.offsetHeight;b.each(e===u?["Left","Right"]:["Top","Bottom"],function(m){c-=parseFloat(h._getComputedStyle(n,"padding"+m))||0;c-=parseFloat(h._getComputedStyle(n,"border"+m+"Width"))||0});return c}function q(a,e,n){var c=n;if(n===z&&g.test(e)){c=0;if(h.css(a,"position")==="absolute"){n=a[e==="left"?"offsetLeft":"offsetTop"];if(l.ie===8||l.opera)n-=t(h.css(a.offsetParent,"border-"+e+"-width"))||0;c=n-(t(h.css(a,
"margin-"+e))||0)}}return c}var h=b.DOM,l=b.UA,j=document,f=j.documentElement,u="width",z="auto",t=parseInt,g=/^left|top$/,k=/width|height|top|left|right|bottom|margin|padding/i,o=/-([a-z])/ig,r=function(a,e){return e.toUpperCase()},d={};b.mix(h,{_CUSTOM_STYLES:d,_getComputedStyle:function(a,e){var n="",c=a.ownerDocument;if(a.style)n=c.defaultView.getComputedStyle(a,null)[e];return n},css:function(a,e,n){if(b.isPlainObject(e))for(var c in e)h.css(a,c,e[c]);else{if(e.indexOf("-")>0)e=e.replace(o,r);
e=d[e]||e;if(n===i){a=b.get(a);c="";if(a&&a.style){c=e.get?e.get(a):a.style[e];if(c===""&&!e.get)c=q(a,e,h._getComputedStyle(a,e))}return c===i?"":c}else{if(n===null||n==="")n="";else if(!isNaN(new Number(n))&&k.test(e))n+="px";(e===u||e==="height")&&parseFloat(n)<0||b.each(b.query(a),function(m){if(m&&m.style){e.set?e.set(m,n):(m.style[e]=n);if(n==="")m.style.cssText||m.removeAttribute("style")}})}}},width:function(a,e){if(e===i)return p(a,u);else h.css(a,u,e)},height:function(a,e){if(e===i)return p(a,
"height");else h.css(a,"height",e)},addStyleSheet:function(a,e){var n;if(e)n=b.get(e);n||(n=h.create("<style>",{id:e}));b.get("head").appendChild(n);if(n.styleSheet)n.styleSheet.cssText=a;else n.appendChild(j.createTextNode(a))}});if(f.style.cssFloat!==i)d["float"]="cssFloat";else if(f.style.styleFloat!==i)d["float"]="styleFloat"});
KISSY.add("dom-style-ie",function(b,i){if(b.UA.ie){var p=b.DOM;b=document;var q=b.documentElement,h=p._CUSTOM_STYLES,l=/^-?\d+(?:px)?$/i,j=/^-?\d/,f=/^width|height$/;try{if(q.style.opacity===i&&q.filters)h.opacity={get:function(z){var t=100;try{t=z.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(g){try{t=z.filters("alpha").opacity}catch(k){}}return t/100+""},set:function(z,t){z=z.style;z.zoom=1;z.filter="alpha(opacity="+t*100+")"}}}catch(u){}if(!(b.defaultView||{}).getComputedStyle&&q.currentStyle)p._getComputedStyle=
function(z,t){var g=z.style,k=z.currentStyle[t];if(f.test(t))k=p[t](z)+"px";else if(!l.test(k)&&j.test(k)){var o=g.left,r=z.runtimeStyle.left;z.runtimeStyle.left=z.currentStyle.left;g.left=t==="fontSize"?"1em":k||0;k=g.pixelLeft+"px";g.left=o;z.runtimeStyle.left=r}return k}}});
KISSY.add("dom-offset",function(b,i){function p(s){var w=0,A=0,v=t(s[a]);if(s[x]){s=s[x]();w=s[e];A=s[n];if(l.mobile!=="apple"){w+=h[c](v);A+=h[m](v)}}return{left:w,top:A}}function q(s,w){if(h.css(s,r)==="static")s.style[r]=d;var A=p(s),v={},y,B;for(B in w){y=o(h.css(s,B),10)||0;v[B]=y+w[B]-A[B]}h.css(s,v)}var h=b.DOM,l=b.UA,j=window,f=document,u=h._isElementNode,z=h._nodeTypeIs,t=h._getWin,g=f.compatMode==="CSS1Compat",k=Math.max,o=parseInt,r="position",d="relative",a="ownerDocument",e="left",n=
"top",c="scrollLeft",m="scrollTop",x="getBoundingClientRect";b.mix(h,{offset:function(s,w){if(!(s=b.get(s))||!s[a])return null;if(w===i)return p(s);q(s,w)},scrollIntoView:function(s,w,A,v){if((s=b.get(s))&&s[a]){v=v===i?true:!!v;A=A===i?true:!!A;if(!w||w===j)return s.scrollIntoView(A);w=b.get(w);if(z(w,9))w=t(w);var y=w&&"scrollTo"in w&&w.document,B=h.offset(s),C=y?{left:h.scrollLeft(w),top:h.scrollTop(w)}:h.offset(w),D={left:B[e]-C[e],top:B[n]-C[n]};B=y?h.viewportHeight(w):w.clientHeight;C=y?h.viewportWidth(w):
w.clientWidth;var G=h[c](w),E=h[m](w),F=G+C,M=E+B,I=s.offsetHeight;s=s.offsetWidth;var H=D.left+G-(o(h.css(w,"borderLeftWidth"))||0);D=D.top+E-(o(h.css(w,"borderTopWidth"))||0);var N=H+s,J=D+I,K,L;if(I>B||D<E||A)K=D;else if(J>M)K=J-B;if(v)if(s>C||H<G||A)L=H;else if(N>F)L=N-C;if(y){if(K!==i||L!==i)w.scrollTo(L,K)}else{if(K!==i)w[m]=K;if(L!==i)w[c]=L}}}});b.each(["Left","Top"],function(s,w){var A="scroll"+s;h[A]=function(v){var y=0,B=t(v),C;if(B&&(C=B.document))y=B[w?"pageYOffset":"pageXOffset"]||C.documentElement[A]||
C.body[A];else if(u(v=b.get(v)))y=v[A];return y}});b.each(["Width","Height"],function(s){h["doc"+s]=function(w){w=w||f;return k(g?w.documentElement["scroll"+s]:w.body["scroll"+s],h["viewport"+s](w))};h["viewport"+s]=function(w){var A="inner"+s;w=t(w);var v=w.document;return A in w?w[A]:g?v.documentElement["client"+s]:v.body["client"+s]}})});
KISSY.add("dom-traversal",function(b,i){function p(j,f,u,z){if(!(j=b.get(j)))return null;if(f===i)f=1;var t=null,g,k;if(b.isNumber(f)&&f>=0){if(f===0)return j;g=0;k=f;f=function(){return++g===k}}for(;j=j[u];)if(l(j)&&(!f||h.test(j,f))&&(!z||z(j))){t=j;break}return t}function q(j,f,u){var z=[];var t=j=b.get(j);if(j&&u)t=j.parentNode;if(t){u=0;for(t=t.firstChild;t;t=t.nextSibling)if(l(t)&&t!==j&&(!f||h.test(t,f)))z[u++]=t}return z}var h=b.DOM,l=h._isElementNode;b.mix(h,{parent:function(j,f){return p(j,
f,"parentNode",function(u){return u.nodeType!=11})},next:function(j,f){return p(j,f,"nextSibling")},prev:function(j,f){return p(j,f,"previousSibling")},siblings:function(j,f){return q(j,f,true)},children:function(j,f){return q(j,f)},contains:function(j,f){var u=false;if((j=b.get(j))&&(f=b.get(f)))if(j.contains)return j.contains(f);else if(j.compareDocumentPosition)return!!(j.compareDocumentPosition(f)&16);else for(;!u&&(f=f.parentNode);)u=f==j;return u}})});
KISSY.add("dom-create",function(b,i){function p(v,y){k(v)&&b.isPlainObject(y)&&u.attr(v,y);return v}function q(v,y){var B=null,C;if(v&&(v.push||v.item)&&v[0]){y=y||v[0].ownerDocument;B=y.createDocumentFragment();if(v.item)v=b.makeArray(v);y=0;for(C=v.length;y<C;y++)B.appendChild(v[y])}return B}function h(v){var y=v.cloneNode(true);if(z.ie<8)y.innerHTML=v.innerHTML;return y}function l(v,y,B,C){if(B){var D=b.guid("ks-tmp-"),G=new RegExp(a);y+='<span id="'+D+'"></span>';b.available(D,function(){var E=
b.get("head"),F,M,I,H,N,J;for(G.lastIndex=0;F=G.exec(y);)if((I=(M=F[1])?M.match(n):false)&&I[2]){F=f.createElement("script");F.src=I[2];if((H=M.match(c))&&H[2])F.charset=H[2];F.async=true;E.appendChild(F)}else if((J=F[2])&&J.length>0)b.globalEval(J);(N=f.getElementById(D))&&u.remove(N);b.isFunction(C)&&C()});j(v,y)}else{j(v,y);b.isFunction(C)&&C()}}function j(v,y){y=(y+"").replace(a,"");try{v.innerHTML=y}catch(B){for(;v.firstChild;)v.removeChild(v.firstChild);y&&v.appendChild(u.create(y))}}var f=
document,u=b.DOM,z=b.UA,t=z.ie,g=u._nodeTypeIs,k=u._isElementNode,o=u._isKSNode,r=f.createElement("div"),d=/<(\w+)/,a=/<script([^>]*)>([\s\S]*?)<\/script>/ig,e=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/\ssrc=(['"])(.*?)\1/i,c=/\scharset=(['"])(.*?)\1/i;b.mix(u,{create:function(v,y,B){if(g(v,1)||g(v,3))return h(v);if(o(v))return h(v[0]);if(!(v=b.trim(v)))return null;var C=null;C=u._creators;var D,G="div",E;if(D=e.exec(v))C=(B||f).createElement(D[1]);else{if((D=d.exec(v))&&(E=D[1])&&b.isFunction(C[E=E.toLowerCase()]))G=
E;v=C[G](v,B).childNodes;C=v.length===1?v[0].parentNode.removeChild(v[0]):q(v,B||f)}return p(C,y)},_creators:{div:function(v,y){y=y?y.createElement("div"):r;y.innerHTML=v;return y}},html:function(v,y,B,C){if(y===i){v=b.get(v);if(k(v))return v.innerHTML}else b.each(b.query(v),function(D){k(D)&&l(D,y,B,C)})},remove:function(v){b.each(b.query(v),function(y){k(y)&&y.parentNode&&y.parentNode.removeChild(y)})}});if(z.gecko||t){var m=u._creators,x=u.create,s=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,
w={option:"select",td:"tr",tr:"tbody",tbody:"table",col:"colgroup",legend:"fieldset"};for(var A in w)(function(v){m[A]=function(y,B){return x("<"+v+">"+y+"</"+v+">",null,B)}})(w[A]);if(t){m.script=function(v,y){y=y?y.createElement("div"):r;y.innerHTML="-"+v;y.removeChild(y.firstChild);return y};if(t<8)m.tbody=function(v,y){y=x("<table>"+v+"</table>",null,y);var B=y.children.tags("tbody")[0];y.children.length>1&&B&&!s.test(v)&&B.parentNode.removeChild(B);return y}}b.mix(m,{optgroup:m.option,th:m.td,
thead:m.tbody,tfoot:m.tbody,caption:m.tbody,colgroup:m.tbody})}});KISSY.add("dom-insertion",function(b){b.mix(b.DOM,{insertBefore:function(i,p){if((i=b.get(i))&&(p=b.get(p))&&p.parentNode)p.parentNode.insertBefore(i,p);return i},insertAfter:function(i,p){if((i=b.get(i))&&(p=b.get(p))&&p.parentNode)p.nextSibling?p.parentNode.insertBefore(i,p.nextSibling):p.parentNode.appendChild(i);return i}})});
KISSY.add("event",function(b,i){function p(d,a,e,n,c){if(b.isString(a))a=b.query(a);if(b.isArray(a)){b.each(a,function(m){r[d](m,e,n,c)});return true}if((e=b.trim(e))&&e.indexOf(g)>0){b.each(e.split(g),function(m){r[d](a,m,n,c)});return true}}function q(d){return j(d)?d[t]:-1}function h(d,a){if(!j(d))return b.error("Text or comment node is not valid event target.");try{d[t]=a}catch(e){b.error(e)}}function l(d){try{d[t]=i;delete d[t]}catch(a){}}function j(d){return d&&d.nodeType!==3&&d.nodeType!==
8}var f=document,u=f.addEventListener?function(d,a,e,n){d.addEventListener&&d.addEventListener(a,e,!!n)}:function(d,a,e){d.attachEvent&&d.attachEvent("on"+a,e)},z=f.removeEventListener?function(d,a,e,n){d.removeEventListener&&d.removeEventListener(a,e,!!n)}:function(d,a,e){d.detachEvent&&d.detachEvent("on"+a,e)},t="ksEventTargetId",g=" ",k=b.now(),o={},r={EVENT_GUID:t,special:{},add:function(d,a,e,n){if(!p("add",d,a,e,n)){var c=q(d),m,x,s,w,A;if(!(c===-1||!a||!b.isFunction(e))){if(!c){h(d,c=k++);
o[c]={target:d,events:{}}}x=o[c].events;if(!x[a]){m=((c=!d.isCustomEventTarget)||d._supportSpecialEvent)&&r.special[a]||{};s=function(v,y){if(!v||!v.fixed){v=new b.EventObject(d,v,a);b.isPlainObject(y)&&b.mix(v,y)}m.setup&&m.setup(v);return(m.handle||r._handle)(d,v,x[a].listeners)};x[a]={handle:s,listeners:[]};w=m.fix||a;A=m.capture;if(c)u(d,w,s,A);else d._addEvent&&d._addEvent(w,s,A)}x[a].listeners.push({fn:e,scope:n||d})}}},remove:function(d,a,e,n){if(!p("remove",d,a,e,n)){var c=q(d),m,x,s,w,A,
v,y;if(c!==-1)if(c&&(m=o[c]))if(m.target===d){n=n||d;m=m.events||{};if(x=m[a]){s=x.listeners;v=s.length;if(b.isFunction(e)&&v){A=w=0;for(y=[];w<v;++w)if(e!==s[w].fn||n!==s[w].scope)y[A++]=s[w];x.listeners=y;v=y.length}if(e===i||v===0){if(d.isCustomEventTarget)d._addEvent&&d._removeEvent(a,x.handle);else z(d,a,x.handle);delete m[a]}}if(a===i||b.isEmptyObject(m)){for(a in m)r.remove(d,a);delete o[c];l(d)}}}},_handle:function(d,a,e){e=e.slice(0);for(var n,c=0,m=e.length;c<m;++c){n=e[c];n=n.fn.call(n.scope||
d,a);if(n===false&&d.isCustomEventTarget||a.isImmediatePropagationStopped)break}return n},_getCache:function(d){return o[d]},_simpleAdd:u,_simpleRemove:z};r.on=r.add;b.Event=r});
KISSY.add("event-object",function(b,i){function p(l,j,f){this.currentTarget=l;this.originalEvent=j||{};if(j){this.type=j.type;this._fix()}else{this.type=f;this.target=l}this.currentTarget=l;this.fixed=true}var q=document,h="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");b.augment(p,
{_fix:function(){var l=this.originalEvent,j=h.length,f,u=this.currentTarget;for(u=u.nodeType===9?u:u.ownerDocument||q;j;){f=h[--j];this[f]=l[f]}if(!this.target)this.target=this.srcElement||q;if(this.target.nodeType===3)this.target=this.target.parentNode;if(!this.relatedTarget&&this.fromElement)this.relatedTarget=this.fromElement===this.target?this.toElement:this.fromElement;if(this.pageX===i&&this.clientX!==i){l=u.documentElement;j=u.body;this.pageX=this.clientX+(l&&l.scrollLeft||j&&j.scrollLeft||
0)-(l&&l.clientLeft||j&&j.clientLeft||0);this.pageY=this.clientY+(l&&l.scrollTop||j&&j.scrollTop||0)-(l&&l.clientTop||j&&j.clientTop||0)}if(this.which===i)this.which=this.charCode!==i?this.charCode:this.keyCode;if(this.metaKey===i)this.metaKey=this.ctrlKey;if(!this.which&&this.button!==i)this.which=this.button&1?1:this.button&2?3:this.button&4?2:0},preventDefault:function(){var l=this.originalEvent;if(l.preventDefault)l.preventDefault();else l.returnValue=false;this.isDefaultPrevented=true},stopPropagation:function(){var l=
this.originalEvent;if(l.stopPropagation)l.stopPropagation();else l.cancelBubble=true;this.isPropagationStopped=true},stopImmediatePropagation:function(){var l=this.originalEvent;l.stopImmediatePropagation?l.stopImmediatePropagation():this.stopPropagation();this.isImmediatePropagationStopped=true},halt:function(l){l?this.stopImmediatePropagation():this.stopPropagation();this.preventDefault()}});b.EventObject=p});
KISSY.add("event-target",function(b,i){var p=b.Event,q=p.EVENT_GUID;b.EventTarget={isCustomEventTarget:true,fire:function(h,l){if((h=((p._getCache(this[q]||-1)||{}).events||{})[h])&&b.isFunction(h.handle))return h.handle(i,l);return this},on:function(h,l,j){p.add(this,h,l,j);return this},detach:function(h,l,j){p.remove(this,h,l,j);return this}}});
KISSY.add("event-mouseenter",function(b){var i=b.Event;b.UA.ie||b.each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(p){i.special[p.name]={fix:p.fix,setup:function(q){q.type=p.name},handle:function(q,h,l){var j=h.relatedTarget;try{for(;j&&j!==q;)j=j.parentNode;j!==q&&i._handle(q,h,l)}catch(f){}}}})});
KISSY.add("event-focusin",function(b){var i=b.Event;document.addEventListener&&b.each([{name:"focusin",fix:"focus"},{name:"focusout",fix:"blur"}],function(p){i.special[p.name]={fix:p.fix,capture:true,setup:function(q){q.type=p.name}}})});
KISSY.add("node",function(b){function i(h,l,j){var f;if(!(this instanceof i))return new i(h,l,j);if(h){if(q(h,1)||q(h,3))f=h;else if(b.isString(h))f=p.create(h,l,j);this[0]=f}else this.length=0}var p=b.DOM,q=p._nodeTypeIs;i.TYPE="-ks-Node";b.augment(i,{length:1,getDOMNode:function(){return this[0]},nodeType:i.TYPE});b.one=function(h,l){return(h=b.get(h,l))?new i(h):null};b.Node=i});
KISSY.add("nodelist",function(b){function i(h){if(!(this instanceof i))return new i(h);q.push.apply(this,h||[])}var p=b.DOM,q=Array.prototype;b.mix(i.prototype,{length:0,item:function(h){var l=null;if(p._isElementNode(this[h]))l=new b.Node(this[h]);return l},getDOMNodes:function(){return q.slice.call(this)},each:function(h,l){var j=this.length,f=0,u;for(u=new b.Node(this[0]);f<j&&h.call(l||u,u,f,this)!==false;u=new b.Node(this[++f]));return this}});b.all=function(h,l){return new i(b.query(h,l,true))};
b.NodeList=i});
KISSY.add("node-attach",function(b,i){function p(o,arguments,r,d){var a=[this[o?z:u]()].concat(b.makeArray(arguments));if(arguments[r]===i)return d.apply(h,a);else{d.apply(h,a);return this}}function q(o,r){b.each(o,function(d){b.each([j,f],function(a,e){a[d]=function(n){switch(r){case t:return function(){return p.call(this,e,arguments,1,n)};case g:return function(){return p.call(this,e,arguments,0,n)};case k:return function(){var c=this[e?z:u]();return(c=n.apply(h,[c].concat(b.makeArray(arguments))))?new (b[b.isArray(c)?
"NodeList":"Node"])(c):null};default:return function(){var c=this[e?z:u]();c=n.apply(h,[c].concat(b.makeArray(arguments)));return c===i?this:c}}}(h[d])})})}var h=b.DOM,l=b.Event,j=b.Node.prototype,f=b.NodeList.prototype,u="getDOMNode",z=u+"s",t=1,g=2,k=4;b.mix(j,{one:function(o){return b.one(o,this[0])},all:function(o){return b.all(o,this[0])}});q(["hasClass","addClass","removeClass","replaceClass","toggleClass"]);q(["attr","removeAttr"],t);q(["val","text"],g);q(["css"],t);q(["width","height"],g);
q(["offset"],g);q(["scrollIntoView"]);q(["parent","next","prev","siblings","children"],k);q(["contains"]);q(["html"],g);q(["remove"]);b.each(["insertBefore","insertAfter"],function(o){j[o]=function(r){h[o].call(h,this[0],r);return this}});b.each([j,f],function(o){b.mix(o,{append:function(r){r&&b.each(this,function(d){d.appendChild(h.create(r))});return this},appendTo:function(r){if((r=b.get(r))&&r.appendChild)b.each(this,function(d){r.appendChild(d)});return this}})});b.each([j,f],function(o){b.mix(o,
b.EventTarget,{_supportSpecialEvent:true});o._addEvent=function(r,d,a){for(var e=0,n=this.length;e<n;e++)l._simpleAdd(this[e],r,d,a)};o._removeEvent=function(r,d,a){for(var e=0,n=this.length;e<n;e++)l._simpleRemove(this[e],r,d,a)};delete o.fire})});
KISSY.add("cookie",function(b){function i(l){return b.isString(l)&&l!==""}var p=document,q=encodeURIComponent,h=decodeURIComponent;b.Cookie={get:function(l){var j;if(i(l))if(l=p.cookie.match("(?:^| )"+l+"(?:(?:=([^;]*))|;|$)"))j=l[1]?h(l[1]):"";return j},set:function(l,j,f,u,z,t){j=q(j);var g=f;if(typeof g==="number"){g=new Date;g.setTime(g.getTime()+f*864E5)}if(g instanceof Date)j+="; expires="+g.toUTCString();if(i(u))j+="; domain="+u;if(i(z))j+="; path="+z;if(t)j+="; secure";p.cookie=l+"="+j},remove:function(l,
j,f,u){this.set(l,"",0,j,f,u)}}});
KISSY.add("json",function(b){function i(t){return t<10?"0"+t:t}function p(t){l.lastIndex=0;return l.test(t)?'"'+t.replace(l,function(g){var k=u[g];return typeof k==="string"?k:"\\u"+("0000"+g.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function q(t,g){var k,o,r=j,d,a=g[t];if(a&&typeof a==="object"&&typeof a.toJSON==="function")a=a.toJSON(t);if(typeof z==="function")a=z.call(g,t,a);switch(typeof a){case "string":return p(a);case "number":return isFinite(a)?String(a):"null";case "boolean":case "null":return String(a);
case "object":if(!a)return"null";j+=f;d=[];if(Object.prototype.toString.apply(a)==="[object Array]"){o=a.length;for(t=0;t<o;t+=1)d[t]=q(t,a)||"null";g=d.length===0?"[]":j?"[\n"+j+d.join(",\n"+j)+"\n"+r+"]":"["+d.join(",")+"]";j=r;return g}if(z&&typeof z==="object"){o=z.length;for(t=0;t<o;t+=1){k=z[t];if(typeof k==="string")if(g=q(k,a))d.push(p(k)+(j?": ":":")+g)}}else for(k in a)if(Object.hasOwnProperty.call(a,k))if(g=q(k,a))d.push(p(k)+(j?": ":":")+g);g=d.length===0?"{}":j?"{\n"+j+d.join(",\n"+j)+
"\n"+r+"}":"{"+d.join(",")+"}";j=r;return g}}b=b.JSON=window.JSON||{};if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+i(this.getUTCMonth()+1)+"-"+i(this.getUTCDate())+"T"+i(this.getUTCHours())+":"+i(this.getUTCMinutes())+":"+i(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var h=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
l=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,j,f,u={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},z;if(typeof b.stringify!=="function")b.stringify=function(t,g,k){var o;f=j="";if(typeof k==="number")for(o=0;o<k;o+=1)f+=" ";else if(typeof k==="string")f=k;if((z=g)&&typeof g!=="function"&&(typeof g!=="object"||typeof g.length!=="number"))throw new Error("JSON.stringify");return q("",
{"":t})};if(typeof b.parse!=="function")b.parse=function(t,g){function k(o,r){var d,a,e=o[r];if(e&&typeof e==="object")for(d in e)if(Object.hasOwnProperty.call(e,d)){a=k(e,d);if(a!==undefined)e[d]=a;else delete e[d]}return g.call(o,r,e)}t=String(t);h.lastIndex=0;if(h.test(t))t=t.replace(h,function(o){return"\\u"+("0000"+o.charCodeAt(0).toString(16)).slice(-4)});if(/^[\],:{}\s]*$/.test(t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){t=eval("("+t+")");return typeof g==="function"?k({"":t},""):t}throw new SyntaxError("JSON.parse");}});
KISSY.add("anim-easing",function(b){var i=Math,p=i.PI,q=i.pow,h=i.sin,l=1.70158,j={easeNone:function(f){return f},easeIn:function(f){return f*f},easeOut:function(f){return(2-f)*f},easeBoth:function(f){return(f*=2)<1?0.5*f*f:0.5*(1- --f*(f-2))},easeInStrong:function(f){return f*f*f*f},easeOutStrong:function(f){return 1- --f*f*f*f},easeBothStrong:function(f){return(f*=2)<1?0.5*f*f*f*f:0.5*(2-(f-=2)*f*f*f)},elasticIn:function(f){if(f===0||f===1)return f;return-(q(2,10*(f-=1))*h((f-0.075)*2*p/0.3))},
elasticOut:function(f){if(f===0||f===1)return f;return q(2,-10*f)*h((f-0.075)*2*p/0.3)+1},elasticBoth:function(f){if(f===0||(f*=2)===2)return f;if(f<1)return-0.5*q(2,10*(f-=1))*h((f-0.1125)*2*p/0.45);return q(2,-10*(f-=1))*h((f-0.1125)*2*p/0.45)*0.5+1},backIn:function(f){if(f===1)f-=0.0010;return f*f*((l+1)*f-l)},backOut:function(f){return(f-=1)*f*((l+1)*f+l)+1},backBoth:function(f){if((f*=2)<1)return 0.5*f*f*(((l*=1.525)+1)*f-l);return 0.5*((f-=2)*f*(((l*=1.525)+1)*f+l)+2)},bounceIn:function(f){return 1-
j.bounceOut(1-f)},bounceOut:function(f){return f<1/2.75?7.5625*f*f:f<2/2.75?7.5625*(f-=1.5/2.75)*f+0.75:f<2.5/2.75?7.5625*(f-=2.25/2.75)*f+0.9375:7.5625*(f-=2.625/2.75)*f+0.984375},bounceBoth:function(f){if(f<0.5)return j.bounceIn(f*2)*0.5;return j.bounceOut(f*2-1)*0.5+0.5}};b.Easing=j});
KISSY.add("anim",function(b,i){function p(d,a,e,n,c){if(d=b.get(d)){if(!(this instanceof p))return new p(d,a,e,n,c);var m=b.isPlainObject(e);a=a;this.domEl=d;if(b.isPlainObject(a))a=b.param(a,";").replace(/=/g,":");this.props=q(a);this.targetStyle=a;if(m)d=b.merge(r,e);else{d=b.clone(r);e&&(d.duration=t(e,10)||1);b.isString(n)&&(n=z[n]);b.isFunction(n)&&(d.easing=n);b.isFunction(c)&&(d.complete=c)}this.config=d;b.isFunction(c)&&this.on(o,c)}}function q(d){var a={},e=k.length,n;g.innerHTML='<div style="'+
d+'"></div>';for(d=g.firstChild.style;e--;)if(n=d[k[e]])a[k[e]]=h(n);return a}function h(d){var a=t(d);d=(d+"").replace(/^[-\d\.]+/,"");return isNaN(a)?{v:d,u:"",f:j}:{v:a,u:d,f:l}}function l(d,a,e){return(d+(a-d)*e).toFixed(3)}function j(d,a,e){for(var n=2,c,m,x=[],s=[];c=3,m=arguments[n-1],n--;)if(f(m,0,4)==="rgb(")for(m=m.match(/\d+/g);c--;)x.push(~~m[c]);else if(f(m,0)==="#"){if(m.length===4)m="#"+f(m,1)+f(m,1)+f(m,2)+f(m,2)+f(m,3)+f(m,3);for(;c--;)x.push(parseInt(f(m,1+c*2,2),16))}else return a;
for(;c--;){n=~~(x[c+3]+(x[c]-x[c+3])*e);s.push(n<0?0:n>255?255:n)}return"rgb("+s.join(",")+")"}function f(d,a,e){return d.substr(a,e||1)}var u=b.DOM,z=b.Easing,t=parseFloat,g=u.create("<div>"),k="backgroundColor borderBottomColor borderBottomWidth borderBottomStyle borderLeftColor borderLeftWidth borderLeftStyle borderRightColor borderRightWidth borderRightStyle borderSpacing borderTopColor borderTopWidth borderTopStyle bottom color font fontFamily fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" "),
o="complete",r={duration:1,easing:z.easeNone};b.augment(p,b.EventTarget,{run:function(){var d=this,a=d.config,e=d.domEl,n=a.duration*1E3,c=a.easing,m=b.now(),x=m+n,s=d.props,w={},A;for(A in s)w[A]=h(u.css(e,A));if(d.fire("start")!==false){d.stop();d.timer=b.later(a=function(){var v=b.now(),y=v>x?1:(v-m)/n,B,C,D;for(A in s){B=w[A];C=s[A];if(C.v==0)C.u=B.u;if(B.u!==C.u)B.v=0;u.css(e,A,C.f(B.v,C.v,c(y))+C.u)}if(d.fire("step")===false||(D=v>x)){d.stop();D&&d.fire(o)}},13,true);a();return d}},stop:function(d){var a=
this.domEl,e=this.targetStyle;if(this.timer){this.timer.cancel();this.timer=i}if(d){b.UA.ie&&e.indexOf("opacity")>-1&&u.css(a,"opacity",this.props.opacity.v);a.style.cssText+=";"+e;this.fire(o)}return this}});b.Anim=p});KISSY.add("anim-node-plugin",function(b,i){var p=b.Anim;b.each([b.Node.prototype,b.NodeList.prototype],function(q){q.animate=function(){var h=b.makeArray(arguments);b.each(this,function(l){p.apply(i,[l].concat(h)).run()});return this}})});KISSY.add("core");
