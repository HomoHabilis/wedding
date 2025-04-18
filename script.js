// 1. Define your texts in all languages
const texts = {
  it: {
    welcome: "Benvenuti al nostro matrimonio!",
    tokenInfo: "Riceverete 2 token per stampare le foto. Contattateci su WhatsApp.",
    whatsappMsg: "Ciao! Ho bisogno di token per la stampa delle foto."
  },
  en: {
    welcome: "Welcome to our wedding!",
    tokenInfo: "You’ll get 2 tokens for printing photos. Contact us on WhatsApp.",
    whatsappMsg: "Hi! I need tokens for the photo printing."
  },
  fr: {
    welcome: "Bienvenue à notre mariage !",
    tokenInfo: "Vous recevrez 2 jetons pour imprimer les photos. Contactez-nous sur WhatsApp.",
    whatsappMsg: "Bonjour ! J'ai besoin de jetons pour l'impression de photos."
  }
};

const defaultLang = "it";
let currentLang = defaultLang;

// 2. DOM elements
const welcomeEl = document.getElementById("welcome-text");
const tokenEl   = document.getElementById("token-text");
const waLinkEl  = document.getElementById("whatsapp-link");

// 3. WhatsApp number (use WhatsApp Business if possible)
const waNumber = "393343027495"; // country code + number, no “+” or spaces

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
}

// 6. Initialize
renderLanguage();
