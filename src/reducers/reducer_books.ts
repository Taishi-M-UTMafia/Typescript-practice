type BookList = {
  title: string,
  pages: number
}

// stateはここの関数で生み出される
export default function(): BookList[] {
  return [
    { title: 'Javascript', pages: 101},
    { title: 'Harry Potter', pages: 39},
    { title: 'The Dark Tower', pages: 50},
    { title: 'Eloquent Ruby', pages: 10}
  ]
}
