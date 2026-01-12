// Mock data for ÚZPF validation
// Sample records for testing valid-cislo-uzpf endpoint

const uzpfData = {
  "1": {
    cisloUzpf: "1",
    valid: true,
    cisloUzpfNnkp: 1,
    druhNkp: "NNKP",
    nazovNkp: "rodný dom J.N.Batku",
    unifikovanyNazov: "DOM MEŠTIANSKY PAMÄTNÝ",
    zauzivanyNazov: "rodný dom J.N.Batku",
    okresNazov: ["Bratislava I"],
    obecNazov: ["Bratislava-Staré Mesto"],
    katastralneUzemieNazov: ["Staré Mesto (Bratislava-Staré Mesto)"],
    adresaUzemieNazov: ["Bratislava-Staré Mesto"]
  },
  "2": {
    cisloUzpf: "2",
    valid: true,
    cisloUzpfNnkp: 2,
    druhNkp: "NNKP",
    nazovNkp: "Bratislavský hrad",
    unifikovanyNazov: "HRAD",
    zauzivanyNazov: "Bratislavský hrad",
    okresNazov: ["Bratislava I"],
    obecNazov: ["Bratislava-Staré Mesto"],
    katastralneUzemieNazov: ["Staré Mesto (Bratislava-Staré Mesto)"],
    adresaUzemieNazov: ["Bratislava-Staré Mesto"]
  },
  "100": {
    cisloUzpf: "100",
    valid: true,
    cisloUzpfNnkp: 100,
    druhNkp: "NNKP",
    nazovNkp: "Kostol sv. Martina",
    unifikovanyNazov: "KOSTOL RÍMSKOKATOLÍCKY",
    zauzivanyNazov: "Kostol sv. Martina",
    okresNazov: ["Bratislava I"],
    obecNazov: ["Bratislava-Staré Mesto"],
    katastralneUzemieNazov: ["Staré Mesto (Bratislava-Staré Mesto)"],
    adresaUzemieNazov: ["Bratislava-Staré Mesto"]
  },
  "500": {
    cisloUzpf: "500",
    valid: true,
    cisloUzpfNnkp: 500,
    druhNkp: "NNKP",
    nazovNkp: "Spišský hrad",
    unifikovanyNazov: "HRAD",
    zauzivanyNazov: "Spišský hrad",
    okresNazov: ["Levoča"],
    obecNazov: ["Žehra"],
    katastralneUzemieNazov: ["Žehra (okres Levoča)"],
    adresaUzemieNazov: ["Žehra"]
  },
  "1000": {
    cisloUzpf: "1000",
    valid: true,
    cisloUzpfNnkp: 1000,
    druhNkp: "KP",
    nazovNkp: "Pamätná tabuľa M.R. Štefánika",
    unifikovanyNazov: "PAMÄTNÁ TABUĽA",
    zauzivanyNazov: "Pamätná tabuľa M.R. Štefánika",
    okresNazov: ["Bratislava I"],
    obecNazov: ["Bratislava-Staré Mesto"],
    katastralneUzemieNazov: ["Staré Mesto (Bratislava-Staré Mesto)"],
    adresaUzemieNazov: ["Bratislava-Staré Mesto"]
  },
  "2000": {
    cisloUzpf: "2000",
    valid: true,
    cisloUzpfNnkp: 2000,
    druhNkp: "NNKP",
    nazovNkp: "Oravský hrad",
    unifikovanyNazov: "HRAD",
    zauzivanyNazov: "Oravský hrad",
    okresNazov: ["Dolný Kubín"],
    obecNazov: ["Oravský Podzámok"],
    katastralneUzemieNazov: ["Oravský Podzámok (okres Dolný Kubín)"],
    adresaUzemieNazov: ["Oravský Podzámok"]
  },
  "5000": {
    cisloUzpf: "5000",
    valid: true,
    cisloUzpfNnkp: 5000,
    druhNkp: "NNKP",
    nazovNkp: "Trenčiansky hrad",
    unifikovanyNazov: "HRAD",
    zauzivanyNazov: "Trenčiansky hrad",
    okresNazov: ["Trenčín"],
    obecNazov: ["Trenčín"],
    katastralneUzemieNazov: ["Trenčín (okres Trenčín)"],
    adresaUzemieNazov: ["Trenčín"]
  },
  "10000": {
    cisloUzpf: "10000",
    valid: true,
    cisloUzpfNnkp: 10000,
    druhNkp: "NNKP",
    nazovNkp: "Bojnický zámok",
    unifikovanyNazov: "ZÁMOK",
    zauzivanyNazov: "Bojnický zámok",
    okresNazov: ["Prievidza"],
    obecNazov: ["Bojnice"],
    katastralneUzemieNazov: ["Bojnice (okres Prievidza)"],
    adresaUzemieNazov: ["Bojnice"]
  }
};

module.exports = uzpfData;
