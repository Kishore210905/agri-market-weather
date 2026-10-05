/* AgriMarket & Weather - all data below is DEMO DATA (not live). */

// ===== 1. Demo data =====
const UPDATED = "Demo - " + new Date().toLocaleDateString("en-IN");
// [crop, category, market, location, min, max, modal, unit, trend]
const PRICES = [
 ["Tomato","Vegetable","Salem Uzhavar Sandhai","Salem",18,32,25,"₹/kg","up"],
 ["Tomato","Vegetable","Koyambedu Market","Chennai",20,36,28,"₹/kg","stable"],
 ["Onion","Vegetable","Salem Uzhavar Sandhai","Salem",22,38,30,"₹/kg","down"],
 ["Onion","Vegetable","Madurai Market","Madurai",24,40,32,"₹/kg","up"],
 ["Potato","Vegetable","Koyambedu Market","Chennai",25,35,30,"₹/kg","stable"],
 ["Rice","Cereal","Thanjavur Mandi","Thanjavur",2100,2500,2300,"₹/quintal","stable"],
 ["Rice","Cereal","Erode Mandi","Erode",2050,2450,2250,"₹/quintal","down"],
 ["Wheat","Cereal","Coimbatore Mandi","Coimbatore",2200,2600,2400,"₹/quintal","up"],
 ["Cotton","Fibre","Erode Mandi","Erode",6200,7000,6700,"₹/quintal","up"],
 ["Sugarcane","Cash crop","Salem Sugar Mill Yard","Salem",3000,3400,3200,"₹/tonne","stable"],
 ["Groundnut","Oilseed","Salem Regulated Market","Salem",5600,6400,6000,"₹/quintal","down"],
 ["Groundnut","Oilseed","Madurai Market","Madurai",5500,6300,5900,"₹/quintal","stable"]
].map(r=>({crop:r[0],cat:r[1],market:r[2],loc:r[3],min:r[4],max:r[5],modal:r[6],unit:r[7],trend:r[8]}));

// [crop, season, water, soil, temperature, tip]
const CROPS = [
 ["Tomato","Year-round (best Oct-Feb)","Medium; regular light watering","Well-drained loam","20-30 °C","Stake plants and avoid waterlogging."],
 ["Onion","Rabi (Oct-Mar)","Medium; stop before harvest","Sandy loam","13-25 °C","Keep weeds down in the first 6 weeks."],
 ["Potato","Rabi (Oct-Feb)","Medium","Loose sandy loam","15-25 °C","Earth up soil around the plants."],
 ["Rice","Kharif (Jun-Nov)","High; standing water","Clay or clay loam","20-35 °C","Level the field for even water."],
 ["Wheat","Rabi (Nov-Apr)","Medium; 4-6 irrigations","Loam or clay loam","10-25 °C","Irrigate at crown root stage."],
 ["Cotton","Kharif (Apr-Dec)","Medium","Black cotton soil","21-35 °C","Scout regularly for bollworm."],
 ["Sugarcane","Year-round (plant Jan-Mar)","High","Deep loam","20-35 °C","Trash mulching saves water."],
 ["Groundnut","Kharif and Rabi","Low to medium","Red sandy loam","20-30 °C","Apply gypsum at flowering."]
].map(r=>({name:r[0],season:r[1],water:r[2],soil:r[3],temp:r[4],tip:r[5]}));

// Weather: temp, condition, humidity, wind (km/h), rain %, sunrise, sunset, 5-day [day,cond,hi,lo,rain%]
const WEATHER = {
 "Salem":{t:31,c:"Partly cloudy",h:58,w:14,r:20,sr:"06:02",ss:"18:15",d:[["Tue","Sunny",33,23,5],["Wed","Cloudy",31,23,30],["Thu","Rain",28,22,80],["Fri","Rain",27,22,70],["Sat","Sunny",32,23,10]]},
 "Chennai":{t:34,c:"Hot and humid",h:72,w:18,r:35,sr:"05:58",ss:"18:08",d:[["Tue","Sunny",35,27,10],["Wed","Cloudy",33,26,40],["Thu","Rain",30,25,75],["Fri","Cloudy",32,26,30],["Sat","Sunny",35,27,10]]},
 "Madurai":{t:36,c:"Sunny",h:48,w:12,r:10,sr:"06:04",ss:"18:17",d:[["Tue","Sunny",37,26,5],["Wed","Sunny",37,26,5],["Thu","Cloudy",34,25,25],["Fri","Rain",31,24,60],["Sat","Cloudy",33,25,30]]},
 "Coimbatore":{t:29,c:"Windy",h:55,w:32,r:25,sr:"06:08",ss:"18:20",d:[["Tue","Windy",30,21,15],["Wed","Cloudy",29,21,30],["Thu","Rain",26,20,70],["Fri","Cloudy",28,21,35],["Sat","Sunny",31,22,10]]},
 "Thanjavur":{t:32,c:"Light rain",h:78,w:16,r:65,sr:"06:00",ss:"18:12",d:[["Tue","Rain",30,24,70],["Wed","Cloudy",31,24,40],["Thu","Sunny",33,24,10],["Fri","Sunny",34,25,5],["Sat","Cloudy",32,24,25]]}
};

