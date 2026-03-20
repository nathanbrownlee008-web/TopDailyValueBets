
const SUPABASE_URL="https://krmmmutcejnzdfupexpv.supabase.co";
const SUPABASE_KEY="sb_publishable_3NHjMMVw1lai9UNAA-0QZA_sKM21LgD";
const client=supabase.createClient(SUPABASE_URL,SUPABASE_KEY);

// =========================
// VIP
// =========================

function setVipUI(active, email){
  vipActive = !!active;

  const titleEl = document.getElementById('vipTitle');
  const statusEl = document.getElementById('vipStatus');
  const btnEl = document.getElementById('vipButton');
  const btnTextEl = btnEl ? btnEl.querySelector('.vip-button__text') : null;
  const promoEl = document.getElementById('vipPromo');

  if(active){
    if(titleEl) titleEl.textContent = 'VIP Access';
    if(statusEl) statusEl.textContent = email ? `Access unlocked for ${email}` : 'Access unlocked';
    if(btnEl){
      if(btnTextEl) btnTextEl.textContent = 'VIP Access Active';
      else btnEl.textContent = 'VIP Access Active';
      btnEl.disabled = false;
      btnEl.style.pointerEvents = "auto";
      btnEl.style.cursor = "pointer";
    }
    if(typeof tabTracker!=='undefined' && tabTracker) tabTracker.classList.remove('tab--locked');
    if(promoEl) promoEl.style.display = 'none';
  }else{
    if(titleEl) titleEl.textContent = 'VIP Access';
    if(statusEl) statusEl.textContent = 'VIP locked — subscribe to unlock';
    if(btnEl){
      if(btnTextEl) btnTextEl.textContent = 'Go VIP';
      else btnEl.textContent = 'Go VIP';
      btnEl.disabled = false;
      btnEl.style.pointerEvents = "";
      btnEl.style.cursor = "pointer";
    }
    if(typeof tabTracker!=='undefined' && tabTracker) tabTracker.classList.add('tab--locked');
    if(promoEl) promoEl.style.display = 'flex';
  }
}

function openVipModal(){
  if(!vipModalEl) return;
  if(vipErrorEl) vipErrorEl.textContent="";
  const saved=(localStorage.getItem('vip_email')||"").trim();
  if(vipEmailEl && !vipEmailEl.value) vipEmailEl.value=saved;
  if(vipPasswordEl && !vipPasswordEl.value) vipPasswordEl.value="";
  vipModalEl.style.display="flex";
}

function closeVipModal(){
  if(!vipModalEl) return;
  vipModalEl.style.display="none";
}

function normalizeVipEmail(email){
  return String(email || "").trim().toLowerCase();
}

async function forceVipRefreshNow(emailFromInput){
  const email = normalizeVipEmail(emailFromInput || (vipEmailEl?.value || "") || (localStorage.getItem('vip_email') || ""));
  if(!email || !email.includes("@")) return false;
  localStorage.setItem('vip_email', email);
  const active = await checkVIP();
  if(active){
    closeVipModal();
    await loadBets();
    if(typeof loadTracker === "function") await loadTracker();
    if(typeof refreshAdminBadgeUI === "function") refreshAdminBadgeUI();
    return true;
  }
  return false;
}

async function ensureVipPasswordAccount(email, password){
  const cleanEmail = normalizeVipEmail(email);
  const cleanPassword = String(password || "");
  if(!cleanEmail || !cleanEmail.includes("@")) throw new Error("Enter a valid email.");
  if(cleanPassword.length < 6) throw new Error("Use at least 6 characters for your VIP password.");

  const signIn = await client.auth.signInWithPassword({ email: cleanEmail, password: cleanPassword });
  if(!signIn.error) return true;

  const signUp = await client.auth.signUp({
    email: cleanEmail,
    password: cleanPassword,
    options: { emailRedirectTo: window.location.origin + "/reset-password.html" }
  });
  if(!signUp.error) return true;

  const msg = String(signUp.error?.message || "").toLowerCase();
  if(msg.includes("already") || msg.includes("exists") || msg.includes("registered") || msg.includes("user already")){
    const secondSignIn = await client.auth.signInWithPassword({ email: cleanEmail, password: cleanPassword });
    if(!secondSignIn.error) return true;
    throw new Error("Wrong VIP password for that email.");
  }

  throw signUp.error;
}

async function forgotVipPassword(){
  const email = normalizeVipEmail(vipEmailEl?.value || "");
  if(!email || !email.includes("@")){
    if(vipErrorEl) vipErrorEl.textContent = "Enter your email first.";
    return;
  }
  try{
    if(vipErrorEl) vipErrorEl.textContent = "Sending reset email...";
    const { error } = await client.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + "/reset-password.html"
    });
    if(error) throw error;
    if(vipErrorEl) vipErrorEl.textContent = "Password reset email sent. Check inbox and spam.";
  }catch(err){
    if(vipErrorEl) vipErrorEl.textContent = err?.message || "Could not send reset email.";
  }
}


async function checkVIP(){
  const email=(localStorage.getItem('vip_email')||"").trim();
  if(!email){
    vipActive=false;
    setVipUI(false,"");
    return false;
  }
  try{
    const r=await fetch(`/api/verify-subscription?email=${encodeURIComponent(email)}`);
    const j=await r.json();
    vipActive=!!j.active;

    if(vipActive){
      setVipUI(true,email);
    }else{
      vipActive = false;
      setVipUI(false,email);
    }

    return vipActive;

  }catch(e){
    // Keep the saved email so Restore VIP still works after refreshes/network issues
    vipActive = false;
    setVipUI(false,email);
    if(vipStatusEl) vipStatusEl.textContent="VIP status check failed — tap Restore VIP";
    return false;
  }
}
function clearVipState(){
  vipActive = false;
  localStorage.removeItem('vip_email');
  setVipUI(false,"");
  refreshAdminBadgeUI();
}
async function startCheckout(plan){
  if(vipErrorEl) vipErrorEl.textContent="";
  const email=(vipEmailEl?.value||"").trim();
  const password=(vipPasswordEl?.value||"").trim();
  if(!email || !email.includes("@")){
    if(vipErrorEl) vipErrorEl.textContent="Enter a valid email.";
    return;
  }
  if(!password || password.length < 6){
    if(vipErrorEl) vipErrorEl.textContent="Enter your VIP password (at least 6 characters).";
    return;
  }
  try{
    await ensureVipPasswordAccount(email, password);
    localStorage.setItem('vip_email',email);
    if(vipMonthlyEl) vipMonthlyEl.disabled=true;
    if(vipYearlyEl) vipYearlyEl.disabled=true;
    if(vipRestoreEl) vipRestoreEl.disabled=true;
    if(vipForgotEl) vipForgotEl.disabled=true;
    const r=await fetch('/api/create-checkout-session',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({email,plan})
    });
    const j=await r.json();
    if(!r.ok || !j.url) throw new Error(j.error||'Checkout failed');
    window.location.href=j.url;
  }catch(err){
    if(vipErrorEl) vipErrorEl.textContent=err?.message||'Something went wrong.';
    if(vipMonthlyEl) vipMonthlyEl.disabled=false;
    if(vipYearlyEl) vipYearlyEl.disabled=false;
    if(vipRestoreEl) vipRestoreEl.disabled=false;
    if(vipForgotEl) vipForgotEl.disabled=false;
  }
}

