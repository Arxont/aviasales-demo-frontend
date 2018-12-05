import { city, country, routes } from "./DataArrays";
/*
fetch(
  `http://api.travelpayouts.com/data/ru/airlines.json&token=3168eb2e19e0d0762d68c83d9bde678d`,
  { mode: "cors" },
  {
    method: "GET",
    withCredentials: true,
    credentials: "include",
    headers: {
      Authorization: `X-Access-Token` + "3168eb2e19e0d0762d68c83d9bde678d",
      "Content-Type": "json"
    }
  }
).then(response => {
  let content = response.json();
  console.log(content);
});
*/
function join(lookupTable, mainTable, lookupKey, mainKey, select) {
  var l = lookupTable.length,
    m = mainTable.length,
    lookupIndex = [],
    output = [];
  for (var i = 0; i < l; i++) {
    var row = lookupTable[i];
    lookupIndex[row[lookupKey]] = row;
  }
  for (var j = 0; j < m; j++) {
    var y = mainTable[j];
    var x = lookupIndex[y[mainKey]];
    output.push(select(y, x));
  }
  return output;
}

let CityWithCountryJoin = join(country, city, "id", "countryId", function(
  City,
  Country
) {
  return {
    cityName: City.cityName,
    id: City.id,
    countryId: Country !== undefined ? Country.countryName : null
  };
});

let RoutesFrom = join(CityWithCountryJoin, routes, "id", "fromId", function(
  route,
  City
) {
  return {
    fromId: City !== undefined ? City.cityName : null,
    toId: route.toId,
    ticketPrice: route.ticketPrice,
    countryFrom: City.countryId,
    dateStart: route.dateStart,
    dateEnd: route.dateEnd
  };
});

let FullInfoAboutFly = join(
  CityWithCountryJoin,
  RoutesFrom,
  "id",
  "toId",
  function(RF, CC) {
    return {
      cityFrom: RF.fromId,
      toCity: CC !== undefined ? CC.cityName : null,
      ticketPrice: RF.ticketPrice,
      countryFrom: RF.countryFrom,
      countryTo: CC.countryId,
      dateStart: RF.dateStart,
      dateEnd: RF.dateEnd
    };
  }
);

export default FullInfoAboutFly;
