import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

  const [newFood, setNewFood] = useState({});

  function changeItem(e){
    const newItem = {id: uuid(), name: e.target.querySelector('input').value, category: e.target.querySelector('select').value}
    setNewFood(newItem);
    return newItem;
  }

  function makeItem(e){
    e.preventDefault();
    Promise.resolve(newFood).then(() => changeItem(e)).then((newItem) => {
      console.log(newItem);
      props.onItemFormSubmit(newItem);
    })
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
