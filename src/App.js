import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {

  state = {
    persons: [
      {id: "sgerg",name: 'Bob', age: 28},
      {id: "sger1",name: 'Bill', age: 29},
      {id: "sger2",name: 'Betsy', age: 18}
    ],
    showPersons: false
  }
// Function that allows you to change the name of the person from input box
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>
      {return p.id === id;}
    );

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons })
  }
// Function that allows you to delete a person on click
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
// Function that allows you to toggle persons
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style =
    {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
      <div>
      {this.state.persons.map((person, index) => {
        return <Person name={person.name}
        age={person.age}
        click={() => this.deletePersonHandler(index)}
        key={person.id}
        changed={(event) => this.nameChangedHandler(event, person.id)}
        />

        }
      )
      }
      </div>

      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    return (
      <div className = "App" >
      <h1> Hi, I'm a React App </h1>
      <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
      {persons}
      </div >
    );
  }
}

export default Radium(App);
