// navigation/types.ts

export type RootStackParamList = {
  Tabs: undefined;
  Home: undefined;
  MyBookings: undefined;
  KnowAbout: undefined;
  Setting:undefined;
  BusDetails: { from: string; to: string; date: string };
  BusDescription: {
    traveller: string;
    type: string;
    ratings: string;
    seats: string;
    timing: string;
    price: string;
    from: string;
    to: string;
  };
   BookingForm: {
    traveller: string;
    type: string;
    ratings: string;
    seats: string;
    timing: string;
    price: string;
    from: string;
    to: string;
  };
  PaymentMethod: {
    email: string;
    mobile: string;
    pickup: string;
    drop: string;
    seat: string;
    price: string;
    from: string;
    to: string;
    ratings: string;
    seats: string;
    timing: string;
    traveller: string;
    type: string;
  };
  Payment: {
    email: string;
    mobile: string;
    pickup: string;
    drop: string;
    seat: string;
    price: string;
    from: string;
    to: string;
    ratings: string;
    seats: string;
    timing: string;
    traveller: string;
    type: string;
    method: string;
  };
  Success: {
    traveller: string;
    type: string;
    ratings: string;
    seats: string;
    timing: string;
    price: string;
    from: string;
    to: string;
  };
};
