import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import github from '../assets/img/github.svg';
import linkedin from '../assets/img/linkedin.svg';

export const NavBar = () => {
    const {activeLink, setActivelink} = useState ('home');
    const {scrolled, seScrolled } = useState(false);

    useEffect (()=> {
      const onScroll = () => {

        if ( window.scrollY >50 ){

          seScrolled(true);

        }else{

          seScrolled(false);
        }

      } 
      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll)
    },[])

    const onUpdateActiveLink = (value) => {
      setActivelink(value);  
    }

    return(
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home"><img src={''} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> <span className="navbar-toggler-icon"></span></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#Education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href='#'><img src={github} alt="" /></a>
                <a href='#'><img src={linkedin} alt="" /></a>     
            </div>
            <button className='vvd' onClick={() => console.log('connect')}>
                <span>
                    Contact Me
                </span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )

}