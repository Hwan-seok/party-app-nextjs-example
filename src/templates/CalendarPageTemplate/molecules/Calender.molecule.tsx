import React, { useEffect } from 'react';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import { DefaultCalenderStyles } from '../CalenderPage.styled';
import { dateAlreadyClicked, datesExcept } from './helper/filterDates';

interface CalendarProps {
  dayTileClass: string;
  activeDayClass: string;
  openBottomBanner: Function;
  dates: Array<Date>;
  setDates: Function;
}

const CalenderMolecule = (props: CalendarProps) => {
  useEffect(() => {
    const calendarFirstDayElem = document.querySelector(
      '.react-calendar__month-view__days__day:first-child',
    );
    if (calendarFirstDayElem) {
      const firstElemMarginLeft = calendarFirstDayElem['style'].marginLeft;
      const newCalculatedMarginLeft = String(
        Number(firstElemMarginLeft.replace(/%/g, '')) + 1.1428,
      ).concat('%');

      calendarFirstDayElem['style'].marginLeft = newCalculatedMarginLeft;
    }
  }, []);

  useEffect(() => {
    if (props.dates.length > 0) {
      props.openBottomBanner(true);
    } else {
      props.openBottomBanner(false);
    }
  }, [props.dates]);

  const onClickDay = (date: Date) => {
    // if day is already clicked, remove it from state
    if (dateAlreadyClicked(props.dates, date)) {
      props.setDates(datesExcept(props.dates, date));
    } else {
      props.setDates([...props.dates, date]);
    }
  };

  const tileClassName = ({ date }: { date: Date }) => {
    const classNames = [props.dayTileClass];
    // give active days a special class
    if (dateAlreadyClicked(props.dates, date)) {
      return [props.activeDayClass, ...classNames];
    }
    return classNames;
  };

  const whatTileNeedToDisable = ({
    date,
    view,
  }: {
    date: Date;
    view: string;
  }) => {
    if (view === 'year') {
      const lastMonth = ((current) =>
        new Date(current.setMonth(current.getMonth() - 1)))(new Date());
      return dayjs(date).isBefore(lastMonth);
    } else {
      const lastDay = ((current) =>
        new Date(current.setDate(current.getDate() - 1)))(new Date());
      return dayjs(date).isBefore(lastDay);
    }
  };

  return (
    <DefaultCalenderStyles>
      <Calendar
        tileDisabled={whatTileNeedToDisable}
        tileClassName={tileClassName}
        onClickDay={onClickDay}
        calendarType={'US'}
        minDetail={'year'}
        prevLabel={null}
        prev2Label={null}
        nextLabel={null}
        next2Label={null}
        showNeighboringMonth={false}
      />
    </DefaultCalenderStyles>
  );
};

export default CalenderMolecule;
