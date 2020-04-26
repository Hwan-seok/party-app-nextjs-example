import dayjs from 'dayjs';

export const dateAlreadyClicked = (dates: Array<Date>, date: Date) =>
  dates.some((d: Date) => dayjs(date).isSame(dayjs(d), 'day'));

export const datesExcept = (dates: Array<Date>, date: Date) =>
  dates.filter((d: Date) => !dayjs(date).isSame(dayjs(d), 'day'));
