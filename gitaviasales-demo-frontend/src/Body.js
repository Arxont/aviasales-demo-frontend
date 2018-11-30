import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";

import "flexboxgrid2";

import FullInfoAboutFly from "./components/DataFilter";

import pic from "./images/pic.png";
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
import lufthansa from "./images/lufthansa.png";
import fb from "./images/faceBook.png";
import vk from "./images/vk.png";
import rss from "./images/rss.png";
import twit from "./images/twitter.png";
import emailIcon from "./images/emailIcon.png";
import planeIcon from "./images/planeIcon.png";
import booksIcon from "./images/booksIcon.png";
import leftArrow from "./images/leftArrow.png";
import rightArrow from "./images/rightArrow.png";
import apple from "./images/apple.png";
import android from "./images/android.png";
import wf from "./images/wf.png";

const API = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_QUERY = "redux";
/*
class Zadralo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: []
    };
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }
  render() {
    const { hits } = this.state;

    return (
      <ul>
        {hits.map(hit => (
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        ))}
      </ul>
    );
  }
}
*/ class Qwerty extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      infoByIp: []
    };
  }
  componentDidMount() {
    fetch(
      "http://api.ipapi.com/check?access_key=4e69fb73d1764a00abae2b683a9e5c48"
    )
      .then(response => response.json())
      .then(data => this.setState({ infoByIp: data }));
  }
  render() {
    let userIp = this.state;
  

    return Object.entries(userIp).map(([key, value], i) => {
      return (
        <div>
          Ip is: {value.ip} and city is: {value.city}
        </div>
      );
    });
  }
}

fetch("http://api.ipapi.com/check?access_key=4e69fb73d1764a00abae2b683a9e5c48")
  .then(response => response.json())
  .then(json => console.log(json));

fetch(
  "http://www.travelpayouts.com/whereami?locale=ru&callback=useriata&ip=194.146.110.31&token=3168eb2e19e0d0762d68c83d9bde678d"
)
  .then(response => response.text())
  // .then(text1 => console.log(text1));

const MostPopularPlacesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-center;
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
      <img src={calen} alt="img" />
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
  margin-top: 1%;
  margin-bottom: 1%;
`;
const FlyToCityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FlyToCityInfoWrapper = styled.div`
  display: flex;
`;

const FlyToCityAddInfo = styled.span`
  color: grey;
`;

const CityAndCountry = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;
const TicketsAndStartDate = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
`;
const FlyToCityImg = styled.img`
  width: 100%;
  border-style: none;
`;
function FlyToCity(props) {
  return (
    <FlyToCityBlock className="col-xl-5 col-lg-5 col-lg-5 col-md-12">
      <FlyToCityImg src={props.cityImg} alt="cityImage" />
      <FlyToCityWrapper>
        <FlyToCityInfoWrapper>
          <img src={props.flagImg} alt="flag" />
          <CityAndCountry>
            {props.cityTo}
            <FlyToCityAddInfo>{props.countryTo}</FlyToCityAddInfo>
          </CityAndCountry>
        </FlyToCityInfoWrapper>
        <TicketsAndStartDate>
          <a href="123.com">Найти от {props.ticketPrice} ₽</a>
          <FlyToCityAddInfo>{props.dateStart}</FlyToCityAddInfo>
        </TicketsAndStartDate>
      </FlyToCityWrapper>
    </FlyToCityBlock>
  );
}

const TopCityWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 2%;
`;

function GetTopCityByPrice() {
  return (
    <TopCityWrapper className="col-xl-10">
      <FlyToCity
        cityImg="/krasnodar.png"
        flagImg={flagRu}
        cityTo={LowestPriceToKrasnodar.toCity}
        countryTo={LowestPriceToKrasnodar.countryTo}
        ticketPrice={LowestPriceToKrasnodar.ticketPrice}
        dateStart={LowestPriceToKrasnodar.dateStart}
      />
      <FlyToCity
        cityImg="/sochi.png"
        flagImg={flagRu}
        cityTo={LowestPriceToSochi.toCity}
        countryTo={LowestPriceToSochi.countryTo}
        ticketPrice={LowestPriceToSochi.ticketPrice}
        dateStart={LowestPriceToSochi.dateStart}
      />
      <FlyToCity
        cityImg="/piter.png"
        flagImg={flagRu}
        cityTo={LowestPriceToSaintPetersburg.toCity}
        countryTo={LowestPriceToSaintPetersburg.countryTo}
        ticketPrice={LowestPriceToSaintPetersburg.ticketPrice}
        dateStart={LowestPriceToSaintPetersburg.dateStart}
      />
      <FlyToCity
        cityImg="/mineralvody.png"
        flagImg={flagRu}
        cityTo={LowestPriceToMineralnieVody.toCity}
        countryTo={LowestPriceToMineralnieVody.countryTo}
        ticketPrice={LowestPriceToMineralnieVody.ticketPrice}
        dateStart={LowestPriceToMineralnieVody.dateStart}
      />
      <FlyToCity
        cityImg="/simpferopol.jpg"
        flagImg={flagRu}
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

const ListedContainer = styled.li`
  list-style-type: none;
`;
const CityAndPrice = styled.span`
  display: flex;
  justify-content: space-between;
`;
const City = styled.span`
width:60%;
white-space: nowrap;
  overflow: hidden
  text-align:start;
  text-overflow: ellipsis;

`;
const TicketPrice = styled.span`
  color: #00bae8;
`;

let listSimpferopolTickets = FilteredSimpferopolTopFiveLowestTickets.slice(
  0,
  5
).map(top => (
  <ListedContainer>
    <CityAndPrice>
      <City>Из {top.cityFrom}</City>
      <TicketPrice> от {top.ticketPrice} ₽</TicketPrice>
    </CityAndPrice>
  </ListedContainer>
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
    <ListedContainer>
      <CityAndPrice>
        <City>Из {top.cityFrom}</City>
        <TicketPrice> от {top.ticketPrice} ₽</TicketPrice>
      </CityAndPrice>
    </ListedContainer>
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
    <ListedContainer>
      <CityAndPrice>
        <City>Из {top.cityFrom}</City>
        <TicketPrice> от {top.ticketPrice} ₽</TicketPrice>
      </CityAndPrice>
    </ListedContainer>
  )
);

const BestPriceTicketsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 2%;
  justify-content: space-between;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
const BestPriceTicketsColumn = styled.div`
  @media (max-width: 1000px) {
    margin-bottom: 3%;
  }
`;
function BestPriceTicketsList() {
  return (
    <BestPriceTicketsListWrapper className="col-xl-10 col-lg-10 col-md-10 col-sm-12">
      <BestPriceTicketsColumn className="col-xl-4 col-lg-4 col-md-12">
        {listSimpferopolTickets}
      </BestPriceTicketsColumn>
      <BestPriceTicketsColumn className="col-xl-4 col-lg-4 col-md-12">
        {listErevanTickets}
      </BestPriceTicketsColumn>
      <BestPriceTicketsColumn className="col-xl-4 col-lg-4 col-md-12">
        {listKishenevTickets}
      </BestPriceTicketsColumn>
    </BestPriceTicketsListWrapper>
  );
}

const AdditionalInfoWrapper = styled.div`
  margin: auto;
  margin-top: 5%;
`;

const StyledAddInfo = styled.div`
  color: grey;
  font-size: 14px;
  line-height: 20px;
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
      <StyledAddInfo>
        Цены найденные пользователями за последние 48 часов не являются офертой.
      </StyledAddInfo>
    </AdditionalInfoWrapper>
  );
}

const SliderWrapper = styled.div`
  margin: auto;
  margin-top: 10%;
  margin-bottom: 10%;
  border: 10px solid transparent;
  border-top-style: none;
  border-image: url("/border.png") 30 round;
  padding-bottom: 50px;
`;

const CarouselWrapper = styled.div`
  margin: auto;
`;
const LeftControlButton = styled.img`
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
const RightControlButton = styled.img`
  border-radius: 20px;
  cursor: pointer;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 100px;
  padding-bottom: 100px;
  width: 80%;
  margin: auto;
  justify-content: space-around;
`;
const LogoImage = styled.img`
  margin-bottom: 5%;
`;
const SliderText = styled.p`
  text-align: center;
