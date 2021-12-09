import React from "react";
import { Col } from "react-bootstrap"
//import './carItem.scss'

const CarItem = ({ itemSrc, itemAlt, id }) => {
    return (
        <Col md={4} sm={6} key={id} /* as={Link} to={"/"}  */ >
            <img className="item d-block w-100" src={itemSrc} alt={itemAlt} />
        </Col>
    )
}

export default CarItem;