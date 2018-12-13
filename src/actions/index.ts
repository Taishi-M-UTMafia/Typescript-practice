import { Book } from '../constants/static_types'

export interface SelectBook {
  type: string,
  payload: Book
}

// |でactionを全て羅列していく、reducerでimportして使う
export type BookAction = SelectBook

// ActionCreators
export function selectBook(book: Book): SelectBook {
  // ここでActionが渡すデータのことをpayloadという
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
