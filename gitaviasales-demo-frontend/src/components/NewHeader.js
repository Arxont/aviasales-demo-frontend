import React from "react";
import { Dropdown } from "semantic-ui-react";
import { country, city } from "./DataArrays";

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

let CityWithCountryJoin = join(country, city, "Id", "countryId", function(
  City,
  Country
) {
  return {
    cityName: City.cityName,
    Id: City.Id,
    countryId: Country !== undefined ? Country.countryName : null,
    test: City.test
  };
});
let NewCountryWithText = CityWithCountryJoin.map(
  ({ cityName: text, Id: value, ...rest }) => ({ text, value, ...rest })
);
let CityFromDropdown = () => (
  <Dropdown
    placeholder="Select CIty"
    fluid
    search
    selection
    options={NewCountryWithText}
  />
);

export default CityFromDropdown;
