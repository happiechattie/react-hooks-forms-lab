import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("")

  function makeItem(e){
    e.preventDefault();
    setName(e.target.querySelector('input').value);
    console.log(name);
    setCategory(e.target.querySelector('select').value);
    const newItem = {id: uuid(), name: name, category: category}
    props.onSubmitForm(newItem);
  }

  return (
    <form className="NewItem" onSubmit={makeItem}>
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
