// ActionCreators
export function selectBook(book: any) {
  // ここでActionが渡すデータのことをpayloadという
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
