import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateNote from './Pages/CreateNote'
import Notes from './Pages/Notes'
import EditNote from './Pages/EditNote'
import DummyNotes from './DummyNotes'

export default function App() {

  let [notesArray, setNotesArray] = useState(JSON.parse(localStorage.getItem('notes')) || [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notesArray))
  }, [notesArray])

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Notes notes={DummyNotes} />} /> */}
        <Route path='/' element={<Notes notes={notesArray} />} />
        <Route path='/create-note' element={<CreateNote setNotesArray={setNotesArray} />} />
        <Route path='/edit-note/:id' element={<EditNote notes={notesArray} setNotesArray={setNotesArray} />} />
      </Routes>
    </BrowserRouter>
  )
}
