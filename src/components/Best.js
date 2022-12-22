import { Card, Container, Row, Col, Image } from "react-bootstrap"
import naruto from "../asset/IMG/Best/naruto.jpg"
import demon from "../asset/IMG/Best/demonSlayer.jpg"
import jojo from "../asset/IMG/Best/Jojo.jpg"
import fullmetal from "../asset/IMG/Best/fullmetal.jpg"
import onepiece from "../asset/IMG/Best/onepiece.png"
import evan from "../asset/IMG/Best/evangelion.jpg"

const Best = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center">Best of All Time</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="best">
                        <Card className="movieImage">
                            <Image src={demon} alt="Demon Slayer" className="img" />
                            <div className="BgCard">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Demon Slayer: Kimetsu no Yaiba</Card.Title>
                                    <Card.Text className="text-left">Air Dates: From 2019</Card.Text>
                                    <Card.Text claasName="text-left">Genre: Drama, Action, Adventure, Fantasy</Card.Text>
                                    <Card.Text claasName="text-left">Recommended for Beginners/Fans</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={naruto} alt="Naruto" className="img" />
                            <div className="BgCard">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Naruto</Card.Title>
                                    <Card.Text className="text-left">Air Dates: 2002-2017</Card.Text>
                                    <Card.Text claasName="text-left">Genre: Adventure, Action, Fantasy</Card.Text>
                                    <Card.Text claasName="text-left">Recommended for Beginners/Fans</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={onepiece} alt="One Piece" className="img" />
                            <div className="BgCard">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">One Piece</Card.Title>
                                    <Card.Text className="text-left">Air Dates: From 1999</Card.Text>
                                    <Card.Text claasName="text-left">Genre: Adventure, Action, Fantasy, Drama</Card.Text>
                                    <Card.Text claasName="text-left">Recommended for Beginners/Fans</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={fullmetal} alt="Fullmetal Alchemist" className="img" />
                            <div className="BgCard">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Fullmetal Alchemist</Card.Title>
                                    <Card.Text className="text-left">Air Dates: 2003-2010</Card.Text>
                                    <Card.Text claasName="text-left">Genre: Adventure, Science Fiction, Fantasy</Card.Text>
                                    <Card.Text claasName="text-left">Recommended for Beginners/Fans</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={evan} alt="Neon Genesis Evangelion" className="img" />
                            <div className="BgCard">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Neon Genesis Evangelion</Card.Title>
                                    <Card.Text className="text-left">Air Dates: 1995-1996</Card.Text>
                                    <Card.Text claasName="text-left">Genre: Mecha, Action, Fantasy</Card.Text>
                                    <Card.Text claasName="text-left">Recommended for Beginners/Fans</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={jojo} alt="JoJo's Bizarre Adventure" className="img" />
                            <div className="BgCard">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">JoJo's Bizarre Adventure</Card.Title>
                                    <Card.Text className="text-left">Air Dates: From 2012</Card.Text>
                                    <Card.Text claasName="text-left">Genre: Adventure, Action, Fantasy</Card.Text>
                                    <Card.Text claasName="text-left">Recommended for Fans/Freaks</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Best