!function(e){var o;try{o=window.localStorage;var t="__storage_test__";return o.setItem(t,t),o.removeItem(t),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&o&&0!==o.length}}()?console.log("No local world!"):console.log("Hello, World!");