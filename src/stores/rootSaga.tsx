import { all } from 'redux-saga/effects';
import partySagas from './party/party.saga';
import alarmSagas from './alarm/alarm.saga';

export default function* rootSaga() {
  yield all([alarmSagas, partySagas]);
}
