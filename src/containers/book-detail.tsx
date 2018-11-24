import * as React from 'react';
import { connect } from 'react-redux';
import { Book } from '../constants/static_types'

interface Props {
  book: Book,
}

class BookDetail extends React.Component<Props, {}> {
  render(): JSX.Element {
    const { book } = this.props
    if(!book) {
      return <div>Select a book to get started</div>
    }

    return(
      <div>
        <h3>Details for:</h3>
        <div>Title: {book.title}</div>
        <div>Pages: {book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
