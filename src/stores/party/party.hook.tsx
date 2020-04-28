import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getPartiesAction } from './party.action';
import { PartyReducerState } from './helpers/interfaces/partyReducerState.interface';

const useParty = () => {
  const dispatch = useDispatch();

  const partyState: PartyReducerState = useSelector(
    (state) => state.partyReducer,
  );

  const fetchParties = useCallback(() => dispatch(getPartiesAction.request()), [
    dispatch,
  ]);

  return { fetchParties, partyState };
};

export default useParty;
