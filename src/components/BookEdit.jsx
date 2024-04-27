import { useState,useContext} from "react";
import BookContext from "../context/book";
export const BookEdit = ({book}) => {
    const [title,setTitle]=useState(book.title);
    const [originalTitle] = useState(book.title);
  const [des,setDesc]=useState(book.des); 
     const handleChangeTitle=(e)=>{
      setTitle(e.target.value);
     };
     const handleChangeDes=(e)=>{
      setDesc(e.target.value);
     };
      const {onEdit}=useContext(BookContext);
     const handleSubmit = async (event) => {
        event.preventDefault();
        onEdit(book.id, {
            title,
            des,
        });
        ;
            };
            // const handleCancel = () =>{
            //     setTitle(originalTitle);
            //     setDesc(originalDes);
            // }
    //  const tam = useContext(BookContext);
  return (
    <div> 
    
    <h3>Add a book </h3>
    <form onSubmit={handleSubmit} >
      <div className="ppp">  
        <label htmlFor="">Title</label>
        <input onChange={handleChangeTitle} value={title}type="text"id="title" name="title"/>
        <input  onChange={handleChangeDes} value={des}type="text"id="des" name="des"/>
        {/* <button className="input2"onClick={handleCancel}>Cancel</button> */}

        <input type="submit" value="edit" />
        <button>Cancel</button>
      </div>
    </form>
  </div>
);
};
export default BookEdit;