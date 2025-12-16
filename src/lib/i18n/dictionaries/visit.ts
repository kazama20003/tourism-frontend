import type { Locale } from "../config"

export interface VisitDictionary {
  hero: {
    subtitle: string
    title: string
    description: string
  }
  venues: {
    tastingRoom: {
      subtitle: string
      title: string
      description: string
      hours: string
    }
    restaurant: {
      subtitle: string
      title: string
      description: string
      hours: string
    }
    localAgency: {
      subtitle: string
      title: string
      description: string
      hours: string
    }
  }
  quickInfo: {
    location: {
      title: string
      line1: string
      line2: string
    }
    hours: {
      title: string
      line1: string
      line2: string
    }
    contact: {
      title: string
      line1: string
      line2: string
    }
    email: {
      title: string
      line1: string
      line2: string
    }
  }
  introduction: {
    welcome: string
    title: string
    titleItalic: string
    description: string
  }
  directions: {
    sectionSubtitle: string
    sectionTitle: string
    byCar: {
      title: string
      description: string
    }
    fromAirport: {
      title: string
      description: string
    }
    publicTransport: {
      title: string
      description: string
    }
  }
  map: {
    businessName: string
    address: string
    getDirections: string
  }
  cta: {
    title: string
    description: string
    primaryButton: string
    secondaryButton: string
  }
  buttons: {
    reserveNow: string
    learnMore: string
  }
}

const visitEs: VisitDictionary = {
  hero: {
    subtitle: "Cusco, Perú",
    title: "Visítanos",
    description: "Descubre el corazón del turismo en Perú",
  },
  venues: {
    tastingRoom: {
      subtitle: "Centro de Experiencias Gastronómicas",
      title: "Sala de Degustación",
      description:
        "Nuestra sala de degustación ofrece un ambiente íntimo para explorar los sabores auténticos de la cocina peruana. Personal experto te guía a través de degustaciones curadas con los mejores platos tradicionales.",
      hours: "Diario 10:00 - 17:00",
    },
    restaurant: {
      subtitle: "Alta Gastronomía",
      title: "Restaurante",
      description:
        "Experimenta la excelencia culinaria con menús de temporada que celebran los productos locales. Cada plato está cuidadosamente preparado para un viaje gastronómico completo.",
      hours: "Mié - Dom 12:00 - 15:00",
    },
    localAgency: {
      subtitle: "Socios de Agencias",
      title: "Tours con Agencias Locales",
      description:
        "Te asesoramos en la planificación de visitas guiadas y experiencias personalizadas en la región de Cusco, asegurando una experiencia inolvidable para tus clientes.",
      hours: "Diario 9:00 - 18:00",
    },
  },
  quickInfo: {
    location: {
      title: "Ubicación",
      line1: "Cusco, Perú",
      line2: "Plaza de Armas",
    },
    hours: {
      title: "Horario",
      line1: "Lun - Dom: 10:00 - 17:00",
      line2: "Cerrado en feriados",
    },
    contact: {
      title: "Contacto",
      line1: "+51 84 123 4567",
      line2: "Reservas requeridas",
    },
    email: {
      title: "Email",
      line1: "visita@etourism.pe",
      line2: "Respuesta en 24hrs",
    },
  },
  introduction: {
    welcome: "Bienvenido",
    title: "Tu Viaje",
    titleItalic: "Te Espera",
    description:
      "Ubicado en el corazón de Cusco, nuestro centro ofrece un santuario para los amantes del turismo. Desde experiencias íntimas hasta cenas memorables, cada visita está diseñada para inspirar y deleitar.",
  },
  directions: {
    sectionSubtitle: "Planifica tu Visita",
    sectionTitle: "Cómo Llegar",
    byCar: {
      title: "En Auto",
      description: "A 10 minutos del centro de Cusco. Estacionamiento gratuito disponible.",
    },
    fromAirport: {
      title: "Desde el Aeropuerto",
      description:
        "25 minutos desde el Aeropuerto Internacional Alejandro Velasco Astete. Taxis y transfers disponibles.",
    },
    publicTransport: {
      title: "Transporte Público",
      description: "Bus urbano hasta la Plaza de Armas. 5 minutos a pie desde el centro de la ciudad.",
    },
  },
  map: {
    businessName: "E-Tourism Perú",
    address: "Plaza de Armas, Cusco, Perú",
    getDirections: "Obtener Direcciones",
  },
  cta: {
    title: "Reserva tu Visita",
    description:
      "Ya sea que estés planeando una tarde romántica, una celebración grupal o un evento privado, nos encantaría darte la bienvenida a nuestro centro.",
    primaryButton: "Hacer una Reserva",
    secondaryButton: "Contáctanos",
  },
  buttons: {
    reserveNow: "Reservar Ahora",
    learnMore: "Saber Más",
  },
}

