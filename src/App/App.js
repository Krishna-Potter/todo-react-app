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
  const dateData = new Date();
  const currentDate = dateData.getDate();
  const currentDay = dateData.getDay();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturdat",
  ];
  const currentMonth = dateData.getMonth() + 1;
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <BodyStyles>
        <ParentDiv>
          <IntroDetailsDiv>
            <DateTimeTitle>
              {dayNames[currentDay]},{currentDate}th
            </DateTimeTitle>
            <SpanTitle>{monthNames[currentMonth]}</SpanTitle>
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
