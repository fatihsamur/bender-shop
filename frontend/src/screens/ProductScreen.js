import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`/api/products/${match.params.id}`);
      setProduct(res.data);
    };
    fetchProduct();
  }, [match.params.id]);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2> {product.name} </h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price: $ {product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong> {product.price} </strong>
                </Col>
              </Row>
            </ListGroup.Item>

            {!product.countInStock && (
              <ListGroup.Item>
                <Row>
                  <Col>Out of Stock</Col>
                </Row>
              </ListGroup.Item>
            )}

            <ListGroup>
              <Button
                disabled={product.countInStock === 0}
                className="btn-block"
                type="button"
              >
                Add To Card
              </Button>
            </ListGroup>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
