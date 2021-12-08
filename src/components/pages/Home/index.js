import { React, useState, useContext } from 'react';
import { Carousel, Row, Col } from "react-bootstrap";
import CarItem from "../../Carousel/carItem";
import Banner from "../../Banner"

const Home = () => {

    const [carItem] = useState([]);

    return (
        <>
            <Banner />

            <main>
                <Carousel>
                    <Carousel.Item >
                        <Col lg={{ span: 6, offset: 4 }}>
                            <Row>
                                {itensCarousel1.map(({ id, itemAlt, itemSrc }) => {
                                    return (
                                        <CarItem className="item" itemSrc={itemSrc} itemAlt={itemAlt} key={id} />
                                    );
                                }
                                )}
                            </Row>
                        </Col>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Col lg={{ span: 6, offset: 4 }}>
                            <Row>
                                {itensCarousel2.map(({ id, itemAlt, itemSrc }) => {
                                    return (
                                        <CarItem className="item" itemSrc={itemSrc} itemAlt={itemAlt} key={id} />
                                    );
                                }
                                )}
                            </Row>
                        </Col>
                    </Carousel.Item>
                </Carousel>
            </main>
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