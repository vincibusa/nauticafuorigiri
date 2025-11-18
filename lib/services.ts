export interface Service {
  slug: string
  title: string
  shortDescription: string
  description: string
  image: string
  features: string[]
  detailedContent?: {
    overview: string
    whyChooseUs?: string[]
    process?: {
      title: string
      steps: string[]
    }
    faq?: {
      question: string
      answer: string
    }[]
  }
}

export const services: Service[] = [
  {
    slug: "assistenza-mobile",
    title: "Assistenza Mobile in Tutta Italia",
    shortDescription:
      "Disponiamo di un officina mobile dotata di tutte le attrezzature necessarie per la manutenzione e riparazione. Siamo in grado di prestarvi assistenza in tutta Italia, portando la nostra professionalità direttamente da voi.",
    description:
      "La nostra officina mobile è completamente attrezzata con tutte le strumentazioni professionali necessarie per intervenire direttamente sul posto. Non importa dove si trovi la tua imbarcazione: portiamo la nostra esperienza e competenza direttamente da te, risparmiandoti il costo e lo stress del trasporto.",
    image: "/assistenza-mobile.jpeg",
    features: [
      "Officina mobile completamente attrezzata",
      "Interventi su tutto il territorio italiano",
      "Attrezzature professionali",
      "Interventi rapidi e efficienti",
      "Personale qualificato e certificato",
      "Preventivo gratuito e trasparente",
    ],
    detailedContent: {
      overview:
        "Il nostro servizio di assistenza mobile ti permette di ricevere interventi professionali direttamente dove si trova la tua imbarcazione. Con un'officina mobile completamente attrezzata, siamo in grado di risolvere la maggior parte dei problemi senza dover spostare la barca.",
      whyChooseUs: [
        "Risparmio di tempo e denaro: non devi trasportare la barca",
        "Interventi rapidi: interveniamo entro 24-48 ore dalla richiesta",
        "Attrezzature professionali: tutto il necessario per interventi completi",
        "Personale certificato: tecnici specializzati con anni di esperienza",
        "Copertura nazionale: operiamo in tutta Italia",
      ],
      process: {
        title: "Come Funziona",
        steps: [
          "Contattaci telefonicamente o via email descrivendo il problema",
          "Ti forniamo un preventivo gratuito e trasparente",
          "Concordiamo data e ora per l'intervento",
          "Il nostro tecnico arriva con l'officina mobile",
          "Eseguiamo l'intervento direttamente sul posto",
          "Verifica finale e documentazione dell'intervento",
        ],
      },
      faq: [
        {
          question: "Quanto tempo ci vuole per un intervento mobile?",
          answer:
            "Dipende dal tipo di intervento. La maggior parte dei problemi comuni può essere risolta in 2-4 ore direttamente sul posto. Per interventi più complessi, possiamo valutare insieme la soluzione migliore.",
        },
        {
          question: "Cosa include l'officina mobile?",
          answer:
            "La nostra officina mobile è dotata di tutte le attrezzature necessarie per interventi su motori, sistemi elettrici, idraulici e meccanici. Portiamo con noi strumenti diagnostici professionali, attrezzi specializzati e ricambi comuni.",
        },
        {
          question: "Quanto costa il servizio mobile?",
          answer:
            "Il costo varia in base al tipo di intervento e alla distanza. Forniamo sempre un preventivo gratuito e dettagliato prima di procedere. Il servizio mobile può risultare più economico rispetto al trasporto della barca.",
        },
      ],
    },
  },
  {
    slug: "manutenzione-riparazione-barche",
    title: "Manutenzione e Riparazione Barche",
    shortDescription:
      "Servizi completi di riparazione e manutenzione per imbarcazioni di ogni genere, dalla grande alla piccina. La nostra esperienza ci permette di affrontare qualsiasi tipo di intervento con professionalità e competenza.",
    description:
      "Offriamo servizi completi di manutenzione e riparazione per imbarcazioni di ogni tipo e dimensione. La nostra esperienza pluriennale nel settore nautico ci permette di affrontare qualsiasi tipo di intervento, dalla manutenzione ordinaria alle riparazioni più complesse.",
    image: "/riparazione-piedi-poppieri.jpeg",
    features: [
      "Riparazione imbarcazioni di ogni dimensione",
      "Manutenzione ordinaria e straordinaria",
      "Riparazione scafi e carene",
      "Sistemi elettrici e idraulici",
      "Riparazione timoni e sistemi di governo",
      "Manutenzione preventiva programmata",
    ],
    detailedContent: {
      overview:
        "La manutenzione regolare è essenziale per mantenere la tua imbarcazione in perfetto stato e garantire sicurezza e affidabilità. Offriamo servizi completi che coprono tutti gli aspetti della manutenzione e riparazione nautica.",
      whyChooseUs: [
        "Esperienza pluriennale nel settore nautico",
        "Officina attrezzata con strumenti professionali",
        "Tecnici specializzati e certificati",
        "Interventi su imbarcazioni di ogni dimensione",
        "Garanzia su tutti i lavori eseguiti",
        "Preventivi chiari e trasparenti",
      ],
      process: {
        title: "Il Nostro Processo",
        steps: [
          "Ispezione completa dell'imbarcazione",
          "Diagnosi del problema o valutazione stato generale",
          "Preventivo dettagliato con tempi e costi",
          "Approvazione e programmazione intervento",
          "Esecuzione lavori con materiali di qualità",
          "Collaudo e verifica funzionamento",
          "Consegna e documentazione completa",
        ],
      },
      faq: [
        {
          question: "Quanto spesso devo fare la manutenzione della mia barca?",
          answer:
            "La frequenza dipende dall'uso e dal tipo di imbarcazione. Generalmente consigliamo una manutenzione annuale completa prima della stagione, più controlli periodici durante l'uso intensivo.",
        },
        {
          question: "Fate interventi su barche di tutte le dimensioni?",
          answer:
            "Sì, lavoriamo su imbarcazioni di ogni dimensione, dai gommoni alle barche da diporto più grandi. Disponiamo di attrezzature e spazi adeguati per ogni tipo di intervento.",
        },
        {
          question: "Quanto tempo ci vuole per una riparazione?",
          answer:
            "I tempi variano in base alla complessità dell'intervento. Per riparazioni semplici possiamo completare in pochi giorni, mentre per interventi più complessi possiamo richiedere alcune settimane. Ti forniamo sempre una stima precisa nel preventivo.",
        },
      ],
    },
  },
  {
    slug: "riparazione-rifacimento-motori",
    title: "Riparazione e Rifacimento Motori",
    shortDescription:
      "Specializzati nella riparazione di piedi poppieri e motori entrofuoribordo. Ripariamo e rifacciamo a nuovo motori entrobordo, entrofuoribordo e fuoribordo di tutte le marche con competenza e professionalità.",
    description:
      "Siamo specializzati nella riparazione e rifacimento completo di motori nautici di ogni tipo e marca. La nostra esperienza ci permette di intervenire su motori entrobordo, entrofuoribordo e fuoribordo, garantendo sempre la massima qualità e affidabilità.",
    image: "/rip-motori.jpeg",
    features: [
      "Riparazione piedi poppieri",
      "Riparazione motori entrofuoribordo",
      "Riparazione motori entrobordo",
      "Riparazione motori fuoribordo tutte le marche",
      "Rifacimento motori a nuovo",
      "Diagnostica avanzata",
      "Revisione completa motore",
      "Sostituzione componenti originali",
    ],
    detailedContent: {
      overview:
        "La riparazione e manutenzione dei motori nautici richiede competenze specializzate e attrezzature professionali. Siamo in grado di intervenire su qualsiasi tipo di motore, dalle piccole riparazioni ai rifacimenti completi.",
      whyChooseUs: [
        "Specializzazione esclusiva su motori nautici",
        "Ricambi originali e di qualità garantita",
        "Diagnostica computerizzata avanzata",
        "Rifacimenti completi con garanzia",
        "Concessionari autorizzati MERCURY, MERCRUISER, SELVA, YANMAR",
        "Esperienza su tutte le marche",
      ],
      process: {
        title: "Processo di Riparazione",
        steps: [
          "Diagnostica completa con strumenti professionali",
          "Identificazione del problema e cause",
          "Preventivo dettagliato con opzioni di riparazione",
          "Smontaggio e ispezione approfondita",
          "Riparazione o sostituzione componenti",
          "Assemblaggio e regolazione",
          "Collaudo completo e test in acqua",
          "Garanzia e documentazione",
        ],
      },
      faq: [
        {
          question: "Quanto costa rifare un motore?",
          answer:
            "Il costo dipende dal tipo di motore e dall'entità del danno. Per un rifacimento completo può variare da 2.000€ a 10.000€ o più, a seconda del motore. Forniamo sempre preventivi dettagliati prima di procedere.",
        },
        {
          question: "Quanto tempo ci vuole per riparare un motore?",
          answer:
            "Per riparazioni semplici possono bastare pochi giorni. Per rifacimenti completi possono servire 2-4 settimane, a seconda della disponibilità dei ricambi e della complessità del lavoro.",
        },
        {
          question: "Fornite garanzia sui lavori?",
          answer:
            "Sì, forniamo garanzia su tutti i lavori eseguiti. La durata della garanzia varia in base al tipo di intervento e viene sempre specificata nel preventivo.",
        },
      ],
    },
  },
  {
    slug: "rimessaggio-ricovero-invernale",
    title: "Rimessaggio e Ricovero Invernale",
    shortDescription:
      "Servizio di rimessaggio sia al coperto che all'esterno. Disponiamo di un terreno di 30.000 mq con una struttura coperta di 410 mq per officina e rimessaggio, più 2 strutture esterne per rimessaggio al chiuso.",
    description:
      "Offriamo servizi completi di rimessaggio e ricovero invernale per la tua imbarcazione. Disponiamo di spazi coperti e scoperti, con la possibilità di eseguire manutenzioni durante il periodo di ricovero.",
    image: "/rimessaggio.jpeg",
    features: [
      "Rimessaggio coperto ed esterno",
      "Terreno di 30.000 mq",
      "Struttura coperta 410 mq",
      "2 strutture esterne per rimessaggio",
      "Posto barca da 50€/mese",
      "Manutenzione durante il ricovero",
      "Sorveglianza e sicurezza",
    ],
    detailedContent: {
      overview:
        "Il ricovero invernale è fondamentale per proteggere la tua imbarcazione dalle intemperie e mantenerla in perfetto stato. Offriamo spazi ampi e sicuri, con la possibilità di eseguire manutenzioni durante il periodo di ricovero.",
      whyChooseUs: [
        "Spazi ampi: 30.000 mq di terreno disponibile",
        "Opzioni flessibili: coperto o scoperto",
        "Prezzi competitivi: a partire da 50€/mese",
        "Manutenzione inclusa: possibilità di lavori durante il ricovero",
        "Sicurezza: area sorvegliata",
        "Convenienza: sconti per prenotazioni anticipate",
      ],
      process: {
        title: "Come Prenotare",
        steps: [
          "Contattaci per verificare disponibilità",
          "Scegli tra rimessaggio coperto o scoperto",
          "Concordiamo data di ingresso e uscita",
          "Preparazione barca per il ricovero",
          "Posizionamento nell'area dedicata",
          "Eventuale programmazione manutenzioni",
        ],
      },
      faq: [
        {
          question: "Quanto costa il rimessaggio?",
          answer:
            "Il costo parte da 50€/mese per il rimessaggio scoperto. Per il rimessaggio coperto i prezzi variano in base alla dimensione dell'imbarcazione. Forniamo sempre preventivi personalizzati.",
        },
        {
          question: "Posso fare manutenzioni durante il ricovero?",
          answer:
            "Sì, anzi lo consigliamo! Il periodo invernale è ideale per eseguire manutenzioni e riparazioni. Possiamo programmare insieme gli interventi necessari.",
        },
        {
          question: "L'area è sorvegliata?",
          answer:
            "Sì, l'area è sorvegliata e sicura. Le imbarcazioni sono protette e monitorate durante tutto il periodo di ricovero.",
        },
      ],
    },
  },
  {
    slug: "trasporto-imbarcazioni",
    title: "Trasporto Imbarcazioni",
    shortDescription:
      "Servizio di trasporto imbarcazioni in tutta Italia. Trasportiamo la tua barca in sicurezza e professionalità ovunque tu ne abbia bisogno, con attrezzature specializzate e personale esperto.",
    description:
      "Trasportiamo la tua imbarcazione in tutta Italia con sicurezza e professionalità. Utilizziamo attrezzature specializzate e personale esperto per garantire che la tua barca arrivi a destinazione in perfette condizioni.",
    image: "/trasporto.jpeg",
    features: [
      "Trasporto in tutta Italia",
      "Attrezzature specializzate",
      "Personale esperto e qualificato",
      "Trasporto sicuro e garantito",
      "Preventivo gratuito",
      "Assicurazione inclusa",
      "Tracciamento percorso",
    ],
    detailedContent: {
      overview:
        "Il trasporto di un'imbarcazione richiede competenze specifiche e attrezzature adeguate. Offriamo un servizio completo e professionale che garantisce la massima sicurezza per la tua barca durante tutto il trasporto.",
      whyChooseUs: [
        "Attrezzature specializzate per ogni tipo di imbarcazione",
        "Personale esperto con anni di esperienza",
        "Assicurazione completa inclusa",
        "Tracciamento in tempo reale del trasporto",
        "Preventivo gratuito e trasparente",
        "Assistenza durante tutto il percorso",
      ],
      process: {
        title: "Processo di Trasporto",
        steps: [
          "Richiesta preventivo con dettagli imbarcazione",
          "Valutazione percorso e modalità di trasporto",
          "Preventivo dettagliato con tempi e costi",
          "Approvazione e prenotazione",
          "Preparazione imbarcazione per il trasporto",
          "Caricamento su mezzo specializzato",
          "Trasporto con tracciamento continuo",
          "Scaricamento e consegna a destinazione",
        ],
      },
      faq: [
        {
          question: "Quanto costa trasportare una barca?",
          answer:
            "Il costo dipende dalla dimensione dell'imbarcazione, dalla distanza e dalla complessità del trasporto. Forniamo sempre preventivi gratuiti e dettagliati su richiesta.",
        },
        {
          question: "Quanto tempo ci vuole per il trasporto?",
          answer:
            "I tempi variano in base alla distanza. Per trasporti nazionali generalmente servono 1-3 giorni, a seconda della destinazione. Ti forniamo sempre una stima precisa nel preventivo.",
        },
        {
          question: "La barca è assicurata durante il trasporto?",
          answer:
            "Sì, tutte le imbarcazioni sono coperte da assicurazione completa durante tutto il trasporto. I dettagli dell'assicurazione sono inclusi nel preventivo.",
        },
      ],
    },
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug)
}

