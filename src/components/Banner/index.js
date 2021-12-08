import React from "react";
import './style.scss'
import { Row, Col } from "react-bootstrap";

const Banner = () => {

    return (

        <section className="banner">
            {/* <div className="row"> */}
                <Row>
                <div className="col-sm-6">
                    <Col>
                    <h2>Bem vindo ao UaiTatu!</h2>
                    <p>Aqui você conhecerá mais de nosso lindo projeto, onde, através do mundo das tatuagens, as pessoas podem se sentir mais livres e autênticas.</p>
                    </Col>
                </div>
                </Row>

            {/* </div> */}

        </section>

    )


}

export default Banner;