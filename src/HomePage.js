import React from "react";
import Book from "./Book";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

//https://www.fullstackreact.com/30-days-of-react/day-13/
//https://www.fullstackreact.com/30-days-of-react/day-16/
// Lesson 2 from Composing with Components = Rendering UI with React - Udacity

// we map value from this array - because there are only 3 shelves, and each shelve is it value ( that's why i did it previously)
var  description = [
    {name: "Currently Reading",id: "currentlyReading",},
    {name: "Want to Read", id: "wantToRead",},
    {name: "Read", id: "read",},
  ];

  class HomePage extends React.Component {

    state = {
      shelf: "",
    }

    render() {

      return (

        <div>
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
          {description.map((shelf) => {
            return (
             <div key = {shelf.id}>
                <BookShelf
                    shelf = {shelf.id}
                    currentShelf = {shelf.name}
                    books = {this.props.books}
                    moveBook = {this.props.moveBook}
                />
              </div>
              )
          })}

            </div>
          </div>

          {/* on the bottom of the page is green button - when we click it switch us to the search page,
            so it must be on HomePage.*/}
          
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
