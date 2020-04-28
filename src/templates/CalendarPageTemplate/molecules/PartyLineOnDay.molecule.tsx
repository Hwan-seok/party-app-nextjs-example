import React from 'react';
import { StyledPartyLineOnDay } from '../CalenderPage.styled';
import { Party } from 'src/stores/party/helpers/interfaces/party.interface';
import CheckedIcon from '../../../components/SvgIcons/CheckIcon';
import DisabledIcon from '../../../components/SvgIcons/DisabledCheckIcon';

interface props {
  party: Party;
  onCheck: Function;
  isChecked: boolean;
}

const PartyLineOnDay: React.FC<props> = (props: props) => {
  const onCheckThisParty = () => {
    props.onCheck((checkedList: Array<number>) => {
      const partyFoundIndex = checkedList.indexOf(props.party.id);
      console.log(partyFoundIndex, checkedList);
      if (partyFoundIndex < 0) {
        return [...checkedList, props.party.id];
      } else {
        return [
          ...checkedList.slice(0, partyFoundIndex),
          ...checkedList.slice(partyFoundIndex + 1),
        ];
      }
    });
  };

  return (
    <StyledPartyLineOnDay onClick={onCheckThisParty}>
      <div className="party-image">
        <img src={props.party.img} alt="" />
      </div>
      <div className="party-texts">
        <div className="name">{props.party.name}</div>
        <div className="location">{props.party.location}</div>
      </div>
      <div className="update-check">
        {props.isChecked ? <CheckedIcon /> : <DisabledIcon />}
      </div>
    </StyledPartyLineOnDay>
  );
};

export default PartyLineOnDay;
