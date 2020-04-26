import styled from '@emotion/styled';
import theme from 'src/layout/theme';

export const StyledCalenderPage = styled.div``;

export const DefaultCalenderStyles = styled.div`
  .react-calendar {
    width: 350px;
    max-width: 100%;
    background: white;
    border: 1px solid #a0a096;
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
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
    font-family: 'NotoSansKR', sans-serif, Arial, Helvetica;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    height: 44px;
    margin-bottom: 1em;
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
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    font-weight: bold;
    font-size: 0.75rem;
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
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  .react-calendar__tile {
    max-width: 100%;
    text-align: center;
    padding: 0.75em 0.5em;
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
    border-radius: 50%;
    :hover:not(:disabled) {
      color: white;
      background: #4694c8;
    }
  }
  .react-calendar__tile--hasActive {
    background: #76baff;
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
