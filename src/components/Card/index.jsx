import {  Card } from "react-bootstrap";
import { StarsIcon } from "../../assets/svg";

export const CardComponent = ({ link}) => {
  return (
    <Card style={{ width: "18.25rem", height: "23.25rem", padding: "1rem", borderRadius: "15px", margin: "12px" }}>
      <Card.Img variant="top" src={link} loading="lazy" />
      <Card.Body className="p-0 pt-3">
        <div className="d-flex space mb-1">
          <span>Desert king</span>
          <span className="we-700">1MBT per night</span>
        </div>

        <div className="d-flex space">
          <span>2345km away</span>
          <span>available for 2weeks stay</span>
        </div>
        <StarsIcon />
      </Card.Body>
    </Card>
  );
};
