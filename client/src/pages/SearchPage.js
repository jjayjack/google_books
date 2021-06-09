import React, {useState, useEffect} from 'react'
import API from '../utils/API';
// components
import Jumbotron from "../components/Jumbotron/jumbotron"
import { Input, FormBtn } from "../components/Search/Search";
import {List, ListItem} from "../components/Results/Results";
import DeleteBtn from "../components/DeleteBtn/DeleteBtn";

const SearchPage = () => {
    const [books, setBooks] = useState([]);
    const [formObject, setFormObject] = useState({})

    function deleteBook(id) {
        API.deleteBook(id)
          .then(res => mockAPI())
          .catch(err => console.log(err));
      }

    function mockAPI(){
        API.getBooks()
            .then(res=> setBooks(res.data)
            ).catch(err => console.log(err))
    }

    useEffect(() => {
        mockAPI()
    }, [])

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.title && formObject.author) {
            API.saveBook({
                title: formObject.title,
                author: formObject.author,
                synopsis: formObject.synopsis
            })
                .then(res => mockAPI())
                .catch(err => console.log(err));
        }
    };




    return (
        <div>
            <Jumbotron />
            <form>
            <Input 
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
            />
            <Input
                onChange={handleInputChange}
                name="authors"
                placeholder="Author (required)"
            />
            <FormBtn
                disabled={!(formObject.authors && formObject.title)}
                onClick={handleFormSubmit}>
                    Search
                </FormBtn>
            </form>
            {books.length ? (
            <List>
                {books.map(book => {
                    return (
                        <ListItem key={book._id}>
                            <a href={"/books" + book._id}> 
                                {book.title} by {book.authors}
                            </a>
                            <DeleteBtn onClick={() => deleteBook(book._id)}/>
                        </ListItem>
                    )
                })}
                </List>
                ) : (
                    <h3>No results found</h3>
                ) }
            
        </div>
    )
}

export default SearchPage
