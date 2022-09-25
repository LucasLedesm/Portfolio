import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsPersonCircle } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { BsFillArchiveFill } from "react-icons/bs";
import { BsFillFileEarmarkFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


function Navbaar() {
    return (
        <Navbar className='navbarr' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navbarr_pages me-auto">
                        <Link to={"/"} className="navbarr_pages1"><BsFillHouseDoorFill />Home</Link>
                        <Link to={"/about"}className="navbarr_pages2"><BsFillFileEarmarkPersonFill />About</Link>
                        <Link to={"/projects"} className="navbarr_pages3" ><BsFillArchiveFill />Projects</Link>
                        <Link to={"/resume"} className="navbarr_pages4" ><BsFillFileEarmarkFill />Resume</Link>
                    </Nav>
                    <Nav>
                        <div>
                            <BsPersonCircle />Lucas Ledesma.
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbaar;