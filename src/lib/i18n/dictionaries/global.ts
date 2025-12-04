import type { Locale } from "../config"

export interface GlobalDictionary {
  nav: {
    tours: string
    shop: string
    visit: string
    club: string
    events: string
    about: string
    reservations: string
  }
  common: {
    scrollDown: string
    language: string
    search: string
    user: string
    cart: string
    menu: string
  }
  footer: {
    rights: string
    privacy: string
    terms: string
    contact: string
  }
}

const globalDictionaries: Record<Locale, GlobalDictionary> = {
  es: {
    nav: {
      tours: "TOURS",
      shop: "TIENDA",
      visit: "VISITAR",
      club: "CLUB",
      events: "EVENTOS",
      about: "NOSOTROS",
      reservations: "RESERVACIONES",
    },
    common: {
      scrollDown: "DESPLAZAR",
      language: "Idioma",
      search: "Buscar",
      user: "Usuario",
      cart: "Carrito",
      menu: "Menú",
    },
    footer: {
      rights: "Todos los derechos reservados",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      contact: "Contacto",
    },
  },
  en: {
    nav: {
      tours: "TOURS",
      shop: "SHOP",
      visit: "VISIT",
      club: "CLUB",
      events: "EVENTS",
      about: "ABOUT",
      reservations: "RESERVATIONS",
    },
    common: {
      scrollDown: "SCROLL",
      language: "Language",
      search: "Search",
      user: "User",
      cart: "Cart",
      menu: "Menu",
    },
    footer: {
      rights: "All rights reserved",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact",
    },
  },
  fr: {
    nav: {
      tours: "CIRCUITS",
      shop: "BOUTIQUE",
      visit: "VISITER",
      club: "CLUB",
      events: "ÉVÉNEMENTS",
      about: "À PROPOS",
      reservations: "RÉSERVATIONS",
    },
    common: {
      scrollDown: "DÉFILER",
      language: "Langue",
      search: "Rechercher",
      user: "Utilisateur",
      cart: "Panier",
      menu: "Menu",
    },
    footer: {
      rights: "Tous droits réservés",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      contact: "Contact",
    },
  },
  it: {
    nav: {
      tours: "TOUR",
      shop: "NEGOZIO",
      visit: "VISITARE",
      club: "CLUB",
      events: "EVENTI",
      about: "CHI SIAMO",
      reservations: "PRENOTAZIONI",
    },
    common: {
      scrollDown: "SCORRI",
      language: "Lingua",
      search: "Cerca",
      user: "Utente",
      cart: "Carrello",
      menu: "Menu",
    },
    footer: {
      rights: "Tutti i diritti riservati",
      privacy: "Politica sulla Privacy",
      terms: "Termini di Servizio",
      contact: "Contatto",
    },
  },
  de: {
    nav: {
      tours: "TOUREN",
      shop: "SHOP",
      visit: "BESUCHEN",
      club: "CLUB",
      events: "VERANSTALTUNGEN",
      about: "ÜBER UNS",
      reservations: "RESERVIERUNGEN",
    },
    common: {
      scrollDown: "SCROLLEN",
      language: "Sprache",
      search: "Suchen",
      user: "Benutzer",
      cart: "Warenkorb",
      menu: "Menü",
    },
    footer: {
      rights: "Alle Rechte vorbehalten",
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      contact: "Kontakt",
    },
  },
  pt: {
    nav: {
      tours: "PASSEIOS",
      shop: "LOJA",
      visit: "VISITAR",
      club: "CLUBE",
      events: "EVENTOS",
      about: "SOBRE",
      reservations: "RESERVAS",
    },
    common: {
      scrollDown: "ROLAR",
      language: "Idioma",
      search: "Buscar",
      user: "Usuário",
      cart: "Carrinho",
      menu: "Menu",
    },
    footer: {
      rights: "Todos os direitos reservados",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      contact: "Contato",
    },
  },
  zh: {
    nav: {
      tours: "旅游",
      shop: "商店",
      visit: "访问",
      club: "俱乐部",
      events: "活动",
      about: "关于",
      reservations: "预订",
    },
    common: {
      scrollDown: "滚动",
      language: "语言",
      search: "搜索",
      user: "用户",
      cart: "购物车",
      menu: "菜单",
    },
    footer: {
      rights: "版权所有",
      privacy: "隐私政策",
      terms: "服务条款",
      contact: "联系我们",
    },
  },
  ja: {
    nav: {
      tours: "ツアー",
      shop: "ショップ",
      visit: "訪問",
      club: "クラブ",
      events: "イベント",
      about: "私たちについて",
      reservations: "予約",
    },
    common: {
      scrollDown: "スクロール",
      language: "言語",
      search: "検索",
      user: "ユーザー",
      cart: "カート",
      menu: "メニュー",
    },
    footer: {
      rights: "全著作権所有",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      contact: "お問い合わせ",
    },
  },
  ru: {
    nav: {
      tours: "ТУРЫ",
      shop: "МАГАЗИН",
      visit: "ПОСЕТИТЬ",
      club: "КЛУБ",
      events: "СОБЫТИЯ",
      about: "О НАС",
      reservations: "БРОНИРОВАНИЕ",
    },
    common: {
      scrollDown: "ПРОКРУТИТЬ",
      language: "Язык",
      search: "Поиск",
      user: "Пользователь",
      cart: "Корзина",
      menu: "Меню",
    },
    footer: {
      rights: "Все права защищены",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      contact: "Контакт",
    },
  },
}

export function getGlobalDictionary(locale: Locale): GlobalDictionary {
  return globalDictionaries[locale] || globalDictionaries.es
}
