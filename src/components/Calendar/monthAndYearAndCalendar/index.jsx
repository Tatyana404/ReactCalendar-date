import { Component } from 'react';
import style from './monthAndYearAndCalendar.module.scss';
import MonthNameAndYear from './monthNameAndYear';
import DayOfWeek from './dayOfWeek';
import Month from './month';

export default class MonthAndYearAndCalendar extends Component {
  get year () {
    return this.props.currentDate.getFullYear();
  }
  get month () {
    return this.props.currentDate.getMonth();
  }
  render () {
    const { abbreviationNameOfTheDayOfTheWeek, currentDate } = this.props;
    return (
      <article className={style.contentCalendar}>
        <MonthNameAndYear currentDate={currentDate} />
        <table className={style.borderSpacing}>
          <thead>
            <DayOfWeek
              abbreviationNameOfTheDayOfTheWeek={
                abbreviationNameOfTheDayOfTheWeek
              }
            />
          </thead>
          <Month currentDate={currentDate} />
        </table>
      </article>
    );
  }
}
