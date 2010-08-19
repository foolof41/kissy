/*
Copyright 2010, KISSY UI Library v1.1.2
MIT Licensed
build time: Aug 19 19:35
*/
(function(n,g,o){if(n[g]===o)n[g]={};g=n[g];var r=n.document,w=location,s=function(a,c,e,d){if(!c||!a)return a;if(e===o)e=true;var f,j,m;if(d&&(m=d.length))for(f=0;f<m;f++){j=d[f];if(j in c)if(e||!(j in a))a[j]=c[j]}else for(j in c)if(e||!(j in a))a[j]=c[j];return a},x=false,t=[],v=false,y=/^#?([\w-]+)$/,z=0;s(g,{version:"1.1.2",_init:function(){this.Env={mods:{},_loadingQueue:{}};var a=r.getElementsByTagName("script");this.Config={debug:"",base:a[a.length-1].src.replace(/^(.*)(seed|kissy).*$/i,
"$1"),timeout:10}},ready:function(a){v||this._bindReady();x?a.call(n,this):t.push(a);return this},_bindReady:function(){var a=this,c=r.documentElement.doScroll,e=c?"onreadystatechange":"DOMContentLoaded",d=function(){a._fireReady()};v=true;if(r.readyState==="complete")return d();if(r.addEventListener){var f=function(){r.removeEventListener(e,f,false);d()};r.addEventListener(e,f,false);n.addEventListener("load",d,false)}else{var j=function(){if(r.readyState==="complete"){r.detachEvent(e,j);d()}};r.attachEvent(e,
j);n.attachEvent("onload",d);if(n==n.top){var m=function(){try{c("left");d()}catch(p){setTimeout(m,1)}};m()}}},_fireReady:function(){if(!x){x=true;if(t){for(var a,c=0;a=t[c++];)a.call(n,this);t=null}}},available:function(a,c){if((a=(a+"").match(y)[1])&&g.isFunction(c))var e=1,d=g.later(function(){if(r.getElementById(a)&&(c()||1)||++e>500)d.cancel()},40,true)},mix:s,merge:function(){var a={},c,e=arguments.length;for(c=0;c<e;++c)s(a,arguments[c]);return a},augment:function(){var a=arguments,c=a.length-
2,e=a[0],d=a[c],f=a[c+1],j=1;if(!g.isArray(f)){d=f;f=o;c++}if(!g.isBoolean(d)){d=o;c++}for(;j<c;j++)s(e.prototype,a[j].prototype||a[j],d,f);return e},extend:function(a,c,e,d){if(!c||!a)return a;var f=Object.prototype,j=c.prototype,m=function(p){function b(){}b.prototype=p;return new b}(j);a.prototype=m;m.constructor=a;a.superclass=j;if(c!==Object&&j.constructor===f.constructor)j.constructor=c;e&&s(m,e);d&&s(a,d);return a},namespace:function(){var a=arguments.length,c=null,e,d,f;for(e=0;e<a;++e){f=
(""+arguments[e]).split(".");c=this;for(d=n[f[0]]===c?1:0;d<f.length;++d)c=c[f[d]]=c[f[d]]||{}}return c},app:function(a,c){var e=g.isString(a),d=e?n[a]||{}:a;s(d,this,true,g._APP_MEMBERS);d._init();s(d,g.isFunction(c)?c():c);e&&(n[a]=d);return d},log:function(a,c,e){if(g.Config.debug){if(e)a=e+": "+a;if(n.console!==o&&console.log)console[c&&console[c]?c:"log"](a)}},error:function(a){if(g.Config.debug)throw a;},guid:function(a){var c=z++ +"";return a?a+c:c}});g._init();g._APP_MEMBERS=["_init","namespace"];
if(w&&(w.search||"").indexOf("ks-debug")!==-1)g.Config.debug=true})(window,"KISSY");
(function(n,g,o){function r(b){var h=typeof b;return b===null||h!=="object"&&h!=="function"}function w(b){return t.slice.call(b)}var s=document,x=s.documentElement,t=Array.prototype,v=t.indexOf,y=t.lastIndexOf,z=t.filter,a=String.prototype.trim,c=Object.prototype.toString,e=encodeURIComponent,d=decodeURIComponent,f=/^\s+|\s+$/g,j=/^(\w+)\[\]$/,m=/\S/;g.mix(g,{isUndefined:function(b){return b===o},isBoolean:function(b){return typeof b==="boolean"},isString:function(b){return typeof b==="string"},isNumber:function(b){return typeof b===
"number"&&isFinite(b)},isPlainObject:function(b){return b&&c.call(b)==="[object Object]"&&!b.nodeType&&!b.setInterval},isEmptyObject:function(b){for(var h in b)return false;return true},isFunction:function(b){return c.call(b)==="[object Function]"},isArray:function(b){return c.call(b)==="[object Array]"},trim:a?function(b){return b==o?"":a.call(b)}:function(b){return b==o?"":b.toString().replace(f,"")},substitute:function(b,h,i){if(!g.isString(b)||!g.isPlainObject(h))return b;return b.replace(i||
/\\?\{([^{}]+)\}/g,function(k,l){if(k.charAt(0)==="\\")return k.slice(1);return h[l]!==o?h[l]:""})},each:function(b,h,i){var k,l=0,q=b.length,u=q===o||g.isFunction(b);i=i||n;if(u)for(k in b){if(h.call(i,b[k],k,b)===false)break}else for(k=b[0];l<q&&h.call(i,k,l,b)!==false;k=b[++l]);return b},indexOf:v?function(b,h){return v.call(h,b)}:function(b,h){for(var i=0,k=h.length;i<k;++i)if(h[i]===b)return i;return-1},lastIndexOf:y?function(b,h){return y.call(h,b)}:function(b,h){for(var i=h.length-1;i>=0;i--)if(h[i]===
b)break;return i},unique:function(b,h){h&&b.reverse();b=b.slice();for(var i=0,k,l;i<b.length;){for(l=b[i];(k=g.lastIndexOf(l,b))!==i;)b.splice(k,1);i+=1}h&&b.reverse();return b},inArray:function(b,h){return g.indexOf(b,h)>-1},makeArray:function(b){if(b===null||b===o)return[];if(g.isArray(b))return b;if(typeof b.length!=="number"||g.isString(b)||g.isFunction(b))return[b];return w(b)},filter:z?function(b,h,i){return z.call(b,h,i)}:function(b,h,i){var k=[];g.each(b,function(l,q,u){h.call(i,l,q,u)&&k.push(l)});
return k},param:function(b,h){if(!g.isPlainObject(b))return"";h=h||"&";var i=[],k,l;for(k in b){l=b[k];k=e(k);if(r(l))i.push(k,"=",e(l+""),h);else if(g.isArray(l)&&l.length)for(var q=0,u=l.length;q<u;++q)r(l[q])&&i.push(k,"[]=",e(l[q]+""),h)}i.pop();return i.join("")},unparam:function(b,h){if(typeof b!=="string"||(b=g.trim(b)).length===0)return{};var i={};b=b.split(h||"&");for(var k,l,q,u=0,A=b.length;u<A;++u){h=b[u].split("=");k=d(h[0]);try{l=d(h[1]||"")}catch(B){l=h[1]||""}if((q=k.match(j))&&q[1]){i[q[1]]=
i[q[1]]||[];i[q[1]].push(l)}else i[k]=l}return i},later:function(b,h,i,k,l){h=h||0;k=k||{};var q=b,u=g.makeArray(l),A;if(g.isString(b))q=k[b];q||g.error("method undefined");b=function(){q.apply(k,u)};A=i?setInterval(b,h):setTimeout(b,h);return{id:A,interval:i,cancel:function(){this.interval?clearInterval(A):clearTimeout(A)}}},clone:function(b){var h=b,i,k;if(b&&((i=g.isArray(b))||g.isPlainObject(b))){h=i?[]:{};for(k in b)if(b.hasOwnProperty(k))h[k]=g.clone(b[k])}return h},now:function(){return(new Date).getTime()},
globalEval:function(b){if(b&&m.test(b)){var h=s.getElementsByTagName("head")[0]||x,i=s.createElement("script");i.text=b;h.insertBefore(i,h.firstChild);h.removeChild(i)}}});try{w(x.childNodes)}catch(p){w=function(b){for(var h=[],i=b.length-1;i>=0;i--)h[i]=b[i];return h}}})(window,KISSY);
(function(n,g,o){var r=n.document,w=r.getElementsByTagName("head")[0]||r.documentElement,s=2,x=3,t=4,v=g.mix,y=r.createElement("script").readyState?function(a,c){var e=a.onreadystatechange;a.onreadystatechange=function(){var d=a.readyState;if(d==="loaded"||d==="complete"){a.onreadystatechange=null;e&&e();c.call(this)}}}:function(a,c){a.addEventListener("load",c,false)},z=/\.css(?:\?|$)/i;n={add:function(a,c,e){var d=this.Env.mods,f;if(g.isString(a)&&!e&&g.isPlainObject(c)){f={};f[a]=c;a=f}if(g.isPlainObject(a)){g.each(a,
function(j,m){j.name=m});v(d,a)}else{if(e&&e.host)a=e.host;v(f=d[a]||{},{name:a,status:s});if(!f.fns)f.fns=[];c&&f.fns.push(c);v(d[a]=f,e);f.attach!==false&&this._isAttached(f.requires)&&this._attachMod(f)}return this},use:function(a,c,e){a=a.replace(/\s+/g,"").split(",");var d=this,f=d.Env.mods,j,m=a.length,p,b;e=e||{};if(d._isAttached(a,e.scope))c&&c(d);else{for(j=0;j<m&&(p=f[a[j]]);j++)if(p.status!==t){if(e.order&&j>0){if(!p.requires)p.requires=[];p._requires=p.requires.concat();g.inArray(a[j-
1],p.requires)||p.requires.push(a[j-1])}d._attach(p,function(){if(!b&&d._isAttached(a)){b=true;if(p._requires)p.requires=p._requires;c&&c(d)}},e)}return d}},_attach:function(a,c,e){function d(){if(f._isAttached(j)){a.status===s&&f._attachMod(a,e.scope);a.status===t&&c()}}for(var f=this,j=a.requires||[],m=0,p=j.length;m<p;m++)f._attach(f.Env.mods[j[m]],d,e);f._buildPath(a);f._load(a,d)},_attachMod:function(a,c){var e=this;if(c)a.fns=c.Env.mods[a.name].fns;if(a.fns){g.each(a.fns,function(d){d&&d(e)});
a.fns=o}a.status=t},_isAttached:function(a,c){c=(c||this).Env.mods;for(var e,d=(a=g.makeArray(a)).length-1;d>=0&&(e=c[a[d]]);d--)if(e.status!==t)return false;return true},_load:function(a,c){function e(){if(a.status!==x){a.status=s;c()}d()}function d(){j[f]=o;delete j.url}var f=a.fullpath,j=this.Env._loadingQueue,m=j[f];if(m)a.status=1;if((a.status||0)<1&&f){a.status=1;j[f]=this.getScript(f,{success:function(){KISSY.log(a.name+" onload fired.","info");e()},error:function(){a.status=x;d()},charset:a.charset})}else if(a.status===
1&&m)y(m,e);else{a.status=s;c()}},_buildPath:function(a){if(!a.fullpath&&a.path)a.fullpath=this.Config.base+a.path;if(a.fullpath&&this.Config.debug)a.fullpath=a.fullpath.replace(/-min/g,"")},getScript:function(a,c,e){var d=z.test(a),f=r.createElement(d?"link":"script"),j=c,m,p,b;if(g.isPlainObject(j)){c=j.success;m=j.error;p=j.timeout;e=j.charset}if(d){f.href=a;f.rel="stylesheet"}else{f.src=a;f.async=true}if(e)f.charset=e;if(g.isFunction(c))d?c.call(f):y(f,function(){if(b){b.cancel();b=o}c.call(f)});
if(g.isFunction(m))b=g.later(function(){b=o;m()},(p||this.Config.timeout)*1E3);w.insertBefore(f,w.firstChild);return f}};v(g,n);g.each(n,function(a,c){g._APP_MEMBERS.push(c)})})(window,KISSY);(function(n){var g={core:{path:"packages/core-min.js",charset:"utf-8"}};n.each(["sizzle","datalazyload","flash","switchable","suggest"],function(o){g[o]={path:o+"/"+o+"-pkg-min.js",requires:["core"],charset:"utf-8"}});n.add(g)})(KISSY);
