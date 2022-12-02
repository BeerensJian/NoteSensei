const CreateNote = () => {
    return (
        <div>
            <label htmlFor="title">Title</label>
            <input type="text" id='title' />
            <label htmlFor="body">Body</label>
            <textarea name="" id="body" cols="30" rows="10" />
        </div>
    )
}
export default CreateNote;