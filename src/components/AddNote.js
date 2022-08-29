import React from 'react'
import { useState } from 'react'
const AddNote = ({handleAddNotes}) => {
    const[noteText,setNoteText] = useState('');
    
    const charLimit = 300;

    const handleChange = (e)=>{
        if(charLimit - e.target.value.length>=0)
        {
            setNoteText(e.target.value)
        }
    }

    const triggerBtn = (e)=>{
        if(e.keyCode === 13){
            console.log("triggered")
            handleSaveClick()
        }
    }
    const handleSaveClick = () =>{
        if(noteText.trim().length>0)
        {
            console.log(noteText)
            handleAddNotes(noteText);
            setNoteText("");
        }
    }

    return (
    <div className='add-note'>
            <textarea onChange={handleChange} 
            value = {noteText} 
            rows = "10" 
            cols = "58" 
            className='text-area'
            onKeyDown = {triggerBtn}></textarea>

        <button onClick={handleSaveClick} className = "save-btn" >
            SAVE
        </button>
    </div>
    )
}

export default AddNote