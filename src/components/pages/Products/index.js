import { Component } from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap'
import api from '../../../services/api';
import Swal from 'sweetalert2';
import './style.scss';
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

export default class Products extends Component {

  constructor() {
    super();
    this.state = {
      produtos: []
    }
  }

  componentDidMount() {
    this.handleSubmit({ produtos: '/produtos' });
  }

  handleSubmit = async ({ produtos }) => {
    try {
      const response = await api.get(`${produtos}`);
      this.setState({ produtos: response.data });
    } catch (error) {
      Swal.fire({
        title: error.response.status,
        icon: 'error',
        text: error.response.data.message
      });
    }
  }

  render() {
    return (
      <>
          <Header />
          <Col className="d-flex justify-content-center" id="prod"><h1>Produtos</h1></Col>
          {this.state.produtos && (
            <Container fluid style={{ width: '80%', gap: '0.7rem', marginTop: '3rem'}} className="d-flex flex-wrap justify-content-center">
              
              
              {this.state.produtos.map(({ id, nome, preco, descricao, imagem }) => {
                return (
                    
                    
                    <Card bg="warning" t style={{ width: '16rem', gap: '3rem' }}>
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
              })}

            </Container>
          )}
         <Footer />
      </>
    );
  }
}