// ===== 2. Helpers =====
const $ = id => document.getElementById(id);
const ARROW = {up:"▲ Up",down:"▼ Down",stable:"● Stable"};
function trendHTML(t){return `<span class="${t}">${ARROW[t]}</span>`;}
function fillSelect(sel, items, allLabel){sel.innerHTML = [`<option value="">${allLabel}</option>`].concat(items.map(i=>`<option>${i}</option>`)).join("");}
const uniq = a => [...new Set(a)];
function esc(s){return s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}

// ===== 3. Shared header and footer =====
function buildLayout(){
  const page = document.body.dataset.page;
  const links = [["home","index.html","Home"],["market","market.html","Market Prices"],["weather","weather.html","Weather"],["crops","crops.html","Crops"],["about","about.html","About"]];
  $("site-header").innerHTML = `<div class="wrap"><a class="logo" href="index.html">🌾 AgriMarket &amp; Weather</a><nav aria-label="Main">${
    links.map(l=>`<a href="${l[1]}" ${l[0]===page?'class="active" aria-current="page"':""}>${l[2]}</a>`).join("")}</nav></div>`;
  $("site-footer").innerHTML = `<p>AgriMarket &amp; Weather – Smart Farmer Information Platform</p><p>College mini project. All prices and weather are <b>demo data</b>.</p><p><a href="index.html">Home</a> | <a href="market.html">Market</a> | <a href="weather.html">Weather</a> | <a href="crops.html">Crops</a> | <a href="about.html">About</a></p>`;
}

// ===== 4. Farming advice from weather =====
function advice(w){
  if(w.r >= 60) return "🌧 Rain expected: consider postponing irrigation and protect harvested produce.";
  if(w.t >= 35) return "🌡 High temperature: monitor irrigation more often, ideally morning or evening.";
  if(w.w >= 30) return "💨 Strong wind: protect vulnerable crops and support tall plants.";
  return "✅ Normal conditions: continue regular farm activities.";
}

// ===== 5. Last searched location (LocalStorage) =====
function getLoc(){try{return localStorage.getItem("agriLoc")||"Salem";}catch(e){return "Salem";}}
function setLoc(v){try{localStorage.setItem("agriLoc",v);}catch(e){}}

// ===== 6. Home page =====
function initHome(){
  const tick=()=>$("now").textContent = "Today: "+new Date().toLocaleString("en-IN");
  tick(); setInterval(tick,30000);
  $("statCrops").textContent = uniq(PRICES.map(p=>p.crop)).length;
  $("statMarkets").textContent = uniq(PRICES.map(p=>p.market)).length;
  const loc = getLoc(), w = WEATHER[loc]||WEATHER.Salem;
  $("statTemp").textContent = w.t+"°C"; $("statCond").textContent = w.c+" in "+(WEATHER[loc]?loc:"Salem");
  $("featured").innerHTML = PRICES.filter(p=>["Tomato","Onion","Rice","Cotton"].includes(p.crop)).slice(0,4).map(p=>
    `<div class="card"><h3>${p.crop}</h3><div class="price">${p.modal} <small>${p.unit}</small></div><p>${p.market}<br>${trendHTML(p.trend)}</p></div>`).join("");
  $("homeWeather").innerHTML = `<b>${WEATHER[loc]?loc:"Salem"}</b>: ${w.t}°C, ${w.c}, humidity ${w.h}%, rain chance ${w.r}%.<p>${advice(w)}</p><a class="btn" href="weather.html">Full forecast</a>`;
}

