!function(){function a(){this._orig=this,this._ready=!1,this._queue=[],this._err=[]}function b(a,b){setTimeout(function(){a._resume()},b)}function c(a){a instanceof Function?a.apply(this):console.log(a)}function d(a){a instanceof Function?a.apply(this):console.log(a)}function e(a){this._break("closed"),a._resume()}function f(a){if(!a.length)return void this._break();var b=a.shift();if(a.length){var c=this;this._slip(d,[function(){f.apply(c,[a])}])}try{this._repair(),b.apply(this)}catch(e){this._break(e.toString())}}function g(a,b){for(var c in a)if(a[c]===b)return;a.push(b)}function h(a,b){for(var c in a)if(a[c]===b)return void a.splice(c,1)}function i(){a.apply(this)}function j(){i.prototype._time||(i.prototype._time=function(){return Date.now()}),i.prototype._startTime=i.prototype._time(),i.prototype.time=function(){return i.prototype._time()-i.prototype._startTime}}function k(a,b,c){if("undefined"==typeof b)return k(a,[],[]);if(a instanceof Object){for(var d=0;d<b.length;d++)if(b[d]===a)return c[d];var e;a instanceof Array?e=[]:(e={},b.push(a),c.push(e));for(var f in a)e[f]=k(a[f],b,c);return e}return a}function l(){this._info.engine=ca._type,this._info.version=ca._version,this._info.sysex=ca._sysex,this._info.inputs=[],this._info.outputs=[],_=[],aa=[],ca._allOuts={},ca._allIns={};var a,b;for(a=0;a<ca._outs.length;a++)b=ca._outs[a],b.engine=ca,ca._allOuts[b.name]=b,this._info.outputs.push({name:b.name,manufacturer:b.manufacturer,version:b.version,engine:ca._type}),_.push(b);for(a=0;a<da._outs.length;a++)b=da._outs[a],this._info.outputs.push({name:b.name,manufacturer:b.manufacturer,version:b.version,engine:b.type}),_.push(b);for(a=0;a<ca._ins.length;a++)b=ca._ins[a],b.engine=ca,ca._allIns[b.name]=b,this._info.inputs.push({name:b.name,manufacturer:b.manufacturer,version:b.version,engine:ca._type}),aa.push(b);for(a=0;a<da._ins.length;a++)b=da._ins[a],this._info.inputs.push({name:b.name,manufacturer:b.manufacturer,version:b.version,engine:b.type}),aa.push(b)}function m(){this._slip(l,[]),ca._refresh()}function n(a,b){if("undefined"==typeof a)return b.slice();var c,d,e=[];if(a instanceof RegExp){for(d=0;d<b.length;d++)a.test(b[d].name)&&e.push(b[d]);return e}for(a instanceof Function&&(a=a(b)),a instanceof Array||(a=[a]),c=0;c<a.length;c++)for(d=0;d<b.length;d++)(a[c]+""==d+""||a[c]===b[d].name||a[c]instanceof Object&&a[c].name===b[d].name)&&e.push(b[d]);return e}function o(a,b){var c;c=b instanceof RegExp?"Port matching "+b+" not found":b instanceof Object||"undefined"==typeof b?"Port not found":'Port "'+b+'" not found',a._crash(c)}function p(){"undefined"==typeof this._info.engine&&(this._info.engine="none"),"undefined"==typeof this._info.sysex&&(this._info.sysex=!0),"undefined"==typeof this._info.type&&(this._info.type="unknown")}function q(a,b){function c(a){return function(){a.engine._openOut(this,a.name)}}var d=n(b,_);if(!d.length)return void o(a,b);for(var e=0;e<d.length;e++)d[e]=c(d[e]);a._slip(p,[]),a._slip(f,[d]),a._resume()}function r(a,b){function c(a){return function(){a.engine._openIn(this,a.name)}}var d=n(b,aa);if(!d.length)return void o(a,b);for(var e=0;e<d.length;e++)d[e]=c(d[e]);a._slip(p,[]),a._slip(f,[d]),a._resume()}function s(){a.apply(this),this._handles=[],this._outs=[]}function t(a){this._receive(a)}function u(a){this._emit(a)}function v(a){a instanceof Function?g(this._orig._handles,a):g(this._orig._outs,a)}function w(a){a instanceof Function?h(this._orig._handles,a):h(this._orig._outs,a)}function x(){return"undefined"!=typeof module&&module.exports?void I(require("jazz-midi")):void this._break()}function y(){var a=document.createElement("div");a.style.visibility="hidden",document.body.appendChild(a);var b=document.createElement("object");return b.style.visibility="hidden",b.style.width="0px",b.style.height="0px",b.classid="CLSID:1ACE1618-1C7D-4561-AEE1-34842AA85E90",b.type="audio/x-jazz",document.body.appendChild(b),b.isJazz?void J(b):void this._break()}function z(){function a(a){K(a),c._resume()}function b(a){c._crash(a)}if(navigator.requestMIDIAccess){var c=this,d={};return navigator.requestMIDIAccess(d).then(a,b),void this._pause()}this._break()}function A(){function a(a){K(a,!0),c._resume()}function b(a){c._crash(a)}if(navigator.requestMIDIAccess){var c=this,d={sysex:!0};return navigator.requestMIDIAccess(d).then(a,b),void this._pause()}this._break()}function B(){function a(e){if(b=!0,c||(c=document.getElementById("jazz-midi-msg")),c){var f=[];try{f=JSON.parse(c.innerText)}catch(e){}c.innerText="",document.removeEventListener("jazz-midi-msg",a),"version"===f[0]?(L(c,f[2]),d._resume()):d._crash()}}var b,c,d=this;this._pause(),document.addEventListener("jazz-midi-msg",a);try{document.dispatchEvent(new Event("jazz-midi"))}catch(e){}window.setTimeout(function(){b||d._crash()},0)}function C(){this._pause();var a=this;setTimeout(function(){a._crash()},0)}function D(a){for(var b=[x,C],c=E(a),d=0;d<c.length;d++)"webmidi"==c[d]?(a&&a.sysex===!0&&b.push(A),a&&a.sysex===!0&&a.degrade!==!0||b.push(z)):"crx"==c[d]?b.push(B):"plugin"==c[d]&&b.push(y);return b.push(G),b}function E(a){var b=["crx","webmidi","plugin"];if(!a||!a.engine)return b;for(var c,d,e=a.engine instanceof Array?a.engine:[a.engine],f={},g=[],i=[],j=0;j<e.length;j++){var k=e[j].toString().toLowerCase();f[k]||(f[k]=!0,"none"===k&&(c=!0),"etc"===k&&(d=!0),d?i.push(k):g.push(k),h(b,k))}return(d||g.length||i.length)&&(c=!1),c?[]:g.concat(d?b:i)}function F(a){ba=new i,ba._options=a,ba._push(f,[D(a)]),ba.refresh(),ba._push(j,[]),ba._push(function(){_.length||aa.length||this._break()},[]),ba._resume()}function G(){ca._type="none",ca._sysex=!0,ca._refresh=function(){ca._outs=[],ca._ins=[]}}function H(){ca._inArr=[],ca._outArr=[],ca._inMap={},ca._outMap={},ca._version=ca._main.version,ca._sysex=!0,ca._refresh=function(){ca._outs=[],ca._ins=[];var a,b;for(a=0;(b=ca._main.MidiOutInfo(a)).length;a++)ca._outs.push({type:ca._type,name:b[0],manufacturer:b[1],version:b[2]});for(a=0;(b=ca._main.MidiInInfo(a)).length;a++)ca._ins.push({type:ca._type,name:b[0],manufacturer:b[1],version:b[2]})},ca._openOut=function(a,b){var c=ca._outMap[b];if(!c){ca._pool.length<=ca._outArr.length&&ca._pool.push(ca._newPlugin()),c={name:b,clients:[],info:{name:b,manufacturer:ca._allOuts[b].manufacturer,version:ca._allOuts[b].version,type:"MIDI-out",sysex:ca._sysex,engine:ca._type},_close:function(a){ca._closeOut(a)},_receive:function(a){this.plugin.MidiOutRaw(a.slice())}};var d=ca._pool[ca._outArr.length];c.plugin=d,ca._outArr.push(c),ca._outMap[b]=c}if(!c.open){var e=c.plugin.MidiOutOpen(b);if(e!==b)return e&&c.plugin.MidiOutClose(),void a._break();c.open=!0}a._orig._impl=c,g(c.clients,a._orig),a._info=c.info,a._receive=function(a){c._receive(a)},a._close=function(){c._close(this)}},ca._openIn=function(a,b){function c(a){return function(b,c){a.handle(b,c)}}var d=ca._inMap[b];if(!d){ca._pool.length<=ca._inArr.length&&ca._pool.push(ca._newPlugin()),d={name:b,clients:[],info:{name:b,manufacturer:ca._allIns[b].manufacturer,version:ca._allIns[b].version,type:"MIDI-in",sysex:ca._sysex,engine:ca._type},_close:function(a){ca._closeIn(a)},handle:function(a,b){for(var c in this.clients){var d=S(b);this.clients[c]._emit(d)}}};var e=ca._pool[ca._inArr.length];d.plugin=e,ca._inArr.push(d),ca._inMap[b]=d}if(!d.open){var f=e.MidiInOpen(b,c(d));if(f!==b)return f&&e.MidiInClose(),void a._break();d.open=!0}a._orig._impl=d,g(d.clients,a._orig),a._info=d.info,a._close=function(){d._close(this)}},ca._closeOut=function(a){var b=a._impl;h(b.clients,a._orig),b.clients.length||(b.open=!1,b.plugin.MidiOutClose())},ca._closeIn=function(a){var b=a._impl;h(b.clients,a._orig),b.clients.length||(b.open=!1,b.plugin.MidiInClose())},ca._close=function(){for(var a in ca._inArr)ca._inArr[a].open&&ca._inArr[a].plugin.MidiInClose()},i.prototype._time=function(){return ca._main.Time()}}function I(a){ca._type="node",ca._main=a,ca._pool=[],ca._newPlugin=function(){return new a.MIDI},H()}function J(a){ca._type="plugin",ca._main=a,ca._pool=[a],ca._newPlugin=function(){var b=document.createElement("object");return b.style.visibility="hidden",b.style.width="0px",a.style.height="0px",b.classid="CLSID:1ACE1618-1C7D-4561-AEE1-34842AA85E90",b.type="audio/x-jazz",document.body.appendChild(b),b.isJazz?b:void 0},H()}function K(a,b){ca._type="webmidi",ca._version=43,ca._sysex=!!b,ca._access=a,ca._inMap={},ca._outMap={},ca._refresh=function(){ca._outs=[],ca._ins=[],ca._access.outputs.forEach(function(a,b){ca._outs.push({type:ca._type,name:a.name,manufacturer:a.manufacturer,version:a.version})}),ca._access.inputs.forEach(function(a,b){ca._ins.push({type:ca._type,name:a.name,manufacturer:a.manufacturer,version:a.version})})},ca._openOut=function(a,b){var c=ca._outMap[b];if(!c){c={name:b,clients:[],info:{name:b,manufacturer:ca._allOuts[b].manufacturer,version:ca._allOuts[b].version,type:"MIDI-out",sysex:ca._sysex,engine:ca._type},_close:function(a){ca._closeOut(a)},_receive:function(a){this.dev.send(a.slice())}};ca._access.outputs.forEach(function(a,d){a.name===b&&(c.dev=a)}),c.dev?ca._outMap[b]=c:c=void 0}c?(a._orig._impl=c,g(c.clients,a._orig),a._info=c.info,a._receive=function(a){c._receive(a)},a._close=function(){c._close(this)}):a._break()},ca._openIn=function(a,b){function c(a){return function(b){a.handle(b)}}var d=ca._inMap[b];if(!d){d={name:b,clients:[],info:{name:b,manufacturer:ca._allIns[b].manufacturer,version:ca._allIns[b].version,type:"MIDI-in",sysex:ca._sysex,engine:ca._type},_close:function(a){ca._closeIn(a)},handle:function(a){for(var b in this.clients){var c=S([].slice.call(a.data));this.clients[b]._emit(c)}}};ca._access.inputs.forEach(function(a,c){a.name===b&&(d.dev=a)}),d.dev?(d.dev.onmidimessage=c(d),ca._inMap[b]=d):d=void 0}d?(a._orig._impl=d,g(d.clients,a._orig),a._info=d.info,a._close=function(){d._close(this)}):a._break()},ca._closeOut=function(a){var b=a._impl;h(b.clients,a._orig)},ca._closeIn=function(a){var b=a._impl;h(b.clients,a._orig)},ca._close=function(){}}function L(a,b){ca._type="crx",ca._version=b,ca._sysex=!0,ca._pool=[],ca._inArr=[],ca._outArr=[],ca._inMap={},ca._outMap={},ca._msg=a,ca._newPlugin=function(){var a={id:ca._pool.length};a.id?document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["new"]})):a.ready=!0,ca._pool.push(a)},ca._newPlugin(),ca._refresh=function(){ca._outs=[],ca._ins=[],ba._pause(),document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["refresh"]}))},ca._openOut=function(a,b){var c=ca._outMap[b];if(!c){ca._pool.length<=ca._outArr.length&&ca._newPlugin();var d=ca._pool[ca._outArr.length];c={name:b,clients:[],info:{name:b,manufacturer:ca._allOuts[b].manufacturer,version:ca._allOuts[b].version,type:"MIDI-out",sysex:ca._sysex,engine:ca._type},_start:function(){document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["openout",d.id,b]}))},_close:function(a){ca._closeOut(a)},_receive:function(a){var b=a.slice();b.splice(0,0,"play",d.id),document.dispatchEvent(new CustomEvent("jazz-midi",{detail:b}))}},c.plugin=d,d.output=c,ca._outArr.push(c),ca._outMap[b]=c,d.ready&&c._start()}a._orig._impl=c,g(c.clients,a._orig),a._info=c.info,a._receive=function(a){c._receive(a)},a._close=function(){c._close(this)},c.open||a._pause()},ca._openIn=function(a,b){var c=ca._inMap[b];if(!c){ca._pool.length<=ca._inArr.length&&ca._newPlugin();var d=ca._pool[ca._inArr.length];c={name:b,clients:[],info:{name:b,manufacturer:ca._allIns[b].manufacturer,version:ca._allIns[b].version,type:"MIDI-in",sysex:ca._sysex,engine:ca._type},_start:function(){document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["openin",d.id,b]}))},_close:function(a){ca._closeIn(a)}},c.plugin=d,d.input=c,ca._inArr.push(c),ca._inMap[b]=c,d.ready&&c._start()}a._orig._impl=c,g(c.clients,a._orig),a._info=c.info,a._close=function(){c._close(this)},c.open||a._pause()},ca._closeOut=function(a){var b=a._impl;h(b.clients,a._orig),b.clients.length||(b.open=!1,document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["closeout",b.plugin.id]})))},ca._closeIn=function(a){var b=a._impl;h(b.clients,a._orig),b.clients.length||(b.open=!1,document.dispatchEvent(new CustomEvent("jazz-midi",{detail:["closein",b.plugin.id]})))},ca._close=function(){},document.addEventListener("jazz-midi-msg",function(a){var b=ca._msg.innerText.split("\n");ca._msg.innerText="";for(var c=0;c<b.length;c++){var d=[];try{d=JSON.parse(b[c])}catch(a){}if(d.length)if("refresh"===d[0]){if(d[1].ins){for(var e=0;c<d[1].ins;c++)d[1].ins[e].type=ca._type;ca._ins=d[1].ins}if(d[1].outs){for(var e=0;c<d[1].outs;c++)d[1].outs[e].type=ca._type;ca._outs=d[1].outs}ba._resume()}else if("version"===d[0]){var f=ca._pool[d[1]];f&&(f.ready=!0,f.input&&f.input._start(),f.output&&f.output._start())}else if("openout"===d[0]){var g=ca._pool[d[1]].output;if(g&&(g.open=!0,g.clients))for(var c=0;c<g.clients.length;c++)g.clients[c]._resume()}else if("openin"===d[0]){var g=ca._pool[d[1]].input;if(g&&(g.open=!0,g.clients))for(var c=0;c<g.clients.length;c++)g.clients[c]._resume()}else if("midi"===d[0]){var g=ca._pool[d[1]].input;if(g&&g.clients)for(var c=0;c<g.clients.length;c++){var h=S(d.slice(3));g.clients[c]._emit(h)}}}})}function M(){var a=this instanceof M?this:a=new M;return M.prototype.reset.apply(a,arguments),a}function N(){29.97==this.type&&!this.second&&this.frame<2&&this.minute%10&&(this.frame=2)}function O(a){return[[24,25,29.97,30][a[7]>>1&3],(1&a[7])<<4|a[6],a[5]<<4|a[4],a[3]<<4|a[2],a[1]<<4|a[0]]}function P(a){!a.backwards&&a.quarter>=4?a.decrFrame():a.backwards&&a.quarter<4&&a.incrFrame();var b;switch(a.quarter>>1){case 0:b=a.frame;break;case 1:b=a.second;break;case 2:b=a.minute;break;default:b=a.hour}return 1&a.quarter?b>>=4:b&=15,7==a.quarter&&(25==a.type?b|=2:29.97==a.type?b|=4:30==a.type&&(b|=6)),!a.backwards&&a.quarter>=4?a.incrFrame():a.backwards&&a.quarter<4&&a.decrFrame(),b|a.quarter<<4}function Q(a){return 25==a.type?32|a.hour:29.97==a.type?64|a.hour:30==a.type?96|a.hour:a.hour}function R(a){return 10>a?"0"+a:a}function S(a){var b=this instanceof S?this:b=new S;if(b._from=a instanceof S?a._from.slice():[],!arguments.length)return b;for(var c=a instanceof Array?a:arguments,d=0;d<c.length;d++){var e=c[d];1==d&&b[0]>=128&&b[0]<=175&&(e=S.noteValue(e)),(e!=parseInt(e)||0>e||e>255)&&T(c[d]),b.push(e)}return b}function T(a){throw RangeError("Bad MIDI value: "+a)}function U(a){return(a!=parseInt(a)||0>a||a>15)&&T(a),a}function V(a){return(a!=parseInt(a)||0>a||a>127)&&T(a),a}function W(a){return(a!=parseInt(a)||0>a||a>16383)&&T(a),127&a}function X(a){return(a!=parseInt(a)||0>a||a>16383)&&T(a),a>>7}function Y(a,b){S[a]=function(){return new S(b.apply(0,arguments))},s.prototype[a]=function(){return this.send(b.apply(0,arguments)),this}}function Z(a){for(var b=[],c=0;c<a.length;c++)b[c]=(a[c]<16?"0":"")+a[c].toString(16);return b.join(" ")}var $="0.3.7";a.prototype._exec=function(){for(;this._ready&&this._queue.length;){var a=this._queue.shift();this._orig._bad?this._orig._hope&&a[0]==d?(this._orig._hope=!1,a[0].apply(this,a[1])):(this._queue=[],this._orig._hope=!1):a[0]!=d&&a[0].apply(this,a[1])}},a.prototype._push=function(b,c){this._queue.push([b,c]),a.prototype._exec.apply(this)},a.prototype._slip=function(a,b){this._queue.unshift([a,b])},a.prototype._pause=function(){this._ready=!1},a.prototype._resume=function(){this._ready=!0,a.prototype._exec.apply(this)},a.prototype._break=function(a){this._orig._bad=!0,this._orig._hope=!0,a&&this._orig._err.push(a)},a.prototype._repair=function(){this._orig._bad=!1},a.prototype._crash=function(a){this._break(a),this._resume()},a.prototype.err=function(){return k(this._err)},a.prototype.wait=function(a){function c(){}if(!a)return this;c.prototype=this._orig;var d=new c;return d._ready=!1,d._queue=[],this._push(b,[d,a]),d},a.prototype.and=function(a){return this._push(c,[a]),this},a.prototype.or=function(a){return this._push(d,[a]),this},a.prototype._info={},a.prototype.info=function(){return k(this._orig._info)},a.prototype.name=function(){return this.info().name},a.prototype.close=function(){var b=new a;return this._close&&this._push(this._close,[]),this._push(e,[b]),b},i.prototype=new a,i.prototype.time=function(){return 0},"undefined"!=typeof performance&&performance.now&&(i.prototype._time=function(){return performance.now()}),i.prototype._info={name:"JZZ.js",ver:$};var _=[],aa=[];i.prototype.refresh=function(){return this._push(m,[]),this},i.prototype.openMidiOut=function(a){var b=new s;return this._push(m,[]),this._push(q,[b,a]),b},i.prototype.openMidiIn=function(a){var b=new s;return this._push(m,[]),this._push(r,[b,a]),b},i.prototype._close=function(){ca._close()},s.prototype=new a,s.prototype._receive=function(a){this._emit(a)},s.prototype.send=function(){return this._push(t,[S.apply(null,arguments)]),this},s.prototype.note=function(a,b,c,d){return this.noteOn(a,b,c),d&&this.wait(d).noteOff(a,b),this},s.prototype._emit=function(a){for(var b in this._handles)this._handles[b].apply(this,[S(a)._stamp(this)]);for(var b in this._outs){var c=S(a);c._stamped(this._outs[b])||this._outs[b].send(c._stamp(this))}},s.prototype.emit=function(a){return this._push(u,[a]),this},s.prototype.connect=function(a){return this._push(v,[a]),this},s.prototype.disconnect=function(a){return this._push(w,[a]),this};var ba,ca={},da={_outs:[],_ins:[]};JZZ=function(a){return ba||F(a),ba},JZZ.info=function(){return i.prototype.info()},JZZ.createNew=function(a){var b=new s;if(a instanceof Object)for(var c in a)b[c]=a[c];return b._resume(),b},i.prototype.createNew=JZZ.createNew,M.prototype.reset=function(a){if(a instanceof M)return this.setType(a.getType()),this.setHour(a.getHour()),this.setMinute(a.getMinute()),this.setSecond(a.getSecond()),this.setFrame(a.getFrame()),this.setQuarter(a.getQuarter()),this;var b=a instanceof Array?a:arguments;return this.setType(b[0]),this.setHour(b[1]),this.setMinute(b[2]),this.setSecond(b[3]),this.setFrame(b[4]),this.setQuarter(b[5]),this},M.prototype.isFullFrame=function(){return 0==this.quarter||4==this.quarter},M.prototype.getType=function(){return this.type},M.prototype.getHour=function(){return this.hour},M.prototype.getMinute=function(){return this.minute},M.prototype.getSecond=function(){return this.second},M.prototype.getFrame=function(){return this.frame},M.prototype.getQuarter=function(){return this.quarter},M.prototype.setType=function(a){if("undefined"==typeof a||24==a)this.type=24;else if(25==a)this.type=25;else if(29.97==a)this.type=29.97,N.apply(this);else{if(30!=a)throw RangeError("Bad SMPTE frame rate: "+a);this.type=30}return this.frame>=this.type&&(this.frame=29.97==this.type?29:this.type-1),this},M.prototype.setHour=function(a){if("undefined"==typeof a&&(a=0),a!=parseInt(a)||0>a||a>=24)throw RangeError("Bad SMPTE hours value: "+a);return this.hour=a,this},M.prototype.setMinute=function(a){if("undefined"==typeof a&&(a=0),a!=parseInt(a)||0>a||a>=60)throw RangeError("Bad SMPTE minutes value: "+a);return this.minute=a,N.apply(this),this},M.prototype.setSecond=function(a){if("undefined"==typeof a&&(a=0),a!=parseInt(a)||0>a||a>=60)throw RangeError("Bad SMPTE seconds value: "+a);return this.second=a,N.apply(this),this},M.prototype.setFrame=function(a){if("undefined"==typeof a&&(a=0),a!=parseInt(a)||0>a||a>=this.type)throw RangeError("Bad SMPTE frame number: "+a);return this.frame=a,N.apply(this),this},M.prototype.setQuarter=function(a){if("undefined"==typeof a&&(a=0),a!=parseInt(a)||0>a||a>=8)throw RangeError("Bad SMPTE quarter frame: "+a);return this.quarter=a,this},M.prototype.incrFrame=function(){return this.frame++,this.frame>=this.type&&(this.frame=0,this.second++,this.second>=60&&(this.second=0,this.minute++,this.minute>=60&&(this.minute=0,this.hour=this.hour>=23?0:this.hour+1))),N.apply(this),this},M.prototype.decrFrame=function(){return!this.second&&2==this.frame&&29.97==this.type&&this.minute%10&&(this.frame=0),this.frame--,this.frame<0&&(this.frame=29.97==this.type?29:this.type-1,this.second--,this.second<0&&(this.second=59,this.minute--,this.minute<0&&(this.minute=59,this.hour=this.hour?this.hour-1:23))),this},M.prototype.incrQF=function(){return this.backwards=!1,this.quarter=this.quarter+1&7,0!=this.quarter&&4!=this.quarter||this.incrFrame(),this},M.prototype.decrQF=function(){return this.backwards=!0,this.quarter=this.quarter+7&7,3!=this.quarter&&7!=this.quarter||this.decrFrame(),this},M.prototype.read=function(a){if(a instanceof S||(a=S.apply(null,arguments)),240==a[0]&&127==a[1]&&1==a[3]&&1==a[4]&&247==a[9])return this.type=[24,25,29.97,30][a[5]>>5&3],this.hour=31&a[5],this.minute=a[6],this.second=a[7],this.frame=a[8],this.quarter=0,this._=void 0,this._b=void 0,this._f=void 0,!0;if(241==a[0]&&"undefined"!=typeof a[1]){var b=a[1]>>4,c=15&a[1];return 0==b?7==this._&&(7==this._f&&(this.reset(O(this._a)),this.incrFrame()),this.incrFrame()):3==b?4==this._&&this.decrFrame():4==b?3==this._&&this.incrFrame():7==b&&0===this._&&(0===this._b&&(this.reset(O(this._a)),this.decrFrame()),this.decrFrame()),this._a||(this._a=[]),this._a[b]=c,this._f=this._f===b-1||0==b?b:void 0,this._b=this._b===b+1||7==b?b:void 0,this._=b,this.quarter=b,!0}return!1},M.prototype.toString=function(){return[R(this.hour),R(this.minute),R(this.second),R(this.frame)].join(":")},JZZ.SMPTE=M,S.prototype=[],S.prototype.constructor=S;var ea={};S.noteValue=function(a){return ea[a.toString().toLowerCase()]};var fa={c:0,d:2,e:4,f:5,g:7,a:9,b:11,h:11};for(var ga in fa)for(var ha=0;12>ha;ha++){var ia=fa[ga]+12*ha;if(ia>127)break;ea[ga+ha]=ia,ia>0&&(ea[ga+"b"+ha]=ia-1,ea[ga+"bb"+ha]=ia-2),127>ia&&(ea[ga+"#"+ha]=ia+1,ea[ga+"##"+ha]=ia+2)}for(var ha=0;128>ha;ha++)ea[ha]=ha;var ja={noteOff:function(a,b){return[128+U(a),V(S.noteValue(b)),0]},noteOn:function(a,b,c){return[144+U(a),V(S.noteValue(b)),V(c)]},aftertouch:function(a,b,c){return[160+U(a),V(S.noteValue(b)),V(c)]},control:function(a,b,c){return[176+U(a),V(b),V(c)]},program:function(a,b){return[192+U(a),V(b)]},pressure:function(a,b){return[208+U(a),V(b)]},pitchBend:function(a,b){return[224+U(a),W(b),X(b)]},bankMSB:function(a,b){return[176+U(a),0,V(b)]},bankLSB:function(a,b){return[176+U(a),32,V(b)]},modMSB:function(a,b){return[176+U(a),1,V(b)]},modLSB:function(a,b){return[176+U(a),33,V(b)]},breathMSB:function(a,b){return[176+U(a),2,V(b)]},breathLSB:function(a,b){return[176+U(a),34,V(b)]},footMSB:function(a,b){return[176+U(a),4,V(b)]},footLSB:function(a,b){return[176+U(a),36,V(b)]},portamentoMSB:function(a,b){return[176+U(a),5,V(b)]},portamentoLSB:function(a,b){return[176+U(a),37,V(b)]},volumeMSB:function(a,b){return[176+U(a),7,V(b)]},volumeLSB:function(a,b){return[176+U(a),39,V(b)]},balanceMSB:function(a,b){return[176+U(a),8,V(b)]},balanceLSB:function(a,b){return[176+U(a),40,V(b)]},panMSB:function(a,b){return[176+U(a),10,V(b)]},panLSB:function(a,b){return[176+U(a),42,V(b)]},expressionMSB:function(a,b){return[176+U(a),11,V(b)]},expressionLSB:function(a,b){return[176+U(a),43,V(b)]},damper:function(a,b){return[176+U(a),64,b?127:0]},portamento:function(a,b){return[176+U(a),65,b?127:0]},sostenuto:function(a,b){return[176+U(a),66,b?127:0]},soft:function(a,b){return[176+U(a),67,b?127:0]},allSoundOff:function(a){return[176+U(a),120,0]},allNotesOff:function(a){return[176+U(a),123,0]},mtc:function(a){return[241,P(a)]},songPosition:function(a){return[242,W(a),X(a)]},songSelect:function(a){return[243,V(a)]},tune:function(){return[246]},clock:function(){return[248]},start:function(){return[250]},"continue":function(){return[251]},stop:function(){return[252]},active:function(){return[254]},sxIdRequest:function(){return[240,126,127,6,1,247]},sxFullFrame:function(a){return[240,127,127,1,1,Q(a),a.getMinute(),a.getSecond(),a.getFrame(),247]},reset:function(){return[255]}};for(var ga in ja)Y(ga,ja[ga]);for(var ka={a:10,b:11,c:12,d:13,e:14,f:15,A:10,B:11,C:12,D:13,E:14,F:15},ga=0;16>ga;ga++)ka[ga]=ga;S.prototype.getChannel=function(){var a=this[0];if(!("undefined"==typeof a||128>a||a>239))return 15&a},S.prototype.setChannel=function(a){var b=this[0];return"undefined"==typeof b||128>b||b>239?this:(a=ka[a],"undefined"!=typeof a&&(this[0]=240&b|a),this)},S.prototype.getNote=function(){var a=this[0];if(!("undefined"==typeof a||128>a||a>175))return this[1]},S.prototype.setNote=function(a){var b=this[0];return"undefined"==typeof b||128>b||b>175?this:(a=S.noteValue(a),"undefined"!=typeof a&&(this[1]=a),this)},S.prototype.getVelocity=function(){var a=this[0];if(!("undefined"==typeof a||144>a||a>159))return this[2]},S.prototype.setVelocity=function(a){var b=this[0];return"undefined"==typeof b||144>b||b>159?this:(a=parseInt(a),a>=0&&128>a&&(this[2]=a),this)},S.prototype.getSysExChannel=function(){return 240==this[0]?this[2]:void 0},S.prototype.setSysExChannel=function(a){return 240==this[0]&&this.length>2&&(a=parseInt(a),a>=0&&128>a&&(this[2]=a)),this},S.prototype.isNoteOn=function(){var a=this[0];return"undefined"==typeof a||144>a||a>159?!1:this[2]>0},S.prototype.isNoteOff=function(){var a=this[0];return"undefined"==typeof a||128>a||a>159?!1:144>a?!0:0==this[2]},S.prototype.isSysEx=function(){return 240==this[0]},S.prototype.isFullSysEx=function(){return 240==this[0]&&247==this[this.length-1]},S.prototype.toString=function(){if(!this.length)return"empty";var a=Z(this);if(this[0]<128)return a;var b={241:"MIDI Time Code",242:"Song Position",243:"Song Select",244:"Undefined",245:"Undefined",246:"Tune request",248:"Timing clock",249:"Undefined",250:"Start",251:"Continue",252:"Stop",253:"Undefined",254:"Active Sensing",255:"Reset"}[this[0]];if(b)return a+" -- "+b;var c=this[0]>>4;return(b={8:"Note Off",10:"Aftertouch",12:"Program Change",13:"Channel Aftertouch",14:"Pitch Wheel"}[c])?a+" -- "+b:9==c?a+" -- "+(this[2]?"Note On":"Note Off"):11!=c?a:(b={0:"Bank Select MSB",1:"Modulation Wheel MSB",2:"Breath Controller MSB",4:"Foot Controller MSB",5:"Portamento Time MSB",6:"Data Entry MSB",7:"Channel Volume MSB",8:"Balance MSB",10:"Pan MSB",11:"Expression Controller MSB",12:"Effect Control 1 MSB",13:"Effect Control 2 MSB",16:"General Purpose Controller 1 MSB",17:"General Purpose Controller 2 MSB",18:"General Purpose Controller 3 MSB",19:"General Purpose Controller 4 MSB",32:"Bank Select LSB",33:"Modulation Wheel LSB",34:"Breath Controller LSB",36:"Foot Controller LSB",37:"Portamento Time LSB",38:"Data Entry LSB",39:"Channel Volume LSB",40:"Balance LSB",42:"Pan LSB",43:"Expression Controller LSB",44:"Effect control 1 LSB",45:"Effect control 2 LSB",48:"General Purpose Controller 1 LSB",49:"General Purpose Controller 2 LSB",50:"General Purpose Controller 3 LSB",51:"General Purpose Controller 4 LSB",64:"Damper Pedal On/Off",65:"Portamento On/Off",66:"Sostenuto On/Off",67:"Soft Pedal On/Off",68:"Legato Footswitch",69:"Hold 2",70:"Sound Controller 1",71:"Sound Controller 2",72:"Sound Controller 3",73:"Sound Controller 4",74:"Sound Controller 5",75:"Sound Controller 6",76:"Sound Controller 7",77:"Sound Controller 8",78:"Sound Controller 9",79:"Sound Controller 10",80:"General Purpose Controller 5",81:"General Purpose Controller 6",82:"General Purpose Controller 7",83:"General Purpose Controller 8",84:"Portamento Control",88:"High Resolution Velocity Prefix",91:"Effects 1 Depth",92:"Effects 2 Depth",93:"Effects 3 Depth",94:"Effects 4 Depth",95:"Effects 5 Depth",96:"Data Increment",97:"Data Decrement",98:"Non-Registered Parameter Number LSB",99:"Non-Registered Parameter Number MSB",100:"Registered Parameter Number LSB",101:"Registered Parameter Number MSB",120:"All Sound Off",121:"Reset All Controllers",122:"Local Control On/Off",123:"All Notes Off",124:"Omni Mode Off",125:"Omni Mode On",126:"Mono Mode On",127:"Poly Mode On"}[this[1]],b||(b="Undefined"),a+" -- "+b)},S.prototype._stamp=function(a){return this._from.push(a._orig?a._orig:a),this},S.prototype._unstamp=function(a){if("undefined"==typeof a)this._from=[];else{a._orig&&(a=a._orig);var b=this._from.indexOf(a);b>-1&&this._from.splice(b,1)}return this},S.prototype._stamped=function(a){a._orig&&(a=a._orig);for(var b=0;b<this._from.length;b++)if(this._from[b]==a)return!0;return!1},JZZ.MIDI=S,JZZ.lib={},JZZ.lib.openMidiOut=function(a,b){var c=new s;return b._openOut(c,a),p.apply(c),c},JZZ.lib.openMidiIn=function(a,b){var c=new s;return b._openIn(c,a),p.apply(c),c},JZZ.lib.registerMidiOut=function(a,b){var c=b._info(a);for(var d in da._outs)if(da._outs[d].name==c.name)return!1;return c.engine=b,da._outs.push(c),ba&&ba._bad&&(ba._repair(),ba._resume()),!0},JZZ.lib.registerMidiIn=function(a,b){var c=b._info(a);for(var d in da._ins)if(da._ins[d].name==c.name)return!1;return c.engine=b,da._ins.push(c),ba&&ba._bad&&(ba._repair(),ba._resume()),!0},JZZ.util={},JZZ.util.iosSound=function(){if(JZZ.util.iosSound=function(){},window){var a=window.AudioContext||window.webkitAudioContext;if(a){var b=new a;b.createGain||(b.createGain=b.createGainNode);var c=b.createOscillator(),d=b.createGain();d.gain.value=0,c.connect(d),d.connect(b.destination),c.start||(c.start=c.noteOn),c.stop||(c.stop=c.noteOff),c.start(0),c.stop(1)}}}}();