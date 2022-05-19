import React from 'react';
import { showFormattedDate } from './../utils/index'

import ActionButton from './ActionButton';
import DeleteButton from './DeleteButton';

function NotesItem({ id, title, body, createdAt, archived, onChangeArchive, onDeleteNote }) {
 return (
    <div className={`notes-item ${archived ? 'notes-item--archived' : 'notes-item--active'}`}>
        <DeleteButton id={id} onDeleteNote={onDeleteNote} />
        <h3 className='notes-item__title'>{title}</h3>
        <span className='notes-item__date'>{showFormattedDate(createdAt)}</span>
        <p className='notes-item__description'>{body}</p>
        <ActionButton archived={archived}  id={id} onChangeArchive={onChangeArchive} />
    </div>
 );
}
 
export default NotesItem;