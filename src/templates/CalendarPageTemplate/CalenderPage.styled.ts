import styled from '@emotion/styled';
import theme from 'src/layout/theme';

export const StyledCalenderPage = styled.div`
  min-height: 100vh;
`;

export const StyledHeadline = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  padding: 32px 12px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .head-text {
  }

  .head-alarm-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    .head-alarm-count {
      position: absolute;
      top: 0;
      right: 0;
      width: 43.75%;
      height: 43.75%;
      color: white;
      background: #ff6565;
      font-size: 0.6875rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
  }
`;

interface BottomBannerStyleProps {
  show: boolean;
}

export const StyledUpdatePartyBanner = styled.div`
  /* display: ${(props: BottomBannerStyleProps) =>
    props.show ? 'block' : 'none'}; */
  position: fixed;
  bottom: calc(-256 / 575 * 100%);
  left: 0;
  background: white;
  width: 100%;
  height: calc(256 / 575 * 100%);
  transform: ${(props) => (props.show ? 'translateY(-100%)' : 'initial')};
  box-shadow: 0px 0 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

  hr{
    margin:0;
    border-color: rgb(0,0,0,0.02);
  }

  .update-line{
    display:flex;
    flex-direction:row;
    justify-content:space-between;

    padding:12px 12px 12px 24px;

    .selected-count{
      font-size:1.25rem;
      font-weight:bold;
      display: flex;
      align-items: center;

    }

    .goto-update-button{
      border-radius:2px;
      font-size:0.875rem;
      color:white;
      padding:14px 54px;
      background-color:${theme.color.primary};
      cursor: pointer;
    }
  }

`;

export const StyledPartyLineOnDay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 6.4%;

  .party-image {
    width: 16%;
    height: 16%;
    > img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .party-texts {
    font-size: 0.875rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto 0 6.4%;

    .name {
      font-weight: 500;
    }
    .location {
      color: #707070;
    }
  }
  .update-check {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const DefaultCalenderStyles = styled.div`
  width: 100%;
  border-top: 2px solid rgba(0, 0, 0, 0.05);
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
  .react-calendar {
    background: white;
    line-height: 1.125em;
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  /* .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  } */
  .react-calendar button {
    box-sizing: content-box;
    /* margin: 0; */
    border: 0;
    outline: none;
    font-family: 'NotoSansKR', sans-serif, Arial, Helvetica;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
  }
  .react-calendar__navigation__arrow {
    display: none;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }
  .react-calendar__navigation__label {
    flex: initial !important;
    font-size: 1.25rem;
    color: ${theme.color.primary};
    font-weight: 500;
    padding: 16px 0 16px 14px;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__navigation button[disabled] {
    /* background-color: #f0f0f0; */
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    font-weight: bold;
    font-size: 0.75rem;
    box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.1);
    color: ${theme.color.disable};
    abbr {
      text-decoration: none;
    }
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }
  .react-calendar__month-view__weekNumbers {
    font-weight: bold;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
  }
  .react-calendar__month-view__days__day--weekend {
    /* color: #d10000; */
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }
  .react-calendar__tile {
    max-width: 100%;
    text-align: center;
    background: none;
  }
  .react-calendar__tile:disabled {
    /* background-color: #f0f0f0; */
    color: ${theme.color.disable};
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    /* background-color: #e6e6e6; */
  }
  .react-calendar__tile--now {
    background: white;
    border: 1px ${theme.color.primary} solid !important;
    border-radius: 50%;
  }
  .react-calendar__tile--now:enabled:hover {
    /* background: #ffffa9; */
    background: #4694c8;
  }
  .this-tile-is-active {
    background: ${theme.color.primary};
    border-radius: 50%;
    color: white;
  }
  .this-is-tile {
    max-width: initial !important;
    flex-basis: initial !important;
    line-height: 0;
  }
  .this-is-tile.react-calendar__month-view__days__day {
    border-radius: 50%;
    width: 12%;
    margin: 1.1428%;
    padding: 6% 0;
    :hover:not(:disabled) {
      color: white;
      background: #4694c8;
    }
  }
  .react-calendar__year-view__months {
    width: 100%;
    justify-content: center;
  }
  .this-is-tile.react-calendar__year-view__months__month {
    box-sizing: border-box;
    width: 29.333%;
    margin: 0 2%;
    padding: calc(29.333% / 2) 0;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
  }
  .react-calendar__tile--active {
    /* background: #006edc; */
    /* color: white; */
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    /* background: #1087ff; */
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
`;
