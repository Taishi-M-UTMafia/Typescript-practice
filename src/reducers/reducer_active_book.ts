import { Book } from '../constants/static_types'

// stateとactionを引数に持つ
// stateはapplication全体のstateではなく、reducer内限定のもの
// TODO: Actionの型付け
export default function(state: Book | null = null, action: any) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state
}
