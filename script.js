// 1. Define your texts in all languages
const texts = {
  it: {
    welcome: "Benvenuti al nostro matrimonio!",
    tokenInfo: "Riceverete 2 gettoni da stampare con Arianna, che gestisce il photobooth. Contattatela su WhatsApp, il link è qui sotto.", // Merged info here
    whatsappMsg: "Ciao! Sono al matrimonio e voglio inviarti foto da stampare",
    menu: [
      { title: "Antipasti", dishes: ["Insalatina di seppie, gamberi e verdure croccanti in citronette", "Salmone marinato su cheese cake di taralli, robiola al profumo di arancia", "Parmigiana di melanzane, gambero panko, crema di stracciatella", "Tonno scottato, guacamole e pure di mango"] },
      { title: "Primi", dishes: ["Cappelli del prete in bisque di crostacei, gamberi e pesto di pistacchi", "Strozzapreti, seppioline, crema e chips di carciofi"] },
      { title: "Secondo", dishes: ["Filetto di branzino alla Mediterrana, olive taggiasche e pomodorini confit", "Patate al forno", "Misticanza fiorita, mele e vinaigrette"] },
      { title: "Dolce", dishes: ["Dolci misti e frutta", "Dolce sorpresa"] }
    ]
  },
  en: {
    welcome: "Welcome to our wedding!",
    tokenInfo: "You will receive 2 tokens to print photos with Arianna, who manages the photobooth. Contact her on WhatsApp using the link below.", // Merged info here
    whatsappMsg: "Hi! I'm at the wedding and need to send you photos for printing.", // Slightly adjusted message
    menu: [
      { title: "Appetizers", dishes: ["Cuttlefish salad, shrimp, and crispy vegetables in citronette", "Marinated salmon on taralli cheesecake, orange-scented robiola cheese", "Eggplant parmigiana, panko shrimp, stracciatella cream", "Seared tuna, guacamole, and mango puree"] },
      { title: "First Courses", dishes: ["Priest's hats pasta in crustacean bisque, shrimp, and pistachio pesto", "Strozzapreti pasta, cuttlefish, artichoke cream, and chips"] },
      { title: "Second Course", dishes: ["Mediterranean-style sea bass fillet, Taggiasca olives, and confit cherry tomatoes", "Baked potatoes", "Flowered mixed greens salad, apples, and vinaigrette"] },
      { title: "Dessert", dishes: ["Mixed pastries and fruit", "Sweet surprise"] }
    ]
  },
  fr: {
    welcome: "Bienvenue à notre mariage !",
    tokenInfo: "Vous recevrez 2 jetons pour imprimer des photos avec Arianna, responsable du photobooth. Contactez-la sur WhatsApp via le lien ci-dessous.", // Merged info here
    whatsappMsg: "Bonjour ! Je suis au mariage et je veux vous envoyer des photos", // Slightly adjusted message
    menu: [
      { title: "Entrées", dishes: ["Salade de seiches, crevettes et légumes croquants en citronnette", "Saumon mariné sur cheesecake de taralli, robiola parfumée à l'orange", "Parmigiana d'aubergines, crevette panko, crème de stracciatella", "Thon poêlé, guacamole et purée de mangue"] },
      { title: "Premiers Plats", dishes: ["« Cappelli del prete » en bisque de crustacés, crevettes et pesto de pistaches", "« Strozzapreti », petites seiches, crème et chips d'artichauts"] },
      { title: "Deuxième Plat", dishes: ["Filet de bar à la Méditerranéenne, olives Taggiasche et tomates cerises confites", "Pommes de terre au four", "Mesclun fleuri, pommes et vinaigrette"] },
      { title: "Dessert", dishes: ["Pâtisseries variées et fruits", "Douce surprise"] }
    ]
  },
  // --- START: Added Spanish ---
  es: {
    welcome: "¡Bienvenidos a nuestra boda!",
    tokenInfo: "Recibirán 2 fichas para imprimir fotos con Arianna, que gestiona el photobooth. Contáctala por WhatsApp usando el enlace de abajo.", // <-- UPDATED
    whatsappMsg: "¡Hola! Estoy en la boda y necesito enviarte fotos para imprimir.", // <-- UPDATED
    menu: [
      { title: "Aperitivos", dishes: ["Ensalada de sepia, gambas y verduras crujientes en vinagreta de limón", "Salmón marinado sobre cheesecake de taralli, robiola con aroma de naranja", "Parmigiana de berenjenas, gamba panko, crema de stracciatella", "Atún sellado, guacamole y puré de mango"] },
      { title: "Primeros Platos", dishes: ["Pasta «Cappelli del prete» en bisque de crustáceos, gambas y pesto de pistachos", "Pasta «Strozzapreti», sepia, crema y chips de alcachofas"] },
      { title: "Segundo Plato", dishes: ["Filete de lubina a la Mediterránea, aceitunas Taggiasca y tomates cherry confitados", "Patatas al horno", "Mezcla de hojas verdes floridas, manzanas y vinagreta"] },
      { title: "Postre", dishes: ["Pasteles variados y fruta", "Dulce sorpresa"] }
    ]
  },
  // --- END: Added Spanish ---
  // --- START: Added Finnish ---
  fi: {
    welcome: "Tervetuloa häihimme!",
    tokenInfo: "Saat 2 polettia valokuvien tulostamiseen Ariannan kanssa, joka hoitaa photoboothia. Ota häneen yhteyttä WhatsAppilla alla olevan linkin kautta.", // <-- UPDATED
    whatsappMsg: "Hei! Olen häissä ja minun pitää lähettää sinulle kuvia tulostettavaksi.", // <-- UPDATED
    menu: [
      { title: "Alkuruoat", dishes: ["Seepiasalaatti, katkarapuja ja rapeita vihanneksia sitruunakastikkeessa", "Marinoitua lohta taralli-juustokakulla, appelsiinintuoksuista robiola-juustoa", "Munakoiso-parmigiana, panko-katkarapuja, stracciatella-kermaa", "Paistettua tonnikalaa, guacamolea ja mangososetta"] },
      { title: "Ensimmäiset pääruoat", dishes: ["«Cappelli del prete» -pasta äyriäisbisquessa, katkarapuja ja pistaasipestoa", "«Strozzapreti»-pasta, seepiaa, artisokkakreemiä ja -lastuja"] },
      { title: "Toinen pääruoka", dishes: ["Välimerellinen meriahvenfilee, Taggiasca-oliiveja ja confit-kirsikkatomaatteja", "Uuniperunat", "Kukkiva sekasalaatti, omenoita ja vinaigrette-kastiketta"] },
      { title: "Jälkiruoka", dishes: ["Valikoima leivonnaisia ja hedelmiä", "Makea yllätys"] }
    ]
  }
  // --- END: Added Finnish ---
};

