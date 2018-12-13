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
import plane from "../../images/plane.svg";

const AccordionTitle = styled(AccordionItemTitle)`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const AccordionContainer = styled(AccordionItem)`
  border-color: grey;
  border-width: 1px;
  border-bottom-style: solid;
`;
const TransferWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckBoxContainer = styled.span`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const TicketPrice = styled.span`
  color: grey;
`;

const Test = styled.input`
  appearance: none;
  border-radius: 20px;
  color: red;
`;
const Transfers = () => (
  <TransferWrapper>
    <CheckBoxContainer>
      <span>
        <Test type="checkbox" id="Notransfer" name="NoTransfer" />
        <label for="NoTransfer"> Без пересадок</label>
      </span>
      <TicketPrice>7245₽</TicketPrice>
    </CheckBoxContainer>
    <CheckBoxContainer>
      <span>
        <input type="checkbox" id="1transfer" name="1Transfer" />
        <label for="1Transfer"> 1 пересадка</label>
      </span>
      <TicketPrice>7245₽</TicketPrice>
    </CheckBoxContainer>
    <CheckBoxContainer>
      <span>
        <input type="checkbox" id="2transfer" name="2Transfer" />
        <label for="1Transfer"> 2 пересадки</label>
      </span>
      <TicketPrice>7245₽</TicketPrice>
    </CheckBoxContainer>
    <CheckBoxContainer>
      <span>
        <input type="checkbox" id="3transfer" name="3Transfer" />
        <label for="1Transfer"> 3 пересадки</label>
      </span>
      <TicketPrice>7245₽</TicketPrice>
    </CheckBoxContainer>
  </TransferWrapper>
);

const ContentWrapper = styled.div`
  text-align: start;
`;
const DepartureAndArrivalTitle = styled.p`
  color: black;
  font-weight: bold;
`;

const City = { departure: "Москва", arrival: "Барселона" };
const DepartureAndArrival = () => (
  <ContentWrapper>
    <div>
      <DepartureAndArrivalTitle>
        {City.departure}
        <img src={plane} alt="fly" />
        {City.arrival}
      </DepartureAndArrivalTitle>

      <p>Вылет из {City.departure}</p>
      <DoubleRangeSlider minValue={0} maxValue={300} />
      <p>Прибытие в {City.arrival}</p>
      <DoubleRangeSlider minValue={20} maxValue={300} />
    </div>
    <div>
      <p>
        {City.arrival}
        <img src={plane} alt="fly" />
        {City.departure}
      </p>

      <p>Вылет из {City.arrival}</p>
      <DoubleRangeSlider minValue={0} maxValue={300} />
      <p>Прибытие в {City.departure}</p>
      <DoubleRangeSlider minValue={20} maxValue={300} />
    </div>
  </ContentWrapper>
);

const FlightTime = () => (
  <ContentWrapper>
    <div>
      <DepartureAndArrivalTitle>
        {City.departure}
        <img src={plane} alt="fly" />
        {City.arrival}
      </DepartureAndArrivalTitle>
      <DoubleRangeSlider minValue={0} maxValue={300} />
    </div>
    <div>
      <DepartureAndArrivalTitle>
        {City.arrival}
        <img src={plane} alt="fly" />
        {City.departure}
      </DepartureAndArrivalTitle>
      <DoubleRangeSlider minValue={0} maxValue={300} />
    </div>
  </ContentWrapper>
);

const AviaCompanies = () => (
  <ContentWrapper>
    <span>
      <input type="checkbox" id="severalCompanies" name="severalCompanies" />
      <label for="severalCompanies">Несколько авиакомпаний</label>
    </span>
    <p>
      Показывать билеты с перелетами, выполняемые несколькими авиакомпаниями,
      включая выбранную.
    </p>
    <DepartureAndArrivalTitle>Альянсы</DepartureAndArrivalTitle>
    <CheckBoxContainer>
      <span>
        <input type="checkbox" id="severalCompanies" name="severalCompanies" />
        <label for="severalCompanies"> Все</label>
      </span>
    </CheckBoxContainer>
    <CheckBoxContainer>
      <span>
        <input type="checkbox" id="severalCompanies" name="severalCompanies" />
        <label for="severalCompanies"> Starr Alliance</label>
      </span>
    </CheckBoxContainer>
    <CheckBoxContainer>
      <span>
        <input type="checkbox" id="severalCompanies" name="severalCompanies" />
        <label for="severalCompanies"> One World</label>
      </span>
    </CheckBoxContainer>
    <DepartureAndArrivalTitle> Авиакомпании</DepartureAndArrivalTitle>
    <CheckBoxContainer>
      <span>
        <input type="checkbox" id="severalCompanies" name="severalCompanies" />
        <label for="severalCompanies"> Все</label>
      </span>
    </CheckBoxContainer>
    <CheckBoxContainer>
      <span>
        <input type="checkbox" id="severalCompanies" name="severalCompanies" />
        <label for="severalCompanies"> Air Algerie</label>
      </span>
    </CheckBoxContainer>
  </ContentWrapper>
);
const AccordionCell = props => (
  <AccordionContainer>
    <AccordionTitle>
      <span>
        <button type="button">↓</button>
        {props.Title}
      </span>
    </AccordionTitle>
    <AccordionItemBody>{props.Body}</AccordionItemBody>
  </AccordionContainer>
);

function Filter() {
  return (
    <Accordion>
      <AccordionCell Title="Пересадки" Body={<Transfers />} />
      <AccordionCell
        Title="Время вылета и прибытия"
        Body={<DepartureAndArrival />}
      />
      <AccordionCell Title="Время в пути" Body={<FlightTime />} />
      <AccordionCell Title="Авиакомпании" Body={<AviaCompanies />} />
    </Accordion>
  );
}

export default Filter;
