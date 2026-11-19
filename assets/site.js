// U-Track landing page. Every link comes from config.json (edited from
// admin.html); ?preview=1 shows the dashboard's unsaved draft instead.
(function () {
  "use strict";


  var T = {
    ar: {
      navFeatures: "المزايا", navScreens: "الشاشات", navDownload: "التحميل",
      heroPill: "الإصدار",
      heroTitle: "شركتك كلها في جيبك",
      heroLead: "وافق على الطلبات أينما كنت، وتابع الفواتير والحسابات، واطّلع على مبيعات فروعك لحظة بلحظة — بالعربية والإنجليزية والفرنسية، على الآيفون والآيباد والأندرويد.",
      featEyebrow: "المزايا", featTitle: "كل ما يحتاجه المدير",
      featLead: "تجربتان في تطبيق واحد: U-Track الكلاسيكي للموافقات والحسابات، وتقارير U-Serve الحديثة لمبيعات المطاعم والفروع.",
      scrEyebrow: "من داخل التطبيق", scrTitle: "شاشات حقيقية من التطبيق",
      scrLead: "لقطات من التطبيق نفسه ببيانات نموذجية لشركة تجريبية — لا تظهر بيانات أي عميل حقيقي.",
      dlEyebrow: "التحميل", dlTitle: "حمّل U-Track",
      dlLead: "اختر المتجر المناسب لجهازك. حسابك يعمل على أيٍّ منها، والتطبيق يخبرك بنفسه عند صدور تحديث.",
      trustEyebrow: "الأمان", trustTitle: "مصمم ليحمي بيانات شركتك",
      appStore: "App Store", appStoreSmall: "حمّله من", appStoreBody: "للآيفون والآيباد — الإصدار الرسمي.",
      googlePlay: "Google Play", googlePlaySmall: "احصل عليه من", googlePlayBody: "لأجهزة أندرويد — الإصدار الرسمي مع التحديث من داخل التطبيق.",
      testFlight: "TestFlight", testFlightSmall: "النسخة التجريبية", testFlightBody: "جرّب الإصدارات القادمة على الآيفون قبل نشرها، عبر تطبيق TestFlight من Apple.",
      apk: "APK مباشر", apkSmall: "تحميل", apkBody: "لأجهزة أندرويد بدون متجر Google Play — يحدّث نفسه من داخل التطبيق.",
      tagOfficial: "رسمي", tagBeta: "تجريبي", tagDirect: "مباشر",
      contact: "تواصل معنا",
      features: [
        ["approve", "الموافقات أينما كنت", "طلبات الشراء والموافقات تصلك بإشعار فوري، فتوافق أو ترفض من هاتفك."],
        ["invoice", "الفواتير والسندات", "الفواتير وسندات القبض والصرف بتفاصيلها، مع البحث والتصفية بالتاريخ."],
        ["ledger", "الحسابات والأرصدة", "كشف الحساب وأرصدة العملاء والموردين ودفتر الأستاذ لكل شخص."],
        ["cash", "تقرير النقدية", "النقدية حسب الموقع والفترة بنظرة واحدة."],
        ["chart", "لوحة التشغيل", "مبيعات المواقع والفروع، الأصناف الأكثر مبيعاً، والخصومات وأفضل الموظفين."],
        ["headset", "لوحة مركز الاتصال", "ساعات الذروة ومبيعات المواقع وأفضل الموظفين والشكاوى."],
        ["pos", "تقارير U-Serve", "أكثر من ٤٠ تقريراً لمبيعات المطاعم: المبيعات والمنتجات والمدفوعات والطلبات والموظفين."],
        ["period", "المبيعات حسب الفترة", "اليوم والأسبوع والشهر والسنة حتى اليوم أعلى كل تقرير مبيعات، وبضغطة تعرض التقرير لتلك الفترة."],
        ["building", "شركات وفروع متعددة", "اختر الشركة عند الدخول وبدّل بين الشركات والفروع دون تسجيل الخروج."],
        ["clock", "ساعات الذروة والمنتجات", "رسوم بيانية لساعات الضغط وأكثر المنتجات مبيعاً بحسب الفرع والفترة."],
        ["update", "محدّث دائماً", "يعرض إصدارك الحالي، ويبحث عن التحديثات، ويحدّث نفسه من المتجر أو الرابط المباشر."],
        ["globe", "عربي وإنجليزي وفرنسي", "واجهة كاملة من اليمين لليسار، وتصميم للآيباد، وتبديل فوري للغة."]
      ],
      trust: [
        ["finger", "الدخول بالبصمة", "افتح التطبيق ببصمتك أو Face ID، وكلمة المرور محفوظة في خزنة الجهاز الآمنة."],
        ["shield", "صلاحياتك فقط", "كل شاشة وكل تقرير يتبع صلاحيات حسابك على خادم شركتك."],
        ["lock", "تحديثات موثّقة", "التحديثات من المتاجر الرسمية أو من رابط يتحقق التطبيق من بصمته الرقمية SHA-256 قبل التثبيت."]
      ],
      shots: [
        "لوحة المبيعات اليومية",
        "المبيعات حسب الفترة",
        "كل التقارير في مكان واحد",
        "ساعات الذروة",
        "الواجهة الكلاسيكية",
        "الموافقات وطلبات الشراء",
        "لوحة التشغيل",
        "اختر شركتك عند الدخول",
        "تحديثات التطبيق",
        "تجربتان في تطبيق واحد"
      ]
    },
    en: {
      navFeatures: "Features", navScreens: "Screens", navDownload: "Download",
      heroPill: "Version",
      heroTitle: "Your whole company in your pocket",
      heroLead: "Approve requests wherever you are, follow invoices and accounts, and watch every branch's sales as they happen — in Arabic, English and French, on iPhone, iPad and Android.",
      featEyebrow: "Features", featTitle: "Everything a manager needs",
      featLead: "Two experiences in one app: classic U-Track for approvals and accounts, and modern U-Serve reports for restaurant and branch sales.",
      scrEyebrow: "Inside the app", scrTitle: "Real screens from the app",
      scrLead: "Captured from the app itself with sample data for a demo company — no customer's real data is shown.",
      dlEyebrow: "Download", dlTitle: "Get U-Track",
      dlLead: "Pick the store for your device. Your account works on any of them, and the app tells you itself when an update is out.",
      trustEyebrow: "Security", trustTitle: "Built to protect your company's data",
      appStore: "App Store", appStoreSmall: "Download on the", appStoreBody: "For iPhone and iPad — the official release.",
      googlePlay: "Google Play", googlePlaySmall: "Get it on", googlePlayBody: "For Android — the official release, updated from inside the app.",
      testFlight: "TestFlight", testFlightSmall: "Beta on", testFlightBody: "Try upcoming iPhone releases before they ship, through Apple's TestFlight app.",
      apk: "Direct APK", apkSmall: "Download the", apkBody: "For Android devices without Google Play — it updates itself from inside the app.",
      tagOfficial: "Official", tagBeta: "Beta", tagDirect: "Direct",
      contact: "Contact us",
      features: [
        ["approve", "Approvals on the go", "Purchase requests and approvals reach you with a notification; approve or reject from your phone."],
        ["invoice", "Invoices and vouchers", "Invoices, receipts and payment vouchers in detail, with search and date filters."],
        ["ledger", "Accounts and balances", "Account statements, customer and supplier balances, and each person's ledger."],
        ["cash", "Cash report", "Cash by site and period at a glance."],
        ["chart", "Operational dashboard", "Site and branch sales, top-selling items, discounts and top agents."],
        ["headset", "Call-centre dashboard", "Rush hours, site sales, top agents and complaints."],
        ["pos", "U-Serve reports", "More than 40 restaurant sales reports: sales, products, payments, orders and staff."],
        ["period", "Sales by period", "Today, week, month and year to date on top of every sales report — tap one to see the report for it."],
        ["building", "Many companies and branches", "Choose the company at sign-in and switch companies and branches without signing out."],
        ["clock", "Rush hours and products", "Charts of the busiest hours and best-selling products by branch and period."],
        ["update", "Always up to date", "Shows your version, checks for updates, and updates itself from the store or the direct link."],
        ["globe", "Arabic, English and French", "Full right-to-left interface, a layout made for iPad, and instant language switching."]
      ],
      trust: [
        ["finger", "Biometric sign-in", "Open the app with your fingerprint or Face ID; the password stays in the device's secure vault."],
        ["shield", "Only what you're allowed", "Every screen and every report follows your account's permissions on your company's server."],
        ["lock", "Verified updates", "Updates come from the official stores, or from a link whose SHA-256 the app checks before installing."]
      ],
      shots: [
        "The daily sales dashboard",
        "Sales by period",
        "Every report in one place",
        "Rush hours",
        "The classic experience",
        "Approvals and purchase requests",
        "The operational dashboard",
        "Choose your company at sign-in",
        "App updates",
        "Two experiences in one app"
      ]
    }
  };

  // Real captures (integration_test/screenshots in U-Track-V3), sample data.
  var SHOTS = ["01_dashboard", "02_sales_periods", "03_reports", "04_rush_hours",
    "05_classic_home", "06_classic_approvals", "07_classic_operations", "08_company_picker", "09_app_updates", "10_experience"];

  var P = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    approve: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
    invoice: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M8 7h8M8 11h8M8 15h5"/>',
    ledger: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M9 7h7M9 11h5"/>',
    cash: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
    chart: '<path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/>',
    headset: '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
    pos: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h8M8 14h2M14 14h2M8 18h2M14 18h2"/>',
    period: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M8 14h2v4H8zM14 14h2v4h-2z"/>',
    building: '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    update: '<path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 21v-5h5"/><path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"/>',
    finger: '<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
  };
  function icon(name) { return '<svg viewBox="0 0 24 24" ' + P + ' aria-hidden="true">' + (ICONS[name] || "") + "</svg>"; }

  var STORE_ICONS = {
    appStore: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.37 12.62c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.86-.76-1.47.02-2.83.86-3.59 2.17-1.53 2.66-.39 6.6 1.1 8.75.73 1.05 1.6 2.24 2.73 2.2 1.1-.04 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.4 1.2-2.46-.03-.01-2.28-.88-2.3-3.5ZM14.2 6.17c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.67-.92 2.66.97.08 1.96-.49 2.56-1.21Z"/></svg>',
    googlePlay: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#34a853" d="M3.6 2.3 13.8 12 3.6 21.7a1.5 1.5 0 0 1-.6-1.2V3.5c0-.5.2-.9.6-1.2Z"/><path fill="#fbbc04" d="m17.2 15.4-3.4-3.4 3.4-3.4 3.9 2.2c1.1.6 1.1 1.8 0 2.4l-3.9 2.2Z"/><path fill="#ea4335" d="M3.6 21.7 13.8 12l3.4 3.4-11.9 6.7c-.6.3-1.2.2-1.7-.4Z"/><path fill="#4285f4" d="M3.6 2.3c.5-.6 1.1-.7 1.7-.4l11.9 6.7-3.4 3.4L3.6 2.3Z"/></svg>',
    testFlight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>',
    apk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>'
  };
  var STORE_CLASS = { appStore: "", googlePlay: "", testFlight: "tf", apk: "apk" };
  var STORE_TAG = { appStore: "tagOfficial", googlePlay: "tagOfficial", testFlight: "tagBeta", apk: "tagDirect" };
  var ORDER = ["appStore", "googlePlay", "testFlight", "apk"];

  var cfg = null, lang = "ar";

  function store(key, url, t) {
    return '<a class="store ' + STORE_CLASS[key] + '" href="' + esc(url) + '" target="_blank" rel="noopener">' +
      STORE_ICONS[key] + "<span><small>" + esc(t[key + "Small"]) + "</small><strong>" + esc(t[key]) + "</strong></span></a>";
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function safeUrl(u) { return /^https:\/\//i.test(u || "") ? u : ""; }
  function enabled(key) { var l = cfg.links && cfg.links[key]; return !!(l && l.enabled && safeUrl(l.url)); }

  function render() {
    var t = T[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = lang === "ar" ? "U-Track — تقارير وموافقات شركتك" : "U-Track — your company's approvals and reports";
    document.getElementById("lang").textContent = lang === "ar" ? "EN" : "ع";
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t[el.getAttribute("data-i18n")] || ""; });
    document.getElementById("ver").textContent = cfg.version || "";

    var n = document.getElementById("notice");
    var a = cfg.announcement || {};
    n.hidden = !(a.enabled && a[lang]);
    n.textContent = a[lang] || "";

    document.getElementById("heroStores").innerHTML = ORDER.filter(function (k) { return k !== "testFlight" && enabled(k); })
      .map(function (k) { return store(k, cfg.links[k].url, t); }).join("");
    document.getElementById("heroShot").src = "assets/img/hero_" + lang + ".webp";
    document.getElementById("heroShot").alt = t.shots[0];

    var sec = cfg.sections || {};
    document.getElementById("features").hidden = sec.features === false;
    document.getElementById("screens").hidden = sec.screens === false;
    document.getElementById("featGrid").innerHTML = t.features.map(function (f) {
      return '<article class="card"><div class="icon">' + icon(f[0]) + "</div><h3>" + esc(f[1]) + "</h3><p>" + esc(f[2]) + "</p></article>";
    }).join("");
    document.getElementById("trust").innerHTML = t.trust.map(function (f) {
      return '<article class="card"><div class="icon">' + icon(f[0]) + "</div><h3>" + esc(f[1]) + "</h3><p>" + esc(f[2]) + "</p></article>";
    }).join("");
    document.getElementById("strip").innerHTML = SHOTS.map(function (s, i) {
      return '<img loading="lazy" src="assets/shots/' + lang + "/" + s + '.webp" alt="' + esc(t.shots[i]) + '" width="560" height="1217">';
    }).join("");

    document.getElementById("dlCards").innerHTML = ORDER.filter(enabled).map(function (k) {
      return '<article class="card"><span class="tag">' + esc(t[STORE_TAG[k]]) + "</span><h3>" + esc(t[k]) + "</h3><p>" +
        esc(t[k + "Body"]) + "</p>" + store(k, cfg.links[k].url, t) + "</article>";
    }).join("");

    var c = cfg.contact || {}, parts = [];
    if (c.email) parts.push('<a href="mailto:' + esc(c.email) + '">' + esc(c.email) + "</a>");
    if (safeUrl(c.website)) parts.push('<a href="' + esc(c.website) + '" target="_blank" rel="noopener">' + esc(c.website.replace(/^https:\/\//, "")) + "</a>");
    document.getElementById("contact").innerHTML = parts.length ? esc(t.contact) + ": " + parts.join(" · ") : "";
  }

  function readDraft() {
    if (!/[?&]preview=1/.test(location.search)) return null;
    try { return JSON.parse(localStorage.getItem("utrack-config-draft") || "null"); } catch (e) { return null; }
  }

  function start(config) {
    cfg = config;
    var q = /[?&]lang=(ar|en)/.exec(location.search);
    var saved = null;
    try { saved = localStorage.getItem("utrack-lang"); } catch (e) {}
    lang = (q && q[1]) || saved || cfg.defaultLanguage || ((navigator.language || "").indexOf("ar") === 0 ? "ar" : "en");
    if (!T[lang]) lang = "ar";
    render();
  }

  document.getElementById("lang").addEventListener("click", function () {
    lang = lang === "ar" ? "en" : "ar";
    try { localStorage.setItem("utrack-lang", lang); } catch (e) {}
    render();
  });
  document.getElementById("year").textContent = new Date().getFullYear();

  var strip = document.getElementById("strip");
  function scrollBy(dir) {
    var rtl = document.documentElement.dir === "rtl";
    strip.scrollBy({ left: (rtl ? -dir : dir) * 280, behavior: "smooth" });
  }
  document.getElementById("next").addEventListener("click", function () { scrollBy(1); });
  document.getElementById("prev").addEventListener("click", function () { scrollBy(-1); });

  var lb = document.getElementById("lightbox");
  strip.addEventListener("click", function (e) {
    if (e.target.tagName !== "IMG") return;
    lb.querySelector("img").src = e.target.src;
    lb.querySelector("img").alt = e.target.alt;
    lb.classList.add("open");
  });
  lb.addEventListener("click", function () { lb.classList.remove("open"); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") lb.classList.remove("open"); });

  var draft = readDraft();
  if (draft) { start(draft); return; }
  fetch("config.json?v=" + Date.now(), { cache: "no-store" }).then(function (r) { return r.json(); }).then(start).catch(function () {
    start({ version: "", defaultLanguage: "ar", links: {}, sections: {} });
  });
})();
