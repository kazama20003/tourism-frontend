import type { Locale } from "../config"

export interface ClubDictionary {
  hero: {
    subtitle: string
    title: string
    description: string
  }
  ctaBar: {
    joinNow: string
    signIn: string
  }
  benefits: {
    sectionTitle: string
    sectionTitleItalic: string
    sectionDescription: string
    exclusivePricing: {
      title: string
      description: string
    }
    specialRewards: {
      title: string
      description: string
    }
    priorityAccess: {
      title: string
      description: string
    }
    freeShipping: {
      title: string
      description: string
    }
    vipExperiences: {
      title: string
      description: string
    }
    quarterlySelections: {
      title: string
      description: string
    }
    popularBadge: string
    learnMore: string
  }
  faq: {
    sectionTitle: string
    sectionTitleItalic: string
    sectionDescription: string
    question1: string
    answer1: string
    question2: string
    answer2: string
    question3: string
    answer3: string
    question4: string
    answer4: string
    question5: string
    answer5: string
    question6: string
    answer6: string
  }
}

const clubEs: ClubDictionary = {
  hero: {
    subtitle: "Membresía Exclusiva",
    title: "Bienvenido al Club",
    description: "Únete a nuestra comunidad exclusiva de entusiastas",
  },
  ctaBar: {
    joinNow: "Únete Ahora",
    signIn: "Iniciar Sesión",
  },
  benefits: {
    sectionTitle: "Beneficios de",
    sectionTitleItalic: "Membresía",
    sectionDescription:
      "Nuestros miembros del Clan disfrutan de acceso exclusivo a recompensas, ofertas y experiencias, junto con precios exclusivos para miembros en todos nuestros productos.",
    exclusivePricing: {
      title: "Precios Exclusivos",
      description: "Precios exclusivos para miembros en todos nuestros productos cada vez que compras.",
    },
    specialRewards: {
      title: "Recompensas Especiales",
      description:
        "Recibe regalos exclusivos y ofertas de temporada seleccionadas especialmente para nuestros miembros.",
    },
    priorityAccess: {
      title: "Acceso Prioritario",
      description: "Sé el primero en acceder a lanzamientos limitados y experiencias exclusivas.",
    },
    freeShipping: {
      title: "Envío Gratis",
      description: "Envío gratuito en todos los pedidos superiores a $150 dentro del país.",
    },
    vipExperiences: {
      title: "Experiencias VIP",
      description: "Invitaciones a eventos exclusivos para miembros, degustaciones y cenas con expertos.",
    },
    quarterlySelections: {
      title: "Selecciones Trimestrales",
      description: "Recibe selecciones de temporada cuidadosamente elegidas entregadas en tu puerta.",
    },
    popularBadge: "Popular",
    learnMore: "Saber Más",
  },
  faq: {
    sectionTitle: "Preguntas",
    sectionTitleItalic: "Frecuentes",
    sectionDescription: "Encuentra respuestas a preguntas comunes sobre nuestro programa de membresía.",
    question1: "¿Cómo me uno al Club?",
    answer1:
      "¡Unirse es simple! Haz clic en el botón 'Únete Ahora' y completa el formulario de registro. La membresía es gratuita y comenzarás a disfrutar de los beneficios inmediatamente.",
    question2: "¿Cuál es el costo de la membresía?",
    answer2:
      "La membresía al Club es completamente gratuita. No hay cuotas anuales ni costos ocultos. Solo pagas por los productos que elijas comprar.",
    question3: "¿Cómo funciona la selección trimestral?",
    answer3:
      "Cada trimestre, nuestro equipo selecciona 6 productos que muestran lo mejor de la temporada. Puedes personalizar tu selección o saltarte cualquier trimestre sin obligación.",
    question4: "¿Puedo cancelar mi membresía?",
    answer4:
      "Sí, puedes cancelar tu membresía en cualquier momento sin penalizaciones. Simplemente contacta a nuestro equipo de servicios para miembros o administra tu suscripción a través de tu cuenta.",
    question5: "¿Hacen envíos internacionales?",
    answer5:
      "Sí, enviamos a la mayoría de los países del mundo. Las tarifas de envío internacional varían según el destino. Los miembros reciben tarifas de envío internacional con descuento.",
    question6: "¿Cómo accedo a los eventos exclusivos para miembros?",
    answer6:
      "Como miembro, recibirás invitaciones por correo electrónico a eventos exclusivos. También puedes ver los próximos eventos en tu panel de miembro y confirmar tu asistencia directamente desde allí.",
  },
}

