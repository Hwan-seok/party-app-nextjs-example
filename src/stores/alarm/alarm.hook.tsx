import { useDispatch, useSelector } from 'react-redux';
import { getAlarmAction } from './alarm.action';
import { useCallback } from 'react';
import { AlarmReducerState } from './helpers/interfaces/alarmReducerState.interface';

const useAlarm = () => {
  const dispatch = useDispatch();

  const alarmState: AlarmReducerState = useSelector(
    (state) => state.alarmReducer,
  );

  const fetchAlarm = useCallback(() => {
    dispatch(getAlarmAction.request());
  }, [dispatch]);

  return { alarmState, fetchAlarm };
};

export default useAlarm;
