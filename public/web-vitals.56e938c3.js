!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequiredfdd.register("byLno",(function(t,n){e(t.exports,"getCLS",(function(){return m})),e(t.exports,"getFCP",(function(){return h})),e(t.exports,"getFID",(function(){return F})),e(t.exports,"getLCP",(function(){return P})),e(t.exports,"getTTFB",(function(){return C}));var i,r,a,o,u=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},f=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},s=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},d="function"==typeof WeakSet?new WeakSet:new Set,p=function(e,t,n){var i;return function(){t.value>=0&&(n||d.has(t)||"hidden"===document.visibilityState)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},m=function(e,t){var n,i=u("CLS",0),r=function(e){e.hadRecentInput||(i.value+=e.value,i.entries.push(e),n())},a=c("layout-shift",r);a&&(n=p(e,i,t),f((function(){a.takeRecords().map(r),n()})),s((function(){i=u("CLS",0),n=p(e,i,t)})))},v=-1,l=function(){return"hidden"===document.visibilityState?0:1/0},g=function(){f((function(e){var t=e.timeStamp;v=t}),!0)},y=function(){return v<0&&(v=l(),g(),s((function(){setTimeout((function(){v=l(),g()}),0)}))),{get timeStamp(){return v}}},h=function(e,t){var n,i=y(),r=u("FCP"),a=function(e){"first-contentful-paint"===e.name&&(f&&f.disconnect(),e.startTime<i.timeStamp&&(r.value=e.startTime,r.entries.push(e),d.add(r),n()))},o=performance.getEntriesByName("first-contentful-paint")[0],f=o?null:c("paint",a);(o||f)&&(n=p(e,r,t),o&&a(o),s((function(i){r=u("FCP"),n=p(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,d.add(r),n()}))}))})))},S={passive:!0,capture:!0},w=new Date,E=function(e,t){i||(i=t,r=e,a=new Date,T(removeEventListener),b())},b=function(){if(r>=0&&r<a-w){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(t){t(e)})),o=[]}},L=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?(n=t,i=e,r=function(){E(n,i),o()},a=function(){o()},o=function(){removeEventListener("pointerup",r,S),removeEventListener("pointercancel",a,S)},addEventListener("pointerup",r,S),addEventListener("pointercancel",a,S)):E(t,e)}var n,i,r,a,o},T=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,L,S)}))},F=function(e,t){var n,a=y(),m=u("FID"),v=function(e){e.startTime<a.timeStamp&&(m.value=e.processingStart-e.startTime,m.entries.push(e),d.add(m),n())},l=c("first-input",v);n=p(e,m,t),l&&f((function(){l.takeRecords().map(v),l.disconnect()}),!0),l&&s((function(){var a;m=u("FID"),n=p(e,m,t),o=[],r=-1,i=null,T(addEventListener),a=v,o.push(a),b()}))},P=function(e,t){var n,i=y(),r=u("LCP"),a=function(e){var t=e.startTime;t<i.timeStamp&&(r.value=t,r.entries.push(e)),n()},o=c("largest-contentful-paint",a);if(o){n=p(e,r,t);var m=function(){d.has(r)||(o.takeRecords().map(a),o.disconnect(),d.add(r),n())};["keydown","click"].forEach((function(e){addEventListener(e,m,{once:!0,capture:!0})})),f(m,!0),s((function(i){r=u("LCP"),n=p(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,d.add(r),n()}))}))}))}},C=function(e){var t,n=u("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0)return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}}))}();