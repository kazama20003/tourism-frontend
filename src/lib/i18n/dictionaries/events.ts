import type { Locale } from "../config"

export interface EventsDictionary {
  hero: {
    subtitle: string
    title: string
    description: string
  }
  introduction: {
    discover: string
    title: string
    titleItalic: string
    description: string
  }
  search: {
    placeholder: string
  }
  filters: {
    all: string
    religious: string
    cultural: string
    patronal: string
  }
  events: {
    intiRaymi: {
      title: string
      subtitle: string
      description: string
      date: string
      location: string
      duration: string
      highlights: string[]
    }
    candelaria: {
      title: string
      subtitle: string
      description: string
      date: string
      location: string
      duration: string
      highlights: string[]
    }
    arequipa: {
      title: string
      subtitle: string
      description: string
      date: string
      location: string
      duration: string
      highlights: string[]
    }
    trujillo: {
      title: string
      subtitle: string
      description: string
      date: string
      location: string
      duration: string
      highlights: string[]
    }
    milagros: {
      title: string
      subtitle: string
      description: string
      date: string
      location: string
      duration: string
      highlights: string[]
    }
    qoyllur: {
      title: string
      subtitle: string
      description: string
      date: string
      location: string
      duration: string
      highlights: string[]
    }
  }
  badges: {
    featured: string
    exclusive: string
  }
  buttons: {
    reserveNow: string
    moreInfo: string
  }
  faq: {
    title: string
    titleItalic: string
    subtitle: string
    questions: {
      q1: {
        question: string
        answer: string
      }
      q2: {
        question: string
        answer: string
      }
      q3: {
        question: string
        answer: string
      }
      q4: {
        question: string
        answer: string
      }
      q5: {
        question: string
        answer: string
      }
      q6: {
        question: string
        answer: string
      }
    }
  }
  cta: {
    title: string
    description: string
    button: string
  }
  noResults: string
}

const eventsEs: EventsDictionary = {
  hero: {
    subtitle: "Experiencias Exclusivas",
    title: "Eventos",
    description: "Festividades únicas que solo ocurren en fechas especiales",
  },
  introduction: {
    discover: "Descubre",
    title: "Tradiciones",
    titleItalic: "Milenarias",
    description:
      "Vive experiencias únicas en las festividades más emblemáticas del Perú. Eventos exclusivos que celebran nuestra rica herencia cultural y solo ocurren en fechas específicas del año.",
  },
  search: {
    placeholder: "Buscar eventos...",
  },
  filters: {
    all: "Todos",
    religious: "Religiosos",
    cultural: "Culturales",
    patronal: "Patronales",
  },
  events: {
    intiRaymi: {
      title: "Inti Raymi",
      subtitle: "Fiesta del Sol",
      description:
        "La celebración más importante del imperio incaico. Revive la majestuosidad de la Fiesta del Sol en Cusco, con ceremonias ancestrales, danzas tradicionales y la recreación del ritual al Dios Sol en Sacsayhuamán.",
      date: "24 de Junio",
      location: "Cusco, Perú",
      duration: "1 Día",
      highlights: ["Ceremonia Ancestral", "Danzas Típicas", "Sacsayhuamán"],
    },
    candelaria: {
      title: "Virgen de la Candelaria",
      subtitle: "Patrimonio de la Humanidad",
      description:
        "La festividad folclórica más grande de Sudamérica. Vive la explosión de color, música y devoción en Puno, con más de 40,000 danzarines y músicos que rinden homenaje a la Virgen de la Candelaria.",
      date: "2 de Febrero",
      location: "Puno, Perú",
      duration: "18 Días",
      highlights: ["UNESCO Patrimonio", "Diablada", "Concurso de Danzas"],
    },
    arequipa: {
      title: "Aniversario de Arequipa",
      subtitle: "La Ciudad Blanca",
      description:
        "Celebra el aniversario de la fundación española de Arequipa. Disfruta de serenatas, pasacalles, fuegos artificiales y la tradicional quema de castillos en la emblemática Plaza de Armas.",
      date: "15 de Agosto",
      location: "Arequipa, Perú",
      duration: "10 Días",
      highlights: ["Pasacalles", "Fuegos Artificiales", "Corso de la Amistad"],
    },
    trujillo: {
      title: "Corso Alegórico de Primavera",
      subtitle: "Trujillo Florece",
      description:
        "El evento más colorido del norte peruano. Carros alegóricos decorados con miles de flores desfilan por las calles de Trujillo, acompañados de reinas de belleza y bandas musicales.",
      date: "Septiembre",
      location: "Trujillo, Perú",
      duration: "1 Semana",
      highlights: ["Carros Florales", "Reinas de Belleza", "Marinera"],
    },
    milagros: {
      title: "Señor de los Milagros",
      subtitle: "El Mes Morado",
      description:
        "La procesión religiosa más multitudinaria de América. Acompaña al Cristo Moreno en su recorrido por las calles de Lima, envuelto en el fervor de miles de devotos vestidos de morado.",
      date: "Octubre",
      location: "Lima, Perú",
      duration: "Todo Octubre",
      highlights: ["Procesión", "Turrón", "Tradición Colonial"],
    },
    qoyllur: {
      title: "Qoyllur Rit'i",
      subtitle: "Peregrinación Andina",
      description:
        "Una de las peregrinaciones más impresionantes del mundo. Miles de devotos ascienden al nevado Ausangate para venerar al Señor de Qoyllur Rit'i, fusionando tradiciones incaicas y católicas.",
      date: "Mayo - Junio",
      location: "Cusco, Perú",
      duration: "3 Días",
      highlights: ["Peregrinación", "Ukukus", "Nevado Ausangate"],
    },
  },
  badges: {
    featured: "Destacado",
    exclusive: "Exclusivo",
  },
  buttons: {
    reserveNow: "Reservar Ahora",
    moreInfo: "Más Información",
  },
  faq: {
    title: "Preguntas",
    titleItalic: "Frecuentes",
    subtitle: "Encuentra respuestas sobre nuestros eventos exclusivos y cómo reservar tu experiencia.",
    questions: {
      q1: {
        question: "¿Cómo puedo reservar un evento exclusivo?",
        answer:
          "Los eventos exclusivos requieren reserva previa. Haz clic en 'Reservar Ahora' en el evento de tu interés y completa el formulario. Nuestro equipo te contactará para confirmar disponibilidad y detalles.",
      },
      q2: {
        question: "¿Qué incluye el paquete de evento?",
        answer:
          "Cada paquete incluye transporte desde el punto de encuentro, guía especializado bilingüe, acceso preferencial a las ceremonias, y en algunos casos alojamiento y alimentación. Los detalles varían según el evento.",
      },
      q3: {
        question: "¿Cuánto tiempo antes debo reservar?",
        answer:
          "Recomendamos reservar con al menos 2-3 meses de anticipación, especialmente para eventos como Inti Raymi y la Candelaria, ya que las plazas son limitadas y la demanda es muy alta.",
      },
      q4: {
        question: "¿Los eventos son aptos para toda la familia?",
        answer:
          "La mayoría de nuestros eventos son aptos para toda la familia. Sin embargo, algunos como Qoyllur Rit'i requieren condición física para caminatas en altura. Consulta los requisitos específicos de cada evento.",
      },
      q5: {
        question: "¿Qué pasa si el evento se cancela por clima?",
        answer:
          "En caso de cancelación por condiciones climáticas extremas, ofrecemos reprogramación sin costo adicional o reembolso completo. Los eventos culturales rara vez se cancelan ya que son parte de tradiciones ancestrales.",
      },
      q6: {
        question: "¿Puedo solicitar un tour privado para grupos?",
        answer:
          "Sí, ofrecemos experiencias privadas para grupos de 6 o más personas. Incluyen guía exclusivo, transporte privado y accesos VIP. Contáctanos para cotización personalizada.",
      },
    },
  },
  cta: {
    title: "¿No encuentras tu evento?",
    description:
      "Contáctanos para crear una experiencia personalizada en cualquier festividad del Perú. Nuestro equipo puede organizar tours privados a eventos regionales.",
    button: "Consultar Ahora",
  },
  noResults: "No se encontraron eventos que coincidan con tu búsqueda.",
}

