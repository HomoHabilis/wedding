document.addEventListener('DOMContentLoaded', () => {

    // --- TRANSLATIONS ---
    // Add or modify translations here
    const translations = {
        'en': {
            'page-title': "Our Wedding | [Your Names Here]",
            'welcome-title': "[Your Names Here]",
            'welcome-message': "Welcome to our wedding celebration!",
            'details-header': "Details",
            'details-content': `We are so excited to share our special day with you!
                              More information about the schedule, location, and registry will be added soon.
                              <br><br>
                              Date: [Wedding Date] <br>
                              Time: [Wedding Time] <br>
                              Location: [Wedding Venue Name & Address]`,
            'photo-info': `At the reception, you will receive 2 tokens per guest for the photo booth/printer. Have fun capturing memories!
                         For any questions or specific photo requests during the event, please feel free to contact [Name] via WhatsApp at: <strong id="whatsapp-number">[Your WhatsApp Number Here]</strong>.`,
            // Add other element IDs and their English text here
            // 'schedule-header': "Schedule",
            // 'schedule-content': "Ceremony: [Time], Reception: [Time]",
        },
        'it': {
            'page-title': "Il Nostro Matrimonio | [Your Names Here]",
            'welcome-title': "[Your Names Here]",
            'welcome-message': "Benvenuti alla celebrazione del nostro matrimonio!",
            'details-header': "Dettagli",
            'details-content': `Siamo così emozionati di condividere il nostro giorno speciale con voi!
                              Presto verranno aggiunte ulteriori informazioni sul programma, la location e la lista nozze.
                              <br><br>
                              Data: [Data Matrimonio] <br>
                              Ora: [Ora Matrimonio] <br>
                              Luogo: [Nome e Indirizzo Location Matrimonio]`,
            'photo-info': `Al ricevimento, riceverete 2 gettoni per ospite per la cabina fotografica/stampante. Divertitevi a catturare ricordi!
                         Per qualsiasi domanda o richiesta specifica sulle foto durante l'evento, non esitate a contattare [Nome] tramite WhatsApp al numero: <strong id="whatsapp-number">[Il Vostro Numero WhatsApp Qui]</strong>.`,
            // Add other element IDs and their Italian text here
            // 'schedule-header': "Programma",
            // 'schedule-content': "Cerimonia: [Ora], Ricevimento: [Ora]",
        },
        'fr': {
            'page-title': "Notre Mariage | [Your Names Here]",
            'welcome-title': "[Your Names Here]",
            'welcome-message': "Bienvenue à la célébration de notre mariage !",
            'details-header': "Détails",
            'details-content': `Nous sommes ravis de partager ce jour spécial avec vous !
                              Plus d'informations sur le programme, le lieu et la liste de mariage seront bientôt ajoutées.
                              <br><br>
                              Date : [Date du Mariage] <br>
                              Heure : [Heure du Mariage] <br>
                              Lieu : [Nom et Adresse du Lieu du Mariage]`,
            'photo-info': `Lors de la réception, vous recevrez 2 jetons par invité pour le photomaton/imprimante photo. Amusez-vous à capturer des souvenirs !
                         Pour toute question ou demande spécifique concernant les photos pendant l'événement, n'hésitez pas à contacter [Nom] via WhatsApp au : <strong id="whatsapp-number">[Votre Numéro WhatsApp Ici]</strong>.`,
            // Add other element IDs and their French text here
            // 'schedule-header': "Programme",
            // 'schedule-content': "Cérémonie : [Heure], Réception : [Heure]",
        }
    };

    // --- LANGUAGE SWITCHING LOGIC ---
    const languageButtons = document.querySelectorAll('.lang-button');
    const elementsToTranslate = document.querySelectorAll('[id]'); // Get all elements with an ID

    function changeLanguage(lang) {
        // Update text content based on selected language
        elementsToTranslate.forEach(element => {
            const key = element.id;
            if (translations[lang] && translations[lang][key]) {
                // Use innerHTML to allow for tags like <br> and <strong>
                element.innerHTML = translations[lang][key];
            } else if (element.tagName === 'TITLE') {
                 // Special handling for title tag
                if (translations[lang] && translations[lang]['page-title']) {
                    document.title = translations[lang]['page-title'];
                }
            }
        });

        // Update button active states
        languageButtons.forEach(button => {
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        // Set the lang attribute of the HTML tag (good for accessibility/SEO)
        document.documentElement.lang = lang;

        // Optional: Store preference in localStorage
        localStorage.setItem('preferredLanguage', lang);
    }

    // Add event listeners to buttons
    languageButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const selectedLang = event.target.dataset.lang;
            changeLanguage(selectedLang);
        });
    });

    // --- INITIAL LANGUAGE SET ---
    // Check localStorage for saved preference, otherwise default to English
    const savedLang = localStorage.getItem('preferredLanguage');
    const initialLang = savedLang && translations[savedLang] ? savedLang : 'en'; // Default to 'en'
    changeLanguage(initialLang);

});