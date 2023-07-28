import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'

export default function CreateNote(props) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    let navigator = useNavigate()

    let currentDate = new Date()
    let date = currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear()
    let time = currentDate.getHours() + ":" + currentDate.getMinutes()

    function handleSave() {
        props.setNotesArray((prev) => {
            return [...prev, { id: prev.length, title: title, description: description, date: date + ` [${time}]` }]
        })
        navigator('/')
    }

    return (
        <>
            <section className='createNote'>

                <section className='createNoteHeader'>
                    <Link to="/" className='btn backBtn' > <IoIosArrowBack /> </Link>
                    <button className='saveBtn' onClick={handleSave}>Save</button>
                </section>
                <form action="" className='titleDesc'>
                    <div><input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder='Title' name="" id="" /></div>
                    <div><textarea value={description} onChange={(e) => { setDescription(e.target.value) }} name="" id="" rows="10" placeholder='Description'></textarea></div>
                </form>
            </section>
        </>
    )
}
