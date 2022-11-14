import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LogoIcon, MenuIcon } from "../../assets/svg";
import { ModalComponent } from "../Modal";
import { Menu } from "../Menu";

export const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false);

  return (
    <header>

      <Container className="d-flex  space">
        <LogoIcon />
        <ul className="d-lg-flex header-ul mb-0 d-none  ps-0">
          <li>
            <Link to={"/"}> Home</Link>
          </li>
          <li>
          <Link to={"/place-to-stay"}> Place to stay</Link>
          </li>
          <li>NFTs</li>
          <li>Community</li>
        </ul>

        <Button
          className="header-btn shadow-none d-lg-flex d-none"
          onClick={() => setModalShow(true)}
          >
          {" "}
          Connect wallet
        </Button>
        <ModalComponent show={modalShow} onHide={() => setModalShow(false)} />
        <MenuIcon
          className="d-flex d-lg-none"
          onClick={() => setMenuShow(true)}
          />
        {menuShow && (
          <Menu
          cancel={() => setMenuShow(false)}
          onClick={() => setModalShow(true)}
          show={modalShow}
          onHide={() => setModalShow(false)}
          />
          )}
      </Container>
    </header>
  );
};
