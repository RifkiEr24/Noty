import React from 'react';
 
import NotesInput from './NotesInput';
import NotesContent from './NotesContent';

function NotesBody() {
 return (
   <div className='notes-app__body'>
       <NotesInput />
       <NotesContent />
   </div>
 );
}
 
export default NotesBody;
