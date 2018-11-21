// stateとactionを引数に持つ
// stateはapplication全体のstateではなく、reducer内限定のもの
export default function(state: any = null, action: any) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state
}
