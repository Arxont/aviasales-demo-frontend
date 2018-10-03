import React from "react";
import Header from "./Header";
import styled from "styled-components";
import RangeSlider from "./DoubleSlider";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import Footer from "./Footer";

const Test = styled.div`
  width: 100%;
`;
const TestDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Hoba = { one: "Москва", two: "Барселона" };
const Example = props => (
  <Accordion>
    <AccordionItem>
      <AccordionItemTitle>
        <h3>Пересадки</h3>
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
          Вылет из {props.from}:<RangeSlider />
          Прибытие в {props.to}:<RangeSlider />
        </div>
        <div>
          <h4> Барселона*картинка*Москва</h4>
          Вылет из Барселоны:
          <RangeSlider />
          Прибытие в Москву:
          <RangeSlider />
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
          <RangeSlider />
          <RangeSlider />
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
            Показывать билеты с перелетами, выполняемыми несколькими
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
  background-color: green;
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
const Test1 = styled.div``;
const Test2 = styled.div`
  display: flex;
  flex-direction: column;
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
