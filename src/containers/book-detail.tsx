import * as React from 'react';
import { connect } from 'react-redux';
import { Book } from '../constants/static_types'

interface Props {
  activeBook: Book,
}

const BookDetail: React.SFC<Props> = ({ activeBook }) => {
  if (!activeBook) return <div>Select a activeBook to get started</div>

  return(
    <div>
      <h3>Details for:</h3>
      <div>Title: {activeBook.title}</div>
      <div>Pages: {activeBook.pages}</div>
    </div>
  );
}

function mapStateToProps(state: any) {
  return {
    activeBook: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
