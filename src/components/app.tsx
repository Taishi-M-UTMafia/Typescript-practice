import * as React from 'react';
import { AppComponent } from '../constants/static_types'
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export const App: AppComponent = () => (
  <div>
    <BookList />
    <BookDetail />
  </div>
)
