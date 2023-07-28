import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useParams, useNavigate } from 'react-router-dom'

export default function EditNote(props) {

    let { id } = useParams()

    const [title, setTitle] = useState(props.notes[id].title)
    const [description, setDescription] = useState(props.notes[id].description)

    let currentDate = new Date()
    let date = currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear()
    let time = currentDate.getHours() + ":" + currentDate.getMinutes()

    let navigator = useNavigate()

    function handleSave(e) {
        e.preventDefault()
        let updatedNote = {
            id: id,
            title: title,
            description: description,
            date: date + ` [${time}]`
        }
        props.setNotesArray((prev) => {
            // return [...prev, props.notes[id]]
            return [...prev.slice(0, id), updatedNote, ...prev.slice(id + 1)]
        })
        navigator('/')
    }

    function handleDelete() {
        let arrayafterdelete = props.notes.filter((value) => {
            return value.id != id
        })
        props.setNotesArray(arrayafterdelete)
        navigator('/')
    }

    return (
        <>
            <section className='createNote'>

                <section className='editNoteHeader'>
                    <Link to="/" className='btn backBtn' > <IoIosArrowBack /> </Link>
                    <div>
                        <button className='saveBtn' onClick={handleSave}>Save</button>
                        <button className='deleteBtn' onClick={handleDelete}>Delete</button>
                    </div>
                </section>
                <form action="" className='titleDesc'>
                    <div><input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='Title' name="" id="" /></div>
                    <div><textarea name="" id="" rows="10" value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder='Description'></textarea></div>
                </form>
            </section>
        </>
    )
}
