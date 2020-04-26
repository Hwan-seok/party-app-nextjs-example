import React, { useEffect } from 'react';
import { StyledHeadline } from '../CalenderPage.styled';
import BellIcon from './icons/BellIcon';
import useAlarm from 'src/stores/alarm/alarm.hook';

const HeadlineMolecule: React.FC = () => {
  const { alarmState, fetchAlarm } = useAlarm();
  useEffect(() => {
    fetchAlarm();
  }, []);
  return (
    <StyledHeadline>
      <div className="head-text">달력</div>
      <div className="head-alarm-icon">
        <BellIcon />
        <div className="head-alarm-count">{alarmState.alarms.length}</div>
      </div>
    </StyledHeadline>
  );
};

export default HeadlineMolecule;
