import React, { Component } from 'react';

class TodoList extends Component {
        render() {
                return (
                        <ul onClick={this.props.clickCompleteTask}>
                                {this.props.items.map(item => (
                                        <li id={item.id} key={item.id} >
                                                <label className={item.status ? 'completed' : null}>{item.text}</label>
                                                <div className='delete' onClick={this.props.clickDeleteItem}></div>
                                        </li>
                                ))}
                        </ul>
                );
        }
}

export default TodoList;