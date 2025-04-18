// 1. Define your texts in all languages
const texts = {
  it: {
    welcome: "Benvenuti al nostro matrimonio!",
    menu: ["Cerimonia", "Ricevimento", "Info Viaggio", "RSVP"],
    tokenInfo: "Riceverete 2 token per stampare le foto. Contattateci su WhatsApp.",
    whatsappMsg: "Ciao! Ho bisogno di token per la stampa delle foto."
  },
  en: {
    welcome: "Welcome to our wedding!",
    menu: ["Ceremony", "Reception", "Travel Info", "RSVP"],
    tokenInfo: "You’ll get 2 tokens for printing photos. Contact us on WhatsApp.",
    whatsappMsg: "Hi! I need tokens for the photo printing."
  },
  fr: {
    welcome: "Bienvenue à notre mariage !",
    menu: ["Cérémonie", "Réception", "Infos Voyage", "RSVP"],
    tokenInfo: "Vous recevrez 2 jetons pour imprimer les photos. Contactez-nous sur WhatsApp.",
    whatsappMsg: "Bonjour ! J'ai besoin de jetons pour l'impression de photos."
  }
};

const defaultLang = "it";
let currentLang = defaultLang;

// 2. DOM elements
const welcomeEl = document.getElementById("welcome-text");
const menuEl    = document.getElementById("menu");
const tokenEl   = document.getElementById("token-text");
const waLinkEl  = document.getElementById("whatsapp-link");
const qrEl      = document.getElementById("qr-code");

// 3. WhatsApp number (use WhatsApp Business if possible)
const waNumber = "393331234567"; // country code + number, no “+” or spaces

// 4. Language switch buttons
document.querySelectorAll(".lang-switch button")
  .forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang;
      renderLanguage();
    });
  });

// 5. Fill in texts and links
function renderLanguage() {
  const lang = texts[currentLang];
  welcomeEl.textContent = lang.welcome;
  menuEl.innerHTML = lang.menu
    .map(item => `<a href="#">${item}</a>`).join("");
  tokenEl.textContent = lang.tokenInfo;
  const msg = encodeURIComponent(lang.whatsappMsg);
  waLinkEl.href = `https://wa.me/${waNumber}?text=${msg}`;
  // Generate & embed QR code via Google Chart API
  const pageUrl = encodeURIComponent(window.location.href);
  qrEl.src = `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${pageUrl}`;
}

// 6. Initialize
renderLanguage();
