YUI.add("moodle-qtype_ddwtos-dd",function(e,t){var n="ddwtos_dd",r=function(){r.superclass.constructor.apply(this,arguments)};e.extend(r,e.Base,{selectors:null,touchscrolldisable:null,initializer:function(){var t="qtype_ddwtos-"+Math.random().toString(36).slice(2);M.util.js_pending(t),this.selectors=this.css_selectors(this.get("topnode")),this.set_padding_sizes_all(),this.clone_drag_items(),this.initial_place_of_drag_items(),this.make_drop_zones(),this.get("readonly")?(e.later(500,this,this.position_drag_items,[t]),e.one("window").on("resize",function(){this.position_drag_items(t)},this)):e.later(500,this,this.position_drag_items,[t,!0])},css_selectors:function(e){return{top_node:function(){return e},drag_container:function(){return e+" div.drags"},drags:function(){return this.drag_container()+" span.drag"},drag:function(e){return this.drags()+".no"+e},drags_in_group:function(e){return this.drags()+".group"+e},unplaced_drags_in_group:function(e){return this.drags_in_group(e)+".unplaced"},drags_for_choice_in_group:function(e,t){return this.drags_in_group(t)+".choice"+e},unplaced_drags_for_choice_in_group:function(e,t){return this.unplaced_drags_in_group(t)+".choice"+e},drops:function(){return e+" span.drop"},drop_for_place:function(e){return this.drops()+".place"+e},drops_in_group:function(e){return this.drops()+".group"+e},drag_homes:function(){return e+" span.draghome"},drag_homes_group:function(t){return e+" .draggrouphomes"+t+" span.draghome"},drag_home:function(t,n){return e+" .draggrouphomes"+t+" span.draghome.choice"+n},drops_group:function(t){return e+" span.drop.group"+t}}},set_padding_sizes_all:function(){for(var e=1;e<=8;e++)this.set_padding_size_for_group(e)},set_padding_size_for_group:function(t){var n=e.all(this.selectors.drag_homes_group(t));if(n.size()!==0){var r=0,i=0;n.each(function(e){r=Math.max(r,Math.ceil(e.get("offsetWidth"))),i=Math.max(i,Math.ceil(e.get("offsetHeight")))},this),r+=8,i+=2,n.each(function(e){this.pad_to_width_height(e,r,i)},this),e.all(this.selectors.drops_group(t)).each(function(e){this.pad_to_width_height(e,r+2,i+2)},this)}},pad_to_width_height:function(e,t,n){e.setStyle("width",t+"px").setStyle("height",n+"px").setStyle("lineHeight",n+"px")},clone_drag_items:function(){e.all(this.selectors.drag_homes()).each(this.clone_drag_items_for_one_choice,this)},clone_drag_items_for_one_choice:function(t){if(t.hasClass("infinite")){var n=this.get_group(t),r=e.all(this.selectors.drops_in_group(n)).size();for(var i=0;i<r;i++)this.clone_drag_item(t)}else this.clone_drag_item(t)},nextdragitemno:1,clone_drag_item:function(t){var n=t.cloneNode(!0);n.removeClass("draghome"),n.addClass("drag"),n.addClass("no"+this.nextdragitemno),this.nextdragitemno++,n.setStyles({visibility:"visible",position:"absolute"}),e.one(this.selectors.drag_container()).appendChild(n),this.get("readonly")||this.make_draggable(n)},get_classname_numeric_suffix:function(e,t){var n=e.getAttribute("class");if(n!==""){var r=n.split(" ");for(var i=0;i<r.length;i++){var s=new RegExp("^"+t+"([0-9])+$");if(s.test(r[i])){var o=new RegExp("([0-9])+$"),u=o.exec(r[i]);return Number(u[0])}}}throw'Prefix "'+t+'" not found in class names.'},get_choice:function(e){return this.get_classname_numeric_suffix(e,"choice")},get_group:function(e){return this.get_classname_numeric_suffix(e,"group")},get_place:function(e){return this.get_classname_numeric_suffix(e,"place")},get_no:function(e){return this.get_classname_numeric_suffix(e,"no")},placed:null,initial_place_of_drag_items:function(){e.all(this.selectors.drags()).addClass("unplaced"),this.placed=[];for(var t in this.get("inputids")){var n=this.get("inputids")[t],r=e.one("input#"+n),i=Number(r.get("value"));if(i!==0){var s=e.one(this.selectors.drop_for_place(t)),o=this.get_group(s),u=e.one(this.selectors.unplaced_drags_for_choice_in_group(i,o));this.place_drag_in_drop(u,s),this.position_drag_item(u)}}},make_draggable:function(t){(new e.DD.Drag({node:t,groups:[this.get_group(t)],dragMode:"point"})).plug(e.Plugin.DDConstrained,{constrain2node:this.selectors.top_node()}),this.prevent_touchmove_from_scrolling(t)},prevent_touchmove_from_scrolling:function(t){var n=e.UA.ie?"MSPointerStart":"touchstart",r=e.UA.ie?"MSPointerEnd":"touchend",i=e.UA.ie?"MSPointerMove":"touchmove";t.on(n,function(){if(this.touchscrolldisable)return;this.touchscrolldisable=e.one("body").on(i,function(e){e=e||window.event,e.preventDefault()})},this),t.on(r,function(){this.touchscrolldisable&&(this.touchscrolldisable.detach(),this.touchscrolldisable=null)},this)},make_drop_zones:function(){e.all(this.selectors.drops()).each(this.make_drop_zone,this)},make_drop_zone:function(t){var n=new e.DD.Drop({node:t,groups:[this.get_group(t)]});n.on("drop:hit",function(e){var t=e.drag.get("node"),n=e.drop.get("node");this.get_group(n)===this.get_group(t)&&this.place_drag_in_drop(t,n)},this),this.get("readonly")||t.on("dragchange",this.drop_zone_key_press,this)},place_drag_in_drop:function(t,n){var r=this.get_place(n),i=this.get("inputids")[r],s=e.one("input#"+i);t!==null?s.set("value",this.get_choice(t)):s.set("value","0");for(var o in this.placed)if(this.placed[o]===r){delete this.placed[o];var u=e.one(this.selectors.drag(o));u&&u.dd&&u.dd.detach("drag:start")}t!==null&&(this.placed[this.get_no(t)]=r,t.dd&&t.dd.once("drag:start",function(e,t,n){t.set("value",0),delete this.placed[this.get_no(n)],n.addClass("unplaced")},this,s,t))},remove_drag_from_drop:function(e){this.place_drag_in_drop(null,e)},position_drag_items:function(t,n){e.all(this.selectors.drags()).each(this.position_drag_item,this),M.util.js_complete(t),n&&e.later(500,this,this.position_drag_items,[t,!0])},position_drag_item:function(t){if(!t.hasClass("yui3-dd-dragging"))if(!this.placed[this.get_no(t)]){var n=this.get_group(t),r=this.get_choice(t),i=e.one(this.selectors.drag_home(n,r));t.setXY(i.getXY()),t.addClass("unplaced")}else{var s=this.placed[this.get_no(t)],o=e.one(this.selectors.drop_for_place(s));t.setXY([o.getX()+2,o.getY()+2]),t.removeClass
("unplaced")}},drop_zone_key_press:function(e){switch(e.direction){case"next":this.place_next_drag_in(e.target);break;case"previous":this.place_previous_drag_in(e.target);break;case"remove":this.remove_drag_from_drop(e.target)}e.preventDefault()},place_next_drag_in:function(e){this.choose_next_choice_for_drop(e,1)},place_previous_drag_in:function(e){this.choose_next_choice_for_drop(e,-1)},choose_next_choice_for_drop:function(t,n){var r,i=this.get_group(t),s=this.current_choice_in_drop(t),o=e.all(this.selectors.unplaced_drags_in_group(i));if(0===s)if(n===1)r=1;else{var u=o.pop();r=this.get_choice(u)}else r=s+n;var a;do{a=e.one(this.selectors.unplaced_drags_for_choice_in_group(r,i));if(e.one(this.selectors.drags_for_choice_in_group(r,i))===null){this.remove_drag_from_drop(t);return}r+=n}while(a===null);this.place_drag_in_drop(a,t)},current_choice_in_drop:function(t){var n=this.get("inputids")[this.get_place(t)],r=e.one("input#"+n);return Number(r.get("value"))}},{NAME:n,ATTRS:{readonly:{value:!1},topnode:{value:null},inputids:{value:null}}}),e.Event.define("dragchange",{_event:e.UA.webkit||e.UA.ie?"keydown":"keypress",_keys:{32:"next",37:"previous",38:"previous",39:"next",40:"next",27:"remove"},_keyHandler:function(e,t){this._keys[e.keyCode]&&(e.direction=this._keys[e.keyCode],t.fire(e))},on:function(e,t,n){t._detacher=e.on(this._event,this._keyHandler,this,n)}}),M.qtype_ddwtos=M.qtype_ddwtos||{},M.qtype_ddwtos.init_question=function(e){return new r(e)}},"@VERSION@",{requires:["node","dd","dd-drop","dd-constrain"]});