const clubEn: ClubDictionary = {
  hero: {
    subtitle: "Exclusive Membership",
    title: "Welcome to The Club",
    description: "Join our exclusive community of enthusiasts",
  },
  ctaBar: {
    joinNow: "Join Now",
    signIn: "Sign In",
  },
  benefits: {
    sectionTitle: "Member",
    sectionTitleItalic: "Benefits",
    sectionDescription:
      "Our Clan members enjoy exclusive access to rewards, offers and experiences, along with member-only pricing on all our products.",
    exclusivePricing: {
      title: "Exclusive Pricing",
      description: "Member-only pricing on all products every time you purchase.",
    },
    specialRewards: {
      title: "Special Rewards",
      description: "Receive exclusive gifts and seasonal offers curated just for our members.",
    },
    priorityAccess: {
      title: "Priority Access",
      description: "Be the first to access limited releases and exclusive experiences.",
    },
    freeShipping: {
      title: "Free Shipping",
      description: "Complimentary shipping on all orders over $150 within the country.",
    },
    vipExperiences: {
      title: "VIP Experiences",
      description: "Invitations to exclusive member-only events, tastings, and expert dinners.",
    },
    quarterlySelections: {
      title: "Quarterly Selections",
      description: "Receive handpicked seasonal selections delivered to your door.",
    },
    popularBadge: "Popular",
    learnMore: "Learn More",
  },
  faq: {
    sectionTitle: "Frequently",
    sectionTitleItalic: "Asked",
    sectionDescription: "Find answers to common questions about our membership program.",
    question1: "How do I join the Club?",
    answer1:
      "Joining is simple! Click the 'Join Now' button and complete the registration form. Membership is free and you'll start enjoying benefits immediately.",
    question2: "What is the cost of membership?",
    answer2:
      "Membership to the Club is completely free. There are no annual fees or hidden costs. You only pay for the products you choose to purchase.",
    question3: "How does the quarterly selection work?",
    answer3:
      "Each quarter, our team curates a selection of 6 products that showcase the best of the season. You can customize your selection or skip any quarter with no obligation.",
    question4: "Can I cancel my membership?",
    answer4:
      "Yes, you can cancel your membership at any time with no penalties. Simply contact our member services team or manage your subscription through your account.",
    question5: "Do you ship internationally?",
    answer5:
      "Yes, we ship to most countries worldwide. International shipping rates vary by destination. Members receive discounted international shipping rates.",
    question6: "How do I access member-only events?",
    answer6:
      "As a member, you'll receive email invitations to exclusive events. You can also view upcoming events in your member dashboard and RSVP directly from there.",
  },
}