const visitEn: VisitDictionary = {
  hero: {
    subtitle: "Cusco, Peru",
    title: "Visit Us",
    description: "Discover the heart of tourism in Peru",
  },
  venues: {
    tastingRoom: {
      subtitle: "Gastronomic Experience Center",
      title: "Tasting Room",
      description:
        "Our tasting room offers an intimate setting to explore the authentic flavors of Peruvian cuisine. Expert staff guide you through curated tastings featuring the best traditional dishes.",
      hours: "Daily 10am - 5pm",
    },
    restaurant: {
      subtitle: "Fine Dining",
      title: "Restaurant",
      description:
        "Experience culinary excellence with seasonal menus that celebrate local produce. Each dish is thoughtfully prepared for a complete gastronomic journey.",
      hours: "Wed - Sun 12pm - 3pm",
    },
    localAgency: {
      subtitle: "Agency Partners",
      title: "Local Agency Tours",
      description:
        "We assist you in planning guided tours and personalized experiences in the Cusco region, ensuring an unforgettable experience for your clients.",
      hours: "Daily 9am - 6pm",
    },
  },
  quickInfo: {
    location: {
      title: "Location",
      line1: "Cusco, Peru",
      line2: "Plaza de Armas",
    },
    hours: {
      title: "Hours",
      line1: "Mon - Sun: 10am - 5pm",
      line2: "Closed on holidays",
    },
    contact: {
      title: "Contact",
      line1: "+51 84 123 4567",
      line2: "Reservations Required",
    },
    email: {
      title: "Email",
      line1: "visit@etourism.pe",
      line2: "Response within 24hrs",
    },
  },
  introduction: {
    welcome: "Welcome",
    title: "Your Journey",
    titleItalic: "Awaits",
    description:
      "Located in the heart of Cusco, our center offers a sanctuary for tourism lovers. From intimate experiences to memorable dinners, every visit is crafted to inspire and delight.",
  },
  directions: {
    sectionSubtitle: "Plan Your Visit",
    sectionTitle: "Getting Here",
    byCar: {
      title: "By Car",
      description: "10 minutes from downtown Cusco. Free parking available.",
    },
    fromAirport: {
      title: "From Airport",
      description: "25 minutes from Alejandro Velasco Astete International Airport. Taxis and transfers available.",
    },
    publicTransport: {
      title: "Public Transport",
      description: "City bus to Plaza de Armas. 5 minute walk from city center.",
    },
  },
  map: {
    businessName: "E-Tourism Peru",
    address: "Plaza de Armas, Cusco, Peru",
    getDirections: "Get Directions",
  },
  cta: {
    title: "Book Your Visit",
    description:
      "Whether you're planning a romantic afternoon, a group celebration, or a private event, we'd love to welcome you to our center.",
    primaryButton: "Make a Reservation",
    secondaryButton: "Contact Us",
  },
  buttons: {
    reserveNow: "Reserve Now",
    learnMore: "Learn More",
  },
}

