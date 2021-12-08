import React from "react";
import { Col } from "react-bootstrap"

export default class CarItem extends React.Component {
    render() {
        return (
            <Col md={3} sm={6}>
                <img className="item d-block w-100" src={this.props.itemSrc} alt={this.props.itemAlt} />
            </Col>
        )
    }
}