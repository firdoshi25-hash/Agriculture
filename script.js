
const cropData = {
  bihar: {
    name: "Bihar",
    crops: [
      { name: "Rice (Dhaan)", season: "Kharif", icon: "🌾" },
      { name: "Maize (Makka)", season: "Kharif", icon: "🌽" },
      { name: "Wheat (Gehu)", season: "Rabi", icon: "🌾" },
      { name: "Lentil (Masoor)", season: "Rabi", icon: "🫘" }
    ]
  },
  punjab: {
    name: "Punjab",
    crops: [
      { name: "Rice (Dhaan)", season: "Kharif", icon: "🌾" },
      { name: "Cotton (Kapas)", season: "Kharif", icon: "🌿" },
      { name: "Wheat (Gehu)", season: "Rabi", icon: "🌾" },
      { name: "Mustard (Sarson)", season: "Rabi", icon: "🌼" }
    ]
  },
  haryana: {
    name: "Haryana",
    crops: [
      { name: "Bajra", season: "Kharif", icon: "🌾" },
      { name: "Rice (Dhaan)", season: "Kharif", icon: "🌾" },
      { name: "Wheat (Gehu)", season: "Rabi", icon: "🌾" },
      { name: "Mustard (Sarson)", season: "Rabi", icon: "🌼" }
    ]
  },
  "uttar-pradesh": {
    name: "Uttar Pradesh",
    crops: [
      { name: "Rice (Dhaan)", season: "Kharif", icon: "🌾" },
      { name: "Maize (Makka)", season: "Kharif", icon: "🌽" },
      { name: "Wheat (Gehu)", season: "Rabi", icon: "🌾" },
      { name: "Potato (Aaloo)", season: "Rabi", icon: "🥔" }
    ]
  },
  "himachal-pradesh": {
    name: "Himachal Pradesh",
    crops: [
      { name: "Maize (Makka)", season: "Kharif", icon: "🌽" },
      { name: "Paddy (Dhaan)", season: "Kharif", icon: "🌾" },
      { name: "Wheat (Gehu)", season: "Rabi", icon: "🌾" },
      { name: "Barley (Jau)", season: "Rabi", icon: "🌱" }
    ]
  },
  maharashtra: {
    name: "Maharashtra",
    crops: [
      { name: "Soybean", season: "Kharif", icon: "🌱" },
      { name: "Cotton (Kapas)", season: "Kharif", icon: "🌿" },
      { name: "Wheat (Gehu)", season: "Rabi", icon: "🌾" },
      { name: "Gram (Chana)", season: "Rabi", icon: "🫘" }
    ]
  },
  rajasthan: {
    name: "Rajasthan",
    crops: [
      { name: "Bajra", season: "Kharif", icon: "🌾" },
      { name: "Guar", season: "Kharif", icon: "🌱" },
      { name: "Wheat (Gehu)", season: "Rabi", icon: "🌾" },
      { name: "Mustard (Sarson)", season: "Rabi", icon: "🌼" }
    ]
  },
  "madhya-pradesh": {
    name: "Madhya Pradesh",
    crops: [
      { name: "Soybean", season: "Kharif", icon: "🌱" },
      { name: "Rice (Dhaan)", season: "Kharif", icon: "🌾" },
      { name: "Wheat (Gehu)", season: "Rabi", icon: "🌾" },
      { name: "Gram (Chana)", season: "Rabi", icon: "🫘" }
    ]
  }
};

