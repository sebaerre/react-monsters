import logo from './logo.svg';
import {CardList} from './components/card-list/card-list.component.jsx'
import React, {Component} from 'react';
import {SearchBox} from './components/search-box/search-box.component.jsx';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state= {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=>this.setState({monsters: users}));
    
  }

searchFieldHandler = (e) => {
  this.setState({searchField: e.target.value});
} 

  render(){
    const filteredMonsters = this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchField));
    return(
      <div className='App'>
      <SearchBox placeholder='Search monsters' onChange={this.searchFieldHandler}/>
      <CardList monsters={filteredMonsters}></CardList>
      </div>

    )
  }

}

export default App;
