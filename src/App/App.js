import React from "react";
import RoundedBtn from "../Components/Button";
import Checkbox from "../Components/Checkbox";
import ParentDiv, { IntroDetailsDiv, TaskDiv } from "../Components/Div";
import {
  DateTimeTitle,
  SpanCount,
  SpanTitle,
  TaskName,
  TaskTime,
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
          <TaskDiv>
            <Checkbox></Checkbox>
            <TaskName>Todo Sample Task</TaskName>
            <TaskTime>8.00 AM</TaskTime>
          </TaskDiv>
        </ParentDiv>
      </BodyStyles>
    </>
  );
};
