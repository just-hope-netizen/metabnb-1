import Modal from "react-bootstrap/Modal";
import wallect from "../../assets/img/image 69.png";
import meta from "../../assets/img/image 66.png";
import { RightArrowIcon } from "../../assets/svg";

export const ModalComponent = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      dialogClassName="width modal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Connect Wallet
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Choose your preferred wallet:</h4>
        <div className="modal-wallect d-flex align width space">
          <div className="d-flex align">
            <img src={meta} alt="wallect icon" />
            <p className="mb-0 wallect-text f-16">Metamask</p>
          </div>
          <RightArrowIcon />
        </div>
        <div className="modal-wallect d-flex align width space">
          <div className="d-flex align">
            <img src={wallect} alt="wallect icon" />
            <p className="mb-0 wallect-text f-16">WalletConnect</p>
          </div>
          <RightArrowIcon />
        </div>
      </Modal.Body>
    </Modal>
  );
};
