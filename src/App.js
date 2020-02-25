import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';


//components 
import BookList from './component/BookList';
import AddBook from './component/addBook';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App (props){
    return(
     <ApolloProvider client={client}>
        <div className="main">
            <h1>Book list</h1>
            <BookList/>
            <AddBook/>
        </div>
     </ApolloProvider>
    )
}

export default App

