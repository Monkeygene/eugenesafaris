const months = [
  { name: 'Jan', hi: 35, lo: 22, rain: 110, season: 'Summer rains',   tag: 'Green season',       dry: false },
  { name: 'Feb', hi: 34, lo: 22, rain: 95,  season: 'Summer rains',   tag: 'Birding peak',        dry: false },
  { name: 'Mar', hi: 33, lo: 20, rain: 70,  season: 'Late summer',    tag: 'Transitional',        dry: false },
  { name: 'Apr', hi: 31, lo: 17, rain: 35,  season: 'Early dry',      tag: 'Visibility rising',   dry: true  },
  { name: 'May', hi: 28, lo: 13, rain: 15,  season: 'Dry season',     tag: 'Great game drives',   dry: true  },
  { name: 'Jun', hi: 26, lo: 8,  rain: 5,   season: 'Winter',         tag: 'Peak visibility',     dry: true  },
  { name: 'Jul', hi: 25, lo: 7,  rain: 3,   season: 'Winter',         tag: 'Peak dry season',     dry: true  },
  { name: 'Aug', hi: 27, lo: 10, rain: 2,   season: 'Late winter',    tag: 'Driest month',        dry: true  },
  { name: 'Sep', hi: 30, lo: 14, rain: 10,  season: 'Spring',         tag: 'Heat building',       dry: true  },
  { name: 'Oct', hi: 33, lo: 18, rain: 25,  season: 'Late spring',    tag: 'First rains soon',    dry: true  },
  { name: 'Nov', hi: 34, lo: 20, rain: 65,  season: 'Early summer',   tag: 'Green season begins', dry: false },
  { name: 'Dec', hi: 35, lo: 22, rain: 100, season: 'Summer',         tag: 'Lush & dramatic',     dry: false },
];

let selected = 6; // default to July

function render() {
  const selector = document.getElementById('monthSelector');
  
  selector.innerHTML = months.map((m, i) => `
    <button
      onclick="select(${i})"
      class="
        flex flex-col items-center gap-1 px-2 py-2.5 rounded-lg border text-sm
        transition-colors duration-150 cursor-pointer snap-start shrink-0
        ${i === selected
          ? 'bg-emerald-600 border-emerald-600 text-white'
          : 'bg-white border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-800'
        }
      "
    >
      <span class="w-1.5 h-1.5 rounded-full ${
        i === selected ? 'bg-white/70' : m.dry ? 'bg-emerald-500' : 'bg-blue-400'
      }"></span>
      <span class="font-medium">${m.name}</span>
      <span class="text-xs">${m.hi}°</span>
    </button>
  `).join('');

  const m = months[selected];
  document.getElementById('monthInfo').innerHTML = `
    <div class="flex items-center gap-2 flex-wrap mb-2">
      <span class="font-medium text-gray-900">${m.name} — ${m.season}</span>
      <span class="text-xs px-2.5 py-0.5 rounded-full border ${
        m.dry
          ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
          : 'bg-blue-50 text-blue-700 border-blue-300'
      }">${m.tag}</span>
    </div>
    <div class="flex gap-4 text-sm text-gray-500">
      <span>High <strong class="text-gray-800">${m.hi}°C</strong></span>
      <span>Low <strong class="text-gray-800">${m.lo}°C</strong></span>
      <span>Rain <strong class="text-gray-800">${m.rain}mm</strong></span>
    </div>
  `;
}

function select(i) { selected = i; render(); }

render();