function pad2(n){return String(n).padStart(2,'0');}
function toLocalYMD(d=new Date()){
  const yr=d.getFullYear();
  const mo=pad2(d.getMonth()+1);
  const da=pad2(d.getDate());
  return `${yr}-${mo}-${da}`;
}
function normalizeDateOnly(value){
  if(!value) return null;
  if(typeof value==='string'){
    if(/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
    const dt=new Date(value);
    if(!Number.isNaN(dt.getTime())) return toLocalYMD(dt);
    return null;
  }
  const dt=new Date(value);
  if(!Number.isNaN(dt.getTime())) return toLocalYMD(dt);
  return null;
}
function isValueBetActiveToday(row){
  const today=toLocalYMD(new Date());
  const start=normalizeDateOnly(row.bet_date) || normalizeDateOnly(row.created_at);
  const end=normalizeDateOnly(row.bet_end_date) || start;
  if(!start) return false;
  return today >= start && today <= end;
}



async function forceVipRefreshNow(emailFromInput){
  const email = normalizeVipEmail(emailFromInput || (vipEmailEl?.value || "") || (localStorage.getItem('vip_email') || ""));
  if(!email || !email.includes("@")) return false;
  localStorage.setItem('vip_email', email);
  const active = await checkVIP();
  if(active){
    closeVipModal();
    await loadBets();
    refreshAdminBadgeUI();
    return true;
  }
  return false;
}

async function pollVipAfterCheckout(){
  const email = normalizeVipEmail((localStorage.getItem('vip_email') || ""));
  if(!email) return false;
  if(vipStatusEl) vipStatusEl.textContent = 'Finalising VIP payment...';
  for(let i=0;i<20;i++){
    const active = await forceVipRefreshNow(email);
    if(active){
      try{
        const url = new URL(window.location.href);
        url.searchParams.delete('vip');
        url.searchParams.delete('session_id');
        window.history.replaceState({}, '', url.toString());
      }catch(e){}
      return true;
    }
    await new Promise(r=>setTimeout(r,3000));
  }
  if(vipStatusEl) vipStatusEl.textContent = 'Tap Restore VIP to unlock.';
  return false;
}

function shouldTryVipFinalize(){
  try{
    const params = new URLSearchParams(window.location.search);
    if(params.get('vip') === 'success' || params.has('session_id')) return true;
  }catch(e){}
  return false;
}


// ===== Layout Mode (Compact / Wide) =====
const btnCompact = document.getElementById("btnCompact");
const btnWide = document.getElementById("btnWide");

// VIP UI
const vipButtonEl = document.getElementById("vipButton");
const vipStatusEl = document.getElementById("vipStatus");
const vipModalEl = document.getElementById("vipModal");
const vipCloseEl = document.getElementById("vipClose");
const vipEmailEl = document.getElementById("vipEmail");
const vipMonthlyEl = document.getElementById("vipMonthly");
const vipYearlyEl = document.getElementById("vipYearly");
const vipPasswordEl = document.getElementById("vipPassword");
const vipRestoreEl = document.getElementById("vipRestore");
const vipForgotEl = document.getElementById("vipForgot");
const vipErrorEl = document.getElementById("vipError");


let vipActive = false;
const ADMIN_SYNC_EMAIL = "nathanbrownlee40@gmail.com";
let tdtRowsCache = [];
let tdtSortKey = 'date';
let tdtSortDir = 'asc';

function currentVipEmail(){
  return ((localStorage.getItem('vip_email')||'').trim().toLowerCase());
}
function isAdminSyncEnabled(){
  return currentVipEmail() === ADMIN_SYNC_EMAIL;
}

function makeSyncId(){
  return `sync_${Date.now()}_${Math.random().toString(36).slice(2,8)}`;
}
async function upsertTdtMirror(row){
  if(!isAdminSyncEnabled() || !row) return;
  if(!row.sync_id) row.sync_id = makeSyncId();
  const payload = {
    sync_id: row.sync_id,
    match: row.match || "",
    market: row.market || "",
    odds: Number(row.odds || 0),
    stake: Number(row.stake || 0),
    result: row.result || "pending",
    profit: row.result === "won" ? Number(row.stake || 0) * (Number(row.odds || 0) - 1)
           : row.result === "lost" ? -Number(row.stake || 0)
           : 0,
    bet_date: row.bet_date || null,
    created_at: row.created_at || new Date().toISOString(),
    bookie: row.bookie || null
  };
  const { data: existing, error: checkErr } = await client.from("tdt_tracker").select("id").eq("sync_id", row.sync_id).limit(1);
  if(checkErr) throw checkErr;
  if(existing && existing.length){
    const { error } = await client.from("tdt_tracker").update(payload).eq("sync_id", row.sync_id);
    if(error) throw error;
  }else{
    const { error } = await client.from("tdt_tracker").insert([payload]);
    if(error) throw error;
  }
}
async function deleteTdtMirror(syncId){
  if(!isAdminSyncEnabled() || !syncId) return;
  const { error } = await client.from("tdt_tracker").delete().eq("sync_id", syncId);
  if(error) throw error;
}


function trackerStorageKey(){
  const email = ((localStorage.getItem('vip_email')||'').trim().toLowerCase() || 'guest');
  return `tdt_tracker_${email}`;
}

function readTrackerRows(){
  try{
    const raw = localStorage.getItem(trackerStorageKey());
    const rows = raw ? JSON.parse(raw) : [];
    const safeRows = Array.isArray(rows) ? rows : [];
    return safeRows.map((row)=>{
      const out = { ...(row || {}) };
      if(!out.id) out.id = makeLocalTrackerId();
      if(!out.created_at && out.bet_date){
        out.created_at = new Date(String(out.bet_date).slice(0,10) + "T12:00:00").toISOString();
      }
      if(!out.created_at){
        out.created_at = new Date().toISOString();
      }
      return out;
    });
  }catch(e){
    return [];
  }
}

function writeTrackerRows(rows){
  localStorage.setItem(trackerStorageKey(), JSON.stringify(rows || []));
}

function makeLocalTrackerId(){
  return `trk_${Date.now()}_${Math.random().toString(36).slice(2,8)}`;
}

function normalizeTrackerLocalRow(row){
  const out = { ...(row || {}) };
  if(!out.id) out.id = makeLocalTrackerId();
  if(!out.sync_id && String(out.id || "").startsWith("sync_")) out.sync_id = out.id;
  if(!out.created_at && out.bet_date){
    out.created_at = new Date(String(out.bet_date).slice(0,10) + "T12:00:00").toISOString();
  }
  if(!out.created_at){
    out.created_at = new Date().toISOString();
  }
  out.odds = Number(out.odds || 0);
  out.stake = Number(out.stake || 0);
  out.result = out.result || "pending";
  out.match = out.match || "";
  out.market = out.market || "";
  return out;
}

function mergeTrackerRows(localRows, cloudRows){
  const map = new Map();
  (localRows || []).map(normalizeTrackerLocalRow).forEach(row=>{
    map.set(String(row.sync_id || row.id), row);
  });
  (cloudRows || []).map(normalizeTrackerLocalRow).forEach(row=>{
    map.set(String(row.sync_id || row.id), row);
  });
  return Array.from(map.values());
}

async function readTrackerRowsCloudMerged(){
  const localRows = readTrackerRows();
  if(!isAdminSyncEnabled()) return localRows;

  try{
    const { data, error } = await client
      .from("tdt_tracker")
      .select("*")
      .like("sync_id", "sync_%")
      .order("created_at", { ascending: true });

    if(error) throw error;

    const cloudRows = (Array.isArray(data) ? data : []).map((row)=> normalizeTrackerLocalRow({
      id: row.sync_id || row.id || makeLocalTrackerId(),
      sync_id: row.sync_id || row.id || null,
      match: row.match || "",
      market: row.market || "",
      odds: row.odds,
      stake: row.stake,
      result: row.result,
      bet_date: row.bet_date || null,
      created_at: row.created_at || null,
      bookie: row.bookie || null,
      profit: row.profit ?? null
    }));

    const merged = mergeTrackerRows(localRows, cloudRows);
    writeTrackerRows(merged);
    return merged;
  }catch(e){
    console.error("Tracker cloud read failed", e);
    return localRows;
  }
}


function applyLayout(mode){
  document.body.classList.remove("layout-compact","layout-wide");
  document.body.classList.add(mode === "wide" ? "layout-wide" : "layout-compact");
  localStorage.setItem("layout_mode", mode);
  if(btnCompact) btnCompact.classList.toggle("active", mode !== "wide");
  if(btnWide) btnWide.classList.toggle("active", mode === "wide");
}

(function initLayoutMode(){
  const saved = localStorage.getItem("layout_mode");
  if(saved === "wide" || saved === "compact"){
    applyLayout(saved);
  }else{
    // Default: compact on small screens, wide on desktop
    applyLayout(window.innerWidth >= 950 ? "wide" : "compact");
  }
  if(btnCompact) btnCompact.addEventListener("click", ()=>applyLayout("compact"));
  if(btnWide) btnWide.addEventListener("click", ()=>applyLayout("wide"));
})();

// (Install App / PWA install button removed for now)

const bankrollElem=document.getElementById("bankroll");
const profitElem=document.getElementById("profit");
const roiElem=document.getElementById("roi");
const winrateElem=document.getElementById("winrate");
const winsElem=document.getElementById("wins");
const lossesElem=document.getElementById("losses");
const avgOddsElem=document.getElementById("avgOdds");
const profitCard=document.getElementById("profitCard");

// Track which feed items have been added to the tracker (prevents duplicate clicks + changes button UI)
const addedKeys = new Set();

const FREE_VISIBLE_COUNT = 3;
const FREE_DELAY_MINUTES = 10;
const NEW_BET_ALERTS_KEY = "tdt_new_bet_alerts_enabled";

function makeBetKey(row){
  const match = (row?.match ?? "").toString().trim();
  const market = (row?.market ?? "").toString().trim();
  const odds = (row?.odds ?? "").toString().trim();
  const dateKey = (row?.bet_date ?? row?.created_at ?? "").toString().trim();
  return `k:${match}|${market}|${odds}|${dateKey}`;
}

function getBetPublicState(row, idx){
  if(vipActive){
    return { locked:false, reason:"vip", unlocksAt:null, minutesLeft:0 };
  }

  if(idx >= FREE_VISIBLE_COUNT){
    return { locked:true, reason:"vip-limit", unlocksAt:null, minutesLeft:0 };
  }

  const createdRaw = row?.created_at || row?.bet_date;
  const createdAt = createdRaw ? new Date(createdRaw) : null;
  if(!createdAt || Number.isNaN(createdAt.getTime())){
    return { locked:false, reason:"public", unlocksAt:null, minutesLeft:0 };
  }

  const unlocksAt = new Date(createdAt.getTime() + FREE_DELAY_MINUTES * 60 * 1000);
  const remainingMs = unlocksAt.getTime() - Date.now();
  const minutesLeft = Math.max(1, Math.ceil(remainingMs / 60000));
  if(remainingMs > 0){
    return { locked:true, reason:"delay", unlocksAt, minutesLeft };
  }

  return { locked:false, reason:"public", unlocksAt:null, minutesLeft:0 };
}

function teaserCopyForLockedBet(row, state){
  const valueRaw = row?.value_pct ?? row?.value_percent ?? row?.value_percentage ?? row?.value;
  const valueText = valueRaw != null ? `${Number(valueRaw).toFixed(1)}% value` : 'High-value edge';
  if(state?.reason === 'delay'){
    return `Free unlock in ${state.minutesLeft} min • ${valueText}`;
  }
  return `VIP only • ${valueText} • market hidden`;
}

function formatUnlockLabel(state){
  if(!state?.unlocksAt) return 'VIP only';
  return `Unlocks ${state.unlocksAt.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})}`;
}

// Top navigation tabs
const tabTdtTrackerEl = document.getElementById("tabTdtTracker");
const tdtTrackerSectionEl = document.getElementById("tdtTrackerSection");
const tabHistoryEl = document.getElementById("tabHistory");
const historySectionEl = document.getElementById("historySection");
const tabTdtHistoryEl = document.getElementById("tabTdtHistory");
const tdtHistorySectionEl = document.getElementById("tdtHistorySection");
const tdtHistoryListEl = document.getElementById("tdtHistoryList");
const tdtHistoryBreakdownEl = document.getElementById("tdtHistoryBreakdown");
const tdtHistoryDailyBtn = document.getElementById("tdtHistoryDailyBtn");
const tdtHistoryWeeklyBtn = document.getElementById("tdtHistoryWeeklyBtn");
const tdtHistoryMonthlyBtn = document.getElementById("tdtHistoryMonthlyBtn");
const historyDaySelectEl = document.getElementById("historyDaySelect");
const historyListEl = document.getElementById("historyList");

const historySummaryEl = document.getElementById("historySummary");
const historyRefreshEl = document.getElementById("historyRefresh");

let currentTopTab = "bets"; // 'bets' | 'tracker' | 'tdt' | 'history'
let trackerRowsCache = [];
let historyMode = "personal";

tabBets.onclick=()=>switchTab("bets");
tabTracker.onclick=()=>{
  if(!vipActive){
    openVipModal();
    return;
  }
  switchTab("tracker");
};
if(tabTdtTrackerEl) tabTdtTrackerEl.onclick=()=>switchTab("tdt");

// VIP events
if(vipButtonEl) vipButtonEl.addEventListener('click',(e)=>{ e.preventDefault(); openVipModal(); });
if(vipCloseEl) vipCloseEl.addEventListener('click',closeVipModal);
if(vipModalEl) vipModalEl.addEventListener('click',(e)=>{ if(e.target===vipModalEl) closeVipModal(); });
if(vipMonthlyEl) vipMonthlyEl.addEventListener('click',()=>startCheckout('monthly'));
if(vipYearlyEl) vipYearlyEl.addEventListener('click',()=>startCheckout('yearly'));
if(vipRestoreEl) vipRestoreEl.addEventListener('click',()=>forceVipRefreshNow());
if(vipForgotEl) vipForgotEl.addEventListener('click',forgotVipPassword);
const vipPromoBtnEl = document.getElementById('vipPromoBtn');
if(vipPromoBtnEl) vipPromoBtnEl.addEventListener('click',(e)=>{ e.preventDefault(); openVipModal(); });
const notifyToggleBtnEl = document.getElementById('notifyToggleBtn');
if(notifyToggleBtnEl) notifyToggleBtnEl.addEventListener('click', toggleBetAlerts);

// On load: check VIP status (if email saved), then render.
checkVIP().then(async ()=>{
  // ensure tabs reflect VIP lock
  setVipUI(vipActive,(localStorage.getItem('vip_email')||'').trim());
  if(!vipActive && shouldTryVipFinalize()){
    await pollVipAfterCheckout();
  }
  refreshAdminBadgeUI();
  // re-render bets so blur/limits apply
  await loadBets();
  if(vipActive){
    const promoEl = document.getElementById('vipPromo');
    if(promoEl) promoEl.style.display = 'none';
  }else{
    loadVipPromoProof();
  }
  updateBetAlertUI();
  registerServiceWorker();
});

function switchTab(tab){
  currentTopTab = tab;
  initChartTabs();

  betsSection.style.display=(tab==="bets")?"block":"none";
  trackerSection.style.display=(tab==="tracker")?"block":"none";
  if(tdtTrackerSectionEl) tdtTrackerSectionEl.style.display=(tab==="tdt")?"block":"none";

  tabBets.classList.toggle("active",tab==="bets");
  tabTracker.classList.toggle("active",tab==="tracker");
  if(tabTdtTrackerEl) tabTdtTrackerEl.classList.toggle("active",tab==="tdt");

  if(tab==="tracker"){
    loadTracker();
    return;
  }
  if(tab==="tdt"){
    loadTdtTracker();
    return;
  }
}


async function loadBets(){
  addedKeys.clear();
  try{
    const localRows = await readTrackerRowsCloudMerged();
    localRows.forEach(r => addedKeys.add(makeBetKey(r)));
  }catch(e){}

  const {data} = await client.from("value_bets_feed").select("*").order("value_pct",{ascending:false,nullsFirst:false}).order("created_at",{ascending:false});
  betsGrid.innerHTML="";
  const betsTable=document.getElementById('betsTable');
  const betsTbody=betsTable ? betsTable.querySelector('tbody') : null;
  if(betsTbody) betsTbody.innerHTML = "";

  const active=(data||[]).filter(isValueBetActiveToday);
  if(!active.length){
    betsGrid.innerHTML = `<div class="card">No bets for today.</div>`;
    notifyForNewVisibleBets([]);
    return;
  }

  const visibleForAlerts = [];

  (active || []).forEach((row, idx)=>{
    const state = getBetPublicState(row, idx);
    const locked = !!state.locked;
    const key = makeBetKey(row);
    const isAdded = addedKeys.has(key);
    if(!locked) visibleForAlerts.push(row);

    const betDate = row.bet_date || (row.created_at ? new Date(row.created_at).toLocaleDateString('en-GB',{day:'2-digit',month:'short'}) : '');
    const val = (row.value_pct ?? row.value_percent ?? row.value_percentage ?? row.value);
    const valNum = val != null ? Number(val) : null;
    const valTxt = valNum != null && !Number.isNaN(valNum) ? valNum.toFixed(1)+'%' : '—';
    const valueClass = valNum != null && !Number.isNaN(valNum)
      ? (valNum >= 6 ? ' value-high' : (valNum >= 3 ? ' value-medium' : ' value-low'))
      : '';
    const teaser = teaserCopyForLockedBet(row, state);
    const unlockLabel = formatUnlockLabel(state);

    betsGrid.innerHTML += `
<div class="bet-lock-wrap">
  <div class="card bet-card ${row.high_value ? 'bet-card--hv' : ''} ${locked ? 'bet-card--locked' : ''}">
    <div class="bet-teaser">
      <h3 class="bet-title">${escapeHtml(row.match || '')}</h3>
      <span class="bet-date">${escapeHtml(betDate)}</span>
      <div class="bet-meta">
        ${locked ? `<span class="bet-market bet-market--locked">🔒 Hidden market</span>` : `<span class="bet-market">${escapeHtml(row.market || '')}</span>`}
      </div>
      ${locked ? `<div class="vip-teaser-line">${escapeHtml(teaser)}</div><div class="vip-teaser-subline">${escapeHtml(unlockLabel)}</div>` : `${row.bookie ? `<div class="bet-bookie">Bookie: ${escapeHtml(row.bookie)}</div>` : ''}`}
    </div>
    <div class="bet-details">
      <div class="bet-footer">
        <div class="bet-left">
          <span class="odds-badge">Odds <strong>${escapeHtml(String(row.odds ?? ''))}</strong></span>
          <span class="stat-chip${valueClass}"><span class="stat-chip__k">Value</span><span class="stat-chip__v">${valTxt}</span></span>
        </div>
        <button class="bet-btn ${isAdded ? 'added' : ''}" ${(isAdded || locked) ? 'disabled' : ''} ${locked ? '' : `onclick='addToTracker(this, ${JSON.stringify(row)})'`}>${locked ? '🔒 VIP' : (isAdded ? 'Added' : 'Add')}</button>
      </div>
    </div>
  </div>
  ${locked ? '<button class="vip-overlay" type="button" data-open-vip="1">🔒 Unlock VIP</button>' : ''}
</div>`;

    if(betsTbody){
      betsTbody.innerHTML += `
      <tr class="${locked ? 'bet-row--locked' : ''}">
        <td><b>${escapeHtml(row.match||'')}</b></td>
        <td>${locked ? '<span class="table-lock-copy">Hidden for VIP</span>' : escapeHtml(row.market||'')}</td>
        <td>${locked ? '—' : escapeHtml(row.bookie||'—')}</td>
        <td><span class="pill">${escapeHtml(String(row.odds??''))}</span></td>
        <td><span class="pill${valueClass}">${escapeHtml(valTxt)}</span></td>
        <td>${escapeHtml(betDate)}</td>
        <td>
          <button class="btn ${isAdded ? 'added' : ''}" ${(isAdded || locked) ? 'disabled' : ''} ${locked ? '' : `onclick='addToTracker(this, ${JSON.stringify(row)})'`}>${locked ? '🔒 VIP' : (isAdded ? 'Added' : 'Add')}</button>
        </td>
      </tr>`;
    }
  });

  document.querySelectorAll('[data-open-vip="1"]').forEach(el=>{
    el.addEventListener('click', openVipModal);
  });

  notifyForNewVisibleBets(visibleForAlerts);
}


async function addToTracker(btn, row){
  const key = makeBetKey(row);
  if(addedKeys.has(key)) return;

  if(!vipActive){
    openVipModal();
    return;
  }

  if(btn){
    btn.disabled = true;
    btn.textContent = 'Adding…';
  }

  const rows = readTrackerRows();
  const newRow = {
    id: makeLocalTrackerId(),
    sync_id: isAdminSyncEnabled() ? makeSyncId() : null,
    match: row.match,
    market: row.market,
    odds: Number(row.odds),
    stake: 10,
    result: "pending",
    created_at: new Date().toISOString(),
    bet_date: row.bet_date || null,
    bookie: row.bookie || null
  };
  rows.push(newRow);
  writeTrackerRows(rows);
  if(isAdminSyncEnabled()){
    try{ await upsertTdtMirror(newRow); }catch(e){ console.error(e); }
  }

  addedKeys.add(key);
  if(btn){
    btn.textContent = 'Added';
    btn.classList.add('added', 'flash');
    setTimeout(()=>btn.classList.remove('flash'), 700);
    btn.disabled = true;
  }
  loadTracker();
}


// ===== Insights (dropdown) =====
const insightStore = {
  bestMarket: { label: "Best Market", value: "—" },
  worstMarket: { label: "Worst Market", value: "—" },
  bestMonth:  { label: "Best Month",  value: "—" },
  worstMonth: { label: "Worst Month", value: "—" },
};

function setInsight(key, value){
  if(!insightStore[key]) return;
  insightStore[key].value = value;
  const hidden = document.getElementById(key);
  if(hidden) hidden.textContent = value;
}

function updateInsightUI(){
  const sel = document.getElementById("insightSelect");
  const labelEl = document.getElementById("insightLabel");
  const valueEl = document.getElementById("insightValue");
  if(!sel || !labelEl || !valueEl) return;
  const key = sel.value || "bestMarket";
  labelEl.textContent = insightStore[key]?.label || "Insights";
  valueEl.textContent = insightStore[key]?.value || "—";
}

document.addEventListener("change", (e)=>{
  if(e.target && e.target.id === "insightSelect"){
    updateInsightUI();
  }
});


// ===== Tracker Filters (Bet Results) =====
let trackerAllRows = [];

function _rowGameDateISO(row){
  const raw = row.match_date_date || row.match_date || row.bet_date || row.created_at;
  if(!raw) return "";
  const d = new Date(raw);
  if(isNaN(d.getTime())) return "";
  return d.toISOString().slice(0,10); // YYYY-MM-DD
}

function _applyTrackerFilters(rows){
  const dateEl = document.getElementById("filterDate");
  const marketEl = document.getElementById("filterMarket");
  const dateVal = dateEl ? (dateEl.value || "") : "";
  const marketVal = marketEl ? (marketEl.value || "").trim().toLowerCase() : "";

  return (rows || []).filter(r=>{
    // date filter
    if(dateVal){
      const iso = _rowGameDateISO(r);
      if(iso !== dateVal) return false;
    }
    // market filter (matches market OR match text)
    if(marketVal){
      const m = (r.market || "").toLowerCase();
      const match = (r.match || "").toLowerCase();
      if(!m.includes(marketVal) && !match.includes(marketVal)) return false;
    }
    return true;
  });
}

function _buildTrackerTableHTML(rows){
  let html = `<table class="myt-table">
    <tr>
      <th class="date-col hidden-date-col">Date</th>
      <th>Match</th>
      <th>Market</th>
      <th>Stake</th>
      <th>Odds</th>
      <th>Result</th>
      <th class="profit-col">Profit</th>
    </tr>`;
  (rows || []).forEach(row=>{
    const stakeVal = row.stake ?? 0;
    const oddsVal = row.odds ?? 0;
    const res = row.result || "pending";
    let profit = 0;
    if(res === "won") profit = (row.profit != null ? row.profit : Number(row.stake||0) * (Number(row.odds||0) - 1));
    if(res === "lost") profit = (row.profit != null ? row.profit : -Number(row.stake||0));
    const gameDate = row.match_date_date || row.bet_date || row.created_at;
    html += `<tr>
      <td class="date-col hidden-date-col">${fmtDayLabel(gameDate)}</td>
      <td class="myt-match">${row.match || ""}</td>
      <td class="myt-market">${row.market || ""}</td>
      <td><input class="myt-input" type="number" value="${stakeVal}" data-id="${row.id}" data-field="stake"></td>
      <td><input class="myt-input" type="number" step="0.01" value="${oddsVal}" data-id="${row.id}" data-field="odds"></td>
      <td>
        <select class="result-select result-${res}" data-id="${row.id}" data-field="result">
          <option value="pending" ${res==="pending"?"selected":""}>pending</option>
          <option value="won" ${res==="won"?"selected":""}>won</option>
          <option value="lost" ${res==="lost"?"selected":""}>lost</option>
        </select>
      </td>
      <td class="profit-col"><span class="${profit>0?'profit-win':profit<0?'profit-loss':''}">£${profit.toFixed(2)}</span></td>
    </tr>`;
  });
  html += `</table>`;
  return html;
}

function _renderFilteredTrackerTable(){
  const tableEl = document.getElementById("trackerTable");
  const countEl = document.getElementById("betCount");
  if(!tableEl) return;

  const filtered = _applyTrackerFilters(trackerAllRows);
  tableEl.innerHTML = _buildTrackerTableHTML(filtered);
  if(countEl) countEl.textContent = filtered.length;

  // re-bind inline input/select listeners for edited rows
  bindTrackerTableInputs();
}


function bindTrackerTableInputs(){
  const tableEl = document.getElementById("trackerTable");
  if(!tableEl) return;

  tableEl.querySelectorAll('input[data-field="stake"]').forEach(el=>{
    el.addEventListener('change', ()=> updateStake(el.dataset.id, el.value));
  });
  tableEl.querySelectorAll('input[data-field="odds"]').forEach(el=>{
    el.addEventListener('change', ()=> updateOdds(el.dataset.id, el.value));
  });
  tableEl.querySelectorAll('select[data-field="result"]').forEach(el=>{
    el.addEventListener('change', ()=> updateResult(el.dataset.id, el.value));
  });
}

let _filtersWired = false;
function wireTrackerFilters(){
  if(_filtersWired) return;
  _filtersWired = true;

  const dateEl = document.getElementById("filterDate");
  const marketEl = document.getElementById("filterMarket");
  const todayBtn = document.getElementById("todayToggle");
  const clearBtn = document.getElementById("clearFilters");

  if(dateEl) dateEl.addEventListener("change", _renderFilteredTrackerTable);
  if(marketEl) marketEl.addEventListener("input", _renderFilteredTrackerTable);

  if(todayBtn){
    todayBtn.addEventListener("click", ()=>{
      if(dateEl){
        const today = new Date();
        dateEl.value = today.toISOString().slice(0,10);
      }
      _renderFilteredTrackerTable();
    });
  }

  if(clearBtn){
    clearBtn.addEventListener("click", ()=>{
      if(dateEl) dateEl.value = "";
      if(marketEl) marketEl.value = "";
      _renderFilteredTrackerTable();
    });
  }
}

let dailyChart;
let monthlyChart;
let marketChart;

function fmtDayLabel(d){
  if(!d) return "";
  const dt = new Date(d);
  if(Number.isNaN(dt.getTime())) return String(d);
  return dt.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
}

function escapeHtml(str){
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


let vipPromoChart;

function notificationsEnabled(){
  return localStorage.getItem(NEW_BET_ALERTS_KEY) === '1';
}

function updateBetAlertUI(){
  const statusEl = document.getElementById('notifyStatus');
  const btnEl = document.getElementById('notifyToggleBtn');
  const enabled = notificationsEnabled();
  if(statusEl){
    if(!('Notification' in window)) statusEl.textContent = 'Alerts unsupported';
    else statusEl.textContent = enabled ? 'Alerts on' : 'Alerts off';
  }
  if(btnEl){
    btnEl.textContent = enabled ? 'Alerts enabled' : 'Turn on new bet alerts';
  }
}

async function registerServiceWorker(){
  if(!('serviceWorker' in navigator)) return null;
  try{
    return await navigator.serviceWorker.register('/sw.js');
  }catch(e){
    console.error('Service worker registration failed', e);
    return null;
  }
}

async function toggleBetAlerts(){
  const statusEl = document.getElementById('notifyStatus');
  if(!('Notification' in window)){
    if(statusEl) statusEl.textContent = 'Alerts unsupported on this browser';
    updateBetAlertUI();
    return;
  }
  const current = notificationsEnabled();
  if(current){
    localStorage.setItem(NEW_BET_ALERTS_KEY, '0');
    if(statusEl) statusEl.textContent = 'Alerts off';
    updateBetAlertUI();
    return;
  }
  let permission = Notification.permission;
  if(permission === 'default'){
    permission = await Notification.requestPermission();
  }
  if(permission === 'granted'){
    localStorage.setItem(NEW_BET_ALERTS_KEY, '1');
    updateBetAlertUI();
    if(statusEl) statusEl.textContent = 'Alerts on · sending test';
    await sendBetNotification('Top Daily Tips alerts enabled', 'You will get alerts here when a new visible bet appears.');
    return;
  }
  if(statusEl) statusEl.textContent = permission === 'denied' ? 'Browser blocked alerts' : 'Alerts not enabled';
  updateBetAlertUI();
}

async function sendBetNotification(title, body){
  if(!notificationsEnabled() || !('Notification' in window) || Notification.permission !== 'granted') return;
  try{
    const reg = await registerServiceWorker();
    if(reg && reg.showNotification){
      await reg.showNotification(title, { body, icon:'/icons/icon-192.png', badge:'/icons/icon-192.png', tag:'tdt-new-bet' });
      return;
    }
  }catch(e){
    console.error(e);
  }
  try{
    new Notification(title, { body });
  }catch(e){}
}

function notifyForNewVisibleBets(rows){
  const seenKey = 'tdt_seen_visible_bets';
  const nextIds = (rows || []).map(makeBetKey);
  const prevIds = JSON.parse(localStorage.getItem(seenKey) || '[]');
  const prevSet = new Set(prevIds);
  const fresh = (rows || []).filter(r => !prevSet.has(makeBetKey(r)));
  localStorage.setItem(seenKey, JSON.stringify(nextIds));
  if(!fresh.length) return;
  const latest = fresh[0];
  sendBetNotification('New Top Daily Tips bet', `${latest.match || 'New bet'} • ${latest.odds || ''}`);
}

function renderVipPromoChart(rows){
  const canvas = document.getElementById('vipPromoChart');
  if(!canvas || typeof Chart === 'undefined') return;
  const safeRows = Array.isArray(rows) ? rows : [];
  const labels = [];
  const points = [];
  let running = 0;
  let lastDayKey = '';

  safeRows.slice(-200).forEach((row)=>{
    running += rowProfit({
      stake: Number(row.stake || 0),
      odds: Number(row.odds || 0),
      result: row.result || 'pending'
    });
    const dayKey = fmtDayLabel(row.match_date_date || row.bet_date || row.created_at);
    if(dayKey !== lastDayKey){
      labels.push(dayKey);
      points.push(running);
      lastDayKey = dayKey;
    }else{
      points[points.length - 1] = running;
    }
  });

  if(vipPromoChart) vipPromoChart.destroy();
  vipPromoChart = new Chart(canvas.getContext('2d'), {
    type:'line',
    data:{ labels, datasets:[{ data:points, tension:0.3, fill:true, backgroundColor:'rgba(34,197,94,0.10)', borderColor:'#22c55e', borderWidth:2, pointRadius:(ctx)=>{ const len = Array.isArray(ctx.dataset?.data) ? ctx.dataset.data.length : 0; if(len <= 1) return len ? 3 : 0; return (ctx.dataIndex === 0 || ctx.dataIndex === len - 1) ? 3 : 0; } }] },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{display:false} }, scales:{ x:{ ticks:{ maxTicksLimit:6 } }, y:{ ticks:{ callback:(v)=> `£${v}` } } } }
  });
}

