import React from "react";
import Header from "./Header";
import styled from "styled-components";
import RangeSlider from "./DoubleSlider";
import Footer from "./Footer";
const SideBarBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  background: yellow;
`;
const Test = styled.div`
  width: 100%;
`;
function Sidebar() {
  return (
    <SideBarBlock>
      <select>
        <option>
          <div>
            One
            <input type="checkbox" />
          </div>
        </option>
        <option>Two</option>
        <option>Tree</option>
        <option>Four</option>
        <option>Five</option>
      </select>
      <Test>
        <RangeSlider />
      </Test>
    </SideBarBlock>
  );
}

const MainBodyWrapper = styled.div`
  display: flex;
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

function FindTickets(props) {
  return (
    <MenuWrap>
      <TicketButton>
        <FindTicket>Найти билеты</FindTicket>
        <img src={props.img} alt="plane" />
      </TicketButton>
    </MenuWrap>
  );
}

const FlySettingsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: red;
  width: 100%;
`;
function FlySettings() {
  return (
    <FlySettingsWrapper>
      <Test>
        <RangeSlider />
      </Test>
      <Test>
        <RangeSlider />
      </Test>
    </FlySettingsWrapper>
  );
}
function MainBody() {
  return (
    <MainBodyWrapper>
      <FindTickets />
      <FlySettings />
    </MainBodyWrapper>
  );
}
const BodyWrapper = styled.div`
  display: flex;
`;
const Test2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
function Body() {
  return (
    <BodyWrapper>
      <Sidebar />
      <Test2>
        <MainBody />
        <MainBody />
        <MainBody />
        <MainBody />
        <MainBody />
        <MainBody />
        <MainBody />
        <MainBody />
      </Test2>
    </BodyWrapper>
  );
}

function AviaSales2() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default AviaSales2;