const eventsEn: EventsDictionary = {
  hero: {
    subtitle: "Exclusive Experiences",
    title: "Events",
    description: "Unique festivities that only occur on special dates",
  },
  introduction: {
    discover: "Discover",
    title: "Ancient",
    titleItalic: "Traditions",
    description:
      "Live unique experiences at Peru's most emblematic festivities. Exclusive events that celebrate our rich cultural heritage and only occur on specific dates of the year.",
  },
  search: {
    placeholder: "Search events...",
  },
  filters: {
    all: "All",
    religious: "Religious",
    cultural: "Cultural",
    patronal: "Patronal",
  },
  events: {
    intiRaymi: {
      title: "Inti Raymi",
      subtitle: "Festival of the Sun",
      description:
        "The most important celebration of the Inca Empire. Relive the majesty of the Festival of the Sun in Cusco, with ancestral ceremonies, traditional dances and the recreation of the ritual to the Sun God at Sacsayhuamán.",
      date: "June 24th",
      location: "Cusco, Peru",
      duration: "1 Day",
      highlights: ["Ancestral Ceremony", "Traditional Dances", "Sacsayhuamán"],
    },
    candelaria: {
      title: "Virgin of Candelaria",
      subtitle: "World Heritage",
      description:
        "The largest folkloric festival in South America. Experience the explosion of color, music and devotion in Puno, with more than 40,000 dancers and musicians paying tribute to the Virgin of Candelaria.",
      date: "February 2nd",
      location: "Puno, Peru",
      duration: "18 Days",
      highlights: ["UNESCO Heritage", "Diablada", "Dance Contest"],
    },
    arequipa: {
      title: "Anniversary of Arequipa",
      subtitle: "The White City",
      description:
        "Celebrate the anniversary of the Spanish founding of Arequipa. Enjoy serenades, parades, fireworks and the traditional burning of castles in the emblematic Plaza de Armas.",
      date: "August 15th",
      location: "Arequipa, Peru",
      duration: "10 Days",
      highlights: ["Parades", "Fireworks", "Friendship Corso"],
    },
    trujillo: {
      title: "Spring Allegorical Corso",
      subtitle: "Trujillo Blooms",
      description:
        "The most colorful event in northern Peru. Allegorical floats decorated with thousands of flowers parade through the streets of Trujillo, accompanied by beauty queens and musical bands.",
      date: "September",
      location: "Trujillo, Peru",
      duration: "1 Week",
      highlights: ["Floral Floats", "Beauty Queens", "Marinera"],
    },
    milagros: {
      title: "Lord of Miracles",
      subtitle: "The Purple Month",
      description:
        "The most crowded religious procession in America. Accompany the Cristo Moreno through the streets of Lima, wrapped in the fervor of thousands of devotees dressed in purple.",
      date: "October",
      location: "Lima, Peru",
      duration: "All October",
      highlights: ["Procession", "Turrón", "Colonial Tradition"],
    },
    qoyllur: {
      title: "Qoyllur Rit'i",
      subtitle: "Andean Pilgrimage",
      description:
        "One of the most impressive pilgrimages in the world. Thousands of devotees ascend to the Ausangate snow-capped mountain to venerate the Lord of Qoyllur Rit'i, merging Inca and Catholic traditions.",
      date: "May - June",
      location: "Cusco, Peru",
      duration: "3 Days",
      highlights: ["Pilgrimage", "Ukukus", "Ausangate Snowy"],
    },
  },
  badges: {
    featured: "Featured",
    exclusive: "Exclusive",
  },
  buttons: {
    reserveNow: "Reserve Now",
    moreInfo: "More Information",
  },
  faq: {
    title: "Frequently",
    titleItalic: "Asked",
    subtitle: "Find answers about our exclusive events and how to book your experience.",
    questions: {
      q1: {
        question: "How can I book an exclusive event?",
        answer:
          "Exclusive events require prior reservation. Click 'Reserve Now' on the event of your interest and complete the form. Our team will contact you to confirm availability and details.",
      },
      q2: {
        question: "What does the event package include?",
        answer:
          "Each package includes transportation from the meeting point, bilingual specialized guide, preferential access to ceremonies, and in some cases accommodation and meals. Details vary by event.",
      },
      q3: {
        question: "How far in advance should I book?",
        answer:
          "We recommend booking at least 2-3 months in advance, especially for events like Inti Raymi and Candelaria, as spots are limited and demand is very high.",
      },
      q4: {
        question: "Are events suitable for the whole family?",
        answer:
          "Most of our events are suitable for the whole family. However, some like Qoyllur Rit'i require physical condition for high-altitude hikes. Check the specific requirements for each event.",
      },
      q5: {
        question: "What happens if the event is cancelled due to weather?",
        answer:
          "In case of cancellation due to extreme weather conditions, we offer rescheduling at no additional cost or full refund. Cultural events are rarely cancelled as they are part of ancestral traditions.",
      },
      q6: {
        question: "Can I request a private tour for groups?",
        answer:
          "Yes, we offer private experiences for groups of 6 or more people. They include exclusive guide, private transportation and VIP access. Contact us for personalized quote.",
      },
    },
  },
  cta: {
    title: "Can't find your event?",
    description:
      "Contact us to create a personalized experience at any Peruvian festivity. Our team can organize private tours to regional events.",
    button: "Inquire Now",
  },
  noResults: "No events found matching your search.",
}

