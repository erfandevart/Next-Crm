import React from "react";
import FormInput from "./FormInput";

function ItemList({ setForm, form }) {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
    console.log(products);
  };

  const changeHandler = (e, index) => {
    const { name, value } = e.target;

    const newProducts = [...products];
    newProducts[index][name] = value;
    setForm({ ...form, products: newProducts });
  };
  const deleteHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm({ ...form, products: newProducts });
  };

  return (
    <div className="item-list">
      <p>Purchased products</p>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          product={product}
          changeHandler={(e) => changeHandler(e, index)}
          deleteHandler={() => deleteHandler(index)}
        />
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
}

export default ItemList;

function ProductItem({ product, index, changeHandler, deleteHandler }) {
  return (
    <div className="form-input__list">
      <FormInput
        name="name"
        label="Product Name"
        type="text"
        value={product.name}
        onChange={changeHandler}
      />
      <div>
        <FormInput
          name="price"
          label="Price"
          type="text"
          value={product.price}
          onChange={changeHandler}
        />
        <FormInput
          name="qty"
          label="Qty"
          type="number"
          value={product.qty}
          onChange={changeHandler}
        />
      </div>
      <button onClick={deleteHandler}>Remove</button>
    </div>
  );
}
