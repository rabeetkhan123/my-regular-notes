import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import NoteItem from '../Components/NoteItem'
import { Link } from 'react-router-dom'
import { IoIosAdd } from 'react-icons/io'

export default function Notes(props) {

    const [showSearch, setShowSearch] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [filteredNotes, setFilteredNotes] = useState(props.notes)

    let dummyNotes = filteredNotes.map((value) => {
        return <NoteItem key={value.id} value={value} />
    })

    function handleSearch() {
        setFilteredNotes(props.notes.filter((value) => {
            if (value.title.toLowerCase().match(searchText.toLocaleLowerCase())) {
                return value
            }
        }))
    }

    useEffect(handleSearch, [searchText])

    return (
        <>
            <section className='notes'>
                <header className='header'>
                    {!showSearch && <h2>My Notes</h2>}
                    {showSearch && <input className='searchInput' value={searchText} onChange={(e) => { setSearchText(e.target.value) }} type="text" placeholder='Keyword...' autoFocus />}
                    <button className='btn' onClick={() => { setShowSearch((prev) => { return !prev }) }}><CiSearch /></button>
                </header>
                <div className="notesContainer">
                    {dummyNotes}
                </div>
            </section>
            <Link to='/create-note' className='createNoteBtn'>Create</Link>
        </>

    )
}