const visitFr: VisitDictionary = {
  hero: {
    subtitle: "Cusco, Pérou",
    title: "Visitez-nous",
    description: "Découvrez le cœur du tourisme au Pérou",
  },
  venues: {
    tastingRoom: {
      subtitle: "Centre d'Expérience Gastronomique",
      title: "Salle de Dégustation",
      description:
        "Notre salle de dégustation offre un cadre intime pour explorer les saveurs authentiques de la cuisine péruvienne. Un personnel expert vous guide à travers des dégustations soigneusement sélectionnées.",
      hours: "Tous les jours 10h - 17h",
    },
    restaurant: {
      subtitle: "Haute Gastronomie",
      title: "Restaurant",
      description:
        "Vivez l'excellence culinaire avec des menus saisonniers qui célèbrent les produits locaux. Chaque plat est soigneusement préparé pour un voyage gastronomique complet.",
      hours: "Mer - Dim 12h - 15h",
    },
    localAgency: {
      subtitle: "Partenaires d'Agence",
      title: "Tours avec Agences Locales",
      description:
        "Nous vous aidons à planifier des visites guidées et des expériences personnalisées dans la région de Cusco, garantissant une expérience inoubliable pour vos clients.",
      hours: "Tous les jours 9h - 18h",
    },
  },
  quickInfo: {
    location: {
      title: "Emplacement",
      line1: "Cusco, Pérou",
      line2: "Plaza de Armas",
    },
    hours: {
      title: "Horaires",
      line1: "Lun - Dim: 10h - 17h",
      line2: "Fermé les jours fériés",
    },
    contact: {
      title: "Contact",
      line1: "+51 84 123 4567",
      line2: "Réservation Requise",
    },
    email: {
      title: "Email",
      line1: "visite@etourism.pe",
      line2: "Réponse sous 24h",
    },
  },
  introduction: {
    welcome: "Bienvenue",
    title: "Votre Voyage",
    titleItalic: "Vous Attend",
    description:
      "Situé au cœur de Cusco, notre centre offre un sanctuaire pour les amateurs de tourisme. Des expériences intimes aux dîners mémorables, chaque visite est conçue pour inspirer et ravir.",
  },
  directions: {
    sectionSubtitle: "Planifiez Votre Visite",
    sectionTitle: "Comment Venir",
    byCar: {
      title: "En Voiture",
      description: "10 minutes du centre-ville de Cusco. Parking gratuit disponible.",
    },
    fromAirport: {
      title: "Depuis l'Aéroport",
      description: "25 minutes de l'aéroport international Alejandro Velasco Astete. Taxis et transferts disponibles.",
    },
    publicTransport: {
      title: "Transport Public",
      description: "Bus urbain jusqu'à Plaza de Armas. 5 minutes à pied du centre-ville.",
    },
  },
  map: {
    businessName: "E-Tourism Pérou",
    address: "Plaza de Armas, Cusco, Pérou",
    getDirections: "Obtenir l'Itinéraire",
  },
  cta: {
    title: "Réservez Votre Visite",
    description:
      "Que vous planifiiez un après-midi romantique, une célébration de groupe ou un événement privé, nous serions ravis de vous accueillir dans notre centre.",
    primaryButton: "Faire une Réservation",
    secondaryButton: "Contactez-nous",
  },
  buttons: {
    reserveNow: "Réserver Maintenant",
    learnMore: "En Savoir Plus",
  },
}

