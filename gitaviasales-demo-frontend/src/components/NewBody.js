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
const SubscribeWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const LinkWrapper = styled.div`
  display: flex;
`;
const SendEmailButton = styled.button`
  background-color: orange;
`;

function Subscribe(props) {
  return (
    <SubscribeWrapper>
      <div>
        <h2>Хотите знать все о скидках на авиабилеты?</h2>
        <p>
          Вы можете подписаться на нашу рассылку через социальные сети или по
          электронной почте
        </p>
      </div>
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
        <div>
          <input type="text" name="Email" value="Ваш email" />
          <SendEmailButton>Подписаться</SendEmailButton>
        </div>
      </LinkWrapper>
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
  justify-content: space-between;
  margin: auto;
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

let str =
  "111Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh nulla, sollicitudin nec interdum sed, porta nec ex. Fusce iaculis odio tristique sem mattis, ut finibus augue aliquam. Pellentesque interdum turpis a dolor interdum mollis. Vestibulum finibus, mi in faucibus egestas, erat lorem luctus ipsum, vitae eleifend mauris mi et massa. Duis congue nibh ut leo pretium, sed convallis est placerat. Aenean eget est eu tellus finibus sagittis eu elementum tortor. Suspendisse et turpis eu nisl eleifend egestas. In congue dui elit, id lacinia sem mollis vitae. Curabitur accumsan vitae arcu et imperdiet. Praesent accumsan pellentesque felis eget eleifend. Nullam est velit, placerat dictum rutrum in, porta vitae nisl. Cras tempus ante nunc, non iaculis odio tristique non. Etiam nec dolor nibh. Sed aliquet hendrerit lorem quis pharetra. Nulla iaculis ac mi vel varius. Etiam malesuada dignissim nisi, non bibendum urna tincidunt eget. Integer consectetur risus nisl, nec aliquet nulla convallis sed. Maecenas luctus gravida augue ac finibus. Fusce sagittis ac velit in cursus. Vestibulum hendrerit justo in efficitur malesuada. Vestibulum gravida sed ligula vel interdum. Quisque elementum accumsan neque eget efficitur. Sed tincidunt dolor in leo aliquam pretium.";

const HeadingWrapper = styled.div`
  display: flex;
`;



function SomeInfo(props) {
  return (
    <div>
      <div>
        <HeadingWrapper>
          <img src={props.plane} alt="plane" />
          <h2>Как купить дешевые авиабилеты</h2>
        </HeadingWrapper>
        <div>{str}</div>
        <button>Подробнее</button>
      </div>
      <div>
        <HeadingWrapper>
          <img src={props.hint} alt="@" />
          <h2>электронный авиабилет</h2>
        </HeadingWrapper>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh
          nulla, sollicitudin nec interdum sed, porta nec ex. Fusce iaculis odio
          tristique sem mattis, ut finibus augue aliquam. Pellentesque interdum
          turpis a dolor interdum mollis. Vestibulum finibus, mi in faucibus
          egestas, erat lorem luctus ipsum, vitae eleifend mauris mi et massa.
          Duis congue nibh ut leo pretium, sed convallis est placerat. Aenean
          eget est eu tellus finibus sagittis eu elementum tortor. Suspendisse
          et turpis eu nisl eleifend egestas. In congue dui elit, id lacinia sem
          mollis vitae. Curabitur accumsan vitae arcu et imperdiet. Praesent
          accumsan pellentesque felis eget eleifend. Nullam est velit, placerat
          dictum rutrum in, porta vitae nisl. Cras tempus ante nunc, non iaculis
          odio tristique non. Etiam nec dolor nibh. Sed aliquet hendrerit lorem
          quis pharetra. Nulla iaculis ac mi vel varius. Etiam malesuada
          dignissim nisi, non bibendum urna tincidunt eget. Integer consectetur
          risus nisl, nec aliquet nulla convallis sed. Maecenas luctus gravida
          augue ac finibus. Fusce sagittis ac velit in cursus. Vestibulum
          hendrerit justo in efficitur malesuada. Vestibulum gravida sed ligula
          vel interdum. Quisque elementum accumsan neque eget efficitur. Sed
          tincidunt dolor in leo aliquam pretium.
          <span>Тест</span>
        </div>
      </div>
      <div>
        <HeadingWrapper>
          <img src={props.book} alt="book" />
          <h2>20 советов авиапутешественникам</h2>
        </HeadingWrapper>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nibh
          nulla, sollicitudin nec interdum sed, porta nec ex. Fusce iaculis odio
          tristique sem mattis, ut finibus augue aliquam. Pellentesque interdum
          turpis a dolor interdum mollis. Vestibulum finibus, mi in faucibus
          egestas, erat lorem luctus ipsum, vitae eleifend mauris mi et massa.
          Duis congue nibh ut leo pretium, sed convallis est placerat. Aenean
          eget est eu tellus finibus sagittis eu elementum tortor. Suspendisse
          et turpis eu nisl eleifend egestas. In congue dui elit, id lacinia sem
          mollis vitae. Curabitur accumsan vitae arcu et imperdiet. Praesent
          accumsan pellentesque felis eget eleifend. Nullam est velit, placerat
          dictum rutrum in, porta vitae nisl. Cras tempus ante nunc, non iaculis
          odio tristique non. Etiam nec dolor nibh. Sed aliquet hendrerit lorem
          quis pharetra. Nulla iaculis ac mi vel varius. Etiam malesuada
          dignissim nisi, non bibendum urna tincidunt eget. Integer consectetur
          risus nisl, nec aliquet nulla convallis sed. Maecenas luctus gravida
          augue ac finibus. Fusce sagittis ac velit in cursus. Vestibulum
          hendrerit justo in efficitur malesuada. Vestibulum gravida sed ligula
          vel interdum. Quisque elementum accumsan neque eget efficitur. Sed
          tincidunt dolor in leo aliquam pretium.
        </div>
      </div>
    </div>
  );
}
fetch(
  "http://autocomplete.travelpayouts.com/places2?term=Mos&locale=ru&types[]=city"
)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
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
            <Subscribe vk={vk} twit={twit} fb={fb} rss={rss} />
          </div>
        </div>
      </div>
      <SpecialOffersBackGround>
        <div className="container">
          <div className="col-xl-12">
            <div className="row">
              <h2 className="col-xl-10">Спецпредложения на авиабилеты</h2>
              <SpecialOffersWrapper className="col-xl-10">
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
            </div>
          </div>
        </div>
      </SpecialOffersBackGround>
      <div className="container">
        <div className="col-xl-12">
          <div className="row">
            <SomeInfo plane={planeIcon} hint={emailIcon} book={booksIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
