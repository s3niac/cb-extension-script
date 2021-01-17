// ==UserScript==
// @name         chaturbate-pattern-tip
// @namespace    s3niac/cb-extension
// @version      0.2.5
// @description  pattern tipping extension
// @author       s3niac
// @match        https://*.chaturbate.com/*
// @match        https://testbed.cb.dev/*
// @require      https://cdn.jsdelivr.net/gh/s3niac/cb-extension@0.2.6/dist/cb-extension/runtime.0e49e2b53282f40c8925.js
// @require      https://cdn.jsdelivr.net/gh/s3niac/cb-extension@0.2.6/dist/cb-extension/polyfills.8c151b8375e767ff858f.js
// @require      https://cdn.jsdelivr.net/gh/s3niac/cb-extension@0.2.6/dist/cb-extension/main.b3a9a73946815f70418f.js
// @resource     STYLE_CSS https://cdn.jsdelivr.net/gh/s3niac/cb-extension@0.2.6/dist/cb-extension/styles.5a4ce67b4380534c1e2b.css
// @grant        GM_getResourceText
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    const my_css = GM_getResourceText('STYLE_CSS');
    GM_addStyle(my_css);
})();
