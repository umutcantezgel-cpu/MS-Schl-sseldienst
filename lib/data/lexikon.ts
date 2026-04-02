export interface LexikonEntry {
  slug: string;
  title: string;
  definition: string;
  longDescription: string;
  category: "Sicherheitstechnik" | "Schlösser" | "Einbruchschutz" | "Werkzeuge";
  seoKeywords: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs?: string[];
}

export const lexikonData: LexikonEntry[] = [
  {
    slug: "profilzylinder",
    title: "Profilzylinder",
    category: "Schlösser",
    definition: "Der Profilzylinder, oft auch Euro-Profilzylinder genannt, ist das heute in Europa am weitesten verbreitete Sicherheitsschloss für Türen. Er hat die Form eines überdimensionalen Schlüssellochs.",
    longDescription: "Der Profilzylinder wurde 1928 von Sylvester Wöhrle erfunden. Die standardisierte Formgebung ermöglicht es, den Schließzylinder unabhängig vom Einsteckschloss zu tauschen. Innerhalb des Zylinders befinden sich federgelagerte Stiftpaare, die durch die Einkerbungen des Schlüssels in die korrekte Trennlinie gebracht werden, wodurch sich der Zylinder drehen lässt. Für den professionellen Einbruchschutz sind Profilzylinder mit Kernziehschutz, Bohrschutz und Schlagschlüsselschutz essenziell. MS Schlüsseldienst Wetzlar rät dringend von Baumarkt-Zylindern ohne VdS-Zertifizierung ab.",
    seoKeywords: ["Profilzylinder Wetzlar", "Schließzylinder austauschen", "Türschloss wechseln", "Euro-Profilzylinder Sicherheit"],
    faqs: [
      {
        question: "Wie messe ich einen Profilzylinder richtig aus?",
        answer: "Gemessen wird immer von der Mitte der Befestigungsschraube (Stulpschraube) bis zur Außenkante der jeweiligen Seite (inklusive Türbeschlag). Das Maß wird in Millimetern angegeben, z.B. 30/30 oder 35/45."
      },
      {
        question: "Kann jeder Profilzylinder ausgetauscht werden?",
        answer: "Ja, dank der Standardform lassen sich Profilzylinder problemlos tauschen. MS Schlüsseldienst Wetzlar bietet einen 24/7 Zylindertausch für alle gängigen Maße an."
      }
    ],
    relatedSlugs: ["kernziehschutz", "bohrschutz"]
  },
  {
    slug: "kernziehschutz",
    title: "Kernziehschutz",
    category: "Einbruchschutz",
    definition: "Ein Kernziehschutz (KZS) schützt den Profilzylinder davor, mittels spezieller Werkzeuge („Ziehfix“) samt Schließzylinder aus der Tür gezogen zu werden.",
    longDescription: "Die „Kernziehmethode“ (auch Korkenzieher-Methode) ist eine beliebte Arbeitsweise von Einbrechern. Dabei wird eine langlebige Zugschraube in den Schließzylinder gedreht. Anschließend wird der gesamte Zylinderkern mit extremem Hebelzug herausgebrochen. Ein Kernziehschutz besteht aus einer harten Stahlscheibe, die sich direkt vor dem Schlüsselloch befindet und nur einen schmalen Schlitz für den Schlüssel lässt. Der Schutzbeschlag aus massivem Stahl (z.B. VdS zertifiziert) macht diese Einbruchstechnik nahezu unmöglich.",
    seoKeywords: ["Kernziehschutz Wetzlar", "Sicherheitsbeschlag", "Einbruchschutz Ziehfix", "Profilzylinder schützen"],
    faqs: [
      {
        question: "Kann man Kernziehschutz nachrüsten?",
        answer: "Ja, Schutzbeschläge mit integrierter Zylinderabdeckung (Kernziehschutz) lassen sich an fast allen Haus- und Wohnungstüren nachrüsten."
      },
      {
        question: "Bietet mein MS Schlüsseldienst Kernziehschutz an?",
        answer: "Absolut. Unsere Sicherheitstechniker in Wetzlar rüsten Ihre Tür fachgerecht mit VdS-geprüften Schutzbeschlägen auf, um Einbruchversuche im Keim zu ersticken."
      }
    ],
    relatedSlugs: ["profilzylinder", "panzerriegel", "ziehfix"]
  },
  {
    slug: "ziehfix",
    title: "Ziehfix (Glocke)",
    category: "Werkzeuge",
    definition: "Der Ziehfix (auch „Knackrohr“ oder „Glocke“) ist ein professionelles Aufsperrwerkzeug, mit dem Schließzylinder herausgezogen oder gebrochen werden.",
    longDescription: "Ursprünglich für Feuerwehren und Schlüsseldienste entwickelt, um bei Notfällen schnell Türen öffnen zu können, wird das Werkzeug heute leider auch oft in der organisierten Kriminalität eingesetzt. Beim Einsatz durch den Fachmann (z.B. MS Schlüsseldienst Wetzlar) wird dieses Werkzeug nur verwendet, wenn zerstörungsfreie Methoden (wie Lockpicking) nicht greifen, da bei dieser Methode der Zylinder zerstört wird. Ein effektiver Schutz gegen diese Methode ist ein Sicherheitsbeschlag mit Kernziehschutz.",
    seoKeywords: ["Ziehfix Schlüsseldienst", "Türaufbruch Werkzeug", "Zylinder ziehen", "Zylinder aufbohren Wetzlar"],
    faqs: [
      {
        question: "Macht der Einsatz eines Ziehfix die Tür kaputt?",
        answer: "Der Schließzylinder wird zerstört und muss ersetzt werden. Bei fachgerechter Anwendung durch MS Schlüsseldienst bleibt das Einsteckschloss und das Türblatt jedoch vollständig intakt."
      }
    ],
    relatedSlugs: ["kernziehschutz", "profilzylinder"]
  },
  {
    slug: "bohrmulden-schluessel",
    title: "Bohrmuldenschlüssel (Wendeschlüssel)",
    category: "Schlösser",
    definition: "Ein Wendeschlüssel (Bohrmuldenschlüssel) besitzt keine gezackten Kanten, sondern kleine, in das Profil gefräste Vertiefungen (Bohrmulden).",
    longDescription: "Bohrmuldenschlüssel gelten als äußerst bedienfreundlich (sie können beidseitig eingesteckt werden) und bieten bauartbedingt ein höheres Schließgeheimnis. Durch die Kombination verschiedener Stiftebenen (oft 2 bis 3 Reihen) im Zylinder sind sie deutlich resistenter gegen Abtastung (Lockpicking) und Schlagschlüsseleinsätze. Hochwertige Sicherheitsschlüssel von Herstellern wie KESO, DOM oder BKS (im Raum Wetzlar über uns erhältlich) bieten zudem einen massiven Kopierschutz und werden oft als Schließanlagen mit Sicherungskarte ausgeliefert.",
    seoKeywords: ["Wendeschlüssel kopieren", "Bohrmulden Zylinder Wetzlar", "Hohe Sicherheit Türschloss", "Sicherungskarte"],
    faqs: [
      {
        question: "Sind Wendeschlüssel sicherer als Zackenschlüssel?",
        answer: "Oft ja. Hochwertige Bohrmuldenzylinder haben mehr Stifte in unterschiedlichen Winkeln, was Manipulationsmethoden wie das Lockpicking extrem erschwert."
      },
      {
        question: "Warum brauche ich eine Sicherungskarte?",
        answer: "Die Sicherungskarte garantiert, dass Nachschlüssel nur gegen Vorlage der Karte (z.B. bei MS Schlüsseldienst Wetzlar) gefertigt werden dürfen. Das schützt Mieter und Eigentümer vor illegalen Kopien."
      }
    ]
  },
  {
    slug: "panzerriegel",
    title: "Panzerriegel (Querriegel)",
    category: "Einbruchschutz",
    definition: "Ein Panzerriegelschloss sichert eine Tür über die gesamte Breite und wird tief im Mauerwerk auf der Schloss- und Scharnierseite verankert.",
    longDescription: "Er gilt als das Nonplusultra der mechanischen Nachrüstung. Wenn ein Täter versucht, die Tür aufzustemmen oder einzutreten, muss er nicht nur das normale Türschloss überwinden, sondern auch den Panzerriegel samt dem anliegenden Mauerwerk durchbrechen – ein Vorhaben, das Krach macht und viel Zeit kostet. Panzerriegel (z.B. von Abus) sind in Wetzlar besonders bei Wohnungen im Erdgeschoss oder freistehenden Häusern sehr begehrt.",
    seoKeywords: ["Panzerriegel Montage Wetzlar", "Querriegel einbauen", "Tür sichern", "Abus PR2700 Installation"],
    faqs: [
      {
        question: "Ist die Montage in jeder Tür möglich?",
        answer: "Panzerriegel eignen sich für fast alle Holz-, Metall- und Kunststofftüren. Wichtig ist eine massive Verankerung im umliegenden Mauerwerk."
      },
      {
        question: "Wie wird der Panzerriegel bedient?",
        answer: "Er wird bequem von innen über einen Drehknauf oder Schlüssel und von außen über denselben Sicherheitsschlüssel gesperrt."
      }
    ],
    relatedSlugs: ["mehrfachverriegelung", "kernziehschutz"]
  },
  {
    slug: "mehrfachverriegelung",
    title: "Mehrfachverriegelung",
    category: "Einbruchschutz",
    definition: "Eine Mehrfachverriegelung sperrt die Tür nicht nur an der Höhe des Schließzylinders, sondern gleichzeitig an mehreren Punkten (oben und unten) in der Zarge.",
    longDescription: "Während ein Standard-Einsteckschloss nur einen Riegel in die Zarge ausfährt, steuert die Mechanik einer Mehrfachverriegelung oft drei oder fünf Riegel an (z.B. Schwenkhaken oder Bolzen). Moderne Haustüren werden fast ausschließlich damit ausgestattet. MS Schlüsseldienst empfiehlt automatische Mehrfachverriegelungen, die beim einfachen Zuziehen der Tür automatisch greifen und somit einen elementaren Sicherheitsgewinn bewirken.",
    seoKeywords: ["Mehrfachverriegelung Reparatur Wetzlar", "Haustür 3-fach Verriegelung", "Automatische Türentriegelung"],
    faqs: [
      {
        question: "Kann eine Mehrfachverriegelung kaputt gehen?",
        answer: "Ja, durch Türverzug oder Verschleiß im Getriebe. Ist sie defekt, lässt sich die Tür oft gar nicht mehr öffnen. Unser Notdienst in Wetzlar kann solche Getriebe oft reparieren oder austauschen."
      }
    ],
    relatedSlugs: ["panzerriegel"]
  },
  {
    slug: "schlagschluessel",
    title: "Schlagschlüssel (Bump Key)",
    category: "Werkzeuge",
    definition: "Ein Schlagschlüssel ist ein manipulierter Schlüssel, der durch einen leichten Schlag auf den Schlüsselkopf die Stifte im Zylinder kurzzeitig in die Öffnungsposition springen lässt.",
    longDescription: "Die sogenannte Schlagschlüsseltechnik (Bumping) ist eine zerstörungsfreie Öffnungsmethode, die von Profis, leider aber auch von Einbrechern genutzt wird. Normale Stiftzylinder aus dem Baumarkt lassen sich so in oft weniger als 3 Sekunden geräuschlos öffnen. Um sich davor zu schützen, berät MS Schlüsseldienst Wetzlar zu speziellen Schließzylindern mit Schlagschlüsselschutz, bei denen die Stiftmechanik so konstruiert ist, dass sie physisch nicht 'gebumpt' werden kann.",
    seoKeywords: ["Schlagschlüssel Schutz Wetzlar", "Bumping Türschloss", "Zylinder manipulationssicher"],
    faqs: [
      {
        question: "Hinterlässt ein Schlagschlüssel Spuren?",
        answer: "Meistens kaum sichtbare. Für Laien und oft auch für die Polizei ist ein Einbruch mit einem Schlagschlüssel schwer von einem Einbruch mit Nachschlüssel zu unterscheiden. Das führt oft zu Problemen mit der Versicherung."
      }
    ],
    relatedSlugs: ["bohrmulden-schluessel", "profilzylinder"]
  },
  {
    slug: "einsteckschloss",
    title: "Einsteckschloss",
    category: "Schlösser",
    definition: "Das Einsteckschloss ist die mechanische Kassette (Schlosskasten), die unsichtbar im Türblatt eingelassen ist und die Riegel- und Fallenmechanik enthält.",
    longDescription: "Viele verwechseln das Türschloss mit dem Schließzylinder. Der Zylinder ist nur der Antrieb – das eigentliche Schloss ist das Einsteckschloss im Türblatt. Es überträgt die Drehbewegung des Schlüssels auf den Riegel (zum Abschließen) und die Klinkenbetätigung auf die Falle (zum Zuziehen). Ein defektes Einsteckschloss äußert sich oft durch eine 'durchdrehende' Türklinke. Wir von MS Schlüsseldienst haben stets alle gängigen Dornmaße (Entfernung zwischen Türkante und Schlüssellochmitte) in unseren Einsatzfahrzeugen im Lahn-Dill-Kreis vorrätig.",
    seoKeywords: ["Einsteckschloss wechseln Wetzlar", "Türschloss kaputt", "Dornmaß messen", "Falle klemmt"],
    faqs: [
      {
        question: "Wann muss ein Einsteckschloss getauscht werden?",
        answer: "Wenn die Türklinke hängt, sich die Tür sehr schwer abschließen lässt oder ein Riegel- bzw. Federbruch im Schlosskasten vorliegt."
      }
    ]
  },
  {
    slug: "beschlag",
    title: "Schutzbeschlag",
    category: "Einbruchschutz",
    definition: "Der (Sicherheits-)Schutzbeschlag ummantelt das Türschloss und den Profilzylinder von außen, um gewaltsames Abbrechen oder Anbohren zu verhindern.",
    longDescription: "Normale Türschilder dienen nur der Optik. Ein geprüfter Schutzbeschlag (nach DIN oder VdS) besteht aus massivem Stahl. Er schützt den Schließzylinder davor, mit einer Zange gefasst und abgebrochen zu werden. Für Haustüren in Wetzlar empfehlen wir ausschließlich Schutzbeschläge, die von innen verschraubt sind, sodass Täter von außen keine Schrauben lösen können.",
    seoKeywords: ["Schutzbeschlag Wetzlar", "Haustürbeschlag wechseln", "Sicherheitsrosette"],
    faqs: [
      {
        question: "Sollte der Zylinder bündig mit dem Beschlag abschließen?",
        answer: "Ja, der Profilzylinder darf auf der Außenseite maximal 3 Millimeter überstehen. Zylinder, die weiter herausragen, bieten Einbrechern fatale Angriffsfläche zum Abknicken."
      }
    ],
    relatedSlugs: ["kernziehschutz", "profilzylinder"]
  },
  {
    slug: "buntbartschloss",
    title: "Buntbartschloss",
    category: "Schlösser",
    definition: "Das Buntbartschloss ist das klassische Zimmertürschloss, dessen Sperrprinzip auf einem einfachen, gebogenen Schlüsselbart beruht.",
    longDescription: "Aufgrund ihrer sehr geringen Sicherheit werden Buntbartschlösser heutzutage fast ausschließlich für Innentüren eingesetzt. Es gibt in Deutschland etwa 70 standardisierte Schweifungen (Schlüsselformen). Bei MS Schlüsseldienst fertigen wir entsprechende Innentüren-Nachschlüssel oder öffnen zugefallene Zimmertüren (z. B. wenn das Kind sich eingesperrt hat) innerhalb von Sekunden, komplett beschädigungsfrei.",
    seoKeywords: ["Zimmertürschloss Wetzlar", "Buntbartschlüssel nachmachen", "Zimmertür öffnen"],
    faqs: [
      {
        question: "Darf ein Buntbartschloss an Wohnungstüren verbaut sein?",
        answer: "Nein, Buntbartschlösser bieten keinen Einbruchschutz und werden von Versicherungen bei Haus- oder Wohnungseingangstüren nicht akzeptiert."
      }
    ]
  },
  {
    slug: "schliessanlage",
    title: "Gleichschließende Anlage",
    category: "Schlösser",
    definition: "Eine gleichschließende Anlage ermöglicht es, mehrere unterschiedliche Schlösser (z. B. Haustür, Briefkasten, Garagentor) mit nur einem einzigen Schlüssel zu bedienen.",
    longDescription: "Anders als bei komplexen Z- oder HS-Anlagen (Zentralschloss/Hauptschlüssel), bei denen unterschiedliche Berechtigungen vergeben werden, sind bei gleichschließenden Schlössern alle Zylinder baugleich gekerbt. Das bedeutet ultimativen Komfort für Eigenheimbesitzer: Der dicke Schlüsselbund wird durch einen einzigen Hightech-Schlüssel ersetzt. MS Schlüsseldienst plant, vermisst und installiert solche Systeme für Eigenheime in Wetzlar, Braunfels und Aßlar inklusive Sicherungskarte zum Schutz vor unberechtigten Schlüsselkopien.",
    seoKeywords: ["Gleichschließende Zylinder Wetzlar", "Schließanlage Einfamilienhaus", "Ein Schlüssel für Alles"],
    faqs: [
      {
        question: "Ist eine gleichschließende Anlage teurer im Unterhalt?",
        answer: "Die Anschaffung ist etwas teurer als Einzelzylinder, aber der Komfortgewinn ist enorm. Zudem sparen Sie Geld bei der Schlüsselkopie, da ein Schlüssel für alle Türen reicht."
      }
    ],
    relatedSlugs: ["bohrmulden-schluessel", "profilzylinder"]
  }
];
