import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import styles from "../styles/AudioCom.module.css";

const AudioCom = (props) => {
  const {
    // id,
    track_name,
    artist,
    album,
    image,
    premium_track,
    category,
    add_playlist,
    add_favourite,
  } = props;

  console.log("Props", props);

  return (
    <Card className={styles.card}>
      <Card.Body>
        <Card.Text>
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <Image src={image} height="150" />
              {premium_track && (
                <i class={`fa-solid fa-star fa-2x ${styles.star}`}></i>
              )}
            </Col>
            <Col className="mt-3">
              <p><strong>{track_name}</strong></p>
              <p>{artist}</p>
              <p>{album}</p>
              <p>{category}</p>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <audio src=" " controls />
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              {add_favourite ? (
                <i class="fa-solid fa-heart ml-2"></i>
              ) : (
                <i class="fa-regular fa-heart ml-2"></i>
              )}
              {add_playlist ? (
                <i class="fa-solid fa-check ml-2"></i>
              ) : (
                <i class="fa-solid fa-plus ml-2"></i>
              )}
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AudioCom;
