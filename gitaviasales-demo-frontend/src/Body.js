import React from "react";
import styled from "styled-components";
import earth from "./images/earth.svg";
import sun from "./images/sun.svg";
import shopping from "./images/shopping.svg";
import history from "./images/history.svg";
import nightL from "./images/night-life.svg";
import kids from "./images/kids.svg";
import compass from "./images/compass.svg";
import pen from "./images/pen.png";
import calen from "./images/calen.svg";
import flagru from "./images/flagru.svg";

const PapularW = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25%;
  margin-left: 25%;
  margin-top: 50px;
  margin-bottom: 100px;
  align-items: center;
`;
const PopularText = styled.p`
  margin-bottom: 0;
  text-align: center;
`;

function PopularDirections(props) {
  return (
    <PapularW>
      <img src={props.img} alt={props.alt} />
      <PopularText>
        Популярные направления перелетов из города
        <a href={props.CityHref}>
          {" "}
          {props.CityFrom} <img src={pen} alt="pen" />
        </a>
      </PopularText>
    </PapularW>
  );
}

const WhereToBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-right: 25%;
  margin-left: 25%;
`;
const WhereToWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  align-items: center;
`;
const WhereText = styled.p`
  margin-top: 20px;
  margin-bottom: 0;
  text-align: center;
`;
function WhereTo(props) {
  return (
    <WhereToWrap>
      <img src={props.img} alt={props.alt} />
      <a href={props.WhereHref}>
        <WhereText>{props.text}</WhereText>
      </a>
    </WhereToWrap>
  );
}
function BestPrices(props) {
  return (
    <PapularW>
      <img src={props.img} alt={props.alt} />
      <PopularText>Лучшие цены на билеты за последний месяц</PopularText>
    </PapularW>
  );
}

const CityNames = [
  "Москвы",
  "Санкт-Петербурга",
  "Новосибирска",
  "Екатиринбурга",
  "Челябинска"
];
const TicketPrice = [4813, 7857, 15127, 9275, 9148];

const listItems = CityNames.map(CityNames => <div>Из {CityNames}</div>);
const itemsPrice = TicketPrice.map(TicketPrice => <div>От {TicketPrice}р</div>);

function BestTickets(props) {
  return (
    <div>
      <div>
        <div>
          <img src={props.flag} alt={props.alt} />
          <h2>{props.city}</h2>
          <p>{props.country}</p>
        </div>
        <div />
        <div>
          <ul>
            {listItems}
            {itemsPrice}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Body() {
  return (
    <div>
      <PopularDirections
        img={compass}
        alt="compass"
        CityFrom="Kiev"
        CityHref="123.com"
      />
      <WhereToBlock>
        <WhereTo
          text="КУДА УГОДНО"
          img={earth}
          alt="Earth"
          WhereHref="123.com"
        />

        <WhereTo text="СОЛНЦЕ И МОРЕ" img={sun} alt="Sun" WhereHref="123.com" />
        <WhereTo
          text="ШОПИНГ И ГОРОД"
          img={shopping}
          alt="Shopping"
          WhereHref="123.com"
        />
        <WhereTo
          text="КУЛЬТУРА И ИСТОРИЯ"
          img={history}
          alt="History"
          WhereHref="123.com"
        />
        <WhereTo
          text="НОЧНАЯ ЖИЗНЬ"
          img={nightL}
          alt="Night"
          WhereHref="123.com"
        />
        <WhereTo
          text="ОТДЫХ С ДЕТЬМИ"
          img={kids}
          alt="Kids"
          WhereHref="123.com"
        />
      </WhereToBlock>
      <BestPrices img={calen} />
      <BestTickets img={flagru} />
    </div>
  );
}
