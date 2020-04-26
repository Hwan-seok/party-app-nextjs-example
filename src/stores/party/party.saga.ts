import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_ALL_PARTIES_REQUEST, getPartiesAction } from './party.action';
import { getMyPartiesApi } from 'src/api/partyApi';

export function* getAllParties() {
  try {
    const { data } = yield call(getMyPartiesApi);
    yield put(getPartiesAction.success(data));
  } catch (err) {
    alert('에러 예시');
    yield put(getPartiesAction.failure());
  } finally {
  }
}

const partySagas = [takeLatest(GET_ALL_PARTIES_REQUEST, getAllParties)];

export default partySagas;
