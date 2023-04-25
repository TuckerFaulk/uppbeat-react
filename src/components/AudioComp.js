import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container, Nav } from "react-bootstrap";
import axios from "axios";
import btnStyles from "../styles/Btn.module.css";
import AudioCom from "./AudioCom";

function AudioComp() {
  const [tracks, setTracks] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axios.get(
          "https://8000-tuckerfaulk-uppbeatapi-g57bhmlnw7i.ws-eu95.gitpod.io/tracks/"
        );
        setTracks(data);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, []);

  return (
    <Container className="mb-5">
      <Row className="d-flex justify-content-center text-center mt-3">
        <Nav.Link className={btnStyles.btn2}>Jazz</Nav.Link>
        <Nav.Link className={btnStyles.btn2}>Rock</Nav.Link>
        <Nav.Link className={btnStyles.btn2}>Chill</Nav.Link>
      </Row>
      <Row>
        <Col className="mt-3">
          {tracks?.map((track) => (
            <AudioCom {...track} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default AudioComp;
