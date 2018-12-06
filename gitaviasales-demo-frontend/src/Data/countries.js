const countries = [
  {
    "code": "DM",
    "name": "Доминика",
    "cases": {
      "ro": "Доминики",
      "da": "Доминике",
      "vi": "в Доминику",
      "tv": "Доминикой",
      "pr": "о Доминике"
    },
    "currency": "XCD",
    "name_translations": { "en": "Dominica" }
  },
  {
    "code": "CW",
    "name": "Кюрасао",
    "cases": {
      "ro": "Кюрасао",
      "da": "Кюрасао",
      "vi": "в Кюрасао",
      "tv": "Кюрасао",
      "pr": "Кюрасао"
    },
    "currency": "ANG",
    "name_translations": { "en": "Curaçao" }
  },
  {
    "code": "GL",
    "name": "Гренландия",
    "cases": {
      "ro": "Гренландии",
      "da": "Гренландии",
      "vi": "в Гренландию",
      "tv": "Гренландией",
      "pr": "Гренландии"
    },
    "currency": "DKK",
    "name_translations": { "en": "Greenland" }
  },
  {
    "code": "GG",
    "name": "Гернси",
    "cases": {
      "ro": "Гернси",
      "da": "Гернси",
      "vi": "в Гернси",
      "tv": "Гернси",
      "pr": "Гернси"
    },
    "currency": "GBP",
    "name_translations": { "en": "Guernsey" }
  },
  {
    "code": "NC",
    "name": "Новая Каледония",
    "cases": {
      "ro": "Новой Каледонии",
      "da": "Новой Каледонии",
      "vi": "в Новую Каледонию",
      "tv": "Новой Каледонией",
      "pr": "Новой Каледонии"
    },
    "currency": "XPF",
    "name_translations": { "en": "New Caledonia" }
  },
  {
    "code": "MT",
    "name": "Мальта",
    "cases": {
      "ro": "Мальты",
      "da": "Мальте",
      "vi": "в Мальту",
      "tv": "Мальтой",
      "pr": "Мальте"
    },
    "currency": "EUR",
    "name_translations": { "en": "Malta" }
  },
  {
    "code": "BN",
    "name": "Бруней",
    "cases": {
      "ro": "Брунея",
      "da": "Брунею",
      "vi": "в Бруней",
      "tv": "Брунеем",
      "pr": "Брунее"
    },
    "currency": "BND",
    "name_translations": { "en": "Brunei" }
  },
  {
    "code": "PM",
    "name": "Сент-Пьер и Микелон",
    "cases": { "ro": "", "da": "", "vi": "", "tv": "", "pr": "" },
    "currency": "EUR",
    "name_translations": { "en": "Saint Pierre and Miquelon" }
  },
  {
    "code": "BT",
    "name": "Бутан",
    "cases": {
      "ro": "Бутана",
      "da": "Бутану",
      "vi": "в Бутан",
      "tv": "Бутаном",
      "pr": "Бутане"
    },
    "currency": "BTN",
    "name_translations": { "en": "Bhutan" }
  },
  {
    "code": "TK",
    "name": "Токелау",
    "cases": {
      "ro": "Токелау",
      "da": "Токелау",
      "vi": "в Токелау",
      "tv": "Токелау",
      "pr": "Токелау"
    },
    "currency": "NZD",
    "name_translations": { "en": "Tokelau" }
  },
  {
    "code": "BZ",
    "name": "Белиз",
    "cases": {
      "ro": "Белиза",
      "da": "Белизу",
      "vi": "в Белиз",
      "tv": "Белизом",
      "pr": "Белизе"
    },
    "currency": "BZD",
    "name_translations": { "en": "Belize" }
  },
  {
    "code": "CA",
    "name": "Канада",
    "cases": {
      "ro": "Канады",
      "da": "Канаде",
      "vi": "в Канаду",
      "tv": "Канадой",
      "pr": "Канаде"
    },
    "currency": "CAD",
    "name_translations": { "en": "Canada" }
  },
  {
    "code": "AX",
    "name": "Аландские острова",
    "cases": {
      "ro": "Аландских Островов",
      "da": "Аландским Островам",
      "vi": "в Аландские Острова",
      "tv": "Аландскими Островами",
      "pr": "об Аландских Островах"
    },
    "currency": "EUR",
    "name_translations": { "en": "Åland Islands" }
  },
  {
    "code": "BV",
    "name": "Остров Буве",
    "cases": {
      "ro": "Острова Буве",
      "da": "Острову Буве",
      "vi": "на Остров Буве",
      "tv": "Островом Буве",
      "pr": "Острове Буве"
    },
    "currency": "NOK",
    "name_translations": { "en": "Bouvet Island" }
  },
  {
    "code": "CC",
    "name": "Кокосовые (Килинг) острова",
    "cases": {
      "ro": "Кокосовых (Килинг) островов",
      "da": "Кокосовым (Килинг) островам",
      "vi": "на Кокосовые (Килинг) острова",
      "tv": "Кокосовыми (Килинг) островами",
      "pr": "Кокосовых (Килинг) островах"
    },
    "currency": "AUD",
    "name_translations": { "en": "Cocos (Keeling) Islands" }
  },
  {
    "code": "CK",
    "name": "Острова Кука",
    "cases": {
      "ro": "Островов Кука",
      "da": "Островам Кука",
      "vi": "на Острова Кука",
      "tv": "Островами Кука",
      "pr": "Островах Кука"
    },
    "currency": "NZD",
    "name_translations": { "en": "Cook Islands" }
  },
  {
    "code": "FO",
    "name": "Фарерские острова",
    "cases": {
      "ro": "Фарерских островов",
      "da": "Фарерским островам",
      "vi": "на Фарерские острова",
      "tv": "Фарерскими островами",
      "pr": "Фарерских островах"
    },
    "currency": "DKK",
    "name_translations": { "en": "Faroe Islands" }
  },
  {
    "code": "AD",
    "name": "Андорра",
    "cases": {
      "ro": "Андорры",
      "da": "Андорре",
      "vi": "в Андорру",
      "tv": "Андоррой",
      "pr": "Андорре"
    },
    "currency": "EUR",
    "name_translations": { "en": "Andorra" }
  },
  {
    "code": "AE",
    "name": "ОАЭ",
    "cases": {
      "ro": "ОАЭ",
      "da": "ОАЭ",
      "vi": "в ОАЭ",
      "tv": "ОАЭ",
      "pr": "ОАЭ"
    },
    "currency": "AED",
    "name_translations": { "en": "United Arab Emirates" }
  },
  {
    "code": "AQ",
    "name": "Антарктида",
    "cases": {
      "ro": "Антарктиды",
      "da": "Антарктиде",
      "vi": "в Антарктиду",
      "tv": "Антарктидой",
      "pr": "Антарктиде"
    },
    "currency": null,
    "name_translations": { "en": "Antarctica" }
  },
  {
    "code": "AU",
    "name": "Австралия",
    "cases": {
      "ro": "Австралии",
      "da": "Австралии",
      "vi": "в Австралию",
      "tv": "Австралией",
      "pr": "Австралии"
    },
    "currency": "AUD",
    "name_translations": { "en": "Australia" }
  },
  {
    "code": "BS",
    "name": "Багамы",
    "cases": {
      "ro": "Багамские острова",
      "da": "Багамские острова",
      "vi": "в Багамские острова",
      "tv": "Багамские острова",
      "pr": "Багамские острова"
    },
    "currency": "BSD",
    "name_translations": { "en": "Bahamas" }
  },
  {
    "code": "CY",
    "name": "Кипр",
    "cases": {
      "ro": "Кипра",
      "da": "Кипру",
      "vi": "на Кипр",
      "tv": "Кипром",
      "pr": "Кипре"
    },
    "currency": "EUR",
    "name_translations": { "en": "Cyprus" }
  },
  {
    "code": "AG",
    "name": "Антигуа и Барбуда",
    "cases": {
      "ro": "Антигуа и Барбуда",
      "da": "Антигуа и Барбуда",
      "vi": "в Антигуа и Барбуда",
      "tv": "Антигуа и Барбуда",
      "pr": "об Антигуа и Барбуда"
    },
    "currency": "XCD",
    "name_translations": { "en": "Antigua and Barbuda" }
  },
  {
    "code": "AI",
    "name": "Ангилья",
    "cases": {
      "ro": "Ангильи",
      "da": "Ангилье",
      "vi": "в Ангилью",
      "tv": "Ангильей",
      "pr": "Ангилье"
    },
    "currency": "XCD",
    "name_translations": { "en": "Anguilla" }
  },
  {
    "code": "AS",
    "name": "Американское Самоа",
    "cases": {
      "ro": "Американского Самоа",
      "da": "Американскому Самоа",
      "vi": "в Американское Самоа",
      "tv": "Американским Самоа",
      "pr": "Американском Самоа"
    },
    "currency": "USD",
    "name_translations": { "en": "American Samoa" }
  },
  {
    "code": "AW",
    "name": "Аруба",
    "cases": {
      "ro": "Арубы",
      "da": "Арубе",
      "vi": "в Арубу",
      "tv": "Арубой",
      "pr": "Арубе"
    },
    "currency": "AWG",
    "name_translations": { "en": "Aruba" }
  },
  {
    "code": "BH",
    "name": "Бахрейн",
    "cases": {
      "ro": "Бахрейна",
      "da": "Бахрейну",
      "vi": "в Бахрейн",
      "tv": "Бахрейном",
      "pr": "Бахрейне"
    },
    "currency": "BHD",
    "name_translations": { "en": "Bahrain" }
  },
  {
    "code": "BL",
    "name": "Сен-Бартельми",
    "cases": {
      "ro": "Сен-Бартельми",
      "da": "Сен-Бартельми",
      "vi": "в Сен-Бартельми",
      "tv": "Сен-Бартельми",
      "pr": "о Сен-Бартельми"
    },
    "currency": "EUR",
    "name_translations": { "en": "Saint Barthélemy" }
  },
  {
    "code": "BM",
    "name": "Бермуды",
    "cases": {
      "ro": "Бермуд",
      "da": "Бермудам",
      "vi": "на Бермуды",
      "tv": "Бермудами",
      "pr": "Бермудах"
    },
    "currency": "BMD",
    "name_translations": { "en": "Bermuda" }
  },
  {
    "code": "BQ",
    "name": "Бонайре, Саба и Синт-Эстатиус",
    "cases": {
      "ro": "Бонайре",
      "da": "Бонайре",
      "vi": "в Бонайре",
      "tv": "Бонайре",
      "pr": "Бонайре"
    },
    "currency": "USD",
    "name_translations": { "en": "Caribbean Netherlands" }
  },
  {
    "code": "BB",
    "name": "Барбадос",
    "cases": {
      "ro": "Барбадоса",
      "da": "Барбадосу",
      "vi": "на Барбадос",
      "tv": "Барбадосом",
      "pr": "Барбадосе"
    },
    "currency": "BBD",
    "name_translations": { "en": "Barbados" }
  },
  {
    "code": "EC",
    "name": "Эквадор",
    "cases": {
      "ro": "Эквадора",
      "da": "Эквадору",
      "vi": "в Эквадор",
      "tv": "Эквадором",
      "pr": "Эквадоре"
    },
    "currency": "USD",
    "name_translations": { "en": "Ecuador" }
  },
  {
    "code": "IO",
    "name": "Британская территория в Индийском океане",
    "cases": { "ro": "", "da": "", "vi": "", "tv": "", "pr": "" },
    "currency": "USD",
    "name_translations": { "en": "British Indian Ocean Territory" }
  },
  {
    "code": "DJ",
    "name": "Джибути",
    "cases": {
      "ro": "Джибути",
      "da": "Джибути",
      "vi": "в Джибути",
      "tv": "Джибути",
      "pr": "Джибути"
    },
    "currency": "DJF",
    "name_translations": { "en": "Djibouti" }
  },
  {
    "code": "JE",
    "name": "Джерси",
    "cases": {
      "ro": "Джерси",
      "da": "Джерси",
      "vi": " в Джерси",
      "tv": "Джерси",
      "pr": "о Джерси"
    },
    "currency": "GBP",
    "name_translations": { "en": "Jersey" }
  },
  {
    "code": "EE",
    "name": "Эстония",
    "cases": {
      "ro": "Эстонии",
      "da": "Эстонии",
      "vi": "в Эстонию",
      "tv": "Эстонией",
      "pr": "Эстонии"
    },
    "currency": "EUR",
    "name_translations": { "en": "Estonia" }
  },
  {
    "code": "DK",
    "name": "Дания",
    "cases": {
      "ro": "Дании",
      "da": "Дании",
      "vi": "в Данию",
      "tv": "Данией",
      "pr": "Дании"
    },
    "currency": "DKK",
    "name_translations": { "en": "Denmark" }
  },
  {
    "code": "KN",
    "name": "Сент-Китс и Невис",
    "cases": {},
    "currency": "XCD",
    "name_translations": { "en": "Saint Kitts and Nevis" }
  },
  {
    "code": "FI",
    "name": "Финляндия",
    "cases": {
      "ro": "Финляндии",
      "da": "Финляндии",
      "vi": "в Финляндию",
      "tv": "Финляндией",
      "pr": "Финляндии"
    },
    "currency": "EUR",
    "name_translations": { "en": "Finland" }
  },
  {
    "code": "CR",
    "name": "Коста Рика",
    "cases": {
      "ro": "Косты-Рики",
      "da": "Косте-Рике",
      "vi": "в Косту-Рику",
      "tv": "Костой-Рикой",
      "pr": "Косте-Рике"
    },
    "currency": "CRC",
    "name_translations": { "en": "Costa Rica" }
  },
  {
    "code": "EG",
    "name": "Египет",
    "cases": {
      "ro": "Египта",
      "da": "Египту",
      "vi": "в Египет",
      "tv": "Египтом",
      "pr": "Египте"
    },
    "currency": "EGP",
    "name_translations": { "en": "Egypt" }
  },
  {
    "code": "EH",
    "name": "Западная Сахара",
    "cases": {
      "ro": "Западной Сахары",
      "da": "Западной Сахаре",
      "vi": "в Западную Сахару",
      "tv": "Западной Сахарой",
      "pr": "Западной Сахаре"
    },
    "currency": "MAD",
    "name_translations": { "en": "Western Sahara" }
  },
  {
    "code": "ER",
    "name": "Эритрея",
    "cases": {
      "ro": "Эритреи",
      "da": "Эритрее",
      "vi": "в Эритрею",
      "tv": "Эритреей",
      "pr": "Эритрее"
    },
    "currency": "ERN",
    "name_translations": { "en": "Eritrea" }
  },
  {
    "code": "GB",
    "name": "Великобритания",
    "cases": {
      "ro": "Великобритании",
      "da": "Великобритании",
      "vi": "в Великобританию",
      "tv": "Великобританией",
      "pr": "Великобритании"
    },
    "currency": "GBP",
    "name_translations": { "en": "United Kingdom" }
  },
  {
    "code": "KR",
    "name": "Южная Корея",
    "cases": {
      "ro": "Южной Кореи",
      "da": "Южной Корее",
      "vi": "в Южную Корею",
      "tv": "Южной Кореей",
      "pr": "Южной Корее"
    },
    "currency": "KRW",
    "name_translations": { "en": "South Korea" }
  },
  {
    "code": "CU",
    "name": "Куба",
    "cases": {
      "ro": "Кубы",
      "da": "Кубе",
      "vi": "на Кубу",
      "tv": "Кубой",
      "pr": "Кубе"
    },
    "currency": "CUP",
    "name_translations": { "en": "Cuba" }
  },
  {
    "code": "JM",
    "name": "Ямайка",
    "cases": {
      "ro": "Ямайки",
      "da": "Ямайке",
      "vi": "на Ямайку",
      "tv": "Ямайкой",
      "pr": "Ямайке"
    },
    "currency": "JMD",
    "name_translations": { "en": "Jamaica" }
  },
  {
    "code": "CL",
    "name": "Чили",
    "cases": {
      "ro": "Чили",
      "da": "Чили",
      "vi": "в Чили",
      "tv": "Чили",
      "pr": "Чили"
    },
    "currency": "CLP",
    "name_translations": { "en": "Chile" }
  },
  {
    "code": "IS",
    "name": "Исландия",
    "cases": {
      "ro": "Исландии",
      "da": "Исландии",
      "vi": "в Исландию",
      "tv": "Исландией",
      "pr": "Исландии"
    },
    "currency": "ISK",
    "name_translations": { "en": "Iceland" }
  },
  {
    "code": "KW",
    "name": "Кувейт",
    "cases": {
      "ro": "Кувейта",
      "da": "Кувейту",
      "vi": "в Кувейт",
      "tv": "Кувейтом",
      "pr": "Кувейте"
    },
    "currency": "KWD",
    "name_translations": { "en": "Kuwait" }
  },
  {
    "code": "ES",
    "name": "Испания",
    "cases": {
      "ro": "Испании",
      "da": "Испании",
      "vi": "в Испанию",
      "tv": "Испанией",
      "pr": "Испании"
    },
    "currency": "EUR",
    "name_translations": { "en": "Spain" }
  },
  {
    "code": "CZ",
    "name": "Чехия",
    "cases": {
      "ro": "Чехии",
      "da": "Чехии",
      "vi": "в Чехию",
      "tv": "Чехией",
      "pr": "Чехии"
    },
    "currency": "CZK",
    "name_translations": { "en": "Czech Republic" }
  },
  {
    "code": "LA",
    "name": "Лаос",
    "cases": {
      "ro": "Лаоса",
      "da": "Лаосу",
      "vi": "в Лаос",
      "tv": "Лаосом",
      "pr": "Лаосе"
    },
    "currency": "LAK",
    "name_translations": { "en": "Laos" }
  },
  {
    "code": "HK",
    "name": "Гонконг",
    "cases": {
      "ro": "Гонконга",
      "da": "Гонконгу",
      "vi": "в Гонконг",
      "tv": "Гонконгом",
      "pr": "Гонконге"
    },
    "currency": "HKD",
    "name_translations": { "en": "Hong Kong" }
  },
  {
    "code": "JP",
    "name": "Япония",
    "cases": {
      "ro": "Японии",
      "da": "Японии",
      "vi": "в Японию",
      "tv": "Японией",
      "pr": "Японии"
    },
    "currency": "JPY",
    "name_translations": { "en": "Japan" }
  },
  {
    "code": "KI",
    "name": "Кирибати",
    "cases": {},
    "currency": "AUD",
    "name_translations": { "en": "Kiribati" }
  },
  {
    "code": "KM",
    "name": "Коморы",
    "cases": {
      "ro": "Комор",
      "da": "Коморам",
      "vi": "на Коморы",
      "tv": "Коморами",
      "pr": "Коморах"
    },
    "currency": "KMF",
    "name_translations": { "en": "Comoros" }
  },
  {
    "code": "GI",
    "name": "Гибралтар",
    "cases": {
      "ro": "Гибралтара",
      "da": "Гибралтару",
      "vi": "на Гибралтар",
      "tv": "Гибралтаром",
      "pr": "Гибралтаре"
    },
    "currency": "GIP",
    "name_translations": { "en": "Gibraltar" }
  },
  {
    "code": "ET",
    "name": "Эфиопия",
    "cases": {
      "ro": "Эфиопии",
      "da": "Эфиопии",
      "vi": "в Эфиопию",
      "tv": "Эфиопией",
      "pr": "Эфиопии"
    },
    "currency": "ETB",
    "name_translations": { "en": "Ethiopia" }
  },
  {
    "code": "KH",
    "name": "Камбоджа",
    "cases": {
      "ro": "Камбоджи",
      "da": "Камбодже",
      "vi": "в Камбоджу",
      "tv": "Камбоджой",
      "pr": "Камбодже"
    },
    "currency": "KHR",
    "name_translations": { "en": "Cambodia" }
  },
  {
    "code": "LR",
    "name": "Либерия",
    "cases": {
      "ro": "Либерию",
      "da": "Либерии",
      "vi": "в Либерию",
      "tv": "Либерией",
      "pr": "о Либерии"
    },
    "currency": "LRD",
    "name_translations": { "en": "Liberia" }
  },
  {
    "code": "HT",
    "name": "Гаити",
    "cases": {
      "ro": "Гаити",
      "da": "Гаити",
      "vi": "на Гаити",
      "tv": "Гаити",
      "pr": "Гаити"
    },
    "currency": "HTG",
    "name_translations": { "en": "Haiti" }
  },
  {
    "code": "MH",
    "name": "Маршалловы острова",
    "cases": {
      "ro": "Маршалловых островов",
      "da": "Маршалловым островам",
      "vi": "на Маршалловы острова",
      "tv": "Маршалловыми островами",
      "pr": "Маршалловых островах"
    },
    "currency": "USD",
    "name_translations": { "en": "Marshall Islands" }
  },
  {
    "code": "HM",
    "name": "Остров Херд и острова Макдональд",
    "cases": {
      "ro": "Острова Херд и островов Макдональд",
      "da": "Острову Херд и островм Макдональд",
      "vi": "на Остров Херд и острова Макдональд",
      "tv": "Островом Херд и островами Макдональд",
      "pr": "Острове Херд и островах Макдональд"
    },
    "currency": "AUD",
    "name_translations": { "en": "Heard Island and McDonald Islands" }
  },
  {
    "code": "IE",
    "name": "Ирландия",
    "cases": {
      "ro": "Ирландии",
      "da": "Ирландии",
      "vi": "в Ирландию",
      "tv": "Ирландией",
      "pr": "Ирландии"
    },
    "currency": "EUR",
    "name_translations": { "en": "Ireland" }
  },
  {
    "code": "MP",
    "name": "Северные Марианские острова",
    "cases": {
      "ro": "Северных Марианских островов",
      "da": "Северным Марианским островам",
      "vi": "на Северные Марианские острова",
      "tv": "Северными Марианскими островами",
      "pr": "Северных Марианских островах"
    },
    "currency": "USD",
    "name_translations": { "en": "Northern Mariana Islands" }
  },
  {
    "code": "KY",
    "name": "Каймановы острова",
    "cases": {
      "ro": "Каймановых островов",
      "da": "Каймановым островам",
      "vi": "на Каймановы острова",
      "tv": "Каймановыми островами",
      "pr": "Каймановых островах"
    },
    "currency": "KYD",
    "name_translations": { "en": "Cayman Islands" }
  },
  {
    "code": "LY",
    "name": "Ливия",
    "cases": {
      "ro": "Ливии",
      "da": "Ливии",
      "vi": "в Ливию",
      "tv": "Ливией",
      "pr": "Ливии"
    },
    "currency": "LYD",
    "name_translations": { "en": "Libya" }
  },
  {
    "code": "LB",
    "name": "Ливан",
    "cases": {
      "ro": "Ливана",
      "da": "Ливану",
      "vi": "в Ливан",
      "tv": "Ливаном",
      "pr": "Ливане"
    },
    "currency": "LBP",
    "name_translations": { "en": "Lebanon" }
  },
  {
    "code": "LI",
    "name": "Лихтенштейн",
    "cases": {
      "ro": "Лихтенштейн",
      "da": "Лихтенштейну",
      "vi": "в Лихтенштейн",
      "tv": "Лихтенштейном",
      "pr": "о Лихтенштейне"
    },
    "currency": "CHF",
    "name_translations": { "en": "Liechtenstein" }
  },
  {
    "code": "LK",
    "name": "Шри-Ланка",
    "cases": {
      "ro": "Шри-Ланки",
      "da": "Шри-Ланке",
      "vi": "на Шри-Ланку",
      "tv": "Шри-Ланкой",
      "pr": "Шри-Ланке"
    },
    "currency": "LKR",
    "name_translations": { "en": "Sri Lanka" }
  },
  {
    "code": "LS",
    "name": "Лесото",
    "cases": {
      "ro": "Лесото",
      "da": "Лесото",
      "vi": "в  Лесото",
      "tv": "Лесото",
      "pr": "о  Лесото"
    },
    "currency": "LSL",
    "name_translations": { "en": "Lesotho" }
  },
  {
    "code": "LT",
    "name": "Литва",
    "cases": {
      "ro": "Литвы",
      "da": "Литве",
      "vi": "в Литву",
      "tv": "Литвой",
      "pr": "Литве"
    },
    "currency": "LTL",
    "name_translations": { "en": "Lithuania" }
  },
  {
    "code": "MC",
    "name": "Монако",
    "cases": {
      "ro": "Монако",
      "da": "Монако",
      "vi": "в Монако",
      "tv": "Монако",
      "pr": "Монако"
    },
    "currency": "EUR",
    "name_translations": { "en": "Monaco" }
  },
  {
    "code": "LU",
    "name": "Люксембург",
    "cases": {
      "ro": "Люксембурга",
      "da": "Люксембургу",
      "vi": "в Люксембург",
      "tv": "Люксембургом",
      "pr": "Люксембурге"
    },
    "currency": "EUR",
    "name_translations": { "en": "Luxembourg" }
  },
  {
    "code": "LV",
    "name": "Латвия",
    "cases": {
      "ro": "Латвии",
      "da": "Латвии",
      "vi": "в Латвию",
      "tv": "Латвией",
      "pr": "Латвии"
    },
    "currency": "LVL",
    "name_translations": { "en": "Latvia" }
  },
  {
    "code": "MQ",
    "name": "Мартиника",
    "cases": {
      "ro": "Мартиники",
      "da": "Мартинике",
      "vi": "в Мартинику",
      "tv": "Мартиникой",
      "pr": "Мартинике"
    },
    "currency": "EUR",
    "name_translations": { "en": "Martinique" }
  },
  {
    "code": "MA",
    "name": "Марокко",
    "cases": {
      "ro": "Марокко",
      "da": "Марокко",
      "vi": "в Марокко",
      "tv": "Марокко",
      "pr": "Марокко"
    },
    "currency": "MAD",
    "name_translations": { "en": "Morocco" }
  },
  {
    "code": "ME",
    "name": "Черногория",
    "cases": {
      "ro": "Черногории",
      "da": "Черногории",
      "vi": "в Черногорию",
      "tv": "Черногорией",
      "pr": "Черногории"
    },
    "currency": "EUR",
    "name_translations": { "en": "Montenegro" }
  },
  {
    "code": "MD",
    "name": "Молдавия",
    "cases": {
      "ro": "Молдовы",
      "da": "Молдове",
      "vi": "в Молдову",
      "tv": "Молдовой",
      "pr": "Молдове"
    },
    "currency": "MDL",
    "name_translations": { "en": "Moldova" }
  },
  {
    "code": "MU",
    "name": "Маврикий",
    "cases": {
      "ro": "Маврикия",
      "da": "Маврикию",
      "vi": "на Маврикий",
      "tv": "Маврикием",
      "pr": "Маврикии"
    },
    "currency": "MUR",
    "name_translations": { "en": "Mauritius" }
  },
  {
    "code": "NR",
    "name": "Науру",
    "cases": {
      "ro": "Науру",
      "da": "Науру",
      "vi": "в Науру",
      "tv": "Науру",
      "pr": "Науру"
    },
    "currency": "AUD",
    "name_translations": { "en": "Nauru" }
  },
  {
    "code": "NF",
    "name": "Остров Норфолк",
    "cases": {
      "ro": "Остров Норфолк",
      "da": "Острову Норфолк ",
      "vi": "на Остров Норфолк",
      "tv": "Островом Норфолк",
      "pr": "об Острове Норфолк "
    },
    "currency": "AUD",
    "name_translations": { "en": "Norfolk Island" }
  },
  {
    "code": "OM",
    "name": "Оман",
    "cases": {
      "ro": "Омана",
      "da": "Оману",
      "vi": "в Оман",
      "tv": "Оманом",
      "pr": "Омане"
    },
    "currency": "OMR",
    "name_translations": { "en": "Oman" }
  },
  {
    "code": "MS",
    "name": "Монтсеррат",
    "cases": {
      "ro": "Монтсеррата",
      "da": "Монтсеррату",
      "vi": "в Монтсеррат",
      "tv": "Монтсерратом",
      "pr": "о Монтсеррате"
    },
    "currency": "XCD",
    "name_translations": { "en": "Montserrat" }
  },
  {
    "code": "TN",
    "name": "Тунис",
    "cases": {
      "ro": "Туниса",
      "da": "Тунису",
      "vi": "в Тунис",
      "tv": "Тунисом",
      "pr": "Тунисе"
    },
    "currency": "TND",
    "name_translations": { "en": "Tunisia" }
  },
  {
    "code": "SJ",
    "name": "Шпицберген и Ян Майен",
    "cases": {
      "ro": "Шпицбергена и Ян Майена",
      "da": "Шпицбергену и Ян Майену",
      "vi": "в Шпицберген и Ян Майен",
      "tv": "Шпицбергеном и Ян Майеном",
      "pr": "Шпицбергене и Ян Майене"
    },
    "currency": "NOK",
    "name_translations": { "en": "Svalbard and Jan Mayen" }
  },
  {
    "code": "MV",
    "name": "Мальдивы",
    "cases": {
      "ro": "Мальдив",
      "da": "Мальдивам",
      "vi": "на Мальдивы",
      "tv": "Мальдивами",
      "pr": "Мальдивах"
    },
    "currency": "MVR",
    "name_translations": { "en": "Maldives" }
  },
  {
    "code": "NP",
    "name": "Непал",
    "cases": {
      "ro": "Непала",
      "da": "Непалу",
      "vi": "в Непал",
      "tv": "Непалом",
      "pr": "Непале"
    },
    "currency": "NPR",
    "name_translations": { "en": "Nepal" }
  },
  {
    "code": "NU",
    "name": "Ниуэ",
    "cases": {
      "ro": "Ниуэ",
      "da": "Ниуэ",
      "vi": "в Ниуэ",
      "tv": "Ниуэ",
      "pr": "о Ниуэ"
    },
    "currency": "NZD",
    "name_translations": { "en": "Niue" }
  },
  {
    "code": "NZ",
    "name": "Новая Зеландия",
    "cases": {
      "ro": "Новой Зеландии",
      "da": "Новой Зеландии",
      "vi": "в Новую Зеландию",
      "tv": "Новой Зеландией",
      "pr": "Новой Зеландии"
    },
    "currency": "NZD",
    "name_translations": { "en": "New Zealand" }
  },
  {
    "code": "PH",
    "name": "Филиппины",
    "cases": {
      "ro": "Филиппин",
      "da": "Филиппинам",
      "vi": "на Филиппины",
      "tv": "Филиппинами",
      "pr": "Филиппинах"
    },
    "currency": "PHP",
    "name_translations": { "en": "Philippines" }
  },
  {
    "code": "PG",
    "name": "Папуа Новая Гвинея",
    "cases": {
      "ro": "Папуа - Новой Гвинеи",
      "da": "Папуа - Новой Гвинее",
      "vi": "в Папуа - Новую Гвинею",
      "tv": "Папуа - Новой Гвинеей",
      "pr": "Папуа - Новой Гвинее"
    },
    "currency": "PGK",
    "name_translations": { "en": "Papua New Guinea" }
  },
  {
    "code": "PF",
    "name": "Французская Полинезия",
    "cases": {
      "ro": "Французской Полинезии",
      "da": "Французской Полинезии",
      "vi": "в Французскую Полинезию",
      "tv": "Французской Полинезией",
      "pr": "о Французской Полинезии"
    },
    "currency": "XPF",
    "name_translations": { "en": "French Polynesia" }
  },
  {
    "code": "PN",
    "name": "Питкерн",
    "cases": {
      "ro": "Питкерна",
      "da": "Питкерну",
      "vi": "в Питкерн",
      "tv": "Питкерну",
      "pr": "Питкерне"
    },
    "currency": "NZD",
    "name_translations": { "en": "Pitcairn Islands" }
  },
  {
    "code": "PR",
    "name": "Пуэрто-Рико",
    "cases": {
      "ro": "Пуэрто-Рико",
      "da": "Пуэрто-Рико",
      "vi": "в Пуэрто-Рико",
      "tv": "Пуэрто-Рико",
      "pr": "Пуэрто-Рико"
    },
    "currency": "USD",
    "name_translations": { "en": "Puerto Rico" }
  },
  {
    "code": "PW",
    "name": "Палау",
    "cases": {
      "ro": "Палау",
      "da": "Палау",
      "vi": "в Палау",
      "tv": "Палау",
      "pr": "Палау"
    },
    "currency": "USD",
    "name_translations": { "en": "Palau" }
  },
  {
    "code": "PY",
    "name": "Парагвай",
    "cases": {
      "ro": "Парагвая",
      "da": "Парагваю",
      "vi": "в Парагвай",
      "tv": "Парагваем",
      "pr": "Парагвае"
    },
    "currency": "PYG",
    "name_translations": { "en": "Paraguay" }
  },
  {
    "code": "PT",
    "name": "Португалия",
    "cases": {
      "ro": "Португалии",
      "da": "Португалии",
      "vi": "в Португалию",
      "tv": "Португалией",
      "pr": "Португалии"
    },
    "currency": "EUR",
    "name_translations": { "en": "Portugal" }
  },
  {
    "code": "ST",
    "name": "Сан-Томе и Принсипи",
    "cases": {
      "ro": "Сан-Томе и Принсипи",
      "da": "Сан-Томе и Принсипи",
      "vi": "Сан-Томе и Принсипи",
      "tv": "Сан-Томе и Принсипи",
      "pr": "Сан-Томе и Принсипи"
    },
    "currency": "STD",
    "name_translations": { "en": "São Tomé and Príncipe" }
  },
  {
    "code": "PA",
    "name": "Панама",
    "cases": {
      "ro": "Панамы",
      "da": "Панаме",
      "vi": "в Панаму",
      "tv": "Панамой",
      "pr": "Панаме"
    },
    "currency": "PAB",
    "name_translations": { "en": "Panama" }
  },
  {
    "code": "QA",
    "name": "Катар",
    "cases": {
      "ro": "Катара",
      "da": "Катару",
      "vi": "в Катар",
      "tv": "Катаром",
      "pr": "Катаре"
    },
    "currency": "QAR",
    "name_translations": { "en": "Qatar" }
  },
  {
    "code": "RE",
    "name": "Реюньон",
    "cases": {
      "ro": "Реюньона",
      "da": "Реюньону",
      "vi": " в Реюньон",
      "tv": "Реюньоном",
      "pr": "о Реюньоне"
    },
    "currency": "EUR",
    "name_translations": { "en": "Réunion" }
  },
  {
    "code": "RW",
    "name": "Руанда",
    "cases": {
      "ro": "Руанды",
      "da": "Руанде",
      "vi": "в Руанду",
      "tv": "Руандой",
      "pr": "Руанде"
    },
    "currency": "RWF",
    "name_translations": { "en": "Rwanda" }
  },
  {
    "code": "SB",
    "name": "Соломоновы острова",
    "cases": {
      "ro": "Соломоновых островов",
      "da": "Соломоновым островам",
      "vi": "на Соломоновы острова",
      "tv": "Соломоновыми островами",
      "pr": "Соломоновых островах"
    },
    "currency": "SBD",
    "name_translations": { "en": "Solomon Islands" }
  },
  {
    "code": "SC",
    "name": "Сейшелы",
    "cases": {
      "ro": "Сейшелов",
      "da": "Сейшелам",
      "vi": "в Сейшелы",
      "tv": "Сейшелами",
      "pr": "о Сейшелах"
    },
    "currency": "SCR",
    "name_translations": { "en": "Seychelles" }
  },
  {
    "code": "SE",
    "name": "Швеция",
    "cases": {
      "ro": "Швеции",
      "da": "Швеции",
      "vi": "в Швецию",
      "tv": "Швецией",
      "pr": "Швеции"
    },
    "currency": "SEK",
    "name_translations": { "en": "Sweden" }
  },
  {
    "code": "SG",
    "name": "Сингапур",
    "cases": {
      "ro": "Сингапура",
      "da": "Сингапуру",
      "vi": "в Сингапур",
      "tv": "Сингапуром",
      "pr": "Сингапуре"
    },
    "currency": "SGD",
    "name_translations": { "en": "Singapore" }
  },
  {
    "code": "SI",
    "name": "Словения",
    "cases": {
      "ro": "Словении",
      "da": "Словении",
      "vi": "в Словению",
      "tv": "Словенией",
      "pr": "Словении"
    },
    "currency": "EUR",
    "name_translations": { "en": "Slovenia" }
  },
  {
    "code": "TF",
    "name": "Французские Южные территории",
    "cases": { "ro": "", "da": "", "vi": "", "tv": "", "pr": "" },
    "currency": "EUR",
    "name_translations": { "en": "French Southern Territories" }
  },
  {
    "code": "TC",
    "name": "Теркс и Кайкос",
    "cases": {
      "ro": "Теркс и Кайкос",
      "da": "Теркс и Кайкос",
      "vi": "в Теркс и Кайкос",
      "tv": "Теркс и Кайкос",
      "pr": "Теркс и Кайкос"
    },
    "currency": "USD",
    "name_translations": { "en": "Turks and Caicos Islands" }
  },
  {
    "code": "TL",
    "name": "Тимор-Лесте",
    "cases": {
      "ro": "Тимора-Лесте",
      "da": "Тимору-Лесте",
      "vi": "в Восточный Тимор",
      "tv": "Восточным Тимором",
      "pr": "Восточном Тиморе"
    },
    "currency": "USD",
    "name_translations": { "en": "East Timor" }
  },
  {
    "code": "TO",
    "name": "Тонга",
    "cases": {
      "ro": "Тонгу",
      "da": "Тонге",
      "vi": "в Тонгу",
      "tv": "Тонгой",
      "pr": "о Тонге"
    },
    "currency": "TOP",
    "name_translations": { "en": "Tonga" }
  },
  {
    "code": "TV",
    "name": "Тувалу",
    "cases": {
      "ro": "Тувалу",
      "da": "Тувалу",
      "vi": "в Тувалу",
      "tv": "Тувалу",
      "pr": "Тувалу"
    },
    "currency": "AUD",
    "name_translations": { "en": "Tuvalu" }
  },
  {
    "code": "TW",
    "name": "Тайвань",
    "cases": {
      "ro": "Тайваня",
      "da": "Тайваню",
      "vi": "на Тайвань",
      "tv": "Тайванем",
      "pr": "Тайване"
    },
    "currency": "TWD",
    "name_translations": { "en": "Taiwan" }
  },
  {
    "code": "SX",
    "name": "Синт-Мартен",
    "cases": {},
    "currency": "ANG",
    "name_translations": { "en": "Sint Maarten" }
  },
  {
    "code": "NE",
    "name": "Нигер",
    "cases": {
      "ro": "Нигера",
      "da": "Нигеру",
      "vi": "в Нигера",
      "tv": "Нигером",
      "pr": "Нигере"
    },
    "currency": "XOF",
    "name_translations": { "en": "Niger" }
  },
  {
    "code": "NG",
    "name": "Нигерия",
    "cases": {
      "ro": "Нигерии",
      "da": "Нигерии",
      "vi": "в Нигерию",
      "tv": "Нигерией",
      "pr": "Нигерии"
    },
    "currency": "NGN",
    "name_translations": { "en": "Nigeria" }
  },
  {
    "code": "CN",
    "name": "Китай",
    "cases": {
      "ro": "Китая",
      "da": "Китаю",
      "vi": "в Китай",
      "tv": "Китаем",
      "pr": "Китае"
    },
    "currency": "CNY",
    "name_translations": { "en": "China" }
  },
  {
    "code": "CD",
    "name": "Демократическая Республика Конго",
    "cases": {
      "ro": "Конго",
      "da": "Конго",
      "vi": "в Конго",
      "tv": "Конго",
      "pr": "Конго"
    },
    "currency": "CDF",
    "name_translations": { "en": "Democratic Republic of the Congo" }
  },
  {
    "code": "CV",
    "name": "Кабо-Верде",
    "cases": {
      "ro": "Кабо-Верде",
      "da": "Кабо-Верде",
      "vi": "на Кабо-Верде",
      "tv": "Кабо-Верде",
      "pr": "Кабо-Верде"
    },
    "currency": "CVE",
    "name_translations": { "en": "Cape Verde" }
  },
  {
    "code": "GN",
    "name": "Гвинея",
    "cases": {
      "ro": "Гвинеи",
      "da": "Гвинее",
      "vi": "в Гвинею",
      "tv": "Гвинеей",
      "pr": "Гвинее"
    },
    "currency": "GNF",
    "name_translations": { "en": "Guinea" }
  },
  {
    "code": "GU",
    "name": "Гуам",
    "cases": {
      "ro": "Гуама",
      "da": "Гуаму",
      "vi": "в Гуам",
      "tv": "Гуамом",
      "pr": "Гуаме"
    },
    "currency": "USD",
    "name_translations": { "en": "Guam" }
  },
  {
    "code": "MZ",
    "name": "Мозамбик",
    "cases": {
      "ro": "Мозамбика",
      "da": "Мозамбику",
      "vi": "в Мозамбик",
      "tv": "Мозамбиком",
      "pr": "Мозамбике"
    },
    "currency": "MZN",
    "name_translations": { "en": "Mozambique" }
  },
  {
    "code": "NA",
    "name": "Намибия",
    "cases": {
      "ro": "Намибии",
      "da": "Намибии",
      "vi": "в Намибию",
      "tv": "Намибией",
      "pr": "о Намибии"
    },
    "currency": "NAD",
    "name_translations": { "en": "Namibia" }
  },
  {
    "code": "BG",
    "name": "Болгария",
    "cases": {
      "ro": "Болгарии",
      "da": "Болгарии",
      "vi": "в Болгарию",
      "tv": "Болгарией",
      "pr": "Болгарии"
    },
    "currency": "BGN",
    "name_translations": { "en": "Bulgaria" }
  },
  {
    "code": "CX",
    "name": "Остров Рождества",
    "cases": {
      "ro": "Острова Рождества",
      "da": "Острову Рождества",
      "vi": "на Остров Рождества",
      "tv": "Островом Рождества",
      "pr": "Острове Рождества"
    },
    "currency": "AUD",
    "name_translations": { "en": "Christmas Island" }
  },
  {
    "code": "BA",
    "name": "Босния и Герцеговина",
    "cases": {
      "ro": "Боснии и Герцеговины",
      "da": "Боснии и Герцеговине",
      "vi": "в Боснию и Герцеговину",
      "tv": "Боснией и Герцеговиной",
      "pr": "Боснии и Герцеговине"
    },
    "currency": "BAM",
    "name_translations": { "en": "Bosnia and Herzegovina" }
  },
  {
    "code": "LC",
    "name": "Сент-Люсия",
    "cases": {
      "ro": "Сент-Люсии",
      "da": "Сент-Люсии",
      "vi": "в Сент-Люсию",
      "tv": "Сент-Люсией",
      "pr": "Сент-Люсии"
    },
    "currency": "XCD",
    "name_translations": { "en": "Saint Lucia" }
  },
  {
    "code": "ML",
    "name": "Мали",
    "cases": {
      "ro": "Мали",
      "da": "Мали",
      "vi": "в Мали",
      "tv": "Мали",
      "pr": "Мали"
    },
    "currency": "XOF",
    "name_translations": { "en": "Mali" }
  },
  {
    "code": "MO",
    "name": "Макао",
    "cases": {
      "ro": "Макао",
      "da": "Макао",
      "vi": "в Макао",
      "tv": "Макао",
      "pr": "о Макао"
    },
    "currency": "MOP",
    "name_translations": { "en": "Macau" }
  },
  {
    "code": "AT",
    "name": "Австрия",
    "cases": {
      "ro": "Австрии",
      "da": "Австрии",
      "vi": "в Австрию",
      "tv": "Австрией",
      "pr": "Австрии"
    },
    "currency": "EUR",
    "name_translations": { "en": "Austria" }
  },
  {
    "code": "BF",
    "name": "Буркина Фасо",
    "cases": {
      "ro": "Буркиной-Фасо",
      "da": "Буркиной-Фасо",
      "vi": "в Буркину-Фасо",
      "tv": "Буркиной-Фасо",
      "pr": "Буркиной-Фасо"
    },
    "currency": "XOF",
    "name_translations": { "en": "Burkina Faso" }
  },
  {
    "code": "FM",
    "name": "Микронезия",
    "cases": {
      "ro": "Микронезии",
      "da": "Микронезии",
      "vi": "в Микронезию",
      "tv": "Микронезией",
      "pr": "Микронезии"
    },
    "currency": "USD",
    "name_translations": { "en": "Micronesia" }
  },
  {
    "code": "HU",
    "name": "Венгрия",
    "cases": {
      "ro": "Венгрии",
      "da": "Венгрии",
      "vi": "в Венгрию",
      "tv": "Венгрией",
      "pr": "Венгрии"
    },
    "currency": "HUF",
    "name_translations": { "en": "Hungary" }
  },
  {
    "code": "IM",
    "name": "Остров Мэн",
    "cases": {
      "ro": "Остров Мэн",
      "da": "Острову Мэн",
      "vi": "на Остров Мэн",
      "tv": "Островом Мэм",
      "pr": "об Острове Мэн"
    },
    "currency": "GBP",
    "name_translations": { "en": "Isle of Man" }
  },
  {
    "code": "AZ",
    "name": "Азербайджан",
    "cases": {
      "ro": "Азербайджана",
      "da": "Азербайджану",
      "vi": "в Азербайджан",
      "tv": "Азербайджаном",
      "pr": "Азербайджане"
    },
    "currency": "AZN",
    "name_translations": { "en": "Azerbaijan" }
  },
  {
    "code": "GA",
    "name": "Габон",
    "cases": {
      "ro": "Габона",
      "da": "Габону",
      "vi": "в Габон",
      "tv": "Габоном",
      "pr": "Габоне"
    },
    "currency": "XAF",
    "name_translations": { "en": "Gabon" }
  },
  {
    "code": "AR",
    "name": "Аргентина",
    "cases": {
      "ro": "Аргентиной",
      "da": "Аргентине",
      "vi": "в Аргентину",
      "tv": "Аргентиной",
      "pr": "Аргентине"
    },
    "currency": "ARS",
    "name_translations": { "en": "Argentina" }
  },
  {
    "code": "DO",
    "name": "Доминиканская Республика",
    "cases": {
      "ro": "Доминиканской Республики",
      "da": "Доминиканской Республике",
      "vi": "в Доминиканскую Республику",
      "tv": "Доминиканской Республикой",
      "pr": "Доминиканской Республике"
    },
    "currency": "DOP",
    "name_translations": { "en": "Dominican Republic" }
  },
  {
    "code": "AL",
    "name": "Албания",
    "cases": {
      "ro": "Албании",
      "da": "Албании",
      "vi": "в Албанию",
      "tv": "Албанией",
      "pr": "Албании"
    },
    "currency": "ALL",
    "name_translations": { "en": "Albania" }
  },
  {
    "code": "SH",
    "name": "Острова Святой Елены, Вознесения и Тристан-да-Кунья",
    "cases": {
      "ro": "Острова Святой Елены, Вознесения и Тристан-да-Кунья",
      "da": "Островам Святой Елены, Вознесения и Тристан-да-Кунья",
      "vi": "на Острова Святой Елены, Вознесения и Тристан-да-Кунья",
      "tv": "Островами  Святой Елены, Вознесения и Тристан-да-Кунья",
      "pr": "об Островах Святой Елены, Вознесения и Тристан-да-Кунья"
    },
    "currency": "SHP",
    "name_translations": {
      "en": "Saint Helena, Ascension and Tristan da Cunha"
    }
  },
  {
    "code": "AF",
    "name": "Афганистан",
    "cases": {
      "ro": "Афганистана",
      "da": "Афганистану",
      "vi": " в Афганистан",
      "tv": "Афганистаном",
      "pr": "об Афганистане"
    },
    "currency": "AFN",
    "name_translations": { "en": "Afghanistan" }
  },
  {
    "code": "BR",
    "name": "Бразилия",
    "cases": {
      "ro": "Бразилии",
      "da": "Бразилии",
      "vi": "в Бразилию",
      "tv": "Бразилией",
      "pr": "Бразилии"
    },
    "currency": "BRL",
    "name_translations": { "en": "Brazil" }
  },
  {
    "code": "FK",
    "name": "Фолклендские острова (Мальвинские)",
    "cases": {
      "ro": "Фолклендских островов",
      "da": "Фолклендским островам",
      "vi": "на Фолклендские острова",
      "tv": "Фолклендскими островами",
      "pr": "Фолклендских островах"
    },
    "currency": "FKP",
    "name_translations": { "en": "Falkland Islands" }
  },
  {
    "code": "FJ",
    "name": "Фиджи",
    "cases": {
      "ro": "Фиджи",
      "da": "Фиджи",
      "vi": "на Фиджи",
      "tv": "Фиджи",
      "pr": "Фиджи"
    },
    "currency": "FJD",
    "name_translations": { "en": "Fiji" }
  },
  {
    "code": "GD",
    "name": "Гренада",
    "cases": {
      "ro": "Гренады",
      "da": "Гренаде",
      "vi": "в Гренаду",
      "tv": "Гренадой",
      "pr": "Гренаде"
    },
    "currency": "XCD",
    "name_translations": { "en": "Grenada" }
  },
  {
    "code": "ZW",
    "name": "Зимбабве",
    "cases": {
      "ro": "Зимбабве",
      "da": "Зимбабве",
      "vi": "в Зимбабве",
      "tv": "Зимбабве",
      "pr": "Зимбабве"
    },
    "currency": "ZWD",
    "name_translations": { "en": "Zimbabwe" }
  },
  {
    "code": "ZA",
    "name": "ЮАР",
    "cases": {
      "ro": "ЮАР",
      "da": "ЮАР",
      "vi": "в ЮАР",
      "tv": "ЮАР",
      "pr": "ЮАР"
    },
    "currency": "ZAR",
    "name_translations": { "en": "South Africa" }
  },
  {
    "code": "YE",
    "name": "Йемен",
    "cases": {
      "ro": "Йемена",
      "da": "Йемену",
      "vi": "в Йемен",
      "tv": "Йеменом",
      "pr": "Йемене"
    },
    "currency": "YER",
    "name_translations": { "en": "Yemen" }
  },
  {
    "code": "XK",
    "name": "Косово",
    "cases": {
      "ro": "Косово",
      "da": "Косово",
      "vi": "Косово",
      "tv": "Косово",
      "pr": "Косово"
    },
    "currency": "EUR",
    "name_translations": { "en": "Kosovo" }
  },
  {
    "code": "YT",
    "name": "Майотта",
    "cases": {
      "ro": "Майотты",
      "da": "Майотте",
      "vi": "в Майотту",
      "tv": "Майоттой",
      "pr": "Майотте"
    },
    "currency": "EUR",
    "name_translations": { "en": "Mayotte" }
  },
  {
    "code": "VU",
    "name": "Вануату",
    "cases": {},
    "currency": "VUV",
    "name_translations": { "en": "Vanuatu" }
  },
  {
    "code": "VN",
    "name": "Вьетнам",
    "cases": {
      "ro": "Вьетнама",
      "da": "Вьетнаму",
      "vi": "в Вьетнам",
      "tv": "Вьетнамом",
      "pr": "Вьетнаме"
    },
    "currency": "VND",
    "name_translations": { "en": "Vietnam" }
  },
  {
    "code": "VI",
    "name": "Виргинские острова",
    "cases": {
      "ro": "Виргинских островов",
      "da": "Виргинским островам",
      "vi": "на Виргинские острова",
      "tv": "Виргинскими островами",
      "pr": "Виргинских островах"
    },
    "currency": "USD",
    "name_translations": { "en": "U.S. Virgin Islands" }
  },
  {
    "code": "VG",
    "name": "Виргинские острова, Британские",
    "cases": { "ro": "", "da": "", "vi": "", "tv": "", "pr": "" },
    "currency": "USD",
    "name_translations": { "en": "British Virgin Islands" }
  },
  {
    "code": "VE",
    "name": "Венесуэла",
    "cases": {
      "ro": "Венесуэлы",
      "da": "Венесуэле",
      "vi": "в Венесуэлу",
      "tv": "Венесуэлой",
      "pr": "Венесуэле"
    },
    "currency": "VEF",
    "name_translations": { "en": "Venezuela" }
  },
  {
    "code": "ZM",
    "name": "Замбия",
    "cases": {
      "ro": "Замбии",
      "da": "Замбии",
      "vi": "в Замбию",
      "tv": "Замбией",
      "pr": "о Замбии"
    },
    "currency": "ZMK",
    "name_translations": { "en": "Zambia" }
  },
  {
    "code": "VA",
    "name": "Ватикан",
    "cases": {
      "ro": "Ватикана",
      "da": "Ватикану",
      "vi": "в Ватикан",
      "tv": "Ватиканом",
      "pr": "о Ватикане"
    },
    "currency": "EUR",
    "name_translations": { "en": "Vatican City" }
  },
  {
    "code": "VC",
    "name": "Сент-Винсент и Гренадины",
    "cases": {
      "ro": "Сент-Винсента и Гренадин",
      "da": "в Сент-Винсент и Гренадины",
      "vi": "Сент-Винсент и Гренадины",
      "tv": "Сент-Винсентом и Гренадинами",
      "pr": "Сент-Винсенте и Гренадинах"
    },
    "currency": "XCD",
    "name_translations": { "en": "Saint Vincent and the Grenadines" }
  },
  {
    "code": "WS",
    "name": "Самоа",
    "cases": {
      "ro": "Самоа",
      "da": "Самоа",
      "vi": "на Самоа",
      "tv": "Самоа",
      "pr": "Самоа"
    },
    "currency": "WST",
    "name_translations": { "en": "Samoa" }
  },
  {
    "code": "UY",
    "name": "Уругвай",
    "cases": {
      "ro": "Уругвая",
      "da": "Уругваю",
      "vi": "в Уругвай",
      "tv": "Уругваем",
      "pr": "Уругвае"
    },
    "currency": "UYU",
    "name_translations": { "en": "Uruguay" }
  },
  {
    "code": "UZ",
    "name": "Узбекистан",
    "cases": {
      "ro": "Узбекистана",
      "da": "Узбекистану",
      "vi": "в Узбекистан",
      "tv": "Узбекистаном",
      "pr": "Узбекистане"
    },
    "currency": "UZS",
    "name_translations": { "en": "Uzbekistan" }
  },
  {
    "code": "WF",
    "name": "Уоллис и Футуна",
    "cases": {
      "ro": "Уоллиса и Футуны",
      "da": "Уоллису и Футуне",
      "vi": "в Уоллис и Футуну",
      "tv": "Уоллис и Футуне",
      "pr": "Уоллисе и Футуне"
    },
    "currency": "XPF",
    "name_translations": { "en": "Wallis and Futuna" }
  },
  {
    "code": "TT",
    "name": "Тринидад и Тобаго",
    "cases": {
      "ro": "Тринидад и Тобаго",
      "da": "Тринидад и Тобаго",
      "vi": "в Тринидад и Тобаго",
      "tv": "Тринидад и Тобаго",
      "pr": "Тринидад и Тобаго"
    },
    "currency": "TTD",
    "name_translations": { "en": "Trinidad and Tobago" }
  },
  {
    "code": "UG",
    "name": "Уганда",
    "cases": {
      "ro": "Уганды",
      "da": "Уганде",
      "vi": "в Уганду",
      "tv": "Угандой",
      "pr": "Уганде"
    },
    "currency": "UGX",
    "name_translations": { "en": "Uganda" }
  },
  {
    "code": "TJ",
    "name": "Таджикистан",
    "cases": {
      "ro": "Таджикистана",
      "da": "Таджикистану",
      "vi": "в Таджикистан",
      "tv": "Таджикистаном",
      "pr": "Таджикистане"
    },
    "currency": "TJS",
    "name_translations": { "en": "Tajikistan" }
  },
  {
    "code": "TM",
    "name": "Туркменистан",
    "cases": {
      "ro": "Туркменистана",
      "da": "Туркменистану",
      "vi": "в Туркменистан",
      "tv": "Туркменистаном",
      "pr": "Туркменистане"
    },
    "currency": "TMT",
    "name_translations": { "en": "Turkmenistan" }
  },
  {
    "code": "TH",
    "name": "Таиланд",
    "cases": {
      "ro": "Таиланда",
      "da": "Таиланду",
      "vi": "в Таиланд",
      "tv": "Таиландом",
      "pr": "Таиланде"
    },
    "currency": "THB",
    "name_translations": { "en": "Thailand" }
  },
  {
    "code": "TD",
    "name": "Чад",
    "cases": {
      "ro": "Чад",
      "da": "Чад",
      "vi": "в Чад",
      "tv": "Чад",
      "pr": "Чад"
    },
    "currency": "XAF",
    "name_translations": { "en": "Chad" }
  },
  {
    "code": "SZ",
    "name": "Свазиленд",
    "cases": {
      "ro": "Свазиленда",
      "da": "Свазиленду",
      "vi": "в Свазиленд",
      "tv": "Свазилендом",
      "pr": "Свазиленде"
    },
    "currency": "SZL",
    "name_translations": { "en": "Swaziland" }
  },
  {
    "code": "SY",
    "name": "Сирия",
    "cases": {
      "ro": "Сирии",
      "da": "Сирии",
      "vi": "в Сирию",
      "tv": "Сирией",
      "pr": "Сирии"
    },
    "currency": "SYP",
    "name_translations": { "en": "Syria" }
  },
  {
    "code": "TG",
    "name": "Того",
    "cases": {
      "ro": "Того",
      "da": "Того",
      "vi": "в Того",
      "tv": "Того",
      "pr": "Того"
    },
    "currency": "XOF",
    "name_translations": { "en": "Togo" }
  },
  {
    "code": "US",
    "name": "США",
    "cases": {
      "ro": "США",
      "da": "США",
      "vi": "в США",
      "tv": "США",
      "pr": "США"
    },
    "currency": "USD",
    "name_translations": { "en": "United States" }
  },
  {
    "code": "UA",
    "name": "Украина",
    "cases": {
      "ro": "Украины",
      "da": "Украине",
      "vi": "в Украину",
      "tv": "Украиной",
      "pr": "Украине"
    },
    "currency": "UAH",
    "name_translations": { "en": "Ukraine" }
  },
  {
    "code": "MK",
    "name": "Македония",
    "cases": {
      "ro": "Македонии",
      "da": "Македонии",
      "vi": "в Македонию",
      "tv": "Македонией",
      "pr": "Македонии"
    },
    "currency": "MKD",
    "name_translations": { "en": "Macedonia" }
  },
  {
    "code": "MM",
    "name": "Мьянма",
    "cases": {
      "ro": "Мьянмы",
      "da": "Мьянме",
      "vi": "в Мьянму",
      "tv": "Мьянмой",
      "pr": "Мьянме"
    },
    "currency": "MMK",
    "name_translations": { "en": "Myanmar" }
  },
  {
    "code": "SO",
    "name": "Сомали",
    "cases": {
      "ro": "Сомали",
      "da": "Сомали",
      "vi": "в Сомали",
      "tv": "Сомали",
      "pr": "Сомали"
    },
    "currency": "SOS",
    "name_translations": { "en": "Somalia" }
  },
  {
    "code": "SM",
    "name": "Сан Марино",
    "cases": {
      "ro": "Сан Марино",
      "da": "Сан Марино",
      "vi": "в Сан Марино",
      "tv": "Сан Марино",
      "pr": "о Сан Марино"
    },
    "currency": "EUR",
    "name_translations": { "en": "San Marino" }
  },
  {
    "code": "SL",
    "name": "Сьерра Леоне",
    "cases": {
      "ro": "Сьерры-Леоне",
      "da": "Сьерре-Леоне",
      "vi": "в Сьерру-Леоне",
      "tv": "Сьеррой-Леоне",
      "pr": "Сьерре-Леоне"
    },
    "currency": "SLL",
    "name_translations": { "en": "Sierra Leone" }
  },
  {
    "code": "SD",
    "name": "Судан",
    "cases": {
      "ro": "Судана",
      "da": "Судану",
      "vi": "в Судан",
      "tv": "Суданом",
      "pr": "Судане"
    },
    "currency": "SDG",
    "name_translations": { "en": "Sudan" }
  },
  {
    "code": "SA",
    "name": "Саудовская Аравия",
    "cases": {
      "ro": "Саудовской Аравии",
      "da": "Саудовской Аравии",
      "vi": "в Саудовскую Аравию",
      "tv": "Саудовской Аравией",
      "pr": "Саудовской Аравии"
    },
    "currency": "SAR",
    "name_translations": { "en": "Saudi Arabia" }
  },
  {
    "code": "RO",
    "name": "Румыния",
    "cases": {
      "ro": "Румынии",
      "da": "Румынии",
      "vi": "в Румынию",
      "tv": "Румынией",
      "pr": "Румынии"
    },
    "currency": "RON",
    "name_translations": { "en": "Romania" }
  },
  {
    "code": "RS",
    "name": "Сербия",
    "cases": {
      "ro": "Сербии",
      "da": "Сербии",
      "vi": "в Сербию",
      "tv": "Сербией",
      "pr": "Сербии"
    },
    "currency": "RSD",
    "name_translations": { "en": "Serbia" }
  },
  {
    "code": "PS",
    "name": "Палестинские территории",
    "cases": {
      "ro": "Палестинских территорий",
      "da": "Палестинским территориям",
      "vi": "на Палестинские территории",
      "tv": "Палестинскими территориями",
      "pr": "Палестинских территориях"
    },
    "currency": "ILS",
    "name_translations": { "en": "Palestine" }
  },
  {
    "code": "PK",
    "name": "Пакистан",
    "cases": {
      "ro": "Пакистана",
      "da": "Пакистану",
      "vi": "в Пакистан",
      "tv": "Пакистаном",
      "pr": "Пакистане"
    },
    "currency": "PKR",
    "name_translations": { "en": "Pakistan" }
  },
  {
    "code": "PE",
    "name": "Перу",
    "cases": {
      "ro": "Перу",
      "da": "Перу",
      "vi": "в Перу",
      "tv": "Перу",
      "pr": "Перу"
    },
    "currency": "PEN",
    "name_translations": { "en": "Peru" }
  },
  {
    "code": "NO",
    "name": "Норвегия",
    "cases": {
      "ro": "Норвегии",
      "da": "Норвегии",
      "vi": "в Норвегию",
      "tv": "Норвегией",
      "pr": "Норвегии"
    },
    "currency": "NOK",
    "name_translations": { "en": "Norway" }
  },
  {
    "code": "NL",
    "name": "Нидерланды",
    "cases": {
      "ro": "Нидерландов",
      "da": "Нидерландам",
      "vi": "в Нидерланды",
      "tv": "Нидерландами",
      "pr": "Нидерландах"
    },
    "currency": "EUR",
    "name_translations": { "en": "Netherlands" }
  },
  {
    "code": "NI",
    "name": "Никарагуа",
    "cases": {
      "ro": "Никарагуа",
      "da": "Никарагуа",
      "vi": "в Никарагуа",
      "tv": "Никарагуа",
      "pr": "Никарагуа"
    },
    "currency": "NIO",
    "name_translations": { "en": "Nicaragua" }
  },
  {
    "code": "SV",
    "name": "Сальвадор",
    "cases": {
      "ro": "Сальвадора",
      "da": "Сальвадору",
      "vi": "в Сальвадор",
      "tv": "Сальвадором",
      "pr": "Сальвадоре"
    },
    "currency": "USD",
    "name_translations": { "en": "El Salvador" }
  },
  {
    "code": "MW",
    "name": "Малави",
    "cases": { "ro": "", "da": "", "vi": "", "tv": "", "pr": "" },
    "currency": "MWK",
    "name_translations": { "en": "Malawi" }
  },
  {
    "code": "MR",
    "name": "Мавритания",
    "cases": {
      "ro": "Мавритании",
      "da": "Мавритании",
      "vi": "в Мавританию",
      "tv": "Мавританией",
      "pr": "Мавритании"
    },
    "currency": "MRO",
    "name_translations": { "en": "Mauritania" }
  },
  {
    "code": "IR",
    "name": "Иран",
    "cases": {
      "ro": "Ирана",
      "da": "Ирану",
      "vi": "в Иран",
      "tv": "Ираном",
      "pr": "Иране"
    },
    "currency": "IRR",
    "name_translations": { "en": "Iran" }
  },
  {
    "code": "MN",
    "name": "Монголия",
    "cases": {
      "ro": "Монголии",
      "da": "Монголии",
      "vi": "в Монголию",
      "tv": "Монголией",
      "pr": "Монголии"
    },
    "currency": "MNT",
    "name_translations": { "en": "Mongolia" }
  },
  {
    "code": "MG",
    "name": "Мадагаскар",
    "cases": {
      "ro": "Мадагаскара",
      "da": "Мадагаскару",
      "vi": "в Мадагаскар",
      "tv": "Мадагаскаром",
      "pr": "о Мадагаскаре"
    },
    "currency": "MGA",
    "name_translations": { "en": "Madagascar" }
  },
  {
    "code": "PL",
    "name": "Польша",
    "cases": {
      "ro": "Польши",
      "da": "Польше",
      "vi": "в Польшу",
      "tv": "Польшей",
      "pr": "Польше"
    },
    "currency": "PLN",
    "name_translations": { "en": "Poland" }
  },
  {
    "code": "KZ",
    "name": "Казахстан",
    "cases": {
      "ro": "Казахстана",
      "da": "Казахстану",
      "vi": "в Казахстан",
      "tv": "Казахстаном",
      "pr": "Казахстане"
    },
    "currency": "KZT",
    "name_translations": { "en": "Kazakhstan" }
  },
  {
    "code": "HR",
    "name": "Хорватия",
    "cases": {
      "ro": "Хорватии",
      "da": "Хорватии",
      "vi": "в Хорватию",
      "tv": "Хорватией",
      "pr": "Хорватии"
    },
    "currency": "HRK",
    "name_translations": { "en": "Croatia" }
  },
  {
    "code": "MY",
    "name": "Малайзия",
    "cases": {
      "ro": "Малайзии",
      "da": "Малайзии",
      "vi": "в Малайзию",
      "tv": "Малайзией",
      "pr": "Малайзии"
    },
    "currency": "MYR",
    "name_translations": { "en": "Malaysia" }
  },
  {
    "code": "MF",
    "name": "Сен-Мартен",
    "cases": {
      "ro": "Сен-Мартена",
      "da": "Сен-Мартену",
      "vi": "в Сен-Мартена",
      "tv": "Сен-Мартеном",
      "pr": "Сен-Мартене"
    },
    "currency": "EUR",
    "name_translations": { "en": "Saint Martin" }
  },
  {
    "code": "GQ",
    "name": "Экваториальная Гвинея",
    "cases": {
      "ro": "Экваториальной Гвинеи",
      "da": "Экваториальной Гвинее",
      "vi": "в Экваториальную Гвинею",
      "tv": "Экваториальной Гвинеей",
      "pr": "Экваториальной Гвинее"
    },
    "currency": "XAF",
    "name_translations": { "en": "Equatorial Guinea" }
  },
  {
    "code": "KE",
    "name": "Кения",
    "cases": {
      "ro": "Кению",
      "da": "Кении",
      "vi": "в Кению",
      "tv": "Кенией",
      "pr": "Кении"
    },
    "currency": "KES",
    "name_translations": { "en": "Kenya" }
  },
  {
    "code": "IT",
    "name": "Италия",
    "cases": {
      "ro": "Италии",
      "da": "Италии",
      "vi": "в Италию",
      "tv": "Италией",
      "pr": "Италии"
    },
    "currency": "EUR",
    "name_translations": { "en": "Italy" }
  },
  {
    "code": "GT",
    "name": "Гватемала",
    "cases": {
      "ro": "Гватемалы",
      "da": "Гватемале",
      "vi": "в Гватемалу",
      "tv": "Гватемалой",
      "pr": "Гватемале"
    },
    "currency": "GTQ",
    "name_translations": { "en": "Guatemala" }
  },
  {
    "code": "SR",
    "name": "Суринам",
    "cases": {
      "ro": "Суринама",
      "da": "Суринаму",
      "vi": "в Суринам",
      "tv": "Суринамом",
      "pr": "Суринаме"
    },
    "currency": "SRD",
    "name_translations": { "en": "Suriname" }
  },
  {
    "code": "JO",
    "name": "Иордания",
    "cases": {
      "ro": "Иордании",
      "da": "Иордании",
      "vi": "в Иорданию",
      "tv": "Иорданией",
      "pr": "Иордании"
    },
    "currency": "JOD",
    "name_translations": { "en": "Jordan" }
  },
  {
    "code": "MX",
    "name": "Мексика",
    "cases": {
      "ro": "Мексики",
      "da": "Мексике",
      "vi": "в Мексику",
      "tv": "Мексикой",
      "pr": "Мексике"
    },
    "currency": "MXN",
    "name_translations": { "en": "Mexico" }
  },
  {
    "code": "KG",
    "name": "Киргизия",
    "cases": {
      "ro": "Кыргызстана",
      "da": "Кыргызстану",
      "vi": "в Кыргызстан",
      "tv": "Кыргызстаном",
      "pr": "Кыргызстане"
    },
    "currency": "KGS",
    "name_translations": { "en": "Kyrgyzstan" }
  },
  {
    "code": "KP",
    "name": "Северная Корея",
    "cases": {
      "ro": "Северной Кореи",
      "da": "Северной Корее",
      "vi": "в Северную Корею",
      "tv": "Северной Кореей",
      "pr": "Северной Корее"
    },
    "currency": "KPW",
    "name_translations": { "en": "North Korea" }
  },
  {
    "code": "ID",
    "name": "Индонезия",
    "cases": {
      "ro": "Индонезии",
      "da": "Индонезии",
      "vi": "в Индонезию",
      "tv": "Индонезией",
      "pr": "Индонезии"
    },
    "currency": "IDR",
    "name_translations": { "en": "Indonesia" }
  },
  {
    "code": "GY",
    "name": "Гайана",
    "cases": {
      "ro": "Гайаны",
      "da": "Гайане",
      "vi": "в Гайану",
      "tv": "Гайаной",
      "pr": "Гайане"
    },
    "currency": "GYD",
    "name_translations": { "en": "Guyana" }
  },
  {
    "code": "HN",
    "name": "Гондурас",
    "cases": {
      "ro": "Гондурас",
      "da": "Гондурасу",
      "vi": "в Гондурас",
      "tv": "Гондурасом",
      "pr": "о Гондурасе"
    },
    "currency": "HNL",
    "name_translations": { "en": "Honduras" }
  },
  {
    "code": "GW",
    "name": "Гвинея-Биссау",
    "cases": {
      "ro": "Гвинеи-Биссау",
      "da": "Гвинее-Биссау",
      "vi": "в Гвинею-Биссау",
      "tv": "Гвинеей-Биссау",
      "pr": "Гвинее-Биссау"
    },
    "currency": "XOF",
    "name_translations": { "en": "Guinea-Bissau" }
  },
  {
    "code": "GS",
    "name": "Южная Джорджия и Южные Сандвичевы острова",
    "cases": {
      "ro": "Южной Джорджии и Южных Сандвичевых островов",
      "da": "Южной Джорджии и Южным Сандвичевым островам",
      "vi": "в Южную Джорджию и Южные Сандвичевы острова",
      "tv": "Южной Джорджией и Южными Сандвичевыми островами",
      "pr": "Южной Джорджии и Южных Сандвичевых островах"
    },
    "currency": "GBP",
    "name_translations": {
      "en": "South Georgia and the South Sandwich Islands"
    }
  },
  {
    "code": "GP",
    "name": "Гваделупа",
    "cases": {
      "ro": "Гваделупы",
      "da": "Гваделупе",
      "vi": "в Гваделупу",
      "tv": "Гваделупой",
      "pr": "Гваделупе"
    },
    "currency": "EUR",
    "name_translations": { "en": "Guadeloupe" }
  },
  {
    "code": "IQ",
    "name": "Ирак",
    "cases": {
      "ro": "Ирака",
      "da": "Ираку",
      "vi": "в Ирак",
      "tv": "Ираком",
      "pr": "Ираке"
    },
    "currency": "IQD",
    "name_translations": { "en": "Iraq" }
  },
  {
    "code": "GH",
    "name": "Гана",
    "cases": {
      "ro": "Ганы",
      "da": "Гане",
      "vi": "в Гану",
      "tv": "Ганой",
      "pr": "Гане"
    },
    "currency": "GHS",
    "name_translations": { "en": "Ghana" }
  },
  {
    "code": "GM",
    "name": "Гамбия",
    "cases": {
      "ro": "Гамбии",
      "da": "Гамбии",
      "vi": "в Гамбию",
      "tv": "Гамбией",
      "pr": "Гамбии"
    },
    "currency": "GMD",
    "name_translations": { "en": "Gambia" }
  },
  {
    "code": "GE",
    "name": "Грузия",
    "cases": {
      "ro": "Грузии",
      "da": "Грузии",
      "vi": "в Грузию",
      "tv": "Грузией",
      "pr": "Грузии"
    },
    "currency": "GEL",
    "name_translations": { "en": "Georgia" }
  },
  {
    "code": "IL",
    "name": "Израиль",
    "cases": {
      "ro": "Израиля",
      "da": "Израилю",
      "vi": "в Израиль",
      "tv": "Израилем",
      "pr": "Израиле"
    },
    "currency": "ILS",
    "name_translations": { "en": "Israel" }
  },
  {
    "code": "FR",
    "name": "Франция",
    "cases": {
      "ro": "Франции",
      "da": "Франции",
      "vi": "во Францию",
      "tv": "Францией",
      "pr": "Франции"
    },
    "currency": "EUR",
    "name_translations": { "en": "France" }
  },
  {
    "code": "GR",
    "name": "Греция",
    "cases": {
      "ro": "Греции",
      "da": "Греции",
      "vi": "в Грецию",
      "tv": "Грецией",
      "pr": "Греции"
    },
    "currency": "EUR",
    "name_translations": { "en": "Greece" }
  },
  {
    "code": "GF",
    "name": "Французская Гвиана",
    "cases": {
      "ro": "Французской Гвианы",
      "da": "Французской Гвиане",
      "vi": "в Французскую Гвиану",
      "tv": "Французской Гвианой",
      "pr": "Французской Гвиане"
    },
    "currency": "EUR",
    "name_translations": { "en": "French Guiana" }
  },
  {
    "code": "CO",
    "name": "Колумбия",
    "cases": {
      "ro": "Колумбии",
      "da": "Колумбии",
      "vi": "в Колумбию",
      "tv": "Колумбией",
      "pr": "Колумбии"
    },
    "currency": "COP",
    "name_translations": { "en": "Colombia" }
  },
  {
    "code": "CI",
    "name": "Кот д'Ивуар",
    "cases": {
      "ro": "Кот д&#039;Ивуар",
      "da": "Кот д&#039;Ивуар",
      "vi": "в Кот д'Ивуар",
      "tv": "Кот д&#039;Ивуар",
      "pr": "Кот д&#039;Ивуар"
    },
    "currency": "XOF",
    "name_translations": { "en": "Ivory Coast" }
  },
  {
    "code": "CM",
    "name": "Камерун",
    "cases": {
      "ro": "Камеруна",
      "da": "Камеруну",
      "vi": "в Камерун",
      "tv": "Камеруном",
      "pr": "Камеруне"
    },
    "currency": "XAF",
    "name_translations": { "en": "Cameroon" }
  },
  {
    "code": "IN",
    "name": "Индия",
    "cases": {
      "ro": "Индии",
      "da": "Индии",
      "vi": "в Индию",
      "tv": "Индией",
      "pr": "Индии"
    },
    "currency": "INR",
    "name_translations": { "en": "India" }
  },
  {
    "code": "AM",
    "name": "Армения",
    "cases": {
      "ro": "Армении",
      "da": "Армении",
      "vi": "в Армению",
      "tv": "Арменией",
      "pr": "Армении"
    },
    "currency": "AMD",
    "name_translations": { "en": "Armenia" }
  },
  {
    "code": "DE",
    "name": "Германия",
    "cases": {
      "ro": "Германии",
      "da": "Германии",
      "vi": "в Германию",
      "tv": "Германией",
      "pr": "Германии"
    },
    "currency": "EUR",
    "name_translations": { "en": "Germany" }
  },
  {
    "code": "BO",
    "name": "Боливия",
    "cases": {
      "ro": "Боливии",
      "da": "Боливии",
      "vi": "в Боливию",
      "tv": "Боливией",
      "pr": "Боливии"
    },
    "currency": "BOB",
    "name_translations": { "en": "Bolivia" }
  },
  {
    "code": "BY",
    "name": "Беларусь",
    "cases": {
      "ro": "Беларуси",
      "da": "Беларуси",
      "vi": "в Беларусь",
      "tv": "Беларусью",
      "pr": "Беларуси"
    },
    "currency": "BYR",
    "name_translations": { "en": "Belarus" }
  },
  {
    "code": "BW",
    "name": "Ботсвана",
    "cases": {
      "ro": "Ботсваны",
      "da": "Ботсване",
      "vi": "в Ботсвану",
      "tv": "Ботсваной",
      "pr": "о Ботсване"
    },
    "currency": "BWP",
    "name_translations": { "en": "Botswana" }
  },
  {
    "code": "CF",
    "name": "ЦАР",
    "cases": {
      "ro": "Центральноафриканской Республики",
      "da": "Центральноафриканской Республике",
      "vi": "в Центральноафриканскую Республику",
      "tv": "Центральноафриканской Республикой",
      "pr": "Центральноафриканской Республике"
    },
    "currency": "XAF",
    "name_translations": { "en": "Central African Republic" }
  },
  {
    "code": "BJ",
    "name": "Бенин",
    "cases": {
      "ro": "Бенина",
      "da": "Бенину",
      "vi": "в Бенин",
      "tv": "Бенином",
      "pr": "Бенине"
    },
    "currency": "XOF",
    "name_translations": { "en": "Benin" }
  },
  {
    "code": "DZ",
    "name": "Алжир",
    "cases": {
      "ro": "Алжира",
      "da": "Алжиру",
      "vi": "в Алжир",
      "tv": "Алжиром",
      "pr": "Алжире"
    },
    "currency": "DZD",
    "name_translations": { "en": "Algeria" }
  },
  {
    "code": "CG",
    "name": "Конго",
    "cases": {
      "ro": "Конго",
      "da": "Конго",
      "vi": "в Конго",
      "tv": "Конго",
      "pr": "Конго"
    },
    "currency": "XAF",
    "name_translations": { "en": "Republic of the Congo" }
  },
  {
    "code": "BI",
    "name": "Бурунди",
    "cases": {
      "ro": "Бурунди",
      "da": "Бурунди",
      "vi": "в Бурунди",
      "tv": "Бурунди",
      "pr": "Бурунди"
    },
    "currency": "BIF",
    "name_translations": { "en": "Burundi" }
  },
  {
    "code": "BD",
    "name": "Бангладеш",
    "cases": {
      "ro": "Бангладеш",
      "da": "Бангладеш",
      "vi": "в Бангладеш",
      "tv": "Бангладеш",
      "pr": "Бангладеш"
    },
    "currency": "BDT",
    "name_translations": { "en": "Bangladesh" }
  },
  {
    "code": "BE",
    "name": "Бельгия",
    "cases": {
      "ro": "Бельгии",
      "da": "Бельгии",
      "vi": "в Бельгию",
      "tv": "Бельгией",
      "pr": "Бельгии"
    },
    "currency": "EUR",
    "name_translations": { "en": "Belgium" }
  },
  {
    "code": "CH",
    "name": "Швейцария",
    "cases": {
      "ro": "Швейцарии",
      "da": "Швейцарии",
      "vi": "в Швейцарию",
      "tv": "Швейцарией",
      "pr": "Швейцарии"
    },
    "currency": "CHF",
    "name_translations": { "en": "Switzerland" }
  },
  {
    "code": "UM",
    "name": "Малые Тихоокеанские отдаленные острова Соединенных Штатов",
    "cases": {
      "ro": "Малые Тихоокеанские отдаленные острова Соединенных Штатов",
      "da": "Малым Тихоокеанским отдаленным островам Соединенных Штатов",
      "vi": "в Малые Тихоокеанские отдаленные острова Соединенных Штатов",
      "tv": "Малыми Тихоокеанскими отдаленными островами Соединенных Штатов",
      "pr": "о Малых Тихоокеанских отдаленныных островах Соединенных Штатов"
    },
    "currency": "USD",
    "name_translations": { "en": "United States Minor Outlying Islands" }
  },
  {
    "code": "AO",
    "name": "Ангола",
    "cases": {
      "ro": "Анголы",
      "da": "Анголе",
      "vi": "в Анголу",
      "tv": "Анголой",
      "pr": "Анголе"
    },
    "currency": "AOA",
    "name_translations": { "en": "Angola" }
  },
  {
    "code": "RU",
    "name": "Россия",
    "cases": {
      "ro": "России",
      "da": "России",
      "vi": "в Россию",
      "tv": "Россией",
      "pr": "России"
    },
    "currency": "RUB",
    "name_translations": { "en": "Russia" }
  },
  {
    "code": "SK",
    "name": "Словакия",
    "cases": {
      "ro": "Словакии",
      "da": "Словакии",
      "vi": "в Словакию",
      "tv": "Словакией",
      "pr": "Словакии"
    },
    "currency": "EUR",
    "name_translations": { "en": "Slovakia" }
  },
  {
    "code": "SN",
    "name": "Сенегал",
    "cases": {
      "ro": "Сенегала",
      "da": "Сенегалу",
      "vi": "в Сенегал",
      "tv": "Сенегалом",
      "pr": "Сенегале"
    },
    "currency": "XOF",
    "name_translations": { "en": "Senegal" }
  },
  {
    "code": "TR",
    "name": "Турция",
    "cases": {
      "ro": "Турции",
      "da": "Турции",
      "vi": "в Турцию",
      "tv": "Турцией",
      "pr": "Турции"
    },
    "currency": "TRY",
    "name_translations": { "en": "Turkey" }
  },
  {
    "code": "TZ",
    "name": "Танзания",
    "cases": {
      "ro": "Танзании",
      "da": "Танзании",
      "vi": "в Танзанию",
      "tv": "Танзанией",
      "pr": "Танзании"
    },
    "currency": "TZS",
    "name_translations": { "en": "Tanzania" }
  },
  {
    "code": "SS",
    "name": "Южный Судан",
    "cases": {
      "ro": "Южного Судана",
      "da": "Южному Судану",
      "vi": "в Южный Судан",
      "tv": "Южным Суданом",
      "pr": "о Южном Судане "
    },
    "currency": null,
    "name_translations": { "en": "South Sudan" }
  },
  {
    "code": "KX",
    "name": "Крым",
    "cases": {
      "ro": "Крыма",
      "da": "Крыму",
      "vi": "в Крым",
      "tv": "Крымом",
      "pr": "Крыме"
    },
    "currency": null,
    "name_translations": { "en": "Crimea" }
  }
]
