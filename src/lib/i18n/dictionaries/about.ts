import type { Locale } from "../config"

export interface AboutDictionary {
  about: {
    hero: {
      subtitle: string
      title: string
      description: string
    }
    intro: {
      title: string
      titleHighlight: string
      description: string
      cta: string
    }
    story: {
      title: string
      paragraphs: string[]
    }
    visit: {
      title: string
      description: string
      cards: Array<{
        title: string
        lines: string[]
        phone?: string
        email?: string
        action: string
      }>
    }
    contact: {
      title: string
      description: string
      form: {
        firstName: string
        lastName: string
        email: string
        phone: string
        eventType: string
        message: string
        subscribe: string
        submit: string
      }
      address: {
        line1: string
        line2: string
        cta: string
      }
    }
    team: {
      title1: string
      title2: string
      description: string
      email: string
      cta: string
    }
  }
}

const enAbout: AboutDictionary = {
  about: {
    hero: {
      subtitle: "Our Story",
      title: "About Us",
      description: "A legacy of passion, tradition, and exceptional wines",
    },
    intro: {
      title: "A Peruvian Icon",
      titleHighlight: "For Wine, Culture & Experience",
      description:
        "Born in the heart of the Andes, our family has spent three generations crafting wines from the unique terroir of our highlands, with character and just the right amount of curiosity. Founded in 1985 by Carlos Mendoza.",
      cta: "Read Our Story",
    },
    story: {
      title: "Showcasing the harmony between our wines and great food.",
      paragraphs: [
        "Our winery crafts premium wines that celebrate the character of the Peruvian highlands and the terroir of our volcanic soil. From bold Tannat to vibrant Torrontés and unique fruit wines, every bottle reflects a commitment to sustainable practices and meticulous winemaking.",
        "The wines express the nuances of the local terroir, marrying innovation with tradition to produce varieties that are as expressive as they are elegant.",
        "Located in the Sacred Valley, our winery is a 45-minute drive from Cusco. The Tasting Room offers seated wine flight tastings, with a carefully crafted snack menu available, designed to enhance the wine-tasting journey for guests. The Terrace is available for a more casual wine experience.",
        "Beyond the tasting room, we have earned a reputation as a fine dining destination that captures the essence of regional Peru.",
      ],
    },
    visit: {
      title: "Visit Us",
      description:
        "Our Tasting Room and Restaurant is a 45-minute drive from Cusco, or just a short walk from the Sacred Valley Township. Easily accessible via the main highway.",
      cards: [
        {
          title: "Find Us",
          lines: ["Av. El Sol 380, Cusco", "Perú 08000"],
          phone: "+51 84 234 567",
          action: "Get Directions",
        },
        {
          title: "Tasting Room",
          lines: ["Open Daily 10am-6pm", "Reservations recommended"],
          phone: "+51 84 234 567",
          action: "Make a Booking",
        },
        {
          title: "Restaurant",
          lines: ["Open for lunch Tuesday - Sunday", "12pm - 4pm", "Dinner service 7pm - 10pm", "Friday & Saturday"],
          phone: "+51 84 234 568",
          email: "restaurant@peruvianwines.com",
          action: "Make a Booking",
        },
        {
          title: "Office",
          lines: ["PO Box 111 Cusco", "Perú 08000"],
          phone: "+51 84 234 567",
          email: "experience@peruvianwines.com",
          action: "Contact Us",
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      description: "Complete the enquiry form and a member of our team will be in touch as soon as possible.",
      form: {
        firstName: "First Name *",
        lastName: "Last Name *",
        email: "Email *",
        phone: "Phone",
        eventType: "Private Event",
        message: "Message*",
        subscribe: "Join our mailing list to stay in touch with our latest news",
        submit: "Submit",
      },
      address: {
        line1: "Av. El Sol 380",
        line2: "Sacred Valley, Cusco 08000",
        cta: "Get Directions",
      },
    },
    team: {
      title1: "Looking To",
      title2: "Join Our Team?",
      description: "Send an email with your CV to:",
      email: "experience@peruvianwines.com",
      cta: "Email",
    },
  },
}

const esAbout: AboutDictionary = {
  about: {
    hero: {
      subtitle: "Nuestra Historia",
      title: "Nosotros",
      description: "Un legado de pasión, tradición y vinos excepcionales",
    },
    intro: {
      title: "Un Ícono Peruano",
      titleHighlight: "Para Vino, Cultura y Experiencia",
      description:
        "Nacidos en el corazón de los Andes, nuestra familia ha dedicado tres generaciones a elaborar vinos del terroir único de nuestras tierras altas, con carácter y la cantidad justa de curiosidad. Fundada en 1985 por Carlos Mendoza.",
      cta: "Lee Nuestra Historia",
    },
    story: {
      title: "Mostrando la armonía entre nuestros vinos y la gran comida.",
      paragraphs: [
        "Nuestra bodega elabora vinos premium que celebran el carácter de las tierras altas peruanas y el terroir de nuestro suelo volcánico. Desde el audaz Tannat hasta el vibrante Torrontés y vinos de frutas únicos, cada botella refleja un compromiso con prácticas sostenibles y una vinificación meticulosa.",
        "Los vinos expresan los matices del terroir local, combinando innovación con tradición para producir variedades tan expresivas como elegantes.",
        "Ubicada en el Valle Sagrado, nuestra bodega está a 45 minutos en auto de Cusco. La Sala de Degustación ofrece catas de vinos con asientos disponibles, con un menú de bocadillos cuidadosamente elaborado, diseñado para mejorar el viaje de degustación de vinos para los huéspedes. La Terraza está disponible para una experiencia de vino más casual.",
        "Más allá de la sala de degustación, hemos ganado reputación como un destino gastronómico que captura la esencia del Perú regional.",
      ],
    },
    visit: {
      title: "Visítanos",
      description:
        "Nuestra Sala de Degustación y Restaurante está a 45 minutos en auto de Cusco, o a solo un corto paseo desde el municipio del Valle Sagrado. Fácilmente accesible por la carretera principal.",
      cards: [
        {
          title: "Encuéntranos",
          lines: ["Av. El Sol 380, Cusco", "Perú 08000"],
          phone: "+51 84 234 567",
          action: "Obtener Direcciones",
        },
        {
          title: "Sala de Degustación",
          lines: ["Abierto Diariamente 10am-6pm", "Reservas recomendadas"],
          phone: "+51 84 234 567",
          action: "Hacer una Reserva",
        },
        {
          title: "Restaurante",
          lines: [
            "Abierto para almuerzo Martes - Domingo",
            "12pm - 4pm",
            "Servicio de cena 7pm - 10pm",
            "Viernes y Sábado",
          ],
          phone: "+51 84 234 568",
          email: "restaurant@peruvianwines.com",
          action: "Hacer una Reserva",
        },
        {
          title: "Oficina",
          lines: ["PO Box 111 Cusco", "Perú 08000"],
          phone: "+51 84 234 567",
          email: "experience@peruvianwines.com",
          action: "Contáctanos",
        },
      ],
    },
    contact: {
      title: "Ponte en Contacto",
      description:
        "Completa el formulario de consulta y un miembro de nuestro equipo se pondrá en contacto lo antes posible.",
      form: {
        firstName: "Nombre *",
        lastName: "Apellido *",
        email: "Correo Electrónico *",
        phone: "Teléfono",
        eventType: "Evento Privado",
        message: "Mensaje*",
        subscribe: "Únete a nuestra lista de correo para mantenerte al día con nuestras últimas noticias",
        submit: "Enviar",
      },
      address: {
        line1: "Av. El Sol 380",
        line2: "Valle Sagrado, Cusco 08000",
        cta: "Obtener Direcciones",
      },
    },
    team: {
      title1: "¿Buscas",
      title2: "Unirte a Nuestro Equipo?",
      description: "Envía un correo electrónico con tu CV a:",
      email: "experience@peruvianwines.com",
      cta: "Enviar Correo",
    },
  },
}

const quAbout: AboutDictionary = {
  about: {
    hero: {
      subtitle: "Ñuqanchikpa Willakuy",
      title: "Ñuqanchik",
      description: "Munay, kawsay ima allin vinomanta qhaway",
    },
    intro: {
      title: "Huk Perú Siq'i",
      titleHighlight: "Vino, Kawsay ima Yachaykunapaq",
      description:
        "Andiskunapi paqarisqa, ñuqanchikpa ayllu kimsa wiñaymanta vinokunata rurashaniku ñuqanchikpa urqikunapa allpanmanta, sunquyuq ima allin yuyayniyuq. 1985 watapi Carlos Mendoza qallarirqan.",
      cta: "Willakuyta Ñawiriy",
    },
    story: {
      title: "Ñuqanchikpa vinokunamanta mikhuykunawan allin tinkuyta rikuchispa.",
      paragraphs: [
        "Ñuqanchikpa vino wasiy allin vinokunata rurashanchik Peru urqikunapa sunqunta ima ñuqanchikpa nina allpapa sunqunta kusichispa. Kallpasapa Tannatmanta kusisqa Torrontéskama ima sapalla ruru vinokunakama, sapa botellapi imayna allinta ruranchik ima sumaq vinokunata ruwanapaq.",
        "Vinokunaqa kay tiyaypa ima kaqninkunata qawachin, musuq yachayta ima mawk'a rurayta huñuspa ima sumaq vinokunata paqarichinapaq.",
        "Valle Sagradopi kaq, ñuqanchikpa vino wasiqa Cuscomanta 45 minutos purisqa karrupi. Sala de Degustación nisqapi vino malliykunata quymi, huk sumaq mikhuy listakunawan, ima vino malliypa viajinta allinchanapaq rurasqa. Terraza nisqa huk aswan pisi vino experienciapaq kachkan.",
        "Sala de Degustación nisqamanta hawa, huk allin mikhuna wasikama chayarqayku Peru suyupa sumaq mikunanta qawachiq.",
      ],
    },
    visit: {
      title: "Watiqamuy",
      description:
        "Ñuqanchikpa Sala de Degustación nisqawan Restaurante nisqaqa Cuscomanta 45 minutos karrupi, utaq Valle Sagrado llaqtamanta pisi puriyllam. Hatun ñanwan chayanayki atinki.",
      cards: [
        {
          title: "Tariway",
          lines: ["Av. El Sol 380, Cusco", "Perú 08000"],
          phone: "+51 84 234 567",
          action: "Ñanta Tariway",
        },
        {
          title: "Sala de Degustación",
          lines: ["Sapa p'unchay kicharisqa 10am-6pm", "Reservakunata yuyaychanchik"],
          phone: "+51 84 234 567",
          action: "Reservata Ruwana",
        },
        {
          title: "Restaurante",
          lines: [
            "Mikhuykunapaq kicharisqa Martes - Domingo",
            "12pm - 4pm",
            "Tuta mikhuy 7pm - 10pm",
            "Viernes Sábado ima",
          ],
          phone: "+51 84 234 568",
          email: "restaurant@peruvianwines.com",
          action: "Reservata Ruwana",
        },
        {
          title: "Oficina",
          lines: ["PO Box 111 Cusco", "Perú 08000"],
          phone: "+51 84 234 567",
          email: "experience@peruvianwines.com",
          action: "Rimanakuy",
        },
      ],
    },
    contact: {
      title: "Rimanakuy",
      description:
        "Tapuykuna formuta hunt'achiy chaymanta ñuqanchikpa equipumanta huk runaqa utqaylla qamwan rimanakuq kanqa.",
      form: {
        firstName: "Sutiyki *",
        lastName: "Ayllu Sutiyki *",
        email: "Correo Electrónico *",
        phone: "Teléfono",
        eventType: "Sapalla Evento",
        message: "Willakuy*",
        subscribe: "Ñuqanchikpa correo listaman huk'uykuy musuq willakuykunata yachanapaq",
        submit: "Apachiy",
      },
      address: {
        line1: "Av. El Sol 380",
        line2: "Valle Sagrado, Cusco 08000",
        cta: "Ñanta Tariway",
      },
    },
    team: {
      title1: "¿Maskashankichu",
      title2: "Ñuqanchikpa Equipuman Huk'ukunapaq?",
      description: "Huk correo electrónico CV nisqawan apachiy kayñiqman:",
      email: "experience@peruvianwines.com",
      cta: "Correo Apachiy",
    },
  },
}

const frAbout: AboutDictionary = {
  about: {
    hero: {
      subtitle: "Notre Histoire",
      title: "À Propos de Nous",
      description: "Un héritage de passion, de tradition et de vins d’exception",
    },
    intro: {
      title: "Une Icône Péruvienne",
      titleHighlight: "Pour le Vin, la Culture et l’Expérience",
      description:
        "Née au cœur des Andes, notre famille consacre depuis trois générations son savoir-faire à l’élaboration de vins issus du terroir unique des hautes terres péruviennes. Fondée en 1985 par Carlos Mendoza.",
      cta: "Lire Notre Histoire",
    },
    story: {
      title: "Présenter l’harmonie entre nos vins et la gastronomie.",
      paragraphs: [
        "Notre domaine produit des vins premium célébrant le caractère des Andes péruviennes et la richesse de notre sol volcanique. Du puissant Tannat au vibrant Torrontés, en passant par des vins de fruits uniques, chaque bouteille traduit un engagement envers la durabilité et un savoir-faire méticuleux.",
        "Les vins reflètent les nuances de notre terroir, alliant innovation et tradition pour offrir des variétés expressives et élégantes.",
        "Situé dans la Vallée Sacrée, notre domaine se trouve à 45 minutes de Cusco. La Salle de Dégustation propose des dégustations de vins accompagnées d’un menu de snacks soigneusement élaboré. La Terrasse offre une expérience plus décontractée.",
        "Au-delà de la dégustation, nous sommes reconnus comme une destination gastronomique capturant l’essence du Pérou régional.",
      ],
    },
    visit: {
      title: "Visitez-Nous",
      description:
        "Notre Salle de Dégustation et Restaurant se trouvent à 45 minutes de Cusco, ou à quelques pas du centre de la Vallée Sacrée. Facile d’accès par la route principale.",
      cards: [
        {
          title: "Nous Trouver",
          lines: ["Av. El Sol 380, Cusco", "Pérou 08000"],
          phone: "+51 84 234 567",
          action: "Obtenir l’Itinéraire",
        },
        {
          title: "Salle de Dégustation",
          lines: ["Ouvert tous les jours 10h-18h", "Réservations recommandées"],
          phone: "+51 84 234 567",
          action: "Réserver",
        },
        {
          title: "Restaurant",
          lines: ["Déjeuner du mardi au dimanche", "12h - 16h", "Dîner 19h - 22h", "Vendredi & Samedi"],
          phone: "+51 84 234 568",
          email: "restaurant@peruvianwines.com",
          action: "Réserver",
        },
        {
          title: "Bureau",
          lines: ["PO Box 111 Cusco", "Pérou 08000"],
          phone: "+51 84 234 567",
          email: "experience@peruvianwines.com",
          action: "Nous Contacter",
        },
      ],
    },
    contact: {
      title: "Contactez-Nous",
      description:
        "Remplissez le formulaire et un membre de notre équipe vous répondra dans les plus brefs délais.",
      form: {
        firstName: "Prénom *",
        lastName: "Nom *",
        email: "Email *",
        phone: "Téléphone",
        eventType: "Événement Privé",
        message: "Message*",
        subscribe: "Abonnez-vous pour recevoir nos dernières actualités",
        submit: "Envoyer",
      },
      address: {
        line1: "Av. El Sol 380",
        line2: "Vallée Sacrée, Cusco 08000",
        cta: "Obtenir l’Itinéraire",
      },
    },
    team: {
      title1: "Envie de",
      title2: "Rejoindre Notre Équipe ?",
      description: "Envoyez votre CV à :",
      email: "experience@peruvianwines.com",
      cta: "Envoyer Email",
    },
  },
}
const itAbout: AboutDictionary = {
  about: {
    hero: {
      subtitle: "La Nostra Storia",
      title: "Chi Siamo",
      description: "Un’eredità di passione, tradizione e vini eccezionali",
    },
    intro: {
      title: "Un’Icona Peruviana",
      titleHighlight: "Per Vino, Cultura ed Esperienza",
      description:
        "Nati nel cuore delle Ande, la nostra famiglia da tre generazioni produce vini dal terroir unico delle nostre terre alte. Fondata nel 1985 da Carlos Mendoza.",
      cta: "Leggi la Nostra Storia",
    },
    story: {
      title: "Mostrare l’armonia tra i nostri vini e la grande cucina.",
      paragraphs: [
        "La nostra cantina produce vini premium che celebrano il carattere delle Ande peruviane e il nostro suolo vulcanico. Dal robusto Tannat al vibrante Torrontés, ogni bottiglia riflette sostenibilità e artigianalità.",
        "I vini esprimono le sfumature del terroir locale, unendo innovazione e tradizione per creare varietà eleganti ed espressive.",
        "Situata nella Valle Sacra, la nostra cantina si trova a 45 minuti da Cusco. La Sala Degustazioni offre wine flight con snack selezionati. La Terrazza offre un’esperienza più informale.",
        "Oltre alla degustazione, siamo riconosciuti come una destinazione gastronomica che rappresenta l’essenza del Perù regionale.",
      ],
    },
    visit: {
      title: "Visitaci",
      description:
        "La nostra Sala Degustazioni e il Ristorante si trovano a 45 minuti da Cusco, facilmente accessibili dalla strada principale.",
      cards: [
        {
          title: "Dove Siamo",
          lines: ["Av. El Sol 380, Cusco", "Perù 08000"],
          phone: "+51 84 234 567",
          action: "Ottieni Indicazioni",
        },
        {
          title: "Sala Degustazioni",
          lines: ["Aperto tutti i giorni 10:00-18:00", "Prenotazione consigliata"],
          phone: "+51 84 234 567",
          action: "Prenota",
        },
        {
          title: "Ristorante",
          lines: ["Pranzo Martedì - Domenica", "12:00 - 16:00", "Cena 19:00 - 22:00", "Venerdì & Sabato"],
          phone: "+51 84 234 568",
          email: "restaurant@peruvianwines.com",
          action: "Prenota",
        },
        {
          title: "Ufficio",
          lines: ["PO Box 111 Cusco", "Perù 08000"],
          phone: "+51 84 234 567",
          email: "experience@peruvianwines.com",
          action: "Contattaci",
        },
      ],
    },
    contact: {
      title: "Contattaci",
      description:
        "Compila il modulo e un membro del nostro team ti contatterà il prima possibile.",
      form: {
        firstName: "Nome *",
        lastName: "Cognome *",
        email: "Email *",
        phone: "Telefono",
        eventType: "Evento Privato",
        message: "Messaggio*",
        subscribe: "Iscriviti per ricevere le nostre ultime novità",
        submit: "Invia",
      },
      address: {
        line1: "Av. El Sol 380",
        line2: "Valle Sacro, Cusco 08000",
        cta: "Ottieni Indicazioni",
      },
    },
    team: {
      title1: "Vuoi",
      title2: "Unirti al Nostro Team?",
      description: "Invia il tuo CV a:",
      email: "experience@peruvianwines.com",
      cta: "Invia Email",
    },
  },
}
const deAbout: AboutDictionary = {
  about: {
    hero: {
      subtitle: "Unsere Geschichte",
      title: "Über Uns",
      description: "Ein Erbe aus Leidenschaft, Tradition und außergewöhnlichen Weinen",
    },
    intro: {
      title: "Eine Peruanische Ikone",
      titleHighlight: "Für Wein, Kultur und Erlebnis",
      description:
        "Geboren im Herzen der Anden, widmet sich unsere Familie seit drei Generationen der Herstellung einzigartiger Weine aus unserem Hochland-Terroir. Gegründet 1985 von Carlos Mendoza.",
      cta: "Unsere Geschichte Lesen",
    },
    story: {
      title: "Wir zeigen die Harmonie zwischen unseren Weinen und großartigem Essen.",
      paragraphs: [
        "Unser Weingut produziert Premiumweine, die den Charakter der peruanischen Anden und unseres vulkanischen Bodens feiern. Vom kräftigen Tannat bis zum lebendigen Torrontés – jede Flasche spiegelt Nachhaltigkeit und Präzision wider.",
        "Die Weine drücken die Nuancen des lokalen Terroirs aus, verbinden Innovation mit Tradition und schaffen elegante, ausdrucksstarke Sorten.",
        "Im Heiligen Tal gelegen, ist unser Weingut 45 Minuten von Cusco entfernt. Der Verkostungsraum bietet Weinflüge mit ausgewählten Snacks. Die Terrasse bietet ein entspannteres Erlebnis.",
        "Unser Restaurant gilt als kulinarisches Ziel, das die regionale peruanische Küche hervorhebt.",
      ],
    },
    visit: {
      title: "Besuchen Sie Uns",
      description:
        "Unser Verkostungsraum und Restaurant sind 45 Minuten von Cusco entfernt und leicht über die Hauptstraße erreichbar.",
      cards: [
        {
          title: "Standort",
          lines: ["Av. El Sol 380, Cusco", "Peru 08000"],
          phone: "+51 84 234 567",
          action: "Route Erhalten",
        },
        {
          title: "Verkostungsraum",
          lines: ["Täglich geöffnet 10–18 Uhr", "Reservierung empfohlen"],
          phone: "+51 84 234 567",
          action: "Reservieren",
        },
        {
          title: "Restaurant",
          lines: ["Mittagessen Dienstag – Sonntag", "12–16 Uhr", "Abendessen 19–22 Uhr", "Freitag & Samstag"],
          phone: "+51 84 234 568",
          email: "restaurant@peruvianwines.com",
          action: "Reservieren",
        },
        {
          title: "Büro",
          lines: ["PO Box 111 Cusco", "Peru 08000"],
          phone: "+51 84 234 567",
          email: "experience@peruvianwines.com",
          action: "Kontaktieren",
        },
      ],
    },
    contact: {
      title: "Kontakt",
      description:
        "Füllen Sie das Formular aus, und ein Teammitglied wird sich so schnell wie möglich bei Ihnen melden.",
      form: {
        firstName: "Vorname *",
        lastName: "Nachname *",
        email: "E-Mail *",
        phone: "Telefon",
        eventType: "Privates Event",
        message: "Nachricht*",
        subscribe: "Newsletter abonnieren und Neuigkeiten erhalten",
        submit: "Senden",
      },
      address: {
        line1: "Av. El Sol 380",
        line2: "Heiliges Tal, Cusco 08000",
        cta: "Route Erhalten",
      },
    },
    team: {
      title1: "Möchten Sie",
      title2: "Unserem Team Beitreten?",
      description: "Senden Sie Ihren Lebenslauf an:",
      email: "experience@peruvianwines.com",
      cta: "E-Mail Senden",
    },
  },
}
const ptAbout: AboutDictionary = {
  about: {
    hero: {
      subtitle: "Nossa História",
      title: "Sobre Nós",
      description: "Um legado de paixão, tradição e vinhos excepcionais",
    },
    intro: {
      title: "Um Ícone Peruano",
      titleHighlight: "Para Vinho, Cultura e Experiência",
      description:
        "Nascidos no coração dos Andes, nossa família dedica há três gerações a produção de vinhos de um terroir único nas terras altas peruanas. Fundada em 1985 por Carlos Mendoza.",
      cta: "Leia Nossa História",
    },
    story: {
      title: "Mostrando a harmonia entre nossos vinhos e boa gastronomia.",
      paragraphs: [
        "Nossa vinícola produz vinhos premium que celebram o caráter das terras altas peruanas e nosso solo vulcânico. Do intenso Tannat ao vibrante Torrontés, cada garrafa reflete sustentabilidade e precisão.",
        "Os vinhos expressam as nuances do terroir, unindo inovação e tradição para criar variedades elegantes e expressivas.",
        "Localizada no Vale Sagrado, estamos a 45 minutos de Cusco. A Sala de Degustação oferece wine flights e petiscos selecionados. O Terraço proporciona uma experiência mais casual.",
        "Somos reconhecidos como um destino gastronômico que representa a essência do Peru regional.",
      ],
    },
    visit: {
      title: "Visite-nos",
      description:
        "Nossa Sala de Degustação e Restaurante estão a 45 minutos de Cusco, facilmente acessíveis pela estrada principal.",
      cards: [
        {
          title: "Como Chegar",
          lines: ["Av. El Sol 380, Cusco", "Peru 08000"],
          phone: "+51 84 234 567",
          action: "Obter Direções",
        },
        {
          title: "Sala de Degustação",
          lines: ["Aberto diariamente 10h-18h", "Reservas recomendadas"],
          phone: "+51 84 234 567",
          action: "Reservar",
        },
        {
          title: "Restaurante",
          lines: ["Almoço Terça - Domingo", "12h - 16h", "Jantar 19h - 22h", "Sexta & Sábado"],
          phone: "+51 84 234 568",
          email: "restaurant@peruvianwines.com",
          action: "Reservar",
        },
        {
          title: "Escritório",
          lines: ["PO Box 111 Cusco", "Peru 08000"],
          phone: "+51 84 234 567",
          email: "experience@peruvianwines.com",
          action: "Contato",
        },
      ],
    },
    contact: {
      title: "Entre em Contato",
      description:
        "Preencha o formulário e um membro da nossa equipe entrará em contato o mais breve possível.",
      form: {
        firstName: "Nome *",
        lastName: "Sobrenome *",
        email: "Email *",
        phone: "Telefone",
        eventType: "Evento Privado",
        message: "Mensagem*",
        subscribe: "Inscreva-se para receber nossas novidades",
        submit: "Enviar",
      },
      address: {
        line1: "Av. El Sol 380",
        line2: "Vale Sagrado, Cusco 08000",
        cta: "Obter Direções",
      },
    },
    team: {
      title1: "Quer",
      title2: "Ingressar na Nossa Equipe?",
      description: "Envie seu CV para:",
      email: "experience@peruvianwines.com",
      cta: "Enviar Email",
    },
  },
}
const zhAbout: AboutDictionary = {
  about: {
    hero: {
      subtitle: "我们的故事",
      title: "关于我们",
      description: "传承激情、传统与卓越葡萄酒的传奇",
    },
    intro: {
      title: "秘鲁的象征",
      titleHighlight: "关于葡萄酒、文化与体验",
      description:
        "诞生于安第斯山脉的中心，我们的家族三代人致力于酿造来自高原独特风土的葡萄酒。酒庄创立于1985年，由 Carlos Mendoza 创办。",
      cta: "阅读我们的故事",
    },
    story: {
      title: "展示葡萄酒与美食之间的完美和谐。",
      paragraphs: [
        "我们的酒庄酿造优质葡萄酒，展现秘鲁高原的特色与火山土壤的魅力。从强劲的 Tannat 到清新的 Torrontés，再到独特的果酒，每一瓶都体现了可持续与精细工艺。",
        "葡萄酒展现当地风土的细腻变化，结合创新与传统，创造出优雅而富有表现力的酒款。",
        "酒庄位于神圣山谷，距离库斯科约45分钟车程。品酒室提供座位式品酒体验，搭配精心准备的小食。露台则提供更轻松的品酒氛围。",
        "除了品酒，我们的餐厅亦因展现秘鲁地方料理而广受赞誉。",
      ],
    },
    visit: {
      title: "欢迎来访",
      description:
        "我们的品酒室与餐厅距离库斯科45分钟车程，或从神圣山谷镇步行可达，位置便利。",
      cards: [
        {
          title: "如何找到我们",
          lines: ["Av. El Sol 380, Cusco", "秘鲁 08000"],
          phone: "+51 84 234 567",
          action: "获取路线",
        },
        {
          title: "品酒室",
          lines: ["每日营业 10am-6pm", "建议提前预约"],
          phone: "+51 84 234 567",
          action: "预约",
        },
        {
          title: "餐厅",
          lines: ["午餐服务：周二至周日", "12pm - 4pm", "晚餐服务：7pm - 10pm", "周五与周六"],
          phone: "+51 84 234 568",
          email: "restaurant@peruvianwines.com",
          action: "预约",
        },
        {
          title: "办公室",
          lines: ["PO Box 111 Cusco", "秘鲁 08000"],
          phone: "+51 84 234 567",
          email: "experience@peruvianwines.com",
          action: "联系我们",
        },
      ],
    },
    contact: {
      title: "联系我们",
      description: "填写表单，我们的团队成员将尽快与您联系。",
      form: {
        firstName: "名字 *",
        lastName: "姓氏 *",
        email: "电子邮箱 *",
        phone: "电话",
        eventType: "私人活动",
        message: "留言*",
        subscribe: "订阅以获取我们的最新消息",
        submit: "提交",
      },
      address: {
        line1: "Av. El Sol 380",
        line2: "神圣山谷，库斯科 08000",
        cta: "获取路线",
      },
    },
    team: {
      title1: "想要",
      title2: "加入我们的团队？",
      description: "请将您的简历发送至：",
      email: "experience@peruvianwines.com",
      cta: "发送邮件",
    },
  },
}
const jaAbout: AboutDictionary = {
  about: {
    hero: {
      subtitle: "私たちの物語",
      title: "私たちについて",
      description: "情熱・伝統・卓越したワインの遺産",
    },
    intro: {
      title: "ペルーの象徴",
      titleHighlight: "ワイン・文化・体験のために",
      description:
        "アンデスの中心で生まれ、私たちの家族は三世代にわたりユニークな高地テロワールからワインを造り続けています。1985年、カルロス・メンドーサによって創設されました。",
      cta: "物語を読む",
    },
    story: {
      title: "ワインと料理の調和を紹介します。",
      paragraphs: [
        "私たちのワイナリーは、ペルー高地の個性と火山土壌の豊かさを表現するプレミアムワインを造っています。力強いタナから爽やかなトロンテス、さらには独自のフルーツワインまで、すべてのボトルが持続可能な造りへのこだわりを示しています。",
        "ワインは地域のテロワールのニュアンスを表現し、革新と伝統のバランスを取りながら、表現力豊かでエレガントな品種を生み出します。",
        "ワイナリーは聖なる谷に位置し、クスコから車で45分です。テイスティングルームでは座席付きのワインフライトを提供し、選りすぐりのスナックを楽しめます。テラスではよりカジュアルな体験が可能です。",
        "テイスティング以外にも、私たちのレストランは地域ペルー料理の魅力を伝える美食スポットとして知られています。",
      ],
    },
    visit: {
      title: "訪れる",
      description:
        "テイスティングルームとレストランはクスコから車で45分、または聖なる谷の町から徒歩でアクセスできます。",
      cards: [
        {
          title: "アクセス",
          lines: ["Av. El Sol 380, Cusco", "ペルー 08000"],
          phone: "+51 84 234 567",
          action: "道順を見る",
        },
        {
          title: "テイスティングルーム",
          lines: ["毎日営業 10am-6pm", "予約を推奨"],
          phone: "+51 84 234 567",
          action: "予約する",
        },
        {
          title: "レストラン",
          lines: ["ランチ 火曜〜日曜", "12pm - 4pm", "ディナー 7pm - 10pm", "金・土"],
          phone: "+51 84 234 568",
          email: "restaurant@peruvianwines.com",
          action: "予約する",
        },
        {
          title: "オフィス",
          lines: ["PO Box 111 Cusco", "ペルー 08000"],
          phone: "+51 84 234 567",
          email: "experience@peruvianwines.com",
          action: "お問い合わせ",
        },
      ],
    },
    contact: {
      title: "お問い合わせ",
      description: "フォームに入力すると、担当者ができるだけ早くご連絡いたします。",
      form: {
        firstName: "名 *",
        lastName: "姓 *",
        email: "メール *",
        phone: "電話番号",
        eventType: "プライベートイベント",
        message: "メッセージ*",
        subscribe: "最新情報を受け取るために購読する",
        submit: "送信",
      },
      address: {
        line1: "Av. El Sol 380",
        line2: "聖なる谷、クスコ 08000",
        cta: "道順を見る",
      },
    },
    team: {
      title1: "私たちのチームに",
      title2: "参加しませんか？",
      description: "履歴書をこちらへお送りください：",
      email: "experience@peruvianwines.com",
      cta: "メールを送る",
    },
  },
}
const ruAbout: AboutDictionary = {
  about: {
    hero: {
      subtitle: "Наша История",
      title: "О Нас",
      description: "Наследие страсти, традиций и выдающихся вин",
    },
    intro: {
      title: "Перуанская Икона",
      titleHighlight: "О Вине, Культуре и Опыте",
      description:
        "Родившись в сердце Анд, наша семья уже три поколения создаёт вина из уникального терруара высокогорья. Основано в 1985 году Карлосом Мендосой.",
      cta: "Читать Историю",
    },
    story: {
      title: "Показывая гармонию между нашими винами и высокой кухней.",
      paragraphs: [
        "Наш винодельческий дом производит премиальные вина, отражающие характер перуанского высокогорья и богатство вулканических почв. От насыщенного Танната до яркого Торронтеса — каждая бутылка воплощает устойчивость и мастерство.",
        "Вина передают нюансы местного терруара, сочетая инновации и традиции, создавая выразительные и элегантные сорта.",
        "Мы находимся в Священной Долине, в 45 минутах езды от Куско. В дегустационном зале предлагаются сет-дегустации и тщательно подобранные закуски. Терраса подходит для более непринужденной атмосферы.",
        "Наш ресторан известен тем, что демонстрирует лучшую региональную кухню Перу.",
      ],
    },
    visit: {
      title: "Посетите Нас",
      description:
        "Наш дегустационный зал и ресторан находятся в 45 минутах от Куско, легко доступны по главной дороге.",
      cards: [
        {
          title: "Как Найти Нас",
          lines: ["Av. El Sol 380, Cusco", "Перу 08000"],
          phone: "+51 84 234 567",
          action: "Построить Маршрут",
        },
        {
          title: "Дегустационный Зал",
          lines: ["Открыто ежедневно 10:00–18:00", "Рекомендуется бронирование"],
          phone: "+51 84 234 567",
          action: "Забронировать",
        },
        {
          title: "Ресторан",
          lines: ["Обед: вторник – воскресенье", "12:00 – 16:00", "Ужин: 19:00 – 22:00", "Пятница и суббота"],
          phone: "+51 84 234 568",
          email: "restaurant@peruvianwines.com",
          action: "Забронировать",
        },
        {
          title: "Офис",
          lines: ["PO Box 111 Cusco", "Перу 08000"],
          phone: "+51 84 234 567",
          email: "experience@peruvianwines.com",
          action: "Связаться",
        },
      ],
    },
    contact: {
      title: "Свяжитесь с Нами",
      description:
        "Заполните форму, и член нашей команды свяжется с вами как можно скорее.",
      form: {
        firstName: "Имя *",
        lastName: "Фамилия *",
        email: "Email *",
        phone: "Телефон",
        eventType: "Частное мероприятие",
        message: "Сообщение*",
        subscribe: "Подписаться, чтобы получать наши новости",
        submit: "Отправить",
      },
      address: {
        line1: "Av. El Sol 380",
        line2: "Священная Долина, Куско 08000",
        cta: "Маршрут",
      },
    },
    team: {
      title1: "Хотите",
      title2: "Присоединиться к Нашей Команде?",
      description: "Отправьте ваше резюме на:",
      email: "experience@peruvianwines.com",
      cta: "Отправить Email",
    },
  },
}


export function getAboutDictionary(locale: Locale): AboutDictionary {
  const dictionaries: Record<string, AboutDictionary> = {
    en: enAbout,
    es: esAbout,
    qu: quAbout,
    fr: frAbout,
    it: itAbout,
    de: deAbout,
    pt: ptAbout,
    zh: zhAbout,
    ja: jaAbout,
    ru: ruAbout,
  }

  // Fallback to English if locale not available
  return dictionaries[locale] || dictionaries.en
}
