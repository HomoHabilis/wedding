// 1. Define your texts in all languages
const texts = {
  it: {
    welcome: "Benvenuti al nostro matrimonio!",
    // mainInfo: "...", // Removed, replaced by the menu display
    tokenInfo: "Riceverete 2 gettoni da stampare con Ariana, che gestisce il photobooth. Contattatela su WhatsApp, il link è qui sotto.", // Merged info here
    whatsappMsg: "Ciao! Sono del matrimonio e devo inviarti foto",
    menu: [
      {
        title: "Antipasti",
        dishes: [
          "Insalatina di seppie, gamberi e verdure croccanti in citronette",
          "Salmone marinato su cheese cake di taralli, robiola al profumo di arancia",
          "Parmigiana di melanzane, gambero panko, crema di stracciatella",
          "Tonno scottato, guacamole e pure di mango"
        ]
      },
      {
        title: "Primi",
        dishes: [
          "Cappelli del prete in bisque di crostacei, gamberi e pesto di pistacchi",
          "Strozzapreti, seppioline, crema e chips di carciofi"
        ]
      },
      {
        title: "Secondo",
        dishes: [
          "Filetto di branzino alla Mediterrana, olive taggiasche e pomodorini confit",
          "Patate al forno",
          "Misticanza fiorita, mele e vinaigrette"
        ]
      },
      {
        title: "Dolce",
        dishes: [
          "Dolci misti e frutta",
          "Dolce sorpresa"
        ]
      }
    ]
  },
  en: {
    welcome: "Welcome to our wedding!",
    // mainInfo: "...", // Removed
    tokenInfo: "You will receive 2 tokens to print photos with Ariana, who manages the photobooth. Contact her on WhatsApp using the link below.", // Merged info here
    whatsappMsg: "Hi! I'm from the wedding and need to send you photos", // Slightly adjusted message
    menu: [
      {
        title: "Appetizers",
        dishes: [
          "Cuttlefish salad, shrimp, and crispy vegetables in citronette",
          "Marinated salmon on taralli cheesecake, orange-scented robiola cheese",
          "Eggplant parmigiana, panko shrimp, stracciatella cream",
          "Seared tuna, guacamole, and mango puree"
        ]
      },
      {
        title: "First Courses",
        dishes: [
          "Priest's hats pasta in crustacean bisque, shrimp, and pistachio pesto",
          "Strozzapreti pasta, cuttlefish, artichoke cream, and chips"
        ]
      },
      {
        title: "Second Course",
        dishes: [
          "Mediterranean-style sea bass fillet, Taggiasca olives, and confit cherry tomatoes",
          "Baked potatoes",
          "Flowered mixed greens salad, apples, and vinaigrette"
        ]
      },
      {
        title: "Dessert",
        dishes: [
          "Mixed pastries and fruit",
          "Sweet surprise"
        ]
      }
    ]
  },
  fr: {
    welcome: "Bienvenue à notre mariage !",
    // mainInfo: "...", // Removed
    tokenInfo: "Vous recevrez 2 jetons pour imprimer des photos avec Ariana, responsable du photobooth. Contactez-la sur WhatsApp via le lien ci-dessous.", // Merged info here
    whatsappMsg: "Bonjour ! Je suis du mariage et je dois vous envoyer des photos", // Slightly adjusted message
    menu: [
      {
        title: "Entrées",
        dishes: [
          "Salade de seiches, crevettes et légumes croquants en citronnette",
          "Saumon mariné sur cheesecake de taralli, robiola parfumée à l'orange",
          "Parmigiana d'aubergines, crevette panko, crème de stracciatella",
          "Thon poêlé, guacamole et purée de mangue"
        ]
      },
      {
        title: "Premiers Plats",
        dishes: [
          "« Cappelli del prete » en bisque de crustacés, crevettes et pesto de pistaches",
          "« Strozzapreti », petites seiches, crème et chips d'artichauts"
        ]
      },
      {
        title: "Deuxième Plat",
        dishes: [
          "Filet de bar à la Méditerranéenne, olives Taggiasche et tomates cerises confites",
          "Pommes de terre au four",
          "Mesclun fleuri, pommes et vinaigrette"
        ]
      },
      {
        title: "Dessert",
        dishes: [
          "Pâtisseries variées et fruits",
          "Douce surprise"
        ]
      }
    ]
  }
};

const defaultLang = "it";
let currentLang = defaultLang;

// 2. DOM elements
const welcomeEl = document.getElementById("welcome-text");
const tokenEl   = document.getElementById("token-text");
// const mainEl   = document.getElementById("main-text"); // No longer needed for static text
const infoSectionEl = document.getElementById("info"); // Get the section to put the menu in
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

  // Update simple text elements
  welcomeEl.textContent = lang.welcome;
  tokenEl.textContent = lang.tokenInfo;
  const msg = encodeURIComponent(lang.whatsappMsg);
  waLinkEl.href = `https://wa.me/${waNumber}?text=${msg}`;

  // Render the menu
  infoSectionEl.innerHTML = ''; // Clear previous menu content

  // Optional: Add a general Menu heading
  // const menuHeading = document.createElement('h2');
  // menuHeading.textContent = lang.menuTitle || "Menu"; // Add menuTitle to texts if needed
  // infoSectionEl.appendChild(menuHeading);


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