import { Container, Row } from "react-bootstrap";
import {
  CopyRightIcon,
  FacebookIcon,
  InstagramIcon,
  LogoDarkIcon,
  TwitterIcon,
} from "../../assets/svg";
import { FooterList } from "../FooterList";

export const Footer = () => {
  return (
    <footer>
      <Container className="d-flex">
        <div>
          <LogoDarkIcon />
          <div className="icons-container">
            <FacebookIcon />
            <InstagramIcon className="insta-icon" />
            <TwitterIcon />
          </div>
        </div>

        <Row className="footer-row width">
          <FooterList
            header={"Community"}
            first={"NFT"}
            second={"Tokens"}
            third={"Landlords"}
            four={"Discord"}
          />
          <FooterList
            header={"Places"}
            first={"Castle"}
            second={"Farm"}
            third={"Beach"}
            four={"Learn more"}
          />
          <FooterList
            header={"About us"}
            first={"Road map"}
            second={"Creators"}
            third={"Career"}
            four={"Contact us"}
          />
        </Row>
      </Container>
      <Container className="mt-4">
        <p>
          <CopyRightIcon /> 2022 Metabnb
        </p>
      </Container>
    </footer>
  );
};
