import { React, useState, useContext } from 'react';
import { Carousel, Row, Col } from "react-bootstrap";
import Swal from 'sweetalert2';
import CarItem from "../../Carousel/carItem";
import Banner from "../../Banner"
import Header from "../../Header"
import Footer from "../../Footer"
//import api from "../../../services/api"
import './style.scss'

const Home = () => {

    const [carItem] = useState([]);
    /* const [produtos, setProdutos] = useState([]);

    const handleSubmit = async ({ categorias_id }) => {
        try {
          const response = await api.get(`/produtos/categorias/1}`);
          setProdutos(response.data);
        } catch (error) {
          Swal.fire({
            title: error.response.status,
            icon: 'error',
            text: error.response.data.message
          });
        }
      } */

    return (
        <>
            <Header />
            <Banner />

            <main>
                <Carousel className="carouselClass">
                    <Carousel.Item className="carItemClass">
                        <Col lg={{ span: 6, offset: 3 }}>
                            <Row>
                                {itensCarousel1.map(({ id, itemAlt, itemSrc }) => {
                                    return (
                                        <CarItem className="item" itemSrc={itemSrc} itemAlt={itemAlt} key={id} id={id} />
                                    );
                                }
                                )}
                            </Row>
                        </Col>
                    </Carousel.Item>
                    <Carousel.Item className="carItemClass">
                        <Col lg={{ span: 6, offset:3 }}>
                            <Row>
                                {itensCarousel2.map(({ id, itemAlt, itemSrc }) => {
                                    return (
                                        <CarItem className="item" itemSrc={itemSrc} itemAlt={itemAlt} key={id} id={id}/>
                                    );
                                }
                                )}
                            </Row>
                        </Col>
                    </Carousel.Item>
                </Carousel>
            </main>
            <Footer />
        </>
    );
}

// transformar no consumo da api do Backend CTD-Commerce
const itensCarousel1 = [
    {
        id: 1,
        itemSrc: "https://images.emojiterra.com/google/android-10/512px/1f7ea.png",
        itemAlt: "um quadrado roxo"
    },
    {
        id: 2,
        itemSrc: "https://images.emojiterra.com/google/android-10/512px/1f7ea.png",
        itemAlt: "segundo quadrado roxo"
    },
    {
        id: 3,
        itemSrc: "https://images.emojiterra.com/google/android-10/512px/1f7ea.png",
        itemAlt: "terceiro quadrado roxo"
    }
];

const itensCarousel2 = [
    {
        id: 1,
        itemSrc: "https://image.freepik.com/vetores-gratis/cartaz-vermelho-da-festa-de-feliz-natal-com-decoracao-realista_1393-455.jpg",
        itemAlt: "um quadrado roxo"
    },
    {
        id: 2,
        itemSrc: "https://image.freepik.com/vetores-gratis/cartaz-vermelho-da-festa-de-feliz-natal-com-decoracao-realista_1393-455.jpg",
        itemAlt: "segundo quadrado roxo"
    },
    {
        id: 3,
        itemSrc: "https://image.freepik.com/vetores-gratis/cartaz-vermelho-da-festa-de-feliz-natal-com-decoracao-realista_1393-455.jpg",
        itemAlt: "terceiro quadrado roxo"
    }
]


export default Home;