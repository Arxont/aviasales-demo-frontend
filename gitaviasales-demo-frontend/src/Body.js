import React from "react";
import styled from "styled-components";
import { Slide } from "react-slideshow-image";
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
import pobeda from "./images/pobeda.png";

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

const Country = [
  {
    countryName: "Россия",
    Id: 1000,
    countryFlag: "flag-ru.svg"
  },
  {
    countryName: "Испания",
    Id: 1001,
    countryFlag: "flag-spa.svg"
  },
  {
    countryName: "Армения",
    Id: 1002,
    countryFlag: "flag-arm.svg"
  },
  {
    countryName: "Молдавия",
    Id: 1003,
    countryFlag: "flag-mol.svg"
  },
  {
    countryName: "Крым",
    Id: 1004,
    countryFlag: "flag-ru.svg"
  }
];

const City = [
  {
    cityName: "Москва",
    Id: 1,
    countryId: 1000
  },
  {
    cityName: "Симферополь",
    Id: 2,
    countryId: 1004
  },
  {
    cityName: "Барселона",
    Id: 3,
    countryId: 1001
  },
  {
    cityName: "Санк-Петербург",
    Id: 4,
    countryId: 1000
  },
  {
    cityName: "Краснодар",
    Id: 5,
    countryId: 1000
  },
  {
    cityName: "Сочи",
    Id: 6,
    countryId: 1000
  },
  {
    cityName: "Минеральные воды",
    Id: 7,
    countryId: 1000
  },
  {
    cityName: "Новосибирск",
    Id: 8,
    countryId: 1000
  },
  {
    cityName: "Екатерингбург",
    Id: 9,
    countryId: 1000
  },
  {
    cityName: "Челябинск",
    Id: 10,
    countryId: 1000
  },
  {
    cityName: "Ростов на дону",
    Id: 11,
    countryId: 1000
  },
  {
    cityName: "Сургут",
    Id: 12,
    countryId: 1000
  },
  {
    cityName: "Новый Уренгой",
    Id: 13,
    countryId: 1000
  },
  {
    cityName: "Кишинёв",
    Id: 14,
    countryId: 1003
  },
  {
    cityName: "Ереван",
    Id: 15,
    countryId: 1002
  }
];
const routes = [
  {
    fromId: 1,
    toId: 2,
    ticketPrice: 4813
  },
  {
    fromId: 1,
    toId: 2,
    ticketPrice: 1200
  },
  {
    fromId: 1,
    toId: 3,
    ticketPrice: 4814
  },
  {
    fromId: 1,
    toId: 2,
    ticketPrice: 5813
  },
  {
    fromId: 4,
    toId: 2,
    ticketPrice: 7857
  },
  {
    fromId: 4,
    toId: 2,
    ticketPrice: 7858
  },
  {
    fromId: 8,
    toId: 2,
    ticketPrice: 15127
  },
  {
    fromId: 9,
    toId: 2,
    ticketPrice: 9275
  },
  {
    fromId: 10,
    toId: 2,
    ticketPrice: 9148
  }
];

