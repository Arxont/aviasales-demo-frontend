import React from "react";
import styled from "styled-components";
import "flexboxgrid2";

import FullInfoAboutFly from "./DataFilter";
import { Slide } from "react-slideshow-image";

import earth from "../images/earth.svg";
import sun from "../images/sun.svg";
import shopping from "../images/shopping.svg";
import history from "../images/history.svg";
import nightL from "../images/night-life.svg";
import kids from "../images/kids.svg";
import compass from "../images/compass.svg";
import pen from "../images/pen.png";
import calen from "../images/calen.svg";
import flagRu from "../images/flagru.svg";
import pobeda from "../images/pobeda.png";
import fb from "../images/faceBook.png";
import vk from "../images/vk.png";
import rss from "../images/rss.png";
import twit from "../images/twitter.png";
import emailIcon from "../images/emailIcon.png";
import planeIcon from "../images/planeIcon.png";
import booksIcon from "../images/booksIcon.png";

const MostPopularPlacesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-center;
  background-color: red;
  margin: auto;
  margin-top: 5%;
`;

const MostPopularPlacesTxtWrapper = styled.p`
  text-align: center;
`;
const CityLink = styled.a`
  @media (max-width: 300px) {
    display: block;
  }
`;
function MostPopularPlacesFromMyCity(props) {
  return (
    <MostPopularPlacesWrapper className="col-xl-10">
      <img src={calen} alt="img" />
      <MostPopularPlacesTxtWrapper>
        Популярные направления
        <br className="hidden-md hidden-lg hidden-xl" /> перелетов
        <br className="hidden-sm hidden-xs" /> из города
        <CityLink href="123.com">{props.CityFrom}</CityLink>
        <img src={pen} alt="pen" />
      </MostPopularPlacesTxtWrapper>
    </MostPopularPlacesWrapper>
  );
}
function BestTicketsPriceInThisMonth() {
  return (
    <MostPopularPlacesWrapper className="col-xl-10">
      <img src={compass} alt="img" />
      <MostPopularPlacesTxtWrapper>
        Лучшие цены на авиабилеты
        <br className="hidden-md hidden-lg hidden-xl" /> за последний месяц
      </MostPopularPlacesTxtWrapper>
    </MostPopularPlacesWrapper>
  );
}

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-center;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const CategoryTxt = styled.p`
  text-align: center;
`;

function Category(props) {
  return (
    <CategoryWrapper>
      <img src={props.categoryImg} alt="img" />
      <CategoryTxt>
        {props.categoryTxt1}
        <br />
        {props.categoryTxt2}
      </CategoryTxt>
    </CategoryWrapper>
  );
}

const CategoriesMenuWrapper = styled.div`
  margin: auto;
  margin-top: 2%;
  background-color: red;
  display: flex;
  justify-content: space-around;
