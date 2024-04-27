// import React from 'react'
import "./bookshow.css";
import { useContext, useState } from 'react';
import BookEdit from "./BookEdit";
import BookContext from "../context/book";

const BookShow = ({book}) => {
    const {count,incrementCount,onEdit,onDelete}=useContext(BookContext);
    // console.log(book);
    const image=`https://picsum.photos/seed/${book.id}/200/300`;
    const [isEdit,setIsEdit]= useState(false);
    const handleEdit = (id, term) => {  //
        onEdit(id, term);
        setIsEdit(false);
    };
    //  const {count,incrementCount}=useContext(BookContext);
    
  return (
   <div className='item'>   
    {count}            
    <button onClick={incrementCount}>tang count</button>                                        
    <div className='image'>
       <img src={image} alt="" />
    </div>
    {/* {isEdit && ( */}
        <>
    <h2>{book.title}</h2>
    <p>{book.des}</p>
    </>
    {/* )}   */}
    {isEdit && <BookEdit book={book} onEdit={handleEdit} />}
    {
        !isEdit && (    
            <>
    <button onClick={() => onDelete(book.id)}> Delete  </button>
    <button onClick={() => setIsEdit(!isEdit)}> Edit    </button>
    </>
  )}
 </div>
  );
};

export default BookShow;