const eventsFr: EventsDictionary = {
  hero: {
    subtitle: "Expériences Exclusives",
    title: "Événements",
    description: "Festivités uniques qui ne se produisent qu'à des dates spéciales",
  },
  introduction: {
    discover: "Découvrez",
    title: "Traditions",
    titleItalic: "Millénaires",
    description:
      "Vivez des expériences uniques lors des festivités les plus emblématiques du Pérou. Événements exclusifs qui célèbrent notre riche héritage culturel et ne se produisent qu'à des dates spécifiques de l'année.",
  },
  search: {
    placeholder: "Rechercher des événements...",
  },
  filters: {
    all: "Tous",
    religious: "Religieux",
    cultural: "Culturels",
    patronal: "Patronaux",
  },
  events: {
    intiRaymi: {
      title: "Inti Raymi",
      subtitle: "Fête du Soleil",
      description:
        "La célébration la plus importante de l'empire inca. Revivez la majesté de la Fête du Soleil à Cusco, avec des cérémonies ancestrales, des danses traditionnelles et la recréation du rituel au Dieu Soleil à Sacsayhuamán.",
      date: "24 Juin",
      location: "Cusco, Pérou",
      duration: "1 Jour",
      highlights: ["Cérémonie Ancestrale", "Danses Traditionnelles", "Sacsayhuamán"],
    },
    candelaria: {
      title: "Vierge de la Candelaria",
      subtitle: "Patrimoine de l'Humanité",
      description:
        "La plus grande fête folklorique d'Amérique du Sud. Vivez l'explosion de couleur, de musique et de dévotion à Puno, avec plus de 40 000 danseurs et musiciens rendant hommage à la Vierge de la Candelaria.",
      date: "2 Février",
      location: "Puno, Pérou",
      duration: "18 Jours",
      highlights: ["Patrimoine UNESCO", "Diablada", "Concours de Danses"],
    },
    arequipa: {
      title: "Anniversaire d'Arequipa",
      subtitle: "La Ville Blanche",
      description:
        "Célébrez l'anniversaire de la fondation espagnole d'Arequipa. Profitez de sérénades, de défilés, de feux d'artifice et de la traditionnelle combustion de châteaux sur l'emblématique Plaza de Armas.",
      date: "15 Août",
      location: "Arequipa, Pérou",
      duration: "10 Jours",
      highlights: ["Défilés", "Feux d'Artifice", "Corso de l'Amitié"],
    },
    trujillo: {
      title: "Corso Allégorique de Printemps",
      subtitle: "Trujillo Fleurit",
      description:
        "L'événement le plus coloré du nord péruvien. Des chars allégoriques décorés de milliers de fleurs défilent dans les rues de Trujillo, accompagnés de reines de beauté et de groupes musicaux.",
      date: "Septembre",
      location: "Trujillo, Pérou",
      duration: "1 Semaine",
      highlights: ["Chars Floraux", "Reines de Beauté", "Marinera"],
    },
    milagros: {
      title: "Seigneur des Miracles",
      subtitle: "Le Mois Violet",
      description:
        "La procession religieuse la plus nombreuse d'Amérique. Accompagnez le Cristo Moreno dans les rues de Lima, enveloppé dans la ferveur de milliers de fidèles vêtus de violet.",
      date: "Octobre",
      location: "Lima, Pérou",
      duration: "Tout Octobre",
      highlights: ["Procession", "Turrón", "Tradition Coloniale"],
    },
    qoyllur: {
      title: "Qoyllur Rit'i",
      subtitle: "Pèlerinage Andin",
      description:
        "L'un des pèlerinages les plus impressionnants au monde. Des milliers de fidèles montent au sommet enneigé d'Ausangate pour vénérer le Seigneur de Qoyllur Rit'i, fusionnant les traditions incas et catholiques.",
      date: "Mai - Juin",
      location: "Cusco, Pérou",
      duration: "3 Jours",
      highlights: ["Pèlerinage", "Ukukus", "Sommet Ausangate"],
    },
  },
  badges: {
    featured: "En Vedette",
    exclusive: "Exclusif",
  },
  buttons: {
    reserveNow: "Réserver Maintenant",
    moreInfo: "Plus d'Informations",
  },
  faq: {
    title: "Questions",
    titleItalic: "Fréquentes",
    subtitle: "Trouvez des réponses sur nos événements exclusifs et comment réserver votre expérience.",
    questions: {
      q1: {
        question: "Comment puis-je réserver un événement exclusif?",
        answer:
          "Les événements exclusifs nécessitent une réservation préalable. Cliquez sur 'Réserver Maintenant' sur l'événement de votre intérêt et complétez le formulaire. Notre équipe vous contactera pour confirmer la disponibilité et les détails.",
      },
      q2: {
        question: "Qu'est-ce qui est inclus dans le forfait événement?",
        answer:
          "Chaque forfait comprend le transport depuis le point de rencontre, un guide spécialisé bilingue, un accès préférentiel aux cérémonies, et dans certains cas l'hébergement et les repas. Les détails varient selon l'événement.",
      },
      q3: {
        question: "Combien de temps à l'avance dois-je réserver?",
        answer:
          "Nous recommandons de réserver au moins 2-3 mois à l'avance, surtout pour des événements comme Inti Raymi et la Candelaria, car les places sont limitées et la demande est très élevée.",
      },
      q4: {
        question: "Les événements sont-ils adaptés à toute la famille?",
        answer:
          "La plupart de nos événements sont adaptés à toute la famille. Cependant, certains comme Qoyllur Rit'i nécessitent une condition physique pour les randonnées en altitude. Consultez les exigences spécifiques pour chaque événement.",
      },
      q5: {
        question: "Que se passe-t-il si l'événement est annulé en raison de la météo?",
        answer:
          "En cas d'annulation due à des conditions météorologiques extrêmes, nous offrons une reprogrammation sans frais supplémentaires ou un remboursement complet. Les événements culturels sont rarement annulés car ils font partie de traditions ancestrales.",
      },
      q6: {
        question: "Puis-je demander une visite privée pour des groupes?",
        answer:
          "Oui, nous proposons des expériences privées pour des groupes de 6 personnes ou plus. Elles comprennent un guide exclusif, un transport privé et un accès VIP. Contactez-nous pour un devis personnalisé.",
      },
    },
  },
  cta: {
    title: "Vous ne trouvez pas votre événement?",
    description:
      "Contactez-nous pour créer une expérience personnalisée lors de n'importe quelle festivité péruvienne. Notre équipe peut organiser des visites privées à des événements régionaux.",
    button: "Consulter Maintenant",
  },
  noResults: "Aucun événement trouvé correspondant à votre recherche.",
}

