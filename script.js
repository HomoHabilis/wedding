// 1. Define your texts in all languages
const texts = {
  it: {
    welcome: "Benvenuti al nostro matrimonio!",
    // === NEW EXPLANATION TEXT ===
    explanation: "Siamo così felici di condividere questo giorno speciale con voi! Qui sotto trovate il menù della cena. Speriamo sia di vostro gradimento.",
    // ============================
    tokenInfo: "Riceverete 2 gettoni da stampare con Arianna, che gestisce il photobooth. Contattatela su WhatsApp, il link è qui sotto.", // Merged info here
    whatsappMsg: "Ciao! Sono al matrimonio e voglio inviarti foto da stampare",
    whatsappIntro: "Contatta il Photobooth:", // NEW: Text before the link
    whatsappLinkText: "Invia foto su WhatsApp", // NEW: Text next to the icon
    menu: [
      { title: "Antipasti", dishes: ["Insalatina di seppie, gamberi e verdure croccanti in citronette", "Salmone marinato su cheese cake di taralli, robiola al profumo di arancia", "Parmigiana di melanzane, gambero panko, crema di stracciatella", "Tonno scottato, guacamole e pure di mango"] },
      { title: "Primi", dishes: ["Cappelli del prete in bisque di crostacei, gamberi e pesto di pistacchi", "Strozzapreti, seppioline, crema e chips di carciofi"] },
      { title: "Secondo", dishes: ["Filetto di branzino alla Mediterrana, olive taggiasche e pomodorini confit", "Patate al forno", "Misticanza fiorita, mele e vinaigrette"] },
      { title: "Dolce", dishes: ["Dolci misti e frutta", "Dolce sorpresa"] }
    ]
  },
  en: {
    welcome: "Welcome to our wedding!",
	explanation: "We are so happy to share this special day with you! Below you can find the dinner menu. We hope you enjoy it.",    
	tokenInfo: "You will receive 2 tokens to print photos with Arianna, who manages the photobooth. Contact her on WhatsApp using the link below.", // Merged info here
    whatsappMsg: "Hi! I'm at the wedding and need to send you photos for printing.", // Slightly adjusted message
    whatsappIntro: "Contact Photobooth:", // NEW
    whatsappLinkText: "Send photos on WhatsApp", // NEW
    menu: [
      { title: "Appetizers", dishes: ["Cuttlefish salad, shrimp, and crispy vegetables in citronette", "Marinated salmon on taralli cheesecake, orange-scented robiola cheese", "Eggplant parmigiana, panko shrimp, stracciatella cream", "Seared tuna, guacamole, and mango puree"] },
      { title: "First Courses", dishes: ["Priest's hats pasta in crustacean bisque, shrimp, and pistachio pesto", "Strozzapreti pasta, cuttlefish, artichoke cream, and chips"] },
      { title: "Second Course", dishes: ["Mediterranean-style sea bass fillet, Taggiasca olives, and confit cherry tomatoes", "Baked potatoes", "Flowered mixed greens salad, apples, and vinaigrette"] },
      { title: "Dessert", dishes: ["Mixed pastries and fruit", "Sweet surprise"] }
    ]
  },
  fr: {
    welcome: "Bienvenue à notre mariage !",
    // === NEW EXPLANATION TEXT ===
    explanation: "Nous sommes si heureux de partager ce jour spécial avec vous ! Vous trouverez ci-dessous le menu du dîner. Nous espérons qu'il vous plaira.",
    // ============================
    tokenInfo: "Vous recevrez 2 jetons pour imprimer des photos avec Arianna, responsable du photobooth. Contactez-la sur WhatsApp via le lien ci-dessous.", // Merged info here
    whatsappMsg: "Bonjour ! Je suis au mariage et je veux vous envoyer des photos", // Slightly adjusted message
    whatsappIntro: "Contacter le Photobooth:", // NEW
    whatsappLinkText: "Envoyer photos sur WhatsApp", // NEW
    menu: [
      { title: "Entrées", dishes: ["Salade de seiches, crevettes et légumes croquants en citronnette", "Saumon mariné sur cheesecake de taralli, robiola parfumée à l'orange", "Parmigiana d'aubergines, crevette panko, crème de stracciatella", "Thon poêlé, guacamole et purée de mangue"] },
      { title: "Premiers Plats", dishes: ["« Cappelli del prete » en bisque de crustacés, crevettes et pesto de pistaches", "« Strozzapreti », petites seiches, crème et chips d'artichauts"] },
      { title: "Deuxième Plat", dishes: ["Filet de bar à la Méditerranéenne, olives Taggiasche et tomates cerises confites", "Pommes de terre au four", "Mesclun fleuri, pommes et vinaigrette"] },
      { title: "Dessert", dishes: ["Pâtisseries variées et fruits", "Douce surprise"] }
    ]
  },
  es: {
    welcome: "¡Bienvenidos a nuestra boda!",
    // === NEW EXPLANATION TEXT ===
    explanation: "¡Estamos muy felices de compartir este día especial con ustedes! A continuación encontrarán el menú de la cena. Esperamos que lo disfruten.",
    // ============================
    tokenInfo: "Recibirán 2 fichas para imprimir fotos con Arianna, que gestiona el photobooth. Contáctala por WhatsApp usando el enlace de abajo.", // <-- UPDATED
    whatsappMsg: "¡Hola! Estoy en la boda y necesito enviarte fotos para imprimir.", // <-- UPDATED
    whatsappIntro: "Contactar Photobooth:", // NEW
    whatsappLinkText: "Enviar fotos por WhatsApp", // NEW
    menu: [
      { title: "Aperitivos", dishes: ["Ensalada de sepia, gambas y verduras crujientes en vinagreta de limón", "Salmón marinado sobre cheesecake de taralli, robiola con aroma de naranja", "Parmigiana de berenjenas, gamba panko, crema de stracciatella", "Atún sellado, guacamole y puré de mango"] },
      { title: "Primeros Platos", dishes: ["Pasta «Cappelli del prete» en bisque de crustáceos, gambas y pesto de pistachos", "Pasta «Strozzapreti», sepia, crema y chips de alcachofas"] },
      { title: "Segundo Plato", dishes: ["Filete de lubina a la Mediterránea, aceitunas Taggiasca y tomates cherry confitados", "Patatas al horno", "Mezcla de hojas verdes floridas, manzanas y vinagreta"] },
      { title: "Postre", dishes: ["Pasteles variados y fruta", "Dulce sorpresa"] }
    ]
  },
  fi: {
    welcome: "Tervetuloa häihimme!",
    // === NEW EXPLANATION TEXT ===
    explanation: "Olemme niin onnellisia saadessamme jakaa tämän erityisen päivän kanssanne! Alta löydät illallismenun. Toivottavasti nautitte siitä.",
    // ============================
    tokenInfo: "Saat 2 polettia valokuvien tulostamiseen Ariannan kanssa, joka hoitaa photoboothia. Ota häneen yhteyttä WhatsAppilla alla olevan linkin kautta.", // <-- UPDATED
    whatsappMsg: "Hei! Olen häissä ja minun pitää lähettää sinulle kuvia tulostettavaksi.", // <-- UPDATED
    whatsappIntro: "Ota yhteys Photoboothiin:", // NEW
    whatsappLinkText: "Lähetä kuvia WhatsAppissa", // NEW
    menu: [
      { title: "Alkuruoat", dishes: ["Seepiasalaatti, katkarapuja ja rapeita vihanneksia sitruunakastikkeessa", "Marinoitua lohta taralli-juustokakulla, appelsiinintuoksuista robiola-juustoa", "Munakoiso-parmigiana, panko-katkarapuja, stracciatella-kermaa", "Paistettua tonnikalaa, guacamolea ja mangososetta"] },
      { title: "Ensimmäiset pääruoat", dishes: ["«Cappelli del prete» -pasta äyriäisbisquessa, katkarapuja ja pistaasipestoa", "«Strozzapreti»-pasta, seepiaa, artisokkakreemiä ja -lastuja"] },
      { title: "Toinen pääruoka", dishes: ["Välimerellinen meriahvenfilee, Taggiasca-oliiveja ja confit-kirsikkatomaatteja", "Uuniperunat", "Kukkiva sekasalaatti, omenoita ja vinaigrette-kastiketta"] },
      { title: "Jälkiruoka", dishes: ["Valikoima leivonnaisia ja hedelmiä", "Makea yllätys"] }
    ]
  }
};

