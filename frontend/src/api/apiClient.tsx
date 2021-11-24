export interface NewBooking {
  location: string;
  checkInDate: Date;
  checkOutDate: Date;
  numGuests: number;
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
}
export interface RoomsListResponse {
  room: Room[];
}

const baseUrl = process.env["REACT_APP_BACKEND_DOMAIN"];

export const createBooking = async (newBooking: NewBooking) => {
  const response = await fetch(`${baseUrl}/reservation/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBooking),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const fetchRoomsListByQuery = async (
  location: string,
      checkInDate: Date,
      checkOutDate: Date,
      numGuests: number
): Promise<RoomsListResponse> => {
  const response = await fetch(
    `${baseUrl}/rooms/by-query?location=${location}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&numGuests=${numGuests}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};