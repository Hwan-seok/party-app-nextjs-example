import { createAsyncAction, ActionType } from 'typesafe-actions';
import { Party } from './helpers/interfaces/party.interface';

export const GET_ALL_PARTIES_REQUEST = 'party/GET_ALL_PARTIES_REQUEST';
export const GET_ALL_PARTIES_SUCCESS = 'party/GET_ALL_PARTIES_SUCCESS';
export const GET_ALL_PARTIES_FAILURE = 'party/GET_ALL_PARTIES_FAILURE';

export const getPartiesAction = createAsyncAction(
  GET_ALL_PARTIES_REQUEST,
  GET_ALL_PARTIES_SUCCESS,
  GET_ALL_PARTIES_FAILURE,
)<void, Array<Party>, void>();

type PartyAction = ActionType<typeof getPartiesAction>;

export default PartyAction;
