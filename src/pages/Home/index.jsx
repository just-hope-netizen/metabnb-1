import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import banner from "../../assets/img/Group 4028.png";
import banner1 from "../../assets/img/Frame 59546.png";
import image1 from "../../assets/img/Frame 151.png";
import image2 from "../../assets/img/Frame 151 (1).png";
import image3 from "../../assets/img/Frame 151 (2).png";
import image4 from "../../assets/img/Frame 151 (3).png";
import image5 from "../../assets/img/Frame 151 (4).png";
import image6 from "../../assets/img/Frame 151 (5).png";
import image7 from "../../assets/img/Frame 151 (6).png";
import image8 from "../../assets/img/Frame 151 (7).png";
import { MetaIcon, OpenSeaIcon, TokenIcon } from "../../assets/svg";
import { Col, Container, Row } from "react-bootstrap";
import { CardComponent } from "../../components/Card";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Header />
      <Container className=" first-section">

      <Row className="d-flex space first-section-row ">
        <Col>
          <h1>
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>{" "}
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="d-flex">
            <input type="text" placeholder="Search for location" />{" "}
            <button type="button">Search</button>
          </div>
        </Col>
        <Col className="d-flex justify-content-end">
          <img src={banner} alt="banner" />
        </Col>
      </Row>
      </Container>

      <div className="container-fluid line">
        <Container className="d-flex space align">
          <TokenIcon />
          <MetaIcon />
          <OpenSeaIcon />
        </Container>
      </div>

      <section className="mt-4 pt-4 ">
        <h1 className="text-center inspiration  we-700 mb-5">
          Inspiration for your next adventure
        </h1>

        <Row className="d-flex justify width me-0 mb-5">
          {[image1, image2, image3, image4, image5, image6, image7, image8].map(
            (i, index) => (
              <CardComponent key={index} link={i} />
              )
              )}
        </Row>
      </section>
      <section className="third-section">
        <Container>
        <Row className="third-section-row width px-1 m-0 flex-column flex-lg-row">
          <Col className="p-md-0">
            <h2 className="third-header we-700 ">Metabnb NFTs</h2>
            <p>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button  className="learn-btn">Learn more</button>
          </Col>
          <Col>
          <img src={banner1} alt="banner1" />
          </Col>
        </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};
