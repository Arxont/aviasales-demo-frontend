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
import fb from "./images/faceBook.png";
import vk from "./images/vk.png";
import rss from "./images/rss.png";
import twit from "./images/twitter.png";
import emailIcon from "./images/emailIcon.png";
import planeIcon from "./images/planeIcon.png";
import booksIcon from "./images/booksIcon.png";

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

const country = [
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

const city = [
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
    ticketPrice: 4813,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 1,
    toId: 6,
    ticketPrice: 1334,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 1,
    toId: 4,
    ticketPrice: 1508,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 1,
    toId: 7,
    ticketPrice: 2074,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 1,
    toId: 2,
    ticketPrice: 2407,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 1,
    toId: 3,
    ticketPrice: 4247,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 1,
    toId: 5,
    ticketPrice: 1212,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 15,
    toId: 2,
    ticketPrice: 4813,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 1,
    toId: 2,
    ticketPrice: 2503,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 2,
    toId: 1,
    ticketPrice: 2489,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 1,
    toId: 3,
    ticketPrice: 4814,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 1,
    toId: 2,
    ticketPrice: 5813,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 4,
    toId: 2,
    ticketPrice: 7857,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 4,
    toId: 2,
    ticketPrice: 7858,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 8,
    toId: 2,
    ticketPrice: 15127,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 9,
    toId: 2,
    ticketPrice: 9275,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 10,
    toId: 2,
    ticketPrice: 9148,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  },
  {
    fromId: 1,
    toId: 15,
    ticketPrice: 8713,
    dateStart: (1, 9, 2018),
    dateEnd: (9, 9, 2018)
  }
];

function join(lookupTable, mainTable, lookupKey, mainKey, select) {
  var l = lookupTable.length,
    m = mainTable.length,
    lookupIndex = [],
    output = [];
  for (var i = 0; i < l; i++) {
    var row = lookupTable[i];
    lookupIndex[row[lookupKey]] = row;
  }
  for (var j = 0; j < m; j++) {
    var y = mainTable[j];
    var x = lookupIndex[y[mainKey]];
    output.push(select(y, x));
  }
  return output;
}

let CityWithCountryJoin = join(country, city, "Id", "countryId", function(
  City,
  Country
) {
  return {
    cityName: City.cityName,
    Id: City.Id,
    countryId: Country !== undefined ? Country.countryName : null
  };
});

let RoutesFrom = join(CityWithCountryJoin, routes, "Id", "fromId", function(
  route,
  City
) {
  return {
    fromId: City !== undefined ? City.cityName : null,
    toId: route.toId,
    ticketPrice: route.ticketPrice,
    countryFrom: City.countryId,
    dateStart: route.dateStart,
    dateEnd: route.dateEnd
  };
});

let FullInfoAboutFly = join(
  CityWithCountryJoin,
  RoutesFrom,
  "Id",
  "toId",
  function(RF, CC) {
    return {
      cityFrom: RF.fromId,
      toCity: CC !== undefined ? CC.cityName : null,
      ticketPrice: RF.ticketPrice,
      countryFrom: RF.countryFrom,
      countryTo: CC.countryId,
      dateStart: RF.dateStart,
      dateEnd: RF.dateEnd
    };
  }
);

let LovestPriceToSimpferopol = FullInfoAboutFly.filter(a => {
  return a.toCity === "Симферополь" && a.cityFrom === "Москва";
})
  .sort(function(a, b) {
    return a.ticketPrice - b.ticketPrice;
  })
  .find(a => {
    return (a = [0]);
  });