`;
function CategoriesMenu() {
  return (
    <CategoriesMenuWrapper className="col-xl-6">
      <Category categoryImg={earth} categoryTxt1="КУДА" categoryTxt2="УГОДНО" />
      <Category categoryImg={sun} categoryTxt1="СОЛНЦЕ" categoryTxt2="И МОРЕ" />
      <Category
        categoryImg={shopping}
        categoryTxt1="ШОПИНГ"
        categoryTxt2="ГОРОД"
      />
      <Category
        categoryImg={history}
        categoryTxt1="КУЛЬТУРА"
        categoryTxt2="И ИСТОРИЯ"
      />
      <Category
        categoryImg={nightL}
        categoryTxt1="НОЧНАЯ"
        categoryTxt2="ЖИЗНЬ"
      />
      <Category
        categoryImg={kids}
        categoryTxt1="ОТДЫХ"
        categoryTxt2="С ДЕТЬМИ"
      />
    </CategoriesMenuWrapper>
  );
}

let LowestPriceToSimpferopol = FullInfoAboutFly.filter(a => {
  return a.toCity === "Симферополь" && a.cityFrom === "Москва";
})
  .sort(function(a, b) {
    return a.ticketPrice - b.ticketPrice;
  })
  .find(a => {
    return (a = [0]);
  });

let LowestPriceToKrasnodar = FullInfoAboutFly.filter(a => {
  return a.toCity === "Краснодар" && a.cityFrom === "Москва";
})
  .sort(function(a, b) {
    return a.ticketPrice - b.ticketPrice;
  })
  .find(a => {
    return (a = [0]);
  });

let LowestPriceToSochi = FullInfoAboutFly.filter(a => {
  return a.toCity === "Сочи(Адлер)" && a.cityFrom === "Москва";
})
  .sort(function(a, b) {
    return a.ticketPrice - b.ticketPrice;
  })
  .find(a => {
    return (a = [0]);
  });

let LowestPriceToSaintPetersburg = FullInfoAboutFly.filter(a => {
  return a.toCity === "Санк-Петербург" && a.cityFrom === "Москва";
})
  .sort(function(a, b) {
    return a.ticketPrice - b.ticketPrice;
  })
  .find(a => {
    return (a = [0]);
  });

let LowestPriceToMineralnieVody = FullInfoAboutFly.filter(a => {
  return a.toCity === "Минеральные воды" && a.cityFrom === "Москва";
})
  .sort(function(a, b) {
    return a.ticketPrice - b.ticketPrice;
  })
  .find(a => {
    return (a = [0]);
  });
let LowestPriceToBarcelona = FullInfoAboutFly.filter(a => {
  return a.toCity === "Барселона" && a.cityFrom === "Москва";
})
  .sort(function(a, b) {
    return a.ticketPrice - b.ticketPrice;
  })
  .find(a => {
    return (a = [0]);
  });
const FlyToCityBlock = styled.div`
  box-shadow: 0 3px 8px -3px grey;
  margin-bottom: 1%;
`;
const FlyToCityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FlyToCityInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const FlyToCityAddInfo = styled.span`
  color: grey;
`;
const FlyToCityImg = styled.img`
  width: 100%;
  border-style: none;
`;
function FlyToCity(props) {
  return (
    <FlyToCityBlock className="col-xl-6 col-lg-6 col-md-12">
      <FlyToCityImg src={props.cityImg} alt="cityImage" />
      <FlyToCityWrapper>
        <FlyToCityInfoWrapper>
          {props.cityTo}
          <FlyToCityAddInfo>{props.countryTo}</FlyToCityAddInfo>
        </FlyToCityInfoWrapper>
        <FlyToCityInfoWrapper>
          <a href="123.com">Найти от {props.ticketPrice} ₽</a>
          <FlyToCityAddInfo>{props.dateStart}</FlyToCityAddInfo>
        </FlyToCityInfoWrapper>
      </FlyToCityWrapper>
    </FlyToCityBlock>
  );
}

const TopCityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 2%;
`;

function GetTopCityByPrice() {
  return (
    <TopCityWrapper className="col-xl-10">
      <FlyToCity
        cityImg="/krasnodar.png"
        cityTo={LowestPriceToKrasnodar.toCity}
        countryTo={LowestPriceToKrasnodar.countryTo}
        ticketPrice={LowestPriceToKrasnodar.ticketPrice}
        dateStart={LowestPriceToKrasnodar.dateStart}
      />
      <FlyToCity
        cityImg="/sochi.png"
        cityTo={LowestPriceToSochi.toCity}
        countryTo={LowestPriceToSochi.countryTo}
        ticketPrice={LowestPriceToSochi.ticketPrice}
        dateStart={LowestPriceToSochi.dateStart}
      />
      <FlyToCity
        cityImg="/piter.png"
        cityTo={LowestPriceToSaintPetersburg.toCity}
        countryTo={LowestPriceToSaintPetersburg.countryTo}
        ticketPrice={LowestPriceToSaintPetersburg.ticketPrice}
        dateStart={LowestPriceToSaintPetersburg.dateStart}
      />
      <FlyToCity
        cityImg="/mineralvody.png"
        cityTo={LowestPriceToMineralnieVody.toCity}
        countryTo={LowestPriceToMineralnieVody.countryTo}
        ticketPrice={LowestPriceToMineralnieVody.ticketPrice}
        dateStart={LowestPriceToMineralnieVody.dateStart}
      />
      <FlyToCity
        cityImg="/simpferopol.jpg"
        cityTo={LowestPriceToSimpferopol.toCity}
        countryTo={LowestPriceToSimpferopol.countryTo}
        ticketPrice={LowestPriceToSimpferopol.ticketPrice}
        dateStart={LowestPriceToSimpferopol.dateStart}
      />
      <FlyToCity
        cityImg="/barcelona.png"
        cityTo={LowestPriceToBarcelona.toCity}
        countryTo={LowestPriceToBarcelona.countryTo}
        ticketPrice={LowestPriceToBarcelona.ticketPrice}
        dateStart={LowestPriceToBarcelona.dateStart}
      />
    </TopCityWrapper>
  );
}

