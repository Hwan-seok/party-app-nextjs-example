import React from 'react';
import { StyledCalenderPage } from './CalenderPage.styled';
import CalenderMolecule from './molecules/Calender.molecule';
import HeadlineMolecule from './molecules/Headline.molecule';

const CalenderPageTemplate: React.FC = () => {
  return (
    <StyledCalenderPage>
      <HeadlineMolecule />
      <CalenderMolecule
        dayTileClass="this-is-tile"
        activeDayClass="this-tile-is-active"
      />
    </StyledCalenderPage>
  );
};

export default CalenderPageTemplate;
