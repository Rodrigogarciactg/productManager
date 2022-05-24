import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const ProductList = (props) => {
  const { removeFromDom, product, setProduct } = props;
  const deleteProduct = (productID) => {
    axios
      .delete("http://localhost:8000/api/products/" + productID)
      .then((res) => {
        removeFromDom(productID);
      })
      .catch((err) => console.log(err));
  };
  console.log(product);
  return (
    <div className="product">
      {product.map((product, index) => {
        return (
          <div key={index}>
            <Link className="tabs" to={"/products/" + product._id}>
              {product.title}, {product.price}, {product.description},
              {product.reasons}
            </Link>
            <div className="btnContainer">
              <Link className="btn" to={"/products/edit/" + product._id}>
                Edit
              </Link>
              <button
                className="btn"
                onClick={(e) => {
                  deleteProduct(product._id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
