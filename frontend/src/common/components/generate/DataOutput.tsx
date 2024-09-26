import React from 'react'

function DataOutput({ index, product, price, quantity }) {
  return (
    <div>
        <div>{index}</div>
        <div>{product}</div>
        <div>{price}</div>
        <div>{quantity}</div>
    </div>
  )
}

export default DataOutput