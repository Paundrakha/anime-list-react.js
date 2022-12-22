import { Card, Container, Row, Col, Image } from "react-bootstrap"
import bocchi from "../asset/IMG/Trending/Bocchi.jpg"
import chainsaw from "../asset/IMG/Trending/Chainsaw man poster.jpg"
import bluelock from "../asset/IMG/Trending/BlueLock.jpg"
import Mob from "../asset/IMG/Trending/Mob.jpg"
import SpyX from "../asset/IMG/Trending/SpyX.jpg"
import Gundam from "../asset/IMG/Trending/Gundam.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center">Trending</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                            <Image src={bocchi} alt="Bocchi The Rock" className="img" />
                            <div className="BgCard">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Bocchi The Rock</Card.Title>
                                    <Card.Text className="text-left">Trending: #1</Card.Text>
                                    <Card.Text claasName="text-left">Status: On going</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={Gundam} alt="Bocchi the rock" className="img" />
                            <div className="BgCard">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Mobile Suit Gundam</Card.Title>
                                    <Card.Text className="text-left">Trending: #2</Card.Text>
                                    <Card.Text claasName="text-left">Status: On going</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={Mob} alt="Mob Psyco 100 III" className="img" />
                            <div className="BgCard">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Mob Psyco 100 III</Card.Title>
                                    <Card.Text className="text-left">Trending: #3</Card.Text>
                                    <Card.Text claasName="text-left">Status: On going</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={SpyX} alt="Spy X Family Part 2" className="img" />
                            <div className="BgCard">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Spy X Family Part 2</Card.Title>
                                    <Card.Text className="text-left">Trending: #4</Card.Text>
                                    <Card.Text claasName="text-left">Status: On going</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={chainsaw} alt="Chainsaw Man" className="img" />
                            <div className="BgCard">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Chainsaw Man</Card.Title>
                                    <Card.Text className="text-left">Trending: #5</Card.Text>
                                    <Card.Text claasName="text-left">Status: On going</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={bluelock} alt="Bluelock" className="img" />
                            <div className="BgCard">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Bluelock</Card.Title>
                                    <Card.Text className="text-left">Trending: #6</Card.Text>
                                    <Card.Text claasName="text-left">Status: On going</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending