import { BookAction } from '../actions/index'
import { ActiveBookState } from '../constants/static_types'

// stateとactionを引数に持つ
// stateはapplication全体のstateではなく、reducer内限定のもの
// TODO: Actionの型付け
export default function(state: ActiveBookState = null, action: BookAction): ActiveBookState {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state
}