const clubFr: ClubDictionary = {
  hero: {
    subtitle: "Adhésion Exclusive",
    title: "Bienvenue au Club",
    description: "Rejoignez notre communauté exclusive de passionnés",
  },
  ctaBar: {
    joinNow: "Rejoindre Maintenant",
    signIn: "Se Connecter",
  },
  benefits: {
    sectionTitle: "Avantages",
    sectionTitleItalic: "Membres",
    sectionDescription:
      "Nos membres du Clan bénéficient d'un accès exclusif aux récompenses, offres et expériences, ainsi que de prix réservés aux membres sur tous nos produits.",
    exclusivePricing: {
      title: "Prix Exclusifs",
      description: "Prix réservés aux membres sur tous les produits à chaque achat.",
    },
    specialRewards: {
      title: "Récompenses Spéciales",
      description: "Recevez des cadeaux exclusifs et des offres saisonnières sélectionnées pour nos membres.",
    },
    priorityAccess: {
      title: "Accès Prioritaire",
      description: "Soyez le premier à accéder aux sorties limitées et aux expériences exclusives.",
    },
    freeShipping: {
      title: "Livraison Gratuite",
      description: "Livraison gratuite sur toutes les commandes de plus de 150 $ dans le pays.",
    },
    vipExperiences: {
      title: "Expériences VIP",
      description: "Invitations à des événements exclusifs, dégustations et dîners avec des experts.",
    },
    quarterlySelections: {
      title: "Sélections Trimestrielles",
      description: "Recevez des sélections saisonnières soigneusement choisies livrées à votre porte.",
    },
    popularBadge: "Populaire",
    learnMore: "En Savoir Plus",
  },
  faq: {
    sectionTitle: "Questions",
    sectionTitleItalic: "Fréquentes",
    sectionDescription: "Trouvez des réponses aux questions courantes sur notre programme d'adhésion.",
    question1: "Comment rejoindre le Club?",
    answer1:
      "C'est simple! Cliquez sur le bouton 'Rejoindre Maintenant' et remplissez le formulaire d'inscription. L'adhésion est gratuite et vous commencerez à profiter des avantages immédiatement.",
    question2: "Quel est le coût de l'adhésion?",
    answer2:
      "L'adhésion au Club est entièrement gratuite. Il n'y a pas de frais annuels ni de coûts cachés. Vous ne payez que pour les produits que vous choisissez d'acheter.",
    question3: "Comment fonctionne la sélection trimestrielle?",
    answer3:
      "Chaque trimestre, notre équipe sélectionne 6 produits qui présentent le meilleur de la saison. Vous pouvez personnaliser votre sélection ou sauter n'importe quel trimestre sans obligation.",
    question4: "Puis-je annuler mon adhésion?",
    answer4:
      "Oui, vous pouvez annuler votre adhésion à tout moment sans pénalité. Contactez simplement notre équipe de services aux membres ou gérez votre abonnement via votre compte.",
    question5: "Livrez-vous à l'international?",
    answer5:
      "Oui, nous expédions dans la plupart des pays du monde. Les tarifs d'expédition internationale varient selon la destination. Les membres bénéficient de tarifs d'expédition internationale réduits.",
    question6: "Comment accéder aux événements réservés aux membres?",
    answer6:
      "En tant que membre, vous recevrez des invitations par e-mail aux événements exclusifs. Vous pouvez également consulter les événements à venir dans votre tableau de bord membre et confirmer votre présence directement.",
  },
}

const clubIt: ClubDictionary = {
  hero: {
    subtitle: "Iscrizione Esclusiva",
    title: "Benvenuto al Club",
    description: "Unisciti alla nostra comunità esclusiva di appassionati",
  },
  ctaBar: {
    joinNow: "Iscriviti Ora",
    signIn: "Accedi",
  },
  benefits: {
    sectionTitle: "Vantaggi",
    sectionTitleItalic: "Membri",
    sectionDescription:
      "I nostri membri del Clan godono di accesso esclusivo a premi, offerte ed esperienze, insieme a prezzi riservati ai membri su tutti i nostri prodotti.",
    exclusivePricing: {
      title: "Prezzi Esclusivi",
      description: "Prezzi riservati ai membri su tutti i prodotti ogni volta che acquisti.",
    },
    specialRewards: {
      title: "Premi Speciali",
      description: "Ricevi regali esclusivi e offerte stagionali selezionate per i nostri membri.",
    },
    priorityAccess: {
      title: "Accesso Prioritario",
      description: "Sii il primo ad accedere a rilasci limitati ed esperienze esclusive.",
    },
    freeShipping: {
      title: "Spedizione Gratuita",
      description: "Spedizione gratuita su tutti gli ordini superiori a $ 150 nel paese.",
    },
    vipExperiences: {
      title: "Esperienze VIP",
      description: "Inviti a eventi esclusivi per membri, degustazioni e cene con esperti.",
    },
    quarterlySelections: {
      title: "Selezioni Trimestrali",
      description: "Ricevi selezioni stagionali accuratamente selezionate consegnate alla tua porta.",
    },
    popularBadge: "Popolare",
    learnMore: "Scopri di Più",
  },
  faq: {
    sectionTitle: "Domande",
    sectionTitleItalic: "Frequenti",
    sectionDescription: "Trova risposte alle domande comuni sul nostro programma di iscrizione.",
    question1: "Come mi iscrivo al Club?",
    answer1:
      "L'iscrizione è semplice! Clicca sul pulsante 'Iscriviti Ora' e completa il modulo di registrazione. L'iscrizione è gratuita e inizierai a godere dei vantaggi immediatamente.",
    question2: "Qual è il costo dell'iscrizione?",
    answer2:
      "L'iscrizione al Club è completamente gratuita. Non ci sono quote annuali né costi nascosti. Paghi solo per i prodotti che scegli di acquistare.",
    question3: "Come funziona la selezione trimestrale?",
    answer3:
      "Ogni trimestre, il nostro team seleziona 6 prodotti che mostrano il meglio della stagione. Puoi personalizzare la tua selezione o saltare qualsiasi trimestre senza obbligo.",
    question4: "Posso cancellare la mia iscrizione?",
    answer4:
      "Sì, puoi cancellare la tua iscrizione in qualsiasi momento senza penali. Contatta semplicemente il nostro team di servizi per i membri o gestisci il tuo abbonamento tramite il tuo account.",
    question5: "Spedite a livello internazionale?",
    answer5:
      "Sì, spediamo nella maggior parte dei paesi del mondo. Le tariffe di spedizione internazionale variano a seconda della destinazione. I membri ricevono tariffe di spedizione internazionale scontate.",
    question6: "Come accedo agli eventi riservati ai membri?",
    answer6:
      "Come membro, riceverai inviti via email agli eventi esclusivi. Puoi anche visualizzare gli eventi imminenti nella tua dashboard membro e confermare la tua presenza direttamente da lì.",
  },
}

