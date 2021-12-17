import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import moment from "moment";

interface Props {
  userId: string;
}

enum roomType {
  Single,
  Double,
  Twin,
  Suite,
}
export const ChangeReservationForm: React.FunctionComponent<Props> = ( props: Props ) => {

    const history = useHistory();
    
    return (
        <div>
            
        </div>
    )
}

