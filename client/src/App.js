import React, { Component } from 'react';
import './App.css';
import {Todo} from './components'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  async getTodos() {
    const res = await fetch('http://localhost:9000/api/todos')
    const data = await res.json()
    this.setState({
      todos: data
    })
  }

  componentWillMount() {
    this.getTodos()
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <Todo data={this.state.data}></Todo>
        </header>
      </div>
    );
  }
}

export default App;