const visitIt: VisitDictionary = {
  hero: {
    subtitle: "Cusco, Perù",
    title: "Visitaci",
    description: "Scopri il cuore del turismo in Perù",
  },
  venues: {
    tastingRoom: {
      subtitle: "Centro Esperienza Gastronomica",
      title: "Sala Degustazione",
      description:
        "La nostra sala degustazione offre un ambiente intimo per esplorare i sapori autentici della cucina peruviana. Personale esperto ti guida attraverso degustazioni curate con i migliori piatti tradizionali.",
      hours: "Tutti i giorni 10:00 - 17:00",
    },
    restaurant: {
      subtitle: "Alta Cucina",
      title: "Ristorante",
      description:
        "Vivi l'eccellenza culinaria con menu stagionali che celebrano i prodotti locali. Ogni piatto è preparato con cura per un viaggio gastronomico completo.",
      hours: "Mer - Dom 12:00 - 15:00",
    },
    localAgency: {
      subtitle: "Partner di Agenzie",
      title: "Tour con Agenzie Locali",
      description:
        "Ti assistiamo nella pianificazione di visite guidate ed esperienze personalizzate nella regione di Cusco, garantendo un'esperienza indimenticabile per i tuoi clienti.",
      hours: "Tutti i giorni 9:00 - 18:00",
    },
  },
  quickInfo: {
    location: {
      title: "Posizione",
      line1: "Cusco, Perù",
      line2: "Plaza de Armas",
    },
    hours: {
      title: "Orari",
      line1: "Lun - Dom: 10:00 - 17:00",
      line2: "Chiuso nei giorni festivi",
    },
    contact: {
      title: "Contatto",
      line1: "+51 84 123 4567",
      line2: "Prenotazione Richiesta",
    },
    email: {
      title: "Email",
      line1: "visita@etourism.pe",
      line2: "Risposta entro 24 ore",
    },
  },
  introduction: {
    welcome: "Benvenuto",
    title: "Il Tuo Viaggio",
    titleItalic: "Ti Aspetta",
    description:
      "Situato nel cuore di Cusco, il nostro centro offre un santuario per gli amanti del turismo. Da esperienze intime a cene memorabili, ogni visita è progettata per ispirare e deliziare.",
  },
  directions: {
    sectionSubtitle: "Pianifica la Tua Visita",
    sectionTitle: "Come Arrivare",
    byCar: {
      title: "In Auto",
      description: "10 minuti dal centro di Cusco. Parcheggio gratuito disponibile.",
    },
    fromAirport: {
      title: "Dall'Aeroporto",
      description: "25 minuti dall'Aeroporto Internazionale Alejandro Velasco Astete. Taxi e transfer disponibili.",
    },
    publicTransport: {
      title: "Trasporto Pubblico",
      description: "Autobus urbano fino a Plaza de Armas. 5 minuti a piedi dal centro città.",
    },
  },
  map: {
    businessName: "E-Tourism Perù",
    address: "Plaza de Armas, Cusco, Perù",
    getDirections: "Ottieni Indicazioni",
  },
  cta: {
    title: "Prenota la Tua Visita",
    description:
      "Che tu stia pianificando un pomeriggio romantico, una celebrazione di gruppo o un evento privato, ci piacerebbe darti il benvenuto nel nostro centro.",
    primaryButton: "Fai una Prenotazione",
    secondaryButton: "Contattaci",
  },
  buttons: {
    reserveNow: "Prenota Ora",
    learnMore: "Scopri di Più",
  },
}

