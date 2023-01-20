import React from "react";
import RoundedBtn from "../Components/Button";
import ParentDiv, { IntroDetailsDiv } from "../Components/Div";
import {
  DateTimeTitle,
  SpanCount,
  SpanTitle,
} from "../Components/Title/title.style";
import { BodyStyles } from "./../Components/Body/body.style";

export const App = () => {
  return (
    <>
      <BodyStyles>
        <ParentDiv>
          <IntroDetailsDiv>
            <DateTimeTitle>Friday,20th</DateTimeTitle>
            <SpanTitle>January</SpanTitle>
            <SpanCount>12 Tasks</SpanCount>
            <RoundedBtn>+</RoundedBtn>
          </IntroDetailsDiv>
        </ParentDiv>
      </BodyStyles>
    </>
  );
};
