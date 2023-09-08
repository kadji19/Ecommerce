import React from "react";
import { useCart } from "react-use-cart";

export default function Product(props) {
  const { addItem } = useCart()
    const { name, url, price, description, item } = props;

    const addProducts = () =>{
      addItem(item)
    }
  return (
    <div className="card">
      <img className="product--image" src={url} alt={name} />
      <h2>{name}</h2>
      <p className="price">$ {price}</p>
      <p>{description}</p>
      <p>
        <button onClick={addProducts}>Add to Cart</button>
      </p>
    </div>
  );
}