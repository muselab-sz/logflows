(self.webpackChunklogflows_sync_pickupp=self.webpackChunklogflows_sync_pickupp||[]).push([[953],{96477:(d,r,t)=>{(function(s){s(t(4631))})(function(s){"use strict";function u(a,e){if(!window.JSHINT)return window.console&&window.console.error("Error: window.JSHINT not defined, CodeMirror JavaScript linting cannot run."),[];e.indent||(e.indent=1),JSHINT(a,e,e.globals);var i=JSHINT.data().errors,n=[];return i&&f(i,n),n}s.registerHelper("lint","javascript",u);function f(a,e){for(var i=0;i<a.length;i++){var n=a[i];if(n){if(n.line<=0){window.console&&window.console.warn("Cannot display JSHint error (invalid line "+n.line+")",n);continue}var c=n.character-1,l=c+1;if(n.evidence){var o=n.evidence.substring(c).search(/.\b/);o>-1&&(l+=o)}var w={message:n.reason,severity:n.code&&n.code.startsWith("W")?"warning":"error",from:s.Pos(n.line-1,c),to:s.Pos(n.line-1,l)};e.push(w)}}}})}}]);