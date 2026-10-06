(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const u=document.getElementById("menu-toggle"),b=document.getElementById("menu-icon"),y=document.getElementById("side-menu"),x=document.getElementById("menu-overlay");function m(e){y.toggleAttribute("data-open",e),x.toggleAttribute("data-open",e),y.inert=!e,u.setAttribute("aria-expanded",String(e)),u.setAttribute("aria-label",e?"Close menu":"Open menu"),b.src=e?b.dataset.open:b.dataset.closed,document.documentElement.classList.toggle("overflow-hidden",e)}const f=()=>y.hasAttribute("data-open");u.addEventListener("click",()=>m(!f()));x.addEventListener("click",()=>m(!1));y.addEventListener("click",e=>{e.target.closest("a")&&m(!1)});document.addEventListener("keydown",e=>{e.key==="Escape"&&f()&&(m(!1),u.focus())});const v=-24.99,k=31.59,_={0:{label:"Clear sky",icon:"sunny",accent:"amber"},1:{label:"Mostly clear",icon:"sunny",accent:"amber"},2:{label:"Partly cloudy",icon:"cloud",accent:"slate"},3:{label:"Overcast",icon:"cloud",accent:"slate"},45:{label:"Fog",icon:"cloud",accent:"slate"},48:{label:"Icy fog",icon:"cloud",accent:"slate"},51:{label:"Light drizzle",icon:"rain",accent:"sky"},53:{label:"Drizzle",icon:"rain",accent:"sky"},55:{label:"Heavy drizzle",icon:"rain",accent:"sky"},56:{label:"Freezing drizzle",icon:"rain",accent:"sky"},57:{label:"Freezing drizzle",icon:"rain",accent:"sky"},61:{label:"Light rain",icon:"rain",accent:"sky"},63:{label:"Rain",icon:"rain",accent:"sky"},65:{label:"Heavy rain",icon:"rain",accent:"sky"},66:{label:"Freezing rain",icon:"rain",accent:"sky"},67:{label:"Freezing rain",icon:"rain",accent:"sky"},71:{label:"Light snow",icon:"snow",accent:"sky"},73:{label:"Snow",icon:"snow",accent:"sky"},75:{label:"Heavy snow",icon:"snow",accent:"sky"},77:{label:"Snow grains",icon:"snow",accent:"sky"},80:{label:"Rain showers",icon:"rain",accent:"sky"},81:{label:"Rain showers",icon:"rain",accent:"sky"},82:{label:"Violent showers",icon:"rain",accent:"sky"},85:{label:"Snow showers",icon:"snow",accent:"sky"},86:{label:"Snow showers",icon:"snow",accent:"sky"},95:{label:"Thunderstorm",icon:"storm",accent:"violet"},96:{label:"Storm with hail",icon:"storm",accent:"violet"},99:{label:"Storm with hail",icon:"storm",accent:"violet"}},C={amber:{bg:"bg-amber-50",ring:"ring-amber-200",text:"text-amber-600",iconWrap:"bg-amber-100 text-amber-500",glow:"bg-amber-200/50"},slate:{bg:"bg-slate-50",ring:"ring-slate-200",text:"text-slate-500",iconWrap:"bg-slate-100 text-slate-400",glow:"bg-slate-300/50"},sky:{bg:"bg-sky-50",ring:"ring-sky-200",text:"text-sky-600",iconWrap:"bg-sky-100 text-sky-500",glow:"bg-sky-200/50"},violet:{bg:"bg-violet-50",ring:"ring-violet-200",text:"text-violet-600",iconWrap:"bg-violet-100 text-violet-500",glow:"bg-violet-200/50"}};function L(e){switch(e){case"sunny":return`
        <svg viewBox="0 0 24 24" class="icon-sunny h-8 w-8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
          <circle class="sun-body" cx="12" cy="12" r="4.2" fill="currentColor" stroke="none"/>
          <g class="sun-body">
            <line x1="12" y1="2.5" x2="12" y2="4.5"/>
            <line x1="12" y1="19.5" x2="12" y2="21.5"/>
            <line x1="2.5" y1="12" x2="4.5" y2="12"/>
            <line x1="19.5" y1="12" x2="21.5" y2="12"/>
            <line x1="4.9" y1="4.9" x2="6.3" y2="6.3"/>
            <line x1="17.7" y1="17.7" x2="19.1" y2="19.1"/>
            <line x1="4.9" y1="19.1" x2="6.3" y2="17.7"/>
            <line x1="17.7" y1="6.3" x2="19.1" y2="4.9"/>
          </g>
        </svg>`;case"cloud":return`
        <svg viewBox="0 0 24 24" class="icon-cloud h-8 w-8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path class="cloud-back" d="M7 17.5a4 4 0 0 1-.6-7.95 5 5 0 0 1 9.6-1.9A4.5 4.5 0 0 1 17.5 17.5H7Z" fill="currentColor" fill-opacity="0.15"/>
          <path d="M7 17.5a4 4 0 0 1-.6-7.95 5 5 0 0 1 9.6-1.9A4.5 4.5 0 0 1 17.5 17.5H7Z"/>
        </svg>`;case"rain":return`
        <svg viewBox="0 0 24 24" class="icon-rain h-8 w-8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6.5 14.5a3.8 3.8 0 0 1-.5-7.56 4.8 4.8 0 0 1 9.2-1.8A4.3 4.3 0 0 1 16.5 14.5h-10Z" fill="currentColor" fill-opacity="0.15"/>
          <path d="M6.5 14.5a3.8 3.8 0 0 1-.5-7.56 4.8 4.8 0 0 1 9.2-1.8A4.3 4.3 0 0 1 16.5 14.5h-10Z"/>
          <line class="drop" x1="8.5" y1="17" x2="8" y2="19.2"/>
          <line class="drop" x1="12" y1="17" x2="11.5" y2="19.2"/>
          <line class="drop" x1="15.5" y1="17" x2="15" y2="19.2"/>
        </svg>`;case"snow":return`
        <svg viewBox="0 0 24 24" class="icon-cloud h-8 w-8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path class="cloud-back" d="M6.5 13.5a3.8 3.8 0 0 1-.5-7.56 4.8 4.8 0 0 1 9.2-1.8A4.3 4.3 0 0 1 16.5 13.5h-10Z" fill="currentColor" fill-opacity="0.15"/>
          <path d="M6.5 13.5a3.8 3.8 0 0 1-.5-7.56 4.8 4.8 0 0 1 9.2-1.8A4.3 4.3 0 0 1 16.5 13.5h-10Z"/>
          <line x1="8.5" y1="17" x2="8.5" y2="20"/>
          <line x1="12" y1="17" x2="12" y2="20"/>
          <line x1="15.5" y1="17" x2="15.5" y2="20"/>
        </svg>`;case"storm":return`
        <svg viewBox="0 0 24 24" class="icon-storm h-8 w-8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6.5 13a3.8 3.8 0 0 1-.5-7.56 4.8 4.8 0 0 1 9.2-1.8A4.3 4.3 0 0 1 16.5 13h-10Z" fill="currentColor" fill-opacity="0.15"/>
          <path d="M6.5 13a3.8 3.8 0 0 1-.5-7.56 4.8 4.8 0 0 1 9.2-1.8A4.3 4.3 0 0 1 16.5 13h-10Z"/>
          <polygon class="bolt" points="12.5,14 9.5,18.5 11.5,18.5 10.5,22 14.5,16.5 12.3,16.5" fill="currentColor" stroke="none"/>
        </svg>`;default:return""}}const s=document.querySelector("#weather-carousel"),d=document.querySelector("#weather-error"),M=document.querySelector("#weather-retry");function E(e=7){s.innerHTML="";for(let n=0;n<e;n++){const o=document.createElement("div");o.className="min-w-[140px] snap-start animate-pulse rounded-2xl border border-gray-200 bg-white p-5 shadow-sm",o.innerHTML=`
      <div class="mx-auto h-3 w-14 rounded bg-gray-200"></div>
      <div class="mx-auto my-4 h-8 w-8 rounded-full bg-gray-200"></div>
      <div class="mx-auto h-7 w-10 rounded bg-gray-200"></div>
      <div class="mx-auto mt-3 h-3 w-16 rounded bg-gray-200"></div>
      <div class="mt-4 border-t border-gray-100 pt-3">
        <div class="mx-auto h-2.5 w-12 rounded bg-gray-200"></div>
        <div class="mx-auto mt-2 h-2.5 w-12 rounded bg-gray-200"></div>
      </div>`,s.appendChild(o)}}async function S(){d.classList.add("hidden"),d.classList.remove("flex"),E();try{const e=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${v}&longitude=${k}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=7`);if(!e.ok)throw new Error("Request failed");const n=await e.json();$(n)}catch{s.innerHTML="",d.classList.remove("hidden"),d.classList.add("flex")}}function $(e){s.innerHTML="";const n=e.daily.time,o=e.daily.temperature_2m_max,a=e.daily.temperature_2m_min,t=e.daily.weather_code,r=new Date().toDateString();n.forEach((c,i)=>{const p=new Date(c).toDateString()===r,h=_[t[i]]??{label:"—",icon:"cloud",accent:"slate"},l=C[h.accent],w=document.createElement("div");w.className=["min-w-[140px] snap-start rounded-2xl border p-5 shadow-sm transition","hover:-translate-y-0.5 hover:shadow-md",p?`${l.bg} border-transparent ring-2 ${l.ring}`:"border-gray-200 bg-white"].join(" "),w.innerHTML=`
      <p class="text-center text-sm font-medium ${p?l.text:"text-gray-500"}">
        ${p?"Today":z(c)}
      </p>
      <div class="mx-auto my-3 flex h-12 w-12 items-center justify-center rounded-full ${l.iconWrap}">
        ${L(h.icon)}
      </div>
      <p class="text-center text-4xl font-bold tabular-nums text-gray-900">${Math.round(o[i])}°</p>
      <p class="mt-1 text-center text-sm text-gray-500">${h.label}</p>
      <div class="mt-4 flex items-center justify-center gap-3 border-t border-gray-100 pt-3 text-xs text-gray-500">
        <span class="flex items-center gap-1 text-rose-500">▲ ${Math.round(o[i])}°</span>
        <span class="flex items-center gap-1 text-sky-500">▼ ${Math.round(a[i])}°</span>
      </div>
    `,s.appendChild(w)})}function z(e){return new Date(e).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})}async function A(){const e=document.querySelector("#today-date");e.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"short",day:"numeric"});try{const n=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${v}&longitude=${k}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=1`);if(!n.ok)throw new Error("Request failed");const o=await n.json();q(o)}catch{document.querySelector("#today-label").textContent="Unavailable"}}function q(e){const n=_[e.current.weather_code]??{label:"—",icon:"cloud",accent:"slate"},o=C[n.accent];document.querySelector("#today-temp").textContent=`${Math.round(e.current.temperature_2m)}°`,document.querySelector("#today-label").textContent=n.label,document.querySelector("#today-feels").textContent=`${Math.round(e.current.apparent_temperature)}°`,document.querySelector("#today-humidity").textContent=`${Math.round(e.current.relative_humidity_2m)}%`,document.querySelector("#today-hilo").textContent=`${Math.round(e.daily.temperature_2m_max[0])}°/${Math.round(e.daily.temperature_2m_min[0])}°`,document.querySelector("#today-icon").innerHTML=L(n.icon);const a=document.querySelector("#today-icon-wrap");a.className=`flex size-14 shrink-0 items-center justify-center rounded-2xl ${o.iconWrap}`;const t=document.querySelector("#today-glow");t.className=`glow pointer-events-none absolute -right-8 -top-8 size-28 rounded-full ${o.glow} blur-2xl`}M.addEventListener("click",S);S();A();window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};const g=document.createElement("script");g.async=!0;g.src="https://www.googletagmanager.com/gtag/js?id=G-F2CBZHQXX1";g.onload=()=>{window.gtag("js",new Date),window.gtag("config","G-F2CBZHQXX1",{page_path:window.location.pathname})};document.head.appendChild(g);