const eventsIt: EventsDictionary = {
  hero: {
    subtitle: "Esperienze Esclusive",
    title: "Eventi",
    description: "Festività uniche che si verificano solo in date speciali",
  },
  introduction: {
    discover: "Scopri",
    title: "Tradizioni",
    titleItalic: "Millenarie",
    description:
      "Vivi esperienze uniche nelle festività più emblematiche del Perù. Eventi esclusivi che celebrano la nostra ricca eredità culturale e si verificano solo in date specifiche dell'anno.",
  },
  search: {
    placeholder: "Cerca eventi...",
  },
  filters: {
    all: "Tutti",
    religious: "Religiosi",
    cultural: "Culturali",
    patronal: "Patronali",
  },
  events: {
    intiRaymi: {
      title: "Inti Raymi",
      subtitle: "Festa del Sole",
      description:
        "La celebrazione più importante dell'impero inca. Rivivi la maestosità della Festa del Sole a Cusco, con cerimonie ancestrali, danze tradizionali e la ricreazione del rituale al Dio Sole a Sacsayhuamán.",
      date: "24 Giugno",
      location: "Cusco, Perù",
      duration: "1 Giorno",
      highlights: ["Cerimonia Ancestrale", "Danze Tradizionali", "Sacsayhuamán"],
    },
    candelaria: {
      title: "Vergine della Candelaria",
      subtitle: "Patrimonio dell'Umanità",
      description:
        "La più grande festa folcloristica del Sud America. Vivi l'esplosione di colore, musica e devozione a Puno, con più di 40.000 ballerini e musicisti che rendono omaggio alla Vergine della Candelaria.",
      date: "2 Febbraio",
      location: "Puno, Perù",
      duration: "18 Giorni",
      highlights: ["Patrimonio UNESCO", "Diablada", "Concorso di Danze"],
    },
    arequipa: {
      title: "Anniversario di Arequipa",
      subtitle: "La Città Bianca",
      description:
        "Celebra l'anniversario della fondazione spagnola di Arequipa. Goditi serenate, sfilate, fuochi d'artificio e la tradizionale combustione di castelli nell'emblematica Plaza de Armas.",
      date: "15 Agosto",
      location: "Arequipa, Perù",
      duration: "10 Giorni",
      highlights: ["Sfilate", "Fuochi d'Artificio", "Corso dell'Amicizia"],
    },
    trujillo: {
      title: "Corso Allegorico di Primavera",
      subtitle: "Trujillo Fiorisce",
      description:
        "L'evento più colorato del nord peruviano. Carri allegorici decorati con migliaia di fiori sfilano per le strade di Trujillo, accompagnati da regine di bellezza e bande musicali.",
      date: "Settembre",
      location: "Trujillo, Perù",
      duration: "1 Settimana",
      highlights: ["Carri Floreali", "Regine di Bellezza", "Marinera"],
    },
    milagros: {
      title: "Signore dei Miracoli",
      subtitle: "Il Mese Viola",
      description:
        "La processione religiosa più affollata d'America. Accompagna il Cristo Moreno per le strade di Lima, avvolto nel fervore di migliaia di devoti vestiti di viola.",
      date: "Ottobre",
      location: "Lima, Perù",
      duration: "Tutto Ottobre",
      highlights: ["Processione", "Turrón", "Tradizione Coloniale"],
    },
    qoyllur: {
      title: "Qoyllur Rit'i",
      subtitle: "Pellegrinaggio Andino",
      description:
        "Uno dei pellegrinaggi più impressionanti al mondo. Migliaia di devoti salgono al nevado Ausangate per venerare il Signore di Qoyllur Rit'i, fondendo tradizioni incaiche e cattoliche.",
      date: "Maggio - Giugno",
      location: "Cusco, Perù",
      duration: "3 Giorni",
      highlights: ["Pellegrinaggio", "Ukukus", "Nevado Ausangate"],
    },
  },
  badges: {
    featured: "In Evidenza",
    exclusive: "Esclusivo",
  },
  buttons: {
    reserveNow: "Prenota Ora",
    moreInfo: "Maggiori Informazioni",
  },
  faq: {
    title: "Domande",
    titleItalic: "Frequenti",
    subtitle: "Trova risposte sui nostri eventi esclusivi e come prenotare la tua esperienza.",
    questions: {
      q1: {
        question: "Come posso prenotare un evento esclusivo?",
        answer:
          "Gli eventi esclusivi richiedono prenotazione anticipata. Clicca su 'Prenota Ora' sull'evento di tuo interesse e completa il modulo. Il nostro team ti contatterà per confermare disponibilità e dettagli.",
      },
      q2: {
        question: "Cosa include il pacchetto evento?",
        answer:
          "Ogni pacchetto include trasporto dal punto di incontro, guida specializzata bilingue, accesso preferenziale alle cerimonie, e in alcuni casi alloggio e pasti. I dettagli variano a seconda dell'evento.",
      },
      q3: {
        question: "Con quanto anticipo devo prenotare?",
        answer:
          "Consigliamo di prenotare con almeno 2-3 mesi di anticipo, specialmente per eventi come Inti Raymi e la Candelaria, poiché i posti sono limitati e la domanda è molto alta.",
      },
      q4: {
        question: "Gli eventi sono adatti a tutta la famiglia?",
        answer:
          "La maggior parte dei nostri eventi sono adatti a tutta la famiglia. Tuttavia, alcuni come Qoyllur Rit'i richiedono condizione fisica per escursioni ad alta quota. Consulta i requisiti specifici per ogni evento.",
      },
      q5: {
        question: "Cosa succede se l'evento viene cancellato per maltempo?",
        answer:
          "In caso di cancellazione per condizioni meteorologiche estreme, offriamo riprogrammazione senza costi aggiuntivi o rimborso completo. Gli eventi culturali sono raramente cancellati in quanto fanno parte di tradizioni ancestrali.",
      },
      q6: {
        question: "Posso richiedere un tour privato per gruppi?",
        answer:
          "Sì, offriamo esperienze private per gruppi di 6 o più persone. Includono guida esclusiva, trasporto privato e accesso VIP. Contattaci per un preventivo personalizzato.",
      },
    },
  },
  cta: {
    title: "Non trovi il tuo evento?",
    description:
      "Contattaci per creare un'esperienza personalizzata in qualsiasi festività peruviana. Il nostro team può organizzare tour privati a eventi regionali.",
    button: "Consulta Ora",
  },
  noResults: "Nessun evento trovato che corrisponda alla tua ricerca.",
}

