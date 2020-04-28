import { AlarmReducerState } from './helpers/interfaces/alarmReducerState.interface';

import AlarmAction from './alarm.action';

const initialState = {
  alarms: [],
};

const alarmReducer = (
  state: AlarmReducerState = initialState,
  action: AlarmAction,
): AlarmReducerState => {
  switch (action.type) {
    case 'alarm/GET_ALL_ALARM_SUCCESS':
      return {
        ...state,
        alarms: action.payload,
      };
    default:
      return state;
  }
};

export default alarmReducer;
