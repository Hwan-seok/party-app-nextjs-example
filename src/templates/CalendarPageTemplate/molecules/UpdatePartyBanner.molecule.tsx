import React, { useEffect, useState, Fragment } from 'react';
import { StyledUpdatePartyBanner } from '../CalenderPage.styled';
import useParty from 'src/stores/party/party.hook';
import PartyLineOnDay from './PartyLineOnDay.molecule';
import { Party } from '../../../stores/party/helpers/interfaces/party.interface';

interface props {
  show: boolean;
  selectedDates: Array<Date>;
}

const UpdatePartyBanner: React.FC<props> = (props: props) => {
  const { fetchParties, partyState } = useParty();
  const [checkedToUpdate, setCheckedToUpdate] = useState([]);

  useEffect(() => {
    fetchParties();
  }, [fetchParties]);

  return (
    <StyledUpdatePartyBanner show={props.show}>
      {partyState.parties.map((party: Party) => (
        <Fragment key={party.id}>
          <PartyLineOnDay
            onCheck={setCheckedToUpdate}
            isChecked={checkedToUpdate.indexOf(party.id) > -1}
            party={party}
          />
          <hr />
        </Fragment>
      ))}
      <div className="update-line">
        <div className="selected-count">총 {props.selectedDates.length}일</div>
        <div className="goto-update-button">수정하기</div>
      </div>
    </StyledUpdatePartyBanner>
  );
};

export default UpdatePartyBanner;
