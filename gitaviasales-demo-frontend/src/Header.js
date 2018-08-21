import React from "react";
import styled from "styled-components";
import arrow from "./images/arrow.svg";
import plane from "./images/plane.svg";
import calendar from "./images/calendar.svg";

const Title = styled.h1`
  color: white;
  margin-top: 0px;
`;
const Title2 = Title.withComponent("h2");

const HeaderW = styled.div`
  background-color: blue;
  text-align: center;
`;

const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-around;
`;
const MenuWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const TicketButton = styled.button`
  display: flex;
  background-color: orange;
  margin-top: 20px;
  margin-bottom: 50px;
  justify-content: space-evenly;
  border-style: none;
`;
const FindTicket = styled.p`
  color: white;
  font-family: Roboto;
  font-size: 28px;
  line-height: 33px;
`;

function FindTickets() {
  return (
    <MenuWrap>
      <TicketButton>
        <FindTicket>Найти билеты</FindTicket>
        <img src={plane} alt="plane" />
      </TicketButton>
    </MenuWrap>
  );
}
function CityFrom() {
  return (
    <MenuWrap>
      <input type="text" name="City" />
      <MenuWrap>
        <p>MOW</p>
        <img src={arrow} alt="arrows" />
      </MenuWrap>
    </MenuWrap>
  );
}

function CityDest() {
  return <input type="text" name="City" />;
}

function There() {
  return (
    <MenuWrap>
      <input type="date" name="Date" />
      <img src={calendar} alt="calendar" />
    </MenuWrap>
  );
}
function Back() {
  return (
    <MenuWrap>
      <input type="date" name="Date" />
      <img src={calendar} alt="calendar" />
    </MenuWrap>
  );
}
function Passenger() {
  return (
    <MenuWrap>
      <select>
        <option value="1 passenger">1 пассажир</option>
        <option value="2 passengers">2 пассажира</option>
        <option value="3 passengers">3 пассажира</option>
      </select>
      <select>
        <option value="1" />
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </MenuWrap>
  );
}

export default function Header() {
  return (
    <HeaderW>
      <Title>Поиск дешевых авиобилетов</Title>
      <Title2>Лучший способ купить авиабилеты дешево</Title2>
      <HeaderMenu>
        <CityFrom />
        <CityDest />
        <There />
        <Back />
        <Passenger />
      </HeaderMenu>
      <FindTickets />
    </HeaderW>
  );
}