async function loadVipPromoProof(){
  const statsEl = document.getElementById('vipPromoStats');
  try{
    const { data, error } = await client
      .from('tdt_tracker')
      .select('*')
      .order('created_at', { ascending: true })
      .limit(200);
    if(error) throw error;

    const rows = Array.isArray(data) ? data : [];
    const settled = rows.filter(r => (r.result || 'pending') !== 'pending');

    if(!settled.length){
      if(statsEl) statsEl.textContent = 'Official proof updates soon';
      renderVipPromoChart([]);
      return;
    }

    let wins = 0;
    let losses = 0;
    let stake = 0;
    let profit = 0;
    settled.forEach((row)=>{
      const result = row.result || 'pending';
      if(result === 'won') wins += 1;
      if(result === 'lost') losses += 1;
      stake += Number(row.stake || 0);
      profit += rowProfit({
        stake: Number(row.stake || 0),
        odds: Number(row.odds || 0),
        result
      });
    });

    const roi = stake ? ((profit / stake) * 100) : 0;
    if(statsEl){
      const profitLabel = `${profit >= 0 ? '+' : ''}£${profit.toFixed(2)}`;
      statsEl.textContent = `${settled.length} official bets • ${wins}-${losses} • ${profitLabel} profit • ${roi.toFixed(1)}% ROI`;
    }
    renderVipPromoChart(settled);
  }catch(err){
    console.error('VIP proof load failed', err);
    if(statsEl) statsEl.textContent = 'Official TDT proof unavailable right now';
  }
}

