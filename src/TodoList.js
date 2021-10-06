import React, {Component} from 'react';
import { render } from 'react-dom';

import './style.scss';

function Task(props) {
  return <p>{props.content}</p>
}

class TodoList extends Component {
  constructor() {
    super();

    this.state = { 
      currentTask: "",
      list: [] 
    }

    this.addToList = this.addToList.bind(this);
    this.handleTask = this.handleTask.bind(this)
  }

  addToList() {
    const {list, currentTask} = this.state;
    const newList = [...list, <Task content={currentTask} />];

    this.setState({list: newList});
  }

  handleTask(e) {
    this.setState({currentTask: e.target.value});
  }

  render() {
    const {list, currentTask} = this.state;
    return (
      <>
        <h1>Ma TodoList</h1>
        <input 
          type='text' 
          onChange={this.handleTask} 
          value={currentTask} 
        />
        <button onClick={this.addToList}>Ajouter une tâche</button>
        {list}
      </>
    )
  }
}

render(
  <TodoList />,
  document.getElementById('wrapper')
)