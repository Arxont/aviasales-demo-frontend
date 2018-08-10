import React, { Component } from "react";
import styled from "styled-components";

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
const Menuwrap = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

function FindTickets() {
  return (
    <button type="button">
      Найти билеты
      <img src="123.com" alt="plane" />
    </button>
  );
}
function CityFrom() {
  return (
    <Menuwrap>
      <input type="text" name="City" />
      <Menuwrap>
        <p>MOW</p>
        <img src="123.com" alt="arrows" />
      </Menuwrap>
    </Menuwrap>
  );
}

function CityDest() {
  return <input type="text" name="City" />;
}

function There() {
  return (
    <Menuwrap>
      <input type="date" name="Date" />
      <img src="123.com" alt="calendar" />
    </Menuwrap>
  );
}
function Back() {
  return (
    <Menuwrap>
      <input type="date" name="Date" />
      <img src="123.com" alt="calendar" />
    </Menuwrap>
  );
}
function Passenger() {
  return (
    <Menuwrap>
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
    </Menuwrap>
  );
}
function Header() {
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

function Test() {
  return <Header />;
}

export default Test;
