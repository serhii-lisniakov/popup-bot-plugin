!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(o,i,function(e){return n[e]}.bind(null,i));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){t(1)},function(n,e,t){"use strict";t.r(e);const o=n=>({dialogIcon:`<svg width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" >\n                    <path stroke="${n.textColor||"#000"}" fill="${n.textColor||"#000"}" d="M13.3904869,24.8725111 C13.9113622,24.956405 14.4457154,25 14.9902536,25 L18.0422722,25 L17.3425982,24.7144623 L24.4905508,31.7144623 C25.0931162,32.3045554 26.1106233,31.9296028 26.1862014,31.089613 L26.8956482,23.2046834 L26.3335946,24.0160203 C29.7675353,22.3621368 32,18.8812199 32,15 C32,12.7214871 31.2389388,10.6210944 29.9573502,8.93961313 L29.9573502,8.93961313 C29.9856,9.28934865 30,9.64299375 30,10 C30,10.963927 29.8951608,11.9033047 29.6962679,12.8073562 C29.8941016,13.5041046 30,14.2396419 30,15 C30,18.1056692 28.2139651,20.8905011 25.4657484,22.2141204 C25.1486861,22.3668267 24.9352315,22.6749532 24.9036949,23.0254573 L24.1942481,30.910387 L25.8898987,30.2855377 L18.7419461,23.2855377 C18.5550465,23.1025067 18.3038669,23 18.0422722,23 L15.9967137,23 L15.262998,23 L13.3904869,24.8725111 L13.3904869,24.8725111 L13.3904869,24.8725111 Z M2,10.3645656 C2,5.74396169 5.73273586,2 10.3376559,2 L17.6623441,2 C22.2631978,2 26,5.7467735 26,10.3645656 C26,14.9851695 22.2672641,18.7291312 17.6623441,18.7291312 L14.477629,18.7291312 C14.2046606,18.7291312 13.9425601,18.8363091 13.7475345,19.027681 L6.28880135,26.3466759 L8.05817588,27 L7.31788363,18.7557486 C7.28497585,18.3892717 7.06224063,18.0671037 6.73139295,17.9074385 C3.86368856,16.523501 2,13.6117623 2,10.3645656 L2,10.3645656 L2,10.3645656 Z M5.29340189,18.877954 L6.02912444,27.0544949 C6.10750173,27.9255503 7.16269435,28.31437 7.78757691,27.7024533 L15.2002685,20.4435696 L14.4746807,20.7396675 L17.6397371,20.7396675 C23.3621755,20.7396675 28,16.0974447 28,10.3698337 C28,4.64485466 23.3579772,0 17.6397371,0 L10.3602629,0 C4.63782448,0 0,4.64222274 0,10.3698337 C0,14.3945942 2.31514861,18.0042472 5.87627226,19.7192969 L5.29340189,18.877954 L5.29340189,18.877954 Z"></path>\n                 </svg>`,sendIcon:`<svg id="${n.cssPrefix}-sendBtn" width="32px" height="32px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">\n                    <rect fill="${n.textColor||"#000"}" height="4" width="21.959" y="21.125"/>\n                    <rect fill="${n.textColor||"#000"}" height="4" width="16.016" x="5.943" y="29.454"/>\n                    <rect fill="${n.textColor||"#000"}" height="4" width="10.01" x="11.949" y="38.875"/>\n                    <path fill="${n.textColor||"#000"}" d="M63.508,19.53c-0.511-0.748-1.37-1.242-2.339-1.242H30.6c-0.949,0-1.788,0.477-2.303,1.199l17.643,14.711L63.508,19.53z"/>\n                    <path fill="${n.textColor||"#000"}" d="M27.769,21.994v20.887c0,1.557,1.274,2.831,2.831,2.831h30.569c1.557,0,2.831-1.274,2.831-2.831V22.069L45.941,37.147L27.769,21.994z"/>\n               </svg>`});const i=[],r=n=>{const e=n.cssPrefix;return`\n    <div class="${e}-body">\n        <div class="${e}-top-panel">\n            <span id="${e}-drag">...</span>\n            <span id="${e}-hide">+</span>\n        </div>\n        <header class="${e}-header">\n            Hello ${n.userName?", "+n.userName:"There"}!\n        </header>\n        <section class="${e}-main">\n            <ul id="${e}-ul">${(n=>i.length?i.map(e=>`<li class="${n}-message ${e.own?"user":"bot"}-message">${e.message}</li>`).join(""):"<p>Ask the question</p>")(e)}</ul>\n        </section>\n        <section>\n            <form class="${e}-input-block" id="${e}-form">\n                <input id="${e}-message" value="" type="text" class="${e}-input"/>\n                ${o(n).sendIcon}\n            </form>\n        </section>\n        <footer class="${e}-footer">\n            <button id="${e}-theme-change">color</button>\n        </footer>\n    </div>\n`};let s={cssPrefix:"botplugin",userName:null,backColor:"#46760a",borderColor:"#46760a",textColor:"#fff",height:"50%",width:"300px",btnBackColor:"#46760a"};window.initBotPlugin=function(n){n||(n=s);let e=n.cssPrefix||"botplugin";l(n);const t=function(n){const e=document.createElement("div");return e.classList.add(n.cssPrefix+"-startBtnStyles"),e.innerHTML=o(n).dialogIcon,document.body.appendChild(e),e}(n),r=a(n);document.getElementById(e+"-theme-change").onclick=()=>r.classList.toggle(e+"-secondTheme"),document.getElementById(e+"-hide").onclick=()=>r.classList.remove(e+"-visible"),t.onclick=()=>r.classList.toggle(e+"-visible"),function(n,e){let t=0,o=0,i=0,r=0;const s=n=>{(n=n||window.event).preventDefault(),i=n.clientX,r=n.clientY,document.onmouseup=a,document.onmousemove=l},l=e=>{(e=e||window.event).preventDefault(),t=i-e.clientX,o=r-e.clientY,i=e.clientX,r=e.clientY,n.style.top=n.offsetTop-o+"px",n.style.left=n.offsetLeft-t+"px"},a=()=>{document.onmouseup=null,document.onmousemove=null};document.getElementById(e)?document.getElementById(e).onmousedown=s:n.onmousedown=s}(r,e+"-drag"),(n=>{const e=document.getElementById(n+"-ul"),t=document.getElementById(n+"-form"),o=document.getElementById(n+"-message"),r=document.getElementById(n+"-sendBtn"),s=t=>{const r=document.createElement("li");r.className=n+`-message ${t?"bot":"user"}-message`,r.innerHTML=t||o.value,i.length||(e.innerHTML=""),e.insertAdjacentElement("afterbegin",r),e.scroll({top:100}),i.push({message:t||o.value,own:!0}),t||(o.value=""),t||setTimeout(()=>l(),1e3)};t.onsubmit=n=>{n.preventDefault(),s()},r.onclick=n=>s();const l=async()=>{const n=await fetch("https://api.chucknorris.io/jokes/random").then(n=>n.json()).catch(n=>alert(n));s(n.value)}})(e)};const l=n=>{const e=document.createElement("style");var t;e.innerHTML=`\n    .${(t=n).cssPrefix}-wrapper {\n        padding: 2px 10px 10px;\n        border-radius: ${t.borderRadius||"19px"};\n        width: ${t.width||"300px"};\n        height: ${t.height||"50%"};\n        text-align: center;\n        position: fixed;\n        bottom: ${t.bottom||"15px"};\n        right: ${t.right||"15px"};\n        left: ${t.left||"auto"};\n        top: ${t.top||"auto"};\n        font-size: 13px;\n        z-index: 100000;\n        animation: show .3s ease-out forwards;\n        display: none;\n        font-family: 'Arial', sans-serif;\n        color: ${t.textColor||"#000"};\n        box-shadow: 0 0 20px -5px rgba(0,0,0,.5);\n    }\n    @keyframes show {\n        0% { opacity: 0; }\n        100% { opacity: 1; }\n    }\n    .${t.cssPrefix}-visible {\n        display: block;\n    }\n    .${t.cssPrefix}-wrapper * {\n        transition: .3s;\n    }\n    .${t.cssPrefix}-defaultTheme {\n        background-color: ${t.backColor||"#fff"};\n        border: 3px solid ${t.borderColor||"#000"};\n    }\n    .${t.cssPrefix}-secondTheme {\n        background-color: #264200;\n        border: 3px solid #264200;\n    }\n    .${t.cssPrefix}-body {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n    }\n    .${t.cssPrefix}-header {\n        padding: 10px 0;\n        letter-spacing: 1px;\n    }\n    .${t.cssPrefix}-top-panel {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    }\n    .${t.cssPrefix}-top-panel span {\n        cursor: pointer;\n        font-size: 20px;\n        position: relative;\n    }\n    .${t.cssPrefix}-top-panel span:last-child {\n        transform: rotate(45deg);\n    }\n    .${t.cssPrefix}-top-panel span:first-child {\n        top: -3px;\n    }\n    .${t.cssPrefix}-top-panel span:first-child:after {\n        content: '...';\n        position: absolute;\n        top: -6px;\n        left: 0;\n        font-size: inherit;\n    }\n    .${t.cssPrefix}-footer {\n        margin-top: auto;\n        text-align: left;\n        padding-top: 10px;\n        border-top: 1px solid rgba(0, 0, 0, 0.1);\n    }\n    #${t.cssPrefix}-theme-change {\n        border: none;\n        border-radius: 4px;\n        padding: 3px;\n        cursor: pointer;\n        outline: none;\n    }\n    #${t.cssPrefix}-theme-change:active {\n        background: #46760a;\n    }\n    .${t.cssPrefix}-main {\n        flex-grow: 1;\n        overflow-y: scroll;\n        display: flex;\n        flex-direction: column;\n    }\n    .${t.cssPrefix}-main::-webkit-scrollbar {\n        width: 4px;\n    }\n    .${t.cssPrefix}-main::-webkit-scrollbar-thumb {\n        background: rgba(210, 210, 210, 0.5);\n        border-radius: 3px;\n    }\n    ${(n=>`\n    .${n.cssPrefix}-startBtnStyles {\n        position: fixed;\n        bottom: 17px;\n        right: 17px;\n        border-radius: 50%;\n        width: 40px;\n        height: 40px;\n        background: ${n.btnBackColor||"#fff"};\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        color: white;\n        cursor: pointer;\n        font-size: 10px;\n        box-shadow: 0 0 20px -2px rgba(0, 0, 0, 0.5);\n        z-index: 100001;\n    }\n`)(t)}\n    ${(n=>`\n    #${n.cssPrefix}-ul {\n        padding: 0;\n        margin: 0;\n        display: flex;\n        flex-direction: column-reverse;\n        justify-content: flex-start;\n        flex-grow: 1;\n    }\n    .${n.cssPrefix}-message {\n        list-style: none;\n        padding: 4px 10px;\n        border-radius: 5px;\n        width: fit-content;\n        max-width: 60%;\n        background: #fff;\n        color: #000;\n        font-size: 10px;\n        box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.2);\n        text-align: left;\n        margin-right: auto;\n        margin-bottom: 10px;\n    }\n    .${n.cssPrefix}-message.user-message {\n        margin-right: 0;\n        margin-left: auto;\n    }\n`)(t)}\n    .${t.cssPrefix}-input-block {\n        display: flex;\n        margin-top: 10px;\n    }\n    .${t.cssPrefix}-input-block svg {\n        cursor: pointer;\n    }\n    .${t.cssPrefix}-input {\n        width: 100%;\n        outline: none;\n        border: 1px solid ${t.textColor||"#000"};;\n        background: none;\n        border-radius: 5px;\n        margin-right: 10px;\n        color: ${t.textColor||"#000"};\n        padding: 0 10px;\n    }\n`,document.head.appendChild(e)},a=n=>{const e=document.createElement("div");return e.classList.add(n.cssPrefix+"-wrapper",n.cssPrefix+"-defaultTheme",n.cssPrefix+"-visible"),e.innerHTML=r(n),document.body.appendChild(e),e}}]);