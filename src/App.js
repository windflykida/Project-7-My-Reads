import React from "react";
import { Route } from "react-router-dom";
import Book from "./Book";
import BookShelf from "./BookShelf";
import * as BooksAPI from "./BooksAPI";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import './App.css';



class BooksApp extends React.Component {

state = {
  books: []
}

    componentDidMount() {
        BooksAPI.getAll().then(books => {
          this.setState({books : books})
        })
      }

    moveBook = (book, shelf) => {
      BooksAPI.update(book,shelf);
      BooksAPI.getAll().then((books) => {
        this.setState({books : books})
      }
    )
  }


 render() {

   console.log(this.state.books);

   return (
     <div className="app">

        <Route exact path="/"
         render={() => (
          <HomePage
            books={this.state.books}
            moveBook={this.moveBook}
          />
      )}/>

        <Route exact path="/search"
         render={() => (
          <SearchPage
            moveBook={this.moveBook}
            books={this.state.books}
          />
      )}
      />
    </div>
   )
 }
}

export default BooksApp;
