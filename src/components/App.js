import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [task, setTask] = useState (TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [categoryButton, setCategoryButton] = useState('All')


  function newItemsList(newItem){
    setTask([...task, newItem])
  }


  function deleteItem(deletedItem){
    setTask(task.filter((items)=>items.text !== deletedItem))
  }


  const itemDisplayed = task
  .filter((item)=>{if(categoryButton=== 'All')
  return true
  return categoryButton === item.category
})

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories ={categories}
      onButton = {categoryButton}
      buttonSelect = {setCategoryButton}
      />
      <NewTaskForm 
      onTaskFormSubmit = {newItemsList}
      categories = {categories}
      />
      <TaskList
      deletesItem = {deleteItem}
      tasks = {itemDisplayed}
      />
    </div>
  );
}

export default App;