// --- Language Detection Logic (Keep from previous step if implemented) ---
const defaultLang = "it";
const supportedLangs = Object.keys(texts);

function getInitialLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang) {
    const primaryLang = browserLang.split('-')[0];
    if (supportedLangs.includes(primaryLang)) {
      return primaryLang;
    }
  }
  return defaultLang;
}

let currentLang = getInitialLanguage();
// --- End Language Detection ---

// 2. DOM elements
const welcomeEl = document.getElementById("welcome-text");
const explanationEl = document.getElementById("explanation-text"); // Get explanation element
const tokenEl = document.getElementById("token-text");
const infoSectionEl = document.getElementById("info");
const waLinkEl  = document.getElementById("whatsapp-link");
const waIntroTextEl = document.getElementById("whatsapp-intro-text");
const waLinkTextEl = document.getElementById("whatsapp-link-text");
const langButtons = document.querySelectorAll(".lang-switch button"); // Get all lang buttons

// 3. WhatsApp number (use WhatsApp Business if possible)
const waNumber = "393515535262";

// 4. Language switch buttons
langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      currentLang = btn.dataset.lang;
      renderLanguage();
    });
  });

// 5. Fill in texts and links
function updateActiveButton() {
    langButtons.forEach(btn => {
        if (btn.dataset.lang === currentLang) {
            btn.classList.add("active-lang"); // Add class to active button
        } else {
            btn.classList.remove("active-lang"); // Remove from others
        }
    });
}

// 5. Fill in texts and links
function renderLanguage() {
  const lang = texts[currentLang] || texts[defaultLang];
  if (!texts[currentLang]) {
      console.warn(`Language '${currentLang}' not found. Falling back to '${defaultLang}'.`);
      currentLang = defaultLang; // Correct the currentLang if fallback occurred
  }

  // Update simple text elements
  welcomeEl.textContent = lang.welcome;
  explanationEl.textContent = lang.explanation; // Update explanation text
  tokenEl.textContent = lang.tokenInfo;

  const msg = encodeURIComponent(lang.whatsappMsg);
  waLinkEl.href = `https://wa.me/${waNumber}?text=${msg}`;
  waIntroTextEl.textContent = lang.whatsappIntro + " "; // Add space after intro text
  waLinkTextEl.textContent = lang.whatsappLinkText;     // Set text next to icon

  // Render the menu
  infoSectionEl.innerHTML = '';
  lang.menu.forEach(course => {
    const courseTitle = document.createElement('h3');
    courseTitle.textContent = course.title;
    infoSectionEl.appendChild(courseTitle);

    const dishList = document.createElement('ul');
    course.dishes.forEach(dish => {
      const listItem = document.createElement('li');
      listItem.textContent = dish;
      dishList.appendChild(listItem);
    });
    infoSectionEl.appendChild(dishList);
  });

  // Update the visual state of the language buttons
  updateActiveButton();
}

// --- Optional: Add persistence using localStorage ---
renderLanguage(); // Initial render