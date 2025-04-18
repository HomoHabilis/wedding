// 1. Define your texts in all languages
const texts = {
  it: {
    welcome: "Benvenuti al nostro matrimonio!",
    mainInfo: "Ecco il menu. Riceverete 2 gettoni da stampare con Ariana, che gestisce il photobooth. Contattatela su WhatsApp, il link è qui sotto.",
    tokenInfo: "Riceverete 2 token per stampare le foto. Contattateci su WhatsApp.",
    whatsappMsg: "Ciao! Sono del matrimonio e devo inviarti foto"
  },
  en: {
    welcome: "Welcome to our wedding!",
    mainInfo: "Here is the menu. You will receive 2 tokens to be able to print with Ariana who is managing the photobooth. Please contact her on whatsapp, the link is below.",
    tokenInfo: "You’ll get 2 tokens for printing photos. Contact us on WhatsApp.",
    whatsappMsg: "Hi! I need tokens for the photo printing."
  },
  fr: {
    welcome: "Bienvenue à notre mariage !",
    mainInfo: "Voici le menu. Vous recevrez 2 jetons pour imprimer avec Ariana, la responsable du photobooth. Veuillez la contacter sur WhatsApp (lien ci-dessous).",
    tokenInfo: "Vous recevrez 2 jetons pour imprimer les photos. Contactez-nous sur WhatsApp.",
    whatsappMsg: "Bonjour ! J'ai besoin de jetons pour l'impression de photos."
  }
};

const defaultLang = "it";
let currentLang = defaultLang;

// 2. DOM elements
const welcomeEl = document.getElementById("welcome-text");
const tokenEl   = document.getElementById("token-text");
const mainEl   = document.getElementById("main-text");
const waLinkEl  = document.getElementById("whatsapp-link");

// 3. WhatsApp number (use WhatsApp Business if possible)
const waNumber = "393515535262"; // country code + number, no “+” or spaces

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
  tokenEl.textContent = lang.tokenInfo;
  mainEl.textContent = lang.mainInfo
  const msg = encodeURIComponent(lang.whatsappMsg);
  waLinkEl.href = `https://wa.me/${waNumber}?text=${msg}`;
}

// 6. Initialize
renderLanguage();
