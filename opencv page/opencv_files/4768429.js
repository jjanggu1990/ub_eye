
/* =====================================================================
 * Drip Client Library
 * https://www.getdrip.com/
 * Copyright (c) 2013 Drip
 * ===================================================================== */
var _dcqi=window._dcq||[];window._dc=function(e,t,n,i){var r={hostname:"https://www.getdrip.com",debug:!1},a={},o={},s={},c=[],u={},l=[],d=850;Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){if(this===i||null===this)throw new TypeError('"this" is null or not defined');var n=this.length>>>0;for(t=+t||0,1/0===Math.abs(t)&&(t=0),0>t&&(t+=n,0>t&&(t=0));n>t;t++)if(this[t]===e)return t;return-1});var f=function(e,t){function n(e){function t(){return c=d(e)}function n(){setTimeout(function(){var n=c,i=t();n!==i&&e.__placeholder&&(e.value=i),e.__placeholder&&e.value!==i&&(e.__placeholder=!1)},0)}function i(){e.value?s():r()}function r(){e.__placeholder||e.value||o()}function o(){e.__placeholder=!0,e.value=t(),u(e,"-placeholder")}function s(){e.__placeholder&&(e.__placeholder=!1,e.value="",l(e,"-placeholder"))}if(null!=e.__placeholder)return e.__placeholder&&(e.value=t()),void 0;var c=d(e);e.value?(e.__placeholder=!1,e.value===t()&&o()):r(),a(e,"keyup",i),a(e,"keyDown",i),a(e,"blur",i),a(e,"focus",s),a(e,"click",s),e.addEventListener?a(e,"DOMAttrModified",n):e.attachEvent&&"onpropertychange"in e&&a(e,"propertychange",n)}function i(){var e=[];return o(arguments,function(t){"number"!=typeof t.length&&(t=[t]),e.push.apply(e,s(t,r))}),e}function r(e){var t=(e.nodeName||"").toLowerCase();return"textarea"===t||"input"===t&&("text"===e.type||"password"===e.type)}function a(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)}function o(e,t){if(e.forEach)return e.forEach(t);for(var n=0,i=e.length;i>n;n++)t.call(null,e[n],n,e)}function s(e,t){if(e.filter)return e.filter(t);for(var n=[],i=0,r=e.length;r>i;i++)t.call(null,e[i],i,e)&&n.push(e[i]);return n}function c(e){return h[e]||(h[e]=new RegExp("(^|\\s)+"+e+"(\\s|$)+","g")),h[e]}function u(e,t){e.className+=" "+t}function l(e,t){e.className=e.className.replace(c(t)," ")}function d(e){return e.getAttribute("placeholder")||e.attributes.placeholder&&e.attributes.placeholder.nodeValue}function f(){var e=t.styleSheets&&t.styleSheets[0];if(!e){t.head||t.getElementsByTagName("head")[0];var n=t.createElement("style");n.appendChild(t.createTextNode("")),t.head.appendChild(n),e=n.sheet}return e}if("placeholder"in t.createElement("input"))return t.placeholderPolyfill=function(){},t.placeholderPolyfill.active=!1,void 0;var p=e.getElementsByTagName("input"),m=e.getElementsByTagName("textarea");e.placeholderPolyfill=function(e){e=e?i(e):i(p,m),o(e,n)},e.placeholderPolyfill.active=!0,e.placeholderPolyfill(),e.addEventListener?(e.addEventListener("DOMAttrModified",e.placeholderPolyfill),e.addEventListener("DOMNodeInserted",e.placeholderPolyfill)):e.attachEvent&&"onpropertychange"in e&&e.attachEvent("onpropertychange",e.placeholderPolyfill),f().addRule('.drip-tab input[type="text"].-placeholder',"color: #888 !important;",0);var h={}},p=Date.now||function(){return(new Date).getTime()},m=function(e,t,n){var i,r,a,o,s,c=function(){var u=p()-o;t>u?i=setTimeout(c,t-u):(i=null,n||(s=e.apply(a,r),a=r=null))};return function(){a=this,r=arguments,o=p();var u=n&&!i;return i||(i=setTimeout(c,t)),u&&(s=e.apply(a,r),a=r=null),s}},h=function(e){this._done=[],this._fail=[],this._always=[],this.options=e||{}};h.prototype={execute:function(e,t){var n=e.length;for(t=Array.prototype.slice.call(t);n--;)e[n].apply(null,t)},resolve:function(){this.execute(this._done,arguments),this.execute(this._always,arguments),this.options.resolved=!0},reject:function(){this.execute(this._fail,arguments),this.execute(this._always,arguments),this.options.rejected=!0},done:function(e){return this.options.resolved?e.apply(null):this._done.push(e),this},fail:function(e){return this.options.rejected?e.apply(null):this._fail.push(e),this},always:function(e){return this.options.resolved?e.apply(null):this.options.rejected?e.apply(null):this._always.push(e),this}};var g=function(){var t=[],n=new h({resolved:!0});t.push(n);var i=function(n){var i=new h;t.push(i),t[t.length-2].always(function(){var t=e._dc[n.shift()].apply(null,n);t&&t.done?t.always(function(){i.resolve()}):i.resolve()})};return{initialize:function(e){if(e)for(var t=0;t<e.length;t++)i(e[t])},push:function(e){i(e)}}}();!function(){function e(e,t){this.lock=t||0,this.func=e}e.prototype.v=function(){this.lock++},e.prototype.p=function(){this.lock--,0==this.lock&&this.func&&this.func()}}();var v=function(){function e(e,t,n){this.location=e,this.pattern=t,this.options=n||{}}return e.prototype.extractHost=function(e){if("/"==e[0])return i;var t,n=e.indexOf("//");t=-1==n?0:n+2;var r=e.indexOf("/",t);return r=r>=0?r:e.length,e.substring(t,r)},e.prototype.extractQS=function(e){var t=e.split("?");return t.length>1?"?"+t[1].split("#")[0]:""},e.prototype.extractPath=function(e){var t=e.split("?")[0].split("#")[0];if("/"==t[0])return t;var n=t.indexOf("//");if(-1==n){var i=t.indexOf("/");return-1==i?"/"+t:t.substring(i)}var r=t.indexOf("/",n+2);return t.substring(r)},e.prototype.parseHost=function(e){return e===i?i:e.split(".")},e.prototype.parseQS=function(e){var t={};if(e.length>1)for(var n,i=0,r=e.substr(1).split("&");i<r.length;i++)n=r[i].split("="),t[unescape(n[0])]=n.length>1?unescape(n[1]):"";return t},e.prototype.parsePath=function(e){for(var t=e.split("/"),n=0;n<t.length;n++)""==t[n]&&(t.splice(n,1),n--);return t},e.prototype.matchHost=function(){var e=this.parseHost(this.extractHost(this.location)),t=this.parseHost(this.extractHost(this.pattern));return t?this.matchParts(e,t):!0},e.prototype.matchQS=function(){var e=this.parseQS(this.extractQS(this.location)),t=this.parseQS(this.extractQS(this.pattern));for(var n in t)if(t.hasOwnProperty(n)){if(!e.hasOwnProperty(n))return!1;if("*"!==t[n]&&e[n]!==t[n])return!1}return!0},e.prototype.matchPath=function(){var e=this.parsePath(this.extractPath(this.location)),t=this.parsePath(this.extractPath(this.pattern));return this.matchParts(e,t)},e.prototype.matchParts=function(e,t){for(var n,r,a=!1;;)if(a||(r=t.shift()),"**"!=r){if(n=e.shift(),n==i)break;if(r!=n&&"*"!=r){if(1!=a)return!1}else a=!1}else a=!0,r=t.shift();return r==i&&n==i},e.prototype.matchRegex=function(){var e=this.pattern.match(/^\[(.*)\]$/)[1],t=new RegExp(e);return t.test(this.location)},e.prototype.isRegexPattern=function(){return/^\[.*\]$/.test(this.pattern)},e.prototype.match=function(){return this.isRegexPattern()?this.matchRegex():this.matchHost()&&this.matchPath()&&this.matchQS()},e}(),y=function(e){function t(){}return t.prototype.isMobile=function(){var t=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},t}(navigator.userAgent||navigator.vendor||e.opera),_={getItem:function(e){return unescape(t.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*)|.*"),"$1"))||null},setItem:function(e,n,i,r,a,o){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var s="";if(i)switch(i.constructor){case Number:s=1/0===i?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+i;break;case String:s="; expires="+i;break;case Date:s="; expires="+i.toGMTString()}return t.cookie=escape(e)+"="+escape(n)+s+(a?"; domain="+a:"")+(r?"; path="+r:"")+(o?"; secure":""),!0},removeItem:function(e,n){return e&&this.hasItem(e)?(t.cookie=escape(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; path="+n:""),!0):!1},hasItem:function(e){return new RegExp("(?:^|;\\s*)"+escape(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(t.cookie)},keys:function(){for(var e=t.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),n=0;n<e.length;n++)e[n]=unescape(e[n]);return e}},b=function(){"use strict";var e="s",t=function(e){var t=-e.getTimezoneOffset();return null!==t?t:0},n=function(e,t,n){var r=new Date;return e!==i&&r.setFullYear(e),r.setMonth(t),r.setDate(n),r},r=function(e){return t(n(e,0,2))},a=function(e){return t(n(e,5,2))},o=function(e){var n=e.getMonth()>7,i=n?a(e.getFullYear()):r(e.getFullYear()),o=t(e),s=0>i,c=i-o;return s||n?0!==c:0>c},s=function(){var t=r(),n=a(),i=t-n;return 0>i?t+",1":i>0?n+",1,"+e:t+",0"},c=function(){var e=s();return new b.TimeZone(b.olson.timezones[e])},u=function(e){var t=new Date(2010,6,15,1,0,0,0),n={"America/Denver":new Date(2011,2,13,3,0,0,0),"America/Mazatlan":new Date(2011,3,3,3,0,0,0),"America/Chicago":new Date(2011,2,13,3,0,0,0),"America/Mexico_City":new Date(2011,3,3,3,0,0,0),"America/Asuncion":new Date(2012,9,7,3,0,0,0),"America/Santiago":new Date(2012,9,3,3,0,0,0),"America/Campo_Grande":new Date(2012,9,21,5,0,0,0),"America/Montevideo":new Date(2011,9,2,3,0,0,0),"America/Sao_Paulo":new Date(2011,9,16,5,0,0,0),"America/Los_Angeles":new Date(2011,2,13,8,0,0,0),"America/Santa_Isabel":new Date(2011,3,5,8,0,0,0),"America/Havana":new Date(2012,2,10,2,0,0,0),"America/New_York":new Date(2012,2,10,7,0,0,0),"Europe/Helsinki":new Date(2013,2,31,5,0,0,0),"Pacific/Auckland":new Date(2011,8,26,7,0,0,0),"America/Halifax":new Date(2011,2,13,6,0,0,0),"America/Goose_Bay":new Date(2011,2,13,2,1,0,0),"America/Miquelon":new Date(2011,2,13,5,0,0,0),"America/Godthab":new Date(2011,2,27,1,0,0,0),"Europe/Moscow":t,"Asia/Amman":new Date(2013,2,29,1,0,0,0),"Asia/Beirut":new Date(2013,2,31,2,0,0,0),"Asia/Damascus":new Date(2013,3,6,2,0,0,0),"Asia/Jerusalem":new Date(2013,2,29,5,0,0,0),"Asia/Yekaterinburg":t,"Asia/Omsk":t,"Asia/Krasnoyarsk":t,"Asia/Irkutsk":t,"Asia/Yakutsk":t,"Asia/Vladivostok":t,"Asia/Baku":new Date(2013,2,31,4,0,0),"Asia/Yerevan":new Date(2013,2,31,3,0,0),"Asia/Kamchatka":t,"Asia/Gaza":new Date(2010,2,27,4,0,0),"Africa/Cairo":new Date(2010,4,1,3,0,0),"Europe/Minsk":t,"Pacific/Apia":new Date(2010,10,1,1,0,0,0),"Pacific/Fiji":new Date(2010,11,1,0,0,0),"Australia/Perth":new Date(2008,10,1,1,0,0,0)};return n[e]};return{determine:c,date_is_dst:o,dst_start_for:u}}();b.TimeZone=function(e){"use strict";var t={"America/Denver":["America/Denver","America/Mazatlan"],"America/Chicago":["America/Chicago","America/Mexico_City"],"America/Santiago":["America/Santiago","America/Asuncion","America/Campo_Grande"],"America/Montevideo":["America/Montevideo","America/Sao_Paulo"],"Asia/Beirut":["Asia/Amman","Asia/Jerusalem","Asia/Beirut","Europe/Helsinki","Asia/Damascus"],"Pacific/Auckland":["Pacific/Auckland","Pacific/Fiji"],"America/Los_Angeles":["America/Los_Angeles","America/Santa_Isabel"],"America/New_York":["America/Havana","America/New_York"],"America/Halifax":["America/Goose_Bay","America/Halifax"],"America/Godthab":["America/Miquelon","America/Godthab"],"Asia/Dubai":["Europe/Moscow"],"Asia/Dhaka":["Asia/Yekaterinburg"],"Asia/Jakarta":["Asia/Omsk"],"Asia/Shanghai":["Asia/Krasnoyarsk","Australia/Perth"],"Asia/Tokyo":["Asia/Irkutsk"],"Australia/Brisbane":["Asia/Yakutsk"],"Pacific/Noumea":["Asia/Vladivostok"],"Pacific/Tarawa":["Asia/Kamchatka","Pacific/Fiji"],"Pacific/Tongatapu":["Pacific/Apia"],"Asia/Baghdad":["Europe/Minsk"],"Asia/Baku":["Asia/Yerevan","Asia/Baku"],"Africa/Johannesburg":["Asia/Gaza","Africa/Cairo"]},n=e,i=function(){for(var e=t[n],i=e.length,r=0,a=e[0];i>r;r+=1)if(a=e[r],b.date_is_dst(b.dst_start_for(a)))return n=a,void 0},r=function(){return"undefined"!=typeof t[n]};return r()&&i(),{name:function(){return n}}},b.olson={},b.olson.timezones={"-720,0":"Pacific/Majuro","-660,0":"Pacific/Pago_Pago","-600,1":"America/Adak","-600,0":"Pacific/Honolulu","-570,0":"Pacific/Marquesas","-540,0":"Pacific/Gambier","-540,1":"America/Anchorage","-480,1":"America/Los_Angeles","-480,0":"Pacific/Pitcairn","-420,0":"America/Phoenix","-420,1":"America/Denver","-360,0":"America/Guatemala","-360,1":"America/Chicago","-360,1,s":"Pacific/Easter","-300,0":"America/Bogota","-300,1":"America/New_York","-270,0":"America/Caracas","-240,1":"America/Halifax","-240,0":"America/Santo_Domingo","-240,1,s":"America/Santiago","-210,1":"America/St_Johns","-180,1":"America/Godthab","-180,0":"America/Argentina/Buenos_Aires","-180,1,s":"America/Montevideo","-120,0":"America/Noronha","-120,1":"America/Noronha","-60,1":"Atlantic/Azores","-60,0":"Atlantic/Cape_Verde","0,0":"UTC","0,1":"Europe/London","60,1":"Europe/Berlin","60,0":"Africa/Lagos","60,1,s":"Africa/Windhoek","120,1":"Asia/Beirut","120,0":"Africa/Johannesburg","180,0":"Asia/Baghdad","180,1":"Europe/Moscow","210,1":"Asia/Tehran","240,0":"Asia/Dubai","240,1":"Asia/Baku","270,0":"Asia/Kabul","300,1":"Asia/Yekaterinburg","300,0":"Asia/Karachi","330,0":"Asia/Kolkata","345,0":"Asia/Kathmandu","360,0":"Asia/Dhaka","360,1":"Asia/Omsk","390,0":"Asia/Rangoon","420,1":"Asia/Krasnoyarsk","420,0":"Asia/Jakarta","480,0":"Asia/Shanghai","480,1":"Asia/Irkutsk","525,0":"Australia/Eucla","525,1,s":"Australia/Eucla","540,1":"Asia/Yakutsk","540,0":"Asia/Tokyo","570,0":"Australia/Darwin","570,1,s":"Australia/Adelaide","600,0":"Australia/Brisbane","600,1":"Asia/Vladivostok","600,1,s":"Australia/Sydney","630,1,s":"Australia/Lord_Howe","660,1":"Asia/Kamchatka","660,0":"Pacific/Noumea","690,0":"Pacific/Norfolk","720,1,s":"Pacific/Auckland","720,0":"Pacific/Tarawa","765,1,s":"Pacific/Chatham","780,0":"Pacific/Tongatapu","780,1,s":"Pacific/Apia","840,0":"Pacific/Kiritimati"},e.console||(e.console={});var w=function(t,n,i){(a.debug||i)&&(n||(n="info"),e.console[n]||(n="log"),e.console[n]("DC: "+t))},A=function(e,t){for(var n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])},k=function(e,t){return"object"==typeof e?-1!=e.indexOf(t):void 0},x=function(e,t,n){return n=n||e.length,n-=t.length,e.lastIndexOf(t)===n},P=function(e){var t=new Date;return new Date(t.getFullYear()+e,t.getMonth(),t.getDate())},I=function(e){if("object"!=typeof e)return"";var t,n,i=[];for(var r in e)if(e.hasOwnProperty(r))if(t=encodeURIComponent(r),e[r]instanceof Array)for(var a=0;a<e[r].length;a++)n=encodeURIComponent(e[r][a]),i.push(t+"[]="+n);else n=encodeURIComponent(e[r]),i.push(t+"="+n);return"?"+i.join("&")},E=function(t){for(var n=e.location.search.substring(1),i=n.split("&"),r=0;r<i.length;r++){var a=i[r].split("=");if(decodeURIComponent(a[0])==t)return decodeURIComponent(a[1])}return null},S=function(e,t){t||(t={});var n={};for(var i in t)t.hasOwnProperty(i)&&(n[e+"["+i+"]"]=t[i]);return n},D=function(e,t,i){return n?(n(e).trigger(t,i),void 0):!1},T=function(e){return a.hostname+"/client/"+e},B=function(n){if("object"!=typeof n)return null;n.data||(n.data={});var r=Math.floor(1e9*Math.random()).toString(),a="Drip_"+r;n.data.callback=a,e[a]=function(t){e[a]=i,n.success(t)};var o=t.createElement("script"),s=n.url+I(n.data);o.type="text/javascript",o.src=s;var c=t.getElementsByTagName("head")[0];c.insertBefore(o,c.firstChild),w("Initiating JSONP request to "+s),e.setTimeout(function(){"function"==typeof e[a]&&(e[a]=function(){e[a]=i},"function"==typeof n.error&&n.error({reason:"timeout"}),e.setTimeout(function(){"function"==typeof e[a]&&(e[a]=i)},6e4))},n.timeout||1e4)},O=function(){var e,t="_drip_client_"+a.account,n=function(e){return decodeURIComponent(e.replace(/\+/g," "))},i=function(e){for(var t={},n=e.split("&"),i=0,r=n.length;r>i;i++){var a=n[i].split("=");t[a[0]]=a[1]}return t},r=_.getItem(t);return e=null!==r?i(n(r)):{}},C=function(t){var n="_drip_client_"+a.account,r=function(e){return encodeURIComponent(e)},s=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+"="+e[n]);return t.join("&")},c=o.domain;c=c&&x(e.location.hostname,c)?"."+c:i,_.setItem(n,r(s(t)),P(2),"/",c)},M=function(e){e||(e={}),B({url:T("config"),data:{account_id:a.account},success:function(t){w("Config data received"),o=t,"function"==typeof e.success&&e.success(t)},error:function(){w("An error occurred receiving config data","warn"),"function"==typeof e.error&&e.error()}})},H=function(e){o.campaigns||(o.campaigns=[]);for(var t=0,n=o.campaigns.length;n>t;t++)if(o.campaigns[t].id==e||o.campaigns[t].public_id==e)return o.campaigns[t];return null},N=function(e){o.goals||(o.goals=[]);for(var t=0,n=o.goals.length;n>t;t++)if(o.goals[t].id==e||o.goals[t].public_id==e)return o.goals[t];return null},j=function(e){o.forms||(o.forms=[]);for(var t=0,n=o.forms.length;n>t;t++)if(o.forms[t].id==e||o.forms[t].public_id==e)return o.forms[t];return null},z=function(){var t,n;o.goals||(o.goals=[]);for(var i=0,r=o.goals.length;r>i;i++)t=o.goals[i],n=new v(e.location.href,t.url),n.match()&&G({_action:t.name,value:t.default_value})},L=function(){var t,n;o.url_triggers||(o.url_triggers=[]);for(var i=0,r=o.url_triggers.length;r>i;i++)t=o.url_triggers[i],n=new v(e.location.href,t.properties.url),n.match()&&G({_action:t.action,url:t.properties.url,actual_url:e.location.href})},F=function(){for(var e,n=/^http:\/\/drip.la/,i=t.getElementsByTagName("a"),r=0,a=i.length;a>r;r++)e=i[r].getAttribute("href"),n.test(e)&&i[r].setAttribute("href",e+"?v="+s.vid)},R=function(){var t,n=o.lead_settings||[];n.product_benefits_path&&(t=new v(e.location.href,n.product_benefits_path),t.match()&&G({_action:"Viewed tour page",url:n.product_benefits_path,actual_url:e.location.href})),n.pricing_path&&(t=new v(e.location.href,n.pricing_path),t.match()&&G({_action:"Viewed pricing page",url:n.pricing_path,actual_url:e.location.href})),n.careers_path&&(t=new v(e.location.href,n.careers_path),t.match()&&G({_action:"Viewed careers page",url:n.careers_path,actual_url:e.location.href}))},q=function(e){e||(e={});var t=new h,n={account_id:a.account,time_zone:X()};s.vid&&(n.visitor_uuid=s.vid);for(var i in e)e.hasOwnProperty(i)&&"success"!=i&&"failure"!=i&&(n[i]=e[i]);return n=U(n),B({url:T("identify"),data:n,success:function(n){w("Identify recorded"),n.success&&n.visitor_uuid&&(s.vid=n.visitor_uuid,C(s)),"function"==typeof e.success&&e.success(n),"function"==typeof e.ensure&&e.ensure(n),t.resolve()},error:function(n){w("An error occurred recording identify","warn"),"function"==typeof e.error&&e.error(),"function"==typeof e.ensure&&e.ensure(n),t.reject()}}),t},G=function(t){t||(t={});var n=new h,i={account_id:a.account,url:e.location.href};s.vid&&(i.visitor_uuid=s.vid);for(var r in t)t.hasOwnProperty(r)&&"success"!=r&&"failure"!=r&&(i[r]=t[r]);return i=U(i),B({url:T("track"),data:i,success:function(e){w("Track event recorded"),e.visitor_uuid&&(s.vid=e.visitor_uuid,C(s)),"function"==typeof t.success&&t.success(e),"function"==typeof t.ensure&&t.ensure(e),n.resolve()},error:function(e){w("An error occurred tracking event","warn"),"function"==typeof t.error&&t.error(e),"function"==typeof t.ensure&&t.ensure(e),n.reject()}}),n},Y=function(n){n||(n={});var i={account_id:a.account,referrer:t.referrer,url:e.location.href,domain:e.location.hostname,time_zone:X(),enable_third_party_cookies:o.enable_third_party_cookies?"t":"f"};B({url:T("events/visit"),data:i,success:function(e){w("Visit event recorded"),e.success&&e.visitor_uuid&&(s.vid=e.visitor_uuid,C(s)),"function"==typeof n.success&&n.success(e),"function"==typeof n.ensure&&n.ensure(e)},error:function(e){w("An error occurred recording visit","warn"),"function"==typeof n.error&&n.error(),"function"==typeof n.ensure&&n.ensure(e)}})},V=function(t){if(t||(t={}),t.accountId!=i&&t.formId!=i&&t.action!=i){var n={};s.vid&&(n.visitor_uuid=s.vid),n.account_id=t.accountId,n.form_id=t.formId,n._action=t.action,n.url=e.location.href,s["form["+t.formId+"]["+t.action+"]"]=et(),C(s),"submit"!=t.action&&B({url:T("events/form"),data:n,success:function(e){w("Form action '"+t.action+"' recorded"),e.visitor_uuid&&(s.vid=e.visitor_uuid,C(s)),"function"==typeof t.success&&t.success(e),"function"==typeof t.ensure&&t.ensure(e)},error:function(e){w("An error occurred recording form event","warn"),"function"==typeof t.error&&t.error(e),"function"==typeof t.ensure&&t.ensure(e)}}),"submit"==t.action&&t.sendGaEvent&&(e._gaq&&e._gaq.push(["_trackEvent","Drip Opt-in Form","Submit",String(t.formId)]),"function"==typeof e.ga&&e.ga("send","event","Drip Opt-in Form","Submit",String(t.formId)))}},J=function(n){n||(n={});var r=new h;if(n.accountId!=i&&n.campaignId!=i){var a=S(u),o=n.fields||{};return o=U(o),n.namespaced||(o=S("fields",o)),A(o,a),s.vid&&(o.visitor_uuid=s.vid),o.account_id=n.accountId,o.campaign_id=n.campaignId,o.time_zone=X(),o.url=e.location.href,o.page_title=t.title,n.double_optin!=i&&(o.double_optin=n.double_optin),B({url:T("events/subscribe"),data:o,success:function(e){w("Subscription recorded"),e.visitor_uuid&&(s.vid=e.visitor_uuid,C(s)),"function"==typeof n.success&&n.success(e),"function"==typeof n.ensure&&n.ensure(e),r.resolve()},error:function(e){w("An error occurred recording subscription","warn"),"function"==typeof n.error&&n.error(e),"function"==typeof n.ensure&&n.ensure(e),r.reject()}}),r}},K=function(e){e||(e={});var t=new h;if(e.accountId!=i&&e.email!=i){var n={};return n.account_id=e.accountId,n.email=e.email,e.campaignId!=i&&(n.campaign_id=e.campaignId),B({url:T("events/unsubscribe"),data:n,success:function(n){w("Unsubscribe recorded"),n.visitor_uuid&&(s.vid=n.visitor_uuid,C(s)),"function"==typeof e.success&&e.success(n),"function"==typeof e.ensure&&e.ensure(n),t.resolve()},error:function(n){w("An error occurred recording unsubscribe","warn"),"function"==typeof e.error&&e.error(),"function"==typeof e.ensure&&e.ensure(n),t.reject()}}),t}},$=function(e,t){w("Identifying "+e+"="+t),u[e]=t,o.forms||(o.forms=[]);for(var i=0,r=o.forms.length;r>i;i++){var a=o.forms[i];if(a.el&&a.el.form)for(var s=a.el.form,i=0,r=s.length;r>i;i++)s[i].name=="fields["+e+"]"&&(s[i].value=t)}n&&n(function(){for(var n=0,i=l.length;i>n;n++)l[n].find("[name='fields["+e+"]']").val(t)})},Q=function(e){for(var t,n,i={},r=0,a=e.length;a>r;r++)t=e[r].name,n=e[r].value,i[t]=n;return i},U=function(e){for(var t in e)e.hasOwnProperty(t)&&e[t]&&"function"==typeof e[t].trim&&(e[t]=e[t].trim());return e},W=function(e){if(k(c,e))return new h({resolved:[]});var t=null,n=new h,i={api_key:"pubkey-8rki0u2qo14pwefei20u8d1ywxdsoii7"};return B({url:"https://api.mailgun.net/v2/address/validate",data:{address:e,api_key:i.api_key},success:function(i){i.did_you_mean?(t="Did you mean: <b>"+i.did_you_mean+"</b>? If not, just hit submit again.",i.is_valid&&c.push(e)):0==i.is_valid&&(t="Email address is invalid"),t?n.reject(t):n.resolve()},error:function(){n.resolve()}}),n},Z=function(n){if(n.isSubmitting)return w("Form submission cancelled");var i=Q(t.forms["drip-form-"+n.id]);i=U(i);var r=S(u);A(i,r),s.vid&&(i.visitor_uuid=s.vid),i.account_id=n.account_id,i.form_id=n.id,i.time_zone=X(),i.url=e.location.href,i.page_title=t.title,n.isSubmitting=!0,kt(n),wt(n),D(t,"submitting.drip",i),w("Submitting: "+JSON.stringify(i)),W(i["fields[email]"]).fail(function(e){n.isSubmitting=!1,bt(n,{email:e},{prefix:!1}),D(t,"submitFailed.drip",i)}).done(function(){B({url:T("forms/submit"),data:i,success:function(r){w("Subscription recorded"),r.visitor_uuid&&(s.vid=r.visitor_uuid,C(s)),n.isSubmitting=!1,r.errors?(bt(n,r.errors),w("Errors: "+JSON.stringify(r)),D(t,"submitFailed.drip",i)):(D(t,"submitted.drip",i),V({accountId:n.account_id,formId:n.id,sendGaEvent:n.send_ga_event,action:"submit"}),r.send_to_confirmation_page?(n.isOpen=!1,At(n),e.location=r.confirmation_url):(n.showSuccess=!0,At(n),kt(n)))},error:function(){w("An error occurred recording subscription","warn"),n.isSubmitting=!1,kt(n),D(t,"submitFailed.drip",i)}})})},X=function(){return b.determine().name()},et=function(){return Math.round((new Date).getTime()/1e3)},tt=function(e){var t=et();return e=parseInt(e),Math.round(100*(t-e)/86400)/100},nt=function(t,n,i){function r(e){var t=i.apply(this,arguments);return t===!1&&(e.stopPropagation(),e.preventDefault()),t}function a(){var n=i.call(t,e.event);return n===!1&&(e.event.returnValue=!1,e.event.cancelBubble=!0),n}t.addEventListener?t.addEventListener(n,r,!1):t.attachEvent("on"+n,a)},it=function(e){var n=t.getElementsByTagName("head")[0],r=t.createElement("style");r.type="text/css",openingTag='<style type="text/css" media="screen">',closingTag="</style>",e=e.replace(openingTag,"").replace(closingTag,""),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(t.createTextNode(e)),n!==i?n.appendChild(r):t.body.appendChild(r)},rt=function(e){var n=t.createDocumentFragment(),i=t.createElement("div");i.innerHTML=e,n.appendChild(i.firstChild),t.body.appendChild(n)},at=function(e,t){var n=e.className,i=new RegExp("(?:^|\\s)"+t+"(?!\\S)");n.match(i)||(e.className=n+" "+t)},ot=function(e,t){var n=e.className,i=new RegExp("(?:^|\\s)"+t+"(?!\\S)","g");e.className=n.replace(i,"")},st=function(t){var n=t?t:e.event;return n.preventDefault&&n.preventDefault(),n.stopPropagation&&n.stopPropagation(),n.returnValue=!1,!1},ct=function(){return o.forms?n==i?w("Unable to render embedded forms because jQuery is not installed","warn"):(n(function(){for(var e=n("[data-drip-embedded-form]"),t=0,i=o.forms.length;i>t;t++)e.each(function(e,i){ut(o.forms[t],n(i))})}),void 0):void 0},ut=function(r,a){if(a.attr("data-drip-id")===i){var o=a.attr("data-drip-embedded-form");(""===o||o===String(r.id)||o===String(r.public_id))&&(w("Rendering embeddable form #"+o),a.attr("data-drip-id",o),a.attr("method","post"),a.find("[data-drip-attribute='headline']").html(r.headline),a.find("[data-drip-attribute='teaser']").html(r.teaser),a.find("[data-drip-attribute='description']").html(r.description),a.find("[data-drip-attribute='sign-up-button']").val(r.button_text),a.append(n("<input type='hidden' name='time_zone' />").val(X())),a.append(n("<input type='hidden' name='url' />").val(e.location.href)),a.append(n("<input type='hidden' name='page_title' />").val(t.title)),a.submit(function(){return $this=n(this),$this.append(n("<input type='hidden' name='visitor_uuid' />").val(s.vid)),!0}),l.push(a))}},lt=function(){if(o.forms)for(var e=0,t=o.forms.length;t>e;e++)mt(o.forms[e])},dt=function(e){it(e.css),rt(e.html)},ft=function(e){switch(e.el={container:t.getElementById("drip-"+e.id),form:t.getElementById("drip-form-"+e.id),toggle:t.getElementById("drip-toggle-"+e.id),close:t.getElementById("drip-close-"+e.id),hide:t.getElementById("drip-hide-"+e.id),teaser:t.getElementById("drip-teaser-"+e.id),content:t.getElementById("drip-content-"+e.id),formPanel:t.getElementById("drip-form-panel-"+e.id),successPanel:t.getElementById("drip-success-panel-"+e.id),submitButton:t.getElementById("drip-submit-"+e.id),scroll:t.getElementById("drip-scroll-"+e.id),contentHeader:t.getElementById("drip-content-header-"+e.id)},e.category){case"tab":e.el.header=t.getElementById("drip-header-"+e.id),e.el.upArrow=t.getElementById("drip-tab-up-"+e.id),e.el.downArrow=t.getElementById("drip-tab-down-"+e.id);case"lightbox":e.el.backdrop=t.getElementById("drip-backdrop-"+e.id)}},pt=function(t){var n;if(!t.is_widget_enabled)return!1;if((new y).isMobile()&&t.hide_on_mobile)return!1;if(t.is_blacklist_enabled)for(var i=0,r=t.blacklist.length;r>i;i++)if(n=new v(e.location.href,t.blacklist[i]),n.match())return!1;if(t.is_whitelist_enabled){for(var a=0,r=t.whitelist.length;r>a;a++)if(n=new v(e.location.href,t.whitelist[a]),n.match())return!0;return!1}return!0},mt=function(n){if(pt(n)){n.isOpen=!1,n.triggered=!1,n.showTeaser=!1,n.showSuccess=!1,n.manuallyOpened=!1,n.isSubmitting=!1,dt(n),ft(n),kt(n);var i=t.getElementById(n.el.container.id);if(f(i,t),s["form["+n.id+"][submit]"]||setTimeout(function(){n.showTeaser=!0,kt(n)},200),n.seconds_before_popup)var r=1e3*parseInt(n.seconds_before_popup);else var r=6e3;"tab"==n.category&&n.el.toggle&&(n.el.toggle.onclick=function(e){return _t(n,!0),st(e)}),n.el.form&&nt(n.el.form,"submit",function(){return Z(n),!1}),n.el.close&&(n.el.close.onclick=function(e){return _t(n,!0),st(e)}),n.el.hide&&(n.el.hide.onclick=function(e){return n.isOpen=!1,n.showTeaser=!1,kt(n),st(e)});var a=m(kt,100,!0);nt(e,"resize",function(){a(n)}),yt(n)&&("exit_intent"==n.trigger_type?ht(n):"time_delay"==n.trigger_type&&(n.show_on_trigger&&(0==n.show_at_percent?gt(n):vt(n)),n.show_on_time&&setTimeout(function(){0==n.triggered&&_t(n)},r)))}},ht=function(e){var n=t.documentElement,i=null;n.addEventListener("mouseleave",function(t){t.clientY>e.intent_sensitivity||0==e.triggered&&(i=setTimeout(function(){_t(e)},1e3*e.intent_open_delay))}),n.addEventListener("mouseenter",function(){i&&(clearTimeout(i),i=null)})},gt=function(n){var i=!1,r=t.getElementById(n.show_at_anchor).getBoundingClientRect().top-150;e.onscroll=function(){i=!0},setInterval(function(){if(i){i=!1;var e=t.body.scrollTop;e>r&&0==n.triggered&&_t(n)}},500)},vt=function(n){var i=!1,r=t.documentElement.scrollHeight*(n.show_at_percent/100);e.onscroll=function(){i=!0},setInterval(function(){i&&(i=!1,e.innerHeight+e.scrollY>=r&&0==n.triggered&&_t(n))},500)},yt=function(e){if(s["form["+e.id+"][submit]"])return!1;if((new y).isMobile())return!1;var t=s["form["+e.id+"][manual_close]"];if(t&&tt(t)<e.days_between_popup_after_close)return!1;var n=s["form["+e.id+"][auto_open]"];return n&&tt(n)<e.days_between_popup?!1:!0},_t=function(e,t){var n;e.triggered=!0,e.isOpen=!e.isOpen,kt(e),t&&e.isOpen&&(e.manuallyOpened=!0),n=t?e.isOpen?"manual_open":"manual_close":e.isOpen?"auto_open":"auto_close",V({accountId:e.account_id,formId:e.id,action:n})},bt=function(e,n,i){var r,a,o;if("object"==typeof n){i||(i={}),A(i,{prefix:!0});for(var s in n)n.hasOwnProperty(s)&&(r=s.replace(/\.|_/gi,"-"),r="drip-errors-for-"+r+"-"+e.id,a=t.getElementById(r),a&&(o=n[s],a.innerHTML=i.prefix?"This "+o:o));kt(e,!1)}},wt=function(e){for(var t=e.el.content.querySelectorAll("div.drip-errors"),n=0,i=t.length;i>n;n++)t[n].innerHTML="";kt(e)},At=function(e){var n=t.forms["drip-form-"+e.id];if(n!=i){for(var r=0,a=n.length;a>r;r++)"input"==n[r].tagName&&"text"==n[r].type&&(n[r].value="");kt(e)}},kt=function(t){var n=t.el,i=.66*e.innerHeight;if(t.isSubmitting?(n.submitButton.disabled="disabled",n.submitButton.value=t.submit_text||"Submitting..."):(n.submitButton.disabled="",n.submitButton.value=t.button_text),t.showSuccess?(n.formPanel.style.display="none",n.successPanel.style.display="block"):(n.formPanel.style.display="block",n.successPanel.style.display="none"),("bottom"==t.region||"side"==t.region)&&(t.isOpen?at(n.header,"hide"):ot(n.header,"hide")),"side"==t.region&&e.innerWidth>d)var r=0;else var r=n.header?n.header.scrollHeight||0:0;n.scroll.style.height="auto";for(var a=0,o=n.content.childNodes,s=0,c=o.length;c>s;s++)o[s].style&&"none"!==o[s].style.display&&(a+=o[s].scrollHeight||0);var u=r+a+10;"bottom"==t.region&&u>i?(u=i,a=u-r-10,contentHeaderHeight=n.contentHeader.scrollHeight,scrollContainerHeight=a-contentHeaderHeight-60,at(t.el.scroll,"scroll"),n.scroll.style.height=scrollContainerHeight.toString()+"px"):(ot(t.el.scroll,"scroll"),scrollContainerHeight=n.scroll.style.height),"tab"==t.category&&(t.isOpen?(n.downArrow.style.display="block",n.upArrow.style.display="none"):(n.downArrow.style.display="none",n.upArrow.style.display="block")),"lightbox"==t.category&&(t.isOpen?(ot(n.backdrop,"hide"),ot(n.container,"hide"),setTimeout(function(){at(n.backdrop,"in"),at(n.container,"in");for(var e=0,t=n.content.childNodes,i=0,a=t.length;a>i;i++)t[i].style&&"none"!==t[i].style.display&&(e+=t[i].scrollHeight||0);var o=r+e+10;
n.container.style.height=o.toString()+"px"},0)):(ot(n.backdrop,"in"),ot(n.container,"in"),setTimeout(function(){at(n.backdrop,"hide"),at(n.container,"hide")},200))),e.innerWidth<d?xt(t,u,a):Pt(t,u,a)},xt=function(e,t,n){var i=e.el;ot(i.container,"side"),ot(i.container,"bottom"),ot(i.container,"left"),ot(i.container,"right"),at(i.container,"mobile"),i.container.style.height=t.toString()+"px",i.container.style.left=0,"tab"==e.category&&(i.container.style.top="inherit",i.container.style.bottom=0,i.container.style.bottom=e.isOpen?"0":e.showTeaser?"-"+n.toString()+"px":"-"+t.toString()+"px")},Pt=function(e,t,n){var i=e.el;switch(ot(i.container,"mobile"),ot(i.scroll,"mobile"),e.region&&at(i.container,e.region),e.side&&at(i.container,e.side),e.region){case"bottom":i.container.style.height=t.toString()+"px","left"==e.side?i.container.style.left="40px":(i.container.style.right="40px",i.container.style.left="inherit");break;case"side":i.container.style.height=(n+10).toString()+"px",i.container.style.top="15%",i.teaser.style.width=(n-20).toString()+"px",i.teaser.style.top=(n/2).toString()+"px",i.teaser.style.left=(30-n/2).toString()+"px"}if("tab"==e.category)switch(e.region){case"bottom":i.container.style.bottom=e.isOpen?"0":e.showTeaser?"-"+n.toString()+"px":"-"+t.toString()+"px";break;case"side":e.isOpen?(i.container.style.width="350px","right"==e.side?(i.container.style.left="inherit",i.container.style.right="0",i.content.style.left="0"):i.container.style.left="0"):(i.container.style.width="390px","right"==e.side?(i.container.style.left="inherit",i.content.style.left="40px",i.container.style.right=e.showTeaser?"-350px":"-390px"):i.container.style.left=e.showTeaser?"-350px":"-390px")}"lightbox"==e.category&&(i.container.style.left="50%",i.container.style.height=t.toString()+"px")},It=function(){var e=36e5,t=6048e5,n=parseInt(s.pageViews||0),i=parseInt(s.sessionPageCount||0),r=parseInt(s.weeklySessionCount||0),a=parseInt(s.lastVisitedAt||0),o=parseInt(s.lastSessionAt||0);p()-a>e?(p()-o>t?r=1:(r+=1,2==r&&G({_action:"Visited twice in one week"})),o=p(),i=1):i+=1,n+=1,8==i&&G({_action:"Viewed eight pages in one visit"}),s.pageViews=n,s.sessionPageCount=i,s.lastVisitedAt=p(),s.weeklySessionCount=r,s.lastSessionAt=o,C(s)},Et=function(){for(var e="data-drip-show-form",n=t.querySelectorAll("["+e+"]"),i=function(){var t=this.getAttribute(e);return w("Clicked link to show form #"+t),Tt.showForm({id:t}),!1},r=0;r<n.length;++r)nt(n[r],"click",i)},St=function(e){var t=E("__vid");return t&&32==t.length&&s.vid!=t&&(s.vid=t,C(s)),s.vid?Dt(e):(Y({success:function(){Dt(e)}}),void 0)},Dt=function(t){var n=E("__s")||E("drip_subscriber_id"),i=E("dst");if(Tt.vid=s.vid,n||i){var r={};n&&(r.subscriber_id=n),i&&(r.tags=[i]),Tt.identify(r)}lt(),ct(),z(),L(),F(),R(),It(),Et(),e._dcq=g,e._dcq.initialize(t)},Tt={};return Tt.initialize=function(t,n){return a=t||{},A(a,r),a.account?(s=O(),e._dcfg?(o=e._dcfg,w("Config data eager loaded"),St(n)):M({success:function(e){e.success&&St(n)}}),void 0):w("No account specified","warn")},Tt.identify=function(e){e||(e={});for(var t in e)e.hasOwnProperty(t)&&$(t,e[t]);return q(e)},Tt.track=function(e,t){var n;if("string"==typeof e)n=t||{},n._action=e;else{var i,n=e||{};if(n.id&&!n.action){if(i=N(n.id),!i)return w("Goal not found","warn");n._action=i.name,delete n.id}else{if(!n.action)return w("Action is required","warn");n._action=n.action,delete n.action,delete n.id}}return G(n)},Tt.trackConversion=function(e,t){return Tt.track(e,t)},Tt.subscribe=function(e){var t=e.campaign_id||e.id,n=H(t);return n?J({accountId:a.account,campaignId:n.public_id,double_optin:e.double_optin,fields:e.fields,namespaced:!1,success:e.success,error:e.error}):w("Campaign not found","warn")},Tt.unsubscribe=function(e){var t=e.campaign_id||e.id;if(t!=i){var n=H(t);if(!n)return w("Campaign not found","warn");t=n.public_id}return K({accountId:a.account,email:e.email,campaignId:t,success:e.success,error:e.error})},Tt.showForm=function(e){var t=j(e.id);return null==t?w("Form not found: "+e.id,"warn"):(t.isOpen||_t(t,!0),void 0)},Tt.hideForm=function(e){var t=j(e.id);return null==t?w("Form not found: "+e.id,"warn"):(t.isOpen&&_t(t,!0),void 0)},Tt.Location=v,Tt.Browser=y,Tt}(window,document,window.jQuery),window._dc.initialize(window._dcs,window._dcq);