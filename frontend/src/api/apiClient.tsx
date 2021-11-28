export interface NewRoomSearch {
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
  hotelId: number;
}
export interface RoomsListResponse {
  room: Room[];
}

export async function fetchAllRooms(): Promise<RoomsListResponse> {
  const response = await fetch(`https://localhost:5001/rooms`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export const fetchAllRoomsList = async (): Promise<RoomsListResponse> => {
  const internalApi = await fetchAllRooms();
  const roomsInternalList = internalApi.room;
  return { room: roomsInternalList };
};

export async function fetchRoomsListByQuery(
  location: string,
  checkInDate: Date,
  checkOutDate: Date,
  numGuests: number
) {
  const response = await fetch(
    `https://localhost:5001/rooms/by-query?location=${location}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&numGuests=${numGuests}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export const createBooking = async (newRoomSearch: NewRoomSearch) => {
  const response = await fetch(`https://localhost:5001/reservation/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRoomSearch),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
