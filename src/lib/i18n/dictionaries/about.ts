import type { Locale } from "../config"

export interface AboutDictionary {
  about: {
    hero: {
      subtitle: string
      title: string
      description: string
    }
    intro: {
      title: string
      titleHighlight: string
      description: string
      cta: string
    }
    story: {
      title: string
      paragraphs: string[]
    }
    visit: {
      title: string
      description: string
      cards: Array<{
        title: string
        lines: string[]
        phone?: string
        email?: string
        action: string
      }>
    }
    contact: {
      title: string
      description: string
      form: {
        firstName: string
        lastName: string
        email: string
        phone: string
        eventType: string
        message: string
        subscribe: string
        submit: string
      }
      address: {
        line1: string
        line2: string
        cta: string
      }
    }
    team: {
      title1: string
      title2: string
      description: string
      email: string
      cta: string
    }
  }
}

const enAbout: AboutDictionary = {
  about: {
    hero: {
      subtitle: "Our Story",
      title: "About Us",
      description: "A legacy of passion, tradition, and exceptional wines",
    },
    intro: {
      title: "A Peruvian Icon",
      titleHighlight: "For Wine, Culture & Experience",
      description:
        "Born in the heart of the Andes, our family has spent three generations crafting wines from the unique terroir of our highlands, with character and just the right amount of curiosity. Founded in 1985 by Carlos Mendoza.",
      cta: "Read Our Story",
    },
    story: {
      title: "Showcasing the harmony between our wines and great food.",
      paragraphs: [
        "Our winery crafts premium wines that celebrate the character of the Peruvian highlands and the terroir of our volcanic soil. From bold Tannat to vibrant Torrontés and unique fruit wines, every bottle reflects a commitment to sustainable practices and meticulous winemaking.",
        "The wines express the nuances of the local terroir, marrying innovation with tradition to produce varieties that are as expressive as they are elegant.",
        "Located in the Sacred Valley, our winery is a 45-minute drive from Cusco. The Tasting Room offers seated wine flight tastings, with a carefully crafted snack menu available, designed to enhance the wine-tasting journey for guests. The Terrace is available for a more casual wine experience.",
        "Beyond the tasting room, we have earned a reputation as a fine dining destination that captures the essence of regional Peru.",
      ],
    },
    visit: {
      title: "Visit Us",
      description:
        "Our Tasting Room and Restaurant is a 45-minute drive from Cusco, or just a short walk from the Sacred Valley Township. Easily accessible via the main highway.",
      cards: [
        {
          title: "Find Us",
          lines: ["Av. El Sol 380, Cusco", "Perú 08000"],
          phone: "+51 84 234 567",
          action: "Get Directions",
        },
        {
          title: "Tasting Room",
          lines: ["Open Daily 10am-6pm", "Reservations recommended"],
          phone: "+51 84 234 567",
          action: "Make a Booking",
        },
        {
          title: "Restaurant",
          lines: ["Open for lunch Tuesday - Sunday", "12pm - 4pm", "Dinner service 7pm - 10pm", "Friday & Saturday"],
          phone: "+51 84 234 568",
          email: "restaurant@peruvianwines.com",
          action: "Make a Booking",
        },
        {
          title: "Office",
          lines: ["PO Box 111 Cusco", "Perú 08000"],
          phone: "+51 84 234 567",
          email: "experience@peruvianwines.com",
          action: "Contact Us",
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      description: "Complete the enquiry form and a member of our team will be in touch as soon as possible.",
      form: {
        firstName: "First Name *",
        lastName: "Last Name *",
        email: "Email *",
        phone: "Phone",
        eventType: "Private Event",
        message: "Message*",
        subscribe: "Join our mailing list to stay in touch with our latest news",
        submit: "Submit",
      },
      address: {
        line1: "Av. El Sol 380",
        line2: "Sacred Valley, Cusco 08000",
        cta: "Get Directions",
      },
    },
    team: {
      title1: "Looking To",
      title2: "Join Our Team?",
      description: "Send an email with your CV to:",
      email: "experience@peruvianwines.com",
      cta: "Email",
    },
  },
}

const esAbout: AboutDictionary = {
  about: {
    hero: {
      subtitle: "Nuestra Historia",
      title: "Nosotros",
      description: "Un legado de pasión, tradición y vinos excepcionales",
    },
    intro: {
      title: "Un Ícono Peruano",
      titleHighlight: "Para Vino, Cultura y Experiencia",
      description:
        "Nacidos en el corazón de los Andes, nuestra familia ha dedicado tres generaciones a elaborar vinos del terroir único de nuestras tierras altas, con carácter y la cantidad justa de curiosidad. Fundada en 1985 por Carlos Mendoza.",
      cta: "Lee Nuestra Historia",
    },
    story: {
      title: "Mostrando la armonía entre nuestros vinos y la gran comida.",
      paragraphs: [
        "Nuestra bodega elabora vinos premium que celebran el carácter de las tierras altas peruanas y el terroir de nuestro suelo volcánico. Desde el audaz Tannat hasta el vibrante Torrontés y vinos de frutas únicos, cada botella refleja un compromiso con prácticas sostenibles y una vinificación meticulosa.",
        "Los vinos expresan los matices del terroir local, combinando innovación con tradición para producir variedades tan expresivas como elegantes.",
        "Ubicada en el Valle Sagrado, nuestra bodega está a 45 minutos en auto de Cusco. La Sala de Degustación ofrece catas de vinos con asientos disponibles, con un menú de bocadillos cuidadosamente elaborado, diseñado para mejorar el viaje de degustación de vinos para los huéspedes. La Terraza está disponible para una experiencia de vino más casual.",
        "Más allá de la sala de degustación, hemos ganado reputación como un destino gastronómico que captura la esencia del Perú regional.",
      ],
    },
    visit: {
      title: "Visítanos",
      description:
        "Nuestra Sala de Degustación y Restaurante está a 45 minutos en auto de Cusco, o a solo un corto paseo desde el municipio del Valle Sagrado. Fácilmente accesible por la carretera principal.",
      cards: [
        {
          title: "Encuéntranos",
          lines: ["Av. El Sol 380, Cusco", "Perú 08000"],
          phone: "+51 84 234 567",
          action: "Obtener Direcciones",
        },
        {
          title: "Sala de Degustación",
          lines: ["Abierto Diariamente 10am-6pm", "Reservas recomendadas"],
          phone: "+51 84 234 567",
          action: "Hacer una Reserva",
        },
        {
          title: "Restaurante",
          lines: [
            "Abierto para almuerzo Martes - Domingo",
            "12pm - 4pm",
            "Servicio de cena 7pm - 10pm",
            "Viernes y Sábado",
          ],
          phone: "+51 84 234 568",
          email: "restaurant@peruvianwines.com",
          action: "Hacer una Reserva",
        },
        {
          title: "Oficina",
          lines: ["PO Box 111 Cusco", "Perú 08000"],
          phone: "+51 84 234 567",
          email: "experience@peruvianwines.com",
          action: "Contáctanos",
        },
      ],
    },
    contact: {
      title: "Ponte en Contacto",
      description:
        "Completa el formulario de consulta y un miembro de nuestro equipo se pondrá en contacto lo antes posible.",
      form: {
        firstName: "Nombre *",
        lastName: "Apellido *",
        email: "Correo Electrónico *",
        phone: "Teléfono",
        eventType: "Evento Privado",
        message: "Mensaje*",
        subscribe: "Únete a nuestra lista de correo para mantenerte al día con nuestras últimas noticias",
        submit: "Enviar",
      },
      address: {
        line1: "Av. El Sol 380",
        line2: "Valle Sagrado, Cusco 08000",
        cta: "Obtener Direcciones",
      },
    },
    team: {
      title1: "¿Buscas",
      title2: "Unirte a Nuestro Equipo?",
      description: "Envía un correo electrónico con tu CV a:",
      email: "experience@peruvianwines.com",
      cta: "Enviar Correo",
    },
  },
}

const quAbout: AboutDictionary = {
  about: {
    hero: {
      subtitle: "Ñuqanchikpa Willakuy",
      title: "Ñuqanchik",
      description: "Munay, kawsay ima allin vinomanta qhaway",
    },
    intro: {
      title: "Huk Perú Siq'i",
      titleHighlight: "Vino, Kawsay ima Yachaykunapaq",
      description:
        "Andiskunapi paqarisqa, ñuqanchikpa ayllu kimsa wiñaymanta vinokunata rurashaniku ñuqanchikpa urqikunapa allpanmanta, sunquyuq ima allin yuyayniyuq. 1985 watapi Carlos Mendoza qallarirqan.",
      cta: "Willakuyta Ñawiriy",
    },
    story: {
      title: "Ñuqanchikpa vinokunamanta mikhuykunawan allin tinkuyta rikuchispa.",
      paragraphs: [
        "Ñuqanchikpa vino wasiy allin vinokunata rurashanchik Peru urqikunapa sunqunta ima ñuqanchikpa nina allpapa sunqunta kusichispa. Kallpasapa Tannatmanta kusisqa Torrontéskama ima sapalla ruru vinokunakama, sapa botellapi imayna allinta ruranchik ima sumaq vinokunata ruwanapaq.",
        "Vinokunaqa kay tiyaypa ima kaqninkunata qawachin, musuq yachayta ima mawk'a rurayta huñuspa ima sumaq vinokunata paqarichinapaq.",
        "Valle Sagradopi kaq, ñuqanchikpa vino wasiqa Cuscomanta 45 minutos purisqa karrupi. Sala de Degustación nisqapi vino malliykunata quymi, huk sumaq mikhuy listakunawan, ima vino malliypa viajinta allinchanapaq rurasqa. Terraza nisqa huk aswan pisi vino experienciapaq kachkan.",
        "Sala de Degustación nisqamanta hawa, huk allin mikhuna wasikama chayarqayku Peru suyupa sumaq mikunanta qawachiq.",
      ],
    },
    visit: {
      title: "Watiqamuy",
      description:
        "Ñuqanchikpa Sala de Degustación nisqawan Restaurante nisqaqa Cuscomanta 45 minutos karrupi, utaq Valle Sagrado llaqtamanta pisi puriyllam. Hatun ñanwan chayanayki atinki.",
      cards: [
        {
          title: "Tariway",
          lines: ["Av. El Sol 380, Cusco", "Perú 08000"],
          phone: "+51 84 234 567",
          action: "Ñanta Tariway",
        },
        {
          title: "Sala de Degustación",
          lines: ["Sapa p'unchay kicharisqa 10am-6pm", "Reservakunata yuyaychanchik"],
          phone: "+51 84 234 567",
          action: "Reservata Ruwana",
        },
        {
          title: "Restaurante",
          lines: [
            "Mikhuykunapaq kicharisqa Martes - Domingo",
            "12pm - 4pm",
            "Tuta mikhuy 7pm - 10pm",
            "Viernes Sábado ima",
          ],
          phone: "+51 84 234 568",
          email: "restaurant@peruvianwines.com",
          action: "Reservata Ruwana",
        },
        {
          title: "Oficina",
          lines: ["PO Box 111 Cusco", "Perú 08000"],
          phone: "+51 84 234 567",
          email: "experience@peruvianwines.com",
          action: "Rimanakuy",
        },
      ],
    },
    contact: {
      title: "Rimanakuy",
      description:
        "Tapuykuna formuta hunt'achiy chaymanta ñuqanchikpa equipumanta huk runaqa utqaylla qamwan rimanakuq kanqa.",
      form: {
        firstName: "Sutiyki *",
        lastName: "Ayllu Sutiyki *",
        email: "Correo Electrónico *",
        phone: "Teléfono",
        eventType: "Sapalla Evento",
        message: "Willakuy*",
        subscribe: "Ñuqanchikpa correo listaman huk'uykuy musuq willakuykunata yachanapaq",
        submit: "Apachiy",
      },
      address: {
        line1: "Av. El Sol 380",
        line2: "Valle Sagrado, Cusco 08000",
        cta: "Ñanta Tariway",
      },
    },
    team: {
      title1: "¿Maskashankichu",
      title2: "Ñuqanchikpa Equipuman Huk'ukunapaq?",
      description: "Huk correo electrónico CV nisqawan apachiy kayñiqman:",
      email: "experience@peruvianwines.com",
      cta: "Correo Apachiy",
    },
  },
}

export function getAboutDictionary(locale: Locale): AboutDictionary {
  const dictionaries: Record<string, AboutDictionary> = {
    en: enAbout,
    es: esAbout,
    qu: quAbout,
  }

  // Fallback to English if locale not available
  return dictionaries[locale] || dictionaries.en
}
