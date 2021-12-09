import React from "react";
import { Col } from "react-bootstrap"

const CarItem = ({ itemSrc, itemAlt, id }) => {
    console.log(id)
    return (
        <Col md={4} sm={6} key={id} className={`${ id===2 ? "d-none d-sm-block" : id===3 ? "d-none d-md-block" : "" }`} /* as={Link} to={"/"}  */ >
            <img className="item d-block w-100" src={itemSrc} alt={itemAlt} />
        </Col>
    )
}

export default CarItem;