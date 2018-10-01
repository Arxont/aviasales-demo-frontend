import React from "react";
import styled from "styled-components";
import apple from "./images/apple.png";
import android from "./images/android.png";
import wf from "./images/wf.png";
import vkLogo from "./images/vkLogo.png";
import fbLogo from "./images/fbLogo.png";
import twitLogo from "./images/twitLogo.png";
import instLogo from "./images/instLogo.png";
import vbLogo from "./images/viberLogo.png";
import appStore from "./images/appStore.png";
import playStore from "./images/playStore.png";
import winStore from "./images/winStore.png";

const MobileAdWrapper = styled.div`
  display: flex;
  background-color: blue;
  color: white;
  justify-content: space-evenly;
`;
const TestGround = styled.div`
  background-color: red;
  border-style: none;
  margin: none;
`;
const MobileAddPic = styled.img``;
const MobileAddLinkWrapper = styled.div`
  display: flex;
`;
function MobileAd(props) {
  return (
    <MobileAdWrapper>
      <TestGround>
        <MobileAddPic src="/backgroundImage.png" alt="MobilePhoneImg" />
      </TestGround>
      <div>
        <h1>Скачай мобильное приложение Aviasales.ru</h1>
        <p>
          <span>⭐⭐⭐⭐⭐</span> Более 103 000 оценок
        </p>
        <MobileAddLinkWrapper>
          <div>
            <a href="123.com">
              <img src={props.apple} alt="apple" />
              <span>Iphone или Ipod | </span>
            </a>
          </div>
          <div>
            <a href="123.com">
              <img src={props.android} alt="apple" />
              <span>Android | </span>
            </a>
          </div>
          <div>
            <a href="123.com">
              <img src={props.wf} alt="apple" />
              <span>Windows Phone</span>
            </a>
          </div>
        </MobileAddLinkWrapper>
      </div>
    </MobileAdWrapper>
  );
}
const FooterinfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom-style: thin;
`;
function FooterInfoList() {
  return (
    <FooterinfoWrapper>
      <ul>
        <li>
          <h2>Страны</h2>
        </li>
        <li>Россия</li>
        <li>Тайланд</li>
        <li>Черногория</li>
        <li>Кипр</li>
        <li>Болгария</li>
        <li>Грузия</li>
        <li>
          <a href="123.com">Все страны-></a>
        </li>
      </ul>
      <ul>
        <li>
          <h2>Города</h2>
        </li>
        <li>Москва</li>
        <li>Санкт-Петербург</li>
        <li>Симферополь</li>
        <li>Адлер</li>
        <li>Екатеринбург</li>
        <li>Лондон</li>
        <li>
          <a href="123.com">Все города-></a>
        </li>
      </ul>
      <ul>
        <li>
          <h2>Авиакомпании</h2>
        </li>
        <li>Air Berlin</li>
        <li>Air France</li>
        <li>Ailitalia</li>
        <li>Air Baltic</li>
        <li>Emirates</li>
        <li>KLM</li>
        <li>
          <a href="123.com">Все авиакомпании-></a>
        </li>
      </ul>
      <ul>
        <li>
          <h2>Аэропорты</h2>
        </li>
        <li>Шереметьево</li>
        <li>Курумоч</li>
        <li>Домодедово</li>
        <li>Толмачево</li>
        <li>Владивосток</li>
        <li>Гамбург</li>
        <li>
          <a href="123.com">Все аеропорты-></a>
        </li>
      </ul>
      <ul>
        <li>
          <h2>Направления</h2>
        </li>
        <li>MOW-SIP</li>
        <li>MOW-AER</li>
        <li>MOW-TIV</li>
        <li>MOW-MRV</li>
        <li>LED-MOW</li>
        <li>MOW-BKK</li>
      </ul>
      <ul>
        <li>
          <h2>Сервисы</h2>
        </li>
        <li>Горящие авиабилеты</li>
        <li>Календарь низких цен</li>
        <li>Карта низких цен</li>
        <li>Спец предложения</li>
        <li>Таблица цен</li>
        <li>Блог</li>
        <li>Помощь</li>
      </ul>
    </FooterinfoWrapper>
  );
}
const CompanyInfoFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const StoreliknWrapper = styled.div``;
function CompanyInfoFooter() {
  return (
    <CompanyInfoFooterWrapper>
      <InfoWrapper>
        <p>
          <a href="123.com">О компании </a>
          <a href="123.com">Партнерская программа </a>
          <a href="123.com">Реклама </a> <a href="123.com">Вакансии </a>
          <a href="123.com">Помощь </a> <a href="123.com">Правила </a>
          <a href="123.com"> White Label авиабилеты</a>
        </p>
        <p>
          <a href="123.com">
            <img src={vkLogo} alt="VK" />
            Вконтакте{" "}
          </a>
          <a href="123.com">
            <img src={fbLogo} alt="FB" />
            Фейсбук{" "}
          </a>
          <a href="123.com">
            <img src={instLogo} alt="INST" />
            Инстаграм{" "}
          </a>
          <a href="123.com">
            <img src={twitLogo} alt="TWIT" />
            Твиттер{" "}
          </a>
          <a href="123.com">
            <img src={vbLogo} alt="VIB" />
            Вайбер{" "}
          </a>
        </p>
        <p>Поиск и бронирование отелей</p>
      </InfoWrapper>
      <InfoWrapper>
        <div>
          <img src={appStore} alt="AppStore" />{" "}
          <img src={playStore} alt="PlayStore" />{" "}
          <img src={winStore} alt="WinStore" />{" "}
        </div>
        <p>© 2007-2018, Aviasales- дешевые авиабилеты</p>
      </InfoWrapper>
    </CompanyInfoFooterWrapper>
  );
}

function TestURL() {
  return (
    <div>
      <a href="./TestingGround.js" alt="Second Page">
        {" "}
        CLICK ME{" "}
      </a>
    </div>
  );
}
export default function Footer() {
  return (
    <div>
      <MobileAd apple={apple} android={android} wf={wf} />
      <FooterInfoList />
      <CompanyInfoFooter />
      <TestURL />
    </div>
  );
}
