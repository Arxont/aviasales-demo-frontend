import React from "react";
import styled from "styled-components";
import "flexboxgrid2";
import Filter from "./components/UI/Accordion";
import plane from "./images/plane.svg";
import DoubleRangeSlider from "./components/UI/DoubleSlider";
/*
fetch(
  "http://api.travelpayouts.com/v2/prices/latest?currency=rub&period_type=year&page=1&limit=5&show_to_affiliates=true&sorting=price&token=3168eb2e19e0d0762d68c83d9bde678d"
)
  .then(response => response.json())
  .then(response => console.log(response));

class TicketsPrice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Tickets: null
    };
  }
  componentDidMount() {
    fetch(
      "http://api.travelpayouts.com/v2/prices/latest?currency=rub&period_type=year&page=1&limit=5&show_to_affiliates=true&sorting=price&token=3168eb2e19e0d0762d68c83d9bde678d"
    )
      .then(response => response.json())
      .then(response => console.log(response))
      .then(info => this.setState({ Tickets: info }));
  }
  render() {
    let Tickets = this.state;
    if (!Tickets) return null;
    return <div>{Tickets.return_date} QQQQQQ</div>;
  }
}
*/
const MainBodyWrapper = styled.div`
  display: flex;
`;
const MenuWrap = styled.div`
  border-style: solid;
`;
const TicketsContainer = styled.button`
  width: 80%;
  margin: auto;
  border-radius: 5px;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: orange;
  justify-content: space-evenly;
  border-style: none;
`;
const GetTickets = styled.span`
  color: white;
  font-family: Roboto;
  line-height: 18px;
  font-size: 16px;
`;

function FindTickets(props) {
  return (
    <MenuWrap>
      <TicketsContainer>
        <GetTickets>Купить за {props.price} ₽</GetTickets>
      </TicketsContainer>
      <p>на {props.companyName}</p>
    </MenuWrap>
  );
}

const InfoContainer = styled.div`
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Charter = styled.button`
  border-radius: 15px;
  border-color: blue;
  background-color: white;
  color: blue;
`;

const DataWrapper = styled.span`
  display: block;
  color: grey;
`;
const DataWrapper1 = styled.span`
  display: block;
  color: grey;
  background-color: blue;
`;
const Time = styled.span`
  color: black;
  line-height: 40px;
  font-size: 28px;
`;
const Pin = styled.button`
  border-radius: 50px;
`;

const FlightStart = props => (
  <div>
    <DataWrapper1>
      <Pin>/</Pin> <Time>{props.Start}</Time>
    </DataWrapper1>
    <DataWrapper>{props.CityFrom}</DataWrapper>
    <DataWrapper>{props.Date}</DataWrapper>
  </div>
);

const FlightEnd = props => (
  <div>
    <DataWrapper1>
      <Time>{props.End}</Time>
    </DataWrapper1>
    <DataWrapper>{props.CityTo}</DataWrapper>
    <DataWrapper>{props.Date}</DataWrapper>
  </div>
);

const Testik = styled.div`
  width: 40%;
`;
const FlyContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Departure = () => (
  <FlyContainer>
    <FlightStart Start="0.05" CityFrom="Москва" Date="24 февраля 2018, сб" />
    <Testik>
      <DoubleRangeSlider
        maxValue={10}
        minValue={0}
        formatLabel={value => value.toFixed(2)}
      />
    </Testik>
    <FlightEnd End="3.05" CityTo="Барселона" Date="24 февраля 2018, сб" />
  </FlyContainer>
);

const Arrival = () => (
  <FlyContainer>
    <FlightStart Start="10.35" CityFrom="Барселона" Date="3 марта 2019, сб" />
    <Testik>
      <DoubleRangeSlider
        maxValue={10}
        minValue={0}
        formatLabel={value => value.toFixed(2)}
      />
    </Testik>
    <FlightEnd End="17.10" CityTo="Москва" Date="3 марта 2019, сб" />
  </FlyContainer>
);

const TicketsInfo = () => (
  <InfoContainer>
    <Header>
      <img src=" http://pics.avs.io/100/40/UN.png" alt="AirLines" />
      <span>
        <Charter>Чартер</Charter>
        <button>-></button>
      </span>
    </Header>
    <Departure />
    <Arrival />
  </InfoContainer>
);

function MainBody() {
  return (
    <MainBodyWrapper>
      <FindTickets price={7712} companyName={"Clickavia"} />
      <TicketsInfo />
    </MainBodyWrapper>
  );
}

const Test2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Test3 = styled.div`
  display: flex;
  margin-top: 5%;
`;
export default function TicketsBody() {
  return (
    <div className="row center-xl center-lg center-md center-sm center-es">
      <Test3 className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-xs-12">
        <div className="col-xl-3 col-lg-3  hidden-md hidden-sm hidden-xs">
          <Filter />
        </div>
        <Test2 className="col-xl-7 col-lg-7 col-md-12">
          <MainBody />
        </Test2>
      </Test3>
    </div>
  );
}
