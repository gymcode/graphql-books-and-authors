import React from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks'

const getBookQuery = gql`
    {
        book {
            name
            id
        }
    }
`;

const BookList = (props)=>{
   
    const {loading, error, data }  = useQuery(getBookQuery);
    
    const displayBooks = ()=>{
        
            if(loading) {
                return <p>loading ...</p>
            }
            else {
                return data.book.map((books)=>{
                    return (
                        <div key={books.id}>
                            <li>{books.name}</li>
                        </div>
                    )
                })
            }
    }

    return (
        <div style={{marginLeft: 20}}>
            {displayBooks()}
        </div>
    )
    
    
}

export default BookList;