import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({items, onItemFormSubmit}) {
  console.log(items)
  const [ formData, setFormData ] = useState(items)

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e)
    const newData = {
      id: uuid(),
      name: e.target.name.value,
      category: e.target.category.value
    } 
    const newList = formData.concat(newData)
    setFormData(newList)
    onItemFormSubmit(newList)
  }
  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