const visitDe: VisitDictionary = {
  hero: {
    subtitle: "Cusco, Peru",
    title: "Besuchen Sie Uns",
    description: "Entdecken Sie das Herz des Tourismus in Peru",
  },
  venues: {
    tastingRoom: {
      subtitle: "Gastronomisches Erlebniszentrum",
      title: "Verkostungsraum",
      description:
        "Unser Verkostungsraum bietet eine intime Umgebung, um die authentischen Aromen der peruanischen Küche zu erkunden. Fachkundiges Personal führt Sie durch kuratierte Verkostungen mit den besten traditionellen Gerichten.",
      hours: "Täglich 10:00 - 17:00",
    },
    restaurant: {
      subtitle: "Gehobene Gastronomie",
      title: "Restaurant",
      description:
        "Erleben Sie kulinarische Exzellenz mit saisonalen Menüs, die lokale Produkte feiern. Jedes Gericht wird sorgfältig für eine vollständige gastronomische Reise zubereitet.",
      hours: "Mi - So 12:00 - 15:00",
    },
    localAgency: {
      subtitle: "Agenturpartner",
      title: "Touren mit Lokalen Agenturen",
      description:
        "Wir unterstützen Sie bei der Planung geführter Touren und personalisierter Erlebnisse in der Region Cusco und gewährleisten ein unvergessliches Erlebnis für Ihre Kunden.",
      hours: "Täglich 9:00 - 18:00",
    },
  },
  quickInfo: {
    location: {
      title: "Standort",
      line1: "Cusco, Peru",
      line2: "Plaza de Armas",
    },
    hours: {
      title: "Öffnungszeiten",
      line1: "Mo - So: 10:00 - 17:00",
      line2: "An Feiertagen geschlossen",
    },
    contact: {
      title: "Kontakt",
      line1: "+51 84 123 4567",
      line2: "Reservierung Erforderlich",
    },
    email: {
      title: "E-Mail",
      line1: "besuch@etourism.pe",
      line2: "Antwort innerhalb von 24 Std.",
    },
  },
  introduction: {
    welcome: "Willkommen",
    title: "Ihre Reise",
    titleItalic: "Wartet",
    description:
      "Im Herzen von Cusco gelegen, bietet unser Zentrum ein Refugium für Tourismus-Liebhaber. Von intimen Erlebnissen bis zu unvergesslichen Abendessen ist jeder Besuch darauf ausgelegt, zu inspirieren und zu erfreuen.",
  },
  directions: {
    sectionSubtitle: "Planen Sie Ihren Besuch",
    sectionTitle: "Anfahrt",
    byCar: {
      title: "Mit dem Auto",
      description: "10 Minuten vom Stadtzentrum Cusco. Kostenlose Parkplätze verfügbar.",
    },
    fromAirport: {
      title: "Vom Flughafen",
      description: "25 Minuten vom Internationalen Flughafen Alejandro Velasco Astete. Taxis und Transfers verfügbar.",
    },
    publicTransport: {
      title: "Öffentliche Verkehrsmittel",
      description: "Stadtbus zur Plaza de Armas. 5 Minuten zu Fuß vom Stadtzentrum.",
    },
  },
  map: {
    businessName: "E-Tourism Peru",
    address: "Plaza de Armas, Cusco, Peru",
    getDirections: "Wegbeschreibung Erhalten",
  },
  cta: {
    title: "Buchen Sie Ihren Besuch",
    description:
      "Ob Sie einen romantischen Nachmittag, eine Gruppenfeier oder eine private Veranstaltung planen, wir würden uns freuen, Sie in unserem Zentrum willkommen zu heißen.",
    primaryButton: "Reservierung Machen",
    secondaryButton: "Kontaktieren Sie Uns",
  },
  buttons: {
    reserveNow: "Jetzt Reservieren",
    learnMore: "Mehr Erfahren",
  },
}

