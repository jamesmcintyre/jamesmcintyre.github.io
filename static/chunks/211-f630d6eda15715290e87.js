(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[211],{7044:function(e,t,n){var r="[object Symbol]",u=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o="\\u2700-\\u27bf",c="a-z\\xdf-\\xf6\\xf8-\\xff",f="A-Z\\xc0-\\xd6\\xd8-\\xde",i="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",s="['\u2019]",p="["+i+"]",d="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",x="\\d+",l="[\\u2700-\\u27bf]",g="["+c+"]",b="[^\\ud800-\\udfff"+i+x+o+c+f+"]",v="(?:\\ud83c[\\udde6-\\uddff]){2}",h="[\\ud800-\\udbff][\\udc00-\\udfff]",y="["+f+"]",m="(?:"+g+"|"+b+")",E="(?:"+y+"|"+b+")",j="(?:['\u2019](?:d|ll|m|re|s|t|ve))?",A="(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",O="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",k="[\\ufe0e\\ufe0f]?",I=k+O+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",v,h].join("|")+")"+k+O+")*"),Z="(?:"+[l,v,h].join("|")+")"+I,C=RegExp(s,"g"),w=RegExp(d,"g"),U=RegExp([y+"?"+g+"+"+j+"(?="+[p,y,"$"].join("|")+")",E+"+"+A+"(?="+[p,y+m,"$"].join("|")+")",y+"?"+m+"+"+j,y+"+"+A,x,Z].join("|"),"g"),S=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,_="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,R="object"==typeof self&&self&&self.Object===Object&&self,z=_||R||Function("return this")();var L,N=(L={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"ss"},function(e){return null==L?void 0:L[e]});var T=Object.prototype.toString,D=z.Symbol,G=D?D.prototype:void 0,M=G?G.toString:void 0;function H(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&T.call(e)==r}(e))return M?M.call(e):"";var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}function J(e){return null==e?"":H(e)}var Y,$=(Y=function(e,t,n){return e+(n?"_":"")+t.toLowerCase()},function(e){return function(e,t,n,r){var u=-1,a=e?e.length:0;for(r&&a&&(n=e[++u]);++u<a;)n=t(n,e[u],u,e);return n}(function(e,t,n){return e=J(e),void 0===(t=n?void 0:t)?function(e){return S.test(e)}(e)?function(e){return e.match(U)||[]}(e):function(e){return e.match(u)||[]}(e):e.match(t)||[]}(function(e){return(e=J(e))&&e.replace(a,N).replace(w,"")}(e).replace(C,"")),Y,"")});e.exports=$},211:function(e,t,n){"use strict";n.d(t,{i7:function(){return O}});var r=n(266),u=n(809),a=n.n(u),o=n(8767),c=n(3262),f=n(9666),i=n(1752),s=n(2521),p=s.IM(s.Z_,s._4),d=s.r$({warnings:s.IX(s.Z_)}),x=s.dt({id:s.Z_,preload:p,type:s.Z_,widgets:s.IX(s.IM(s.Z_,s._4))}),l=s.jV([x,d]),g=n(318),b=n(7044),v=n.n(b),h=function(e,t){return t.includes(e)?e:v()(e)};function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.params,r=t.snakeCaseExceptions,u=void 0===r?[]:r,a=e;if(n&&Object.keys(n).length){var o=new URLSearchParams;Object.entries(n).forEach((function(e){var t=(0,g.Z)(e,2),n=t[0],r=t[1];Array.isArray(r)?r.forEach((function(e){o.append(h(n,u),"".concat(e))})):void 0!==r&&o.append(h(n,u),"".concat(r))})),o.toString().length&&(a="".concat(e,"?").concat(o.toString()))}return a}var m=n(7870),E=function(){var e=(0,r.Z)(a().mark((function e(t,n){var r,u,o,s,p,d;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=c.H.for()).configure({baseUrl:(0,i.default)().publicRuntimeConfig.wpApiBaseUrl}),r.use((function(e,t,r){return r(y(e,{params:n,snakeCaseExceptions:["packId"]}),t)})),u=r.path("/v1/pages/{slug}").method("get").create(),e.prev=4,s=t,0===t.indexOf("/")&&(s=t.substring(1)),s=s.split("/").map(encodeURIComponent).join("/"),e.next=10,u({slug:s});case 10:p=e.sent,o=p.data,e.next=18;break;case 14:throw e.prev=14,e.t0=e.catch(4),e.t0 instanceof Error&&f.Tb("Could not get cms page ".concat(t),{contexts:{error:{message:e.t0.message,stack:e.t0.stack}}}),e.t0;case 18:return e.prev=18,d=(0,m.J)(o,l),e.abrupt("return",d);case 23:throw e.prev=23,e.t1=e.catch(18),e.t1 instanceof Error&&f.Tb("Could not parse page from CMS ".concat(t),{contexts:{error:{message:e.t1.message,stack:e.t1.stack}}}),e.t1;case 27:case"end":return e.stop()}}),e,null,[[4,14],[18,23]])})));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.queryKey,r=n[1],u=n[2],e.abrupt("return",E(r,u));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A="page";function O(e,t,n){return(0,o.useQuery)([A,e,t],j,n)}}}]);