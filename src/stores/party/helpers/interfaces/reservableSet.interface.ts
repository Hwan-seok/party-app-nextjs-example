import { Time } from '../enums/time.enum';

export type ReservableSet = {
  [Key in Time]: {
    isReservable: boolean;
    specificTimeStarts: string;
    specificTimeEnds: string;
  };
};
