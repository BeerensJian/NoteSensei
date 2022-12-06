import { useRef } from 'react';
import * as noteService from '../../services/noteService'

const CreateNote = () => {
    const titleRef = useRef()
    const bodyRef = useRef()

    const createNote = async () => {
        const newNote = await noteService.createNote({ title: titleRef.current.value, body: bodyRef.current.value })
    }

    return (
        <div>
            <label htmlFor="title">Title</label>
            <input ref={titleRef} type="text" id='title' />
            <label htmlFor="body">Body</label>
            <textarea ref={bodyRef} name="" id="body" cols="30" rows="10" />
            <button onClick={createNote}>create</button>
        </div>
    )
}
export default CreateNote;