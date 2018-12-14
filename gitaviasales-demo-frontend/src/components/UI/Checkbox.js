import React from "react";
import styled from "styled-components";

const Container = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  :hover input ~ CheckMark {
    color: grey;
  }
  :input:checked ~ CheckMark:after {
    display: block;
  }
  CheckMark :after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
const CheckBox = styled.input``;
const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  background-color: black;
  : after {
    content: "";
    position: absolute;
    display: none;
  }
`;

const CustomCheckBox = () => (
  <Container>
    QQ
    <CheckBox />
    <CheckMark />
  </Container>
);
