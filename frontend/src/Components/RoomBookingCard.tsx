import React from "react";
import { Room } from "../api/apiClient";
import { Container } from "react-bootstrap";

interface Props {
    room: Room
}

export const RoomBookingCard:React.FunctionComponent<Props> = ( props: Props ) => {
    return(
        <Container>
            {props.room.roomPrice}
        </Container>
    );
}
