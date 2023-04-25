import React from "react";
import { Card, CardGroup, Container, Row } from "react-bootstrap";
import styles from "../styles/Index.module.css";

function Index() {
  return (
    <Container className={styles.container}>
      <Row className="d-flex justify-content-center">
        <Card className="text-white">
          <Card.Img
            className={styles.image}
            src="https://res.cloudinary.com/dzqdaqlba/image/upload/v1682434652/uppbeat-social-share-20210118_z806aa.jpg"
            alt="Card image"
          />
        </Card>
      </Row>
      <Row className="d-flex justify-content-center">
        <CardGroup>
          <Card>
            <Card.Img height="200" variant="top" src="https://res.cloudinary.com/dzqdaqlba/image/upload/v1682436194/images_q7d6pz.jpg" />
            <Card.Body>
              <Card.Title className={styles.cardtitle}>Free Music For Creators</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img height="200" variant="top" src="https://res.cloudinary.com/dzqdaqlba/image/upload/v1682436180/download_bdjfgd.jpg" />
            <Card.Body>
              <Card.Title className={styles.cardtitle}>No Copyright Claim</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img height="200" variant="top" src="https://res.cloudinary.com/dzqdaqlba/image/upload/v1682436178/download_1_mhjttm.jpg" />
            <Card.Body>
              <Card.Title className={styles.cardtitle}>Free Sound Effects</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
    </Container>
  );
}

export default Index;
