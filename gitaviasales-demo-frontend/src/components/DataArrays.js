const country = [
  {
    countryName: "Россия",
    id: 1000,
    countryFlag: "flag-ru.svg"
  },
  {
    countryName: "Испания",
    id: 1001,
    countryFlag: "flag-spa.svg"
  },
  {
    countryName: "Армения",
    id: 1002,
    countryFlag: "flag-arm.svg"
  },
  {
    countryName: "Молдавия",
    id: 1003,
    countryFlag: "flag-mol.svg"
  },
  {
    countryName: "Крым",
    id: 1004,
    countryFlag: "flag-ru.svg"
  }
];

const city = [
  {
    cityName: "Москва",
    cityAbbreviation: "MOV",
    id: 1,
    countryId: 1000
  },
  {
    cityName: "Симферополь",
    cityAbbreviation: "SIP",
    id: 2,
    countryId: 1004
  },
  {
    cityName: "Барселона",
    cityAbbreviation: "BAR",
    id: 3,
    countryId: 1001
  },
  {
    cityName: "Санк-Петербург",
    cityAbbreviation: "PET",
    id: 4,
    countryId: 1000
  },
  {
    cityName: "Краснодар",
    cityAbbreviation: "KRA",
    id: 5,
    countryId: 1000
  },
  {
    cityName: "Сочи(Адлер)",
    cityAbbreviation: "AER",
    id: 6,
    countryId: 1000
  },
  {
    cityName: "Минеральные воды",
    cityAbbreviation: "MRV",
    id: 7,
    countryId: 1000
  },
  {
    cityName: "Новосибирск",
    cityAbbreviation: "NOV",
    id: 8,
    countryId: 1000
  },
  {
    cityName: "Екатерингбург",
    cityAbbreviation: "EKT",
    id: 9,
    countryId: 1000
  },
  {
    cityName: "Челябинск",
    cityAbbreviation: "CHL",
    id: 10,
    countryId: 1000
  },
  {
    cityName: "Ростов на дону",
    cityAbbreviation: "ROD",
    id: 11,
    countryId: 1000
  },
  {
    cityName: "Сургут",
    cityAbbreviation: "CYR",
    id: 12,
    countryId: 1000
  },
  {
    cityName: "Новый Уренгой",
    cityAbbreviation: "NYG",
    id: 13,
    countryId: 1000
  },
  {
    cityName: "Кишинёв",
    cityAbbreviation: "KSV",
    id: 14,
    countryId: 1003
  },
  {
    cityName: "Ереван",
    cityAbbreviation: "ERV",
    id: 15,
    countryId: 1002
  }
];

const routes = [
  {
    fromId: 1,
    toId: 2,
    ticketPrice: 4813,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 1,
    toId: 6,
    ticketPrice: 1334,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 1,
    toId: 4,
    ticketPrice: 1508,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 1,
    toId: 7,
    ticketPrice: 2074,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 1,
    toId: 2,
    ticketPrice: 2407,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 1,
    toId: 3,
    ticketPrice: 4247,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 1,
    toId: 5,
    ticketPrice: 1212,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 15,
    toId: 2,
    ticketPrice: 4813,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 1,
    toId: 2,
    ticketPrice: 2503,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 2,
    toId: 1,
    ticketPrice: 2489,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 1,
    toId: 3,
    ticketPrice: 4814,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 1,
    toId: 2,
    ticketPrice: 5813,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 4,
    toId: 2,
    ticketPrice: 7857,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 4,
    toId: 2,
    ticketPrice: 7858,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 8,
    toId: 2,
    ticketPrice: 15127,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 9,
    toId: 2,
    ticketPrice: 9275,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 10,
    toId: 2,
    ticketPrice: 9148,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 1,
    toId: 15,
    ticketPrice: 8713,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 2,
    toId: 15,
    ticketPrice: 7220,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 14,
    toId: 15,
    ticketPrice: 10218,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 7,
    toId: 15,
    ticketPrice: 6201,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 5,
    toId: 15,
    ticketPrice: 12242,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 9,
    toId: 15,
    ticketPrice: 9299,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 3,
    toId: 14,
    ticketPrice: 6713,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 7,
    toId: 14,
    ticketPrice: 5220,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 15,
    toId: 14,
    ticketPrice: 7218,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 8,
    toId: 14,
    ticketPrice: 4201,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 11,
    toId: 14,
    ticketPrice: 9242,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 9,
    toId: 14,
    ticketPrice: 6299,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  }
];

export { country, city, routes };
