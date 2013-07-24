/*! checkbox - v1.4 - 2013-07-24 3:27:49 PM
* Copyright (c) 2013 sirzxj; Licensed  */
KISSY.add("gallery/checkbox/1.4/index",function(a,b,c,d){function e(b,c){var d=this;c=a.merge({target:b},c),e.superclass.constructor.call(d,c)}var f=c.all;return a.extend(e,d),a.extend(e,b,{selectAll:function(){var a=this,b=a.get("kfbtn"),c=a.get("target");return f(b).each(function(b,d){a._isSelected(b)||a._isDisabled(b)||(b.addClass(a.get("cls").selected),f(c[d]).prop("checked",!0))}),a},resetAll:function(){var a=this,b=a.get("kfbtn"),c=a.get("cls"),d=c.selected,e=(a.get("cls").hover,a.get("target"));return f(b).each(function(b,c){a._isSelected(b)&&(b.removeClass(d),f(e[c]).prop("checked",!1))}),a},_clickHandler:function(a){var b=this,c=b.get("target"),d=b.get("kfbtn"),e=b.get("cls").selected;f(c[a]).fire("click"),f(d[a]).toggleClass(e)},getAllChecked:function(){var a=this,b=a.get("target"),c=[];for(i=0,len=b.length;len>i;i++)a._isSelected(f(b[i]))&&!a._isDisabled(f(b[i]))&&c.push(i);return c},_labelHandler:function(a,b){var c,d=this,e=d.get("target"),g=f(d.get("kfbtn")),h=d.get("cls"),i=h.selected,j=(h.disabled,h.hover),k=d.get("getLabelFunc");c=k?k(f(e[a])):b.next("label"),c.on("click",function(){d._isDisabled(g[a])||(c.contains(b)&&b.detach("click"),d._isSelected(e[a])?(b.removeClass(i),f(e[a]).prop("checked",!1)):(b.addClass(i),f(e[a]).prop("checked",!0)))}).on("mouseenter",function(){d._isDisabled(g[a])||d._isSelected(g[a])||(c.contains(b)&&b.detach("mouseenter"),b.addClass(j))}).on("mouseleave",function(){d._isDisabled(g[a])||(c.contains(b)&&b.detach("mouseleave"),b.removeClass(j))})},_bindEvent:function(){var a=this,b=f(a.get("kfbtn")),c=this.get("cls").hover,d=a.get("hasLabel");a.get("target"),a.get("getLabelFunc"),b.each(function(b,e){b.on("mouseenter mouseleave",function(d){if(!a._isSelected(b)&&!a._isDisabled(b))switch(d.type){case"mouseenter":b.addClass(c);break;case"mouseleave":b.removeClass(c)}}).on("click",function(){a._isDisabled(b)||a._clickHandler.call(a,e)}).on("keyup",function(a){13===a.keyCode&&b.fire("click")}),d&&a._labelHandler(e,b)})}},{ATTRS:{target:{value:"",setter:function(a){return f(a)},getter:function(a){return f(a)}},kfbtn:{value:[]},cls:{value:{init:"ks-checkbox",selected:"ks-checkbox-checked",disabled:"ks-checkbox-disabled",hover:"ks-checkbox-hover"}},cssUrl:{value:"gallery/checkbox/1.4/style.css"},hasLabel:{value:!1},getLabelFunc:{value:void 0,setter:function(a){return a},getter:function(a){return a}},accessible:{value:!1}}}),e},{requires:["base","node","gallery/radio/1.4/index"]});