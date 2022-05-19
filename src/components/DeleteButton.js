import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DeleteButton({ id, onDeleteNote }) {
  return (
    <button className='notes-item__delete-button' onClick={() =>onDeleteNote(id)}>
        <FontAwesomeIcon icon="fa-solid fa-x" />
    </button>
  )
}
 
export default DeleteButton;