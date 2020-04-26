import { ReservableSet } from './reservableSet.interface';

export interface Party {
  id: number;
  name: string;
  location: string;
  img: string;
  reservableSet: ReservableSet;
}
