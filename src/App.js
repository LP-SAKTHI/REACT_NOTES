import {useState, useEffect} from "react"
import {nanoid} from "nanoid"
import NotesList from "./components/NotesList";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
    const [notes,setNotes] = useState([
      {
        id:nanoid(),
        text:"React notes app",
        date:"03/11/2021"
      },
      {
        id:nanoid(),
        text:"Press Enter to save",
        date:"03/11/2021"
      },
      {
        id:nanoid(),
        text:"start creating your notes..",
        date:"03/11/2021"
      }
    ]);
    const [searchNote,setSearchNote] = useState("");
    const [darkMode,setDarkMode] = useState(false);

console.log(darkMode);
    // useEffect(()=>{
    //   const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    //   if(savedNotes){
    //     setNotes(savedNotes)
    //   }
    // },[]);
    useEffect(()=>{
      const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
      if(savedNotes){
        setNotes(savedNotes)
      }
    },[])

    useEffect(()=>{
      localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
    },[notes])

    const addNote = (text)=>{
      const date = new Date()
      const newNote = {
        id:nanoid(),
        text:text,
        date:date.toLocaleDateString()
      }
      console.log(newNote)
      const newNotes = [...notes,newNote];
      setNotes(newNotes)
    }

    const deletingData = (id)=>{
      const newNotes = notes.filter((note)=>note.id !== id)
      setNotes(newNotes)
    }
  return (
    
    <div className= {`${darkMode && "dark-mode"}`}>
      <div className = "container">
    <Header handleDarkMode = {setDarkMode}/> 
    <Search handleSearch={setSearchNote}/>
    <NotesList 
    notes = {notes.filter((note)=>note.text.toLowerCase().includes(searchNote))} 
    handleAddNotes={addNote} handleDelete = {deletingData}/>
      </div>
      
    </div>
  );
}

export default App;