`;
class LogoSlider extends React.Component {
  render() {
    return (
      <CarouselWrapper className="col-xl-10">
        <SliderText>
          Дешевые билеты от крупнейший авиакомпаний и агенств
        </SliderText>
        <Carousel
          autoplay={true}
          renderCenterLeftControls={({ previousSlide }) => (
            <LeftControlButton
              onClick={previousSlide}
              src={leftArrow}
              alt="left"
            />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <RightControlButton
              onClick={nextSlide}
              src={rightArrow}
              alt="left"
            />
          )}
        >
          <ImagesContainer>
            <LogoImage src="/agenciesAgencyLogo.png" alt="Logo" />
            <LogoImage src="/agenciesAgencyLogo1.png" alt="Logo" />
            <LogoImage src="/agenciesAgencyLogo2.png" alt="Logo" />
            <LogoImage src="/agenciesAgencyLogo3.png" alt="Logo" />
            <LogoImage src="/agenciesAgencyLogo4.png" alt="Logo" />
          </ImagesContainer>
          <ImagesContainer>
            <LogoImage src="/agenciesAgencyLogo.png" alt="Logo" />
            <LogoImage src="/agenciesAgencyLogo1.png" alt="Logo" />
            <LogoImage src="/agenciesAgencyLogo2.png" alt="Logo" />
            <LogoImage src="/agenciesAgencyLogo3.png" alt="Logo" />
            <LogoImage src="/agenciesAgencyLogo4.png" alt="Logo" />
          </ImagesContainer>
          <ImagesContainer>
            <LogoImage src="/agenciesAgencyLogo.png" alt="Logo" />
            <LogoImage src="/agenciesAgencyLogo1.png" alt="Logo" />
            <LogoImage src="/agenciesAgencyLogo2.png" alt="Logo" />
            <LogoImage src="/agenciesAgencyLogo3.png" alt="Logo" />
            <LogoImage src="/agenciesAgencyLogo4.png" alt="Logo" />
          </ImagesContainer>
        </Carousel>
      </CarouselWrapper>
    );
  }
}

const SubscribeWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 5%;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;
const SubscribeInfo = styled.div`
  width: 40%;
  @media (max-width: 1000px) {
    margin: auto;
    width: 80%;
    text-align: center;
  }
`;
const UrlContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    margin-top: 3%;
    margin-bottom: 3%;
  }
`;
const SocialSubscribeWrapper = styled.div`
  margin-left: 5%;
`;
const SendEmailButton = styled.button`
  background-color: orange;
`;
const SubscribeHeader = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
`;

const SubscribeText = styled.p`
  font-size: 16px;
  line-height: 20px;
`;

function Subscribe(props) {
  return (
    <SubscribeWrapper>
      <SubscribeInfo>
        <SubscribeHeader>
          Хотите знать все о скидках на авиабилеты?
        </SubscribeHeader>
        <SubscribeText>
          Вы можете подписаться на нашу рассылку через социальные сети или по
          электронной почте
        </SubscribeText>
      </SubscribeInfo>
      <UrlContainer>
        <LinkWrapper>
          <a href="123.com">
            <img src={props.twit} alt="twit" />
          </a>
          <a href="123.com">
            <img src={props.fb} alt="Fb" />
          </a>
          <a href="123.com">
            <img src={props.vk} alt="Vk" />
          </a>
          <a href="123.com">
            <img src={props.rss} alt="rss" />
          </a>
        </LinkWrapper>
        <SocialSubscribeWrapper>
          <input type="text" name="Email" value="Ваш email" />
          <SendEmailButton>Подписаться</SendEmailButton>
        </SocialSubscribeWrapper>
      </UrlContainer>
    </SubscribeWrapper>
  );
}

const SpecialOffersBackGround = styled.div`
  background-color: blue;
`;
const SpecialOffersContainer = styled.div`
  background-color: white;
  height: 300px;
  font-size: 12px;
  line-height: 20px;
  text-align: start;
`;
const SpecialOffersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: red;
  padding-left: 10px;
  padding-right: 10px;
  height: 15%;
  color: white;
  font-size: 16px;
  line-height: 20px;
`;
const HeaderInfoWrapper = styled.span`
  width: 80%;
  white-space: nowrap;
  overflow: hidden
  text-overflow: ellipsis;
`;

