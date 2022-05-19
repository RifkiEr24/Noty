import React from "react";

class NotesInput extends React.Component {
       constructor(props) {
        super(props);
      
        // inisialisasi state
        this.state = {
          title: '',
          body: '',
        }
      
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
      }
      
      onTitleChangeEventHandler(event) {
        if(event.target.value.length <= 50) {
            this.setState((prevState) => {
                return {
                  ...prevState,
                  title: event.target.value,
                }
              });
        }
      }
      
      onBodyChangeEventHandler(event) {
        this.setState((prevState) => {
          return {
            ...prevState,
            body: event.target.value,
          }
        });
      }
      
      onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState({
            title: '',
            body: '',
          });
      }
    render() {
        return (
        <aside className="notes-input">
            <form className="notes-input__form" onSubmit={this.onSubmitEventHandler}>
                <h2 className="text-primary">Buat Catatan</h2>
                <div className="notes-input__form-item">
                    <label htmlFor="notes-name">
                        Masukkan Judul Catatan
                    </label>
                    <input required value={this.state.title} onChange={this.onTitleChangeEventHandler} className="notes-input__form-item__input" id="notes-name" />
                    <span className="notes-name--counter">({this.state.title.length}/50)</span>

                </div>
                <div className="notes-input__form-item">
                    <label htmlFor="notes-body">
                        Masukkan Catatan
                    </label>
                    <textarea required value={this.state.body} onChange={this.onBodyChangeEventHandler} rows="3" className="notes-input__form-item__input" id="notes-body" />
                </div>

                <button type="submit" className="notes-input__submit">
                    Buat Catatan
                </button>
            </form>
        </aside>
        )
    }
}

export default NotesInput;