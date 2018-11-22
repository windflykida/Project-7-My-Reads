import React from "react";
import {Route} from "react-router-dom";
import {Link} from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";



  class SearchPage extends React.Component {

    // sets the state of SearchPage
	state = {
		query: "",
		searchedBooks: []
	}

  // if we write something in input field we update
	updateQuery = (query) => {
		this.setState({ query: query })
		this.searchResult(query);
	}

	searchResult = (query) => {
    //check if query exist, and if we have we fetch the searchedBooks
		if (query) {
			BooksAPI.search(query).then((searchedBooks) => {
				searchedBooks.error ?
					this.setState({searchedBooks: [] }) :
					this.setState({searchedBooks: searchedBooks});
			})
      // if we don't have query we will have empty query
		}else{
			this.setState({searchedBooks: [] })
		}
	}

	render () {
		return (
			<div className="search-books">
          <div className="search-books-bar">
              <Link
									to="/"
									className="close-search"
							>Close</Link>
                <div className="search-books-input-wrapper">
                  <input
										type="text"
										placeholder="Search by title or author"
										value = {this.state.query}
										onChange = {(event) =>
                      this.updateQuery(event.target.value)}
									/>
                </div>
              </div>

              <div className="search-books-results">
                <ol className="books-grid">
									{

										this.state.searchedBooks.map((newBook) => {
											newBook.shelf = "none";
											this.props.books.map(book => (
                        // after removing letters in a query searchpage should not display books
                        (this.state.searchedBooks.length > 0),
                        //if true set bookshelf for this book
												book.id === newBook.id ?
												newBook.shelf = book.shelf : ""
											));

											return (
												<li key = {newBook.id}>
													<Book
														book={newBook}
														moveBook={this.props.moveBook}
														shelf={newBook.shelf}
													/>
												</li>
											)
										})
									}
								</ol>
              </div>
            </div>
		);
	}
}

export default SearchPage;
