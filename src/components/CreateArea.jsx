import React from "react";

function CreateArea(props) {
    const [note,setNote] = React.useState({
        title: "",
        content: ""
    });
    function handleNote(event){
        const {name,value} = event.target;
        setNote(function (prevValue){
          return {
            ...prevValue,
            [name] : value 
          };
        });
      }
    function handleClick(event){
        props.onAdd(note); 
        setNote({
          title:"",
          content:""
        })
        event.preventDefault();
    }
  return (
    <div>
      <form>
        <input name="title" value={note.title} onChange={handleNote} placeholder="Title" />
        <textarea name="content" value={note.content} onChange={handleNote} placeholder="Take a note..." rows="3" />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
