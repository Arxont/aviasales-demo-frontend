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

const CitiesContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;
const CityNameAndCountry = styled.span`
  width: 70%;
  display: inline-block;
  left: auto;
  margin: 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 17px;
`;
const CityAbbreviation = styled.span`
  display: inline-block;
  color: grey;
  font-style: Regular;
  fontsize: 12px;
  line-height: 18px;
  right: 0;
  margin: 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 17px;
`;
const CountryName = styled.span`
  color: grey;
`;
class Cities extends React.Component {
  render() {
    return (
      <CitiesContainer>
        <CityNameAndCountry>
          {this.props.data.cityName},{" "}
          <CountryName>{this.props.data.countryId}</CountryName>
        </CityNameAndCountry>{" "}
        <CityAbbreviation>{this.props.data.CityAbbreviation}</CityAbbreviation>
      </CitiesContainer>
    );
  }
}

const Container = styled.div`
  position: relative;
`;
const ContentDiv = styled.div`
  width: 100%;
  position: absolute;
  background-color: white;
`;
const FlyAnywhere = styled.div`
  width: 100%;
  position: absolute;
  background-color: white;
`;
const CityInput = styled.input`
  width: 100%;
  cursor: pointer;
  margin: auto;
  margin-bottom: 2px;
`;
class DropdownList extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      hiddenDiv: true
    };
    this.showDiwOnClick = this.showDiwOnClick.bind(this);
  }
  showDiwOnClick(event) {
    this.setState({ hiddenDiv: false });
  }
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 50) });
  }

  render() {
    let filteredCities = cityAndCountry
      .filter(data => {
        return (
          data.cityName
            .toUpperCase()
            .indexOf(this.state.search.toUpperCase()) !== -1
        );
      })
      .slice(0, 6);
    const HideDiv = this.state.hiddenDiv ? { display: "none" } : {};

    return (
      <Container>
        <CityInput
          type="text"
          placeholder="Выберите город"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          onClick={this.showDiwOnClick}
        />

        <ContentDiv style={HideDiv}>
          <div>
            {filteredCities.map(item => {
              return <Cities data={item} key={item.id} />;
            })}
          </div>
        </ContentDiv>
      </Container>
    );
  }
}
class DropdownListWithFlyAnyWhere extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      hiddenDiv: true,
      hiddenFlyAnywhereBlock: true
    };
    this.showDiwOnClick = this.showDiwOnClick.bind(this);
    this.ShowHiddenFlyAnywhereBlockOnClick = this.ShowHiddenFlyAnywhereBlockOnClick.bind(
      this
    );
  }
  showDiwOnClick(event) {
    this.setState({ hiddenDiv: false });
  }
  ShowHiddenFlyAnywhereBlockOnClick(event) {
    this.setState({ hiddenFlyAnywhereBlock: false });
  }
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 50) });
  }

  render() {
    let filteredCities = cityAndCountry
      .filter(data => {
        return (
          data.cityName
            .toUpperCase()
            .indexOf(this.state.search.toUpperCase()) !== -1
        );
      })
      .slice(0, 6);
    const HideDiv = this.state.hiddenDiv ? { display: "none" } : {};
    const HideFlyAnywhere = this.state.hiddenFlyAnywhereBlock
      ? { display: "none" }
      : {};

    return (
      <Container>
        <CityInput
          type="text"
          placeholder="Город прибытия"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
          onClick={this.ShowHiddenFlyAnywhereBlockOnClick}
          onKeyDown={this.showDiwOnClick}
        />
        <ContentDiv style={HideDiv}>
          <div>
            {filteredCities.map(item => {
              return <Cities data={item} key={item.id} />;
            })}
          </div>
        </ContentDiv>
        <FlyAnywhere style={HideFlyAnywhere}>Куда угодно</FlyAnywhere>
      </Container>
    );
  }
}
export { DropdownList, DropdownListWithFlyAnyWhere };
