/*
Copyright 2010, KISSY UI Library v1.1.4
MIT Licensed
build time: Sep 17 10:11
*/
KISSY.add("dom",function(b,t){function s(u,q){return u&&u.nodeType===q}b.DOM={_isElementNode:function(u){return s(u,1)},_isKSNode:function(u){return b.Node&&s(u,b.Node.TYPE)},_getWin:function(u){return u&&"scrollTo"in u&&u.document?u:s(u,9)?u.defaultView||u.parentWindow:u===t?window:false},_nodeTypeIs:s}});
KISSY.add("selector",function(b,t){function s(a,c){var o,p=[],y,h;c=q(c);if(b.isString(a)){a=b.trim(a);if(C.test(a)){if(a=A(a.slice(1),c))p=[a]}else if(o=d.exec(a)){y=o[1];h=o[2];o=o[3];if(c=y?A(y,c):c)if(o)if(!y||a.indexOf(m)!==-1)p=f(o,h,c);else{if((a=A(y,c))&&i.hasClass(a,o))p=[a]}else if(h)p=j(h,c)}else if(b.ExternalSelector)return b.ExternalSelector(a,c);else n(a)}else if(a&&(a[w]||a[z]))p=a[w]?[a[w]()]:a[z]();else if(a&&(b.isArray(a)||u(a)))p=a;else if(a)p=[a];if(u(p))p=b.makeArray(p);p.each=
function(k,x){return b.each(p,k,x)};return p}function u(a){return a&&!a.nodeType&&a.item&&a!=window}function q(a){if(a===t)a=g;else if(b.isString(a)&&C.test(a))a=A(a.slice(1),g);else if(a&&a.nodeType!==1&&a.nodeType!==9)a=null;return a}function A(a,c){if(c.nodeType!==9)c=c.ownerDocument;return c.getElementById(a)}function j(a,c){return c.getElementsByTagName(a)}function f(a,c,o){o=a=o.getElementsByClassName(a);var p=0,y=0,h=a.length,k;if(c&&c!==r){o=[];for(c=c.toUpperCase();p<h;++p){k=a[p];if(k.tagName===
c)o[y++]=k}}return o}function n(a){b.error("Unsupported selector: "+a)}var g=document,i=b.DOM,m=" ",r="*",w="getDOMNode",z=w+"s",C=/^#[\w-]+$/,d=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var a=g.createElement("div");a.appendChild(g.createComment(""));if(a.getElementsByTagName(r).length>0)j=function(c,o){o=o.getElementsByTagName(c);if(c===r){c=[];for(var p=0,y=0,h;h=o[p++];)if(h.nodeType===1)c[y++]=h;o=c}return o}})();g.getElementsByClassName||(f=g.querySelectorAll?function(a,c,o){return o.querySelectorAll((c?
c:"")+"."+a)}:function(a,c,o){c=o.getElementsByTagName(c||r);o=[];var p=0,y=0,h=c.length,k,x;for(a=m+a+m;p<h;++p){k=c[p];if((x=k.className)&&(m+x+m).indexOf(a)>-1)o[y++]=k}return o});b.query=s;b.get=function(a,c){return s(a,c)[0]||null};b.mix(i,{query:s,get:b.get,filter:function(a,c){var o=s(a),p,y,h,k=[];if(b.isString(c)&&(p=d.exec(c))&&!p[1]){y=p[2];h=p[3];c=function(x){return!(y&&x.tagName!==y.toUpperCase()||h&&!i.hasClass(x,h))}}if(b.isFunction(c))k=b.filter(o,c);else if(c&&b.ExternalSelector)k=
b.ExternalSelector._filter(a,c);else n(c);return k},test:function(a,c){a=s(a);return i.filter(a,c).length===a.length}})});
KISSY.add("dom-data",function(b,t){function s(g){return g&&g.nodeType}var u=window,q=b.DOM,A="_ks_data_"+b.now(),j={},f={},n={EMBED:1,OBJECT:1,APPLET:1};b.mix(q,{data:function(g,i,m){if(b.isPlainObject(i))for(var r in i)q.data(g,r,i[r]);else if(m===t){g=b.get(g);var w;if(!(!g||n[g.nodeName])){if(g==u)g=f;w=(r=s(g))?j:g;g=w[r?g[A]:A];if(b.isString(i)&&g)return g[i];return g}}else b.query(g).each(function(z){if(!(!z||n[z.nodeName])){if(z==u)z=f;var C=j,d;if(s(z)){if(!(d=z[A]))d=z[A]=b.guid()}else{d=
A;C=z}if(i&&m!==t){C[d]||(C[d]={});C[d][i]=m}}})},removeData:function(g,i){b.query(g).each(function(m){if(m){if(m==u)m=f;var r,w=j,z,C=s(m);if(C)r=m[A];else{w=m;r=A}if(r){z=w[r];if(i){if(z){delete z[i];b.isEmptyObject(z)&&q.removeData(m)}}else{if(C)m.removeAttribute&&m.removeAttribute(A);else try{delete m[A]}catch(d){}C&&delete w[r]}}}})}})});
KISSY.add("dom-class",function(b,t){function s(j,f,n,g){if(!(f=b.trim(f)))return g?false:t;j=b.query(j);var i=0,m=j.length;f=f.split(q);for(var r;i<m;i++){r=j[i];if(u._isElementNode(r)){r=n(r,f,f.length);if(r!==t)return r}}if(g)return false}var u=b.DOM,q=/[\.\s]\s*\.?/,A=/[\n\t]/g;b.mix(u,{hasClass:function(j,f){return s(j,f,function(n,g,i){if(n=n.className){n=" "+n+" ";for(var m=0,r=true;m<i;m++)if(n.indexOf(" "+g[m]+" ")<0){r=false;break}if(r)return true}},true)},addClass:function(j,f){s(j,f,function(n,
g,i){var m=n.className;if(m){var r=" "+m+" ";m=m;for(var w=0;w<i;w++)if(r.indexOf(" "+g[w]+" ")<0)m+=" "+g[w];n.className=b.trim(m)}else n.className=f})},removeClass:function(j,f){s(j,f,function(n,g,i){var m=n.className;if(m)if(i){m=(" "+m+" ").replace(A," ");for(var r=0,w;r<i;r++)for(w=" "+g[r]+" ";m.indexOf(w)>=0;)m=m.replace(w," ");n.className=b.trim(m)}else n.className=""})},replaceClass:function(j,f,n){u.removeClass(j,f);u.addClass(j,n)},toggleClass:function(j,f,n){var g=b.isBoolean(n),i;s(j,
f,function(m,r,w){for(var z=0,C;z<w;z++){C=r[z];i=g?!n:u.hasClass(m,C);u[i?"removeClass":"addClass"](m,C)}})}})});
KISSY.add("dom-attr",function(b,t){function s(d,a){return a&&a.nodeName.toUpperCase()===d.toUpperCase()}var u=b.UA,q=u.ie,A=q&&q<8,j=document.documentElement.textContent!==t?"textContent":"innerText",f=b.DOM,n=f._isElementNode,g=function(d){return f._nodeTypeIs(d,3)},i=/href|src|style/,m=/href|src|colspan|rowspan/,r=/\r/g,w=/radio|checkbox/,z={readonly:"readOnly"},C={val:1,css:1,html:1,text:1,data:1,width:1,height:1,offset:1};A&&b.mix(z,{"for":"htmlFor","class":"className"});b.mix(f,{attr:function(d,
a,c,o){if(b.isPlainObject(a)){o=c;for(var p in a)f.attr(d,p,a[p],o)}else if(a=b.trim(a)){a=a.toLowerCase();if(o&&C[a])return f[a](d,c);a=z[a]||a;if(c===t){d=b.get(d);if(!n(d))return t;var y;i.test(a)||(y=d[a]);if(y===t)y=d.getAttribute(a);if(A)if(m.test(a))y=d.getAttribute(a,2);else if(a==="style")y=d.style.cssText;return y===null?t:y}b.each(b.query(d),function(h){if(n(h))if(a==="style")h.style.cssText=c;else{if(a==="checked")h[a]=!!c;h.setAttribute(a,""+c)}})}},removeAttr:function(d,a){b.each(b.query(d),
function(c){if(n(c)){f.attr(c,a,"");c.removeAttribute(a)}})},val:function(d,a){if(a===t){var c=b.get(d);if(!n(c))return t;if(s("option",c))return(c.attributes.value||{}).specified?c.value:c.text;if(s("select",c)){var o=c.selectedIndex;d=c.options;if(o<0)return null;else if(c.type==="select-one")return f.val(d[o]);c=[];for(var p=0,y=d.length;p<y;++p)d[p].selected&&c.push(f.val(d[p]));return c}if(u.webkit&&w.test(c.type))return c.getAttribute("value")===null?"on":c.value;return(c.value||"").replace(r,
"")}b.each(b.query(d),function(h){if(s("select",h)){if(b.isNumber(a))a+="";var k=b.makeArray(a),x=h.options,e;p=0;for(y=x.length;p<y;++p){e=x[p];e.selected=b.inArray(f.val(e),k)}if(!k.length)h.selectedIndex=-1}else if(n(h))h.value=a})},text:function(d,a){if(a===t){d=b.get(d);if(n(d))return d[j]||"";else if(g(d))return d.nodeValue}else b.each(b.query(d),function(c){if(n(c))c[j]=a;else if(g(c))c.nodeValue=a})}})});
KISSY.add("dom-style",function(b,t){function s(d,a){var c=b.get(d),o=a===n?c.offsetWidth:c.offsetHeight;b.each(a===n?["Left","Right"]:["Top","Bottom"],function(p){o-=parseFloat(q._getComputedStyle(c,"padding"+p))||0;o-=parseFloat(q._getComputedStyle(c,"border"+p+"Width"))||0});return o}function u(d,a,c){var o=c;if(c===g&&m.test(a)){o=0;if(q.css(d,"position")==="absolute"){c=d[a==="left"?"offsetLeft":"offsetTop"];if(A.ie===8||A.opera)c-=i(q.css(d.offsetParent,"border-"+a+"-width"))||0;o=c-(i(q.css(d,
"margin-"+a))||0)}}return o}var q=b.DOM,A=b.UA,j=document,f=j.documentElement,n="width",g="auto",i=parseInt,m=/^left|top$/,r=/width|height|top|left|right|bottom|margin|padding/i,w=/-([a-z])/ig,z=function(d,a){return a.toUpperCase()},C={};b.mix(q,{_CUSTOM_STYLES:C,_getComputedStyle:function(d,a){var c="",o=d.ownerDocument;if(d.style)c=o.defaultView.getComputedStyle(d,null)[a];return c},css:function(d,a,c){if(b.isPlainObject(a))for(var o in a)q.css(d,o,a[o]);else{if(a.indexOf("-")>0)a=a.replace(w,z);
a=C[a]||a;if(c===t){d=b.get(d);o="";if(d&&d.style){o=a.get?a.get(d):d.style[a];if(o===""&&!a.get)o=u(d,a,q._getComputedStyle(d,a))}return o===t?"":o}else{if(c===null||c==="")c="";else if(!isNaN(new Number(c))&&r.test(a))c+="px";(a===n||a==="height")&&parseFloat(c)<0||b.each(b.query(d),function(p){if(p&&p.style){a.set?a.set(p,c):(p.style[a]=c);if(c==="")p.style.cssText||p.removeAttribute("style")}})}}},width:function(d,a){if(a===t)return s(d,n);else q.css(d,n,a)},height:function(d,a){if(a===t)return s(d,
"height");else q.css(d,"height",a)},show:function(d){b.query(d).each(function(a){if(a)a.style.display=q.data(a,"display")||""})},hide:function(d){b.query(d).each(function(a){if(a){var c=a.style,o=c.display;if(o!=="none"){o&&q.data(a,"display",o);c.display="none"}}})},toggle:function(d){b.query(d).each(function(a){if(a)a.style.display==="none"?q.show(a):q.hide(a)})},addStyleSheet:function(d,a){var c;if(a)c=b.get("#"+a);if(!c){c=q.create("<style>",{id:a});b.get("head").appendChild(c);if(c.styleSheet)c.styleSheet.cssText=
d;else c.appendChild(j.createTextNode(d))}}});if(f.style.cssFloat!==t)C["float"]="cssFloat";else if(f.style.styleFloat!==t)C["float"]="styleFloat"});
KISSY.add("dom-style-ie",function(b,t){if(b.UA.ie){var s=b.DOM;b=document;var u=b.documentElement,q=s._CUSTOM_STYLES,A=/^-?\d+(?:px)?$/i,j=/^-?\d/,f=/^width|height$/;try{if(u.style.opacity===t&&u.filters)q.opacity={get:function(g){var i=100;try{i=g.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(m){try{i=g.filters("alpha").opacity}catch(r){}}return i/100+""},set:function(g,i){var m=g.style;g=(g.currentStyle||0).filter||"";m.zoom=1;if(g)if(g=g.replace(/alpha\(opacity=.+\)/ig,""))g+=", ";
m.filter=g+"alpha(opacity="+i*100+")"}}}catch(n){}if(!(b.defaultView||{}).getComputedStyle&&u.currentStyle)s._getComputedStyle=function(g,i){var m=g.style,r=g.currentStyle[i];if(f.test(i))r=s[i](g)+"px";else if(!A.test(r)&&j.test(r)){var w=m.left,z=g.runtimeStyle.left;g.runtimeStyle.left=g.currentStyle.left;m.left=i==="fontSize"?"1em":r||0;r=m.pixelLeft+"px";m.left=w;g.runtimeStyle.left=z}return r}}});
KISSY.add("dom-offset",function(b,t){function s(h){var k=0,x=0,e=i(h[d]);if(h[y]){h=h[y]();k=h[a];x=h[c];if(A.mobile!=="apple"){k+=q[o](e);x+=q[p](e)}}return{left:k,top:x}}function u(h,k){if(q.css(h,z)==="static")h.style[z]=C;var x=s(h),e={},l,v;for(v in k){l=w(q.css(h,v),10)||0;e[v]=l+k[v]-x[v]}q.css(h,e)}var q=b.DOM,A=b.UA,j=window,f=document,n=q._isElementNode,g=q._nodeTypeIs,i=q._getWin,m=f.compatMode==="CSS1Compat",r=Math.max,w=parseInt,z="position",C="relative",d="ownerDocument",a="left",c=
"top",o="scrollLeft",p="scrollTop",y="getBoundingClientRect";b.mix(q,{offset:function(h,k){if(!(h=b.get(h))||!h[d])return null;if(k===t)return s(h);u(h,k)},scrollIntoView:function(h,k,x,e){if((h=b.get(h))&&h[d]){e=e===t?true:!!e;x=x===t?true:!!x;if(!k||k===j)return h.scrollIntoView(x);k=b.get(k);if(g(k,9))k=i(k);var l=k&&"scrollTo"in k&&k.document,v=q.offset(h),B=l?{left:q.scrollLeft(k),top:q.scrollTop(k)}:q.offset(k),D={left:v[a]-B[a],top:v[c]-B[c]};v=l?q.viewportHeight(k):k.clientHeight;B=l?q.viewportWidth(k):
k.clientWidth;var G=q[o](k),E=q[p](k),F=G+B,M=E+v,I=h.offsetHeight;h=h.offsetWidth;var H=D.left+G-(w(q.css(k,"borderLeftWidth"))||0);D=D.top+E-(w(q.css(k,"borderTopWidth"))||0);var N=H+h,J=D+I,K,L;if(I>v||D<E||x)K=D;else if(J>M)K=J-v;if(e)if(h>B||H<G||x)L=H;else if(N>F)L=N-B;if(l){if(K!==t||L!==t)k.scrollTo(L,K)}else{if(K!==t)k[p]=K;if(L!==t)k[o]=L}}}});b.each(["Left","Top"],function(h,k){var x="scroll"+h;q[x]=function(e){var l=0,v=i(e),B;if(v&&(B=v.document))l=v[k?"pageYOffset":"pageXOffset"]||B.documentElement[x]||
B.body[x];else if(n(e=b.get(e)))l=e[x];return l}});b.each(["Width","Height"],function(h){q["doc"+h]=function(k){k=k||f;return r(m?k.documentElement["scroll"+h]:k.body["scroll"+h],q["viewport"+h](k))};q["viewport"+h]=function(k){var x="inner"+h;k=i(k);var e=k.document;return x in k?k[x]:m?e.documentElement["client"+h]:e.body["client"+h]}})});
KISSY.add("dom-traversal",function(b,t){function s(j,f,n,g){if(!(j=b.get(j)))return null;if(f===t)f=1;var i=null,m,r;if(b.isNumber(f)&&f>=0){if(f===0)return j;m=0;r=f;f=function(){return++m===r}}for(;j=j[n];)if(A(j)&&(!f||q.test(j,f))&&(!g||g(j))){i=j;break}return i}function u(j,f,n){var g=[];var i=j=b.get(j);if(j&&n)i=j.parentNode;if(i){n=0;for(i=i.firstChild;i;i=i.nextSibling)if(A(i)&&i!==j&&(!f||q.test(i,f)))g[n++]=i}return g}var q=b.DOM,A=q._isElementNode;b.mix(q,{parent:function(j,f){return s(j,
f,"parentNode",function(n){return n.nodeType!=11})},next:function(j,f){return s(j,f,"nextSibling")},prev:function(j,f){return s(j,f,"previousSibling")},siblings:function(j,f){return u(j,f,true)},children:function(j,f){return u(j,f)},contains:function(j,f){var n=false;if((j=b.get(j))&&(f=b.get(f)))if(j.contains)return j.contains(f);else if(j.compareDocumentPosition)return!!(j.compareDocumentPosition(f)&16);else for(;!n&&(f=f.parentNode);)n=f==j;return n}})});
KISSY.add("dom-create",function(b,t){function s(e,l){r(e)&&b.isPlainObject(l)&&n.attr(e,l,true);return e}function u(e,l){var v=null,B;if(e&&(e.push||e.item)&&e[0]){l=l||e[0].ownerDocument;v=l.createDocumentFragment();if(e.item)e=b.makeArray(e);l=0;for(B=e.length;l<B;l++)v.appendChild(e[l])}return v}function q(e){var l=e.cloneNode(true);if(g.ie<8)l.innerHTML=e.innerHTML;return l}function A(e,l,v,B){if(v){var D=b.guid("ks-tmp-"),G=new RegExp(d);l+='<span id="'+D+'"></span>';b.available(D,function(){var E=
b.get("head"),F,M,I,H,N,J;for(G.lastIndex=0;F=G.exec(l);)if((I=(M=F[1])?M.match(c):false)&&I[2]){F=f.createElement("script");F.src=I[2];if((H=M.match(o))&&H[2])F.charset=H[2];F.async=true;E.appendChild(F)}else if((J=F[2])&&J.length>0)b.globalEval(J);(N=f.getElementById(D))&&n.remove(N);b.isFunction(B)&&B()});j(e,l)}else{j(e,l);b.isFunction(B)&&B()}}function j(e,l){l=(l+"").replace(d,"");try{e.innerHTML=l}catch(v){for(;e.firstChild;)e.removeChild(e.firstChild);l&&e.appendChild(n.create(l))}}var f=
document,n=b.DOM,g=b.UA,i=g.ie,m=n._nodeTypeIs,r=n._isElementNode,w=n._isKSNode,z=f.createElement("div"),C=/<(\w+)/,d=/<script([^>]*)>([\s\S]*?)<\/script>/ig,a=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,c=/\ssrc=(['"])(.*?)\1/i,o=/\scharset=(['"])(.*?)\1/i;b.mix(n,{create:function(e,l,v){if(m(e,1)||m(e,3))return q(e);if(w(e))return q(e[0]);if(!(e=b.trim(e)))return null;var B=null;B=n._creators;var D,G="div",E;if(D=a.exec(e))B=(v||f).createElement(D[1]);else{if((D=C.exec(e))&&(E=D[1])&&b.isFunction(B[E=E.toLowerCase()]))G=
E;e=B[G](e,v).childNodes;B=e.length===1?e[0].parentNode.removeChild(e[0]):u(e,v||f)}return s(B,l)},_creators:{div:function(e,l){l=l?l.createElement("div"):z;l.innerHTML=e;return l}},html:function(e,l,v,B){if(l===t){e=b.get(e);if(r(e))return e.innerHTML}else b.each(b.query(e),function(D){r(D)&&A(D,l,v,B)})},remove:function(e){b.each(b.query(e),function(l){r(l)&&l.parentNode&&l.parentNode.removeChild(l)})}});if(g.gecko||i){var p=n._creators,y=n.create,h=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,
k={option:"select",td:"tr",tr:"tbody",tbody:"table",col:"colgroup",legend:"fieldset"};for(var x in k)(function(e){p[x]=function(l,v){return y("<"+e+">"+l+"</"+e+">",null,v)}})(k[x]);if(i){p.script=function(e,l){l=l?l.createElement("div"):z;l.innerHTML="-"+e;l.removeChild(l.firstChild);return l};if(i<8)p.tbody=function(e,l){l=y("<table>"+e+"</table>",null,l);var v=l.children.tags("tbody")[0];l.children.length>1&&v&&!h.test(e)&&v.parentNode.removeChild(v);return l}}b.mix(p,{optgroup:p.option,th:p.td,
thead:p.tbody,tfoot:p.tbody,caption:p.tbody,colgroup:p.tbody})}});KISSY.add("dom-insertion",function(b){b.mix(b.DOM,{insertBefore:function(t,s){if((t=b.get(t))&&(s=b.get(s))&&s.parentNode)s.parentNode.insertBefore(t,s);return t},insertAfter:function(t,s){if((t=b.get(t))&&(s=b.get(s))&&s.parentNode)s.nextSibling?s.parentNode.insertBefore(t,s.nextSibling):s.parentNode.appendChild(t);return t}})});