const visitPt: VisitDictionary = {
  hero: {
    subtitle: "Cusco, Peru",
    title: "Visite-nos",
    description: "Descubra o coração do turismo no Peru",
  },
  venues: {
    tastingRoom: {
      subtitle: "Centro de Experiência Gastronômica",
      title: "Sala de Degustação",
      description:
        "Nossa sala de degustação oferece um ambiente íntimo para explorar os sabores autênticos da culinária peruana. Equipe especializada guia você através de degustações selecionadas com os melhores pratos tradicionais.",
      hours: "Diariamente 10h - 17h",
    },
    restaurant: {
      subtitle: "Alta Gastronomia",
      title: "Restaurante",
      description:
        "Experimente a excelência culinária com menus sazonais que celebram produtos locais. Cada prato é cuidadosamente preparado para uma jornada gastronômica completa.",
      hours: "Qua - Dom 12h - 15h",
    },
    localAgency: {
      subtitle: "Parceiros de Agências",
      title: "Tours com Agências Locais",
      description:
        "Assessoramos você no planejamento de visitas guiadas e experiências personalizadas na região de Cusco, garantindo uma experiência inesquecível para seus clientes.",
      hours: "Diariamente 9h - 18h",
    },
  },
  quickInfo: {
    location: {
      title: "Localização",
      line1: "Cusco, Peru",
      line2: "Plaza de Armas",
    },
    hours: {
      title: "Horário",
      line1: "Seg - Dom: 10h - 17h",
      line2: "Fechado em feriados",
    },
    contact: {
      title: "Contato",
      line1: "+51 84 123 4567",
      line2: "Reserva Necessária",
    },
    email: {
      title: "E-mail",
      line1: "visita@etourism.pe",
      line2: "Resposta em 24h",
    },
  },
  introduction: {
    welcome: "Bem-vindo",
    title: "Sua Jornada",
    titleItalic: "Aguarda",
    description:
      "Localizado no coração de Cusco, nosso centro oferece um santuário para os amantes do turismo. De experiências íntimas a jantares memoráveis, cada visita é projetada para inspirar e encantar.",
  },
  directions: {
    sectionSubtitle: "Planeje Sua Visita",
    sectionTitle: "Como Chegar",
    byCar: {
      title: "De Carro",
      description: "10 minutos do centro de Cusco. Estacionamento gratuito disponível.",
    },
    fromAirport: {
      title: "Do Aeroporto",
      description: "25 minutos do Aeroporto Internacional Alejandro Velasco Astete. Táxis e transfers disponíveis.",
    },
    publicTransport: {
      title: "Transporte Público",
      description: "Ônibus urbano até Plaza de Armas. 5 minutos a pé do centro da cidade.",
    },
  },
  map: {
    businessName: "E-Tourism Peru",
    address: "Plaza de Armas, Cusco, Peru",
    getDirections: "Obter Direções",
  },
  cta: {
    title: "Reserve Sua Visita",
    description:
      "Seja planejando uma tarde romântica, uma celebração em grupo ou um evento privado, adoraríamos recebê-lo em nosso centro.",
    primaryButton: "Fazer uma Reserva",
    secondaryButton: "Entre em Contato",
  },
  buttons: {
    reserveNow: "Reservar Agora",
    learnMore: "Saiba Mais",
  },
}

const visitZh: VisitDictionary = {
  hero: {
    subtitle: "秘鲁库斯科",
    title: "访问我们",
    description: "探索秘鲁旅游的中心",
  },
  venues: {
    tastingRoom: {
      subtitle: "美食体验中心",
      title: "品尝室",
      description:
        "我们的品尝室提供一个私密的环境，让您探索秘鲁美食的真实风味。专业人员将引导您品尝精选的最佳传统菜肴。",
      hours: "每日 10:00 - 17:00",
    },
    restaurant: {
      subtitle: "高级餐饮",
      title: "餐厅",
      description: "体验季节性菜单的烹饪卓越，庆祝当地农产品。每道菜都经过精心准备，带来完整的美食之旅。",
      hours: "周三 - 周日 12:00 - 15:00",
    },
    localAgency: {
      subtitle: "代理合作伙伴",
      title: "当地代理旅游",
      description: "我们帮助您规划库斯科地区的导游和个性化体验，确保为您的客户提供难忘的体验。",
      hours: "每日 9:00 - 18:00",
    },
  },
  quickInfo: {
    location: {
      title: "位置",
      line1: "秘鲁库斯科",
      line2: "武器广场",
    },
    hours: {
      title: "营业时间",
      line1: "周一 - 周日: 10:00 - 17:00",
      line2: "节假日休息",
    },
    contact: {
      title: "联系方式",
      line1: "+51 84 123 4567",
      line2: "需要预订",
    },
    email: {
      title: "电子邮件",
      line1: "visit@etourism.pe",
      line2: "24小时内回复",
    },
  },
  introduction: {
    welcome: "欢迎",
    title: "您的旅程",
    titleItalic: "等待着您",
    description:
      "位于库斯科的中心，我们的中心为旅游爱好者提供了一个圣地。从亲密的体验到难忘的晚餐，每次访问都旨在激发和愉悦。",
  },
  directions: {
    sectionSubtitle: "计划您的访问",
    sectionTitle: "如何到达",
    byCar: {
      title: "开车",
      description: "距库斯科市中心10分钟。提供免费停车场。",
    },
    fromAirport: {
      title: "从机场",
      description: "距Alejandro Velasco Astete国际机场25分钟。提供出租车和接送服务。",
    },
    publicTransport: {
      title: "公共交通",
      description: "乘坐城市巴士到武器广场。距市中心步行5分钟。",
    },
  },
  map: {
    businessName: "秘鲁电子旅游",
    address: "武器广场，库斯科，秘鲁",
    getDirections: "获取路线",
  },
  cta: {
    title: "预订您的访问",
    description: "无论您是计划浪漫的下午、团体庆祝活动还是私人活动，我们都很乐意欢迎您来到我们的中心。",
    primaryButton: "进行预订",
    secondaryButton: "联系我们",
  },
  buttons: {
    reserveNow: "立即预订",
    learnMore: "了解更多",
  },
}

