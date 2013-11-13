(function(e){e.jPanelMenu=function(t){if(typeof t=="undefined"||t==null){t={}}var n={options:e.extend({menu:"#menu",trigger:".menu-trigger",excludedPanelContent:"style, script",direction:"left",openPosition:"250px",animated:true,closeOnContentClick:true,keyboardShortcuts:[{code:27,open:false,close:true},{code:37,open:false,close:true},{code:39,open:true,close:true},{code:77,open:true,close:true}],duration:150,openDuration:t.duration||150,closeDuration:t.duration||150,easing:"ease-in-out",openEasing:t.easing||"ease-in-out",closeEasing:t.easing||"ease-in-out",before:function(){},beforeOpen:function(){},beforeClose:function(){},after:function(){},afterOpen:function(){},afterClose:function(){},beforeOn:function(){},afterOn:function(){},beforeOff:function(){},afterOff:function(){}},t),settings:{transitionsSupported:"WebkitTransition"in document.body.style||"MozTransition"in document.body.style||"msTransition"in document.body.style||"OTransition"in document.body.style||"Transition"in document.body.style,shiftFixedChildren:false,panelPosition:"relative",positionUnits:"px"},menu:"#jPanelMenu-menu",panel:".jPanelMenu-panel",fixedChildren:[],timeouts:{},clearTimeouts:function(){clearTimeout(n.timeouts.open);clearTimeout(n.timeouts.afterOpen);clearTimeout(n.timeouts.afterClose)},setPositionUnits:function(){var e=false,t=["%","px","em"];for(unitID in t){var r=t[unitID];if(n.options.openPosition.toString().substr(-r.length)==r){e=true;n.settings.positionUnits=r}}if(!e){n.options.openPosition=parseInt(n.options.openPosition)+n.settings.positionUnits}},checkFixedChildren:function(){n.disableTransitions();var t={position:e(n.panel).css("position")};t[n.options.direction]=e(n.panel).css(n.options.direction)=="auto"?0:e(n.panel).css(n.options.direction);e(n.panel).find("> *").each(function(){if(e(this).css("position")=="fixed"&&e(this).css(n.options.direction)=="auto"){n.fixedChildren.push(this)}});if(n.fixedChildren.length>0){var r={position:"relative"};r[n.options.direction]="1px";n.setPanelStyle(r);if(parseInt(e(n.fixedChildren[0]).offset().left)==0){n.settings.shiftFixedChildren=true}}n.setPanelStyle(t)},setjPanelMenuStyles:function(){var t="background:#fff";var r=e("html").css("background-color");var i=e("body").css("background-color");var s=function(t){var n=[];e.each(["background-color","background-image","background-position","background-repeat","background-attachment","background-size","background-clip"],function(e,r){if(t.css(r)>""){n.push(r+":"+t.css(r))}});return n.join(";")};if(i!="transparent"&&i!="rgba(0, 0, 0, 0)"){t=s(e("body"))}else if(r!="transparent"&&r!="rgba(0, 0, 0, 0)"){t=s(e("html"))}if(e("#jPanelMenu-style-master").length==0){e("body").append('<style id="jPanelMenu-style-master">body{width:100%}.jPanelMenu,body{overflow-x:hidden}#jPanelMenu-menu{display:block;position:fixed;top:0;'+n.options.direction+":0;height:100%;z-index:-1;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch}.jPanelMenu-panel{position:static;"+n.options.direction+":0;top:0;z-index:2;width:100%;min-height:100%;"+t+";}</style>")}},setMenuState:function(t){var n=t?"open":"closed";e("body").attr("data-menu-position",n)},getMenuState:function(){return e("body").attr("data-menu-position")},menuIsOpen:function(){if(n.getMenuState()=="open")return true;else return false},setMenuStyle:function(t){e(n.menu).css(t)},setPanelStyle:function(t){e(n.panel).css(t)},showMenu:function(){n.setMenuStyle({display:"block"});n.setMenuStyle({"z-index":"1"})},hideMenu:function(){n.setMenuStyle({"z-index":"-1"});n.setMenuStyle({display:"none"})},enableTransitions:function(t,r){var i=t/1e3;var s=n.getCSSEasingFunction(r);n.disableTransitions();e("body").append('<style id="jPanelMenu-style-transitions">.jPanelMenu-panel{-webkit-transition: all '+i+"s "+s+"; -moz-transition: all "+i+"s "+s+"; -o-transition: all "+i+"s "+s+"; transition: all "+i+"s "+s+";}</style>")},disableTransitions:function(){e("#jPanelMenu-style-transitions").remove()},enableFixedTransitions:function(t,r,i,s){var o=i/1e3;var u=n.getCSSEasingFunction(s);n.disableFixedTransitions(r);e("body").append('<style id="jPanelMenu-style-fixed-'+r+'">'+t+"{-webkit-transition: all "+o+"s "+u+"; -moz-transition: all "+o+"s "+u+"; -o-transition: all "+o+"s "+u+"; transition: all "+o+"s "+u+";}</style>")},disableFixedTransitions:function(t){e("#jPanelMenu-style-fixed-"+t).remove()},getCSSEasingFunction:function(e){switch(e){case"linear":return e;break;case"ease":return e;break;case"ease-in":return e;break;case"ease-out":return e;break;case"ease-in-out":return e;break;default:return"ease-in-out";break}},getJSEasingFunction:function(e){switch(e){case"linear":return e;break;default:return"swing";break}},openMenu:function(t){if(typeof t=="undefined"||t==null){t=n.options.animated}n.clearTimeouts();n.options.before();n.options.beforeOpen();n.setMenuState(true);n.setPanelStyle({position:"relative"});n.showMenu();var r={none:!t?true:false,transitions:t&&n.settings.transitionsSupported?true:false};if(r.transitions||r.none){if(r.none)n.disableTransitions();if(r.transitions)n.enableTransitions(n.options.openDuration,n.options.openEasing);var i={};i[n.options.direction]=n.options.openPosition;n.setPanelStyle(i);if(n.settings.shiftFixedChildren){e(n.fixedChildren).each(function(){var t=e(this).prop("tagName").toLowerCase()+" "+e(this).attr("class"),i=t.replace(" ","."),t=t.replace(" ","-");if(r.none)n.disableFixedTransitions(t);if(r.transitions)n.enableFixedTransitions(i,t,n.options.openDuration,n.options.openEasing);var s={};s[n.options.direction]=n.options.openPosition;e(this).css(s)})}n.timeouts.afterOpen=setTimeout(function(){n.disableTransitions();if(n.settings.shiftFixedChildren){e(n.fixedChildren).each(function(){var t=e(this).prop("tagName").toLowerCase()+" "+e(this).attr("class"),t=t.replace(" ","-");n.disableFixedTransitions(t)})}n.options.after();n.options.afterOpen();n.initiateContentClickListeners()},n.options.openDuration)}else{var s=n.getJSEasingFunction(n.options.openEasing);var o={};o[n.options.direction]=n.options.openPosition;e(n.panel).stop().animate(o,n.options.openDuration,s,function(){n.options.after();n.options.afterOpen();n.initiateContentClickListeners()});if(n.settings.shiftFixedChildren){e(n.fixedChildren).each(function(){var t={};t[n.options.direction]=n.options.openPosition;e(this).stop().animate(t,n.options.openDuration,s)})}}},closeMenu:function(t){if(typeof t=="undefined"||t==null){t=n.options.animated}n.clearTimeouts();n.options.before();n.options.beforeClose();n.setMenuState(false);var r={none:!t?true:false,transitions:t&&n.settings.transitionsSupported?true:false};if(r.transitions||r.none){if(r.none)n.disableTransitions();if(r.transitions)n.enableTransitions(n.options.closeDuration,n.options.closeEasing);var i={};i[n.options.direction]=0+n.settings.positionUnits;n.setPanelStyle(i);if(n.settings.shiftFixedChildren){e(n.fixedChildren).each(function(){var t=e(this).prop("tagName").toLowerCase()+" "+e(this).attr("class"),i=t.replace(" ","."),t=t.replace(" ","-");if(r.none)n.disableFixedTransitions(t);if(r.transitions)n.enableFixedTransitions(i,t,n.options.closeDuration,n.options.closeEasing);var s={};s[n.options.direction]=0+n.settings.positionUnits;e(this).css(s)})}n.timeouts.afterClose=setTimeout(function(){n.setPanelStyle({position:n.settings.panelPosition});n.disableTransitions();if(n.settings.shiftFixedChildren){e(n.fixedChildren).each(function(){var t=e(this).prop("tagName").toLowerCase()+" "+e(this).attr("class"),t=t.replace(" ","-");n.disableFixedTransitions(t)})}n.hideMenu();n.options.after();n.options.afterClose();n.destroyContentClickListeners()},n.options.closeDuration)}else{var s=n.getJSEasingFunction(n.options.closeEasing);var o={};o[n.options.direction]=0+n.settings.positionUnits;e(n.panel).stop().animate(o,n.options.closeDuration,s,function(){n.setPanelStyle({position:n.settings.panelPosition});n.hideMenu();n.options.after();n.options.afterClose();n.destroyContentClickListeners()});if(n.settings.shiftFixedChildren){e(n.fixedChildren).each(function(){var t={};t[n.options.direction]=0+n.settings.positionUnits;e(this).stop().animate(t,n.options.closeDuration,s)})}}},triggerMenu:function(e){if(n.menuIsOpen())n.closeMenu(e);else n.openMenu(e)},initiateClickListeners:function(){e(document).on("click",n.options.trigger,function(){n.triggerMenu(n.options.animated);return false})},destroyClickListeners:function(){e(document).off("click",n.options.trigger,null)},initiateContentClickListeners:function(){if(!n.options.closeOnContentClick)return false;e(document).on("click",n.panel,function(e){if(n.menuIsOpen())n.closeMenu(n.options.animated)});e(document).on("touchend",n.panel,function(e){if(n.menuIsOpen())n.closeMenu(n.options.animated)})},destroyContentClickListeners:function(){if(!n.options.closeOnContentClick)return false;e(document).off("click",n.panel,null);e(document).off("touchend",n.panel,null)},initiateKeyboardListeners:function(){var t=["input","textarea"];e(document).on("keydown",function(r){var i=e(r.target),s=false;e.each(t,function(){if(i.is(this.toString())){s=true}});if(s){return true}for(mapping in n.options.keyboardShortcuts){if(r.which==n.options.keyboardShortcuts[mapping].code){var o=n.options.keyboardShortcuts[mapping];if(o.open&&o.close){n.triggerMenu(n.options.animated)}else if(o.open&&!o.close&&!n.menuIsOpen()){n.openMenu(n.options.animated)}else if(!o.open&&o.close&&n.menuIsOpen()){n.closeMenu(n.options.animated)}return false}}})},destroyKeyboardListeners:function(){e(document).off("keydown",null)},setupMarkup:function(){e("html").addClass("jPanelMenu");e("body > *").not(n.menu+", "+n.options.excludedPanelContent).wrapAll('<div class="'+n.panel.replace(".","")+'"/>');e(n.options.menu).clone().attr("id",n.menu.replace("#","")).insertAfter("body > "+n.panel)},resetMarkup:function(){e("html").removeClass("jPanelMenu");e("body > "+n.panel+" > *").unwrap();e(n.menu).remove()},init:function(){n.options.beforeOn();n.initiateClickListeners();if(Object.prototype.toString.call(n.options.keyboardShortcuts)==="[object Array]"){n.initiateKeyboardListeners()}n.setjPanelMenuStyles();n.setMenuState(false);n.setupMarkup();n.setMenuStyle({width:n.options.openPosition});n.checkFixedChildren();n.setPositionUnits();n.closeMenu(false);n.options.afterOn()},destroy:function(){n.options.beforeOff();n.closeMenu();n.destroyClickListeners();if(Object.prototype.toString.call(n.options.keyboardShortcuts)==="[object Array]"){n.destroyKeyboardListeners()}n.resetMarkup();var t={};t[n.options.direction]="auto";e(n.fixedChildren).each(function(){e(this).css(t)});n.fixedChildren=[];n.options.afterOff()}};return{on:n.init,off:n.destroy,trigger:n.triggerMenu,open:n.openMenu,close:n.closeMenu,isOpen:n.menuIsOpen,menu:n.menu,getMenu:function(){return e(n.menu)},panel:n.panel,getPanel:function(){return e(n.panel)}}}})(jQuery)