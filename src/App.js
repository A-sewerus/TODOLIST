import React, { Component } from 'react';
import './App.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = { items: [], text: '' };
  }

  render() {
    return (
      <div>
        <h3>TO DO LIST</h3>
        <div className={'todo-list'}>
          <TodoList items={this.state.items} clickAction={this.deleteItem} />
          <form className={'todo-form'} onSubmit={this.handleSubmit}>
            <input placeholder={' Enter task'} onChange={this.handleChange} value={this.state.text} />
            <button>ADD</button>
          </form>
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (e.target.children[0].value) {
      var newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));
    }
  }

  deleteItem(e) {
    let i = 0;
    let newIt = this.state.items
    newIt.forEach((item) => {
      if (+item.id === +e.target.parentNode.id) {
        newIt.splice(i, 1);
        this.setState({ items: newIt });
      };
      i++;
    })

  };
}

class TodoList extends Component {
  render() {
    return (
      <ul onClick={this.completeTask}>
        {this.props.items.map((item, i) => (
          <li id={item.id} key={item.id} >
            <label className={'task'}>{item.text}</label>
            <div className={'delete'} onClick={this.props.clickAction}></div>
          </li>
        ))}
      </ul>
    );
  }
  completeTask(e) {
    if (e.target.tagName === 'LABEL') e.target.classList.toggle('completed');
  }
}

export default TodoApp;
