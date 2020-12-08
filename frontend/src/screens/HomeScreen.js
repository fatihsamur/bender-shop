import React, { useEffect } from 'react';
import Product from '../components/Product';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { products, loading, error } = productList;

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Elements</h1>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger" text={error}></Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