const SpecialOffersBody = styled.div`
  height: 50%;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 12px;
  line-height: 16px;
`;
const PriceInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LogotypeImg = styled.img`
  width: 50%;
`;
const PriceInfo = styled.div`
  text-align: end;
  font-size: 20px;
  line-height: 16px;
`;
const AlertInfo = styled.p`
  color: red;
  font-size: 12px;
  line-height: 15px;
`;

/* без врапера кнопка не хочет центрироваться*/
const SpecialOffersFooter = styled.div`
  width: 90%;
  margin: auto;
`;
const SpecialOfferButton = styled.button`
  width: 100%;
  color: red;
  background-color: white;
  border-style: solid;
  border-color: red;
`;

const Test = styled.div`
  margin-bottom: 5%;
`;
function SpecialOffersCard(props) {
  return (
    <Test className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
      <SpecialOffersContainer>
        <SpecialOffersHeader>
          <HeaderInfoWrapper>
            <p>
              {props.flyTo} от {props.price} рублей!
            </p>
          </HeaderInfoWrapper>
          <img src={props.headerPic} alt="pic" />
        </SpecialOffersHeader>
        <SpecialOffersBody>
          <PriceInfoWrapper>
            <LogotypeImg src={props.companyLogo} alt="logo" />
            <PriceInfo>
              <p> От {props.price}₽ </p>
              <AlertInfo>Осталось {props.timeLeft} дней</AlertInfo>
            </PriceInfo>
          </PriceInfoWrapper>
          <p>
            {props.ticketInfo} от {props.price} рублей! Специальное предложение
            от авиакомпании {props.companyName}
          </p>
        </SpecialOffersBody>
        <SpecialOffersFooter>
          <SpecialOfferButton>
            <p>Узнать подробности</p>
          </SpecialOfferButton>
        </SpecialOffersFooter>
      </SpecialOffersContainer>
    </Test>
  );
}

const SpecialOfferWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
function SpecialOffers() {
  return (
    <SpecialOfferWrapper className="between-xl">
      <SpecialOffersCard
        flyTo="Билеты"
        price="499"
        companyLogo={pobeda}
        timeLeft="45"
        ticketInfo="Билеты"
        companyName="Победа"
      />
      <SpecialOffersCard
        flyTo="В Нью Йорк"
        price="20680"
        companyLogo={lufthansa}
        headerPic={pic}
        timeLeft="19"
        ticketInfo="Из Москвы в США"
        companyName="Lufthansa"
      />
      <SpecialOffersCard
        flyTo="В Лос Анжелес"
        price="22360"
        companyLogo={lufthansa}
        headerPic={pic}
        timeLeft="19"
        ticketInfo="Из Москвы в США"
        companyName="Lufthansa"
      />
    </SpecialOfferWrapper>
  );
}

const WatchAllOffersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
`;

const AllOffers = styled.a`
  color:white;one;
`;
function WatchAllOffers(props) {
  return (
    <WatchAllOffersContainer>
      <AllOffers href="123.com">
        <p>Смотреть все предложения</p>
      </AllOffers>
      <p>* Средняя цена по направлению</p>
    </WatchAllOffersContainer>
  );
}

const HiddenTxtButton = styled.a`
  color: #00ace2;
  cursor: pointer;