const visitJa: VisitDictionary = {
  hero: {
    subtitle: "ペルー、クスコ",
    title: "私たちを訪問",
    description: "ペルーの観光の中心を発見",
  },
  venues: {
    tastingRoom: {
      subtitle: "美食体験センター",
      title: "試食室",
      description:
        "私たちの試食室は、ペルー料理の本格的な味を探求するための親密な環境を提供します。専門スタッフが厳選された最高の伝統料理の試食をご案内します。",
      hours: "毎日 10:00 - 17:00",
    },
    restaurant: {
      subtitle: "高級料理",
      title: "レストラン",
      description:
        "地元の農産物を称える季節のメニューで料理の卓越性を体験してください。各料理は完全な美食の旅のために丁寧に準備されています。",
      hours: "水 - 日 12:00 - 15:00",
    },
    localAgency: {
      subtitle: "代理店パートナー",
      title: "地元代理店ツアー",
      description:
        "クスコ地域でのガイド付きツアーとパーソナライズされた体験の計画をお手伝いし、お客様に忘れられない体験を保証します。",
      hours: "毎日 9:00 - 18:00",
    },
  },
  quickInfo: {
    location: {
      title: "場所",
      line1: "ペルー、クスコ",
      line2: "アルマス広場",
    },
    hours: {
      title: "営業時間",
      line1: "月 - 日: 10:00 - 17:00",
      line2: "祝日休業",
    },
    contact: {
      title: "連絡先",
      line1: "+51 84 123 4567",
      line2: "予約が必要",
    },
    email: {
      title: "メール",
      line1: "visit@etourism.pe",
      line2: "24時間以内に返信",
    },
  },
  introduction: {
    welcome: "ようこそ",
    title: "あなたの旅",
    titleItalic: "お待ちしています",
    description:
      "クスコの中心に位置する私たちのセンターは、観光愛好家のための聖域を提供します。親密な体験から思い出に残るディナーまで、すべての訪問はインスピレーションと喜びを与えるように作られています。",
  },
  directions: {
    sectionSubtitle: "訪問を計画",
    sectionTitle: "アクセス方法",
    byCar: {
      title: "車で",
      description: "クスコ市中心部から10分。無料駐車場あり。",
    },
    fromAirport: {
      title: "空港から",
      description: "アレハンドロ・ベラスコ・アステテ国際空港から25分。タクシーと送迎サービスが利用可能。",
    },
    publicTransport: {
      title: "公共交通機関",
      description: "アルマス広場までの市バス。市中心部から徒歩5分。",
    },
  },
  map: {
    businessName: "Eツーリズム ペルー",
    address: "アルマス広場、クスコ、ペルー",
    getDirections: "道順を取得",
  },
  cta: {
    title: "訪問を予約",
    description:
      "ロマンチックな午後、グループでのお祝い、プライベートイベントを計画している場合でも、私たちのセンターへようこそ。",
    primaryButton: "予約する",
    secondaryButton: "お問い合わせ",
  },
  buttons: {
    reserveNow: "今すぐ予約",
    learnMore: "詳細を学ぶ",
  },
}

