import React from "react";
import styled from "styled-components";
import {
  DropdownList,
  DropdownListWithFlyAnyWhere
} from "./components/UI/Dropdown";
import "flexboxgrid2";
import { Context } from "./components/Context";
import AviasalesLogo from "./images/aviasales.svg";
import plane from "./images/plane.svg";

const LogoContainer = styled.div`
  color: white;
  font-size: 20px;
  line-height: 25px;
`;

function Logo() {
  return (
    <LogoContainer>
      <img src={AviasalesLogo} alt="logo" /> aviasales
    </LogoContainer>
  );
}

const TicketButtonWrapper = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 10%;
  border-radius: 5px;
  margin-bottom: 5%;
  @media (min-width: 500px) {
    width: 300px;
  }
`;
const TicketButton = styled.button`
  background-color: orange;
  text-align: center;
  cursor: pointer;
  width: 100%;
  border-style: none;
  height: 64px;
`;
const ButtonTxt = styled.span`
  color: white;
  Font-size: 28px
  line-height: 33px
  margin-right:2%;
`;
const ButtonImg = styled.img`
  margin: auto;
`;

const FindTicketsButton = () => (
  <Context.Consumer>
    {({ toggleHidden }) => (
      <TicketButtonWrapper>
        <TicketButton onClick={toggleHidden}>
          <ButtonTxt>Найти билеты</ButtonTxt>{" "}
          <ButtonImg src={plane} alt="plane" />
        </TicketButton>
      </TicketButtonWrapper>
    )}
  </Context.Consumer>
);

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
    <TicketChoiceWrapper className="col-xl-10">
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
const HeadlineContainer = styled.div`
  margin: auto;
`;
const Headline = styled.p`
  color: white;
  text-align: center;
  font-style: Bold;
  font-size: 40px;
  line-height: 48px;
`;
const Slogan = styled.p`
  color: white;
  text-align: center;
  font-style: Bold;
  font-size: 24px;
  line-height: 28px;
`;
function Header() {
  return (
    <HeaderBackground>
      <div className="container">
        <div className="col-xl-12">
          <Logo />
          <div className="row">
            <HeadlineContainer>
              <Headline>Поиск дешевых авиабилетов</Headline>
              <Slogan className="hidden-xs hidden-sm">
                Лучший способ купить авиабилеты дешево
              </Slogan>
            </HeadlineContainer>
            <TicketChoice />
            <FindTicketsButton />
          </div>
        </div>
      </div>
    </HeaderBackground>
  );
}
export default Header;
