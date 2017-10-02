import React, { Component } from 'react';

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

export default TodoList;