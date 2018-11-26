import React from "react";
import Book from "./Book";
// this is why I used map() function and not forEach()
// First - it generate new array based on existing array
// so I have books on shelf, and I want to add/ remove one to another BookShelf
// I will create new array based on the last one. So MAP() is the best way

// https://codeburst.io/array-methods-explained-filter-vs-map-vs-reduce-vs-foreach-ea3127c6d319

  class BookShelf extends React.Component {

    render() {

      let currentBook = this.props.shelf;


      return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.currentShelf}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">

              {this.props.books.filter((book) => (
                book.shelf === currentBook)
                // we create new array which include searched booked
              ).map((book) => {
                return (
                  <li key={book.id}>
                  < Book
                      book={book}
                      moveBook={this.props.moveBook}
                      shelf={book.shelf}
                      currentShelf = {book.name}
                  />
                  </li>
                )
              }
            )
          }
          </ol>
        </div>
      </div>
        )
    }
  }


 export default BookShelf;
