import React from 'react'
import product from './product'
const Img = () => {
  return (
    <img
      src={product["poster-url"]}
      alt={product.name}
      className="img-fluid rounded"
    />)
}

export default Img