const clubDe: ClubDictionary = {
  hero: {
    subtitle: "Exklusive Mitgliedschaft",
    title: "Willkommen im Club",
    description: "Treten Sie unserer exklusiven Gemeinschaft von Enthusiasten bei",
  },
  ctaBar: {
    joinNow: "Jetzt Beitreten",
    signIn: "Anmelden",
  },
  benefits: {
    sectionTitle: "Mitglieder",
    sectionTitleItalic: "Vorteile",
    sectionDescription:
      "Unsere Clan-Mitglieder genießen exklusiven Zugang zu Belohnungen, Angeboten und Erlebnissen sowie mitgliederexklusive Preise auf alle unsere Produkte.",
    exclusivePricing: {
      title: "Exklusive Preise",
      description: "Mitgliederexklusive Preise auf alle Produkte bei jedem Kauf.",
    },
    specialRewards: {
      title: "Besondere Belohnungen",
      description:
        "Erhalten Sie exklusive Geschenke und saisonale Angebote, die speziell für unsere Mitglieder ausgewählt wurden.",
    },
    priorityAccess: {
      title: "Prioritätszugang",
      description:
        "Seien Sie der Erste, der Zugang zu limitierten Veröffentlichungen und exklusiven Erlebnissen erhält.",
    },
    freeShipping: {
      title: "Kostenloser Versand",
      description: "Kostenloser Versand bei allen Bestellungen über 150 $ innerhalb des Landes.",
    },
    vipExperiences: {
      title: "VIP-Erlebnisse",
      description: "Einladungen zu exklusiven Events nur für Mitglieder, Verkostungen und Expertenessen.",
    },
    quarterlySelections: {
      title: "Vierteljährliche Auswahl",
      description: "Erhalten Sie handverlesene saisonale Auswahlen direkt an Ihre Tür geliefert.",
    },
    popularBadge: "Beliebt",
    learnMore: "Mehr Erfahren",
  },
  faq: {
    sectionTitle: "Häufig",
    sectionTitleItalic: "Gestellte Fragen",
    sectionDescription: "Finden Sie Antworten auf häufige Fragen zu unserem Mitgliedschaftsprogramm.",
    question1: "Wie trete ich dem Club bei?",
    answer1:
      "Der Beitritt ist einfach! Klicken Sie auf die Schaltfläche 'Jetzt Beitreten' und füllen Sie das Registrierungsformular aus. Die Mitgliedschaft ist kostenlos und Sie beginnen sofort, die Vorteile zu genießen.",
    question2: "Was kostet die Mitgliedschaft?",
    answer2:
      "Die Mitgliedschaft im Club ist völlig kostenlos. Es gibt keine Jahresgebühren oder versteckten Kosten. Sie zahlen nur für die Produkte, die Sie kaufen möchten.",
    question3: "Wie funktioniert die vierteljährliche Auswahl?",
    answer3:
      "Jedes Quartal kuratiert unser Team eine Auswahl von 6 Produkten, die das Beste der Saison präsentieren. Sie können Ihre Auswahl anpassen oder jedes Quartal ohne Verpflichtung überspringen.",
    question4: "Kann ich meine Mitgliedschaft kündigen?",
    answer4:
      "Ja, Sie können Ihre Mitgliedschaft jederzeit ohne Strafen kündigen. Kontaktieren Sie einfach unser Mitgliederservice-Team oder verwalten Sie Ihr Abonnement über Ihr Konto.",
    question5: "Versenden Sie international?",
    answer5:
      "Ja, wir versenden in die meisten Länder weltweit. Die internationalen Versandkosten variieren je nach Ziel. Mitglieder erhalten ermäßigte internationale Versandkosten.",
    question6: "Wie erhalte ich Zugang zu mitgliederexklusiven Veranstaltungen?",
    answer6:
      "Als Mitglied erhalten Sie E-Mail-Einladungen zu exklusiven Veranstaltungen. Sie können auch bevorstehende Veranstaltungen in Ihrem Mitglieder-Dashboard anzeigen und direkt von dort aus zusagen.",
  },
}

