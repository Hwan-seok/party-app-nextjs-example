import React, { useState } from 'react';
import { StyledCalenderPage } from './CalanderPage.styled';
import Calendar from 'react-calendar';

const CalenderPageTemplate: React.FC = () => {
  const [currentDate, setDate] = useState(new Date());

  const onDateChange = (date) => {
    console.log(currentDate);
    console.log(date);
    setDate(date);
  };

  return (
    <StyledCalenderPage>
      <Calendar onChange={onDateChange} value={currentDate} />
    </StyledCalenderPage>
  );
};

export default CalenderPageTemplate;
