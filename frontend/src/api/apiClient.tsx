export interface NewReservation {
  checkIn: Date;
  checkOut: Date;
  numGuests: number;
  roomId: number;
  hotelId: number;
  userId: number,
}

export interface NewUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
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
  const response = await fetch('http://localhost:8000/reservations/create', {
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

export const registerUser = async (registerUser: NewUser) => {
  const response = await fetch('http://localhost:8000/api/register', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerUser),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const loginUser = async (loginUser: LoginUser) => {
  const response = await fetch('http://localhost:8000/api/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify(loginUser),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};