import { Book } from '../constants/static_types'
import { AnyAction } from 'redux';

// stateとactionを引数に持つ
// stateはapplication全体のstateではなく、reducer内限定のもの
// TODO: Actionの型付け
export default function(state: Book | null = null, action: AnyAction) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state
}