var Moscow = routes.filter(function(Id) {
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
const AdditionalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
function AdditionalInfo() {
  return (
    <AdditionalInfoWrapper>
      <p>
        Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
        мира.
      </p>
      <p>
        Поиск и сравнение цен на авиабилеты среди 100 агенств и 728
        авиакомпаний.
      </p>
      <p>
        Цены найденные пользователями за последние 48 часов не являются офертой.
      </p>
    </AdditionalInfoWrapper>
  );
}

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
};
const SlideWrapper = styled.div`
display:flex;
flex-direction-column;
justify-content: space-between;
`;
const SlideImgWrapper = styled.div`
  margin-right: 5%;
  margin-left: 5%;
`;
const SliderBorder = styled.div`
  border-bottom: solid;
  border-image: url("/rectangle.png") 30 / 19px round;
  margin-bottom: 5%;
`;
const Slideshow = () => {
  return (
    <SliderBorder>
      <Slide {...properties}>
        <SlideWrapper>
          <SlideImgWrapper>
            <img src="/agenciesAgencyLogo.png" alt="hoba" />
          </SlideImgWrapper>
          <div>
            <img src="/agenciesAgencyLogo1.png" alt="hoba" />
          </div>
          <div>
            <img src="/agenciesAgencyLogo2.png" alt="hoba" />
          </div>
          <div>
            <img src="/agenciesAgencyLogo3.png" alt="hoba" />
          </div>
          <SlideImgWrapper>
            <img src="/agenciesAgencyLogo4.png" alt="hoba" />
          </SlideImgWrapper>
        </SlideWrapper>

        <SlideWrapper>
          <SlideImgWrapper>
            <img src="/agenciesAgencyLogo.png" alt="hoba" />
          </SlideImgWrapper>
          <div>
            <img src="/agenciesAgencyLogo1.png" alt="hoba" />
          </div>
          <div>
            <img src="/agenciesAgencyLogo2.png" alt="hoba" />
          </div>
          <div>
            <img src="/agenciesAgencyLogo3.png" alt="hoba" />
          </div>
          <SlideImgWrapper>
            <img src="/agenciesAgencyLogo4.png" alt="hoba" />
          </SlideImgWrapper>
        </SlideWrapper>

        <SlideWrapper>
          <SlideImgWrapper>
            <img src="/agenciesAgencyLogo.png" alt="hoba" />
          </SlideImgWrapper>
          <div>
            <img src="/agenciesAgencyLogo1.png" alt="hoba" />
          </div>
          <div>
            <img src="/agenciesAgencyLogo2.png" alt="hoba" />
          </div>
          <div>
            <img src="/agenciesAgencyLogo3.png" alt="hoba" />
          </div>
          <SlideImgWrapper>
            <img src="/agenciesAgencyLogo4.png" alt="hoba" />
          </SlideImgWrapper>
        </SlideWrapper>
      </Slide>
    </SliderBorder>
  );
};

const SpecialOffersBackGround = styled.div`
  display: flex;
  flex-direction: column;
  background-color: blue;
`;
const SpecialOfferBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;
const SpecialOfferHeader = styled.div`
  display: flex;
  height: 50px;
  background-color: red;
  color: white;
  flex-direction: row;
  justify-content: space-around;
`;
const SpecialOfferBody = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
`;
const SpecialOfferFooter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;
const SpecialOfferButton = styled.button`
  color: red;
  background-color: white;
  border-style: solid;
  border-color: red;
`;

const SpecialOffersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

function SpecialOffers(props) {
  return (
    <SpecialOfferBlock>
      <SpecialOfferHeader>
        <p>Билеты от {props.price} Рублей!</p>
        <img src={props.img} alt={props.alt} />
      </SpecialOfferHeader>
      <SpecialOfferBody>
        <div>
          <img src={props.CompanyLogo} alt="Company Logo" />
        </div>
        <div>
          <p>От {props.price} ₽</p>
          <p>Осталось {props.timeLeft}</p>
        </div>
      </SpecialOfferBody>
      <SpecialOfferFooter>
        <p>
          Билеты от {props.price} рублей! Специальное предложение от
          авиакомпании {props.companyName}
        </p>
        <SpecialOfferButton>
          <p>Узнать подробности</p>
        </SpecialOfferButton>
      </SpecialOfferFooter>
    </SpecialOfferBlock>
  );
}

const WatchAllOffersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
`;

function WatchAllOffers(props) {
  return (
    <WatchAllOffersWrapper>
      <a href="123.com">Смотреть все предложения</a>
      <p>* Средняя цена по направлению</p>
    </WatchAllOffersWrapper>
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
      <AdditionalInfo />
      <Slideshow />
      <SpecialOffersBackGround>
        <h2>Спецпредложения на авиабилеты</h2>
        <SpecialOffersWrapper>
          <SpecialOffers
            price="499"
            CompanyLogo={pobeda}
            timeLeft="45 дней"
            companyName="Победа"
          />
          <SpecialOffers
            price="20 680"
            img={calen}
            CompanyLogo={pobeda}
            timeLeft="10 дней"
            companyName="Lufthansa"
          />
          <SpecialOffers
            price="20 360"
            img={calen}
            CompanyLogo={pobeda}
            timeLeft="19 дней"
            companyName="Lufthansa"
          />
        </SpecialOffersWrapper>
        <WatchAllOffers />
      </SpecialOffersBackGround>
    </div>
  );
}
