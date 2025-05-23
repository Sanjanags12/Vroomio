import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { Endpoints } from '../common/constants/endpoints.constants';

export type BookingRequest = {
  traveller: string;
  type: string;
  ratings: string;
  seats: string;
  timing: string;
  price: string;
  email: string;
  mobile: string;
  pickup: string;
  drop: string;
  seat: string;
  from: string;
  to: string;
  id: number;
};

export type BookingResponse = {
  _id: string;
  traveller: string;
  type: string;
  ratings: string;
  seats: string;
  timing: string;
  price: string;
  email: string;
  mobile: string;
  pickup: string;
  drop: string;
  seat: string;
  from: string;
  to: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export const usePostBusBooking = () => {
  return useMutation<BookingResponse, Error, BookingRequest>({
    mutationFn: (newBooking) =>
      axios.post<BookingResponse>(Endpoints.POST_BUS, newBooking).then(res => res.data),
    mutationKey: ['bookings'],
  });
};