const clubPt: ClubDictionary = {
  hero: {
    subtitle: "Associação Exclusiva",
    title: "Bem-vindo ao Clube",
    description: "Junte-se à nossa comunidade exclusiva de entusiastas",
  },
  ctaBar: {
    joinNow: "Junte-se Agora",
    signIn: "Entrar",
  },
  benefits: {
    sectionTitle: "Benefícios",
    sectionTitleItalic: "de Membro",
    sectionDescription:
      "Nossos membros do Clã desfrutam de acesso exclusivo a recompensas, ofertas e experiências, juntamente com preços exclusivos para membros em todos os nossos produtos.",
    exclusivePricing: {
      title: "Preços Exclusivos",
      description: "Preços exclusivos para membros em todos os produtos toda vez que você compra.",
    },
    specialRewards: {
      title: "Recompensas Especiais",
      description: "Receba presentes exclusivos e ofertas sazonais selecionadas especialmente para nossos membros.",
    },
    priorityAccess: {
      title: "Acesso Prioritário",
      description: "Seja o primeiro a ter acesso a lançamentos limitados e experiências exclusivas.",
    },
    freeShipping: {
      title: "Frete Grátis",
      description: "Frete gratuito em todos os pedidos acima de $ 150 dentro do país.",
    },
    vipExperiences: {
      title: "Experiências VIP",
      description: "Convites para eventos exclusivos para membros, degustações e jantares com especialistas.",
    },
    quarterlySelections: {
      title: "Seleções Trimestrais",
      description: "Receba seleções sazonais cuidadosamente escolhidas entregues na sua porta.",
    },
    popularBadge: "Popular",
    learnMore: "Saiba Mais",
  },
  faq: {
    sectionTitle: "Perguntas",
    sectionTitleItalic: "Frequentes",
    sectionDescription: "Encontre respostas para perguntas comuns sobre nosso programa de associação.",
    question1: "Como me junto ao Clube?",
    answer1:
      "Juntar-se é simples! Clique no botão 'Junte-se Agora' e complete o formulário de registro. A associação é gratuita e você começará a desfrutar dos benefícios imediatamente.",
    question2: "Qual é o custo da associação?",
    answer2:
      "A associação ao Clube é completamente gratuita. Não há taxas anuais ou custos ocultos. Você paga apenas pelos produtos que escolher comprar.",
    question3: "Como funciona a seleção trimestral?",
    answer3:
      "A cada trimestre, nossa equipe seleciona 6 produtos que mostram o melhor da temporada. Você pode personalizar sua seleção ou pular qualquer trimestre sem obrigação.",
    question4: "Posso cancelar minha associação?",
    answer4:
      "Sim, você pode cancelar sua associação a qualquer momento sem penalidades. Basta entrar em contato com nossa equipe de serviços para membros ou gerenciar sua assinatura através da sua conta.",
    question5: "Vocês enviam internacionalmente?",
    answer5:
      "Sim, enviamos para a maioria dos países do mundo. As taxas de envio internacional variam de acordo com o destino. Os membros recebem taxas de envio internacional com desconto.",
    question6: "Como acesso eventos exclusivos para membros?",
    answer6:
      "Como membro, você receberá convites por e-mail para eventos exclusivos. Você também pode visualizar eventos futuros em seu painel de membro e confirmar presença diretamente de lá.",
  },
}

