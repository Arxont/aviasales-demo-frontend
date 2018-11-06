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
      <img src={compass} alt="img" />
      <MostPopularPlacesTxtWrapper>
        Популярные направления
        <br className="hidden-md" /> перелетов
        <br className="hidden-sm hidden-xs" /> из города
        <CityLink href="123.com">{props.CityFrom}</CityLink>
        <img src={pen} alt="pen" />
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

const FlyToCityBlock = styled.div`
  box-shadow: 0 3px 8px -3px grey;
  width: 45%;
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
function FlyToCity(props) {
  return (
    <FlyToCityBlock>
      <img src="/simpferopol.jpg" alt="Simpferopol" />
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
const GetTopCityByPriceBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`;

function GetTopCityByPrice() {
  return (
    <GetTopCityByPriceBlock className="col-xl-12">
      <FlyToCity
        cityTo={LowestPriceToSimpferopol.toCity}
        countryTo={LowestPriceToSimpferopol.countryTo}
        ticketPrice={LowestPriceToSimpferopol.ticketPrice}
        dateStart={LowestPriceToSimpferopol.dateStart}
      />
    </GetTopCityByPriceBlock>
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
        </div>
      </div>
    </div>
  );
}

export default Body;
