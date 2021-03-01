import React, { Component } from 'react';
import style from './calendar.module.scss';
import DayOfTheWeekAndDayOfTheMonth from './dayOfTheWeekAndDayOfTheMonth';
import MonthAndYearAndCalendar from './monthAndYearAndCalendar';
import { calendarDays } from '../../configs';

const {
  abbreviationNameOfTheDayOfTheWeek,
  fullNameOfTheDayOfTheWeek,
} = calendarDays;

export default class Calendar extends Component {
  state = {
    currentDate: new Date(),
  };
  render () {
    const { currentDate } = this.state;
    return (
      <section className={style.calendar}>
        <DayOfTheWeekAndDayOfTheMonth
          fullNameOfTheDayOfTheWeek={fullNameOfTheDayOfTheWeek}
        />
        <MonthAndYearAndCalendar
          abbreviationNameOfTheDayOfTheWeek={abbreviationNameOfTheDayOfTheWeek}
          currentDate={currentDate}
        />
      </section>
    );
  }
}
