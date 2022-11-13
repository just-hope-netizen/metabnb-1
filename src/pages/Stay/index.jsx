import { Footer } from "../../components/Footer";
import { Container, Row } from "react-bootstrap";
import { Header } from "../../components/Header";
import { LocationIcon } from "../../assets/svg";
import image1 from "../../assets/img/Frame 151.png";
import image2 from "../../assets/img/Frame 151 (1).png";
import image3 from "../../assets/img/Frame 151 (2).png";
import image4 from "../../assets/img/Frame 151 (3).png";
import image5 from "../../assets/img/Frame 151 (4).png";
import image6 from "../../assets/img/Frame 151 (5).png";
import image7 from "../../assets/img/Frame 151 (6).png";
import image8 from "../../assets/img/Frame 151 (7).png";
import image9 from "../../assets/img/Frame 151 (8).png";
import image10 from "../../assets/img/Frame 151 (9).png";
import image11 from "../../assets/img/Frame 151 (10).png";
import image12 from "../../assets/img/Frame 151 (11).png";
import image13 from "../../assets/img/Frame 151 (12).png";
import image14 from "../../assets/img/Frame 151 (13).png";
import image15 from "../../assets/img/Frame 151 (14).png";
import image16 from "../../assets/img/Frame 151 (15).png";
import { CardComponent } from "../../components/Card";

export const Stay = () => {
  return (
    <>
      <Header />
      <nav className="container d-flex nav align">
        <ul className="d-flex nav-list ps-0 mb-0 flex-wrap">
          <li>Resturant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>fantast city</li>
          <li>beach</li>
          <li>Carbins</li>
          <li>Off-grid</li>
          <li>Farm</li>
        </ul>
        <button className="location-btn">
          Location
          <LocationIcon />
        </button>
      </nav>
        <Row className="stay-row d-flex justify width me-0 ">
          {[
            image1,
            image2,
            image3,
            image4,
            image5,
            image6,
            image7,
            image8,
            image9,
            image10,
            image11,
            image12,
            image13,
            image14,
            image15,
            image16,
          ].map((i, index) => (
            <CardComponent key={index} link={i} />
          ))}
        </Row>
      <Footer />
    </>
  );
};
