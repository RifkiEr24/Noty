import React from "react";

import NotesItem from "./NotesItem";
import EmptyState from "./EmptyState";

function NotesList({ notes, isArchived, onChangeArchive, onDeleteNote }) {
    let notesItem = notes.filter(note => {
        return note.archived === isArchived
    })

    return (
        <>
        <h2 className='notes-list__header text-primary'>{isArchived ? 'Arsip' : 'Catatan Aktif'}</h2>
        <div className="notes-list">
            {
                notesItem.length ? notesItem.map((note) => {
                   return <NotesItem key={note.id} id={note.id} onDeleteNote={onDeleteNote} onChangeArchive={onChangeArchive} {...note}/>
                }) : <EmptyState />
            }
        </div>
      </>
    );
   }
    
   export default NotesList;
   