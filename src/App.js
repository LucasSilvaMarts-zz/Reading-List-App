import React from 'react';
import NewBookForm from './Components/BookForm';
import BookList from './Components/BookList';
import Nav from './Components/Nav';
import BookContextProvider from './Context/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Nav />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
