import React from "react";
import styled from "styled-components";
import plane from "../images/plane.svg";
import { DropdownList, DropdownListWithFlyAnyWhere } from "./UI/Dropdown";
import "flexboxgrid2";

const TicketButton = styled.button`
  background-color: orange;
  border-style: none;
  margin-top: 2%;
  margin-bottom: 5%;
  width: 300px;
  height: 64px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

function FindTicketsButton() {
  return (
    <TicketButton>
      Найти билеты <img src={plane} alt="plane" />
    </TicketButton>
  );
}

const TicketChoiceWrapper = styled.div`
  display: flex;
  margin: auto;
  background-color: red;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

function TicketChoice() {
  return (
    <TicketChoiceWrapper className="col-xl-10 col-lg-10 col-md-10 col-xs-12">
      <DropdownList />
      <DropdownListWithFlyAnyWhere />
      <DropdownList />
      <DropdownList />
      <DropdownList />
      <DropdownListWithFlyAnyWhere />
    </TicketChoiceWrapper>
  );
}

const HeaderWrapper = styled.div`
  background-color: blue;
  width: 100%;
`;
const HeaderHeadline = styled.h2`
  margin: auto;
  text-align: center;
`;
const HeaderHeadline2 = styled.h3`
  margin: auto;
  text-align: center;
  @media (max-width: 600px) {
    display: none;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <div className="col-xl-12">
        <HeaderHeadline className="col-xl-6">
          Поиск дешевых авиабилетов
        </HeaderHeadline>
        <HeaderHeadline2 className="col-xl-6">
          Лучший способ купить авиабилеты дешево
        </HeaderHeadline2>
        <TicketChoice />
        <FindTicketsButton />
      </div>
    </HeaderWrapper>
  );
}

export default Header;
