import React from 'react';
import { Container, Row, Col, Image, Card, Button, Form} from 'react-bootstrap';
import Sugestoes from '../Sugestoes';
import './style.scss';

const ProdutoUnid = () => {

    let containerProdutos = {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
    return ( 
    <>
    <Container>
        <Row style={containerProdutos}>
        <Col xs={6} md={4}>
            <Image src="https://i.pinimg.com/474x/cd/da/36/cdda36fbac09ad901ce01f3989c60aa6.jpg" rounded />
        </Col>
        <Col>
        <Card style={{ width: 'auto', height: '250px' }}>
  <Card.Body>
    <Card.Title>Tattoo</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">tatuagem</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Form>
  <Form.Check 
    type="switch"
    id="custom-switch"
    label="Colorida"
  />
   <Form.Check 
    type="switch"
    id="custom-switch"
    label="Preto e Branco"
  />
  </Form>
        <Button variant="secondary" style={{padding:'10px'}}>Adicionar ao carrinho</Button>
  </Card.Body>
</Card>
        </Col>
        </Row>
    </Container>
    <h2>Você também pode gostar</h2>

      <Sugestoes />
    </>
    )
}

export default ProdutoUnid;