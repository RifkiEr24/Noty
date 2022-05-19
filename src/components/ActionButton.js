import React from 'react';
 
function ActionButton({ id, archived, onChangeArchive }) {
  return <button className={`notes-item__action-button  ${archived ? 'notes-item__action--archived' : 'notes-item__action--active'}`}  onClick={() => onChangeArchive(id)}>{archived ? 'Pindahkan' : 'Arsipkan' }</button>
}
 
export default ActionButton;