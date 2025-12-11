import type { Locale } from "../config"

export interface ToursDictionary {
  hero: {
    location: string
    title: string
    subtitle: string
  }
  intro: {
    badge: string
    title: string
    titleItalic: string
    description: string
  }
  search: {
    placeholder: string
    filters: {
      all: string
      adventure: string
      cultural: string
      nature: string
    }
  }
  card: {
    featured: string
    perPerson: string
    book: string
    viewDetails: string
    day: string
    days: string
    hour: string
    hours: string
  }
  empty: {
    noResults: string
    error: string
    retry: string
  }
  cta: {
    title: string
    description: string
    button: string
  }
}

const toursDictionaries: Record<Locale, ToursDictionary> = {
  es: {
    hero: {
      location: "Perú, Sudamérica",
      title: "Experiencias",
      subtitle: "Momentos únicos que celebran la riqueza cultural y natural",
    },
    intro: {
      badge: "Descubre",
      title: "Añade a Tu",
      titleItalic: "Experiencia",
      description:
        "Desde caminatas íntimas hasta inmersiones culturales, cada experiencia está diseñada para revelar la pasión y precisión detrás de cada destino.",
    },
    search: {
      placeholder: "Buscar experiencias...",
      filters: {
        all: "Todas las Experiencias",
        adventure: "Aventura",
        cultural: "Cultural",
        nature: "Naturaleza",
      },
    },
    card: {
      featured: "Destacado",
      perPerson: "por persona",
      book: "Reservar",
      viewDetails: "Ver Detalles",
      day: "Día",
      days: "Días",
      hour: "Hora",
      hours: "Horas",
    },
    empty: {
      noResults: "No se encontraron experiencias con ese criterio.",
      error: "Error al cargar las experiencias.",
      retry: "Reintentar",
    },
    cta: {
      title: "Crea Tu Propia Experiencia",
      description:
        "¿Buscas algo personalizado? Nuestro equipo puede diseñar una experiencia privada adaptada a tus preferencias y tamaño de grupo.",
      button: "Consultar Ahora",
    },
  },
  en: {
    hero: {
      location: "Peru, South America",
      title: "Experiences",
      subtitle: "Unique moments that celebrate cultural and natural richness",
    },
    intro: {
      badge: "Discover",
      title: "Add to Your",
      titleItalic: "Experience",
      description:
        "From intimate hikes to cultural immersions, each experience is designed to reveal the passion and precision behind each destination.",
    },
    search: {
      placeholder: "Search experiences...",
      filters: {
        all: "All Experiences",
        adventure: "Adventure",
        cultural: "Cultural",
        nature: "Nature",
      },
    },
    card: {
      featured: "Featured",
      perPerson: "per person",
      book: "Book Now",
      viewDetails: "View Details",
      day: "Day",
      days: "Days",
      hour: "Hour",
      hours: "Hours",
    },
    empty: {
      noResults: "No experiences found with that criteria.",
      error: "Error loading experiences.",
      retry: "Retry",
    },
    cta: {
      title: "Create Your Own Experience",
      description:
        "Looking for something personalized? Our team can design a private experience tailored to your preferences and group size.",
      button: "Inquire Now",
    },
  },
  fr: {
    hero: {
      location: "Pérou, Amérique du Sud",
      title: "Expériences",
      subtitle: "Des moments uniques qui célèbrent la richesse culturelle et naturelle",
    },
    intro: {
      badge: "Découvrez",
      title: "Ajoutez à Votre",
      titleItalic: "Expérience",
      description:
        "Des randonnées intimes aux immersions culturelles, chaque expérience est conçue pour révéler la passion et la précision derrière chaque destination.",
    },
    search: {
      placeholder: "Rechercher des expériences...",
      filters: {
        all: "Toutes les Expériences",
        adventure: "Aventure",
        cultural: "Culturel",
        nature: "Nature",
      },
    },
    card: {
      featured: "En vedette",
      perPerson: "par personne",
      book: "Réserver",
      viewDetails: "Voir les Détails",
      day: "Jour",
      days: "Jours",
      hour: "Heure",
      hours: "Heures",
    },
    empty: {
      noResults: "Aucune expérience trouvée avec ce critère.",
      error: "Erreur lors du chargement des expériences.",
      retry: "Réessayer",
    },
    cta: {
      title: "Créez Votre Propre Expérience",
      description:
        "Vous cherchez quelque chose de personnalisé? Notre équipe peut concevoir une expérience privée adaptée à vos préférences et à la taille de votre groupe.",
      button: "Demander Maintenant",
    },
  },
  it: {
    hero: {
      location: "Perù, Sud America",
      title: "Esperienze",
      subtitle: "Momenti unici che celebrano la ricchezza culturale e naturale",
    },
    intro: {
      badge: "Scopri",
      title: "Aggiungi alla Tua",
      titleItalic: "Esperienza",
      description:
        "Dalle escursioni intime alle immersioni culturali, ogni esperienza è progettata per rivelare la passione e la precisione dietro ogni destinazione.",
    },
    search: {
      placeholder: "Cerca esperienze...",
      filters: {
        all: "Tutte le Esperienze",
        adventure: "Avventura",
        cultural: "Culturale",
        nature: "Natura",
      },
    },
    card: {
      featured: "In evidenza",
      perPerson: "a persona",
      book: "Prenota",
      viewDetails: "Vedi Dettagli",
      day: "Giorno",
      days: "Giorni",
      hour: "Ora",
      hours: "Ore",
    },
    empty: {
      noResults: "Nessuna esperienza trovata con quel criterio.",
      error: "Errore nel caricamento delle esperienze.",
      retry: "Riprova",
    },
    cta: {
      title: "Crea la Tua Esperienza",
      description:
        "Cerchi qualcosa di personalizzato? Il nostro team può progettare un'esperienza privata su misura per le tue preferenze e le dimensioni del tuo gruppo.",
      button: "Richiedi Ora",
    },
  },
  de: {
    hero: {
      location: "Peru, Südamerika",
      title: "Erlebnisse",
      subtitle: "Einzigartige Momente, die kulturellen und natürlichen Reichtum feiern",
    },
    intro: {
      badge: "Entdecken",
      title: "Füge hinzu zu Deinem",
      titleItalic: "Erlebnis",
      description:
        "Von intimen Wanderungen bis hin zu kulturellen Eintauchungen - jedes Erlebnis ist darauf ausgelegt, die Leidenschaft und Präzision hinter jedem Ziel zu enthüllen.",
    },
    search: {
      placeholder: "Erlebnisse suchen...",
      filters: {
        all: "Alle Erlebnisse",
        adventure: "Abenteuer",
        cultural: "Kulturell",
        nature: "Natur",
      },
    },
    card: {
      featured: "Empfohlen",
      perPerson: "pro Person",
      book: "Buchen",
      viewDetails: "Details ansehen",
      day: "Tag",
      days: "Tage",
      hour: "Stunde",
      hours: "Stunden",
    },
    empty: {
      noResults: "Keine Erlebnisse mit diesem Kriterium gefunden.",
      error: "Fehler beim Laden der Erlebnisse.",
      retry: "Erneut versuchen",
    },
    cta: {
      title: "Erstelle Dein Eigenes Erlebnis",
      description:
        "Suchst du etwas Personalisiertes? Unser Team kann ein privates Erlebnis entwerfen, das auf deine Vorlieben und Gruppengröße zugeschnitten ist.",
      button: "Jetzt anfragen",
    },
  },
  pt: {
    hero: {
      location: "Peru, América do Sul",
      title: "Experiências",
      subtitle: "Momentos únicos que celebram a riqueza cultural e natural",
    },
    intro: {
      badge: "Descubra",
      title: "Adicione à Sua",
      titleItalic: "Experiência",
      description:
        "De caminhadas íntimas a imersões culturais, cada experiência é projetada para revelar a paixão e precisão por trás de cada destino.",
    },
    search: {
      placeholder: "Buscar experiências...",
      filters: {
        all: "Todas as Experiências",
        adventure: "Aventura",
        cultural: "Cultural",
        nature: "Natureza",
      },
    },
    card: {
      featured: "Destaque",
      perPerson: "por pessoa",
      book: "Reservar",
      viewDetails: "Ver Detalhes",
      day: "Dia",
      days: "Dias",
      hour: "Hora",
      hours: "Horas",
    },
    empty: {
      noResults: "Nenhuma experiência encontrada com esse critério.",
      error: "Erro ao carregar experiências.",
      retry: "Tentar novamente",
    },
    cta: {
      title: "Crie Sua Própria Experiência",
      description:
        "Procurando algo personalizado? Nossa equipe pode projetar uma experiência privada adaptada às suas preferências e tamanho do grupo.",
      button: "Consultar Agora",
    },
  },
  zh: {
    hero: {
      location: "秘鲁，南美洲",
      title: "体验",
      subtitle: "庆祝文化和自然丰富性的独特时刻",
    },
    intro: {
      badge: "探索",
      title: "添加到您的",
      titleItalic: "体验",
      description: "从亲密的徒步旅行到文化沉浸，每一次体验都旨在揭示每个目的地背后的热情和精确。",
    },
    search: {
      placeholder: "搜索体验...",
      filters: {
        all: "所有体验",
        adventure: "冒险",
        cultural: "文化",
        nature: "自然",
      },
    },
    card: {
      featured: "精选",
      perPerson: "每人",
      book: "预订",
      viewDetails: "查看详情",
      day: "天",
      days: "天",
      hour: "小时",
      hours: "小时",
    },
    empty: {
      noResults: "未找到符合条件的体验。",
      error: "加载体验时出错。",
      retry: "重试",
    },
    cta: {
      title: "创建您自己的体验",
      description: "寻找个性化的东西？我们的团队可以根据您的喜好和团队规模设计私人体验。",
      button: "立即咨询",
    },
  },
  ja: {
    hero: {
      location: "ペルー、南���",
      title: "体験",
      subtitle: "文化と自然の豊かさを祝うユニークな瞬間",
    },
    intro: {
      badge: "発見",
      title: "あなたの体験に",
      titleItalic: "追加",
      description:
        "親密なハイキングから文化的な没入まで、各体験は各目的地の情熱と精度を明らかにするように設計されています。",
    },
    search: {
      placeholder: "体験を検索...",
      filters: {
        all: "すべての体験",
        adventure: "アドベンチャー",
        cultural: "文化",
        nature: "自然",
      },
    },
    card: {
      featured: "おすすめ",
      perPerson: "一人あたり",
      book: "予約",
      viewDetails: "詳細を見る",
      day: "日",
      days: "日",
      hour: "時間",
      hours: "時間",
    },
    empty: {
      noResults: "その条件に一致する体験が見つかりませんでした。",
      error: "体験の読み込み中にエラーが発生しました。",
      retry: "再試行",
    },
    cta: {
      title: "独自の体験を作成",
      description:
        "パーソナライズされたものをお探しですか？私たちのチームは、あなたの好みやグループサイズに合わせたプライベート体験をデザインできます。",
      button: "今すぐお問い合わせ",
    },
  },
  ru: {
    hero: {
      location: "Перу, Южная Америка",
      title: "Впечатления",
      subtitle: "Уникальные моменты, которые прославляют культурное и природное богатство",
    },
    intro: {
      badge: "Откройте",
      title: "Добавьте к Вашему",
      titleItalic: "Впечатлению",
      description:
        "От интимных походов до культурных погружений — каждое впечатление создано, чтобы раскрыть страсть и точность каждого направления.",
    },
    search: {
      placeholder: "Поиск впечатлений...",
      filters: {
        all: "Все Впечатления",
        adventure: "Приключения",
        cultural: "Культурный",
        nature: "Природа",
      },
    },
    card: {
      featured: "Рекомендуем",
      perPerson: "с человека",
      book: "Забронировать",
      viewDetails: "Подробнее",
      day: "День",
      days: "Дней",
      hour: "Час",
      hours: "Часов",
    },
    empty: {
      noResults: "Впечатления по этому критерию не найдены.",
      error: "Ошибка загрузки впечатлений.",
      retry: "Повторить",
    },
    cta: {
      title: "Создайте Своё Впечатление",
      description:
        "Ищете что-то персонализированное? Наша команда может разработать частное впечатление, адаптированное к вашим предпочтениям и размеру группы.",
      button: "Запросить сейчас",
    },
  },
}

export function getToursDictionary(locale: Locale): ToursDictionary {
  return toursDictionaries[locale]
}
