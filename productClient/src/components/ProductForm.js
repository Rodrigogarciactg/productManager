import React, { useState } from "react";
import axios from "axios";
const ProductForm = (props) => {
  const { product, setProduct } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [reasons, setReasons] = useState("");
  // const [reason2, setReason2] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
        reasons,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProduct([...product, res.data]);
        setTitle("");
        setPrice("");
        setDescription("");
        setReasons("");
        // setReason2("");
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
      <p className="reasons">
        <label> Reasons</label>
        <br />
        <input
          type="text"
          onChange={(e) => setReasons(e.target.value)}
          value={reasons}
        />
        <br />
        <input
          type="text"
          onChange={(e) => setReasons(e.target.value)}
          value={reasons}
        />
      </p>
      <input type="submit" className="btn1" value="create" />
    </form>
  );
};
export default ProductForm;