const defaultLang = "it";
const supportedLangs = Object.keys(texts); // Get ['it', 'en', 'fr', 'es', 'fi']

function getInitialLanguage() {
  // 1. Check browser's preferred language(s)
  const browserLang = navigator.language || navigator.userLanguage; // e.g., "en-US", "fr-FR", "es", "fi"

  if (browserLang) {
    // Try exact match first (e.g., if you had 'en-US' defined)
    if (supportedLangs.includes(browserLang)) {
      return browserLang;
    }
    // Try matching the primary language code (e.g., "en" from "en-US")
    const primaryLang = browserLang.split('-')[0];
    if (supportedLangs.includes(primaryLang)) {
      return primaryLang;
    }
  }

  // 2. Fallback to default language if no match found
  return defaultLang;
}

let currentLang = getInitialLanguage(); // Determine initial language automatically


// 2. DOM elements
const welcomeEl = document.getElementById("welcome-text");
const tokenEl   = document.getElementById("token-text");
const infoSectionEl = document.getElementById("info");
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
  // Check if the selected language exists, fallback to default if not
  const lang = texts[currentLang] || texts[defaultLang];
  if (!texts[currentLang]) {
      console.warn(`Language '${currentLang}' not found. Falling back to '${defaultLang}'.`);
      currentLang = defaultLang; // Correct the currentLang if fallback occurred
  }


  // Update simple text elements
  welcomeEl.textContent = lang.welcome;
  tokenEl.textContent = lang.tokenInfo;
  const msg = encodeURIComponent(lang.whatsappMsg);
  waLinkEl.href = `https://wa.me/${waNumber}?text=${msg}`;

  // Render the menu
  infoSectionEl.innerHTML = ''; // Clear previous menu content

  lang.menu.forEach(course => {
    // Create heading for the course
    const courseTitle = document.createElement('h3');
    courseTitle.textContent = course.title;
    infoSectionEl.appendChild(courseTitle);

    // Create list for the dishes
    const dishList = document.createElement('ul');
    course.dishes.forEach(dish => {
      const listItem = document.createElement('li');
      listItem.textContent = dish;
      dishList.appendChild(listItem);
    });
    infoSectionEl.appendChild(dishList);
  });
}

// 6. Initialize
renderLanguage();

// --- Optional: Add persistence using localStorage ---
// If you want to remember the user's *manual* choice across sessions,
// you could modify the getInitialLanguage function like this:

/*
function getInitialLanguageWithPersistence() {
  // 1. Check if user manually selected a language before
  const savedLang = localStorage.getItem('preferredLang');
  if (savedLang && supportedLangs.includes(savedLang)) {
    return savedLang;
  }

  // 2. Check browser's preferred language(s)
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang) {
    const primaryLang = browserLang.split('-')[0];
    if (supportedLangs.includes(primaryLang)) {
      return primaryLang;
    }
  }

  // 3. Fallback to default language
  return defaultLang;
}

let currentLang = getInitialLanguageWithPersistence(); // Use this line instead if you add persistence
*/
// --- End Optional Persistence ---