
import { Row, Col} from 'react-bootstrap';
import ProductScreen from './ProductScreen';
import React from 'react'
import products from '../products';

const Homescreen = () => {
  const Products = products
  return (
    <>
    <Row>
       {products.map((product) => (
           <Col  key={product._id} md={3}>
           <ProductScreen product={product} />
           {/* <h3>product{product.name}</h3> */}
           </Col>
         ))
       }
     </Row>
     </>
  )
}

export default Homescreen;
