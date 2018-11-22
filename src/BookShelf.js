import React from "react";
import Book from "./Book";


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
              ).map((book => (
                <li key={book.id}>
                < Book
                    book={book}
                    moveBook={this.props.moveBook}
                />
                </li>
              )
            ))
          }
          </ol>
        </div>
      </div>
        )

    }
  }


 export default BookShelf;
