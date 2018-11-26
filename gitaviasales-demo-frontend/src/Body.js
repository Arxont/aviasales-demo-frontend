import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";

import "flexboxgrid2";

import FullInfoAboutFly from "./components/DataFilter";

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
import fb from "./images/faceBook.png";
import vk from "./images/vk.png";
import rss from "./images/rss.png";
import twit from "./images/twitter.png";
import emailIcon from "./images/emailIcon.png";
import planeIcon from "./images/planeIcon.png";
import booksIcon from "./images/booksIcon.png";
import leftArrow from "./images/leftArrow.png";
import rightArrow from "./images/rightArrow.png";

const SectionWrapper = styled.div`
  margin: auto;
`;
const SliderWrapper = styled.div`
  margin: auto;
  margin-top: 10%;
  margin-bottom: 10%;
  border: 10px solid transparent;
  border-top-style: none;
  border-image: url("/border.png") 30 round;
  padding-bottom: 50px;
`;
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

const FlyToCityInnerRaper = styled.div`
  display: flex;
  flex-direction: column;
`;
const FlyToCityImg = styled.img`
  width: 100%;
  border-style: none;
`;
function FlyToCity(props) {
  return (
    <FlyToCityBlock className="col-xl-5 col-lg-5 col-md-12">
      <FlyToCityImg src={props.cityImg} alt="cityImage" />
      <FlyToCityWrapper>
        <FlyToCityInfoWrapper>
          <img src={flagRu} alt="flag" />
          <FlyToCityInnerRaper>
            {props.cityTo}
            <FlyToCityAddInfo>{props.countryTo}</FlyToCityAddInfo>
          </FlyToCityInnerRaper>
        </FlyToCityInfoWrapper>
        <FlyToCityInnerRaper>
          <a href="123.com">Найти от {props.ticketPrice} ₽</a>
          <FlyToCityAddInfo>{props.dateStart}</FlyToCityAddInfo>
        </FlyToCityInnerRaper>
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

const ListedContainer = styled.li`
  list-style-type: none;
`;
const SeparatedTxtInLi = styled.span`
  display: flex;
  justify-content: space-between;
`;
const StyledTicketPrice = styled.span`
  color: #00bae8;
`;
let listSimpferopolTickets = FilteredSimpferopolTopFiveLowestTickets.slice(
  0,
  5
).map(top => (
  <ListedContainer>
    <SeparatedTxtInLi>
      <span>Из {top.cityFrom}</span>
      <StyledTicketPrice> от {top.ticketPrice} ₽</StyledTicketPrice>
    </SeparatedTxtInLi>
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
      <SeparatedTxtInLi>
        <span>Из {top.cityFrom}</span>
        <StyledTicketPrice>от {top.ticketPrice} ₽</StyledTicketPrice>
      </SeparatedTxtInLi>
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
      <SeparatedTxtInLi>
        <span>Из {top.cityFrom}</span>
        <StyledTicketPrice>от {top.ticketPrice} ₽</StyledTicketPrice>
      </SeparatedTxtInLi>
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
  text-align: center;
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

const CarouselImg = styled.img`
  margin-top: 100px;
  margin-bottom: 100px;
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
          slidesToShow={3}
          cellAlign="left"
          autoplay={true}
          cellSpacing={50}
          slideWidth={0.5}
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
          <CarouselImg src="/agenciesAgencyLogo.png" alt="Logo" />
          <CarouselImg src="/agenciesAgencyLogo1.png" alt="Logo" />
          <CarouselImg src="/agenciesAgencyLogo2.png" alt="Logo" />
          <CarouselImg src="/agenciesAgencyLogo3.png" alt="Logo" />
          <CarouselImg src="/agenciesAgencyLogo4.png" alt="Logo" />
          <CarouselImg src="/agenciesAgencyLogo.png" alt="Logo" />
          <CarouselImg src="/agenciesAgencyLogo1.png" alt="Logo" />
          <CarouselImg src="/agenciesAgencyLogo2.png" alt="Logo" />
          <CarouselImg src="/agenciesAgencyLogo3.png" alt="Logo" />
          <CarouselImg src="/agenciesAgencyLogo4.png" alt="Logo" />
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
    background-color: red;
  }
`;
const SubscribeInfo = styled.div`
  width: 40%;
  @media (max-width: 1000px) {
    margin: auto;
    width: 80%;
    background-color: green;
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
  display: flex;
  flex-direction: column;
  background-color: blue;
`;
const SpecialOfferBlock = styled.div`
  display: flex;
  flex-direction: column;
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
  justify-content: space-between;
  background-color: white;
`;
const SpecialOfferFooter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;
const SpecialOfferButton = styled.button`
  width: 90%;
  margin: auto;
  margin-bottom: 2%;
  border-radius: 10px;
  color: red;
  background-color: white;
  border-style: solid;
  border-color: red;
`;

const SpecialOffersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
`;
const SpecialOfferCompanyLogoImgContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SpecialofferPrice = styled.p`
  text-align: end;
  font-size: 20px;
  line-height: 16px;
`;
const SpecialOfferExpireTime = styled.p`
  color: red;
  text-align: end;
  font-size: 12px;
  line-height: 15px;
`;
function SpecialOffers(props) {
  return (
    <SpecialOfferBlock className="col-xl-3 col-lg-3 col-md-3">
      <SpecialOfferHeader>
        <p>Билеты от {props.price} Рублей!</p>
        <img src={props.img} alt={props.alt} />
      </SpecialOfferHeader>
      <SpecialOfferBody>
        <SpecialOfferCompanyLogoImgContainer>
          <img src={props.CompanyLogo} alt="Company Logo" />
        </SpecialOfferCompanyLogoImgContainer>
        <div>
          <SpecialofferPrice>От {props.price} ₽</SpecialofferPrice>
          <SpecialOfferExpireTime>
            Осталось {props.timeLeft}
          </SpecialOfferExpireTime>
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

const ColoredHiddenTxtButton = styled.a`
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

  render(props) {
    let ShowHiddenComponent = this.state.hidden ? { display: "none" } : {};
    let hideHComponent = this.state.show ? { display: "none" } : {};
    let moreTxt = "...Подробнее";
    let lesstxt = "Скрыть";

    return (
      <div>
        {this.props.shownText}
        <span style={ShowHiddenComponent}>{this.props.hiddentext}</span>
        <ColoredHiddenTxtButton
          onClick={e => {
            this.showComponentOnClick(e);
            this.hideComponentOnClick(e);
          }}
          style={hideHComponent}
        >
          {moreTxt}
        </ColoredHiddenTxtButton>
        <ColoredHiddenTxtButton
          onClick={e => {
            this.hideButton();
            this.showButton();
          }}
          style={ShowHiddenComponent}
        >
          {lesstxt}
        </ColoredHiddenTxtButton>
      </div>
    );
  }
}

const TextForSomeInfo =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisi ullamcorper, commodo ipsum eu, auctor risus. Sed lectus ex, faucibus at placerat eget, hendrerit ac tortor. Vivamus id pellentesque turpis. Morbi luctus leo sed placerat aliquet. Morbi finibus consequat sem non ultrices. Etiam non tempor orci. In neque mi, efficitur ut sapien sit amet, ullamcorper fermentum est. In fermentum, turpis ut scelerisque ornare, lectus metus hendrerit tellus, in volutpat erat lorem ac turpis. Nullam eleifend luctus mi, in vulputate nulla scelerisque in. Nulla ut laoreet arcu. Cras facilisis nulla sed pulvinar fermentum. Vivamus rutrum ac metus ac tincidunt. Cras laoreet volutpat odio, nec iaculis dui varius non. Proin at tempor quam, ornare tincidunt purus. Aenean dignissim pharetra ultricies. Praesent fermentum nulla ac erat blandit, nec dictum magna aliquet. Mauris aliquet elementum massa, nec tincidunt nisl vulputate id. Fusce interdum diam ac dapibus ultricies. Maecenas risus quam, maximus nec pretium vel, varius et dolor. Vestibulum sodales tellus justo, et mattis augue faucibus sit amet. Vestibulum porta tincidunt massa vel facilisis. Vivamus vestibulum laoreet orci. Pellentesque sollicitudin, purus eu sollicitudin scelerisque, metus lorem iaculis leo, vel interdum turpis nibh ac mi. Pellentesque eu blandit augue. Suspendisse feugiat quam diam, et dignissim augue pulvinar eu. Donec posuere purus quis libero porta viverra. Fusce placerat lacinia feugiat. Pellentesque facilisis imperdiet metus nec venenatis. Nam dui ipsum, pellentesque quis turpis in, vulputate interdum mauris. Duis feugiat eros eget arcu sagittis consequat. Donec et dapibus erat, a pellentesque quam. Nam bibendum vel massa bibendum cursus. Vestibulum eu risus sem. Mauris at nunc neque. Mauris nec consequat orci, venenatis feugiat magna. Duis posuere, sapien ac aliquet tincidunt, nunc ex tincidunt eros, in placerat purus lacus id mi. In efficitur urna felis. Sed semper ipsum magna, sed ultrices dui sollicitudin vel. Sed vestibulum imperdiet risus, ac aliquet lorem pulvinar ut. Quisque sit amet iaculis nisi, sed mattis dolor. Phasellus quis justo eu purus tincidunt luctus. Curabitur dictum nec purus at bibendum. Morbi ac feugiat augue. Donec est urna, vulputate non volutpat a, congue quis sapien. Quisque laoreet nulla at diam hendrerit dignissim. Nullam rhoncus pretium ipsum, at euismod sapien cursus quis. Quisque elementum libero a eros commodo gravida. Nullam vehicula porttitor feugiat. Aliquam facilisis augue quis sem consequat congue. Fusce ultricies viverra nunc, ac porttitor tortor interdum at. Pellentesque id est ut metus suscipit mollis. Vestibulum ut faucibus urna, eu malesuada urna. Cras at imperdiet felis, in vehicula elit. Cras pellentesque tellus et est efficitur blandit. Nullam mattis quis nisl vel sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";
const VisibleInfo = TextForSomeInfo.substr(0, 300);
const HiddenInfo = TextForSomeInfo.substr(301);

function SomeInfo(props) {
  return (
    <div>
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
    </div>
  );
}
fetch(
  "http://autocomplete.travelpayouts.com/places2?term=Mos&locale=ru&types[]=city"
).then(function(response) {
  return response.json();
});

function Body() {
  return (
    <div>
      <div className="container">
        <div className="col-xl-12">
          <div className="row">
            <MostPopularPlacesFromMyCity CityFrom="Киев" />
            <CategoriesMenu />
            <GetTopCityByPrice />
            <BestTicketsPriceInThisMonth />
            <BestPriceTicketsList />
            <AdditionalInfo />
          </div>
        </div>
      </div>
      <SliderWrapper className="col-sm-hidden">
        <div className="container">
          <div className="col-xl-12">
            <div className="row">
              <LogoSlider />
            </div>
          </div>
        </div>
      </SliderWrapper>
      <div className="container">
        <div className="col-xl-12">
          <div className="row">
            <SectionWrapper className="col-xl-10">
              <Subscribe vk={vk} twit={twit} fb={fb} rss={rss} />
            </SectionWrapper>
          </div>
        </div>
      </div>
      <SpecialOffersBackGround>
        <div className="container">
          <div className="col-xl-12">
            <div className="row">
              <SectionWrapper className="col-xl-10 col-lg-10 col-md-12">
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
              </SectionWrapper>
            </div>
          </div>
        </div>
      </SpecialOffersBackGround>
      <div className="container">
        <div className="col-xl-12">
          <div className="row">
            <SectionWrapper className="col-xl-10">
              <SomeInfo plane={planeIcon} hint={emailIcon} book={booksIcon} />
            </SectionWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
