import React from 'react';

class NotesSearch extends React.Component {
    constructor(props) {
        super(props);
      
        this.onSearchChange = this.onSearchChange.bind(this)
    }

    onSearchChange (event) {
        this.props.onSearchNote(event.target.value)
    }

    render() {
        return (
            <div className="notes-input__form-item notes-input__form-item--search">
                <input className="notes-input__form-item__input" placeholder='Cari Catatan Disini' onChange={this.onSearchChange} id="notes-search" />
            </div>
        )
    }
}
 
export default NotesSearch;