import { Container, Button, Card, Row, Col } from 'react-bootstrap'
import './style.scss';


const produtos = [
    {
        imagem: "https://i.pinimg.com/474x/cd/da/36/cdda36fbac09ad901ce01f3989c60aa6.jpg",
        titulo: "Tattoo",
        descricao: "A tatuagem é uma das formas de modificação do corpo mais conhecidas e cultuadas do mundo. Trata-se de uma arte permanente feita na pele humana que, tecnicamente, consiste em uma aplicação subcutânea obtida através da introdução de pigmentos por agulhas.",
        valor: "67.98",
    },
    {
        imagem: "https://i.pinimg.com/474x/cd/da/36/cdda36fbac09ad901ce01f3989c60aa6.jpg",
        titulo: "Tattoo",
        descricao: "A tatuagem é uma das formas de modificação do corpo mais conhecidas e cultuadas do mundo. Trata-se de uma arte permanente feita na pele humana que, tecnicamente, consiste em uma aplicação subcutânea obtida através da introdução de pigmentos por agulhas.",
        valor: "67.98",
    },
    {
        imagem: "https://i.pinimg.com/474x/cd/da/36/cdda36fbac09ad901ce01f3989c60aa6.jpg",
        titulo: "Tattoo",
        descricao: "A tatuagem é uma das formas de modificação do corpo mais conhecidas e cultuadas do mundo. Trata-se de uma arte permanente feita na pele humana que, tecnicamente, consiste em uma aplicação subcutânea obtida através da introdução de pigmentos por agulhas.",
        valor: "67.98",
    },
    {
        imagem: "https://i.pinimg.com/474x/cd/da/36/cdda36fbac09ad901ce01f3989c60aa6.jpg",
        titulo: "Tattoo",
        descricao: "A tatuagem é uma das formas de modificação do corpo mais conhecidas e cultuadas do mundo. Trata-se de uma arte permanente feita na pele humana que, tecnicamente, consiste em uma aplicação subcutânea obtida através da introdução de pigmentos por agulhas.",
        valor: "67.98",
    },
    {
        imagem: "https://i.pinimg.com/474x/cd/da/36/cdda36fbac09ad901ce01f3989c60aa6.jpg",
        titulo: "Tattoo",
        descricao: "A tatuagem é uma das formas de modificação do corpo mais conhecidas e cultuadas do mundo. Trata-se de uma arte permanente feita na pele humana que, tecnicamente, consiste em uma aplicação subcutânea obtida através da introdução de pigmentos por agulhas.",
        valor: "67.98",
    },
    {
        imagem: "https://i.pinimg.com/474x/cd/da/36/cdda36fbac09ad901ce01f3989c60aa6.jpg",
        titulo: "Tattoo",
        descricao: "A tatuagem é uma das formas de modificação do corpo mais conhecidas e cultuadas do mundo. Trata-se de uma arte permanente feita na pele humana que, tecnicamente, consiste em uma aplicação subcutânea obtida através da introdução de pigmentos por agulhas.",
        valor: "67.98",
    },
    {
        imagem: "https://i.pinimg.com/474x/cd/da/36/cdda36fbac09ad901ce01f3989c60aa6.jpg",
        titulo: "Tattoo",
        descricao: "A tatuagem é uma das formas de modificação do corpo mais conhecidas e cultuadas do mundo. Trata-se de uma arte permanente feita na pele humana que, tecnicamente, consiste em uma aplicação subcutânea obtida através da introdução de pigmentos por agulhas.",
        valor: "67.98",
    },
    {
        imagem: "https://i.pinimg.com/474x/cd/da/36/cdda36fbac09ad901ce01f3989c60aa6.jpg",
        titulo: "Tattoo",
        descricao: "A tatuagem é uma das formas de modificação do corpo mais conhecidas e cultuadas do mundo. Trata-se de uma arte permanente feita na pele humana que, tecnicamente, consiste em uma aplicação subcutânea obtida através da introdução de pigmentos por agulhas.",
        valor: "67.98",
    }
    
    
]

const Products = () => {

    return ( 
    <>    
    <Container fluid id="prod-container">
    <Row>
    <Col className="d-flex justify-content-start" id="prod"><h1>Produtos</h1></Col>
    </Row>
    
    <Container className="d-flex flex-wrap justify-content-center" id="box-prod">
    
    {produtos.map(produto =>
       
    <Card style={{ width: '16rem' }}>
    <Card.Img variant="top" src={produto.imagem} />
    <Card.Body>
    <Card.Title>{produto.titulo}</Card.Title>
    <Card.Text>{produto.descricao}</Card.Text>
    <Button variant="primary">Ver Mais</Button>
    </Card.Body>
    </Card>
  
    )}
    </Container>
    </Container>
    </>
    )
}

export default Products;