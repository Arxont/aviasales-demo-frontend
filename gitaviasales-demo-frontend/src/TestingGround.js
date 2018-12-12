import React from "react";
import styled from "styled-components";
import "flexboxgrid2";
import Filter from "./components/UI/Accordion";
import plane from "./images/plane.svg";
import DoubleRangeSlider from "./components/UI/DoubleSlider";
const MainBodyWrapper = styled.div`
  display: flex;
`;
const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-style: solid;
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
const ImgWrap = styled.div`
  dipslay: flex;
`;
function FindTickets(props) {
  return (
    <MenuWrap>
      <ImgWrap>
        <img src="123.com" alt="5" />
        <img src="123.com" alt="15" />
      </ImgWrap>
      <TicketButton>
        <FindTicket>Купить за {props.price} P</FindTicket>
      </TicketButton>
      <p>на {props.companyName}</p>
    </MenuWrap>
  );
}
const ByTicketBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: green;
`;
const LogoAndButtonsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: red;
`;
const ChooseFlyTimeIn = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom-style: dotted;
  margin-bottom: 1%;
`;
const ChooseFlyTimeOut = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlyBlock = styled.div`
  display: flex;
`;
const ChooseFlyTimeBlock = styled.div`
  display: flex;
  background-color: purple;
`;
const FlyInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const RangeDiv = styled.div`
  width: 100%;
`;
function FlySettings(props) {
  return (
    <ByTicketBlock>
      <LogoAndButtonsBlock>
        <img src="123.com" alt="ROSSIYA" />
        <div>
          <button type="button">Чартер</button>
          <button type="button">
            <img src={plane} alt="plane" />
          </button>
        </div>
      </LogoAndButtonsBlock>
      <ChooseFlyTimeIn>
        <ChooseFlyTimeBlock>
          <FlyInfo>
            <FlyBlock>
              <img src={plane} alt="plane" />
              <p>00:05</p>
            </FlyBlock>
            <div>
              <p>Москва</p>
              <p>24 фев 2018,Сб</p>
            </div>
          </FlyInfo>
        </ChooseFlyTimeBlock>
        <RangeDiv>
          <DoubleRangeSlider minValue={20} maxValue={300} />
        </RangeDiv>
        <ChooseFlyTimeBlock>
          <FlyInfo>
            <FlyBlock>
              <img src={plane} alt="plane" />
              <p>03:05</p>
            </FlyBlock>
            <div>
              <p>Барселона</p>
              <p>24 фев 2018,Сб</p>
            </div>
          </FlyInfo>
        </ChooseFlyTimeBlock>
      </ChooseFlyTimeIn>
      <ChooseFlyTimeOut>
        <ChooseFlyTimeBlock>
          <FlyInfo>
            <FlyBlock>
              <img src={plane} alt="plane" />
              <p>00:05</p>
            </FlyBlock>
            <div>
              <p>Барселона</p>
              <p>3 марта 2018,Сб</p>
            </div>
          </FlyInfo>
        </ChooseFlyTimeBlock>
        <RangeDiv>
          <DoubleRangeSlider minValue={20} maxValue={300} />
        </RangeDiv>
        <ChooseFlyTimeBlock>
          <FlyInfo>
            <FlyBlock>
              <img src={plane} alt="plane" />
              <p>00:05</p>
            </FlyBlock>
            <div>
              <p>Москва</p>
              <p>3 марта 2018,Сб</p>
            </div>
          </FlyInfo>
        </ChooseFlyTimeBlock>
      </ChooseFlyTimeOut>
    </ByTicketBlock>
  );
}
function MainBody() {
  return (
    <MainBodyWrapper>
      <FindTickets price={7712} companyName={"Clickavia"} />
      <FlySettings />
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