const eventsDe: EventsDictionary = {
  hero: {
    subtitle: "Exklusive Erlebnisse",
    title: "Veranstaltungen",
    description: "Einzigartige Festlichkeiten, die nur an besonderen Terminen stattfinden",
  },
  introduction: {
    discover: "Entdecken",
    title: "Jahrtausende",
    titleItalic: "Alte Traditionen",
    description:
      "Erleben Sie einzigartige Erfahrungen bei den emblematischsten Festlichkeiten Perus. Exklusive Veranstaltungen, die unser reiches kulturelles Erbe feiern und nur an bestimmten Terminen des Jahres stattfinden.",
  },
  search: {
    placeholder: "Veranstaltungen suchen...",
  },
  filters: {
    all: "Alle",
    religious: "Religiös",
    cultural: "Kulturell",
    patronal: "Patronal",
  },
  events: {
    intiRaymi: {
      title: "Inti Raymi",
      subtitle: "Fest der Sonne",
      description:
        "Die wichtigste Feier des Inka-Reiches. Erleben Sie die Majestät des Sonnenfests in Cusco mit ancestralen Zeremonien, traditionellen Tänzen und der Nachstellung des Rituals zum Sonnengott in Sacsayhuamán.",
      date: "24. Juni",
      location: "Cusco, Peru",
      duration: "1 Tag",
      highlights: ["Ancestrale Zeremonie", "Traditionelle Tänze", "Sacsayhuamán"],
    },
    candelaria: {
      title: "Jungfrau von Candelaria",
      subtitle: "Weltkulturerbe",
      description:
        "Das größte folkloristische Fest Südamerikas. Erleben Sie die Explosion von Farbe, Musik und Hingabe in Puno, mit mehr als 40.000 Tänzern und Musikern, die der Jungfrau von Candelaria huldigen.",
      date: "2. Februar",
      location: "Puno, Peru",
      duration: "18 Tage",
      highlights: ["UNESCO-Erbe", "Diablada", "Tanzwettbewerb"],
    },
    arequipa: {
      title: "Jubiläum von Arequipa",
      subtitle: "Die Weiße Stadt",
      description:
        "Feiern Sie den Jahrestag der spanischen Gründung von Arequipa. Genießen Sie Ständchen, Umzüge, Feuerwerk und die traditionelle Verbrennung von Schlössern auf der emblematischen Plaza de Armas.",
      date: "15. August",
      location: "Arequipa, Peru",
      duration: "10 Tage",
      highlights: ["Umzüge", "Feuerwerk", "Freundschafts-Corso"],
    },
    trujillo: {
      title: "Allegorischer Frühlingscorso",
      subtitle: "Trujillo Blüht",
      description:
        "Das farbenprächtigste Ereignis in Nordperu. Allegorische Wagen, geschmückt mit Tausenden von Blumen, ziehen durch die Straßen von Trujillo, begleitet von Schönheitsköniginnen und Musikkapellen.",
      date: "September",
      location: "Trujillo, Peru",
      duration: "1 Woche",
      highlights: ["Blumenwagen", "Schönheitsköniginnen", "Marinera"],
    },
    milagros: {
      title: "Herr der Wunder",
      subtitle: "Der Violette Monat",
      description:
        "Die meistbesuchte religiöse Prozession Amerikas. Begleiten Sie den Cristo Moreno durch die Straßen von Lima, umhüllt von der Inbrunst Tausender Gläubiger in Violett gekleidet.",
      date: "Oktober",
      location: "Lima, Peru",
      duration: "Ganzer Oktober",
      highlights: ["Prozession", "Turrón", "Koloniale Tradition"],
    },
    qoyllur: {
      title: "Qoyllur Rit'i",
      subtitle: "Andenpilgerfahrt",
      description:
        "Eine der beeindruckendsten Pilgerfahrten der Welt. Tausende Gläubige steigen zum schneebedeckten Ausangate auf, um den Herrn von Qoyllur Rit'i zu verehren und Inka- und katholische Traditionen zu verschmelzen.",
      date: "Mai - Juni",
      location: "Cusco, Peru",
      duration: "3 Tage",
      highlights: ["Pilgerfahrt", "Ukukus", "Ausangate-Schneeberg"],
    },
  },
  badges: {
    featured: "Hervorgehoben",
    exclusive: "Exklusiv",
  },
  buttons: {
    reserveNow: "Jetzt Reservieren",
    moreInfo: "Mehr Informationen",
  },
  faq: {
    title: "Häufig",
    titleItalic: "Gestellte Fragen",
    subtitle: "Finden Sie Antworten zu unseren exklusiven Veranstaltungen und wie Sie Ihr Erlebnis buchen können.",
    questions: {
      q1: {
        question: "Wie kann ich eine exklusive Veranstaltung buchen?",
        answer:
          "Exklusive Veranstaltungen erfordern eine vorherige Reservierung. Klicken Sie auf 'Jetzt Reservieren' bei der Veranstaltung Ihrer Wahl und füllen Sie das Formular aus. Unser Team wird Sie kontaktieren, um Verfügbarkeit und Details zu bestätigen.",
      },
      q2: {
        question: "Was ist im Veranstaltungspaket enthalten?",
        answer:
          "Jedes Paket umfasst Transport vom Treffpunkt, zweisprachigen spezialisierten Führer, bevorzugten Zugang zu Zeremonien und in einigen Fällen Unterkunft und Verpflegung. Details variieren je nach Veranstaltung.",
      },
      q3: {
        question: "Wie weit im Voraus sollte ich buchen?",
        answer:
          "Wir empfehlen, mindestens 2-3 Monate im Voraus zu buchen, insbesondere für Veranstaltungen wie Inti Raymi und Candelaria, da die Plätze begrenzt und die Nachfrage sehr hoch ist.",
      },
      q4: {
        question: "Sind die Veranstaltungen für die ganze Familie geeignet?",
        answer:
          "Die meisten unserer Veranstaltungen sind für die ganze Familie geeignet. Einige wie Qoyllur Rit'i erfordern jedoch körperliche Fitness für Wanderungen in großer Höhe. Überprüfen Sie die spezifischen Anforderungen für jede Veranstaltung.",
      },
      q5: {
        question: "Was passiert, wenn die Veranstaltung wetterbedingt abgesagt wird?",
        answer:
          "Im Falle einer Absage aufgrund extremer Wetterbedingungen bieten wir kostenlose Umbuchung oder vollständige Rückerstattung. Kulturelle Veranstaltungen werden selten abgesagt, da sie Teil ancestraler Traditionen sind.",
      },
      q6: {
        question: "Kann ich eine private Tour für Gruppen anfordern?",
        answer:
          "Ja, wir bieten private Erlebnisse für Gruppen von 6 oder mehr Personen an. Sie umfassen exklusiven Führer, privaten Transport und VIP-Zugang. Kontaktieren Sie uns für ein personalisiertes Angebot.",
      },
    },
  },
  cta: {
    title: "Finden Sie Ihre Veranstaltung nicht?",
    description:
      "Kontaktieren Sie uns, um ein personalisiertes Erlebnis bei jeder peruanischen Feierlichkeit zu schaffen. Unser Team kann private Touren zu regionalen Veranstaltungen organisieren.",
    button: "Jetzt Anfragen",
  },
  noResults: "Keine Veranstaltungen gefunden, die Ihrer Suche entsprechen.",
}

