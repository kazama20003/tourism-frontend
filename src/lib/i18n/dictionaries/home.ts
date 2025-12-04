import type { Locale } from "../config"

export interface HomeDictionary {
  hero: {
    title: string
    titleLine2: string
    description: string
    planVisit: string
    shopNow: string
  }
  products: {
    title: string
    subtitle: string
    description: string
    exploreTours: string
    reserva: {
      title: string
      description: string
      price: string
    }
    blanco: {
      title: string
      description: string
      price: string
    }
    rosado: {
      title: string
      description: string
      price: string
    }
    tinto: {
      title: string
      description: string
      price: string
    }
    reserve: string
  }
}

const homeDictionaries: Record<Locale, HomeDictionary> = {
  es: {
    hero: {
      title: "VALLE SAGRADO",
      titleLine2: "DEL PERÚ",
      description:
        "En el corazón del Pueblo Sagrado del Perú, donde los ecos de los Inkas aún susurran entre los valles, Majestusa florece como un símbolo de tradición y renovación.",
      planVisit: "PLANIFICA TU VISITA",
      shopNow: "COMPRAR AHORA",
    },
    products: {
      title: "PRODUCTOS",
      subtitle: "Descubre nuestras ofertas",
      description: "Elige el producto perfecto para tu visita.",
      exploreTours: "Explora nuestros tours",
      reserva: {
        title: "Reserva",
        description: "Reserva ahora y disfruta de los mejores precios.",
        price: "Precio: $100",
      },
      blanco: {
        title: "Blanco",
        description: "Un producto elegante para tu visita.",
        price: "Precio: $50",
      },
      rosado: {
        title: "Rosado",
        description: "Un producto romántico para tu visita.",
        price: "Precio: $60",
      },
      tinto: {
        title: "Tinto",
        description: "Un producto clásico para tu visita.",
        price: "Precio: $70",
      },
      reserve: "Reserva",
    },
  },
  en: {
    hero: {
      title: "SACRED VALLEY",
      titleLine2: "OF PERU",
      description:
        "In the heart of the Sacred Land of Peru, where the echoes of the Inkas still whisper through the valleys, Majestusa flourishes as a symbol of tradition and renewal.",
      planVisit: "PLAN YOUR VISIT",
      shopNow: "SHOP NOW",
    },
    products: {
      title: "PRODUCTS",
      subtitle: "Discover our offers",
      description: "Choose the perfect product for your visit.",
      exploreTours: "Explore our tours",
      reserva: {
        title: "Reserve",
        description: "Reserve now and enjoy the best prices.",
        price: "Price: $100",
      },
      blanco: {
        title: "Blanco",
        description: "An elegant product for your visit.",
        price: "Price: $50",
      },
      rosado: {
        title: "Rosado",
        description: "A romantic product for your visit.",
        price: "Price: $60",
      },
      tinto: {
        title: "Tinto",
        description: "A classic product for your visit.",
        price: "Price: $70",
      },
      reserve: "Reserve",
    },
  },
  fr: {
    hero: {
      title: "VALLÉE SACRÉE",
      titleLine2: "DU PÉROU",
      description:
        "Au cœur de la Terre Sacrée du Pérou, où les échos des Incas murmurent encore à travers les vallées, Majestusa s'épanouit comme un symbole de tradition et de renouveau.",
      planVisit: "PLANIFIEZ VOTRE VISITE",
      shopNow: "ACHETER",
    },
    products: {
      title: "PRODUITS",
      subtitle: "Découvrez nos offres",
      description: "Choisissez le produit parfait pour votre visite.",
      exploreTours: "Explorez nos circuits",
      reserva: {
        title: "Réservation",
        description: "Réservez maintenant et profitez des meilleurs prix.",
        price: "Prix: $100",
      },
      blanco: {
        title: "Blanco",
        description: "Un produit élégant pour votre visite.",
        price: "Prix: $50",
      },
      rosado: {
        title: "Rosado",
        description: "Un produit romantique pour votre visite.",
        price: "Prix: $60",
      },
      tinto: {
        title: "Tinto",
        description: "Un produit classique pour votre visite.",
        price: "Prix: $70",
      },
      reserve: "Réserver",
    },
  },
  it: {
    hero: {
      title: "VALLE SACRA",
      titleLine2: "DEL PERÙ",
      description:
        "Nel cuore della Terra Sacra del Perù, dove gli echi degli Inca ancora sussurrano attraverso le valli, Majestusa fiorisce come simbolo di tradizione e rinnovamento.",
      planVisit: "PIANIFICA LA TUA VISITA",
      shopNow: "ACQUISTA ORA",
    },
    products: {
      title: "PRODOTTI",
      subtitle: "Scopri le nostre offerte",
      description: "Scegli il prodotto perfetto per la tua visita.",
      exploreTours: "Esplora i nostre tour",
      reserva: {
        title: "Prenota",
        description: "Prenota ora e goditi i migliori prezzi.",
        price: "Prezzo: $100",
      },
      blanco: {
        title: "Blanco",
        description: "Un prodotto elegante per la tua visita.",
        price: "Prezzo: $50",
      },
      rosado: {
        title: "Rosado",
        description: "Un prodotto romantico per la tua visita.",
        price: "Prezzo: $60",
      },
      tinto: {
        title: "Tinto",
        description: "Un prodotto classico per la tua visita.",
        price: "Prezzo: $70",
      },
      reserve: "Prenota",
    },
  },
  de: {
    hero: {
      title: "HEILIGES TAL",
      titleLine2: "VON PERU",
      description:
        "Im Herzen des Heiligen Landes von Peru, wo die Echos der Inkas noch immer durch die Täler flüstern, blüht Majestusa als Symbol für Tradition und Erneuerung.",
      planVisit: "PLANEN SIE IHREN BESUCH",
      shopNow: "JETZT KAUFEN",
    },
    products: {
      title: "PRODUKTE",
      subtitle: "Entdecken Sie unsere Angebote",
      description: "Wählen Sie das perfekte Produkt für Ihren Besuch.",
      exploreTours: "Unsere Touren erkunden",
      reserva: {
        title: "Reservieren",
        description: "Reservieren Sie jetzt und genießen Sie die besten Preise.",
        price: "Preis: $100",
      },
      blanco: {
        title: "Blanco",
        description: "Ein eleganter Produkt für Ihren Besuch.",
        price: "Preis: $50",
      },
      rosado: {
        title: "Rosado",
        description: "Ein romantischer Produkt für Ihren Besuch.",
        price: "Preis: $60",
      },
      tinto: {
        title: "Tinto",
        description: "Ein klassisches Produkt für Ihren Besuch.",
        price: "Preis: $70",
      },
      reserve: "Reservieren",
    },
  },
  pt: {
    hero: {
      title: "VALE SAGRADO",
      titleLine2: "DO PERU",
      description:
        "No coração da Terra Sagrada do Peru, onde os ecos dos Incas ainda sussurram pelos vales, Majestusa floresce como um símbolo de tradição e renovação.",
      planVisit: "PLANEJE SUA VISITA",
      shopNow: "COMPRAR AGORA",
    },
    products: {
      title: "PRODUTOS",
      subtitle: "Descubra nossas ofertas",
      description: "Escolha o produto perfeito para sua visita.",
      exploreTours: "Explore nossos passeios",
      reserva: {
        title: "Reserva",
        description: "Reserve agora e desfrute dos melhores preços.",
        price: "Preço: $100",
      },
      blanco: {
        title: "Blanco",
        description: "Um produto elegante para sua visita.",
        price: "Preço: $50",
      },
      rosado: {
        title: "Rosado",
        description: "Um produto romântico para sua visita.",
        price: "Preço: $60",
      },
      tinto: {
        title: "Tinto",
        description: "Um produto clássico para sua visita.",
        price: "Preço: $70",
      },
      reserve: "Reservar",
    },
  },
  zh: {
    hero: {
      title: "神圣山谷",
      titleLine2: "秘鲁",
      description: "在秘鲁神圣土地的中心，印加人的回声仍在山谷间低语，Majestusa作为传统与复兴的象征蓬勃发展。",
      planVisit: "计划您的访问",
      shopNow: "立即购买",
    },
    products: {
      title: "产品",
      subtitle: "发现我们的优惠",
      description: "选择适合您访问的产品。",
      exploreTours: "探索我们的旅游",
      reserva: {
        title: "预订",
        description: "现在预订，享受最佳价格。",
        price: "价格: $100",
      },
      blanco: {
        title: "Blanco",
        description: "一个适合您访问的优雅产品。",
        price: "价格: $50",
      },
      rosado: {
        title: "Rosado",
        description: "一个适合您访问的浪漫产品。",
        price: "价格: $60",
      },
      tinto: {
        title: "Tinto",
        description: "一个适合您访问的经典产品。",
        price: "价格: $70",
      },
      reserve: "预订",
    },
  },
  ja: {
    hero: {
      title: "聖なる谷",
      titleLine2: "ペルー",
      description:
        "ペルーの聖地の中心で、インカの響きがまだ谷間にささやく場所、Majestusaは伝統と再生の象徴として栄えています。",
      planVisit: "訪問を計画する",
      shopNow: "今すぐ購入",
    },
    products: {
      title: "商品",
      subtitle: "私たちのオファーを発見",
      description: "あなたの訪問に最適な製品を選択してください。",
      exploreTours: "私たちのツアーを探索",
      reserva: {
        title: "予約",
        description: "今すぐ予約し、最良の価格を楽しんでください。",
        price: "価格: $100",
      },
      blanco: {
        title: "Blanco",
        description: "あなたの訪問に最適な優雅な製品。",
        price: "価格: $50",
      },
      rosado: {
        title: "Rosado",
        description: "あなたの訪問に最適なロマンティックな製品。",
        price: "価格: $60",
      },
      tinto: {
        title: "Tinto",
        description: "あなたの訪問に最適なクラシックな製品。",
        price: "価格: $70",
      },
      reserve: "予約",
    },
  },
  ru: {
    hero: {
      title: "СВЯЩЕННАЯ ДОЛИНА",
      titleLine2: "ПЕРУ",
      description:
        "В сердце Священной земли Перу, где отголоски инков все еще шепчут в долинах, Majestusa расцветает как символ традиции и обновления.",
      planVisit: "ПЛАНИРУЙТЕ ВИЗИТ",
      shopNow: "КУПИТЬ СЕЙЧАС",
    },
    products: {
      title: "ПРОДУКТЫ",
      subtitle: "Откройте наши предложения",
      description: "Выберите идеальный продукт для вашего визита.",
      exploreTours: "Исследуйте наши туры",
      reserva: {
        title: "Бронирование",
        description: "Забронируйте сейчас и наслаждайтесь лучшими ценами.",
        price: "Цена: $100",
      },
      blanco: {
        title: "Blanco",
        description: "Идеальный продукт для вашего визита.",
        price: "Цена: $50",
      },
      rosado: {
        title: "Rosado",
        description: "Романтический продукт для вашего визита.",
        price: "Цена: $60",
      },
      tinto: {
        title: "Tinto",
        description: "Классический продукт для вашего визита.",
        price: "Цена: $70",
      },
      reserve: "Бронировать",
    },
  },
}

export function getHomeDictionary(locale: Locale): HomeDictionary {
  return homeDictionaries[locale] || homeDictionaries.es
}
