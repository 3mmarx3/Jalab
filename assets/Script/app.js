const body = document.getElementById("body");
let currentLanguage = localStorage.getItem("selectedLanguage") || "en";

function changeLanguage(language) {
  if (currentLanguage !== language) {
    currentLanguage = language;
    localStorage.setItem("selectedLanguage", language);
    updateCurrentLanguage();
    setTimeout(updateGoogleTranslateLanguage, 1000);
  }
}

function updateCurrentLanguage() {
  const element = document.getElementById("title");
  if (currentLanguage === "en") {
    body.classList.remove("arabic");
    element.textContent = element.getAttribute("data-meaning-en");
  } else if (currentLanguage === "ar") {
    body.classList.add("arabic");
    element.textContent = element.getAttribute("data-meaning-ar");
  }
  highlightActiveButton();
}

function highlightActiveButton() {
  const btnAr = document.getElementById("btn-ar");
  const btnEn = document.getElementById("btn-en");
  if (currentLanguage === "en") {
    btnEn.classList.add("active");
    btnAr.classList.remove("active");
  } else {
    btnAr.classList.add("active");
    btnEn.classList.remove("active");
  }
}

function updateGoogleTranslateLanguage() {
  const googleTranslateSelect = document.querySelector(
    "#google_element select.goog-te-combo"
  );
  if (googleTranslateSelect) {
    googleTranslateSelect.value = currentLanguage;
    googleTranslateSelect.dispatchEvent(new Event("change"));
    localStorage.setItem("googleTranslateLang", googleTranslateSelect.value);
  }
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { defaultLanguage: "en", includedLanguages: "en,ar" },
    "google_element"
  );
  updateCurrentLanguage();
  setTimeout(updateGoogleTranslateLanguage, 1000);
}

window.onload = updateCurrentLanguage;
