import {Nav, Navbar, Container} from "react-bootstrap"

const Navigation = () => {
    return (
        <div>
    <Navbar className="nav-bar" variant="dark">
        <Container>
          <Navbar.Brand href="/">VVibu</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">Trending</Nav.Link>
            <Nav.Link href="#best">Best</Nav.Link>
            <Nav.Link href="#chara">Fav Chara</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
        </div>
    )
}

export default Navigation