async function loadTracker(){
const rows = (await readTrackerRowsCloudMerged()).slice().sort((a,b)=> new Date(a.created_at||0) - new Date(b.created_at||0));
trackerRowsCache = rows;
trackerAllRows = rows;

// Keep Value Bets \"Added\" state synced with tracker rows
addedKeys.clear();
rows.forEach(r => addedKeys.add(makeBetKey(r)));
wireTrackerFilters();

let start=parseFloat(document.getElementById("startingBankroll").value);
let bankroll=start,profit=0,wins=0,losses=0,totalStake=0,totalOdds=0,history=[];
let dailyLabels=[];
let dayKeys=[];

	const tableRows = [];

rows.forEach(row=>{
let p=0;
if(row.result==="won"){p=row.stake*(row.odds-1);wins++;}
if(row.result==="lost"){p=-row.stake;losses++;}
profit+=p;totalStake+=row.stake;totalOdds+=row.odds;
bankroll=start+profit;

const gameDate = row.match_date_date || row.bet_date || row.created_at;
const dayKey = fmtDayLabel(gameDate);
const prevDayKey = dayKeys.length ? dayKeys[dayKeys.length - 1] : "";
dayKeys.push(dayKey);
dailyLabels.push(dayKey !== prevDayKey ? dayKey : "");
history.push(bankroll);

tableRows.push(`<tr>
<td class="date-col hidden-date-col">${fmtDayLabel(gameDate)}</td>
<td class="myt-match">${row.match}</td>
<td class="myt-market">${row.market || ""}</td>
<td><input class="myt-input" type="number" value="${row.stake}" onchange="updateStake('${row.id}',this.value)"></td>
<td><input class="myt-input" type="number" step="0.01" value="${row.odds ?? 0}" onchange="updateOdds('${row.id}',this.value)"></td>
<td>
<select 
class="result-select result-${row.result}" 
onchange="updateResult('${row.id}',this.value)">
<option value="pending" ${row.result==="pending"?"selected":""}>pending</option>
<option value="won" ${row.result==="won"?"selected":""}>won</option>
<option value="lost" ${row.result==="lost"?"selected":""}>lost</option>
<option value="delete">🗑 delete</option>
</select>
</td>
<td class="profit-col">
<span class="${p>0?'profit-win':p<0?'profit-loss':''}">£${p.toFixed(2)}</span>
</td>
</tr>`);
});

let html="<table class='myt-table'><tr><th class='date-col hidden-date-col'>Date</th><th>Match</th><th>Market</th><th>Stake</th><th>Odds</th><th>Result</th><th class='profit-col'>Profit</th></tr>";
html += tableRows.reverse().join("");
html+="</table>";
trackerTable.innerHTML=html;

bankrollElem.innerText=bankroll.toFixed(2);
profitElem.innerText=profit.toFixed(2);
roiElem.innerText=totalStake?((profit/totalStake)*100).toFixed(1):0;
winrateElem.innerText=(wins+losses)?((wins/(wins+losses))*100).toFixed(1):0;
const wonLostElem = document.getElementById("wonLost");
if(wonLostElem){
  wonLostElem.innerText = `${wins}-${losses}`;
}

const totalBets = rows.length;
const totalElem = document.getElementById("totalBets");
if(totalElem) totalElem.innerText = totalBets;
const totalStakedCard = document.getElementById("totalStakedCard");
if(totalStakedCard){
  totalStakedCard.innerText = totalStake.toFixed(2);
}


avgOddsElem.innerText=rows.length?(totalOdds/rows.length).toFixed(2):0;

profitCard.classList.remove("glow-green","glow-red");
if(profit>0) profitCard.classList.add("glow-green");
if(profit<0) profitCard.classList.add("glow-red");


renderDailyChart(history, dailyLabels, dayKeys);

// ---- Monthly & Market analytics (tabs + mini summary) ----
const countElem = document.getElementById("betCount");
if(countElem) countElem.textContent = String(rows.length);

// Monthly profit aggregation (ROI version)
const monthMap = {};
const monthStakeMap = {};
const monthWinsMap = {};
const monthLossesMap = {};
const monthBetsMap = {};

rows.forEach(r=>{
  const d = new Date(r.created_at);
  const key = d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0");
  monthMap[key] = (monthMap[key]||0) + rowProfit(r);
  monthStakeMap[key] = (monthStakeMap[key]||0) + Number(r.stake || 0);
  monthBetsMap[key] = (monthBetsMap[key]||0) + 1;
  if(r.result === "won") monthWinsMap[key] = (monthWinsMap[key]||0) + 1;
  if(r.result === "lost") monthLossesMap[key] = (monthLossesMap[key]||0) + 1;
});

const monthKeys = Object.keys(monthMap).sort();

const monthLabels = monthKeys.map(k=>{
  const [y,m]=k.split("-");
  return new Date(parseInt(y), parseInt(m)-1, 1)
    .toLocaleDateString('en-GB',{month:'short', year:'2-digit'});
});

const monthlyProfit = monthKeys.map(k=> monthMap[k]);
const monthlyROI = monthKeys.map(k=>{
  const stake = monthStakeMap[k] || 0;
  return stake ? (monthMap[k] / stake) * 100 : 0;
});
const monthlyBets = monthKeys.map(k=> monthBetsMap[k] || 0);
const monthlyWinRate = monthKeys.map(k=>{
  const wins = monthWinsMap[k] || 0;
  const losses = monthLossesMap[k] || 0;
  return (wins + losses) ? (wins / (wins + losses)) * 100 : 0;
});

renderMonthlyChart(monthlyProfit, monthlyROI, monthLabels);

  let breakdownHTML = "<table><tr><th>Month</th><th>Total Bets</th><th>Win Rate</th><th>Profit</th><th>ROI</th></tr>";
  monthKeys.forEach((k,i)=>{
    const p = monthlyProfit[i];
    const r = monthlyROI[i];
    const b = monthlyBets[i];
    const w = monthlyWinRate[i];
    breakdownHTML += `<tr>
      <td>${monthLabels[i]}</td>
      <td>${b}</td>
      <td>${w.toFixed(1)}%</td>
      <td class="${p>0?'profit-win':p<0?'profit-loss':''}">£${p.toFixed(2)}</td>
      <td>${r.toFixed(1)}%</td>
    </tr>`;
  });
  breakdownHTML += "</table>";
  const tableEl = document.getElementById("monthlyTable");
  if(tableEl) tableEl.innerHTML = breakdownHTML;

// Market profit aggregation
const marketMap = {};
const marketWL = {}; // {market:{wins,losses,pending,bets}}
rows.forEach(r=>{
  const mk = (r.market && String(r.market).trim()) ? String(r.market).trim() : "Unknown";
  marketMap[mk] = (marketMap[mk]||0) + rowProfit(r);

  if(!marketWL[mk]) marketWL[mk] = {wins:0,losses:0,pending:0,bets:0};
  marketWL[mk].bets += 1;
  const res = (r.result || "pending").toLowerCase();
  if(res === "won") marketWL[mk].wins += 1;
  else if(res === "lost") marketWL[mk].losses += 1;
  else marketWL[mk].pending += 1;
});

// Build win% series (resolved only); show top 8 by bet count
let entries = Object.entries(marketWL);
entries.sort((a,b)=>(b[1].bets)-(a[1].bets));
entries = entries.slice(0,8);

const labels = entries.map(e=>e[0]);
const totals = entries.map(e=>({ bets:e[1].bets, wins:e[1].wins, losses:e[1].losses }));
const winPct = entries.map(e=>{
  const resolved = e[1].wins + e[1].losses;
  return resolved ? (e[1].wins / resolved) * 100 : 0;
});
renderMarketChart(labels, winPct, totals);

// Mini summary
if(entries.length){
  const bestM = [...Object.entries(marketMap)].sort((a,b)=>b[1]-a[1])[0];
  const worstM = [...Object.entries(marketMap)].sort((a,b)=>a[1]-b[1])[0];
  setMiniValue("bestMarket", bestM[0]+":", (bestM[1] >= 0 ? "+£" : "-£") + Math.abs(bestM[1]).toFixed(2));
  setMiniValue("worstMarket", worstM[0]+":", (worstM[1] >= 0 ? "+£" : "-£") + Math.abs(worstM[1]).toFixed(2));
}
if(monthKeys.length){
  const monthEntries = monthKeys.map(k=>[k, monthMap[k]]);
  const bestMo = [...monthEntries].sort((a,b)=>b[1]-a[1])[0];
  const worstMo = [...monthEntries].sort((a,b)=>a[1]-b[1])[0];
  const fmtMonth = (k)=>{
    const [y,m]=k.split("-");
    return new Date(parseInt(y), parseInt(m)-1, 1).toLocaleDateString('en-GB',{month:'short', year:'2-digit'});
  };
  setMiniValue("bestMonth", fmtMonth(bestMo[0])+":", (bestMo[1] >= 0 ? "+£" : "-£") + Math.abs(bestMo[1]).toFixed(2));
  setMiniValue("worstMonth", fmtMonth(worstMo[0])+":", (worstMo[1] >= 0 ? "+£" : "-£") + Math.abs(worstMo[1]).toFixed(2));
}

}



async function updateOdds(id,val){
  const rows = readTrackerRows();
  const updated = rows.map(r => String(r.id)===String(id) ? { ...r, odds: parseFloat(val) || 0 } : r);
  writeTrackerRows(updated);
  loadTracker();
}

async function updateStake(id,val){

  const rows = readTrackerRows();
  const updated = rows.map(r => String(r.id)===String(id) ? { ...r, stake: parseFloat(val) || 0 } : r);
  writeTrackerRows(updated);
  const row = updated.find(r => String(r.id)===String(id));
  if(row && isAdminSyncEnabled()){
    try{ await upsertTdtMirror(row); }catch(e){ console.error(e); }
  }
  loadTracker();
}

async function updateResult(id,val){
  const rows = readTrackerRows();
  if(val==="delete"){
    if(!confirm("Delete this bet?")){loadTracker();return;}
    const row = rows.find(r => String(r.id)===String(id));
    writeTrackerRows(rows.filter(r => String(r.id)!==String(id)));
    if(row && isAdminSyncEnabled() && row.sync_id){
      try{ await deleteTdtMirror(row.sync_id); }catch(e){ console.error(e); }
    }
    loadBets();
  }else{
    const updated = rows.map(r => String(r.id)===String(id) ? { ...r, result: val } : r);
    writeTrackerRows(updated);
    const row = updated.find(r => String(r.id)===String(id));
    if(row && isAdminSyncEnabled()){
      try{ await upsertTdtMirror(row); }catch(e){ console.error(e); }
    }
  }
  loadTracker();
}





function sortTdtTable(key){
  if(tdtSortKey === key){
    tdtSortDir = tdtSortDir === "asc" ? "desc" : "asc";
  }else{
    tdtSortKey = key;
    tdtSortDir = key === "date" ? "asc" : "desc";
  }
  loadTdtTracker();
}



function getTdtRowDateValue(row){
  return row?.match_date_date || row?.bet_date || row?.created_at || '';
}

