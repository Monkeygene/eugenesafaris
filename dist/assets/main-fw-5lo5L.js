(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();const I=document.getElementById("desktopMenuBtn"),c=document.getElementById("desktopSidebar"),i=document.getElementById("sidebarOverlay"),p=document.getElementById("menuIcon"),S=document.getElementById("contactButton"),E=document.getElementById("desktopHeaderInner"),z=document.getElementById("desktopLogo"),M=document.getElementById("desktopMail"),h=document.getElementById("menuBtn"),d=document.getElementById("mobilePanel"),a=document.getElementById("mobileOverlay"),B=document.getElementById("mobileMenuIcon");function k(){if(window.innerWidth<1024)return;const e=window.scrollY>50;E.classList.toggle("h-24",!e),E.classList.toggle("h-20",e),z.style.transform=e?"scale(0.78)":"scale(1)",M.classList.toggle("h-10",!e),M.classList.toggle("h-8",e),p.classList.toggle("h-8",!e),p.classList.toggle("h-7",e),c.classList.toggle("pt-24",!e),c.classList.toggle("pt-20",e),S.style.transform=e?"scale(0.82)":"scale(1)"}window.addEventListener("scroll",k,{passive:!0});window.addEventListener("resize",k);window.addEventListener("load",k);function H(){c.classList.remove("-translate-x-full"),i.classList.remove("opacity-0","pointer-events-none"),i.classList.add("opacity-100"),p.src="/images/navbar/hamburger-open.svg"}function L(){c.classList.add("-translate-x-full"),i.classList.remove("opacity-100"),i.classList.add("opacity-0","pointer-events-none"),p.src="/images/navbar/hamburger-closed.svg"}I.addEventListener("pointerdown",()=>{c.classList.contains("-translate-x-full")?H():L()});i.addEventListener("click",L);function T(){d.classList.remove("-translate-x-full"),a.classList.remove("hidden"),a.classList.remove("opacity-0"),a.classList.add("opacity-100"),B.src="/images/navbar/hamburger-open.svg",h.classList.add("scale-95")}function b(){d.classList.add("-translate-x-full"),a.classList.remove("opacity-100"),a.classList.add("opacity-0"),setTimeout(()=>{a.classList.add("hidden")},250),B.src="/images/navbar/hamburger-closed.svg",h.classList.remove("scale-95")}h.addEventListener("pointerdown",()=>{d.classList.contains("-translate-x-full")?T():b()});a.addEventListener("pointerdown",e=>{d.contains(e.target)||h.contains(e.target)||b()});document.addEventListener("keydown",e=>{e.key==="Escape"&&(L(),b())});d.querySelectorAll("a").forEach(e=>{e.addEventListener("click",b)});const l=document.querySelector("#weather-carousel"),g=document.querySelector("#weather-error"),A=document.querySelector("#weather-retry");document.querySelector("#weather-location");const D=-24.99,O=31.59,_={0:{label:"Clear sky",icon:"sunny",accent:"amber"},1:{label:"Mostly clear",icon:"sunny",accent:"amber"},2:{label:"Partly cloudy",icon:"cloud",accent:"slate"},3:{label:"Overcast",icon:"cloud",accent:"slate"},45:{label:"Fog",icon:"cloud",accent:"slate"},48:{label:"Icy fog",icon:"cloud",accent:"slate"},51:{label:"Light drizzle",icon:"rain",accent:"sky"},53:{label:"Drizzle",icon:"rain",accent:"sky"},55:{label:"Heavy drizzle",icon:"rain",accent:"sky"},56:{label:"Freezing drizzle",icon:"rain",accent:"sky"},57:{label:"Freezing drizzle",icon:"rain",accent:"sky"},61:{label:"Light rain",icon:"rain",accent:"sky"},63:{label:"Rain",icon:"rain",accent:"sky"},65:{label:"Heavy rain",icon:"rain",accent:"sky"},66:{label:"Freezing rain",icon:"rain",accent:"sky"},67:{label:"Freezing rain",icon:"rain",accent:"sky"},71:{label:"Light snow",icon:"snow",accent:"sky"},73:{label:"Snow",icon:"snow",accent:"sky"},75:{label:"Heavy snow",icon:"snow",accent:"sky"},77:{label:"Snow grains",icon:"snow",accent:"sky"},80:{label:"Rain showers",icon:"rain",accent:"sky"},81:{label:"Rain showers",icon:"rain",accent:"sky"},82:{label:"Violent showers",icon:"rain",accent:"sky"},85:{label:"Snow showers",icon:"snow",accent:"sky"},86:{label:"Snow showers",icon:"snow",accent:"sky"},95:{label:"Thunderstorm",icon:"storm",accent:"violet"},96:{label:"Storm with hail",icon:"storm",accent:"violet"},99:{label:"Storm with hail",icon:"storm",accent:"violet"}},$={amber:{bg:"bg-amber-50",ring:"ring-amber-200",text:"text-amber-600",iconWrap:"bg-amber-100 text-amber-500"},slate:{bg:"bg-slate-50",ring:"ring-slate-200",text:"text-slate-500",iconWrap:"bg-slate-100 text-slate-400"},sky:{bg:"bg-sky-50",ring:"ring-sky-200",text:"text-sky-600",iconWrap:"bg-sky-100 text-sky-500"},violet:{bg:"bg-violet-50",ring:"ring-violet-200",text:"text-violet-600",iconWrap:"bg-violet-100 text-violet-500"}};function j(e){switch(e){case"sunny":return`
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
        </svg>`;default:return""}}function Z(e=7){l.innerHTML="";for(let o=0;o<e;o++){const s=document.createElement("div");s.className="min-w-[140px] snap-start animate-pulse rounded-2xl border border-gray-200 bg-white p-5 shadow-sm",s.innerHTML=`
      <div class="mx-auto h-3 w-14 rounded bg-gray-200"></div>
      <div class="mx-auto my-4 h-8 w-8 rounded-full bg-gray-200"></div>
      <div class="mx-auto h-7 w-10 rounded bg-gray-200"></div>
      <div class="mx-auto mt-3 h-3 w-16 rounded bg-gray-200"></div>
      <div class="mt-4 border-t border-gray-100 pt-3">
        <div class="mx-auto h-2.5 w-12 rounded bg-gray-200"></div>
        <div class="mx-auto mt-2 h-2.5 w-12 rounded bg-gray-200"></div>
      </div>`,l.appendChild(s)}}async function C(){g.classList.add("hidden"),g.classList.remove("flex"),Z();try{const e=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${D}&longitude=${O}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=7`);if(!e.ok)throw new Error("Request failed");const o=await e.json();F(o)}catch{l.innerHTML="",g.classList.remove("hidden"),g.classList.add("flex")}}function F(e){l.innerHTML="";const o=e.daily.time,s=e.daily.temperature_2m_max,u=e.daily.temperature_2m_min,t=e.daily.weather_code,n=new Date().toDateString();o.forEach((r,y)=>{const f=new Date(r).toDateString()===n,v=_[t[y]]??{label:"—",icon:"cloud",accent:"slate"},m=$[v.accent],x=document.createElement("div");x.className=["min-w-[140px] snap-start rounded-2xl border p-5 shadow-sm transition","hover:-translate-y-0.5 hover:shadow-md",f?`${m.bg} border-transparent ring-2 ${m.ring}`:"border-gray-200 bg-white"].join(" "),x.innerHTML=`
      <p class="text-center text-sm font-medium ${f?m.text:"text-gray-500"}">
        ${f?"Today":N(r)}
      </p>
 
      <div class="mx-auto my-3 flex h-12 w-12 items-center justify-center rounded-full ${m.iconWrap}">
        ${j(v.icon)}
      </div>
 
      <p class="text-center text-4xl font-bold tabular-nums text-gray-900">${Math.round(s[y])}°</p>
      <p class="mt-1 text-center text-sm text-gray-500">${v.label}</p>
 
      <div class="mt-4 flex items-center justify-center gap-3 border-t border-gray-100 pt-3 text-xs text-gray-500">
        <span class="flex items-center gap-1 text-rose-500">▲ ${Math.round(s[y])}°</span>
        <span class="flex items-center gap-1 text-sky-500">▼ ${Math.round(u[y])}°</span>
      </div>
    `,l.appendChild(x)})}function N(e){return new Date(e).toLocaleDateString("en-US",{weekday:"long"})}A.addEventListener("click",C);C();window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};const w=document.createElement("script");w.async=!0;w.src="https://www.googletagmanager.com/gtag/js?id=G-F2CBZHQXX1";w.onload=()=>{window.gtag("js",new Date),window.gtag("config","G-F2CBZHQXX1",{page_path:window.location.pathname})};document.head.appendChild(w);
