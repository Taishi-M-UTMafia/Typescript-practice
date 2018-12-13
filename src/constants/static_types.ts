// Variables
export type Book = {
    title: string,
    pages: number
}

export type Books = Book[]

// Functional Components
export type AppComponent = () => JSX.Element

// State(in reducer) type
export type ActiveBookState = Book | null