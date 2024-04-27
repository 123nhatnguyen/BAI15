import { useState,useContext } from "react";
import "./bookcreate.css" 
import BookContext from "../context/book";
const BookCreate=()=>{
  const [title,setTitle]=useState("title");
  const [des,setDesc]=useState("Description"); 
  const { onCreate}=useContext(BookContext);
     const handleChangeTitle=(e)=>{
      setTitle(e.target.value);
     };
     const handleChangeDes=(e)=>{
      setDesc(e.target.value);
     };
     const handleSubmit=(e)=>{
        e.preventDefault();
        onCreate({
         title,
         des,
        });
     };
  return (
    <div className="form-create"> 
      <h3>Add a book </h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Title</label>
          <input onChange={handleChangeTitle}type="text"id="title" name="title"/>
          <input  onChange={handleChangeDes}type="text"id="des" name="des"/>
          <input type="submit" value="Create!" />
        </div>
      </form>
    </div>
  );

};
export default BookCreate;