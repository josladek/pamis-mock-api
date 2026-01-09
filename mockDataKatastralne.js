// Mock data for Slovak cadastral territories - CL000026_KATASTRALNE_UZEMIE
// DataTables format matching PAMIS API response
// Total: 3559 cadastral territories

const katastralneData = [
  [
    "326511226800015",
    "Ábelová (okres Lučenec)",
    "",
    ""
  ],
  [
    "329557757800040",
    "Abovce (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "212503673800058",
    "Abrahám (okres Galanta)",
    "",
    ""
  ],
  [
    "411519014800066",
    "Abrahámovce (okres Bardejov)",
    "",
    ""
  ],
  [
    "413523399800074",
    "Abrahámovce (okres Kežmarok)",
    "",
    ""
  ],
  [
    "319512044800091",
    "Abramová (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "417524158800112",
    "Abranovce (okres Prešov)",
    "",
    ""
  ],
  [
    "229505838800121",
    "Adamovské Kochanovce (okres Trenčín)",
    "",
    ""
  ],
  [
    "412520012800155",
    "Adidovce (okres Humenné)",
    "",
    ""
  ],
  [
    "233500020800163",
    "Alekšince (okres Nitra)",
    "",
    ""
  ],
  [
    "211501697826740",
    "Amadeho Kračany (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "233500950800180",
    "Andač (okres Nitra)",
    "",
    ""
  ],
  [
    "234503029800198",
    "Andovce (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "411519022800201",
    "Andrejová (okres Bardejov)",
    "",
    ""
  ],
  [
    "236556220800236",
    "Ardanovce (okres Topoľčany)",
    "",
    ""
  ],
  [
    "428525537800252",
    "Ardovo (okres Rožňava)",
    "",
    ""
  ],
  [
    "42A526363800261",
    "Arnutovce (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "41D544060800309",
    "Babie (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "317509558800317",
    "Babín (okres Námestovo)",
    "",
    ""
  ],
  [
    "32B518166800333",
    "Babiná (okres Zvolen)",
    "",
    ""
  ],
  [
    "233581623800341",
    "Babindol (okres Nitra)",
    "",
    ""
  ],
  [
    "329514489800350",
    "Babinec (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "417525294800325",
    "Babin Potok (okres Prešov)",
    "",
    ""
  ],
  [
    "31B517755800376",
    "Babkov (okres Žilina)",
    "",
    ""
  ],
  [
    "315510921845728",
    "Babky (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "323508446800384",
    "Bacúch (okres Brezno)",
    "",
    ""
  ],
  [
    "32B518174800392",
    "Bacúrov (okres Zvolen)",
    "",
    ""
  ],
  [
    "211501441800406",
    "Báč (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "42B528102800414",
    "Bačka (okres Trebišov)",
    "",
    ""
  ],
  [
    "42B528111800422",
    "Bačkov (okres Trebišov)",
    "",
    ""
  ],
  [
    "426521141800431",
    "Bačkovík (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "325518425800457",
    "Báčovce (okres Krupina)",
    "",
    ""
  ],
  [
    "322516601800465",
    "Baďan (okres Banská Štiavnica)",
    "",
    ""
  ],
  [
    "233582697847267",
    "Bádice (okres Nitra)",
    "",
    ""
  ],
  [
    "321508454800473",
    "Badín (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "107507806800481",
    "Báhoň (okres Pezinok)",
    "",
    ""
  ],
  [
    "427522287800490",
    "Bajany (okres Michalovce)",
    "",
    ""
  ],
  [
    "231501034800503",
    "Bajč (okres Komárno)",
    "",
    ""
  ],
  [
    "417524174800554",
    "Bajerov (okres Prešov)",
    "",
    ""
  ],
  [
    "418524182800562",
    "Bajerovce (okres Sabinov)",
    "",
    ""
  ],
  [
    "232502049800571",
    "Bajka (okres Levice)",
    "",
    ""
  ],
  [
    "234503037800589",
    "Bajtava (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "211501450800597",
    "Baka (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "329514462800601",
    "Bakta (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "321508471800619",
    "Baláže (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "414526371800627",
    "Baldovce (okres Levoča)",
    "",
    ""
  ],
  [
    "32A515868800635",
    "Balog nad Ipľom (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "211501468800643",
    "Baloň (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "41B527114800651",
    "Baňa (okres Stropkov)",
    "",
    ""
  ],
  [
    "214581399800678",
    "Banka (okres Piešťany)",
    "",
    ""
  ],
  [
    "322516643800708",
    "Banky (okres Banská Štiavnica)",
    "",
    ""
  ],
  [
    "227513962800694",
    "Banky (okres Prievidza)",
    "",
    ""
  ],
  [
    "234503045800724",
    "Bánov (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "31B517402800759",
    "Bánová (okres Žilina)",
    "",
    ""
  ],
  [
    "221542652800805",
    "Bánovce nad Bebravou (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "427522295801011",
    "Bánovce nad Ondavou (okres Michalovce)",
    "",
    ""
  ],
  [
    "322516627801038",
    "Banská Belá (okres Banská Štiavnica)",
    "",
    ""
  ],
  [
    "321508438801062",
    "Banská Bystrica (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "32C516759801461",
    "Banská Hodruša (okres Žarnovica)",
    "",
    ""
  ],
  [
    "322516643801470",
    "Banská Štiavnica (okres Banská Štiavnica)",
    "",
    ""
  ],
  [
    "41D544078801640",
    "Banské (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "322516651801658",
    "Banský Studenec (okres Banská Štiavnica)",
    "",
    ""
  ],
  [
    "329514501801691",
    "Barca (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "425599093827380",
    "Barca (okres Košice IV)",
    "",
    ""
  ],
  [
    "411519006801712",
    "Bardejov (okres Bardejov)",
    "",
    ""
  ],
  [
    "411519006802077",
    "Bardejovská Nová Ves (okres Bardejov)",
    "",
    ""
  ],
  [
    "234503053802093",
    "Bardoňovo (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "32D516660802107",
    "Bartošova Lehôtka (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "411519049802115",
    "Bartošovce (okres Bardejov)",
    "",
    ""
  ],
  [
    "426521159802123",
    "Baška (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "429522309802158",
    "Baškovce (okres Sobrance)",
    "",
    ""
  ],
  [
    "412520021802140",
    "Baškovce (okres Humenné)",
    "",
    ""
  ],
  [
    "214558354802166",
    "Bašovce (okres Piešťany)",
    "",
    ""
  ],
  [
    "225542733803901",
    "Baštín (okres Partizánske)",
    "",
    ""
  ],
  [
    "416523402802174",
    "Batizovce (okres Poprad)",
    "",
    ""
  ],
  [
    "329514519802191",
    "Bátka (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "32A515876802212",
    "Bátorová (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "231501395870081",
    "Bátorove Kosihy (okres Komárno)",
    "",
    ""
  ],
  [
    "232502057802221",
    "Bátovce (okres Levice)",
    "",
    ""
  ],
  [
    "106500267991970",
    "Bažantnica (okres Malacky)",
    "",
    ""
  ],
  [
    "224505846802255",
    "Beckov (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "224506125825085",
    "Beckovská Vieska (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "321508977854468",
    "Bečov (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "414526380802263",
    "Beharovce (okres Levoča)",
    "",
    ""
  ],
  [
    "236505714802271",
    "Behynce (okres Topoľčany)",
    "",
    ""
  ],
  [
    "328515612802280",
    "Behynce (okres Revúca)",
    "",
    ""
  ],
  [
    "411519057802298",
    "Becherov (okres Bardejov)",
    "",
    ""
  ],
  [
    "211501581816639",
    "Beketfa (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "316512052802328",
    "Belá (okres Martin)",
    "",
    ""
  ],
  [
    "31B517429802336",
    "Belá (okres Žilina)",
    "",
    ""
  ],
  [
    "234503061802301",
    "Belá (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "237500062802409",
    "Beladice (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "419520039802395",
    "Belá nad Cirochou (okres Snina)",
    "",
    ""
  ],
  [
    "41C527122802425",
    "Belejovce (okres Svidník)",
    "",
    ""
  ],
  [
    "234503479847241",
    "Belek (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "329514535802433",
    "Belín (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "326511234802450",
    "Belina (okres Lučenec)",
    "",
    ""
  ],
  [
    "236542661802468",
    "Belince (okres Topoľčany)",
    "",
    ""
  ],
  [
    "211555517802476",
    "Bellova Ves (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "411519065802484",
    "Beloveža (okres Bardejov)",
    "",
    ""
  ],
  [
    "322516678802492",
    "Beluj (okres Banská Štiavnica)",
    "",
    ""
  ],
  [
    "228512851802506",
    "Beluša (okres Púchov)",
    "",
    ""
  ],
  [
    "426521167802565",
    "Belža (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "315510271802573",
    "Beňadiková (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "41C527131802581",
    "Beňadikovce (okres Svidník)",
    "",
    ""
  ],
  [
    "317509566802590",
    "Beňadovo (okres Námestovo)",
    "",
    ""
  ],
  [
    "429522317802603",
    "Beňatina (okres Sobrance)",
    "",
    ""
  ],
  [
    "426521175802611",
    "Beniakovce (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "316512061802654",
    "Benice (okres Martin)",
    "",
    ""
  ],
  [
    "315510262802638",
    "Benice (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "211501590817490",
    "Benkova Potôň (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "41D544086802662",
    "Benkovce (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "313509540802671",
    "Beňova Lehota (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "323508462802689",
    "Beňuš (okres Brezno)",
    "",
    ""
  ],
  [
    "315510777802727",
    "Beňušovce (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "108507814802735",
    "Bernolákovo (okres Senec)",
    "",
    ""
  ],
  [
    "417524191802743",
    "Bertotovce (okres Prešov)",
    "",
    ""
  ],
  [
    "232502065802760",
    "Beša (okres Levice)",
    "",
    ""
  ],
  [
    "427528137802794",
    "Beša (okres Michalovce)",
    "",
    ""
  ],
  [
    "234503070802808",
    "Bešeňov (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "318510301802816",
    "Bešeňová (okres Ružomberok)",
    "",
    ""
  ],
  [
    "42A526398802824",
    "Betlanovce (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "428525545802841",
    "Betliar (okres Rožňava)",
    "",
    ""
  ],
  [
    "429522325802867",
    "Bežovce (okres Sobrance)",
    "",
    ""
  ],
  [
    "426521183802875",
    "Bidovce (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "42B528145802905",
    "Biel (okres Trebišov)",
    "",
    ""
  ],
  [
    "232502073802913",
    "Bielovce (okres Levice)",
    "",
    ""
  ],
  [
    "217580473802921",
    "Biely Kostol (okres Trnava)",
    "",
    ""
  ],
  [
    "414526401802930",
    "Bijacovce (okres Levoča)",
    "",
    ""
  ],
  [
    "215504211802948",
    "Bílkove Humence (okres Senica)",
    "",
    ""
  ],
  [
    "234503088802956",
    "Bíňa (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "217506788802972",
    "Bíňovce (okres Trnava)",
    "",
    ""
  ],
  [
    "326557315802999",
    "Biskupice (okres Lučenec)",
    "",
    ""
  ],
  [
    "221542652802981",
    "Biskupice (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "236542695803006",
    "Biskupová (okres Topoľčany)",
    "",
    ""
  ],
  [
    "31B547522803014",
    "Bitarová (okres Žilina)",
    "",
    ""
  ],
  [
    "329514799815225",
    "Bizovo (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "211501484803022",
    "Blahová (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "211555746844276",
    "Blatná lúka (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "211501492803031",
    "Blatná na Ostrove (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "429522333803057",
    "Blatná Polianka (okres Sobrance)",
    "",
    ""
  ],
  [
    "108507822803065",
    "Blatné (okres Senec)",
    "",
    ""
  ],
  [
    "429522341803073",
    "Blatné Remety (okres Sobrance)",
    "",
    ""
  ],
  [
    "429522350803090",
    "Blatné Revištia (okres Sobrance)",
    "",
    ""
  ],
  [
    "316512079803103",
    "Blatnica (okres Martin)",
    "",
    ""
  ],
  [
    "426521191803111",
    "Blažice (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "418525308950157",
    "Blažov (okres Sabinov)",
    "",
    ""
  ],
  [
    "211501719829960",
    "Blažov (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "319512087803146",
    "Blažovce (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "236542709803162",
    "Blesovce (okres Topoľčany)",
    "",
    ""
  ],
  [
    "329514543803171",
    "Blhovce (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "229505854803197",
    "Bobot (okres Trenčín)",
    "",
    ""
  ],
  [
    "229505854803201",
    "Bobotská Lehota (okres Trenčín)",
    "",
    ""
  ],
  [
    "317509582803219",
    "Bobrov (okres Námestovo)",
    "",
    ""
  ],
  [
    "315510319803227",
    "Bobrovček (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "315510327803235",
    "Bobrovec (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "315510335803243",
    "Bobrovník (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "426559831820547",
    "Bočiar (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "315510262803286",
    "Bodice (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "211503461818330",
    "Bodíky (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "226557633803294",
    "Bodiná (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "319512095803308",
    "Bodorová (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "418524204803324",
    "Bodovce (okres Sabinov)",
    "",
    ""
  ],
  [
    "41C527149803341",
    "Bodružal (okres Svidník)",
    "",
    ""
  ],
  [
    "231501042803359",
    "Bodza (okres Komárno)",
    "",
    ""
  ],
  [
    "231555819803367",
    "Bodzianske Lúky (okres Komárno)",
    "",
    ""
  ],
  [
    "411519073803375",
    "Bogliarka (okres Bardejov)",
    "",
    ""
  ],
  [
    "231501140803383",
    "Bohatá (okres Komárno)",
    "",
    ""
  ],
  [
    "426521205803413",
    "Bohdanovce (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "217506796803421",
    "Bohdanovce nad Trnavou (okres Trnava)",
    "",
    ""
  ],
  [
    "211501506803430",
    "Boheľov (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "232580937803448",
    "Bohunice (okres Levice)",
    "",
    ""
  ],
  [
    "222582301803456",
    "Bohunice (okres Ilava)",
    "",
    ""
  ],
  [
    "217507156822400",
    "Bohunice (okres Trnava)",
    "",
    ""
  ],
  [
    "428525553803464",
    "Bohúňovo (okres Rožňava)",
    "",
    ""
  ],
  [
    "236542717803481",
    "Bojná (okres Topoľčany)",
    "",
    ""
  ],
  [
    "227513903803511",
    "Bojnice (okres Prievidza)",
    "",
    ""
  ],
  [
    "213506800803553",
    "Bojničky (okres Hlohovec)",
    "",
    ""
  ],
  [
    "41B527840859249",
    "Bokša (okres Stropkov)",
    "",
    ""
  ],
  [
    "42B528161803561",
    "Boľ (okres Trebišov)",
    "",
    ""
  ],
  [
    "108503681803570",
    "Boldog (okres Senec)",
    "",
    ""
  ],
  [
    "217506818803588",
    "Boleráz (okres Trnava)",
    "",
    ""
  ],
  [
    "222512885803600",
    "Bolešov (okres Ilava)",
    "",
    ""
  ],
  [
    "426521213803626",
    "Boliarov (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "326511251803642",
    "Boľkovce (okres Lučenec)",
    "",
    ""
  ],
  [
    "319512109803669",
    "Borcová (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "221556793803677",
    "Borčany (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "222557391803685",
    "Borčice (okres Ilava)",
    "",
    ""
  ],
  [
    "106507831803693",
    "Borinka (okres Malacky)",
    "",
    ""
  ],
  [
    "415520471803723",
    "Borov (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "217506826803740",
    "Borová (okres Trnava)",
    "",
    ""
  ],
  [
    "214506834803758",
    "Borovce (okres Piešťany)",
    "",
    ""
  ],
  [
    "215504238803804",
    "Borský Mikuláš (okres Senica)",
    "",
    ""
  ],
  [
    "215504238803821",
    "Borský Peter (okres Senica)",
    "",
    ""
  ],
  [
    "215504220803766",
    "Borský Svätý Jur (okres Senica)",
    "",
    ""
  ],
  [
    "42B528170803847",
    "Borša (okres Trebišov)",
    "",
    ""
  ],
  [
    "232502090803855",
    "Bory (okres Levice)",
    "",
    ""
  ],
  [
    "224505871803863",
    "Bošáca (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "229506290839663",
    "Bošianska Neporadza (okres Trenčín)",
    "",
    ""
  ],
  [
    "42B528188803944",
    "Boťany (okres Trebišov)",
    "",
    ""
  ],
  [
    "329514551803961",
    "Bottovo (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "42B528676803987",
    "Božčice (okres Trebišov)",
    "",
    ""
  ],
  [
    "428525561803715",
    "Bôrka (okres Rožňava)",
    "",
    ""
  ],
  [
    "427522368804002",
    "Bracovce (okres Michalovce)",
    "",
    ""
  ],
  [
    "329514829804011",
    "Brádno (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "212503762814636",
    "Brakoň (okres Galanta)",
    "",
    ""
  ],
  [
    "233500071804029",
    "Branč (okres Nitra)",
    "",
    ""
  ],
  [
    "234503096804045",
    "Branovo (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "323508489806145",
    "Braväcovo (okres Brezno)",
    "",
    ""
  ],
  [
    "428525570806161",
    "Brdárka (okres Rožňava)",
    "",
    ""
  ],
  [
    "42B528200806170",
    "Brehov (okres Trebišov)",
    "",
    ""
  ],
  [
    "32C581607806188",
    "Brehy (okres Žarnovica)",
    "",
    ""
  ],
  [
    "412520055806196",
    "Brekov (okres Humenné)",
    "",
    ""
  ],
  [
    "417524212806226",
    "Brestov (okres Prešov)",
    "",
    ""
  ],
  [
    "412520063806218",
    "Brestov (okres Humenné)",
    "",
    ""
  ],
  [
    "231501069806269",
    "Brestovec (okres Komárno)",
    "",
    ""
  ],
  [
    "223504254806277",
    "Brestovec (okres Myjava)",
    "",
    ""
  ],
  [
    "415520071806234",
    "Brestov nad Laborcom (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "417524221806382",
    "Bretejovce (okres Prešov)",
    "",
    ""
  ],
  [
    "428514578806391",
    "Bretka (okres Rožňava)",
    "",
    ""
  ],
  [
    "317509591806404",
    "Breza (okres Námestovo)",
    "",
    ""
  ],
  [
    "227514209839469",
    "Brezany (okres Prievidza)",
    "",
    ""
  ],
  [
    "31B547557806412",
    "Brezany (okres Žilina)",
    "",
    ""
  ],
  [
    "42B528218806421",
    "Brezina (okres Trebišov)",
    "",
    ""
  ],
  [
    "32B518191806447",
    "Breziny (okres Zvolen)",
    "",
    ""
  ],
  [
    "41B527157806463",
    "Breznica (okres Stropkov)",
    "",
    ""
  ],
  [
    "327511269806480",
    "Breznička (okres Poltár)",
    "",
    ""
  ],
  [
    "41B527165806510",
    "Breznička (okres Stropkov)",
    "",
    ""
  ],
  [
    "323508497806528",
    "Brezno (okres Brezno)",
    "",
    ""
  ],
  [
    "221542741806722",
    "Brezolupy (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "411519081806731",
    "Brezov (okres Bardejov)",
    "",
    ""
  ],
  [
    "223504262806749",
    "Brezová pod Bradlom (okres Myjava)",
    "",
    ""
  ],
  [
    "419520080806820",
    "Brezovec (okres Snina)",
    "",
    ""
  ],
  [
    "31A509604806838",
    "Brezovica (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "418524239806846",
    "Brezovica (okres Sabinov)",
    "",
    ""
  ],
  [
    "418524247806862",
    "Brezovička (okres Sabinov)",
    "",
    ""
  ],
  [
    "411519090806871",
    "Brezovka (okres Bardejov)",
    "",
    ""
  ],
  [
    "417524255806889",
    "Brežany (okres Prešov)",
    "",
    ""
  ],
  [
    "226513601806927",
    "Briestenné (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "319512117806935",
    "Brieštie (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "31B517402806951",
    "Brodno (okres Žilina)",
    "",
    ""
  ],
  [
    "216504271806960",
    "Brodské (okres Skalica)",
    "",
    ""
  ],
  [
    "422599891877891",
    "Brody (okres Košice I)",
    "",
    ""
  ],
  [
    "225580449806978",
    "Brodzany (okres Partizánske)",
    "",
    ""
  ],
  [
    "224505889806986",
    "Brunovce (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "41B527173807001",
    "Brusnica (okres Stropkov)",
    "",
    ""
  ],
  [
    "32A515884807010",
    "Brusník (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "328515507854166",
    "Brusník (okres Revúca)",
    "",
    ""
  ],
  [
    "321508675819671",
    "Brusno (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "227514021820989",
    "Brusno (okres Prievidza)",
    "",
    ""
  ],
  [
    "414526410807028",
    "Brutovce (okres Levoča)",
    "",
    ""
  ],
  [
    "234503100807036",
    "Bruty (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "226512915807044",
    "Brvnište (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "428560022807052",
    "Brzotín (okres Rožňava)",
    "",
    ""
  ],
  [
    "411519103807061",
    "Buclovany (okres Bardejov)",
    "",
    ""
  ],
  [
    "231501077807079",
    "Búč (okres Komárno)",
    "",
    ""
  ],
  [
    "217506851807109",
    "Bučany (okres Trnava)",
    "",
    ""
  ],
  [
    "211501905837709",
    "Bučuháza (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "31B517402874825",
    "Budatín (okres Žilina)",
    "",
    ""
  ],
  [
    "314509256807117",
    "Budatínska Lehota (okres Kysucké Nové Mesto)",
    "",
    ""
  ],
  [
    "32B518204807125",
    "Budča (okres Zvolen)",
    "",
    ""
  ],
  [
    "32B518875865311",
    "Budička (okres Zvolen)",
    "",
    ""
  ],
  [
    "329514586807141",
    "Budikovany (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "426521221807150",
    "Budimír (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "326511277807176",
    "Budiná (okres Lučenec)",
    "",
    ""
  ],
  [
    "427513857853585",
    "Budince (okres Michalovce)",
    "",
    ""
  ],
  [
    "319512125807222",
    "Budiš (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "427522376807231",
    "Budkovce (okres Michalovce)",
    "",
    ""
  ],
  [
    "107507849807265",
    "Budmerice (okres Pezinok)",
    "",
    ""
  ],
  [
    "426521698807281",
    "Budulov (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "414526428807290",
    "Buglovce (okres Levoča)",
    "",
    ""
  ],
  [
    "217506869807303",
    "Buková (okres Trnava)",
    "",
    ""
  ],
  [
    "41B527181807320",
    "Bukovce (okres Stropkov)",
    "",
    ""
  ],
  [
    "426521248807389",
    "Bukovec (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "223504289807354",
    "Bukovec (okres Myjava)",
    "",
    ""
  ],
  [
    "315510351807401",
    "Bukovina (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "32D516708807419",
    "Bukovina (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "326558273807427",
    "Bulhary (okres Lučenec)",
    "",
    ""
  ],
  [
    "426521256807435",
    "Bunetice (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "429522384807443",
    "Bunkovce (okres Sobrance)",
    "",
    ""
  ],
  [
    "312509337843644",
    "Burkov vrch (okres Čadca)",
    "",
    ""
  ],
  [
    "32A515892807451",
    "Bušince (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "413523411807478",
    "Bušovce (okres Kežmarok)",
    "",
    ""
  ],
  [
    "211501662822051",
    "Búštelek (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "426521264807486",
    "Buzica (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "326511293807508",
    "Buzitka (okres Lučenec)",
    "",
    ""
  ],
  [
    "426521965854328",
    "Byster (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "323557251839159",
    "Bystrá (okres Brezno)",
    "",
    ""
  ],
  [
    "41B527190807567",
    "Bystrá (okres Stropkov)",
    "",
    ""
  ],
  [
    "42A526436807575",
    "Bystrany (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "41D544094807591",
    "Bystré (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "106508233871818",
    "Bystrická hora (okres Malacky)",
    "",
    ""
  ],
  [
    "227513911807613",
    "Bystričany (okres Prievidza)",
    "",
    ""
  ],
  [
    "327511684807656",
    "Bystrička (okres Poltár)",
    "",
    ""
  ],
  [
    "316512133807664",
    "Bystrička (okres Martin)",
    "",
    ""
  ],
  [
    "42B528226807681",
    "Byšta (okres Trebišov)",
    "",
    ""
  ],
  [
    "31B517402807753",
    "Bytčica (okres Žilina)",
    "",
    ""
  ],
  [
    "32D516708807761",
    "Bzenica (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "417524263807788",
    "Bzenov (okres Prešov)",
    "",
    ""
  ],
  [
    "236505421807796",
    "Bzince (okres Topoľčany)",
    "",
    ""
  ],
  [
    "313580813807885",
    "Bziny (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "325518212807893",
    "Bzovík (okres Krupina)",
    "",
    ""
  ],
  [
    "32B518221807915",
    "Bzovská Lehôtka (okres Zvolen)",
    "",
    ""
  ],
  [
    "41B527203807923",
    "Bžany (okres Stropkov)",
    "",
    ""
  ],
  [
    "233545589807931",
    "Cabaj (okres Nitra)",
    "",
    ""
  ],
  [
    "41D544108807974",
    "Cabov (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "329514594807982",
    "Cakov (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "42B528234807991",
    "Cejkov (okres Trebišov)",
    "",
    ""
  ],
  [
    "41C527211808008",
    "Cernina (okres Svidník)",
    "",
    ""
  ],
  [
    "215504297808024",
    "Cerová-Lieskové (okres Senica)",
    "",
    ""
  ],
  [
    "325518239808032",
    "Cerovo (okres Krupina)",
    "",
    ""
  ],
  [
    "426521272808113",
    "Cestice (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "217506877808130",
    "Cífer (okres Trnava)",
    "",
    ""
  ],
  [
    "227513920808156",
    "Cigeľ (okres Prievidza)",
    "",
    ""
  ],
  [
    "411519111808172",
    "Cigeľka (okres Bardejov)",
    "",
    ""
  ],
  [
    "41C527220808199",
    "Cigla (okres Svidník)",
    "",
    ""
  ],
  [
    "221542776808202",
    "Cimenná (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "327511315808211",
    "Cinobaňa (okres Poltár)",
    "",
    ""
  ],
  [
    "233582387808253",
    "Čab (okres Nitra)",
    "",
    ""
  ],
  [
    "415520098808288",
    "Čabalovce (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "415520101808300",
    "Čabiny (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "325518247808318",
    "Čabradský Vrbovok (okres Krupina)",
    "",
    ""
  ],
  [
    "321508519808334",
    "Čačín (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "312509132808393",
    "Čadca (okres Čadca)",
    "",
    ""
  ],
  [
    "224505901808555",
    "Čachtice (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "232502324819701",
    "Čajakovo (okres Levice)",
    "",
    ""
  ],
  [
    "232502111808571",
    "Čajkov (okres Levice)",
    "",
    ""
  ],
  [
    "232502120808580",
    "Čaka (okres Levice)",
    "",
    ""
  ],
  [
    "233500101808598",
    "Čakajovce (okres Nitra)",
    "",
    ""
  ],
  [
    "326511323808601",
    "Čakanovce (okres Lučenec)",
    "",
    ""
  ],
  [
    "426521281808636",
    "Čakanovce (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "211501514808644",
    "Čakany (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "41D544116808661",
    "Čaklov (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "237500062875210",
    "Čakýň (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "231501085808679",
    "Čalovec (okres Komárno)",
    "",
    ""
  ],
  [
    "326511331808733",
    "Čamovce (okres Lučenec)",
    "",
    ""
  ],
  [
    "426521299808750",
    "Čaňa (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "232502031808768",
    "Čankov (okres Levice)",
    "",
    ""
  ],
  [
    "233545589808776",
    "Čápor (okres Nitra)",
    "",
    ""
  ],
  [
    "237500127808792",
    "Čaradice (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "215504319808806",
    "Čáry (okres Senica)",
    "",
    ""
  ],
  [
    "107507857808814",
    "Častá (okres Pezinok)",
    "",
    ""
  ],
  [
    "215504327808831",
    "Častkov (okres Senica)",
    "",
    ""
  ],
  [
    "224505919808857",
    "Častkovce (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "232555843808873",
    "Čata (okres Levice)",
    "",
    ""
  ],
  [
    "108507865808881",
    "Čataj (okres Senec)",
    "",
    ""
  ],
  [
    "227513938808911",
    "Čavoj (okres Prievidza)",
    "",
    ""
  ],
  [
    "32A515906808971",
    "Čebovce (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "427522392808997",
    "Čečehov (okres Michalovce)",
    "",
    ""
  ],
  [
    "426521302809004",
    "Čečejovce (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "211501590817503",
    "Čečínska Potôň (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "211501581816647",
    "Čéfa (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "234503118809021",
    "Čechy (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "233555886840581",
    "Čechynce (okres Nitra)",
    "",
    ""
  ],
  [
    "325518255809047",
    "Čekovce (okres Krupina)",
    "",
    ""
  ],
  [
    "233500135809098",
    "Čeľadice (okres Nitra)",
    "",
    ""
  ],
  [
    "236556297809101",
    "Čeľadince (okres Topoľčany)",
    "",
    ""
  ],
  [
    "32A515914809110",
    "Čeláre (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "226557561809144",
    "Čelkova Lehota (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "417524271809187",
    "Čelovce (okres Prešov)",
    "",
    ""
  ],
  [
    "32A515922809161",
    "Čelovce (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "42B528242809195",
    "Čeľovce (okres Trebišov)",
    "",
    ""
  ],
  [
    "41D544051809217",
    "Čemerné (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "329514799815233",
    "Čenice (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "211555720829978",
    "Čenkesfa (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "211580554873365",
    "Čenkovce (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "211501581816710",
    "Čentöfa (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "227513946809241",
    "Čereňany (okres Prievidza)",
    "",
    ""
  ],
  [
    "329514608809268",
    "Čerenčany (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "42B528251809276",
    "Čerhov (okres Trebišov)",
    "",
    ""
  ],
  [
    "321508519809284",
    "Čerín (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "236542792809292",
    "Čermany (okres Topoľčany)",
    "",
    ""
  ],
  [
    "422598151827274",
    "Čermeľ (okres Košice I)",
    "",
    ""
  ],
  [
    "234503126809314",
    "Černík (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "412520110809322",
    "Černina (okres Humenné)",
    "",
    ""
  ],
  [
    "42B528269809331",
    "Černochov (okres Trebišov)",
    "",
    ""
  ],
  [
    "415520128809349",
    "Čertižné (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "32A515931809365",
    "Červeňany (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "418524280809357",
    "Červená Voda (okres Sabinov)",
    "",
    ""
  ],
  [
    "417524301809381",
    "Červenica (okres Prešov)",
    "",
    ""
  ],
  [
    "418524298809403",
    "Červenica pri Sabinove (okres Sabinov)",
    "",
    ""
  ],
  [
    "213506885809411",
    "Červeník (okres Hlohovec)",
    "",
    ""
  ],
  [
    "237555916809420",
    "Červený Hrádok (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "222512931809438",
    "Červený Kameň (okres Ilava)",
    "",
    ""
  ],
  [
    "413523429809446",
    "Červený Kláštor (okres Kežmarok)",
    "",
    ""
  ],
  [
    "106500267991988",
    "Červený Kríž (okres Malacky)",
    "",
    ""
  ],
  [
    "327511340809462",
    "České Brezovo (okres Poltár)",
    "",
    ""
  ],
  [
    "427528277809497",
    "Čičarovce (okres Michalovce)",
    "",
    ""
  ],
  [
    "41D544124809501",
    "Čičava (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "31B517470809519",
    "Čičmany (okres Žilina)",
    "",
    ""
  ],
  [
    "231501093809527",
    "Číčov (okres Komárno)",
    "",
    ""
  ],
  [
    "42B528285809551",
    "Čierna (okres Trebišov)",
    "",
    ""
  ],
  [
    "428525596809586",
    "Čierna Lehota (okres Rožňava)",
    "",
    ""
  ],
  [
    "221542806809560",
    "Čierna Lehota (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "42B528293809594",
    "Čierna nad Tisou (okres Trebišov)",
    "",
    ""
  ],
  [
    "212503690809616",
    "Čierna Voda (okres Galanta)",
    "",
    ""
  ],
  [
    "312509159809624",
    "Čierne (okres Čadca)",
    "",
    ""
  ],
  [
    "237500151809675",
    "Čierne Kľačany (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "41D544132809691",
    "Čierne nad Topľou (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "427528307809705",
    "Čierne Pole (okres Michalovce)",
    "",
    ""
  ],
  [
    "323508527809713",
    "Čierny Balog (okres Brezno)",
    "",
    ""
  ],
  [
    "212503703809764",
    "Čierny Brod (okres Galanta)",
    "",
    ""
  ],
  [
    "329514616809811",
    "Čierny Potok (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "233500160809845",
    "Čifáre (okres Nitra)",
    "",
    ""
  ],
  [
    "211501905860379",
    "Čilistov (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "211501531809853",
    "Čiližská Radvaň (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "31A518719809870",
    "Čimhová (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "41A526673809896",
    "Čirč (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "329514624809900",
    "Číž (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "426521311809934",
    "Čižatice (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "428525600809942",
    "Čoltovo (okres Rožňava)",
    "",
    ""
  ],
  [
    "319512141809951",
    "Čremošné (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "428560031853178",
    "Čučma (okres Rožňava)",
    "",
    ""
  ],
  [
    "419520136809969",
    "Čukalovce (okres Snina)",
    "",
    ""
  ],
  [
    "211501972867861",
    "Čukárska Paka (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "221545651809977",
    "Čuklasovce (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "105529435809985",
    "Čunovo (okres Bratislava V)",
    "",
    ""
  ],
  [
    "418524310809993",
    "Ďačov (okres Sabinov)",
    "",
    ""
  ],
  [
    "418524328810045",
    "Daletice (okres Sabinov)",
    "",
    ""
  ],
  [
    "42A526444810053",
    "Danišovce (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "316512150810061",
    "Ďanová (okres Martin)",
    "",
    ""
  ],
  [
    "41D544141810070",
    "Ďapalovce (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "419520829810088",
    "Dara (okres Snina)",
    "",
    ""
  ],
  [
    "42B528315810096",
    "Dargov (okres Trebišov)",
    "",
    ""
  ],
  [
    "41D544159810100",
    "Davidov (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "426521329810118",
    "Debraď (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "412520152810134",
    "Dedačov (okres Humenné)",
    "",
    ""
  ],
  [
    "231501107810142",
    "Dedina Mládeže (okres Komárno)",
    "",
    ""
  ],
  [
    "234503134810169",
    "Dedinka (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "108508136841731",
    "Dedinka pri Dunaji (okres Senec)",
    "",
    ""
  ],
  [
    "428525618810185",
    "Dedinky (okres Rožňava)",
    "",
    ""
  ],
  [
    "217506893810223",
    "Dechtice (okres Trnava)",
    "",
    ""
  ],
  [
    "322516716810231",
    "Dekýš (okres Banská Štiavnica)",
    "",
    ""
  ],
  [
    "232502154810240",
    "Demandice (okres Levice)",
    "",
    ""
  ],
  [
    "315510262810282",
    "Demänová (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "315510386810304",
    "Demänovská Dolina (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "417524336810347",
    "Demjata (okres Prešov)",
    "",
    ""
  ],
  [
    "41D544167810355",
    "Detrík (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "324518263810363",
    "Detva (okres Detva)",
    "",
    ""
  ],
  [
    "324518271810550",
    "Detvianska Huta (okres Detva)",
    "",
    ""
  ],
  [
    "325518280810622",
    "Devičie (okres Krupina)",
    "",
    ""
  ],
  [
    "104529401805301",
    "Devín (okres Bratislava IV)",
    "",
    ""
  ],
  [
    "104529371810649",
    "Devínska Nová Ves (okres Bratislava IV)",
    "",
    ""
  ],
  [
    "221542822810673",
    "Dežerice (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "316512168810690",
    "Diaková (okres Martin)",
    "",
    ""
  ],
  [
    "235503711810703",
    "Diakovce (okres Šaľa)",
    "",
    ""
  ],
  [
    "329515035823805",
    "Dimitrij (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "234503576810711",
    "Diva (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "227513954810720",
    "Diviacka Nová Ves (okres Prievidza)",
    "",
    ""
  ],
  [
    "319512729810746",
    "Diviaky (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "227513962810762",
    "Diviaky nad Nitricou (okres Prievidza)",
    "",
    ""
  ],
  [
    "326511358810789",
    "Divín (okres Lučenec)",
    "",
    ""
  ],
  [
    "31B517488810835",
    "Divina (okres Žilina)",
    "",
    ""
  ],
  [
    "31B517496810851",
    "Divinka (okres Žilina)",
    "",
    ""
  ],
  [
    "217556599810878",
    "Dlhá (okres Trnava)",
    "",
    ""
  ],
  [
    "315510572830097",
    "Dlhá Lúka (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "411519006810886",
    "Dlhá Lúka (okres Bardejov)",
    "",
    ""
  ],
  [
    "312509167810908",
    "Dlhá nad Kysucou (okres Čadca)",
    "",
    ""
  ],
  [
    "313509639810991",
    "Dlhá nad Oravou (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "235503720811009",
    "Dlhá nad Váhom (okres Šaľa)",
    "",
    ""
  ],
  [
    "428525626811017",
    "Dlhá Ves (okres Rožňava)",
    "",
    ""
  ],
  [
    "41D544175811025",
    "Dlhé Klčovo (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "419520161811033",
    "Dlhé nad Cirochou (okres Snina)",
    "",
    ""
  ],
  [
    "31B517500811041",
    "Dlhé Pole (okres Žilina)",
    "",
    ""
  ],
  [
    "414526452811149",
    "Dlhé Stráže (okres Levoča)",
    "",
    ""
  ],
  [
    "41C527238811157",
    "Dlhoňa (okres Svidník)",
    "",
    ""
  ],
  [
    "227513971811165",
    "Dlžín (okres Prievidza)",
    "",
    ""
  ],
  [
    "42B528323811181",
    "Dobrá (okres Trebišov)",
    "",
    ""
  ],
  [
    "229506559811173",
    "Dobrá (okres Trenčín)",
    "",
    ""
  ],
  [
    "32B518298811190",
    "Dobrá Niva (okres Zvolen)",
    "",
    ""
  ],
  [
    "217506915811220",
    "Dobrá Voda (okres Trnava)",
    "",
    ""
  ],
  [
    "326511366811254",
    "Dobroč (okres Lučenec)",
    "",
    ""
  ],
  [
    "227514144832081",
    "Dobročná (okres Prievidza)",
    "",
    ""
  ],
  [
    "211501549811343",
    "Dobrohošť (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "41C527246811351",
    "Dobroslava (okres Svidník)",
    "",
    ""
  ],
  [
    "428525634811378",
    "Dobšiná (okres Rožňava)",
    "",
    ""
  ],
  [
    "228512940811432",
    "Dohňany (okres Púchov)",
    "",
    ""
  ],
  [
    "215504335811475",
    "Dojč (okres Senica)",
    "",
    ""
  ],
  [
    "414526461811491",
    "Doľany (okres Levoča)",
    "",
    ""
  ],
  [
    "107507873811483",
    "Doľany (okres Pezinok)",
    "",
    ""
  ],
  [
    "32A515957811513",
    "Dolinka (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "228512958811521",
    "Dolná Breznica (okres Púchov)",
    "",
    ""
  ],
  [
    "217506923811548",
    "Dolná Krupá (okres Trnava)",
    "",
    ""
  ],
  [
    "323508535811572",
    "Dolná Lehota (okres Brezno)",
    "",
    ""
  ],
  [
    "313509957811599",
    "Dolná Lehota (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "226512966811611",
    "Dolná Mariková (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "321508543811718",
    "Dolná Mičiná (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "229505935811726",
    "Dolná Poruba (okres Trenčín)",
    "",
    ""
  ],
  [
    "211501859844250",
    "Dolná Potôň (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "232502171811769",
    "Dolná Seč (okres Levice)",
    "",
    ""
  ],
  [
    "212555789811777",
    "Dolná Streda (okres Galanta)",
    "",
    ""
  ],
  [
    "32A515965811785",
    "Dolná Strehová (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "229505943811840",
    "Dolná Súča (okres Trenčín)",
    "",
    ""
  ],
  [
    "319512729811874",
    "Dolná Štubňa (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "31B517518811904",
    "Dolná Tižina (okres Žilina)",
    "",
    ""
  ],
  [
    "32D516724811921",
    "Dolná Trnávka (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "32D516732811939",
    "Dolná Ves (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "32D516741811947",
    "Dolná Ždaňa (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "232502103806897",
    "Dolné Brhlovce (okres Levice)",
    "",
    ""
  ],
  [
    "224505897807818",
    "Dolné Bzince (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "232502162810606",
    "Dolné Devičany (okres Levice)",
    "",
    ""
  ],
  [
    "221545651811955",
    "Dolné Držkovce (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "214507008813320",
    "Dolné Dubovany (okres Piešťany)",
    "",
    ""
  ],
  [
    "217506931811963",
    "Dolné Dubové (okres Trnava)",
    "",
    ""
  ],
  [
    "32C516759811971",
    "Dolné Hámre (okres Žarnovica)",
    "",
    ""
  ],
  [
    "231580911816612",
    "Dolné Holiare (okres Komárno)",
    "",
    ""
  ],
  [
    "236556149829609",
    "Dolné Chlebany (okres Topoľčany)",
    "",
    ""
  ],
  [
    "232502383821730",
    "Dolné Jabloňovce (okres Levice)",
    "",
    ""
  ],
  [
    "211501662822060",
    "Dolné Janíky (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "228557439812013",
    "Dolné Kočkovce (okres Púchov)",
    "",
    ""
  ],
  [
    "233500011812021",
    "Dolné Krškany (okres Nitra)",
    "",
    ""
  ],
  [
    "233582425812048",
    "Dolné Lefantovce (okres Nitra)",
    "",
    ""
  ],
  [
    "217556661833185",
    "Dolné Lovčice (okres Trnava)",
    "",
    ""
  ],
  [
    "325518301812056",
    "Dolné Mladonice (okres Krupina)",
    "",
    ""
  ],
  [
    "229506273838608",
    "Dolné Motešice (okres Trenčín)",
    "",
    ""
  ],
  [
    "221542849812072",
    "Dolné Naštice (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "233500194812081",
    "Dolné Obdokovce (okres Nitra)",
    "",
    ""
  ],
  [
    "217506940812099",
    "Dolné Orešany (okres Trnava)",
    "",
    ""
  ],
  [
    "213506958812102",
    "Dolné Otrokovce (okres Hlohovec)",
    "",
    ""
  ],
  [
    "32A515973812111",
    "Dolné Plachtince (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "32A516317849634",
    "Dolné Príbelce (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "325518701854191",
    "Dolné Rykynčice (okres Krupina)",
    "",
    ""
  ],
  [
    "212503746812129",
    "Dolné Saliby (okres Galanta)",
    "",
    ""
  ],
  [
    "232502189812137",
    "Dolné Semerovce (okres Levice)",
    "",
    ""
  ],
  [
    "237500747856266",
    "Dolné Sľažany (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "224505951812145",
    "Dolné Srnie (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "32A515981812153",
    "Dolné Strháre (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "325518425860875",
    "Dolné Šipice (okres Krupina)",
    "",
    ""
  ],
  [
    "233582719812161",
    "Dolné Štitáre (okres Nitra)",
    "",
    ""
  ],
  [
    "227514390862312",
    "Dolné Šútovce (okres Prievidza)",
    "",
    ""
  ],
  [
    "325518867862789",
    "Dolné Terany (okres Krupina)",
    "",
    ""
  ],
  [
    "211501921863921",
    "Dolné Topoľníky (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "213506966812170",
    "Dolné Trhovište (okres Hlohovec)",
    "",
    ""
  ],
  [
    "232502928868701",
    "Dolné Turovce (okres Levice)",
    "",
    ""
  ],
  [
    "227513989812188",
    "Dolné Vestenice (okres Prievidza)",
    "",
    ""
  ],
  [
    "329514632812196",
    "Dolné Zahorany (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "232502979872911",
    "Dolné Zbrojníky (okres Levice)",
    "",
    ""
  ],
  [
    "213556521812200",
    "Dolné Zelenice (okres Hlohovec)",
    "",
    ""
  ],
  [
    "232502995874311",
    "Dolné Žemberovce (okres Levice)",
    "",
    ""
  ],
  [
    "325518310812226",
    "Dolný Badín (okres Krupina)",
    "",
    ""
  ],
  [
    "211501557812234",
    "Dolný Bar (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "212504009855235",
    "Dolný Čepeň (okres Galanta)",
    "",
    ""
  ],
  [
    "32A515949810037",
    "Dolný Dačov Lom (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "232502936868931",
    "Dolný Ďur (okres Levice)",
    "",
    ""
  ],
  [
    "321508551812251",
    "Dolný Harmanec (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "31B517526812277",
    "Dolný Hričov (okres Žilina)",
    "",
    ""
  ],
  [
    "212503754812293",
    "Dolný Chotár (okres Galanta)",
    "",
    ""
  ],
  [
    "316512206812307",
    "Dolný Kalník (okres Martin)",
    "",
    ""
  ],
  [
    "313509540812315",
    "Dolný Kubín (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "226546640812471",
    "Dolný Lieskov (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "214506982812480",
    "Dolný Lopašov (okres Piešťany)",
    "",
    ""
  ],
  [
    "226512842812501",
    "Dolný Moštenec (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "234503151812510",
    "Dolný Ohaj (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "232502197812544",
    "Dolný Pial (okres Levice)",
    "",
    ""
  ],
  [
    "211501611819557",
    "Dolný Štál (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "31A510084861090",
    "Dolný Štefanov (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "232502847862681",
    "Dolný Tekovský Hrádok (okres Levice)",
    "",
    ""
  ],
  [
    "324518450812552",
    "Dolný Tisovník (okres Detva)",
    "",
    ""
  ],
  [
    "319512699865826",
    "Dolný Turček (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "314509175812561",
    "Dolný Vadičov (okres Kysucké Nové Mesto)",
    "",
    ""
  ],
  [
    "233500917869511",
    "Dolný Vinodol (okres Nitra)",
    "",
    ""
  ],
  [
    "232502201812579",
    "Domadice (okres Levice)",
    "",
    ""
  ],
  [
    "325518336812587",
    "Domaníky (okres Krupina)",
    "",
    ""
  ],
  [
    "226513008812595",
    "Domaniža (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "414526479812625",
    "Domaňovce (okres Levoča)",
    "",
    ""
  ],
  [
    "232502324819719",
    "Domaša (okres Levice)",
    "",
    ""
  ],
  [
    "321508560812641",
    "Donovaly (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "315510726812714",
    "Dovalovo (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "323508578812722",
    "Drábsko (okres Brezno)",
    "",
    ""
  ],
  [
    "427528331812757",
    "Drahňov (okres Michalovce)",
    "",
    ""
  ],
  [
    "214506991812773",
    "Drahovce (okres Piešťany)",
    "",
    ""
  ],
  [
    "414526487812803",
    "Dravce (okres Levoča)",
    "",
    ""
  ],
  [
    "329514641812811",
    "Dražice (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "316512214812820",
    "Dražkovce (okres Martin)",
    "",
    ""
  ],
  [
    "233500011812854",
    "Dražovce (okres Nitra)",
    "",
    ""
  ],
  [
    "325518344812871",
    "Drážovce (okres Krupina)",
    "",
    ""
  ],
  [
    "41B528005869775",
    "Driečna (okres Stropkov)",
    "",
    ""
  ],
  [
    "329514659812889",
    "Drienčany (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "418524344812901",
    "Drienica (okres Sabinov)",
    "",
    ""
  ],
  [
    "417524352812927",
    "Drienov (okres Prešov)",
    "",
    ""
  ],
  [
    "426521337812935",
    "Drienovec (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "325518352812943",
    "Drienovo (okres Krupina)",
    "",
    ""
  ],
  [
    "417524361812960",
    "Drienovská Nová Ves (okres Prešov)",
    "",
    ""
  ],
  [
    "229505960813001",
    "Drietoma (okres Trenčín)",
    "",
    ""
  ],
  [
    "329514667813052",
    "Drňa (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "428525642813061",
    "Drnava (okres Rožňava)",
    "",
    ""
  ],
  [
    "232502219813109",
    "Drženice (okres Levice)",
    "",
    ""
  ],
  [
    "328514675813117",
    "Držkovce (okres Revúca)",
    "",
    ""
  ],
  [
    "327557323813125",
    "Ďubákovo (okres Poltár)",
    "",
    ""
  ],
  [
    "411519138813133",
    "Dubinné (okres Bardejov)",
    "",
    ""
  ],
  [
    "228513300830917",
    "Dubková (okres Púchov)",
    "",
    ""
  ],
  [
    "227513903803537",
    "Dubnica (okres Prievidza)",
    "",
    ""
  ],
  [
    "222513016813141",
    "Dubnica nad Váhom (okres Ilava)",
    "",
    ""
  ],
  [
    "221542857813222",
    "Dubnička (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "234503169813249",
    "Dubník (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "329514683813281",
    "Dubno (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "229505978813290",
    "Dubodiel (okres Trenčín)",
    "",
    ""
  ],
  [
    "41C527254813311",
    "Dubová (okres Svidník)",
    "",
    ""
  ],
  [
    "107507881813303",
    "Dubová (okres Pezinok)",
    "",
    ""
  ],
  [
    "32B518361813371",
    "Dubové (okres Zvolen)",
    "",
    ""
  ],
  [
    "319512222813362",
    "Dubové (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "329514691813389",
    "Dubovec (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "418524379813397",
    "Dubovica (okres Sabinov)",
    "",
    ""
  ],
  [
    "414526495813435",
    "Dúbrava (okres Levoča)",
    "",
    ""
  ],
  [
    "419520179813427",
    "Dúbrava (okres Snina)",
    "",
    ""
  ],
  [
    "315510408813401",
    "Dúbrava (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "321508586813443",
    "Dúbravica (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "104529389806099",
    "Dúbravka (okres Bratislava IV)",
    "",
    ""
  ],
  [
    "427522406813451",
    "Dúbravka (okres Michalovce)",
    "",
    ""
  ],
  [
    "324518379813478",
    "Dúbravy (okres Detva)",
    "",
    ""
  ],
  [
    "214558338813516",
    "Ducové (okres Piešťany)",
    "",
    ""
  ],
  [
    "325518387813532",
    "Dudince (okres Krupina)",
    "",
    ""
  ],
  [
    "41C580601813567",
    "Dukovce (okres Svidník)",
    "",
    ""
  ],
  [
    "316512052813575",
    "Dulice (okres Martin)",
    "",
    ""
  ],
  [
    "222513024813583",
    "Dulov (okres Ilava)",
    "",
    ""
  ],
  [
    "417524387813591",
    "Dulova Ves (okres Prešov)",
    "",
    ""
  ],
  [
    "231501123813605",
    "Dulovce (okres Komárno)",
    "",
    ""
  ],
  [
    "329557919802204",
    "Dulovo (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "312509183813630",
    "Dunajov (okres Čadca)",
    "",
    ""
  ],
  [
    "211501433813664",
    "Dunajská Streda (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "211555541821802",
    "Dunajský Klátov (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "41B527262813842",
    "Duplín (okres Stropkov)",
    "",
    ""
  ],
  [
    "31B557986813851",
    "Ďurčiná (okres Žilina)",
    "",
    ""
  ],
  [
    "41D544183813877",
    "Ďurďoš (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "426521353813893",
    "Ďurďošík (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "226557609813907",
    "Ďurďové (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "426521361813915",
    "Ďurkov (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "41A526681813923",
    "Ďurková (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "32A515990813931",
    "Ďurkovce (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "329514462813940",
    "Dúžava (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "236556262813958",
    "Dvorany nad Nitrou (okres Topoľčany)",
    "",
    ""
  ],
  [
    "414543292950165",
    "Dvorce (okres Levoča)",
    "",
    ""
  ],
  [
    "221542873813966",
    "Dvorec (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "319512303813982",
    "Dvorec nad Turcom (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "42B528340813991",
    "Dvorianky (okres Trebišov)",
    "",
    ""
  ],
  [
    "426559873871699",
    "Dvorníky (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "213507024814024",
    "Dvorníky (okres Hlohovec)",
    "",
    ""
  ],
  [
    "325518425814083",
    "Dvorníky (okres Krupina)",
    "",
    ""
  ],
  [
    "227514250840742",
    "Dvorníky nad Nitricou (okres Prievidza)",
    "",
    ""
  ],
  [
    "234503177814148",
    "Dvory nad Žitavou (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "233500933814156",
    "Dyčka (okres Nitra)",
    "",
    ""
  ],
  [
    "42B528358814172",
    "Egreš (okres Trebišov)",
    "",
    ""
  ],
  [
    "211501808842958",
    "Eliášovce (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "212503835822680",
    "Ereč (okres Galanta)",
    "",
    ""
  ],
  [
    "211501701828262",
    "Etreho Kračany (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "31B517542814181",
    "Fačkov (okres Žilina)",
    "",
    ""
  ],
  [
    "427522414814199",
    "Falkušovce (okres Michalovce)",
    "",
    ""
  ],
  [
    "232502227814202",
    "Farná (okres Levice)",
    "",
    ""
  ],
  [
    "108507938821438",
    "Farná (okres Senec)",
    "",
    ""
  ],
  [
    "429522422814211",
    "Fekišovce (okres Sobrance)",
    "",
    ""
  ],
  [
    "106508195846821",
    "Feld (okres Malacky)",
    "",
    ""
  ],
  [
    "329514713814229",
    "Figa (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "41C527271814237",
    "Fijaš (okres Svidník)",
    "",
    ""
  ],
  [
    "326511391814296",
    "Fiľakovo (okres Lučenec)",
    "",
    ""
  ],
  [
    "326511404814334",
    "Fiľakovské Kováče (okres Lučenec)",
    "",
    ""
  ],
  [
    "416523437814652",
    "Filice (okres Poprad)",
    "",
    ""
  ],
  [
    "328515400851825",
    "Filier (okres Revúca)",
    "",
    ""
  ],
  [
    "417524395814351",
    "Fintice (okres Prešov)",
    "",
    ""
  ],
  [
    "316512257814369",
    "Folkušová (okres Martin)",
    "",
    ""
  ],
  [
    "41A526690814377",
    "Forbasy (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "411519154814385",
    "Frička (okres Bardejov)",
    "",
    ""
  ],
  [
    "411519162814393",
    "Fričkovce (okres Bardejov)",
    "",
    ""
  ],
  [
    "417524409814415",
    "Fričovce (okres Prešov)",
    "",
    ""
  ],
  [
    "417524417814423",
    "Fulianka (okres Prešov)",
    "",
    ""
  ],
  [
    "424598682827339",
    "Furča (okres Košice III)",
    "",
    ""
  ],
  [
    "211501573814440",
    "Gabčíkovo (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "411519171814474",
    "Gaboltov (okres Bardejov)",
    "",
    ""
  ],
  [
    "106507890814482",
    "Gajary (okres Malacky)",
    "",
    ""
  ],
  [
    "212503665814504",
    "Galanta (okres Galanta)",
    "",
    ""
  ],
  [
    "315510416814628",
    "Galovany (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "212503762814644",
    "Gáň (okres Galanta)",
    "",
    ""
  ],
  [
    "416523437814661",
    "Gánovce (okres Poprad)",
    "",
    ""
  ],
  [
    "31B517551814679",
    "Gbeľany (okres Žilina)",
    "",
    ""
  ],
  [
    "234503185814687",
    "Gbelce (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "216504351814717",
    "Gbely (okres Skalica)",
    "",
    ""
  ],
  [
    "426521370814733",
    "Geča (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "421526509814741",
    "Gelnica (okres Gelnica)",
    "",
    ""
  ],
  [
    "328514721814865",
    "Gemer (okres Revúca)",
    "",
    ""
  ],
  [
    "329514730814881",
    "Gemerček (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "428525651814903",
    "Gemerská Hôrka (okres Rožňava)",
    "",
    ""
  ],
  [
    "428514748814911",
    "Gemerská Panica (okres Rožňava)",
    "",
    ""
  ],
  [
    "428525669814938",
    "Gemerská Poloma (okres Rožňava)",
    "",
    ""
  ],
  [
    "328514756814954",
    "Gemerská Ves (okres Revúca)",
    "",
    ""
  ],
  [
    "329514764814971",
    "Gemerské Dechtáre (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "329557889814989",
    "Gemerské Michalovce (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "329514781815021",
    "Gemerský Jablonec (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "328525677814997",
    "Gemerský Milhosť (okres Revúca)",
    "",
    ""
  ],
  [
    "417524425815055",
    "Geraltov (okres Prešov)",
    "",
    ""
  ],
  [
    "411519189815071",
    "Gerlachov (okres Bardejov)",
    "",
    ""
  ],
  [
    "416523445815098",
    "Gerlachov (okres Poprad)",
    "",
    ""
  ],
  [
    "41D544191815101",
    "Giglovce (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "41C519197815136",
    "Giraltovce (okres Svidník)",
    "",
    ""
  ],
  [
    "41D544205815144",
    "Girovce (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "32A516007815152",
    "Glabušovce (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "428525693815179",
    "Gočaltovo (okres Rožňava)",
    "",
    ""
  ],
  [
    "428525707815187",
    "Gočovo (okres Rožňava)",
    "",
    ""
  ],
  [
    "233500232815195",
    "Golianovo (okres Nitra)",
    "",
    ""
  ],
  [
    "232502588815209",
    "Gondovo (okres Levice)",
    "",
    ""
  ],
  [
    "329514799815217",
    "Gortva (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "315510424815250",
    "Gôtovany (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "414526517815268",
    "Granč-Petrovce (okres Levoča)",
    "",
    ""
  ],
  [
    "326557331815276",
    "Gregorova Vieska (okres Lučenec)",
    "",
    ""
  ],
  [
    "417524433815284",
    "Gregorovce (okres Prešov)",
    "",
    ""
  ],
  [
    "329557901871460",
    "Gregorovce (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "41B527289815292",
    "Gribov (okres Stropkov)",
    "",
    ""
  ],
  [
    "107508179839019",
    "Grinava (okres Pezinok)",
    "",
    ""
  ],
  [
    "423599883881228",
    "Grunt (okres Košice II)",
    "",
    ""
  ],
  [
    "412559644856568",
    "Gruzovce (okres Humenné)",
    "",
    ""
  ],
  [
    "426521388815306",
    "Gyňov (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "31A509655815322",
    "Habovka (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "415520187815331",
    "Habura (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "329514829815349",
    "Hačava (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "426521396815365",
    "Hačava (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "413523801815373",
    "Hágy (okres Kežmarok)",
    "",
    ""
  ],
  [
    "426518123866008",
    "Háj (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "319512265815381",
    "Háj (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "329514811815411",
    "Hajnáčka (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "236542881815390",
    "Hajná Nová Ves (okres Topoľčany)",
    "",
    ""
  ],
  [
    "32B518808856291",
    "Hájniky (okres Zvolen)",
    "",
    ""
  ],
  [
    "235500241815446",
    "Hájske (okres Šaľa)",
    "",
    ""
  ],
  [
    "41A526703815462",
    "Hajtovka (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "221542890815471",
    "Haláčovce (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "326511421815501",
    "Halič (okres Lučenec)",
    "",
    ""
  ],
  [
    "41A526711815578",
    "Haligovce (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "224556424803871",
    "Haluzice (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "229506567815586",
    "Hámre (okres Trenčín)",
    "",
    ""
  ],
  [
    "108507903815594",
    "Hamuliakovo (okres Senec)",
    "",
    ""
  ],
  [
    "227513997815608",
    "Handlová (okres Prievidza)",
    "",
    ""
  ],
  [
    "418524441815675",
    "Hanigovce (okres Sabinov)",
    "",
    ""
  ],
  [
    "417518522815705",
    "Haniska (okres Prešov)",
    "",
    ""
  ],
  [
    "426521400815691",
    "Haniska (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "428525715815713",
    "Hanková (okres Rožňava)",
    "",
    ""
  ],
  [
    "412520195815730",
    "Hankovce (okres Humenné)",
    "",
    ""
  ],
  [
    "411519201815721",
    "Hankovce (okres Bardejov)",
    "",
    ""
  ],
  [
    "41D544213815748",
    "Hanušovce nad Topľou (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "229505820873527",
    "Hanzlíková (okres Trenčín)",
    "",
    ""
  ],
  [
    "414526525815764",
    "Harakovce (okres Levoča)",
    "",
    ""
  ],
  [
    "411519219815772",
    "Harhaj (okres Bardejov)",
    "",
    ""
  ],
  [
    "42A526533815781",
    "Harichovce (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "321508594815799",
    "Harmanec (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "312509311815802",
    "Harvelka (okres Čadca)",
    "",
    ""
  ],
  [
    "427522431815918",
    "Hatalov (okres Michalovce)",
    "",
    ""
  ],
  [
    "226557510815926",
    "Hatné (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "41B527297815942",
    "Havaj (okres Stropkov)",
    "",
    ""
  ],
  [
    "413523461815951",
    "Havka (okres Kežmarok)",
    "",
    ""
  ],
  [
    "41C527301815969",
    "Havranec (okres Svidník)",
    "",
    ""
  ],
  [
    "427522449815977",
    "Hažín (okres Michalovce)",
    "",
    ""
  ],
  [
    "412559598823317",
    "Hažín nad Cirochou (okres Humenné)",
    "",
    ""
  ],
  [
    "411519227815985",
    "Hažlín (okres Bardejov)",
    "",
    ""
  ],
  [
    "212503703809772",
    "Heď (okres Galanta)",
    "",
    ""
  ],
  [
    "211501719829986",
    "Heďbeneéte (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "421526541816001",
    "Helcmanovce (okres Gelnica)",
    "",
    ""
  ],
  [
    "323508608816019",
    "Heľpa (okres Brezno)",
    "",
    ""
  ],
  [
    "428525723816027",
    "Henckovce (okres Rožňava)",
    "",
    ""
  ],
  [
    "421526550816035",
    "Henclová (okres Gelnica)",
    "",
    ""
  ],
  [
    "41D581674816043",
    "Hencovce (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "417524450816051",
    "Hendrichovce (okres Prešov)",
    "",
    ""
  ],
  [
    "426521418816060",
    "Herľany (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "417524468816086",
    "Hermanovce (okres Prešov)",
    "",
    ""
  ],
  [
    "41D544221816094",
    "Hermanovce nad Topľou (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "411519235816108",
    "Hertník (okres Bardejov)",
    "",
    ""
  ],
  [
    "411519243816116",
    "Hervartov (okres Bardejov)",
    "",
    ""
  ],
  [
    "321508616816124",
    "Hiadeľ (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "42A526568816132",
    "Hincovce (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "31A509663816159",
    "Hladovka (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "215504360816175",
    "Hlboké (okres Senica)",
    "",
    ""
  ],
  [
    "311581984816183",
    "Hlboké nad Váhom (okres Bytča)",
    "",
    ""
  ],
  [
    "32D516767816191",
    "Hliník nad Hronom (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "311517461807711",
    "Hliník nad Váhom (okres Bytča)",
    "",
    ""
  ],
  [
    "41D544230816221",
    "Hlinné (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "429522457816230",
    "Hlivištia (okres Sobrance)",
    "",
    ""
  ],
  [
    "213507032816248",
    "Hlohovec (okres Hlohovec)",
    "",
    ""
  ],
  [
    "228512851816400",
    "Hloža-Podhorie (okres Púchov)",
    "",
    ""
  ],
  [
    "41A526720816418",
    "Hniezdne (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "41A526762950149",
    "Hniezdno (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "42A526576816434",
    "Hnilčík (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "42A526584816477",
    "Hnilec (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "427522465816507",
    "Hnojné (okres Michalovce)",
    "",
    ""
  ],
  [
    "329514829816515",
    "Hnúšťa (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "329514837816558",
    "Hodejov (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "329514845816566",
    "Hodejovec (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "426521426816574",
    "Hodkovce (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "212503665814539",
    "Hody (okres Galanta)",
    "",
    ""
  ],
  [
    "232502243816582",
    "Hokovce (okres Levice)",
    "",
    ""
  ],
  [
    "41D528731816591",
    "Holčíkovce (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "216504378816728",
    "Holíč (okres Skalica)",
    "",
    ""
  ],
  [
    "326511439816850",
    "Holiša (okres Lučenec)",
    "",
    ""
  ],
  [
    "413523470816884",
    "Holumnica (okres Kežmarok)",
    "",
    ""
  ],
  [
    "428525731816892",
    "Honce (okres Rožňava)",
    "",
    ""
  ],
  [
    "237500968874965",
    "Hoňovce (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "232502251816906",
    "Hontianska Vrbica (okres Levice)",
    "",
    ""
  ],
  [
    "325518417816931",
    "Hontianske Nemce (okres Krupina)",
    "",
    ""
  ],
  [
    "325518425816973",
    "Hontianske Tesáre (okres Krupina)",
    "",
    ""
  ],
  [
    "232545350862673",
    "Hontianske Trsťany (okres Levice)",
    "",
    ""
  ],
  [
    "312509132808512",
    "Horelica (okres Čadca)",
    "",
    ""
  ],
  [
    "228513326817007",
    "Horenice (okres Púchov)",
    "",
    ""
  ],
  [
    "429522473817147",
    "Horňa (okres Sobrance)",
    "",
    ""
  ],
  [
    "228557692817163",
    "Horná Breznica (okres Púchov)",
    "",
    ""
  ],
  [
    "235555878817171",
    "Horná Kráľová (okres Šaľa)",
    "",
    ""
  ],
  [
    "217507041817180",
    "Horná Krupá (okres Trnava)",
    "",
    ""
  ],
  [
    "323508624817201",
    "Horná Lehota (okres Brezno)",
    "",
    ""
  ],
  [
    "313509671817210",
    "Horná Lehota (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "226513083817287",
    "Horná Mariková (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "321508632817457",
    "Horná Mičiná (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "229506028817856",
    "Horňany (okres Trenčín)",
    "",
    ""
  ],
  [
    "222513091817465",
    "Horná Poruba (okres Ilava)",
    "",
    ""
  ],
  [
    "211501590817511",
    "Horná Potôň (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "232502260817571",
    "Horná Seč (okres Levice)",
    "",
    ""
  ],
  [
    "224506001817589",
    "Horná Streda (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "32A516015817597",
    "Horná Strehová (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "229506010817627",
    "Horná Súča (okres Trenčín)",
    "",
    ""
  ],
  [
    "319512273817708",
    "Horná Štubňa (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "31B518042817783",
    "Horná Tižina (okres Žilina)",
    "",
    ""
  ],
  [
    "32D517186817791",
    "Horná Trnávka (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "32D581747817830",
    "Horná Ves (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "227514004817805",
    "Horná Ves (okres Prievidza)",
    "",
    ""
  ],
  [
    "32D516791817848",
    "Horná Ždaňa (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "232502103806901",
    "Horné Brhlovce (okres Levice)",
    "",
    ""
  ],
  [
    "224505897807826",
    "Horné Bzince (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "232502162810614",
    "Horné Devičany (okres Levice)",
    "",
    ""
  ],
  [
    "221545651817864",
    "Horné Držkovce (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "214507008813338",
    "Horné Dubovany (okres Piešťany)",
    "",
    ""
  ],
  [
    "217507059817872",
    "Horné Dubové (okres Trnava)",
    "",
    ""
  ],
  [
    "32C516805817881",
    "Horné Hámre (okres Žarnovica)",
    "",
    ""
  ],
  [
    "231580911816621",
    "Horné Holiare (okres Komárno)",
    "",
    ""
  ],
  [
    "236556351817970",
    "Horné Chlebany (okres Topoľčany)",
    "",
    ""
  ],
  [
    "232502383821748",
    "Horné Jabloňovce (okres Levice)",
    "",
    ""
  ],
  [
    "211501662822078",
    "Horné Janíky (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "228513610850501",
    "Horné Kočkovce (okres Púchov)",
    "",
    ""
  ],
  [
    "233500011840076",
    "Horné Krškany (okres Nitra)",
    "",
    ""
  ],
  [
    "233545635817996",
    "Horné Lefantovce (okres Nitra)",
    "",
    ""
  ],
  [
    "217506842833193",
    "Horné Lovčice (okres Trnava)",
    "",
    ""
  ],
  [
    "325518433818011",
    "Horné Mladonice (okres Krupina)",
    "",
    ""
  ],
  [
    "229506273838616",
    "Horné Motešice (okres Trenčín)",
    "",
    ""
  ],
  [
    "211555568864714",
    "Horné Mýto (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "221542920818046",
    "Horné Naštice (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "236542938818089",
    "Horné Obdokovce (okres Topoľčany)",
    "",
    ""
  ],
  [
    "32D516589874515",
    "Horné Opatovce (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "217507067818097",
    "Horné Orešany (okres Trnava)",
    "",
    ""
  ],
  [
    "213507075818127",
    "Horné Otrokovce (okres Hlohovec)",
    "",
    ""
  ],
  [
    "221542652818135",
    "Horné Ozorovce (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "32A516023818143",
    "Horné Plachtince (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "32A516317849642",
    "Horné Príbelce (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "321508641818160",
    "Horné Pršany (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "325518701854204",
    "Horné Rykynčice (okres Krupina)",
    "",
    ""
  ],
  [
    "212503771818178",
    "Horné Saliby (okres Galanta)",
    "",
    ""
  ],
  [
    "232502278818194",
    "Horné Semerovce (okres Levice)",
    "",
    ""
  ],
  [
    "237500747856274",
    "Horné Sľažany (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "229506036818216",
    "Horné Srnie (okres Trenčín)",
    "",
    ""
  ],
  [
    "32A516031818232",
    "Horné Strháre (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "325518425860867",
    "Horné Šipice (okres Krupina)",
    "",
    ""
  ],
  [
    "236542954818241",
    "Horné Štitáre (okres Topoľčany)",
    "",
    ""
  ],
  [
    "227514390862304",
    "Horné Šútovce (okres Prievidza)",
    "",
    ""
  ],
  [
    "325518867862797",
    "Horné Terany (okres Krupina)",
    "",
    ""
  ],
  [
    "211501921863939",
    "Horné Topoľníky (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "213556602818259",
    "Horné Trhovište (okres Hlohovec)",
    "",
    ""
  ],
  [
    "232502286818275",
    "Horné Turovce (okres Levice)",
    "",
    ""
  ],
  [
    "227514012818283",
    "Horné Vestenice (okres Prievidza)",
    "",
    ""
  ],
  [
    "329514853818291",
    "Horné Zahorany (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "232502979872920",
    "Horné Zbrojníky (okres Levice)",
    "",
    ""
  ],
  [
    "213556530818313",
    "Horné Zelenice (okres Hlohovec)",
    "",
    ""
  ],
  [
    "232502995874329",
    "Horné Žemberovce (okres Levice)",
    "",
    ""
  ],
  [
    "325518441818321",
    "Horný Badín (okres Krupina)",
    "",
    ""
  ],
  [
    "211501603818356",
    "Horný Bar (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "212504009855375",
    "Horný Čepeň (okres Galanta)",
    "",
    ""
  ],
  [
    "32A515949810002",
    "Horný Dačov Lom (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "232502936868949",
    "Horný Ďur (okres Levice)",
    "",
    ""
  ],
  [
    "31B517593818381",
    "Horný Hričov (okres Žilina)",
    "",
    ""
  ],
  [
    "234503525875163",
    "Horný chotár (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "235504092865397",
    "Horný Jatov (okres Šaľa)",
    "",
    ""
  ],
  [
    "316512290818399",
    "Horný Kalník (okres Martin)",
    "",
    ""
  ],
  [
    "226580856818402",
    "Horný Lieskov (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "226512842818411",
    "Horný Moštenec (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "233500933818429",
    "Horný Ohaj (okres Nitra)",
    "",
    ""
  ],
  [
    "232502294818437",
    "Horný Pial (okres Levice)",
    "",
    ""
  ],
  [
    "211501611819565",
    "Horný Štál (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "31A510084861103",
    "Horný Štefanov (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "232502847862690",
    "Horný Tekovský Hrádok (okres Levice)",
    "",
    ""
  ],
  [
    "324518450818453",
    "Horný Tisovník (okres Detva)",
    "",
    ""
  ],
  [
    "319512699865834",
    "Horný Turček (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "314509205818526",
    "Horný Vadičov (okres Kysucké Nové Mesto)",
    "",
    ""
  ],
  [
    "233500917869520",
    "Horný Vinodol (okres Nitra)",
    "",
    ""
  ],
  [
    "228513121818551",
    "Horovce (okres Púchov)",
    "",
    ""
  ],
  [
    "427522481818577",
    "Horovce (okres Michalovce)",
    "",
    ""
  ],
  [
    "232502031818585",
    "Horša (okres Levice)",
    "",
    ""
  ],
  [
    "212503789818607",
    "Hoste (okres Galanta)",
    "",
    ""
  ],
  [
    "329514861818615",
    "Hostice (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "237500283818631",
    "Hostie (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "329514870818658",
    "Hostišovce (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "233555959818674",
    "Hosťová (okres Nitra)",
    "",
    ""
  ],
  [
    "237500305818682",
    "Hosťovce (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "426518107841455",
    "Hosťovce (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "419520209818704",
    "Hostovice (okres Snina)",
    "",
    ""
  ],
  [
    "228513610818712",
    "Hoštiná (okres Púchov)",
    "",
    ""
  ],
  [
    "416523496818721",
    "Hozelec (okres Poprad)",
    "",
    ""
  ],
  [
    "228513326817023",
    "Hôrka (okres Púchov)",
    "",
    ""
  ],
  [
    "416523488817040",
    "Hôrka (okres Poprad)",
    "",
    ""
  ],
  [
    "224505994817104",
    "Hôrka nad Váhom (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "31B517577817139",
    "Hôrky (okres Žilina)",
    "",
    ""
  ],
  [
    "32C516813818763",
    "Hrabičov (okres Žarnovica)",
    "",
    ""
  ],
  [
    "417524476818801",
    "Hrabkov (okres Prešov)",
    "",
    ""
  ],
  [
    "419520217818810",
    "Hrabová Roztoka (okres Snina)",
    "",
    ""
  ],
  [
    "41C527319818828",
    "Hrabovčík (okres Svidník)",
    "",
    ""
  ],
  [
    "311517461818836",
    "Hrabové (okres Bytča)",
    "",
    ""
  ],
  [
    "411519251818844",
    "Hrabovec (okres Bardejov)",
    "",
    ""
  ],
  [
    "412520225818852",
    "Hrabovec nad Laborcom (okres Humenné)",
    "",
    ""
  ],
  [
    "229506044818861",
    "Hrabovka (okres Trenčín)",
    "",
    ""
  ],
  [
    "327511471823058",
    "Hrabovo (okres Poltár)",
    "",
    ""
  ],
  [
    "411519260818887",
    "Hrabské (okres Bardejov)",
    "",
    ""
  ],
  [
    "42A526592818909",
    "Hrabušice (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "227513881850195",
    "Hradec (okres Prievidza)",
    "",
    ""
  ],
  [
    "417525294818950",
    "Hradisko (okres Prešov)",
    "",
    ""
  ],
  [
    "413523500818941",
    "Hradisko (okres Kežmarok)",
    "",
    ""
  ],
  [
    "225542962818968",
    "Hradište (okres Partizánske)",
    "",
    ""
  ],
  [
    "327511447818984",
    "Hradište (okres Poltár)",
    "",
    ""
  ],
  [
    "215504386819000",
    "Hradište pod Vrátnom (okres Senica)",
    "",
    ""
  ],
  [
    "427522759835455",
    "Hradištská Moľva (okres Michalovce)",
    "",
    ""
  ],
  [
    "224506052819018",
    "Hrádok (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "224506061819042",
    "Hrachovište (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "329514888819051",
    "Hrachovo (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "42B528366819069",
    "Hraň (okres Trebišov)",
    "",
    ""
  ],
  [
    "41A526738819123",
    "Hraničné (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "416523518819131",
    "Hranovnica (okres Poprad)",
    "",
    ""
  ],
  [
    "223506079819158",
    "Hrašné (okres Myjava)",
    "",
    ""
  ],
  [
    "426521442819212",
    "Hrašovík (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "318510998819221",
    "Hrboltová (okres Ružomberok)",
    "",
    ""
  ],
  [
    "42B528374819247",
    "Hrčeľ (okres Trebišov)",
    "",
    ""
  ],
  [
    "428525740819255",
    "Hrhov (okres Rožňava)",
    "",
    ""
  ],
  [
    "42B528382819263",
    "Hriadky (okres Trebišov)",
    "",
    ""
  ],
  [
    "31B547590819271",
    "Hričovské Podhradie (okres Žilina)",
    "",
    ""
  ],
  [
    "324518468819298",
    "Hriňová (okres Detva)",
    "",
    ""
  ],
  [
    "421543144819441",
    "Hrišovce (okres Gelnica)",
    "",
    ""
  ],
  [
    "232581895819450",
    "Hrkovce (okres Levice)",
    "",
    ""
  ],
  [
    "328514896819468",
    "Hrlica (okres Revúca)",
    "",
    ""
  ],
  [
    "217581020819476",
    "Hrnčiarovce (okres Trnava)",
    "",
    ""
  ],
  [
    "327514918819549",
    "Hrnčiarske Zalužany (okres Poltár)",
    "",
    ""
  ],
  [
    "321508659819603",
    "Hrochoť (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "41A526746819620",
    "Hromoš (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "323508667819662",
    "Hronec (okres Brezno)",
    "",
    ""
  ],
  [
    "321580236819743",
    "Hronsek (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "32B518476819760",
    "Hronská Breznica (okres Zvolen)",
    "",
    ""
  ],
  [
    "32D516821819786",
    "Hronská Dúbrava (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "232502332819794",
    "Hronské Kľačany (okres Levice)",
    "",
    ""
  ],
  [
    "232502341819808",
    "Hronské Kosihy (okres Levice)",
    "",
    ""
  ],
  [
    "32C516830819816",
    "Hronský Beňadik (okres Žarnovica)",
    "",
    ""
  ],
  [
    "108503797819824",
    "Hrubá Borša (okres Senec)",
    "",
    ""
  ],
  [
    "224505897807834",
    "Hrubá Strana (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "106508233871800",
    "Hrubé lúky (okres Malacky)",
    "",
    ""
  ],
  [
    "412520233819859",
    "Hrubov (okres Humenné)",
    "",
    ""
  ],
  [
    "108503801819867",
    "Hrubý Šúr (okres Senec)",
    "",
    ""
  ],
  [
    "32A516040819883",
    "Hrušov (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "428525758819972",
    "Hrušov (okres Rožňava)",
    "",
    ""
  ],
  [
    "236542971819981",
    "Hrušovany (okres Topoľčany)",
    "",
    ""
  ],
  [
    "224505897807842",
    "Hrušové (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "329514926819999",
    "Hrušovo (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "317509680820024",
    "Hruštín (okres Námestovo)",
    "",
    ""
  ],
  [
    "211501620820032",
    "Hubice (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "214556581820041",
    "Hubina (okres Piešťany)",
    "",
    ""
  ],
  [
    "418524492820059",
    "Hubošovce (okres Sabinov)",
    "",
    ""
  ],
  [
    "318510441820075",
    "Hubová (okres Ružomberok)",
    "",
    ""
  ],
  [
    "329514934820083",
    "Hubovo (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "328525766820091",
    "Hucín (okres Revúca)",
    "",
    ""
  ],
  [
    "412520241820105",
    "Hudcovce (okres Humenné)",
    "",
    ""
  ],
  [
    "234503193820113",
    "Hul (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "232502821862614",
    "Hulvinky (okres Levice)",
    "",
    ""
  ],
  [
    "412520004820121",
    "Humenné (okres Humenné)",
    "",
    ""
  ],
  [
    "412520250820369",
    "Humenský Rokytov (okres Humenné)",
    "",
    ""
  ],
  [
    "413523526820385",
    "Huncovce (okres Kežmarok)",
    "",
    ""
  ],
  [
    "41C527327820393",
    "Hunkovce (okres Svidník)",
    "",
    ""
  ],
  [
    "108503819820407",
    "Hurbanova Ves (okres Senec)",
    "",
    ""
  ],
  [
    "231501140820423",
    "Hurbanovo (okres Komárno)",
    "",
    ""
  ],
  [
    "429522490820482",
    "Husák (okres Sobrance)",
    "",
    ""
  ],
  [
    "329514942820491",
    "Husiná (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "422598186827029",
    "Huštáky (okres Košice I)",
    "",
    ""
  ],
  [
    "411519278820539",
    "Hutka (okres Bardejov)",
    "",
    ""
  ],
  [
    "315510459820563",
    "Huty (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "211501638820571",
    "Hviezdoslavov (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "311517623820598",
    "Hvozdnica (okres Bytča)",
    "",
    ""
  ],
  [
    "315510467820610",
    "Hybe (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "426521469820636",
    "Hýľov (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "417524743831298",
    "Chabžany (okres Prešov)",
    "",
    ""
  ],
  [
    "227513911807630",
    "Chalmová (okres Prievidza)",
    "",
    ""
  ],
  [
    "329514951820644",
    "Chanava (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "234503207820661",
    "Chľaba (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "313509698820679",
    "Chlebnice (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "412520268820687",
    "Chlmec (okres Humenné)",
    "",
    ""
  ],
  [
    "41A526754820695",
    "Chmeľnica (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "417524506820709",
    "Chmeľov (okres Prešov)",
    "",
    ""
  ],
  [
    "411519286820725",
    "Chmeľová (okres Bardejov)",
    "",
    ""
  ],
  [
    "417524514820733",
    "Chmeľovec (okres Prešov)",
    "",
    ""
  ],
  [
    "417524549820750",
    "Chmiňany (okres Prešov)",
    "",
    ""
  ],
  [
    "417524522820776",
    "Chminianska Nová Ves (okres Prešov)",
    "",
    ""
  ],
  [
    "417524531820784",
    "Chminianske Jakubovany (okres Prešov)",
    "",
    ""
  ],
  [
    "237500321820792",
    "Choča (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "229506087820831",
    "Chocholná-Velčice (okres Trenčín)",
    "",
    ""
  ],
  [
    "429522503820849",
    "Choňkovce (okres Sobrance)",
    "",
    ""
  ],
  [
    "232502871865630",
    "Chorvatice (okres Levice)",
    "",
    ""
  ],
  [
    "108507911820865",
    "Chorvátsky Grob (okres Senec)",
    "",
    ""
  ],
  [
    "426599310841463",
    "Chorváty (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "41B527335820873",
    "Chotča (okres Stropkov)",
    "",
    ""
  ],
  [
    "231501158820881",
    "Chotín (okres Komárno)",
    "",
    ""
  ],
  [
    "236556165820903",
    "Chrabrany (okres Topoľčany)",
    "",
    ""
  ],
  [
    "329514969820911",
    "Chrámec (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "32A516058820946",
    "Chrastince (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "42A543152820938",
    "Chrasť nad Hornádom (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "426521477820954",
    "Chrastné (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "233500011840378",
    "Chrenová (okres Nitra)",
    "",
    ""
  ],
  [
    "227514021820997",
    "Chrenovec (okres Prievidza)",
    "",
    ""
  ],
  [
    "216504394821004",
    "Chropov (okres Skalica)",
    "",
    ""
  ],
  [
    "32A516066821012",
    "Chrťany (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "214507121821039",
    "Chtelnica (okres Piešťany)",
    "",
    ""
  ],
  [
    "221556408821047",
    "Chudá Lehota (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "328514977821055",
    "Chvalová (okres Revúca)",
    "",
    ""
  ],
  [
    "223504408821063",
    "Chvojnica (okres Myjava)",
    "",
    ""
  ],
  [
    "227514039821071",
    "Chvojnica (okres Prievidza)",
    "",
    ""
  ],
  [
    "426521876845914",
    "Chym (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "225543004821098",
    "Chynorany (okres Partizánske)",
    "",
    ""
  ],
  [
    "328525774821110",
    "Chyžné (okres Revúca)",
    "",
    ""
  ],
  [
    "108555487821128",
    "Igram (okres Senec)",
    "",
    ""
  ],
  [
    "32D516848821152",
    "Ihráč (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "228513610821161",
    "Ihrište (okres Púchov)",
    "",
    ""
  ],
  [
    "315510262821179",
    "Iľanovo (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "222513156821187",
    "Ilava (okres Ilava)",
    "",
    ""
  ],
  [
    "42A543161821209",
    "Iliašovce (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "322516856821225",
    "Ilija (okres Banská Štiavnica)",
    "",
    ""
  ],
  [
    "231501166821241",
    "Imeľ (okres Komárno)",
    "",
    ""
  ],
  [
    "232502359821250",
    "Iňa (okres Levice)",
    "",
    ""
  ],
  [
    "427522511821276",
    "Iňačovce (okres Michalovce)",
    "",
    ""
  ],
  [
    "429522520821284",
    "Inovce (okres Sobrance)",
    "",
    ""
  ],
  [
    "32A516074821292",
    "Ipeľské Predmostie (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "232502367821306",
    "Ipeľské Úľany (okres Levice)",
    "",
    ""
  ],
  [
    "327511595821357",
    "Ipeľský Potok (okres Poltár)",
    "",
    ""
  ],
  [
    "232502375821373",
    "Ipeľský Sokolec (okres Levice)",
    "",
    ""
  ],
  [
    "313509701821390",
    "Istebné (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "229505820872601",
    "Istebník (okres Trenčín)",
    "",
    ""
  ],
  [
    "318507300821403",
    "Ivachnová (okres Ružomberok)",
    "",
    ""
  ],
  [
    "319512303821411",
    "Ivančiná (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "329514985821420",
    "Ivanice (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "108507938821446",
    "Ivanka pri Dunaji (okres Senec)",
    "",
    ""
  ],
  [
    "233558320821454",
    "Ivanka pri Nitre (okres Nitra)",
    "",
    ""
  ],
  [
    "229506095821471",
    "Ivanovce (okres Trenčín)",
    "",
    ""
  ],
  [
    "231501174821501",
    "Iža (okres Komárno)",
    "",
    ""
  ],
  [
    "315556807821519",
    "Ižipovce (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "427528391821527",
    "Ižkovce (okres Michalovce)",
    "",
    ""
  ],
  [
    "211501522821535",
    "Ižop (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "412520276821551",
    "Jabloň (okres Humenné)",
    "",
    ""
  ],
  [
    "107507946821560",
    "Jablonec (okres Pezinok)",
    "",
    ""
  ],
  [
    "215504416821586",
    "Jablonica (okres Senica)",
    "",
    ""
  ],
  [
    "223504424821632",
    "Jablonka (okres Myjava)",
    "",
    ""
  ],
  [
    "414543179821713",
    "Jablonov (okres Levoča)",
    "",
    ""
  ],
  [
    "311517631821772",
    "Jablonové (okres Bytča)",
    "",
    ""
  ],
  [
    "106507954821756",
    "Jablonové (okres Malacky)",
    "",
    ""
  ],
  [
    "428525782821721",
    "Jablonov nad Turňou (okres Rožňava)",
    "",
    ""
  ],
  [
    "236556157821781",
    "Jacovce (okres Topoľčany)",
    "",
    ""
  ],
  [
    "211501654821811",
    "Jahodná (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "421543187821845",
    "Jaklovce (okres Gelnica)",
    "",
    ""
  ],
  [
    "418524557821853",
    "Jakovany (okres Sabinov)",
    "",
    ""
  ],
  [
    "41A526762821870",
    "Jakubany (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "106507962821888",
    "Jakubov (okres Malacky)",
    "",
    ""
  ],
  [
    "315510505821900",
    "Jakubovany (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "418524573821926",
    "Jakubovany (okres Sabinov)",
    "",
    ""
  ],
  [
    "418524565821896",
    "Jakubova Voľa (okres Sabinov)",
    "",
    ""
  ],
  [
    "41B527343821934",
    "Jakušovce (okres Stropkov)",
    "",
    ""
  ],
  [
    "232502057802239",
    "Jalakšová (okres Levice)",
    "",
    ""
  ],
  [
    "32D517313821942",
    "Jalná (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "419520284821951",
    "Jalová (okres Snina)",
    "",
    ""
  ],
  [
    "227557714821977",
    "Jalovec (okres Prievidza)",
    "",
    ""
  ],
  [
    "315510513821969",
    "Jalovec (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "213507130821985",
    "Jalšové (okres Hlohovec)",
    "",
    ""
  ],
  [
    "325518484822001",
    "Jalšovík (okres Krupina)",
    "",
    ""
  ],
  [
    "42A543195822027",
    "Jamník (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "315510521822019",
    "Jamník (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "329514993822035",
    "Janice (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "426521485822043",
    "Janík (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "412520292822086",
    "Jankovce (okres Humenné)",
    "",
    ""
  ],
  [
    "108545333822094",
    "Jánošíková (okres Senec)",
    "",
    ""
  ],
  [
    "417524581822108",
    "Janov (okres Prešov)",
    "",
    ""
  ],
  [
    "32D516872822124",
    "Janova Lehota (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "225543047822132",
    "Janova Ves (okres Partizánske)",
    "",
    ""
  ],
  [
    "411519294822167",
    "Janovce (okres Bardejov)",
    "",
    ""
  ],
  [
    "416523542822183",
    "Jánovce (okres Poprad)",
    "",
    ""
  ],
  [
    "212503827822141",
    "Jánovce (okres Galanta)",
    "",
    ""
  ],
  [
    "417524590822205",
    "Janovík (okres Prešov)",
    "",
    ""
  ],
  [
    "323508691822213",
    "Jarabá (okres Brezno)",
    "",
    ""
  ],
  [
    "41A526771822221",
    "Jarabina (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "217506877822230",
    "Jarná (okres Trnava)",
    "",
    ""
  ],
  [
    "233500356822248",
    "Jarok (okres Nitra)",
    "",
    ""
  ],
  [
    "105529443822256",
    "Jarovce (okres Bratislava V)",
    "",
    ""
  ],
  [
    "418524603822272",
    "Jarovnice (okres Sabinov)",
    "",
    ""
  ],
  [
    "226513172822281",
    "Jasenica (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "323508705822302",
    "Jasenie (okres Brezno)",
    "",
    ""
  ],
  [
    "429522538822337",
    "Jasenov (okres Sobrance)",
    "",
    ""
  ],
  [
    "412559547822329",
    "Jasenov (okres Humenné)",
    "",
    ""
  ],
  [
    "313509710822345",
    "Jasenová (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "41D528749822353",
    "Jasenovce (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "31B517640822388",
    "Jasenové (okres Žilina)",
    "",
    ""
  ],
  [
    "319512311822396",
    "Jasenovo (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "217507156822418",
    "Jaslovce (okres Trnava)",
    "",
    ""
  ],
  [
    "426521493822434",
    "Jasov (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "234503215822451",
    "Jasová (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "32D516881822485",
    "Jastrabá (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "211501701828271",
    "Jastrabie Kračany (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "41D528757822493",
    "Jastrabie nad Topľou (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "427522546822507",
    "Jastrabie pri Michalovciach (okres Michalovce)",
    "",
    ""
  ],
  [
    "234503223822515",
    "Jatov (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "319512320822566",
    "Jazernica (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "425599816877999",
    "Jazero (okres Košice IV)",
    "",
    ""
  ],
  [
    "411519308822574",
    "Jedlinka (okres Bardejov)",
    "",
    ""
  ],
  [
    "237500364822621",
    "Jedľové Kostoľany (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "233500372822655",
    "Jelenec (okres Nitra)",
    "",
    ""
  ],
  [
    "212503835822663",
    "Jelka (okres Galanta)",
    "",
    ""
  ],
  [
    "328525791822698",
    "Jelšava (okres Revúca)",
    "",
    ""
  ],
  [
    "328525677815004",
    "Jelšavská Teplica (okres Revúca)",
    "",
    ""
  ],
  [
    "233500381822728",
    "Jelšovce (okres Nitra)",
    "",
    ""
  ],
  [
    "326511463822736",
    "Jelšovec (okres Lučenec)",
    "",
    ""
  ],
  [
    "429522554822744",
    "Jenkovce (okres Sobrance)",
    "",
    ""
  ],
  [
    "232556777802778",
    "Jesenské (okres Levice)",
    "",
    ""
  ],
  [
    "329515001822795",
    "Jesenské (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "329515019822817",
    "Jestice (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "227513962822825",
    "Ješkova Ves (okres Prievidza)",
    "",
    ""
  ],
  [
    "225556416869023",
    "Ješkova Ves (okres Partizánske)",
    "",
    ""
  ],
  [
    "413523569822833",
    "Jezersko (okres Kežmarok)",
    "",
    ""
  ],
  [
    "428560049822841",
    "Jovice (okres Rožňava)",
    "",
    ""
  ],
  [
    "427522562822850",
    "Jovsa (okres Michalovce)",
    "",
    ""
  ],
  [
    "41C527351822906",
    "Jurkova Voľa (okres Svidník)",
    "",
    ""
  ],
  [
    "232502391822868",
    "Jur nad Hronom (okres Levice)",
    "",
    ""
  ],
  [
    "211501671822914",
    "Jurová (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "413523577822922",
    "Jurské (okres Kežmarok)",
    "",
    ""
  ],
  [
    "41D528765822931",
    "Juskova Voľa (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "425599824827118",
    "Južné Mesto (okres Košice IV)",
    "",
    ""
  ],
  [
    "427522571822957",
    "Kačanov (okres Michalovce)",
    "",
    ""
  ],
  [
    "212503843822965",
    "Kajal (okres Galanta)",
    "",
    ""
  ],
  [
    "319512338822973",
    "Kaľamenová (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "318510530822981",
    "Kalameny (okres Ružomberok)",
    "",
    ""
  ],
  [
    "42A543209822990",
    "Kaľava (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "232502031823015",
    "Kalinčiakovo (okres Levice)",
    "",
    ""
  ],
  [
    "108507997823023",
    "Kalinkovo (okres Senec)",
    "",
    ""
  ],
  [
    "415520314823031",
    "Kalinov (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "327511471823066",
    "Kalinovo (okres Poltár)",
    "",
    ""
  ],
  [
    "232502413823112",
    "Kalná (okres Levice)",
    "",
    ""
  ],
  [
    "419520322823147",
    "Kalná Roztoka (okres Snina)",
    "",
    ""
  ],
  [
    "232502413823121",
    "Kalnica (okres Levice)",
    "",
    ""
  ],
  [
    "224506109823155",
    "Kálnica (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "41C519316823163",
    "Kalnište (okres Svidník)",
    "",
    ""
  ],
  [
    "326511480823171",
    "Kalonda (okres Lučenec)",
    "",
    ""
  ],
  [
    "329515027823180",
    "Kaloša (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "426521507823210",
    "Kalša (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "427522589823228",
    "Kaluža (okres Michalovce)",
    "",
    ""
  ],
  [
    "236543039823236",
    "Kamanová (okres Topoľčany)",
    "",
    ""
  ],
  [
    "328525812823252",
    "Kameňany (okres Revúca)",
    "",
    ""
  ],
  [
    "227514063823261",
    "Kamenec pod Vtáčnikom (okres Prievidza)",
    "",
    ""
  ],
  [
    "418524611823287",
    "Kamenica (okres Sabinov)",
    "",
    ""
  ],
  [
    "412520331823325",
    "Kamenica nad Cirochou (okres Humenné)",
    "",
    ""
  ],
  [
    "234503231823333",
    "Kamenica nad Hronom (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "222557404823350",
    "Kameničany (okres Ilava)",
    "",
    ""
  ],
  [
    "231501182823384",
    "Kameničná (okres Komárno)",
    "",
    ""
  ],
  [
    "234503240823422",
    "Kamenín (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "41D528773823457",
    "Kamenná Poruba (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "31B517658823449",
    "Kamenná Poruba (okres Žilina)",
    "",
    ""
  ],
  [
    "422598151827444",
    "Kamenné (okres Košice I)",
    "",
    ""
  ],
  [
    "32A516082823473",
    "Kamenné Kosihy (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "234503258823490",
    "Kamenný Most (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "412520349823503",
    "Kamienka (okres Humenné)",
    "",
    ""
  ],
  [
    "41A526789823511",
    "Kamienka (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "227514071823520",
    "Kanianka (okres Prievidza)",
    "",
    ""
  ],
  [
    "233500399823538",
    "Kapince (okres Nitra)",
    "",
    ""
  ],
  [
    "41C527360823546",
    "Kapišová (okres Svidník)",
    "",
    ""
  ],
  [
    "108555495823554",
    "Kaplna (okres Senec)",
    "",
    ""
  ],
  [
    "42B528510831263",
    "Kapoňa (okres Trebišov)",
    "",
    ""
  ],
  [
    "417524620823571",
    "Kapušany (okres Prešov)",
    "",
    ""
  ],
  [
    "427528404823589",
    "Kapušianske Kľačany (okres Michalovce)",
    "",
    ""
  ],
  [
    "427528579836435",
    "Kapušianske Vojkovce (okres Michalovce)",
    "",
    ""
  ],
  [
    "226513008823597",
    "Kardošova Vieska (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "316512346823601",
    "Karlová (okres Martin)",
    "",
    ""
  ],
  [
    "104529397805211",
    "Karlova Ves (okres Bratislava IV)",
    "",
    ""
  ],
  [
    "412520357823627",
    "Karná (okres Humenné)",
    "",
    ""
  ],
  [
    "42B528412823635",
    "Kašov (okres Trebišov)",
    "",
    ""
  ],
  [
    "32B518875865338",
    "Kašova Lehôtka (okres Zvolen)",
    "",
    ""
  ],
  [
    "217507164823643",
    "Kátlovce (okres Trnava)",
    "",
    ""
  ],
  [
    "216504432823651",
    "Kátov (okres Skalica)",
    "",
    ""
  ],
  [
    "414543578823660",
    "Katúň (okres Levoča)",
    "",
    ""
  ],
  [
    "422598119823678",
    "Kavečany (okres Košice I)",
    "",
    ""
  ],
  [
    "426521523823708",
    "Kecerovské Kostoľany (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "426521523823732",
    "Kecerovské Pekľany (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "426521540823741",
    "Kecerovský Lipovec (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "41C527378823759",
    "Kečkovce (okres Svidník)",
    "",
    ""
  ],
  [
    "428525821823767",
    "Kečovo (okres Rožňava)",
    "",
    ""
  ],
  [
    "426559687819085",
    "Kechnec (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "417524638823775",
    "Kendice (okres Prešov)",
    "",
    ""
  ],
  [
    "329515035823791",
    "Kesovce (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "232502472830178",
    "Keť (okres Levice)",
    "",
    ""
  ],
  [
    "319512095803316",
    "Kevice (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "413523585823813",
    "Kežmarok (okres Kežmarok)",
    "",
    ""
  ],
  [
    "32A516091823945",
    "Kiarov (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "213507172823970",
    "Kľačany (okres Hlohovec)",
    "",
    ""
  ],
  [
    "32D517313823996",
    "Kľačany (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "31B557994824003",
    "Kľače (okres Žilina)",
    "",
    ""
  ],
  [
    "227514080824011",
    "Kľačno (okres Prievidza)",
    "",
    ""
  ],
  [
    "41D528781824020",
    "Kladzany (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "32C516902824038",
    "Kľak (okres Žarnovica)",
    "",
    ""
  ],
  [
    "233500402824054",
    "Klasov (okres Nitra)",
    "",
    ""
  ],
  [
    "322516601824062",
    "Klastava (okres Banská Štiavnica)",
    "",
    ""
  ],
  [
    "316512354824089",
    "Kláštor pod Znievom (okres Martin)",
    "",
    ""
  ],
  [
    "225543047824101",
    "Klátova Nová Ves (okres Partizánske)",
    "",
    ""
  ],
  [
    "414543225824127",
    "Klčov (okres Levoča)",
    "",
    ""
  ],
  [
    "217506818803596",
    "Klčovany (okres Trnava)",
    "",
    ""
  ],
  [
    "32A516104824135",
    "Kleňany (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "417524646824143",
    "Klenov (okres Prešov)",
    "",
    ""
  ],
  [
    "419520365824151",
    "Klenová (okres Snina)",
    "",
    ""
  ],
  [
    "329515043824224",
    "Klenovec (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "226557552824348",
    "Klieština (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "317509728824364",
    "Klin (okres Námestovo)",
    "",
    ""
  ],
  [
    "42B513831858960",
    "Klin nad Bodrogom (okres Trebišov)",
    "",
    ""
  ],
  [
    "225505731869031",
    "Klíž (okres Partizánske)",
    "",
    ""
  ],
  [
    "231501191824381",
    "Klížska Nemá (okres Komárno)",
    "",
    ""
  ],
  [
    "225505731869040",
    "Klížske Hradište (okres Partizánske)",
    "",
    ""
  ],
  [
    "222513156824402",
    "Klobušice (okres Ilava)",
    "",
    ""
  ],
  [
    "324518492824437",
    "Klokoč (okres Detva)",
    "",
    ""
  ],
  [
    "427522597824844",
    "Klokočov (okres Michalovce)",
    "",
    ""
  ],
  [
    "312509213824551",
    "Klokočov (okres Čadca)",
    "",
    ""
  ],
  [
    "312509221824852",
    "Klubina (okres Čadca)",
    "",
    ""
  ],
  [
    "211501701828289",
    "Kľučiarove Kračany (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "229506281824879",
    "Kľúčové (okres Trenčín)",
    "",
    ""
  ],
  [
    "211501689824887",
    "Kľúčovec (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "421543233824895",
    "Kluknava (okres Gelnica)",
    "",
    ""
  ],
  [
    "411519324824925",
    "Kľušov (okres Bardejov)",
    "",
    ""
  ],
  [
    "232502219802247",
    "Kmeťovce (okres Levice)",
    "",
    ""
  ],
  [
    "234503266824941",
    "Kmeťovo (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "313509540824968",
    "Kňažia (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "237582816874949",
    "Kňažice (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "428525839824976",
    "Kobeliarovo (okres Rožňava)",
    "",
    ""
  ],
  [
    "41C519332824984",
    "Kobylnice (okres Svidník)",
    "",
    ""
  ],
  [
    "411519341824992",
    "Kobyly (okres Bardejov)",
    "",
    ""
  ],
  [
    "428525847825018",
    "Koceľovce (okres Rožňava)",
    "",
    ""
  ],
  [
    "329515051825026",
    "Kociha (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "227514098825051",
    "Kocurany (okres Prievidza)",
    "",
    ""
  ],
  [
    "214507440825069",
    "Kocurice (okres Piešťany)",
    "",
    ""
  ],
  [
    "214507199825077",
    "Kočín (okres Piešťany)",
    "",
    ""
  ],
  [
    "224506125825093",
    "Kočovce (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "411519359825115",
    "Kochanovce (okres Bardejov)",
    "",
    ""
  ],
  [
    "412520373825123",
    "Kochanovce nad Laborcom (okres Humenné)",
    "",
    ""
  ],
  [
    "417524654825131",
    "Kojatice (okres Prešov)",
    "",
    ""
  ],
  [
    "421543241825166",
    "Kojšov (okres Gelnica)",
    "",
    ""
  ],
  [
    "327511498825298",
    "Kokava nad Rimavicou (okres Poltár)",
    "",
    ""
  ],
  [
    "417524662825387",
    "Kokošovce (okres Prešov)",
    "",
    ""
  ],
  [
    "426521558825409",
    "Kokšov-Bakša (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "41A526797825433",
    "Kolačkov (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "225543055825441",
    "Kolačno (okres Partizánske)",
    "",
    ""
  ],
  [
    "32A516112825689",
    "Koláre (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "311517674825506",
    "Kolárovice (okres Bytča)",
    "",
    ""
  ],
  [
    "231501204825581",
    "Kolárovo (okres Komárno)",
    "",
    ""
  ],
  [
    "419520381825697",
    "Kolbasov (okres Snina)",
    "",
    ""
  ],
  [
    "41B527386825701",
    "Kolbovce (okres Stropkov)",
    "",
    ""
  ],
  [
    "429522601825719",
    "Kolibabovce (okres Sobrance)",
    "",
    ""
  ],
  [
    "233500411825743",
    "Kolíňany (okres Nitra)",
    "",
    ""
  ],
  [
    "42A543250825760",
    "Kolinovce (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "419520390825778",
    "Kolonica (okres Snina)",
    "",
    ""
  ],
  [
    "234503274825786",
    "Kolta (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "41D528790825794",
    "Komárany (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "231501026825883",
    "Komárno (okres Komárno)",
    "",
    ""
  ],
  [
    "411519367826031",
    "Komárov (okres Bardejov)",
    "",
    ""
  ],
  [
    "426521566826049",
    "Komárovce (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "429523089826057",
    "Komárovce (okres Sobrance)",
    "",
    ""
  ],
  [
    "234503282826073",
    "Komjatice (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "318510548826081",
    "Komjatná (okres Ružomberok)",
    "",
    ""
  ],
  [
    "234503291826103",
    "Komoča (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "236543063826111",
    "Koniarovce (okres Topoľčany)",
    "",
    ""
  ],
  [
    "329515060826120",
    "Konrádovce (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "315507393826138",
    "Konská (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "31B517682826146",
    "Konská (okres Žilina)",
    "",
    ""
  ],
  [
    "316512508826154",
    "Konské (okres Martin)",
    "",
    ""
  ],
  [
    "429522627826162",
    "Koňuš (okres Sobrance)",
    "",
    ""
  ],
  [
    "32C516759826189",
    "Kopanice (okres Žarnovica)",
    "",
    ""
  ],
  [
    "216504459826197",
    "Kopčany (okres Skalica)",
    "",
    ""
  ],
  [
    "222513351826219",
    "Kopec (okres Ilava)",
    "",
    ""
  ],
  [
    "32D516937826227",
    "Kopernica (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "213507202826235",
    "Koplotovce (okres Hlohovec)",
    "",
    ""
  ],
  [
    "328525944834696",
    "Kopráš (okres Revúca)",
    "",
    ""
  ],
  [
    "411519375826251",
    "Koprivnica (okres Bardejov)",
    "",
    ""
  ],
  [
    "321508713826260",
    "Kordíky (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "41C527394826278",
    "Korejovce (okres Svidník)",
    "",
    ""
  ],
  [
    "312509230826294",
    "Korňa (okres Čadca)",
    "",
    ""
  ],
  [
    "429522643826537",
    "Koromľa (okres Sobrance)",
    "",
    ""
  ],
  [
    "41B527408826545",
    "Korunková (okres Stropkov)",
    "",
    ""
  ],
  [
    "324580520829081",
    "Korytárky (okres Detva)",
    "",
    ""
  ],
  [
    "414581640847879",
    "Korytné (okres Levoča)",
    "",
    ""
  ],
  [
    "32A516121826561",
    "Kosihovce (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "32A516139826570",
    "Kosihy nad Ipľom (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "32D516945826588",
    "Kosorín (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "321508438801453",
    "Kostiviarska (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "426582514813079",
    "Kostoľany nad Hornádom (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "237500429826596",
    "Kostoľany pod Tribečom (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "226513245826600",
    "Kostolec (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "106508012826626",
    "Kostolište (okres Malacky)",
    "",
    ""
  ],
  [
    "211501581816655",
    "Kostolná Gala (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "108503851826634",
    "Kostolná pri Dunaji (okres Senec)",
    "",
    ""
  ],
  [
    "227514101826651",
    "Kostolná Ves (okres Prievidza)",
    "",
    ""
  ],
  [
    "229506133826669",
    "Kostolná-Záriečie (okres Trenčín)",
    "",
    ""
  ],
  [
    "223506141826693",
    "Kostolné (okres Myjava)",
    "",
    ""
  ],
  [
    "211501697826758",
    "Kostolné Kračany (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "325518409816914",
    "Kostolné Moravce (okres Krupina)",
    "",
    ""
  ],
  [
    "234503592826804",
    "Kostolný Sek (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "227514110826812",
    "Koš (okres Prievidza)",
    "",
    ""
  ],
  [
    "223504467826821",
    "Košariská (okres Myjava)",
    "",
    ""
  ],
  [
    "412528803826871",
    "Košarovce (okres Humenné)",
    "",
    ""
  ],
  [
    "222513253826880",
    "Košeca (okres Ilava)",
    "",
    ""
  ],
  [
    "222513865826910",
    "Košecké Rovné (okres Ilava)",
    "",
    ""
  ],
  [
    "426521574827606",
    "Košická Belá (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "424599018827347",
    "Košická Nová Ves (okres Košice III)",
    "",
    ""
  ],
  [
    "426521582827622",
    "Košická Polianka (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "426521574875309",
    "Košické Hámre (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "426521604827673",
    "Košický Klečenov (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "412520403827681",
    "Koškovce (okres Humenné)",
    "",
    ""
  ],
  [
    "217507211827690",
    "Košolná (okres Trnava)",
    "",
    ""
  ],
  [
    "316512371827711",
    "Košťany nad Turcom (okres Martin)",
    "",
    ""
  ],
  [
    "212503860827720",
    "Košúty (okres Galanta)",
    "",
    ""
  ],
  [
    "311517691827746",
    "Kotešová (okres Bytča)",
    "",
    ""
  ],
  [
    "326511374811301",
    "Kotmanová (okres Lučenec)",
    "",
    ""
  ],
  [
    "31B517704827762",
    "Kotrčiná Lúčka (okres Žilina)",
    "",
    ""
  ],
  [
    "32B518506827771",
    "Kováčová (okres Zvolen)",
    "",
    ""
  ],
  [
    "428525855827797",
    "Kováčová (okres Rožňava)",
    "",
    ""
  ],
  [
    "32A516147827801",
    "Kováčovce (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "215504475827827",
    "Koválov (okres Senica)",
    "",
    ""
  ],
  [
    "216504483827835",
    "Koválovec (okres Skalica)",
    "",
    ""
  ],
  [
    "236543071827843",
    "Kovarce (okres Topoľčany)",
    "",
    ""
  ],
  [
    "232502421827860",
    "Kozárovce (okres Levice)",
    "",
    ""
  ],
  [
    "322516953827878",
    "Kozelník (okres Banská Štiavnica)",
    "",
    ""
  ],
  [
    "325518514827886",
    "Kozí Vrbovok (okres Krupina)",
    "",
    ""
  ],
  [
    "411519383827894",
    "Kožany (okres Bardejov)",
    "",
    ""
  ],
  [
    "42B528439827908",
    "Kožuchov (okres Trebišov)",
    "",
    ""
  ],
  [
    "41B527416827916",
    "Kožuchovce (okres Stropkov)",
    "",
    ""
  ],
  [
    "41C519391827924",
    "Kračúnovce (okres Svidník)",
    "",
    ""
  ],
  [
    "32D516961827932",
    "Krahule (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "41C527424827941",
    "Krajná Bystrá (okres Svidník)",
    "",
    ""
  ],
  [
    "41C527432827959",
    "Krajná Poľana (okres Svidník)",
    "",
    ""
  ],
  [
    "41C527441827967",
    "Krajná Porúbka (okres Svidník)",
    "",
    ""
  ],
  [
    "223506150827975",
    "Krajné (okres Myjava)",
    "",
    ""
  ],
  [
    "41C527459828041",
    "Krajné Čierno (okres Svidník)",
    "",
    ""
  ],
  [
    "214507229828050",
    "Krakovany (okres Piešťany)",
    "",
    ""
  ],
  [
    "329515078828076",
    "Kráľ (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "321508721828084",
    "Králiky (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "32B518158828157",
    "Kráľová (okres Zvolen)",
    "",
    ""
  ],
  [
    "315510564828173",
    "Kráľova Lehota (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "235503886828190",
    "Kráľová nad Váhom (okres Šaľa)",
    "",
    ""
  ],
  [
    "313509744828220",
    "Kraľovany (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "108503894828203",
    "Kráľová pri Senci (okres Senec)",
    "",
    ""
  ],
  [
    "212503878828106",
    "Kráľov Brod (okres Galanta)",
    "",
    ""
  ],
  [
    "426521612828238",
    "Kráľovce (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "325518531828246",
    "Kráľovce (okres Krupina)",
    "",
    ""
  ],
  [
    "211501905837717",
    "Kráľovianky (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "211501701828297",
    "Kráľovičove Kračany (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "315510793833266",
    "Kráľovská Ľubeľa (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "42B528447828360",
    "Kráľovský Chlmec (okres Trebišov)",
    "",
    ""
  ],
  [
    "329515086828378",
    "Kraskovo (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "425599794828416",
    "Krásna (okres Košice IV)",
    "",
    ""
  ],
  [
    "31A510114828386",
    "Krásna Hôrka (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "418524671828394",
    "Krásna Lúka (okres Sabinov)",
    "",
    ""
  ],
  [
    "31B517712828459",
    "Krasňany (okres Žilina)",
    "",
    ""
  ],
  [
    "221543080828432",
    "Krásna Ves (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "225556246828467",
    "Krásno (okres Partizánske)",
    "",
    ""
  ],
  [
    "428525863828700",
    "Krásnohorská Dlhá Lúka (okres Rožňava)",
    "",
    ""
  ],
  [
    "428525871828734",
    "Krásnohorské Podhradie (okres Rožňava)",
    "",
    ""
  ],
  [
    "312509248828483",
    "Krásno nad Kysucou (okres Čadca)",
    "",
    ""
  ],
  [
    "427522651828751",
    "Krásnovce (okres Michalovce)",
    "",
    ""
  ],
  [
    "415520411828769",
    "Krásny Brod (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "231501239836028",
    "Krátke Kesy (okres Komárno)",
    "",
    ""
  ],
  [
    "416523593828807",
    "Kravany (okres Poprad)",
    "",
    ""
  ],
  [
    "42B528455828815",
    "Kravany (okres Trebišov)",
    "",
    ""
  ],
  [
    "231501212828823",
    "Kravany nad Dunajom (okres Komárno)",
    "",
    ""
  ],
  [
    "429522660828858",
    "Krčava (okres Sobrance)",
    "",
    ""
  ],
  [
    "41A526801828874",
    "Kremná (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "32D516970828882",
    "Kremnica (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "32D516988829021",
    "Kremnické Bane (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "321508438801381",
    "Kremnička (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "429522678829030",
    "Kristy (okres Sobrance)",
    "",
    ""
  ],
  [
    "41B527467829048",
    "Krišľovce (okres Stropkov)",
    "",
    ""
  ],
  [
    "427528463829056",
    "Krišovská Liesková (okres Michalovce)",
    "",
    ""
  ],
  [
    "313509761829072",
    "Krivá (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "324518549829099",
    "Kriváň (okres Detva)",
    "",
    ""
  ],
  [
    "418524689829137",
    "Krivany (okres Sabinov)",
    "",
    ""
  ],
  [
    "415520578843661",
    "Krivá Oľka (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "411519405829145",
    "Krivé (okres Bardejov)",
    "",
    ""
  ],
  [
    "222557617829153",
    "Krivoklát (okres Ilava)",
    "",
    ""
  ],
  [
    "229506168829161",
    "Krivosúd-Bodovka (okres Trenčín)",
    "",
    ""
  ],
  [
    "411519413829170",
    "Kríže (okres Bardejov)",
    "",
    ""
  ],
  [
    "417524697829200",
    "Krížovany (okres Prešov)",
    "",
    ""
  ],
  [
    "217556483829218",
    "Križovany nad Dudváhom (okres Trnava)",
    "",
    ""
  ],
  [
    "413523607829196",
    "Krížová Ves (okres Kežmarok)",
    "",
    ""
  ],
  [
    "108503894828211",
    "Krmeš (okres Senec)",
    "",
    ""
  ],
  [
    "315511153869821",
    "Krmeš (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "327511501829226",
    "Krná (okres Poltár)",
    "",
    ""
  ],
  [
    "236543101829269",
    "Krnča (okres Topoľčany)",
    "",
    ""
  ],
  [
    "325518531828254",
    "Krnišov (okres Krupina)",
    "",
    ""
  ],
  [
    "329515094829277",
    "Krokava (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "42A543268829307",
    "Krompachy (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "316512389829412",
    "Krpeľany (okres Martin)",
    "",
    ""
  ],
  [
    "236543110829471",
    "Krtovce (okres Topoľčany)",
    "",
    ""
  ],
  [
    "41B527793853755",
    "Kručov (okres Stropkov)",
    "",
    ""
  ],
  [
    "325518557829498",
    "Krupina (okres Krupina)",
    "",
    ""
  ],
  [
    "317509779829587",
    "Krušetnica (okres Námestovo)",
    "",
    ""
  ],
  [
    "41B527475829595",
    "Krušinec (okres Stropkov)",
    "",
    ""
  ],
  [
    "236556149829617",
    "Krušovce (okres Topoľčany)",
    "",
    ""
  ],
  [
    "411519421829625",
    "Kružlov (okres Bardejov)",
    "",
    ""
  ],
  [
    "41C527483829641",
    "Kružlová (okres Svidník)",
    "",
    ""
  ],
  [
    "428560065829650",
    "Kružná (okres Rožňava)",
    "",
    ""
  ],
  [
    "329515108829676",
    "Kružno (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "221543136829692",
    "Kšinná (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "232502448829714",
    "Kubáňovo (okres Levice)",
    "",
    ""
  ],
  [
    "313509540812455",
    "Kubínska Hoľa (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "229505820829722",
    "Kubrá (okres Trenčín)",
    "",
    ""
  ],
  [
    "229505820829731",
    "Kubrica (okres Trenčín)",
    "",
    ""
  ],
  [
    "427528633843059",
    "Kucany (okres Michalovce)",
    "",
    ""
  ],
  [
    "411519430829757",
    "Kučín (okres Bardejov)",
    "",
    ""
  ],
  [
    "41D528811829765",
    "Kučín nad Ondavou (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "106508021829773",
    "Kuchyňa (okres Malacky)",
    "",
    ""
  ],
  [
    "215504491829781",
    "Kuklov (okres Senica)",
    "",
    ""
  ],
  [
    "41C519448829790",
    "Kuková (okres Svidník)",
    "",
    ""
  ],
  [
    "232502456829811",
    "Kukučínov (okres Levice)",
    "",
    ""
  ],
  [
    "31B517721829838",
    "Kunerad (okres Žilina)",
    "",
    ""
  ],
  [
    "32D516996829854",
    "Kunešov (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "215504203829862",
    "Kunov (okres Senica)",
    "",
    ""
  ],
  [
    "428525898829897",
    "Kunova Teplica (okres Rožňava)",
    "",
    ""
  ],
  [
    "232502464829901",
    "Kuraľany (okres Levice)",
    "",
    ""
  ],
  [
    "411519456829919",
    "Kurima (okres Bardejov)",
    "",
    ""
  ],
  [
    "414543276829927",
    "Kurimany (okres Levoča)",
    "",
    ""
  ],
  [
    "41C527491829935",
    "Kurimka (okres Svidník)",
    "",
    ""
  ],
  [
    "411519464829943",
    "Kurov (okres Bardejov)",
    "",
    ""
  ],
  [
    "427522686829951",
    "Kusín (okres Michalovce)",
    "",
    ""
  ],
  [
    "215504513830038",
    "Kúty (okres Senica)",
    "",
    ""
  ],
  [
    "42B528471830089",
    "Kuzmice (okres Trebišov)",
    "",
    ""
  ],
  [
    "236581704830054",
    "Kuzmice (okres Topoľčany)",
    "",
    ""
  ],
  [
    "417524701830119",
    "Kvačany (okres Prešov)",
    "",
    ""
  ],
  [
    "315510572830101",
    "Kvačany (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "41D528820830127",
    "Kvakovce (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "228557501830151",
    "Kvašov (okres Púchov)",
    "",
    ""
  ],
  [
    "211501727830208",
    "Kvetoslavov (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "329515116830232",
    "Kyjatice (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "41A526819830241",
    "Kyjov (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "321557277801429",
    "Kynceľová (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "211501697826766",
    "Kynceľove Kračany (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "233500011840203",
    "Kynek (okres Nitra)",
    "",
    ""
  ],
  [
    "426521639830259",
    "Kysak (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "211580597870013",
    "Kyselica (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "42B528480830275",
    "Kysta (okres Trebišov)",
    "",
    ""
  ],
  [
    "314509256830283",
    "Kysucké Nové Mesto (okres Kysucké Nové Mesto)",
    "",
    ""
  ],
  [
    "314509264830381",
    "Kysucký Lieskovec (okres Kysucké Nové Mesto)",
    "",
    ""
  ],
  [
    "106508039830399",
    "Láb (okres Malacky)",
    "",
    ""
  ],
  [
    "325518565830429",
    "Lackov (okres Krupina)",
    "",
    ""
  ],
  [
    "41A526827830437",
    "Lacková (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "412582140830445",
    "Lackovce (okres Humenné)",
    "",
    ""
  ],
  [
    "417524786830453",
    "Lačnov (okres Prešov)",
    "",
    ""
  ],
  [
    "417524727830461",
    "Lada (okres Prešov)",
    "",
    ""
  ],
  [
    "222513296830488",
    "Ladce (okres Ilava)",
    "",
    ""
  ],
  [
    "237500437830496",
    "Ladice (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "42B528498830500",
    "Ladmovce (okres Trebišov)",
    "",
    ""
  ],
  [
    "32D599328830518",
    "Ladomer (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "419520438830526",
    "Ladomirov (okres Snina)",
    "",
    ""
  ],
  [
    "41C527505830542",
    "Ladomirová (okres Svidník)",
    "",
    ""
  ],
  [
    "325518573830551",
    "Ladzany (okres Krupina)",
    "",
    ""
  ],
  [
    "215504521830577",
    "Lakšárska Nová Ves (okres Senica)",
    "",
    ""
  ],
  [
    "104529419806005",
    "Lamač (okres Bratislava IV)",
    "",
    ""
  ],
  [
    "214507199830615",
    "Lančár (okres Piešťany)",
    "",
    ""
  ],
  [
    "411519472830640",
    "Lascov (okres Bardejov)",
    "",
    ""
  ],
  [
    "316512397830658",
    "Laskár (okres Martin)",
    "",
    ""
  ],
  [
    "427522694830666",
    "Lastomír (okres Michalovce)",
    "",
    ""
  ],
  [
    "42B528501830682",
    "Lastovce (okres Trebišov)",
    "",
    ""
  ],
  [
    "427522708830704",
    "Laškovce (okres Michalovce)",
    "",
    ""
  ],
  [
    "221505625866385",
    "Látkovce (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "324511510830747",
    "Látky (okres Detva)",
    "",
    ""
  ],
  [
    "316512354830879",
    "Lazany (okres Martin)",
    "",
    ""
  ],
  [
    "227514128830887",
    "Lazany (okres Prievidza)",
    "",
    ""
  ],
  [
    "315510581830895",
    "Lazisko (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "228513300830950",
    "Lazy pod Makytou (okres Púchov)",
    "",
    ""
  ],
  [
    "417524735831042",
    "Lažany (okres Prešov)",
    "",
    ""
  ],
  [
    "32B518581831441",
    "Lažteky (okres Zvolen)",
    "",
    ""
  ],
  [
    "228513318831051",
    "Lednica (okres Púchov)",
    "",
    ""
  ],
  [
    "228513326831077",
    "Lednické Rovne (okres Púchov)",
    "",
    ""
  ],
  [
    "41A526835831085",
    "Legnava (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "233500453831140",
    "Lehota (okres Nitra)",
    "",
    ""
  ],
  [
    "227514136831191",
    "Lehota pod Vtáčnikom (okres Prievidza)",
    "",
    ""
  ],
  [
    "326511528831204",
    "Lehôtka (okres Lučenec)",
    "",
    ""
  ],
  [
    "32D517011831212",
    "Lehôtka pod Brehmi (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "413523615831239",
    "Lechnica (okres Kežmarok)",
    "",
    ""
  ],
  [
    "429522716831247",
    "Lekárovce (okres Sobrance)",
    "",
    ""
  ],
  [
    "234503312831255",
    "Leľa (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "42B528510831271",
    "Leles (okres Trebišov)",
    "",
    ""
  ],
  [
    "417524743831301",
    "Lemešany (okres Prešov)",
    "",
    ""
  ],
  [
    "411519481831328",
    "Lenartov (okres Bardejov)",
    "",
    ""
  ],
  [
    "329515132831336",
    "Lenartovce (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "413523623831344",
    "Lendak (okres Kežmarok)",
    "",
    ""
  ],
  [
    "329515141831352",
    "Lenka (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "326511536831361",
    "Lentvora (okres Lučenec)",
    "",
    ""
  ],
  [
    "213507253831379",
    "Leopoldov (okres Hlohovec)",
    "",
    ""
  ],
  [
    "32A516155831395",
    "Lesenice (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "417524751831409",
    "Lesíček (okres Prešov)",
    "",
    ""
  ],
  [
    "427522724831417",
    "Lesné (okres Michalovce)",
    "",
    ""
  ],
  [
    "211501701828301",
    "Lesné Kračany (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "41A526843831425",
    "Lesnica (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "32B518581831433",
    "Lešť (okres Zvolen)",
    "",
    ""
  ],
  [
    "313509787831484",
    "Leštiny (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "42A543284831514",
    "Letanovce (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "422598186826952",
    "Letná (okres Košice I)",
    "",
    ""
  ],
  [
    "216504530831522",
    "Letničie (okres Skalica)",
    "",
    ""
  ],
  [
    "232502031831646",
    "Levice (okres Levice)",
    "",
    ""
  ],
  [
    "328515159831841",
    "Levkuška (okres Revúca)",
    "",
    ""
  ],
  [
    "414543292831859",
    "Levoča (okres Levoča)",
    "",
    ""
  ],
  [
    "316512419831972",
    "Ležiachov (okres Martin)",
    "",
    ""
  ],
  [
    "221556360831981",
    "Libichava (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "328525901831999",
    "Licince (okres Revúca)",
    "",
    ""
  ],
  [
    "417524760832006",
    "Ličartovce (okres Prešov)",
    "",
    ""
  ],
  [
    "211555720830003",
    "Lidér Tejed (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "31A509795832022",
    "Liesek (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "42A543306832031",
    "Lieskovany (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "412520446832065",
    "Lieskovec (okres Humenné)",
    "",
    ""
  ],
  [
    "32B558133832057",
    "Lieskovec (okres Zvolen)",
    "",
    ""
  ],
  [
    "319512427832073",
    "Liešno (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "227514144832090",
    "Liešťany (okres Prievidza)",
    "",
    ""
  ],
  [
    "31B517739832111",
    "Lietava (okres Žilina)",
    "",
    ""
  ],
  [
    "31B557935832138",
    "Lietavská Lúčka (okres Žilina)",
    "",
    ""
  ],
  [
    "31B517755832162",
    "Lietavská Svinná (okres Žilina)",
    "",
    ""
  ],
  [
    "318510599832171",
    "Likavka (okres Ružomberok)",
    "",
    ""
  ],
  [
    "107508047832189",
    "Limbach (okres Pezinok)",
    "",
    ""
  ],
  [
    "418524778832219",
    "Lipany (okres Sabinov)",
    "",
    ""
  ],
  [
    "227557706832235",
    "Lipník (okres Prievidza)",
    "",
    ""
  ],
  [
    "417559971860468",
    "Lipníky (okres Prešov)",
    "",
    ""
  ],
  [
    "411519499832260",
    "Lipová (okres Bardejov)",
    "",
    ""
  ],
  [
    "326511544832286",
    "Lipovany (okres Lučenec)",
    "",
    ""
  ],
  [
    "417524786832294",
    "Lipovce (okres Prešov)",
    "",
    ""
  ],
  [
    "231501221832324",
    "Lipové (okres Komárno)",
    "",
    ""
  ],
  [
    "329515167832359",
    "Lipovec (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "316512435832341",
    "Lipovec (okres Martin)",
    "",
    ""
  ],
  [
    "428525910832383",
    "Lipovník (okres Rožňava)",
    "",
    ""
  ],
  [
    "236505021832367",
    "Lipovník (okres Topoľčany)",
    "",
    ""
  ],
  [
    "315510602832391",
    "Liptovská Anna (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "315510611832405",
    "Liptovská Kokava (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "318510629832413",
    "Liptovská Lúžna (okres Ružomberok)",
    "",
    ""
  ],
  [
    "315510653832499",
    "Liptovská Mara (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "315510262832782",
    "Liptovská Ondrašová (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "318510637832430",
    "Liptovská Osada (okres Ružomberok)",
    "",
    ""
  ],
  [
    "315558281832448",
    "Liptovská Porúbka (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "315510653832472",
    "Liptovská Sielnica (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "318510661832502",
    "Liptovská Štiavnica (okres Ružomberok)",
    "",
    ""
  ],
  [
    "318510670832511",
    "Liptovská Teplá (okres Ružomberok)",
    "",
    ""
  ],
  [
    "416523631832537",
    "Liptovská Teplička (okres Poprad)",
    "",
    ""
  ],
  [
    "315510688832545",
    "Liptovské Beharovce (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "315510696832553",
    "Liptovské Kľačany (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "315510700832561",
    "Liptovské Matiašovce (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "318510718832596",
    "Liptovské Revúce (okres Ružomberok)",
    "",
    ""
  ],
  [
    "318511005856410",
    "Liptovské Sliače (okres Ružomberok)",
    "",
    ""
  ],
  [
    "315510726832618",
    "Liptovský Hrádok (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "315510734832677",
    "Liptovský Ján (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "318510742832693",
    "Liptovský Michal (okres Ružomberok)",
    "",
    ""
  ],
  [
    "315510262832707",
    "Liptovský Mikuláš (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "315510751832839",
    "Liptovský Ondrej (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "315580287832855",
    "Liptovský Peter (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "315510777832863",
    "Liptovský Trnovec (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "318510785832871",
    "Lisková (okres Ružomberok)",
    "",
    ""
  ],
  [
    "325518603832880",
    "Lišov (okres Krupina)",
    "",
    ""
  ],
  [
    "325518611832928",
    "Litava (okres Krupina)",
    "",
    ""
  ],
  [
    "41A526851832944",
    "Litmanová (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "225556173839221",
    "Livina (okres Partizánske)",
    "",
    ""
  ],
  [
    "225556190832952",
    "Livinské Opatovce (okres Partizánske)",
    "",
    ""
  ],
  [
    "411519502832961",
    "Livov (okres Bardejov)",
    "",
    ""
  ],
  [
    "411519511832979",
    "Livovská Huta (okres Bardejov)",
    "",
    ""
  ],
  [
    "314509272832987",
    "Lodno (okres Kysucké Nové Mesto)",
    "",
    ""
  ],
  [
    "232502481833002",
    "Lok (okres Levice)",
    "",
    ""
  ],
  [
    "317509809833011",
    "Lokca (okres Námestovo)",
    "",
    ""
  ],
  [
    "317509817833053",
    "Lomná (okres Námestovo)",
    "",
    ""
  ],
  [
    "323508730833045",
    "Lom nad Rimavicou (okres Brezno)",
    "",
    ""
  ],
  [
    "41B527513833061",
    "Lomné (okres Stropkov)",
    "",
    ""
  ],
  [
    "227514144832103",
    "Lomnica (okres Prievidza)",
    "",
    ""
  ],
  [
    "41A526860833088",
    "Lomnička (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "232502499833096",
    "Lontov (okres Levice)",
    "",
    ""
  ],
  [
    "216504548833100",
    "Lopašov (okres Skalica)",
    "",
    ""
  ],
  [
    "411519529833118",
    "Lopúchov (okres Bardejov)",
    "",
    ""
  ],
  [
    "314509281833126",
    "Lopušné Pažite (okres Kysucké Nové Mesto)",
    "",
    ""
  ],
  [
    "423598194833134",
    "Lorinčík (okres Košice II)",
    "",
    ""
  ],
  [
    "217556688833142",
    "Lošonec (okres Trnava)",
    "",
    ""
  ],
  [
    "237500461833151",
    "Lovce (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "32D517020833169",
    "Lovča (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "32D517038833177",
    "Lovčica (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "326511552833215",
    "Lovinobaňa (okres Lučenec)",
    "",
    ""
  ],
  [
    "106508055833231",
    "Lozorno (okres Malacky)",
    "",
    ""
  ],
  [
    "427522732833240",
    "Ložín (okres Michalovce)",
    "",
    ""
  ],
  [
    "234503339833258",
    "Ľubá (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "328525928833291",
    "Lubeník (okres Revúca)",
    "",
    ""
  ],
  [
    "413523682833312",
    "Ľubica (okres Kežmarok)",
    "",
    ""
  ],
  [
    "413523682950122",
    "Ľubické Kúpele (okres Kežmarok)",
    "",
    ""
  ],
  [
    "321508748833339",
    "Ľubietová (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "224506184833398",
    "Lubina (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "412520454833495",
    "Ľubiša (okres Humenné)",
    "",
    ""
  ],
  [
    "318510807833509",
    "Ľubochňa (okres Ružomberok)",
    "",
    ""
  ],
  [
    "229506281833533",
    "Ľuborča (okres Trenčín)",
    "",
    ""
  ],
  [
    "326511561833541",
    "Ľuboreč (okres Lučenec)",
    "",
    ""
  ],
  [
    "32A516163833568",
    "Ľuboriečka (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "417518590833584",
    "Ľubotice (okres Prešov)",
    "",
    ""
  ],
  [
    "41A526878833606",
    "Ľubotín (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "417524794833614",
    "Ľubovec (okres Prešov)",
    "",
    ""
  ],
  [
    "321508756833657",
    "Lučatín (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "326511218833673",
    "Lučenec (okres Lučenec)",
    "",
    ""
  ],
  [
    "417524808833924",
    "Lúčina (okres Prešov)",
    "",
    ""
  ],
  [
    "416523658833959",
    "Lučivná (okres Poprad)",
    "",
    ""
  ],
  [
    "41C519537833967",
    "Lúčka (okres Svidník)",
    "",
    ""
  ],
  [
    "418524816833975",
    "Lúčka (okres Sabinov)",
    "",
    ""
  ],
  [
    "428525936833991",
    "Lúčka (okres Rožňava)",
    "",
    ""
  ],
  [
    "414543314834009",
    "Lúčka (okres Levoča)",
    "",
    ""
  ],
  [
    "318510815834017",
    "Lúčky (okres Ružomberok)",
    "",
    ""
  ],
  [
    "32D517046834033",
    "Lúčky (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "427522741834041",
    "Lúčky (okres Michalovce)",
    "",
    ""
  ],
  [
    "236505048834076",
    "Ludanice (okres Topoľčany)",
    "",
    ""
  ],
  [
    "233581097870773",
    "Ľudovítová (okres Nitra)",
    "",
    ""
  ],
  [
    "318510823834084",
    "Ludrová (okres Ružomberok)",
    "",
    ""
  ],
  [
    "42B528528834092",
    "Luhyňa (okres Trebišov)",
    "",
    ""
  ],
  [
    "224506206834106",
    "Lúka (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "412520462834122",
    "Lukačovce (okres Humenné)",
    "",
    ""
  ],
  [
    "233500488834114",
    "Lukáčovce (okres Nitra)",
    "",
    ""
  ],
  [
    "32B558087834131",
    "Lukavica (okres Zvolen)",
    "",
    ""
  ],
  [
    "411519545834149",
    "Lukavica (okres Bardejov)",
    "",
    ""
  ],
  [
    "411519553834165",
    "Lukov (okres Bardejov)",
    "",
    ""
  ],
  [
    "32B518158834181",
    "Lukové (okres Zvolen)",
    "",
    ""
  ],
  [
    "329515175834203",
    "Lukovištia (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "228513334834211",
    "Lúky (okres Púchov)",
    "",
    ""
  ],
  [
    "232502502834238",
    "Lula (okres Levice)",
    "",
    ""
  ],
  [
    "423599972827142",
    "Luník (okres Košice II)",
    "",
    ""
  ],
  [
    "326511579834254",
    "Lupoč (okres Lučenec)",
    "",
    ""
  ],
  [
    "32D599336834262",
    "Lutila (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "418524824834289",
    "Ľutina (okres Sabinov)",
    "",
    ""
  ],
  [
    "31B517763834319",
    "Lutiše (okres Žilina)",
    "",
    ""
  ],
  [
    "221505056834360",
    "Ľutov (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "236505064834378",
    "Lužany (okres Topoľčany)",
    "",
    ""
  ],
  [
    "41C519561834386",
    "Lužany pri Topli (okres Svidník)",
    "",
    ""
  ],
  [
    "233580899834408",
    "Lužianky (okres Nitra)",
    "",
    ""
  ],
  [
    "413523836834416",
    "Lysá nad Dunajcom (okres Kežmarok)",
    "",
    ""
  ],
  [
    "228513342834483",
    "Lysá pod Makytou (okres Púchov)",
    "",
    ""
  ],
  [
    "31B517771834581",
    "Lysica (okres Žilina)",
    "",
    ""
  ],
  [
    "211555606834599",
    "Macov (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "227513962834602",
    "Mačov (okres Prievidza)",
    "",
    ""
  ],
  [
    "211555649812242",
    "Mad (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "326511226834637",
    "Madačka (okres Lučenec)",
    "",
    ""
  ],
  [
    "234503568859940",
    "Maďarský Svodín (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "318510670832529",
    "Madočany (okres Ružomberok)",
    "",
    ""
  ],
  [
    "213507288834670",
    "Madunice (okres Hlohovec)",
    "",
    ""
  ],
  [
    "416523542822191",
    "Machalovce (okres Poprad)",
    "",
    ""
  ],
  [
    "237500500834718",
    "Machulince (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "217507296834726",
    "Majcichov (okres Trnava)",
    "",
    ""
  ],
  [
    "413523674834734",
    "Majere (okres Kežmarok)",
    "",
    ""
  ],
  [
    "413523534821136",
    "Majerka (okres Kežmarok)",
    "",
    ""
  ],
  [
    "41D528838834742",
    "Majerovce (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "312509299834858",
    "Makov (okres Čadca)",
    "",
    ""
  ],
  [
    "41B527521834955",
    "Makovce (okres Stropkov)",
    "",
    ""
  ],
  [
    "42B528129801674",
    "Malá Bara (okres Trebišov)",
    "",
    ""
  ],
  [
    "211501581816663",
    "Malá Budafa (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "311517461807729",
    "Malá Bytča (okres Bytča)",
    "",
    ""
  ],
  [
    "106508063835196",
    "Malacky (okres Malacky)",
    "",
    ""
  ],
  [
    "32A516171834963",
    "Malá Čalomija (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "227514179834971",
    "Malá Čausa (okres Prievidza)",
    "",
    ""
  ],
  [
    "31B517780834980",
    "Malá Čierna (okres Žilina)",
    "",
    ""
  ],
  [
    "41D528846834998",
    "Malá Domaša (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "413559938835005",
    "Malá Franková (okres Kežmarok)",
    "",
    ""
  ],
  [
    "221505072835021",
    "Malá Hradná (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "321580244801372",
    "Malachov (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "426521655835030",
    "Malá Ida (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "234503045800732",
    "Malá Kesa (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "32C517062835102",
    "Malá Lehota (okres Žarnovica)",
    "",
    ""
  ],
  [
    "227513881850187",
    "Malá Lehôtka (okres Prievidza)",
    "",
    ""
  ],
  [
    "426521663835137",
    "Malá Lodina (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "211501743833631",
    "Malá Lúč (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "212582638835161",
    "Malá Mača (okres Galanta)",
    "",
    ""
  ],
  [
    "234503363835994",
    "Malá Maňa (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "234503347835170",
    "Malá nad Hronom (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "211501972867870",
    "Malá Paka (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "41B527530835188",
    "Malá Poľana (okres Stropkov)",
    "",
    ""
  ],
  [
    "232502511835382",
    "Málaš (okres Levice)",
    "",
    ""
  ],
  [
    "313509825835391",
    "Malatiná (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "315510831835412",
    "Malatíny (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "42B513792864765",
    "Malá Tŕňa (okres Trebišov)",
    "",
    ""
  ],
  [
    "426521345813087",
    "Malá Vieska (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "411519570835447",
    "Malcov (okres Bardejov)",
    "",
    ""
  ],
  [
    "427522759835463",
    "Malčice (okres Michalovce)",
    "",
    ""
  ],
  [
    "236504998835471",
    "Malé Bedzany (okres Topoľčany)",
    "",
    ""
  ],
  [
    "225505315835480",
    "Malé Bielice (okres Partizánske)",
    "",
    ""
  ],
  [
    "211501433813834",
    "Malé Blahovo (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "315510840835498",
    "Malé Borové (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "225542733803910",
    "Malé Bošany (okres Partizánske)",
    "",
    ""
  ],
  [
    "217506842806242",
    "Malé Brestovany (okres Trnava)",
    "",
    ""
  ],
  [
    "236542717803499",
    "Malé Dvorany (okres Topoľčany)",
    "",
    ""
  ],
  [
    "211555665814113",
    "Malé Dvorníky (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "221505102835510",
    "Malé Hoste (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "221542652835528",
    "Malé Chlievany (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "237500062820962",
    "Malé Chrašťany (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "233556785835536",
    "Malé Chyndice (okres Nitra)",
    "",
    ""
  ],
  [
    "234503355835544",
    "Malé Kosihy (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "222513351835552",
    "Malé Košecké Podhradie (okres Ilava)",
    "",
    ""
  ],
  [
    "232581135835587",
    "Malé Kozmálovce (okres Levice)",
    "",
    ""
  ],
  [
    "232502430829447",
    "Malé Krškany (okres Levice)",
    "",
    ""
  ],
  [
    "225505129835595",
    "Malé Kršteňany (okres Partizánske)",
    "",
    ""
  ],
  [
    "226557579835617",
    "Malé Lednice (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "106504556835625",
    "Malé Leváre (okres Malacky)",
    "",
    ""
  ],
  [
    "232502537835633",
    "Malé Ludince (okres Levice)",
    "",
    ""
  ],
  [
    "214507385835641",
    "Malé Orvište (okres Piešťany)",
    "",
    ""
  ],
  [
    "225505307844543",
    "Malé Ostratice (okres Partizánske)",
    "",
    ""
  ],
  [
    "42B528536835650",
    "Malé Ozorovce (okres Trebišov)",
    "",
    ""
  ],
  [
    "427522767835668",
    "Malé Raškovce (okres Michalovce)",
    "",
    ""
  ],
  [
    "236505137835676",
    "Malé Ripňany (okres Topoľčany)",
    "",
    ""
  ],
  [
    "229545741835684",
    "Malé Stankovce (okres Trenčín)",
    "",
    ""
  ],
  [
    "32A558206835692",
    "Malé Straciny (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "232502804860603",
    "Malé Šarovce (okres Levice)",
    "",
    ""
  ],
  [
    "107508250860760",
    "Malé Šenkvice (okres Pezinok)",
    "",
    ""
  ],
  [
    "329515736868639",
    "Malé Teriakovce (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "42B528544835706",
    "Malé Trakany (okres Trebišov)",
    "",
    ""
  ],
  [
    "107508314869571",
    "Malé Tŕnie (okres Pezinok)",
    "",
    ""
  ],
  [
    "225580953835714",
    "Malé Uherce (okres Partizánske)",
    "",
    ""
  ],
  [
    "237555924835722",
    "Malé Vozokany (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "233500534835749",
    "Malé Zálužie (okres Nitra)",
    "",
    ""
  ],
  [
    "32A516198835757",
    "Malé Zlievce (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "327511595835773",
    "Málinec (okres Poltár)",
    "",
    ""
  ],
  [
    "227514187835790",
    "Malinová (okres Prievidza)",
    "",
    ""
  ],
  [
    "232502715854379",
    "Malinovec (okres Levice)",
    "",
    ""
  ],
  [
    "108508071835803",
    "Malinovo (okres Senec)",
    "",
    ""
  ],
  [
    "315510858835820",
    "Malužiná (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "233500046800287",
    "Malý Báb (okres Nitra)",
    "",
    ""
  ],
  [
    "108508292868850",
    "Malý Biel (okres Senec)",
    "",
    ""
  ],
  [
    "313509540812340",
    "Malý Bysterec (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "233555908840599",
    "Malý Cetín (okres Nitra)",
    "",
    ""
  ],
  [
    "319512443835846",
    "Malý Čepčín (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "426521574875317",
    "Malý Folkmar (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "42B528552835854",
    "Malý Horeš (okres Trebišov)",
    "",
    ""
  ],
  [
    "42B528561835862",
    "Malý Kamenec (okres Trebišov)",
    "",
    ""
  ],
  [
    "42B528421875384",
    "Malý Kazimír (okres Trebišov)",
    "",
    ""
  ],
  [
    "232502031835871",
    "Malý Kiar (okres Levice)",
    "",
    ""
  ],
  [
    "222513440825417",
    "Malý Kolačín (okres Ilava)",
    "",
    ""
  ],
  [
    "32A558192835889",
    "Malý Krtíš (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "234503380879711",
    "Malý Kýr (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "233555851830623",
    "Malý Lapáš (okres Nitra)",
    "",
    ""
  ],
  [
    "211501735831107",
    "Malý Lég (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "41A526886835897",
    "Malý Lipník (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "108508276863475",
    "Malý Madaras (okres Senec)",
    "",
    ""
  ],
  [
    "211501808842966",
    "Malý Máger (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "232502456829820",
    "Malý Pesek (okres Levice)",
    "",
    ""
  ],
  [
    "42B528625842893",
    "Malý Ruskov (okres Trebišov)",
    "",
    ""
  ],
  [
    "413581241835901",
    "Malý Slavkov (okres Kežmarok)",
    "",
    ""
  ],
  [
    "417524832835919",
    "Malý Slivník (okres Prešov)",
    "",
    ""
  ],
  [
    "41A527025859541",
    "Malý Sulín (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "417524841835943",
    "Malý Šariš (okres Prešov)",
    "",
    ""
  ],
  [
    "108503851826642",
    "Malý Šúr (okres Senec)",
    "",
    ""
  ],
  [
    "217507318835960",
    "Malženice (okres Trnava)",
    "",
    ""
  ],
  [
    "237500542836010",
    "Mankovce (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "231501239836036",
    "Marcelová (okres Komárno)",
    "",
    ""
  ],
  [
    "421543322836044",
    "Margecany (okres Gelnica)",
    "",
    ""
  ],
  [
    "411519588836061",
    "Marhaň (okres Bardejov)",
    "",
    ""
  ],
  [
    "106508080836079",
    "Marianka (okres Malacky)",
    "",
    ""
  ],
  [
    "427522783836087",
    "Markovce (okres Michalovce)",
    "",
    ""
  ],
  [
    "428525952836095",
    "Markuška (okres Rožňava)",
    "",
    ""
  ],
  [
    "42A543331836125",
    "Markušovce (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "311517798836141",
    "Maršová (okres Bytča)",
    "",
    ""
  ],
  [
    "316512036836168",
    "Martin (okres Martin)",
    "",
    ""
  ],
  [
    "318510866836338",
    "Martinček (okres Ružomberok)",
    "",
    ""
  ],
  [
    "237500551836320",
    "Martin nad Žitavou (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "233500470834050",
    "Martinová (okres Nitra)",
    "",
    ""
  ],
  [
    "329515183836346",
    "Martinová (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "231501247836354",
    "Martovce (okres Komárno)",
    "",
    ""
  ],
  [
    "232502596842923",
    "Marušová (okres Levice)",
    "",
    ""
  ],
  [
    "211580554873373",
    "Maslovce (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "211501735831115",
    "Masníkovo (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "106508233859320",
    "Mást (okres Malacky)",
    "",
    ""
  ],
  [
    "106508233859346",
    "Mástske grefty (okres Malacky)",
    "",
    ""
  ],
  [
    "326511609836362",
    "Mašková (okres Lučenec)",
    "",
    ""
  ],
  [
    "412559652871494",
    "Maškovce (okres Humenné)",
    "",
    ""
  ],
  [
    "416523381836371",
    "Matejovce (okres Poprad)",
    "",
    ""
  ],
  [
    "42A543349836389",
    "Matejovce nad Hornádom (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "41D528854836397",
    "Matiaška (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "413523712836401",
    "Matiašovce (okres Kežmarok)",
    "",
    ""
  ],
  [
    "41C527548836427",
    "Matovce (okres Svidník)",
    "",
    ""
  ],
  [
    "427528579836443",
    "Maťovce (okres Michalovce)",
    "",
    ""
  ],
  [
    "212555754836451",
    "Matúškovo (okres Galanta)",
    "",
    ""
  ],
  [
    "41A526894836478",
    "Matysová (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "228513326817015",
    "Medné (okres Púchov)",
    "",
    ""
  ],
  [
    "325518646836486",
    "Medovarce (okres Krupina)",
    "",
    ""
  ],
  [
    "232502651836494",
    "Medvecké (okres Levice)",
    "",
    ""
  ],
  [
    "41C527556836516",
    "Medvedie (okres Svidník)",
    "",
    ""
  ],
  [
    "211501760836508",
    "Medveďov (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "31A510114866172",
    "Medvedzie (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "417556823836524",
    "Medzany (okres Prešov)",
    "",
    ""
  ],
  [
    "426521671836567",
    "Medzev (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "41D528862836591",
    "Medzianky (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "321508764836605",
    "Medzibrod (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "313509833836613",
    "Medzibrodie nad Oravou (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "313509540812463",
    "Medzihradné (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "415520471836621",
    "Medzilaborce (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "233500674847275",
    "Mechenice (okres Nitra)",
    "",
    ""
  ],
  [
    "229545686836664",
    "Melčice (okres Trenčín)",
    "",
    ""
  ],
  [
    "233500569836672",
    "Melek (okres Nitra)",
    "",
    ""
  ],
  [
    "428525961836681",
    "Meliata (okres Rožňava)",
    "",
    ""
  ],
  [
    "416523721836702",
    "Mengusovce (okres Poprad)",
    "",
    ""
  ],
  [
    "213507326836729",
    "Merašice (okres Hlohovec)",
    "",
    ""
  ],
  [
    "41D528871836737",
    "Merník (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "325518387813559",
    "Merovce (okres Krupina)",
    "",
    ""
  ],
  [
    "228513377836753",
    "Mestečko (okres Púchov)",
    "",
    ""
  ],
  [
    "41C527564836761",
    "Mestisko (okres Svidník)",
    "",
    ""
  ],
  [
    "41C519596836770",
    "Mičakovce (okres Svidník)",
    "",
    ""
  ],
  [
    "211501778836788",
    "Mierovo (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "221505153836796",
    "Miezgovce (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "419520489836800",
    "Michajlov (okres Snina)",
    "",
    ""
  ],
  [
    "42B528587836842",
    "Michaľany (okres Trebišov)",
    "",
    ""
  ],
  [
    "32B518654836877",
    "Michalková (okres Zvolen)",
    "",
    ""
  ],
  [
    "234503371836834",
    "Michal nad Žitavou (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "211501786836826",
    "Michal na Ostrove (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "41D528889836893",
    "Michalok (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "323508772836907",
    "Michalová (okres Brezno)",
    "",
    ""
  ],
  [
    "427522279836915",
    "Michalovce (okres Michalovce)",
    "",
    ""
  ],
  [
    "417524867837504",
    "Miklušovce (okres Prešov)",
    "",
    ""
  ],
  [
    "328525685815039",
    "Mikolčany (okres Revúca)",
    "",
    ""
  ],
  [
    "41B527572837512",
    "Miková (okres Stropkov)",
    "",
    ""
  ],
  [
    "233500011840564",
    "Mikov dvor (okres Nitra)",
    "",
    ""
  ],
  [
    "311517461807737",
    "Mikšová (okres Bytča)",
    "",
    ""
  ],
  [
    "232502987874248",
    "Mikula (okres Levice)",
    "",
    ""
  ],
  [
    "215504521830585",
    "Mikulášov (okres Senica)",
    "",
    ""
  ],
  [
    "411519600837521",
    "Mikulášová (okres Bardejov)",
    "",
    ""
  ],
  [
    "234503169813265",
    "Mikulášov dvor (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "326580309833797",
    "Mikušovce (okres Lučenec)",
    "",
    ""
  ],
  [
    "222513385837539",
    "Mikušovce pri Pruskom (okres Ilava)",
    "",
    ""
  ],
  [
    "426580252819107",
    "Milhosť (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "42B528099837563",
    "Milhostov (okres Trebišov)",
    "",
    ""
  ],
  [
    "226512842837571",
    "Milochov (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "108508098837628",
    "Miloslavov (okres Senec)",
    "",
    ""
  ],
  [
    "418524875837636",
    "Milpoš (okres Sabinov)",
    "",
    ""
  ],
  [
    "41B527581837644",
    "Miňovce (okres Stropkov)",
    "",
    ""
  ],
  [
    "417524883837661",
    "Mirkovce (okres Prešov)",
    "",
    ""
  ],
  [
    "41C527599837687",
    "Miroľa (okres Svidník)",
    "",
    ""
  ],
  [
    "327511617837695",
    "Mládzovo (okres Poltár)",
    "",
    ""
  ],
  [
    "211501433813826",
    "Mliečany (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "211501905837725",
    "Mliečno (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "237500810863122",
    "Mlyňany (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "233500011840254",
    "Mlynárce (okres Nitra)",
    "",
    ""
  ],
  [
    "41C527602837741",
    "Mlynárovce (okres Svidník)",
    "",
    ""
  ],
  [
    "413523739837750",
    "Mlynčeky (okres Kežmarok)",
    "",
    ""
  ],
  [
    "416523747837784",
    "Mlynica (okres Poprad)",
    "",
    ""
  ],
  [
    "42A543357837814",
    "Mlynky (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "234503321832243",
    "Mlynský Sek (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "229506231837873",
    "Mníchova Lehota (okres Trenčín)",
    "",
    ""
  ],
  [
    "328525944834700",
    "Mníšany (okres Revúca)",
    "",
    ""
  ],
  [
    "421543365837890",
    "Mníšek nad Hnilcom (okres Gelnica)",
    "",
    ""
  ],
  [
    "41A526908837920",
    "Mníšek nad Popradom (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "231501255837954",
    "Moča (okres Komárno)",
    "",
    ""
  ],
  [
    "427522279837318",
    "Močarany (okres Michalovce)",
    "",
    ""
  ],
  [
    "417525014846040",
    "Močarmany (okres Prešov)",
    "",
    ""
  ],
  [
    "235500739855936",
    "Močenok (okres Šaľa)",
    "",
    ""
  ],
  [
    "322517071837989",
    "Močiar (okres Banská Štiavnica)",
    "",
    ""
  ],
  [
    "216504670848522",
    "Močidľany (okres Skalica)",
    "",
    ""
  ],
  [
    "418524603838004",
    "Močidľany (okres Sabinov)",
    "",
    ""
  ],
  [
    "107508101838039",
    "Modra (okres Pezinok)",
    "",
    ""
  ],
  [
    "412520497838063",
    "Modra nad Cirochou (okres Humenné)",
    "",
    ""
  ],
  [
    "217506745838071",
    "Modranka (okres Trnava)",
    "",
    ""
  ],
  [
    "231501263838080",
    "Modrany (okres Komárno)",
    "",
    ""
  ],
  [
    "224506249838098",
    "Modrová (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "224506257838101",
    "Modrovka (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "32A516210838128",
    "Modrý Kameň (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "232502413838152",
    "Mochovce (okres Levice)",
    "",
    ""
  ],
  [
    "329514462838161",
    "Mojín (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "233500577838179",
    "Mojmírovce (okres Nitra)",
    "",
    ""
  ],
  [
    "31B517801838187",
    "Mojš (okres Žilina)",
    "",
    ""
  ],
  [
    "31B517402838195",
    "Mojšova Lúčka (okres Žilina)",
    "",
    ""
  ],
  [
    "228513407838217",
    "Mojtín (okres Púchov)",
    "",
    ""
  ],
  [
    "234503398838225",
    "Mojzesovo (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "313509540838241",
    "Mokraď (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "313509540838250",
    "Mokradská Hoľa (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "328580384838233",
    "Mokrá Lúka (okres Revúca)",
    "",
    ""
  ],
  [
    "426521680838268",
    "Mokrance (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "411519618838276",
    "Mokroluh (okres Bardejov)",
    "",
    ""
  ],
  [
    "216504564838284",
    "Mokrý Háj (okres Skalica)",
    "",
    ""
  ],
  [
    "426521698838322",
    "Moldava nad Bodvou (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "427522791838411",
    "Moravany (okres Michalovce)",
    "",
    ""
  ],
  [
    "214507342838420",
    "Moravany nad Váhom (okres Piešťany)",
    "",
    ""
  ],
  [
    "211501697826774",
    "Moravské Kračany (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "224506265838454",
    "Moravské Lieskové (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "215504572838489",
    "Moravský Svätý Ján (okres Senica)",
    "",
    ""
  ],
  [
    "227513997838501",
    "Morovno (okres Prievidza)",
    "",
    ""
  ],
  [
    "228512940838535",
    "Mostište (okres Púchov)",
    "",
    ""
  ],
  [
    "212503924838543",
    "Mostová (okres Galanta)",
    "",
    ""
  ],
  [
    "108508110838527",
    "Most pri Bratislave (okres Senec)",
    "",
    ""
  ],
  [
    "319512451838560",
    "Moškovec (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "319512460838578",
    "Mošovce (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "321508799838586",
    "Moštenica (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "417524905838594",
    "Mošurov (okres Prešov)",
    "",
    ""
  ],
  [
    "321508802838659",
    "Motyčky (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "321508781838306",
    "Môlča (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "32B518158873845",
    "Môťová (okres Zvolen)",
    "",
    ""
  ],
  [
    "41B527611838683",
    "Mrázovce (okres Stropkov)",
    "",
    ""
  ],
  [
    "326511625838691",
    "Mučín (okres Lučenec)",
    "",
    ""
  ],
  [
    "231501271838721",
    "Mudroňovo (okres Komárno)",
    "",
    ""
  ],
  [
    "426521701838730",
    "Mudrovce (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "32A516228838756",
    "Muľa (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "326511927838764",
    "Muľka (okres Lučenec)",
    "",
    ""
  ],
  [
    "328525987838772",
    "Muráň (okres Revúca)",
    "",
    ""
  ],
  [
    "328525995838799",
    "Muránska Dlhá Lúka (okres Revúca)",
    "",
    ""
  ],
  [
    "328526002838802",
    "Muránska Huta (okres Revúca)",
    "",
    ""
  ],
  [
    "328526011838811",
    "Muránska Lehota (okres Revúca)",
    "",
    ""
  ],
  [
    "328526029838829",
    "Muránska Zdychava (okres Revúca)",
    "",
    ""
  ],
  [
    "317509850838837",
    "Mútne (okres Námestovo)",
    "",
    ""
  ],
  [
    "234503401838896",
    "Mužla (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "223504581838926",
    "Myjava (okres Myjava)",
    "",
    ""
  ],
  [
    "423598216827428",
    "Myslava (okres Košice II)",
    "",
    ""
  ],
  [
    "412520501839027",
    "Myslina (okres Humenné)",
    "",
    ""
  ],
  [
    "326511641839108",
    "Mýtna (okres Lučenec)",
    "",
    ""
  ],
  [
    "236505048839124",
    "Mýtna Nová Ves (okres Topoľčany)",
    "",
    ""
  ],
  [
    "232502570839141",
    "Mýtne Ludany (okres Levice)",
    "",
    ""
  ],
  [
    "323508811839175",
    "Mýto pod Ďumbierom (okres Brezno)",
    "",
    ""
  ],
  [
    "427522805839205",
    "Nacina Ves (okres Michalovce)",
    "",
    ""
  ],
  [
    "428525529853151",
    "Nadabula (okres Rožňava)",
    "",
    ""
  ],
  [
    "225505170839230",
    "Nadlice (okres Partizánske)",
    "",
    ""
  ],
  [
    "415520519839248",
    "Ňagov (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "217507351839256",
    "Naháč (okres Trnava)",
    "",
    ""
  ],
  [
    "421543373839299",
    "Nálepkovo (okres Gelnica)",
    "",
    ""
  ],
  [
    "317509868839345",
    "Námestovo (okres Námestovo)",
    "",
    ""
  ],
  [
    "317509868839361",
    "Námestovské Pilsko (okres Námestovo)",
    "",
    ""
  ],
  [
    "234556092861545",
    "Nána (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "328526037839370",
    "Nandraž (okres Revúca)",
    "",
    ""
  ],
  [
    "211501930863955",
    "Ňárad (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "225505315839388",
    "Návojovce (okres Partizánske)",
    "",
    ""
  ],
  [
    "212503665814610",
    "Nebojsa (okres Galanta)",
    "",
    ""
  ],
  [
    "316512478839400",
    "Necpaly (okres Martin)",
    "",
    ""
  ],
  [
    "225505196839418",
    "Nedanovce (okres Partizánske)",
    "",
    ""
  ],
  [
    "221505200839426",
    "Nedašovce (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "235503932839434",
    "Neded (okres Šaľa)",
    "",
    ""
  ],
  [
    "31B517828839442",
    "Nededza (okres Žilina)",
    "",
    ""
  ],
  [
    "326511226839451",
    "Nedelište (okres Lučenec)",
    "",
    ""
  ],
  [
    "227514209839477",
    "Nedožery (okres Prievidza)",
    "",
    ""
  ],
  [
    "412520527839485",
    "Nechválova Polianka (okres Humenné)",
    "",
    ""
  ],
  [
    "211502006870251",
    "Nekyje na Ostrove (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "321557285801437",
    "Nemce (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "417524913839507",
    "Nemcovce (okres Prešov)",
    "",
    ""
  ],
  [
    "411519626839493",
    "Nemcovce (okres Bardejov)",
    "",
    ""
  ],
  [
    "236581305839558",
    "Nemčice (okres Topoľčany)",
    "",
    ""
  ],
  [
    "237500585839566",
    "Nemčiňany (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "323508829839591",
    "Nemecká (okres Brezno)",
    "",
    ""
  ],
  [
    "234503568879720",
    "Nemecký Svodín (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "236505226839612",
    "Nemečky (okres Topoľčany)",
    "",
    ""
  ],
  [
    "414543381839621",
    "Nemešany (okres Levoča)",
    "",
    ""
  ],
  [
    "229506281839639",
    "Nemšová (okres Trenčín)",
    "",
    ""
  ],
  [
    "32A516236839655",
    "Nenince (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "329515205839680",
    "Neporadza (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "314509302839728",
    "Nesluša (okres Kysucké Nové Mesto)",
    "",
    ""
  ],
  [
    "231501280839817",
    "Nesvady (okres Komárno)",
    "",
    ""
  ],
  [
    "107507989822892",
    "Neštich (okres Pezinok)",
    "",
    ""
  ],
  [
    "237500593839833",
    "Neverice (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "237500607839841",
    "Nevidzany (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "227514217839850",
    "Nevidzany (okres Prievidza)",
    "",
    ""
  ],
  [
    "32D517089839868",
    "Nevoľné (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "31B558168867438",
    "Nezbudská Lúčka (okres Žilina)",
    "",
    ""
  ],
  [
    "228557447839884",
    "Nimnica (okres Púchov)",
    "",
    ""
  ],
  [
    "233500011839914",
    "Nitra (okres Nitra)",
    "",
    ""
  ],
  [
    "326511668840572",
    "Nitra nad Ipľom (okres Lučenec)",
    "",
    ""
  ],
  [
    "236505234840602",
    "Nitrianska Blatnica (okres Topoľčany)",
    "",
    ""
  ],
  [
    "236505242840611",
    "Nitrianska Streda (okres Topoľčany)",
    "",
    ""
  ],
  [
    "233556696840653",
    "Nitrianske Hrnčiarovce (okres Nitra)",
    "",
    ""
  ],
  [
    "227514225840670",
    "Nitrianske Pravno (okres Prievidza)",
    "",
    ""
  ],
  [
    "227514233840700",
    "Nitrianske Rudno (okres Prievidza)",
    "",
    ""
  ],
  [
    "227514241840726",
    "Nitrianske Sučany (okres Prievidza)",
    "",
    ""
  ],
  [
    "234503592840734",
    "Nitriansky Hrádok (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "106500267991945",
    "Nivky (okres Malacky)",
    "",
    ""
  ],
  [
    "102529320804274",
    "Nivy (okres Bratislava II)",
    "",
    ""
  ],
  [
    "214507369840769",
    "Nižná (okres Piešťany)",
    "",
    ""
  ],
  [
    "31A509876840777",
    "Nižná (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "315510874840785",
    "Nižná Boca (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "426518140840793",
    "Nižná Hutka (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "412520535840807",
    "Nižná Jablonka (okres Humenné)",
    "",
    ""
  ],
  [
    "41C527629840815",
    "Nižná Jedľová (okres Svidník)",
    "",
    ""
  ],
  [
    "426521728840823",
    "Nižná Kamenica (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "426521736840840",
    "Nižná Myšľa (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "415520578843679",
    "Nižná Oľka (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "41B527637840858",
    "Nižná Olšava (okres Stropkov)",
    "",
    ""
  ],
  [
    "41C527645840866",
    "Nižná Pisaná (okres Svidník)",
    "",
    ""
  ],
  [
    "329514462840874",
    "Nižná Pokoradz (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "411519634840882",
    "Nižná Polianka (okres Bardejov)",
    "",
    ""
  ],
  [
    "429522813840891",
    "Nižná Rybnica (okres Sobrance)",
    "",
    ""
  ],
  [
    "412528897840904",
    "Nižná Sitnica (okres Humenné)",
    "",
    ""
  ],
  [
    "428526045840912",
    "Nižná Slaná (okres Rožňava)",
    "",
    ""
  ],
  [
    "417524140840955",
    "Nižná Šebastová (okres Prešov)",
    "",
    ""
  ],
  [
    "416524107840963",
    "Nižná Šuňava (okres Poprad)",
    "",
    ""
  ],
  [
    "425599913881406",
    "Nižná Úvrať (okres Košice IV)",
    "",
    ""
  ],
  [
    "411519642840971",
    "Nižná Voľa (okres Bardejov)",
    "",
    ""
  ],
  [
    "412520543840980",
    "Nižné Ladičkovce (okres Humenné)",
    "",
    ""
  ],
  [
    "429522821840998",
    "Nižné Nemecké (okres Sobrance)",
    "",
    ""
  ],
  [
    "411519936841021",
    "Nižné Raslavice (okres Bardejov)",
    "",
    ""
  ],
  [
    "414543390841030",
    "Nižné Repaše (okres Levoča)",
    "",
    ""
  ],
  [
    "41A526916841048",
    "Nižné Ružbachy (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "42A543535856665",
    "Nižné Slovinky (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "329515795841056",
    "Nižné Valice (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "329515744868906",
    "Nižný Blh (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "426521744841064",
    "Nižný Čaj (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "41D528901841072",
    "Nižný Hrabovec (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "41D528919841099",
    "Nižný Hrušov (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "426521752841129",
    "Nižný Klátov (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "41C527653841137",
    "Nižný Komárnik (okres Svidník)",
    "",
    ""
  ],
  [
    "41D528927841145",
    "Nižný Kručov (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "426521761841153",
    "Nižný Lánec (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "41C527661841161",
    "Nižný Mirošov (okres Svidník)",
    "",
    ""
  ],
  [
    "426521591827631",
    "Nižný Olčvár (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "41C527670841170",
    "Nižný Orlík (okres Svidník)",
    "",
    ""
  ],
  [
    "329557790868647",
    "Nižný Skálnik (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "418524921841188",
    "Nižný Slavkov (okres Sabinov)",
    "",
    ""
  ],
  [
    "411519669841196",
    "Nižný Tvarožec (okres Bardejov)",
    "",
    ""
  ],
  [
    "42B528609841200",
    "Nižný Žipov (okres Trebišov)",
    "",
    ""
  ],
  [
    "316512486841218",
    "Nolčovo (okres Martin)",
    "",
    ""
  ],
  [
    "236505251841226",
    "Norovce (okres Topoľčany)",
    "",
    ""
  ],
  [
    "228513610841234",
    "Nosice (okres Púchov)",
    "",
    ""
  ],
  [
    "32C517097841251",
    "Nová Baňa (okres Žarnovica)",
    "",
    ""
  ],
  [
    "329515230841447",
    "Nová Bašta (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "224506303841501",
    "Nová Bošáca (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "312509311841633",
    "Nová Bystrica (okres Čadca)",
    "",
    ""
  ],
  [
    "328525685815047",
    "Nováčany (okres Revúca)",
    "",
    ""
  ],
  [
    "426521787841978",
    "Nováčany (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "222513440841757",
    "Nová Dubnica (okres Ilava)",
    "",
    ""
  ],
  [
    "212503835822671",
    "Nová Jelka (okres Galanta)",
    "",
    ""
  ],
  [
    "41D528935841765",
    "Nová Kelča (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "227514268842001",
    "Nováky (okres Prievidza)",
    "",
    ""
  ],
  [
    "224506311841781",
    "Nová Lehota (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "227513997841803",
    "Nová Lehota (okres Prievidza)",
    "",
    ""
  ],
  [
    "416523763841820",
    "Nová Lesná (okres Poprad)",
    "",
    ""
  ],
  [
    "108545333841838",
    "Nová Lipnica (okres Senec)",
    "",
    ""
  ],
  [
    "41A526924841846",
    "Nová Ľubovňa (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "426521795841854",
    "Nová Polhora (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "41C527688841862",
    "Nová Polianka (okres Svidník)",
    "",
    ""
  ],
  [
    "419520551841871",
    "Nová Sedlica (okres Snina)",
    "",
    ""
  ],
  [
    "231501026841901",
    "Nová Stráž (okres Komárno)",
    "",
    ""
  ],
  [
    "32A516244841927",
    "Nová Ves (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "224556459841935",
    "Nová Ves nad Váhom (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "233500631841943",
    "Nová Ves nad Žitavou (okres Nitra)",
    "",
    ""
  ],
  [
    "108508136841749",
    "Nová Ves pri Dunaji (okres Senec)",
    "",
    ""
  ],
  [
    "234503436841960",
    "Nová Vieska (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "42B543772857343",
    "Nová Vieska pri Bodrogu (okres Trebišov)",
    "",
    ""
  ],
  [
    "417525278950017",
    "Nové (okres Prešov)",
    "",
    ""
  ],
  [
    "326511676842010",
    "Nové Hony (okres Lučenec)",
    "",
    ""
  ],
  [
    "108545333842036",
    "Nové Košariská (okres Senec)",
    "",
    ""
  ],
  [
    "103529346804690",
    "Nové Mesto (okres Bratislava III)",
    "",
    ""
  ],
  [
    "224506338842044",
    "Nové Mesto nad Váhom (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "212504131842265",
    "Nové Osady (okres Galanta)",
    "",
    ""
  ],
  [
    "233500640842311",
    "Nové Sady (okres Nitra)",
    "",
    ""
  ],
  [
    "422599875881171",
    "Nové Ťahanovce (okres Košice I)",
    "",
    ""
  ],
  [
    "234503011842320",
    "Nové Zámky (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "42B528617842851",
    "Novosad (okres Trebišov)",
    "",
    ""
  ],
  [
    "317509884842877",
    "Novoť (okres Námestovo)",
    "",
    ""
  ],
  [
    "42B528552950025",
    "Nový Horeš (okres Trebišov)",
    "",
    ""
  ],
  [
    "426521809842915",
    "Nový Salaš (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "108582549851922",
    "Nový Svet (okres Senec)",
    "",
    ""
  ],
  [
    "232502596842931",
    "Nový Tekov (okres Levice)",
    "",
    ""
  ],
  [
    "232502600843016",
    "Nýrovce (okres Levice)",
    "",
    ""
  ],
  [
    "32A516252843024",
    "Obeckov (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "234582361843032",
    "Obid (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "426521817843041",
    "Obišovce (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "106500267991953",
    "Obora (okres Malacky)",
    "",
    ""
  ],
  [
    "427528633843067",
    "Oborín (okres Michalovce)",
    "",
    ""
  ],
  [
    "41A526932843075",
    "Obručné (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "236542938843083",
    "Obsolovce (okres Topoľčany)",
    "",
    ""
  ],
  [
    "237500658843091",
    "Obyce (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "224506346843105",
    "Očkov (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "32B518662843156",
    "Očová (okres Zvolen)",
    "",
    ""
  ],
  [
    "42A543403843164",
    "Odorín (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "211501816843172",
    "Ohrady (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "412520560843199",
    "Ohradzany (okres Humenné)",
    "",
    ""
  ],
  [
    "314509329843229",
    "Ochodnica (okres Kysucké Nové Mesto)",
    "",
    ""
  ],
  [
    "428526053843261",
    "Ochtiná (okres Rožňava)",
    "",
    ""
  ],
  [
    "211501824843300",
    "Okoč (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "231501301843342",
    "Okoličná na Ostrove (okres Komárno)",
    "",
    ""
  ],
  [
    "315510262843385",
    "Okoličné (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "41C527696843415",
    "Okrúhle (okres Svidník)",
    "",
    ""
  ],
  [
    "417524930843431",
    "Okružná (okres Prešov)",
    "",
    ""
  ],
  [
    "42A543411843466",
    "Olcnava (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "211501832843482",
    "Oľdza (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "418524948843504",
    "Olejníkov (okres Sabinov)",
    "",
    ""
  ],
  [
    "312509337843610",
    "Olešná (okres Čadca)",
    "",
    ""
  ],
  [
    "32A516261843687",
    "Olováry (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "411519677843695",
    "Oľšavce (okres Bardejov)",
    "",
    ""
  ],
  [
    "414543420843709",
    "Oľšavica (okres Levoča)",
    "",
    ""
  ],
  [
    "42A543438843725",
    "Oľšavka (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "41B527700843733",
    "Oľšavka (okres Stropkov)",
    "",
    ""
  ],
  [
    "415520586843741",
    "Oľšinkov (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "418524956843750",
    "Oľšov (okres Sabinov)",
    "",
    ""
  ],
  [
    "426521825843768",
    "Olšovany (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "221505277843776",
    "Omastiná (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "229506354843792",
    "Omšenie (okres Trenčín)",
    "",
    ""
  ],
  [
    "411519685843806",
    "Ondavka (okres Bardejov)",
    "",
    ""
  ],
  [
    "41D528943843814",
    "Ondavské Matiašovce (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "319512494843822",
    "Ondrašová (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "417524964843831",
    "Ondrašovce (okres Prešov)",
    "",
    ""
  ],
  [
    "232502618843849",
    "Ondrejovce (okres Levice)",
    "",
    ""
  ],
  [
    "234503321832251",
    "Ondrochov (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "426521833843857",
    "Opátka (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "326511218833754",
    "Opatová (okres Lučenec)",
    "",
    ""
  ],
  [
    "229505820843865",
    "Opatová (okres Trenčín)",
    "",
    ""
  ],
  [
    "232502588841706",
    "Opatová (okres Levice)",
    "",
    ""
  ],
  [
    "229506371843873",
    "Opatovce (okres Trenčín)",
    "",
    ""
  ],
  [
    "237582816874957",
    "Opatovce (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "227514284843881",
    "Opatovce nad Nitrou (okres Prievidza)",
    "",
    ""
  ],
  [
    "325518409816922",
    "Opatové Moravce (okres Krupina)",
    "",
    ""
  ],
  [
    "32A516279843903",
    "Opatovská Nová Ves (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "211501824843946",
    "Opatovský Sokolec (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "32A516287843962",
    "Opava (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "426521841843997",
    "Opiná (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "217556491844004",
    "Opoj (okres Trnava)",
    "",
    ""
  ],
  [
    "236505285844012",
    "Oponice (okres Topoľčany)",
    "",
    ""
  ],
  [
    "321508837844021",
    "Oravce (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "31A510114869694",
    "Oravice (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "329515248844039",
    "Orávka (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "317509892844047",
    "Oravská Jasenica (okres Námestovo)",
    "",
    ""
  ],
  [
    "317509906844110",
    "Oravská Lesná (okres Námestovo)",
    "",
    ""
  ],
  [
    "317509914844128",
    "Oravská Polhora (okres Námestovo)",
    "",
    ""
  ],
  [
    "31A510106866571",
    "Oravské Hámre (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "317509931844179",
    "Oravské Veselé (okres Námestovo)",
    "",
    ""
  ],
  [
    "31A509949844195",
    "Oravský Biely Potok (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "313509957844209",
    "Oravský Podzámok (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "414543446844225",
    "Ordzovany (okres Levoča)",
    "",
    ""
  ],
  [
    "429522830844241",
    "Orechová (okres Sobrance)",
    "",
    ""
  ],
  [
    "211501859844268",
    "Orechová Potôň (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "229505820872598",
    "Orechové (okres Trenčín)",
    "",
    ""
  ],
  [
    "216504599844314",
    "Oreské (okres Skalica)",
    "",
    ""
  ],
  [
    "427522848844322",
    "Oreské (okres Michalovce)",
    "",
    ""
  ],
  [
    "236556211844331",
    "Orešany (okres Topoľčany)",
    "",
    ""
  ],
  [
    "418525146844349",
    "Orkucany (okres Sabinov)",
    "",
    ""
  ],
  [
    "41A526941844365",
    "Orlov (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "226512842844373",
    "Orlové (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "32C580546844411",
    "Orovnica (okres Žarnovica)",
    "",
    ""
  ],
  [
    "411519693844420",
    "Ortuťová (okres Bardejov)",
    "",
    ""
  ],
  [
    "31A510106866580",
    "Osada (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "313509965844438",
    "Osádka (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "419520594844446",
    "Osadné (okres Snina)",
    "",
    ""
  ],
  [
    "411519707844454",
    "Osikov (okres Bardejov)",
    "",
    ""
  ],
  [
    "227514292844489",
    "Oslany (okres Prievidza)",
    "",
    ""
  ],
  [
    "323508845844519",
    "Osrblie (okres Brezno)",
    "",
    ""
  ],
  [
    "32B518671844527",
    "Ostrá Lúka (okres Zvolen)",
    "",
    ""
  ],
  [
    "329514926820008",
    "Ostrany (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "214507385844578",
    "Ostrov (okres Piešťany)",
    "",
    ""
  ],
  [
    "429522856844586",
    "Ostrov (okres Sobrance)",
    "",
    ""
  ],
  [
    "212503703809802",
    "Ostrov (okres Galanta)",
    "",
    ""
  ],
  [
    "418524981844608",
    "Ostrovany (okres Sabinov)",
    "",
    ""
  ],
  [
    "419520829844616",
    "Ostrožnica (okres Snina)",
    "",
    ""
  ],
  [
    "32C517119844624",
    "Ostrý Grúň (okres Žarnovica)",
    "",
    ""
  ],
  [
    "413523771844641",
    "Osturňa (okres Kežmarok)",
    "",
    ""
  ],
  [
    "215504602844659",
    "Osuské (okres Senica)",
    "",
    ""
  ],
  [
    "312509345844748",
    "Oščadnica (okres Čadca)",
    "",
    ""
  ],
  [
    "314509256844811",
    "Oškerda (okres Kysucké Nové Mesto)",
    "",
    ""
  ],
  [
    "221556289815489",
    "Otrhánky (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "328515256844829",
    "Otročok (okres Revúca)",
    "",
    ""
  ],
  [
    "31B547611844837",
    "Ovčiarsko (okres Žilina)",
    "",
    ""
  ],
  [
    "417524999844845",
    "Ovčie (okres Prešov)",
    "",
    ""
  ],
  [
    "327511684844853",
    "Ozdín (okres Poltár)",
    "",
    ""
  ],
  [
    "329515264844918",
    "Ožďany (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "217506877844926",
    "Pác (okres Trnava)",
    "",
    ""
  ],
  [
    "428526061844934",
    "Pača (okres Rožňava)",
    "",
    ""
  ],
  [
    "211501867844942",
    "Padáň (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "329515272844969",
    "Padarovce (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "217507156844977",
    "Paderovce (okres Trnava)",
    "",
    ""
  ],
  [
    "412528951844985",
    "Pakostov (okres Humenné)",
    "",
    ""
  ],
  [
    "234503452845027",
    "Palárikovo (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "427522864845230",
    "Palín (okres Michalovce)",
    "",
    ""
  ],
  [
    "415520616845256",
    "Palota (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "315510262832766",
    "Palúdzka (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "233500666845272",
    "Paňa (okres Nitra)",
    "",
    ""
  ],
  [
    "326511692845299",
    "Panické Dravce (okres Lučenec)",
    "",
    ""
  ],
  [
    "426521850845302",
    "Paňovce (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "237500283818640",
    "Panský diel (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "329514659812897",
    "Papča (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "412520624845311",
    "Papín (okres Humenné)",
    "",
    ""
  ],
  [
    "226513466845337",
    "Papradno (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "42B528676845361",
    "Parchovany (okres Trebišov)",
    "",
    ""
  ],
  [
    "419520632845370",
    "Parihuzovce (okres Snina)",
    "",
    ""
  ],
  [
    "315510653832481",
    "Parížovce (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "313509973845388",
    "Párnica (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "233500011840165",
    "Párovské Háje (okres Nitra)",
    "",
    ""
  ],
  [
    "315510904845400",
    "Partizánska Ľupča (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "225505315845426",
    "Partizánske (okres Partizánske)",
    "",
    ""
  ],
  [
    "232502626845566",
    "Pastovce (okres Levice)",
    "",
    ""
  ],
  [
    "213507415845591",
    "Pastuchov (okres Hlohovec)",
    "",
    ""
  ],
  [
    "428526070845639",
    "Pašková (okres Rožňava)",
    "",
    ""
  ],
  [
    "31B547620845647",
    "Paština Závada (okres Žilina)",
    "",
    ""
  ],
  [
    "212503959845655",
    "Pata (okres Galanta)",
    "",
    ""
  ],
  [
    "211501883845612",
    "Pataš (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "231501310845663",
    "Patince (okres Komárno)",
    "",
    ""
  ],
  [
    "108508071835811",
    "Patov (okres Senec)",
    "",
    ""
  ],
  [
    "315510912845671",
    "Pavčina Lehota (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "414543454845680",
    "Pavľany (okres Levoča)",
    "",
    ""
  ],
  [
    "217556556845698",
    "Pavlice (okres Trnava)",
    "",
    ""
  ],
  [
    "234556033845701",
    "Pavlová (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "315510921845710",
    "Pavlova Ves (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "329515281845736",
    "Pavlovce (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "41D528960845744",
    "Pavlovce (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "427522872845787",
    "Pavlovce nad Uhom (okres Michalovce)",
    "",
    ""
  ],
  [
    "42B528153875376",
    "Pavlovo (okres Trebišov)",
    "",
    ""
  ],
  [
    "225505323845809",
    "Pažiť (okres Partizánske)",
    "",
    ""
  ],
  [
    "419520641845817",
    "Pčoliné (okres Snina)",
    "",
    ""
  ],
  [
    "214507431845825",
    "Pečeňady (okres Piešťany)",
    "",
    ""
  ],
  [
    "221505331845833",
    "Pečeňany (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "232502634845841",
    "Pečenice (okres Levice)",
    "",
    ""
  ],
  [
    "418525006845876",
    "Pečovská Nová Ves (okres Sabinov)",
    "",
    ""
  ],
  [
    "426521868845884",
    "Peder (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "31B517526845892",
    "Peklina (okres Žilina)",
    "",
    ""
  ],
  [
    "423598208827401",
    "Pereš (okres Košice II)",
    "",
    ""
  ],
  [
    "426521876845922",
    "Perín (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "106508161845931",
    "Pernek (okres Malacky)",
    "",
    ""
  ],
  [
    "41D528978845949",
    "Petkovce (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "229506273845957",
    "Peťovka (okres Trenčín)",
    "",
    ""
  ],
  [
    "427522881845965",
    "Petrikovce (okres Michalovce)",
    "",
    ""
  ],
  [
    "411519715845981",
    "Petrová (okres Bardejov)",
    "",
    ""
  ],
  [
    "229581348845990",
    "Petrova Lehota (okres Trenčín)",
    "",
    ""
  ],
  [
    "417525014846058",
    "Petrovany (okres Prešov)",
    "",
    ""
  ],
  [
    "216504611846007",
    "Petrova Ves (okres Skalica)",
    "",
    ""
  ],
  [
    "41D528986846091",
    "Petrovce (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "429522899846082",
    "Petrovce (okres Sobrance)",
    "",
    ""
  ],
  [
    "329515299846074",
    "Petrovce (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "427522902846112",
    "Petrovce nad Laborcom (okres Michalovce)",
    "",
    ""
  ],
  [
    "311517861846121",
    "Petrovice (okres Bytča)",
    "",
    ""
  ],
  [
    "428526088846155",
    "Petrovo (okres Rožňava)",
    "",
    ""
  ],
  [
    "105529460804959",
    "Petržalka (okres Bratislava V)",
    "",
    ""
  ],
  [
    "107508179846163",
    "Pezinok (okres Pezinok)",
    "",
    ""
  ],
  [
    "214507440846309",
    "Piešťany (okres Piešťany)",
    "",
    ""
  ],
  [
    "419520659846546",
    "Pichne (okres Snina)",
    "",
    ""
  ],
  [
    "107508187846554",
    "Píla (okres Pezinok)",
    "",
    ""
  ],
  [
    "326511706846619",
    "Píla (okres Lučenec)",
    "",
    ""
  ],
  [
    "32C517127846651",
    "Píla (okres Žarnovica)",
    "",
    ""
  ],
  [
    "41A526908837938",
    "Pilhov (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "326511714846660",
    "Pinciná (okres Lučenec)",
    "",
    ""
  ],
  [
    "429522911846678",
    "Pinkovce (okres Sobrance)",
    "",
    ""
  ],
  [
    "211501697826782",
    "Pinkove Kračany (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "41D528994846686",
    "Piskorovce (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "32D517135846724",
    "Pitelová (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "232502642846759",
    "Plášťovce (okres Levice)",
    "",
    ""
  ],
  [
    "106504629846775",
    "Plavecké Podhradie (okres Malacky)",
    "",
    ""
  ],
  [
    "106504637846791",
    "Plavecký Mikuláš (okres Malacky)",
    "",
    ""
  ],
  [
    "215504645846805",
    "Plavecký Peter (okres Senica)",
    "",
    ""
  ],
  [
    "106508195846813",
    "Plavecký Štvrtok (okres Malacky)",
    "",
    ""
  ],
  [
    "41A526959846848",
    "Plaveč (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "232502651846767",
    "Plavé Vozokany (okres Levice)",
    "",
    ""
  ],
  [
    "41A526967846872",
    "Plavnica (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "42B528641846881",
    "Plechotice (okres Trebišov)",
    "",
    ""
  ],
  [
    "326511722846899",
    "Pleš (okres Lučenec)",
    "",
    ""
  ],
  [
    "428526096846929",
    "Plešivec (okres Rožňava)",
    "",
    ""
  ],
  [
    "226513474846945",
    "Plevník-Drienové (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "32B518689846988",
    "Pliešovce (okres Zvolen)",
    "",
    ""
  ],
  [
    "426521884847046",
    "Ploské (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "328515302847020",
    "Ploské (okres Revúca)",
    "",
    ""
  ],
  [
    "315510262847054",
    "Ploštín (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "224506401847062",
    "Pobedim (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "226558222847071",
    "Počarová (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "322517160847089",
    "Počúvadlo (okres Banská Štiavnica)",
    "",
    ""
  ],
  [
    "211555720830011",
    "Pódafa (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "31A509981847101",
    "Podbiel (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "215504653847178",
    "Podbranč (okres Senica)",
    "",
    ""
  ],
  [
    "323508853847216",
    "Podbrezová (okres Brezno)",
    "",
    ""
  ],
  [
    "413523780847305",
    "Podhorany (okres Kežmarok)",
    "",
    ""
  ],
  [
    "417525022847313",
    "Podhorany (okres Prešov)",
    "",
    ""
  ],
  [
    "31B517879847356",
    "Podhorie (okres Žilina)",
    "",
    ""
  ],
  [
    "429522929847364",
    "Podhoroď (okres Sobrance)",
    "",
    ""
  ],
  [
    "236505340847372",
    "Podhradie (okres Topoľčany)",
    "",
    ""
  ],
  [
    "227514306847399",
    "Podhradie (okres Prievidza)",
    "",
    ""
  ],
  [
    "316512508847381",
    "Podhradie nad Váhom (okres Martin)",
    "",
    ""
  ],
  [
    "417525031847402",
    "Podhradík (okres Prešov)",
    "",
    ""
  ],
  [
    "32B518581831450",
    "Podjavorie (okres Zvolen)",
    "",
    ""
  ],
  [
    "321508861847411",
    "Podkonice (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "324511731847500",
    "Podkriváň (okres Detva)",
    "",
    ""
  ],
  [
    "223506419847526",
    "Podkylava (okres Myjava)",
    "",
    ""
  ],
  [
    "321508438801283",
    "Podlavice (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "221505358847585",
    "Podlužany (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "232502669847577",
    "Podlužany (okres Levice)",
    "",
    ""
  ],
  [
    "226512842847615",
    "Podmanín (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "224506427847640",
    "Podolie (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "41A526975847674",
    "Podolínec (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "326511749847682",
    "Podrečany (okres Lučenec)",
    "",
    ""
  ],
  [
    "226580864847712",
    "Podskalie (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "315510947847721",
    "Podtureň (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "102529311847755",
    "Podunajské Biskupice (okres Bratislava II)",
    "",
    ""
  ],
  [
    "226512842847763",
    "Podvažie (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "312509361847771",
    "Podvysoká (okres Čadca)",
    "",
    ""
  ],
  [
    "32B518697847780",
    "Podzámčok (okres Zvolen)",
    "",
    ""
  ],
  [
    "323508870847798",
    "Pohorelá (okres Brezno)",
    "",
    ""
  ],
  [
    "233500682847810",
    "Pohranice (okres Nitra)",
    "",
    ""
  ],
  [
    "323508888847828",
    "Pohronská Polhora (okres Brezno)",
    "",
    ""
  ],
  [
    "321508896847836",
    "Pohronský Bukovec (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "232502677847844",
    "Pohronský Ruskov (okres Levice)",
    "",
    ""
  ],
  [
    "221556742847852",
    "Pochabany (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "313509990847861",
    "Pokryváč (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "414543462847887",
    "Poľanovce (okres Levoča)",
    "",
    ""
  ],
  [
    "42B528668847895",
    "Poľany (okres Trebišov)",
    "",
    ""
  ],
  [
    "319512044847909",
    "Polerieka (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "411519723847917",
    "Poliakovce (okres Bardejov)",
    "",
    ""
  ],
  [
    "223504661847950",
    "Polianka (okres Myjava)",
    "",
    ""
  ],
  [
    "326511757847968",
    "Polichno (okres Lučenec)",
    "",
    ""
  ],
  [
    "328515311847984",
    "Polina (okres Revúca)",
    "",
    ""
  ],
  [
    "233500691848018",
    "Poľný Kesov (okres Nitra)",
    "",
    ""
  ],
  [
    "329514829848026",
    "Polom (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "418525049848034",
    "Poloma (okres Sabinov)",
    "",
    ""
  ],
  [
    "323508900848051",
    "Polomka (okres Brezno)",
    "",
    ""
  ],
  [
    "423599859827495",
    "Poľov (okres Košice II)",
    "",
    ""
  ],
  [
    "327511765848077",
    "Poltár (okres Poltár)",
    "",
    ""
  ],
  [
    "227514314848115",
    "Poluvsie (okres Prievidza)",
    "",
    ""
  ],
  [
    "31B517933848123",
    "Poluvsie nad Rajčankou (okres Žilina)",
    "",
    ""
  ],
  [
    "327514900819514",
    "Pondelok (okres Poltár)",
    "",
    ""
  ],
  [
    "414543471848131",
    "Pongrácovce (okres Levoča)",
    "",
    ""
  ],
  [
    "321508918848158",
    "Poniky (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "416523381848174",
    "Poprad (okres Poprad)",
    "",
    ""
  ],
  [
    "426521892848506",
    "Poproč (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "329515337848484",
    "Poproč (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "216504670848531",
    "Popudiny (okres Skalica)",
    "",
    ""
  ],
  [
    "42A543489848557",
    "Poráč (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "223504688848590",
    "Poriadie (okres Myjava)",
    "",
    ""
  ],
  [
    "429522937848620",
    "Porostov (okres Sobrance)",
    "",
    ""
  ],
  [
    "227514322848638",
    "Poruba (okres Prievidza)",
    "",
    ""
  ],
  [
    "313509922844144",
    "Poruba-Geceľ (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "427522945848646",
    "Poruba pod Vihorlatom (okres Michalovce)",
    "",
    ""
  ],
  [
    "31B557960832146",
    "Porúbka (okres Žilina)",
    "",
    ""
  ],
  [
    "412520667848662",
    "Porúbka (okres Humenné)",
    "",
    ""
  ],
  [
    "411519731848654",
    "Porúbka (okres Bardejov)",
    "",
    ""
  ],
  [
    "429522953848671",
    "Porúbka (okres Sobrance)",
    "",
    ""
  ],
  [
    "213507024848689",
    "Posádka (okres Hlohovec)",
    "",
    ""
  ],
  [
    "41D529001848697",
    "Poša (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "211501581816680",
    "Póšfa (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "211555746950114",
    "Poteho osada (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "318510955848719",
    "Potok (okres Ružomberok)",
    "",
    ""
  ],
  [
    "329515345848727",
    "Potok (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "41B527726848735",
    "Potoky (okres Stropkov)",
    "",
    ""
  ],
  [
    "41B527718848701",
    "Potôčky (okres Stropkov)",
    "",
    ""
  ],
  [
    "211582522817520",
    "Potônske Lúky (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "224506435848794",
    "Potvorice (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "224506443848808",
    "Považany (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "226512842848832",
    "Považská Bystrica (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "226512842849006",
    "Považská Teplá (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "226512842849022",
    "Považské Podhradie (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "31B517402849031",
    "Považský Chlmec (okres Žilina)",
    "",
    ""
  ],
  [
    "314509370849057",
    "Povina (okres Kysucké Nové Mesto)",
    "",
    ""
  ],
  [
    "321508926849073",
    "Povrazník (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "234503487849090",
    "Pozba (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "427522961849103",
    "Pozdišovce (okres Michalovce)",
    "",
    ""
  ],
  [
    "32A516295848751",
    "Pôtor (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "326511773849111",
    "Praha (okres Lučenec)",
    "",
    ""
  ],
  [
    "421543497849120",
    "Prakovce (okres Gelnica)",
    "",
    ""
  ],
  [
    "236505374849171",
    "Prašice (okres Topoľčany)",
    "",
    ""
  ],
  [
    "32B518581991911",
    "Prášková (okres Zvolen)",
    "",
    ""
  ],
  [
    "214507466849251",
    "Prašník (okres Piešťany)",
    "",
    ""
  ],
  [
    "227514331849294",
    "Pravenec (okres Prievidza)",
    "",
    ""
  ],
  [
    "32A516309849324",
    "Pravica (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "221505382849332",
    "Pravotice (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "226512842849367",
    "Praznov (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "236581658849375",
    "Práznovce (okres Topoľčany)",
    "",
    ""
  ],
  [
    "226513563849391",
    "Prečín (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "323508934849413",
    "Predajná (okres Brezno)",
    "",
    ""
  ],
  [
    "311517895849421",
    "Predmier (okres Bytča)",
    "",
    ""
  ],
  [
    "222513016849430",
    "Prejta (okres Ilava)",
    "",
    ""
  ],
  [
    "322517178849448",
    "Prenčov (okres Banská Štiavnica)",
    "",
    ""
  ],
  [
    "236505404849464",
    "Preseľany (okres Topoľčany)",
    "",
    ""
  ],
  [
    "232502782849472",
    "Preseľany nad Ipľom (okres Levice)",
    "",
    ""
  ],
  [
    "32D517186849499",
    "Prestavlky (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "417524140849502",
    "Prešov (okres Prešov)",
    "",
    ""
  ],
  [
    "42B528684849677",
    "Pribeník (okres Trebišov)",
    "",
    ""
  ],
  [
    "231501328849707",
    "Pribeta (okres Komárno)",
    "",
    ""
  ],
  [
    "313510009849715",
    "Pribiš (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "32A516368849723",
    "Príboj (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "329557811852643",
    "Príboj (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "316512524849731",
    "Príbovce (okres Martin)",
    "",
    ""
  ],
  [
    "315510963849774",
    "Pribylina (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "321508942849782",
    "Priechod (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "429522970849847",
    "Priekopa (okres Sobrance)",
    "",
    ""
  ],
  [
    "316512036849839",
    "Priekopa (okres Martin)",
    "",
    ""
  ],
  [
    "223504696849901",
    "Priepasné (okres Myjava)",
    "",
    ""
  ],
  [
    "215504700849987",
    "Prietrž (okres Senica)",
    "",
    ""
  ],
  [
    "216504718850012",
    "Prietržka (okres Skalica)",
    "",
    ""
  ],
  [
    "215504726850021",
    "Prievaly (okres Senica)",
    "",
    ""
  ],
  [
    "227513881850063",
    "Prievidza (okres Prievidza)",
    "",
    ""
  ],
  [
    "328526100850225",
    "Prihradzany (okres Revúca)",
    "",
    ""
  ],
  [
    "41C527734850233",
    "Príkra (okres Svidník)",
    "",
    ""
  ],
  [
    "237500968873420",
    "Prílepy (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "216504611950068",
    "Primoravské lúky (okres Skalica)",
    "",
    ""
  ],
  [
    "419520675850241",
    "Príslop (okres Snina)",
    "",
    ""
  ],
  [
    "412529010850250",
    "Prituľany (okres Humenné)",
    "",
    ""
  ],
  [
    "417525057850268",
    "Proč (okres Prešov)",
    "",
    ""
  ],
  [
    "32D517194850276",
    "Prochot (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "41D529028850284",
    "Prosačov (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "315510971850292",
    "Prosiek (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "226513741850314",
    "Prosné (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "314509205875236",
    "Prostredný Vadičov (okres Kysucké Nové Mesto)",
    "",
    ""
  ],
  [
    "326511781850322",
    "Prša (okres Lučenec)",
    "",
    ""
  ],
  [
    "222513598850331",
    "Pruské (okres Ilava)",
    "",
    ""
  ],
  [
    "221505412850357",
    "Prusy (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "226513601850390",
    "Pružina (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "32C516830850403",
    "Psiare (okres Žarnovica)",
    "",
    ""
  ],
  [
    "41C527742850411",
    "Pstriná (okres Svidník)",
    "",
    ""
  ],
  [
    "311517461850420",
    "Pšurnovice (okres Bytča)",
    "",
    ""
  ],
  [
    "412520683850438",
    "Ptičie (okres Humenné)",
    "",
    ""
  ],
  [
    "427528692850446",
    "Ptrukša (okres Michalovce)",
    "",
    ""
  ],
  [
    "313510017850454",
    "Pucov (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "228513610850462",
    "Púchov (okres Púchov)",
    "",
    ""
  ],
  [
    "232502693850675",
    "Pukanec (okres Levice)",
    "",
    ""
  ],
  [
    "427522988850683",
    "Pusté Čemerné (okres Michalovce)",
    "",
    ""
  ],
  [
    "41A526983850691",
    "Pusté Pole (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "212503967850705",
    "Pusté Sady (okres Galanta)",
    "",
    ""
  ],
  [
    "212503975850730",
    "Pusté Úľany (okres Galanta)",
    "",
    ""
  ],
  [
    "237500062802417",
    "Pustý Chotár (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "417525065850748",
    "Pušovce (okres Prešov)",
    "",
    ""
  ],
  [
    "317510025850772",
    "Rabča (okres Námestovo)",
    "",
    ""
  ],
  [
    "317510033850811",
    "Rabčice (okres Námestovo)",
    "",
    ""
  ],
  [
    "103529354805866",
    "Rača (okres Bratislava III)",
    "",
    ""
  ],
  [
    "227514250840751",
    "Račice (okres Prievidza)",
    "",
    ""
  ],
  [
    "42B528706850845",
    "Rad (okres Trebišov)",
    "",
    ""
  ],
  [
    "417525073850861",
    "Radatice (okres Prešov)",
    "",
    ""
  ],
  [
    "234503495850870",
    "Radava (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "216504734850896",
    "Radimov (okres Skalica)",
    "",
    ""
  ],
  [
    "221505811874981",
    "Radiša (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "329515353850900",
    "Radnovce (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "227514349850942",
    "Radobica (okres Prievidza)",
    "",
    ""
  ],
  [
    "314580791850977",
    "Radoľa (okres Kysucké Nové Mesto)",
    "",
    ""
  ],
  [
    "41C527751850993",
    "Radoma (okres Svidník)",
    "",
    ""
  ],
  [
    "236505421851078",
    "Radošina (okres Topoľčany)",
    "",
    ""
  ],
  [
    "216504742851094",
    "Radošovce (okres Skalica)",
    "",
    ""
  ],
  [
    "217556653851116",
    "Radošovce (okres Trnava)",
    "",
    ""
  ],
  [
    "312509396851027",
    "Radôstka (okres Čadca)",
    "",
    ""
  ],
  [
    "321508438801241",
    "Radvaň (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "231501336851132",
    "Radvaň nad Dunajom (okres Komárno)",
    "",
    ""
  ],
  [
    "415520691851167",
    "Radvaň nad Laborcom (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "41D529036851175",
    "Radvanovce (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "326511790851191",
    "Radzovce (okres Lučenec)",
    "",
    ""
  ],
  [
    "41D529044851205",
    "Rafajovce (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "236505439851213",
    "Rajčany (okres Topoľčany)",
    "",
    ""
  ],
  [
    "31B517917851221",
    "Rajec (okres Žilina)",
    "",
    ""
  ],
  [
    "31B517925851230",
    "Rajecká Lesná (okres Žilina)",
    "",
    ""
  ],
  [
    "31B517933851256",
    "Rajecké Teplice (okres Žilina)",
    "",
    ""
  ],
  [
    "224506125825107",
    "Rakoľuby (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "426521906851272",
    "Rákoš (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "328526118851281",
    "Rákoš (okres Revúca)",
    "",
    ""
  ],
  [
    "312509400851388",
    "Raková (okres Čadca)",
    "",
    ""
  ],
  [
    "41C527769851515",
    "Rakovčík (okres Svidník)",
    "",
    ""
  ],
  [
    "325518417816957",
    "Rakovec (okres Krupina)",
    "",
    ""
  ],
  [
    "427522996851523",
    "Rakovec nad Ondavou (okres Michalovce)",
    "",
    ""
  ],
  [
    "214507482851531",
    "Rakovice (okres Piešťany)",
    "",
    ""
  ],
  [
    "428526126851558",
    "Rakovnica (okres Rožňava)",
    "",
    ""
  ],
  [
    "316512541851574",
    "Rakovo (okres Martin)",
    "",
    ""
  ],
  [
    "319512559851582",
    "Rakša (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "413523798851612",
    "Rakúsy (okres Kežmarok)",
    "",
    ""
  ],
  [
    "329557854866628",
    "Rakytník (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "426521914851639",
    "Rankovce (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "326511803851655",
    "Rapovce (okres Lučenec)",
    "",
    ""
  ],
  [
    "211502022873390",
    "Rastice (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "234503509851680",
    "Rastislavice (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "328515361851698",
    "Rašice (okres Revúca)",
    "",
    ""
  ],
  [
    "326511811851728",
    "Ratka (okres Lučenec)",
    "",
    ""
  ],
  [
    "328515370851752",
    "Ratková (okres Revúca)",
    "",
    ""
  ],
  [
    "213518620851779",
    "Ratkovce (okres Hlohovec)",
    "",
    ""
  ],
  [
    "316512567851787",
    "Ratkovo (okres Martin)",
    "",
    ""
  ],
  [
    "329515388851795",
    "Ratkovská Lehota (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "329515396851817",
    "Ratkovská Suchá (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "329515485852830",
    "Ratkovská Zdychava (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "328515400851833",
    "Ratkovské Bystré (okres Revúca)",
    "",
    ""
  ],
  [
    "214507491851841",
    "Ratnovce (okres Piešťany)",
    "",
    ""
  ],
  [
    "418525081851850",
    "Ratvaj (okres Sabinov)",
    "",
    ""
  ],
  [
    "227514357851868",
    "Ráztočno (okres Prievidza)",
    "",
    ""
  ],
  [
    "323508951851884",
    "Ráztoka (okres Brezno)",
    "",
    ""
  ],
  [
    "315510262851892",
    "Ráztoky (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "418525090851914",
    "Ražňany (okres Sabinov)",
    "",
    ""
  ],
  [
    "108503983851931",
    "Reca (okres Senec)",
    "",
    ""
  ],
  [
    "411519740851949",
    "Regetovka (okres Bardejov)",
    "",
    ""
  ],
  [
    "428526134851965",
    "Rejdová (okres Rožňava)",
    "",
    ""
  ],
  [
    "413523801851973",
    "Reľov (okres Kežmarok)",
    "",
    ""
  ],
  [
    "41D529052851981",
    "Remeniny (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "429523003851990",
    "Remetské Hámre (okres Sobrance)",
    "",
    ""
  ],
  [
    "418525103852007",
    "Renčišov (okres Sabinov)",
    "",
    ""
  ],
  [
    "415520705852015",
    "Repejov (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "32D517216852031",
    "Repište (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "328515370851761",
    "Repištia (okres Revúca)",
    "",
    ""
  ],
  [
    "426521922852058",
    "Rešica (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "411519758852066",
    "Rešov (okres Bardejov)",
    "",
    ""
  ],
  [
    "313510165867608",
    "Revišné (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "32C517381852091",
    "Revištské Podzámčie (okres Žarnovica)",
    "",
    ""
  ],
  [
    "328526142852104",
    "Revúca (okres Revúca)",
    "",
    ""
  ],
  [
    "328526151852210",
    "Revúcka Lehota (okres Revúca)",
    "",
    ""
  ],
  [
    "328526142852228",
    "Revúčka (okres Revúca)",
    "",
    ""
  ],
  [
    "106500267991996",
    "Riadok (okres Malacky)",
    "",
    ""
  ],
  [
    "321508969852236",
    "Riečka (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "329557765852244",
    "Riečka (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "312509311852325",
    "Riečnica (okres Čadca)",
    "",
    ""
  ],
  [
    "421543501852350",
    "Richnava (okres Gelnica)",
    "",
    ""
  ],
  [
    "411519766852376",
    "Richvald (okres Bardejov)",
    "",
    ""
  ],
  [
    "329515124831166",
    "Rimavica (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "329515426852384",
    "Rimavská Baňa (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "329515124831158",
    "Rimavská Lehota (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "329515680852406",
    "Rimavská Píla (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "329515442852414",
    "Rimavská Seč (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "329514462852422",
    "Rimavská Sobota (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "329515451852597",
    "Rimavské Brezovo (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "329515469852635",
    "Rimavské Janovce (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "329557811852651",
    "Rimavské Zalužany (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "233500704852660",
    "Rišňovce (okres Nitra)",
    "",
    ""
  ],
  [
    "215556122852694",
    "Rohov (okres Senica)",
    "",
    ""
  ],
  [
    "211501891852678",
    "Rohovce (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "232502936868965",
    "Rohožnica (okres Levice)",
    "",
    ""
  ],
  [
    "237500585839574",
    "Rohožnica (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "412529061852724",
    "Rohožník (okres Humenné)",
    "",
    ""
  ],
  [
    "106504769852716",
    "Rohožník (okres Malacky)",
    "",
    ""
  ],
  [
    "428526177852732",
    "Rochovce (okres Rožňava)",
    "",
    ""
  ],
  [
    "417525111852741",
    "Rokycany (okres Prešov)",
    "",
    ""
  ],
  [
    "411519774852759",
    "Rokytov (okres Bardejov)",
    "",
    ""
  ],
  [
    "415559610828785",
    "Rokytovce (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "421543322836052",
    "Rolova Huta (okres Gelnica)",
    "",
    ""
  ],
  [
    "31B517941852767",
    "Rosina (okres Žilina)",
    "",
    ""
  ],
  [
    "415520713852775",
    "Roškovce (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "428526185852791",
    "Roštár (okres Rožňava)",
    "",
    ""
  ],
  [
    "215504777852805",
    "Rovensko (okres Senica)",
    "",
    ""
  ],
  [
    "108508209852813",
    "Rovinka (okres Senec)",
    "",
    ""
  ],
  [
    "327511820852821",
    "Rovňany (okres Poltár)",
    "",
    ""
  ],
  [
    "41C527777852864",
    "Rovné (okres Svidník)",
    "",
    ""
  ],
  [
    "412520721852856",
    "Rovné (okres Humenné)",
    "",
    ""
  ],
  [
    "329515485852848",
    "Rovné (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "215504297852881",
    "Rozbehy (okres Senica)",
    "",
    ""
  ],
  [
    "426521931852899",
    "Rozhanovce (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "428526193852902",
    "Rozložná (okres Rožňava)",
    "",
    ""
  ],
  [
    "41C527785852911",
    "Roztoky (okres Svidník)",
    "",
    ""
  ],
  [
    "229545741852929",
    "Rozvadze (okres Trenčín)",
    "",
    ""
  ],
  [
    "418525120852937",
    "Rožkovany (okres Sabinov)",
    "",
    ""
  ],
  [
    "428525529852945",
    "Rožňava (okres Rožňava)",
    "",
    ""
  ],
  [
    "428526207853275",
    "Rožňavské Bystré (okres Rožňava)",
    "",
    ""
  ],
  [
    "229506290839671",
    "Rožňová Neporadza (okres Trenčín)",
    "",
    ""
  ],
  [
    "234503517853283",
    "Rúbaň (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "216504530950050",
    "Rúbanice (okres Skalica)",
    "",
    ""
  ],
  [
    "314509426853291",
    "Rudina (okres Kysucké Nové Mesto)",
    "",
    ""
  ],
  [
    "314509434853305",
    "Rudinka (okres Kysucké Nové Mesto)",
    "",
    ""
  ],
  [
    "314509442853356",
    "Rudinská (okres Kysucké Nové Mesto)",
    "",
    ""
  ],
  [
    "41D529079853381",
    "Rudlov (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "428526215853402",
    "Rudná (okres Rožňava)",
    "",
    ""
  ],
  [
    "42A543519853411",
    "Rudňany (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "227514365853437",
    "Rudnianska Lehota (okres Prievidza)",
    "",
    ""
  ],
  [
    "223504793853461",
    "Rudník (okres Myjava)",
    "",
    ""
  ],
  [
    "426521949853518",
    "Rudník (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "319512575853526",
    "Rudno (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "32C517232853534",
    "Rudno nad Hronom (okres Žarnovica)",
    "",
    ""
  ],
  [
    "233500712853542",
    "Rumanová (okres Nitra)",
    "",
    ""
  ],
  [
    "329515493853569",
    "Rumince (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "419520730853577",
    "Runina (okres Snina)",
    "",
    ""
  ],
  [
    "427528714853593",
    "Ruská (okres Michalovce)",
    "",
    ""
  ],
  [
    "429523011853607",
    "Ruská Bystrá (okres Sobrance)",
    "",
    ""
  ],
  [
    "412529087853615",
    "Ruská Kajňa (okres Humenné)",
    "",
    ""
  ],
  [
    "417525138853623",
    "Ruská Nová Ves (okres Prešov)",
    "",
    ""
  ],
  [
    "412529095853631",
    "Ruská Poruba (okres Humenné)",
    "",
    ""
  ],
  [
    "41D529109853640",
    "Ruská Voľa (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "41A526991853658",
    "Ruská Voľa nad Popradom (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "419520748853666",
    "Ruská Volová (okres Snina)",
    "",
    ""
  ],
  [
    "419520829853674",
    "Ruské (okres Snina)",
    "",
    ""
  ],
  [
    "417524794833622",
    "Ruské Pekľany (okres Prešov)",
    "",
    ""
  ],
  [
    "413523984950131",
    "Ruskinovce (okres Kežmarok)",
    "",
    ""
  ],
  [
    "426521957853691",
    "Ruskov (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "429523020853721",
    "Ruskovce (okres Sobrance)",
    "",
    ""
  ],
  [
    "221505447853704",
    "Ruskovce (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "429523038853739",
    "Ruský Hrabovec (okres Sobrance)",
    "",
    ""
  ],
  [
    "419520764853763",
    "Ruský Potok (okres Snina)",
    "",
    ""
  ],
  [
    "105529494853771",
    "Rusovce (okres Bratislava V)",
    "",
    ""
  ],
  [
    "426521663875414",
    "Ružín (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "326511838853780",
    "Ružiná (okres Lučenec)",
    "",
    ""
  ],
  [
    "217507512853798",
    "Ružindol (okres Trnava)",
    "",
    ""
  ],
  [
    "102529320805556",
    "Ružinov (okres Bratislava II)",
    "",
    ""
  ],
  [
    "318510998853801",
    "Ružomberok (okres Ružomberok)",
    "",
    ""
  ],
  [
    "221505455854140",
    "Rybany (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "32B518808856304",
    "Rybáre (okres Zvolen)",
    "",
    ""
  ],
  [
    "215556131852708",
    "Rybky (okres Senica)",
    "",
    ""
  ],
  [
    "232502707854158",
    "Rybník (okres Levice)",
    "",
    ""
  ],
  [
    "328515507854182",
    "Rybník nad Turcom (okres Revúca)",
    "",
    ""
  ],
  [
    "418525146854212",
    "Sabinov (okres Sabinov)",
    "",
    ""
  ],
  [
    "41D529125854301",
    "Sačurov (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "226557595854310",
    "Sádočné (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "234503525854352",
    "Salka (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "32B518808854361",
    "Sampor (okres Zvolen)",
    "",
    ""
  ],
  [
    "232502715854387",
    "Santovka (okres Levice)",
    "",
    ""
  ],
  [
    "211501875845248",
    "Sap (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "211501735831123",
    "Sása (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "328557820851809",
    "Sása (okres Revúca)",
    "",
    ""
  ],
  [
    "32B518727854417",
    "Sása (okres Zvolen)",
    "",
    ""
  ],
  [
    "213507521854425",
    "Sasinkovo (okres Hlohovec)",
    "",
    ""
  ],
  [
    "321508438801101",
    "Sásová (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "232502723854450",
    "Sazdice (okres Levice)",
    "",
    ""
  ],
  [
    "321508977854476",
    "Sebedín (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "227514373854492",
    "Sebedražie (okres Prievidza)",
    "",
    ""
  ],
  [
    "325518735854506",
    "Sebechleby (okres Krupina)",
    "",
    ""
  ],
  [
    "227514381854514",
    "Seč (okres Prievidza)",
    "",
    ""
  ],
  [
    "32A516333854522",
    "Sečianky (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "42B528722854531",
    "Sečovce (okres Trebišov)",
    "",
    ""
  ],
  [
    "41D529133854697",
    "Sečovská Polianka (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "313510041854701",
    "Sedliacka Dubová (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "417525154854719",
    "Sedlice (okres Prešov)",
    "",
    ""
  ],
  [
    "229545741854735",
    "Sedličná (okres Trenčín)",
    "",
    ""
  ],
  [
    "41D529141854743",
    "Sedliská (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "216504939950084",
    "Sedlište (okres Skalica)",
    "",
    ""
  ],
  [
    "222557412854751",
    "Sedmerovec (okres Ilava)",
    "",
    ""
  ],
  [
    "429523046854760",
    "Sejkov (okres Sobrance)",
    "",
    ""
  ],
  [
    "215556114854778",
    "Sekule (okres Senica)",
    "",
    ""
  ],
  [
    "32A516341854786",
    "Seľany (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "325518743854832",
    "Selce (okres Krupina)",
    "",
    ""
  ],
  [
    "32A515981854816",
    "Selce (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "327515515854808",
    "Selce (okres Poltár)",
    "",
    ""
  ],
  [
    "321508985854794",
    "Selce (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "229506478854841",
    "Selec (okres Trenčín)",
    "",
    ""
  ],
  [
    "235503991854875",
    "Selice (okres Šaľa)",
    "",
    ""
  ],
  [
    "234503533854913",
    "Semerovo (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "426521973854921",
    "Seňa (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "108508217854964",
    "Senec (okres Senec)",
    "",
    ""
  ],
  [
    "417525162854972",
    "Seniakovce (okres Prešov)",
    "",
    ""
  ],
  [
    "321508438801411",
    "Senica (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "215504203855006",
    "Senica (okres Senica)",
    "",
    ""
  ],
  [
    "427523054855171",
    "Senné (okres Michalovce)",
    "",
    ""
  ],
  [
    "32A516368855162",
    "Senné (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "325518751855201",
    "Senohrad (okres Krupina)",
    "",
    ""
  ],
  [
    "212504009855251",
    "Sereď (okres Galanta)",
    "",
    ""
  ],
  [
    "315510653950092",
    "Sestrč (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "311517861846147",
    "Setechov (okres Bytča)",
    "",
    ""
  ],
  [
    "422598151827312",
    "Severné Mesto (okres Košice I)",
    "",
    ""
  ],
  [
    "32B518760855391",
    "Sielnica (okres Zvolen)",
    "",
    ""
  ],
  [
    "317510050855405",
    "Sihelné (okres Námestovo)",
    "",
    ""
  ],
  [
    "323508993855413",
    "Sihla (okres Brezno)",
    "",
    ""
  ],
  [
    "234503541855464",
    "Sikenička (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "233500640808270",
    "Sila (okres Nitra)",
    "",
    ""
  ],
  [
    "213507539855472",
    "Siladice (okres Hlohovec)",
    "",
    ""
  ],
  [
    "428526223855499",
    "Silica (okres Rožňava)",
    "",
    ""
  ],
  [
    "428526231855502",
    "Silická Brezová (okres Rožňava)",
    "",
    ""
  ],
  [
    "428526240855511",
    "Silická Jablonica (okres Rožňava)",
    "",
    ""
  ],
  [
    "328526258855545",
    "Sirk (okres Revúca)",
    "",
    ""
  ],
  [
    "42B543730855570",
    "Sirník (okres Trebišov)",
    "",
    ""
  ],
  [
    "325518417855588",
    "Sitnianska Lehôtka (okres Krupina)",
    "",
    ""
  ],
  [
    "225505463855596",
    "Skačany (okres Partizánske)",
    "",
    ""
  ],
  [
    "229546682855600",
    "Skala (okres Trenčín)",
    "",
    ""
  ],
  [
    "216504815855618",
    "Skalica (okres Skalica)",
    "",
    ""
  ],
  [
    "312509451855774",
    "Skalité (okres Čadca)",
    "",
    ""
  ],
  [
    "229546682855782",
    "Skalská Nová Ves (okres Trenčín)",
    "",
    ""
  ],
  [
    "426521981855791",
    "Skároš (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "328515523855804",
    "Skerešovo (okres Revúca)",
    "",
    ""
  ],
  [
    "32A516376855839",
    "Sklabiná (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "316512583855812",
    "Sklabiňa (okres Martin)",
    "",
    ""
  ],
  [
    "316512591855847",
    "Sklabinský Podzámok (okres Martin)",
    "",
    ""
  ],
  [
    "425599824881317",
    "Skladná (okres Košice IV)",
    "",
    ""
  ],
  [
    "319512605855863",
    "Sklené (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "32D517241855871",
    "Sklené Teplice (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "41D529150855898",
    "Skrabské (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "237500721855901",
    "Skýcov (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "212504017855961",
    "Sládkovičovo (okres Galanta)",
    "",
    ""
  ],
  [
    "327511765848093",
    "Slaná Lehota (okres Poltár)",
    "",
    ""
  ],
  [
    "426518115855987",
    "Slančík (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "426522007856002",
    "Slanec (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "317509868839353",
    "Slanica (okres Námestovo)",
    "",
    ""
  ],
  [
    "426522015856011",
    "Slanská Huta (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "426522023856037",
    "Slanské Nové Mesto (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "32D517259856045",
    "Slaská (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "232502740856053",
    "Slatina (okres Levice)",
    "",
    ""
  ],
  [
    "221505471856070",
    "Slatina nad Bebravou (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "32B518972856088",
    "Slatinka (okres Zvolen)",
    "",
    ""
  ],
  [
    "221505480856096",
    "Slatinka nad Bebravou (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "324518794856142",
    "Slatinské Lazy (okres Detva)",
    "",
    ""
  ],
  [
    "42A543527856169",
    "Slatvina (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "428526266856177",
    "Slavec (okres Rožňava)",
    "",
    ""
  ],
  [
    "427523062856193",
    "Slavkovce (okres Michalovce)",
    "",
    ""
  ],
  [
    "222557421856215",
    "Slavnica (okres Ilava)",
    "",
    ""
  ],
  [
    "428526274856231",
    "Slavoška (okres Rožňava)",
    "",
    ""
  ],
  [
    "428526282856258",
    "Slavošovce (okres Rožňava)",
    "",
    ""
  ],
  [
    "237500755856282",
    "Slepčany (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "427523071856444",
    "Sliepkovce (okres Michalovce)",
    "",
    ""
  ],
  [
    "42B543748856452",
    "Slivník (okres Trebišov)",
    "",
    ""
  ],
  [
    "329515531856461",
    "Slizké (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "226557480856479",
    "Slopná (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "316512613856487",
    "Slovany (okres Martin)",
    "",
    ""
  ],
  [
    "41D529168856495",
    "Slovenská Kajňa (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "321509001856525",
    "Slovenská Ľupča (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "217556564856541",
    "Slovenská Nová Ves (okres Trnava)",
    "",
    ""
  ],
  [
    "413523810856550",
    "Slovenská Ves (okres Kežmarok)",
    "",
    ""
  ],
  [
    "412520772856576",
    "Slovenská Volová (okres Humenné)",
    "",
    ""
  ],
  [
    "32A516384856592",
    "Slovenské Ďarmoty (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "32A516392856606",
    "Slovenské Kľačany (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "412520781856614",
    "Slovenské Krivé (okres Humenné)",
    "",
    ""
  ],
  [
    "42B543756856631",
    "Slovenské Nové Mesto (okres Trebišov)",
    "",
    ""
  ],
  [
    "319512621856649",
    "Slovenské Pravno (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "107508225856657",
    "Slovenský Grob (okres Pezinok)",
    "",
    ""
  ],
  [
    "411519782856703",
    "Smilno (okres Bardejov)",
    "",
    ""
  ],
  [
    "42A560154856754",
    "Smižany (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "217507555856771",
    "Smolenice (okres Trnava)",
    "",
    ""
  ],
  [
    "217507555856789",
    "Smolenická Nová Ves (okres Trnava)",
    "",
    ""
  ],
  [
    "215504823856801",
    "Smolinské (okres Senica)",
    "",
    ""
  ],
  [
    "421543551856819",
    "Smolnícka Huta (okres Gelnica)",
    "",
    ""
  ],
  [
    "421543560856851",
    "Smolník (okres Gelnica)",
    "",
    ""
  ],
  [
    "419520829856835",
    "Smolník nad Cirochou (okres Snina)",
    "",
    ""
  ],
  [
    "215504831856878",
    "Smrdáky (okres Senica)",
    "",
    ""
  ],
  [
    "315511013856886",
    "Smrečany (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "411519791856894",
    "Snakov (okres Bardejov)",
    "",
    ""
  ],
  [
    "314509469856908",
    "Snežnica (okres Kysucké Nové Mesto)",
    "",
    ""
  ],
  [
    "419520802856941",
    "Snina (okres Snina)",
    "",
    ""
  ],
  [
    "229506508857106",
    "Soblahov (okres Trenčín)",
    "",
    ""
  ],
  [
    "41C527807857114",
    "Soboš (okres Svidník)",
    "",
    ""
  ],
  [
    "215504840857165",
    "Sobotište (okres Senica)",
    "",
    ""
  ],
  [
    "429523089857190",
    "Sobrance (okres Sobrance)",
    "",
    ""
  ],
  [
    "316512630857203",
    "Socovce (okres Martin)",
    "",
    ""
  ],
  [
    "426522031857220",
    "Sokoľ (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "426559865820555",
    "Sokoľany (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "231501344857246",
    "Sokolce-Lak (okres Komárno)",
    "",
    ""
  ],
  [
    "231501344857238",
    "Sokolce-Turi (okres Komárno)",
    "",
    ""
  ],
  [
    "315511153857254",
    "Sokolče (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "233500674847283",
    "Sokolníky (okres Nitra)",
    "",
    ""
  ],
  [
    "214507563857262",
    "Sokolovce (okres Piešťany)",
    "",
    ""
  ],
  [
    "41D529176857271",
    "Soľ (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "236505498857289",
    "Solčany (okres Topoľčany)",
    "",
    ""
  ],
  [
    "236556327857297",
    "Solčianky (okres Topoľčany)",
    "",
    ""
  ],
  [
    "417524140857301",
    "Solivar (okres Prešov)",
    "",
    ""
  ],
  [
    "227514225840688",
    "Solka (okres Prievidza)",
    "",
    ""
  ],
  [
    "42B543764857319",
    "Soľnička (okres Trebišov)",
    "",
    ""
  ],
  [
    "41B527815857327",
    "Soľník (okres Stropkov)",
    "",
    ""
  ],
  [
    "106504858857335",
    "Sološnica (okres Malacky)",
    "",
    ""
  ],
  [
    "42B543772857351",
    "Somotor (okres Trebišov)",
    "",
    ""
  ],
  [
    "412559636843202",
    "Sopkovce (okres Humenné)",
    "",
    ""
  ],
  [
    "413523828857378",
    "Spišská Belá (okres Kežmarok)",
    "",
    ""
  ],
  [
    "42A526355857386",
    "Spišská Nová Ves (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "416523381848221",
    "Spišská Sobota (okres Poprad)",
    "",
    ""
  ],
  [
    "413523836857581",
    "Spišská Stará Ves (okres Kežmarok)",
    "",
    ""
  ],
  [
    "416523844857599",
    "Spišská Teplica (okres Poprad)",
    "",
    ""
  ],
  [
    "416523852857611",
    "Spišské Bystré (okres Poprad)",
    "",
    ""
  ],
  [
    "413523861857629",
    "Spišské Hanušovce (okres Kežmarok)",
    "",
    ""
  ],
  [
    "414543578857645",
    "Spišské Podhradie (okres Levoča)",
    "",
    ""
  ],
  [
    "42A543586857670",
    "Spišské Tomášovce (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "42A543594857696",
    "Spišské Vlachy (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "414543608857726",
    "Spišský Hrhov (okres Levoča)",
    "",
    ""
  ],
  [
    "42A543616857734",
    "Spišský Hrušov (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "416523879857751",
    "Spišský Štiavnik (okres Poprad)",
    "",
    ""
  ],
  [
    "414543624857777",
    "Spišský Štvrtok (okres Levoča)",
    "",
    ""
  ],
  [
    "313509540857785",
    "Srňacie (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "419520829857807",
    "Stakčín (okres Snina)",
    "",
    ""
  ],
  [
    "419520811857793",
    "Stakčínska Roztoka (okres Snina)",
    "",
    ""
  ],
  [
    "42B513849873179",
    "Stanča (okres Trebišov)",
    "",
    ""
  ],
  [
    "318511030857823",
    "Stankovany (okres Ružomberok)",
    "",
    ""
  ],
  [
    "42B543781857840",
    "Stankovce (okres Trebišov)",
    "",
    ""
  ],
  [
    "329515540857858",
    "Stará Bašta (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "312509477857921",
    "Stará Bystrica (okres Čadca)",
    "",
    ""
  ],
  [
    "211501581816698",
    "Stará Gala (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "106508233859354",
    "Stará Graba (okres Malacky)",
    "",
    ""
  ],
  [
    "326511846857939",
    "Stará Halič (okres Lučenec)",
    "",
    ""
  ],
  [
    "324518816857971",
    "Stará Huta (okres Detva)",
    "",
    ""
  ],
  [
    "32D517267858048",
    "Stará Kremnička (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "224506516858064",
    "Stará Lehota (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "413523887858081",
    "Stará Lesná (okres Kežmarok)",
    "",
    ""
  ],
  [
    "41A526665858099",
    "Stará Ľubovňa (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "223504866858196",
    "Stará Myjava (okres Myjava)",
    "",
    ""
  ],
  [
    "224506524858251",
    "Stará Turá (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "421543632858366",
    "Stará Voda (okres Gelnica)",
    "",
    ""
  ],
  [
    "427523097858374",
    "Staré (okres Michalovce)",
    "",
    ""
  ],
  [
    "321509019858447",
    "Staré Hory (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "101528595804096",
    "Staré Mesto (okres Bratislava I)",
    "",
    ""
  ],
  [
    "41A527009858480",
    "Starina (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "419520829858471",
    "Starina nad Cirochou (okres Snina)",
    "",
    ""
  ],
  [
    "328515612858498",
    "Starňa (okres Revúca)",
    "",
    ""
  ],
  [
    "232502758858501",
    "Starý Hrádok (okres Levice)",
    "",
    ""
  ],
  [
    "416560103858544",
    "Starý Smokovec (okres Poprad)",
    "",
    ""
  ],
  [
    "232502766858579",
    "Starý Tekov (okres Levice)",
    "",
    ""
  ],
  [
    "312509485858633",
    "Staškov (okres Čadca)",
    "",
    ""
  ],
  [
    "41B527823858676",
    "Staškovce (okres Stropkov)",
    "",
    ""
  ],
  [
    "411519804858684",
    "Stebnícka Huta (okres Bardejov)",
    "",
    ""
  ],
  [
    "411519812858692",
    "Stebník (okres Bardejov)",
    "",
    ""
  ],
  [
    "413523534821144",
    "Stotince (okres Kežmarok)",
    "",
    ""
  ],
  [
    "324518824858757",
    "Stožok (okres Detva)",
    "",
    ""
  ],
  [
    "41A527017858765",
    "Stráňany (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "427522279837075",
    "Stráňany (okres Michalovce)",
    "",
    ""
  ],
  [
    "31B517950858781",
    "Stráňavy (okres Žilina)",
    "",
    ""
  ],
  [
    "413523909858803",
    "Stráne pod Tatrami (okres Kežmarok)",
    "",
    ""
  ],
  [
    "329515566858811",
    "Stránska (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "31B517968858838",
    "Stránske (okres Žilina)",
    "",
    ""
  ],
  [
    "428526291858854",
    "Stratená (okres Rožňava)",
    "",
    ""
  ],
  [
    "31B517976858862",
    "Stráža (okres Žilina)",
    "",
    ""
  ],
  [
    "214507229828068",
    "Stráže (okres Piešťany)",
    "",
    ""
  ],
  [
    "215504891860671",
    "Stráže nad Myjavou (okres Senica)",
    "",
    ""
  ],
  [
    "416523381848298",
    "Stráže pod Tatrami (okres Poprad)",
    "",
    ""
  ],
  [
    "413523828858871",
    "Strážky (okres Kežmarok)",
    "",
    ""
  ],
  [
    "42B543799858889",
    "Strážne (okres Trebišov)",
    "",
    ""
  ],
  [
    "31B517402858897",
    "Strážov (okres Žilina)",
    "",
    ""
  ],
  [
    "427523101858935",
    "Strážske (okres Michalovce)",
    "",
    ""
  ],
  [
    "31B517984858943",
    "Strečno (okres Žilina)",
    "",
    ""
  ],
  [
    "42B543802858978",
    "Streda nad Bodrogom (okres Trebišov)",
    "",
    ""
  ],
  [
    "41C519197950033",
    "Stredná hora (okres Svidník)",
    "",
    ""
  ],
  [
    "422598186826928",
    "Stredné Mesto (okres Košice I)",
    "",
    ""
  ],
  [
    "32A516406859001",
    "Stredné Plachtince (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "232502928868710",
    "Stredné Turovce (okres Levice)",
    "",
    ""
  ],
  [
    "212504009855316",
    "Stredný Čepeň (okres Galanta)",
    "",
    ""
  ],
  [
    "234503550859028",
    "Strekov (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "328515574859044",
    "Strelnice (okres Revúca)",
    "",
    ""
  ],
  [
    "321509027859052",
    "Strelníky (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "427523119859061",
    "Stretava (okres Michalovce)",
    "",
    ""
  ],
  [
    "427523127859079",
    "Stretavka (okres Michalovce)",
    "",
    ""
  ],
  [
    "228557471859095",
    "Streženice (okres Púchov)",
    "",
    ""
  ],
  [
    "329514926820016",
    "Striežovce (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "419520845859117",
    "Strihovce (okres Snina)",
    "",
    ""
  ],
  [
    "41C527831859125",
    "Stročín (okres Svidník)",
    "",
    ""
  ],
  [
    "41B527840859133",
    "Stropkov (okres Stropkov)",
    "",
    ""
  ],
  [
    "329515582859281",
    "Studená (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "108508110838519",
    "Studené (okres Senec)",
    "",
    ""
  ],
  [
    "414543641859290",
    "Studenec (okres Levoča)",
    "",
    ""
  ],
  [
    "106504874859303",
    "Studienka (okres Malacky)",
    "",
    ""
  ],
  [
    "411519821859311",
    "Stuľany (okres Bardejov)",
    "",
    ""
  ],
  [
    "106508233859338",
    "Stupava (okres Malacky)",
    "",
    ""
  ],
  [
    "226513687859362",
    "Stupné (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "316512648859371",
    "Sučany (okres Martin)",
    "",
    ""
  ],
  [
    "325518832859389",
    "Sudince (okres Krupina)",
    "",
    ""
  ],
  [
    "325518841859397",
    "Súdovce (okres Krupina)",
    "",
    ""
  ],
  [
    "41B528005869791",
    "Suchá (okres Stropkov)",
    "",
    ""
  ],
  [
    "417559989854727",
    "Suchá Dolina (okres Prešov)",
    "",
    ""
  ],
  [
    "31A510076859401",
    "Suchá Hora (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "32A516414859478",
    "Sucháň (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "217507571859435",
    "Suchá nad Parnou (okres Trnava)",
    "",
    ""
  ],
  [
    "427523135859494",
    "Suché (okres Michalovce)",
    "",
    ""
  ],
  [
    "32A516422859508",
    "Suché Brezovo (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "106508241859524",
    "Suchohrad (okres Malacky)",
    "",
    ""
  ],
  [
    "415520853859532",
    "Sukov (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "233500313819832",
    "Suľany (okres Nitra)",
    "",
    ""
  ],
  [
    "236505510859591",
    "Súlovce (okres Topoľčany)",
    "",
    ""
  ],
  [
    "311517992859583",
    "Súľov-Hradná (okres Bytča)",
    "",
    ""
  ],
  [
    "327515591859613",
    "Sušany (okres Poltár)",
    "",
    ""
  ],
  [
    "329515604859621",
    "Sútor (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "42B528153803332",
    "Svätá Mária (okres Trebišov)",
    "",
    ""
  ],
  [
    "233555991859630",
    "Svätoplukovo (okres Nitra)",
    "",
    ""
  ],
  [
    "429523143859648",
    "Svätuš (okres Sobrance)",
    "",
    ""
  ],
  [
    "234503479847259",
    "Svätuša (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "42B528650846902",
    "Svätuše (okres Trebišov)",
    "",
    ""
  ],
  [
    "322516597800210",
    "Svätý Anton (okres Banská Štiavnica)",
    "",
    ""
  ],
  [
    "107507989822884",
    "Svätý Jur (okres Pezinok)",
    "",
    ""
  ],
  [
    "315511048859656",
    "Svätý Kríž (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "231501115812536",
    "Svätý Peter (okres Komárno)",
    "",
    ""
  ],
  [
    "315510262882011",
    "Svätý Štefan (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "31B518000859681",
    "Svederník (okres Žilina)",
    "",
    ""
  ],
  [
    "226518913859702",
    "Sverepec (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "411519839859711",
    "Sveržov (okres Bardejov)",
    "",
    ""
  ],
  [
    "415520861859729",
    "Svetlice (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "41C527858859737",
    "Svidnička (okres Svidník)",
    "",
    ""
  ],
  [
    "41C527106859745",
    "Svidník (okres Svidník)",
    "",
    ""
  ],
  [
    "417525171859851",
    "Svinia (okres Prešov)",
    "",
    ""
  ],
  [
    "426522040859877",
    "Svinica (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "42B543811859885",
    "Svinice (okres Trebišov)",
    "",
    ""
  ],
  [
    "229506532859907",
    "Svinná (okres Trenčín)",
    "",
    ""
  ],
  [
    "416523925859923",
    "Svit (okres Poprad)",
    "",
    ""
  ],
  [
    "232502987859966",
    "Svodov (okres Levice)",
    "",
    ""
  ],
  [
    "236556238859974",
    "Svrbice (okres Topoľčany)",
    "",
    ""
  ],
  [
    "312509493860018",
    "Svrčinovec (okres Čadca)",
    "",
    ""
  ],
  [
    "423599841827509",
    "Šaca (okres Košice II)",
    "",
    ""
  ],
  [
    "42A543667862738",
    "Šafárka (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "232502782860158",
    "Šahy (okres Levice)",
    "",
    ""
  ],
  [
    "215504882860174",
    "Šajdíkove Humence (okres Senica)",
    "",
    ""
  ],
  [
    "235504025860182",
    "Šaľa (okres Šaľa)",
    "",
    ""
  ],
  [
    "212504033860301",
    "Šalgočka (okres Galanta)",
    "",
    ""
  ],
  [
    "236505536860310",
    "Šalgovce (okres Topoľčany)",
    "",
    ""
  ],
  [
    "417524140860328",
    "Šalgovík (okres Prešov)",
    "",
    ""
  ],
  [
    "321508438801402",
    "Šalková (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "232502791860344",
    "Šalov (okres Levice)",
    "",
    ""
  ],
  [
    "41A527033860361",
    "Šambron (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "211501905860387",
    "Šamorín (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "427523151860417",
    "Šamudovce (okres Michalovce)",
    "",
    ""
  ],
  [
    "41B527866860433",
    "Šandal (okres Stropkov)",
    "",
    ""
  ],
  [
    "41C527696843423",
    "Šapinec (okres Svidník)",
    "",
    ""
  ],
  [
    "41C527874860441",
    "Šarbov (okres Svidník)",
    "",
    ""
  ],
  [
    "417525189860476",
    "Šarišská Poruba (okres Prešov)",
    "",
    ""
  ],
  [
    "417525197860484",
    "Šarišská Trstená (okres Prešov)",
    "",
    ""
  ],
  [
    "417525201860492",
    "Šarišské Bohdanovce (okres Prešov)",
    "",
    ""
  ],
  [
    "411519847860506",
    "Šarišské Čierne (okres Bardejov)",
    "",
    ""
  ],
  [
    "418525219860514",
    "Šarišské Dravce (okres Sabinov)",
    "",
    ""
  ],
  [
    "41A527041860522",
    "Šarišské Jastrabie (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "417524654860549",
    "Šarišské Lužianky (okres Prešov)",
    "",
    ""
  ],
  [
    "418525235860557",
    "Šarišské Michaľany (okres Sabinov)",
    "",
    ""
  ],
  [
    "418525243860565",
    "Šarišské Sokolovce (okres Sabinov)",
    "",
    ""
  ],
  [
    "41C527882860573",
    "Šarišský Štiavnik (okres Svidník)",
    "",
    ""
  ],
  [
    "234503576860581",
    "Šarkan (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "411519855860638",
    "Šašová (okres Bardejov)",
    "",
    ""
  ],
  [
    "32D516589860654",
    "Šášovské Podhradie (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "215504891860689",
    "Šaštín (okres Senica)",
    "",
    ""
  ],
  [
    "326511854860697",
    "Šávoľ (okres Lučenec)",
    "",
    ""
  ],
  [
    "425599786860701",
    "Šebastovce (okres Košice IV)",
    "",
    ""
  ],
  [
    "226512842860719",
    "Šebešťanová (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "217556670860735",
    "Šelpice (okres Trnava)",
    "",
    ""
  ],
  [
    "41C527891860743",
    "Šemetkovce (okres Svidník)",
    "",
    ""
  ],
  [
    "426522066860751",
    "Šemša (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "326511862860786",
    "Šiatorská Bukovinka (okres Lučenec)",
    "",
    ""
  ],
  [
    "411519863860816",
    "Šiba (okres Bardejov)",
    "",
    ""
  ],
  [
    "326511871860824",
    "Šíd (okres Lučenec)",
    "",
    ""
  ],
  [
    "329515621860832",
    "Šimonovce (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "417525251860841",
    "Šindliar (okres Prešov)",
    "",
    ""
  ],
  [
    "212504041860859",
    "Šintava (okres Galanta)",
    "",
    ""
  ],
  [
    "221505544860883",
    "Šípkov (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "214558397860905",
    "Šípkové (okres Piešťany)",
    "",
    ""
  ],
  [
    "32A516431860913",
    "Širákov (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "329515639860921",
    "Širkovce (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "417525260860948",
    "Široké (okres Prešov)",
    "",
    ""
  ],
  [
    "221505552860972",
    "Šišov (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "328526304860981",
    "Šivetice (okres Revúca)",
    "",
    ""
  ],
  [
    "419520870860999",
    "Šmigovec (okres Snina)",
    "",
    ""
  ],
  [
    "235503991854883",
    "Šók (okres Šaľa)",
    "",
    ""
  ],
  [
    "327511889861006",
    "Šoltýska (okres Poltár)",
    "",
    ""
  ],
  [
    "212504050861014",
    "Šoporňa (okres Galanta)",
    "",
    ""
  ],
  [
    "212503924838551",
    "Šoriakoš (okres Galanta)",
    "",
    ""
  ],
  [
    "217507601861049",
    "Špačince (okres Trnava)",
    "",
    ""
  ],
  [
    "321509035861057",
    "Špania Dolina (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "329515647861065",
    "Španie Pole (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "106500267991961",
    "Šranek (okres Malacky)",
    "",
    ""
  ],
  [
    "231501352861073",
    "Šrobárová (okres Komárno)",
    "",
    ""
  ],
  [
    "215504904861081",
    "Štefanov (okres Senica)",
    "",
    ""
  ],
  [
    "107508268861111",
    "Štefanová (okres Pezinok)",
    "",
    ""
  ],
  [
    "41D529184861138",
    "Štefanovce (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "417525278861120",
    "Štefanovce (okres Prešov)",
    "",
    ""
  ],
  [
    "233581691861162",
    "Štefanovičová (okres Nitra)",
    "",
    ""
  ],
  [
    "41C527904861171",
    "Štefurov (okres Svidník)",
    "",
    ""
  ],
  [
    "214556548861189",
    "Šterusy (okres Piešťany)",
    "",
    ""
  ],
  [
    "322517283861197",
    "Štiavnické Bane (okres Banská Štiavnica)",
    "",
    ""
  ],
  [
    "318511056861201",
    "Štiavnička (okres Ružomberok)",
    "",
    ""
  ],
  [
    "311518018861324",
    "Štiavnik (okres Bytča)",
    "",
    ""
  ],
  [
    "428526312861341",
    "Štítnik (okres Rožňava)",
    "",
    ""
  ],
  [
    "426522074861359",
    "Štós (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "416559890836711",
    "Štôla (okres Poprad)",
    "",
    ""
  ],
  [
    "416523933861375",
    "Štrba (okres Poprad)",
    "",
    ""
  ],
  [
    "416560103861405",
    "Štrbské Pleso (okres Poprad)",
    "",
    ""
  ],
  [
    "329515655861421",
    "Štrkovec (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "234503584861553",
    "Štúrovo (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "229506541861782",
    "Štvrtok (okres Trenčín)",
    "",
    ""
  ],
  [
    "211501913861791",
    "Štvrtok na Ostrove (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "31B581712861804",
    "Šuja (okres Žilina)",
    "",
    ""
  ],
  [
    "32A516449861812",
    "Šuľa (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "211501603818364",
    "Šuľany (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "213507032861847",
    "Šulekovo (okres Hlohovec)",
    "",
    ""
  ],
  [
    "323509043861871",
    "Šumiac (okres Brezno)",
    "",
    ""
  ],
  [
    "234503592861898",
    "Šurany (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "233500780862231",
    "Šurianky (okres Nitra)",
    "",
    ""
  ],
  [
    "326511897862258",
    "Šurice (okres Lučenec)",
    "",
    ""
  ],
  [
    "316512656862347",
    "Šútovo (okres Martin)",
    "",
    ""
  ],
  [
    "416523950862371",
    "Švábovce (okres Poprad)",
    "",
    ""
  ],
  [
    "421543659862401",
    "Švedlár (okres Gelnica)",
    "",
    ""
  ],
  [
    "318511064862444",
    "Švošov (okres Ružomberok)",
    "",
    ""
  ],
  [
    "422598127827452",
    "Ťahanovce (okres Košice I)",
    "",
    ""
  ],
  [
    "329515663862452",
    "Tachty (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "233500798862461",
    "Tajná (okres Nitra)",
    "",
    ""
  ],
  [
    "321509060862487",
    "Tajov (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "317510092862509",
    "Ťapešovo (okres Námestovo)",
    "",
    ""
  ],
  [
    "214507725869236",
    "Ťapkové (okres Piešťany)",
    "",
    ""
  ],
  [
    "411519871862517",
    "Tarnov (okres Bardejov)",
    "",
    ""
  ],
  [
    "429523160862525",
    "Tašuľa (okres Sobrance)",
    "",
    ""
  ],
  [
    "416580368874108",
    "Tatranská Javorina (okres Poprad)",
    "",
    ""
  ],
  [
    "416560103862568",
    "Tatranská Lomnica (okres Poprad)",
    "",
    ""
  ],
  [
    "232502812862584",
    "Tehla (okres Levice)",
    "",
    ""
  ],
  [
    "213556611862592",
    "Tekolďany (okres Hlohovec)",
    "",
    ""
  ],
  [
    "32C517291862606",
    "Tekovská Breznica (okres Žarnovica)",
    "",
    ""
  ],
  [
    "232502588841722",
    "Tekovská Nová Ves (okres Levice)",
    "",
    ""
  ],
  [
    "232502821862622",
    "Tekovské Lužany (okres Levice)",
    "",
    ""
  ],
  [
    "232502821862631",
    "Tekovské Lužianky (okres Levice)",
    "",
    ""
  ],
  [
    "237517305862665",
    "Tekovské Nemce (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "323509051862436",
    "Telgárt (okres Brezno)",
    "",
    ""
  ],
  [
    "233555967862703",
    "Telince (okres Nitra)",
    "",
    ""
  ],
  [
    "227514403862711",
    "Temeš (okres Prievidza)",
    "",
    ""
  ],
  [
    "322517143847330",
    "Teplá (okres Banská Štiavnica)",
    "",
    ""
  ],
  [
    "426521345813095",
    "Tepličany (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "42A543667862720",
    "Teplička (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "31B518034862754",
    "Teplička nad Váhom (okres Žilina)",
    "",
    ""
  ],
  [
    "213556645862762",
    "Tepličky (okres Hlohovec)",
    "",
    ""
  ],
  [
    "329515671862771",
    "Teplý Vrch (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "423598224827207",
    "Terasa (okres Košice II)",
    "",
    ""
  ],
  [
    "31B518042863041",
    "Terchová (okres Žilina)",
    "",
    ""
  ],
  [
    "417525286863084",
    "Teriakovce (okres Prešov)",
    "",
    ""
  ],
  [
    "417525294863092",
    "Terňa (okres Prešov)",
    "",
    ""
  ],
  [
    "236505561863114",
    "Tesáre (okres Topoľčany)",
    "",
    ""
  ],
  [
    "237500810863149",
    "Tesáre nad Žitavou (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "235504068863157",
    "Tešedíkovo (okres Šaľa)",
    "",
    ""
  ],
  [
    "232502782863165",
    "Tešmák (okres Levice)",
    "",
    ""
  ],
  [
    "428525553803472",
    "Tiba (okres Rožňava)",
    "",
    ""
  ],
  [
    "429523178863173",
    "Tibava (okres Sobrance)",
    "",
    ""
  ],
  [
    "31A510173950106",
    "Tichá dolina (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "418525308863190",
    "Tichý Potok (okres Sabinov)",
    "",
    ""
  ],
  [
    "221505579863203",
    "Timoradza (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "41B527912863211",
    "Tisinec (okres Stropkov)",
    "",
    ""
  ],
  [
    "329515680863220",
    "Tisovec (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "232502863863416",
    "Tlmače (okres Levice)",
    "",
    ""
  ],
  [
    "211501719830020",
    "Töböréte (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "326511901863424",
    "Točnica (okres Lučenec)",
    "",
    ""
  ],
  [
    "41B527921863432",
    "Tokajík (okres Stropkov)",
    "",
    ""
  ],
  [
    "212504076863459",
    "Tomášikovo (okres Galanta)",
    "",
    ""
  ],
  [
    "108508276863491",
    "Tomášov (okres Senec)",
    "",
    ""
  ],
  [
    "329514462852473",
    "Tomášová (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "329515698863513",
    "Tomášovce (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "326511919863505",
    "Tomášovce (okres Lučenec)",
    "",
    ""
  ],
  [
    "316512036836273",
    "Tomčany (okres Martin)",
    "",
    ""
  ],
  [
    "211501808842974",
    "Tonkovce (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "419520888863530",
    "Topoľa (okres Snina)",
    "",
    ""
  ],
  [
    "427522279837431",
    "Topoľany (okres Michalovce)",
    "",
    ""
  ],
  [
    "236504998863548",
    "Topoľčany (okres Topoľčany)",
    "",
    ""
  ],
  [
    "237500828863882",
    "Topoľčianky (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "212504084863912",
    "Topoľnica (okres Galanta)",
    "",
    ""
  ],
  [
    "412520896863971",
    "Topoľovka (okres Humenné)",
    "",
    ""
  ],
  [
    "413523976863998",
    "Toporec (okres Kežmarok)",
    "",
    ""
  ],
  [
    "328515612860123",
    "Tornaľa (okres Revúca)",
    "",
    ""
  ],
  [
    "418525316864005",
    "Torysa (okres Sabinov)",
    "",
    ""
  ],
  [
    "414543675864021",
    "Torysky (okres Levoča)",
    "",
    ""
  ],
  [
    "41D529192864030",
    "Tovarné (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "41D529206864048",
    "Tovarnianska Polianka (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "236580457864056",
    "Tovarníky (okres Topoľčany)",
    "",
    ""
  ],
  [
    "231501361863521",
    "Tôň (okres Komárno)",
    "",
    ""
  ],
  [
    "211501611819581",
    "Tône (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "213507661864064",
    "Trakovice (okres Hlohovec)",
    "",
    ""
  ],
  [
    "234503606864081",
    "Trávnica (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "231501379864099",
    "Trávnik (okres Komárno)",
    "",
    ""
  ],
  [
    "214507679864102",
    "Trebatice (okres Piešťany)",
    "",
    ""
  ],
  [
    "426522082864137",
    "Trebejov (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "326511927864161",
    "Trebeľovce (okres Lučenec)",
    "",
    ""
  ],
  [
    "221505595864170",
    "Trebichava (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "42B528099864188",
    "Trebišov (okres Trebišov)",
    "",
    ""
  ],
  [
    "316512664864315",
    "Trebostovo (okres Martin)",
    "",
    ""
  ],
  [
    "32A516457864323",
    "Trebušovce (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "326557340864358",
    "Trenč (okres Lučenec)",
    "",
    ""
  ],
  [
    "229506559864374",
    "Trenčianska Teplá (okres Trenčín)",
    "",
    ""
  ],
  [
    "229506567864391",
    "Trenčianska Turná (okres Trenčín)",
    "",
    ""
  ],
  [
    "229506281872431",
    "Trenčianska Závada (okres Trenčín)",
    "",
    ""
  ],
  [
    "229505820864668",
    "Trenčianske Biskupice (okres Trenčín)",
    "",
    ""
  ],
  [
    "224506583864404",
    "Trenčianske Bohuslavice (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "229506591864412",
    "Trenčianske Jastrabie (okres Trenčín)",
    "",
    ""
  ],
  [
    "229506605864421",
    "Trenčianske Mitice (okres Trenčín)",
    "",
    ""
  ],
  [
    "229506613864455",
    "Trenčianske Teplice (okres Trenčín)",
    "",
    ""
  ],
  [
    "229505820864528",
    "Trenčín (okres Trenčín)",
    "",
    ""
  ],
  [
    "211555576864731",
    "Trhová Hradská (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "427523186864757",
    "Trhovište (okres Michalovce)",
    "",
    ""
  ],
  [
    "232502731855448",
    "Trhyňa (okres Levice)",
    "",
    ""
  ],
  [
    "217506745864790",
    "Trnava (okres Trnava)",
    "",
    ""
  ],
  [
    "32D517313865265",
    "Trnavá Hora (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "427523194865273",
    "Trnava pri Laborci (okres Michalovce)",
    "",
    ""
  ],
  [
    "42B543829865303",
    "Trnávka (okres Trebišov)",
    "",
    ""
  ],
  [
    "102529320805343",
    "Trnávka (okres Bratislava II)",
    "",
    ""
  ],
  [
    "211501956865290",
    "Trnávka (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "32B518875865346",
    "Tŕnie (okres Zvolen)",
    "",
    ""
  ],
  [
    "417525324865354",
    "Trnkov (okres Prešov)",
    "",
    ""
  ],
  [
    "31B517402865371",
    "Trnové (okres Žilina)",
    "",
    ""
  ],
  [
    "216504912865389",
    "Trnovec (okres Skalica)",
    "",
    ""
  ],
  [
    "235504092865427",
    "Trnovec nad Váhom (okres Šaľa)",
    "",
    ""
  ],
  [
    "316512672865435",
    "Trnovo (okres Martin)",
    "",
    ""
  ],
  [
    "411519880865443",
    "Tročany (okres Bardejov)",
    "",
    ""
  ],
  [
    "325518883865451",
    "Trpín (okres Krupina)",
    "",
    ""
  ],
  [
    "426522091865460",
    "Trsťany (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "31A510106865478",
    "Trstená (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "211501964865486",
    "Trstená na Ostrove (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "315511072865494",
    "Trstené (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "426522104865508",
    "Trstené pri Hornáde (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "212504106865524",
    "Trstice (okres Galanta)",
    "",
    ""
  ],
  [
    "226546640865532",
    "Tŕstie (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "217507687865559",
    "Trstín (okres Trnava)",
    "",
    ""
  ],
  [
    "32D517038865567",
    "Trubín (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "326511943865575",
    "Tuhár (okres Lučenec)",
    "",
    ""
  ],
  [
    "417525332865583",
    "Tuhrina (okres Prešov)",
    "",
    ""
  ],
  [
    "222513725865605",
    "Tuchyňa (okres Ilava)",
    "",
    ""
  ],
  [
    "417525341865613",
    "Tulčík (okres Prešov)",
    "",
    ""
  ],
  [
    "232502871865648",
    "Tupá (okres Levice)",
    "",
    ""
  ],
  [
    "232502880865656",
    "Turá (okres Levice)",
    "",
    ""
  ],
  [
    "223504581865702",
    "Turá Lúka (okres Myjava)",
    "",
    ""
  ],
  [
    "316512681865788",
    "Turany (okres Martin)",
    "",
    ""
  ],
  [
    "41B527939865796",
    "Turany nad Ondavou (okres Stropkov)",
    "",
    ""
  ],
  [
    "412520900865818",
    "Turcovce (okres Humenné)",
    "",
    ""
  ],
  [
    "225556271865842",
    "Turčianky (okres Partizánske)",
    "",
    ""
  ],
  [
    "316512702865851",
    "Turčianska Štiavnička (okres Martin)",
    "",
    ""
  ],
  [
    "316545961817988",
    "Turčianske Jaseno (okres Martin)",
    "",
    ""
  ],
  [
    "316512711865869",
    "Turčianske Kľačany (okres Martin)",
    "",
    ""
  ],
  [
    "319512729865877",
    "Turčianske Teplice (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "316512737865907",
    "Turčiansky Ďur (okres Martin)",
    "",
    ""
  ],
  [
    "319512729865923",
    "Turčiansky Michal (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "316512753865931",
    "Turčiansky Peter (okres Martin)",
    "",
    ""
  ],
  [
    "328526321865940",
    "Turčok (okres Revúca)",
    "",
    ""
  ],
  [
    "321557269858455",
    "Turecká (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "106500267992003",
    "Turecký vrch (okres Malacky)",
    "",
    ""
  ],
  [
    "108508284865958",
    "Tureň (okres Senec)",
    "",
    ""
  ],
  [
    "327511315865974",
    "Turíčky (okres Poltár)",
    "",
    ""
  ],
  [
    "31B518051865982",
    "Turie (okres Žilina)",
    "",
    ""
  ],
  [
    "32B518581991929",
    "Turie Pole (okres Zvolen)",
    "",
    ""
  ],
  [
    "318507407865991",
    "Turík (okres Ružomberok)",
    "",
    ""
  ],
  [
    "312509507866075",
    "Turkov (okres Čadca)",
    "",
    ""
  ],
  [
    "426559784866016",
    "Turňa nad Bodvou (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "426521779841471",
    "Turnianska Nová Ves (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "32B518891866024",
    "Turová (okres Zvolen)",
    "",
    ""
  ],
  [
    "312509507866083",
    "Turzovka (okres Čadca)",
    "",
    ""
  ],
  [
    "427523208866121",
    "Tušice (okres Michalovce)",
    "",
    ""
  ],
  [
    "427523216866130",
    "Tušická Nová Ves (okres Michalovce)",
    "",
    ""
  ],
  [
    "227514411866148",
    "Tužina (okres Prievidza)",
    "",
    ""
  ],
  [
    "413523984866156",
    "Tvarožná (okres Kežmarok)",
    "",
    ""
  ],
  [
    "236505617866164",
    "Tvrdomestice (okres Topoľčany)",
    "",
    ""
  ],
  [
    "31A510114866181",
    "Tvrdošín (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "234503614866211",
    "Tvrdošovce (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "419520918866237",
    "Ubľa (okres Snina)",
    "",
    ""
  ],
  [
    "429523224866245",
    "Úbrež (okres Sobrance)",
    "",
    ""
  ],
  [
    "412520926866253",
    "Udavské (okres Humenné)",
    "",
    ""
  ],
  [
    "326511552866261",
    "Uderiná (okres Lučenec)",
    "",
    ""
  ],
  [
    "226513741866270",
    "Udiča (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "41A527050866318",
    "Údol (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "232502898866334",
    "Uhliská (okres Levice)",
    "",
    ""
  ],
  [
    "421543683866342",
    "Úhorná (okres Gelnica)",
    "",
    ""
  ],
  [
    "315511099866351",
    "Uhorská Ves (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "327511978866377",
    "Uhorské (okres Poltár)",
    "",
    ""
  ],
  [
    "221505625866393",
    "Uhrovec (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "221505633866407",
    "Uhrovské Podhradie (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "229546682866415",
    "Újazd (okres Trenčín)",
    "",
    ""
  ],
  [
    "321508438866423",
    "Uľanka (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "234556050866431",
    "Úľany nad Žitavou (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "419520934866440",
    "Ulič (okres Snina)",
    "",
    ""
  ],
  [
    "419520942866458",
    "Uličské Krivé (okres Snina)",
    "",
    ""
  ],
  [
    "414543691866466",
    "Uloža (okres Levoča)",
    "",
    ""
  ],
  [
    "325518905866482",
    "Uňatín (okres Krupina)",
    "",
    ""
  ],
  [
    "216504939866491",
    "Unín (okres Skalica)",
    "",
    ""
  ],
  [
    "42B544001873187",
    "Úpor (okres Trebišov)",
    "",
    ""
  ],
  [
    "236505641866539",
    "Urmince (okres Topoľčany)",
    "",
    ""
  ],
  [
    "31A510106866563",
    "Ústie nad Priehradou (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "327580317825344",
    "Utekáč (okres Poltár)",
    "",
    ""
  ],
  [
    "418525359866598",
    "Uzovce (okres Sabinov)",
    "",
    ""
  ],
  [
    "329515701866644",
    "Uzovská Panica (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "418525367866661",
    "Uzovské Pekľany (okres Sabinov)",
    "",
    ""
  ],
  [
    "418525375866679",
    "Uzovský Šalgov (okres Sabinov)",
    "",
    ""
  ],
  [
    "106507831803707",
    "Vačková (okres Malacky)",
    "",
    ""
  ],
  [
    "224506630866687",
    "Vaďovce (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "41C527947866695",
    "Vagrinec (okres Svidník)",
    "",
    ""
  ],
  [
    "212504114866709",
    "Váhovce (okres Galanta)",
    "",
    ""
  ],
  [
    "233500470834068",
    "Vajka nad Žitavou (okres Nitra)",
    "",
    ""
  ],
  [
    "426522121866717",
    "Vajkovce (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "103529362805700",
    "Vajnory (okres Bratislava III)",
    "",
    ""
  ],
  [
    "426522139866725",
    "Valaliky (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "323509086866792",
    "Valaská (okres Brezno)",
    "",
    ""
  ],
  [
    "227514420867195",
    "Valaská Belá (okres Prievidza)",
    "",
    ""
  ],
  [
    "318511102867233",
    "Valaská Dubová (okres Ružomberok)",
    "",
    ""
  ],
  [
    "412518638992160",
    "Valaškovce-Juh (okres Humenné)",
    "",
    ""
  ],
  [
    "412518638879703",
    "Valaškovce-Sever (okres Humenné)",
    "",
    ""
  ],
  [
    "412518638992151",
    "Valaškovce-Stred (okres Humenné)",
    "",
    ""
  ],
  [
    "316512761867250",
    "Valča (okres Martin)",
    "",
    ""
  ],
  [
    "316512397867268",
    "Valentová (okres Martin)",
    "",
    ""
  ],
  [
    "415520951867276",
    "Valentovce (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "41B527203875333",
    "Valkov (okres Stropkov)",
    "",
    ""
  ],
  [
    "41C527955867284",
    "Valkovce (okres Svidník)",
    "",
    ""
  ],
  [
    "323509094867314",
    "Vaľkovňa (okres Brezno)",
    "",
    ""
  ],
  [
    "327511340867331",
    "Vaľkovo (okres Poltár)",
    "",
    ""
  ],
  [
    "217507636862266",
    "Valtov Šúr (okres Trnava)",
    "",
    ""
  ],
  [
    "411518964867349",
    "Vaniškovce (okres Bardejov)",
    "",
    ""
  ],
  [
    "317509680867357",
    "Vaňovka (okres Námestovo)",
    "",
    ""
  ],
  [
    "41C527963867365",
    "Vápeník (okres Svidník)",
    "",
    ""
  ],
  [
    "411519901867373",
    "Varadka (okres Bardejov)",
    "",
    ""
  ],
  [
    "41B527971867381",
    "Varechovce (okres Stropkov)",
    "",
    ""
  ],
  [
    "417525383867411",
    "Varhaňovce (okres Prešov)",
    "",
    ""
  ],
  [
    "31B518069867446",
    "Varín (okres Žilina)",
    "",
    ""
  ],
  [
    "217507636867462",
    "Varov Šúr (okres Trnava)",
    "",
    ""
  ],
  [
    "317510149867471",
    "Vasiľov (okres Námestovo)",
    "",
    ""
  ],
  [
    "317510157867489",
    "Vavrečka (okres Námestovo)",
    "",
    ""
  ],
  [
    "41D529214867497",
    "Vavrinec (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "315511111867501",
    "Vavrišovo (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "315511129867527",
    "Važec (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "231501204825671",
    "Vážsky klin (okres Komárno)",
    "",
    ""
  ],
  [
    "426559873871702",
    "Včeláre (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "329515710867543",
    "Včelince (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "42B543772857360",
    "Véč (okres Trebišov)",
    "",
    ""
  ],
  [
    "329515728867551",
    "Večelkov (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "41D529222867578",
    "Vechec (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "42B543845867586",
    "Veľaty (okres Trebišov)",
    "",
    ""
  ],
  [
    "237500836867594",
    "Velčice (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "313510165867616",
    "Veličná (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "416523381848417",
    "Veľká (okres Poprad)",
    "",
    ""
  ],
  [
    "42B528129801682",
    "Veľká Bara (okres Trebišov)",
    "",
    ""
  ],
  [
    "211501581816701",
    "Veľká Budafa (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "311517461807745",
    "Veľká Bytča (okres Bytča)",
    "",
    ""
  ],
  [
    "32A516465867641",
    "Veľká Čalomija (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "227514438867659",
    "Veľká Čausa (okres Prievidza)",
    "",
    ""
  ],
  [
    "31B518077867667",
    "Veľká Čierna (okres Žilina)",
    "",
    ""
  ],
  [
    "233500844867691",
    "Veľká Dolina (okres Nitra)",
    "",
    ""
  ],
  [
    "413523992867705",
    "Veľká Franková (okres Kežmarok)",
    "",
    ""
  ],
  [
    "229506648867713",
    "Veľká Hradná (okres Trenčín)",
    "",
    ""
  ],
  [
    "426522147867748",
    "Veľká Ida (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "32C517330867772",
    "Veľká Lehota (okres Žarnovica)",
    "",
    ""
  ],
  [
    "227513881867781",
    "Veľká Lehôtka (okres Prievidza)",
    "",
    ""
  ],
  [
    "41A527068867799",
    "Veľká Lesná (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "426522155867811",
    "Veľká Lodina (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "413524000867837",
    "Veľká Lomnica (okres Kežmarok)",
    "",
    ""
  ],
  [
    "211501743833649",
    "Veľká Lúč (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "32B581585867845",
    "Veľká Lúka (okres Zvolen)",
    "",
    ""
  ],
  [
    "212504122867853",
    "Veľká Mača (okres Galanta)",
    "",
    ""
  ],
  [
    "234503363836001",
    "Veľká Maňa (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "326511994867632",
    "Veľká nad Ipľom (okres Lučenec)",
    "",
    ""
  ],
  [
    "211501972867888",
    "Veľká Paka (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "419520829867896",
    "Veľká Poľana (okres Snina)",
    "",
    ""
  ],
  [
    "327514900819531",
    "Veľká Suchá (okres Poltár)",
    "",
    ""
  ],
  [
    "234503169882003",
    "Veľká tabuľa (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "42B513806864773",
    "Veľká Tŕňa (okres Trebišov)",
    "",
    ""
  ],
  [
    "233500071804037",
    "Veľká Ves (okres Nitra)",
    "",
    ""
  ],
  [
    "327512001867900",
    "Veľká Ves (okres Poltár)",
    "",
    ""
  ],
  [
    "32A516473867918",
    "Veľká Ves nad Ipľom (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "236504998867926",
    "Veľké Bedzany (okres Topoľčany)",
    "",
    ""
  ],
  [
    "225505315867934",
    "Veľké Bielice (okres Partizánske)",
    "",
    ""
  ],
  [
    "229506656867942",
    "Veľké Bierovce (okres Trenčín)",
    "",
    ""
  ],
  [
    "211501981867951",
    "Veľké Blahovo (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "315511137867969",
    "Veľké Borové (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "225542733803936",
    "Veľké Bošany (okres Partizánske)",
    "",
    ""
  ],
  [
    "217506842806251",
    "Veľké Brestovany (okres Trnava)",
    "",
    ""
  ],
  [
    "326512010867977",
    "Veľké Dravce (okres Lučenec)",
    "",
    ""
  ],
  [
    "236505676867985",
    "Veľké Dvorany (okres Topoľčany)",
    "",
    ""
  ],
  [
    "211555673814121",
    "Veľké Dvorníky (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "221505684867993",
    "Veľké Hoste (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "221505692868001",
    "Veľké Chlievany (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "237500062820971",
    "Veľké Chrašťany (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "233500518868019",
    "Veľké Chyndice (okres Nitra)",
    "",
    ""
  ],
  [
    "233500011868035",
    "Veľké Janíkovce (okres Nitra)",
    "",
    ""
  ],
  [
    "427543853868043",
    "Veľké Kapušany (okres Michalovce)",
    "",
    ""
  ],
  [
    "231501387868132",
    "Veľké Kosihy (okres Komárno)",
    "",
    ""
  ],
  [
    "214507709868141",
    "Veľké Kostoľany (okres Piešťany)",
    "",
    ""
  ],
  [
    "222513351868167",
    "Veľké Košecké Podhradie (okres Ilava)",
    "",
    ""
  ],
  [
    "232581160868175",
    "Veľké Kozmálovce (okres Levice)",
    "",
    ""
  ],
  [
    "232502430829455",
    "Veľké Krškany (okres Levice)",
    "",
    ""
  ],
  [
    "225505706868183",
    "Veľké Kršteňany (okres Partizánske)",
    "",
    ""
  ],
  [
    "106504947868191",
    "Veľké Leváre (okres Malacky)",
    "",
    ""
  ],
  [
    "234503631868205",
    "Veľké Lovce (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "232502910868213",
    "Veľké Ludince (okres Levice)",
    "",
    ""
  ],
  [
    "214556572868221",
    "Veľké Orvište (okres Piešťany)",
    "",
    ""
  ],
  [
    "225505307844560",
    "Veľké Ostratice (okres Partizánske)",
    "",
    ""
  ],
  [
    "42B543861868230",
    "Veľké Ozorovce (okres Trebišov)",
    "",
    ""
  ],
  [
    "32C517348868248",
    "Veľké Pole (okres Žarnovica)",
    "",
    ""
  ],
  [
    "427543870868256",
    "Veľké Raškovce (okres Michalovce)",
    "",
    ""
  ],
  [
    "429523232868272",
    "Veľké Revištia (okres Sobrance)",
    "",
    ""
  ],
  [
    "236505714868299",
    "Veľké Ripňany (okres Topoľčany)",
    "",
    ""
  ],
  [
    "311518085868540",
    "Veľké Rovné (okres Bytča)",
    "",
    ""
  ],
  [
    "427543888868582",
    "Veľké Slemence (okres Michalovce)",
    "",
    ""
  ],
  [
    "229545741868591",
    "Veľké Stankovce (okres Trenčín)",
    "",
    ""
  ],
  [
    "32A558214868612",
    "Veľké Straciny (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "232502804860611",
    "Veľké Šarovce (okres Levice)",
    "",
    ""
  ],
  [
    "107508250860778",
    "Veľké Šenkvice (okres Pezinok)",
    "",
    ""
  ],
  [
    "217507636862274",
    "Veľké Šúrovce I (okres Trnava)",
    "",
    ""
  ],
  [
    "217507636862291",
    "Veľké Šúrovce II (okres Trnava)",
    "",
    ""
  ],
  [
    "329515736868663",
    "Veľké Teriakovce (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "42B543896868698",
    "Veľké Trakany (okres Trebišov)",
    "",
    ""
  ],
  [
    "107508314869554",
    "Veľké Tŕnie (okres Pezinok)",
    "",
    ""
  ],
  [
    "225505722868744",
    "Veľké Uherce (okres Partizánske)",
    "",
    ""
  ],
  [
    "212504131868752",
    "Veľké Úľany (okres Galanta)",
    "",
    ""
  ],
  [
    "237555932868761",
    "Veľké Vozokany (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "233500887868787",
    "Veľké Zálužie (okres Nitra)",
    "",
    ""
  ],
  [
    "32A516490868833",
    "Veľké Zlievce (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "41B527980868841",
    "Veľkrop (okres Stropkov)",
    "",
    ""
  ],
  [
    "233500046800295",
    "Veľký Báb (okres Nitra)",
    "",
    ""
  ],
  [
    "108508292868868",
    "Veľký Biel (okres Senec)",
    "",
    ""
  ],
  [
    "313509540812331",
    "Veľký Bysterec (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "233500895868914",
    "Veľký Cetín (okres Nitra)",
    "",
    ""
  ],
  [
    "319512788868922",
    "Veľký Čepčín (okres Turčianske Teplice)",
    "",
    ""
  ],
  [
    "421543705868973",
    "Veľký Folkmar (okres Gelnica)",
    "",
    ""
  ],
  [
    "212504149868990",
    "Veľký Grob (okres Galanta)",
    "",
    ""
  ],
  [
    "42B543900869007",
    "Veľký Horeš (okres Trebišov)",
    "",
    ""
  ],
  [
    "42B543918869015",
    "Veľký Kamenec (okres Trebišov)",
    "",
    ""
  ],
  [
    "42B528421823686",
    "Veľký Kazimír (okres Trebišov)",
    "",
    ""
  ],
  [
    "222513440825425",
    "Veľký Kolačín (okres Ilava)",
    "",
    ""
  ],
  [
    "32A515850869058",
    "Veľký Krtíš (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "234503380837547",
    "Veľký Kýr (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "233555860830631",
    "Veľký Lapáš (okres Nitra)",
    "",
    ""
  ],
  [
    "211501735831131",
    "Veľký Lég (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "41A527076869139",
    "Veľký Lipník (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "32A516503869147",
    "Veľký Lom (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "211501522808709",
    "Veľký Meder (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "232502731855456",
    "Veľký Pesek (okres Levice)",
    "",
    ""
  ],
  [
    "42B528625842907",
    "Veľký Ruskov (okres Trebišov)",
    "",
    ""
  ],
  [
    "416524018869163",
    "Veľký Slavkov (okres Poprad)",
    "",
    ""
  ],
  [
    "417525391869171",
    "Veľký Slivník (okres Prešov)",
    "",
    ""
  ],
  [
    "41A527025859559",
    "Veľký Sulín (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "417525405869198",
    "Veľký Šariš (okres Prešov)",
    "",
    ""
  ],
  [
    "412520977869201",
    "Veľopolie (okres Humenné)",
    "",
    ""
  ],
  [
    "236505749869210",
    "Velušovce (okres Topoľčany)",
    "",
    ""
  ],
  [
    "411519553834173",
    "Venécia (okres Bardejov)",
    "",
    ""
  ],
  [
    "416524026869228",
    "Vernár (okres Poprad)",
    "",
    ""
  ],
  [
    "232502804860620",
    "Veselá (okres Levice)",
    "",
    ""
  ],
  [
    "214507725869244",
    "Veselé (okres Piešťany)",
    "",
    ""
  ],
  [
    "315511145869252",
    "Veterná Poruba (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "326557307869261",
    "Vidiná (okres Lučenec)",
    "",
    ""
  ],
  [
    "428526266856185",
    "Vidová (okres Rožňava)",
    "",
    ""
  ],
  [
    "216504343813354",
    "Vidovany (okres Skalica)",
    "",
    ""
  ],
  [
    "32B518581831468",
    "Vidov Vrch (okres Zvolen)",
    "",
    ""
  ],
  [
    "211555746844284",
    "Vieska (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "32D599328877689",
    "Vieska (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "32A516511869295",
    "Vieska (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "216504742869279",
    "Vieska (okres Skalica)",
    "",
    ""
  ],
  [
    "227513911807648",
    "Vieska (okres Prievidza)",
    "",
    ""
  ],
  [
    "228513610850560",
    "Vieska-Bezdedov (okres Púchov)",
    "",
    ""
  ],
  [
    "329515752869309",
    "Vieska nad Blhom (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "237500909869317",
    "Vieska nad Žitavou (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "324518921869350",
    "Vígľaš (okres Detva)",
    "",
    ""
  ],
  [
    "324518930869431",
    "Vígľašská Huta-Kalinka (okres Detva)",
    "",
    ""
  ],
  [
    "416524034869457",
    "Vikartovce (okres Poprad)",
    "",
    ""
  ],
  [
    "32A516520869465",
    "Vinica (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "42B543926869473",
    "Viničky (okres Trebišov)",
    "",
    ""
  ],
  [
    "107508306869481",
    "Viničné (okres Pezinok)",
    "",
    ""
  ],
  [
    "427523259869503",
    "Vinné (okres Michalovce)",
    "",
    ""
  ],
  [
    "103529346804380",
    "Vinohrady (okres Bratislava III)",
    "",
    ""
  ],
  [
    "212504157869546",
    "Vinohrady nad Váhom (okres Galanta)",
    "",
    ""
  ],
  [
    "231555827851141",
    "Virt (okres Komárno)",
    "",
    ""
  ],
  [
    "41A527084869589",
    "Vislanka (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "41B527998869597",
    "Vislava (okres Stropkov)",
    "",
    ""
  ],
  [
    "315511099866369",
    "Vislavce (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "228513776869619",
    "Visolaje (okres Púchov)",
    "",
    ""
  ],
  [
    "42B543934869627",
    "Višňov (okres Trebišov)",
    "",
    ""
  ],
  [
    "224506672869635",
    "Višňové (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "328515761869643",
    "Višňové (okres Revúca)",
    "",
    ""
  ],
  [
    "31B518093869651",
    "Višňové (okres Žilina)",
    "",
    ""
  ],
  [
    "107508322869686",
    "Vištuk (okres Pezinok)",
    "",
    ""
  ],
  [
    "31A510173869708",
    "Vitanová (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "417525413869724",
    "Víťaz (okres Prešov)",
    "",
    ""
  ],
  [
    "412520985869732",
    "Víťazovce (okres Humenné)",
    "",
    ""
  ],
  [
    "42A543713869759",
    "Vítkovce (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "41D529231869767",
    "Vlača (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "41B528005869783",
    "Vladiča (okres Stropkov)",
    "",
    ""
  ],
  [
    "428526339869813",
    "Vlachovo (okres Rožňava)",
    "",
    ""
  ],
  [
    "315511153869830",
    "Vlachy (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "315511153869848",
    "Vlašky (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "235504165869872",
    "Vlčany (okres Šaľa)",
    "",
    ""
  ],
  [
    "216504343813346",
    "Vlčkovany (okres Skalica)",
    "",
    ""
  ],
  [
    "217556513869881",
    "Vlčkovce (okres Trnava)",
    "",
    ""
  ],
  [
    "221542822810681",
    "Vlčkovo (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "321557293869899",
    "Vlkanová (okres Banská Bystrica)",
    "",
    ""
  ],
  [
    "234556025869902",
    "Vlkas (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "413524042869929",
    "Vlková (okres Kežmarok)",
    "",
    ""
  ],
  [
    "413524051869937",
    "Vlkovce (okres Kežmarok)",
    "",
    ""
  ],
  [
    "108508331869945",
    "Vlky (okres Senec)",
    "",
    ""
  ],
  [
    "329515779869953",
    "Vlkyňa (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "217507741869961",
    "Voderady (okres Trnava)",
    "",
    ""
  ],
  [
    "427543942869970",
    "Vojany (okres Michalovce)",
    "",
    ""
  ],
  [
    "42B543951869996",
    "Vojčice (okres Trebišov)",
    "",
    ""
  ],
  [
    "42B543969870005",
    "Vojka (okres Trebišov)",
    "",
    ""
  ],
  [
    "211501999870021",
    "Vojka nad Dunajom (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "42A543721870030",
    "Vojkovce (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "413524069870048",
    "Vojňany (okres Kežmarok)",
    "",
    ""
  ],
  [
    "429523267870056",
    "Vojnatina (okres Sobrance)",
    "",
    ""
  ],
  [
    "211501808842991",
    "Vojtechovce (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "41B528013870099",
    "Vojtovce (okres Stropkov)",
    "",
    ""
  ],
  [
    "427523275870129",
    "Voľa (okres Michalovce)",
    "",
    ""
  ],
  [
    "415520993870137",
    "Volica (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "237500925870153",
    "Volkovce (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "32C517356870170",
    "Voznica (okres Žarnovica)",
    "",
    ""
  ],
  [
    "212504173870188",
    "Vozokany (okres Galanta)",
    "",
    ""
  ],
  [
    "236505757870196",
    "Vozokany (okres Topoľčany)",
    "",
    ""
  ],
  [
    "232502324819735",
    "Vozokany nad Hronom (okres Levice)",
    "",
    ""
  ],
  [
    "233500933870218",
    "Vráble (okres Nitra)",
    "",
    ""
  ],
  [
    "216504963870226",
    "Vrádište (okres Skalica)",
    "",
    ""
  ],
  [
    "211502006870269",
    "Vrakúň (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "102529338870293",
    "Vrakuňa (okres Bratislava II)",
    "",
    ""
  ],
  [
    "31B517402870307",
    "Vranie (okres Žilina)",
    "",
    ""
  ],
  [
    "41D544051870315",
    "Vranov nad Topľou (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "227513954810738",
    "Vrbany (okres Prievidza)",
    "",
    ""
  ],
  [
    "427523283870439",
    "Vrbnica (okres Michalovce)",
    "",
    ""
  ],
  [
    "413524077870447",
    "Vrbov (okres Kežmarok)",
    "",
    ""
  ],
  [
    "231501409870463",
    "Vrbová nad Váhom (okres Komárno)",
    "",
    ""
  ],
  [
    "223504971870587",
    "Vrbovce (okres Myjava)",
    "",
    ""
  ],
  [
    "329515736868671",
    "Vrbovce nad Rimavou (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "214507750870595",
    "Vrbové (okres Piešťany)",
    "",
    ""
  ],
  [
    "427522279837156",
    "Vrbovec (okres Michalovce)",
    "",
    ""
  ],
  [
    "32A516538870617",
    "Vrbovka (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "226513784870625",
    "Vrchteplá (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "316512796870633",
    "Vrícko (okres Martin)",
    "",
    ""
  ],
  [
    "222557625870641",
    "Vršatské Podhradie (okres Ilava)",
    "",
    ""
  ],
  [
    "316557358870650",
    "Vrútky (okres Martin)",
    "",
    ""
  ],
  [
    "426522163870749",
    "Vtáčkovce (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "413524085870765",
    "Výborná (okres Kežmarok)",
    "",
    ""
  ],
  [
    "233500313819841",
    "Výčapky (okres Nitra)",
    "",
    ""
  ],
  [
    "233500941870781",
    "Výčapy-Opatovce (okres Nitra)",
    "",
    ""
  ],
  [
    "415520471836630",
    "Vydraň (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "211502014870790",
    "Vydrany (okres Dunajská Streda)",
    "",
    ""
  ],
  [
    "228557498870811",
    "Vydrná (okres Púchov)",
    "",
    ""
  ],
  [
    "416524093870820",
    "Vydrník (okres Poprad)",
    "",
    ""
  ],
  [
    "32D517364870846",
    "Vyhne (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "315511170870862",
    "Východná (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "415521001870871",
    "Výrava (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "221505765870897",
    "Vysočany (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "322517372870901",
    "Vysoká (okres Banská Štiavnica)",
    "",
    ""
  ],
  [
    "418525421870919",
    "Vysoká (okres Sabinov)",
    "",
    ""
  ],
  [
    "312509515871061",
    "Vysoká nad Kysucou (okres Čadca)",
    "",
    ""
  ],
  [
    "427523291871117",
    "Vysoká nad Uhom (okres Michalovce)",
    "",
    ""
  ],
  [
    "106508349871133",
    "Vysoká pri Morave (okres Malacky)",
    "",
    ""
  ],
  [
    "227514225840696",
    "Vyšehradné (okres Prievidza)",
    "",
    ""
  ],
  [
    "41B528021871141",
    "Vyškovce (okres Stropkov)",
    "",
    ""
  ],
  [
    "232502944871168",
    "Vyškovce nad Ipľom (okres Levice)",
    "",
    ""
  ],
  [
    "315511188871184",
    "Vyšná Boca (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "426522171871192",
    "Vyšná Hutka (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "412521019871206",
    "Vyšná Jablonka (okres Humenné)",
    "",
    ""
  ],
  [
    "41C528030871214",
    "Vyšná Jedľová (okres Svidník)",
    "",
    ""
  ],
  [
    "426522180871222",
    "Vyšná Kamenica (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "426522198871231",
    "Vyšná Myšľa (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "41B528048871249",
    "Vyšná Olšava (okres Stropkov)",
    "",
    ""
  ],
  [
    "41C528056871257",
    "Vyšná Pisaná (okres Svidník)",
    "",
    ""
  ],
  [
    "329514462871265",
    "Vyšná Pokoradz (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "411519910871273",
    "Vyšná Polianka (okres Bardejov)",
    "",
    ""
  ],
  [
    "429523305871290",
    "Vyšná Rybnica (okres Sobrance)",
    "",
    ""
  ],
  [
    "412529249871303",
    "Vyšná Sitnica (okres Humenné)",
    "",
    ""
  ],
  [
    "428526347871311",
    "Vyšná Slaná (okres Rožňava)",
    "",
    ""
  ],
  [
    "417525430871346",
    "Vyšná Šebastová (okres Prešov)",
    "",
    ""
  ],
  [
    "416524107871354",
    "Vyšná Šuňava (okres Poprad)",
    "",
    ""
  ],
  [
    "411519928871362",
    "Vyšná Voľa (okres Bardejov)",
    "",
    ""
  ],
  [
    "412521027871371",
    "Vyšné Ladičkovce (okres Humenné)",
    "",
    ""
  ],
  [
    "232502952871389",
    "Vyšné nad Hronom (okres Levice)",
    "",
    ""
  ],
  [
    "429523313871401",
    "Vyšné Nemecké (okres Sobrance)",
    "",
    ""
  ],
  [
    "425599913827088",
    "Vyšné Opátske (okres Košice IV)",
    "",
    ""
  ],
  [
    "411519936871419",
    "Vyšné Raslavice (okres Bardejov)",
    "",
    ""
  ],
  [
    "429523321871427",
    "Vyšné Remety (okres Sobrance)",
    "",
    ""
  ],
  [
    "414526606871435",
    "Vyšné Repaše (okres Levoča)",
    "",
    ""
  ],
  [
    "41A527092871451",
    "Vyšné Ružbachy (okres Stará Ľubovňa)",
    "",
    ""
  ],
  [
    "42A543535856681",
    "Vyšné Slovinky (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "329557901871478",
    "Vyšné Valice (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "329515744868892",
    "Vyšný Blh (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "426522201871486",
    "Vyšný Čaj (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "41B560073865800",
    "Vyšný Hrabovec (okres Stropkov)",
    "",
    ""
  ],
  [
    "412521035871508",
    "Vyšný Hrušov (okres Humenné)",
    "",
    ""
  ],
  [
    "41D529117853747",
    "Vyšný Kazimír (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "426522210871516",
    "Vyšný Klátov (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "41C528064871524",
    "Vyšný Komárnik (okres Svidník)",
    "",
    ""
  ],
  [
    "411519944871532",
    "Vyšný Kručov (okres Bardejov)",
    "",
    ""
  ],
  [
    "313510181871541",
    "Vyšný Kubín (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "426521876871559",
    "Vyšný Lánec (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "426582093836583",
    "Vyšný Medzev (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "41C528072871575",
    "Vyšný Mirošov (okres Svidník)",
    "",
    ""
  ],
  [
    "426521591827649",
    "Vyšný Olčvár (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "41C528081871583",
    "Vyšný Orlík (okres Svidník)",
    "",
    ""
  ],
  [
    "329515809871591",
    "Vyšný Skálnik (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "414526614871605",
    "Vyšný Slavkov (okres Levoča)",
    "",
    ""
  ],
  [
    "411519952871613",
    "Vyšný Tvarožec (okres Bardejov)",
    "",
    ""
  ],
  [
    "41D529257871621",
    "Vyšný Žipov (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "31A510190871648",
    "Zábiedovo (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "229505820871664",
    "Záblatie (okres Trenčín)",
    "",
    ""
  ],
  [
    "316512818871672",
    "Záborie (okres Martin)",
    "",
    ""
  ],
  [
    "417525448871681",
    "Záborské (okres Prešov)",
    "",
    ""
  ],
  [
    "313509922844152",
    "Zábrež (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "426559881871711",
    "Zádiel (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "329515817871729",
    "Zádor (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "31B517402871737",
    "Zádubnie (okres Žilina)",
    "",
    ""
  ],
  [
    "216504734950076",
    "Záhajné (okres Skalica)",
    "",
    ""
  ],
  [
    "429523330871745",
    "Záhor (okres Sobrance)",
    "",
    ""
  ],
  [
    "32A516546871770",
    "Záhorce (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "106500267871788",
    "Záhorie (okres Malacky)",
    "",
    ""
  ],
  [
    "104529427871796",
    "Záhorská Bystrica (okres Bratislava IV)",
    "",
    ""
  ],
  [
    "106508365871826",
    "Záhorská Ves (okres Malacky)",
    "",
    ""
  ],
  [
    "417525456871834",
    "Záhradné (okres Prešov)",
    "",
    ""
  ],
  [
    "329557927871851",
    "Zacharovce (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "32B518689871915",
    "Zaježová (okres Zvolen)",
    "",
    ""
  ],
  [
    "317510203871940",
    "Zákamenné (okres Námestovo)",
    "",
    ""
  ],
  [
    "312509523872253",
    "Zákopčie (okres Čadca)",
    "",
    ""
  ],
  [
    "214507709868159",
    "Zákostoľany (okres Piešťany)",
    "",
    ""
  ],
  [
    "232502961872261",
    "Zalaba (okres Levice)",
    "",
    ""
  ],
  [
    "108555509872270",
    "Zálesie (okres Senec)",
    "",
    ""
  ],
  [
    "418525146854298",
    "Zálesie (okres Sabinov)",
    "",
    ""
  ],
  [
    "413524115872296",
    "Zálesie (okres Kežmarok)",
    "",
    ""
  ],
  [
    "326512010950041",
    "Záložná (okres Lučenec)",
    "",
    ""
  ],
  [
    "427523241868779",
    "Zalužice (okres Michalovce)",
    "",
    ""
  ],
  [
    "229556475872300",
    "Zamarovce (okres Trenčín)",
    "",
    ""
  ],
  [
    "41D529265872326",
    "Zámutov (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "228513814872342",
    "Záriečie (okres Púchov)",
    "",
    ""
  ],
  [
    "313509540812404",
    "Záskalie (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "226513822872369",
    "Záskalie (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "31B517402872377",
    "Zástranie (okres Žilina)",
    "",
    ""
  ],
  [
    "42B543977872393",
    "Zatín (okres Trebišov)",
    "",
    ""
  ],
  [
    "316512036872407",
    "Záturčie (okres Martin)",
    "",
    ""
  ],
  [
    "32A516554872440",
    "Závada (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "414543292872458",
    "Závada (okres Levoča)",
    "",
    ""
  ],
  [
    "412529273872466",
    "Závada (okres Humenné)",
    "",
    ""
  ],
  [
    "237500925870161",
    "Závada (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "236505773872423",
    "Závada (okres Topoľčany)",
    "",
    ""
  ],
  [
    "221543136872482",
    "Závada pod Čiernym vrchom (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "412521043872491",
    "Závadka (okres Humenné)",
    "",
    ""
  ],
  [
    "421526631872547",
    "Závadka (okres Gelnica)",
    "",
    ""
  ],
  [
    "427523348872504",
    "Závadka (okres Michalovce)",
    "",
    ""
  ],
  [
    "417524425872512",
    "Závadka (okres Prešov)",
    "",
    ""
  ],
  [
    "323509124872563",
    "Závadka nad Hronom (okres Brezno)",
    "",
    ""
  ],
  [
    "217507768872580",
    "Zavar (okres Trnava)",
    "",
    ""
  ],
  [
    "315511196872644",
    "Závažná Poruba (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "106504980872679",
    "Závod (okres Malacky)",
    "",
    ""
  ],
  [
    "31B517402874876",
    "Závodie (okres Žilina)",
    "",
    ""
  ],
  [
    "313510211872806",
    "Zázrivá (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "42B543985872822",
    "Zbehňov (okres Trebišov)",
    "",
    ""
  ],
  [
    "233500950872831",
    "Zbehy (okres Nitra)",
    "",
    ""
  ],
  [
    "419521051872849",
    "Zboj (okres Snina)",
    "",
    ""
  ],
  [
    "415521060872857",
    "Zbojné (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "228512940872873",
    "Zbora (okres Púchov)",
    "",
    ""
  ],
  [
    "411519961872881",
    "Zborov (okres Bardejov)",
    "",
    ""
  ],
  [
    "312509531872903",
    "Zborov nad Bystricou (okres Čadca)",
    "",
    ""
  ],
  [
    "415521078872946",
    "Zbudská Belá (okres Medzilaborce)",
    "",
    ""
  ],
  [
    "412521086872954",
    "Zbudské Dlhé (okres Humenné)",
    "",
    ""
  ],
  [
    "412520250872962",
    "Zbudský Rokytov (okres Humenné)",
    "",
    ""
  ],
  [
    "427523356872971",
    "Zbudza (okres Michalovce)",
    "",
    ""
  ],
  [
    "31B518131872989",
    "Zbyňov (okres Žilina)",
    "",
    ""
  ],
  [
    "426521965854344",
    "Zdoba (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "327511765848107",
    "Zelené (okres Poltár)",
    "",
    ""
  ],
  [
    "217507776872997",
    "Zeleneč (okres Trnava)",
    "",
    ""
  ],
  [
    "31A509876873004",
    "Zemianska Dedina (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "315510793833274",
    "Zemianska Ľubeľa (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "231501417873021",
    "Zemianska Olča (okres Komárno)",
    "",
    ""
  ],
  [
    "226513563873039",
    "Zemianska Závada (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "227514454873055",
    "Zemianske Kostoľany (okres Prievidza)",
    "",
    ""
  ],
  [
    "229545686873063",
    "Zemianske Lieskové (okres Trenčín)",
    "",
    ""
  ],
  [
    "224556441873080",
    "Zemianske Podhradie (okres Nové Mesto nad Váhom)",
    "",
    ""
  ],
  [
    "212504181873098",
    "Zemianske Sady (okres Galanta)",
    "",
    ""
  ],
  [
    "217507636862282",
    "Zemianske Šúrovce (okres Trnava)",
    "",
    ""
  ],
  [
    "226512842873101",
    "Zemiansky Kvašov (okres Považská Bystrica)",
    "",
    ""
  ],
  [
    "325518956873136",
    "Zemiansky Vrbovok (okres Krupina)",
    "",
    ""
  ],
  [
    "234503649873152",
    "Zemné (okres Nové Zámky)",
    "",
    ""
  ],
  [
    "42B543993873161",
    "Zemplín (okres Trebišov)",
    "",
    ""
  ],
  [
    "427523364873209",
    "Zemplínska Široká (okres Michalovce)",
    "",
    ""
  ],
  [
    "42B544019873217",
    "Zemplínska Teplica (okres Trebišov)",
    "",
    ""
  ],
  [
    "419521108873225",
    "Zemplínske Hámre (okres Snina)",
    "",
    ""
  ],
  [
    "42B544027873241",
    "Zemplínske Hradište (okres Trebišov)",
    "",
    ""
  ],
  [
    "42B544035873250",
    "Zemplínske Jastrabie (okres Trebišov)",
    "",
    ""
  ],
  [
    "427522635826201",
    "Zemplínske Kopčany (okres Michalovce)",
    "",
    ""
  ],
  [
    "42B544043873268",
    "Zemplínsky Branč (okres Trebišov)",
    "",
    ""
  ],
  [
    "42B544001873195",
    "Zemplínsky Klečenov (okres Trebišov)",
    "",
    ""
  ],
  [
    "417525472873284",
    "Zlatá Baňa (okres Prešov)",
    "",
    ""
  ],
  [
    "426522244873322",
    "Zlatá Idka (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "411519979873349",
    "Zlaté (okres Bardejov)",
    "",
    ""
  ],
  [
    "237500968873438",
    "Zlaté Moravce (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "231501425873462",
    "Zlatná na Ostrove (okres Komárno)",
    "",
    ""
  ],
  [
    "41D529281873471",
    "Zlatník (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "221505790873501",
    "Zlatníky (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "237500976873519",
    "Zlatno (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "327582051809489",
    "Zlatno (okres Poltár)",
    "",
    ""
  ],
  [
    "229505820873551",
    "Zlatovce (okres Trenčín)",
    "",
    ""
  ],
  [
    "222513865873578",
    "Zliechov (okres Ilava)",
    "",
    ""
  ],
  [
    "233500011840319",
    "Zobor (okres Nitra)",
    "",
    ""
  ],
  [
    "106508381873586",
    "Zohor (okres Malacky)",
    "",
    ""
  ],
  [
    "32B518158873594",
    "Zolná (okres Zvolen)",
    "",
    ""
  ],
  [
    "32A516562873608",
    "Zombor (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "108508284865966",
    "Zonc (okres Senec)",
    "",
    ""
  ],
  [
    "228500348873641",
    "Zubák (okres Púchov)",
    "",
    ""
  ],
  [
    "31A510238873659",
    "Zuberec (okres Tvrdošín)",
    "",
    ""
  ],
  [
    "412521116873675",
    "Zubné (okres Humenné)",
    "",
    ""
  ],
  [
    "317510246873683",
    "Zubrohlava (okres Námestovo)",
    "",
    ""
  ],
  [
    "212503703809799",
    "Zúgov (okres Galanta)",
    "",
    ""
  ],
  [
    "419520829873691",
    "Zvala (okres Snina)",
    "",
    ""
  ],
  [
    "32B518158873705",
    "Zvolen (okres Zvolen)",
    "",
    ""
  ],
  [
    "32B518972873900",
    "Zvolenská Slatina (okres Zvolen)",
    "",
    ""
  ],
  [
    "217581488873918",
    "Zvončín (okres Trnava)",
    "",
    ""
  ],
  [
    "316512834873926",
    "Žabokreky (okres Martin)",
    "",
    ""
  ],
  [
    "225505803873934",
    "Žabokreky nad Nitrou (okres Partizánske)",
    "",
    ""
  ],
  [
    "421526649873942",
    "Žakarovce (okres Gelnica)",
    "",
    ""
  ],
  [
    "413524123873951",
    "Žakovce (okres Kežmarok)",
    "",
    ""
  ],
  [
    "322517143847348",
    "Žakýl (okres Banská Štiavnica)",
    "",
    ""
  ],
  [
    "41D529290873969",
    "Žalobín (okres Vranov nad Topľou)",
    "",
    ""
  ],
  [
    "426522252873977",
    "Žarnov (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "32C517381874001",
    "Žarnovica (okres Žarnovica)",
    "",
    ""
  ],
  [
    "32C517381874019",
    "Žarnovická Huta (okres Žarnovica)",
    "",
    ""
  ],
  [
    "313510254874027",
    "Žaškov (okres Dolný Kubín)",
    "",
    ""
  ],
  [
    "417524425874035",
    "Žatkovce (okres Prešov)",
    "",
    ""
  ],
  [
    "427523372874051",
    "Žbince (okres Michalovce)",
    "",
    ""
  ],
  [
    "426522261874060",
    "Ždaňa (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "416524131874132",
    "Ždiar (okres Poprad)",
    "",
    ""
  ],
  [
    "417525499874159",
    "Žehňa (okres Prešov)",
    "",
    ""
  ],
  [
    "42A526657874183",
    "Žehra (okres Spišská Nová Ves)",
    "",
    ""
  ],
  [
    "423599841878049",
    "Železiarne (okres Košice II)",
    "",
    ""
  ],
  [
    "32B518981874205",
    "Železná Breznica (okres Zvolen)",
    "",
    ""
  ],
  [
    "328515612860131",
    "Železné (okres Revúca)",
    "",
    ""
  ],
  [
    "41C519987874213",
    "Železník (okres Svidník)",
    "",
    ""
  ],
  [
    "232502987874272",
    "Želiezovce (okres Levice)",
    "",
    ""
  ],
  [
    "41C519995874281",
    "Želmanovce (okres Svidník)",
    "",
    ""
  ],
  [
    "32A516571874302",
    "Želovce (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "232503002874337",
    "Žemliare (okres Levice)",
    "",
    ""
  ],
  [
    "315511200874353",
    "Žiar (okres Liptovský Mikuláš)",
    "",
    ""
  ],
  [
    "328515833874361",
    "Žiar (okres Revúca)",
    "",
    ""
  ],
  [
    "32D516589874370",
    "Žiar nad Hronom (okres Žiar nad Hronom)",
    "",
    ""
  ],
  [
    "325518999874558",
    "Žibritov (okres Krupina)",
    "",
    ""
  ],
  [
    "235504190874574",
    "Žihárec (okres Šaľa)",
    "",
    ""
  ],
  [
    "32A516295848786",
    "Žihľava (okres Veľký Krtíš)",
    "",
    ""
  ],
  [
    "237500984874591",
    "Žikava (okres Zlaté Moravce)",
    "",
    ""
  ],
  [
    "31B517402874604",
    "Žilina (okres Žilina)",
    "",
    ""
  ],
  [
    "31B517402874906",
    "Žilinská Lehota (okres Žilina)",
    "",
    ""
  ],
  [
    "329515841874914",
    "Žíp (okres Rimavská Sobota)",
    "",
    ""
  ],
  [
    "417525502874922",
    "Žipov (okres Prešov)",
    "",
    ""
  ],
  [
    "233500992874931",
    "Žirany (okres Nitra)",
    "",
    ""
  ],
  [
    "426521418816078",
    "Žírovce (okres Košice - okolie)",
    "",
    ""
  ],
  [
    "233501018874973",
    "Žitavce (okres Nitra)",
    "",
    ""
  ],
  [
    "221505811874990",
    "Žitná (okres Bánovce nad Bebravou)",
    "",
    ""
  ],
  [
    "213507792875007",
    "Žlkovce (okres Hlohovec)",
    "",
    ""
  ],
  [
    "417525511875015",
    "Župčany (okres Prešov)",
    "",
    ""
  ],
  [
    "32C517399875066",
    "Župkov (okres Žarnovica)",
    "",
    ""
  ]
];

module.exports = katastralneData;
