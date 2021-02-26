import { Component } from 'react';
import style from './dayOfTheWeekAndDayOfTheMonth.module.scss';
import WeekDayName from './weekDayName';
import DayOfTheCurrentMonth from './dayOfTheCurrentMonth';

export default class DayOfTheWeekAndDayOfTheMonth extends Component {
  render () {
    const { fullNameOfTheDayOfTheWeek } = this.props;
    return (
      <article className={style.dayOfWeekAndDayOfMonth}>
        <WeekDayName fullNameOfTheDayOfTheWeek={fullNameOfTheDayOfTheWeek} />
        <DayOfTheCurrentMonth />
      </article>
    );
  }
}
