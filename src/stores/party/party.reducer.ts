import PartyAction from './party.action';
import { PartyReducerState } from './helpers/interfaces/partyReducerState.interface';

const initialState: PartyReducerState = {
  parties: [],
};

const partyReducer = (
  state: PartyReducerState = initialState,
  action: PartyAction,
): PartyReducerState => {
  switch (action.type) {
    case 'party/GET_ALL_PARTIES_SUCCESS':
      return {
        ...state,
        parties: action.payload,
      };

    default:
      return state;
  }
};

export default partyReducer;