function removeDuplicates(arr, prop) {
  var obj = {};
  for (var i = 0, len = arr.length; i < len; i++) {
    if (!obj[arr[i][prop]]) obj[arr[i][prop]] = arr[i];
  }
  var newArr = [];
  for (var key in obj) newArr.push(obj[key]);
  return newArr;
}

let SimpferopolTopFiveLowestTickets = FullInfoAboutFly.filter(a => {
  return a.toCity === "Симферополь";
}).sort(function(a, b) {
  return a.ticketPrice - b.ticketPrice;
});

let FilteredSimpferopolTopFiveLowestTickets = removeDuplicates(
  SimpferopolTopFiveLowestTickets,
  "cityFrom"
);

let listSimpferopolTickets = FilteredSimpferopolTopFiveLowestTickets.slice(
  0,
  5
).map(top => (
  <div>
    <li>
      Из {top.cityFrom} от {top.ticketPrice} ₽
    </li>
  </div>
));
let ErevanTopFiveLowestTickets = FullInfoAboutFly.filter(a => {
  return a.toCity === "Ереван";
}).sort(function(a, b) {
  return a.ticketPrice - b.ticketPrice;
});

let FilteredErevanTopFiveLowestTickets = removeDuplicates(
  ErevanTopFiveLowestTickets,
  "cityFrom"
);

let listErevanTickets = FilteredErevanTopFiveLowestTickets.slice(0, 5).map(
  top => (
    <div>
      <li>
        Из {top.cityFrom} от {top.ticketPrice} ₽
      </li>
    </div>
  )
);
let KishenevTopFiveLowestTickets = FullInfoAboutFly.filter(a => {
  return a.toCity === "Кишинёв";
}).sort(function(a, b) {
  return a.ticketPrice - b.ticketPrice;
});

let FilteredKishenevTopFiveLowestTickets = removeDuplicates(
  KishenevTopFiveLowestTickets,
  "cityFrom"
);

let listKishenevTickets = FilteredKishenevTopFiveLowestTickets.slice(0, 5).map(
  top => (
    <div>
      <li>
        Из {top.cityFrom} от {top.ticketPrice} ₽
      </li>
    </div>
  )
);

const BestPriceTicketsListWrapper = styled.div`
  display: flex;
  background-color: red;
  margin: auto;
  margin-top: 2%;
  justify-content: space-between;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
function BestPriceTicketsList() {
  return (
    <BestPriceTicketsListWrapper className="col-xl-10 col-lg-10 col-md-10 col-sm-12">
      <div>{listSimpferopolTickets}</div>
      <div>{listErevanTickets}</div>
      <div>{listKishenevTickets}</div>
    </BestPriceTicketsListWrapper>
  );
}

function Body() {
  return (
    <div className="container">
      <div className="col-xl-12">
        <div className="row">
          <MostPopularPlacesFromMyCity CityFrom="Киев" />
          <CategoriesMenu />
          <GetTopCityByPrice />
          <BestTicketsPriceInThisMonth />
          <BestPriceTicketsList />
        </div>
      </div>
    </div>
  );
}

export default Body;
