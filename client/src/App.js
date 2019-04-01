import React, { Component } from 'react';
import './App.css';

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
    // console.log(data)
  }

  // getTodos() {
  //   fetch("http://localhost:9000/api/todos")
  //       .then(res => res.text())
  //       .then(res => console.log(res));
  // }

  componentWillMount() {
    this.getTodos()
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">

        </header>
      </div>
    );
  }
}

export default App;
