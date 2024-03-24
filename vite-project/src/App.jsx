import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';

const Header = styled.header`
  background-color: #f8f9fa;
  padding: 2rem 0;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover; /* Ensures image fills the container */
  background-color: #f0f0f0; /* Placeholder background color */
`;

const AboutSection = styled.section`
  padding: 4rem 0;
`;

const ServicesSection = styled.section`
  background-color: #f2f2f2;
  padding: 4rem 0;
`;

const ServiceItem = styled.div`
  margin-bottom: 2rem;
`;

const ExperienceSection = styled.section`
  padding: 4rem 0;
`;

const CallToAction = styled.div`
  text-align: center;
  padding: 2rem 0;
`;

const Footer = styled.footer`
  background-color: #f0f0f0;
  padding: 2rem 0;
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <Header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#">Maven Consulting</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Header>
      <Container>
        <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Col xs={12} md={6}>
            <HeroImage src="path/to/your/hero.jpg" alt="Hero Image" />
          </Col>
          <Col xs={12} md={6}>
            <AboutSection id="about">
              <h2>About Us</h2>
              <p>
                Maven Consulting is a results-oriented firm dedicated to
                empowering businesses to achieve their full potential. We leverage
                our expertise in growth strategies, digital marketing, and
                operational optimization to help clients achieve significant and
                sustainable success.
              </p>
            </AboutSection>
          </Col>
        </Row>
        <ServicesSection id="services">
          <h2>Our Services</h2>
          <Row>
            <Col xs={12} md={4}>
              <ServiceItem>
                <h3>Growth Strategy</h3>
                <p>
                  We develop comprehensive plans to enhance brand visibility,
                  revenue, and market share.
                </p>
              </ServiceItem>
            </Col>
            <Col xs={12} md={4}>
              <ServiceItem>
                <h3>Sales & Marketing</h3>
                <p>
                  We create and execute data-driven sales & marketing campaigns
                  that drive lead generation and conversions.
                </p>
              </ServiceItem>
            </Col>
            <Col xs={12} md={4}>
              <ServiceItem>
                <h3>Digital Marketing</h3>
                <p>
                  We optimize website SEO, implement multi-channel campaigns
                  (LinkedIn, Email Marketing), and develop engaging social media
                  content.
                </p>
              </ServiceItem>
            </Col>
          </Row>
          {/* Add additional service items here */}
        </ServicesSection>
        <ExperienceSection id="experience">
          <h2>Experience</h2>
          <p>
            We have a proven track record of success in collaborating with
            diverse startups (replace with your experience details). Here are some
            examples:
          </p>
          <ul>
            <li>Electric Vehicle Battery Analytics</li>
            <li>POSH Consulting Firm</li>
            <li>Social Media Scheduler</li>
            <li>Clean Tech Hardware Firm</li>
          </ul>
        </ExperienceSection>
        <CallToAction id="contact">
        <h2>Let's Talk Growth</h2>
          <p>Are you ready to take your business to the next level?</p>
          <Button variant="primary">Schedule a Consultation</Button>
        </CallToAction>
      </Container>
      <Footer>
        <Container>
          <p>Copyright &copy; {new Date().getFullYear()} Maven Consulting</p>
        </Container>
      </Footer>
    </div>
  );
}

export default App;