function getTdtRowDayKey(row){
  const raw = getTdtRowDateValue(row);
  const dt = new Date(raw);
  if(Number.isNaN(dt.getTime())) return String(raw || 'Unknown');
  const y = dt.getFullYear();
  const m = String(dt.getMonth()+1).padStart(2,'0');
  const d = String(dt.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}

function fmtTdtDayHeader(dayKey){
  const dt = new Date(`${dayKey}T12:00:00`);
  if(Number.isNaN(dt.getTime())) return dayKey;
  return dt.toLocaleDateString('en-GB',{ weekday:'short', day:'2-digit', month:'short' });
}

function getTdtSortValue(row, key){
  if(key === 'date') return new Date(getTdtRowDateValue(row) || 0).getTime() || 0;
  if(key === 'stake') return Number(row?.stake || 0);
  if(key === 'odds') return Number(row?.odds || 0);
  if(key === 'result'){
    const res = String(row?.result || 'pending').toLowerCase();
    return res === 'won' ? 2 : res === 'lost' ? 1 : 0;
  }
  return String(row?.[key] || '').toLowerCase();
}

function sortTdtRows(rows){
  const sorted = (Array.isArray(rows) ? rows.slice() : []);
  sorted.sort((a,b)=>{
    const av = getTdtSortValue(a, tdtSortKey);
    const bv = getTdtSortValue(b, tdtSortKey);
    if(av < bv) return tdtSortDir === 'asc' ? -1 : 1;
    if(av > bv) return tdtSortDir === 'asc' ? 1 : -1;
    return 0;
  });
  return sorted;
}

function tdtSortArrow(key){
  if(tdtSortKey !== key) return '↕';
  return tdtSortDir === 'asc' ? '▲' : '▼';
}


function updateTdtPerformanceBars({ profit, totalStake, wins, losses, resolvedCount, totalOdds }){
  const tdtRoiVal = totalStake ? ((profit / totalStake) * 100) : 0;
  const tdtWinrateVal = (wins + losses) ? ((wins / (wins + losses)) * 100) : 0;
  const tdtAvgOddsVal = resolvedCount ? (totalOdds / resolvedCount) : 0;

  const roiFill = document.getElementById("tdtRoiBarFill");
  const roiLabel = document.getElementById("tdtRoiBarLabel");
  if(roiFill && roiLabel){
    const width = Math.max(0, Math.min(100, Math.abs(tdtRoiVal)));
    roiFill.style.width = width + "%";
    roiFill.classList.remove("tdt-perf-fill--green", "tdt-perf-fill--red");
    roiFill.classList.add(tdtRoiVal >= 0 ? "tdt-perf-fill--green" : "tdt-perf-fill--red");
    roiLabel.textContent = `${tdtRoiVal.toFixed(1)}%`;
  }

  const winFill = document.getElementById("tdtWinrateBarFill");
  const winLabel = document.getElementById("tdtWinrateBarLabel");
  if(winFill && winLabel){
    const width = Math.max(0, Math.min(100, tdtWinrateVal));
    winFill.style.width = width + "%";
    winLabel.textContent = `${tdtWinrateVal.toFixed(1)}%`;
  }

  const oddsFill = document.getElementById("tdtAvgOddsBarFill");
  const oddsLabel = document.getElementById("tdtAvgOddsBarLabel");
  if(oddsFill && oddsLabel){
    const maxOdds = 5;
    const width = Math.max(0, Math.min(100, (tdtAvgOddsVal / maxOdds) * 100));
    oddsFill.style.width = width + "%";
    oddsLabel.textContent = tdtAvgOddsVal.toFixed(2);
  }
}

async function loadTdtTracker(){
  const tableEl = document.getElementById("tdtTrackerTable");
  try{
    const {data, error} = await client.from("tdt_tracker").select("*").order("created_at",{ascending:true});
    if(error) throw error;
    const rows = Array.isArray(data) ? data : [];
    tdtRowsCache = rows;

    let profit=0,wins=0,losses=0,totalStake=0,totalOdds=0,resolvedCount=0;

    rows.forEach(row=>{
      const result = String(row.result || 'pending').toLowerCase();
      const p = result==="won"
        ? (row.profit != null ? Number(row.profit) : Number(row.stake||0)*(Number(row.odds||0)-1))
        : result==="lost"
        ? (row.profit != null ? Number(row.profit) : -Number(row.stake||0))
        : 0;

      if(result==="won") wins++;
      if(result==="lost") losses++;
      if(result !== 'pending') resolvedCount++;
      profit += p;
      if(result !== 'pending'){
        totalStake += Number(row.stake || 0);
        totalOdds += Number(row.odds || 0);
      }
    });

    const sortedRows = sortTdtRows(rows);
    const groups = [];
    const map = new Map();
    sortedRows.forEach(row=>{
      const key = getTdtRowDayKey(row);
      if(!map.has(key)){
        const group = { key, rows: [], wins:0, losses:0, pending:0, settled:0 };
        map.set(key, group);
        groups.push(group);
      }
      const group = map.get(key);
      group.rows.push(row);
      const result = String(row.result || 'pending').toLowerCase();
      if(result === 'won'){ group.wins++; group.settled++; }
      else if(result === 'lost'){ group.losses++; group.settled++; }
      else { group.pending++; }
    });

    let html = `<div class="tdt-groups-wrap">`;

    groups.forEach((group, idx)=>{
      const dayWinrate = group.settled ? ((group.wins / group.settled) * 100).toFixed(0) : '0';
      html += `
        <div class="tdt-day-card">
          <button class="tdt-day-head" type="button" onclick="toggleTdtDay(this)">
            <div class="tdt-day-left">
              <div class="tdt-day-date">${escapeHtml(fmtTdtDayHeader(group.key))}</div>
              <div class="tdt-day-meta">${group.rows.length} bet${group.rows.length === 1 ? '' : 's'}</div>
            </div>
            <div class="tdt-day-right">
              <span class="tdt-day-chip win">Won ${group.wins}</span>
              <span class="tdt-day-chip loss">Lost ${group.losses}</span>
              <span class="tdt-day-chip ratio ${tdtWinrateClass(dayWinrate)}">Winrate ${dayWinrate}%</span>
              <span class="tdt-day-chevron">${idx === 0 ? '▼' : '▶'}</span>
            </div>
          </button>
          <div class="tdt-day-body" style="display:${idx === 0 ? 'block' : 'none'};">
            <div class="tdt-table-wrap">
              <table class="tdt-table tdt-table-fit">
                <thead>
                  <tr>
                    <th class="tdt-col-match sortable" onclick="sortTdtTable('match')">Match <span>${tdtSortArrow('match')}</span></th>
                    <th class="tdt-col-market sortable" onclick="sortTdtTable('market')">Market <span>${tdtSortArrow('market')}</span></th>
                    <th class="tdt-col-stake sortable" onclick="sortTdtTable('stake')">Stake <span>${tdtSortArrow('stake')}</span></th>
                    <th class="tdt-col-odds sortable" onclick="sortTdtTable('odds')">Odds <span>${tdtSortArrow('odds')}</span></th>
                    <th class="tdt-col-result sortable" onclick="sortTdtTable('result')">Result <span>${tdtSortArrow('result')}</span></th>
                  </tr>
                </thead>
                <tbody>
      `;

      group.rows.forEach(row=>{
        const result = String(row.result || 'pending').toLowerCase();
        const resultIcon = result === "won" ? "✅" : result === "lost" ? "❌" : "⏳";
        html += `
          <tr class="tdt-row ${result}">
            <td class="tdt-match">${escapeHtml(row.match || '')}</td>
            <td class="tdt-market">${escapeHtml(row.market || '')}</td>
            <td class="tdt-stake">£${Number(row.stake || 0).toFixed(2)}</td>
            <td class="tdt-odds">${row.odds != null && row.odds !== '' ? escapeHtml(String(row.odds)) : '-'}</td>
            <td class="tdt-result"><span class="tdt-result-icon ${result}">${resultIcon}</span></td>
          </tr>
        `;
      });

      html += `
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;

    if(tableEl) tableEl.innerHTML = rows.length ? html : '<div class="card">No official TDT results yet.</div>';

    const set=(id,v)=>{ const el=document.getElementById(id); if(el) el.innerText=v; };
    set("tdtProfit", profit.toFixed(2));
    set("tdtRoi", totalStake?((profit/totalStake)*100).toFixed(1):0);
    set("tdtWinrate", (wins+losses)?((wins/(wins+losses))*100).toFixed(1):0);
    set("tdtWonLost", `${wins}-${losses}`);
    set("tdtAvgOdds", resolvedCount?(totalOdds/resolvedCount).toFixed(2):0);
    set("tdtTotalBets", rows.length);
    set("tdtBetCount", rows.length);
    updateTdtPerformanceBars({ profit, totalStake, wins, losses, resolvedCount, totalOdds });
  }catch(err){
    if(tableEl) tableEl.innerHTML = '<div class="card">TDT Tracker table not ready yet.</div>';
  }
}





function toggleTdtDay(btn){
  const body = btn ? btn.nextElementSibling : null;
  const chev = btn ? btn.querySelector(".tdt-day-chevron") : null;
  if(!body) return;
  const isHidden = body.style.display === "none";
  body.style.display = isHidden ? "block" : "none";
  if(chev) chev.innerText = isHidden ? "▼" : "▶";
}

function tdtWinrateClass(rate){
  const n = Number(rate || 0);
  if(n <= 50) return "ratio--red";
  if(n <= 62) return "ratio--amber";
  return "ratio--green";
}

function toggleTdtTracker(){
  const wrapper = document.getElementById("tdtTrackerWrapper");
  const arrow = document.getElementById("tdtTrackerArrow");
  if(!wrapper || !arrow) return;
  if(wrapper.classList.contains("collapsed")){
    wrapper.classList.remove("collapsed");
    wrapper.classList.add("expanded");
    arrow.innerText="▲";
  }else{
    wrapper.classList.remove("expanded");
    wrapper.classList.add("collapsed");
    arrow.innerText="▼";
  }
}

function exportCSV(){
  const data = readTrackerRows();
  let csv="match,market,odds,stake,result\n";
  data.forEach(r=>{
    csv+=`${r.match},${r.market},${r.odds},${r.stake},${r.result}\n`;
  });
  const blob=new Blob([csv],{type:"text/csv"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;
  a.download="bet_tracker.csv";
  a.click();
}

loadBets();
loadTracker();


// Toggle with animation + memory
function toggleTracker(){
  const wrapper = document.getElementById("trackerWrapper");
  const arrow = document.getElementById("trackerArrow");

  if(wrapper.classList.contains("collapsed")){
    wrapper.classList.remove("collapsed");
    wrapper.classList.add("expanded");
    arrow.innerText="▲";
    localStorage.setItem("tracker_open","true");
  }else{
    wrapper.classList.remove("expanded");
    wrapper.classList.add("collapsed");
    arrow.innerText="▼";
    localStorage.setItem("tracker_open","false");
  }
}

// Restore state on load
document.addEventListener("DOMContentLoaded",function(){
  const wrapper=document.getElementById("trackerWrapper");
  const arrow=document.getElementById("trackerArrow");
  const open=localStorage.getItem("tracker_open");
  if(open==="true"){
    wrapper.classList.remove("collapsed");
    wrapper.classList.add("expanded");
    arrow.innerText="▲";
  }
});

// Extend loadTracker to update bet count
const originalLoadTracker = loadTracker;
loadTracker = async function(){
  await originalLoadTracker();
  const rows=document.querySelectorAll("#trackerTable table tr").length-1;
  const count=document.getElementById("betCount");
  if(count && rows>=0){count.innerText=rows;}
};




function renderDailyChart(history, labels, dayKeys){
  const el = document.getElementById("chart");
  if(!el) return;
  if(dailyChart) dailyChart.destroy();

  const safeHistory = Array.isArray(history) ? history : [];
  const safeDayKeys = Array.isArray(dayKeys) ? dayKeys : [];

  const daily = [];
  safeHistory.forEach((value, i)=>{
    const key = safeDayKeys[i];
    if(!key) return;
    const last = daily[daily.length - 1];
    if(last && last.key === key){
      last.value = Number(value || 0);
    }else{
      daily.push({ key, value: Number(value || 0) });
    }
  });

  function parseDay(rawKey){
    const raw = String(rawKey || "").trim();
    const m = raw.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if(!m) return null;
    return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12, 0, 0, 0);
  }
  function shortLabel(rawKey){
    const dt = parseDay(rawKey);
    return dt ? dt.toLocaleDateString("en-GB", { day: "2-digit", month: "short" }) : String(rawKey || "");
  }
  function fullLabel(rawKey){
    const dt = parseDay(rawKey);
    return dt ? dt.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : String(rawKey || "");
  }

  const total = daily.length;
  let interval = 1;
  if(total < 10) interval = 1;
  else if(total < 20) interval = 2;
  else if(total < 36) interval = 3;
  else if(total < 55) interval = 4;
  else interval = 5;

  const displayLabels = daily.map((item, i)=>{
    if(i === 0 || i === total - 1) return shortLabel(item.key);
    const dt = parseDay(item.key);
    const prev = i > 0 ? parseDay(daily[i - 1].key) : null;
    if(dt && prev && (dt.getMonth() !== prev.getMonth() || dt.getFullYear() !== prev.getFullYear())){
      return dt.toLocaleDateString("en-GB", { month: "short" });
    }
    return i % interval === 0 ? shortLabel(item.key) : "";
  });

  const ctx = el.getContext("2d");
  dailyChart = new Chart(ctx,{
    type:"line",
    data:{
      labels:displayLabels,
      datasets:[{
        data:daily.map(x => x.value),
        tension:0.28,
        fill:true,
        borderWidth:3,
        borderColor:"rgba(34,197,94,0.95)",
        backgroundColor:"rgba(34,197,94,0.14)",
        pointRadius:3,
        pointHoverRadius:5,
        pointHitRadius:14,
        pointBackgroundColor:"rgba(34,197,94,1)"
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      interaction:{mode:"nearest", intersect:false},
      plugins:{
        legend:{display:false},
        tooltip:{
          callbacks:{
            title:(items)=>{
              const i = items?.[0]?.dataIndex ?? 0;
              return fullLabel(daily[i]?.key || "");
            },
            label:(ctx)=>`Bankroll: £${Number(ctx.raw || 0).toFixed(2)}`
          }
        }
      },
      scales:{
        x:{
          ticks:{color:"rgba(226,232,240,0.78)", autoSkip:false, maxRotation:0, minRotation:0, padding:6},
          grid:{color:"rgba(255,255,255,0.04)"}
        },
        y:{
          ticks:{color:"rgba(226,232,240,0.78)", callback:(v)=>`£${Number(v).toFixed(0)}`},
          grid:{color:"rgba(255,255,255,0.05)"}
        }
      }
    }
  });
}


function renderMonthlyChart(profits, roi, labels){
  const el = document.getElementById("monthlyChart");
  if(!el) return;
  if(monthlyChart) monthlyChart.destroy();

  const maxROI = Math.max(...roi, 5);
  const minROI = Math.min(...roi, -5);
  const pad = 5;

  const ctx = el.getContext("2d");

  monthlyChart = new Chart(ctx,{
    type:"bar",
    data:{
      labels:labels,
      datasets:[{
        data:roi,
        borderRadius:10,
        barThickness:24,
        backgroundColor:profits.map(v=>{
          if(v>0) return "rgba(34,197,94,0.9)";
          if(v<0) return "rgba(239,68,68,0.9)";
          return "rgba(100,116,139,0.4)";
        })
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{
        y:{
          min: Math.floor(minROI - pad),
          max: Math.ceil(maxROI + pad),
          ticks:{callback:(v)=>v+"%"},
          grid:{color:"rgba(255,255,255,0.05)"}
        }
      }
    },
    plugins:[{
      afterDatasetsDraw(chart){
        const {ctx} = chart;
        chart.getDatasetMeta(0).data.forEach((bar,i)=>{
          const val = profits[i];
          if(val === 0) return;
          ctx.fillStyle="#fff";
          ctx.font="bold 13px system-ui";
          ctx.textAlign="center";
          ctx.fillText("£"+val.toFixed(2), bar.x, roi[i]>=0 ? bar.y-8 : bar.y+18);
        });
      }
    }]
  });
}


function renderMarketChart(labels, winPct, totals){
  const el = document.getElementById("marketChart");
  if(!el) return;
  if(marketChart) marketChart.destroy();

  const safeLabels = Array.isArray(labels) ? labels : [];
  const safePct = Array.isArray(winPct) ? winPct.map(v => Number(v || 0)) : [];
  const safeTotals = Array.isArray(totals) ? totals : [];

  const ctx = el.getContext("2d");
  marketChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: safeLabels,
      datasets: [{
        data: safePct,
        borderWidth: 0,
        borderRadius: 10,
        barThickness: 18,
        backgroundColor: safePct.map(v=>{
          if(v >= 55) return "rgba(34,197,94,0.85)";
          if(v >= 40) return "rgba(245,158,11,0.85)";
          return "rgba(239,68,68,0.85)";
        }),
        borderColor: safePct.map(v=>{
          if(v >= 55) return "#22c55e";
          if(v >= 40) return "#f59e0b";
          return "#ef4444";
        })
      }]
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: { left: 8, right: 14 } },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx)=>{
              const i = ctx.dataIndex;
              const pct = Number(ctx.raw || 0).toFixed(0) + "%";
              const t = safeTotals[i] ? safeTotals[i] : { bets: 0, wins: 0, losses: 0 };
              return `Win rate: ${pct} • Bets: ${t.bets} (W:${t.wins} L:${t.losses})`;
            }
          }
        }
      },
      scales: {
        x: { min: 0, max: 100, ticks: { display: false }, grid: { display: false, drawBorder: false } },
        y: { ticks: { color: "rgba(229,231,235,0.85)", font: { weight: 800 } }, grid: { display: false, drawBorder: false } }
      },
      animation: { duration: 250 }
    },
    plugins: [{
      id: "pctLabelsSafe",
      afterDatasetsDraw(chart){
        const {ctx, chartArea, scales} = chart;
        const meta = chart.getDatasetMeta(0);
        const xScale = scales.x;
        ctx.save();
        ctx.font = "800 12px system-ui, -apple-system, Segoe UI, Roboto, Arial";
        meta.data.forEach((bar, i)=>{
          const v = Number(safePct[i] || 0);
          const txt = `${Math.round(v)}%`;
          if(v >= 14){
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "right";
            ctx.textBaseline = "middle";
            ctx.fillText(txt, bar.x - 12, bar.y + 4);
            return;
          }
          const safeX = Math.max(xScale.getPixelForValue(0) + 10, chartArea.left + 10);
          ctx.fillStyle = v > 0 ? "rgba(229,231,235,0.92)" : "rgba(248,113,113,0.95)";
          ctx.textAlign = "left";
          ctx.textBaseline = "middle";
          ctx.fillText(txt, safeX, bar.y + 4);
        });
        ctx.restore();
      }
    }]
  });
}

function setMiniValue(id, prefix, value){
  // legacy helper kept, now feeds Insights dropdown
  const txt = (prefix ? (prefix + " ") : "") + (value || "—");
  setInsight(id, txt);
  updateInsightUI();
}




function initChartTabs(){
  const btns = document.querySelectorAll(".tab-btn");
  if(!btns.length) return;

  btns.forEach(b=>{
    b.addEventListener("click", ()=>{
      btns.forEach(x=>x.classList.remove("active"));
      b.classList.add("active");
      const tab = b.getAttribute("data-tab");
      document.querySelectorAll(".chart-pane").forEach(p=>p.classList.remove("active"));
      const pane = document.getElementById("pane-"+tab);
      if(pane) pane.classList.add("active");
    });
  });
}


function rowProfit(row){
  if(row.result === "won") return row.stake * (row.odds - 1);
  if(row.result === "lost") return -row.stake;
  return 0;
}


function toggleInsights(){
  const content = document.getElementById("insightsContent");
  const arrow = document.getElementById("insightsArrow");

  if(content.classList.contains("insights-collapsed")){
    content.classList.remove("insights-collapsed");
    content.classList.add("insights-expanded");
    arrow.innerText="▲";
  }else{
    content.classList.remove("insights-expanded");
    content.classList.add("insights-collapsed");
    arrow.innerText="▼";
  }
}


// Auto-close Insights when switching chart tabs
document.addEventListener("click", function(e){
  if(e.target.classList.contains("tab-btn")){
    const content = document.getElementById("insightsContent");
    const arrow = document.getElementById("insightsArrow");
    if(content && !content.classList.contains("insights-collapsed")){
      content.classList.remove("insights-expanded");
      content.classList.add("insights-collapsed");
      arrow.innerText="▼";
    }
  }
});

function toggleMonthly(){
  const wrapper=document.getElementById("monthlyWrapper");
  const arrow=document.getElementById("monthlyArrow");
  if(wrapper.classList.contains("collapsed")){
    wrapper.classList.remove("collapsed");
    wrapper.classList.add("expanded");
    arrow.innerText="▲";
  }else{
    wrapper.classList.remove("expanded");
    wrapper.classList.add("collapsed");
    arrow.innerText="▼";
  }
}
const startingInput = document.getElementById("startingBankroll");

if(startingInput){
  // Load saved value
  const saved = localStorage.getItem("starting_bankroll");
  if(saved){
    startingInput.value = saved;
  }

  // Save on change
  startingInput.addEventListener("input", function(){
    localStorage.setItem("starting_bankroll", this.value);
  });
}


setInterval(()=>{
  if(currentTopTab === "bets") loadBets();
}, 60000);
// ===== Personal Tracker: visual date grouping only =====
function addPersonalTrackerDateGroups(){
  const tableWrap = document.getElementById("trackerTable");
  if(!tableWrap) return;

  const table = tableWrap.querySelector("table");
  if(!table) return;

  const existing = table.querySelectorAll("tr.date-group");
  existing.forEach(el => el.remove());

  const rows = Array.from(table.querySelectorAll("tr")).slice(1); // skip header
  let lastDate = "";

  rows.forEach(row => {
    const dateCell = row.querySelector(".date-col");
    if(!dateCell) return;

    const dateText = dateCell.textContent.trim();
    if(!dateText) return;

    if(dateText !== lastDate){
      const divider = document.createElement("tr");
      divider.className = "date-group";
      divider.innerHTML = `<td colspan="7">▼ ${dateText}</td>`;
      row.parentNode.insertBefore(divider, row);
      lastDate = dateText;
    }
  });
}

const __originalLoadTrackerWithCount = loadTracker;
loadTracker = async function(){
  await __originalLoadTrackerWithCount();
  addPersonalTrackerDateGroups();
};
// ===== Personal Tracker: collapsible date groups =====
function wirePersonalTrackerDateCollapse(){
  const tableWrap = document.getElementById("trackerTable");
  if(!tableWrap) return;

  const table = tableWrap.querySelector("table");
  if(!table) return;

  const groups = Array.from(table.querySelectorAll("tr.date-group"));

  groups.forEach(groupRow => {
    if (groupRow.dataset.bound === "1") return;
    groupRow.dataset.bound = "1";
    groupRow.dataset.expanded = "1";

    const cell = groupRow.querySelector("td");
    if (!cell) return;

    const rawText = cell.textContent.replace(/^▼|^▶/, "").trim();
    cell.innerHTML = `▼ ${rawText}`;

    groupRow.addEventListener("click", () => {
      const expanded = groupRow.dataset.expanded === "1";
      groupRow.dataset.expanded = expanded ? "0" : "1";

      const label = groupRow.querySelector("td");
      if (label) {
        label.innerHTML = `${expanded ? "▶" : "▼"} ${rawText}`;
      }

      let next = groupRow.nextElementSibling;
      while (next && !next.classList.contains("date-group")) {
        next.style.display = expanded ? "none" : "";
        next = next.nextElementSibling;
      }
    });
  });
}

// re-wrap the current loadTracker safely
const __originalLoadTrackerWithDateGroups = loadTracker;
loadTracker = async function(){
  await __originalLoadTrackerWithDateGroups();
  addPersonalTrackerDateGroups();
  wirePersonalTrackerDateCollapse();
};
// ===== Personal Tracker: persistent collapsible date groups =====
function getPersonalTrackerCollapseKey(){
  const email = (localStorage.getItem("vip_email") || "guest").trim().toLowerCase();
  return `personal_tracker_collapsed_days_${email}`;
}

function readPersonalTrackerCollapseState(){
  try{
    return JSON.parse(localStorage.getItem(getPersonalTrackerCollapseKey()) || "{}");
  }catch(e){
    return {};
  }
}

function writePersonalTrackerCollapseState(state){
  localStorage.setItem(getPersonalTrackerCollapseKey(), JSON.stringify(state || {}));
}

function getNewestPersonalTrackerDay(){
  const tableWrap = document.getElementById("trackerTable");
  if(!tableWrap) return "";

  const table = tableWrap.querySelector("table");
  if(!table) return "";

  const firstGroup = table.querySelector("tr.date-group td");
  if(!firstGroup) return "";

  return firstGroup.textContent.replace(/^▼|^▶|^📅/, "").trim();
}

function applyPersonalTrackerCollapseState(){
  const tableWrap = document.getElementById("trackerTable");
  if(!tableWrap) return;

  const table = tableWrap.querySelector("table");
  if(!table) return;

  const saved = readPersonalTrackerCollapseState();
  const newestDay = getNewestPersonalTrackerDay();

  // if newest day changed, reset so only newest opens
  if(saved.__latestDay !== newestDay){
    const resetState = { __latestDay: newestDay };
    writePersonalTrackerCollapseState(resetState);
  }

  const state = readPersonalTrackerCollapseState();
  const groups = Array.from(table.querySelectorAll("tr.date-group"));

  groups.forEach((groupRow, index) => {
    const cell = groupRow.querySelector("td");
    if(!cell) return;

    const rawText = cell.textContent.replace(/^▼|^▶|^📅/, "").trim();
    const isNewest = index === 0;

    // default: newest open, all others collapsed
    const expanded = Object.prototype.hasOwnProperty.call(state, rawText)
      ? !!state[rawText]
      : isNewest;

    groupRow.dataset.expanded = expanded ? "1" : "0";
    cell.innerHTML = `${expanded ? "▼" : "▶"} ${rawText}`;

    let next = groupRow.nextElementSibling;
    while(next && !next.classList.contains("date-group")){
      next.style.display = expanded ? "" : "none";
      next = next.nextElementSibling;
    }
  });
}

function wirePersonalTrackerDateCollapse(){
  const tableWrap = document.getElementById("trackerTable");
  if(!tableWrap) return;

  const table = tableWrap.querySelector("table");
  if(!table) return;

  const groups = Array.from(table.querySelectorAll("tr.date-group"));

  groups.forEach(groupRow => {
    if(groupRow.dataset.bound === "1") return;
    groupRow.dataset.bound = "1";

    groupRow.addEventListener("click", () => {
      const cell = groupRow.querySelector("td");
      if(!cell) return;

      const rawText = cell.textContent.replace(/^▼|^▶|^📅/, "").trim();
      const expanded = groupRow.dataset.expanded === "1";
      const nextExpanded = !expanded;

      groupRow.dataset.expanded = nextExpanded ? "1" : "0";
      cell.innerHTML = `${nextExpanded ? "▼" : "▶"} ${rawText}`;

      let next = groupRow.nextElementSibling;
      while(next && !next.classList.contains("date-group")){
        next.style.display = nextExpanded ? "" : "none";
        next = next.nextElementSibling;
      }

      const state = readPersonalTrackerCollapseState();
      state[rawText] = nextExpanded;
      state.__latestDay = getNewestPersonalTrackerDay();
      writePersonalTrackerCollapseState(state);
    });
  });
}

// final safe wrapper
const __originalLoadTrackerCollapsedGroups = loadTracker;
loadTracker = async function(){
  await __originalLoadTrackerCollapsedGroups();
  addPersonalTrackerDateGroups();
  wirePersonalTrackerDateCollapse();
  applyPersonalTrackerCollapseState();
};
// ===== Personal Tracker: month grouping (visual only) =====
function monthKeyFromDateLabel(dateLabel){
  const txt = (dateLabel || "").replace(/^▼|^▶|^📅/, "").trim();
  if(!txt) return "";

  const parts = txt.split(" ");
  if(parts.length < 2) return "";

  const day = parts[0];
  const mon = parts[1];
  const yr = new Date().getFullYear();

  const d = new Date(`${day} ${mon} ${yr}`);
  if(Number.isNaN(d.getTime())) return "";

  return d.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

function getPersonalTrackerMonthCollapseKey(){
  const email = (localStorage.getItem("vip_email") || "guest").trim().toLowerCase();
  return `personal_tracker_collapsed_months_${email}`;
}

function readPersonalTrackerMonthState(){
  try{
    return JSON.parse(localStorage.getItem(getPersonalTrackerMonthCollapseKey()) || "{}");
  }catch(e){
    return {};
  }
}

function writePersonalTrackerMonthState(state){
  localStorage.setItem(getPersonalTrackerMonthCollapseKey(), JSON.stringify(state || {}));
}

function addPersonalTrackerMonthGroups(){
  const tableWrap = document.getElementById("trackerTable");
  if(!tableWrap) return;

  const table = tableWrap.querySelector("table");
  if(!table) return;

  table.querySelectorAll("tr.month-group").forEach(el => el.remove());

  const rows = Array.from(table.querySelectorAll("tr"));
  const dayGroups = rows.filter(r => r.classList.contains("date-group"));

  let lastMonth = "";
  dayGroups.forEach(groupRow => {
    const cell = groupRow.querySelector("td");
    if(!cell) return;

    const month = monthKeyFromDateLabel(cell.textContent);
    if(!month) return;

    if(month !== lastMonth){
      const divider = document.createElement("tr");
      divider.className = "month-group";
      divider.innerHTML = `<td colspan="7">▼ ${month}</td>`;
      groupRow.parentNode.insertBefore(divider, groupRow);
      lastMonth = month;
    }
  });
}

function applyPersonalTrackerMonthCollapseState(){
  const tableWrap = document.getElementById("trackerTable");
  if(!tableWrap) return;

  const table = tableWrap.querySelector("table");
  if(!table) return;

  const groups = Array.from(table.querySelectorAll("tr.month-group"));
  if(!groups.length) return;

  const state = readPersonalTrackerMonthState();
  const newestMonth = groups[0]?.querySelector("td")?.textContent.replace(/^▼|^▶/, "").trim() || "";

  if(state.__latestMonth !== newestMonth){
    writePersonalTrackerMonthState({ __latestMonth: newestMonth });
  }

  const freshState = readPersonalTrackerMonthState();

  groups.forEach((groupRow, index) => {
    const cell = groupRow.querySelector("td");
    if(!cell) return;

    const rawText = cell.textContent.replace(/^▼|^▶/, "").trim();
    const isNewest = index === 0;

    const expanded = Object.prototype.hasOwnProperty.call(freshState, rawText)
      ? !!freshState[rawText]
      : isNewest;

    groupRow.dataset.expanded = expanded ? "1" : "0";
    cell.innerHTML = `${expanded ? "▼" : "▶"} ${rawText}`;

    let next = groupRow.nextElementSibling;
    while(next && !next.classList.contains("month-group")){
      next.style.display = expanded ? "" : "none";
      next = next.nextElementSibling;
    }
  });
}

function wirePersonalTrackerMonthCollapse(){
  const tableWrap = document.getElementById("trackerTable");
  if(!tableWrap) return;

  const table = tableWrap.querySelector("table");
  if(!table) return;

  const groups = Array.from(table.querySelectorAll("tr.month-group"));

  groups.forEach(groupRow => {
    if(groupRow.dataset.bound === "1") return;
    groupRow.dataset.bound = "1";

    groupRow.addEventListener("click", () => {
      const cell = groupRow.querySelector("td");
      if(!cell) return;

      const rawText = cell.textContent.replace(/^▼|^▶/, "").trim();
      const expanded = groupRow.dataset.expanded === "1";
      const nextExpanded = !expanded;

      groupRow.dataset.expanded = nextExpanded ? "1" : "0";
      cell.innerHTML = `${nextExpanded ? "▼" : "▶"} ${rawText}`;

      let next = groupRow.nextElementSibling;
      while(next && !next.classList.contains("month-group")){
        next.style.display = nextExpanded ? "" : "none";
        next = next.nextElementSibling;
      }

      const state = readPersonalTrackerMonthState();
      state[rawText] = nextExpanded;
      state.__latestMonth = Array.from(document.querySelectorAll("#trackerTable tr.month-group"))[0]
        ?.querySelector("td")
        ?.textContent.replace(/^▼|^▶/, "").trim() || "";
      writePersonalTrackerMonthState(state);
    });
  });
}

// final wrapper for month + day grouping
const __originalLoadTrackerWithMonthGroups = loadTracker;
loadTracker = async function(){
  await __originalLoadTrackerWithMonthGroups();
  addPersonalTrackerDateGroups();
  addPersonalTrackerMonthGroups();
  wirePersonalTrackerDateCollapse();
  applyPersonalTrackerCollapseState();
  wirePersonalTrackerMonthCollapse();
  applyPersonalTrackerMonthCollapseState();
};
/* =========================
   PERSONAL TRACKER COLLAPSE FIX
   Keeps:
   - Month groups
   - Day groups
   - Only current day open
   - Fixes double-click collapse
   ========================= */

function getNewestPersonalTrackerDay(){
  const groups = Array.from(document.querySelectorAll("#trackerTable tr.date-group"));
  if(!groups.length) return "";
  const first = groups[0].querySelector("td");
  if(!first) return "";
  return first.textContent.replace(/^▼|^▶|^📅/, "").trim();
}

function applyPersonalTrackerCollapseState(){
  const tableWrap = document.getElementById("trackerTable");
  if(!tableWrap) return;

  const table = tableWrap.querySelector("table");
  if(!table) return;

  const saved = readPersonalTrackerCollapseState();
  const newestDay = getNewestPersonalTrackerDay();

  if(saved.__latestDay !== newestDay){
    const resetState = { __latestDay: newestDay };
    writePersonalTrackerCollapseState(resetState);
  }

  const state = readPersonalTrackerCollapseState();
  const groups = Array.from(table.querySelectorAll("tr.date-group"));

  groups.forEach((groupRow, index) => {

    const cell = groupRow.querySelector("td");
    if(!cell) return;

    const rawText = cell.textContent.replace(/^▼|^▶|^📅/, "").trim();
    const todayLabel = new Date().toLocaleDateString("en-GB",{day:"2-digit",month:"short"});
const newestRow = groups[0]?.querySelector("td")?.textContent.replace(/^▼|^▶|^📅/, "").trim();

const isNewest = rawText === todayLabel || rawText === newestRow;
    const expanded = Object.prototype.hasOwnProperty.call(state, rawText)
      ? !!state[rawText]
      : isNewest;

    groupRow.dataset.expanded = expanded ? "1" : "0";
    cell.innerHTML = `${expanded ? "▼" : "▶"} ${rawText}`;

    let next = groupRow.nextElementSibling;

    while(next && !next.classList.contains("date-group") && !next.classList.contains("month-group")){
      next.style.display = expanded ? "" : "none";
      next = next.nextElementSibling;
    }

  });

}

/* ---------- final safe wrapper ---------- */

const __originalLoadTrackerFinal = loadTracker;

loadTracker = async function(){

  await __originalLoadTrackerFinal();

  if(typeof addPersonalTrackerDateGroups === "function"){
    addPersonalTrackerDateGroups();
  }

  if(typeof addPersonalTrackerMonthGroups === "function"){
    addPersonalTrackerMonthGroups();
  }

  if(typeof wirePersonalTrackerDateCollapse === "function"){
    wirePersonalTrackerDateCollapse();
  }

  if(typeof wirePersonalTrackerMonthCollapse === "function"){
    wirePersonalTrackerMonthCollapse();
  }

  if(typeof applyPersonalTrackerMonthCollapseState === "function"){
    applyPersonalTrackerMonthCollapseState();
  }

  applyPersonalTrackerCollapseState();

};
/* ===== SAFE TDT RESULTS MONTHLY OVERRIDE ===== */

function __tdtMonthKeySafe(row){
  const raw = row?.match_date_date || row?.bet_date || row?.created_at;
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return "Unknown";
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  return `${y}-${m}`;
}

function __tdtMonthLabelSafe(monthKey){
  if (!monthKey || monthKey === "Unknown") return "Unknown";
  const [y, m] = String(monthKey).split("-");
  const d = new Date(Number(y), Number(m) - 1, 1);
  if (Number.isNaN(d.getTime())) return monthKey;
  return d.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

window.loadTdtTracker = async function(){
  const tableEl = document.getElementById("tdtTrackerTable");

  try{
    const { data, error } = await client
      .from("tdt_tracker")
      .select("*")
      .order("created_at", { ascending: true });

    if(error) throw error;

    const rows = Array.isArray(data) ? data : [];
    tdtRowsCache = rows;

    let profit = 0;
    let wins = 0;
    let losses = 0;
    let totalStake = 0;
    let totalOdds = 0;
    let resolvedCount = 0;

    rows.forEach(row=>{
      const result = String(row.result || "pending").toLowerCase();

      const p =
        result === "won"
          ? (row.profit != null
              ? Number(row.profit)
              : Number(row.stake || 0) * (Number(row.odds || 0) - 1))
          : result === "lost"
          ? (row.profit != null
              ? Number(row.profit)
              : -Number(row.stake || 0))
          : 0;

      profit += p;

      if(result === "won") wins++;
      if(result === "lost") losses++;

      if(result !== "pending"){
        resolvedCount++;
        totalStake += Number(row.stake || 0);
        totalOdds += Number(row.odds || 0);
      }
    });

    const monthMap = new Map();

    rows.forEach(row=>{
      const key = __tdtMonthKeySafe(row);

      if(!monthMap.has(key)){
        monthMap.set(key, {
          key,
          rows: [],
          wins: 0,
          losses: 0,
          settled: 0,
          profit: 0
        });
      }

      const group = monthMap.get(key);
      group.rows.push(row);

      const result = String(row.result || "pending").toLowerCase();

      const p =
        result === "won"
          ? (row.profit != null
              ? Number(row.profit)
              : Number(row.stake || 0) * (Number(row.odds || 0) - 1))
          : result === "lost"
          ? (row.profit != null
              ? Number(row.profit)
              : -Number(row.stake || 0))
          : 0;

      group.profit += p;

      if(result === "won"){
        group.wins++;
        group.settled++;
      }else if(result === "lost"){
        group.losses++;
        group.settled++;
      }
    });

    const monthGroups = Array.from(monthMap.values()).sort((a,b)=>a.key.localeCompare(b.key));

    let html = `<div class="tdt-month-groups">`;

    monthGroups.forEach((group, idx)=>{
      const monthWinrate = group.settled
        ? Math.round((group.wins / group.settled) * 100)
        : 0;

      const profitClass = group.profit >= 0 ? "positive" : "negative";
      const profitSign = group.profit >= 0 ? "+" : "-";

      html += `
        <div class="tdt-month-card">
          <button class="tdt-month-head" type="button" onclick="toggleTdtDay(this)">
            <div class="tdt-month-left">
              <div class="tdt-month-title">${escapeHtml(__tdtMonthLabelSafe(group.key))}</div>
              <div class="tdt-month-sub">
                ${group.rows.length} result${group.rows.length === 1 ? "" : "s"} •
                <span class="${profitClass}">${profitSign}£${Math.abs(group.profit).toFixed(2)}</span>
              </div>
            </div>
            <div class="tdt-month-right">
              <span class="tdt-day-chip win">Won ${group.wins}</span>
              <span class="tdt-day-chip loss">Lost ${group.losses}</span>
              <span class="tdt-day-chip ratio ${tdtWinrateClass(monthWinrate)}">Winrate ${monthWinrate}%</span>
              <span class="tdt-day-chevron">${idx === monthGroups.length - 1 ? "▼" : "▶"}</span>
            </div>
          </button>
          <div class="tdt-day-body" style="display:${idx === monthGroups.length - 1 ? "block" : "none"};">
            <div class="tdt-table-wrap">
              <table class="tdt-table tdt-table-fit tdt-month-table">
                <thead>
                  <tr>
                    <th class="tdt-col-match sortable" onclick="sortTdtTable('match')">Match <span>${typeof tdtSortArrow === "function" ? tdtSortArrow('match') : ''}</span></th>
                    <th class="tdt-col-market sortable" onclick="sortTdtTable('market')">Market <span>${typeof tdtSortArrow === "function" ? tdtSortArrow('market') : ''}</span></th>
                    <th class="tdt-col-stake sortable" onclick="sortTdtTable('stake')">Stake <span>${typeof tdtSortArrow === "function" ? tdtSortArrow('stake') : ''}</span></th>
                    <th class="tdt-col-odds sortable" onclick="sortTdtTable('odds')">Odds <span>${typeof tdtSortArrow === "function" ? tdtSortArrow('odds') : ''}</span></th>
                    <th class="tdt-col-result sortable" onclick="sortTdtTable('result')">Result <span>${typeof tdtSortArrow === "function" ? tdtSortArrow('result') : ''}</span></th>
                  </tr>
                </thead>
                <tbody>
      `;

      group.rows.forEach(row=>{
        const result = String(row.result || "pending").toLowerCase();
        const resultIcon = result === "won" ? "✅" : result === "lost" ? "❌" : "⏳";

        html += `
          <tr class="tdt-row ${result}">
            <td class="tdt-match">${escapeHtml(row.match || '')}</td>
            <td class="tdt-market">${escapeHtml(row.market || '')}</td>
            <td class="tdt-stake">£${Number(row.stake || 0).toFixed(2)}</td>
            <td class="tdt-odds">${row.odds != null && row.odds !== '' ? escapeHtml(String(row.odds)) : '-'}</td>
            <td class="tdt-result"><span class="tdt-result-icon ${result}">${resultIcon}</span></td>
          </tr>
        `;
      });

      html += `
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;

    if(tableEl){
      tableEl.innerHTML = rows.length
        ? html
        : '<div class="card">No official TDT results yet.</div>';
    }

    const set = (id, val)=>{
      const el = document.getElementById(id);
      if(el) el.innerText = val;
    };

    set("tdtProfit", profit.toFixed(2));
    set("tdtRoi", totalStake ? ((profit / totalStake) * 100).toFixed(1) : 0);
    set("tdtWinrate", (wins + losses) ? ((wins / (wins + losses)) * 100).toFixed(1) : 0);
    set("tdtWonLost", `${wins}-${losses}`);
    set("tdtAvgOdds", resolvedCount ? (totalOdds / resolvedCount).toFixed(2) : 0);
    set("tdtTotalBets", rows.length);
    set("tdtBetCount", rows.length);

    if(typeof updateTdtPerformanceBars === "function"){
      updateTdtPerformanceBars({ profit, totalStake, wins, losses, resolvedCount, totalOdds });
    }
  }catch(err){
    console.error("TDT monthly override failed:", err);
    if(tableEl) tableEl.innerHTML = '<div class="card">TDT Tracker table not ready yet.</div>';
  }
};

try{
  if(typeof currentTopTab !== "undefined" && currentTopTab === "tdt"){
    loadTdtTracker();
  }
}catch(e){}



/* ===== HARD RESTORE VIP MESSAGE PATCH ===== */
(function(){
  function bindRestoreVipMessage(){
    const restoreBtn = document.getElementById("vipRestore");
    const emailInput = document.getElementById("vipEmail");
    const errorEl = document.getElementById("vipError");
    if(!restoreBtn || !emailInput || !errorEl) return false;
    if(restoreBtn.dataset.restoreBound === "1") return true;

    restoreBtn.dataset.restoreBound = "1";

    restoreBtn.addEventListener("click", async function(e){
      e.preventDefault();
      e.stopPropagation();

      const email = String(emailInput.value || "").trim().toLowerCase();

      if(!email || !email.includes("@")){
        errorEl.textContent = "Enter your email first.";
        return false;
      }

      errorEl.textContent = "Checking VIP status...";

      try{
        const r = await fetch(`/api/verify-subscription?email=${encodeURIComponent(email)}`);
        const j = await r.json();

        if(j && j.active){
          localStorage.setItem("vip_email", email);
          errorEl.textContent = "";
          if(typeof checkVIP === "function") await checkVIP();
          if(typeof closeVipModal === "function") closeVipModal();
          if(typeof loadBets === "function") await loadBets();
          if(typeof loadTracker === "function") await loadTracker();
          if(typeof refreshAdminBadgeUI === "function") refreshAdminBadgeUI();
          return true;
        } else {
          errorEl.textContent = "This email has no active VIP subscription.";
          return false;
        }
      } catch(err){
        errorEl.textContent = "Could not check VIP right now.";
        return false;
      }
    }, true);

    return true;
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", bindRestoreVipMessage);
  } else {
    bindRestoreVipMessage();
  }

  let tries = 0;
  const iv = setInterval(() => {
    tries++;
    if(bindRestoreVipMessage() || tries > 20) clearInterval(iv);
  }, 500);
})();
/* ===== END HARD RESTORE VIP MESSAGE PATCH ===== */



/* ===== MARKETS 0% LABEL FIX ===== */
renderMarketChart = function(labels, winPct, totals){
  const el = document.getElementById("marketChart");
  if(!el) return;
  if(typeof marketChart !== "undefined" && marketChart) marketChart.destroy();

  const safeLabels = Array.isArray(labels) ? labels : [];
  const safePct = Array.isArray(winPct) ? winPct.map(v => Number(v || 0)) : [];
  const safeTotals = Array.isArray(totals) ? totals : [];

  const ctx = el.getContext("2d");
  marketChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: safeLabels,
      datasets: [{
        data: safePct,
        borderWidth: 0,
        borderRadius: 10,
        barThickness: 18,
        backgroundColor: safePct.map(v=>{
          if(v >= 55) return "rgba(34,197,94,0.85)";
          if(v >= 40) return "rgba(245,158,11,0.85)";
          return "rgba(239,68,68,0.85)";
        }),
        borderColor: safePct.map(v=>{
          if(v >= 55) return "#22c55e";
          if(v >= 40) return "#f59e0b";
          return "#ef4444";
        })
      }]
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: { left: 6, right: 10 }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx)=>{
              const i = ctx.dataIndex;
              const pct = Number(ctx.raw || 0).toFixed(0) + "%";
              const t = safeTotals[i] ? safeTotals[i] : { bets: 0, wins: 0, losses: 0 };
              return `Win rate: ${pct} • Bets: ${t.bets} (W:${t.wins} L:${t.losses})`;
            }
          }
        }
      },
      scales: {
        x: {
          min: 0,
          max: 100,
          ticks: { display: false },
          grid: { display: false, drawBorder: false }
        },
        y: {
          ticks: {
            color: "rgba(229,231,235,0.85)",
            font: { weight: 800 }
          },
          grid: { display: false, drawBorder: false }
        }
      },
      animation: { duration: 250 }
    },
    plugins: [{
      id: "pctLabelsSafe",
      afterDatasetsDraw(chart){
        const {ctx, chartArea, scales} = chart;
        const meta = chart.getDatasetMeta(0);
        const xScale = scales.x;

        ctx.save();
        ctx.font = "800 12px system-ui, -apple-system, Segoe UI, Roboto, Arial";

        meta.data.forEach((bar, i)=>{
          const v = Number(safePct[i] || 0);
          const txt = `${Math.round(v)}%`;

          if(v >= 14){
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "right";
            ctx.textBaseline = "middle";
            ctx.fillText(txt, bar.x - 12, bar.y);
            return;
          }

          const startX = xScale.getPixelForValue(Math.max(v, 0));
          const safeX = Math.max(startX + 8, chartArea.left + 12);

          ctx.fillStyle = v > 0 ? "rgba(229,231,235,0.92)" : "rgba(248,113,113,0.95)";
          ctx.textAlign = "left";
          ctx.textBaseline = "middle";
          ctx.fillText(txt, safeX, bar.y);
        });

        ctx.restore();
      }
    }]
  });
};
/* ===== END MARKETS 0% LABEL FIX ===== */



