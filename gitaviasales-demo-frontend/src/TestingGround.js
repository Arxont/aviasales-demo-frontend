import React from "react";
import styled from "styled-components";
import "flexboxgrid2";

import DoubleRangeSlider from "./DoubleSlider";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/minimal-example.css";

import plane from "./images/plane.svg";

const TestDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  text-align: start;
  display: flex;
  justify-content: space-between;
`;
const Hoba = { one: "Москва", two: "Барселона" };

const Gepa = styled(Accordion)`
  color: red;
  background:color:pink;
  border-style:solid;
`;

const Gepa2 =styled(AccordionItem)`
border-bottom-style:solid;
`;

function Filter(props) {
  return (
    <Gepa>
      <Gepa2>
        <AccordionItemTitle>
          <Title>
            <img src={plane} alt="plane" />
            Пересадки
            <button type="button">X</button>
          </Title>
        </AccordionItemTitle>
        <AccordionItemBody>
          <div>
            <input name="isGoing" type="checkbox" />
            Без пересадок 7712Р
          </div>
          <div>
            <input name="isGoing" type="checkbox" />1 пересадка 11190Р
          </div>
          <div>
            <input name="isGoing" type="checkbox" />2 пересадки 16821Р
          </div>
          <div>
            <input name="isGoing" type="checkbox" />3 пересадки 23986Р
          </div>
        </AccordionItemBody>
      </Gepa2>
      <AccordionItem>
        <AccordionItemTitle>
          <Title>Время вылета и прибытия</Title>
        </AccordionItemTitle>
        <AccordionItemBody>
          <div>
            <h4>
              {Hoba.one}
              *картинка*
              {Hoba.two}
            </h4>
            Вылет из {props.from}:
            <DoubleRangeSlider minValue={20} maxValue={300} />
            Прибытие в {props.to}:<DoubleRangeSlider />
          </div>
          <div>
            <h4> Барселона*картинка*Москва</h4>
            Вылет из Барселоны:
            <DoubleRangeSlider />
            Прибытие в Москву:
            <DoubleRangeSlider />
          </div>
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>
          <Title>Багаж</Title>
        </AccordionItemTitle>
        <AccordionItemBody />
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>
          <Title>Длительность пересадки</Title>
        </AccordionItemTitle>
        <AccordionItemBody />
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>
          <Title>Время в пути</Title>
        </AccordionItemTitle>
        <AccordionItemBody>
          <div>
            <h4> Москава*картинка*Барселона</h4>
            <DoubleRangeSlider />
            <DoubleRangeSlider />
          </div>
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>
          <Title>Авиакомпании</Title>
        </AccordionItemTitle>
        <AccordionItemBody>
          <div>
            <input name="isGoing" type="checkbox" />
            Несколько авиакомпаний
            <p>
              Показывать билеты с перелетами,
              <br /> выполняемыми несколькими
              <br />
              авиакомпаниями включая выбранную
            </p>
            <h2>Альянсы</h2>
            <TestDiv>
              <input name="isGoing" type="checkbox" />
              Все 12554Р
              <input name="isGoing" type="checkbox" />
              Star Alliance 53357Р
              <input name="isGoing" type="checkbox" />
              OneWorld 2544Р
              <input name="isGoing" type="checkbox" />
              SkyTeam 2531Р
            </TestDiv>
            <h2>Авиакомпании</h2>
            <TestDiv>
              <input name="isGoing" type="checkbox" />
              Все
              <input name="isGoing" type="checkbox" />
              Aegan Airlines 134135P
              <input name="isGoing" type="checkbox" />
              Air Algerie 29500P
              <input name="isGoing" type="checkbox" />
              Air Europa 35652P
              <input name="isGoing" type="checkbox" />
              Air France 36574P
              <input name="isGoing" type="checkbox" />
              Belle Air 35667P
            </TestDiv>
          </div>
        </AccordionItemBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>
          <Title>Аэропорты</Title>
        </AccordionItemTitle>
        <AccordionItemBody />
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>
          <Title>Аэропорт пересадки</Title>
        </AccordionItemTitle>
        <AccordionItemBody />
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>
          <Title>Агенства</Title>
        </AccordionItemTitle>
        <AccordionItemBody />
      </AccordionItem>
      <AccordionItem>
        <AccordionItemTitle>
          <Title>Сбросить все фильтры</Title>
        </AccordionItemTitle>
      </AccordionItem>
    </Gepa>
  );
}

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
  margin-top: 16px;
`;

const Test3 = styled.div`
  display: flex;
`;
export default function TicketsBody() {
  return (
    <div className="row center-xl center-lg center-md center-sm center-es">
      <Test3 className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-xs-12">
        <div className="col-xl-3 col-lg-3  hidden-md hidden-sm hidden-xs">
          <Filter from={Hoba.one} to={Hoba.two} />
        </div>
        <Test2 className="col-xl-7 col-lg-7 col-md-12">
          <MainBody />
        </Test2>
      </Test3>
    </div>
  );
}
