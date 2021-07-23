import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ searchItems, setSearchItems ] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchItem(value) {
    console.log(value)
    const searchList= items.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
    setSearchItems(searchList)
  }
  
  function handleItemFormSubmit(value) {
    setSearchItems(value)   
  }
  //1. keep an array of display items in state
  //2. display what's been searched

  const itemsToDisplay = searchItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} items={items}/>
      <Filter onSearchChange={handleSearchItem} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
          {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      
      </ul>
    </div>
  );
}

export default ShoppingList;
