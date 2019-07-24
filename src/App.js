import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {Searchbox} from './components/searchbox/search-box.component';


class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchfield: ""
    };
    this.handleclick2 = this.handleclick1.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleclick1 (){
      console.log('button1 clicked');
  }

  handleclick3 = ()=> {
    console.log('button 3 clicked');
  }
    render(){
      const { monsters, searchfield } = this.state;
      const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchfield.toLowerCase()))

      return(
      
        <div className="App">
          <button onClick={this.handleclick1()}>click1</button>
          <button onClick={this.handleclick1}>click2</button>
          <button onClick={this.handleclick2}>click3</button>
          <button onClick={this.handleclick3}>click4</button>

            <Searchbox 
            placeholder="Search monster" 
            handleChange={e => this.setState({searchfield: e.target.value})}
            />
            <CardList monsters={filteredMonsters}/>
        </div>
      )
    }
}

export default App;
