Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var n=Array.prototype.slice.call(arguments,1),t=this,a=function(){},o=function(){return t.apply(this instanceof a?this:e,n.concat(Array.prototype.slice.call(arguments)))};return a.prototype=this.prototype,o.prototype=new a,o});var aftership=window.aftership||{};!function(){function e(e,n){function t(){if(!i){i=!0;for(var e=0;e<o.length;e++)o[e].fn.call(window,o[e].ctx);o=[]}}function a(){"complete"===document.readyState&&t()}var o=[],i=!1,r=!1;if(i)return void setTimeout(function(){e(n)},1);o.push({fn:e,ctx:n}),"complete"===document.readyState?setTimeout(t,1):r||(document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):(document.attachEvent("onreadystatechange",a),window.attachEvent("onload",t)),r=!0)}function n(e){var n=document.getElementById("as-container-"+e.id),t=document.getElementById("as-"+e.id);if(t){var a=parseInt(e.width)+"px",o=parseInt(e.height+17)+"px";"true"===e.responsive||!0===e.responsive?(t.style.width="100%",n.style.width="100%",t.style.maxWidth="500px"):(t.style.width=a,n.style.width=a),t.style.height=o,n.style.height=o}}var t={removeBad:function(e,n){if(!e||"string"!=typeof e)return e;if(e=e.replace(/\<|\>|\"|\'|\%|\;|\`|\(|\)|\&|\+/g,""),n&&(e=e.replace("javascript",""),e=e.replace("://",""),e.length>50))throw new Error("Bad tracking number");return e}},a=function(){this.defaults={size:"large",tracking_number:"",height:80,width:"500px",responsive:!0,hide_tracking_number:!1,domain:"track.aftership.com",slug:""}};a.prototype={create:function(){var e=document.querySelectorAll(".as-track-button");e.length>0&&this.replaceWithWidget(e)},parseAttributes:function(e){var n={id:this.createId(),size:e.getAttribute("data-size"),tracking_number:e.getAttribute("data-tracking-number"),slug:e.getAttribute("data-slug"),width:e.getAttribute("data-width"),domain:e.getAttribute("data-domain"),hide_tracking_number:e.getAttribute("data-hide-tracking-number"),responsive:e.getAttribute("data-responsive")};return this.applyDefaults(n)},applyDefaults:function(e){return e.size=null===e.size?this.defaults.size:e.size,e.tracking_number=null===e.tracking_number?this.defaults.tracking_number:e.tracking_number,e.slug=null===e.slug?this.defaults.slug:e.slug,e.width=null===e.width?this.defaults.width:e.width,e.domain=null===e.domain?this.defaults.domain:e.domain,e.responsive=null===e.responsive?this.defaults.responsive:e.responsive,e.hide_tracking_number=null===e.hide_tracking_number?this.defaults.hide_tracking_number:e.hide_tracking_number,e.height=e.height?e.height:this.defaults.height,e},setIframeDefaultAttributes:function(e,n){e.id="as-"+n.id,n.responsive?e.style.width="100%":e.style.width=n.width,e.style.height=n.height,e.style.overflow="hidden",e.style.border="0px",e.frameBorder="0",e.scrolling="no",e.style.maxWidth="none",e.allowtransparency="true"},setIframeSrc:function(e,n){var a=window.location.protocol+"//button.aftership.com/button_widget.html?&size="+t.removeBad(n.size,!0)+"&id="+t.removeBad(n.id,!0)+"&slug="+t.removeBad(n.slug,!0)+"&width="+t.removeBad(n.width,!0)+"&hide_tracking_number="+t.removeBad(n.hide_tracking_number,!0)+"&tracking_number="+t.removeBad(n.tracking_number,!0)+"&responsive="+t.removeBad(n.responsive,!0)+"&origin="+encodeURIComponent(window.location.href)+"&domain="+encodeURIComponent(n.domain);return e.src=a,e},createId:function(){return(new Date).getTime()+""+Math.floor(100*Math.random()+1)},replaceWithWidget:function(e){for(var n=0;n<e.length;n++){var t=e[n],a=this.parseAttributes(t),o=document.createElement("div");o.id="as-container-"+a.id;var i=document.createElement("iframe");this.setIframeDefaultAttributes(i,a),this.setIframeSrc(i,a),o.appendChild(i),t.parentNode.replaceChild(o,t)}}};var o=function(){this.init()};const i=["button.aftership.com","localhost","127.0.0.1"];o.prototype={init:function(){this.setupMessageListeners()},messageHandler:function(e){if(e.data){var t=e.origin||e.originalEvent.origin;if(i.some(function(e){return-1!==t.indexOf(e)}))try{var a=JSON.parse(e.data);switch(a.type){case"frame-resize":n(a)}}catch(o){}}},setupMessageListeners:function(){window.addEventListener?window.addEventListener("message",this.messageHandler.bind(this),!1):window.attachEvent("onmessage",this.messageHandler.bind(this))}},e(function(){new o,aftership.buttonCreator=new a,aftership.buttonCreator.create()})}();