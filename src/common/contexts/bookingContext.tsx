
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Bus {
  id: number;
  traveller: string;
  type: string;
  ratings: string;
  seats: string;
  timing: string;
  price: string;
}

interface BookingContextType {
  bookings: Bus[];
  addBooking: (bus: Bus) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [bookings, setBookings] = useState<Bus[]>([]);

  const addBooking = (bus: Bus) => {
    setBookings((prevBookings) => [...prevBookings, bus]);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
