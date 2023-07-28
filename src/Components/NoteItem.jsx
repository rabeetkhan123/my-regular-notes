import React from 'react'
import { Link } from 'react-router-dom'

export default function NoteItem(props) {
    return (
        <Link to={`/edit-note/${props.value.id}`}>
            <div className='noteItem'>
                <h4>{props.value.title.length > 40 ? props.value.title.slice(0, 40) + "..." : props.value.title}</h4>
                <p>{props.value.date}</p>
            </div>

        </Link>
    )
}
