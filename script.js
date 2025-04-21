// 1. Define your texts in all languages
const texts = {
  it: {
    welcome: "Benvenuti al nostro matrimonio!",
    // === NEW EXPLANATION TEXT ===
    explanation: `Siamo così felici di condividere questo giorno speciale con voi!
    &hearts;
    <strong>DEDICA</strong>
    Vuoi fare una dedica agli sposi? Senti <strong>Bruno</strong>!
    &hearts;
    <strong>PHOTOBOOTH</strong>
    Spendi i 2 cuoricini Mr&Ms per stampare le tue 2 foto più belle!
    Conserva una polaroid souvenir e incolla l’altra nell’album degli sposi!
    <strong>Arianna</strong> gestisce il photobooth. Contattatela su WhatsApp !
    {{WHATSAPP_LINK}}
    &hearts;
    <strong>BAREFOOT</strong>
    Cimentati nel ballo swing durante il workshop di barefoot proposto da <strong>Bruno</strong>!
    &hearts;
    <strong>BLINDTEST</strong>
    Preparati a fare squadra con i tuoi compagni di tavolo durante il blind test, indovinando le canzoni proposte da <strong>Tristan</strong>! Un grande premio in palio per il tavolo vincitore!
    &hearts;

    Grazie per la vostra partecipazione e buon divertimento!

    &hearts;  Elisa e Jérémie   &hearts;`,
    whatsappMsg: "Ciao! Sono al matrimonio e voglio inviarti foto da stampare",
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
	  explanation: "We are so happy to share this special day with you! Below you can find the dinner menu. We hope you enjoy it.  {{WHATSAPP_LINK}}",    
    whatsappMsg: "Hi! I'm at the wedding and need to send you photos for printing.", // Slightly adjusted message
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
    explanation: `Nous sommes si heureux de partager ce jour spécial avec vous !
    Pour une dédicace aux mariés, contactez Tristan!  {{WHATSAPP_LINK}}`,
    // ============================
    whatsappMsg: "Bonjour ! Je suis au mariage et je veux vous envoyer des photos", // Slightly adjusted message
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
    explanation: "¡Estamos muy felices de compartir este día especial con ustedes! A continuación encontrarán el menú de la cena. Esperamos que lo disfruten.  {{WHATSAPP_LINK}}",
    // ============================
    whatsappMsg: "¡Hola! Estoy en la boda y necesito enviarte fotos para imprimir.", // <-- UPDATED
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
    explanation: "Olemme niin onnellisia saadessamme jakaa tämän erityisen päivän kanssanne! Alta löydät illallismenun. Toivottavasti nautitte siitä.  {{WHATSAPP_LINK}}",
    // ============================
    whatsappMsg: "Hei! Olen häissä ja minun pitää lähettää sinulle kuvia tulostettavaksi.", // <-- UPDATED
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
const infoSectionEl = document.getElementById("info");
const langButtons = document.querySelectorAll(".lang-switch button"); // Get all lang buttons

// 3. WhatsApp number (use WhatsApp Business if possible)
const waNumber = "00393396754220";

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
  explanationEl.innerHTML = lang.explanation; // Update explanation text

  const msg = encodeURIComponent(lang.whatsappMsg);
  const waHref = `https://wa.me/${waNumber}?text=${msg}`;
  // Decide if you want the icon inline. It might look cluttered. Let's try without first.
  // const whatsappLinkHTML = `<a href="${waHref}" target="_blank" class="whatsapp-link-inline">${lang.whatsappLinkText}</a>`;
  // OR If you want the icon:
  const whatsappLinkHTML = `<a href="${waHref}" target="_blank" class="whatsapp-link-inline">` +
                           `<img src="images/whatsapp-icon.svg" alt="WhatsApp" class="whatsapp-icon-inline"> ` + // Added new class
                           `${lang.whatsappLinkText}` +
                           `</a>`;

  // --- Update Explanation Text with embedded link ---
  // Get the template text with the placeholder
  const explanationTemplate = lang.explanation;
  // Replace the placeholder with the generated link HTML
  const finalExplanationHTML = explanationTemplate.replace('{{WHATSAPP_LINK}}', whatsappLinkHTML);
  // Use innerHTML to render the combined text and link
  explanationEl.innerHTML = finalExplanationHTML;

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


// === NEW SLIDESHOW SCRIPT ===
const slideshowContainer = document.getElementById('image-slideshow');
// Check if the slideshow container exists on the page
if (slideshowContainer) {
  const slides = slideshowContainer.querySelectorAll('.slide-image');
  let currentSlideIndex = 0;
  const slideIntervalTime = 4000; // Time each slide is visible (in milliseconds - 4 seconds)

  function showSlide(index) {
    // Ensure the index is valid
    if (index < 0 || index >= slides.length) {
      console.error("Invalid slide index:", index);
      return;
    }

    // Remove active class from all slides
    slides.forEach(slide => {
      slide.classList.remove('active');
    });

    // Add active class to the new current slide
    slides[index].classList.add('active');
  }

  function nextSlide() {
    // Calculate the index of the next slide
    let nextIndex = currentSlideIndex + 1;

    // Loop back to the first slide if we've passed the last one
    if (nextIndex >= slides.length) {
      nextIndex = 0;
    }

    // Update the current index
    currentSlideIndex = nextIndex;

    // Show the next slide
    showSlide(currentSlideIndex);
  }

  // Start the slideshow only if there's more than one slide
  if (slides.length > 1) {
    // Show the first slide immediately (it already has .active, but good practice)
    showSlide(currentSlideIndex);
    // Set an interval to automatically switch to the next slide
    setInterval(nextSlide, slideIntervalTime);
  } else if (slides.length === 1) {
    // If only one slide, just ensure it's active
    slides[0].classList.add('active');
  }
} else {
  console.log("Slideshow container not found."); // Optional message
}
// === END SLIDESHOW SCRIPT ===