import React, { useState } from 'react';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import {
  DefaultCalenderStyles,
  StyledCalenderPage,
} from './CalenderPage.styled';

const dateAlreadyClicked = (dates, date) =>
  dates.some((d) => dayjs(date).isSame(dayjs(d), 'day'));
const datesExcept = (dates, date) =>
  dates.filter((d) => !dayjs(date).isSame(dayjs(d), 'day'));

const CalenderPageTemplate = ({
  classes = { dayTile: 'this-is-tile', activeDay: 'this-tile-is-active' },
}) => {
  const [dates, setDates] = useState([]);

  const onClickDay = (date) => {
    // if day is already clicked, remove it from state
    if (dateAlreadyClicked(dates, date)) setDates(datesExcept(dates, date));
    else setDates([...dates, date]);
    console.log(dates);
  };

  const tileClassName = ({ date }) => {
    const classNames = [classes.dayTile];
    // give active days a special class
    if (dateAlreadyClicked(dates, date))
      return [classes.activeDay, ...classNames];
    return classNames;
  };

  return (
    <StyledCalenderPage>
      <DefaultCalenderStyles>
        <Calendar
          tileDisabled={({ date, view }) => {
            if (view === 'year') {
              const lastMonth = ((current) =>
                new Date(current.setMonth(current.getMonth() - 1)))(new Date());
              console.log(lastMonth);
              return dayjs(date).isBefore(lastMonth);
            } else {
              const lastDay = ((current) =>
                new Date(current.setDate(current.getDate() - 1)))(new Date());
              console.log(lastDay);
              return dayjs(date).isBefore(lastDay);
            }
          }}
          calendarType={'US'}
          tileClassName={tileClassName}
          onClickDay={onClickDay}
          minDetail={'year'}
          navigationAriaLabel={'gogo'}
          // formatLongDate={(_locale, date) => dateFormat(date, 'yyyy-mm-dd')}
          prevLabel={null}
          prev2Label={null}
          nextLabel={null}
          next2Label={null}
          showNeighboringMonth={false}
        />
      </DefaultCalenderStyles>
    </StyledCalenderPage>
  );
};

export default CalenderPageTemplate;
