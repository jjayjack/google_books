import axios from "axios"

export default {
    getBooks: function(){
        return axios.get("/api/books/")
    },
    getBook: function(id) {
        return axios.get("/api/books/" + id);
      },
    saveBook: function(selectedBook){
        return axios.post("/api/books", selectedBook)
    },
    deleteBook: function(id){
        return axios.delete("/api/books/"+ id)
    }
}