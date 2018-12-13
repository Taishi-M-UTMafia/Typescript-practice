import * as React from 'react';
import { connect } from 'react-redux'; //{}で囲むと、ライブラリの一部をインポート
import { Book, Books } from '../constants/static_types'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

interface Props {
  books: Books,
  selectBook: (book: Book) => void,
}

// export default つけない(ただのcomponentではなくcontainerだから)
class BookList extends React.Component<Props, {}> {
  renderList(): JSX.Element[] {
    return this.props.books.map((book: Book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'
        >
          {book.title}
        </li>
      );
    });
  }

  render(): JSX.Element {
    return(
      <ul className='list-group col-sm-4'>
        { this.renderList() }
      </ul>
    );
  }
}

// ここでreturnされたものはBookListclass内でpropsとして扱われる.ReactとReduxの接着剤
const mapStateToProps = ({ books }: any) => (
  { books }
)

// selectBookがpropsとして使えるようになる
function mapDispatchToProps(dispatch: any) {
  // ActionのselectBookが呼ばれるとreducerに結果が渡される
  return bindActionCreators({ selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
