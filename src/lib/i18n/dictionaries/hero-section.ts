const heroSectionDictionaries = {
  es: {
    title: "Explora los",
    titleLine2: "Mejores Destinos",
    description: "Descubre experiencias únicas en los lugares más hermosos del mundo",
    planVisit: "Planifica tu Viaje",
    shopNow: "Compra Ahora",
  },
  en: {
    title: "Explore the",
    titleLine2: "Best Destinations",
    description: "Discover unique experiences in the most beautiful places in the world",
    planVisit: "Plan Your Visit",
    shopNow: "Shop Now",
  },
  fr: {
    title: "Explorez les",
    titleLine2: "Meilleures Destinations",
    description: "Découvrez des expériences uniques dans les plus beaux endroits du monde",
    planVisit: "Planifiez Votre Visite",
    shopNow: "Achetez Maintenant",
  },
  it: {
    title: "Esplora i",
    titleLine2: "Migliori Destinazioni",
    description: "Scopri esperienze uniche nei luoghi più belli del mondo",
    planVisit: "Pianifica la Visita",
    shopNow: "Acquista Ora",
  },
  de: {
    title: "Erkunden Sie die",
    titleLine2: "Besten Reiseziele",
    description: "Entdecken Sie einzigartige Erlebnisse an den schönsten Orten der Welt",
    planVisit: "Besuch Planen",
    shopNow: "Jetzt Kaufen",
  },
  pt: {
    title: "Explore os",
    titleLine2: "Melhores Destinos",
    description: "Descubra experiências únicas nos lugares mais bonitos do mundo",
    planVisit: "Planeje sua Visita",
    shopNow: "Compre Agora",
  },
  zh: {
    title: "探索",
    titleLine2: "最佳目的地",
    description: "在世界上最美丽的地方发现独特的体验",
    planVisit: "计划访问",
    shopNow: "立即购买",
  },
  ja: {
    title: "探索する",
    titleLine2: "最高の目的地",
    description: "世界で最も美しい場所でユニークな体験を発見してください",
    planVisit: "訪問を計画",
    shopNow: "今すぐ購入",
  },
  ru: {
    title: "Исследуйте",
    titleLine2: "Лучшие направления",
    description: "Откройте для себя уникальные впечатления в самых красивых местах мира",
    planVisit: "Спланируйте Визит",
    shopNow: "Купить сейчас",
  },
}

export type HeroSectionDictionary = (typeof heroSectionDictionaries)["es"]

export function getHeroSectionDictionary(locale: string): HeroSectionDictionary {
  return heroSectionDictionaries[locale as keyof typeof heroSectionDictionaries] || heroSectionDictionaries.es
}
