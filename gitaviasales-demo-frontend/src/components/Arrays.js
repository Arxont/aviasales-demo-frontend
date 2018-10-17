const country = [
  {
    countryName: "Россия",
    Id: 1000,
    countryFlag: "flag-ru.svg"
  },
  {
    countryName: "Испания",
    Id: 1001,
    countryFlag: "flag-spa.svg"
  },
  {
    countryName: "Армения",
    Id: 1002,
    countryFlag: "flag-arm.svg"
  },
  {
    countryName: "Молдавия",
    Id: 1003,
    countryFlag: "flag-mol.svg"
  },
  {
    countryName: "Крым",
    Id: 1004,
    countryFlag: "flag-ru.svg"
  },
  {
    text: "Russia",
    Id: 1004,
    countryFlag: "flag-ru.svg"
  },
  { key: "af", value: "af", flag: "af", text: "Afghanistan" }
];

const city = [
  {
    cityName: "Москва",
    Id: 1,
    countryId: 1000
  },
  {
    cityName: "Симферополь",
    Id: 2,
    countryId: 1004
  },
  {
    cityName: "Барселона",
    Id: 3,
    countryId: 1001
  },
  {
    cityName: "Санк-Петербург",
    Id: 4,
    countryId: 1000
  },
  {
    cityName: "Краснодар",
    Id: 5,
    countryId: 1000
  },
  {
    cityName: "Сочи",
    Id: 6,
    countryId: 1000
  },
  {
    cityName: "Минеральные воды",
    Id: 7,
    countryId: 1000
  },
  {
    cityName: "Новосибирск",
    Id: 8,
    countryId: 1000
  },
  {
    cityName: "Екатерингбург",
    Id: 9,
    countryId: 1000
  },
  {
    cityName: "Челябинск",
    Id: 10,
    countryId: 1000
  },
  {
    cityName: "Ростов на дону",
    Id: 11,
    countryId: 1000
  },
  {
    cityName: "Сургут",
    Id: 12,
    countryId: 1000
  },
  {
    cityName: "Новый Уренгой",
    Id: 13,
    countryId: 1000
  },
  {
    cityName: "Кишинёв",
    Id: 14,
    countryId: 1003
  },
  {
    cityName: "Ереван",
    Id: 15,
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
  }
];

export { country, city, routes };
