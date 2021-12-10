import { useEffect, useState } from 'react';
import { Container, Button, Card, Col } from 'react-bootstrap'
import api from '../../../services/api';
import Swal from 'sweetalert2';
import './style.scss';
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const Products = ({escolha}) => {
  const[produtos, setProd] = useState([]);

  useEffect(() => {
    async function pegaProdutos(){
      try {
      const response = await api.get(escolha);
        setProd(response.data);
    } catch (error) {
      Swal.fire({
        title: error.response.status,
        icon: 'error',
        text: error.response.data.message
      });
    }
  }
  pegaProdutos();
  }, [])


    return (
      <>
        <Header />
        <h1>Produtos</h1>
        {produtos.length !==0 && (
          <Container fluid style={{ width: '80%', gap: '0.7rem', marginTop: '3rem' }} className="d-flex flex-wrap justify-content-center">
            {produtos.map(({ nome, preco,imagem }) => {
              return (
                <Card bg="warning" style={{ width: '16rem', gap: '3rem' }}>
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

export default Products;