const clubZh: ClubDictionary = {
  hero: {
    subtitle: "专属会员",
    title: "欢迎来到俱乐部",
    description: "加入我们的专属爱好者社区",
  },
  ctaBar: {
    joinNow: "立即加入",
    signIn: "登录",
  },
  benefits: {
    sectionTitle: "会员",
    sectionTitleItalic: "福利",
    sectionDescription: "我们的家族成员享有独家奖励、优惠和体验，以及所有产品的会员专享价格。",
    exclusivePricing: {
      title: "专属价格",
      description: "每次购买所有产品时享受会员专享价格。",
    },
    specialRewards: {
      title: "特别奖励",
      description: "获得专为会员精心挑选的独家礼品和季节性优惠。",
    },
    priorityAccess: {
      title: "优先访问",
      description: "率先获得限量发布和专属体验的机会。",
    },
    freeShipping: {
      title: "免费送货",
      description: "国内所有超过150美元的订单免费送货。",
    },
    vipExperiences: {
      title: "VIP体验",
      description: "专属会员活动、品鉴会和专家晚宴的邀请。",
    },
    quarterlySelections: {
      title: "季度精选",
      description: "接收精心挑选的季节性精选产品送货上门。",
    },
    popularBadge: "热门",
    learnMore: "了解更多",
  },
  faq: {
    sectionTitle: "常见",
    sectionTitleItalic: "问题",
    sectionDescription: "找到有关我们会员计划的常见问题的答案。",
    question1: "如何加入俱乐部？",
    answer1: "加入很简单！点击'立即加入'按钮并完成注册表格。会员资格是免费的，您将立即开始享受福利。",
    question2: "会员费用是多少？",
    answer2: "俱乐部会员资格完全免费。没有年费或隐藏费用。您只需支付您选择购买的产品费用。",
    question3: "季度精选如何运作？",
    answer3: "每个季度，我们的团队精选6种展示季节最佳产品。您可以自定义您的选择或无义务跳过任何季度。",
    question4: "我可以取消会员资格吗？",
    answer4: "是的，您可以随时取消会员资格，无需支付罚款。只需联系我们的会员服务团队或通过您的账户管理您的订阅。",
    question5: "你们提供国际配送吗？",
    answer5: "是的，我们配送到世界大多数国家。国际运费因目的地而异。会员享受折扣国际运费。",
    question6: "如何访问会员专属活动？",
    answer6: "作为会员，您将收到专属活动的电子邮件邀请。您还可以在会员仪表板中查看即将举行的活动并直接确认出席。",
  },
}

const clubJa: ClubDictionary = {
  hero: {
    subtitle: "限定会員制",
    title: "クラブへようこそ",
    description: "愛好家の限定コミュニティに参加しましょう",
  },
  ctaBar: {
    joinNow: "今すぐ参加",
    signIn: "サインイン",
  },
  benefits: {
    sectionTitle: "会員",
    sectionTitleItalic: "特典",
    sectionDescription:
      "クランメンバーは、報酬、オファー、体験への限定アクセスと、すべての製品の会員限定価格をお楽しみいただけます。",
    exclusivePricing: {
      title: "限定価格",
      description: "購入するたびにすべての製品で会員限定価格をご利用いただけます。",
    },
    specialRewards: {
      title: "特別報酬",
      description: "会員のために厳選された限定ギフトと季節のオファーを受け取ります。",
    },
    priorityAccess: {
      title: "優先アクセス",
      description: "限定リリースと限定体験に最初にアクセスできます。",
    },
    freeShipping: {
      title: "送料無料",
      description: "国内150ドル以上のすべての注文で送料無料。",
    },
    vipExperiences: {
      title: "VIP体験",
      description: "会員限定イベント、テイスティング、エキスパートディナーへの招待。",
    },
    quarterlySelections: {
      title: "四半期セレクション",
      description: "厳選された季節のセレクションを玄関先までお届けします。",
    },
    popularBadge: "人気",
    learnMore: "詳細を見る",
  },
  faq: {
    sectionTitle: "よくある",
    sectionTitleItalic: "質問",
    sectionDescription: "会員プログラムに関するよくある質問の回答を見つけます。",
    question1: "クラブに参加するにはどうすればよいですか？",
    answer1:
      "参加は簡単です！「今すぐ参加」ボタンをクリックして登録フォームを完了してください。会員資格は無料で、すぐに特典をお楽しみいただけます。",
    question2: "会員費用はいくらですか？",
    answer2:
      "クラブの会員資格は完全に無料です。年会費や隠れた費用はありません。購入を選択した製品に対してのみお支払いいただきます。",
    question3: "四半期セレクションはどのように機能しますか？",
    answer3:
      "毎四半期、私たちのチームは季節の最高を紹介する6つの製品をキュレートします。選択をカスタマイズしたり、義務なしに任意の四半期をスキップしたりできます。",
    question4: "会員資格をキャンセルできますか？",
    answer4:
      "はい、いつでもペナルティなしで会員資格をキャンセルできます。会員サービスチームに連絡するか、アカウントを通じてサブスクリプションを管理してください。",
    question5: "国際配送はありますか？",
    answer5:
      "はい、世界中のほとんどの国に配送しています。国際配送料は目的地によって異なります。会員は割引国際配送料を受け取ります。",
    question6: "会員限定イベントにアクセスするにはどうすればよいですか？",
    answer6:
      "会員として、限定イベントへのメール招待状を受け取ります。会員ダッシュボードで今後のイベントを表示し、そこから直接出欠確認することもできます。",
  },
}

