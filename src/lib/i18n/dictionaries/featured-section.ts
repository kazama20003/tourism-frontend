import type { Locale } from "@/lib/i18n/config"

export interface FeaturedSectionDictionary {
  title: string
  titleLine2: string
  description: string
  shopButton: string
  restaurantLabel: string
}

export const featuredSectionDictionaries: Record<Locale, FeaturedSectionDictionary> = {
  es: {
    title: "Una Propiedad Familiar,",
    titleLine2: "Elaborada Por Generaciones.",
    description:
      "Maxwell Wines elabora vinos premium que celebran el carácter calcáreo de la propiedad. Desde el audaz Shiraz hasta los blancos vibrantes y los icónicos meads de la propiedad, cada botella refleja un compromiso con la sostenibilidad y la elaboración meticulosa.",
    shopButton: "COMPRAR VINO Y MEAD →",
    restaurantLabel: "RESTAURANTE MAXWELL",
  },
  en: {
    title: "A Family Estate,",
    titleLine2: "Crafted By Generations.",
    description:
      "Maxwell Wines crafts premium wines that celebrate the limestone character of the estate. From bold Shiraz to vibrant whites and the estates iconic meads, every bottle reflects a commitment to sustainability and meticulous winemaking.",
    shopButton: "SHOP WINE & MEAD →",
    restaurantLabel: "MAXWELL RESTAURANT",
  },
  fr: {
    title: "Un Domaine Familial,",
    titleLine2: "Créé Par Les Générations.",
    description:
      "Maxwell Wines crée des vins premium qui célèbrent le caractère calcaire du domaine. Du Shiraz audacieux aux blancs vibrants et aux hydromel emblématiques du domaine, chaque bouteille reflète un engagement envers la durabilité et la vinification méticuleuse.",
    shopButton: "ACHETER VIN ET HYDROMEL →",
    restaurantLabel: "RESTAURANT MAXWELL",
  },
  it: {
    title: "Una Tenuta Familiare,",
    titleLine2: "Creata Da Generazioni.",
    description:
      "Maxwell Wines crea vini premium che celebrano il carattere calcareo della tenuta. Dai Shiraz audaci ai bianchi vibranti e ai celebri idromele della tenuta, ogni bottiglia riflette un impegno verso la sostenibilità e la vinificazione meticolosa.",
    shopButton: "ACQUISTA VINO E IDROMELE →",
    restaurantLabel: "RISTORANTE MAXWELL",
  },
  de: {
    title: "Ein Familienweingut,",
    titleLine2: "Von Generationen Geprägt.",
    description:
      "Maxwell Wines stellt Prämiumweine her, die den Kalksteincharakter des Weinguts würdigen. Von kühnem Shiraz über lebhafte Weißweine bis hin zu den ikonischen Weinen des Weinguts spiegelt jede Flasche ein Engagement für Nachhaltigkeit und sorgfältige Weinbereitung wider.",
    shopButton: "WEIN UND MET KAUFEN →",
    restaurantLabel: "MAXWELL RESTAURANT",
  },
  pt: {
    title: "Uma Propriedade Familiar,",
    titleLine2: "Elaborada Por Gerações.",
    description:
      "Maxwell Wines cria vinhos premium que celebram o caráter calcário da propriedade. Do audacioso Shiraz aos brancos vibrantes e aos hidroméis icônicos da propriedade, cada garrafa reflete um compromisso com a sustentabilidade e a vinificação meticulosa.",
    shopButton: "COMPRE VINHO E HIDROMEL →",
    restaurantLabel: "RESTAURANTE MAXWELL",
  },
  zh: {
    title: "家族庄园，",
    titleLine2: "由世代精心打造。",
    description:
      "Maxwell Wines 精心酿造优质葡萄酒，彰显庄园的石灰岩特征。从大胆的西拉到充满活力的白葡萄酒，再到庄园标志性的蜂蜜酒，每一瓶都体现了对可持续发展和精心酿造工艺的承诺。",
    shopButton: "购买葡萄酒和蜂蜜酒 →",
    restaurantLabel: "MAXWELL 餐厅",
  },
  ja: {
    title: "ファミリー・エステート、",
    titleLine2: "世代を通じて職人技で作られました。",
    description:
      "Maxwell Wines は、エステートの石灰岩の性質を祝う高級ワインを製造しています。大胆なシラーズから活気に満ちた白ワイン、そしてエステートのアイコニックなミードまで、すべてのボトルは持続可能性と細心のワイン製造への取り組みを反映しています。",
    shopButton: "ワインとミードを購入する →",
    restaurantLabel: "マクスウェル レストラン",
  },
  ru: {
    title: "Семейное Поместье,",
    titleLine2: "Созданное Поколениями.",
    description:
      "Maxwell Wines создает премиальные вина, которые прославляют известняковый характер усадьбы. От смелого Шираза до ярких белых вин и культовых медов поместья, каждая бутылка отражает приверженность устойчивому развитию и тщательному виноделию.",
    shopButton: "КУПИТЬ ВИНО И МЕД →",
    restaurantLabel: "РЕСТОРАН MAXWELL",
  },
}

export function getFeaturedSectionDictionary(locale: Locale): FeaturedSectionDictionary {
  return featuredSectionDictionaries[locale]
}
    