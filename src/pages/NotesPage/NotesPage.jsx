// import { checkToken } from '../../utilities/users-service';
// import { useEffect, useState } from 'react';

// export default function NotesPage() {
//   const [notes, setNotes] = useState([]);

//   useEffect(function() {
//     async function getNotes() {
//       const notes = await notesService.getAllNotes();
//       setNotes(notes);
//     }
//     getNotes(notes);
  

// }, []);
  

// export default function NotesPage() {
//   async function handleCheckToken() {
//     const expDate = await checkToken();
//     console.log(expDate);
//   }
  
//   return (
//     <>
//       <h1>Notes Page</h1>
//       <button onClick={handleCheckToken}>Check When My Login Expires</button>

//       <h3>No Notes Yet..</h3>
//     </>
//   );
// }

import { checkToken } from "../../utilities/users-service";

export default function NotesPage() {

  async function handleCheckToken() {
    const expDate = await checkToken()
    console.log(expDate)
  }

  return (
    <>
      <h1>Notes Page</h1>
      <button onClick={ handleCheckToken } >Check When My Login Expires</button>

      <h3>No Notes Yet!</h3>
    </>
    
  );
}