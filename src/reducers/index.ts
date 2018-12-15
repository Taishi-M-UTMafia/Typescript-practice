import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer,
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
