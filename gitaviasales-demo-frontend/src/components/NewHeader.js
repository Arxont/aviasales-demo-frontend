import React from "react";
import styled from "styled-components";
import plane from "../images/plane.svg";

const TicketButton = styled.button`
 display: inline-block
  background-color: orange;
  margin-top: 20px;
  margin-bottom: 50px;
  border-style: none;
  @media (max-width: 400px) {
    width:100%;
  }
`;

function FindTicketsButton() {
  return (
    <TicketButton>
      Найти билеты <img src={plane} alt="plane" />
    </TicketButton>
  );
}

const HeaderWrapper = styled.div`
  background-color: blue;
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderHeadlineWrapper = styled.div``;
function Header() {
  return (
    <HeaderWrapper>
      <div>Поиск дешевых авиабилетов</div>
      <div>Лучший способ купить авиабилеты дешево</div>
      <FindTicketsButton />
    </HeaderWrapper>
  );
}

export default Header;
