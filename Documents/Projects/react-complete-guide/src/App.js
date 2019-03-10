import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons :[
      {id:'ert1',name : 'Nitish',age:30},
      {id:'knk3',name : 'Diksha',age:28}
    ],
    otherState : 'maintains other state',
    showPersons : false
  };

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons :[
  //       {name : newName,age:30},
  //       {name : 'Diksha Adlakha',age:33}
  //     ]
  //   })
  // };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons : persons});
  };

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p=> p.id === id);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    //const person = Object.assign({},this.state.persons[personIndex]);
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons : persons
    })
  };

  toggleChangeHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  render() {
    const style={
      backgroundColor : 'green',
      padding: '8px',
      font:'inherit',
      border:'1px solid blue',
      cursor:'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = ( <div>
        {
           this.state.persons.map((person,currentPersonIndex)=>{
              return <Person
                      name = {person.name}
                      age = {person.age}
                      key={person.id}
                      click = {()=> this.deletePersonHandler(currentPersonIndex)}
                      changed = {(event) => this.nameChangedHandler(event,person.id)}>
                      </Person>
           })
        }
     </div>);

     style.backgroundColor = 'red';
    }

    return (
     
        <div className="App">
        <h1>Hi,I am a react app</h1>
        <p>I am working now !!</p>
        <button style={style} onClick={this.toggleChangeHandler}>Toggle button</button>
        {persons}
      </div>
     
      /* React.createElement('div',{className:'App'},React.createElement('h1',null,'Am i rendered?')) */
    );
  }
}

export default App;
