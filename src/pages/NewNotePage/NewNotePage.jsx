import { useState } from 'react';

export default function NewNotePage() {
  const [note, setNote] = useState('');

  function handleChange(evt) {
    setNote(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    alert(note)
  }

  return (
    <>
      <h1>New Note</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="text">Text:
          <input type="text" name="note" id="text" onChange={handleChange} />
        </label>
        <input type="submit" value="Add Note" />
      </form>
    </>
  );
}