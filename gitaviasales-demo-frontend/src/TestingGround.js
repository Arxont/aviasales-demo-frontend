import React from "react";
import Header from "./Header";
import styled from "styled-components";
import DoubleRangeSlider from "./DoubleSlider";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/minimal-example.css";
import Footer from "./Footer";
import plane from "./images/plane.svg";

const TestDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const SomeP = styled.div`
  background-color: red;
`;
const Hoba = { one: "Москва", two: "Барселона" };
const Example = props => (
  <Accordion>
    <AccordionItem>
      <AccordionItemTitle>
        <SomeP>
          <img src={plane} alt="plane" />
          Пересадки
          <button type="button">X</button>
        </SomeP>
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
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h3>Время вылета и прибытия</h3>
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
        <h3>Багаж</h3>
      </AccordionItemTitle>
      <AccordionItemBody />
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h3>Длительность пересадки</h3>
      </AccordionItemTitle>
      <AccordionItemBody />
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h3>Время в пути</h3>
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
        <h3>Авиакомпании</h3>
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
        <h3>Аэропорты</h3>
      </AccordionItemTitle>
      <AccordionItemBody />
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h3>Аэропорт пересадки</h3>
      </AccordionItemTitle>
      <AccordionItemBody />
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h3>Агенства</h3>
      </AccordionItemTitle>
      <AccordionItemBody />
    </AccordionItem>
    <AccordionItem>
      <AccordionItemTitle>
        <h3>Сбросить все фильтры</h3>
      </AccordionItemTitle>
    </AccordionItem>
  </Accordion>
);

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
const BodyWrapper = styled.div`
  display: flex;
`;
const Test2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 5%;
`;
function Body() {
  return (
    <BodyWrapper>
      <Example from={Hoba.one} to={Hoba.two} />

      <Test2>
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
