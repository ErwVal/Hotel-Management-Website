import React from "react";

export interface NewBooking {

  location: string,
  checkInDate : Date,
  checkOutDate: Date,
  numGuests: number,
}

const baseUrl = process.env["REACT_APP_BACKEND_DOMAIN"];

export const createBooking = async (newBooking: NewBooking) => {
  const response = await fetch(`${baseUrl}/sightings/create`, {
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
