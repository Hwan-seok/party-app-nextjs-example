import { createAsyncAction, ActionType } from 'typesafe-actions';
import { Alarm } from './helpers/interfaces/alarm.interface';

const GET_ALL_ALARM_REQUEST = 'alarm/GET_ALL_ALARM_REQUEST';
const GET_ALL_ALARM_SUCCESS = 'alarm/GET_ALL_ALARM_SUCCESS';
const GET_ALL_ALARM_FAILURE = 'alarm/GET_ALL_ALARM_FAILURE';

export const getAlarmAction = createAsyncAction(
  GET_ALL_ALARM_REQUEST,
  GET_ALL_ALARM_SUCCESS,
  GET_ALL_ALARM_FAILURE,
)<void, Array<Alarm>, void>();

type AlarmAction = ActionType<typeof getAlarmAction>;

export default AlarmAction;
