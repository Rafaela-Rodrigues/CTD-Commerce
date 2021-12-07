import React from "react";
import { Carousel, Row } from "react-bootstrap";
import CarItem from "../../Carousel/carItem";

export default class Home extends React.Component {
    render() {
        return (
            <main>
                <Carousel>
                    <Carousel.Item >
                        <Row>
                        {this.state.itensCarousel1.map(
                            (carItem) => {
                                return (
                                    <CarItem className="item"  itemSrc={carItem.itemSrc} itemAlt={carItem.itemAlt} key={carItem.id} />
                                );
                            }
                        )}
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Row>
                        {this.state.itensCarousel2.map(
                            (carItem) => {
                                return (
                                    <CarItem className="item"  itemSrc={carItem.itemSrc} itemAlt={carItem.itemAlt} key={carItem.id} />
                                );
                            }
                        )}
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </main>
        );
    }

    constructor() {
        super();
        this.state = {
            itensCarousel1: [
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
            ],            
            itensCarousel2: [
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
        }
    }
}