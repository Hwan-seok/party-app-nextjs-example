import React, { useState } from 'react';
import { StyledCalenderPage } from './CalenderPage.styled';
import CalenderMolecule from './molecules/Calender.molecule';
import HeadlineMolecule from './molecules/Headline.molecule';
import UpdatePartyBanner from './molecules/UpdatePartyBanner.molecule';

const CalenderPageTemplate: React.FC = () => {
  const [isBottomBannerOpened, setBottomBannerOpen] = useState(false);
  const [dates, setDates] = useState([]);

  return (
    <StyledCalenderPage>
      <HeadlineMolecule />
      <CalenderMolecule
        dayTileClass="this-is-tile"
        activeDayClass="this-tile-is-active"
        openBottomBanner={setBottomBannerOpen}
        setDates={setDates}
        dates={dates}
      />
      <UpdatePartyBanner show={isBottomBannerOpened} selectedDates={dates} />
    </StyledCalenderPage>
  );
};

export default CalenderPageTemplate;
