import React from 'react'
import TheNotes from './TheNotes'
import styles from '@/styles/Home.module.css'
import {nanoid} from 'nanoid'
import Layout from '../components/Layout'
import Head from 'next/head'
function App() {
  const [notes, setNotes] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('notes')) || [];
    } else {
      return [];
    }
  });
const [editMode, setEditMode] = React.useState(false)
const [inputValue, setInputValue] = React.useState('')
const [editValue, setEditValue] = React.useState('')



React.useEffect(() =>{
  localStorage.setItem('notes', JSON.stringify(notes))


  
},[notes])

function handleInput(event){
  const value = event.target.value
  setInputValue(value)
}


function handleeInput(event){
  const value = event.target.value
  setEditValue(value)
}
function createNotes(event){
  event.preventDefault()
  if(inputValue === "") {
    return;
  }
  const notor = {
      content: inputValue,
      id: nanoid(),
  }
    notes.unshift(notor)
    localStorage.setItem('notes', JSON.stringify(notes))
    setInputValue('');
    const newNoteElement = document.querySelectorAll('all-notes');
    newNoteElement.className = 'notes-div fade-in';

}
function editNote(event, id){
  event.stopPropagation();
   const targetNote = notes.find(note => note.id === id)
        if(targetNote){
          setEditValue(targetNote.content)
            setEditMode(true)
        } 
  deleteNote(event,id)
}
function saveChanges(e){
  e.preventDefault();
    const notor = {
      content: editValue,
      id: nanoid(),
      on: false,
    }
    notes.unshift(notor)
    setEditMode(false);
    localStorage.setItem('notes', JSON.stringify(notes));
}
function deleteNote(event, noteId){
   event.stopPropagation();
   setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
   localStorage.setItem('notes', JSON.stringify(notes.filter(note => note.id !== noteId)))
}

 function toggleChecked(event, id){
  event.stopPropagation()
   setNotes(prevNotes => {
    const newNotes = []
    for(let i = 0; i < prevNotes.length; i ++){
      const currentNote = prevNotes[i]
      if (currentNote.id === id){
        const updatedNotes = {
          ...currentNote, 
          on: !currentNote.on
        }
        newNotes.push(updatedNotes)
        }else {
          newNotes.push(currentNote)
      }
  }
    return newNotes
   } )
 }
 function clearAll(){
   localStorage.clear()
  setNotes([])
 }

const notesEle = notes.map((note, index) => (
  <TheNotes
  key={note.id}
  checkedValue={note.on}
  toggleChecked={toggleChecked}
  id={note.id}
  value={note.content}
  edit={editNote}
  checkedVal={note.on}
  index={index}

  />
))
  return (
    <Layout showHeader={true}>
   
      <div className={styles.App}>
        {editMode ?
         <div className={styles.editDiv}>
            <div className={styles.inputDiv}>
              <input type="text" value={editValue} onChange={handleeInput} className={styles.editInput}/>
              <button className={styles.editSave} onClick={saveChanges} >Save Change</button>
            </div>
        </div>
          :""}
        <form className={styles.formDiv} onSubmit={createNotes} >
          <input
           type="text"
           placeholder="Type your task"
           className={styles.taskInput}
           id="content"
           value={inputValue}
           onChange={handleInput}
           />
          <button className={styles.subBut}>Save</button>
      
      </form>
      <button className={styles.deleteAll}onClick={clearAll}>Delete All Notes</button>
        <div className={styles.allNotes}>
           {notesEle}
           </div>
      </div>
    </Layout>
  );
}

export default App;
