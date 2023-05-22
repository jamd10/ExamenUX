import React from 'react';
import { Card } from 'react-bootstrap';

const ReactCard = ({ image, content }) => {
  return (
    <Card className="my-card">
      <Card.Img variant="top" src={image} style={{ width: '100%', height: '200px' }} />
      <Card.Body>
        <Card.Text className="card-content">{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReactCard;
