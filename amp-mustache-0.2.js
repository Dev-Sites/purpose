(self.AMP=self.AMP||[]).push({n:"amp-mustache",v:"1909181902540",f:(function(AMP,_){
function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},n=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a}(this);function A(){A=function(){};n.Symbol||(n.Symbol=ha)}function ia(a,b){this.B=a;ba(this,"description",{configurable:!0,writable:!0,value:b})}
ia.prototype.toString=function(){return this.B};var ha=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ia("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();function ja(){A();var a=n.Symbol.iterator;a||(a=n.Symbol.iterator=n.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ka(aa(this))}});ja=function(){}}
function ka(a){ja();var b={next:a};b[n.Symbol.iterator]=function(){return this};return b}var la="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ma;if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var sa={a:!0},ta={};try{ta.__proto__=sa;na=ta.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ua=ma;function va(){var a,b=Object.create(null);a&&Object.assign(b,a);return b}function B(a){return a||{}};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function wa(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var xa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;var D=self.AMP_CONFIG||{},ya={thirdParty:D.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:D.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof D.thirdPartyFrameRegex?new RegExp(D.thirdPartyFrameRegex):D.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:D.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof D.cdnProxyRegex?new RegExp(D.cdnProxyRegex):D.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:D.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:D.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.dev$/]};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var za=self.__AMP_LOG;function Aa(){if(!za.user)throw Error("failed to call initLogConstructor");return za.user}function E(a,b,c){Aa().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function J(a,b){return b.length>a.length?!1:0==a.lastIndexOf(b,0)};function Ba(a,b){for(var c=a.length,d=0;d<c;d++)b(a[d],d)};function Ca(a){var b=["\u26a14email","amp4email"],c=a.documentElement,d=b.some(function(a){return c.hasAttribute(a)});return d};function Da(){var a=100;this.C=a;this.l=this.m=0;this.j=Object.create(null)}Da.prototype.has=function(a){return!!this.j[a]};Da.prototype.get=function(a){var b=this.j[a];if(b)return b.access=++this.l,b.payload};
Da.prototype.put=function(a,b){this.has(a)||this.m++;this.j[a]={payload:b,access:this.l};if(!(this.m<=this.C)){if(za.dev)a=za.dev;else throw Error("failed to call initLogConstructor");a.warn("lru-cache","Trimming LRU cache");a=this.j;var c=this.l+1,d;for(d in a){var e=a[d].access;if(e<c){c=e;var f=d}}void 0!==f&&(delete a[f],this.m--)}};var Ea=B({c:!0,v:!0,a:!0,ad:!0,action:!0}),Pa,Qa,Ra=/[?&]amp_js[^&]*/,Sa=/[?&]amp_gsa[^&]*/,Ta=/[?&]amp_r[^&]*/,Ua=/[?&]amp_kit[^&]*/,Va=/[?&]usqp[^&]*/;
function M(a){var b;Pa||(Pa=self.document.createElement("a"),Qa=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new Da));var c=b?null:Qa,d=Pa;if(c&&c.has(a))a=c.get(a);else{d.href=a;d.protocol||(d.href=d.href);var e={href:d.href,protocol:d.protocol,host:d.host,hostname:d.hostname,port:"0"==d.port?"":d.port,pathname:d.pathname,search:d.search,hash:d.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname);if("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)e.port="",e.host=
e.hostname;e.origin=d.origin&&"null"!=d.origin?d.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href;c&&c.put(a,e);a=e}return a}function Wa(a){"string"==typeof a&&(a=M(a));return ya.cdnProxyRegex.test(a.origin)}
function Xa(a){"string"==typeof a&&(a=M(a));if(!Wa(a))return a.href;var b=a.pathname.split("/");E(Ea[b[1]],"Unknown path prefix in url %s",a.href);var c=b[2],d="s"==c?"https://"+decodeURIComponent(b[3]):"http://"+decodeURIComponent(c);E(0<d.indexOf("."),"Expected a . in origin %s",d);b.splice(1,"s"==c?3:2);b=d+b.join("/");d=(d=a.search)&&"?"!=d?(d=d.replace(Ra,"").replace(Sa,"").replace(Ta,"").replace(Ua,"").replace(Va,"").replace(/^[?&]/,""))?"?"+d:"":"";return b+d+(a.hash||"")}
function Ya(a,b){"string"==typeof b&&(b=M(b));if("function"==typeof URL)var c=(new URL(a,b.href)).toString();else{c=a;var d=b;"string"==typeof d&&(d=M(d));c=c.replace(/\\/g,"/");var e=M(c);c=J(c.toLowerCase(),e.protocol)?e.href:J(c,"//")?d.protocol+c:J(c,"/")?d.origin+c:d.origin+d.pathname.replace(/\/[^/]*$/,"/")+c}return c}
function Za(a){var b=M(a);var c=b.search,d=Object.create(null);if(c)for(var e;e=xa.exec(c);){var f=wa(e[1],e[1]);e=e[2]?wa(e[2],e[2]):"";d[f]=e}E(!("__amp_source_origin"in d),"Source origin is not allowed in %s",a)};var $a=/(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;function ab(a){for(var b=[],c;c=$a.exec(a);){var d=c[1],e=void 0,f=void 0;if(c[2]){var t=c[3].toLowerCase();if("w"==t)e=parseInt(c[2],10);else if("x"==t)f=parseFloat(c[2]);else continue}else f=1;b.push({url:d,width:e,dpr:f})}return new bb(b)}
function bb(a){E(0<a.length,"Srcset must have at least one source");this.h=a;for(var b=!1,c=!1,d=0;d<a.length;d++){var e=a[d];b=b||!!e.width;c=c||!!e.dpr}E(!!(b^c),"Srcset must have width or dpr sources, but not both");a.sort(b?cb:db);this.A=b}
bb.prototype.select=function(a,b){if(this.A){b*=a;a=this.h;for(var c=0,d=Infinity,e=Infinity,f=0;f<a.length;f++){var t=a[f].width,m=Math.abs(t-b);if(m<=1.1*d||1.2<b/e)c=f,d=m,e=t;else break}b=c}else{a=this.h;c=0;d=Infinity;for(e=0;e<a.length;e++)if(f=Math.abs(a[e].dpr-b),f<=d)c=e,d=f;else break;b=c}return this.h[b].url};bb.prototype.getUrls=function(){return this.h.map(function(a){return a.url})};
bb.prototype.stringify=function(a){for(var b=[],c=this.h,d=0;d<c.length;d++){var e=c[d],f=e.url;a&&(f=a(f));f=this.A?f+(" "+e.width+"w"):f+(" "+e.dpr+"x");b.push(f)}return b.join(", ")};function cb(a,b){E(a.width!=b.width,"Duplicate width: %s",a.width);return a.width-b.width}function db(a,b){E(a.dpr!=b.dpr,"Duplicate dpr: %s",a.dpr);return a.dpr-b.dpr};function eb(a,b,c){return"src"==b||"href"==b||"srcset"==b?fb(a,b,c):c}function fb(a,b,c){var d=self.location;Za(c);var e=Wa(d),f=M(Xa(d));if("href"==b&&!J(c,"#"))return Ya(c,f);if("src"==b)return"amp-img"==a?gb(c,f,e):Ya(c,f);if("srcset"==b){try{var t=ab(c)}catch(m){return Aa().error("URL-REWRITE","Failed to parse srcset: ",m),c}return t.stringify(function(a){return gb(a,f,e)})}return c}
function gb(a,b,c){a=M(Ya(a,b));return"data:"==a.protocol||Wa(a)||!c?a.href:ya.cdn+"/i/"+("https:"==a.protocol?"s/":"")+encodeURIComponent(a.host)+a.pathname+(a.search||"")+(a.hash||"")};var hb={"AMP-IMG":["src","srcset","layout","width","height"]};function ib(a,b){var c=J(a.tagName,"AMP-"),d=a.hasAttribute("i-amphtml-binding");if(!d&&hb[a.tagName])a.setAttribute("i-amphtml-ignore","");else if(d||c)a.hasAttribute("i-amphtml-key")||a.setAttribute("i-amphtml-key",b())}
var jb={applet:!0,audio:!0,base:!0,embed:!0,frame:!0,frameset:!0,iframe:!0,img:!0,link:!0,meta:!0,object:!0,style:!0,video:!0},kb={"amp-accordion":!0,"amp-anim":!0,"amp-bind-macro":!0,"amp-carousel":!0,"amp-fit-text":!0,"amp-img":!0,"amp-layout":!0,"amp-selector":!0,"amp-sidebar":!0,"amp-state":!0,"amp-timeago":!0},rb="a b br caption colgroup code del div em hr i ins li mark ol p q s small span strong sub sup table tbody time td th thead tfoot tr u ul".split(" "),sb="amp-fx fallback heights layout min-font-size max-font-size on option placeholder submitting submit-success submit-error validation-for verify-error visible-when-invalid href style text subscriptions-action subscriptions-actions subscriptions-decorate subscriptions-dialog subscriptions-display subscriptions-section subscriptions-service itemprop".split(" "),
tb={a:["rel","target"],div:["template"],form:["action-xhr","verify-xhr","custom-validation-reporting","target"],input:["mask-output"],template:["type"],textarea:["autoexpand"]},ub=["_top","_blank"],vb=Object.freeze(["javascript:","vbscript:","data:","<script","\x3c/script"]),wb=Object.freeze(B({input:{type:/(?:image|button)/i}})),xb=Object.freeze(B({input:{type:/(?:button|file|image|password)/i}})),yb=Object.freeze("form formaction formmethod formtarget formnovalidate formenctype".split(" ")),zb=
Object.freeze(B({input:yb,textarea:yb,select:yb})),Ab=Object.freeze(B({"amp-anim":["controls"],form:["name"]})),Bb=/!important|position\s*:\s*fixed|position\s*:\s*sticky/i;
function Cb(a,b,c,d){var e=!0;e=void 0===e?!1:e;if(!e){if(J(b,"on")&&"on"!=b)return!1;if(c)for(var f=c.toLowerCase().replace(/[\s,\u0000]+/g,""),t=0;t<vb.length;t++)if(0<=f.indexOf(vb[t]))return!1}if("style"==b)return!Bb.test(c);if("class"==b&&c&&/(^|\W)i-amphtml-/i.test(c)||("src"==b||"href"==b||"srcset"==b)&&/__amp_source_origin/.test(c))return!1;var m=Ca(d),q=Object.assign(va(),zb,m?Ab:{})[a];if(q&&-1!=q.indexOf(b))return!1;var w=Object.assign(va(),wb,m?xb:{})[a];if(w){var z=w[b];if(z&&-1!=c.search(z))return!1}return!0}
;var Db=Object.freeze||function(a){return a},Eb=Db("a abbr acronym address area article aside audio b bdi bdo big blink blockquote body br button canvas caption center cite code col colgroup content data datalist dd decorator del details dfn dir div dl dt element em fieldset figcaption figure font footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i img input ins kbd label legend li main map mark marquee menu menuitem meter nav nobr ol optgroup option output p pre progress q rp rt ruby s samp section select shadow small source spacer span strike strong style sub summary sup table tbody td template textarea tfoot th thead time tr track tt u ul var video wbr".split(" ")),
Fb=Db("svg a altglyph altglyphdef altglyphitem animatecolor animatemotion animatetransform audio canvas circle clippath defs desc ellipse filter font g glyph glyphref hkern image line lineargradient marker mask metadata mpath path pattern polygon polyline radialgradient rect stop style switch symbol text textpath title tref tspan video view vkern".split(" ")),Gb=Db("feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence".split(" ")),
Hb=Db("math menclose merror mfenced mfrac mglyph mi mlabeledtr mmultiscripts mn mo mover mpadded mphantom mroot mrow ms mspace msqrt mstyle msub msup msubsup mtable mtd mtext mtr munder munderover".split(" ")),Ib=Db(["#text"]),Jb=Object.freeze||function(a){return a},Kb=Jb("accept action align alt autocomplete background bgcolor border cellpadding cellspacing checked cite class clear color cols colspan controls coords crossorigin datetime default dir disabled download enctype face for headers height hidden high href hreflang id integrity ismap label lang list loop low max maxlength media method min multiple name noshade novalidate nowrap open optimum pattern placeholder poster preload pubdate radiogroup readonly rel required rev reversed role rows rowspan spellcheck scope selected shape size sizes span srclang start src srcset step style summary tabindex title type usemap valign value width xmlns".split(" ")),
Lb=Jb("accent-height accumulate additive alignment-baseline ascent attributename attributetype azimuth basefrequency baseline-shift begin bias by class clip clip-path clip-rule color color-interpolation color-interpolation-filters color-profile color-rendering cx cy d dx dy diffuseconstant direction display divisor dur edgemode elevation end fill fill-opacity fill-rule filter filterunits flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight fx fy g1 g2 glyph-name glyphref gradientunits gradienttransform height href id image-rendering in in2 k k1 k2 k3 k4 kerning keypoints keysplines keytimes lang lengthadjust letter-spacing kernelmatrix kernelunitlength lighting-color local marker-end marker-mid marker-start markerheight markerunits markerwidth maskcontentunits maskunits max mask media method mode min name numoctaves offset operator opacity order orient orientation origin overflow paint-order path pathlength patterncontentunits patterntransform patternunits points preservealpha preserveaspectratio primitiveunits r rx ry radius refx refy repeatcount repeatdur restart result rotate scale seed shape-rendering specularconstant specularexponent spreadmethod stddeviation stitchtiles stop-color stop-opacity stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke stroke-width style surfacescale tabindex targetx targety transform text-anchor text-decoration text-rendering textlength type u1 u2 unicode values viewbox visibility version vert-adv-y vert-origin-x vert-origin-y width word-spacing wrap writing-mode xchannelselector ychannelselector x x1 x2 xmlns y y1 y2 z zoomandpan".split(" ")),
Mb=Jb("accent accentunder align bevelled close columnsalign columnlines columnspan denomalign depth dir display displaystyle fence frame height href id largeop length linethickness lspace lquote mathbackground mathcolor mathsize mathvariant maxsize minsize movablelimits notation numalign open rowalign rowlines rowspacing rowspan rspace rquote scriptlevel scriptminsize scriptsizemultiplier selection separator separators stretchy subscriptshift supscriptshift symmetric voffset width xmlns".split(" ")),
Nb=Jb(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ob=Object.hasOwnProperty,Pb=Object.setPrototypeOf,Qb=("undefined"!==typeof Reflect&&Reflect).apply;Qb||(Qb=function(a,b,c){return a.apply(b,c)});function N(a,b){Pb&&Pb(a,null);for(var c=b.length;c--;){var d=b[c];if("string"===typeof d){var e=d.toLowerCase();e!==d&&(Object.isFrozen(b)||(b[c]=e),d=e)}a[d]=!0}return a}function Rb(a){var b={},c=void 0;for(c in a)Qb(Ob,a,[c])&&(b[c]=a[c]);return b}
var O=Object.seal||function(a){return a},Sb=O(/\{\{[\s\S]*|[\s\S]*\}\}/gm),Tb=O(/<%[\s\S]*|[\s\S]*%>/gm),Ub=O(/^data-[\-\w.\u00B7-\uFFFF]/),Vb=O(/^aria-[\-\w]+$/),Wb=O(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Xb=O(/^(?:\w+script|data):/i),Yb=O(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g);A();A();ja();
var Zb="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){A();A();A();return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};function R(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var $b=("undefined"!==typeof Reflect&&Reflect).apply,ac=Array.prototype.slice,bc=Object.freeze;$b||($b=function(a,b,c){return a.apply(b,c)});
function cc(a,b){if("object"!==("undefined"===typeof a?"undefined":Zb(a))||"function"!==typeof a.createPolicy)return null;var c=null,d="data-tt-policy-suffix";b.currentScript&&b.currentScript.hasAttribute(d)&&(c=b.currentScript.getAttribute(d));var e="dompurify"+(c?"#"+c:"");try{return a.createPolicy(e,{createHTML:function(a){return a}})}catch(f){return console.warn("TrustedTypes policy "+e+" could not be created."),null}}
function dc(){function a(a){var c,h;d("beforeSanitizeAttributes",a,null);var F=a.attributes;if(F){var e={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:l};for(h=F.length;h--;){var p=c=F[h],H=p.name,C=p.namespaceURI;c=c.value.trim();var g=H.toLowerCase();e.attrName=g;e.attrValue=c;e.keepAttr=!0;d("uponSanitizeAttribute",a,e);c=e.attrValue;if("name"===g&&"IMG"===a.nodeName&&F.id){var f=F.id;F=$b(ac,F,[]);q("id",a);q(H,a);F.indexOf(f)>h&&a.setAttribute("id",f.value)}else if("INPUT"!==a.nodeName||
"type"!==g||"file"!==c||!e.keepAttr||!l[g]&&P[g])"id"===H&&a.setAttribute(H,""),q(H,a);else continue;if(e.keepAttr&&(U&&(c=c.replace(Sb," "),c=c.replace(Tb," ")),f=a.nodeName.toLowerCase(),b(f,g,c)))try{C?a.setAttributeNS(C,H,c):a.setAttribute(H,c),k.removed.pop()}catch(Bc){}}d("afterSanitizeAttributes",a,null)}}function b(a,b,c){if(mb&&("id"===b||"name"===b)&&(c in x||c in kc))return!1;if(!Fa||!Ub.test(b))if(!I||!Vb.test(b))if(!l[b]||P[b]||!(Ga[b]||Ha.test(c.replace(Yb,""))||("src"===b||"xlink:href"===
b)&&"script"!==a&&0===c.indexOf("data:")&&lc[a]||nb&&!Xb.test(c.replace(Yb,"")))&&c)return!1;return!0}function c(a){d("beforeSanitizeElements",a,null);if(f(a))return w(a),!0;var b=a.nodeName.toLowerCase();d("uponSanitizeElement",a,{tagName:b,allowedTags:v});if(!v[b]||Ia[b]){if(Ja&&!mc[b]&&"function"===typeof a.insertAdjacentHTML)try{var c=a.innerHTML;a.insertAdjacentHTML("AfterEnd",p?p.createHTML(c):c)}catch(zc){}w(a);return!0}if("noscript"===b&&a.innerHTML.match(/<\/noscript/i)||"noembed"===b&&a.innerHTML.match(/<\/noembed/i))return w(a),
!0;!ob||a.firstElementChild||a.content&&a.content.firstElementChild||!/</g.test(a.textContent)||(k.removed.push({element:a.cloneNode()}),a.innerHTML=a.innerHTML?a.innerHTML.replace(/</g,"&lt;"):a.textContent.replace(/</g,"&lt;"));U&&3===a.nodeType&&(b=a.textContent,b=b.replace(Sb," "),b=b.replace(Tb," "),a.textContent!==b&&(k.removed.push({element:a.cloneNode()}),a.textContent=b));d("afterSanitizeElements",a,null);return!1}function d(a,b,c){y[a]&&y[a].forEach(function(a){a.call(k,b,c,V)})}function e(a){return"object"===
("undefined"===typeof K?"undefined":Zb(K))?a instanceof K:a&&"object"===("undefined"===typeof a?"undefined":Zb(a))&&"number"===typeof a.nodeType&&"string"===typeof a.nodeName}function f(a){return a instanceof Ka||a instanceof La?!1:"string"===typeof a.nodeName&&"string"===typeof a.textContent&&"function"===typeof a.removeChild&&a.attributes instanceof oa&&"function"===typeof a.removeAttribute&&"function"===typeof a.setAttribute?!1:!0}function t(a){return L.call(a.ownerDocument||a,a,W.SHOW_ELEMENT|
W.SHOW_COMMENT|W.SHOW_TEXT,function(){return W.FILTER_ACCEPT},!1)}function m(a){var b=void 0,c=void 0;if(Ma)a="<remove></remove>"+a;else{var h=a.match(/^[\s]+/);(c=h&&h[0])&&(a=a.slice(c.length))}if(pa)try{b=(new ca).parseFromString(a,"text/html")}catch(Ac){}Q&&N(Ia,["title"]);if(!b||!b.documentElement){var d=b=G.createHTMLDocument("");h=d.body;h.parentNode.removeChild(h.parentNode.firstElementChild);h.outerHTML=p?p.createHTML(a):a}c&&b.body.insertBefore(x.createTextNode(c),b.body.childNodes[0]||
null);return nc.call(b,da?"html":"body")[0]}function q(a,b){try{k.removed.push({attribute:b.getAttributeNode(a),from:b})}catch(lb){k.removed.push({attribute:null,from:b})}b.removeAttribute(a)}function w(a){k.removed.push({element:a});try{a.parentNode.removeChild(a)}catch(yc){a.outerHTML=H}}function z(a){V&&V===a||(a&&"object"===("undefined"===typeof a?"undefined":Zb(a))||(a={}),v="ALLOWED_TAGS"in a?N({},a.ALLOWED_TAGS):u,l="ALLOWED_ATTR"in a?N({},a.ALLOWED_ATTR):pb,Ga="ADD_URI_SAFE_ATTR"in a?N({},
a.ADD_URI_SAFE_ATTR):oc,Ia="FORBID_TAGS"in a?N({},a.FORBID_TAGS):{},P="FORBID_ATTR"in a?N({},a.FORBID_ATTR):{},X="USE_PROFILES"in a?a.USE_PROFILES:!1,I=!1!==a.ALLOW_ARIA_ATTR,Fa=!1!==a.ALLOW_DATA_ATTR,nb=a.ALLOW_UNKNOWN_PROTOCOLS||!1,ob=a.SAFE_FOR_JQUERY||!1,U=a.SAFE_FOR_TEMPLATES||!1,da=a.WHOLE_DOCUMENT||!1,ea=a.RETURN_DOM||!1,Na=a.RETURN_DOM_FRAGMENT||!1,qb=a.RETURN_DOM_IMPORT||!1,Ma=a.FORCE_BODY||!1,mb=!1!==a.SANITIZE_DOM,Ja=!1!==a.KEEP_CONTENT,qa=a.IN_PLACE||!1,Ha=a.ALLOWED_URI_REGEXP||Ha,U&&
(Fa=!1),Na&&(ea=!0),X&&(v=N({},[].concat(R(Ib))),l=[],!0===X.html&&(N(v,Eb),N(l,Kb)),!0===X.svg&&(N(v,Fb),N(l,Lb),N(l,Nb)),!0===X.svgFilters&&(N(v,Gb),N(l,Lb),N(l,Nb)),!0===X.mathMl&&(N(v,Hb),N(l,Mb),N(l,Nb))),a.ADD_TAGS&&(v===u&&(v=Rb(v)),N(v,a.ADD_TAGS)),a.ADD_ATTR&&(l===pb&&(l=Rb(l)),N(l,a.ADD_ATTR)),a.ADD_URI_SAFE_ATTR&&N(Ga,a.ADD_URI_SAFE_ATTR),Ja&&(v["#text"]=!0),da&&N(v,["html","head","body"]),v.table&&N(v,["tbody"]),bc&&bc(a),V=a)}function k(a){return dc(a)}var g=0<arguments.length&&void 0!==
arguments[0]?arguments[0]:"undefined"===typeof window?null:window;k.version="1.0.11";k.removed=[];if(!g||!g.document||9!==g.document.nodeType)return k.isSupported=!1,k;var r=g.document,pa=!1,Q=!1,x=g.document,ra=g.DocumentFragment,K=g.Node,W=g.NodeFilter,Y=g.NamedNodeMap,oa=void 0===Y?g.NamedNodeMap||g.MozNamedAttrMap:Y,Ka=g.Text,La=g.Comment,ca=g.DOMParser;Y=g.TrustedTypes;if("function"===typeof g.HTMLTemplateElement){var h=x.createElement("template");h.content&&h.content.ownerDocument&&(x=h.content.ownerDocument)}var p=
cc(Y,r),H=p?p.createHTML(""):"",C=x,G=C.implementation,L=C.createNodeIterator,nc=C.getElementsByTagName,fa=C.createDocumentFragment,pc=r.importNode,y={};k.isSupported=G&&"undefined"!==typeof G.createHTMLDocument&&9!==x.documentMode;var Ha=Wb,v=null,u=N({},[].concat(R(Eb),R(Fb),R(Gb),R(Hb),R(Ib))),l=null,pb=N({},[].concat(R(Kb),R(Lb),R(Mb),R(Nb))),Ia=null,P=null,I=!0,Fa=!0,nb=!1,ob=!1,U=!1,da=!1,Oa=!1,Ma=!1,ea=!1,Na=!1,qb=!1,mb=!0,Ja=!0,qa=!1,X={},mc=N({},"audio head math script style template svg video".split(" ")),
lc=N({},["audio","video","img","source","image"]),Ga=null,oc=N({},"alt class for id label name pattern placeholder summary title value style xmlns".split(" ")),V=null,kc=x.createElement("form");k.isSupported&&(function(){try{m('<svg><p><style><img src="</style><img src=x onerror=1//">').querySelector("svg img")&&(pa=!0)}catch(F){}}(),function(){try{m("<x/><title>&lt;/title&gt;&lt;img&gt;").querySelector("title").innerHTML.match(/<\/title/)&&(Q=!0)}catch(F){}}());var qc=function lb(b){var h=void 0,
e=t(b);for(d("beforeSanitizeShadowDOM",b,null);h=e.nextNode();)d("uponSanitizeShadowNode",h,null),c(h)||(h.content instanceof ra&&lb(h.content),a(h));d("afterSanitizeShadowDOM",b,null)};k.sanitize=function(b,h){var d=void 0,f=void 0,C=void 0,G=void 0;b||(b="\x3c!--\x3e");if("string"!==typeof b&&!e(b)){if("function"!==typeof b.toString)throw new TypeError("toString is not a function");b=b.toString();if("string"!==typeof b)throw new TypeError("dirty is not a string, aborting");}if(!k.isSupported){if("object"===
Zb(g.toStaticHTML)||"function"===typeof g.toStaticHTML){if("string"===typeof b)return g.toStaticHTML(b);if(e(b))return g.toStaticHTML(b.outerHTML)}return b}Oa||z(h);k.removed=[];if(!qa)if(b instanceof K)d=m("\x3c!--\x3e"),f=d.ownerDocument.importNode(b,!0),1===f.nodeType&&"BODY"===f.nodeName?d=f:"HTML"===f.nodeName?d=f:d.appendChild(f);else{if(!ea&&!U&&!da&&-1===b.indexOf("<"))return p?p.createHTML(b):b;d=m(b);if(!d)return ea?null:H}d&&Ma&&w(d.firstChild);for(var l=t(qa?b:d);h=l.nextNode();)3===h.nodeType&&
h===C||c(h)||(h.content instanceof ra&&qc(h.content),a(h),C=h);C=null;if(qa)return b;if(ea){if(Na)for(G=fa.call(d.ownerDocument);d.firstChild;)G.appendChild(d.firstChild);else G=d;qb&&(G=pc.call(r,G,!0));return G}var L=da?d.outerHTML:d.innerHTML;U&&(L=L.replace(Sb," "),L=L.replace(Tb," "));return p?p.createHTML(L):L};k.setConfig=function(a){z(a);Oa=!0};k.clearConfig=function(){V=null;Oa=!1};k.isValidAttribute=function(a,c,h){V||z({});a=a.toLowerCase();c=c.toLowerCase();return b(a,c,h)};k.addHook=
function(a,b){"function"===typeof b&&(y[a]=y[a]||[],y[a].push(b))};k.removeHook=function(a){y[a]&&y[a].pop()};k.removeHooks=function(a){y[a]&&(y[a]=[])};k.removeAllHooks=function(){y={}};return k};var S=dc()(self),ec={script:{attribute:"type",values:["application/json","application/ld+json"]}},fc={USE_PROFILES:{html:!0,svg:!0,svgFilters:!0}},gc=1;
function hc(a){function b(a){ib(a,function(){return String(gc++)});z.forEach(function(a){delete w[a]});z.length=0;"use"===a.nodeName.toLowerCase()&&["href","xlink:href"].forEach(function(b){a.hasAttribute(b)&&!J(a.getAttribute(b),"#")&&(a.parentElement&&a.parentElement.removeChild(a),Aa().error("purifier",'Removed invalid <use>. use[href] must start with "#".'))})}function c(b,c){function d(){w[f]||(w[f]=!0,z.push(f))}var e=b.nodeName.toLowerCase(),f=c.attrName,g=c.attrValue;w=c.allowedAttributes;
if(J(e,"amp-"))d();else{if("a"==e&&"target"==f){var k=g.toLowerCase();g=ub.includes(k)?k:"_top"}var t=tb[e];t&&t.includes(f)&&d()}var m="["==f[0]&&"]"==f[f.length-1]?ic:J(f,"data-amp-bind-")?jc:rc;if(m===ic){var q=f.substring(1,f.length-1);b.setAttribute("data-amp-bind-"+q,g)}m!==rc&&b.setAttribute("i-amphtml-binding","");Cb(e,f,g,a)?g&&!J(f,"data-amp-bind-")&&(g=eb(e,f,g)):(c.keepAttr=!1,Aa().error("purifier",'Removed invalid attribute %s[%s="%s"].',e,f,g));c.attrValue=g}function d(){q.forEach(function(a){delete m[a]});
q.length=0}function e(a,b){var c=b.tagName;m=b.allowedTags;J(c,"amp-")&&(m[c]=!t||kb[c]);"a"===c&&a.hasAttribute("href")&&!a.hasAttribute("target")&&a.setAttribute("target","_top");var d=ec[c];if(d){b=d;var e=b.attribute;b=b.values;a.hasAttribute(e)&&b.includes(a.getAttribute(e))&&(m[c]=!0,q.push(c))}}var f=S,t=Ca(a),m,q=[],w,z=[];f.addHook("uponSanitizeElement",e);f.addHook("afterSanitizeElements",d);f.addHook("uponSanitizeAttribute",c);f.addHook("afterSanitizeAttributes",b)}var rc=0,ic=1,jc=2;
function sc(a,b){b=void 0===b?self.document:b;var c;S.addHook("uponSanitizeElement",function(a,b){var d=b.tagName;c=b.allowedTags;"template"===d&&(a=a.getAttribute("type"))&&"amp-mustache"===a.toLowerCase()&&(c.template=!0)});S.addHook("afterSanitizeElements",function(){c.template=!1});a=S.sanitize(a,{ALLOWED_TAGS:rb,FORCE_BODY:!0,RETURN_DOM_FRAGMENT:!0});S.removeAllHooks();var d=b.createElement("div");d.appendChild(a);return d.innerHTML};/*
 mustache.js - Logic-less {{mustache}} templates with JavaScript
 http://github.com/janl/mustache.js
*/
var tc={};
(function(a){function b(a){return"function"===typeof a}function c(a){return Q(a)?"array":typeof a}function d(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function e(a,b){return null!=a&&"object"===typeof a&&Object.prototype.hasOwnProperty.call(a,b)}function f(a,b){return x.call(a,b)}function t(a){return!f(ra,a)}function m(a){return String(a).replace(/[&<>"'`=\/]/g,function(a){return K[a]})}function q(b,c){function h(){if(fa&&!m)for(;g.length;)delete p[g.pop()];else g=[];m=fa=!1}function e(a){"string"===
typeof a&&(a=a.split(Y,2));if(!Q(a)||2!==a.length)throw Error("Invalid tags: "+a);y=new RegExp(d(a[0])+"\\s*");r=new RegExp("\\s*"+d(a[1]));v=new RegExp("\\s*"+d("}"+a[1]))}if(!b)return[];var f=[],p=[],g=[],fa=!1,m=!1,y,r,v;e(c||a.tags);for(var u=new k(b),l,q,x,P,I;!u.eos();){b=u.pos;if(q=u.scanUntil(y)){l=0;for(var K=q.length;l<K;++l)x=q.charAt(l),t(x)?g.push(p.length):m=!0,p.push(["text",x,b,b+1]),b+=1,"\n"===x&&h()}if(!u.scan(y))break;fa=!0;l=u.scan(La)||"name";u.scan(W);"="===l?(q=u.scanUntil(oa),
u.scan(oa),u.scanUntil(r)):"{"===l?(q=u.scanUntil(v),u.scan(Ka),u.scanUntil(r),l="&"):q=u.scanUntil(r);if(!u.scan(r))throw Error("Unclosed tag at "+u.pos);P=[l,q,b,u.pos];p.push(P);if("#"===l||"^"===l)f.push(P);else if("/"===l){I=f.pop();if(!I)throw Error('Unopened section "'+q+'" at '+b);if(I[1]!==q)throw Error('Unclosed section "'+I[1]+'" at '+b);}else if("name"===l||"{"===l||"&"===l)m=!0}if(I=f.pop())throw Error('Unclosed section "'+I[1]+'" at '+u.pos);return z(w(p))}function w(a){for(var b=[],
c,d,h=0,e=a.length;h<e;++h)if(c=a[h])"text"===c[0]&&d&&"text"===d[0]?(d[1]+=c[1],d[3]=c[3]):(b.push(c),d=c);return b}function z(a){for(var b=[],c=b,d=[],h,e,f=0,g=a.length;f<g;++f)switch(h=a[f],h[0]){case "#":case "^":c.push(h);d.push(h);c=h[4]=[];break;case "/":e=d.pop();e[5]=h[2];c=0<d.length?d[d.length-1][4]:b;break;default:c.push(h)}return b}function k(a){this.tail=this.string=a;this.pos=0}function g(a,b){this.view=a;this.cache={".":this.view};this.parent=b}function r(){this.cache={}}var pa=Object.prototype.toString,
Q=Array.isArray||function(a){return"[object Array]"===pa.call(a)},x=RegExp.prototype.test,ra=/\S/,K={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},W=/\s*/,Y=/\s+/,oa=/\s*=/,Ka=/\s*\}/,La=/#|\^|\/|>|\{|&|=|!/;k.prototype.eos=function(){return""===this.tail};k.prototype.scan=function(a){a=this.tail.match(a);if(!a||0!==a.index)return"";a=a[0];this.tail=this.tail.substring(a.length);this.pos+=a.length;return a};k.prototype.scanUntil=function(a){a=this.tail.search(a);
switch(a){case -1:var b=this.tail;this.tail="";break;case 0:b="";break;default:b=this.tail.substring(0,a),this.tail=this.tail.substring(a)}this.pos+=b.length;return b};g.prototype.push=function(a){return new g(a,this)};g.prototype.lookup=function(a){var c=this.cache;if(c.hasOwnProperty(a))var d=c[a];else{for(var h=this,f,g,k=!1;h;){if(0<a.indexOf("."))for(d=h.view,f=a.split("."),g=0;null!=d&&g<f.length;){if(!e(d,f[g])){d=null;break}g===f.length-1&&(k=!0);d=d[f[g++]]}else e(h.view,a)?(d=h.view[a],
k=!0):d=null;if(k)break;h=h.parent}c[a]=d}b(d)&&(d=d.call(this.view));return d};r.prototype.clearCache=function(){this.cache={}};r.prototype.parse=function(a,b){var c=this.cache,d=c[a];null==d&&(d=c[a]=q(a,b));return d};r.prototype.render=function(a,b,c){var d=this.parse(a);b=b instanceof g?b:new g(b);return this.renderTokens(d,b,c,a)};r.prototype.renderTokens=function(a,b,c,d){for(var e="",h,f,g,p=0,k=a.length;p<k;++p)g=void 0,h=a[p],f=h[0],"#"===f?g=this.renderSection(h,b,c,d):"^"===f?g=this.renderInverted(h,
b,c,d):">"===f?g=this.renderPartial(h,b,c,d):"&"===f?g=this.unescapedValue(h,b):"name"===f?g=this.escapedValue(h,b):"text"===f&&(g=this.rawValue(h)),void 0!==g&&(e+=g);return e};r.prototype.renderSection=function(a,c,d,e){function h(a){return f.render(a,c,d)}var f=this,g="",k=c.lookup(a[1]);if(k){if(Q(k))for(var p=0,m=k.length;p<m;++p)g+=this.renderTokens(a[4],c.push(k[p]),d,e);else if("object"===typeof k||"string"===typeof k||"number"===typeof k)g+=this.renderTokens(a[4],c.push(k),d,e);else if(b(k)){if("string"!==
typeof e)throw Error("Cannot use higher-order sections without the original template");k=k.call(c.view,e.slice(a[3],a[5]),h);null!=k&&(g+=k)}else g+=this.renderTokens(a[4],c,d,e);return g}};r.prototype.renderInverted=function(a,b,c,d){var e=b.lookup(a[1]);if(!e||Q(e)&&0===e.length)return this.renderTokens(a[4],b,c,d)};r.prototype.renderPartial=function(a,c,d){if(d&&(a=b(d)?d(a[1]):d[a[1]],null!=a))return this.renderTokens(this.parse(a),c,d,a)};r.prototype.unescapedValue=function(b,c){b=c.lookup(b[1]);
if(null!=b)return a.sanitizeUnescaped?a.sanitizeUnescaped(b):b};r.prototype.escapedValue=function(b,c){b=c.lookup(b[1]);if(null!=b)return a.escape(b)};r.prototype.rawValue=function(a){return a[1]};a.name="mustache.js";a.version="2.2.0";a.tags=["{{","}}"];var ca=new r;a.clearCache=function(){return ca.clearCache()};a.parse=function(a,b){return ca.parse(a,b)};a.render=function(a,b,d){if("string"!==typeof a)throw new TypeError('Invalid template! Template should be a "string" but "'+c(a)+'" was given as the first argument for mustache#render(template, view, partials)');
return ca.render(a,b,d)};a.to_html=function(c,d,e,f){c=a.render(c,d,e);if(b(f))f(c);else return c};a.escape=m;a.sanitizeUnescaped=null;a.setUnescapedSanitizer=function(b){a.sanitizeUnescaped=b};a.Scanner=k;a.Context=g;a.Writer=r})(tc);var T=AMP.BaseTemplate;function Z(a,b){var c=T.call(this,a,b)||this;tc.setUnescapedSanitizer(function(a){return sc(a,c.win.document)});return c}Z.prototype=la(T.prototype);Z.prototype.constructor=Z;if(ua)ua(Z,T);else for(var uc in T)if("prototype"!=uc)if(Object.defineProperties){var vc=Object.getOwnPropertyDescriptor(T,uc);vc&&Object.defineProperty(Z,uc,vc)}else Z[uc]=T[uc];Z.D=T.prototype;
Z.prototype.compileCallback=function(){if(!this.viewerCanRenderTemplates()){this.o={};if("TEMPLATE"==this.element.tagName){var a=this.element;if("content"in a)var b=a.content.cloneNode(!0);else{b=a.ownerDocument.createDocumentFragment();var c=b.ownerDocument.createDocumentFragment();for(a=a.firstChild;a;a=a.nextSibling)c.appendChild(a.cloneNode(!0));b.appendChild(c)}wc(this,b);c=this.element.ownerDocument.createElement("div");c.appendChild(b);b=c.innerHTML}else b="SCRIPT"==this.element.tagName?this.element.textContent:
"";this.w=b;tc.parse(this.w,void 0)}};function wc(a,b){var c=b.querySelectorAll("template");Ba(c,function(b,c){c="__AMP_NESTED_TEMPLATE_"+c;a.o[c]=b.outerHTML;var d=a.element.ownerDocument.createTextNode("{{{"+c+"}}}");b.parentNode.replaceChild(d,b)})}Z.prototype.setHtml=function(a){return xc(this,a)};Z.prototype.render=function(a){var b=a;"object"===typeof a&&(b=Object.assign({},a,this.o));a=tc.render(this.w,b,void 0);return xc(this,a)};
function xc(a,b){var c=a.win.document,d=Object.assign({},fc,{ADD_ATTR:sb,ADD_TAGS:["use"],FORBID_TAGS:Object.keys(jb),FORCE_BODY:!0,RETURN_DOM:!0,ALLOW_UNKNOWN_PROTOCOLS:!0});hc(c);b=S.sanitize(b,d);S.removeAllHooks();c=a.win.document.createElement("div");c.innerHTML=b.innerHTML;return a.unwrap(c)}(function(a){a.registerTemplate("amp-mustache",Z)})(self.AMP);
})});

//# sourceMappingURL=amp-mustache-0.2.js.map