import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class TodoApp extends Component {
  constructor() {
    super();
    this.state = { items: [], text: '' };
  }

  render() {
    return (
      <div>
        <h3>TO DO LIST</h3>
        <div className='todo-list'>
          <TodoList items={this.state.items} clickDeleteItem={this.deleteItem} clickCompleteTask={this.completeTask} />
          <form className='todo-form' onSubmit={this.handleSubmit}>
            <input placeholder=' Enter task' onChange={this.handleChange} value={this.state.text} />
            <button>ADD</button>
          </form>
        </div>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.children[0].value) {
      var newItem = {
        text: this.state.text,
        id: Date.now(),
        status: false
      };
      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }
  }

  deleteItem = (e) => {
    let newIt = this.state.items.filter((item) => {
      return Number(item.id) !== Number(e.target.parentNode.id)
    })
    this.setState({ items: newIt });
  };

  completeTask = (e) => {
    if (e.target.tagName === 'LABEL') {
      let newItemsList = this.state.items.map((item) => {
        if (Number(item.id) === Number(e.target.parentNode.id)) {
          item.status = !item.status;
        }
        return item
      })
      this.setState({ items: newItemsList })
    }
  }
}

export default TodoApp;
