import React from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';

const getAuthorQuery = gql`
    {
        author{
            name
            id
        }
    }
`;

const AddBook = ()=>{

    const {loading, data} = useQuery(getAuthorQuery);
    const getAuthor = ()=>{
        if(loading) {
            return <option disabled>loading authors...</option>
        } else{
            return data.author.map((authors)=>{
                return (
                <option key={authors.id}>{authors.name}</option>
                )
            })
        }
    }

    return(
        <div style={{marginLeft: 30}}>
            <form>
                <div className="field">
                    <label>Book Name: </label>
                    <input type="text" />
                </div>

                <div className="field">
                    <label>Genre: </label>
                    <input type="text" />
                </div>

                <div className="field">
                    <label>Author: </label>
                    <select>
                        <option>Select Author</option>
                       {getAuthor()}
                    </select>
                </div>

                <button>+</button>
            </form>
        </div>
    )
}

export default AddBook;