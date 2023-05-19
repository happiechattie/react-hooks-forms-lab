import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    
    else
      return (item.category === selectedCategory);
  });

  const itemsToDisplaySearch = itemsToDisplay.filter(item => {
    if (search === '') return true;

    else return (item.name.slice(0, search.length) === search)
  })

  function handleSearchChange(e) {
    console.log(e.target.value);
    setSearch(e.target.value);
  }

  const [itemName, setName] = useState("");
  const [itemCategory, setCategory] = useState("All");
  const [submittedData, setSubmittedData] = useState([]);

  function handleNewName(e){
    setName(itemName => {return e.target.querySelector('input').value});
  }

  function handleNewItemCategory(e){
    setCategory(itemCategory => {return e.target.querySelector('select').value});
  }

  function handleSubmit(e){
    e.preventDefault();
    const newItem = {id: uuid(), name: itemName, category: itemCategory};
    const dataArray = [...submittedData, newItem];
    setSubmittedData(dataArray);
    setName("");
    setCategory("");
  }

  return (
    <div className="ShoppingList">
      <ItemForm onHandleSubmit={handleSubmit} onHandleNewName={handleNewName} onHandleNewItemCategory={handleNewItemCategory}/>
      <Filter onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplaySearch.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