const riskData = {
  drought: {
    title: "Drought (Sukha)",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1100&q=80",
    description: "Jab lambe samay tak baarish nahi hoti aur mitti mein nami kam ho jaati hai, tab fasal ko paani ki kami ka saamna karna padta hai.",
    signs: [
      "Pattiyan murjhane lagti hain.",
      "Mitti bahut sookhi aur sakht ho jaati hai.",
      "Paudhon ki growth ruk sakti hai."
    ],
    prevention: [
      "Apne kshetra ke hisaab se kam paani wali fasal ya variety chunen.",
      "Mitti mein nami bachane ke liye mulch ka use karein.",
      "Paani ki uplabdhata ke hisaab se sinchai karein.",
      "Mausam ka forecast dekhkar kheti ke kaam plan karein."
    ],
    action: "Nuksan ka record aur photos rakhein. Apne local agriculture officer se salah lein aur insurance cover ki conditions check karein."
  },
  flood: {
    title: "Flood aur Waterlogging (Jal Bharav)",
    image: "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1100&q=80",
    description: "Bahut zyada baarish ya nadi ka paani khet mein bharne se jadon ko hawa nahi milti aur fasal ko nuksan ho sakta hai.",
    signs: [
      "Khet mein lambe samay tak paani jama rehta hai.",
      "Pattiyan peeli pad sakti hain.",
      "Paudhe jhukne ya sadne lag sakte hain."
    ],
    prevention: [
      "Khet ke drainage channels saaf rakhein.",
      "Apne kshetra ke liye suitable crop aur variety chunen.",
      "Jahan sambhav ho, paani nikalne ke raaste pehle se plan karein.",
      "Tez baarish ke forecast par nazar rakhein."
    ],
    action: "Paani utarne ke baad nuksan ki photos lein. Bina salah ke fasal ko turant hatane ya nasht karne se pehle insurance rules aur local authority se poochhein."
  },
  hail: {
    title: "Hailstorm aur Tez Hawa (Ola aur Aandhi)",
    image: "https://images.unsplash.com/photo-1514632595-4944383f2737?auto=format&fit=crop&w=1100&q=80",
    description: "Olon, tez hawa aur aandhi se pattiyan, tana, phool aur phal toot sakte hain. Kharab mausam ke samay pakti fasal zyada vulnerable ho sakti hai.",
    signs: [
      "Pattiyon mein chhed ya phatne ke nishan.",
      "Tane ya branches ka tootna.",
      "Phool aur phalon ka girna."
    ],
    prevention: [
      "Mausam ki warning par nazar rakhein.",
      "Support ki zaroorat wali fasal mein recommended support lagayein.",
      "Khet aur aas-paas ke drainage ko maintain karein.",
      "Kharab mausam ke baad fasal ko dhyan se inspect karein."
    ],
    action: "Damage ki date, photos aur affected area ka record banayein. Claim ki deadline ke liye apni policy aur official scheme instructions check karein."
  },
  pests: {
    title: "Pests (Keet aur Kide)",
    image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0f6c6c?auto=format&fit=crop&w=1100&q=80",
    description: "Kuch insects paudhon ki pattiyan, tana, jad ya phal ko nuksan pahunchate hain. Har keet ka treatment alag ho sakta hai.",
    signs: [
      "Pattiyon par chhed ya chipchipe nishan.",
      "Pattiyon ka murhna ya rang badalna.",
      "Paudhon ki growth kam hona."
    ],
    prevention: [
      "Fasal ko regular check karein.",
      "Khet ko saaf rakhein aur crop rotation par salah lein.",
      "Useful insects ko bina zaroorat nuksan na pahunchayein.",
      "Pest identify karne ke baad hi recommended control method use karein."
    ],
    action: "Keet aur damage ki clear photos lein. Agriculture expert se sahi identification karayein. Pesticide sirf label aur expert guidance ke mutabik use karein."
  },
  disease: {
    title: "Crop Diseases (Fasal ki Bimari)",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1100&q=80",
    description: "Fungus, bacteria, viruses aur kuch environmental conditions fasal mein bimari jaise symptoms paida kar sakti hain.",
    signs: [
      "Pattiyon par daag ya safed powder jaisa layer.",
      "Paudhon ka peela padna ya murjhna.",
      "Phal, tana ya jad par sadan ke nishan."
    ],
    prevention: [
      "Certified aur healthy seeds ka use karein.",
      "Recommended spacing aur irrigation follow karein.",
      "Affected plants ko inspect karein aur spread par nazar rakhein.",
      "Disease confirm kiye bina random chemical use na karein."
    ],
    action: "Symptoms ki photos aur date note karein. Local agriculture expert se diagnosis aur treatment ki salah lein."
  },
  rain: {
    title: "Unseasonal Rain (Be-mausam Baarish)",
    image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1100&q=80",
    description: "Jab fasal ke sensitive stage par unexpected baarish hoti hai, tab harvesting, drying aur crop quality par asar pad sakta hai.",
    signs: [
      "Kati hui fasal ka geela rehna.",
      "Anaaj ki quality par asar.",
      "Khet mein paani jama hona."
    ],
    prevention: [
      "Mausam forecast ke hisaab se harvesting plan karein.",
      "Kati fasal ko safe aur ventilated jagah par rakhein.",
      "Storage ko dry aur clean rakhein.",
      "Khet mein drainage ka dhyan rakhein."
    ],
    action: "Baarish aur fasal ke nuksan ka record rakhein. Insurance mein kaun se risks covered hain, policy documents mein verify karein."
  }
};

