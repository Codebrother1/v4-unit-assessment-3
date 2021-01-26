import { Component } from 'react';
import './App.css';
import BookList from './Components/BookList';
import Header from "./Components/Header"
import Shelf from './Components/Shelf';

class App extends Component() {
  render(){
  return (
    <div className="App">
   <Header/>
   <BookList/>
   <Shelf/>
    </div>
  );
}
}
  

export default App;
