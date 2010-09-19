/*
Copyright 2010, KISSY UI Library v1.1.4
MIT Licensed
build time: Sep 17 10:22
*/
KISSY.add("ua",function(a){var n=navigator.userAgent,q="",l="",f,j={},g=function(c){var r=0;return parseFloat(c.replace(/\./g,function(){return r++===0?".":""}))};if((f=n.match(/AppleWebKit\/([\d.]*)/))&&f[1]){j[q="webkit"]=g(f[1]);if((f=n.match(/Chrome\/([\d.]*)/))&&f[1])j[l="chrome"]=g(f[1]);else if((f=n.match(/\/([\d.]*) Safari/))&&f[1])j[l="safari"]=g(f[1]);if(/ Mobile\//.test(n))j.mobile="apple";else if(f=n.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))j.mobile=f[0].toLowerCase()}else if((f=
n.match(/Presto\/([\d.]*)/))&&f[1]){j[q="presto"]=g(f[1]);if((f=n.match(/Opera\/([\d.]*)/))&&f[1]){j[l="opera"]=g(f[1]);if((f=n.match(/Opera\/.* Version\/([\d.]*)/))&&f[1])j[l]=g(f[1]);if((f=n.match(/Opera Mini[^;]*/))&&f)j.mobile=f[0].toLowerCase();else if((f=n.match(/Opera Mobi[^;]*/))&&f)j.mobile=f[0]}}else if((f=n.match(/MSIE\s([^;]*)/))&&f[1]){j[q="trident"]=0.1;j[l="ie"]=g(f[1]);if((f=n.match(/Trident\/([\d.]*)/))&&f[1])j[q]=g(f[1])}else if(f=n.match(/Gecko/)){j[q="gecko"]=0.1;if((f=n.match(/rv:([\d.]*)/))&&
f[1])j[q]=g(f[1]);if((f=n.match(/Firefox\/([\d.]*)/))&&f[1])j[l="firefox"]=g(f[1])}j.core=q;j.shell=l;j._numberify=g;a.UA=j});
KISSY.add("ua-extra",function(a){var n=a.UA,q=navigator.userAgent,l,f,j={},g=n._numberify;if(q.match(/360SE/))j[f="se360"]=3;else if(q.match(/Maxthon/)&&(l=window.external)){f="maxthon";try{j[f]=g(l.max_version)}catch(c){j[f]=0.1}}else if(l=q.match(/TencentTraveler\s([\d.]*)/))j[f="tt"]=l[1]?g(l[1]):0.1;else if(q.match(/TheWorld/))j[f="theworld"]=3;else if(l=q.match(/SE\s([\d.]*)/))j[f="sougou"]=l[1]?g(l[1]):0.1;f&&(j.shell=f);a.mix(n,j)});
KISSY.add("dom",function(a,n){function q(l,f){return l&&l.nodeType===f}a.DOM={_isElementNode:function(l){return q(l,1)},_isKSNode:function(l){return a.Node&&q(l,a.Node.TYPE)},_getWin:function(l){return l&&"scrollTo"in l&&l.document?l:q(l,9)?l.defaultView||l.parentWindow:l===n?window:false},_nodeTypeIs:q}});
KISSY.add("selector",function(a,n){function q(b,d){var e,h,m=[],v;d=l(d);if(a.isString(b)){b=a.trim(b);if(k.test(b)){if(h=f(b.slice(1),d))m=[h]}else if(e=i.exec(b)){h=e[1];v=e[2];e=e[3];if(d=h?f(h,d):d)if(e)if(!h||b.indexOf(o)!==-1)m=g(e,v,d);else{if((h=f(h,d))&&w.hasClass(h,e))m=[h]}else if(v)m=j(v,d)}else if(a.ExternalSelector)return a.ExternalSelector(b,d);else c(b)}else if(b&&(b[t]||b[p]))m=b[t]?[b[t]()]:b[p]();else if(b&&(a.isArray(b)||b&&!b.nodeType&&b.item&&b!=window))m=b;else if(b)m=[b];if(m&&
!m.nodeType&&m.item&&m!=window)m=a.makeArray(m);m.each=function(z,s){return a.each(m,z,s)};return m}function l(b){if(b===n)b=r;else if(a.isString(b)&&k.test(b))b=f(b.slice(1),r);else if(b&&b.nodeType!==1&&b.nodeType!==9)b=null;return b}function f(b,d){if(d.nodeType!==9)d=d.ownerDocument;return d.getElementById(b)}function j(b,d){return d.getElementsByTagName(b)}function g(b,d,e){e=b=e.getElementsByClassName(b);var h=0,m=0,v=b.length,z;if(d&&d!==u){e=[];for(d=d.toUpperCase();h<v;++h){z=b[h];if(z.tagName===
d)e[m++]=z}}return e}function c(b){a.error("Unsupported selector: "+b)}var r=document,w=a.DOM,o=" ",u="*",t="getDOMNode",p=t+"s",k=/^#[\w-]+$/,i=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var b=r.createElement("div");b.appendChild(r.createComment(""));if(b.getElementsByTagName(u).length>0)j=function(d,e){var h=e.getElementsByTagName(d);if(d===u){for(var m=[],v=0,z=0,s;s=h[v++];)if(s.nodeType===1)m[z++]=s;h=m}return h}})();r.getElementsByClassName||(g=r.querySelectorAll?function(b,d,
e){return e.querySelectorAll((d?d:"")+"."+b)}:function(b,d,e){d=e.getElementsByTagName(d||u);e=[];var h=0,m=0,v=d.length,z,s;for(b=o+b+o;h<v;++h){z=d[h];if((s=z.className)&&(o+s+o).indexOf(b)>-1)e[m++]=z}return e});a.query=q;a.get=function(b,d){return q(b,d)[0]||null};a.mix(w,{query:q,get:a.get,filter:function(b,d){var e=q(b),h,m,v,z=[];if(a.isString(d)&&(h=i.exec(d))&&!h[1]){m=h[2];v=h[3];d=function(s){return!(m&&s.tagName!==m.toUpperCase()||v&&!w.hasClass(s,v))}}if(a.isFunction(d))z=a.filter(e,
d);else if(d&&a.ExternalSelector)z=a.ExternalSelector._filter(b,d);else c(d);return z},test:function(b,d){var e=q(b);return w.filter(e,d).length===e.length}})});
KISSY.add("dom-data",function(a,n){var q=window,l=a.DOM,f="_ks_data_"+a.now(),j={},g={},c={EMBED:1,OBJECT:1,APPLET:1};a.mix(l,{data:function(r,w,o){if(a.isPlainObject(w))for(var u in w)l.data(r,u,w[u]);else if(o===n){r=a.get(r);var t;if(!(!r||c[r.nodeName])){if(r==q)r=g;t=(u=r&&r.nodeType)?j:r;r=t[u?r[f]:f];if(a.isString(w)&&r)return r[w];return r}}else a.query(r).each(function(p){if(!(!p||c[p.nodeName])){if(p==q)p=g;var k=j,i;if(p&&p.nodeType){if(!(i=p[f]))i=p[f]=a.guid()}else{i=f;k=p}if(w&&o!==
n){k[i]||(k[i]={});k[i][w]=o}}})},removeData:function(r,w){a.query(r).each(function(o){if(o){if(o==q)o=g;var u,t=j,p,k=o&&o.nodeType;if(k)u=o[f];else{t=o;u=f}if(u){p=t[u];if(w){if(p){delete p[w];a.isEmptyObject(p)&&l.removeData(o)}}else{if(k)o.removeAttribute&&o.removeAttribute(f);else try{delete o[f]}catch(i){}k&&delete t[u]}}}})}})});
KISSY.add("dom-class",function(a,n){function q(g,c,r,w){if(!(c=a.trim(c)))return w?false:n;g=a.query(g);var o=0,u=g.length;c=c.split(f);for(var t;o<u;o++){t=g[o];if(l._isElementNode(t)){t=r(t,c,c.length);if(t!==n)return t}}if(w)return false}var l=a.DOM,f=/[\.\s]\s*\.?/,j=/[\n\t]/g;a.mix(l,{hasClass:function(g,c){return q(g,c,function(r,w,o){if(r=r.className){r=" "+r+" ";for(var u=0,t=true;u<o;u++)if(r.indexOf(" "+w[u]+" ")<0){t=false;break}if(t)return true}},true)},addClass:function(g,c){q(g,c,function(r,
w,o){var u=r.className;if(u){var t=" "+u+" ";u=u;for(var p=0;p<o;p++)if(t.indexOf(" "+w[p]+" ")<0)u+=" "+w[p];r.className=a.trim(u)}else r.className=c})},removeClass:function(g,c){q(g,c,function(r,w,o){var u=r.className;if(u)if(o){u=(" "+u+" ").replace(j," ");for(var t=0,p;t<o;t++)for(p=" "+w[t]+" ";u.indexOf(p)>=0;)u=u.replace(p," ");r.className=a.trim(u)}else r.className=""})},replaceClass:function(g,c,r){l.removeClass(g,c);l.addClass(g,r)},toggleClass:function(g,c,r){var w=a.isBoolean(r),o;q(g,
c,function(u,t,p){for(var k=0,i;k<p;k++){i=t[k];o=w?!r:l.hasClass(u,i);l[o?"removeClass":"addClass"](u,i)}})}})});
KISSY.add("dom-attr",function(a,n){var q=a.UA,l=q.ie,f=l&&l<8,j=document.documentElement.textContent!==n?"textContent":"innerText",g=a.DOM,c=g._isElementNode,r=/href|src|style/,w=/href|src|colspan|rowspan/,o=/\r/g,u=/radio|checkbox/,t={readonly:"readOnly"},p={val:1,css:1,html:1,text:1,data:1,width:1,height:1,offset:1};f&&a.mix(t,{"for":"htmlFor","class":"className"});a.mix(g,{attr:function(k,i,b,d){if(a.isPlainObject(i)){d=b;for(var e in i)g.attr(k,e,i[e],d)}else if(i=a.trim(i)){i=i.toLowerCase();
if(d&&p[i])return g[i](k,b);i=t[i]||i;if(b===n){k=a.get(k);if(!c(k))return n;var h;r.test(i)||(h=k[i]);if(h===n)h=k.getAttribute(i);if(f)if(w.test(i))h=k.getAttribute(i,2);else if(i==="style")h=k.style.cssText;return h===null?n:h}a.each(a.query(k),function(m){if(c(m))if(i==="style")m.style.cssText=b;else{if(i==="checked")m[i]=!!b;m.setAttribute(i,""+b)}})}},removeAttr:function(k,i){a.each(a.query(k),function(b){if(c(b)){g.attr(b,i,"");b.removeAttribute(i)}})},val:function(k,i){if(i===n){var b=a.get(k);
if(!c(b))return n;if(b&&b.nodeName.toUpperCase()==="option".toUpperCase())return(b.attributes.value||{}).specified?b.value:b.text;if(b&&b.nodeName.toUpperCase()==="select".toUpperCase()){var d=b.selectedIndex,e=b.options;if(d<0)return null;else if(b.type==="select-one")return g.val(e[d]);b=[];for(var h=0,m=e.length;h<m;++h)e[h].selected&&b.push(g.val(e[h]));return b}if(q.webkit&&u.test(b.type))return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(o,"")}a.each(a.query(k),function(v){if(v&&
v.nodeName.toUpperCase()==="select".toUpperCase()){if(a.isNumber(i))i+="";var z=a.makeArray(i),s=v.options,x;h=0;for(m=s.length;h<m;++h){x=s[h];x.selected=a.inArray(g.val(x),z)}if(!z.length)v.selectedIndex=-1}else if(c(v))v.value=i})},text:function(k,i){if(i===n){var b=a.get(k);if(c(b))return b[j]||"";else if(g._nodeTypeIs(b,3))return b.nodeValue}else a.each(a.query(k),function(d){if(c(d))d[j]=i;else if(g._nodeTypeIs(d,3))d.nodeValue=i})}})});
KISSY.add("dom-style",function(a,n){function q(b,d){var e=a.get(b),h=d===r?e.offsetWidth:e.offsetHeight;a.each(d===r?["Left","Right"]:["Top","Bottom"],function(m){h-=parseFloat(f._getComputedStyle(e,"padding"+m))||0;h-=parseFloat(f._getComputedStyle(e,"border"+m+"Width"))||0});return h}function l(b,d,e){var h=e;if(e===w&&u.test(d)){h=0;if(f.css(b,"position")==="absolute"){e=b[d==="left"?"offsetLeft":"offsetTop"];if(j.ie===8||j.opera)e-=o(f.css(b.offsetParent,"border-"+d+"-width"))||0;h=e-(o(f.css(b,
"margin-"+d))||0)}}return h}var f=a.DOM,j=a.UA,g=document,c=g.documentElement,r="width",w="auto",o=parseInt,u=/^left|top$/,t=/width|height|top|left|right|bottom|margin|padding/i,p=/-([a-z])/ig,k=function(b,d){return d.toUpperCase()},i={};a.mix(f,{_CUSTOM_STYLES:i,_getComputedStyle:function(b,d){var e="",h=b.ownerDocument;if(b.style)e=h.defaultView.getComputedStyle(b,null)[d];return e},css:function(b,d,e){if(a.isPlainObject(d))for(var h in d)f.css(b,h,d[h]);else{if(d.indexOf("-")>0)d=d.replace(p,k);
d=i[d]||d;if(e===n){b=a.get(b);h="";if(b&&b.style){h=d.get?d.get(b):b.style[d];if(h===""&&!d.get)h=l(b,d,f._getComputedStyle(b,d))}return h===n?"":h}else{if(e===null||e==="")e="";else if(!isNaN(new Number(e))&&t.test(d))e+="px";(d===r||d==="height")&&parseFloat(e)<0||a.each(a.query(b),function(m){if(m&&m.style){d.set?d.set(m,e):m.style[d]=e;if(e==="")m.style.cssText||m.removeAttribute("style")}})}}},width:function(b,d){if(d===n)return q(b,r);else f.css(b,r,d)},height:function(b,d){if(d===n)return q(b,
"height");else f.css(b,"height",d)},show:function(b){a.query(b).each(function(d){if(d)d.style.display=f.data(d,"display")||""})},hide:function(b){a.query(b).each(function(d){if(d){var e=d.style,h=e.display;if(h!=="none"){h&&f.data(d,"display",h);e.display="none"}}})},toggle:function(b){a.query(b).each(function(d){if(d)d.style.display==="none"?f.show(d):f.hide(d)})},addStyleSheet:function(b,d){var e;if(d)e=a.get("#"+d);if(!e){e=f.create("<style>",{id:d});a.get("head").appendChild(e);if(e.styleSheet)e.styleSheet.cssText=
b;else e.appendChild(g.createTextNode(b))}}});if(c.style.cssFloat!==n)i["float"]="cssFloat";else if(c.style.styleFloat!==n)i["float"]="styleFloat"});
KISSY.add("dom-style-ie",function(a,n){if(a.UA.ie){var q=a.DOM,l=document,f=l.documentElement,j=q._CUSTOM_STYLES,g=/^-?\d+(?:px)?$/i,c=/^-?\d/,r=/^width|height$/;try{if(f.style.opacity===n&&f.filters)j.opacity={get:function(o){var u=100;try{u=o.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(t){try{u=o.filters("alpha").opacity}catch(p){}}return u/100+""},set:function(o,u){var t=o.style,p=(o.currentStyle||0).filter||"";t.zoom=1;if(p)if(p=p.replace(/alpha\(opacity=.+\)/ig,""))p+=", ";t.filter=
p+"alpha(opacity="+u*100+")"}}}catch(w){}if(!(l.defaultView||{}).getComputedStyle&&f.currentStyle)q._getComputedStyle=function(o,u){var t=o.style,p=o.currentStyle[u];if(r.test(u))p=q[u](o)+"px";else if(!g.test(p)&&c.test(p)){var k=t.left,i=o.runtimeStyle.left;o.runtimeStyle.left=o.currentStyle.left;t.left=u==="fontSize"?"1em":p||0;p=t.pixelLeft+"px";t.left=k;o.runtimeStyle.left=i}return p}}});
KISSY.add("dom-offset",function(a,n){function q(h){var m=0,v=0,z=w(h[p]);if(h[e]){h=h[e]();m=h[k];v=h[i];if(f.mobile!=="apple"){m+=l[b](z);v+=l[d](z)}}return{left:m,top:v}}var l=a.DOM,f=a.UA,j=window,g=document,c=l._isElementNode,r=l._nodeTypeIs,w=l._getWin,o=g.compatMode==="CSS1Compat",u=Math.max,t=parseInt,p="ownerDocument",k="left",i="top",b="scrollLeft",d="scrollTop",e="getBoundingClientRect";a.mix(l,{offset:function(h,m){if(!(h=a.get(h))||!h[p])return null;if(m===n)return q(h);var v=h;if(l.css(v,
"position")==="static")v.style.position="relative";var z=q(v),s={},x,y;for(y in m){x=t(l.css(v,y),10)||0;s[y]=x+m[y]-z[y]}l.css(v,s)},scrollIntoView:function(h,m,v,z){if((h=a.get(h))&&h[p]){z=z===n?true:!!z;v=v===n?true:!!v;if(!m||m===j)return h.scrollIntoView(v);m=a.get(m);if(r(m,9))m=w(m);var s=m&&"scrollTo"in m&&m.document,x=l.offset(h),y=s?{left:l.scrollLeft(m),top:l.scrollTop(m)}:l.offset(m),A={left:x[k]-y[k],top:x[i]-y[i]};x=s?l.viewportHeight(m):m.clientHeight;y=s?l.viewportWidth(m):m.clientWidth;
var B=l[b](m),F=l[d](m),C=B+y,D=F+x,H=h.offsetHeight;h=h.offsetWidth;var G=A.left+B-(t(l.css(m,"borderLeftWidth"))||0);A=A.top+F-(t(l.css(m,"borderTopWidth"))||0);var I=G+h,K=A+H,E,J;if(H>x||A<F||v)E=A;else if(K>D)E=K-x;if(z)if(h>y||G<B||v)J=G;else if(I>C)J=I-y;if(s){if(E!==n||J!==n)m.scrollTo(J,E)}else{if(E!==n)m[d]=E;if(J!==n)m[b]=J}}}});a.each(["Left","Top"],function(h,m){var v="scroll"+h;l[v]=function(z){var s=0,x=w(z),y;if(x&&(y=x.document))s=x[m?"pageYOffset":"pageXOffset"]||y.documentElement[v]||
y.body[v];else if(c(z=a.get(z)))s=z[v];return s}});a.each(["Width","Height"],function(h){l["doc"+h]=function(m){m=m||g;return u(o?m.documentElement["scroll"+h]:m.body["scroll"+h],l["viewport"+h](m))};l["viewport"+h]=function(m){var v="inner"+h;m=w(m);var z=m.document;return v in m?m[v]:o?z.documentElement["client"+h]:z.body["client"+h]}})});
KISSY.add("dom-traversal",function(a,n){function q(g,c,r,w){if(!(g=a.get(g)))return null;if(c===n)c=1;var o=null,u,t;if(a.isNumber(c)&&c>=0){if(c===0)return g;u=0;t=c;c=function(){return++u===t}}for(;g=g[r];)if(j(g)&&(!c||f.test(g,c))&&(!w||w(g))){o=g;break}return o}function l(g,c,r){var w=[];var o=g=a.get(g);if(g&&r)o=g.parentNode;if(o){r=0;for(o=o.firstChild;o;o=o.nextSibling)if(j(o)&&o!==g&&(!c||f.test(o,c)))w[r++]=o}return w}var f=a.DOM,j=f._isElementNode;a.mix(f,{parent:function(g,c){return q(g,
c,"parentNode",function(r){return r.nodeType!=11})},next:function(g,c){return q(g,c,"nextSibling")},prev:function(g,c){return q(g,c,"previousSibling")},siblings:function(g,c){return l(g,c,true)},children:function(g,c){return l(g,c)},contains:function(g,c){var r=false;if((g=a.get(g))&&(c=a.get(c)))if(g.contains)return g.contains(c);else if(g.compareDocumentPosition)return!!(g.compareDocumentPosition(c)&16);else for(;!r&&(c=c.parentNode);)r=c==g;return r}})});
KISSY.add("dom-create",function(a,n){function q(s){var x=s.cloneNode(true);if(c.ie<8)x.innerHTML=s.innerHTML;return x}function l(s,x,y,A){if(y){var B=a.guid("ks-tmp-"),F=RegExp(k);x+='<span id="'+B+'"></span>';a.available(B,function(){var C=a.get("head"),D,H,G,I,K,E;for(F.lastIndex=0;D=F.exec(x);)if((G=(H=D[1])?H.match(b):false)&&G[2]){D=j.createElement("script");D.src=G[2];if((I=H.match(d))&&I[2])D.charset=I[2];D.async=true;C.appendChild(D)}else if((E=D[2])&&E.length>0)a.globalEval(E);(K=j.getElementById(B))&&
g.remove(K);a.isFunction(A)&&A()});f(s,x)}else{f(s,x);a.isFunction(A)&&A()}}function f(s,x){x=(x+"").replace(k,"");try{s.innerHTML=x}catch(y){for(;s.firstChild;)s.removeChild(s.firstChild);x&&s.appendChild(g.create(x))}}var j=document,g=a.DOM,c=a.UA,r=c.ie,w=g._nodeTypeIs,o=g._isElementNode,u=g._isKSNode,t=j.createElement("div"),p=/<(\w+)/,k=/<script([^>]*)>([\s\S]*?)<\/script>/ig,i=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,b=/\ssrc=(['"])(.*?)\1/i,d=/\scharset=(['"])(.*?)\1/i;a.mix(g,{create:function(s,x,y){if(w(s,
1)||w(s,3))return q(s);if(u(s))return q(s[0]);if(!(s=a.trim(s)))return null;var A=null;A=g._creators;var B,F="div",C;if(B=i.exec(s))A=(y||j).createElement(B[1]);else{if((B=p.exec(s))&&(C=B[1])&&a.isFunction(A[C=C.toLowerCase()]))F=C;s=A[F](s,y).childNodes;if(s.length===1)y=s[0].parentNode.removeChild(s[0]);else{s=s;C=y||j;y=null;if(s&&(s.push||s.item)&&s[0]){C=C||s[0].ownerDocument;y=C.createDocumentFragment();if(s.item)s=a.makeArray(s);C=0;for(A=s.length;C<A;C++)y.appendChild(s[C])}y=y}A=y}y=A;o(y)&&
a.isPlainObject(x)&&g.attr(y,x,true);return y},_creators:{div:function(s,x){var y=x?x.createElement("div"):t;y.innerHTML=s;return y}},html:function(s,x,y,A){if(x===n){s=a.get(s);if(o(s))return s.innerHTML}else a.each(a.query(s),function(B){o(B)&&l(B,x,y,A)})},remove:function(s){a.each(a.query(s),function(x){o(x)&&x.parentNode&&x.parentNode.removeChild(x)})}});if(c.gecko||r){var e=g._creators,h=g.create,m=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,v={option:"select",td:"tr",tr:"tbody",
tbody:"table",col:"colgroup",legend:"fieldset"};for(var z in v)(function(s){e[z]=function(x,y){return h("<"+s+">"+x+"</"+s+">",null,y)}})(v[z]);if(r){e.script=function(s,x){var y=x?x.createElement("div"):t;y.innerHTML="-"+s;y.removeChild(y.firstChild);return y};if(r<8)e.tbody=function(s,x){var y=h("<table>"+s+"</table>",null,x),A=y.children.tags("tbody")[0];y.children.length>1&&A&&!m.test(s)&&A.parentNode.removeChild(A);return y}}a.mix(e,{optgroup:e.option,th:e.td,thead:e.tbody,tfoot:e.tbody,caption:e.tbody,
colgroup:e.tbody})}});KISSY.add("dom-insertion",function(a){a.mix(a.DOM,{insertBefore:function(n,q){if((n=a.get(n))&&(q=a.get(q))&&q.parentNode)q.parentNode.insertBefore(n,q);return n},insertAfter:function(n,q){if((n=a.get(n))&&(q=a.get(q))&&q.parentNode)q.nextSibling?q.parentNode.insertBefore(n,q.nextSibling):q.parentNode.appendChild(n);return n}})});
KISSY.add("event",function(a,n){function q(k,i,b,d,e){if(a.isString(i))i=a.query(i);if(a.isArray(i)){a.each(i,function(h){p[k](h,b,d,e)});return true}if((b=a.trim(b))&&b.indexOf(o)>0){a.each(b.split(o),function(h){p[k](i,h,d,e)});return true}}function l(k,i){f(k)&&g.data(k,w,i)}function f(k){return k&&k.nodeType!==3&&k.nodeType!==8}var j=document,g=a.DOM,c=j.addEventListener?function(k,i,b,d){k.addEventListener&&k.addEventListener(i,b,!!d)}:function(k,i,b){k.attachEvent&&k.attachEvent("on"+i,b)},
r=j.removeEventListener?function(k,i,b,d){k.removeEventListener&&k.removeEventListener(i,b,!!d)}:function(k,i,b){k.detachEvent&&k.detachEvent("on"+i,b)},w="ksEventTargetId",o=" ",u=a.now(),t={},p={EVENT_GUID:w,special:{},add:function(k,i,b,d){if(!q("add",k,i,b,d)){var e=f(k)?g.data(k,w):-1,h,m,v,z,s;if(!(e===-1||!i||!a.isFunction(b))){if(!e){l(k,e=u++);t[e]={target:k,events:{}}}m=t[e].events;if(!m[i]){h=((e=!k.isCustomEventTarget)||k._supportSpecialEvent)&&p.special[i]||{};v=function(x,y){if(!x||
!x.fixed){x=new a.EventObject(k,x,i);a.isPlainObject(y)&&a.mix(x,y)}h.setup&&h.setup(x);return(h.handle||p._handle)(k,x,m[i].listeners)};m[i]={handle:v,listeners:[]};z=h.fix||i;s=h.capture;if(e)c(k,z,v,s);else k._addEvent&&k._addEvent(z,v,s)}m[i].listeners.push({fn:b,scope:d||k})}}},remove:function(k,i,b,d){if(!q("remove",k,i,b,d)){var e=f(k)?g.data(k,w):-1,h,m,v,z,s,x,y;if(e!==-1)if(e&&(h=t[e]))if(h.target===k){d=d||k;h=h.events||{};if(m=h[i]){v=m.listeners;x=v.length;if(a.isFunction(b)&&x){s=z=
0;for(y=[];z<x;++z)if(b!==v[z].fn||d!==v[z].scope)y[s++]=v[z];m.listeners=y;x=y.length}if(b===n||x===0){if(k.isCustomEventTarget)k._addEvent&&k._removeEvent(i,m.handle);else{b=p.special[i]||{};r(k,b.fix||i,m.handle)}delete h[i]}}if(i===n||a.isEmptyObject(h)){for(i in h)p.remove(k,i);delete t[e];g.removeData(k,w)}}}},_handle:function(k,i,b){b=b.slice(0);for(var d,e=0,h=b.length;e<h;++e){d=b[e];d=d.fn.call(d.scope||k,i);if(d===false&&k.isCustomEventTarget||i.isImmediatePropagationStopped)break}return d},
_getCache:function(k){return t[k]},_simpleAdd:c,_simpleRemove:r};p.on=p.add;a.Event=p});
KISSY.add("event-object",function(a,n){function q(j,g,c){this.currentTarget=j;this.originalEvent=g||{};if(g){this.type=g.type;this._fix()}else{this.type=c;this.target=j}this.currentTarget=j;this.fixed=true}var l=document,f="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");a.augment(q,
{_fix:function(){var j=this.originalEvent,g=f.length,c,r=this.currentTarget;for(r=r.nodeType===9?r:r.ownerDocument||l;g;){c=f[--g];this[c]=j[c]}if(!this.target)this.target=this.srcElement||l;if(this.target.nodeType===3)this.target=this.target.parentNode;if(!this.relatedTarget&&this.fromElement)this.relatedTarget=this.fromElement===this.target?this.toElement:this.fromElement;if(this.pageX===n&&this.clientX!==n){j=r.documentElement;g=r.body;this.pageX=this.clientX+(j&&j.scrollLeft||g&&g.scrollLeft||
0)-(j&&j.clientLeft||g&&g.clientLeft||0);this.pageY=this.clientY+(j&&j.scrollTop||g&&g.scrollTop||0)-(j&&j.clientTop||g&&g.clientTop||0)}if(this.which===n)this.which=this.charCode!==n?this.charCode:this.keyCode;if(this.metaKey===n)this.metaKey=this.ctrlKey;if(!this.which&&this.button!==n)this.which=this.button&1?1:this.button&2?3:this.button&4?2:0},preventDefault:function(){var j=this.originalEvent;if(j.preventDefault)j.preventDefault();else j.returnValue=false;this.isDefaultPrevented=true},stopPropagation:function(){var j=
this.originalEvent;if(j.stopPropagation)j.stopPropagation();else j.cancelBubble=true;this.isPropagationStopped=true},stopImmediatePropagation:function(){var j=this.originalEvent;j.stopImmediatePropagation?j.stopImmediatePropagation():this.stopPropagation();this.isImmediatePropagationStopped=true},halt:function(j){j?this.stopImmediatePropagation():this.stopPropagation();this.preventDefault()}});a.EventObject=q});
KISSY.add("event-target",function(a,n){var q=a.Event;a.EventTarget={isCustomEventTarget:true,fire:function(l,f){var j=a.DOM.data(this,q.EVENT_GUID)||-1;if((j=((q._getCache(j)||{}).events||{})[l])&&a.isFunction(j.handle))return j.handle(n,f);return this},on:function(l,f,j){q.add(this,l,f,j);return this},detach:function(l,f,j){q.remove(this,l,f,j);return this}}});
KISSY.add("event-mouseenter",function(a){var n=a.Event;a.UA.ie||a.each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(q){n.special[q.name]={fix:q.fix,setup:function(l){l.type=q.name},handle:function(l,f,j){var g=f.relatedTarget;try{for(;g&&g!==l;)g=g.parentNode;g!==l&&n._handle(l,f,j)}catch(c){}}}})});
KISSY.add("event-focusin",function(a){var n=a.Event;document.addEventListener&&a.each([{name:"focusin",fix:"focus"},{name:"focusout",fix:"blur"}],function(q){n.special[q.name]={fix:q.fix,capture:true,setup:function(l){l.type=q.name}}})});
KISSY.add("node",function(a){function n(f,j,g){var c;if(!(this instanceof n))return new n(f,j,g);if(f){if(a.isString(f))c=q.create(f,j,g);else if(l(f,1)||l(f,3))c=f;else if(f instanceof n)return f;this[0]=c}else this.length=0}var q=a.DOM,l=q._nodeTypeIs;n.TYPE="-ks-Node";a.augment(n,{length:1,getDOMNode:function(){return this[0]},nodeType:n.TYPE});a.one=function(f,j){var g=a.get(f,j);return g?new n(g):null};a.Node=n});
KISSY.add("nodelist",function(a){function n(f){if(!(this instanceof n))return new n(f);l.push.apply(this,f||[])}var q=a.DOM,l=Array.prototype;a.mix(n.prototype,{length:0,item:function(f){var j=null;if(q._isElementNode(this[f]))j=new a.Node(this[f]);return j},getDOMNodes:function(){return l.slice.call(this)},each:function(f,j){var g=this.length,c=0,r;for(r=new a.Node(this[0]);c<g&&f.call(j||r,r,c,this)!==false;r=new a.Node(this[++c]));return this}});a.all=function(f,j){return new n(a.query(f,j,true))};
a.NodeList=n});
KISSY.add("node-attach",function(a,n){function q(i,b,d,e){i=[this[i?u:o]()].concat(a.makeArray(b));if(b[d]===n)return e.apply(f,i);else{e.apply(f,i);return this}}function l(i,b){a.each(i,function(d){a.each([r,w],function(e,h){e[d]=function(m){switch(b){case t:return function(){return q.call(this,h,arguments,1,m)};case p:return function(){return q.call(this,h,arguments,0,m)};case k:return function(){var v=this[h?u:o]();return(v=m.apply(f,[v].concat(a.makeArray(arguments))))?new (a[a.isArray(v)?"NodeList":
"Node"])(v):null};default:return function(){var v=this[h?u:o]();v=m.apply(f,[v].concat(a.makeArray(arguments)));return v===n?this:v}}}(f[d])})})}var f=a.DOM,j=a.Event,g=f._nodeTypeIs,c=f._isKSNode,r=a.Node.prototype,w=a.NodeList.prototype,o="getDOMNode",u=o+"s",t=1,p=2,k=4;a.mix(r,{one:function(i){return a.one(i,this[0])},all:function(i){return a.all(i,this[0])}});l(["data","removeData"],t);l(["hasClass","addClass","removeClass","replaceClass","toggleClass"]);l(["attr","removeAttr"],t);l(["val","text"],
p);l(["css"],t);l(["width","height"],p);l(["show","hide","toggle"]);l(["offset"],p);l(["scrollIntoView"]);l(["parent","next","prev","siblings","children"],k);l(["contains"]);l(["html"],p);l(["remove"]);a.each(["insertBefore","insertAfter"],function(i){r[i]=function(b){f[i].call(f,this[0],b);return this}});a.each([r,w],function(i,b){a.mix(i,{append:function(d){d&&a.each(this,function(e){var h;if(b||a.isString(d))h=f.create(d);else{if(g(d,1)||g(d,3))h=d;if(c(d))h=d[0]}e.appendChild(h)});return this},
appendTo:function(d){if((d=a.get(d))&&d.appendChild)a.each(this,function(e){d.appendChild(e)});return this}})});a.each([r,w],function(i){a.mix(i,a.EventTarget,{_supportSpecialEvent:true});i._addEvent=function(b,d,e){for(var h=0,m=this.length;h<m;h++)j._simpleAdd(this[h],b,d,e)};i._removeEvent=function(b,d,e){for(var h=0,m=this.length;h<m;h++)j._simpleRemove(this[h],b,d,e)};delete i.fire})});
KISSY.add("cookie",function(a){var n=document,q=encodeURIComponent,l=decodeURIComponent;a.Cookie={get:function(f){var j;if(a.isString(f)&&f!=="")if(f=n.cookie.match("(?:^| )"+f+"(?:(?:=([^;]*))|;|$)"))j=f[1]?l(f[1]):"";return j},set:function(f,j,g,c,r,w){j=q(j);var o=g;if(typeof o==="number"){o=new Date;o.setTime(o.getTime()+g*864E5)}if(o instanceof Date)j+="; expires="+o.toUTCString();if(a.isString(c)&&c!=="")j+="; domain="+c;if(a.isString(r)&&r!=="")j+="; path="+r;if(w)j+="; secure";n.cookie=f+
"="+j},remove:function(f,j,g,c){this.set(f,"",0,j,g,c)}}});
KISSY.add("json",function(a){function n(o){return o<10?"0"+o:o}function q(o){j.lastIndex=0;return j.test(o)?'"'+o.replace(j,function(u){var t=r[u];return typeof t==="string"?t:"\\u"+("0000"+u.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+o+'"'}function l(o,u){var t,p,k,i,b=g,d,e=u[o];if(e&&typeof e==="object"&&typeof e.toJSON==="function")e=e.toJSON(o);if(typeof w==="function")e=w.call(u,o,e);switch(typeof e){case "string":return q(e);case "number":return isFinite(e)?String(e):"null";case "boolean":case "null":return String(e);
case "object":if(!e)return"null";g+=c;d=[];if(Object.prototype.toString.apply(e)==="[object Array]"){i=e.length;for(t=0;t<i;t+=1)d[t]=l(t,e)||"null";k=d.length===0?"[]":g?"[\n"+g+d.join(",\n"+g)+"\n"+b+"]":"["+d.join(",")+"]";g=b;return k}if(w&&typeof w==="object"){i=w.length;for(t=0;t<i;t+=1){p=w[t];if(typeof p==="string")if(k=l(p,e))d.push(q(p)+(g?": ":":")+k)}}else for(p in e)if(Object.hasOwnProperty.call(e,p))if(k=l(p,e))d.push(q(p)+(g?": ":":")+k);k=d.length===0?"{}":g?"{\n"+g+d.join(",\n"+g)+
"\n"+b+"}":"{"+d.join(",")+"}";g=b;return k}}a=a.JSON=window.JSON||{};if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+n(this.getUTCMonth()+1)+"-"+n(this.getUTCDate())+"T"+n(this.getUTCHours())+":"+n(this.getUTCMinutes())+":"+n(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var f=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
j=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,g,c,r={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},w;if(typeof a.stringify!=="function")a.stringify=function(o,u,t){var p;c=g="";if(typeof t==="number")for(p=0;p<t;p+=1)c+=" ";else if(typeof t==="string")c=t;if((w=u)&&typeof u!=="function"&&(typeof u!=="object"||typeof u.length!=="number"))throw Error("JSON.stringify");return l("",{"":o})};
if(typeof a.parse!=="function")a.parse=function(o,u){function t(k,i){var b,d,e=k[i];if(e&&typeof e==="object")for(b in e)if(Object.hasOwnProperty.call(e,b)){d=t(e,b);if(d!==undefined)e[b]=d;else delete e[b]}return u.call(k,i,e)}var p;o=String(o);f.lastIndex=0;if(f.test(o))o=o.replace(f,function(k){return"\\u"+("0000"+k.charCodeAt(0).toString(16)).slice(-4)});if(/^[\],:{}\s]*$/.test(o.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){p=eval("("+o+")");return typeof u==="function"?t({"":p},""):p}throw new SyntaxError("JSON.parse");}});
KISSY.add("anim-easing",function(a){var n=Math,q=n.PI,l=n.pow,f=n.sin,j=1.70158,g={easeNone:function(c){return c},easeIn:function(c){return c*c},easeOut:function(c){return(2-c)*c},easeBoth:function(c){return(c*=2)<1?0.5*c*c:0.5*(1- --c*(c-2))},easeInStrong:function(c){return c*c*c*c},easeOutStrong:function(c){return 1- --c*c*c*c},easeBothStrong:function(c){return(c*=2)<1?0.5*c*c*c*c:0.5*(2-(c-=2)*c*c*c)},elasticIn:function(c){if(c===0||c===1)return c;return-(l(2,10*(c-=1))*f((c-0.075)*2*q/0.3))},
elasticOut:function(c){if(c===0||c===1)return c;return l(2,-10*c)*f((c-0.075)*2*q/0.3)+1},elasticBoth:function(c){if(c===0||(c*=2)===2)return c;if(c<1)return-0.5*l(2,10*(c-=1))*f((c-0.1125)*2*q/0.45);return l(2,-10*(c-=1))*f((c-0.1125)*2*q/0.45)*0.5+1},backIn:function(c){if(c===1)c-=0.0010;return c*c*((j+1)*c-j)},backOut:function(c){return(c-=1)*c*((j+1)*c+j)+1},backBoth:function(c){if((c*=2)<1)return 0.5*c*c*(((j*=1.525)+1)*c-j);return 0.5*((c-=2)*c*(((j*=1.525)+1)*c+j)+2)},bounceIn:function(c){return 1-
g.bounceOut(1-c)},bounceOut:function(c){return c<1/2.75?7.5625*c*c:c<2/2.75?7.5625*(c-=1.5/2.75)*c+0.75:c<2.5/2.75?7.5625*(c-=2.25/2.75)*c+0.9375:7.5625*(c-=2.625/2.75)*c+0.984375},bounceBoth:function(c){if(c<0.5)return g.bounceIn(c*2)*0.5;return g.bounceOut(c*2-1)*0.5+0.5}};a.Easing=g});
KISSY.add("anim",function(a,n){function q(p,k,i,b,d){if(p=a.get(p)){if(!(this instanceof q))return new q(p,k,i,b,d);var e=a.isPlainObject(i);k=k;this.domEl=p;if(a.isPlainObject(k))k=a.param(k,";").replace(/=/g,":");var h={},m=o.length,v;w.innerHTML='<div style="'+k+'"></div>';for(p=w.firstChild.style;m--;)if(v=p[o[m]])h[o[m]]=l(v);this.props=h;this.targetStyle=k;if(e)e=a.merge(t,i);else{e=a.clone(t);i&&(e.duration=r(i,10)||1);a.isString(b)&&(b=c[b]);a.isFunction(b)&&(e.easing=b);a.isFunction(d)&&
(e.complete=d)}this.config=e;a.isFunction(d)&&this.on(u,d)}}function l(p){var k=r(p);p=(p+"").replace(/^[-\d\.]+/,"");return isNaN(k)?{v:p,u:"",f:j}:{v:k,u:p,f:f}}function f(p,k,i){return(p+(k-p)*i).toFixed(3)}function j(p,k,i){for(var b=2,d,e,h=[],m=[];d=3,e=arguments[b-1],b--;)if(e.substr(0,4)==="rgb(")for(e=e.match(/\d+/g);d--;)h.push(~~e[d]);else if(e.substr(0,1)==="#"){if(e.length===4)e="#"+e.substr(1,1)+e.substr(1,1)+e.substr(2,1)+e.substr(2,1)+e.substr(3,1)+e.substr(3,1);for(;d--;)h.push(parseInt(e.substr(1+
d*2,2),16))}else return k;for(;d--;){b=~~(h[d+3]+(h[d]-h[d+3])*i);m.push(b<0?0:b>255?255:b)}return"rgb("+m.join(",")+")"}var g=a.DOM,c=a.Easing,r=parseFloat,w=g.create("<div>"),o="backgroundColor borderBottomColor borderBottomWidth borderBottomStyle borderLeftColor borderLeftWidth borderLeftStyle borderRightColor borderRightWidth borderRightStyle borderSpacing borderTopColor borderTopWidth borderTopStyle bottom color font fontFamily fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" "),
u="complete",t={duration:1,easing:c.easeNone};a.augment(q,a.EventTarget,{run:function(){var p=this,k=p.config,i=p.domEl,b=k.duration*1E3,d=k.easing,e=a.now(),h=e+b,m=p.props,v={},z;for(z in m)v[z]=l(g.css(i,z));if(p.fire("start")!==false){p.stop();p.timer=a.later(k=function(){var s=a.now(),x=s>h?1:(s-e)/b,y,A,B;for(z in m){y=v[z];A=m[z];if(A.v==0)A.u=y.u;if(y.u!==A.u)y.v=0;g.css(i,z,A.f(y.v,A.v,d(x))+A.u)}if(p.fire("step")===false||(B=s>h)){p.stop();B&&p.fire(u)}},13,true);k();return p}},stop:function(p){var k=
this.domEl,i=this.targetStyle;if(this.timer){this.timer.cancel();this.timer=n}if(p){a.UA.ie&&i.indexOf("opacity")>-1&&g.css(k,"opacity",this.props.opacity.v);k.style.cssText+=";"+i;this.fire(u)}return this}});a.Anim=q});KISSY.add("anim-node-plugin",function(a,n){var q=a.Anim;a.each([a.Node.prototype,a.NodeList.prototype],function(l){l.animate=function(){var f=a.makeArray(arguments);a.each(this,function(j){q.apply(n,[j].concat(f)).run()});return this}})});KISSY.add("core");