function getElement(id) {
  return document.getElementById(id);
}

function renderCrops() {
  const stateSelect = getElement("stateSelect");
  const seasonSelect = getElement("seasonSelect");
  const cropList = getElement("cropList");
  const cropHeading = getElement("cropHeading");
  const cropNote = getElement("cropNote");

  if (!stateSelect || !seasonSelect || !cropList) return;

  const selectedState = stateSelect.value;
  const selectedSeason = seasonSelect.value;
  const state = cropData[selectedState];

  if (!state) {
    cropList.innerHTML = "<p>Is state ke liye crop information available nahi hai.</p>";
    return;
  }

  const filteredCrops = state.crops.filter(crop => {
    return selectedSeason === "all" ||
  crop.season.toLowerCase() === selectedSeason.toLowerCase();
  });

  if (cropHeading) {
    cropHeading.textContent = `${state.name} ki Major Crops`;
  }

  cropList.innerHTML = "";

  if (filteredCrops.length === 0) {
    cropList.innerHTML = "<p>Is season ke liye crop example available nahi hai.</p>";
  } else {
    filteredCrops.forEach(crop => {
      const item = document.createElement("div");
      item.className = "crop-chip";
      item.innerHTML = `<span aria-hidden="true">${crop.icon}</span><span>${crop.name} — ${crop.season}</span>`;
      cropList.appendChild(item);
    });
  }

  if (cropNote) {
    cropNote.textContent =
      "Yeh example crops hain. Actual crops aur insurance availability aapke district, season aur notified scheme par depend karti hai.";
  }
}

