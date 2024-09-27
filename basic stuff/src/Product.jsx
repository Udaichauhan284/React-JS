import React from "react";
function Product({name, data}){
  return (
    <>
    <h4 color="white">{name}</h4>
    <p color="blue">{data.color}</p>
    <p color="blue">{data.size}</p>
    </>
  )
}
export default Product;