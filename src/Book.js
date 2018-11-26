import React from "react";




  class Book extends React.Component {
    // the default value with be none
    state = {
      value:"none"
    }

    // first step - check if the book has a cover
    //placeholder.com/
    thumbnailImage = () => {
      // Cover must be defined - placeholder
      let placeholder = "";
    this.props.book.imageLinks ?
    placeholder = this.props.book.imageLinks.thumbnail : placeholder ="http://via.placeholder.com/128x193/000000/FFFFFF/?text=No+Image";
  return placeholder;
}

    render() {

      return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.thumbnailImage()}")
              `}}>
              </div>
          <div className="book-shelf-changer">
            <select
            onChange={(event) => this.props.moveBook(
              this.props.book, event.target.value
            )}
            value={this.props.shelf ? this.props.shelf : this.state.value}
            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>

          </div>
        </div>
        {/* this a component and title or author of the book don't change so we use props*/}
        <div className="book-title">{this.props.book.currentShelf}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
      )
    }
  }
 export default Book;
