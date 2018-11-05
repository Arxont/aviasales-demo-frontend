import React from "react";
import styled from "styled-components";
import plane from "../images/plane.svg";
import { DropdownList, DropdownListWithFlyAnyWhere } from "./UI/Dropdown";
import "flexboxgrid2";

const TicketButton = styled.button`
  background-color: orange;
  width: 100%;
  border-style: none;
  margin: auto;
  margin-top: 2%;
  margin-bottom: 5%;
  height: 64px;
  @media (min-width: 500px) {
    width: 300px;
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
  justify-content: space-around;
  background-color: red;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
function TicketChoice() {
  return (
    <TicketChoiceWrapper>
      <DropdownList />
      <DropdownListWithFlyAnyWhere />
      <DropdownList />
      <DropdownList />
      <DropdownList />
      <DropdownListWithFlyAnyWhere />
    </TicketChoiceWrapper>
  );
}

const HeaderBackground = styled.div`
  background-color: blue;
  width: 100%;
`;
const Headline = styled.div`
  margin: auto;
`;
const HeadlineInfo = styled.p`
  text-align: center;
`;
function Header() {
  return (
    <HeaderBackground>
      <div className="container">
        <div className="col-xl-12">
          <div className="row">
            <Headline>
              <HeadlineInfo>Поиск дешевых авиабилетов</HeadlineInfo>
              <HeadlineInfo className="hidden-xs hidden-sm">
                Лучший способ купить авиабилеты дешево
              </HeadlineInfo>
            </Headline>
            <TicketChoice />
            <FindTicketsButton />
          </div>
        </div>
      </div>
    </HeaderBackground>
  );
}

export default Header;