const eventsPt: EventsDictionary = {
  hero: {
    subtitle: "Experiências Exclusivas",
    title: "Eventos",
    description: "Festividades únicas que ocorrem apenas em datas especiais",
  },
  introduction: {
    discover: "Descubra",
    title: "Tradições",
    titleItalic: "Milenares",
    description:
      "Viva experiências únicas nas festividades mais emblemáticas do Peru. Eventos exclusivos que celebram nossa rica herança cultural e ocorrem apenas em datas específicas do ano.",
  },
  search: {
    placeholder: "Buscar eventos...",
  },
  filters: {
    all: "Todos",
    religious: "Religiosos",
    cultural: "Culturais",
    patronal: "Patronais",
  },
  events: {
    intiRaymi: {
      title: "Inti Raymi",
      subtitle: "Festa do Sol",
      description:
        "A celebração mais importante do império inca. Reviva a majestade da Festa do Sol em Cusco, com cerimônias ancestrais, danças tradicionais e a recriação do ritual ao Deus Sol em Sacsayhuamán.",
      date: "24 de Junho",
      location: "Cusco, Peru",
      duration: "1 Dia",
      highlights: ["Cerimônia Ancestral", "Danças Tradicionais", "Sacsayhuamán"],
    },
    candelaria: {
      title: "Virgem da Candelária",
      subtitle: "Patrimônio da Humanidade",
      description:
        "A maior festividade folclórica da América do Sul. Viva a explosão de cor, música e devoção em Puno, com mais de 40.000 dançarinos e músicos prestando homenagem à Virgem da Candelária.",
      date: "2 de Fevereiro",
      location: "Puno, Peru",
      duration: "18 Dias",
      highlights: ["Patrimônio UNESCO", "Diablada", "Concurso de Danças"],
    },
    arequipa: {
      title: "Aniversário de Arequipa",
      subtitle: "A Cidade Branca",
      description:
        "Celebre o aniversário da fundação espanhola de Arequipa. Desfrute de serenatas, desfiles, fogos de artifício e a tradicional queima de castelos na emblemática Plaza de Armas.",
      date: "15 de Agosto",
      location: "Arequipa, Peru",
      duration: "10 Dias",
      highlights: ["Desfiles", "Fogos de Artifício", "Corso da Amizade"],
    },
    trujillo: {
      title: "Corso Alegórico de Primavera",
      subtitle: "Trujillo Floresce",
      description:
        "O evento mais colorido do norte peruano. Carros alegóricos decorados com milhares de flores desfilam pelas ruas de Trujillo, acompanhados por rainhas de beleza e bandas musicais.",
      date: "Setembro",
      location: "Trujillo, Peru",
      duration: "1 Semana",
      highlights: ["Carros Florais", "Rainhas de Beleza", "Marinera"],
    },
    milagros: {
      title: "Senhor dos Milagres",
      subtitle: "O Mês Roxo",
      description:
        "A procissão religiosa mais numerosa da América. Acompanhe o Cristo Moreno pelas ruas de Lima, envolto no fervor de milhares de devotos vestidos de roxo.",
      date: "Outubro",
      location: "Lima, Peru",
      duration: "Todo Outubro",
      highlights: ["Procissão", "Turrón", "Tradição Colonial"],
    },
    qoyllur: {
      title: "Qoyllur Rit'i",
      subtitle: "Peregrinação Andina",
      description:
        "Uma das peregrinações mais impressionantes do mundo. Milhares de devotos sobem ao nevado Ausangate para venerar o Senhor de Qoyllur Rit'i, fundindo tradições incas e católicas.",
      date: "Maio - Junho",
      location: "Cusco, Peru",
      duration: "3 Dias",
      highlights: ["Peregrinação", "Ukukus", "Nevado Ausangate"],
    },
  },
  badges: {
    featured: "Destaque",
    exclusive: "Exclusivo",
  },
  buttons: {
    reserveNow: "Reservar Agora",
    moreInfo: "Mais Informações",
  },
  faq: {
    title: "Perguntas",
    titleItalic: "Frequentes",
    subtitle: "Encontre respostas sobre nossos eventos exclusivos e como reservar sua experiência.",
    questions: {
      q1: {
        question: "Como posso reservar um evento exclusivo?",
        answer:
          "Os eventos exclusivos requerem reserva prévia. Clique em 'Reservar Agora' no evento de seu interesse e preencha o formulário. Nossa equipe entrará em contato para confirmar disponibilidade e detalhes.",
      },
      q2: {
        question: "O que está incluído no pacote de evento?",
        answer:
          "Cada pacote inclui transporte do ponto de encontro, guia especializado bilíngue, acesso preferencial às cerimônias e, em alguns casos, hospedagem e alimentação. Os detalhes variam de acordo com o evento.",
      },
      q3: {
        question: "Com quanto tempo de antecedência devo reservar?",
        answer:
          "Recomendamos reservar com pelo menos 2-3 meses de antecedência, especialmente para eventos como Inti Raymi e Candelária, pois as vagas são limitadas e a demanda é muito alta.",
      },
      q4: {
        question: "Os eventos são adequados para toda a família?",
        answer:
          "A maioria de nossos eventos é adequada para toda a família. No entanto, alguns como Qoyllur Rit'i requerem condição física para caminhadas em altitude. Consulte os requisitos específicos para cada evento.",
      },
      q5: {
        question: "O que acontece se o evento for cancelado devido ao clima?",
        answer:
          "Em caso de cancelamento por condições climáticas extremas, oferecemos reagendamento sem custo adicional ou reembolso completo. Os eventos culturais raramente são cancelados, pois fazem parte de tradições ancestrais.",
      },
      q6: {
        question: "Posso solicitar um tour privado para grupos?",
        answer:
          "Sim, oferecemos experiências privadas para grupos de 6 ou mais pessoas. Incluem guia exclusivo, transporte privado e acesso VIP. Entre em contato para orçamento personalizado.",
      },
    },
  },
  cta: {
    title: "Não encontrou seu evento?",
    description:
      "Entre em contato para criar uma experiência personalizada em qualquer festividade peruana. Nossa equipe pode organizar tours privados para eventos regionais.",
    button: "Consultar Agora",
  },
  noResults: "Nenhum evento encontrado que corresponda à sua busca.",
}

const eventsZh: EventsDictionary = {
  hero: {
    subtitle: "独家体验",
    title: "活动",
    description: "仅在特定日期举行的独特节日",
  },
  introduction: {
    discover: "发现",
    title: "千年",
    titleItalic: "传统",
    description: "在秘鲁最具代表性的节日中体验独特的经历。庆祝我们丰富文化遗产的独家活动,仅在一年中的特定日期举行。",
  },
  search: {
    placeholder: "搜索活动...",
  },
  filters: {
    all: "全部",
    religious: "宗教",
    cultural: "文化",
    patronal: "守护神",
  },
  events: {
    intiRaymi: {
      title: "太阳节",
      subtitle: "太阳节",
      description:
        "印加帝国最重要的庆典。在库斯科重温太阳节的辉煌,包括祖先仪式、传统舞蹈和在萨克塞华曼重现对太阳神的仪式。",
      date: "6月24日",
      location: "秘鲁库斯科",
      duration: "1天",
      highlights: ["祖先仪式", "传统舞蹈", "萨克塞华曼"],
    },
    candelaria: {
      title: "坎德拉里亚圣母节",
      subtitle: "世界遗产",
      description:
        "南美最大的民俗节日。在普诺体验色彩、音乐和虔诚的爆发,超过40,000名舞者和音乐家向坎德拉里亚圣母致敬。",
      date: "2月2日",
      location: "秘鲁普诺",
      duration: "18天",
      highlights: ["联合国教科文组织遗产", "恶魔舞", "舞蹈比赛"],
    },
    arequipa: {
      title: "阿雷基帕周年纪念",
      subtitle: "白城",
      description: "庆祝阿雷基帕西班牙建城周年。在标志性的阿马斯广场享受小夜曲、游行、烟花和传统的城堡燃烧。",
      date: "8月15日",
      location: "秘鲁阿雷基帕",
      duration: "10天",
      highlights: ["游行", "烟花", "友谊游行"],
    },
    trujillo: {
      title: "春季寓言游行",
      subtitle: "特鲁希略盛开",
      description:
        "秘鲁北部最丰富多彩的活动。装饰着成千上万朵花的寓言花车在特鲁希略的街道上游行,伴随着选美皇后和音乐乐队。",
      date: "九月",
      location: "秘鲁特鲁希略",
      duration: "1周",
      highlights: ["花车", "选美皇后", "水手舞"],
    },
    milagros: {
      title: "奇迹主",
      subtitle: "紫色月",
      description: "陪伴黑色基督穿过利马的街道,沉浸在数千名身着紫色的虔诚信徒的热情中。",
      date: "十月",
      location: "秘鲁利马",
      duration: "整个十月",
      highlights: ["游行", "牛轧糖", "殖民传统"],
    },
    qoyllur: {
      title: "克友鲁里提",
      subtitle: "安第斯朝圣",
      description:
        "世界上最令人印象深刻的朝圣之一。成千上万的信徒攀登到奥桑加特雪山,崇拜克友鲁里提主,融合印加和天主教传统。",
      date: "五月 - 六月",
      location: "秘鲁库斯科",
      duration: "3天",
      highlights: ["朝圣", "乌库库斯", "奥桑加特雪山"],
    },
  },
  badges: {
    featured: "精选",
    exclusive: "独家",
  },
  buttons: {
    reserveNow: "立即预订",
    moreInfo: "更多信息",
  },
  faq: {
    title: "常见",
    titleItalic: "问题",
    subtitle: "查找有关我们独家活动以及如何预订体验的答案。",
    questions: {
      q1: {
        question: "如何预订独家活动?",
        answer:
          "独家活动需要提前预订。点击您感兴趣的活动上的'立即预订'并填写表格。我们的团队将与您联系以确认可用性和详细信息。",
      },
      q2: {
        question: "活动套餐包括什么?",
        answer:
          "每个套餐包括从集合点的交通、双语专业导游、优先进入仪式,在某些情况下还包括住宿和餐饮。详细信息因活动而异。",
      },
      q3: {
        question: "我应该提前多久预订?",
        answer: "我们建议至少提前2-3个月预订,特别是对于太阳节和坎德拉里亚等活动,因为名额有限且需求很高。",
      },
      q4: {
        question: "活动适合全家参加吗?",
        answer:
          "我们的大多数活动适合全家参加。但是,像克友鲁里提这样的一些活动需要高海拔徒步的身体条件。查看每个活动的具体要求。",
      },
      q5: {
        question: "如果活动因天气原因取消怎么办?",
        answer: "如果因极端天气条件取消,我们提供免费改期或全额退款。文化活动很少取消,因为它们是祖先传统的一部分。",
      },
      q6: {
        question: "我可以为团体申请私人旅游吗?",
        answer: "是的,我们为6人或更多人的团体提供私人体验。包括专属导游、私人交通和VIP通道。联系我们获取个性化报价。",
      },
    },
  },
  cta: {
    title: "找不到您的活动?",
    description: "联系我们在任何秘鲁节日创建个性化体验。我们的团队可以组织前往地区活动的私人旅游。",
    button: "立即咨询",
  },
  noResults: "未找到与您的搜索匹配的活动。",
}

