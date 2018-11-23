import { Book } from '../constants/static_types'

// ActionCreators
export function selectBook(book: Book) {
  // ここでActionが渡すデータのことをpayloadという
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
