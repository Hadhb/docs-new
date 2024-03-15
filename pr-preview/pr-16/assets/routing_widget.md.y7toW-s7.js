import{_ as i,c as e,o as a,U as t}from"./chunks/framework.66bftJ19.js";const k=JSON.parse('{"title":"Widget","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Widget | XDEFI Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"routing/widget.md","filePath":"routing/widget.md","lastUpdated":1710475805000}'),s={name:"routing/widget.md"},n=t(`<h1 id="widget" tabindex="-1">Widget <a class="header-anchor" href="#widget" aria-label="Permalink to &quot;Widget&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#overview">Overview</a></li><li><a href="#prerequisites">Prerequisites</a></li><li><a href="#instructions">Instructions</a></li><li><a href="#configuration">Configuration</a></li></ul></nav><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>This documentation provides instructions for web developers to seamlessly integrate our swap widget into their webpages using an iframe.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>Before integrating the widget, ensure that you have the following:</p><ul><li>Access to the HTML of the page you will be adding the widget to</li><li>Your referral codes generated and accessible.</li></ul><h2 id="instructions" tabindex="-1">Instructions <a class="header-anchor" href="#instructions" aria-label="Permalink to &quot;Instructions&quot;">​</a></h2><p>Adding the swap widget is really simple. Just add the following iframe code to the HTML of your webpage where you want the widget to appear.</p><p>Remember to replace the placeholder with your referral code.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">iframe</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://widget-xdefi.netlify.app/?widget=true&amp;referral=YOUR_REFERRAL_CODE&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;500px&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;700px&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  frameborder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;border: none&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">iframe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>You can configure the width and height of the widget to fit your page content by adjusting the width and height parameters in the iframe tag.</p>`,13),r=[n];function l(h,o,p,d,g,c){return a(),e("div",null,r)}const f=i(s,[["render",l]]);export{k as __pageData,f as default};