// ===== 7. Market page =====
function initMarket(){
  fillSelect($("mCategory"), uniq(PRICES.map(p=>p.cat)), "All categories");
  fillSelect($("mMarket"), uniq(PRICES.map(p=>p.market)), "All markets");
  function render(){
    const q = $("mSearch").value.trim().toLowerCase();
    $("mError").textContent = /[^a-z\s]/i.test(q) ? "Please type letters only for the crop name." : "";
    const rows = PRICES.filter(p=>(!q||p.crop.toLowerCase().includes(q))&&(!$("mCategory").value||p.cat===$("mCategory").value)&&(!$("mMarket").value||p.market===$("mMarket").value));
    $("mBody").innerHTML = rows.map(p=>`<tr><td><b>${p.crop}</b></td><td>${p.market}</td><td>${p.loc}</td><td>₹${p.min}</td><td>₹${p.max}</td><td><b>₹${p.modal}</b></td><td>${p.unit}</td><td>${trendHTML(p.trend)}</td><td>${UPDATED}</td></tr>`).join("");
    $("mEmpty").hidden = rows.length>0;
    $("mCount").textContent = rows.length+" result(s) shown (demo data)";
  }
  ["input","change"].forEach(e=>$("marketForm").addEventListener(e,render));
  $("marketForm").addEventListener("submit",ev=>ev.preventDefault());
  $("mReset").onclick=()=>{$("marketForm").reset();render();};
  render();
}

// ===== 8. Weather page =====
function showWeather(name, fallback){
  const w = WEATHER[name];
  $("wError").textContent = fallback ? "Weather data is currently unavailable. Showing demo weather information." : "";
  $("wCurrent").innerHTML = `<h2>${name}</h2><div class="price">${w.t}°C – ${w.c}</div><p>Humidity: ${w.h}% | Wind: ${w.w} km/h | Rain probability: ${w.r}%<br>Sunrise: ${w.sr} | Sunset: ${w.ss}</p>`;
  $("wAdvice").innerHTML = `<b>Farming advice</b><p>${advice(w)}</p>`;
  const part = [["Morning",w.t-4,Math.max(w.r-10,0)],["Afternoon",w.t+2,w.r],["Evening",w.t-2,Math.max(w.r-5,0)]];
  $("wToday").innerHTML = part.map(p=>`<div class="card"><h3>${p[0]}</h3><div class="price">${p[1]}°C</div><p>Rain ${p[2]}%</p></div>`).join("");
  $("wDays").innerHTML = w.d.map(d=>`<div class="card"><h3>${d[0]}</h3><p>${d[1]}</p><div class="price">${d[2]}° / ${d[3]}°</div><p>Rain ${d[4]}%</p></div>`).join("");
}
function initWeather(){
  $("wList").innerHTML = Object.keys(WEATHER).map(k=>`<option value="${k}">`).join("");
  $("wForm").addEventListener("submit",ev=>{
    ev.preventDefault();
    const q = $("wSearch").value.trim();
    if(!q){$("wError").textContent="Please enter a location name.";return;}
    const key = Object.keys(WEATHER).find(k=>k.toLowerCase()===q.toLowerCase());
    if(key){setLoc(key);showWeather(key,false);} else showWeather("Salem",true);
  });
  const saved = getLoc(); $("wSearch").value = saved; showWeather(saved,false);
}

// ===== 9. Crops page =====
function initCrops(){
  fillSelect($("cSeason"), ["Kharif","Rabi","Year-round"], "All seasons");
  function render(){
    const q=$("cSearch").value.trim().toLowerCase(), s=$("cSeason").value.toLowerCase();
    const list = CROPS.filter(c=>(!q||c.name.toLowerCase().includes(q))&&(!s||c.season.toLowerCase().includes(s)));
    $("cGrid").innerHTML = list.map(c=>`<article class="card"><h3>🌱 ${esc(c.name)}</h3><p><b>Season:</b> ${c.season}<br><b>Water:</b> ${c.water}<br><b>Soil:</b> ${c.soil}<br><b>Temperature:</b> ${c.temp}</p><p class="note">${c.tip}</p></article>`).join("");
    $("cEmpty").hidden = list.length>0;
  }
  ["input","change"].forEach(e=>$("cForm").addEventListener(e,render));
  $("cForm").addEventListener("submit",ev=>ev.preventDefault());
  render();
}

// ===== 10. Start =====
document.addEventListener("DOMContentLoaded",()=>{
  buildLayout();
  const init={home:initHome,market:initMarket,weather:initWeather,crops:initCrops}[document.body.dataset.page];
  if(init) init();
});
