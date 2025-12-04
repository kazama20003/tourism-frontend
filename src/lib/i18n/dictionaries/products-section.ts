import type { Locale } from "@/lib/i18n/config"

interface ProductsSectionDict {
  title: string
  subtitle: string
  description: string
  exploreTours: string
  reserve: string
  products: Array<{
    title: string
    description: string
    price: string
  }>
}

const productsSectionDictionaries: Record<Locale, ProductsSectionDict> = {
  es: {
    title: "Nuestros",
    subtitle: "Tours Selectos.",
    description:
      "Cada Tour es el resultado de nuestros antepasados que dieron años de dedicación y maestría en la elaboración de cultura y arte. Utilizamos técnicas ancestrales combinadas con innovación moderna para ofrecer experiencias de sabor incomparables.",
    exploreTours: "EXPLORAR TOURS",
    reserve: "Reservar",
    products: [
      {
        title: "Reserva Privada",
        description:
          "Un vino tinto complejo y elegante, envejecido 18 meses en barriles de roble francés, con notas profundas de especias y frutas maduras.",
        price: "$85",
      },
      {
        title: "Blanco Ancestral",
        description:
          "Vino blanco fresco y aromático con notas de frutas tropicales del Valle Sagrado, perfecto para celebraciones especiales.",
        price: "$65",
      },
      {
        title: "Rosado Delicado",
        description:
          "Vino rosado con aromas florales y notas frutales suaves, ideal para acompañar comidas ligeras y conversaciones gratas.",
        price: "$55",
      },
      {
        title: "Tinto Vintage",
        description:
          "Vino tinto excepcional con 25 años de envejecimiento, aromas complejos y sabor profundo que evoluciona en el paladar.",
        price: "$120",
      },
    ],
  },
  en: {
    title: "Our",
    subtitle: "Selected Tours.",
    description:
      "Each Tour is the result of our ancestors who gave years of dedication and mastery in the elaboration of culture and art. We use ancestral techniques combined with modern innovation to offer incomparable flavor experiences.",
    exploreTours: "EXPLORE TOURS",
    reserve: "Reserve",
    products: [
      {
        title: "Private Reserve",
        description:
          "A complex and elegant red wine, aged 18 months in French oak barrels, with deep notes of spices and ripe fruits.",
        price: "$85",
      },
      {
        title: "Ancestral White",
        description:
          "Fresh and aromatic white wine with notes of tropical fruits from the Sacred Valley, perfect for special celebrations.",
        price: "$65",
      },
      {
        title: "Delicate Rosé",
        description:
          "Rosé wine with floral aromas and soft fruit notes, ideal for accompanying light meals and pleasant conversations.",
        price: "$55",
      },
      {
        title: "Vintage Red",
        description:
          "Exceptional red wine with 25 years of aging, complex aromas and deep flavor that evolves on the palate.",
        price: "$120",
      },
    ],
  },
  fr: {
    title: "Nos",
    subtitle: "Tours Sélectionnés.",
    description:
      "Chaque Tour est le résultat de nos ancêtres qui ont consacré des années de dévouement et de maîtrise à l'élaboration de la culture et de l'art. Nous utilisons des techniques ancestrales combinées à l'innovation moderne pour offrir des expériences de saveur incomparables.",
    exploreTours: "EXPLORER LES TOURS",
    reserve: "Réserver",
    products: [
      {
        title: "Réserve Privée",
        description:
          "Un vin rouge complexe et élégant, vieilli 18 mois en fûts de chêne français, avec des notes profondes d'épices et de fruits mûrs.",
        price: "$85",
      },
      {
        title: "Blanc Ancestral",
        description:
          "Vin blanc frais et aromatique avec des notes de fruits tropicaux de la Vallée Sacrée, parfait pour les célébrations spéciales.",
        price: "$65",
      },
      {
        title: "Rosé Délicat",
        description:
          "Vin rosé aux arômes floraux et aux notes fruitées douces, idéal pour accompagner les repas légers et les conversations agréables.",
        price: "$55",
      },
      {
        title: "Rouge Vintage",
        description:
          "Vin rouge exceptionnel avec 25 ans de vieillissement, arômes complexes et saveur profonde qui évolue au palais.",
        price: "$120",
      },
    ],
  },
  it: {
    title: "I Nostri",
    subtitle: "Tour Selezionati.",
    description:
      "Ogni Tour è il risultato dei nostri antenati che hanno dedicato anni di dedizione e maestria nell'elaborazione della cultura e dell'arte. Utilizziamo tecniche ancestrali combinate con l'innovazione moderna per offrire esperienze di sapore incomparabili.",
    exploreTours: "ESPLORA TOUR",
    reserve: "Prenota",
    products: [
      {
        title: "Riserva Privata",
        description:
          "Un vino rosso complesso ed elegante, invecchiato 18 mesi in barili di quercia francese, con note profonde di spezie e frutti maturi.",
        price: "$85",
      },
      {
        title: "Bianco Ancestrale",
        description:
          "Vino bianco fresco e aromatico con note di frutti tropicali della Valle Sacra, perfetto per celebrazioni speciali.",
        price: "$65",
      },
      {
        title: "Rosato Delicato",
        description:
          "Vino rosato con aromi floreali e note fruttate delicate, ideale per accompagnare pasti leggeri e conversazioni piacevoli.",
        price: "$55",
      },
      {
        title: "Rosso Vintage",
        description:
          "Vino rosso eccezionale con 25 anni di invecchiamento, aromi complessi e sapore profondo che si evolve al palato.",
        price: "$120",
      },
    ],
  },
  de: {
    title: "Unsere",
    subtitle: "Ausgewählten Touren.",
    description:
      "Jede Tour ist das Ergebnis unserer Vorfahren, die Jahre der Hingabe und Meisterschaft in der Entwicklung von Kultur und Kunst investiert haben. Wir verwenden ancestrale Techniken kombiniert mit moderner Innovation, um unvergleichliche Geschmackserlebnisse zu bieten.",
    exploreTours: "TOUREN ERKUNDEN",
    reserve: "Reservieren",
    products: [
      {
        title: "Private Reserve",
        description:
          "Ein komplexer und eleganter Rotwein, 18 Monate in französischen Eichenfässern gereift, mit tiefen Noten von Gewürzen und reifen Früchten.",
        price: "$85",
      },
      {
        title: "Ancestraler Weißwein",
        description:
          "Frischer und aromatischer Weißwein mit Noten tropischer Früchte aus dem Heiligen Tal, perfekt für besondere Feiern.",
        price: "$65",
      },
      {
        title: "Zarter Rosé",
        description:
          "Roséwein mit Blumendüften und sanften Fruchtnoten, ideal zum Begleiten leichter Mahlzeiten und angenehmer Gespräche.",
        price: "$55",
      },
      {
        title: "Vintage Rotwein",
        description:
          "Außergewöhnlicher Rotwein mit 25 Jahren Reifung, komplexe Aromen und tiefes Aroma, das sich am Gaumen entwickelt.",
        price: "$120",
      },
    ],
  },
  pt: {
    title: "Nossos",
    subtitle: "Tours Selecionados.",
    description:
      "Cada Tour é o resultado de nossos ancestrais que dedicaram anos de devoção e maestria na elaboração de cultura e arte. Usamos técnicas ancestrais combinadas com inovação moderna para oferecer experiências de sabor incomparáveis.",
    exploreTours: "EXPLORAR TOURS",
    reserve: "Reservar",
    products: [
      {
        title: "Reserva Privada",
        description:
          "Um vinho tinto complexo e elegante, envelhecido 18 meses em barricas de carvalho francês, com notas profundas de especiarias e frutas maduras.",
        price: "$85",
      },
      {
        title: "Branco Ancestral",
        description:
          "Vinho branco fresco e aromático com notas de frutas tropicais do Vale Sagrado, perfeito para celebrações especiais.",
        price: "$65",
      },
      {
        title: "Rosé Delicado",
        description:
          "Vinho rosé com aromas florais e notas frutadas suaves, ideal para acompanhar refeições leves e conversas agradáveis.",
        price: "$55",
      },
      {
        title: "Tinto Vintage",
        description:
          "Vinho tinto excepcional com 25 anos de envelhecimento, aromas complexos e sabor profundo que evolui no paladar.",
        price: "$120",
      },
    ],
  },
  zh: {
    title: "我们的",
    subtitle: "精选之旅。",
    description:
      "每一次之旅都是我们祖先多年奉献和精通文化与艺术的结果。我们采用祖传技术与现代创新相结合，提供无与伦比的味觉体验。",
    exploreTours: "探索之旅",
    reserve: "预订",
    products: [
      {
        title: "私人珍藏",
        description: "一款复杂而优雅的红酒，在法国橡木桶中陈年18个月，具有深层的香料和成熟水果的风味。",
        price: "$85",
      },
      {
        title: "祖传白葡萄酒",
        description: "清爽芬芳的白葡萄酒，带有圣谷热带水果的风味，是特殊庆典的完美选择。",
        price: "$65",
      },
      {
        title: "精致玫瑰红",
        description: "玫瑰红葡萄酒，具有花香和柔和的水果风味，是搭配清淡餐食和愉快交谈的理想选择。",
        price: "$55",
      },
      {
        title: "年份红酒",
        description: "特殊的红葡萄酒，已陈年25年，香气复杂，口感深层，在味蕾中不断演变。",
        price: "$120",
      },
    ],
  },
  ja: {
    title: "私たちの",
    subtitle: "厳選ツアー。",
    description:
      "各ツアーは、文化と芸術の製作に多年の献身と卓越性を捧げた私たちの祖先の成果です。祖伝の技法と最新の革新を組み合わせて、比類のない味わい体験を提供します。",
    exploreTours: "ツアーを探索",
    reserve: "予約",
    products: [
      {
        title: "プライベート・リザーブ",
        description: "複雑で優雅な赤ワイン。フランスオーク樽で18ヶ月熟成。香辛料と熟した果実の深い香りが特徴。",
        price: "$85",
      },
      {
        title: "祖伝白ワイン",
        description: "神聖の谷の熱帯果実のニュアンスを持つ爽やかで香り高い白ワイン。特別なお祝いに最適。",
        price: "$65",
      },
      {
        title: "デリケートロゼ",
        description: "花の香りと柔らかいフルーティなニュアンスを持つロゼワイン。軽い食事と快適な会話に最適。",
        price: "$55",
      },
      {
        title: "ヴィンテージ赤ワイン",
        description: "25年の熟成を経た特別な赤ワイン。複雑な香りと深い風味が口の中で進化します。",
        price: "$120",
      },
    ],
  },
  ru: {
    title: "Наши",
    subtitle: "Избранные туры.",
    description:
      "Каждый тур является результатом многолетней преданности и мастерства наших предков в развитии культуры и искусства. Мы используем традиционные методы в сочетании с современными инновациями для предоставления несравненного опыта вкуса.",
    exploreTours: "ИССЛЕДОВАТЬ ТУРЫ",
    reserve: "Забронировать",
    products: [
      {
        title: "Частный резерв",
        description:
          "Сложное и элегантное красное вино, выдержанное 18 месяцев в французских дубовых бочках, с глубокими нотками специй и спелых фруктов.",
        price: "$85",
      },
      {
        title: "Белое предков",
        description:
          "Свежее и ароматное белое вино с нотками тропических фруктов Священной долины, идеальное для особых торжеств.",
        price: "$65",
      },
      {
        title: "Нежное розе",
        description:
          "Розе с цветочными ароматами и мягкими фруктовыми нотками, идеально подходит к легким блюдам и приятным разговорам.",
        price: "$55",
      },
      {
        title: "Винтажное красное",
        description:
          "Исключительное красное вино с 25-летней выдержкой, сложные ароматы и глубокий вкус, который развивается на небе.",
        price: "$120",
      },
    ],
  },
}

export function getProductsSectionDictionary(locale: Locale): ProductsSectionDict {
  return productsSectionDictionaries[locale]
}
