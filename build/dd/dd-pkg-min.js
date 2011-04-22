/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("dd/ddm",function(j,k,h,e,i){function a(){a.superclass.constructor.apply(this,arguments);this._init()}function b(c,f,m){m=m||150;if(m===-1)return function(){c.apply(f,arguments)};var n=j.now();return function(){var p=j.now();if(p-n>m){n=p;c.apply(f,arguments)}}}function d(c){var f=c.offset();return{left:f.left,right:f.left+c[0].offsetWidth,top:f.top,bottom:f.top+c[0].offsetHeight}}function g(c,f){return c.left<=f.left&&c.right>=f.left&&c.top<=f.top&&c.bottom>=f.top}function l(c){if(c.top>=
c.bottom||c.left>=c.right)return 0;return(c.right-c.left)*(c.bottom-c.top)}function o(c,f){return{left:Math.max(c.left,f.left),right:Math.min(c.right,f.right),top:Math.max(c.top,f.top),bottom:Math.min(c.bottom,f.bottom)}}var q=document,t=j.require("node/node");a.ATTRS={prefixCls:{value:"ks-dd-"},bufferTime:{value:200},activeDrag:{},activeDrop:{},drops:{value:[]}};j.extend(a,i,{_regDrop:function(c){this.get("drops").push(c)},_unregDrop:function(c){c=j.indexOf(c,this.get("drops"));c!=-1&&this.get("drops").splice(c,
1)},_init:function(){this._showShimMove=b(this._move,this,30)},_move:function(c){var f=this.get("activeDrag");if(f){c.preventDefault();f._move(c);this._notifyDropsMove(c)}},_notifyDropsMove:function(c){var f=this.get("activeDrag"),m=f.get("mode"),n=this.get("drops"),p,s=0,v=d(f.get("node")),w=l(v);j.each(n,function(u){var r=u.getNodeFromTarget(c);if(!(!r||r[0]==f.get("dragNode")[0]))if(m=="point"){if(g(d(r),f.mousePos)){p=u;return false}}else if(m=="intersect"){r=l(o(v,d(r)));if(r>s){s=r;p=u}}else if(m==
"strict"){r=l(o(v,d(r)));if(r==w){p=u;return false}}});(n=this.get("activeDrop"))&&n!=p&&n._handleOut(c);if(p)p._handleOver(c);else{f.get("node").removeClass(this.get("prefixCls")+"drag-over");this.set("activeDrop",null)}},_deactivateDrops:function(){var c=this.get("activeDrag"),f=this.get("activeDrop");c.get("node").removeClass(this.get("prefixCls")+"drag-over");if(f){var m={drag:c,drop:f};f.get("node").removeClass(this.get("prefixCls")+"drop-over");f.fire("drophit",m);c.fire("dragdrophit",m);this.fire("drophit",
m);this.fire("dragdrophit",m)}else{c.fire("dragdropmiss",{drag:c});this.fire("dragdropmiss",{drag:c})}},_start:function(c){var f=this,m=f.get("bufferTime")||0;f._registerEvent();if(m)f._bufferTimer=setTimeout(function(){f._bufferStart(c)},m);else f._bufferStart(c)},_bufferStart:function(c){this.set("activeDrag",c);c.get("shim")&&this._activeShim();c._start();c.get("dragNode").addClass(this.get("prefixCls")+"dragging")},_end:function(c){var f=this.get("activeDrag");this._unregisterEvent();if(this._bufferTimer){clearTimeout(this._bufferTimer);
this._bufferTimer=null}this._shim&&this._shim.css({display:"none"});if(f){f._end(c);f.get("dragNode").removeClass(this.get("prefixCls")+"dragging");this._deactivateDrops(c);this.set("activeDrag",null);this.set("activeDrop",null)}},_activeShim:function(){var c=document;this._shim=(new t("<div style='background-color:red;position:absolute;left:0;width:100%;top:0;cursor:move;z-index:999999;'></div>")).appendTo(c.body);this._shim.css("opacity",0);this._activeShim=this._showShim;this._showShim()},_showShim:function(){this._shim.css({display:"",
height:k.docHeight()})},_registerEvent:function(){h.on(q,"mouseup",this._end,this);h.on(q,"mousemove",this._showShimMove,this)},_unregisterEvent:function(){h.remove(q,"mousemove",this._showShimMove,this);h.remove(q,"mouseup",this._end,this)}});e=new a;e.inRegion=g;e.region=d;return e},{requires:["dom","event","node","base"]});
KISSY.add("dd/draggable",function(j,k,h,e,i){function a(){a.superclass.constructor.apply(this,arguments);this._init()}a.POINTER="pointer";a.INTERSECT="intersect";a.STRICT="strict";a.ATTRS={node:{setter:function(b){return h.one(b)}},dragNode:{},shim:{value:true},handlers:{value:[]},cursor:{value:"move"},mode:{value:"point"}};j.extend(a,e,{_init:function(){var b=this.get("node"),d=this.get("handlers");this.set("dragNode",b);if(d.length==0)d[0]=b;for(var g=0;g<d.length;g++){var l=d[g];l=j.one(l);l.unselectable();
this.get("cursor")&&l.css("cursor","move")}b.on("mousedown",this._handleMouseDown,this)},destroy:function(){for(var b=this.get("node"),d=this.get("handlers"),g=0;g<d.length;g++){var l=d[g];l.css("cursor")=="move"&&l.css("cursor","auto")}b.detach("mousedown",this._handleMouseDown,this);this.detach()},_check:function(b){for(var d=this.get("handlers"),g=0;g<d.length;g++){var l=d[g];if(l.contains(b)||l[0]==b[0])return true}return false},_handleMouseDown:function(b){if(this._check(new h(b.target))){b.preventDefault();
this._prepare(b)}},_prepare:function(b){i._start(this);var d=this.get("node"),g=b.pageX;b=b.pageY;d=d.offset();this.startMousePos=this.mousePos={left:g,top:b};this.startNodePos=d;this._diff={left:g-d.left,top:b-d.top};this.set("diff",this._diff)},_move:function(b){var d=this.get("diff"),g=b.pageX-d.left;d=b.pageY-d.top;this.mousePos={left:b.pageX,top:b.pageY};b={left:g,top:d,pageX:b.pageX,pageY:b.pageY,drag:this};this.fire("drag",b);i.fire("drag",b)},_end:function(){this.fire("dragend",{drag:this});
i.fire("dragend",{drag:this})},_start:function(){this.fire("dragstart",{drag:this});i.fire("dragstart",{drag:this})}});return a},{requires:["ua","node","base","dd/ddm"]});
KISSY.add("dd/droppable",function(j,k,h,e){function i(){i.superclass.constructor.apply(this,arguments);this._init()}i.ATTRS={node:{setter:function(a){if(a){a=k.one(a);a.addClass(e.get("prefixCls")+"drop");return a}}}};j.extend(i,h,{getNodeFromTarget:function(){return this.get("node")},_init:function(){e._regDrop(this)},_handleOut:function(){var a=e.get("activeDrag");this.get("node").removeClass(e.get("prefixCls")+"drop-over");var b={drop:this,drag:a};this.fire("dropexit",b);e.fire("dropexit",b);a.get("node").removeClass(e.get("prefixCls")+
"drag-over");a.fire("dragexit",b);e.fire("dragexit",b)},_handleOver:function(a){var b=e.get("activeDrop");e.set("activeDrop",this);var d=e.get("activeDrag");this.get("node").addClass(e.get("prefixCls")+"drop-over");a=j.mix({drag:d,drop:this},a);if(this!=b){d.get("node").addClass(e.get("prefixCls")+"drag-over");d.fire("dragenter",a);this.fire("dropenter",a);e.fire("dragenter",a);e.fire("dropenter",a)}else{d.fire("dragover",a);this.fire("dropover",a);e.fire("dragover",a);e.fire("dropover",a)}},destroy:function(){e._unregDrop(this)}});
return i},{requires:["node","base","dd/ddm"]});
KISSY.add("dd/proxy",function(j){function k(){k.superclass.constructor.apply(this,arguments)}k.ATTRS={node:{value:function(h){h=j.one(h.get("node")[0].cloneNode(true));h.attr("id",j.guid("ks-dd-proxy"));return h}},destroyOnEnd:{value:false}};j.extend(k,j.Base,{attach:function(h){var e=this;h.on("dragstart",function(){var i=e.get("node"),a=h.get("node");if(!e.__proxy&&j.isFunction(i)){i=i(h);i.addClass("ks-dd-proxy");i.css("position","absolute");e.__proxy=i}a.parent().append(e.__proxy);e.__proxy.show();
e.__proxy.offset(a.offset());h.set("dragNode",a);h.set("node",e.__proxy)});h.on("dragend",function(){var i=e.__proxy;h.get("dragNode").offset(i.offset());i.hide();if(e.get("destroyOnEnd")){i.remove();e.__proxy=null}h.set("node",h.get("dragNode"))})},destroy:function(){var h=this.get("node");h&&!j.isFunction(h)&&h.remove()}});return k});
KISSY.add("dd/draggable-delegate",function(j,k,h,e){function i(){i.superclass.constructor.apply(this,arguments)}j.extend(i,h,{_init:function(){var a=this.get("handlers"),b=this.get("container");a.length==0&&a.push(this.get("selector"));b.on("mousedown",this._handleMouseDown,this)},_getHandler:function(a){for(var b=this.get("container"),d=this.get("handlers");a&&a[0]!==b[0];){for(var g=0;g<d.length;g++)if(e.test(a[0],d[g],b[0]))return a;a=a.parent()}},_getNode:function(a){for(var b=this.get("container"),
d=this.get("selector");a&&a[0]!=b[0];){if(e.test(a[0],d,b[0]))return a;a=a.parent()}},_handleMouseDown:function(a){var b=a.target;if(b=b&&this._getHandler(b))if(b=this._getNode(b)){a.preventDefault();this.set("node",b);this.set("dragNode",b);this._prepare(a)}}},{ATTRS:{container:{setter:function(a){return j.one(a)}},selector:{}}});return i},{requires:["./ddm","./draggable","dom"]});
KISSY.add("dd/droppable-delegate",function(j,k,h,e,i){function a(){a.superclass.constructor.apply(this,arguments)}j.extend(a,h,{getNodeFromTarget:function(b){b={left:b.pageX,top:b.pageY};var d=this.get("container"),g=this.get("selector");d=d.all(g);for(g=0;g<d.length;g++){var l=new i(d[g]);if(!l.hasClass("ks-dd-proxy")&&k.inRegion(k.region(l),b)){this.set("lastNode",this.get("node"));this.set("node",l);return l}}return null},_handleOut:function(){a.superclass._handleOut.call(this);this.set("node",
null);this.set("lastNode",null)},_handleOver:function(b){var d=k.get("activeDrop");k.set("activeDrop",this);var g=k.get("activeDrag");this.get("node").addClass(k.get("prefixCls")+"drop-over");b=j.mix({drag:g,drop:this},b);var l=this.get("node"),o=this.get("lastNode");if(this!=d||!o||o&&o[0]!==l[0]){if(o){this.set("node",o);a.superclass._handleOut.call(this)}this.set("node",l);g.get("node").addClass(k.get("prefixCls")+"drag-over");g.fire("dragenter",b);this.fire("dropenter",b);k.fire("dragenter",b);
k.fire("dropenter",b)}else{g.fire("dragover",b);this.fire("dropover",b);k.fire("dragover",b);k.fire("dropover",b)}}},{ATTRS:{lastNode:{},selector:{},container:{setter:function(b){return j.one(b)}}}});return a},{requires:["./ddm","./droppable","dom","node"]});
KISSY.add("dd/scroll",function(j,k,h,e){function i(){i.superclass.constructor.apply(this,arguments)}i.ATTRS={node:{setter:function(a){return h.one(a)}},rate:{value:[10,10]},diff:{value:[20,20]}};j.extend(i,k,{getRegion:function(a){return!a||a==window?{width:e.viewportWidth(),height:e.viewportHeight()}:{width:a[0].offsetWidth,height:a[0].offsetHeight}},getOffset:function(a){return!a||a==window?{left:e.scrollLeft(),top:e.scrollTop()}:a.offset()},getScroll:function(a){return!a||a==window?{left:e.scrollLeft(),
top:e.scrollTop()}:{left:a[0].scrollLeft,top:a[0].scrollTop}},setScroll:function(a,b){if(!a||a==window)window.scrollTo(b.left,b.top);else{a[0].scrollLeft=b.left;a[0].scrollTop=b.top}},attach:function(a){function b(){var c=d.get("node"),f=d.getRegion(c),m=f.width;f=f.height;var n=d.getScroll(c),p=j.clone(n),s=false;if(q.top-f>=-l[1]){n.top+=g[1];s=true}if(q.top<=l[1]){n.top-=g[1];s=true}if(q.left-m>=-l[0]){n.left+=g[0];s=true}if(q.left<=l[0]){n.left-=g[0];s=true}if(s){d.setScroll(c,n);t=setTimeout(arguments.callee,
100);o.fake=true;if(!c||c==window){n=d.getScroll(c);o.left+=n.left-p.left;o.top+=n.top-p.top}a.fire("drag",o)}else t=null}var d=this,g=d.get("rate"),l=d.get("diff"),o,q,t=null;a.on("drag",function(c){if(!c.fake){var f=d.get("node");o=c;q=j.clone(a.mousePos);c=d.getOffset(f);q.left-=c.left;q.top-=c.top;t||b()}});a.on("dragend",function(){clearTimeout(t);t=null})}});return i},{requires:["base","node","dom"]});
KISSY.add("dd",function(j,k,h,e,i,a,b,d){k={Draggable:h,Droppable:e,DDM:k,Proxy:i,DraggableDelegate:a,DroppableDelegate:b,Scroll:d};j.mix(j,k);return k},{requires:["dd/ddm","dd/draggable","dd/droppable","dd/proxy","dd/draggable-delegate","dd/droppable-delegate","dd/scroll"]});
