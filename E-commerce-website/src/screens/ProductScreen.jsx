import React from 'react'
import { Card } from 'react-bootstrap';


const ProductScreen = ({ product }) => {
  return (
    <>
<Card className="my-3, py-3 rounded">
<a href={ '/product/${products._id}'}>
<Card.Img src={product.image} variant='top'/>

</a>
<Card.Body>
  <a href={'/product/${products._id}'}>
  <Card.Title as ="div" > 
<strong>{product.name}</strong>
  </Card.Title>

  </a>
</Card.Body>


</Card>
    </>
  )
}

export default ProductScreen;