const visitRu: VisitDictionary = {
  hero: {
    subtitle: "Куско, Перу",
    title: "Посетите Нас",
    description: "Откройте для себя сердце туризма в Перу",
  },
  venues: {
    tastingRoom: {
      subtitle: "Центр Гастрономических Впечатлений",
      title: "Дегустационный Зал",
      description:
        "Наш дегустационный зал предлагает интимную обстановку для изучения подлинных вкусов перуанской кухни. Опытный персонал проведет вас через тщательно подобранные дегустации с лучшими традиционными блюдами.",
      hours: "Ежедневно 10:00 - 17:00",
    },
    restaurant: {
      subtitle: "Высокая Кухня",
      title: "Ресторан",
      description:
        "Испытайте кулинарное совершенство с сезонными меню, которые празднуют местные продукты. Каждое блюдо тщательно приготовлено для полного гастрономического путешествия.",
      hours: "Ср - Вс 12:00 - 15:00",
    },
    localAgency: {
      subtitle: "Партнеры Агентств",
      title: "Туры с Местными Агентствами",
      description:
        "Мы помогаем вам планировать экскурсии и персонализированные впечатления в регионе Куско, гарантируя незабываемый опыт для ваших клиентов.",
      hours: "Ежедневно 9:00 - 18:00",
    },
  },
  quickInfo: {
    location: {
      title: "Местоположение",
      line1: "Куско, Перу",
      line2: "Пласа-де-Армас",
    },
    hours: {
      title: "Часы Работы",
      line1: "Пн - Вс: 10:00 - 17:00",
      line2: "Закрыто в праздничные дни",
    },
    contact: {
      title: "Контакт",
      line1: "+51 84 123 4567",
      line2: "Требуется Бронирование",
    },
    email: {
      title: "Электронная Почта",
      line1: "visit@etourism.pe",
      line2: "Ответ в течение 24 часов",
    },
  },
  introduction: {
    welcome: "Добро Пожаловать",
    title: "Ваше Путешествие",
    titleItalic: "Ждет",
    description:
      "Расположенный в самом сердце Куско, наш центр предлагает святилище для любителей туризма. От интимных впечатлений до памятных ужинов, каждое посещение создано для вдохновения и восторга.",
  },
  directions: {
    sectionSubtitle: "Спланируйте Ваш Визит",
    sectionTitle: "Как Добраться",
    byCar: {
      title: "На Машине",
      description: "10 минут от центра Куско. Доступна бесплатная парковка.",
    },
    fromAirport: {
      title: "Из Аэропорта",
      description: "25 минут от международного аэропорта Алехандро Веласко Астете. Доступны такси и трансферы.",
    },
    publicTransport: {
      title: "Общественный Транспорт",
      description: "Городской автобус до Пласа-де-Армас. 5 минут пешком от центра города.",
    },
  },
  map: {
    businessName: "E-Tourism Перу",
    address: "Пласа-де-Армас, Куско, Перу",
    getDirections: "Получить Маршрут",
  },
  cta: {
    title: "Забронируйте Ваш Визит",
    description:
      "Планируете ли вы романтический вечер, групповое празднование или частное мероприятие, мы будем рады приветствовать вас в нашем центре.",
    primaryButton: "Сделать Бронирование",
    secondaryButton: "Свяжитесь с Нами",
  },
  buttons: {
    reserveNow: "Забронировать Сейчас",
    learnMore: "Узнать Больше",
  },
}

export function getVisitDictionary(locale: Locale): VisitDictionary {
  const dictionaries = {
    es: visitEs,
    en: visitEn,
    fr: visitFr,
    it: visitIt,
    de: visitDe,
    pt: visitPt,
    zh: visitZh,
    ja: visitJa,
    ru: visitRu,
  }
  return dictionaries[locale]
}
