const airlines = [
  { code: "0B", name: null, name_translations: { en: "Blue Air" } },
  {
    code: "2B",
    name: "Ак Барс Аэро",
    name_translations: { en: "Ak Bars Aero" }
  },
  { code: "2C", name: null, name_translations: { en: "SNCF" } },
  { code: "2I", name: null, name_translations: { en: "Star Peru" } },
  { code: "2J", name: null, name_translations: { en: "Air Burkina" } },
  {
    code: "2K",
    name: "Avianca Ecuador",
    name_translations: { en: "Avianca Ecuador" }
  },
  { code: "2L", name: null, name_translations: { en: "Helvetic Airways" } },
  { code: "2M", name: null, name_translations: { en: "Moldavian Airlines" } },
  { code: "2N", name: null, name_translations: { en: "Nextjet" } },
  { code: "2P", name: null, name_translations: { en: "PAL Express" } },
  { code: "2W", name: null, name_translations: { en: "Welcome Air" } },
  { code: "3E", name: null, name_translations: { en: "Air Choice One" } },
  { code: "3H", name: null, name_translations: { en: "Air Inuit" } },
  { code: "3K", name: null, name_translations: { en: "Jetstar Asia" } },
  { code: "3L", name: null, name_translations: { en: "Intersky Luftfahrt" } },
  { code: "3O", name: null, name_translations: { en: "Air Arabia Maroc" } },
  { code: "3P", name: null, name_translations: { en: "Tiara Air Aruba" } },
  {
    code: "3R",
    name: "Avior Airlines",
    name_translations: { en: "Avior Airlines" }
  },
  { code: "3S", name: null, name_translations: { en: "Air Antilles Express" } },
  { code: "3U", name: null, name_translations: { en: "Sichuan Airlines" } },
  { code: "4D", name: null, name_translations: { en: "Air Sinai" } },
  {
    code: "4G",
    name: "Газпром авиа",
    name_translations: { en: "Gazpromavia" }
  },
  { code: "4J", name: "FlyDamas", name_translations: { en: "FlyDamas" } },
  {
    code: "4M",
    name: "LATAM Argentina",
    name_translations: { en: "LATAM Argentina" }
  },
  { code: "4O", name: null, name_translations: { en: "Interjet" } },
  { code: "4Q", name: null, name_translations: { en: "Safi Airways" } },
  { code: "4T", name: null, name_translations: { en: "Belair Airlines" } },
  { code: "4U", name: null, name_translations: { en: "Germanwings" } },
  {
    code: "4W",
    name: null,
    name_translations: { en: "Warbelow's Air Ventures" }
  },
  { code: "5C", name: null, name_translations: { en: "Nature Air" } },
  { code: "5H", name: "Fly540", name_translations: { en: "Fly540" } },
  {
    code: "5J",
    name: "Cebu Pacific",
    name_translations: { en: "Cebu Pacific" }
  },
  { code: "5N", name: "Нордавиа", name_translations: { en: "Nordavia" } },
  {
    code: "5O",
    name: "ASL Airlines France",
    name_translations: { en: "ASL Airlines France" }
  },
  { code: "5T", name: null, name_translations: { en: "Canadian North" } },
  { code: "6E", name: null, name_translations: { en: "IndiGo" } },
  { code: "6H", name: null, name_translations: { en: "Israir Airlines" } },
  { code: "6R", name: "Алроса", name_translations: { en: "Alrosa" } },
  {
    code: "6W",
    name: "Саратовские авиалинии",
    name_translations: { en: "Saratov Airlines" }
  },
  { code: "6Y", name: null, name_translations: { en: "SmartLynx Airlines" } },
  { code: "7C", name: null, name_translations: { en: "Jeju Air" } },
  { code: "7D", name: "Maluti Sky", name_translations: { en: "Maluti Sky" } },
  { code: "7F", name: null, name_translations: { en: "First Air" } },
  { code: "7H", name: "Ravn Alaska", name_translations: { en: "Ravn Alaska" } },
  { code: "7I", name: null, name_translations: { en: "Insel Air" } },
  { code: "7J", name: "Tajik Air", name_translations: { en: "Tajik Air" } },
  { code: "7K", name: "Метроджет", name_translations: { en: "MetroJet" } },
  { code: "7L", name: null, name_translations: { en: "Aerocaribbean" } },
  { code: "7R", name: "Руслайн", name_translations: { en: "RusLine" } },
  { code: "7V", name: null, name_translations: { en: "Federal Air" } },
  {
    code: "7W",
    name: "Windrose Airlines",
    name_translations: { en: "Windrose Airlines" }
  },
  { code: "8E", name: null, name_translations: { en: "Bering Air" } },
  { code: "8L", name: null, name_translations: { en: "Lucky Air" } },
  {
    code: "8M",
    name: "Myanmar Airways International",
    name_translations: { en: "Myanmar Airways International" }
  },
  {
    code: "8P",
    name: null,
    name_translations: { en: "Pacific Coastal Airlines" }
  },
  { code: "8Q", name: null, name_translations: { en: "Onur Air" } },
  { code: "8R", name: null, name_translations: { en: "Sol Lineas Aereas" } },
  { code: "8U", name: null, name_translations: { en: "Afriqiyah Airways" } },
  { code: "8V", name: null, name_translations: { en: "Wright Air Service" } },
  { code: "9B", name: null, name_translations: { en: "AccesRail" } },
  { code: "9F", name: null, name_translations: { en: "Eurostar" } },
  {
    code: "9H",
    name: "Chang An Airlines",
    name_translations: { en: "Chang An Airlines" }
  },
  { code: "9K", name: null, name_translations: { en: "Cape Air" } },
  { code: "9M", name: null, name_translations: { en: "Central Mountain Air" } },
  {
    code: "9R",
    name: "Southern Air",
    name_translations: { en: "Southern Air" }
  },
  { code: "9U", name: null, name_translations: { en: "Air Moldova" } },
  { code: "9V", name: null, name_translations: { en: "Avior Airlines" } },
  { code: "9W", name: null, name_translations: { en: "Jet Airways" } },
  { code: "A2", name: null, name_translations: { en: "Astra Airlines" } },
  { code: "A3", name: null, name_translations: { en: "Aegean Airlines" } },
  { code: "A4", name: "Азимут", name_translations: { en: "Azimut" } },
  { code: "A5", name: null, name_translations: { en: "HOP!" } },
  { code: "A6", name: null, name_translations: { en: "Air Alps Aviation" } },
  { code: "A9", name: null, name_translations: { en: "Georgian Airways" } },
  { code: "AA", name: null, name_translations: { en: "American Airlines" } },
  { code: "AB", name: null, name_translations: { en: "Air Berlin" } },
  { code: "AC", name: null, name_translations: { en: "Air Canada" } },
  {
    code: "AD",
    name: "Azul Brazilian Airlines",
    name_translations: { en: "Azul Brazilian Airlines" }
  },
  { code: "AE", name: null, name_translations: { en: "Mandarin Airlines" } },
  { code: "AF", name: null, name_translations: { en: "Air France" } },
  { code: "AH", name: null, name_translations: { en: "Air Algerie" } },
  { code: "AI", name: null, name_translations: { en: "Air India" } },
  { code: "AK", name: null, name_translations: { en: "AirAsia" } },
  { code: "AM", name: null, name_translations: { en: "Aeromexico" } },
  { code: "AP", name: null, name_translations: { en: "Air One" } },
  {
    code: "AR",
    name: null,
    name_translations: { en: "Aerolineas Argentinas" }
  },
  { code: "AS", name: null, name_translations: { en: "Alaska Airlines" } },
  { code: "AT", name: null, name_translations: { en: "Royal Air Maroc" } },
  {
    code: "AU",
    name: null,
    name_translations: { en: "Austral Lineas Aereas" }
  },
  { code: "AV", name: null, name_translations: { en: "Avianca" } },
  { code: "AY", name: null, name_translations: { en: "Finnair" } },
  { code: "AZ", name: null, name_translations: { en: "Alitalia" } },
  { code: "B2", name: "Белавиа", name_translations: { en: "Belavia" } },
  {
    code: "B5",
    name: null,
    name_translations: { en: "East African Safari Air" }
  },
  { code: "B6", name: null, name_translations: { en: "JetBlue Airways" } },
  { code: "B7", name: null, name_translations: { en: "Uni Air" } },
  { code: "B8", name: null, name_translations: { en: "Eritrean Airlines" } },
  { code: "BA", name: null, name_translations: { en: "British Airways" } },
  { code: "BB", name: null, name_translations: { en: "Seaborne Airlines" } },
  { code: "BE", name: null, name_translations: { en: "Flybe" } },
  {
    code: "BG",
    name: null,
    name_translations: { en: "Biman Bangladesh Airlines" }
  },
  { code: "BH", name: null, name_translations: { en: "Hawkair" } },
  { code: "BI", name: null, name_translations: { en: "Royal Brunei" } },
  { code: "BJ", name: null, name_translations: { en: "Nouvelair" } },
  { code: "BK", name: null, name_translations: { en: "Okay Airways" } },
  {
    code: "BL",
    name: "Jetstar Pacific Airlines",
    name_translations: { en: "Jetstar Pacific Airlines" }
  },
  { code: "BN", name: null, name_translations: { en: "Bahrain Air" } },
  { code: "BP", name: null, name_translations: { en: "Air Botswana" } },
  { code: "BR", name: null, name_translations: { en: "Eva Air" } },
  { code: "BT", name: "airBaltic", name_translations: { en: "airBaltic" } },
  {
    code: "BV",
    name: null,
    name_translations: { en: "Blue Panorama Airlines" }
  },
  { code: "BW", name: null, name_translations: { en: "Caribbean Airlines" } },
  { code: "BX", name: null, name_translations: { en: "Air Busan" } },
  { code: "C3", name: "Trade Air", name_translations: { en: "Trade Air" } },
  { code: "CA", name: null, name_translations: { en: "Air China" } },
  { code: "CE", name: null, name_translations: { en: "Chalair Aviation" } },
  { code: "CG", name: null, name_translations: { en: "Airlines PNG" } },
  { code: "CI", name: null, name_translations: { en: "China Airlines" } },
  { code: "CJ", name: null, name_translations: { en: "BA Cityflyer" } },
  { code: "CL", name: null, name_translations: { en: "Lufthansa CityLine" } },
  { code: "CM", name: null, name_translations: { en: "Copa Airlines" } },
  { code: "CN", name: null, name_translations: { en: "Grand China Air" } },
  { code: "CO", name: null, name_translations: { en: "Cobalt Air" } },
  { code: "CT", name: null, name_translations: { en: "Alitalia CityLiner" } },
  {
    code: "CU",
    name: "Cubana de Aviación",
    name_translations: { en: "Cubana de Aviación" }
  },
  { code: "CX", name: null, name_translations: { en: "Cathay Pacific" } },
  { code: "CY", name: null, name_translations: { en: "Cyprus Airways" } },
  {
    code: "CZ",
    name: null,
    name_translations: { en: "China Southern Airlines" }
  },
  {
    code: "D2",
    name: "Северсталь",
    name_translations: { en: "Severstal Air" }
  },
  { code: "D6", name: null, name_translations: { en: "Inter Air" } },
  { code: "D7", name: null, name_translations: { en: "AirAsia X" } },
  { code: "D9", name: "Донавиа", name_translations: { en: "Donavia" } },
  { code: "DB", name: null, name_translations: { en: "Brit Air" } },
  {
    code: "DC",
    name: "Braathens Regional",
    name_translations: { en: "Braathens Regional" }
  },
  { code: "DE", name: null, name_translations: { en: "Condor" } },
  { code: "DG", name: null, name_translations: { en: "Tigerair Philippines" } },
  {
    code: "DJ",
    name: "AirAsia Japan",
    name_translations: { en: "AirAsia Japan" }
  },
  { code: "DL", name: null, name_translations: { en: "Delta Air Lines" } },
  { code: "DN", name: null, name_translations: { en: "Norwegian Air" } },
  { code: "DT", name: null, name_translations: { en: "TAAG Angola Airlines" } },
  { code: "DV", name: null, name_translations: { en: "Jsc Aircompany Scat" } },
  { code: "DX", name: null, name_translations: { en: "Danish Air Transport" } },
  {
    code: "DY",
    name: "Norwegian Air Shuttle",
    name_translations: { en: "Norwegian Air Shuttle" }
  },
  { code: "EC", name: null, name_translations: { en: "OpenSkies" } },
  { code: "EG", name: null, name_translations: { en: "East Air" } },
  { code: "EI", name: null, name_translations: { en: "Aer Lingus" } },
  { code: "EK", name: null, name_translations: { en: "Emirates" } },
  { code: "EN", name: null, name_translations: { en: "Air Dolomiti" } },
  { code: "EO", name: "Pegas Fly", name_translations: { en: "Pegas Fly" } },
  {
    code: "EQ",
    name: null,
    name_translations: { en: "TAME Linea Aerea del Ecuador" }
  },
  { code: "ET", name: null, name_translations: { en: "Ethiopian Airlines" } },
  { code: "EU", name: null, name_translations: { en: "Chengdu Airlines" } },
  { code: "EW", name: null, name_translations: { en: "Eurowings" } },
  { code: "EY", name: null, name_translations: { en: "Etihad Airways" } },
  {
    code: "EZ",
    name: "Sun-Air of Scandinavia",
    name_translations: { en: "Sun-Air of Scandinavia" }
  },
  { code: "F7", name: null, name_translations: { en: "Darwin Airline" } },
  { code: "F9", name: null, name_translations: { en: "Frontier Airlines" } },
  { code: "FB", name: null, name_translations: { en: "Bulgaria Air" } },
  { code: "FD", name: null, name_translations: { en: "Thai AirAsia" } },
  { code: "FI", name: null, name_translations: { en: "Icelandair" } },
  { code: "FJ", name: null, name_translations: { en: "Fiji Airways" } },
  { code: "FL", name: null, name_translations: { en: "Airtran Airways" } },
  { code: "FM", name: null, name_translations: { en: "Shanghai Airlines" } },
  {
    code: "FP",
    name: "Servicios Aéreos de los Andes",
    name_translations: { en: "Servicios Aéreos de los Andes" }
  },
  { code: "FQ", name: null, name_translations: { en: "Brindabella Airlines" } },
  { code: "FR", name: null, name_translations: { en: "Ryanair" } },
  { code: "FS", name: null, name_translations: { en: "Syphax Airlines" } },
  { code: "FV", name: "Россия", name_translations: { en: "Rossiya Airlines" } },
  { code: "FY", name: null, name_translations: { en: "Firefly" } },
  { code: "FZ", name: null, name_translations: { en: "Flydubai" } },
  {
    code: "G3",
    name: "Gol Transportes Aéreos",
    name_translations: { en: "Gol Transportes Aéreos" }
  },
  { code: "G4", name: null, name_translations: { en: "Allegiant Air" } },
  { code: "G8", name: "Go!", name_translations: { en: "Go!" } },
  { code: "G9", name: null, name_translations: { en: "Air Arabia" } },
  { code: "GA", name: null, name_translations: { en: "Garuda Indonesia" } },
  { code: "GE", name: null, name_translations: { en: "Transasia Airways" } },
  { code: "GF", name: null, name_translations: { en: "Gulf Air" } },
  { code: "GH", name: "Глобус", name_translations: { en: "Globus Airlines" } },
  { code: "GL", name: null, name_translations: { en: "Air Greenland" } },
  {
    code: "GR",
    name: "Aurigny Air Services",
    name_translations: { en: "Aurigny Air Services" }
  },
  { code: "GS", name: null, name_translations: { en: "Tianjin Airlines" } },
  {
    code: "GW",
    name: "SkyGreece Airlines",
    name_translations: { en: "SkyGreece Airlines" }
  },
  { code: "H2", name: null, name_translations: { en: "Sky Airline" } },
  {
    code: "H9",
    name: "Himalaya Airlines",
    name_translations: { en: "Himalaya Airlines" }
  },
  { code: "HA", name: null, name_translations: { en: "Hawaiian Airlines" } },
  {
    code: "HF",
    name: "Air Côte d'Ivoire",
    name_translations: { en: "Air Côte d'Ivoire" }
  },
  { code: "HG", name: null, name_translations: { en: "Niki" } },
  { code: "HM", name: null, name_translations: { en: "Air Seychelles" } },
  { code: "HO", name: null, name_translations: { en: "Juneyao Airlines" } },
  { code: "HR", name: null, name_translations: { en: "Hahn Air" } },
  {
    code: "HS",
    name: "Héli Sécurité Hélicopter Airline",
    name_translations: { en: "Héli Sécurité Hélicopter Airline" }
  },
  { code: "HU", name: null, name_translations: { en: "Hainan Airlines" } },
  { code: "HV", name: "Transavia", name_translations: { en: "Transavia" } },
  { code: "HX", name: null, name_translations: { en: "Hong Kong Airlines" } },
  {
    code: "HY",
    name: "Узбекские авиалинии (Uzbekistan Airways)",
    name_translations: { en: "Uzbekistan Airways" }
  },
  { code: "HZ", name: "Аврора", name_translations: { en: "Aurora" } },
  { code: "I2", name: null, name_translations: { en: "Iberia Express" } },
  {
    code: "I4",
    name: "Interstate Airlines",
    name_translations: { en: "Interstate Airlines" }
  },
  {
    code: "I5",
    name: "AirAsia India",
    name_translations: { en: "AirAsia India" }
  },
  { code: "I8", name: "Ижавиа", name_translations: { en: "Izhavia" } },
  { code: "I9", name: null, name_translations: { en: "Air Italy" } },
  { code: "IB", name: null, name_translations: { en: "Iberia" } },
  { code: "IE", name: null, name_translations: { en: "Solomon Airlines" } },
  { code: "IG", name: null, name_translations: { en: "Air Italy" } },
  { code: "IQ", name: "Qazaq Air", name_translations: { en: "Qazaq Air" } },
  { code: "IR", name: null, name_translations: { en: "Iran Air" } },
  { code: "IT", name: null, name_translations: { en: "Tigerair Taiwan" } },
  { code: "IX", name: null, name_translations: { en: "Air India Express" } },
  { code: "IY", name: "Yemenia", name_translations: { en: "Yemenia" } },
  { code: "IZ", name: null, name_translations: { en: "Arkia" } },
  { code: "J0", name: null, name_translations: { en: "Jetlink Express" } },
  {
    code: "J2",
    name: "Азербайджанские авиалинии (Azal)",
    name_translations: { en: "Azerbaijan Airlines" }
  },
  { code: "J3", name: null, name_translations: { en: "Northwestern Air" } },
  {
    code: "J7",
    name: "Afrijet Business Service",
    name_translations: { en: "Afrijet Business Service" }
  },
  { code: "J8", name: null, name_translations: { en: "Berjaya Air" } },
  { code: "J9", name: null, name_translations: { en: "Jazeera Airways" } },
  { code: "JA", name: null, name_translations: { en: "B&H Airlines" } },
  {
    code: "JD",
    name: null,
    name_translations: { en: "Beijing Capital Airlines" }
  },
  { code: "JE", name: null, name_translations: { en: "Mango" } },
  {
    code: "JJ",
    name: "LATAM Brasil",
    name_translations: { en: "LATAM Brasil" }
  },
  { code: "JL", name: null, name_translations: { en: "Japan Airlines" } },
  { code: "JN", name: "Joon", name_translations: { en: "Joon" } },
  { code: "JP", name: null, name_translations: { en: "Adria Airways" } },
  { code: "JQ", name: null, name_translations: { en: "Jetstar" } },
  { code: "JR", name: null, name_translations: { en: "Joy Air" } },
  { code: "JT", name: null, name_translations: { en: "Lion Air" } },
  { code: "JU", name: null, name_translations: { en: "Air Serbia" } },
  { code: "JV", name: null, name_translations: { en: "Bearskin Airlines" } },
  { code: "K2", name: null, name_translations: { en: "Eurolot" } },
  {
    code: "K5",
    name: "SeaPort Airlines",
    name_translations: { en: "SeaPort Airlines" }
  },
  { code: "K6", name: null, name_translations: { en: "Cambodia Angkor Air" } },
  { code: "KA", name: null, name_translations: { en: "Cathay Dragon" } },
  { code: "KB", name: null, name_translations: { en: "Druk Air" } },
  {
    code: "KC",
    name: "Эйр Астана (Air Astana)",
    name_translations: { en: "Air Astana" }
  },
  { code: "KE", name: null, name_translations: { en: "Korean Air" } },
  { code: "KF", name: null, name_translations: { en: "Blue1" } },
  { code: "KH", name: null, name_translations: { en: "Kyrgyz Air" } },
  {
    code: "KK",
    name: null,
    name_translations: { en: "Atlas Global Airlines" }
  },
  { code: "KL", name: null, name_translations: { en: "KLM" } },
  { code: "KM", name: null, name_translations: { en: "Air Malta" } },
  {
    code: "KN",
    name: null,
    name_translations: { en: "China United Airlines" }
  },
  {
    code: "KO",
    name: "Комиавиатранс",
    name_translations: { en: "Komiaviatrans" }
  },
  { code: "KQ", name: null, name_translations: { en: "Kenya Airways" } },
  { code: "KR", name: null, name_translations: { en: "Air Bishkek" } },
  { code: "KS", name: null, name_translations: { en: "Penair" } },
  { code: "KU", name: null, name_translations: { en: "Kuwait Airways" } },
  { code: "KX", name: null, name_translations: { en: "Cayman Airways" } },
  { code: "KY", name: null, name_translations: { en: "Kunming Airlines" } },
  {
    code: "L6",
    name: null,
    name_translations: { en: "Mauritania Airlines International" }
  },
  { code: "L9", name: null, name_translations: { en: "Belle Air Europe" } },
  {
    code: "LA",
    name: "LAN Airlines",
    name_translations: { en: "LAN Airlines" }
  },
  { code: "LG", name: null, name_translations: { en: "Luxair" } },
  { code: "LH", name: null, name_translations: { en: "Lufthansa" } },
  { code: "LI", name: null, name_translations: { en: "Liat" } },
  { code: "LJ", name: null, name_translations: { en: "Jin Air" } },
  { code: "LN", name: null, name_translations: { en: "Libyan Airlines" } },
  { code: "LO", name: null, name_translations: { en: "LOT Polish Airlines" } },
  {
    code: "LR",
    name: "Avianca Costa Rica",
    name_translations: { en: "Avianca Costa Rica" }
  },
  { code: "LS", name: null, name_translations: { en: "Jet2.com" } },
  { code: "LW", name: null, name_translations: { en: "Pacific Wings" } },
  {
    code: "LX",
    name: null,
    name_translations: { en: "Swiss International Air Lines" }
  },
  {
    code: "LY",
    name: null,
    name_translations: { en: "El Al Israel Airlines" }
  },
  { code: "LZ", name: null, name_translations: { en: "Belle Air" } },
  { code: "M5", name: null, name_translations: { en: "Kenmore Air" } },
  { code: "M7", name: null, name_translations: { en: "Marsland Aviation" } },
  { code: "M9", name: null, name_translations: { en: "Motor Sich Airlines" } },
  { code: "MD", name: null, name_translations: { en: "Air Madagascar" } },
  { code: "ME", name: null, name_translations: { en: "Middle East Airlines" } },
  { code: "MF", name: null, name_translations: { en: "Xiamen Airlines" } },
  { code: "MH", name: null, name_translations: { en: "Malaysia Airlines" } },
  { code: "MI", name: null, name_translations: { en: "Silkair" } },
  { code: "MJ", name: null, name_translations: { en: "MyWay Airlines" } },
  { code: "MK", name: null, name_translations: { en: "Air Mauritius" } },
  { code: "ML", name: null, name_translations: { en: "Air Mediterranee" } },
  { code: "MM", name: null, name_translations: { en: "Peach" } },
  { code: "MN", name: null, name_translations: { en: "Comair" } },
  {
    code: "MO",
    name: null,
    name_translations: { en: "Calm Air International" }
  },
  { code: "MS", name: "EgyptAir", name_translations: { en: "EgyptAir" } },
  {
    code: "MU",
    name: null,
    name_translations: { en: "China Eastern Airlines" }
  },
  { code: "MW", name: null, name_translations: { en: "Mokulele Airlines" } },
  { code: "MY", name: null, name_translations: { en: "Maya Island Air" } },
  {
    code: "MZ",
    name: null,
    name_translations: { en: "Merpati Nusantara Airlines" }
  },
  {
    code: "N4",
    name: "Северный Ветер (Nordwind Airlines)",
    name_translations: { en: "Nordwind Airlines" }
  },
  { code: "ND", name: null, name_translations: { en: "Sky Wings Airlines" } },
  { code: "NF", name: null, name_translations: { en: "Air Vanuatu" } },
  {
    code: "NG",
    name: "Aero Contractors",
    name_translations: { en: "Aero Contractors" }
  },
  { code: "NH", name: null, name_translations: { en: "All Nippon Airways" } },
  { code: "NI", name: "Portugália", name_translations: { en: "Portugália" } },
  { code: "NK", name: null, name_translations: { en: "Spirit Airlines" } },
  { code: "NM", name: null, name_translations: { en: "Manx2" } },
  { code: "NN", name: "Вим-Авиа", name_translations: { en: "VIM Airlines" } },
  { code: "NQ", name: null, name_translations: { en: "Air Japan" } },
  { code: "NS", name: null, name_translations: { en: "Hebei Airlines" } },
  { code: "NT", name: null, name_translations: { en: "Binter Canarias" } },
  { code: "NU", name: null, name_translations: { en: "Japan Transocean Air" } },
  { code: "NW", name: null, name_translations: { en: "Northwest Airlines" } },
  { code: "NX", name: null, name_translations: { en: "Air Macau" } },
  { code: "NZ", name: null, name_translations: { en: "Air New Zealand" } },
  { code: "OA", name: "Olympic Air", name_translations: { en: "Olympic Air" } },
  {
    code: "OG",
    name: "Air Freight NZ",
    name_translations: { en: "Air Freight NZ" }
  },
  {
    code: "OK",
    name: "Czech Airlines",
    name_translations: { en: "Czech Airlines" }
  },
  {
    code: "OL",
    name: "Polynesian Airlines",
    name_translations: { en: "Polynesian Airlines" }
  },
  {
    code: "OM",
    name: null,
    name_translations: { en: "MIAT Mongolian Airlines" }
  },
  {
    code: "OR",
    name: "TUI Airlines Netherlands",
    name_translations: { en: "TUI Airlines Netherlands" }
  },
  { code: "OS", name: null, name_translations: { en: "Austrian Airlines" } },
  {
    code: "OT",
    name: null,
    name_translations: { en: "Aeropelican Air Services" }
  },
  { code: "OU", name: null, name_translations: { en: "Croatia Airlines" } },
  { code: "OV", name: null, name_translations: { en: "Estonian Air" } },
  { code: "OY", name: null, name_translations: { en: "Andes Lineas Aereas" } },
  { code: "OZ", name: null, name_translations: { en: "Asiana Airlines" } },
  { code: "P0", name: null, name_translations: { en: "Proflight Zambia" } },
  {
    code: "P3",
    name: null,
    name_translations: { en: "Passaredo Linhas Aereas" }
  },
  { code: "P5", name: null, name_translations: { en: "Aerorepublica" } },
  { code: "PB", name: null, name_translations: { en: "Provincial Airlines" } },
  { code: "PC", name: null, name_translations: { en: "Pegasus Airlines" } },
  { code: "PD", name: null, name_translations: { en: "Porter Airlines" } },
  { code: "PE", name: null, name_translations: { en: "People's Viennaline" } },
  { code: "PG", name: null, name_translations: { en: "Bangkok Airways" } },
  { code: "PJ", name: null, name_translations: { en: "Air Saint Pierre" } },
  {
    code: "PK",
    name: null,
    name_translations: { en: "Pakistan International Airlines" }
  },
  { code: "PN", name: null, name_translations: { en: "China West Air" } },
  { code: "PR", name: null, name_translations: { en: "Philippine Airlines" } },
  {
    code: "PS",
    name: "МАУ (Украинские Авиалинии)",
    name_translations: { en: "UIA" }
  },
  { code: "PW", name: null, name_translations: { en: "Precision Air" } },
  { code: "PX", name: null, name_translations: { en: "Air Niugini" } },
  { code: "PY", name: null, name_translations: { en: "Surinam Airways" } },
  {
    code: "PZ",
    name: "LATAM Airlines",
    name_translations: { en: "LATAM Airlines" }
  },
  { code: "Q8", name: null, name_translations: { en: "Trans Air Congo" } },
  { code: "QC", name: null, name_translations: { en: "Camair-Co" } },
  { code: "QF", name: null, name_translations: { en: "Qantas" } },
  { code: "QG", name: null, name_translations: { en: "Citilink Airlines" } },
  { code: "QH", name: null, name_translations: { en: "Air Kyrgyzstan" } },
  { code: "QM", name: "Monacair", name_translations: { en: "Monacair" } },
  { code: "QR", name: null, name_translations: { en: "Qatar Airways" } },
  { code: "QS", name: null, name_translations: { en: "SmartWings" } },
  {
    code: "QU",
    name: "UTair Украина",
    name_translations: { en: "UTair Ukraine" }
  },
  { code: "QV", name: null, name_translations: { en: "Lao Airlines" } },
  { code: "QX", name: null, name_translations: { en: "Horizon Air" } },
  { code: "QZ", name: null, name_translations: { en: "Indonesia AirAsia" } },
  {
    code: "R2",
    name: "Оренбургские авиалинии",
    name_translations: { en: "Orenair" }
  },
  { code: "R3", name: "Якутия", name_translations: { en: "Yakutia Airlines" } },
  { code: "R7", name: null, name_translations: { en: "Aserca Airlines" } },
  { code: "RA", name: null, name_translations: { en: "Royal Nepal Airlines" } },
  { code: "RB", name: null, name_translations: { en: "Syrian Arab Airlines" } },
  { code: "RC", name: null, name_translations: { en: "Atlantic Airways" } },
  { code: "RE", name: "Stobart Air", name_translations: { en: "Stobart Air" } },
  { code: "RG", name: null, name_translations: { en: "Rotana Jet" } },
  { code: "RI", name: null, name_translations: { en: "Tigerair Mandala" } },
  { code: "RJ", name: null, name_translations: { en: "Royal Jordanian" } },
  { code: "RL", name: null, name_translations: { en: "Royal Flight" } },
  { code: "RO", name: null, name_translations: { en: "Tarom" } },
  { code: "RT", name: "ЮВТ Аэро", name_translations: { en: "UVT Aero" } },
  { code: "S2", name: null, name_translations: { en: "Jet Lite" } },
  {
    code: "S3",
    name: null,
    name_translations: { en: "Santa Barbara Airlines" }
  },
  { code: "S4", name: "SATA", name_translations: { en: "SATA" } },
  { code: "S5", name: null, name_translations: { en: "Shuttle America" } },
  { code: "S7", name: "S7 Airlines", name_translations: { en: "S7 Airlines" } },
  {
    code: "SA",
    name: null,
    name_translations: { en: "South African Airways" }
  },
  { code: "SB", name: null, name_translations: { en: "Aircalin" } },
  { code: "SC", name: null, name_translations: { en: "Shandong Airlines" } },
  { code: "SD", name: null, name_translations: { en: "Sudan Airways" } },
  { code: "SE", name: null, name_translations: { en: "XL Airways France" } },
  { code: "SG", name: null, name_translations: { en: "SpiceJet" } },
  { code: "SI", name: null, name_translations: { en: "Blue Islands" } },
  {
    code: "SK",
    name: null,
    name_translations: { en: "Scandinavian Airlines" }
  },
  { code: "SN", name: null, name_translations: { en: "Brussels Airlines" } },
  { code: "SP", name: null, name_translations: { en: "SATA Air Acores" } },
  { code: "SQ", name: null, name_translations: { en: "Singapore Airlines" } },
  {
    code: "SS",
    name: null,
    name_translations: { en: "Corsair International" }
  },
  { code: "SU", name: "Аэрофлот", name_translations: { en: "Aeroflot" } },
  { code: "SV", name: null, name_translations: { en: "Saudia" } },
  { code: "SW", name: null, name_translations: { en: "Air Namibia" } },
  {
    code: "SX",
    name: "SkyWork Airlines",
    name_translations: { en: "SkyWork Airlines" }
  },
  { code: "SY", name: null, name_translations: { en: "Sun Country Airlines" } },
  { code: "T3", name: null, name_translations: { en: "Eastern Airways" } },
  {
    code: "T4",
    name: "TRIP Linhas Aéreas",
    name_translations: { en: "TRIP Linhas Aéreas" }
  },
  {
    code: "T5",
    name: "Туркменские авиалинии",
    name_translations: { en: "Turkmenistan Airlines" }
  },
  { code: "T7", name: null, name_translations: { en: "Twin Jet" } },
  { code: "TA", name: null, name_translations: { en: "TACA Airlines" } },
  {
    code: "TD",
    name: null,
    name_translations: { en: "Atlantis European Airways" }
  },
  { code: "TF", name: "BRA", name_translations: { en: "BRA" } },
  { code: "TG", name: null, name_translations: { en: "Thai Airways" } },
  { code: "TJ", name: null, name_translations: { en: "Tradewind Aviation" } },
  { code: "TK", name: null, name_translations: { en: "Turkish Airlines" } },
  { code: "TL", name: null, name_translations: { en: "Airnorth" } },
  {
    code: "TM",
    name: null,
    name_translations: { en: "LAM Mozambique Airlines" }
  },
  { code: "TN", name: null, name_translations: { en: "Air Tahiti Nui" } },
  { code: "TO", name: null, name_translations: { en: "Transavia" } },
  { code: "TP", name: null, name_translations: { en: "TAP Portugal" } },
  { code: "TR", name: null, name_translations: { en: "Scoot" } },
  { code: "TS", name: null, name_translations: { en: "Air Transat" } },
  { code: "TT", name: null, name_translations: { en: "Scoot Australia" } },
  { code: "TU", name: null, name_translations: { en: "Tunisair" } },
  { code: "TV", name: null, name_translations: { en: "Tibet Airlines" } },
  { code: "TX", name: null, name_translations: { en: "Air Caraibes" } },
  { code: "TZ", name: null, name_translations: { en: "Scoot" } },
  { code: "U2", name: null, name_translations: { en: "EasyJet" } },
  {
    code: "U6",
    name: "Уральские авиалинии",
    name_translations: { en: "Ural Airlines" }
  },
  { code: "U7", name: null, name_translations: { en: "Air Uganda" } },
  { code: "U8", name: "Tus Airways", name_translations: { en: "Tus Airways" } },
  {
    code: "U9",
    name: "Татарстан",
    name_translations: { en: "Tatarstan Airlines" }
  },
  { code: "UA", name: null, name_translations: { en: "United Airlines" } },
  { code: "UD", name: null, name_translations: { en: "Hex Air" } },
  { code: "UG", name: null, name_translations: { en: "Tunisair Express" } },
  { code: "UL", name: null, name_translations: { en: "Srilankan Airlines" } },
  { code: "UM", name: null, name_translations: { en: "Air Zimbabwe" } },
  {
    code: "UN",
    name: "Трансаэро",
    name_translations: { en: "Transaero Airlines" }
  },
  {
    code: "UO",
    name: null,
    name_translations: { en: "Hong Kong Express Airways" }
  },
  { code: "UP", name: null, name_translations: { en: "Bahamasair" } },
  {
    code: "UR",
    name: "Ютэир-Экспресс",
    name_translations: { en: "UTair Express" }
  },
  { code: "US", name: null, name_translations: { en: "US Airways" } },
  { code: "UT", name: "Utair", name_translations: { en: "Utair" } },
  { code: "UU", name: null, name_translations: { en: "Air Austral" } },
  { code: "UX", name: null, name_translations: { en: "Air Europa" } },
  { code: "V0", name: null, name_translations: { en: "Conviasa" } },
  { code: "V2", name: null, name_translations: { en: "Vision Airlines" } },
  { code: "V3", name: null, name_translations: { en: "Carpatair" } },
  { code: "V4", name: null, name_translations: { en: "Vieques Air Link" } },
  {
    code: "V5",
    name: "Aerovías DAP",
    name_translations: { en: "Aerovías DAP" }
  },
  { code: "V7", name: null, name_translations: { en: "Volotea" } },
  { code: "VA", name: null, name_translations: { en: "Virgin Australia" } },
  {
    code: "VE",
    name: "C.A.I. Second",
    name_translations: { en: "C.A.I. Second" }
  },
  { code: "VF", name: "Valuair", name_translations: { en: "Valuair" } },
  { code: "VG", name: null, name_translations: { en: "VLM Airlines" } },
  { code: "VN", name: null, name_translations: { en: "Vietnam Airlines" } },
  { code: "VO", name: null, name_translations: { en: "Tyrolean Airways" } },
  {
    code: "VR",
    name: null,
    name_translations: { en: "TACV Cabo Verde Airlines" }
  },
  { code: "VS", name: null, name_translations: { en: "Virgin Atlantic" } },
  { code: "VT", name: null, name_translations: { en: "Air Tahiti" } },
  { code: "VV", name: "Viva Air", name_translations: { en: "Viva Air" } },
  { code: "VW", name: null, name_translations: { en: "Aeromar" } },
  { code: "VX", name: null, name_translations: { en: "Virgin America " } },
  { code: "VY", name: null, name_translations: { en: "Vueling" } },
  { code: "W2", name: null, name_translations: { en: "FlexFlight" } },
  { code: "W3", name: null, name_translations: { en: "Arik Air" } },
  { code: "W6", name: null, name_translations: { en: "Wizz Air" } },
  { code: "W9", name: null, name_translations: { en: "Air Bagan" } },
  { code: "WA", name: null, name_translations: { en: "KLM Cityhopper" } },
  { code: "WB", name: "RwandAir", name_translations: { en: "RwandAir" } },
  { code: "WF", name: null, name_translations: { en: "Wideroe" } },
  { code: "WH", name: null, name_translations: { en: "Webjet Linhas Aereas" } },
  { code: "WK", name: null, name_translations: { en: "Edelweiss Air" } },
  { code: "WM", name: null, name_translations: { en: "Winair" } },
  { code: "WN", name: null, name_translations: { en: "Southwest Airlines" } },
  { code: "WP", name: null, name_translations: { en: "Island Air" } },
  { code: "WS", name: null, name_translations: { en: "Westjet" } },
  { code: "WU", name: null, name_translations: { en: "Wizz Air Ukraine" } },
  { code: "WX", name: null, name_translations: { en: "Cityjet" } },
  { code: "WY", name: null, name_translations: { en: "Oman Air" } },
  { code: "X3", name: null, name_translations: { en: "TUI fly" } },
  { code: "X9", name: null, name_translations: { en: "WOW air" } },
  { code: "XC", name: null, name_translations: { en: "KD Air" } },
  {
    code: "XF",
    name: "Владивосток Авиа",
    name_translations: { en: "Vladivostok Air" }
  },
  { code: "XK", name: null, name_translations: { en: "Air Corsica" } },
  {
    code: "XL",
    name: "LATAM Airlines Ecuador",
    name_translations: { en: "LATAM Airlines Ecuador" }
  },
  {
    code: "XM",
    name: "C.A.I. First",
    name_translations: { en: "C.A.I. First" }
  },
  { code: "XQ", name: null, name_translations: { en: "Sun Express" } },
  { code: "XR", name: null, name_translations: { en: "Virgin Australia" } },
  { code: "XV", name: null, name_translations: { en: "BVI Airways" } },
  { code: "XY", name: null, name_translations: { en: "Nas Air" } },
  { code: "Y4", name: null, name_translations: { en: "Volaris" } },
  { code: "Y7", name: "NordStar", name_translations: { en: "NordStar" } },
  { code: "YC", name: "Ямал", name_translations: { en: "Yamal Airlines" } },
  { code: "YG", name: null, name_translations: { en: "South Airlines" } },
  {
    code: "YK",
    name: "Avia Traffic Company",
    name_translations: { en: "Avia Traffic Company" }
  },
  { code: "YM", name: null, name_translations: { en: "Montenegro Airlines" } },
  { code: "YN", name: null, name_translations: { en: "Air Creebec" } },
  { code: "YO", name: null, name_translations: { en: "Heli Air Monaco" } },
  { code: "YQ", name: "Полет", name_translations: { en: "Polet Airlines" } },
  { code: "YS", name: "HOP!", name_translations: { en: "HOP!" } },
  { code: "YV", name: null, name_translations: { en: "Mesa Airlines" } },
  { code: "YW", name: null, name_translations: { en: "Air Nostrum" } },
  { code: "Z6", name: "Днеправиа", name_translations: { en: "Dniproavia" } },
  { code: "Z8", name: null, name_translations: { en: "Amaszonas" } },
  { code: "ZB", name: null, name_translations: { en: "Monarch Airlines" } },
  { code: "ZE", name: null, name_translations: { en: "Eastar Jet" } },
  { code: "ZH", name: null, name_translations: { en: "Shenzhen Airlines" } },
  { code: "ZI", name: null, name_translations: { en: "Aigle Azur" } },
  { code: "ZK", name: null, name_translations: { en: "Great Lakes Airlines" } },
  { code: "ZL", name: null, name_translations: { en: "Regional Express" } },
  { code: "ZN", name: null, name_translations: { en: "NAYSA" } },
  { code: "ZU", name: "SUN-AIR", name_translations: { en: "SUN-AIR" } },
  { code: "ZY", name: null, name_translations: { en: "Sky Airlines" } },
  {
    code: "ZG",
    name: "Грозный Авиа",
    name_translations: { en: "Groznyy Avia" }
  },
  { code: "IO", name: null, name_translations: { en: "IrAero" } },
  { code: "KP", name: null, name_translations: { en: "ASKY Airlines" } },
  {
    code: "Z2",
    name: "AirAsia Zest",
    name_translations: { en: "AirAsia Zest" }
  },
  { code: "ST", name: null, name_translations: { en: "Germania" } },
  { code: "WG", name: null, name_translations: { en: "Sunwing Airlines" } },
  {
    code: "WZ",
    name: "Ред Вингс",
    name_translations: { en: "Red Wings Airlines" }
  },
  {
    code: "3G",
    name: "Gambia Bird Airlines",
    name_translations: { en: "Gambia Bird Airlines" }
  },
  { code: "3M", name: null, name_translations: { en: "Silver Airways" } },
  {
    code: "YX",
    name: "Republic Airlines",
    name_translations: { en: "Republic Airlines" }
  },
  { code: "BM", name: null, name_translations: { en: "BMI Regional" } },
  { code: "4Z", name: null, name_translations: { en: "Airlink" } },
  {
    code: "HK",
    name: "Skippers Aviation",
    name_translations: { en: "Skippers Aviation" }
  },
  { code: "5Q", name: null, name_translations: { en: "BQB Lineas Aereas" } },
  {
    code: "LC",
    name: "Equatorial Congo Airlines",
    name_translations: { en: "Equatorial Congo Airlines" }
  },
  { code: "MR", name: null, name_translations: { en: "Hunnu Air" } },
  { code: "AN", name: null, name_translations: { en: "HOP!" } },
  {
    code: "BY",
    name: "Thomson Airways",
    name_translations: { en: "Thomson Airways" }
  },
  { code: "BZ", name: null, name_translations: { en: "Blue Bird Airways" } },
  {
    code: "GK",
    name: "Jetstar Japan",
    name_translations: { en: "Jetstar Japan" }
  },
  {
    code: "GQ",
    name: "Sky Express (Скай Экспресс)",
    name_translations: { en: "Sky Express" }
  },
  { code: "ID", name: null, name_translations: { en: "Batik Air" } },
  { code: "IW", name: "Wings Air", name_translations: { en: "Wings Air" } },
  {
    code: "JC",
    name: "Japan Air Commuter",
    name_translations: { en: "Japan Air Commuter" }
  },
  { code: "QA", name: null, name_translations: { en: "Cimber" } },
  { code: "WI", name: null, name_translations: { en: "White Airways" } },
  {
    code: "XG",
    name: "SunExpress Deutschland",
    name_translations: { en: "SunExpress Deutschland" }
  },
  { code: "Z9", name: null, name_translations: { en: "Bek Air" } },
  {
    code: "XZ",
    name: null,
    name_translations: { en: "South African Express" }
  },
  { code: "ZC", name: null, name_translations: { en: "Korongo Airlines" } },
  { code: "8I", name: "Insel Air", name_translations: { en: "Insel Air" } },
  { code: "X1", name: null, name_translations: { en: "Fortune" } },
  {
    code: "OX",
    name: "Orient Thai Airlines",
    name_translations: { en: "Orient Thai Airlines" }
  },
  { code: "K8", name: null, name_translations: { en: "Kan Air" } },
  { code: "DD", name: null, name_translations: { en: "Nok Air" } },
  { code: "HPY", name: null, name_translations: { en: "Happy Air" } },
  {
    code: "DU",
    name: "Norwegian Long Haul",
    name_translations: { en: "Norwegian Long Haul" }
  },
  {
    code: "SL",
    name: "Thai Lion Air",
    name_translations: { en: "Thai Lion Air" }
  },
  {
    code: "SJ",
    name: "Sriwijaya Air",
    name_translations: { en: "Sriwijaya Air" }
  },
  { code: "QN", name: "Air Armenia", name_translations: { en: "Air Armenia" } },
  {
    code: "GY",
    name: "Colorful Guizhou Airlines",
    name_translations: { en: "Colorful Guizhou Airlines" }
  },
  {
    code: "2G",
    name: "Angara Airlines",
    name_translations: { en: "Angara Airlines" }
  },
  {
    code: "IK",
    name: "Air Kiribati Limited",
    name_translations: { en: "Air Kiribati Limited" }
  },
  { code: "QD", name: "Добролет", name_translations: { en: "Dobrolet" } },
  { code: "XJ", name: null, name_translations: { en: "Thai AirAsia X" } },
  { code: "SZ", name: null, name_translations: { en: "Somon Air" } },
  { code: "DP", name: "Победа", name_translations: { en: "Pobeda" } },
  {
    code: "AG",
    name: "Aruba Airlines",
    name_translations: { en: "Aruba Airlines" }
  },
  {
    code: "AJ",
    name: "Aztec Airways",
    name_translations: { en: "Aztec Airways" }
  },
  { code: "AL", name: null, name_translations: { en: "Air Leisure" } },
  {
    code: "AO",
    name: "Australian Airlines",
    name_translations: { en: "Australian Airlines" }
  },
  { code: "AQ", name: "9 Air", name_translations: { en: "9 Air" } },
  {
    code: "AW",
    name: null,
    name_translations: { en: "Africa World Airlines" }
  },
  {
    code: "AX",
    name: "Trans States Airlines",
    name_translations: { en: "Trans States Airlines" }
  },
  { code: "A7", name: null, name_translations: { en: "Air Niamey" } },
  {
    code: "A8",
    name: null,
    name_translations: { en: "Aerolink Uganda Limited" }
  },
  {
    code: "BC",
    name: "Skymark Airlines",
    name_translations: { en: "Skymark Airlines" }
  },
  { code: "BF", name: "French Blue", name_translations: { en: "French Blue" } },
  { code: "BO", name: "BB Airways", name_translations: { en: "BB Airways" } },
  {
    code: "BU",
    name: null,
    name_translations: { en: "Compagnie Africaine d'Aviation" }
  },
  {
    code: "B0",
    name: "La Compagnie",
    name_translations: { en: "La Compagnie" }
  },
  {
    code: "B1",
    name: "TAB - Transportes Aéreos Bolivianos",
    name_translations: { en: "TAB - Transportes Aéreos Bolivianos" }
  },
  {
    code: "B3",
    name: "Bhutan Airlines",
    name_translations: { en: "Bhutan Airlines" }
  },
  { code: "B4", name: "ZanAir", name_translations: { en: "ZanAir" } },
  {
    code: "B9",
    name: "Iran Air Tours",
    name_translations: { en: "Iran Air Tours" }
  },
  {
    code: "CB",
    name: null,
    name_translations: { en: "Caribbean Air Export Import Inc." }
  },
  { code: "CC", name: "CM Airlines", name_translations: { en: "CM Airlines" } },
  {
    code: "CD",
    name: "Corendon Dutch Airlines",
    name_translations: { en: "Corendon Dutch Airlines" }
  },
  {
    code: "CF",
    name: null,
    name_translations: { en: "China Postal Airlines Ltd." }
  },
  {
    code: "CH",
    name: "Bemidji Airlines",
    name_translations: { en: "Bemidji Airlines" }
  },
  {
    code: "CK",
    name: "China Cargo Airlines",
    name_translations: { en: "China Cargo Airlines" }
  },
  {
    code: "CP",
    name: "Compass Airlines",
    name_translations: { en: "Compass Airlines" }
  },
  {
    code: "CQ",
    name: "Czech Connect Airlines",
    name_translations: { en: "Czech Connect Airlines" }
  },
  { code: "CR", name: "OAG", name_translations: { en: "OAG" } },
  {
    code: "CS",
    name: null,
    name_translations: { en: "Continental Micronesia, Inc." }
  },
  { code: "CV", name: "Cargolux", name_translations: { en: "Cargolux" } },
  {
    code: "C1",
    name: "Tectimes Sudamerica",
    name_translations: { en: "Tectimes Sudamerica" }
  },
  {
    code: "C2",
    name: "CEIBA Intercontinental",
    name_translations: { en: "CEIBA Intercontinental" }
  },
  { code: "C5", name: "CommutAir", name_translations: { en: "CommutAir" } },
  { code: "C6", name: "CanJet", name_translations: { en: "CanJet" } },
  {
    code: "C7",
    name: "Cinnamon Air",
    name_translations: { en: "Cinnamon Air" }
  },
  {
    code: "C8",
    name: "Cronos Airlines",
    name_translations: { en: "Cronos Airlines" }
  },
  { code: "DF", name: "Condor", name_translations: { en: "Condor" } },
  {
    code: "DH",
    name: "Douniah Airlines",
    name_translations: { en: "Douniah Airlines" }
  },
  {
    code: "DI",
    name: "Norwegian Air",
    name_translations: { en: "Norwegian Air" }
  },
  {
    code: "DK",
    name: "Thomas Cook Airlines Scandinavia",
    name_translations: { en: "Thomas Cook Airlines Scandinavia" }
  },
  { code: "DM", name: "Asian Air", name_translations: { en: "Asian Air" } },
  {
    code: "DO",
    name: "Discovery Airways",
    name_translations: { en: "Discovery Airways" }
  },
  {
    code: "DQ",
    name: "Delta Connection",
    name_translations: { en: "Delta Connection" }
  },
  {
    code: "DR",
    name: "Ruili Airlines",
    name_translations: { en: "Ruili Airlines" }
  },
  {
    code: "DS",
    name: "easyJet Switzerland",
    name_translations: { en: "easyJet Switzerland" }
  },
  {
    code: "DW",
    name: "Aero-Charter Ukraine",
    name_translations: { en: "Aero-Charter Ukraine" }
  },
  {
    code: "DZ",
    name: "Donghai Airlines",
    name_translations: { en: "Donghai Airlines" }
  },
  { code: "D0", name: null, name_translations: { en: "DHL Air Limited" } },
  { code: "D3", name: null, name_translations: { en: "Daallo Airlines" } },
  { code: "D4", name: "Alidaunia", name_translations: { en: "Alidaunia" } },
  {
    code: "D5",
    name: null,
    name_translations: { en: "DHL Aero Expreso S.A." }
  },
  {
    code: "D8",
    name: "Norwegian Air International",
    name_translations: { en: "Norwegian Air International" }
  },
  {
    code: "EA",
    name: "East Horizon Airlines",
    name_translations: { en: "East Horizon Airlines" }
  },
  { code: "EB", name: "Wamos Air", name_translations: { en: "Wamos Air" } },
  { code: "ED", name: "AirExplore", name_translations: { en: "AirExplore" } },
  {
    code: "EF",
    name: "Fly CamInter",
    name_translations: { en: "Fly CamInter" }
  },
  { code: "EH", name: "ANA Wings", name_translations: { en: "ANA Wings" } },
  {
    code: "EJ",
    name: "New England Airlines",
    name_translations: { en: "New England Airlines" }
  },
  { code: "EL", name: "Ellinair", name_translations: { en: "Ellinair" } },
  { code: "EM", name: null, name_translations: { en: "Empire Airlines" } },
  { code: "EP", name: null, name_translations: { en: "Iran Aseman Airlines" } },
  { code: "ER", name: "Air East", name_translations: { en: "Air East" } },
  {
    code: "ES",
    name: null,
    name_translations: { en: "DHL Aviation EEMEA B.S.C.(c)" }
  },
  { code: "EV", name: "ExpressJet", name_translations: { en: "ExpressJet" } },
  {
    code: "EX",
    name: null,
    name_translations: { en: "Thai Express Air Co. Ltd" }
  },
  {
    code: "E2",
    name: "Eagle Atlantic Airlines",
    name_translations: { en: "Eagle Atlantic Airlines" }
  },
  { code: "E5", name: null, name_translations: { en: "Air Arabia Egypt" } },
  {
    code: "E6",
    name: "Bringer Air Cargo",
    name_translations: { en: "Bringer Air Cargo" }
  },
  { code: "E7", name: null, name_translations: { en: "Equaflight Service" } },
  {
    code: "E8",
    name: "City Airways",
    name_translations: { en: "City Airways" }
  },
  {
    code: "E9",
    name: "Evelop Airlines",
    name_translations: { en: "Evelop Airlines" }
  },
  { code: "FA", name: "Safair", name_translations: { en: "Safair" } },
  {
    code: "FE",
    name: "Far Eastern Air Transport",
    name_translations: { en: "Far Eastern Air Transport" }
  },
  { code: "FF", name: null, name_translations: { en: "Airshop B.V." } },
  {
    code: "FG",
    name: null,
    name_translations: { en: "Ariana Afghan Airlines" }
  },
  { code: "FH", name: null, name_translations: { en: "Freebird Airlines" } },
  { code: "FN", name: "fastjet", name_translations: { en: "fastjet" } },
  { code: "FO", name: null, name_translations: { en: "Felix Airways" } },
  {
    code: "FU",
    name: "Fuzhou Airlines",
    name_translations: { en: "Fuzhou Airlines" }
  },
  {
    code: "FW",
    name: "Ibex Airlines",
    name_translations: { en: "Ibex Airlines" }
  },
  { code: "FX", name: null, name_translations: { en: "FedEx" } },
  {
    code: "F1",
    name: "Farelogix Qatar Airways",
    name_translations: { en: "Farelogix Qatar Airways" }
  },
  {
    code: "F2",
    name: "Safarilink Aviation",
    name_translations: { en: "Safarilink Aviation" }
  },
  {
    code: "F3",
    name: "Songbird Airways",
    name_translations: { en: "Flyadeal" }
  },
  {
    code: "F4",
    name: "Air Flamenco",
    name_translations: { en: "Air Flamenco" }
  },
  { code: "F8", name: null, name_translations: { en: "Flair Airlines Ltd." } },
  { code: "GB", name: null, name_translations: { en: "ABX Air, Inc." } },
  {
    code: "GC",
    name: "Gambia International Airlines",
    name_translations: { en: "Gambia International Airlines" }
  },
  { code: "GG", name: null, name_translations: { en: "Sky Lease I, Inc." } },
  { code: "GI", name: "Itek Air", name_translations: { en: "Itek Air" } },
  { code: "GJ", name: "Loong Air", name_translations: { en: "Loong Air" } },
  {
    code: "GM",
    name: "Germania Flug",
    name_translations: { en: "Germania Flug" }
  },
  { code: "GO", name: null, name_translations: { en: "ULS Airlines Cargo" } },
  {
    code: "GT",
    name: "Vista Georgia",
    name_translations: { en: "Vista Georgia" }
  },
  { code: "GU", name: "Aviateca", name_translations: { en: "Aviateca" } },
  { code: "GV", name: null, name_translations: { en: "Grant Aviation, Inc." } },
  { code: "GZ", name: null, name_translations: { en: "Air Rarotonga" } },
  { code: "G2", name: "Jet Express", name_translations: { en: "Jet Express" } },
  {
    code: "G5",
    name: null,
    name_translations: { en: "China Express Airlines" }
  },
  {
    code: "G6",
    name: null,
    name_translations: { en: "Ghadames Air Transport" }
  },
  {
    code: "G7",
    name: "GoJet Airlines",
    name_translations: { en: "GoJet Airlines" }
  },
  {
    code: "HB",
    name: "Asia Atlantic Airlines",
    name_translations: { en: "Asia Atlantic Airlines" }
  },
  { code: "HD", name: "Air Do", name_translations: { en: "Air Do" } },
  {
    code: "HE",
    name: "LGW Luftfahrtgesellschaft Walter",
    name_translations: { en: "LGW Luftfahrtgesellschaft Walter" }
  },
  { code: "HH", name: null, name_translations: { en: "Taban Airlines" } },
  {
    code: "HI",
    name: "Papillon Airways",
    name_translations: { en: "Papillon Airways" }
  },
  { code: "HJ", name: "Hellas Jet", name_translations: { en: "Hellas Jet" } },
  {
    code: "HN",
    name: "Afghan Jet International",
    name_translations: { en: "Afghan Jet International" }
  },
  { code: "HP", name: null, name_translations: { en: "Amapola Flyg AB" } },
  {
    code: "HQ",
    name: "Thomas Cook Airlines Belgium",
    name_translations: { en: "Thomas Cook Airlines Belgium" }
  },
  {
    code: "HW",
    name: "North-Wright Airways",
    name_translations: { en: "North-Wright Airways" }
  },
  { code: "H1", name: null, name_translations: { en: "Hahn Air" } },
  { code: "H4", name: "Aero4M", name_translations: { en: "Aero4M" } },
  {
    code: "H6",
    name: "Bulgarian Air Charter",
    name_translations: { en: "Bulgarian Air Charter" }
  },
  {
    code: "H7",
    name: "Тарон-Авиа",
    name_translations: { en: "Taron Avia LLC" }
  },
  { code: "H8", name: null, name_translations: { en: "Hesa Airlines" } },
  { code: "IH", name: "Irtysh Air", name_translations: { en: "Irtysh Air" } },
  { code: "II", name: "IBC Airways", name_translations: { en: "IBC Airways" } },
  {
    code: "IJ",
    name: "Spring Airlines Japan",
    name_translations: { en: "Spring Airlines Japan" }
  },
  {
    code: "IL",
    name: null,
    name_translations: { en: "PT.Trigana Air Service" }
  },
  { code: "IM", name: null, name_translations: { en: "JSC Aircompany ATMA" } },
  { code: "IN", name: "NAM Air", name_translations: { en: "NAM Air" } },
  {
    code: "IP",
    name: null,
    name_translations: { en: "Apsara International Air" }
  },
  { code: "IS", name: null, name_translations: { en: "AIS Airlines B.V." } },
  { code: "I6", name: "Air Indus", name_translations: { en: "Air Indus" } },
  { code: "JB", name: "Helijet", name_translations: { en: "Helijet" } },
  {
    code: "JF",
    name: "Jet Asia Airways",
    name_translations: { en: "Jet Asia Airways" }
  },
  {
    code: "JG",
    name: "JETGO Australia",
    name_translations: { en: "JETGO Australia" }
  },
  {
    code: "JH",
    name: "Fuji Dream Airlines",
    name_translations: { en: "Fuji Dream Airlines" }
  },
  { code: "JI", name: null, name_translations: { en: "Meraj Air" } },
  { code: "JO", name: "Jet Time", name_translations: { en: "Jet Time" } },
  { code: "JS", name: null, name_translations: { en: "Air Koryo" } },
  { code: "JW", name: "Vanilla Air", name_translations: { en: "Vanilla Air" } },
  {
    code: "JY",
    name: "InterCaribbean Airways",
    name_translations: { en: "InterCaribbean Airways" }
  },
  {
    code: "JZ",
    name: "Jatayu Airlines",
    name_translations: { en: "Jatayu Airlines" }
  },
  { code: "J1", name: null, name_translations: { en: "One Jet, Inc." } },
  { code: "J4", name: null, name_translations: { en: "BADR AIRLINES" } },
  {
    code: "J5",
    name: "Alaska Seaplane",
    name_translations: { en: "Alaska Seaplane" }
  },
  { code: "J6", name: null, name_translations: { en: "Jet Ops" } },
  { code: "KD", name: null, name_translations: { en: "PT Kal Star Aviation" } },
  { code: "KG", name: "Aerogaviota", name_translations: { en: "Aerogaviota" } },
  { code: "KI", name: "KrasAvia", name_translations: { en: "KrasAvia" } },
  { code: "KJ", name: "Air Incheon", name_translations: { en: "Air Incheon" } },
  { code: "KT", name: "SiAvia", name_translations: { en: "SiAvia" } },
  {
    code: "KV",
    name: "Asian Express Airline",
    name_translations: { en: "Asian Express Airline" }
  },
  {
    code: "KW",
    name: "Kharkiv Airlines",
    name_translations: { en: "Kharkiv Airlines" }
  },
  {
    code: "KZ",
    name: null,
    name_translations: { en: "Nippon Cargo Airlines" }
  },
  { code: "K1", name: null, name_translations: { en: "Topas Co. Ltd." } },
  { code: "K3", name: "Taquan Air", name_translations: { en: "Taquan Air" } },
  { code: "K4", name: null, name_translations: { en: "ALS Ltd." } },
  { code: "K7", name: "Air KBZ", name_translations: { en: "Air KBZ" } },
  { code: "LB", name: "Bul Air", name_translations: { en: "Bul Air" } },
  {
    code: "LD",
    name: null,
    name_translations: { en: "AHK Air Hong Kong Limited" }
  },
  {
    code: "LE",
    name: null,
    name_translations: { en: "Laparkan Airways, Inc." }
  },
  { code: "LK", name: "Lao Skyway", name_translations: { en: "Lao Skyway" } },
  {
    code: "LL",
    name: null,
    name_translations: { en: "Miami Air International" }
  },
  { code: "LM", name: "Loganair", name_translations: { en: "Loganair" } },
  {
    code: "LT",
    name: "Air Lituanica",
    name_translations: { en: "Air Lituanica" }
  },
  { code: "LU", name: "LAN Express", name_translations: { en: "LAN Express" } },
  {
    code: "LV",
    name: "Mega Maldives",
    name_translations: { en: "Mega Maldives" }
  },
  { code: "L1", name: null, name_translations: { en: "E-Savtravel" } },
  {
    code: "L2",
    name: null,
    name_translations: { en: "Lynden Air Cargo, LLC" }
  },
  {
    code: "L3",
    name: "Lynx Aviation",
    name_translations: { en: "Lynx Aviation" }
  },
  {
    code: "L4",
    name: "Air Service Liege",
    name_translations: { en: "Air Service Liege" }
  },
  {
    code: "L7",
    name: null,
    name_translations: { en: "Linea Aerea Carguera de Colombia S.A." }
  },
  { code: "L8", name: null, name_translations: { en: "Afric Aviation" } },
  {
    code: "MB",
    name: "MNG Airlines",
    name_translations: { en: "MNG Airlines" }
  },
  { code: "MC", name: null, name_translations: { en: "Air Mobility Command" } },
  {
    code: "MG",
    name: null,
    name_translations: { en: "Miami Air Lease, Inc." }
  },
  { code: "MP", name: "Martinair", name_translations: { en: "Martinair" } },
  { code: "MQ", name: "Envoy Air", name_translations: { en: "Envoy Air" } },
  {
    code: "MT",
    name: "Thomas Cook Airlines",
    name_translations: { en: "Thomas Cook Airlines" }
  },
  {
    code: "MX",
    name: "Mexicana de Aviación",
    name_translations: { en: "Mexicana de Aviación" }
  },
  {
    code: "M2",
    name: "MHS Aviation",
    name_translations: { en: "MHS Aviation" }
  },
  {
    code: "M3",
    name: "North Flying",
    name_translations: { en: "North Flying" }
  },
  { code: "M4", name: "Mistral Air", name_translations: { en: "Mistral Air" } },
  {
    code: "M6",
    name: null,
    name_translations: { en: "Amerijet International Inc." }
  },
  { code: "M8", name: "SkyJet", name_translations: { en: "SkyJet" } },
  {
    code: "NA",
    name: "Nesma Airlines",
    name_translations: { en: "Nesma Airlines" }
  },
  {
    code: "NB",
    name: "Skypower Express Airways",
    name_translations: { en: "Skypower Express Airways" }
  },
  {
    code: "NC",
    name: "Cobham Aviation Services Australia",
    name_translations: { en: "Cobham Aviation Services Australia" }
  },
  { code: "NE", name: null, name_translations: { en: "Nesma Airlines" } },
  { code: "NJ", name: "Aero VIP", name_translations: { en: "Aero VIP" } },
  { code: "NL", name: "Shaheen Air", name_translations: { en: "Shaheen Air" } },
  { code: "NO", name: "Neos", name_translations: { en: "Neos" } },
  { code: "NP", name: null, name_translations: { en: "Nile Air" } },
  { code: "NY", name: "Air Iceland", name_translations: { en: "Air Iceland" } },
  {
    code: "N2",
    name: null,
    name_translations: { en: "Trans-Mediterranean Airways" }
  },
  {
    code: "N3",
    name: "Aerolíneas Mas",
    name_translations: { en: "Aerolíneas Mas" }
  },
  {
    code: "N5",
    name: "Nolinor Aviation",
    name_translations: { en: "Nolinor Aviation" }
  },
  {
    code: "N7",
    name: null,
    name_translations: { en: "Nordic Regional Airline" }
  },
  {
    code: "N8",
    name: "National Airlines",
    name_translations: { en: "National Airlines" }
  },
  {
    code: "N9",
    name: "Nova Airways",
    name_translations: { en: "Nova Airways" }
  },
  {
    code: "OB",
    name: "Boliviana de Aviación",
    name_translations: { en: "Boliviana de Aviación" }
  },
  {
    code: "OC",
    name: "Oriental Air Bridge",
    name_translations: { en: "Oriental Air Bridge" }
  },
  { code: "OD", name: "Malindo Air", name_translations: { en: "Malindo Air" } },
  { code: "OE", name: null, name_translations: { en: "Laudamotion" } },
  {
    code: "OI",
    name: "Hinterland Aviation",
    name_translations: { en: "Hinterland Aviation" }
  },
  { code: "OJ", name: null, name_translations: { en: "Fly Jamaica Airways" } },
  {
    code: "ON",
    name: "Nauru Airline",
    name_translations: { en: "Nauru Airline" }
  },
  {
    code: "OO",
    name: "SkyWest Airlines",
    name_translations: { en: "SkyWest Airlines" }
  },
  {
    code: "OQ",
    name: "Chongqing Airlines",
    name_translations: { en: "Chongqing Airlines" }
  },
  { code: "O3", name: null, name_translations: { en: "Orange Air, LLCN/A" } },
  { code: "O4", name: "Antrak Air", name_translations: { en: "Antrak Air" } },
  {
    code: "O6",
    name: "Avianca Brazil",
    name_translations: { en: "Avianca Brazil" }
  },
  { code: "O8", name: "Siam Air", name_translations: { en: "Siam Air" } },
  { code: "O9", name: null, name_translations: { en: "NOVA Airlines" } },
  { code: "PA", name: "airblue", name_translations: { en: "airblue" } },
  { code: "PF", name: "Primera Air", name_translations: { en: "Primera Air" } },
  {
    code: "PH",
    name: "Transavia Denmark",
    name_translations: { en: "Transavia Denmark" }
  },
  {
    code: "PI",
    name: "Polar Airlines",
    name_translations: { en: "Polar Airlines" }
  },
  {
    code: "PL",
    name: "Southern Air Charter",
    name_translations: { en: "Southern Air Charter" }
  },
  { code: "PM", name: "Canaryfly", name_translations: { en: "Canaryfly" } },
  {
    code: "PO",
    name: null,
    name_translations: { en: "Polar Air Cargo Worldwide, Inc." }
  },
  {
    code: "PP",
    name: "Jet Aviation Business",
    name_translations: { en: "Jet Aviation Business" }
  },
  {
    code: "PV",
    name: "St Barth Commuter",
    name_translations: { en: "St Barth Commuter" }
  },
  {
    code: "P1",
    name: "Public Charters",
    name_translations: { en: "Public Charters" }
  },
  {
    code: "P2",
    name: "Airkenya Express",
    name_translations: { en: "Airkenya Express" }
  },
  {
    code: "P4",
    name: "Aerolíneas Sosa",
    name_translations: { en: "Aerolíneas Sosa" }
  },
  {
    code: "P6",
    name: "Pascan Aviation",
    name_translations: { en: "Pascan Aviation" }
  },
  {
    code: "P7",
    name: "Small Planet Airlines",
    name_translations: { en: "Small Planet Airlines" }
  },
  { code: "P8", name: "Air Mekong", name_translations: { en: "Air Mekong" } },
  {
    code: "P9",
    name: "Peruvian Airlines",
    name_translations: { en: "Peruvian Airlines" }
  },
  { code: "QB", name: null, name_translations: { en: "Qeshm Air" } },
  { code: "QJ", name: null, name_translations: { en: "Jet Airways Inc." } },
  { code: "QK", name: "Jazz", name_translations: { en: "Jazz" } },
  {
    code: "QL",
    name: "LASER Airlines",
    name_translations: { en: "LASER Airlines" }
  },
  {
    code: "QO",
    name: null,
    name_translations: { en: "Quikjet Cargo Airlines Pvt. Ltd" }
  },
  {
    code: "QP",
    name: "Airkenya Express",
    name_translations: { en: "Airkenya Express" }
  },
  {
    code: "QQ",
    name: "Alliance Airlines",
    name_translations: { en: "Alliance Airlines" }
  },
  {
    code: "QT",
    name: "Avianca Cargo",
    name_translations: { en: "Avianca Cargo" }
  },
  {
    code: "QW",
    name: "Qingdao Airlines",
    name_translations: { en: "Qingdao Airlines" }
  },
  {
    code: "QY",
    name: "European Air Transport",
    name_translations: { en: "European Air Transport" }
  },
  {
    code: "Q1",
    name: "Sqiva Sistem",
    name_translations: { en: "Sqiva Sistem" }
  },
  { code: "Q2", name: "Maldivian", name_translations: { en: "Maldivian" } },
  {
    code: "Q3",
    name: null,
    name_translations: { en: "Anguilla Air Services, Ltd" }
  },
  {
    code: "Q4",
    name: "Starlink Aviation",
    name_translations: { en: "Starlink Aviation" }
  },
  { code: "Q5", name: "40-Mile Air", name_translations: { en: "40-Mile Air" } },
  {
    code: "Q6",
    name: "Skytrans Airlines",
    name_translations: { en: "Skytrans Airlines" }
  },
  { code: "Q7", name: null, name_translations: { en: "SkyBahamas Airlines" } },
  { code: "Q9", name: "Air Liaison", name_translations: { en: "Air Liaison" } },
  {
    code: "RD",
    name: "French Armed Forces",
    name_translations: { en: "French Armed Forces" }
  },
  {
    code: "RF",
    name: "Connellan air disaster",
    name_translations: { en: "Connellan air disaster" }
  },
  {
    code: "RH",
    name: null,
    name_translations: { en: "PT Republic Express Airlines" }
  },
  {
    code: "RK",
    name: null,
    name_translations: { en: "Skyview Airways Company Limiteddba Skyview" }
  },
  {
    code: "RP",
    name: "Chautauqua Airlines",
    name_translations: { en: "Chautauqua Airlines" }
  },
  { code: "RQ", name: null, name_translations: { en: "Kam Air" } },
  { code: "RR", name: null, name_translations: { en: "Royal Air Force" } },
  {
    code: "RS",
    name: "Sky Regional Airlines",
    name_translations: { en: "Sky Regional Airlines" }
  },
  {
    code: "RU",
    name: "AirBridgeCargo",
    name_translations: { en: "AirBridgeCargo" }
  },
  {
    code: "RV",
    name: null,
    name_translations: { en: "8165343 Canada Inc. dba Air Canada rouge" }
  },
  {
    code: "RX",
    name: "Regent Airways",
    name_translations: { en: "Regent Airways" }
  },
  { code: "RY", name: "Jiangxi Air", name_translations: { en: "Jiangxi Air" } },
  {
    code: "RZ",
    name: "Sansa Airlines",
    name_translations: { en: "Sansa Airlines" }
  },
  { code: "R1", name: null, name_translations: { en: "Zapways, Inc." } },
  {
    code: "R4",
    name: "RUS Aviation",
    name_translations: { en: "RUS Aviation" }
  },
  { code: "R5", name: null, name_translations: { en: "Jordan Aviation" } },
  { code: "R6", name: "DOT LT", name_translations: { en: "DOT LT" } },
  { code: "SF", name: null, name_translations: { en: "Tassili Airlines" } },
  {
    code: "SH",
    name: "Sharp Airlines",
    name_translations: { en: "Sharp Airlines" }
  },
  { code: "SM", name: null, name_translations: { en: "AIR CAIRO" } },
  {
    code: "S1",
    name: "Lufthansa Systems",
    name_translations: { en: "Lufthansa Systems" }
  },
  {
    code: "S6",
    name: "Sunrise Airways",
    name_translations: { en: "Sunrise Airways" }
  },
  { code: "S9", name: "Starbow", name_translations: { en: "Starbow" } },
  { code: "TB", name: "Jetairfly", name_translations: { en: "Jetairfly" } },
  {
    code: "TC",
    name: "Air Tanzania",
    name_translations: { en: "Air Tanzania" }
  },
  { code: "TE", name: "Sky-Taxi", name_translations: { en: "Sky-Taxi" } },
  {
    code: "TH",
    name: null,
    name_translations: { en: "Raya Airways Sdn. Bhd.dba Raya Airways" }
  },
  {
    code: "TI",
    name: "Tailwind Airlines",
    name_translations: { en: "Tailwind Airlines" }
  },
  { code: "TQ", name: "Tandem Aero", name_translations: { en: "Tandem Aero" } },
  {
    code: "TW",
    name: "T'way Airlines",
    name_translations: { en: "T'way Airlines" }
  },
  { code: "TY", name: null, name_translations: { en: "Air Caledonie" } },
  { code: "T0", name: "TACA Peru", name_translations: { en: "TACA Peru" } },
  { code: "T1", name: "TIK Systems", name_translations: { en: "TIK Systems" } },
  {
    code: "T2",
    name: "Nakina Air Service",
    name_translations: { en: "Nakina Air Service" }
  },
  {
    code: "T8",
    name: null,
    name_translations: { en: "Telair International GmbH" }
  },
  {
    code: "UB",
    name: "Myanmar National Airlines",
    name_translations: { en: "Myanmar National Airlines" }
  },
  {
    code: "UC",
    name: "LAN Chile Cargo",
    name_translations: { en: "LAN Chile Cargo" }
  },
  {
    code: "UE",
    name: "Ultimate Jetcharters",
    name_translations: { en: "Ultimate Jetcharters" }
  },
  { code: "UF", name: "UM Airlines", name_translations: { en: "UM Airlines" } },
  {
    code: "UH",
    name: "Atlasjet Ukraine",
    name_translations: { en: "Atlasjet Ukraine" }
  },
  {
    code: "UI",
    name: null,
    name_translations: { en: "Auric Air Services Limited" }
  },
  {
    code: "UJ",
    name: null,
    name_translations: { en: "Almasria Universal Airlines" }
  },
  { code: "UQ", name: "Urumqi Air", name_translations: { en: "Urumqi Air" } },
  {
    code: "UV",
    name: "Helicópteros del Sureste",
    name_translations: { en: "Helicópteros del Sureste" }
  },
  { code: "UW", name: null, name_translations: { en: "Uni-Top Airlines" } },
  { code: "UY", name: null, name_translations: { en: "Air Caucasus" } },
  {
    code: "UZ",
    name: null,
    name_translations: { en: "Buraq Air Transport (BRQ)" }
  },
  {
    code: "U1",
    name: null,
    name_translations: { en: "Videcom International Limited" }
  },
  { code: "U3", name: null, name_translations: { en: "As Avies" } },
  { code: "U5", name: null, name_translations: { en: "Karinou Airlines" } },
  { code: "VB", name: null, name_translations: { en: "VivaAerobus" } },
  {
    code: "VC",
    name: null,
    name_translations: { en: "Charter Air Transport, Inc." }
  },
  {
    code: "VH",
    name: "Aeropostal Alas de Venezuela",
    name_translations: { en: "Aeropostal Alas de Venezuela" }
  },
  {
    code: "VI",
    name: "Волга-Днепр",
    name_translations: { en: "Volga-Dnepr Airlines" }
  },
  { code: "VJ", name: null, name_translations: { en: "VietjetAir" } },
  { code: "VL", name: null, name_translations: { en: "Air Via Ltd." } },
  {
    code: "VP",
    name: null,
    name_translations: { en: "Villa Air Pvt. Ltd. dba Villa Air" }
  },
  { code: "VQ", name: "Novoair", name_translations: { en: "Novoair" } },
  {
    code: "VU",
    name: null,
    name_translations: { en: "Vuelos Economicos Centroamericanos" }
  },
  { code: "VZ", name: null, name_translations: { en: "Thai Vietjet Air" } },
  {
    code: "V1",
    name: null,
    name_translations: { en: "IBS Software Services Americas, Inc." }
  },
  {
    code: "V6",
    name: null,
    name_translations: { en: "Clairmont Holdings Ltd dba VI Air Link" }
  },
  {
    code: "V8",
    name: null,
    name_translations: { en: "Iliamna Air Taxi Inc." }
  },
  { code: "V9", name: null, name_translations: { en: "Thai Vietjet Air" } },
  {
    code: "WC",
    name: null,
    name_translations: {
      en: "Islena de Inversiones S.A. de C.V.dba Islena Airlines"
    }
  },
  { code: "WE", name: null, name_translations: { en: "Thai Smile" } },
  {
    code: "WJ",
    name: null,
    name_translations: { en: "Labrador Airways Limited" }
  },
  { code: "WO", name: null, name_translations: { en: "World Airways" } },
  { code: "WT", name: null, name_translations: { en: "Swiftair" } },
  {
    code: "WV",
    name: null,
    name_translations: {
      en: "Aero VIPCompanhia Transportes Servicos Aereos SA"
    }
  },
  { code: "WW", name: null, name_translations: { en: "WOW Air ehf" } },
  { code: "W1", name: null, name_translations: { en: "World Ticket Ltd" } },
  { code: "W4", name: null, name_translations: { en: "LC Busre SAC" } },
  { code: "W5", name: null, name_translations: { en: "Mahan Airlines" } },
  {
    code: "W8",
    name: null,
    name_translations: { en: "Cargojet Airways Ltd." }
  },
  {
    code: "XA",
    name: null,
    name_translations: { en: "ARINC(Aeronautical Radio, Inc.)" }
  },
  {
    code: "XB",
    name: null,
    name_translations: {
      en: "IATA - Clearing HouseInternational Air Transport Association"
    }
  },
  {
    code: "XD",
    name: null,
    name_translations: {
      en: "Air Transport Association of Americad\\b\\a Airlines for America"
    }
  },
  { code: "XE", name: null, name_translations: { en: "ExpressJet" } },
  {
    code: "XH",
    name: null,
    name_translations: { en: "Special Ground Handling Service -XH" }
  },
  {
    code: "XI",
    name: null,
    name_translations: { en: "Aeronautical Telecommunications Ltd.(AEROTEL)" }
  },
  {
    code: "XO",
    name: null,
    name_translations: {
      en: "South East Asian Airlines (SEAIR)International, Inc."
    }
  },
  { code: "XP", name: null, name_translations: { en: "TEM Enterprises" } },
  {
    code: "XS",
    name: null,
    name_translations: {
      en: "SITA - Airlines WorldwideTelecommunications and Information Svcs"
    }
  },
  {
    code: "XT",
    name: null,
    name_translations: { en: "Indonesia AirAsia Extra, PT" }
  },
  {
    code: "XU",
    name: null,
    name_translations: { en: "African Express Airways (K)  Limited" }
  },
  { code: "XW", name: "NokScoot", name_translations: { en: "NokScoot" } },
  { code: "X4", name: null, name_translations: { en: "Air Excursion, LLC" } },
  {
    code: "X5",
    name: null,
    name_translations: { en: "S.C. Ten Airways S.R.L." }
  },
  {
    code: "X7",
    name: null,
    name_translations: { en: "Exec Air, Inc. of Naples" }
  },
  { code: "X8", name: null, name_translations: { en: "Airmax S.A." } },
  { code: "YE", name: null, name_translations: { en: "Yan Air Ltd" } },
  {
    code: "YF",
    name: null,
    name_translations: { en: "Department of National Defence" }
  },
  {
    code: "YH",
    name: null,
    name_translations: { en: "Sunsplash Aviation, LLC." }
  },
  { code: "YI", name: null, name_translations: { en: "Air Sunshine Inc." } },
  {
    code: "YJ",
    name: null,
    name_translations: { en: "Asian Wings Airways Limited" }
  },
  {
    code: "YP",
    name: null,
    name_translations: { en: "Perimeter Aviation Ltd." }
  },
  {
    code: "YR",
    name: null,
    name_translations: { en: "Grand Canyon Airlines, Inc.dba Scenic Airlines" }
  },
  {
    code: "YT",
    name: null,
    name_translations: { en: "Yeti Airlines Domestic Pvt. Ltd." }
  },
  {
    code: "YU",
    name: null,
    name_translations: { en: "EuroAtlantic Airways S.A." }
  },
  {
    code: "Y1",
    name: null,
    name_translations: { en: "Travel Technology Interactive SA" }
  },
  {
    code: "Y5",
    name: null,
    name_translations: { en: "Golden Myanmar Airlines Public Co., Ltd" }
  },
  {
    code: "Y8",
    name: "Yangtze River Express",
    name_translations: { en: "Yangtze River Express" }
  },
  { code: "Y9", name: null, name_translations: { en: "Kish Airlines" } },
  {
    code: "ZA",
    name: null,
    name_translations: { en: "Skywings Asia Airlines Co., Ltd." }
  },
  { code: "ZF", name: "Azur Air", name_translations: { en: "Azur Air" } },
  {
    code: "ZJ",
    name: "Zambezi Airlines",
    name_translations: { en: "Zambezi Airlines" }
  },
  {
    code: "ZM",
    name: null,
    name_translations: { en: "Air Manasdba Air Manas ltd. Air Company" }
  },
  { code: "ZP", name: null, name_translations: { en: "Silk Way Airlines" } },
  {
    code: "ZR",
    name: null,
    name_translations: { en: "Aviacon Zitotrans Air Company JSC" }
  },
  { code: "ZS", name: null, name_translations: { en: "JSC Kazaviaspas" } },
  {
    code: "ZT",
    name: null,
    name_translations: { en: "Titan Airways Limited" }
  },
  { code: "ZV", name: null, name_translations: { en: "V Air Corporation" } },
  {
    code: "ZW",
    name: null,
    name_translations: { en: "Air Wisconsin Airlines Corporation(AWAC)" }
  },
  {
    code: "ZX",
    name: null,
    name_translations: { en: "Air Georgian Ltd. dba Air Alliance" }
  },
  { code: "Z3", name: null, name_translations: { en: "PM Air LLC" } },
  { code: "Z4", name: null, name_translations: { en: "Zagros Air Co." } },
  {
    code: "Z7",
    name: null,
    name_translations: { en: "NU-Aero (Pvt) Ltdt/a Fly Africa Zimbabwe" }
  },
  { code: "0J", name: null, name_translations: { en: "Premium Jet AG" } },
  { code: "0Q", name: null, name_translations: { en: "Hydro - Quebec" } },
  { code: "1A", name: null, name_translations: { en: "Amadeus IT Group SA" } },
  {
    code: "1B",
    name: null,
    name_translations: { en: "Abacus International Pte. Ltd." }
  },
  {
    code: "1C",
    name: null,
    name_translations: { en: "Hewlett-Packard (Schweiz) GmbH" }
  },
  {
    code: "1D",
    name: null,
    name_translations: { en: "Radixx Solutions International, Inc." }
  },
  {
    code: "1E",
    name: null,
    name_translations: { en: "Travelsky Technology Limited" }
  },
  {
    code: "1F",
    name: null,
    name_translations: { en: "INFINI Travel Information, Inc." }
  },
  {
    code: "1G",
    name: null,
    name_translations: { en: "Travelport Global Distribution SystemB.V." }
  },
  { code: "1H", name: null, name_translations: { en: 'JSC "Sirena-Travel"' } },
  { code: "1I", name: null, name_translations: { en: "ChallengAir" } },
  {
    code: "1J",
    name: null,
    name_translations: { en: "Axess International Network Inc." }
  },
  { code: "1K", name: null, name_translations: { en: "Sutra Inc." } },
  { code: "1L", name: null, name_translations: { en: "Navitaire Open Skies" } },
  {
    code: "1M",
    name: null,
    name_translations: {
      en: "JSC Transport Automated InformationSystems - TAIS"
    }
  },
  { code: "1N", name: null, name_translations: { en: "Navitaire" } },
  { code: "1P", name: null, name_translations: { en: "Worldspan" } },
  {
    code: "1R",
    name: null,
    name_translations: { en: "Bird Information Systems Private Limited" }
  },
  { code: "1S", name: null, name_translations: { en: "Sabre Inc." } },
  {
    code: "1T",
    name: null,
    name_translations: { en: "PT Aerosystems Indonesia" }
  },
  { code: "1U", name: null, name_translations: { en: "ITA Software Inc." } },
  {
    code: "1V",
    name: null,
    name_translations: { en: "Galileo International" }
  },
  {
    code: "1X",
    name: null,
    name_translations: { en: "Fly Branson Travel dba Branson AirExpress" }
  },
  {
    code: "1Y",
    name: null,
    name_translations: { en: "Electronic Data Systems Corporation" }
  },
  { code: "1Z", name: null, name_translations: { en: "Sabre Pacific" } },
  { code: "2A", name: null, name_translations: { en: "Deutsche Bahn AG" } },
  { code: "2D", name: null, name_translations: { en: "Dynamic Airways, LLC" } },
  { code: "2E", name: null, name_translations: { en: "Smokey Bay Air, Inc." } },
  {
    code: "2F",
    name: null,
    name_translations: { en: "Afrinat International Airlines" }
  },
  { code: "2H", name: null, name_translations: { en: "Thalys International" } },
  { code: "2O", name: null, name_translations: { en: "Redemption Inc." } },
  {
    code: "2Q",
    name: null,
    name_translations: { en: "Air Cargo Carriers, LLC." }
  },
  { code: "2R", name: null, name_translations: { en: "VIA Rail Canada Inc." } },
  { code: "2S", name: null, name_translations: { en: "Kinda Airlines" } },
  {
    code: "2U",
    name: null,
    name_translations: { en: "Sun d'Or International Airlines" }
  },
  { code: "2V", name: null, name_translations: { en: "Amtrak" } },
  { code: "2Y", name: null, name_translations: { en: "PT. My Indo Airlines" } },
  {
    code: "2Z",
    name: null,
    name_translations: { en: "Passaredo Transportes Aereos S.A." }
  },
  {
    code: "3A",
    name: null,
    name_translations: { en: "Chu Kong Passenger Transport Co. Ltd." }
  },
  { code: "3C", name: null, name_translations: { en: "Calima Aviacion S.L" } },
  { code: "3D", name: "DoKaSch", name_translations: { en: "DoKaSch" } },
  { code: "3F", name: null, name_translations: { en: "Pacific Airways Inc." } },
  {
    code: "3J",
    name: null,
    name_translations: { en: "Cargo Three Inc. dba Pan Air Cargo" }
  },
  { code: "3N", name: null, name_translations: { en: "Air Urga" } },
  { code: "3T", name: null, name_translations: { en: "Tarco Air" } },
  { code: "3V", name: "TNT Airways", name_translations: { en: "TNT Airways" } },
  { code: "3W", name: null, name_translations: { en: "Malawian Airlines" } },
  {
    code: "3X",
    name: null,
    name_translations: { en: "Premier Trans Aire Inc." }
  },
  {
    code: "3Y",
    name: "Kartika Airlines",
    name_translations: { en: "Kartika Airlines" }
  },
  {
    code: "3Z",
    name: null,
    name_translations: { en: "Travel Service Polska Sp. z.o.o." }
  },
  { code: "4A", name: null, name_translations: { en: "Aero Transporte S.A." } },
  { code: "4B", name: null, name_translations: { en: "Boutique Air" } },
  {
    code: "4C",
    name: null,
    name_translations: { en: "LAN COLOMBIA AIRLINES" }
  },
  { code: "4E", name: null, name_translations: { en: "Stabo Air Limited" } },
  { code: "4F", name: null, name_translations: { en: "Air City" } },
  {
    code: "4H",
    name: null,
    name_translations: { en: "United Airways Bangladesh Ltd" }
  },
  {
    code: "4I",
    name: null,
    name_translations: { en: "IHY Izmir Havayollari A.S." }
  },
  { code: "4K", name: null, name_translations: { en: "Kenn Borek Air Ltd." } },
  {
    code: "4L",
    name: null,
    name_translations: { en: "Palau National Airlines" }
  },
  {
    code: "4N",
    name: null,
    name_translations: { en: "Air North Charter and Training Ltd." }
  },
  { code: "4P", name: null, name_translations: { en: "Travel Air" } },
  {
    code: "4R",
    name: null,
    name_translations: { en: "CJSC Royal Flight airlines" }
  },
  { code: "4S", name: null, name_translations: { en: "Solar Cargo, C.A." } },
  {
    code: "4V",
    name: null,
    name_translations: { en: "Lignes Aeriennes Congolaises" }
  },
  {
    code: "4X",
    name: null,
    name_translations: { en: "Mercury Air Cargo, Inc." }
  },
  {
    code: "4Y",
    name: null,
    name_translations: { en: "Airbus Transport International" }
  },
  { code: "5A", name: null, name_translations: { en: "Alpine Aviation Inc." } },
  { code: "5B", name: null, name_translations: { en: "Bassaka Air Limited" } },
  {
    code: "5D",
    name: null,
    name_translations: { en: "Aerolitoral S.A. de C.V." }
  },
  { code: "5E", name: null, name_translations: { en: "Siam Ga Co. Ltd." } },
  { code: "5F", name: null, name_translations: { en: "Fly One" } },
  { code: "5G", name: null, name_translations: { en: "540 Ghana Ltd." } },
  { code: "5I", name: null, name_translations: { en: "Alsa Grupo SLU" } },
  { code: "5K", name: "Hi Fly", name_translations: { en: "Hi Fly" } },
  { code: "5M", name: null, name_translations: { en: "Hi Fly Ltd" } },
  {
    code: "5R",
    name: null,
    name_translations: { en: "Rutas Aereas, C.A. dba  RUTACA" }
  },
  {
    code: "5S",
    name: null,
    name_translations: { en: "Global Aviation Services Group" }
  },
  {
    code: "5U",
    name: "Transportes Aéreos Regionales",
    name_translations: { en: "Transportes Aéreos Regionales" }
  },
  {
    code: "5V",
    name: "Everts Air Cargo",
    name_translations: { en: "Everts Air Cargo" }
  },
  {
    code: "5W",
    name: "5W-Rail&Shuttle",
    name_translations: { en: "5W-Rail&Shuttle" }
  },
  { code: "5X", name: null, name_translations: { en: "UPS" } },
  { code: "5Y", name: "Atlas Air", name_translations: { en: "Atlas Air" } },
  { code: "5Z", name: "CemAir", name_translations: { en: "CemAir" } },
  {
    code: "6A",
    name: "Armenia Airways",
    name_translations: { en: "Armenia Airways" }
  },
  {
    code: "6B",
    name: "TUIfly Nordic",
    name_translations: { en: "TUIfly Nordic" }
  },
  { code: "6C", name: "Air Timor", name_translations: { en: "Air Timor" } },
  {
    code: "6D",
    name: "Travel Service Slovensko",
    name_translations: { en: "Travel Service Slovensko" }
  },
  {
    code: "6G",
    name: "Sun Air Express",
    name_translations: { en: "Sun Air Express" }
  },
  { code: "6I", name: "Air Alsie", name_translations: { en: "Air Alsie" } },
  {
    code: "6J",
    name: "Solaseed Air",
    name_translations: { en: "Solaseed Air" }
  },
  {
    code: "6K",
    name: "Kyrgyz Trans Avia",
    name_translations: { en: "Kyrgyz Trans Avia" }
  },
  { code: "6L", name: "Aklak Air", name_translations: { en: "Aklak Air" } },
  { code: "6M", name: null, name_translations: { en: "Zacarias Moreno" } },
  {
    code: "6N",
    name: "Niger Airlines",
    name_translations: { en: "Niger Airlines" }
  },
  { code: "6O", name: "Orbest", name_translations: { en: "Orbest" } },
  {
    code: "6T",
    name: "Air Mandalay",
    name_translations: { en: "Air Mandalay" }
  },
  {
    code: "6U",
    name: "Air Cargo Germany",
    name_translations: { en: "Air Cargo Germany" }
  },
  { code: "6V", name: "AVANZA", name_translations: { en: "AVANZA" } },
  {
    code: "6Z",
    name: "Euro-Asia Air",
    name_translations: { en: "Euro-Asia Air" }
  },
  { code: "7E", name: null, name_translations: { en: "Sylt Air GmbH" } },
  { code: "7G", name: "StarFlyer", name_translations: { en: "StarFlyer" } },
  { code: "7M", name: "MAYAir", name_translations: { en: "MAYAir" } },
  {
    code: "7N",
    name: "Pan American World Airways",
    name_translations: { en: "Pan American World Airways" }
  },
  {
    code: "7O",
    name: "Travel Service",
    name_translations: { en: "Travel Service" }
  },
  { code: "7P", name: "Air Panama", name_translations: { en: "Air Panama" } },
  {
    code: "7Q",
    name: "Elite Airways",
    name_translations: { en: "Elite Airways" }
  },
  {
    code: "7S",
    name: "Ryan Air Service",
    name_translations: { en: "Ryan Air Service" }
  },
  { code: "7T", name: "Trenitalia", name_translations: { en: "Trenitalia" } },
  {
    code: "7U",
    name: "Alpha Air Transport",
    name_translations: { en: "Alpha Air Transport" }
  },
  {
    code: "7Y",
    name: "Mann Yadanarpon Airlines",
    name_translations: { en: "Mann Yadanarpon Airlines" }
  },
  { code: "7Z", name: "Halcyonair", name_translations: { en: "Halcyonair" } },
  { code: "8A", name: null, name_translations: { en: "Panama Airways" } },
  { code: "8B", name: null, name_translations: { en: "Business Air Co Ltd" } },
  {
    code: "8C",
    name: null,
    name_translations: { en: "Air Transport International L.L.C." }
  },
  {
    code: "8D",
    name: null,
    name_translations: { en: "FITS Aviation (Pvt) Ltd" }
  },
  { code: "8F", name: "STP Airways", name_translations: { en: "STP Airways" } },
  {
    code: "8G",
    name: "Mid Africa Aviation",
    name_translations: { en: "Mid Africa Aviation" }
  },
  { code: "8H", name: "BH Air", name_translations: { en: "BH Air" } },
  { code: "8J", name: "EcoJet", name_translations: { en: "EcoJet" } },
  { code: "8K", name: null, name_translations: { en: "K-Mile Air Co. Ltd" } },
  {
    code: "8N",
    name: "Regional Air Services",
    name_translations: { en: "Regional Air Services" }
  },
  { code: "8S", name: "TurboJET", name_translations: { en: "TurboJET" } },
  { code: "8T", name: "Air Tindi", name_translations: { en: "Air Tindi" } },
  {
    code: "8W",
    name: "Private Wings",
    name_translations: { en: "Private Wings" }
  },
  {
    code: "9A",
    name: null,
    name_translations: {
      en: "Eaglexpress Air Charter Sdn.Bhd.dbaEaglexpress Air"
    }
  },
  {
    code: "9C",
    name: "Spring Airlines",
    name_translations: { en: "Spring Airlines" }
  },
  { code: "9E", name: null, name_translations: { en: "Endeavor Air" } },
  { code: "9G", name: "9G Rail", name_translations: { en: "9G Rail" } },
  {
    code: "9I",
    name: "Alliance Air",
    name_translations: { en: "Alliance Air" }
  },
  {
    code: "9J",
    name: null,
    name_translations: { en: "Dana Airlines Limited" }
  },
  {
    code: "9L",
    name: "West Link Airlines",
    name_translations: { en: "West Link Airlines" }
  },
  { code: "9N", name: null, name_translations: { en: "Tropic Air Limited" } },
  {
    code: "9P",
    name: "Air Arabia Jordan",
    name_translations: { en: "Air Arabia Jordan" }
  },
  {
    code: "9Q",
    name: null,
    name_translations: { en: "Caicos Express Airways" }
  },
  { code: "9S", name: null, name_translations: { en: "Southern Air Inc." } },
  { code: "9T", name: null, name_translations: { en: "ACT Havayollari A.S." } },
  {
    code: "9X",
    name: null,
    name_translations: {
      en: "Executive Express Aviation LLC dbaSouthern Airways"
    }
  },
  { code: "UK", name: "Vistara", name_translations: { en: "Vistara" } },
  {
    code: "W7",
    name: null,
    name_translations: { en: "Wings of Lebanon S.a.l" }
  },
  { code: "IU", name: null, name_translations: { en: "SW Italia s.p.a." } },
  {
    code: "S8",
    name: null,
    name_translations: { en: "Sounds Air Travel & Tourism Ltd." }
  },
  { code: "C4", name: null, name_translations: { en: "Conquest Air, Inc." } },
  {
    code: "N6",
    name: null,
    name_translations: { en: "Nomad Aviation (PTY) Ltd." }
  },
  {
    code: "FC",
    name: "FlyCorporate",
    name_translations: { en: "FlyCorporate" }
  },
  { code: "F5", name: null, name_translations: { en: "Aerotranscargo" } },
  { code: "7A", name: null, name_translations: { en: "Air Jet" } },
  {
    code: "GP",
    name: null,
    name_translations: { en: "Guangxi Beibu Gulf Airlines Co., Ltd." }
  },
  {
    code: "HT",
    name: null,
    name_translations: { en: "Ningxia Cargo Airlines CO.,LTD" }
  },
  { code: "R0", name: "РЖД", name_translations: { en: "Russian Railways" } },
  { code: "01", name: null, name_translations: { en: "JetHunter" } },
  {
    code: "EE",
    name: "Regional Jet OÜ",
    name_translations: { en: "Regional Jet OÜ" }
  },
  { code: "I3", name: null, name_translations: { en: "ATA Airlines" } },
  { code: "86", name: "Up Israel", name_translations: { en: "Up Israel" } },
  { code: "XX", name: null, name_translations: { en: "Major Airline" } },
  { code: "YY", name: null, name_translations: { en: "Major Airline" } }
];
