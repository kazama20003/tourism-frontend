import type { Locale } from "../config"

export interface TransportsDictionary {
  hero: {
    title: string
    subtitle: string
    description: string
  }
  filters: {
    all: string
    popular: string
    airport: string
    cities: string
    touristic: string
  }
  card: {
    from: string
    to: string
    duration: string
    hours: string
    minutes: string
    price: string
    oldPrice: string
    bookNow: string
    viewDetails: string
    passengers: string
  }
  section: {
    title: string
    titleItalic: string
    loading: string
    noResults: string
  }
}

const transportsDictionaries: Record<Locale, TransportsDictionary> = {
  es: {
    hero: {
      title: "Transportes",
      subtitle: "Peru Travel World",
      description: "Viaja cómodo y seguro por todo el Perú",
    },
    filters: {
      all: "Todos",
      popular: "Populares",
      airport: "Aeropuerto",
      cities: "Ciudades",
      touristic: "Turísticos",
    },
    card: {
      from: "Desde",
      to: "Hasta",
      duration: "Duración",
      hours: "horas",
      minutes: "min",
      price: "Precio",
      oldPrice: "Antes",
      bookNow: "Reservar",
      viewDetails: "Ver Detalles",
      passengers: "pasajeros",
    },
    section: {
      title: "Rutas",
      titleItalic: "Disponibles",
      loading: "Cargando transportes...",
      noResults: "No se encontraron transportes con los filtros seleccionados.",
    },
  },
  en: {
    hero: {
      title: "Transports",
      subtitle: "Peru Travel World",
      description: "Travel comfortably and safely throughout Peru",
    },
    filters: {
      all: "All",
      popular: "Popular",
      airport: "Airport",
      cities: "Cities",
      touristic: "Touristic",
    },
    card: {
      from: "From",
      to: "To",
      duration: "Duration",
      hours: "hours",
      minutes: "min",
      price: "Price",
      oldPrice: "Was",
      bookNow: "Book Now",
      viewDetails: "View Details",
      passengers: "passengers",
    },
    section: {
      title: "Available",
      titleItalic: "Routes",
      loading: "Loading transports...",
      noResults: "No transports found matching your criteria.",
    },
  },
  fr: {
    hero: {
      title: "Transports",
      subtitle: "Peru Travel World",
      description: "Voyagez confortablement et en sécurité à travers le Pérou",
    },
    filters: {
      all: "Tous",
      popular: "Populaires",
      airport: "Aéroport",
      cities: "Villes",
      touristic: "Touristiques",
    },
    card: {
      from: "De",
      to: "À",
      duration: "Durée",
      hours: "heures",
      minutes: "min",
      price: "Prix",
      oldPrice: "Avant",
      bookNow: "Réserver",
      viewDetails: "Voir Détails",
      passengers: "passagers",
    },
    section: {
      title: "Routes",
      titleItalic: "Disponibles",
      loading: "Chargement des transports...",
      noResults: "Aucun transport trouvé correspondant à vos critères.",
    },
  },
  it: {
    hero: {
      title: "Trasporti",
      subtitle: "Peru Travel World",
      description: "Viaggia comodamente e in sicurezza in tutto il Perù",
    },
    filters: {
      all: "Tutti",
      popular: "Popolari",
      airport: "Aeroporto",
      cities: "Città",
      touristic: "Turistici",
    },
    card: {
      from: "Da",
      to: "A",
      duration: "Durata",
      hours: "ore",
      minutes: "min",
      price: "Prezzo",
      oldPrice: "Prima",
      bookNow: "Prenota",
      viewDetails: "Vedi Dettagli",
      passengers: "passeggeri",
    },
    section: {
      title: "Percorsi",
      titleItalic: "Disponibili",
      loading: "Caricamento trasporti...",
      noResults: "Nessun trasporto trovato corrispondente ai tuoi criteri.",
    },
  },
  de: {
    hero: {
      title: "Transport",
      subtitle: "Peru Travel World",
      description: "Reisen Sie bequem und sicher durch ganz Peru",
    },
    filters: {
      all: "Alle",
      popular: "Beliebt",
      airport: "Flughafen",
      cities: "Städte",
      touristic: "Touristisch",
    },
    card: {
      from: "Von",
      to: "Nach",
      duration: "Dauer",
      hours: "Stunden",
      minutes: "Min",
      price: "Preis",
      oldPrice: "Vorher",
      bookNow: "Buchen",
      viewDetails: "Details Ansehen",
      passengers: "Passagiere",
    },
    section: {
      title: "Verfügbare",
      titleItalic: "Routen",
      loading: "Transporte werden geladen...",
      noResults: "Keine Transporte gefunden, die Ihren Kriterien entsprechen.",
    },
  },
  pt: {
    hero: {
      title: "Transportes",
      subtitle: "Peru Travel World",
      description: "Viaje confortável e seguro por todo o Peru",
    },
    filters: {
      all: "Todos",
      popular: "Populares",
      airport: "Aeroporto",
      cities: "Cidades",
      touristic: "Turísticos",
    },
    card: {
      from: "De",
      to: "Para",
      duration: "Duração",
      hours: "horas",
      minutes: "min",
      price: "Preço",
      oldPrice: "Antes",
      bookNow: "Reservar",
      viewDetails: "Ver Detalhes",
      passengers: "passageiros",
    },
    section: {
      title: "Rotas",
      titleItalic: "Disponíveis",
      loading: "Carregando transportes...",
      noResults: "Nenhum transporte encontrado correspondente aos seus critérios.",
    },
  },
  zh: {
    hero: {
      title: "交通",
      subtitle: "Peru Travel World",
      description: "舒适安全地游览秘鲁全境",
    },
    filters: {
      all: "全部",
      popular: "热门",
      airport: "机场",
      cities: "城市",
      touristic: "旅游",
    },
    card: {
      from: "从",
      to: "到",
      duration: "时长",
      hours: "小时",
      minutes: "分钟",
      price: "价格",
      oldPrice: "原价",
      bookNow: "预订",
      viewDetails: "查看详情",
      passengers: "乘客",
    },
    section: {
      title: "可用",
      titleItalic: "路线",
      loading: "正在加载交通信息...",
      noResults: "未找到符合条件的交通。",
    },
  },
  ja: {
    hero: {
      title: "交通",
      subtitle: "Peru Travel World",
      description: "ペルー全土を快適かつ安全に旅行",
    },
    filters: {
      all: "すべて",
      popular: "人気",
      airport: "空港",
      cities: "都市",
      touristic: "観光",
    },
    card: {
      from: "出発",
      to: "到着",
      duration: "所要時間",
      hours: "時間",
      minutes: "分",
      price: "価格",
      oldPrice: "旧価格",
      bookNow: "予約",
      viewDetails: "詳細を見る",
      passengers: "乗客",
    },
    section: {
      title: "利用可能な",
      titleItalic: "ルート",
      loading: "交通情報を読み込み中...",
      noResults: "条件に一致する交通が見つかりませんでした。",
    },
  },
  ru: {
    hero: {
      title: "Транспорт",
      subtitle: "Peru Travel World",
      description: "Путешествуйте комфортно и безопасно по всему Перу",
    },
    filters: {
      all: "Все",
      popular: "Популярные",
      airport: "Аэропорт",
      cities: "Города",
      touristic: "Туристические",
    },
    card: {
      from: "Откуда",
      to: "Куда",
      duration: "Длительность",
      hours: "часов",
      minutes: "мин",
      price: "Цена",
      oldPrice: "Было",
      bookNow: "Забронировать",
      viewDetails: "Подробнее",
      passengers: "пассажиров",
    },
    section: {
      title: "Доступные",
      titleItalic: "Маршруты",
      loading: "Загрузка транспорта...",
      noResults: "Не найдено транспорта, соответствующего вашим критериям.",
    },
  },
}

export function getTransportsDictionary(locale: Locale): TransportsDictionary {
  return transportsDictionaries[locale] || transportsDictionaries.es
}