`;
class HiddenTxt extends React.Component {
  constructor() {
    super();

    this.state = {
      hidden: true,
      show: false
    };
    this.showComponentOnClick = this.showComponentOnClick.bind(this);
    this.hideComponentOnClick = this.hideComponentOnClick.bind(this);
    this.hideButton = this.hideButton.bind(this);
    this.showButton = this.showButton.bind(this);
  }
  showComponentOnClick(event) {
    this.setState({ hidden: false });
  }
  hideComponentOnClick(event) {
    this.setState({ show: true });
  }
  hideButton(event) {
    this.setState({ hidden: true });
  }
  showButton(event) {
    this.setState({ show: false });
  }

  render() {
    let ShowHiddenComponent = this.state.hidden ? { display: "none" } : {};
    let hideHComponent = this.state.show ? { display: "none" } : {};
    let moreTxt = "...Подробнее";
    let lesstxt = "Скрыть";

    return (
      <div>
        {this.props.shownText}
        <span style={ShowHiddenComponent}>{this.props.hiddentext}</span>
        <HiddenTxtButton
          onClick={e => {
            this.showComponentOnClick(e);
            this.hideComponentOnClick(e);
          }}
          style={hideHComponent}
        >
          {moreTxt}
        </HiddenTxtButton>
        <HiddenTxtButton
          onClick={e => {
            this.hideButton();
            this.showButton();
          }}
          style={ShowHiddenComponent}
        >
          {lesstxt}
        </HiddenTxtButton>
      </div>
    );
  }
}

const TextForSomeInfo =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisi ullamcorper, commodo ipsum eu, auctor risus. Sed lectus ex, faucibus at placerat eget, hendrerit ac tortor. Vivamus id pellentesque turpis. Morbi luctus leo sed placerat aliquet. Morbi finibus consequat sem non ultrices. Etiam non tempor orci. In neque mi, efficitur ut sapien sit amet, ullamcorper fermentum est. In fermentum, turpis ut scelerisque ornare, lectus metus hendrerit tellus, in volutpat erat lorem ac turpis. Nullam eleifend luctus mi, in vulputate nulla scelerisque in. Nulla ut laoreet arcu. Cras facilisis nulla sed pulvinar fermentum. Vivamus rutrum ac metus ac tincidunt. Cras laoreet volutpat odio, nec iaculis dui varius non. Proin at tempor quam, ornare tincidunt purus. Aenean dignissim pharetra ultricies. Praesent fermentum nulla ac erat blandit, nec dictum magna aliquet. Mauris aliquet elementum massa, nec tincidunt nisl vulputate id. Fusce interdum diam ac dapibus ultricies. Maecenas risus quam, maximus nec pretium vel, varius et dolor. Vestibulum sodales tellus justo, et mattis augue faucibus sit amet. Vestibulum porta tincidunt massa vel facilisis. Vivamus vestibulum laoreet orci. Pellentesque sollicitudin, purus eu sollicitudin scelerisque, metus lorem iaculis leo, vel interdum turpis nibh ac mi. Pellentesque eu blandit augue. Suspendisse feugiat quam diam, et dignissim augue pulvinar eu. Donec posuere purus quis libero porta viverra. Fusce placerat lacinia feugiat. Pellentesque facilisis imperdiet metus nec venenatis. Nam dui ipsum, pellentesque quis turpis in, vulputate interdum mauris. Duis feugiat eros eget arcu sagittis consequat. Donec et dapibus erat, a pellentesque quam. Nam bibendum vel massa bibendum cursus. Vestibulum eu risus sem. Mauris at nunc neque. Mauris nec consequat orci, venenatis feugiat magna. Duis posuere, sapien ac aliquet tincidunt, nunc ex tincidunt eros, in placerat purus lacus id mi. In efficitur urna felis. Sed semper ipsum magna, sed ultrices dui sollicitudin vel. Sed vestibulum imperdiet risus, ac aliquet lorem pulvinar ut. Quisque sit amet iaculis nisi, sed mattis dolor. Phasellus quis justo eu purus tincidunt luctus. Curabitur dictum nec purus at bibendum. Morbi ac feugiat augue. Donec est urna, vulputate non volutpat a, congue quis sapien. Quisque laoreet nulla at diam hendrerit dignissim. Nullam rhoncus pretium ipsum, at euismod sapien cursus quis. Quisque elementum libero a eros commodo gravida. Nullam vehicula porttitor feugiat. Aliquam facilisis augue quis sem consequat congue. Fusce ultricies viverra nunc, ac porttitor tortor interdum at. Pellentesque id est ut metus suscipit mollis. Vestibulum ut faucibus urna, eu malesuada urna. Cras at imperdiet felis, in vehicula elit. Cras pellentesque tellus et est efficitur blandit. Nullam mattis quis nisl vel sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
const VisibleInfo = TextForSomeInfo.substr(0, 300);
const HiddenInfo = TextForSomeInfo.substr(301);

const SomeInfoContainer = styled.div`
  text-align: start;
  margin-bottom: 5%;
