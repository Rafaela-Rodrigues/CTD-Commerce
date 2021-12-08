import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap"

const CarItem = ({ itemSrc, itemAlt, id }) => {
    return (
        <Col md={3} sm={6} key={id} /* as={Link} to={"/"}  */>
            <img className="item d-block w-100" src={itemSrc} alt={itemAlt} />
        </Col>
    )
}

export default CarItem;