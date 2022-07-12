import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Notes from './Notes';
import CreateArea from './CreateArea';


function App() {

  const [notes, setNotes] = React.useState([]);

  function addNote(newNote){
    setNotes(prevNote =>{
     return [...prevNote, newNote];
    })
  }

  function deleteNote(id){
    setNotes(function (prevNotes){
     return prevNotes.filter(function (noteItem,index){
        return index!== id;
      })
    })
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem,index) => {
        return <Notes key = {index} id = {index} title = {noteItem.title} content = {noteItem.content} onDelete={deleteNote}/>;
      })}
       
      <Footer />
    </>
  );
}

export default App;