const FlyTocityBlock = styled.div`
  box-shadow: 0 3px 8px -3px grey;
  width: 45%;
  margin-bottom: 1%;
`;
const FlyTocityWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const FlyTocityInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const FlyTocityAddInfo = styled.span`
  color: grey;
`;
function FlyTocity(props) {
  return (
    <FlyTocityBlock>
      <img src="/simpferopol.jpg" alt="Simpferopol" />
      <FlyTocityWrapper>
        <FlyTocityInfoWrapper>
          {props.cityTo}
          <FlyTocityAddInfo>{props.countryTo}</FlyTocityAddInfo>
        </FlyTocityInfoWrapper>
        <FlyTocityInfoWrapper>
          <a href="123.com">Найти от {props.ticketPrice} ₽</a>
          <FlyTocityAddInfo>{props.dateStart}</FlyTocityAddInfo>
        </FlyTocityInfoWrapper>
      </FlyTocityWrapper>
    </FlyTocityBlock>
  );
}
const GetTopCityByPriceBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`;

function GetTopCityByPrice() {
  return (
    <GetTopCityByPriceBlock>
      <FlyTocity
        cityTo={LovestPriceToSimpferopol.toCity}
        countryTo={LovestPriceToSimpferopol.countryTo}
        ticketPrice={LovestPriceToSimpferopol.ticketPrice}
        dateStart={LovestPriceToSimpferopol.dateStart}
      />
      <FlyTocity
        cityTo={LovestPriceToSimpferopol.toCity}
        countryTo={LovestPriceToSimpferopol.countryTo}
        ticketPrice={LovestPriceToSimpferopol.ticketPrice}
        dateStart={LovestPriceToSimpferopol.dateStart}
      />
      <FlyTocity
        cityTo={LovestPriceToSimpferopol.toCity}
        countryTo={LovestPriceToSimpferopol.countryTo}
        ticketPrice={LovestPriceToSimpferopol.ticketPrice}
        dateStart={LovestPriceToSimpferopol.dateStart}
      />
      <FlyTocity
        cityTo={LovestPriceToSimpferopol.toCity}
        countryTo={LovestPriceToSimpferopol.countryTo}
        ticketPrice={LovestPriceToSimpferopol.ticketPrice}
        dateStart={LovestPriceToSimpferopol.dateStart}
      />
      <FlyTocity
        cityTo={LovestPriceToSimpferopol.toCity}
        countryTo={LovestPriceToSimpferopol.countryTo}
        ticketPrice={LovestPriceToSimpferopol.ticketPrice}
        dateStart={LovestPriceToSimpferopol.dateStart}
      />
      <FlyTocity
        cityTo={LovestPriceToSimpferopol.toCity}
        countryTo={LovestPriceToSimpferopol.countryTo}
        ticketPrice={LovestPriceToSimpferopol.ticketPrice}
        dateStart={LovestPriceToSimpferopol.dateStart}
      />
    </GetTopCityByPriceBlock>
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

let TopFiveLowestTickets = FullInfoAboutFly.filter(a => {
  return a.toCity === "Симферополь";
})
  .sort(function(a, b) {
    return a.ticketPrice - b.ticketPrice;
  })
  .slice(0, 5);

const listItems = TopFiveLowestTickets.map(top => (
  <div>
    <li>
      Из {top.cityFrom} от {top.ticketPrice} ₽
    </li>
  </div>
));

function Test() {
  return <div>{listItems}</div>;
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

const SliderBorder = styled.div`
  border: 10px solid transparent;
  border-top-style: none;
  border-image: url("/border.png") 30 round;
  padding-top: 50px;
  padding-bottom: 50px;
`;
const SlideWrapper = styled.div`
display:flex;
flex-direction-column;
justify-content: space-between;
`;
const SlideImgWrapper = styled.div`
  margin-right: 5%;
  margin-left: 5%;
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

const TextWrapper = styled.span`
  overflow: hidden;
  height: 2em;
  line-height: 1em;
`;
const HeadingWrapper = styled.div`
  display: flex;
`;

/*http://jsfiddle.net/Feid/yptwsg21/4/  пример функции с текстом на жкверях*/
function SomeInfo(props) {
  return (
    <div>
      <div>
        <HeadingWrapper>
          <img src={props.plane} alt="plane" />
          <h2>Как купить дешевые авиабилеты</h2>
        </HeadingWrapper>
        <TextWrapper>
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
        </TextWrapper>
        <a href="123.com">Подробнее</a>
      </div>
      <div>
        <HeadingWrapper>
          <img src={props.hint} alt="@" />
          <h2>электронный авиабилет</h2>
        </HeadingWrapper>
        <TextWrapper>
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
        </TextWrapper>
      </div>
      <div>
        <HeadingWrapper>
          <img src={props.book} alt="book" />
          <h2>20 советов авиапутешественникам</h2>
        </HeadingWrapper>
        <TextWrapper>
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
        </TextWrapper>
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
        CityFrom="Moskow"
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
      <GetTopCityByPrice />
      <BestPrices img={calen} />
      <Test />
      <AdditionalInfo />
      <Slideshow />
      <Subscribe vk={vk} twit={twit} fb={fb} rss={rss} />
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
      <SomeInfo plane={planeIcon} hint={emailIcon} book={booksIcon} />
    </div>
  );
}
