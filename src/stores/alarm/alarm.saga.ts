import { GET_ALL_PARTIES_REQUEST } from '../party/party.action';
import { takeLatest, put, call } from 'redux-saga/effects';
import { getAlarmAction } from './alarm.action';
import { getMyAlarmsApi } from 'src/api/alarmApi';

export function* getAlarms() {
  try {
    const { data } = yield call(getMyAlarmsApi);
    yield put(getAlarmAction.success(data));
  } catch (err) {
    alert('에러 예시');
    yield put(getAlarmAction.failure());
  } finally {
  }
}

const alarmSagas = [takeLatest(GET_ALL_PARTIES_REQUEST, getAlarms)];

export default alarmSagas;