const eventsJa: EventsDictionary = {
  hero: {
    subtitle: "限定体験",
    title: "イベント",
    description: "特別な日にのみ開催されるユニークなお祭り",
  },
  introduction: {
    discover: "発見",
    title: "千年の",
    titleItalic: "伝統",
    description:
      "ペルーで最も象徴的なお祭りでユニークな体験をお楽しみください。私たちの豊かな文化遺産を祝う限定イベントで、年間の特定の日にのみ開催されます。",
  },
  search: {
    placeholder: "イベントを検索...",
  },
  filters: {
    all: "すべて",
    religious: "宗教的",
    cultural: "文化的",
    patronal: "守護聖人",
  },
  events: {
    intiRaymi: {
      title: "インティライミ",
      subtitle: "太陽の祭り",
      description:
        "インカ帝国で最も重要なお祝い。クスコで太陽の祭りの壮大さを再現し、祖先の儀式、伝統的な踊り、サクサイワマンでの太陽神への儀式の再現をお楽しみください。",
      date: "6月24日",
      location: "ペルー、クスコ",
      duration: "1日",
      highlights: ["祖先の儀式", "伝統的な踊り", "サクサイワマン"],
    },
    candelaria: {
      title: "カンデラリアの聖母",
      subtitle: "世界遺産",
      description:
        "南米最大の民俗祭り。プーノで色彩、音楽、献身の爆発を体験し、40,000人以上のダンサーと音楽家がカンデラリアの聖母に敬意を表します。",
      date: "2月2日",
      location: "ペルー、プーノ",
      duration: "18日間",
      highlights: ["ユネスコ遺産", "ディアブラーダ", "ダンスコンテスト"],
    },
    arequipa: {
      title: "アレキパ記念日",
      subtitle: "白い街",
      description:
        "アレキパのスペイン建国記念日を祝います。象徴的なアルマス広場でセレナーデ、パレード、花火、伝統的な城の燃焼をお楽しみください。",
      date: "8月15日",
      location: "ペルー、アレキパ",
      duration: "10日間",
      highlights: ["パレード", "花火", "友情コルソ"],
    },
    trujillo: {
      title: "春の寓話的コルソ",
      subtitle: "トルヒーヨが花開く",
      description:
        "ペルー北部で最もカラフルなイベント。何千もの花で飾られた寓話的な山車がトルヒーヨの通りをパレードし、美女と音楽バンドが同行します。",
      date: "9月",
      location: "ペルー、トルヒーヨ",
      duration: "1週間",
      highlights: ["花車", "美女", "マリネラ"],
    },
    milagros: {
      title: "奇跡の主",
      subtitle: "紫の月",
      description:
        "アメリカで最も混雑する宗教的行列。紫の服を着た何千人もの信者の熱意に包まれながら、リマの通りを黒いキリストと共に歩きます。",
      date: "10月",
      location: "ペルー、リマ",
      duration: "10月全体",
      highlights: ["行列", "トゥロン", "植民地時代の伝統"],
    },
    qoyllur: {
      title: "コイユルリティ",
      subtitle: "アンデスの巡礼",
      description:
        "世界で最も印象的な巡礼の一つ。何千人もの信者がアウサンガテ雪山に登り、コイユルリティの主を崇拝し、インカとカトリックの伝統を融合させます。",
      date: "5月 - 6月",
      location: "ペルー、クスコ",
      duration: "3日間",
      highlights: ["巡礼", "ウクク", "アウサンガテ雪山"],
    },
  },
  badges: {
    featured: "注目",
    exclusive: "限定",
  },
  buttons: {
    reserveNow: "今すぐ予約",
    moreInfo: "詳細情報",
  },
  faq: {
    title: "よくある",
    titleItalic: "質問",
    subtitle: "限定イベントと体験の予約方法についての回答を見つけてください。",
    questions: {
      q1: {
        question: "限定イベントを予約するにはどうすればよいですか?",
        answer:
          "限定イベントには事前予約が必要です。興味のあるイベントの「今すぐ予約」をクリックしてフォームに記入してください。私たちのチームが可用性と詳細を確認するためにご連絡します。",
      },
      q2: {
        question: "イベントパッケージには何が含まれていますか?",
        answer:
          "各パッケージには、集合場所からの交通手段、バイリンガルの専門ガイド、儀式への優先アクセス、場合によっては宿泊と食事が含まれます。詳細はイベントによって異なります。",
      },
      q3: {
        question: "どのくらい前に予約すべきですか?",
        answer:
          "特にインティライミやカンデラリアなどのイベントは、席が限られており需要が非常に高いため、少なくとも2〜3か月前に予約することをお勧めします。",
      },
      q4: {
        question: "イベントは家族全員に適していますか?",
        answer:
          "私たちのイベントのほとんどは家族全員に適しています。ただし、コイユルリティなど一部は高地でのハイキングのための体力が必要です。各イベントの具体的な要件を確認してください。",
      },
      q5: {
        question: "天候によりイベントがキャンセルされた場合はどうなりますか?",
        answer:
          "極端な気象条件によるキャンセルの場合、追加料金なしで再スケジュールまたは全額返金を提供します。文化イベントは祖先の伝統の一部であるため、めったにキャンセルされません。",
      },
      q6: {
        question: "グループ向けのプライベートツアーをリクエストできますか?",
        answer:
          "はい、6人以上のグループ向けにプライベート体験を提供しています。専属ガイド、プライベート交通手段、VIPアクセスが含まれます。カスタマイズされた見積もりについてはお問い合わせください。",
      },
    },
  },
  cta: {
    title: "イベントが見つかりませんか?",
    description:
      "ペルーのお祭りでカスタマイズされた体験を作成するためにお問い合わせください。私たちのチームは地域イベントへのプライベートツアーを手配できます。",
    button: "今すぐお問い合わせ",
  },
  noResults: "検索に一致するイベントが見つかりませんでした。",
}

