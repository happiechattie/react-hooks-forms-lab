import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList(props) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const filteredByCategory = props.items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function handleSearchChange(e) {
    const value = e.target.value;
    setSearch(value);
  }

  const arrayToDisplay = filteredByCategory.filter(item => {
    if (search === '') return true;
    else return (item.name.slice(0, search.length) === search)
  })

  function handleSubmit(e){
    e.preventDefault();

    const name = e.target.querySelector('input').value;

    const category = e.target.querySelector('select').value;

    props.items.push(props.addItem(name, category));

    e.target.reset();
  }

  return (
    <div className="ShoppingList">
      <ItemForm onSubmitForm={handleSubmit}/>
      <Filter onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {arrayToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
