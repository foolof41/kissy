/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("node/anim-plugin",function(e,d,f,g,l){function n(h,w,o,k,i,q,x){if(w==="toggle"){i=d.css(h,c)===j?1:0;w="show"}if(i)d.css(h,c,d.data(h,c)||"");var m={},v={};e.each(z[w],function(r){if(r===p){m[p]=d.css(h,p);d.css(h,p,A)}else if(r===t){m[t]=d.css(h,t);v.opacity=i?1:0;i&&d.css(h,t,0)}else if(r===s){m[s]=d.css(h,s);v.height=i?d.css(h,s)||h.naturalHeight:0;i&&d.css(h,s,0)}else if(r===u){m[u]=d.css(h,u);v.width=i?d.css(h,u)||h.naturalWidth:0;i&&d.css(h,u,0)}});return(new f(h,v,o,q||"easeOut",
function(){if(!i){var r=h.style,y=r[c];if(y!==j){y&&d.data(h,c,y);r[c]=j}m[s]&&d.css(h,{height:m[s]});m[u]&&d.css(h,{width:m[u]});m[t]&&d.css(h,{opacity:m[t]});m[p]&&d.css(h,{overflow:m[p]})}k&&e.isFunction(k)&&k()},x)).run()}var a=g.prototype,b="ksAnims"+e.now(),c="display",j="none",p="overflow",A="hidden",t="opacity",s="height",u="width",z={show:[p,t,s,u],fade:[t],slide:[p,s]};g.__ANIM_KEY=b;(function(h){function w(o,k){var i=d.data(o,b);i||d.data(o,b,i=[]);k.on("complete",function(){var q=d.data(o,
b);if(q){var x=e.indexOf(k,q);x>=0&&q.splice(x,1);q.length||d.removeData(o,b)}});i.push(k)}h.animate=function(){var o=e.makeArray(arguments);e.each(this,function(k){var i=f.apply(l,[k].concat(o)).run();w(k,i)});return this};h.stop=function(o){e.each(this,function(k){var i=d.data(k,b);if(i){e.each(i,function(q){q.stop(o)});d.removeData(k,b)}});return this};e.each({show:["show",1],hide:["show",0],toggle:["toggle"],fadeIn:["fade",1],fadeOut:["fade",0],slideDown:["slide",1],slideUp:["slide",0]},function(o,
k){h[k]=function(i,q,x,m){d[k]&&arguments.length===0?d[k](this):e.each(this,function(v){var r=n(v,o[0],i,q,o[1],x,m);w(v,r)});return this}})})(a)},{requires:["dom","anim","./base"]});
KISSY.add("node/attach",function(e,d,f,g,l){function n(b,c,j){j.unshift(c);b=d[b].apply(d,j);if(b===l)return c;return b}var a=g.prototype;e.each(["equals","contains","scrollTop","scrollLeft","height","width","addStyleSheet","appendTo","prependTo","insertBefore","before","after","insertAfter","test","hasClass","addClass","removeClass","replaceClass","toggleClass","removeAttr","hasAttr","hasProp","toggle","scrollIntoView","remove","removeData","hasData","unselectable"],function(b){a[b]=function(){var c=
e.makeArray(arguments);return n(b,this,c)}});e.each(["filter","parent","closest","next","prev","siblings","children"],function(b){a[b]=function(){var c=e.makeArray(arguments);c.unshift(this);c=d[b].apply(d,c);c=c===l?this:c===null?null:new g(c);return c}});e.each({attr:1,text:1,css:1,val:0,prop:1,offset:1,html:0,data:1},function(b,c){a[c]=function(){var j=e.makeArray(arguments);if(j[b]===l){j.unshift(this);j=d[c].apply(d,j)}else j=n(c,this,j);return j}});e.each(["on","detach","fire","delegate","undelegate"],
function(b){a[b]=function(){var c=e.makeArray(arguments);c.unshift(this);return f[b].apply(f,c)}})},{requires:["dom","event","./base"]});
KISSY.add("node/base",function(e,d,f){function g(a,b,c){if(!(this instanceof g))return new g(a,b,c);if(a)if(e.isString(a)){a=d.create(a,b,c);if(a.nodeType===11){l.push.apply(this,e.makeArray(a.childNodes));return f}}else if(e.isArray(a)||n(a)){l.push.apply(this,e.makeArray(a));return f}else a=a;else return f;this[0]=a;this.length=1;return f}var l=Array.prototype,n=d._isNodeList;e.augment(g,{length:0,item:function(a){if(e.isNumber(a)){if(a>=this.length)return null;return new g(this[a],f,f)}else return new g(a,
f,f)},add:function(a,b,c){if(e.isNumber(b)){c=b;b=f}a=e.makeArray(g.all(a,b));b=new g(this,f,f);if(c===f)l.push.apply(b,a);else{c=[c,0];c.push.apply(c,a);l.splice.apply(b,c)}return b},slice:function(a,b){return new g(l.slice.call(this,a,b),f,f)},getDOMNodes:function(){return l.slice.call(this)},each:function(a,b){var c=this.length,j=0,p;for(p=new g(this[0],f,f);j<c&&a.call(b||p,p,j,this)!==false;p=new g(this[++j],f,f));return this},getDOMNode:function(){return this[0]},all:function(a){if(this.length>
0)return g.all(a,this[0]);return new g(f,f,f)}});g.prototype.one=function(a){a=this.all(a);return a.length?a:null};g.all=function(a,b){if(e.isString(a)&&(a=e.trim(a))&&a.length>=3&&e.startsWith(a,"<")&&e.endsWith(a,">")){if(b){if(b.getDOMNode)b=b.getDOMNode();if(b.ownerDocument)b=b.ownerDocument}return new g(a,f,b)}return new g(d.query(a,b),f,f)};g.one=function(a,b){var c=g.all(a,b);return c.length?c:null};return g},{requires:["dom"]});
KISSY.add("node/override",function(e,d,f,g){e.each(["append","prepend","before","after"],function(l){g.prototype[l]=function(n){n=n;if(e.isString(n))n=d.create(n);d[l](n,this);return this}})},{requires:["dom","event","./base","./attach"]});KISSY.add("node",function(e,d){return d},{requires:["node/base","node/attach","node/override","node/anim-plugin"]});
