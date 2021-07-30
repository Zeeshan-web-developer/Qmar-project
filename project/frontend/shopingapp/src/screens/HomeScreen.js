import React, { useState, useEffect } from "react";
import axios from "axios";
// import products from '../products'
import { Row, Col } from "react-bootstrap";
import Productscreen from "./Productscreen";
const Homescreen = () => {
  const [products, setProducts] = useState([]);
  try {
    useEffect(() => {
      const fetchProducts = async () => {
        const { data } = await axios.get("http://localhost:8080/products");
        setProducts(data);
      };
      fetchProducts();
    }, []);
  } catch (error) {
    console.log(`your error is ${error}`);
  }

  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} md={3}>
            <Productscreen product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Homescreen;
