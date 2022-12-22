import { Card, Container, Row, Col, Image } from "react-bootstrap"
import infj from "../asset/IMG/Fav Chara/infj.jpg"
import Luffy from "../asset/IMG/Fav Chara/Luffy.png"
import Naruto from "../asset/IMG/Fav Chara/bijak.jpg"
import goku from "../asset/IMG/Fav Chara/goku.jpg"
import kribo from "../asset/IMG/Fav Chara/kribo.jpg"
import kuning from "../asset/IMG/Fav Chara/kuning.gif"

const Chara = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white text-center">Greatest Anime Characters of All Time</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="chara">
                        <Card className="movieImage">
                            <Image src={Luffy} alt="Monkey D. Luffy" className="img" />
                            <div className="BgCard">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Monkey D. Luffy</Card.Title>
                                    <Card.Text className="text-left">Anime: One Piece</Card.Text>
                                    <Card.Text claasName="text-left">Gender: Male</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={kuning} alt="Edward Elric" className="img" />
                            <div className="BgCard">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Edward Elric</Card.Title>
                                    <Card.Text className="text-left">Anime: Fullmetal Alchemist</Card.Text>
                                    <Card.Text claasName="text-left">Gender: Male</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={Naruto} alt="Naruto Uzumaki" className="img" />
                            <div className="BgCard">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Naruto Uzumaki</Card.Title>
                                    <Card.Text className="text-left">Anime: Naruto</Card.Text>
                                    <Card.Text claasName="text-left">Gender: Male</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={infj} alt="Johan Liebert" className="img" />
                            <div className="BgCard">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Johan Liebert</Card.Title>
                                    <Card.Text className="text-left">Anime: Monster</Card.Text>
                                    <Card.Text claasName="text-left">Gender: Male</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={goku} alt="Goku" className="img" />
                            <div className="BgCard">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Goku</Card.Title>
                                    <Card.Text className="text-left">Anime: Dragon Ball</Card.Text>
                                    <Card.Text claasName="text-left">Gender: Male</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={kribo} alt="Spike Spiegel" className="img" />
                            <div className="BgCard">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Spike Spiegel</Card.Title>
                                    <Card.Text className="text-left">Anime: Cowboy Bebop</Card.Text>
                                    <Card.Text claasName="text-left">Gender: Male</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Chara