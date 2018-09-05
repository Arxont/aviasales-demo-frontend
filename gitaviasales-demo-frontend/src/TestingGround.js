import React from "react";
import styled from "styled-components";
/*
const cities = [
  {
    id: 1,
    name: "Kiev",
    pic: "https://gify.com/random"
  },
  {
    id: 2,
    name: "Moscov",
    pic: "https://gify.com/random"
  }
];

const routes = [
  {
    fromId: 1,
    toId: 2,
    price
  }
];
*/
const Country = [
  {
    countryName: "Россия",
    id: 1000,
    countryFlag: "flagRu.svg"
  },
  {
    countryName: "Испания",
    id: 1001,
    countryFlag: "flagSpa.svg"
  },
  {
    countryName: "Армения",
    id: 1002,
    countryFlag: "flagArm.svg"
  },
  {
    countryName: "Молдавия",
    id: 1003,
    countryFlag: "flagMol.svg"
  },
  {
    countryName: "Крым",
    id: 1004,
    countryFlag: "flagRu.svg"
  }
];

const City = [
  {
    cityName: "Москва",
    id: 1,
    countryId: "1000"
  },
  {
    cityName: "Симферополь",
    id: 2,
    countryId: "1004"
  },
  {
    cityName: "Барселона",
    id: 3,
    countryId: "1001"
  },
  {
    cityName: "Санк-Петербург",
    id: 4,
    countryId: "1000"
  },
  {
    cityName: "Краснодар",
    id: 5,
    countryId: "1000"
  },
  {
    cityName: "Сочи",
    id: 6,
    countryId: "1000"
  },
  {
    cityName: "Минеральные воды",
    id: 7,
    countryId: "1000"
  },
  {
    cityName: "Новосибирск",
    id: 8,
    countryId: "1000"
  },
  {
    cityName: "Екатерингбург",
    id: 9,
    countryId: "1000"
  },
  {
    cityName: "Челябинск",
    id: 10,
    countryId: "1000"
  },
  {
    cityName: "Ростов на дону",
    id: 11,
    countryId: "1000"
  },
  {
    cityName: "Сургут",
    id: 12,
    countryId: "1000"
  },
  {
    cityName: "Новый Уренгой",
    id: 13,
    countryId: "1000"
  },
  {
    cityName: "Кишинёв",
    id: 14,
    countryId: "1003"
  },
  {
    cityName: "Ереван",
    id: 15,
    countryId: "1002"
  }
];

const routes = [
  {
    fromId: 1,
    toId: 2,
    ticketPrice: "4813"
  },
  {
    fromId: 1,
    toId: 2,
    ticketPrice: "1200"
  },
  {
    fromId: 1,
    toId: 3,
    ticketPrice: "4814"
  },
  {
    fromId: 1,
    toId: 2,
    ticketPrice: "5813"
  },
  {
    fromId: 4,
    toId: 2,
    ticketPrice: "7857"
  },
  {
    fromId: 4,
    toId: 2,
    ticketPrice: "7858"
  },
  {
    fromId: 8,
    toId: 2,
    ticketPrice: "15127"
  },
  {
    fromId: 9,
    toId: 2,
    ticketPrice: "9275"
  },
  {
    fromId: 10,
    toId: 2,
    ticketPrice: "9148"
  }
];

/*
const minPrice = Math.min.apply(
  Math,
  Moscow.map(function(lowest) {
    return lowest.ticketPrice;
  })
); 
=== сравнение на равность
=> анонимная функция
filter создает новый массив который содержит елементы которые прошли условие
map- одержит в себе пары ключ+значение
*/

/* const findCityById = testId => ;
создаем константу findTopRoutesByCityId которой присваем значение cityId которое в свою очередь является функцией создающей новый массив из
элементов fromId массива routes где fromId равен cityId первых 9 элементов(с нуля по 8й) и создает обьект map седержащий в себе значение toId и
ticketPrice  */
const findTopRoutesByCityId = cityId =>
  routes
    .filter(({ fromId }) => fromId === cityId)
    .slice(0, 9)
    .map(
      { toId, ticketPrice } /* => ({ticketPrice, city: findCityById(toId)})*/
    );

const Results = ({ fromCityId }) => {
  const topRoutes = findTopRoutesByCityId(fromCityId);

  return (
    <div className="results-wrapper">
      {topRoutes.map(route => (
        <CityBlock route={route} />
      ))}
    </div>
  );
};

const CityBlock = ({ route }) => {
  return (
    <div className="city-block-wrapper">
      <img src={route.city.pic} alt="alt" />
      <div>{route.city.name}</div>
      <div>{route.price}</div>
    </div>
  );
};
