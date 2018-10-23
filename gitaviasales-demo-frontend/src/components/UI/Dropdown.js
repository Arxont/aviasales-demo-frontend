import React from "react";
import styled from "styled-components";
import { country, city } from "../DataArrays";

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

let cityAndCountry = join(country, city, "id", "countryId", function(
  City,
  Country
) {
  return {
    cityName: City.cityName,
    id: City.id,
    countryId: Country !== undefined ? Country.countryName : null,
    CityAbbreviation: City.cityAbbreviation
  };
});

class Cities extends React.Component {
  render() {
    return (
      <li>
        {this.props.data.cityName}
        ____
        {this.props.data.countryId}_{this.props.data.CityAbbreviation}
      </li>
    );
  }
}

const ContentDiv = styled.div`
  display: none;
`;

class DropdownList extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 50) });
  }
  render() {
    let filteredCities = cityAndCountry.filter(data => {
      return (
        data.cityName.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    return (
      <div>
        <input
          type="text"
          placeholder="Выберите город"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />

        <ContentDiv id="HiddenContent">
          <ul>
            {filteredCities.map(item => {
              return <Cities data={item} key={item.id} />;
            })}
          </ul>
        </ContentDiv>
      </div>
    );
  }
}

export { DropdownList };
