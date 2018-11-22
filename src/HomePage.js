import React from "react";
import Book from "./Book";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";


  class HomePage extends React.Component {

    render() {
      let descriptions = [
        {
          name: "Currently Reading",
          id: "currentlyReading",
        },
        {
          name: "Want to Read",
          id: "wantToRead",
        },
        {
          name: "Read",
          id: "read",
        },
      ];

      return (

        <div>
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              {descriptions.map((shelf) =>
                <div key = {shelf.id}>
                  <BookShelf
                      shelf = {shelf.id}
                      currentShelf = {shelf.name}
                      books = {this.props.books}
                      moveBook = {this.props.moveBook}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="open-search">
            <Link
                to="/search"
            >Add a book</Link>
          </div>
          </div>
        );
      }
    }

export default HomePage;
