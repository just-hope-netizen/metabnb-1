import { Col } from "react-bootstrap";

export const FooterList = ({ header, first, second, third, four }) => {
  return (
    <Col>
      <p className="f-18 mb-3 we-700">{header}</p>
      <ul className="ps-0">
        <li className="mb-1 f-14">{first}</li>
        <li className="mb-1 f-14">{second}</li>
        <li className="mb-1 f-14">{third}</li>
        <li className="f-14">{four}</li>
      </ul>
    </Col>
  );
};
