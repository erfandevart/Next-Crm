import React from "react";
import ItemList from "./ItemList";
import FormInput from "./FormInput";

function Form({ setForm, form }) {
  const changeHandler = (e) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <FormInput
        name="name"
        label="Name"
        type="text"
        value={form.name}
        onChange={changeHandler}
      />
      <FormInput
        name="lastName"
        label="Last Name"
        type="text"
        value={form.lastName}
        onChange={changeHandler}
      />

      <FormInput
        name="email"
        label="Email"
        type="text"
        value={form.email}
        onChange={changeHandler}
      />
      <FormInput
        name="phone"
        label="Phone"
        type="tel"
        value={form.phone}
        onChange={changeHandler}
      />

      <FormInput
        name="address"
        label="Address"
        type="text"
        value={form.address}
        onChange={changeHandler}
      />

      <FormInput
        name="postalCode"
        label="Postal Code"
        type="text"
        value={form.postalCode}
        onChange={changeHandler}
      />

      <FormInput
        name="date"
        label="Date"
        type="Date"
        value={form.date}
        onChange={changeHandler}
      />

      <ItemList setForm={setForm} form={form} />
    </div>
  );
}

export default Form;
