import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { XIcon } from "../../assets/svg";
import { ModalComponent } from "../Modal";

export const Menu = ({ cancel, onClick, show, onHide }) => {
    
  return (
    <div className="position-fixed top-0 start-0 end-0 bottom-0 zindex ">
      <XIcon onClick={cancel} className="position-absolute x-icon" />
      <Row className="h-100">
        <Col className="bg-light ps-4 pt-4">
          <ul className="ps-0">
            <li className="mb-2">
              <Link to={"/"} className="text-decoration-none text-dark"> Home</Link>
            </li>
            <li className="mb-2">Place to stay</li>
            <li className="mb-2">NFTs</li>
            <li className="mb-2">Community</li>
          </ul>
          <Button
            className="header-btn shadow-none "
            onClick={onClick}
          >
            {" "}
            Connect wallet
          </Button>
        </Col>
        <Col className="backdrop " onClick={cancel}/>
      </Row>
      <ModalComponent show={show} onHide={onHide}/>
    </div>
  );
};
