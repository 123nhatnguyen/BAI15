// import BookCreate from "./components/BookCreate";
// import BookList from "./components/BookList"
// import { useState,useEffect } from "react";
// import { createBook} from "./components/api";
// import axios from "axios";
// import './app.css';  
// // import { fetchBook, createBook, updateBook, deleteBook } from "./api";
// const App=() =>{
//    const [books,setBooks]=useState([]);
//     const deleteBook = async (id) => { 
//           const book = await axios.delete(`http://localhost:3001/books/${id}`);
//           const resp= book.data;
//           let tams=[];
//           books.forEach((item)=> {
//             if(item.id !== book.id) tams.push(book);
//           });
//           setBooks(tams);
//       };
//    const fetchBook=async()=>{
//          const response = await axios.get("http://localhost:3001/books");
//          setBooks(response.data);
//          console.log(response.data);
//       };
      
//    const createBook=async(term)=>{
//          const response = await axios.post("http://localhost:3001/books",term);
//          if(books){
//              setBooks([...books,response.data]); // cái này sẽ kh cần loat lại khi kích thì hắn sẽ nhảy vào cái mới luôn
//          }
//       };
//       const updateBook=async(id ,term)=>{
//          const response = await axios.put(`http://localhost:3001/books/${id}`,term);
//          if(response.data){
//                       setBooks(
//              books.map((item) => item.id === response.id?response: item)
//          );

//          }
//       }
//    //    const updateBook = async (id, term) => {
//    //       console.log({ id, term });
//    //       const book = await updateBook(id, term);
//    //       setBooks(
//    //           books.map((item) => item.id === book.id? book: item)
//    //       );
//    //   };
 
      

//    useEffect(async()=>{
//       // const tams = await fetchBook();
//       // console.log(tams);
//       // setBooks(tams);
//       fetchBook();
//    },[]);
//     return(
//      <div className="wrapper">
//       <div className="container">  
//        <h1>Reding Book</h1>
//        <div>
//              <BookList books={books} onDelete={deleteBook} onEdit={updateBook}/>
//        </div>
//        </div>
//        <BookCreate onCreate={createBook}/>
//     </div>
//     );
// };
//  export default App;


import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState, useEffect } from "react";
import axios from "axios";
// import { fetchBooks, createBook, updateBook, deleteBook } from "./api";
import{fetchBooks,createBook,updateBook,deleteBook} from"./components/api";
const App = () => {
    const [books, setBooks] = useState([]);
    
    const handleDelete = async (id) => {
        const book = await deleteBook(id);
        console.log(book);
        setBooks(books.filter((item) => item.id !== book.id));
    }

    const handleCreate = async(term) => {
        const book = await createBook(term);
        if (book) setBooks([...books, book]);
    };

    const handleUpdate = async (id, term) => {
        console.log({ id, term });
        const book = await updateBook(id, term);
        setBooks(
            books.map((item) => item.id === book.id? book: item)
        );
    };
    
    useEffect(async () => {
        const tams = await fetchBooks();
        console.log(tams);
        setBooks(tams);
    }, []);
    
    return (
        <div className="wrapper">
            <div className="container">
                <h1 className="text">Reading Book</h1>
                <div className="window">
                    <BookList books={books} onDelete={handleDelete} onEdit={handleUpdate} />
                </div>
            </div>
            <BookCreate onCreate={handleCreate} />
        </div>
    );
};

export default App;