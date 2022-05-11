import React, { useState } from "react";
import axios from "axios";
const ProductForm = (props) => {
  const { product, setProduct } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProduct([...product, res.data]);
        setTitle("");
        setPrice("");
        setDescription("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <p className="p">
        <label> Title</label>
        <br />
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </p>
      <p className="p">
        <label> Price</label>
        <br />
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </p>
      <p className="p">
        <label> Description</label>
        <br />
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </p>
      <input type="submit" className="submit" value="create" />
    </form>
  );
};
export default ProductForm;
