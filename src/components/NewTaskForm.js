import React, {useState} from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {

    const [newItems, setNewItems] = useState({ text:'', category: 'Code'})

  function fields(e){
    const{name,value} = e.target
    setNewItems ({...newItems, [name]:value})
  }

  return (
    <form 
    onSubmit = {(e)=>{e.preventDefault()
      onTaskFormSubmit(newItems)}}
    className="new-task-form"
    >
      <label>
        Details
        <input 
        value = {newItems.text}
        onChange = {fields}
        type="text" 
        name="text" 
        />
      </label>
      <label>
        Category
        <select 
        value = {newItems.text}
        onChange = {fields}
        name="category">
          {/* render <option> elements for each category here */}
          {categories.map((category, index) => (<option key = {index}> {category}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
