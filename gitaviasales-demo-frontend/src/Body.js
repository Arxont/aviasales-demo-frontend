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
import flagRu from "./images/flagru.svg";

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

const FlexBox = styled.div`
  display: flex;
`;
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
/*
const FromCity = [
  { cityNames: "Москвы", ticketPrice: "4813" },
  { cityNames: "Санкт-Петербурга", ticketPrice: "7857" },
  { cityNames: "Новосибирска", ticketPrice: "15127" },
  { cityNames: "Екатиринбурга", ticketPrice: "9275" },
  { cityNames: "Челябинска", ticketPrice: "9148" }
];
*/

var Country = [
  {
    countryName: "Россия",
    Id: 1000,
    countryFlag: "flagRu.svg"
  },
  {
    countryName: "Испания",
    Id: 1001,
    countryFlag: "flagSpa.svg"
  },
  {
    countryName: "Армения",
    Id: 1002,
    countryFlag: "flagArm.svg"
  },
  {
    countryName: "Молдавия",
    Id: 1003,
    countryFlag: "flagMol.svg"
  },
  {
    countryName: "Крым",
    Id: 1004,
    countryFlag: "flagRu.svg"
  }
];

var City = [
  {
    cityName: "Москва",
    Id: 1,
    countryId: "1000"
  },
  {
    cityName: "Симферополь",
    Id: 2,
    countryId: "1004"
  },
  {
    cityName: "Барселона",
    Id: 3,
    countryId: "1001"
  },
  {
    cityName: "Санк-Петербург",
    Id: 4,
    countryId: "1000"
  },
  {
    cityName: "Краснодар",
    Id: 5,
    countryId: "1000"
  },
  {
    cityName: "Сочи",
    Id: 6,
    countryId: "1000"
  },
  {
    cityName: "Минеральные воды",
    Id: 7,
    countryId: "1000"
  },
  {
    cityName: "Новосибирск",
    Id: 8,
    countryId: "1000"
  },
  {
    cityName: "Екатерингбург",
    Id: 9,
    countryId: "1000"
  },
  {
    cityName: "Челябинск",
    Id: 10,
    countryId: "1000"
  },
  {
    cityName: "Ростов на дону",
    Id: 11,
    countryId: "1000"
  },
  {
    cityName: "Сургут",
    Id: 12,
    countryId: "1000"
  },
  {
    cityName: "Новый Уренгой",
    Id: 13,
    countryId: "1000"
  },
  {
    cityName: "Кишинёв",
    Id: 14,
    countryId: "1003"
  },
  {
    cityName: "Ереван",
    Id: 15,
    countryId: "1002"
  }
];

var FromTo = [
  {
    fromId: 1,
    toId: 2,
    ticketPrice: "4813"
  },
  {
    fromId: 1,
    toId: 2,
    ticketPrice: "1200"
  },
  {
    fromId: 1,
    toId: 3,
    ticketPrice: "4814"
  },
  {
    fromId: 1,
    toId: 2,
    ticketPrice: "5813"
  },
  {
    fromId: 4,
    toId: 2,
    ticketPrice: "7857"
  },
  {
    fromId: 4,
    toId: 2,
    ticketPrice: "7858"
  },
  {
    fromId: 8,
    toId: 2,
    ticketPrice: "15127"
  },
  {
    fromId: 9,
    toId: 2,
    ticketPrice: "9275"
  },
  {
    fromId: 10,
    toId: 2,
    ticketPrice: "9148"
  }
];

var Moscow = FromTo.filter(function(Id) {
  return Id.fromId === 1 && Id.toId === 2;
});

const minPrice = Math.min.apply(
  Math,
  Moscow.map(function(lowest) {
    return lowest.ticketPrice;
  })
);

/*
const Prices = FromCity.map(FromCity => (
  <div>
    Из {FromCity.cityNames} От {FromCity.ticketPrice} Р
  </div>
));
*/

const PriceInfo = Moscow.map(Moscow => <div>{Moscow.ticketPrice}</div>);
function BestTickets(props) {
  return (
    <div>
      <div>
        <FlexBox>
          <img src={props.img} alt={props.alt} />
          <h2>{props.city}</h2>
          <p>{props.country}</p>
        </FlexBox>
        <div>
          <p>{minPrice}</p>
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
      <BestTickets img={flagRu} city="Крым" country="Крым" />
    </div>
  );
}
