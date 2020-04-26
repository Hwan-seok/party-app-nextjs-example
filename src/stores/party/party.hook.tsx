import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getPartiesAction } from './party.action';

const useParty = () => {
  const dispatch = useDispatch();

  const partyState = useSelector((state) => state.partyReducer);

  const fetchParties = useCallback(() => dispatch(getPartiesAction), [
    dispatch,
  ]);

  return { fetchParties, partyState };
};

export default useParty;
