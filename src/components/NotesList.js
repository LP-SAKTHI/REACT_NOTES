import React from 'react'
import AddNote from './AddNote'
import Note from './Note'
const NotesList = ({notes,handleAddNotes,handleDelete}) => {
  return (
    <div className='notes-list-container'>
      <div className='notes-list'>
        <AddNote handleAddNotes={handleAddNotes}/>
        <div className='keerthi'>
        <div className='notes-seperate'>
            
            {
                  notes.map((note)=>
                  <Note id = {note.id} text = {note.text} handleDelete = {handleDelete} date = {note.date}/>
                  )
              }
          
            
              
          </div>
        </div>
          
        
    </div>
    </div>
    
  )
}

export default NotesList