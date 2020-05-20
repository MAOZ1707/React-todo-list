import React, { Component } from 'react';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from "uuid";



class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    
    this.setState({
      item:e.target.value
    })
  }

  handleSubmit = (e) => {
    //prevent default method dont refresh the whole page
    e.preventDefault();

    //when we click on submit we want to grab the values
    const newItem = {
      id: this.state.id,
      title: this.state.item,      
    };
    

    // in class we can mutate the state 
    const updatedItems = [...this.state.items, newItem];
    //now we want to update the state after click
    this.setState({
      // update the item
      items: updatedItems, // we update the items with the update
      //clear the input
      item: '',
      id: uuid(),
      editItem: false,
    });
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    const filteredItem = this.state.items.filter(item =>
      item.id !== id);
  
    
    
    // we want to update the state
    this.setState({
      items: filteredItem
    });
  };

  handleEdit = id => {
    const filteredItem = this.state.items.filter(item =>
      item.id !== id);    
    
    const selectedItem = this.state.items.find(item => item.id === id)
    console.log(selectedItem.title);
    
    this.setState({
      items: filteredItem,
      //in default the input is empty string -> item: "",
      //so for edit we grab the selected items and back to the input field
      item: selectedItem.title,
      // this is really important we want to edit the same item
      // with the same id so we need to pass the id 
      id: id,
      //here we change to true its help us with the conditional statements
      editItem: true,


    })
  }



  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
              />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete} 
              handleEdit={this.handleEdit}
              
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
