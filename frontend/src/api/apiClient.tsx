export interface NewReservation {
  checkIn: Date;
  checkOut: Date;
  guestName: string;
  numGuests: number;
  roomId: number;
  hotelId: number;
}

enum roomType {
  Single,
  Double,
  Twin,
  Suite,
}

enum available {
  No,
  Yes,
}
export interface Room {
  id: number;
  roomType: roomType;
  available: available;
  images: string[];
  roomPrice: number;
  maxGuests: number;
  hotelId: number;
}
export interface RoomsListResponse {
  room: Room[];
}

export const createReservation = async (newReservation: NewReservation) => {
  const response = await fetch(`https://localhost:5001/reservations/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newReservation),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
