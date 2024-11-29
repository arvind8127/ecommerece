
import { Row, Col} from 'react-bootstrap';
import ProductScreen from './ProductScreen';
import React from 'react'
import { products } from '../products'

const Homescreen = () => {
  const Products = products
  return (
    <Row>
       {
         Products.map(product => (
           <Col>
           <ProductScreen product={product} />
           </Col>
         ))
       }
     </Row>
  )
}

export default Homescreen