const eventsRu: EventsDictionary = {
  hero: {
    subtitle: "Эксклюзивные Впечатления",
    title: "События",
    description: "Уникальные праздники, происходящие только в особые даты",
  },
  introduction: {
    discover: "Откройте",
    title: "Тысячелетние",
    titleItalic: "Традиции",
    description:
      "Получите уникальные впечатления на самых символичных праздниках Перу. Эксклюзивные события, которые празднуют наше богатое культурное наследие и происходят только в определенные даты года.",
  },
  search: {
    placeholder: "Поиск событий...",
  },
  filters: {
    all: "Все",
    religious: "Религиозные",
    cultural: "Культурные",
    patronal: "Покровительские",
  },
  events: {
    intiRaymi: {
      title: "Инти Райми",
      subtitle: "Праздник Солнца",
      description:
        "Самый важный праздник империи инков. Переживите величие Праздника Солнца в Куско с церемониями предков, традиционными танцами и воссозданием ритуала для Бога Солнца в Саксайуамане.",
      date: "24 июня",
      location: "Куско, Перу",
      duration: "1 день",
      highlights: ["Церемония предков", "Традиционные танцы", "Саксайуаман"],
    },
    candelaria: {
      title: "Дева Канделарии",
      subtitle: "Всемирное наследие",
      description:
        "Крупнейший фольклорный фестиваль в Южной Америке. Испытайте взрыв цвета, музыки и преданности в Пуно, где более 40 000 танцоров и музыкантов воздают честь Деве Канделарии.",
      date: "2 февраля",
      location: "Пуно, Перу",
      duration: "18 дней",
      highlights: ["Наследие ЮНЕСКО", "Diablada", "Конкурс танцев"],
    },
    arequipa: {
      title: "Годовщина Арекипы",
      subtitle: "Белый город",
      description:
        "Отпразднуйте годовщину испанского основания Арекипы. Насладитесь серенадами, парадами, фейерверками и традиционным сжиганием замков на символической Пласа-де-Армас.",
      date: "15 августа",
      location: "Арекипа, Перу",
      duration: "10 дней",
      highlights: ["Парады", "Фейерверки", "Корсо дружбы"],
    },
    trujillo: {
      title: "Весенний аллегорический корсо",
      subtitle: "Трухильо расцветает",
      description:
        "Самое красочное событие на севере Перу. Аллегорические повозки, украшенные тысячами цветов, парадируют по улицам Трухильо в сопровождении королев красоты и музыкальных групп.",
      date: "Сентябрь",
      location: "Трухильо, Перу",
      duration: "1 неделя",
      highlights: ["Цветочные повозки", "Королевы красоты", "Маринера"],
    },
    milagros: {
      title: "Господь чудес",
      subtitle: "Фиолетовый месяц",
      description:
        "Самая многолюдная религиозная процессия в Америке. Сопровождайте Черного Христа по улицам Лимы, окруженного рвением тысяч преданных, одетых в фиолетовое.",
      date: "Октябрь",
      location: "Лима, Перу",
      duration: "Весь октябрь",
      highlights: ["Процессия", "Туррон", "Колониальная традиция"],
    },
    qoyllur: {
      title: "Койюр Рити",
      subtitle: "Андское паломничество",
      description:
        "Одно из самых впечатляющих паломничеств в мире. Тысячи преданных поднимаются на заснеженную гору Аусангате, чтобы почтить Господа Койюр Рити, объединяя традиции инков и католиков.",
      date: "Май - июнь",
      location: "Куско, Перу",
      duration: "3 дня",
      highlights: ["Паломничество", "Укукус", "Заснеженный Аусангате"],
    },
  },
  badges: {
    featured: "Избранное",
    exclusive: "Эксклюзив",
  },
  buttons: {
    reserveNow: "Забронировать сейчас",
    moreInfo: "Подробнее",
  },
  faq: {
    title: "Часто",
    titleItalic: "Задаваемые вопросы",
    subtitle: "Найдите ответы о наших эксклюзивных событиях и как забронировать свой опыт.",
    questions: {
      q1: {
        question: "Как я могу забронировать эксклюзивное событие?",
        answer:
          "Эксклюзивные события требуют предварительного бронирования. Нажмите 'Забронировать сейчас' на интересующем вас событии и заполните форму. Наша команда свяжется с вами, чтобы подтвердить наличие и детали.",
      },
      q2: {
        question: "Что включает в себя пакет событий?",
        answer:
          "Каждый пакет включает транспорт от места встречи, двуязычного специализированного гида, привилегированный доступ к церемониям, а в некоторых случаях проживание и питание. Детали зависят от события.",
      },
      q3: {
        question: "За сколько времени я должен забронировать?",
        answer:
          "Мы рекомендуем бронировать как минимум за 2-3 месяца, особенно для таких событий, как Инти Райми и Канделария, так как места ограничены, а спрос очень высок.",
      },
      q4: {
        question: "Подходят ли события для всей семьи?",
        answer:
          "Большинство наших событий подходят для всей семьи. Однако некоторые, такие как Койюр Рити, требуют физической подготовки для походов на высоте. Проверьте конкретные требования для каждого события.",
      },
      q5: {
        question: "Что произойдет, если событие будет отменено из-за погоды?",
        answer:
          "В случае отмены из-за экстремальных погодных условий мы предлагаем перенос без дополнительной оплаты или полный возврат средств. Культурные события редко отменяются, так как они являются частью традиций предков.",
      },
      q6: {
        question: "Могу ли я запросить частный тур для групп?",
        answer:
          "Да, мы предлагаем частные впечатления для групп из 6 или более человек. Они включают эксклюзивного гида, частный транспорт и VIP-доступ. Свяжитесь с нами для персонализированного предложения.",
      },
    },
  },
  cta: {
    title: "Не можете найти свое событие?",
    description:
      "Свяжитесь с нами, чтобы создать персонализированный опыт на любом перуанском празднике. Наша команда может организовать частные туры к региональным событиям.",
    button: "Запросить сейчас",
  },
  noResults: "Не найдено событий, соответствующих вашему поиску.",
}

export function getEventsDictionary(locale: Locale): EventsDictionary {
  const dictionaries = {
    es: eventsEs,
    en: eventsEn,
    fr: eventsFr,
    it: eventsIt,
    de: eventsDe,
    pt: eventsPt,
    zh: eventsZh,
    ja: eventsJa,
    ru: eventsRu,
  }

  return dictionaries[locale] || eventsEs
}
