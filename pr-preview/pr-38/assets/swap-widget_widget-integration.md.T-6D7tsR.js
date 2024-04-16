import{_ as i,c as e,o as a,U as t}from"./chunks/framework.M5OCxFLR.js";const u=JSON.parse('{"title":"Swap Widget","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Swap Widget | XDEFI Dev Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"swap-widget/widget-integration.md","filePath":"swap-widget/widget-integration.md","lastUpdated":1713254830000}'),s={name:"swap-widget/widget-integration.md"},n=t(`<h1 id="swap-widget" tabindex="-1">Swap Widget <a class="header-anchor" href="#swap-widget" aria-label="Permalink to &quot;Swap Widget&quot;">​</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>This documentation provides instructions for web developers to seamlessly integrate our swap widget into their webpages using an iframe.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>Before integrating the widget, ensure that you have the following:</p><ul><li>Access to the HTML of the page you will be adding the widget to</li><li>Your referral codes generated and accessible.</li></ul><h2 id="instructions" tabindex="-1">Instructions <a class="header-anchor" href="#instructions" aria-label="Permalink to &quot;Instructions&quot;">​</a></h2><p>Adding the swap widget is really simple. Just add the following iframe code to the HTML of your webpage where you want the widget to appear.</p><p>Remember to replace the placeholder with your referral code.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">iframe</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://widget-xdefi.netlify.app/?widget=true&amp;referral=YOUR_REFERRAL_CODE&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;500px&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;700px&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  frameborder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;border: none&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">iframe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>You can configure the width and height of the widget to fit your page content by adjusting the width and height parameters in the iframe tag.</p>`,12),r=[n];function h(l,o,p,d,g,k){return a(),e("div",null,r)}const E=i(s,[["render",h]]);export{u as __pageData,E as default};