`;
function SomeInfo(props) {
  return (
    <SomeInfoContainer>
      <div>
        <p>
          <img src={props.plane} alt="plane" />
          Как купить дешевые авиабилеты
        </p>
        <HiddenTxt shownText={VisibleInfo} hiddentext={HiddenInfo} />
      </div>
      <div>
        <p>
          <img src={props.hint} alt="@" /> Электронный авиабилет
        </p>
        <HiddenTxt shownText={VisibleInfo} hiddentext={HiddenInfo} />
      </div>
      <div>
        <p>
          {" "}
          <img src={props.book} alt="book" /> 20 советов авиапутешественникам
        </p>
        <HiddenTxt shownText={VisibleInfo} hiddentext={HiddenInfo} />
        <div />
      </div>
    </SomeInfoContainer>
  );
}

const MobileAdContainer = styled.div`
  position: relative;
  height: 300px;
  margin: auto;
  color: white;
`;

const MobileAdPic = styled.img`
  position: absolute;
  height: 110%;
  width: 20%;
  left: 0px;
  bottom: 0px;
  @media (max-width: 700px) {
    height: 60%;
  }
`;
const MobileAdHeader = styled.div`
  position: absolute;
  top: 15%;
  right: 5%;
  width: 60%;
  text-align: start;
  @media (max-width: 700px) {
    width: 90%;
    left: 5%;
    right: 5%;
    top: 2%;
  }
`;
const MobileAdHeadline = styled.span`
  font-size: 32px;
  line-height: 40px;
  @media (max-width: 700px) {
    font-size: 24px;
    line-height: 28px;
  }
`;
const MobileAdBody = styled.div`
  position: absolute;
  top: 60%;
  right: 25%;
  width: 40%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 700px) {
    top: 60%;
    bottom: 0px;
    flex-direction: column;
    height: 40%;
  }
`;
const MobileAdContent = styled.a`
  text-decoration: none;
  color: white;
`;
const WinImg = styled.img`
  height: 22px;
`;
function MobileAd() {
  return (
    <MobileAdContainer>
      <MobileAdPic src="/backgroundImage.png" alt="MobilePhoneImg" />
      <MobileAdHeader>
        <MobileAdHeadline>
          Скачай мобильное приложение Aviasales.ru
        </MobileAdHeadline>
        <p>
          <span role="img" aria-label="stars">
            ⭐⭐⭐⭐⭐
          </span>{" "}
          Более 103 000 оценок
        </p>
      </MobileAdHeader>
      <MobileAdBody>
        <MobileAdContent href="123.com">
          <img src={apple} alt="apple" />
          <span>Iphone или Ipod </span>
        </MobileAdContent>
        <MobileAdContent href="123.com">
          <img src={android} alt="android" />
          <span>Android </span>
        </MobileAdContent>
        <MobileAdContent href="123.com">
          <WinImg src={wf} alt="windows" />
          <span>Windows Phone</span>
        </MobileAdContent>
      </MobileAdBody>
    </MobileAdContainer>
  );
}
function Body() {
  return (
    <div>
      <div className="row center-xl center-lg center-md center-sm center-es">
        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12">
          <MostPopularPlacesFromMyCity CityFrom="Киев" />
          <CategoriesMenu />
          <GetTopCityByPrice />
          <BestTicketsPriceInThisMonth />
          <BestPriceTicketsList />
          <AdditionalInfo />
        </div>
      </div>
      <SliderWrapper className="">
        <div className="row center-xl center-lg center-md center-sm center-es">
          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12">
            <LogoSlider />
          </div>
        </div>
      </SliderWrapper>
      <div className="row center-xl center-lg center-md center-sm center-es">
        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12">
          <Subscribe vk={vk} twit={twit} fb={fb} rss={rss} />
        </div>
      </div>
      <SpecialOffersBackGround>
        <div className="row center-xl center-lg center-md center-sm center-es">
          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12">
            <h2>Спецпредложения на авиабилеты</h2>
            <SpecialOffers />
            <WatchAllOffers />
          </div>
        </div>
      </SpecialOffersBackGround>
      <div className="row center-xl center-lg center-md center-sm center-es">
        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12">
          <SomeInfo plane={planeIcon} hint={emailIcon} book={booksIcon} />
        </div>
      </div>
      <SpecialOffersBackGround>
        <div className="row center-xl center-lg center-md center-sm center-es">
          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12">
            <MobileAd />
          </div>
        </div>
      </SpecialOffersBackGround>
      <Qwerty />
    </div>
  );
}

export default Body;
