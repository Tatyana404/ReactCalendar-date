import { Component } from 'react';
import style from './monthNameAndYear.module.scss';

export default class MonthNameAndYear extends Component {
  get year () {
    return this.props.currentDate.getFullYear();
  }
  render () {
    return (
      <h1 className={style.monthAndYear}>
        {new Date().toLocaleString('ru', { month: 'long' })}
        {this.year}
      </h1>
    );
  }
}
