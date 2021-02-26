import { Component } from 'react';
import style from './dayOfWeek.module.scss';

class DayOfWeek extends Component {
  render () {
    const { abbreviationNameOfTheDayOfTheWeek } = this.props;
    return (
      <tr>
        {abbreviationNameOfTheDayOfTheWeek.map(name => (
          <th className={style.specificDayOfTheWeek} key={name}>
            {name}
          </th>
        ))}
      </tr>
    );
  }
}

export default DayOfWeek;