function renderRiskDetail(riskKey) {
  const detail = getElement("riskDetail");
  const risk = riskData[riskKey];

  if (!detail || !risk) return;

  const signs = risk.signs.map(sign => `<li>${sign}</li>`).join("");
  const prevention = risk.prevention.map(item => `<li>${item}</li>`).join("");

  detail.innerHTML = `
    <h3>${risk.title}</h3>
    <p>${risk.description}</p>
    <img src="${risk.image}" alt="${risk.title} ke example ki tasveer" loading="lazy">
    <h4>⚠️ Kaise pehchanein?</h4>
    <ul>${signs}</ul>
    <h4>🌱 Bachav ke tareeke</h4>
    <ul>${prevention}</ul>
    <h4>📋 Nuksan hone par kya karein?</h4>
    <p>${risk.action}</p>
    <p class="note">Yeh general educational guidance hai. Sahi treatment ke liye local agriculture expert ki salah lein.</p>
  `;

  detail.hidden = false;
  detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function setupRiskCards() {
  const cards = document.querySelectorAll("[data-risk]");

  cards.forEach(card => {
    card.setAttribute("aria-expanded", "false");

    card.addEventListener("click", () => {
      const riskKey = card.dataset.risk;
      const detail = getElement("riskDetail");
      const isAlreadyOpen = card.getAttribute("aria-expanded") === "true";

      cards.forEach(otherCard => {
        otherCard.setAttribute("aria-expanded", "false");
      });

      if (isAlreadyOpen) {
        if (detail) detail.hidden = true;
        return;
      }

      card.setAttribute("aria-expanded", "true");
      renderRiskDetail(riskKey);
    });
  });
}

function formatRupees(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

function calculateProfitLoss() {
  const costInput = getElement("costInput");
  const incomeInput = getElement("incomeInput");
  const lossInput = getElement("lossInput");
  const premiumInput = getElement("premiumInput");
  const payoutInput = getElement("payoutInput");

  if (!costInput || !incomeInput || !lossInput || !premiumInput || !payoutInput) {
    return;
  }

  const cost = Number(costInput.value);
  const income = Number(incomeInput.value);
  const lossPercent = Number(lossInput.value);
  const premium = Number(premiumInput.value);
  const payout = Number(payoutInput.value);

  const values = [cost, income, lossPercent, premium, payout];

  if (values.some(value => !Number.isFinite(value) || value < 0) ||
      lossPercent > 100) {
    alert("Please valid positive values enter karein. Loss percentage 0 se 100 ke beech hona chahiye.");
    return;
  }

  const reducedIncome = income * (1 - lossPercent / 100);
  const withoutInsurance = reducedIncome - cost;
  const withInsurance = reducedIncome - cost - premium + payout;

  const reducedIncomeEl = getElement("reducedIncome");
  const withoutInsuranceEl = getElement("withoutInsurance");
  const premiumCostEl = getElement("premiumCost");
  const payoutResultEl = getElement("payoutResult");
  const withInsuranceEl = getElement("withInsurance");
  const comparisonText = getElement("comparisonText");

  if (reducedIncomeEl) reducedIncomeEl.textContent = formatRupees(reducedIncome);
  if (withoutInsuranceEl) withoutInsuranceEl.textContent = formatRupees(withoutInsurance);
  if (premiumCostEl) premiumCostEl.textContent = formatRupees(premium);
  if (payoutResultEl) payoutResultEl.textContent = formatRupees(payout);
  if (withInsuranceEl) withInsuranceEl.textContent = formatRupees(withInsurance);

  if (comparisonText) {
    const difference = withInsurance - withoutInsurance;

    if (difference > 0) {
      comparisonText.textContent =
        `Is estimate mein insurance ke saath result ${formatRupees(difference)} zyada hai. Actual payout policy aur approved claim par depend karta hai.`;
    } else if (difference < 0) {
      comparisonText.textContent =
        `Is estimate mein insurance ke saath result ${formatRupees(Math.abs(difference))} kam hai. Insurance ka main purpose covered risks ke against financial protection hai.`;
    } else {
      comparisonText.textContent =
        "Is estimate mein dono results barabar hain. Actual payout policy aur approved claim par depend karta hai.";
    }
  }
}

function resetCalculator() {
  const defaults = {
    costInput: "",
    incomeInput: "",
    lossInput: "",
    premiumInput: "",
    payoutInput: ""
  };

  Object.entries(defaults).forEach(([id, value]) => {
    const element = getElement(id);
    if (element) element.value = value;
  });

  [
    "reducedIncome",
    "withoutInsurance",
    "premiumCost",
    "payoutResult",
    "withInsurance"
  ].forEach(id => {
    const element = getElement(id);
    if (element) element.textContent = "—";
  });

  const comparisonText = getElement("comparisonText");
  if (comparisonText) {
    comparisonText.textContent = "Apni values enter karke estimate calculate karein.";
  }
}

function setupMobileMenu() {
  const menuButton = getElement("menuToggle");
  const navLinks = getElement("navLinks");

  if (!menuButton || !navLinks) return;

  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
    menuButton.textContent = isOpen ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
      menuButton.textContent = "☰";
    });
  });
}

function setupCalculator() {
  const calculateButton = getElement("calculateButton");
  const resetButton = getElement("resetButton");

  if (calculateButton) {
    calculateButton.addEventListener("click", calculateProfitLoss);
  }

  if (resetButton) {
    resetButton.addEventListener("click", resetCalculator);
  }
}

function setupCropSelectors() {
  const stateSelect = getElement("stateSelect");
  const seasonSelect = getElement("seasonSelect");

  if (stateSelect) stateSelect.addEventListener("change", renderCrops);
  if (seasonSelect) seasonSelect.addEventListener("change", renderCrops);

  renderCrops();
}

document.addEventListener("DOMContentLoaded", () => {
  setupCropSelectors();
  setupRiskCards();
  setupCalculator();
  setupMobileMenu();
});