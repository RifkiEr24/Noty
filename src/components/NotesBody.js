import React from 'react';
import  { getInitialData } from '../utils/index'

import NotesInput from './NotesInput';
import NotesSearch from './NotesSearch';
import NotesList from './NotesList';
class NotesBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          allNotes: getInitialData(),
          notes : getInitialData()
        }
      
        // this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
        // this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
        // this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
        this.onChangeArchive = this.onChangeArchive.bind(this);
        this.onDeleteNote = this.onDeleteNote.bind(this);
        this.onAddNote = this.onAddNote.bind(this)
        this.onSearchNote = this.onSearchNote.bind(this)
      }
      onAddNote({ title, body}) {
        this.setState((prevState) => {
          const newData = {
              id: +new Date(),
              title,
              body,
              archived: false,
              createdAt: new Date()
          }
          return {
            allNotes: [
              ...prevState.allNotes,
              newData
            ],
            notes: [
              ...prevState.notes,
              newData
            ]
          }
        });
        
      }
      onChangeArchive(id) {
        const notes = this.state.notes.map(note => {
            return note.id === id ? {
                ...note,
                archived: !note.archived
            } : note
        });

        const allNotes = this.state.allNotes.map(note => {
          return note.id === id ? {
              ...note,
              archived: !note.archived
          } : note
      });

        this.setState(() => {
          return {
            allNotes: allNotes,
            notes: notes
          }
        });

      }

      onSearchNote(keyword) {
        const notes = this.state.allNotes.filter(note => {
          return note.title.toLowerCase().includes(keyword.toLowerCase())
        })
        
        this.setState((prevState) => {
          return {
            ...prevState,
            notes: notes
          }
        });
        
      }

      onDeleteNote(id) {
        
        const notes = this.state.notes.filter(note => {
            return note.id !== id
        })

        const allNotes = this.state.allNotes.filter(note => {
          return note.id !== id
      })
        
        this.setState(() => {
          return {
            allNotes: allNotes,
            notes: notes
          }
        });


      }

      render() {
          return (
              <div className='notes-app__body'>
                  <NotesInput addNote={this.onAddNote} />
                  <div className='notes-content'>
                      <NotesSearch onSearchNote={this.onSearchNote} />
                      <NotesList onChangeArchive={this.onChangeArchive} onDeleteNote={this.onDeleteNote} notes={this.state.notes} isArchived={false} />
                      <NotesList onChangeArchive={this.onChangeArchive} onDeleteNote={this.onDeleteNote} notes={this.state.notes} isArchived={true}/>
                  </div>
              </div>
            
          );
      }
}
 
export default NotesBody;