/* ===== SAFE VIP BUTTON RESYNC PATCH ===== */
(function(){
  function bindVipButtonsSafe(){
    const topBtn = document.getElementById('vipButton');
    const promoBtn = document.getElementById('vipPromoBtn');
    if(topBtn){
      topBtn.onclick = function(e){
        e.preventDefault();
        openVipModal();
      };
    }
    if(promoBtn){
      promoBtn.onclick = function(e){
        e.preventDefault();
        openVipModal();
      };
    }
  }

  const originalCheckVIP = checkVIP;
  checkVIP = async function(){
    const active = await originalCheckVIP();
    const promoEl = document.getElementById('vipPromo');
    if(promoEl) promoEl.style.display = active ? 'none' : 'flex';
    return active;
  };

  bindVipButtonsSafe();
  setTimeout(bindVipButtonsSafe, 300);
})();
/* ===== END SAFE VIP BUTTON RESYNC PATCH ===== */

/* ===== TRACKER VISUAL ROLLUP PATCH ===== */
(function(){
  function parseYmd(raw){
    const txt = String(raw || '').trim();
    const m = txt.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if(m) return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12, 0, 0, 0);
    const d = new Date(raw);
    if(Number.isNaN(d.getTime())) return null;
    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12, 0, 0, 0);
  }

  function ymdKey(dt){
    return `${dt.getFullYear()}-${String(dt.getMonth()+1).padStart(2,'0')}-${String(dt.getDate()).padStart(2,'0')}`;
  }

  function fmtShort(dt){
    return dt.toLocaleDateString('en-GB', { day:'2-digit', month:'short' });
  }

  function fmtFull(dt){
    return dt.toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' });
  }

  function fmtMonth(dt){
    return dt.toLocaleDateString('en-GB', { month:'short', year:'2-digit' });
  }

  function startOfWeekMonday(dt){
    const out = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 12, 0, 0, 0);
    const day = out.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    out.setDate(out.getDate() + diff);
    return out;
  }

  function endOfWeekSunday(dt){
    const start = startOfWeekMonday(dt);
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    return end;
  }

  function aggregateTimeline(rawDaily){
    const points = Array.isArray(rawDaily) ? rawDaily.filter(Boolean) : [];
    if(!points.length) return [];

    const total = points.length;
    const dailyKeep = Math.min(7, total);
    const weeklyWindow = Math.max(0, total - dailyKeep);
    const weeklySourceCount = Math.min(21, weeklyWindow);
    const monthlySourceCount = Math.max(0, total - dailyKeep - weeklySourceCount);

    const monthlySource = points.slice(0, monthlySourceCount);
    const weeklySource = points.slice(monthlySourceCount, monthlySourceCount + weeklySourceCount);
    const recentDaily = points.slice(monthlySourceCount + weeklySourceCount);

    const out = [];

    if(monthlySource.length){
      let i = 0;
      while(i < monthlySource.length){
        const first = monthlySource[i];
        const month = first.date.getMonth();
        const year = first.date.getFullYear();
        let last = first;
        i += 1;
        while(i < monthlySource.length){
          const cur = monthlySource[i];
          if(cur.date.getMonth() !== month || cur.date.getFullYear() !== year) break;
          last = cur;
          i += 1;
        }
        out.push({
          type: 'month',
          key: `${year}-${String(month+1).padStart(2,'0')}`,
          label: fmtMonth(first.date),
          fullLabel: fmtMonth(first.date),
          value: Number(last.value || 0),
          date: new Date(last.date),
          pointRadius: 5
        });
      }
    }

    if(weeklySource.length){
      for(let i = 0; i < weeklySource.length; i += 7){
        const chunk = weeklySource.slice(i, i + 7);
        if(!chunk.length) continue;
        const first = chunk[0].date;
        const last = chunk[chunk.length - 1].date;
        const start = startOfWeekMonday(first);
        const end = endOfWeekSunday(first);
        out.push({
          type: 'week',
          key: `wk-${ymdKey(start)}`,
          label: `Wk ${start.toLocaleDateString('en-GB', { day:'2-digit', month:'short' })}`,
          fullLabel: `${fmtFull(start)} – ${fmtFull(end)}`,
          value: Number(chunk[chunk.length - 1].value || 0),
          date: new Date(last),
          pointRadius: 4
        });
      }
    }

    recentDaily.forEach((item)=>{
      out.push({
        type: 'day',
        key: item.key,
        label: fmtShort(item.date),
        fullLabel: fmtFull(item.date),
        value: Number(item.value || 0),
        date: new Date(item.date),
        pointRadius: 3
      });
    });

    return out;
  }

  function buildDailySeries(history, dayKeys){
    const safeHistory = Array.isArray(history) ? history : [];
    const safeDayKeys = Array.isArray(dayKeys) ? dayKeys : [];
    const daily = [];
    safeHistory.forEach((value, i)=>{
      const rawKey = safeDayKeys[i];
      const dt = parseYmd(rawKey);
      if(!dt) return;
      const key = ymdKey(dt);
      const last = daily[daily.length - 1];
      if(last && last.key === key){
        last.value = Number(value || 0);
      }else{
        daily.push({ key, date: dt, value: Number(value || 0) });
      }
    });
    return daily;
  }

  renderDailyChart = function(history, labels, dayKeys){
    const el = document.getElementById('chart');
    if(!el) return;
    if(typeof dailyChart !== 'undefined' && dailyChart) dailyChart.destroy();

    const daily = buildDailySeries(history, dayKeys);
    const rolled = aggregateTimeline(daily);
    const ctx = el.getContext('2d');

    dailyChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: rolled.map(p => p.label),
        datasets: [{
          data: rolled.map(p => p.value),
          tension: 0.28,
          fill: true,
          borderWidth: 3,
          borderColor: 'rgba(34,197,94,0.95)',
          backgroundColor: 'rgba(34,197,94,0.14)',
          pointRadius: (ctx)=> rolled[ctx.dataIndex]?.pointRadius || 3,
          pointHoverRadius: (ctx)=> (rolled[ctx.dataIndex]?.pointRadius || 3) + 2,
          pointHitRadius: 16,
          pointBackgroundColor: 'rgba(34,197,94,1)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'nearest', intersect: false },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: (items)=>{
                const i = items?.[0]?.dataIndex ?? 0;
                return rolled[i]?.fullLabel || '';
              },
              label: (ctx)=> `Bankroll: £${Number(ctx.raw || 0).toFixed(2)}`
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: 'rgba(226,232,240,0.78)',
              autoSkip: false,
              maxRotation: 0,
              minRotation: 0,
              padding: 8,
              callback: function(value, index){
                const point = rolled[index];
                if(!point) return '';
                if(point.type === 'day'){
                  const prev = rolled[index - 1];
                  if(prev && prev.type === 'day' && prev.date.getMonth() === point.date.getMonth() && prev.date.getFullYear() === point.date.getFullYear()){
                    return point.date.getDate() % 2 === 0 ? point.label : '';
                  }
                }
                return point.label;
              }
            },
            grid: { color: 'rgba(255,255,255,0.04)' }
          },
          y: {
            ticks: { color: 'rgba(226,232,240,0.78)', callback: (v)=> `£${Number(v).toFixed(0)}` },
            grid: { color: 'rgba(255,255,255,0.05)' }
          }
        }
      }
    });
  };

  function rebuildMonthlyBreakdown(){
    const rows = Array.isArray(trackerRowsCache) ? trackerRowsCache.slice() : [];
    const tableEl = document.getElementById('monthlyTable');
    if(!tableEl) return;
    if(!rows.length){
      tableEl.innerHTML = '<div class="card">No monthly data yet.</div>';
      return;
    }

    const monthMap = {};
    rows.forEach((r)=>{
      const d = new Date(r.created_at || r.bet_date || Date.now());
      if(Number.isNaN(d.getTime())) return;
      const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
      if(!monthMap[key]) monthMap[key] = { stake:0, profit:0, wins:0, losses:0, bets:0 };
      monthMap[key].bets += 1;
      monthMap[key].stake += Number(r.stake || 0);
      monthMap[key].profit += rowProfit(r);
      if(r.result === 'won') monthMap[key].wins += 1;
      if(r.result === 'lost') monthMap[key].losses += 1;
    });

    const keys = Object.keys(monthMap).sort();
    let html = '<table><tr><th>Month</th><th>Total Bets</th><th>Win Rate</th><th>Profit</th><th>ROI</th></tr>';
    keys.forEach((key)=>{
      const item = monthMap[key];
      const [y,m] = key.split('-');
      const label = new Date(Number(y), Number(m)-1, 1).toLocaleDateString('en-GB',{ month:'short', year:'2-digit' });
      const settled = item.wins + item.losses;
      const winrate = settled ? (item.wins / settled) * 100 : 0;
      const roi = item.stake ? (item.profit / item.stake) * 100 : 0;
      html += `<tr>
        <td>${label}</td>
        <td>${item.bets}</td>
        <td>${winrate.toFixed(1)}%</td>
        <td class="${item.profit>0?'profit-win':item.profit<0?'profit-loss':''}">£${item.profit.toFixed(2)}</td>
        <td>${roi.toFixed(1)}%</td>
      </tr>`;
    });
    html += '</table>';
    tableEl.innerHTML = html;
  }

  const originalLoadTrackerVisualPatch = loadTracker;
  loadTracker = async function(){
    await originalLoadTrackerVisualPatch();
    rebuildMonthlyBreakdown();
  };

  renderMarketChart = function(labels, winPct, totals){
    const el = document.getElementById('marketChart');
    if(!el) return;
    if(typeof marketChart !== 'undefined' && marketChart) marketChart.destroy();

    const safeLabels = Array.isArray(labels) ? labels : [];
    const safePct = Array.isArray(winPct) ? winPct.map(v => Number(v || 0)) : [];
    const safeTotals = Array.isArray(totals) ? totals : [];

    const ctx = el.getContext('2d');
    marketChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: safeLabels,
        datasets: [{
          data: safePct,
          borderWidth: 0,
          borderRadius: 10,
          barThickness: 18,
          backgroundColor: safePct.map(v=> v >= 55 ? 'rgba(34,197,94,0.85)' : v >= 40 ? 'rgba(245,158,11,0.85)' : 'rgba(239,68,68,0.85)'),
          borderColor: safePct.map(v=> v >= 55 ? '#22c55e' : v >= 40 ? '#f59e0b' : '#ef4444')
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { left: 12, right: 36 } },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx)=>{
                const i = ctx.dataIndex;
                const pct = Number(ctx.raw || 0).toFixed(0) + '%';
                const t = safeTotals[i] ? safeTotals[i] : { bets: 0, wins: 0, losses: 0 };
                return `Win rate: ${pct} • Bets: ${t.bets} (W:${t.wins} L:${t.losses})`;
              }
            }
          }
        },
        scales: {
          x: { min: 0, max: 100, ticks: { display: false }, grid: { display: false, drawBorder: false } },
          y: { ticks: { color: 'rgba(229,231,235,0.85)', font: { weight: 800 } }, grid: { display: false, drawBorder: false } }
        },
        animation: { duration: 250 }
      },
      plugins: [{
        id: 'pctLabelsNoOverlap',
        afterDatasetsDraw(chart){
          const { ctx, chartArea } = chart;
          const meta = chart.getDatasetMeta(0);
          ctx.save();
          ctx.font = '800 12px system-ui, -apple-system, Segoe UI, Roboto, Arial';
          meta.data.forEach((bar, i)=>{
            const v = Number(safePct[i] || 0);
            const txt = `${Math.round(v)}%`;
            if(v >= 18){
              ctx.fillStyle = '#ffffff';
              ctx.textAlign = 'right';
              ctx.textBaseline = 'middle';
              ctx.fillText(txt, bar.x - 12, bar.y);
            }else{
              ctx.fillStyle = v > 0 ? 'rgba(229,231,235,0.92)' : 'rgba(248,113,113,0.95)';
              ctx.textAlign = 'right';
              ctx.textBaseline = 'middle';
              ctx.fillText(txt, chartArea.right - 4, bar.y);
            }
          });
          ctx.restore();
        }
      }]
    });
  };
})();
/* ===== END TRACKER VISUAL ROLLUP PATCH ===== */
