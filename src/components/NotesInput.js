import React from "react";

function NotesInput() {
    return (
        <aside className="notes-input">
            <form className="notes-input__form">
                <h2 className="text-primary">Buat Catatan</h2>
                <div className="notes-input__form-item">
                    <label for="notes-name">
                        Masukkan Judul Catatan
                    </label>
                    <input className="notes-input__form-item__input" id="notes-name" />
                </div>
                <div className="notes-input__form-item">
                    <label for="notes-name">
                        Masukkan Catatan
                    </label>
                    <textarea rows="3" className="notes-input__form-item__input" id="notes-name" />
                </div>

                <button type="submit" className="notes-input__submit">
                    Buat Catatan
                </button>
            </form>
        </aside>
    )
}

export default NotesInput;