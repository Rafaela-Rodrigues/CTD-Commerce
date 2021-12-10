import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";

const CardProduto = ({ id, nome, descricao,imagem, preco})=>{return(<Card bg="warning" style={{ width: '16rem', gap: '3rem' }}>
    <div id="cardImg">
        <Card.Img variant="top" src={imagem} />
    </div>
    <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Body className="d-flex flex-column align-items-center">
            <Card.Text>R${preco}</Card.Text>
            <Button variant="primary">Ver Mais</Button>
        </Card.Body>
    </Card.Body>
</Card>
)
}

export default CardProduto;