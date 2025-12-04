import type { Locale } from "../config"

export interface ProductsDictionary {
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

const productsDictionaries: Record<Locale, ProductsDictionary> = {
  es: {
    products: {
      title: "Nuestros",
      subtitle: "Tours Selectos.",
      description:
        "Cada Tour es el resultado de nuestros antepasados que dieron años de dedicación y maestría en la elaboración de cultura y arte. Utilizamos técnicas ancestrales combinadas con innovación moderna para ofrecer experiencias de sabor incomparables.",
      exploreTours: "EXPLORAR TOURS",
      reserva: {
        title: "Reserva Privada",
        description:
          "Un vino tinto complejo y elegante, envejecido 18 meses en barriles de roble francés, con notas profundas de especias y frutas maduras.",
        price: "$85",
      },
      blanco: {
        title: "Blanco Ancestral",
        description:
          "Vino blanco fresco y aromático con notas de frutas tropicales del Valle Sagrado, perfecto para celebraciones especiales.",
        price: "$65",
      },
      rosado: {
        title: "Rosado Delicado",
        description:
          "Vino rosado con aromas florales y notas frutales suaves, ideal para acompañar comidas ligeras y conversaciones gratas.",
        price: "$55",
      },
      tinto: {
        title: "Tinto Vintage",
        description:
          "Vino tinto excepcional con 25 años de envejecimiento, aromas complejos y sabor profundo que evoluciona en el paladar.",
        price: "$120",
      },
      reserve: "Reservar",
    },
  },
  en: {
    products: {
      title: "Our",
      subtitle: "Selected Tours.",
      description:
        "Each Tour is the result of our ancestors who spent years of dedication and mastery in the creation of culture and art. We use ancestral techniques combined with modern innovation to offer incomparable flavor experiences.",
      exploreTours: "EXPLORE TOURS",
      reserva: {
        title: "Private Reserve",
        description:
          "A complex and elegant red wine, aged 18 months in French oak barrels, with deep notes of spices and ripe fruits.",
        price: "$85",
      },
      blanco: {
        title: "Ancestral White",
        description:
          "Fresh and aromatic white wine with tropical fruit notes from the Sacred Valley, perfect for special celebrations.",
        price: "$65",
      },
      rosado: {
        title: "Delicate Rosé",
        description:
          "Rosé wine with floral aromas and soft fruity notes, ideal for accompanying light meals and pleasant conversations.",
        price: "$55",
      },
      tinto: {
        title: "Vintage Red",
        description:
          "Exceptional red wine with 25 years of aging, complex aromas and deep flavor that evolves on the palate.",
        price: "$120",
      },
      reserve: "Reserve",
    },
  },
  fr: {
    products: {
      title: "Nos",
      subtitle: "Circuits Sélectionnés.",
      description:
        "Chaque circuit est le résultat de nos ancêtres qui ont consacré des années de dévouement et de maîtrise à la création de culture et d'art. Nous utilisons des techniques ancestrales combinées à l'innovation moderne pour offrir des expériences de saveur incomparables.",
      exploreTours: "EXPLORER LES CIRCUITS",
      reserva: {
        title: "Réserve Privée",
        description:
          "Un vin rouge complexe et élégant, vieilli 18 mois en fûts de chêne français, avec des notes profondes d'épices et de fruits mûrs.",
        price: "$85",
      },
      blanco: {
        title: "Blanc Ancestral",
        description:
          "Vin blanc frais et aromatique avec des notes de fruits tropicaux de la Vallée Sacrée, parfait pour les célébrations spéciales.",
        price: "$65",
      },
      rosado: {
        title: "Rosé Délicat",
        description:
          "Vin rosé avec des arômes floraux et des notes fruitées douces, idéal pour accompagner les repas légers et les conversations agréables.",
        price: "$55",
      },
      tinto: {
        title: "Vin Millésimé",
        description:
          "Vin rouge exceptionnel avec 25 ans de vieillissement, arômes complexes et saveur profonde qui évolue en bouche.",
        price: "$120",
      },
      reserve: "Réserver",
    },
  },
  it: {
    products: {
      title: "I Nostri",
      subtitle: "Tour Selezionati.",
      description:
        "Ogni tour è il risultato dei nostri antenati che hanno dedicato anni di dedizione e maestria alla creazione di cultura e arte. Utilizziamo tecniche ancestrali combinate con l'innovazione moderna per offrire esperienze di sapore incomparabili.",
      exploreTours: "ESPLORA I TOUR",
      reserva: {
        title: "Riserva Privata",
        description:
          "Un vino rosso complesso ed elegante, invecchiato 18 mesi in barili di rovere francese, con note profonde di spezie e frutti maturi.",
        price: "$85",
      },
      blanco: {
        title: "Bianco Ancestrale",
        description:
          "Vino bianco fresco e aromatico con note di frutti tropicali della Valle Sacra, perfetto per celebrazioni speciali.",
        price: "$65",
      },
      rosado: {
        title: "Rosato Delicato",
        description:
          "Vino rosato con aromi floreali e note fruttate morbide, ideale per accompagnare piatti leggeri e conversazioni gradevoli.",
        price: "$55",
      },
      tinto: {
        title: "Rosso Vintage",
        description:
          "Vino rosso eccezionale con 25 anni di invecchiamento, aromi complessi e sapore profondo che si evolve al palato.",
        price: "$120",
      },
      reserve: "Prenota",
    },
  },
  de: {
    products: {
      title: "Unsere",
      subtitle: "Ausgewählten Touren.",
      description:
        "Jede Tour ist das Ergebnis unserer Ahnen, die Jahre der Hingabe und Meisterschaft in der Schaffung von Kultur und Kunst aufgebracht haben. Wir verwenden ancestrale Techniken kombiniert mit moderner Innovation, um unvergleichliche Geschmackserlebnisse zu bieten.",
      exploreTours: "TOUREN ERKUNDEN",
      reserva: {
        title: "Private Reserve",
        description:
          "Ein komplexer und eleganter Rotwein, 18 Monate in französischen Eichenfässern gereift, mit tiefen Noten von Gewürzen und reifen Früchten.",
        price: "$85",
      },
      blanco: {
        title: "Ancestraler Weißwein",
        description:
          "Frischer und aromatischer Weißwein mit Tropenfruchtoten aus dem Heiligen Tal, perfekt für spezielle Feiern.",
        price: "$65",
      },
      rosado: {
        title: "Zarter Rosé",
        description:
          "Roséwein mit Blumenaroma und sanften Fruchtnoten, ideal um leichte Mahlzeiten und angenehme Gespräche zu begleiten.",
        price: "$55",
      },
      tinto: {
        title: "Vintage Rotwein",
        description:
          "Außergewöhnlicher Rotwein mit 25 Jahren Reifung, komplexe Aromen und tiefes Aroma, das sich am Gaumen entwickelt.",
        price: "$120",
      },
      reserve: "Buchen",
    },
  },
  pt: {
    products: {
      title: "Nossos",
      subtitle: "Passeios Selecionados.",
      description:
        "Cada passeio é resultado de nossos antepassados que dedicaram anos de devoção e maestria na criação de cultura e arte. Usamos técnicas ancestrais combinadas com inovação moderna para oferecer experiências de sabor incomparáveis.",
      exploreTours: "EXPLORAR PASSEIOS",
      reserva: {
        title: "Reserva Privada",
        description:
          "Um vinho tinto complexo e elegante, envelhecido 18 meses em barris de carvalho francês, com notas profundas de especiarias e frutas maduras.",
        price: "$85",
      },
      blanco: {
        title: "Branco Ancestral",
        description:
          "Vinho branco fresco e aromático com notas de frutas tropicais do Vale Sagrado, perfeito para celebrações especiais.",
        price: "$65",
      },
      rosado: {
        title: "Rosé Delicado",
        description:
          "Vinho rosé com aromas florais e notas frutadas suaves, ideal para acompanhar refeições leves e conversas agradáveis.",
        price: "$55",
      },
      tinto: {
        title: "Tinto Vintage",
        description:
          "Vinho tinto excepcional com 25 anos de envelhecimento, aromas complexos e sabor profundo que evolui no paladar.",
        price: "$120",
      },
      reserve: "Reservar",
    },
  },
  zh: {
    products: {
      title: "我们的",
      subtitle: "精选之旅。",
      description:
        "每一次旅行都是我们祖先多年献身和精湛工艺的结果。我们将祖传技术与现代创新相结合，提供无与伦比的风味体验。",
      exploreTours: "探索之旅",
      reserva: {
        title: "私人珍藏",
        description: "复杂而优雅的红葡萄酒，在法国橡木桶中陈年18个月，具有深层的香料和成熟水果的味道。",
        price: "$85",
      },
      blanco: {
        title: "祖传白葡萄酒",
        description: "来自圣谷的新鲜芳香白葡萄酒，带有热带水果的味道，完美适合特殊庆典。",
        price: "$65",
      },
      rosado: {
        title: "精致玫瑰红",
        description: "玫瑰红葡萄酒具有花香和柔和的果香，非常适合搭配清淡的餐食和愉快的交谈。",
        price: "$55",
      },
      tinto: {
        title: "年份红葡萄酒",
        description: "25年陈年的特异红葡萄酒，复杂的香气和深沉的风味在口感中逐渐演变。",
        price: "$120",
      },
      reserve: "预订",
    },
  },
  ja: {
    products: {
      title: "私たちの",
      subtitle: "セレクトツアー。",
      description:
        "各ツアーは、文化と芸術の創造に献身と卓越性を費やした私たちの祖先の結果です。祖先の技術と現代のイノベーションを組み合わせて、比類のない味の体験を提供します。",
      exploreTours: "ツアーを探索",
      reserva: {
        title: "プライベートリザーブ",
        description: "複雑で優雅な赤ワイン、フレンチオーク樽で18ヶ月熟成、スパイスと熟した果実の深いノートを持つ。",
        price: "$85",
      },
      blanco: {
        title: "祖先の白",
        description: "聖地の熱帯果実ノート付きの新鮮でアロマティックな白ワイン、特別なお祝いに最適です。",
        price: "$65",
      },
      rosado: {
        title: "繊細なロゼ",
        description: "花の香りと柔らかな果実の味を持つロゼワイン、軽い食事と楽しい会話に理想的です。",
        price: "$55",
      },
      tinto: {
        title: "ヴィンテージ赤",
        description: "25年の熟成を持つ例外的な赤ワイン、複雑なアロマと口蓋で進化する深い風味。",
        price: "$120",
      },
      reserve: "予約",
    },
  },
  ru: {
    products: {
      title: "Наши",
      subtitle: "Избранные Туры.",
      description:
        "Каждый тур является результатом труда наших предков, которые посвятили годы преданности и мастерству созданию культуры и искусства. Мы используем древние техники в сочетании с современными инновациями для предоставления несравнимых вкусовых впечатлений.",
      exploreTours: "ИССЛЕДУЙТЕ ТУРЫ",
      reserva: {
        title: "Частный резерв",
        description:
          "Сложное и элегантное красное вино, выдержанное 18 месяцев в французских дубовых бочках, с глубокими нотками специй и спелых фруктов.",
        price: "$85",
      },
      blanco: {
        title: "Предковое белое",
        description:
          "Свежее и ароматное белое вино с нотками тропических фруктов из Священной долины, идеально для особых торжеств.",
        price: "$65",
      },
      rosado: {
        title: "Нежное розе",
        description:
          "Розовое вино с цветочными ароматами и мягкими фруктовыми нотками, идеально подходит для легких блюд и приятных бесед.",
        price: "$55",
      },
      tinto: {
        title: "Винтажное красное",
        description:
          "Исключительное красное вино с 25-летней выдержкой, сложные ароматы и глубокий вкус, развивающийся на вкусовых рецепторах.",
        price: "$120",
      },
      reserve: "Забронировать",
    },
  },
}

export function getProductsDictionary(locale: Locale): ProductsDictionary {
  return productsDictionaries[locale] || productsDictionaries.es
}
