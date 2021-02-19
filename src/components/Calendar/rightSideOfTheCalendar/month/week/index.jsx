import { Component } from "react";
import classnames from "classnames";
import style from "./week.module.css";
import * as calendar from "../month";
// import Day from "./day";

export default class Week extends Component {

  render() {
    const { currentDate, weeksOfTheMonth } = this.props;
    return (
      <tr className={style.todaysDate}>
        {weeksOfTheMonth.map((date, index) =>
          date ? (


            <td
              key={index}
              className={classnames(style.day, {
                [style.today]: calendar.areEqual(date, currentDate),
              })}
            >
              {date.getDate()}
            </td>
          ) : (
              <td key={index} />
           
           
              )
        )}
      </tr>
    );
  }
}