const clubRu: ClubDictionary = {
  hero: {
    subtitle: "Эксклюзивное членство",
    title: "Добро пожаловать в Клуб",
    description: "Присоединяйтесь к нашему эксклюзивному сообществу энтузиастов",
  },
  ctaBar: {
    joinNow: "Присоединиться",
    signIn: "Войти",
  },
  benefits: {
    sectionTitle: "Преимущества",
    sectionTitleItalic: "Членства",
    sectionDescription:
      "Наши члены Клана получают эксклюзивный доступ к наградам, предложениям и опыту, а также цены только для членов на все наши продукты.",
    exclusivePricing: {
      title: "Эксклюзивные цены",
      description: "Цены только для членов на все продукты при каждой покупке.",
    },
    specialRewards: {
      title: "Особые награды",
      description: "Получайте эксклюзивные подарки и сезонные предложения, подобранные специально для наших членов.",
    },
    priorityAccess: {
      title: "Приоритетный доступ",
      description: "Будьте первым, кто получит доступ к ограниченным выпускам и эксклюзивным впечатлениям.",
    },
    freeShipping: {
      title: "Бесплатная доставка",
      description: "Бесплатная доставка на все заказы свыше 150 $ по стране.",
    },
    vipExperiences: {
      title: "VIP-впечатления",
      description: "Приглашения на эксклюзивные мероприятия только для членов, дегустации и ужины с экспертами.",
    },
    quarterlySelections: {
      title: "Квартальные подборки",
      description: "Получайте тщательно отобранные сезонные подборки с доставкой к вашей двери.",
    },
    popularBadge: "Популярно",
    learnMore: "Узнать больше",
  },
  faq: {
    sectionTitle: "Часто задаваемые",
    sectionTitleItalic: "Вопросы",
    sectionDescription: "Найдите ответы на распространенные вопросы о нашей программе членства.",
    question1: "Как мне присоединиться к Клубу?",
    answer1:
      "Присоединиться просто! Нажмите кнопку 'Присоединиться' и заполните регистрационную форму. Членство бесплатное, и вы сразу начнете пользоваться преимуществами.",
    question2: "Какова стоимость членства?",
    answer2:
      "Членство в Клубе совершенно бесплатное. Нет никаких годовых взносов или скрытых расходов. Вы платите только за продукты, которые решите приобрести.",
    question3: "Как работает квартальная подборка?",
    answer3:
      "Каждый квартал наша команда подбирает 6 продуктов, которые демонстрируют лучшее в сезоне. Вы можете настроить свой выбор или пропустить любой квартал без обязательств.",
    question4: "Могу ли я отменить свое членство?",
    answer4:
      "Да, вы можете отменить свое членство в любое время без штрафов. Просто свяжитесь с нашей службой поддержки членов или управляйте своей подпиской через свою учетную запись.",
    question5: "Вы осуществляете международную доставку?",
    answer5:
      "Да, мы доставляем в большинство стран мира. Тарифы на международную доставку варьируются в зависимости от пункта назначения. Члены получают скидки на международную доставку.",
    question6: "Как получить доступ к мероприятиям только для членов?",
    answer6:
      "Как член, вы будете получать приглашения по электронной почте на эксклюзивные мероприятия. Вы также можете просматривать предстоящие события в панели управления членов и подтверждать свое участие прямо оттуда.",
  },
}

export function getClubDictionary(locale: Locale): ClubDictionary {
  const dictionaries: Record<Locale, ClubDictionary> = {
    es: clubEs,
    en: clubEn,
    fr: clubFr,
    it: clubIt,
    de: clubDe,
    pt: clubPt,
    zh: clubZh,
    ja: clubJa,
    ru: clubRu,
  }

  return dictionaries[locale] || clubEs
}
