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
    console.log(value);
  }

  const arrayToDisplay = filteredByCategory.filter(item => {
    if (search === '') return true;
    else {return (item.name.includes(search))}
  })

  return (
    <div className="ShoppingList">
      <ItemForm onSubmitForm={props.onSubmitForm}/>
      <Filter search={search} onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {arrayToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
