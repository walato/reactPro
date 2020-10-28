import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  /* state={
    persons:[
      {name:'walatoo',age:'33'},
      {name:'linda', age:'32'},
      {name:'mary',age:'44'}
    ]
  }
  render() {
    return (
      <div className="App">
      <h1>hi , I'm React app!</h1>
      <button>change a name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name}age={this.state.persons[1].age}>my hoppies are Swimming anp chess</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi,I\'m Walato' ));
  } */

state={
  persons:[
    {name:'walato', age:22},
    {name:'fatima', age:22},
    {name:'lina', age:11}
  ],
  randomProp: 'jfhah'
}

exchangeState=()=>{
  this.setState({
    persons:[
      {name:'walato Khali', age:22},
      {name:'Nour', age:22},
      {name:'lina', age:11}
    ]
  })
}

  render() {
    return (
      <div className='App'>
        <h1>hi world!!!!</h1>
        <button onClick={this.exchangeState}>click to change</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        
      </div>
    );}

}

export default App;
