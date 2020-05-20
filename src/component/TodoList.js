import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props;
        // console.log(this.props);
        
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {items.map((item) => {
          return <TodoItem
            key={item.id}
            title={item.title}
            //if we need to pass props with argument we need to do arrow function and 
            // return the props with argument it called -> implicitly return
            //we pass this to TodoItems
            handleDelete={() => handleDelete(item.id)}
            handleEdit={()=> handleEdit(item.id)}
          />;
        })}

        <button
          type="submit"
          className="btn btn-danger
            btn-block text-capitalize mt-5"
            onClick={clearList}
            >               
          Clear list
        </button>
      </ul>
    );
  }
}

export default TodoList;
